"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["topic-suggestions"],{65935:(e,t,n)=>{let r;function o(e,t){let n=e.createElement("template");return n.innerHTML=t,e.importNode(n.content,!0)}function s(e){let t=new URLSearchParams,n=new FormData(e).entries();for(let[e,r]of[...n])t.append(e,r.toString());return t.toString()}n.d(t,{AC:()=>p,rK:()=>u,uT:()=>l});let ErrorWithResponse=class ErrorWithResponse extends Error{constructor(e,t){super(e),this.response=t}};function i(){let e,t;let n=new Promise(function(n,r){e=n,t=r});return[n,e,t]}let a=[],c=[];function l(e){a.push(e)}function u(e){c.push(e)}function p(e,t){r||(r=new Map,document.addEventListener("submit",f));let n=r.get(e)||[];r.set(e,[...n,t])}function d(e){let t=[];for(let n of r.keys())if(e.matches(n)){let e=r.get(n)||[];t.push(...e)}return t}function f(e){if(!(e.target instanceof HTMLFormElement)||e.defaultPrevented)return;let t=e.target,n=d(t);if(0===n.length)return;let r=m(t),[o,s,l]=i();e.preventDefault(),h(n,t,r,o).then(async e=>{if(e){for(let e of c)await e(t);g(r).then(s,l).catch(()=>{}).then(()=>{for(let e of a)e(t)})}else t.submit()},e=>{t.submit(),setTimeout(()=>{throw e})})}async function h(e,t,n,r){let o=!1;for(let s of e){let[e,a]=i(),c=()=>(o=!0,a(),r),l={text:c,json:()=>(n.headers.set("Accept","application/json"),c()),html:()=>(n.headers.set("Accept","text/html"),c())};await Promise.race([e,s(t,l,n)])}return o}function m(e){let t={method:e.method||"GET",url:e.action,headers:new Headers({"X-Requested-With":"XMLHttpRequest"}),body:null};if("GET"===t.method.toUpperCase()){let n=s(e);n&&(t.url+=(~t.url.indexOf("?")?"&":"?")+n)}else t.body=new FormData(e);return t}async function g(e){let t=await window.fetch(e.url,{method:e.method,body:null!==e.body?e.body:void 0,headers:e.headers,credentials:"same-origin"}),n={url:t.url,status:t.status,statusText:t.statusText,headers:t.headers,text:"",get json(){let e=this,t=JSON.parse(e.text);return delete e.json,e.json=t,e.json},get html(){let e=this;return delete e.html,e.html=o(document,e.text),e.html}},r=await t.text();if(n.text=r,t.ok)return n;throw new ErrorWithResponse("request failed",n)}},59753:(e,t,n)=>{function r(){if(!(this instanceof r))return new r;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}n.d(t,{f:()=>k,on:()=>M});var o,s=window.document.documentElement,i=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;r.prototype.matchesSelector=function(e,t){return i.call(e,t)},r.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},r.prototype.indexes=[];var a=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(a))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var c=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(c))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var l=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(l))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),r.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},o="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var u=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function p(e,t){var n,r,o,s,i,a,c=(e=e.slice(0).concat(e.default)).length,l=t,p=[];do if(u.exec(""),(o=u.exec(l))&&(l=o[3],o[2]||!l)){for(n=0;n<c;n++)if(i=(a=e[n]).selector(o[1])){for(r=p.length,s=!1;r--;)if(p[r].index===a&&p[r].key===i){s=!0;break}s||p.push({index:a,key:i});break}}while(o)return p}function d(e,t){var n,r,o;for(n=0,r=e.length;n<r;n++)if(o=e[n],t.isPrototypeOf(o))return o}function f(e,t){return e.id-t.id}r.prototype.logDefaultIndexUsed=function(){},r.prototype.add=function(e,t){var n,r,s,i,a,c,l,u,f=this.activeIndexes,h=this.selectors,m=this.selectorObjects;if("string"==typeof e){for(r=0,m[(n={id:this.uid++,selector:e,data:t}).id]=n,l=p(this.indexes,e);r<l.length;r++)i=(u=l[r]).key,(a=d(f,s=u.index))||((a=Object.create(s)).map=new o,f.push(a)),s===this.indexes.default&&this.logDefaultIndexUsed(n),(c=a.map.get(i))||(c=[],a.map.set(i,c)),c.push(n);this.size++,h.push(e)}},r.prototype.remove=function(e,t){if("string"==typeof e){var n,r,o,s,i,a,c,l,u=this.activeIndexes,d=this.selectors=[],f=this.selectorObjects,h={},m=1==arguments.length;for(o=0,n=p(this.indexes,e);o<n.length;o++)for(r=n[o],s=u.length;s--;)if(a=u[s],r.index.isPrototypeOf(a)){if(c=a.map.get(r.key))for(i=c.length;i--;)(l=c[i]).selector===e&&(m||l.data===t)&&(c.splice(i,1),h[l.id]=!0);break}for(o in h)delete f[o],this.size--;for(o in f)d.push(f[o].selector)}},r.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,r,o,s,i,a,c,l={},u=[],p=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,r=p.length;t<r;t++)for(n=0,s=p[t],o=(i=this.matches(s)).length;n<o;n++)l[(c=i[n]).id]?a=l[c.id]:(a={id:c.id,selector:c.selector,data:c.data,elements:[]},l[c.id]=a,u.push(a)),a.elements.push(s);return u.sort(f)},r.prototype.matches=function(e){if(!e)return[];var t,n,r,o,s,i,a,c,l,u,p,d=this.activeIndexes,h={},m=[];for(t=0,o=d.length;t<o;t++)if(c=(a=d[t]).element(e)){for(n=0,s=c.length;n<s;n++)if(l=a.map.get(c[n]))for(r=0,i=l.length;r<i;r++)!h[p=(u=l[r]).id]&&this.matchesSelector(e,u.selector)&&(h[p]=!0,m.push(u))}return m.sort(f)};var h={},m={},g=new WeakMap,y=new WeakMap,w=new WeakMap,v=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function b(e,t,n){var r=e[t];return e[t]=function(){return n.apply(e,arguments),r.apply(e,arguments)},e}function x(e,t,n){var r=[],o=t;do{if(1!==o.nodeType)break;var s=e.matches(o);if(s.length){var i={node:o,observers:s};n?r.unshift(i):r.push(i)}}while(o=o.parentElement)return r}function j(){g.set(this,!0)}function T(){g.set(this,!0),y.set(this,!0)}function S(){return w.get(this)||null}function q(e,t){v&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||v.get})}function L(e){try{return e.eventPhase,!0}catch(e){return!1}}function E(e){if(L(e)){var t=(1===e.eventPhase?m:h)[e.type];if(t){var n=x(t,e.target,1===e.eventPhase);if(n.length){b(e,"stopPropagation",j),b(e,"stopImmediatePropagation",T),q(e,S);for(var r=0,o=n.length;r<o&&!g.get(e);r++){var s=n[r];w.set(e,s.node);for(var i=0,a=s.observers.length;i<a&&!y.get(e);i++)s.observers[i].data.call(s.node,e)}w.delete(e),q(e)}}}}function M(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=!!o.capture,i=s?m:h,a=i[e];a||(a=new r,i[e]=a,document.addEventListener(e,E,s)),a.add(t,n)}function k(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n}))}},34892:(e,t,n)=>{n.d(t,{DF:()=>u,Fr:()=>p,a_:()=>l});var r=n(75662);function o(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}let s=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};function i(e,t,n=!1){let r=t.headers.get("content-type")||"";if(!n&&!r.startsWith("text/html"))throw new s(`expected response with text/html, but was ${r}`,t);if(n&&!(r.startsWith("text/html")||r.startsWith("application/json")))throw new s(`expected response with text/html or application/json, but was ${r}`,t);let o=t.headers.get("x-html-safe");if(o){if(!e.includes(o))throw new s("response X-HTML-Safe nonce did not match",t)}else throw new s("missing X-HTML-Safe nonce",t)}var a=n(22490);let c=a.Z.createPolicy("server-x-safe-html",{createHTML:(e,t)=>(i(o(document),t),e)});async function l(e,t,n){let o=new Request(t,n);o.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(o);if(s.status<200||s.status>=300)throw Error(`HTTP ${s.status}${s.statusText||""}`);let i=c.createHTML(await s.text(),s);return(0,r.r)(e,i)}function u(e,t,n=1e3,r=[200]){return async function n(o){let s=new Request(e,t);s.headers.append("X-Requested-With","XMLHttpRequest");let i=await self.fetch(s);if(202===i.status)return await new Promise(e=>setTimeout(e,o)),n(1.5*o);if(r.includes(i.status))return i;if(i.status<200||i.status>=300)throw Error(`HTTP ${i.status}${i.statusText||""}`);throw Error(`Unexpected ${i.status} response status from poll endpoint`)}(n)}async function p(e,t,n){let{wait:r=500,acceptedStatusCodes:o=[200],max:s=3,attempt:i=0}=n||{},a=async()=>new Promise((n,a)=>{setTimeout(async()=>{try{let r=new Request(e,t);r.headers.append("X-Requested-With","XMLHttpRequest");let a=await self.fetch(r);if(o.includes(a.status)||i+1===s)return n(a);n("retry")}catch(e){a(e)}},r*i)}),c=await a();return"retry"!==c?c:p(e,t,{wait:r,acceptedStatusCodes:o,max:s,attempt:i+1})}},75662:(e,t,n)=>{n.d(t,{r:()=>r});function r(e,t){let n=e.createElement("template");return n.innerHTML=t,e.importNode(n.content,!0)}},29352:(e,t,n)=>{var r=n(34892),o=n(59753),s=n(65935);function i(e){let t=e.querySelector(".js-topic-suggestions-box"),n=t.querySelector(".js-topic-suggestion");n||t.remove()}function a(e){let t=e.closest(".js-topic-save-notice-container"),n=t.querySelector(".js-repo-topics-save-notice");n.classList.remove("d-none"),n.classList.add("d-inline-block","anim-fade-in"),setTimeout(()=>{n.classList.remove("d-inline-block"),n.classList.add("d-none")},1900)}async function c(e){let t=e.querySelector(".js-topic-suggestions-container");if(!t)return;let n=t.getAttribute("data-url");if(!n)throw Error("could not get url");let o=await (0,r.a_)(document,n);t.textContent="",t.appendChild(o)}(0,o.on)("click",".js-accept-topic-button",function(e){let t=e.currentTarget,n=t.closest(".js-topic-form-area"),r=t.closest(".js-topic-suggestion"),o=n.querySelector(".js-template"),s=n.querySelector(".js-tag-input-selected-tags"),a=o.cloneNode(!0),c=t.getAttribute("data-topic-name")||"";a.querySelector("input").value=c,a.querySelector(".js-placeholder-tag-name").replaceWith(c),a.classList.remove("d-none","js-template"),s.appendChild(a),r.remove(),i(n)}),(0,s.AC)(".js-accept-topic-form",async function(e,t){await t.html();let n=e.closest(".js-topic-form-area"),r=e.closest(".js-topic-suggestion"),o=n.querySelector(".js-template"),s=n.querySelector(".js-tag-input-selected-tags"),l=o.cloneNode(!0),u=r.querySelector('input[name="input[name]"]').value;l.querySelector("input").value=u,l.querySelector(".js-placeholder-tag-name").replaceWith(u),l.classList.remove("d-none","js-template"),s.appendChild(l),r.remove(),c(n),i(n),a(e)}),(0,o.on)("click",".js-decline-topic-button",function(e){let t=e.currentTarget,n=t.closest(".js-topic-form-area"),r=t.closest(".js-topic-suggestion");setTimeout(()=>{r.remove(),i(n)},0)}),(0,s.AC)(".js-decline-topic-form",async function(e,t){await t.html(),a(e);let n=e.closest(".js-topic-form-area"),r=e.closest(".js-topic-suggestion");r.remove(),c(n),i(n)})},86283:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>o.iG,jX:()=>o.jX,n4:()=>o.n4});var r=n(35647),o=n(73614)},73614:(e,t,n)=>{n.d(t,{iG:()=>o,jX:()=>s,n4:()=>r});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,s="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},35647:(e,t,n)=>{n.d(t,{Qg:()=>s,W6:()=>o,cF:()=>i});var r=n(73614);let o=void 0===r.n4,s=!o;function i(){return!!o||Boolean(r.n4.querySelector('react-app[data-ssr="true"]'))}},22490:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(86283);function o(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:o("createHTML"),createScript:o("createScript"),createScriptURL:o("createScriptURL")},i={createPolicy:(e,t)=>({name:e,...s,...t})},a=globalThis.trustedTypes??i,c=!1;r.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||c||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),c=!0)})}},e=>{var t=e(e.s=29352)}]);
//# sourceMappingURL=topic-suggestions-290e418ebab6.js.map