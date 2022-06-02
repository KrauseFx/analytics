!function(){"use strict";var p=window.location,s=window.document,u=s.currentScript,d=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var a=u&&u.getAttribute("data-include"),i=u&&u.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(c),n=i&&i.split(",").some(c);if(!r||n)return f("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:p.href,o.d=u.getAttribute("data-domain"),o.r=s.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function c(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a=0;a<t.length;a++)e.apply(this,t[a]);function i(e){for(var t,a,i,r="auxclick"===e.type&&2===e.which,n="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||i||(i=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==p.host&&(r||n)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&n,i=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}s.addEventListener("click",i),s.addEventListener("auxclick",i);var r=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],n=u.getAttribute("file-types"),o=u.getAttribute("add-file-types"),w=n&&n.split(",")||o&&o.split(",").concat(r)||r;function l(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,i=e.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var r,n,o,l,c=i&&i.href&&i.href.split("?")[0];function p(){!o||n||l||(l=!0,window.location=i.href)}c&&(r=c.split(".").pop(),w.some(function(e){return e===r}))&&(t||a)&&(n=e.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!n&&(e.preventDefault(),setTimeout(p,1e3)),plausible("File Download",{props:{url:c},callback:p}))}s.addEventListener("click",l),s.addEventListener("auxclick",l)}();