!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var f=c(s),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:g(d,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,_=0;function g(e,t){var n,r,o;if(t.singleton){var a=_++;n=v||(v=u(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=u(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=l(e,t),u=0;u<n.length;u++){var s=c(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}},function(e,t){var n=document.querySelector(".game__field");!function(e){for(var t=1;t<=e;t++){var r=document.createElement("div");r.className="game__unit",n.append(r)}}(25)},function(e,t,n){var r=n(0),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){},function(e,t,n){var r=n(0),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){},function(e,t,n){"use strict";n.r(t);for(var r=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]],o=[],a=[],i=[0,8,16,24,32,40,48,56],c=0;c<i.length;c++)for(var l=i[c];l<i[c]+4;l++){a[l]=[];for(var u=0;u<5;u++)a[l].push(u+l)}for(var s=[],f=[0,1,2,3,4,5,6,7],d=0;d<f.length;d++)for(var m=0;m<32;m++){s[m]=[];for(var v=0;v<5;v++)s[m].push(8*v+m)}for(var _=[[32,25,18,11,4],[40,33,26,19,12],[33,26,19,12,5],[48,41,34,27,20],[41,34,27,20,13],[34,27,20,13,6],[56,49,42,35,28],[49,42,35,28,21],[42,35,28,21,14],[35,28,21,14,7],[57,50,43,36,29],[50,43,36,29,22],[43,36,29,22,15],[58,51,44,37,30],[51,44,37,30,23],[59,52,45,38,31],[24,33,42,51,60],[16,25,34,43,52],[25,34,43,52,61],[8,17,26,35,44],[17,26,35,44,53],[26,35,44,53,62],[0,9,18,27,36],[9,18,27,36,45],[18,27,36,45,54],[27,36,45,54,63],[1,10,19,28,37],[10,19,28,37,46],[19,28,37,46,55],[2,11,20,29,38],[11,20,29,38,47],[3,12,21,30,39]],g=0;g<a.length;g++)null!=a[g]&&o.push(a[g]);for(var p=0;p<s.length;p++)o.push(s[p]);for(var h=0;h<_.length;h++)o.push(_[h]);n(1);var y=document.querySelector(".game__field");var b=function(){for(var e=0;e<5;e++)for(var t=0;t<3;t++){var n=document.createElement("div");n.className="game__unit game__unit_add",y.insertBefore(n,y.children[5+8*e])}for(var r=0;r<24;r++){var o=document.createElement("div");o.className="game__unit game__unit_add",y.append(o)}},S=document.querySelector(".game__page_win");var L=function(){for(var e=1;e<=100;e++){var t=document.createElement("div"),n=Math.random();t.className="game__confetti game__confetti:nth-child(".concat(e,")"),t.style.background="rgba(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(n+.5,")"),t.style.left="".concat(e/100*100,"%"),t.style.animationDelay="-".concat(e*n,"s"),S.append(t)}};function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}for(var A=document.querySelector(".game__field"),j=document.querySelector(".game__page_win"),E=document.querySelector(".game__page_loose"),q=document.querySelectorAll(".game__page_button"),x=document.querySelectorAll(".game__unit"),O=[],T=0,C=!0,N=function(e){var t=x[e];t.addEventListener("click",(function(){if(!("1"===O[e]||"0"===O[e]||T>=16||!1===C)){O[e]="1",t.classList.add("game__cross"),T>=8&&I(O,r);for(var n=x.length,a=Math.floor(Math.random()*n);"1"===O[a]||"0"===O[a];)C=!1,a=Math.floor(Math.random()*n);if(O[a]="0",x[a].classList.add("game__zero"),C=!0,T>=8&&I(O,r),16===(T+=2)&&(A.classList.add("game__field_large"),b()),x=document.querySelectorAll(".game__unit"),16===T)for(var i=0;i<5;i++)O.splice(5+8*i,0,"","","");if(T>=16)for(var c=0;c<x.length;c++){x[c].classList.add("game__unit_large")}for(var l=function(e){var t=x[e];if(T<16)return{v:void 0};t.addEventListener("click",(function(){if(!("1"===O[e]||"0"===O[e]||T<16||!1===C)){O[e]="1",t.classList.add("game__cross"),I(O,o);for(var n=x.length,r=Math.floor(Math.random()*n);"1"===O[r]||"0"===O[r];)C=!1,r=Math.floor(Math.random()*n);O[r]="0",x[r].classList.add("game__zero"),C=!0,I(O,o),T+=2}}))},u=0;u<x.length;u++){var s=l(u);if("object"===M(s))return s.v}}}))},k=0;k<x.length;k++)N(k);function I(e,t){for(var n=0;n<t.length;n++){var r=w(t[n],5),o=r[0],a=r[1],i=r[2],c=r[3],l=r[4],u=[o,a,i,c,l];if(void 0!==e[o]&&e[o]===e[a]&&e[a]===e[i]&&e[i]===e[c]&&e[c]===e[l]){if("1"===e[o]){C=!1;for(var s=0;s<u.length;s++){x[u[s]].classList.add("game__unit_win_User")}setTimeout((function(){j.classList.add("game__page_active"),L()}),2500)}if("0"===e[o]){C=!1;for(var f=0;f<u.length;f++){x[u[f]].classList.add("game__unit_win_AI")}setTimeout((function(){E.classList.add("game__page_active")}),2500)}}}}for(var P=0;P<q.length;P++){q[P].addEventListener("click",U),document.addEventListener("keydown",(function(e){"Enter"!==e.code&&"Space"!==e.code&&"Escape"!==e.code||U()}))}function U(){x=document.querySelectorAll(".game__unit");for(var e=0;e<x.length;e++){var t=x[e];t.classList.remove("game__zero"),t.classList.remove("game__cross"),t.classList.remove("game__unit_large")}for(var n=document.querySelectorAll(".game__unit_add"),r=0;r<n.length;r++){n[r].remove(),A.classList.remove("game__field_large")}for(var o=document.querySelectorAll(".game__confetti"),a=0;a<o.length;a++){o[a].remove()}for(var i=document.querySelectorAll(".game__unit_win_User"),c=0;c<i.length;c++){i[c].classList.remove("game__unit_win_User")}for(var l=document.querySelectorAll(".game__unit_win_AI"),u=0;u<l.length;u++){l[u].classList.remove("game__unit_win_AI")}O.length=0,T=0,C=!0,E.classList.remove("game__page_active"),j.classList.remove("game__page_active")}n(2),n(4)}]);