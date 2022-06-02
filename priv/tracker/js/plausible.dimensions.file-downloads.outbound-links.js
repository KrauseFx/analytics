!function(){"use strict";var p=window.location,o=window.document,l=o.currentScript,c=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function s(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(p.hostname)||"file:"===p.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var i={};i.n=t,i.u=p.href,i.d=l.getAttribute("data-domain"),i.r=o.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props);var a=l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),n=i.p||{};a.forEach(function(t){var e=t.replace("event-",""),i=l.getAttribute(t);n[e]=n[e]||i}),i.p=n;var r=new XMLHttpRequest;r.open("POST",c,!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(i)),r.onreadystatechange=function(){4===r.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var i,a=0;a<e.length;a++)t.apply(this,e[a]);function n(){i!==p.pathname&&(i=p.pathname,t("pageview"))}var r,u=window.history;function d(t){for(var e,i,a,n="auxclick"===t.type&&2===t.which,r="click"===t.type,o=t.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!i||e||a||(a=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==p.host&&(n||r)&&(e=t.defaultPrevented,i=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&r,a=!1,i&&!e&&(t.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}u.pushState&&(r=u.pushState,u.pushState=function(){r.apply(this,arguments),n()},window.addEventListener("popstate",n)),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){i||"visible"!==o.visibilityState||n()}):n(),o.addEventListener("click",d),o.addEventListener("auxclick",d);var f=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],w=l.getAttribute("file-types"),v=l.getAttribute("add-file-types"),h=w&&w.split(",")||v&&v.split(",").concat(f)||f;function g(t){for(var e="auxclick"===t.type&&2===t.which,i="click"===t.type,a=t.target;a&&(void 0===a.tagName||"a"!==a.tagName.toLowerCase()||!a.href);)a=a.parentNode;var n,r,o,l,p=a&&a.href&&a.href.split("?")[0];function c(){!o||r||l||(l=!0,window.location=a.href)}p&&(n=p.split(".").pop(),h.some(function(t){return t===n}))&&(e||i)&&(r=t.defaultPrevented,o=(!a.target||a.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&i,l=!1,o&&!r&&(t.preventDefault(),setTimeout(c,1e3)),plausible("File Download",{props:{url:p},callback:c}))}o.addEventListener("click",g),o.addEventListener("auxclick",g)}();