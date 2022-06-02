!function(){"use strict";var c=window.location,o=window.document,l=o.currentScript,p=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var a={};a.n=e,a.u=t&&t.u?t.u:c.href,a.d=l.getAttribute("data-domain"),a.r=o.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props);var r=l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),i=a.p||{};r.forEach(function(e){var t=e.replace("event-",""),a=l.getAttribute(e);i[t]=i[t]||a}),a.p=i;var n=new XMLHttpRequest;n.open("POST",p,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4===n.readyState&&t&&t.callback&&t.callback()}}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a=0;a<t.length;a++)e.apply(this,t[a]);function r(e){for(var t,a,r,i="auxclick"===e.type&&2===e.which,n="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||r||(r=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==c.host&&(i||n)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&n,r=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}o.addEventListener("click",r),o.addEventListener("auxclick",r);var i=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],n=l.getAttribute("file-types"),s=l.getAttribute("add-file-types"),u=n&&n.split(",")||s&&s.split(",").concat(i)||i;function d(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,r=e.target;r&&(void 0===r.tagName||"a"!==r.tagName.toLowerCase()||!r.href);)r=r.parentNode;var i,n,o,l,c=r&&r.href&&r.href.split("?")[0];function p(){!o||n||l||(l=!0,window.location=r.href)}c&&(i=c.split(".").pop(),u.some(function(e){return e===i}))&&(t||a)&&(n=e.defaultPrevented,o=(!r.target||r.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!n&&(e.preventDefault(),setTimeout(p,1e3)),plausible("File Download",{props:{url:c},callback:p}))}o.addEventListener("click",d),o.addEventListener("auxclick",d)}();