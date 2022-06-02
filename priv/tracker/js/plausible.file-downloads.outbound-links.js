!function(){"use strict";var p=window.location,n=window.document,r=n.currentScript,o=r.getAttribute("data-api")||new URL(r.src).origin+"/api/event";function l(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(p.hostname)||"file:"===p.protocol)return l("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return l("localStorage flag")}catch(t){}var a={};a.n=t,a.u=p.href,a.d=r.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var i=new XMLHttpRequest;i.open("POST",o,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a,i=0;i<e.length;i++)t.apply(this,e[i]);function c(){a!==p.pathname&&(a=p.pathname,t("pageview"))}var s,d=window.history;function u(t){for(var e,a,i,n="auxclick"===t.type&&2===t.which,r="click"===t.type,o=t.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||e||i||(i=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==p.host&&(n||r)&&(e=t.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&r,i=!1,a&&!e&&(t.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}d.pushState&&(s=d.pushState,d.pushState=function(){s.apply(this,arguments),c()},window.addEventListener("popstate",c)),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){a||"visible"!==n.visibilityState||c()}):c(),n.addEventListener("click",u),n.addEventListener("auxclick",u);var f=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],w=r.getAttribute("file-types"),h=r.getAttribute("add-file-types"),v=w&&w.split(",")||h&&h.split(",").concat(f)||f;function g(t){for(var e="auxclick"===t.type&&2===t.which,a="click"===t.type,i=t.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var n,r,o,l,p=i&&i.href&&i.href.split("?")[0];function c(){!o||r||l||(l=!0,window.location=i.href)}p&&(n=p.split(".").pop(),v.some(function(t){return t===n}))&&(e||a)&&(r=t.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&a,l=!1,o&&!r&&(t.preventDefault(),setTimeout(c,1e3)),plausible("File Download",{props:{url:p},callback:c}))}n.addEventListener("click",g),n.addEventListener("auxclick",g)}();