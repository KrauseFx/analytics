!function(){"use strict";var e,t,a,u=window.location,o=window.document,l=o.getElementById("plausible"),c=l.getAttribute("data-api")||(e=l.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function s(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(e){}var a={};a.n=e,a.u=t&&t.u?t.u:u.href,a.d=l.getAttribute("data-domain"),a.r=o.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props);var n=l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),r=a.p||{};n.forEach(function(e){var t=e.replace("event-",""),a=l.getAttribute(e);r[t]=r[t]||a}),a.p=r,a.h=1;var i=new XMLHttpRequest;i.open("POST",c,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback()}}}var r=window.plausible&&window.plausible.q||[];window.plausible=n;for(var i=0;i<r.length;i++)n.apply(this,r[i]);function d(e){for(var t,a,n,r="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||n||(n=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==u.host&&(r||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,n=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}function f(e){for(var t,a,n,r="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(r||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,n=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),p(o,l))}function p(e,t){var a=e.getAttribute("data-event-name"),n=function(e){for(var t={},a=0;a<e.length;a++){var n,r=e[a].name;"data-event-"===r.substring(0,11)&&"data-event-name"!==r&&(n=r.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(n.url=e.href),plausible(a,{props:n,callback:t})}o.addEventListener("click",d),o.addEventListener("auxclick",d),o.addEventListener("submit",function(e){var t,a;function n(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(n,1e3)),p(e.target,n))}),o.addEventListener("click",f),o.addEventListener("auxclick",f)}();