!function(){"use strict";var c=window.location,o=window.document,l=o.currentScript,s=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function u(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return u("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return u("localStorage flag")}catch(e){}var a={};a.n=e,a.u=c.href,a.d=l.getAttribute("data-domain"),a.r=o.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props);var i=l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),n=a.p||{};i.forEach(function(e){var t=e.replace("event-",""),a=l.getAttribute(e);n[t]=n[t]||a}),a.p=n,a.h=1;var r=new XMLHttpRequest;r.open("POST",s,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(a)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback()}}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,i=0;i<t.length;i++)e.apply(this,t[i]);function n(){a=c.pathname,e("pageview")}function r(e){for(var t,a,i,n="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||i||(i=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==c.host&&(n||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,i=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}window.addEventListener("hashchange",n),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){a||"visible"!==o.visibilityState||n()}):n(),o.addEventListener("click",r),o.addEventListener("auxclick",r);var p=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],d=l.getAttribute("file-types"),f=l.getAttribute("add-file-types"),v=d&&d.split(",")||f&&f.split(",").concat(p)||p;function g(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,i=e.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var n,r,o,l,c=i&&i.href&&i.href.split("?")[0];function s(){!o||r||l||(l=!0,window.location=i.href)}c&&(n=c.split(".").pop(),v.some(function(e){return e===n}))&&(t||a)&&(r=e.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!r&&(e.preventDefault(),setTimeout(s,1e3)),plausible("File Download",{props:{url:c},callback:s}))}function h(e){for(var t,a,i,n="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||i||(i=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(n||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,i=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),w(o,l))}function w(e,t){var a=e.getAttribute("data-event-name"),i=function(e){for(var t={},a=0;a<e.length;a++){var i,n=e[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(i=n.replace("data-event-",""),t[i]=e[a].value)}return t}(e.attributes);e.href&&(i.url=e.href),plausible(a,{props:i,callback:t})}o.addEventListener("click",g),o.addEventListener("auxclick",g),o.addEventListener("submit",function(e){var t,a;function i(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(i,1e3)),w(e.target,i))}),o.addEventListener("click",h),o.addEventListener("auxclick",h)}();