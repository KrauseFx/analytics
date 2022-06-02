!function(){"use strict";var s=window.location,c=window.document,d=c.currentScript,u=d.getAttribute("data-api")||new URL(d.src).origin+"/api/event";function w(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(t){}var i=d&&d.getAttribute("data-include"),a=d&&d.getAttribute("data-exclude");if("pageview"===t){var n=!i||i&&i.split(",").some(l),r=a&&a.split(",").some(l);if(!n||r)return w("exclusion rule")}var o={};o.n=t,o.u=s.href,o.d=d.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var p=new XMLHttpRequest;p.open("POST",u,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(o)),p.onreadystatechange=function(){4===p.readyState&&e&&e.callback&&e.callback()}}function l(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var i,a=0;a<e.length;a++)t.apply(this,e[a]);function n(){i!==s.pathname&&(i=s.pathname,t("pageview"))}var r,o=window.history;o.pushState&&(r=o.pushState,o.pushState=function(){r.apply(this,arguments),n()},window.addEventListener("popstate",n)),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){i||"visible"!==c.visibilityState||n()}):n();var p=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],l=d.getAttribute("file-types"),f=d.getAttribute("add-file-types"),g=l&&l.split(",")||f&&f.split(",").concat(p)||p;function v(t){for(var e="auxclick"===t.type&&2===t.which,i="click"===t.type,a=t.target;a&&(void 0===a.tagName||"a"!==a.tagName.toLowerCase()||!a.href);)a=a.parentNode;var n,r,o,p,l=a&&a.href&&a.href.split("?")[0];function s(){!o||r||p||(p=!0,window.location=a.href)}l&&(n=l.split(".").pop(),g.some(function(t){return t===n}))&&(e||i)&&(r=t.defaultPrevented,o=(!a.target||a.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&i,p=!1,o&&!r&&(t.preventDefault(),setTimeout(s,1e3)),plausible("File Download",{props:{url:l},callback:s}))}c.addEventListener("click",v),c.addEventListener("auxclick",v)}();