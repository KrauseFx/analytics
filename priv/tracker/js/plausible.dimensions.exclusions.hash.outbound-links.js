!function(){"use strict";var p=window.location,d=window.document,w=d.currentScript,f=w.getAttribute("data-api")||new URL(w.src).origin+"/api/event";function g(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(p.hostname)||"file:"===p.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var i=w&&w.getAttribute("data-include"),n=w&&w.getAttribute("data-exclude");if("pageview"===e){var a=!i||i&&i.split(",").some(u),r=n&&n.split(",").some(u);if(!a||r)return g("exclusion rule")}var o={};o.n=e,o.u=p.href,o.d=w.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=w.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),i=w.getAttribute(e);c[t]=c[t]||i}),o.p=c,o.h=1;var s=new XMLHttpRequest;s.open("POST",f,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(o)),s.onreadystatechange=function(){4===s.readyState&&t&&t.callback&&t.callback()}}function u(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i,n=0;n<t.length;n++)e.apply(this,t[n]);function a(){i=p.pathname,e("pageview")}function r(e){for(var t,i,n,a="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!i||t||n||(n=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==p.host&&(a||r)&&(t=e.defaultPrevented,i=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,n=!1,i&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}window.addEventListener("hashchange",a),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){i||"visible"!==d.visibilityState||a()}):a(),d.addEventListener("click",r),d.addEventListener("auxclick",r)}();