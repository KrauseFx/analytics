!function(){"use strict";var e,t,a,c=window.location,s=window.document,u=s.getElementById("plausible"),d=u.getAttribute("data-api")||(e=u.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function w(e){console.warn("Ignoring Event: "+e)}function i(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(e){}var a=u&&u.getAttribute("data-include"),i=u&&u.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(p),n=i&&i.split(",").some(p);if(!r||n)return w("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:c.href,o.d=u.getAttribute("data-domain"),o.r=s.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function p(e){return c.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var r=window.plausible&&window.plausible.q||[];window.plausible=i;for(var n=0;n<r.length;n++)i.apply(this,r[n]);var o=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],l=u.getAttribute("file-types"),p=u.getAttribute("add-file-types"),f=l&&l.split(",")||p&&p.split(",").concat(o)||o;function g(e){for(var t="auxclick"===e.type&&2===e.which,a="click"===e.type,i=e.target;i&&(void 0===i.tagName||"a"!==i.tagName.toLowerCase()||!i.href);)i=i.parentNode;var r,n,o,l,p=i&&i.href&&i.href.split("?")[0];function c(){!o||n||l||(l=!0,window.location=i.href)}p&&(r=p.split(".").pop(),f.some(function(e){return e===r}))&&(t||a)&&(n=e.defaultPrevented,o=(!i.target||i.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&a,l=!1,o&&!n&&(e.preventDefault(),setTimeout(c,1e3)),plausible("File Download",{props:{url:p},callback:c}))}s.addEventListener("click",g),s.addEventListener("auxclick",g)}();