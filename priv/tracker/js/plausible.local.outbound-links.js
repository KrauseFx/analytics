!function(){"use strict";var s=window.location,n=window.document,r=n.currentScript,o=r.getAttribute("data-api")||new URL(r.src).origin+"/api/event";function t(t,e){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var i={};i.n=t,i.u=s.href,i.d=r.getAttribute("data-domain"),i.r=n.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props);var a=new XMLHttpRequest;a.open("POST",o,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var i,a=0;a<e.length;a++)t.apply(this,e[a]);function l(){i!==s.pathname&&(i=s.pathname,t("pageview"))}var c,d=window.history;function p(t){for(var e,i,a,n="auxclick"===t.type&&2===t.which,r="click"===t.type,o=t.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!i||e||a||(a=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==s.host&&(n||r)&&(e=t.defaultPrevented,i=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&r,a=!1,i&&!e&&(t.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}d.pushState&&(c=d.pushState,d.pushState=function(){c.apply(this,arguments),l()},window.addEventListener("popstate",l)),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){i||"visible"!==n.visibilityState||l()}):l(),n.addEventListener("click",p),n.addEventListener("auxclick",p)}();