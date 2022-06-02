!function(){"use strict";var c=window.location,o=window.document,l=o.currentScript,p=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function s(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(e){}var i={};i.n=e,i.u=c.href,i.d=l.getAttribute("data-domain"),i.r=o.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=t.props);var a=l.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),n=i.p||{};a.forEach(function(e){var t=e.replace("event-",""),i=l.getAttribute(e);n[t]=n[t]||i}),i.p=n,i.h=1;var r=new XMLHttpRequest;r.open("POST",p,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(i)),r.onreadystatechange=function(){4===r.readyState&&t&&t.callback&&t.callback()}}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i,a=0;a<t.length;a++)e.apply(this,t[a]);function n(){i=c.pathname,e("pageview")}function r(e){for(var t,i,a,n="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!i||t||a||(a=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==c.host&&(n||r)&&(t=e.defaultPrevented,i=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,a=!1,i&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}window.addEventListener("hashchange",n),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){i||"visible"!==o.visibilityState||n()}):n(),o.addEventListener("click",r),o.addEventListener("auxclick",r);var d=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],u=l.getAttribute("file-types"),f=l.getAttribute("add-file-types"),w=u&&u.split(",")||f&&f.split(",").concat(d)||d;function v(e){for(var t="auxclick"===e.type&&2===e.which,i="click"===e.type,a=e.target;a&&(void 0===a.tagName||"a"!==a.tagName.toLowerCase()||!a.href);)a=a.parentNode;var n,r,o,l,c=a&&a.href&&a.href.split("?")[0];function p(){!o||r||l||(l=!0,window.location=a.href)}c&&(n=c.split(".").pop(),w.some(function(e){return e===n}))&&(t||i)&&(r=e.defaultPrevented,o=(!a.target||a.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,l=!1,o&&!r&&(e.preventDefault(),setTimeout(p,1e3)),plausible("File Download",{props:{url:c},callback:p}))}o.addEventListener("click",v),o.addEventListener("auxclick",v)}();