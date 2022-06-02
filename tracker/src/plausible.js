(function(){
  'use strict';

  var location = window.location
  var document = window.document

  {{#if compat}}
  var scriptEl = document.getElementById('plausible');
  {{else}}
  var scriptEl = document.currentScript;
  {{/if}}
  var endpoint = scriptEl.getAttribute('data-api') || defaultEndpoint(scriptEl)

  function warn(reason) {
    console.warn('Ignoring Event: ' + reason);
  }

  function defaultEndpoint(el) {
    {{#if compat}}
    var pathArray = el.src.split( '/' );
    var protocol = pathArray[0];
    var host = pathArray[2];
    return protocol + '//' + host  + '/api/event';
    {{else}}
    return new URL(el.src).origin + '/api/event'
    {{/if}}
  }


  function trigger(eventName, options) {
    {{#unless local}}
    if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(location.hostname) || location.protocol === 'file:') return warn('localhost');
    {{/unless}}
    if (window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress) return;
    try {
      if (window.localStorage.plausible_ignore === 'true') {
        return warn('localStorage flag')
      }
    } catch (e) {

    }
    {{#if exclusions}}
    var dataIncludeAttr = scriptEl && scriptEl.getAttribute('data-include')  
    var dataExcludeAttr = scriptEl && scriptEl.getAttribute('data-exclude')

    if (eventName === 'pageview') {
      var isIncluded = !dataIncludeAttr || (dataIncludeAttr && dataIncludeAttr.split(',').some(pathMatches))
      var isExcluded = dataExcludeAttr && dataExcludeAttr.split(',').some(pathMatches)

      if (!isIncluded || isExcluded) return warn('exclusion rule')
    }

    function pathMatches(wildcardPath) {
      return location.pathname.match(new RegExp('^' + wildcardPath.trim().replace(/\*\*/g, '.*').replace(/([^\.])\*/g, '$1[^\\s\/]*') + '\/?$'))
    }
    {{/if}}

    var payload = {}
    payload.n = eventName
    {{#if manual}}
    payload.u = options && options.u ? options.u : location.href
    {{else}}
    payload.u = location.href
    {{/if}}
    payload.d = scriptEl.getAttribute('data-domain')
    payload.r = document.referrer || null
    payload.w = window.innerWidth
    if (options && options.meta) {
      payload.m = JSON.stringify(options.meta)
    }
    if (options && options.props) {
      payload.p = options.props
    }

    {{#if dimensions}}
    var dimensionAttributes = scriptEl.getAttributeNames().filter(function (name) {
      return name.substring(0, 6) === 'event-'
    })

    var props = payload.p || {}

    dimensionAttributes.forEach(function(attribute) {
      var propKey = attribute.replace('event-', '')
      var propValue = scriptEl.getAttribute(attribute)
      props[propKey] = props[propKey] || propValue
    })

    payload.p = props
    {{/if}}

    {{#if hash}}
    payload.h = 1
    {{/if}}

    var request = new XMLHttpRequest();
    request.open('POST', endpoint, true);
    request.setRequestHeader('Content-Type', 'text/plain');

    request.send(JSON.stringify(payload));

    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        options && options.callback && options.callback()
      }
    }
  }

  var queue = (window.plausible && window.plausible.q) || []
  window.plausible = trigger
  for (var i = 0; i < queue.length; i++) {
    trigger.apply(this, queue[i])
  }

  {{#unless manual}}
    var lastPage;

    function page() {
      {{#unless hash}}
      if (lastPage === location.pathname) return;
      {{/unless}}
      lastPage = location.pathname
      trigger('pageview')
    }

    {{#if hash}}
    window.addEventListener('hashchange', page)
    {{else}}
    var his = window.history
    if (his.pushState) {
      var originalPushState = his['pushState']
      his.pushState = function() {
        originalPushState.apply(this, arguments)
        page();
      }
      window.addEventListener('popstate', page)
    }
    {{/if}}

    function handleVisibilityChange() {
      if (!lastPage && document.visibilityState === 'visible') {
        page()
      }
    }


    if (document.visibilityState === 'prerender') {
      document.addEventListener('visibilitychange', handleVisibilityChange);
    } else {
      page()
    }
  {{/unless}}

  // BELOW ARE THE SCRIPT EXTENSIONS FOR CUSTOM EVENT TRACKING

  {{#if outbound_links}}
  function handleOutbound(event) {
    var middle = event.type === 'auxclick' && event.which === 2
    var click = event.type === 'click'
    
    var link = event.target
    while(link && (typeof link.tagName === 'undefined' || link.tagName.toLowerCase() !== 'a' || !link.href)) {
      link = link.parentNode
    }

    var isOutbound = link && link.href && link.host && link.host !== location.host
    if (!isOutbound || !(middle || click)) { return }

    var defaultAlreadyPrevented = event.defaultPrevented
    var targetsThisWindow = !link.target || link.target.match(/^_(self|parent|top)$/i)
    var opensInThisWindow = targetsThisWindow && !(event.ctrlKey || event.metaKey || event.shiftKey) && click
    var linkOpened = false

    function openLink() {
      if (opensInThisWindow && !defaultAlreadyPrevented && !linkOpened) {
        linkOpened = true
        window.location = link.href
      }
    }

    // Delay navigation so that Plausible is notified of the click
    if (opensInThisWindow && !defaultAlreadyPrevented) {
      event.preventDefault()
      setTimeout(openLink, 1000)
    }

    plausible('Outbound Link: Click', {props: {url: link.href}, callback: openLink})
  }

  document.addEventListener('click', handleOutbound)
  document.addEventListener('auxclick', handleOutbound)
  {{/if}}

  {{#if file_downloads}}
  var defaultFileTypes = ['pdf', 'xlsx', 'docx', 'txt', 'rtf', 'csv', 'exe', 'key', 'pps', 'ppt', 'pptx', '7z', 'pkg', 'rar', 'gz', 'zip', 'avi', 'mov', 'mp4', 'mpeg', 'wmv', 'midi', 'mp3', 'wav', 'wma']
  var fileTypesAttr = scriptEl.getAttribute('file-types')
  var addFileTypesAttr = scriptEl.getAttribute('add-file-types')
  var fileTypesToTrack = (fileTypesAttr && fileTypesAttr.split(",")) || (addFileTypesAttr && addFileTypesAttr.split(",").concat(defaultFileTypes)) || defaultFileTypes;

  function handleDownload(event) {
    var middle = event.type === 'auxclick' && event.which === 2
    var click = event.type === 'click'
    
    var link = event.target
    while(link && (typeof link.tagName === 'undefined' || link.tagName.toLowerCase() !== 'a' || !link.href)) {
      link = link.parentNode
    }

    var linkHref = link && link.href && link.href.split('?')[0]
    var shouldTrackDownload = linkHref && isDownloadToTrack(linkHref)
    if (!shouldTrackDownload || !(middle || click)) { return }
    
    var defaultAlreadyPrevented = event.defaultPrevented
    var targetsThisWindow = !link.target || link.target.match(/^_(self|parent|top)$/i)
    var opensInThisWindow = targetsThisWindow && !(event.ctrlKey || event.metaKey || event.shiftKey) && click
    var linkOpened = false

    function openLink() {
      if (opensInThisWindow && !defaultAlreadyPrevented && !linkOpened) {
        linkOpened = true
        window.location = link.href
      }
    }

    // Delay navigation so that Plausible is notified of the download
    if (opensInThisWindow && !defaultAlreadyPrevented) {
      event.preventDefault()
      setTimeout(openLink, 1000)
    }

    plausible('File Download', {props: {url: linkHref}, callback: openLink})
  }

  function isDownloadToTrack(url) {
    var fileType = url.split('.').pop()
    return fileTypesToTrack.some(function(fileTypeToTrack) {
      return fileTypeToTrack === fileType
    })
  }

  document.addEventListener('click', handleDownload)
  document.addEventListener('auxclick', handleDownload)
  {{/if}}

  {{#if tagged_events}}
  function handleTaggedFormSubmit(event) {
    if (!event.target.getAttribute('data-event-name')) { return }

    var defaultAlreadyPrevented = event.defaultPrevented
    var formSubmitted = false

    function submitForm() {
      if (!defaultAlreadyPrevented && !formSubmitted) {
        formSubmitted = true
        event.target.submit()
      }
    }

    if (!defaultAlreadyPrevented) {
      event.preventDefault()
      setTimeout(submitForm, 1000)
    }

    sendTaggedEvent(event.target, submitForm)
  }

  function handleTaggedLinkClick(event) {  
    var middle = event.type === 'auxclick' && event.which === 2
    var click = event.type === 'click'

    var link = event.target
    while (link && (typeof link.tagName === 'undefined' || link.tagName.toLowerCase() !== 'a' || !link.href)) {
      link = link.parentNode
    }

    var isTaggedLink = link && !!link.getAttribute('data-event-name')
    if (!isTaggedLink || !(middle || click)) { return }

    var defaultAlreadyPrevented = event.defaultPrevented
    var targetsThisWindow = !link.target || link.target.match(/^_(self|parent|top)$/i)
    var opensInThisWindow = targetsThisWindow && !(event.ctrlKey || event.metaKey || event.shiftKey) && click
    var linkOpened = false

    function openLink() {
      if (opensInThisWindow && !defaultAlreadyPrevented && !linkOpened) {
        linkOpened = true
        window.location = link.href
      }
    }

    // Delay navigation so that Plausible is notified of the click
    if (opensInThisWindow && !defaultAlreadyPrevented) {
      event.preventDefault()
      setTimeout(openLink, 1000)
    }

    sendTaggedEvent(link, openLink)
  }

  function sendTaggedEvent(targetEl, callback) {
    var eventName = targetEl.getAttribute('data-event-name')
    var eventProps = getEventProps(targetEl.attributes)
    if (targetEl.href) { eventProps['url'] = targetEl.href }

    plausible(eventName, { props: eventProps, callback: callback })
  }

  function getEventProps(attributes) {
    var eventProps = {}
    for (var i = 0; i < attributes.length; i++) {
        var propName = attributes[i].name
        if (propName.substring(0, 11) === 'data-event-' && propName !== 'data-event-name') {
            var formattedPropName = propName.replace('data-event-', '')
            eventProps[formattedPropName] = attributes[i].value
        }
    }
    return eventProps
  }

  document.addEventListener('submit', handleTaggedFormSubmit)
  document.addEventListener('click', handleTaggedLinkClick)
  document.addEventListener('auxclick', handleTaggedLinkClick)
  {{/if}}
})();
