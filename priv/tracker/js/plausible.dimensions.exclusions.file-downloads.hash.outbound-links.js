!function(){"use strict";var u=window.location,d=window.document,f=d.currentScript,w=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function g(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var i=f&&f.getAttribute("data-include"),a=f&&f.getAttribute("data-exclude");if("pageview"===e){var r=!i||i&&i.split(",").some(s),n=a&&a.split(",").some(s);if(!r||n)return g("exclusion rule")}var o={};o.n=e,o.u=u.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),i=f.getAttribute(e);c[t]=c[t]||i}),o.p=c,o.h=1;var p=new XMLHttpRequest;p.open("POST",w,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(o)),p.onreadystatechange=function(){4===p.readyState&&t&&t.callback&&t.callback()}}function s(e){return u.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i,a=0;a<t.length;a++)e.apply(this,t[a]);function r(){i=u.pathname,e("pageview")}function n(e){for(var t,i,a,r="auxclick"===e.type&&2===e.which,n="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!i||t||a||(a=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==u.host&&(r||n)&&(t=e.defaultPrevented,i=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&n,a=!1,i&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}window.addEventListener("hashchange",r),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){i||"visible"!==d.visibilityState||r()}):r(),d.addEventListener("click",n),d.addEventListener("auxclick",n);var o=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],l=f.getAttribute("file-types"),c=f.getAttribute("add-file-types"),s=l&&l.split(",")||c&&c.split(",").concat(o)||o;function p(e){for(var t="auxclick"===e.type&&2===e.which,i="click"===e.type,a=e.target;a&&(void 0===a.tagName||"a"!==a.tagName.toLowerCase()||!a.href);)a=a.parentNode;var r,n,o,l,c=a&&a.href&&a.href.split("?")[0];function p(){!o||n||l||(l=!0,window.location=a.href)}c&&(r=c.split(".").pop(),s.some(function(e){return e===r}))&&(t||i)&&(n=e.defaultPrevented,o=(!a.target||a.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,l=!1,o&&!n&&(e.preventDefault(),setTimeout(p,1e3)),plausible("File Download",{props:{url:c},callback:p}))}d.addEventListener("click",p),d.addEventListener("auxclick",p)}();