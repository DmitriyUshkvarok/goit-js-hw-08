!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var o,i,u,a,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(T,t),s?S(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function T(){var e=g();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return d?v(n,u-(e-l)):n}(e))}function h(e){return f=void 0,p&&o?S(e):(o=i=void 0,a)}function w(){var e=g(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(T,t),S(c)}return void 0===f&&(f=setTimeout(T,t)),a}return t=b(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(b(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const S=document.querySelector(".feedback-form"),j="feedback-form-state",O={};S.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(O))}),500)),S.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem(j))),e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(j)})),function(){const e=JSON.parse(localStorage.getItem(j)),t=document.querySelector(".feedback-form input"),n=document.querySelector(".feedback-form textarea");e&&(t.value=e.email,n.value=e.message)}()}();
//# sourceMappingURL=03-feedback.3a65b3ba.js.map
