!function(){"use strict";var t,e,i,n=window.location,r=window.document,o=r.getElementById("plausible"),p=o.getAttribute("data-api")||(t=o.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function a(t,e){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var i={};i.n=t,i.u=n.href,i.d=o.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props);var a=new XMLHttpRequest;a.open("POST",p,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}var l=window.plausible&&window.plausible.q||[];window.plausible=a;for(var s,d=0;d<l.length;d++)a.apply(this,l[d]);function c(){s!==n.pathname&&(s=n.pathname,a("pageview"))}var w,u=window.history;u.pushState&&(w=u.pushState,u.pushState=function(){w.apply(this,arguments),c()},window.addEventListener("popstate",c)),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){s||"visible"!==r.visibilityState||c()}):c();var v=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],f=o.getAttribute("file-types"),g=o.getAttribute("add-file-types"),h=f&&f.split(",")||g&&g.split(",").concat(v)||v;function m(t){for(var e="auxclick"===t.type&&2===t.which,i="click"===t.type,a=t.target;a&&(void 0===a.tagName||"a"!==a.tagName.toLowerCase()||!a.href);)a=a.parentNode;var n,r,o,p,l=a&&a.href&&a.href.split("?")[0];function s(){!o||r||p||(p=!0,window.location=a.href)}l&&(n=l.split(".").pop(),h.some(function(t){return t===n}))&&(e||i)&&(r=t.defaultPrevented,o=(!a.target||a.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&i,p=!1,o&&!r&&(t.preventDefault(),setTimeout(s,1e3)),plausible("File Download",{props:{url:l},callback:s}))}r.addEventListener("click",m),r.addEventListener("auxclick",m)}();