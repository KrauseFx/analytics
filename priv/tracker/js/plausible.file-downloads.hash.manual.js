!function(){"use strict";var r=window.location,n=window.document,o=n.currentScript,l=o.getAttribute("data-api")||new URL(o.src).origin+"/api/event";function p(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(r.hostname)||"file:"===r.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag")}catch(t){}var a={};a.n=t,a.u=e&&e.u?e.u:r.href,a.d=o.getAttribute("data-domain"),a.r=n.referrer||null,a.w=window.innerWidth,e&&e.meta&&(a.m=JSON.stringify(e.meta)),e&&e.props&&(a.p=e.props),a.h=1;var i=new XMLHttpRequest;i.open("POST",l,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(a)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var a=0;a<e.length;a++)t.apply(this,e[a]);var i=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],c=o.getAttribute("file-types"),s=o.getAttribute("add-file-types"),d=c&&c.split(",")||s&&s.split(",").concat(i)||i;function u(t){for(var e="auxclick"===t.type&&2===t.which,a="click"===t.type,i=t.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var r,n,o,l,p=i&&i.href&&i.href.split("?")[0];function c(){!o||n||l||(l=!0,window.location=i.href)}p&&(r=p.split(".").pop(),d.some(function(t){return t===r}))&&(e||a)&&(n=t.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&a,l=!1,o&&!n&&(t.preventDefault(),setTimeout(c,1e3)),plausible("File Download",{props:{url:p},callback:c}))}n.addEventListener("click",u),n.addEventListener("auxclick",u)}();