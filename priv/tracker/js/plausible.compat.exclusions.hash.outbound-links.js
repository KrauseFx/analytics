!function(){"use strict";var e,t,i,c=window.location,d=window.document,u=d.getElementById("plausible"),p=u.getAttribute("data-api")||(e=u.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function w(e){console.warn("Ignoring Event: "+e)}function a(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return w("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(e){}var i=u&&u.getAttribute("data-include"),a=u&&u.getAttribute("data-exclude");if("pageview"===e){var n=!i||i&&i.split(",").some(s),r=a&&a.split(",").some(s);if(!n||r)return w("exclusion rule")}var o={};o.n=e,o.u=c.href,o.d=u.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var l=new XMLHttpRequest;l.open("POST",p,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function s(e){return c.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var n=window.plausible&&window.plausible.q||[];window.plausible=a;for(var r,o=0;o<n.length;o++)a.apply(this,n[o]);function l(){r=c.pathname,a("pageview")}function s(e){for(var t,i,a,n="auxclick"===e.type&&2===e.which,r="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!i||t||a||(a=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==c.host&&(n||r)&&(t=e.defaultPrevented,i=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&r,a=!1,i&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}window.addEventListener("hashchange",l),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){r||"visible"!==d.visibilityState||l()}):l(),d.addEventListener("click",s),d.addEventListener("auxclick",s)}();