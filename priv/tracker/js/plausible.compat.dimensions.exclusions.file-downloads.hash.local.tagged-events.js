!function(){"use strict";var e,t,a,s=window.location,d=window.document,v=d.getElementById("plausible"),f=v.getAttribute("data-api")||(e=v.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function g(e){console.warn("Ignoring Event: "+e)}function i(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var a=v&&v.getAttribute("data-include"),i=v&&v.getAttribute("data-exclude");if("pageview"===e){var n=!a||a&&a.split(",").some(u),r=i&&i.split(",").some(u);if(!n||r)return g("exclusion rule")}var o={};o.n=e,o.u=s.href,o.d=v.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=v.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),a=v.getAttribute(e);c[t]=c[t]||a}),o.p=c,o.h=1;var p=new XMLHttpRequest;p.open("POST",f,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(o)),p.onreadystatechange=function(){4===p.readyState&&t&&t.callback&&t.callback()}}function u(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var n=window.plausible&&window.plausible.q||[];window.plausible=i;for(var r,o=0;o<n.length;o++)i.apply(this,n[o]);function l(){r=s.pathname,i("pageview")}window.addEventListener("hashchange",l),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){r||"visible"!==d.visibilityState||l()}):l();var c=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],p=v.getAttribute("file-types"),u=v.getAttribute("add-file-types"),w=p&&p.split(",")||u&&u.split(",").concat(c)||c;function m(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,i=e.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var n,r,o,l,c=i&&i.href&&i.href.split("?")[0];function p(){!o||r||l||(l=!0,window.location=i.href)}c&&(n=c.split(".").pop(),w.some(function(e){return e===n}))&&(t||a)&&(r=e.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!r&&(e.preventDefault(),setTimeout(p,1e3)),plausible("File Download",{props:{url:c},callback:p}))}function h(e){for(var t,a,i,n="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||i||(i=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(n||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,i=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),b(o,l))}function b(e,t){var a=e.getAttribute("data-event-name"),i=function(e){for(var t={},a=0;a<e.length;a++){var i,n=e[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(i=n.replace("data-event-",""),t[i]=e[a].value)}return t}(e.attributes);e.href&&(i.url=e.href),plausible(a,{props:i,callback:t})}d.addEventListener("click",m),d.addEventListener("auxclick",m),d.addEventListener("submit",function(e){var t,a;function i(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(i,1e3)),b(e.target,i))}),d.addEventListener("click",h),d.addEventListener("auxclick",h)}();