!function(){"use strict";var e,t,a,c=window.location,s=window.document,u=s.getElementById("plausible"),d=u.getAttribute("data-api")||(e=u.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function f(e){console.warn("Ignoring Event: "+e)}function i(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var a=u&&u.getAttribute("data-include"),i=u&&u.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(p),n=i&&i.split(",").some(p);if(!r||n)return f("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:c.href,o.d=u.getAttribute("data-domain"),o.r=s.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function p(e){return c.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var r=window.plausible&&window.plausible.q||[];window.plausible=i;for(var n=0;n<r.length;n++)i.apply(this,r[n]);function o(e){for(var t,a,i,r="auxclick"===e.type&&2===e.which,n="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||i||(i=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==c.host&&(r||n)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&n,i=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}s.addEventListener("click",o),s.addEventListener("auxclick",o);var l=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],p=u.getAttribute("file-types"),w=u.getAttribute("add-file-types"),g=p&&p.split(",")||w&&w.split(",").concat(l)||l;function h(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,i=e.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var r,n,o,l,p=i&&i.href&&i.href.split("?")[0];function c(){!o||n||l||(l=!0,window.location=i.href)}p&&(r=p.split(".").pop(),g.some(function(e){return e===r}))&&(t||a)&&(n=e.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!n&&(e.preventDefault(),setTimeout(c,1e3)),plausible("File Download",{props:{url:p},callback:c}))}s.addEventListener("click",h),s.addEventListener("auxclick",h)}();