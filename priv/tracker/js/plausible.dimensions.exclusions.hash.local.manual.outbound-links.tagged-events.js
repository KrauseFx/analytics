!function(){"use strict";var s=window.location,p=window.document,f=p.currentScript,g=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function v(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return v("localStorage flag")}catch(e){}var a=f&&f.getAttribute("data-include"),n=f&&f.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(d),i=n&&n.split(",").some(d);if(!r||i)return v("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:s.href,o.d=f.getAttribute("data-domain"),o.r=p.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var u=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=o.p||{};u.forEach(function(e){var t=e.replace("event-",""),a=f.getAttribute(e);c[t]=c[t]||a}),o.p=c,o.h=1;var l=new XMLHttpRequest;l.open("POST",g,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function d(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a=0;a<t.length;a++)e.apply(this,t[a]);function n(e){for(var t,a,n,r="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function u(){!a||t||n||(n=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==s.host&&(r||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,n=!1,a&&!t&&(e.preventDefault(),setTimeout(u,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:u}))}function r(e){for(var t,a,n,r="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function u(){!a||t||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(r||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,n=!1,a&&!t&&(e.preventDefault(),setTimeout(u,1e3)),c(o,u))}function c(e,t){var a=e.getAttribute("data-event-name"),n=function(e){for(var t={},a=0;a<e.length;a++){var n,r=e[a].name;"data-event-"===r.substring(0,11)&&"data-event-name"!==r&&(n=r.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(n.url=e.href),plausible(a,{props:n,callback:t})}p.addEventListener("click",n),p.addEventListener("auxclick",n),p.addEventListener("submit",function(e){var t,a;function n(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(n,1e3)),c(e.target,n))}),p.addEventListener("click",r),p.addEventListener("auxclick",r)}();