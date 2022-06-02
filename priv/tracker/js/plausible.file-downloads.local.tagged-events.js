!function(){"use strict";var n=window.location,r=window.document,o=r.currentScript,l=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function t(t,e){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var a={};a.n=t,a.u=n.href,a.d=o.getAttribute("data-domain"),a.r=r.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props);var i=new XMLHttpRequest;i.open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a,i=0;i<e.length;i++)t.apply(this,e[i]);function p(){a!==n.pathname&&(a=n.pathname,t("pageview"))}var c,s=window.history;s.pushState&&(c=s.pushState,s.pushState=function(){c.apply(this,arguments),p()},window.addEventListener("popstate",p)),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){a||"visible"!==r.visibilityState||p()}):p();var d=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],u=o.getAttribute("file-types"),v=o.getAttribute("add-file-types"),f=u&&u.split(",")||v&&v.split(",").concat(d)||d;function w(t){for(var e="auxclick"===t.type&&2===t.which,a="click"===t.type,i=t.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var n,r,o,l,p=i&&i.href&&i.href.split("?")[0];function c(){!o||r||l||(l=!0,window.location=i.href)}p&&(n=p.split(".").pop(),f.some(function(t){return t===n}))&&(e||a)&&(r=t.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&a,l=!1,o&&!r&&(t.preventDefault(),setTimeout(c,1e3)),plausible("File Download",{props:{url:p},callback:c}))}function g(t){for(var e,a,i,n="auxclick"===t.type&&2===t.which,r="click"===t.type,o=t.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||e||i||(i=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(n||r)&&(e=t.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&r,i=!1,a&&!e&&(t.preventDefault(),setTimeout(l,1e3)),m(o,l))}function m(t,e){var a=t.getAttribute("data-event-name"),i=function(t){for(var e={},a=0;a<t.length;a++){var i,n=t[a].name;"data-event-"===n.substring(0,11)&&"data-event-name"!==n&&(i=n.replace("data-event-",""),e[i]=t[a].value)}return e}(t.attributes);t.href&&(i.url=t.href),plausible(a,{props:i,callback:e})}r.addEventListener("click",w),r.addEventListener("auxclick",w),r.addEventListener("submit",function(t){var e,a;function i(){e||a||(a=!0,t.target.submit())}t.target.getAttribute("data-event-name")&&(e=t.defaultPrevented,a=!1,e||(t.preventDefault(),setTimeout(i,1e3)),m(t.target,i))}),r.addEventListener("click",g),r.addEventListener("auxclick",g)}();