!function(){"use strict";var t,e,a,o=window.location,l=window.document,p=l.getElementById("plausible"),s=p.getAttribute("data-api")||(t=p.src.split("/"),e=t[0],a=t[2],e+"//"+a+"/api/event");function c(t){console.warn("Ignoring Event: "+t)}function i(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return c("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return c("localStorage flag")}catch(t){}var a={};a.n=t,a.u=e&&e.u?e.u:o.href,a.d=p.getAttribute("data-domain"),a.r=l.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var i=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),r=a.p||{};i.forEach(function(t){var e=t.replace("event-",""),a=p.getAttribute(t);r[e]=r[e]||a}),a.p=r;var n=new XMLHttpRequest;n.open("POST",s,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4===n.readyState&&e&&e.callback&&e.callback()}}}var r=window.plausible&&window.plausible.q||[];window.plausible=i;for(var n=0;n<r.length;n++)i.apply(this,r[n]);var u=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],d=p.getAttribute("file-types"),f=p.getAttribute("add-file-types"),w=d&&d.split(",")||f&&f.split(",").concat(u)||u;function g(t){for(var e="auxclick"===t.type&&2===t.which,a="click"===t.type,i=t.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var r,n,o,l,p=i&&i.href&&i.href.split("?")[0];function s(){!o||n||l||(l=!0,window.location=i.href)}p&&(r=p.split(".").pop(),w.some(function(t){return t===r}))&&(e||a)&&(n=t.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&a,l=!1,o&&!n&&(t.preventDefault(),setTimeout(s,1e3)),plausible("File Download",{props:{url:p},callback:s}))}l.addEventListener("click",g),l.addEventListener("auxclick",g)}();