!function(){"use strict";var e,t,a,c=window.location,s=window.document,d=s.getElementById("plausible"),p=d.getAttribute("data-api")||(e=d.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function f(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var a=d&&d.getAttribute("data-include"),n=d&&d.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(u),i=n&&n.split(",").some(u);if(!r||i)return f("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:c.href,o.d=d.getAttribute("data-domain"),o.r=s.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=new XMLHttpRequest;l.open("POST",p,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function u(e){return c.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var r=window.plausible&&window.plausible.q||[];window.plausible=n;for(var i=0;i<r.length;i++)n.apply(this,r[i]);function o(e){for(var t,a,n,r="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||n||(n=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==c.host&&(r||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,n=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}function l(e){for(var t,a,n,r="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(r||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,n=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),u(o,l))}function u(e,t){var a=e.getAttribute("data-event-name"),n=function(e){for(var t={},a=0;a<e.length;a++){var n,r=e[a].name;"data-event-"===r.substring(0,11)&&"data-event-name"!==r&&(n=r.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(n.url=e.href),plausible(a,{props:n,callback:t})}s.addEventListener("click",o),s.addEventListener("auxclick",o),s.addEventListener("submit",function(e){var t,a;function n(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(n,1e3)),u(e.target,n))}),s.addEventListener("click",l),s.addEventListener("auxclick",l)}();