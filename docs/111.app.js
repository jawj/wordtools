/*! For license information please see 111.app.js.LICENSE.txt */
(()=>{"use strict";const e=Symbol("Comlink.proxy"),t=Symbol("Comlink.endpoint"),n=Symbol("Comlink.releaseProxy"),r=Symbol("Comlink.finalizer"),o=Symbol("Comlink.thrown"),a=e=>"object"==typeof e&&null!==e||"function"==typeof e,s={canHandle:t=>a(t)&&t[e],serialize(e){const{port1:t,port2:n}=new MessageChannel;return c(e,t),[n,[n]]},deserialize:e=>(e.start(),function(e){const t=new Map;return e.addEventListener("message",(function(e){const{data:n}=e;if(!n||!n.id)return;const r=t.get(n.id);if(r)try{r(n)}finally{t.delete(n.id)}})),d(e,t,[],void 0)}(e))},i=new Map([["proxy",s],["throw",{canHandle:e=>a(e)&&o in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function c(t,n=globalThis,a=["*"]){n.addEventListener("message",(function s(i){if(!i||!i.data)return;if(!function(e,t){for(const n of e){if(t===n||"*"===n)return!0;if(n instanceof RegExp&&n.test(t))return!0}return!1}(a,i.origin))return void console.warn(`Invalid origin '${i.origin}' for comlink proxy`);const{id:u,type:f,path:p}=Object.assign({path:[]},i.data),g=(i.data.argumentList||[]).map(w);let d;try{const n=p.slice(0,-1).reduce(((e,t)=>e[t]),t),r=p.reduce(((e,t)=>e[t]),t);switch(f){case"GET":d=r;break;case"SET":n[p.slice(-1)[0]]=w(i.data.value),d=!0;break;case"APPLY":d=r.apply(n,g);break;case"CONSTRUCT":d=function(t){return Object.assign(t,{[e]:!0})}(new r(...g));break;case"ENDPOINT":{const{port1:e,port2:n}=new MessageChannel;c(t,n),d=function(e,t){return m.set(e,t),e}(e,[e])}break;case"RELEASE":d=void 0;break;default:return}}catch(e){d={value:e,[o]:0}}Promise.resolve(d).catch((e=>({value:e,[o]:0}))).then((e=>{const[o,a]=y(e);n.postMessage(Object.assign(Object.assign({},o),{id:u}),a),"RELEASE"===f&&(n.removeEventListener("message",s),l(n),r in t&&"function"==typeof t[r]&&t[r]())})).catch((e=>{const[t,r]=y({value:new TypeError("Unserializable return value"),[o]:0});n.postMessage(Object.assign(Object.assign({},t),{id:u}),r)}))})),n.start&&n.start()}function l(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function u(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e){return v(e,new Map,{type:"RELEASE"}).then((()=>{l(e)}))}const p=new WeakMap,g="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(p.get(e)||0)-1;p.set(e,t),0===t&&f(e)}));function d(e,r,o=[],a=function(){}){let s=!1;const i=new Proxy(a,{get(t,a){if(u(s),a===n)return()=>{!function(e){g&&g.unregister(e)}(i),f(e),r.clear(),s=!0};if("then"===a){if(0===o.length)return{then:()=>i};const t=v(e,r,{type:"GET",path:o.map((e=>e.toString()))}).then(w);return t.then.bind(t)}return d(e,r,[...o,a])},set(t,n,a){u(s);const[i,c]=y(a);return v(e,r,{type:"SET",path:[...o,n].map((e=>e.toString())),value:i},c).then(w)},apply(n,a,i){u(s);const c=o[o.length-1];if(c===t)return v(e,r,{type:"ENDPOINT"}).then(w);if("bind"===c)return d(e,r,o.slice(0,-1));const[l,f]=h(i);return v(e,r,{type:"APPLY",path:o.map((e=>e.toString())),argumentList:l},f).then(w)},construct(t,n){u(s);const[a,i]=h(n);return v(e,r,{type:"CONSTRUCT",path:o.map((e=>e.toString())),argumentList:a},i).then(w)}});return function(e,t){const n=(p.get(t)||0)+1;p.set(t,n),g&&g.register(e,t,e)}(i,e),i}function h(e){const t=e.map(y);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const m=new WeakMap;function y(e){for(const[t,n]of i)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},o]}return[{type:"RAW",value:e},m.get(e)||[]]}function w(e){switch(e.type){case"HANDLER":return i.get(e.name).deserialize(e.value);case"RAW":return e.value}}function v(e,t,n,r){return new Promise((o=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.set(a,o),e.start&&e.start(),e.postMessage(Object.assign({id:a},n),r)}))}let E,b,k;async function S(){if(void 0===E){const e=await fetch("words.json");E=await e.json(),E.i=E.you}}async function M(){return await S(),E}function*j(e,t=[]){for(const[n,r]of function*(e){const[t,n]=function(e){const t=e.split("").sort(),n=[],r=[];let o;for(const e of t)o!==e&&(n.push(e),r.push(0)),r[r.length-1]++,o=e;return[n,r]}(e),r=t.length;let o=0,a=t.map((()=>0));const s=n.reduce(((e,t)=>e*(t+1)),1),i=Math.ceil(s/2);do{let e="",s="";for(let o=0;o<r;o++){const r=t[o],i=n[o],c=a[o];e+=r.repeat(c),s+=r.repeat(i-c)}yield[s,e],o++;for(let e=0;e<r&&(a[e]++,!(a[e]<=n[e]));e++)a[e]=0}while(o<i)}(e)){if(!k[n])continue;const e=[...t,n];""===r?yield e:yield*j(r,e)}}function*C(e){const t=e.map((e=>e.length)),n=e.map((()=>0));for(;;){yield e.map(((e,t)=>e[n[t]]));for(let e=0;e<n.length&&(n[e]++,!(n[e]<t[e]));e++){if(e===n.length-1)return;n[e]=0}}}function L(e,t){const n=e.map((e=>t[e]));return Math.min(...n)/(e.length+1)}const R={loadWordWeights:S,getWordsCount:async function(){return await S(),Object.keys(E).length},wordsMatchingPattern:async function(e,t,n,r,o){let a;try{a=(null==b?void 0:b.pattern)===e?b.results:await async function(e){const t=e.startsWith("~"),n=e.endsWith("<"),r=t?e:e.toLowerCase().replace(/[^a-z.?*]/g,""),o=t?new RegExp(r.slice(1),"i"):function(e){return new RegExp("^"+e.replace(/[*]/g,".*").replace(/[?]/g,".")+"$")}(r),a=await M();let s=[];for(const e in a)o.test(e)&&s.push(e);if(n){const e=new Set;for(const t of s)e.add(t.split("").reverse().join(""));const t=[];for(const n in a)e.has(n)&&t.push(n);s=t}return s}(e)}catch(r){return a=[r.message],b={pattern:e,order:t,direction:n,results:a},{count:-1,results:a}}if((null==b?void 0:b.pattern)!==e||b.order!==t){const e=await M(),r="asc"===n?1:-1;a.sort("freq"===t?(t,n)=>r*(e[t]-e[n]):"length"===t?(t,n)=>r*(t.length-n.length||e[n]-e[t]):(e,t)=>r*e.localeCompare(t))}else b.direction!==n&&a.reverse();return b={pattern:e,order:t,direction:n,results:a},{count:a.length,results:a.slice(r,r+o)}},find:async function(e,t,n,r){if(!(e=function(e){return e.toLowerCase().replace(/[^a-z]+/g,"")}(e)).length)return;const o=[];let a=0,s=0,i=-1/0;const c=await M();!function(e){var t;if(!k){k={};for(const n in e){const e=n.split("").sort().join("");null!==(t=k[e])&&void 0!==t||(k[e]=[]),k[e].push(n)}}}(c);const l="undefined"!=typeof performance&&performance.now();for(const l of j(e)){if(a>=s&&(s+=n,await r({working:!0,evaluated:a,anagrams:o})))break;const e=l.map((e=>k[e]));for(const t of C(e)){a++;const e=L(t,c);e>i&&o.push([t,e])}o.length>t&&(o.sort((([,e],[,t])=>t-e)),o.splice(t),i=o[t-1][1])}l&&console.log(performance.now()-l+"ms"),await r({working:!1,evaluated:a,anagrams:o})}};c(R)})();