!function(){"use strict";var o=window.location,l=window.document,c=l.currentScript,u=c.getAttribute("data-api")||new URL(c.src).origin+"/api/event";function p(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag")}catch(t){}var a={};a.n=t,a.u=e&&e.u?e.u:o.href,a.d=c.getAttribute("data-domain"),a.r=l.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var r=c.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),n=a.p||{};r.forEach(function(t){var e=t.replace("event-",""),a=c.getAttribute(t);n[e]=n[e]||a}),a.p=n,a.h=1;var i=new XMLHttpRequest;i.open("POST",u,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a=0;a<e.length;a++)t.apply(this,e[a]);var r=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],n=c.getAttribute("file-types"),i=c.getAttribute("add-file-types"),s=n&&n.split(",")||i&&i.split(",").concat(r)||r;function d(t){for(var e="auxclick"===t.type&&2===t.which,a="click"===t.type,r=t.target;r&&(void 0===r.tagName||"a"!==r.tagName.toLowerCase()||!r.href);)r=r.parentNode;var n,i,o,l,c=r&&r.href&&r.href.split("?")[0];function u(){!o||i||l||(l=!0,window.location=r.href)}c&&(n=c.split(".").pop(),s.some(function(t){return t===n}))&&(e||a)&&(i=t.defaultPrevented,o=(!r.target||r.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&a,l=!1,o&&!i&&(t.preventDefault(),setTimeout(u,1e3)),plausible("File Download",{props:{url:c},callback:u}))}function f(t){for(var e,a,r,n="auxclick"===t.type&&2===t.which,i="click"===t.type,o=t.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||e||r||(r=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(n||i)&&(e=t.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&i,r=!1,a&&!e&&(t.preventDefault(),setTimeout(l,1e3)),v(o,l))}function v(t,e){var a=t.getAttribute("data-event-name"),r=function(t){for(var e={},a=0;a<t.length;a++){var r,n=t[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(r=n.replace("data-event-",""),e[r]=t[a].value)}return e}(t.attributes);t.href&&(r.url=t.href),plausible(a,{props:r,callback:e})}l.addEventListener("click",d),l.addEventListener("auxclick",d),l.addEventListener("submit",function(t){var e,a;function r(){e||a||(a=!0,t.target.submit())}t.target.getAttribute("data-event-name")&&(e=t.defaultPrevented,a=!1,e||(t.preventDefault(),setTimeout(r,1e3)),v(t.target,r))}),l.addEventListener("click",f),l.addEventListener("auxclick",f)}();