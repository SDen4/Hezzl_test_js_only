!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function l(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],u=r[c]||0,s="".concat(c," ").concat(u);r[c]=u+1;var f=l(s),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:g(d,t),references:1}),n.push(s)}return n}function u(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function v(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,p=0;function g(e,t){var r,n,o;if(t.singleton){var a=p++;r=m||(m=u(t)),n=d.bind(null,r,a,!1),o=d.bind(null,r,a,!0)}else r=u(t),n=v.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=l(r[n]);i[o].references--}for(var a=c(e,t),u=0;u<r.length;u++){var s=l(r[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}r=a}}}},function(e,t){var r=document.querySelector(".game__field");!function(e){for(var t=1;t<=e;t++){var n=document.createElement("div");n.className="game__unit",r.append(n)}}(25)},function(e,t,r){var n=r(0),o=r(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(n(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,r){},function(e,t,r){var n=r(0),o=r(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(n(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,r){},function(e,t,r){"use strict";r.r(t);for(var n=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]],o=[],a=[],i=[0,8,16,24,32,40,48,56],l=0;l<i.length;l++)for(var c=i[l];c<i[l]+4;c++){a[c]=[];for(var u=0;u<5;u++)a[c].push(u+c)}for(var s=[],f=[0,1,2,3,4,5,6,7],d=0;d<f.length;d++)for(var v=0;v<32;v++){s[v]=[];for(var m=0;m<5;m++)s[v].push(8*m+v)}for(var p=[[32,25,18,11,4],[40,33,26,19,12],[33,26,19,12,5],[48,41,34,27,20],[41,34,27,20,13],[34,27,20,13,6],[56,49,42,35,28],[49,42,35,28,21],[42,35,28,21,14],[35,28,21,14,7],[57,50,43,36,29],[50,43,36,29,22],[43,36,29,22,15],[58,51,44,37,30],[51,44,37,30,23],[59,52,45,38,31],[24,33,42,51,60],[16,25,34,43,52],[25,34,43,52,61],[8,17,26,35,44],[17,26,35,44,53],[26,35,44,53,62],[0,9,18,27,36],[9,18,27,36,45],[18,27,36,45,54],[27,36,45,54,63],[1,10,19,28,37],[10,19,28,37,46],[19,28,37,46,55],[2,11,20,29,38],[11,20,29,38,47],[3,12,21,30,39]],g=0;g<a.length;g++)null!=a[g]&&o.push(a[g]);for(var _=0;_<s.length;_++)o.push(s[_]);for(var h=0;h<p.length;h++)o.push(p[h]);r(1);var y=document.querySelector(".game__field");var b=function(){for(var e=0;e<5;e++)for(var t=0;t<3;t++){var r=document.createElement("div");r.className="game__unit game__unit_add",y.insertBefore(r,y.children[5+8*e])}for(var n=0;n<24;n++){var o=document.createElement("div");o.className="game__unit game__unit_add",y.append(o)}};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}for(var L=document.querySelectorAll(".game__unit"),j=document.querySelector(".game__field"),w=document.querySelector(".game__page_win"),x=document.querySelector(".game__page_loose"),A=document.querySelectorAll(".game__page_button"),E=[],O=0,q=function(e){var t=L[e];t.addEventListener("click",(function(){if(!(1===E[e]||0===E[e]||O>=16)){E[e]=1,t.classList.add("game__cross"),T(E,n);for(var r=L.length,a=Math.floor(Math.random()*r);1===E[a]||0===E[a];)a=Math.floor(Math.random()*r);var i=L[a];if(E[a]=0,i.classList.add("game__zero"),T(E,n),16===(O+=2)){for(var l=0;l<E.length;l++)null==E[l]&&(E[l]="");for(var c=0;c<5;c++)E.splice(5+8*c,0,"","","");j.classList.add("game__field_large"),b()}L=document.querySelectorAll(".game__unit");for(var u=function(e){var t=L[e];if(O<16)return{v:void 0};t.addEventListener("click",(function(){if(!(1===E[e]||0===E[e]||O<16)){E[e]=1,t.classList.add("game__cross"),T(E,o);for(var r=L.length,n=Math.floor(Math.random()*r);1===E[n]||0===E[n];)n=Math.floor(Math.random()*r);var a=L[n];E[n]=0,a.classList.add("game__zero"),T(E,o)}}))},s=0;s<L.length;s++){var f=u(s);if("object"===S(f))return f.v}}}))},C=0;C<L.length;C++)q(C);function T(e,t){for(var r=t,n=0;n<r.length;n++){var o=M(r[n],5),a=o[0],i=o[1],l=o[2],c=o[3],u=o[4];null!=e[a]&&e[a]===e[i]&&e[i]===e[l]&&e[l]===e[c]&&e[c]===e[u]&&(1===e[a]&&w.classList.add("game__page_active"),0===e[a]&&x.classList.add("game__page_active"))}}for(var N=0;N<A.length;N++){A[N].addEventListener("click",(function(){L=document.querySelectorAll(".game__unit");for(var e=0;e<L.length;e++){var t=L[e];t.classList.remove("game__zero"),t.classList.remove("game__cross")}for(var r=document.querySelectorAll(".game__unit_add"),n=0;n<r.length;n++){r[n].remove(),j.classList.remove("game__field_large")}E.length=0,O=0,x.classList.remove("game__page_active"),w.classList.remove("game__page_active")}))}r(2),r(4)}]);