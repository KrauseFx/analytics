!function(){"use strict";var e,t,a,s=window.location,d=window.document,f=d.getElementById("plausible"),v=f.getAttribute("data-api")||(e=f.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function g(e){console.warn("Ignoring Event: "+e)}function r(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var a=f&&f.getAttribute("data-include"),r=f&&f.getAttribute("data-exclude");if("pageview"===e){var n=!a||a&&a.split(",").some(p),i=r&&r.split(",").some(p);if(!n||i)return g("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:s.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),u=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),a=f.getAttribute(e);u[t]=u[t]||a}),o.p=u,o.h=1;var c=new XMLHttpRequest;c.open("POST",v,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function p(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var n=window.plausible&&window.plausible.q||[];window.plausible=r;for(var i=0;i<n.length;i++)r.apply(this,n[i]);var o=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],l=f.getAttribute("file-types"),u=f.getAttribute("add-file-types"),p=l&&l.split(",")||u&&u.split(",").concat(o)||o;function c(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,r=e.target;r&&(void 0===r.tagName||"a"!==r.tagName.toLowerCase()||!r.href);)r=r.parentNode;var n,i,o,l,u=r&&r.href&&r.href.split("?")[0];function c(){!o||i||l||(l=!0,window.location=r.href)}u&&(n=u.split(".").pop(),p.some(function(e){return e===n}))&&(t||a)&&(i=e.defaultPrevented,o=(!r.target||r.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!i&&(e.preventDefault(),setTimeout(c,1e3)),plausible("File Download",{props:{url:u},callback:c}))}function m(e){for(var t,a,r,n="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||r||(r=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(n||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,r=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),w(o,l))}function w(e,t){var a=e.getAttribute("data-event-name"),r=function(e){for(var t={},a=0;a<e.length;a++){var r,n=e[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(r=n.replace("data-event-",""),t[r]=e[a].value)}return t}(e.attributes);e.href&&(r.url=e.href),plausible(a,{props:r,callback:t})}d.addEventListener("click",c),d.addEventListener("auxclick",c),d.addEventListener("submit",function(e){var t,a;function r(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(r,1e3)),w(e.target,r))}),d.addEventListener("click",m),d.addEventListener("auxclick",m)}();