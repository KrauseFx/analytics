!function(){"use strict";var e,t,a,u=window.location,r=window.document,i=r.getElementById("plausible"),o=i.getAttribute("data-api")||(e=i.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function n(e,t){if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var a={};a.n=e,a.u=t&&t.u?t.u:u.href,a.d=i.getAttribute("data-domain"),a.r=r.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props),a.h=1;var n=new XMLHttpRequest;n.open("POST",o,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4===n.readyState&&t&&t.callback&&t.callback()}}}var l=window.plausible&&window.plausible.q||[];window.plausible=n;for(var c=0;c<l.length;c++)n.apply(this,l[c]);function d(e){for(var t,a,n,r="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||n||(n=!0,window.location=o.href)}o&&o.href&&o.host&&o.host!==u.host&&(r||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,n=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),plausible("Outbound Link: Click",{props:{url:o.href},callback:l}))}function s(e){for(var t,a,n,r="auxclick"===e.type&&2===e.which,i="click"===e.type,o=e.target;o&&(void 0===o.tagName||"a"!==o.tagName.toLowerCase()||!o.href);)o=o.parentNode;function l(){!a||t||n||(n=!0,window.location=o.href)}o&&!!o.getAttribute("data-event-name")&&(r||i)&&(t=e.defaultPrevented,a=(!o.target||o.target.match(/^_(self|parent|top)$/i))&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&i,n=!1,a&&!t&&(e.preventDefault(),setTimeout(l,1e3)),p(o,l))}function p(e,t){var a=e.getAttribute("data-event-name"),n=function(e){for(var t={},a=0;a<e.length;a++){var n,r=e[a].name;"data-event-"===r.substring(0,11)&&"data-event-name"!==r&&(n=r.replace("data-event-",""),t[n]=e[a].value)}return t}(e.attributes);e.href&&(n.url=e.href),plausible(a,{props:n,callback:t})}r.addEventListener("click",d),r.addEventListener("auxclick",d),r.addEventListener("submit",function(e){var t,a;function n(){t||a||(a=!0,e.target.submit())}e.target.getAttribute("data-event-name")&&(t=e.defaultPrevented,a=!1,t||(e.preventDefault(),setTimeout(n,1e3)),p(e.target,n))}),r.addEventListener("click",s),r.addEventListener("auxclick",s)}();