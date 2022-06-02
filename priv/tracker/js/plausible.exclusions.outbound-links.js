!function(){"use strict";var c=window.location,p=window.document,u=p.currentScript,d=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function w(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(c.hostname)||"file:"===c.protocol)return w("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(t){}var i=u&&u.getAttribute("data-include"),a=u&&u.getAttribute("data-exclude");if("pageview"===t){var n=!i||i&&i.split(",").some(s),r=a&&a.split(",").some(s);if(!n||r)return w("exclusion rule")}var o={};o.n=t,o.u=c.href,o.d=u.getAttribute("data-domain"),o.r=p.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback()}}function s(t){return c.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var i,a=0;a<e.length;a++)t.apply(this,e[a]);function n(){i!==c.pathname&&(i=c.pathname,t("pageview"))}var r,o=window.history;function l(t){for(var e,i,a,n="auxclick"===t.type&&2===t.which,r="click"===t.type,o=t.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!i||e||a||(a=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==c.host&&(n||r)&&(e=t.defaultPrevented,i=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&r,a=!1,i&&!e&&(t.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}o.pushState&&(r=o.pushState,o.pushState=function(){r.apply(this,arguments),n()},window.addEventListener("popstate",n)),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){i||"visible"!==p.visibilityState||n()}):n(),p.addEventListener("click",l),p.addEventListener("auxclick",l)}();