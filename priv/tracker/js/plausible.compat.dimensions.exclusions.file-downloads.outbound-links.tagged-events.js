!function(){"use strict";var e,t,a,u=window.location,d=window.document,f=d.getElementById("plausible"),v=f.getAttribute("data-api")||(e=f.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function g(e){console.warn("Ignoring Event: "+e)}function i(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(u.hostname)||"file:"===u.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var a=f&&f.getAttribute("data-include"),i=f&&f.getAttribute("data-exclude");if("pageview"===e){var n=!a||a&&a.split(",").some(s),r=i&&i.split(",").some(s);if(!n||r)return g("exclusion rule")}var o={};o.n=e,o.u=u.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),a=f.getAttribute(e);c[t]=c[t]||a}),o.p=c;var p=new XMLHttpRequest;p.open("POST",v,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(o)),p.onreadystatechange=function(){4===p.readyState&&t&&t.callback&&t.callback()}}function s(e){return u.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var n=window.plausible&&window.plausible.q||[];window.plausible=i;for(var r,o=0;o<n.length;o++)i.apply(this,n[o]);function l(){r!==u.pathname&&(r=u.pathname,i("pageview"))}var c,p=window.history;function s(e){for(var t,a,i,n="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||i||(i=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==u.host&&(n||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,i=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}p.pushState&&(c=p.pushState,p.pushState=function(){c.apply(this,arguments),l()},window.addEventListener("popstate",l)),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){r||"visible"!==d.visibilityState||l()}):l(),d.addEventListener("click",s),d.addEventListener("auxclick",s);var h=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],w=f.getAttribute("file-types"),m=f.getAttribute("add-file-types"),b=w&&w.split(",")||m&&m.split(",").concat(h)||h;function y(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,i=e.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var n,r,o,l,c=i&&i.href&&i.href.split("?")[0];function p(){!o||r||l||(l=!0,window.location=i.href)}c&&(n=c.split(".").pop(),b.some(function(e){return e===n}))&&(t||a)&&(r=e.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!r&&(e.preventDefault(),setTimeout(p,1e3)),plausible("File Download",{props:{url:c},callback:p}))}function k(e){for(var t,a,i,n="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||i||(i=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(n||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,i=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),x(o,l))}function x(e,t){var a=e.getAttribute("data-event-name"),i=function(e){for(var t={},a=0;a<e.length;a++){var i,n=e[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(i=n.replace("data-event-",""),t[i]=e[a].value)}return t}(e.attributes);e.href&&(i.url=e.href),plausible(a,{props:i,callback:t})}d.addEventListener("click",y),d.addEventListener("auxclick",y),d.addEventListener("submit",function(e){var t,a;function i(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(i,1e3)),x(e.target,i))}),d.addEventListener("click",k),d.addEventListener("auxclick",k)}();