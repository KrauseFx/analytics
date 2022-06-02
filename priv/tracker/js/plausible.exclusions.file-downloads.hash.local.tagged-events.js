!function(){"use strict";var p=window.location,u=window.document,d=u.currentScript,s=d.getAttribute("data-api")||new URL(d.src).origin+"/api/event";function v(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return v("localStorage flag")}catch(e){}var a=d&&d.getAttribute("data-include"),i=d&&d.getAttribute("data-exclude");if("pageview"===e){var n=!a||a&&a.split(",").some(c),r=i&&i.split(",").some(c);if(!n||r)return v("exclusion rule")}var o={};o.n=e,o.u=p.href,o.d=d.getAttribute("data-domain"),o.r=u.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var l=new XMLHttpRequest;l.open("POST",s,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function c(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,i=0;i<t.length;i++)e.apply(this,t[i]);function n(){a=p.pathname,e("pageview")}window.addEventListener("hashchange",n),"prerender"===u.visibilityState?u.addEventListener("visibilitychange",function(){a||"visible"!==u.visibilityState||n()}):n();var r=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],o=d.getAttribute("file-types"),l=d.getAttribute("add-file-types"),f=o&&o.split(",")||l&&l.split(",").concat(r)||r;function c(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,i=e.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var n,r,o,l,c=i&&i.href&&i.href.split("?")[0];function p(){!o||r||l||(l=!0,window.location=i.href)}c&&(n=c.split(".").pop(),f.some(function(e){return e===n}))&&(t||a)&&(r=e.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!r&&(e.preventDefault(),setTimeout(p,1e3)),plausible("File Download",{props:{url:c},callback:p}))}function g(e){for(var t,a,i,n="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||i||(i=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(n||r)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,i=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),w(o,l))}function w(e,t){var a=e.getAttribute("data-event-name"),i=function(e){for(var t={},a=0;a<e.length;a++){var i,n=e[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(i=n.replace("data-event-",""),t[i]=e[a].value)}return t}(e.attributes);e.href&&(i.url=e.href),plausible(a,{props:i,callback:t})}u.addEventListener("click",c),u.addEventListener("auxclick",c),u.addEventListener("submit",function(e){var t,a;function i(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(i,1e3)),w(e.target,i))}),u.addEventListener("click",g),u.addEventListener("auxclick",g)}();