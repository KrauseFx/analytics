!function(){"use strict";var e,t,a,c=window.location,o=window.document,l=o.getElementById("plausible"),u=l.getAttribute("data-api")||(e=l.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function s(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(e){}var a={};a.n=e,a.u=c.href,a.d=l.getAttribute("data-domain"),a.r=o.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props);var n=l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),i=a.p||{};n.forEach(function(e){var t=e.replace("event-",""),a=l.getAttribute(e);i[t]=i[t]||a}),a.p=i,a.h=1;var r=new XMLHttpRequest;r.open("POST",u,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback()}}}var i=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,d=0;d<i.length;d++)n.apply(this,i[d]);function f(){r=c.pathname,n("pageview")}function p(e){for(var t,a,n,i="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||n||(n=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==c.host&&(i||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,n=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}function v(e){for(var t,a,n,i="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(i||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,n=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),g(o,l))}function g(e,t){var a=e.getAttribute("data-event-name"),n=function(e){for(var t={},a=0;a<e.length;a++){var n,i=e[a].name;"data-event-"===i.substring(0,11)&&"data-event-name"!==i&&(n=i.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(n.url=e.href),plausible(a,{props:n,callback:t})}window.addEventListener("hashchange",f),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){r||"visible"!==o.visibilityState||f()}):f(),o.addEventListener("click",p),o.addEventListener("auxclick",p),o.addEventListener("submit",function(e){var t,a;function n(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(n,1e3)),g(e.target,n))}),o.addEventListener("click",v),o.addEventListener("auxclick",v)}();