!function(){"use strict";var e,t,a,d=window.location,p=window.document,f=p.getElementById("plausible"),g=f.getAttribute("data-api")||(e=f.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function v(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(d.hostname)||"file:"===d.protocol)return v("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return v("localStorage flag")}catch(e){}var a=f&&f.getAttribute("data-include"),n=f&&f.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(s),i=n&&n.split(",").some(s);if(!r||i)return v("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:d.href,o.d=f.getAttribute("data-domain"),o.r=p.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),u=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),a=f.getAttribute(e);u[t]=u[t]||a}),o.p=u;var c=new XMLHttpRequest;c.open("POST",g,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function s(e){return d.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var r=window.plausible&&window.plausible.q||[];window.plausible=n;for(var i=0;i<r.length;i++)n.apply(this,r[i]);function o(e){for(var t,a,n,r="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(r||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,n=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),u(o,l))}function u(e,t){var a=e.getAttribute("data-event-name"),n=function(e){for(var t={},a=0;a<e.length;a++){var n,r=e[a].name;"data-event-"===r.substring(0,11)&&"data-event-name"!==r&&(n=r.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(n.url=e.href),plausible(a,{props:n,callback:t})}p.addEventListener("submit",function(e){var t,a;function n(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(n,1e3)),u(e.target,n))}),p.addEventListener("click",o),p.addEventListener("auxclick",o)}();