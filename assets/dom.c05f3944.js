import{aL as u,aM as l,aN as d,aO as h,aP as L,aQ as r,aR as x,af as C}from"./App.bfe855a2.js";function b(s,n,t,i){for(var a=s.length,c=t+(i?1:-1);i?c--:++c<a;)if(n(s[c],c,s))return c;return-1}function O(s){return s!==s}function p(s,n,t){for(var i=t-1,a=s.length;++i<a;)if(s[i]===n)return i;return-1}function f(s,n,t){return n===n?p(s,n,t):b(s,O,t)}var $=u(function(s,n,t){return n=n.toLowerCase(),s+(t?l(n):n)});const g=$;function j(s,n){for(var t=s.length;t--&&f(n,s[t],0)>-1;);return t}function m(s,n){for(var t=-1,i=s.length;++t<i&&f(n,s[t],0)>-1;);return t}function v(s,n,t){if(s=d(s),s&&(t||n===void 0))return h(s);if(!s||!(n=L(n)))return s;var i=r(s),a=r(n),c=m(i,a),e=j(i,a)+1;return x(i,c,e).join("")}const E=function(s,n,t,i=!1){s&&n&&t&&s.addEventListener(n,t,i)},I=function(s,n,t){s&&n&&t&&s.removeEventListener(n,t,!1)},w=function(s,n,t){const i=a=>{t(a),I(s,n,i)};E(s,n,i)};function o(s,n){if(!s||!n)return!1;if(n.indexOf(" ")!==-1)throw new Error("className should not contain space.");return s.classList?s.classList.contains(n):` ${s.className} `.indexOf(` ${n} `)>-1}function T(s,n){if(!s)return;let t=s.className;const i=(n||"").split(" ");for(let a=0,c=i.length;a<c;a++){const e=i[a];!e||(s.classList?s.classList.add(e):o(s,e)||(t+=` ${e}`))}s.classList||(s.className=t)}function k(s,n){if(!s||!n)return;const t=n.split(" ");let i=` ${s.className} `;for(let a=0,c=t.length;a<c;a++){const e=t[a];!e||(s.classList?s.classList.remove(e):o(s,e)&&(i=i.replace(` ${e} `," ")))}s.classList||(s.className=v(i))}function N(s,n,t){!s||!n||(C(n)?Object.keys(n).forEach(i=>{N(s,i,n[i])}):(n=g(n),s.style[n]=t))}export{T as a,I as b,w as c,E as o,k as r,N as s};
