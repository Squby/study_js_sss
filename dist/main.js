!function(e){var n={};function t(c){if(n[c])return n[c].exports;var o=n[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(c,o,function(n){return e[n]}.bind(null,o));return c},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var c=function(){var e=document.querySelectorAll(".call-btn"),n=document.querySelector(".popup");e.forEach((function(e){e.addEventListener("click",(function(){n.style.display="block"}))})),n.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?n.style.display="none":(t=t.closest(".popup-content"))||(n.style.display="none")}));var t=document.querySelectorAll(".discount-btn"),c=document.querySelector(".popup-discount");t.forEach((function(e){e.addEventListener("click",(function(){c.style.display="block"}))})),c.addEventListener("click",(function(e){var n=e.target;n.classList.contains("popup-close")?c.style.display="none":(n=n.closest(".popup-content"))||(c.style.display="none")}));var o=document.querySelector(".check-btn"),r=document.querySelector(".popup-check");o.addEventListener("click",(function(){r.style.display="block"})),r.addEventListener("click",(function(e){var n=e.target;n.classList.contains("popup-close")?r.style.display="none":(n=n.closest(".popup-content"))||(r.style.display="none")}))},o=function(){var e=document.querySelector(".add-sentence-btn"),n=document.querySelector(".sentence"),t=Array.from(n.children[0].children[0].children[1].children);e.addEventListener("click",(function(){t.forEach((function(n){console.log(n),(n.classList.contains("hidden")||n.classList.contains("visible-sm-block"))&&(n.classList.remove("hidden"),n.classList.remove("visible-sm-block")),e.style.display="none"}))}))};(function(){var e=document.getElementById("accordion-two"),n=Array.from(e.children);n.forEach((function(e){e.addEventListener("click",(function(){event.preventDefault(),n.forEach((function(e){e.children[1].classList.contains("in")&&e.children[1].classList.remove("in")})),e.children[1].classList.add("in")}))}))})(),o(),c()}]);