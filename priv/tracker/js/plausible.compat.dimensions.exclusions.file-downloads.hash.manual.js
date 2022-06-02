!function(){"use strict";var e,t,a,u=window.location,d=window.document,f=d.getElementById("plausible"),w=f.getAttribute("data-api")||(e=f.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function g(e){console.warn("Ignoring Event: "+e)}function i(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var a=f&&f.getAttribute("data-include"),i=f&&f.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(s),n=i&&i.split(",").some(s);if(!r||n)return g("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:u.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),p=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),a=f.getAttribute(e);p[t]=p[t]||a}),o.p=p,o.h=1;var c=new XMLHttpRequest;c.open("POST",w,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function s(e){return u.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var r=window.plausible&&window.plausible.q||[];window.plausible=i;for(var n=0;n<r.length;n++)i.apply(this,r[n]);var o=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],l=f.getAttribute("file-types"),p=f.getAttribute("add-file-types"),s=l&&l.split(",")||p&&p.split(",").concat(o)||o;function c(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,i=e.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var r,n,o,l,p=i&&i.href&&i.href.split("?")[0];function c(){!o||n||l||(l=!0,window.location=i.href)}p&&(r=p.split(".").pop(),s.some(function(e){return e===r}))&&(t||a)&&(n=e.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!n&&(e.preventDefault(),setTimeout(c,1e3)),plausible("File Download",{props:{url:p},callback:c}))}d.addEventListener("click",c),d.addEventListener("auxclick",c)}();