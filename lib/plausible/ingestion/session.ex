defmodule Plausible.Ingestion.Session do
  @moduledoc """
  The Session actor is a short-lived process spawned for each incoming session. The process self
  destructs after 30 minutes from the first event.
  """

  require Logger
  use GenServer

  @expire_after :timer.minutes(30)

  def send_events(requests) do
    Enum.each(requests, fn request ->
      user_id = Plausible.Ingestion.Event.get_user_id(request)
      pid = Plausible.Ingestion.SessionDynamicSupervisor.find_or_spawn(request.domain, user_id)

      GenServer.cast(pid, {:send_event, request})
    end)
  end

  defmodule State do
    defstruct [:domain, :user_id, :session]

    @type t() :: %__MODULE__{
            domain: String.t(),
            user_id: integer(),
            session: %Plausible.ClickhouseSession{}
          }
  end

  def start_link({domain, user_id}) do
    process_name = {:via, Registry, {Plausible.Ingestion.SessionRegistry, {domain, user_id}}}
    GenServer.start_link(__MODULE__, {domain, user_id}, name: process_name)
  end

  @impl true
  def init({domain, user_id}) do
    Logger.debug("Ingestion: Starting new session for #{domain}@#{user_id}")
    Process.send_after(self(), :expire, @expire_after)

    {:ok, %State{domain: domain, user_id: user_id}}
  end

  @impl true
  def handle_cast({:send_event, %Plausible.Ingestion.Request{} = request}, %State{} = state) do
    Logger.debug("Ingestion: Processing new event for session #{state.domain}@#{state.user_id}")

    with {:ok, event} <- Plausible.Ingestion.Event.build(request),
         session <- upsert_session(state.session, event),
         event <- %Plausible.ClickhouseEvent{event | session_id: session.session_id},
         {:ok, _event} <- Plausible.Event.WriteBuffer.insert(event) do
      {:noreply, %State{state | session: session}}
    else
      :skip ->
        Logger.debug("Ingestion: Skipping spam/bot event")
        {:noreply, state}

      {:error, changeset} ->
        Logger.error("Ingestion: Failed to insert event. Reason: #{inspect(changeset)}")
        {:noreply, state}
    end
  end

  @impl true
  def handle_info(:expire, state) do
    Logger.debug("Ingestion: Self destructing #{state.domain}@#{state.user_id} due to inactivity")
    {:stop, :normal, state}
  end

  defp upsert_session(nil = _session, event) do
    session = %Plausible.ClickhouseSession{
      sign: 1,
      session_id: Plausible.ClickhouseSession.random_uint64(),
      hostname: event.hostname,
      domain: event.domain,
      user_id: event.user_id,
      entry_page: event.pathname,
      exit_page: event.pathname,
      is_bounce: true,
      duration: 0,
      pageviews: if(event.name == "pageview", do: 1, else: 0),
      events: 1,
      referrer: event.referrer,
      referrer_source: event.referrer_source,
      utm_medium: event.utm_medium,
      utm_source: event.utm_source,
      utm_campaign: event.utm_campaign,
      utm_content: event.utm_content,
      utm_term: event.utm_term,
      country_code: event.country_code,
      subdivision1_code: event.subdivision1_code,
      subdivision2_code: event.subdivision2_code,
      city_geoname_id: event.city_geoname_id,
      screen_size: event.screen_size,
      operating_system: event.operating_system,
      operating_system_version: event.operating_system_version,
      browser: event.browser,
      browser_version: event.browser_version,
      timestamp: event.timestamp,
      start: event.timestamp,
      "entry_meta.key": Map.get(event, :"meta.key"),
      "entry_meta.value": Map.get(event, :"meta.value")
    }

    {:ok, [session]} = Plausible.Session.WriteBuffer.insert([session])

    session
  end

  defp upsert_session(old_session, event) do
    updated = %{
      old_session
      | user_id: event.user_id,
        timestamp: event.timestamp,
        exit_page: event.pathname,
        is_bounce: false,
        duration: Timex.diff(event.timestamp, old_session.start, :second) |> abs,
        pageviews:
          if(event.name == "pageview", do: old_session.pageviews + 1, else: old_session.pageviews),
        country_code:
          if(old_session.country_code == "",
            do: event.country_code,
            else: old_session.country_code
          ),
        subdivision1_code:
          if(old_session.subdivision1_code == "",
            do: event.subdivision1_code,
            else: old_session.subdivision1_code
          ),
        subdivision2_code:
          if(old_session.subdivision2_code == "",
            do: event.subdivision2_code,
            else: old_session.subdivision2_code
          ),
        city_geoname_id:
          if(old_session.city_geoname_id == 0,
            do: event.city_geoname_id,
            else: old_session.city_geoname_id
          ),
        operating_system:
          if(old_session.operating_system == "",
            do: event.operating_system,
            else: old_session.operating_system
          ),
        operating_system_version:
          if(old_session.operating_system_version == "",
            do: event.operating_system_version,
            else: old_session.operating_system_version
          ),
        browser: if(old_session.browser == "", do: event.browser, else: old_session.browser),
        browser_version:
          if(old_session.browser_version == "",
            do: event.browser_version,
            else: old_session.browser_version
          ),
        screen_size:
          if(old_session.screen_size == "", do: event.screen_size, else: old_session.screen_size),
        events: old_session.events + 1
    }

    {:ok, [updated_session, _old_session]} =
      Plausible.Session.WriteBuffer.insert([%{updated | sign: 1}, %{old_session | sign: -1}])

    updated_session
  end
end
