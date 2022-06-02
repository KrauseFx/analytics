!function(){"use strict";var t,e,a,c=window.location,o=window.document,l=o.getElementById("plausible"),s=l.getAttribute("data-api")||(t=l.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function u(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return u("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return u("localStorage flag")}catch(t){}var a={};a.n=t,a.u=e&&e.u?e.u:c.href,a.d=l.getAttribute("data-domain"),a.r=o.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var n=l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),r=a.p||{};n.forEach(function(t){var e=t.replace("event-",""),a=l.getAttribute(t);r[e]=r[e]||a}),a.p=r;var i=new XMLHttpRequest;i.open("POST",s,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}var r=window.plausible&&window.plausible.q||[];window.plausible=n;for(var i=0;i<r.length;i++)n.apply(this,r[i]);function p(t){for(var e,a,n,r="auxclick"===t.type&&2===t.which,i="click"===t.type,o=t.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||e||n||(n=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==c.host&&(r||i)&&(e=t.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&i,n=!1,a&&!e&&(t.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}o.addEventListener("click",p),o.addEventListener("auxclick",p)}();