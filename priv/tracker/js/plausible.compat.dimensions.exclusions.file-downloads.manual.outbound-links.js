!function(){"use strict";var e,t,a,u=window.location,d=window.document,f=d.getElementById("plausible"),w=f.getAttribute("data-api")||(e=f.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function g(e){console.warn("Ignoring Event: "+e)}function i(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var a=f&&f.getAttribute("data-include"),i=f&&f.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(s),n=i&&i.split(",").some(s);if(!r||n)return g("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:u.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),a=f.getAttribute(e);c[t]=c[t]||a}),o.p=c;var p=new XMLHttpRequest;p.open("POST",w,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(o)),p.onreadystatechange=function(){4===p.readyState&&t&&t.callback&&t.callback()}}function s(e){return u.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var r=window.plausible&&window.plausible.q||[];window.plausible=i;for(var n=0;n<r.length;n++)i.apply(this,r[n]);function o(e){for(var t,a,i,r="auxclick"===e.type&&2===e.which,n="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||i||(i=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==u.host&&(r||n)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&n,i=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}d.addEventListener("click",o),d.addEventListener("auxclick",o);var l=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],c=f.getAttribute("file-types"),p=f.getAttribute("add-file-types"),s=c&&c.split(",")||p&&p.split(",").concat(l)||l;function v(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,i=e.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var r,n,o,l,c=i&&i.href&&i.href.split("?")[0];function p(){!o||n||l||(l=!0,window.location=i.href)}c&&(r=c.split(".").pop(),s.some(function(e){return e===r}))&&(t||a)&&(n=e.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!n&&(e.preventDefault(),setTimeout(p,1e3)),plausible("File Download",{props:{url:c},callback:p}))}d.addEventListener("click",v),d.addEventListener("auxclick",v)}();