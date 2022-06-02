!function(){"use strict";var c=window.location,o=window.document,l=o.currentScript,u=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var a={};a.n=e,a.u=t&&t.u?t.u:c.href,a.d=l.getAttribute("data-domain"),a.r=o.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props);var r=l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),n=a.p||{};r.forEach(function(e){var t=e.replace("event-",""),a=l.getAttribute(e);n[t]=n[t]||a}),a.p=n;var i=new XMLHttpRequest;i.open("POST",u,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback()}}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a=0;a<t.length;a++)e.apply(this,t[a]);function r(e){for(var t,a,r,n="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||r||(r=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==c.host&&(n||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,r=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}o.addEventListener("click",r),o.addEventListener("auxclick",r);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],i=l.getAttribute("file-types"),p=l.getAttribute("add-file-types"),d=i&&i.split(",")||p&&p.split(",").concat(n)||n;function s(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,r=e.target;r&&(void 0===r.tagName||"a"!==r.tagName.toLowerCase()||!r.href);)r=r.parentNode;var n,i,o,l,c=r&&r.href&&r.href.split("?")[0];function u(){!o||i||l||(l=!0,window.location=r.href)}c&&(n=c.split(".").pop(),d.some(function(e){return e===n}))&&(t||a)&&(i=e.defaultPrevented,o=(!r.target||r.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!i&&(e.preventDefault(),setTimeout(u,1e3)),plausible("File Download",{props:{url:c},callback:u}))}function f(e){for(var t,a,r,n="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||r||(r=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(n||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,r=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),v(o,l))}function v(e,t){var a=e.getAttribute("data-event-name"),r=function(e){for(var t={},a=0;a<e.length;a++){var r,n=e[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(r=n.replace("data-event-",""),t[r]=e[a].value)}return t}(e.attributes);e.href&&(r.url=e.href),plausible(a,{props:r,callback:t})}o.addEventListener("click",s),o.addEventListener("auxclick",s),o.addEventListener("submit",function(e){var t,a;function r(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(r,1e3)),v(e.target,r))}),o.addEventListener("click",f),o.addEventListener("auxclick",f)}();