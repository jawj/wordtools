var j=Symbol("Comlink.proxy"),q=Symbol("Comlink.endpoint"),B=Symbol("Comlink.releaseProxy"),S=Symbol(
"Comlink.finalizer"),k=Symbol("Comlink.thrown"),v=t=>typeof t=="object"&&t!==null||typeof t=="functi\
on",Y={canHandle:t=>v(t)&&t[j],serialize(t){let{port1:e,port2:r}=new MessageChannel;return A(t,e),[r,
[r]]},deserialize(t){return t.start(),K(t)}},$={canHandle:t=>v(t)&&k in t,serialize({value:t}){let e;
return t instanceof Error?e={isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:e={isError:!1,
value:t},[e,[]]},deserialize(t){throw t.isError?Object.assign(new Error(t.value.message),t.value):t.
value}},I=new Map([["proxy",Y],["throw",$]]);function X(t,e){for(let r of t)if(e===r||r==="*"||r instanceof
RegExp&&r.test(e))return!0;return!1}function A(t,e=globalThis,r=["*"]){e.addEventListener("message",
function o(n){if(!n||!n.data)return;if(!X(r,n.origin)){console.warn(`Invalid origin '${n.origin}' fo\
r comlink proxy`);return}let{id:a,type:u,path:l}=Object.assign({path:[]},n.data),c=(n.data.argumentList||
[]).map(m),i;try{let s=l.slice(0,-1).reduce((f,d)=>f[d],t),g=l.reduce((f,d)=>f[d],t);switch(u){case"\
GET":i=g;break;case"SET":s[l.slice(-1)[0]]=m(n.data.value),i=!0;break;case"APPLY":i=g.apply(s,c);break;case"\
CONSTRUCT":{let f=new g(...c);i=rt(f)}break;case"ENDPOINT":{let{port1:f,port2:d}=new MessageChannel;
A(t,d),i=et(f,[f])}break;case"RELEASE":i=void 0;break;default:return}}catch(s){i={value:s,[k]:0}}Promise.
resolve(i).catch(s=>({value:s,[k]:0})).then(s=>{let[g,f]=C(s);e.postMessage(Object.assign(Object.assign(
{},g),{id:a}),f),u==="RELEASE"&&(e.removeEventListener("message",o),D(e),S in t&&typeof t[S]=="funct\
ion"&&t[S]())}).catch(s=>{let[g,f]=C({value:new TypeError("Unserializable return value"),[k]:0});e.postMessage(
Object.assign(Object.assign({},g),{id:a}),f)})}),e.start&&e.start()}function J(t){return t.constructor.
name==="MessagePort"}function D(t){J(t)&&t.close()}function K(t,e){let r=new Map;return t.addEventListener(
"message",function(n){let{data:a}=n;if(!a||!a.id)return;let u=r.get(a.id);if(u)try{u(a)}finally{r.delete(
a.id)}}),L(t,r,[],e)}function E(t){if(t)throw new Error("Proxy has been released and is not useable")}
function H(t){return h(t,new Map,{type:"RELEASE"}).then(()=>{D(t)})}var M=new WeakMap,x="Finalizatio\
nRegistry"in globalThis&&new FinalizationRegistry(t=>{let e=(M.get(t)||0)-1;M.set(t,e),e===0&&H(t)});
function Q(t,e){let r=(M.get(e)||0)+1;M.set(e,r),x&&x.register(t,e,t)}function Z(t){x&&x.unregister(
t)}function L(t,e,r=[],o=function(){}){let n=!1,a=new Proxy(o,{get(u,l){if(E(n),l===B)return()=>{Z(a),
H(t),e.clear(),n=!0};if(l==="then"){if(r.length===0)return{then:()=>a};let c=h(t,e,{type:"GET",path:r.
map(i=>i.toString())}).then(m);return c.then.bind(c)}return L(t,e,[...r,l])},set(u,l,c){E(n);let[i,s]=C(
c);return h(t,e,{type:"SET",path:[...r,l].map(g=>g.toString()),value:i},s).then(m)},apply(u,l,c){E(n);
let i=r[r.length-1];if(i===q)return h(t,e,{type:"ENDPOINT"}).then(m);if(i==="bind")return L(t,e,r.slice(
0,-1));let[s,g]=z(c);return h(t,e,{type:"APPLY",path:r.map(f=>f.toString()),argumentList:s},g).then(
m)},construct(u,l){E(n);let[c,i]=z(l);return h(t,e,{type:"CONSTRUCT",path:r.map(s=>s.toString()),argumentList:c},
i).then(m)}});return Q(a,t),a}function tt(t){return Array.prototype.concat.apply([],t)}function z(t){
let e=t.map(C);return[e.map(r=>r[0]),tt(e.map(r=>r[1]))]}var N=new WeakMap;function et(t,e){return N.
set(t,e),t}function rt(t){return Object.assign(t,{[j]:!0})}function C(t){for(let[e,r]of I)if(r.canHandle(t)){let[o,n]=r.serialize(t);return[{type:"HANDLER",name:e,
value:o},n]}return[{type:"RAW",value:t},N.get(t)||[]]}function m(t){switch(t.type){case"HANDLER":return I.
get(t.name).deserialize(t.value);case"RAW":return t.value}}function h(t,e,r,o){return new Promise(n=>{
let a=nt();e.set(a,n),t.start&&t.start(),t.postMessage(Object.assign({id:a},r),o)})}function nt(){return new Array(
4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}function F(t){return t.toLowerCase().replace(/[^a-z]+/g,"")}var w;async function P(){w===void 0&&(w=
await(await fetch("words.json")).json(),w.i=w.you)}var O;async function ot(){O===void 0&&(O=await(await fetch(
"multiwords.json")).json())}async function y(){return await P(),w}async function R(){return await ot(),
O}async function V(){return await P(),Object.keys(w).length}var p;function at(t){return new RegExp("^"+t.replace(/[*]/g,".*").replace(/[?]/g,".")+"$")}async function it(t,e){
let r=t.startsWith("~"),o=t.endsWith("<"),n=r?t:t.toLowerCase().replace(/[^a-z.?*]/g,""),a=r?new RegExp(
n.slice(1),"i"):at(n),u=await(e?R():y()),l=[];for(let c in u)a.test(c)&&l.push(c);if(o){let c=await y(),
i=await R(),s=[];for(let g of l){let f=g.split("").reverse().join("");(f in c||f in i)&&s.push(g)}l=
s}return l}async function _(t,e,r,o,n,a){let u;try{u=p?.pattern===t&&p?.multi===a?p.results:await it(
t,a)}catch(c){return u=[c.message],p={pattern:t,order:e,direction:r,multi:a,results:u},{count:-1,results:u}}
let l=await(a?R():y());if(p?.pattern!==t||p?.multi!==a||p.order!==e){let c=r==="asc"?1:-1;a?u.sort(e===
"freq"?(i,s)=>c*(l[i][1]-l[s][1]):e==="length"?(i,s)=>c*(i.length-s.length||l[s][1]-l[i][1]):(i,s)=>c*
i.localeCompare(s)):u.sort(e==="freq"?(i,s)=>c*(l[i]-l[s]):e==="length"?(i,s)=>c*(i.length-s.length||
l[s]-l[i]):(i,s)=>c*i.localeCompare(s))}else p.direction!==r&&u.reverse();return p={pattern:t,order:e,
direction:r,multi:a,results:u},{count:u.length,results:a?u.slice(o,o+n).map(c=>l[c][0]):u.slice(o,o+
n)}}var W;function ct(t){if(!W){W={};for(let e in t){let r=e.split("").sort().join("");W[r]??=[],W[r].push(
e)}}}function lt(t){let e=t.split("").sort(),r=[],o=[],n;for(let a of e)n!==a&&(r.push(a),o.push(0)),
o[o.length-1]++,n=a;return[r,o]}function*ut(t){let[e,r]=lt(t),o=e.length,n=0,a=e.map(()=>0),u=r.reduce(
(c,i)=>c*(i+1),1),l=Math.ceil(u/2);do{let c="",i="";for(let s=0;s<o;s++){let g=e[s],f=r[s],d=a[s];c+=
g.repeat(d),i+=g.repeat(f-d)}yield[i,c],n++;for(let s=0;s<o&&(a[s]++,!(a[s]<=r[s]));s++)a[s]=0}while(n<
l)}function*G(t,e=[]){for(let[r,o]of ut(t)){if(!W[r])continue;let n=[...e,r];o===""?yield n:yield*G(
o,n)}}function*ft(t){let e=t.map(o=>o.length),r=t.map(()=>0);for(;;){yield t.map((o,n)=>o[r[n]]);for(let o=0;o<
r.length&&(r[o]++,!(r[o]<e[o]));o++){if(o===r.length-1)return;r[o]=0}}}function gt(t,e){let r=t.length,
o=0,n=1/0;for(let u=0;u<r;u++){let l=t[u],c=e[l];c<n&&(n=c),o+=c}let a=o/r;return(n+.01*a)/(r+1)}async function U(t,e,r,o){
if(t=F(t),!t.length)return;let n=[],a=0,u=0,l=-1/0,c=!1,i=await y();ct(i);let s=()=>{c||(n.sort(([,f],[
,d])=>d-f),c=!0),n.length>e&&(n.splice(e),l=n[e-1][1])},g=typeof performance<"u"&&performance.now();
for(let f of G(t)){if(a>=u&&(n.length>e&&s(),u+=r,await o({working:!0,evaluated:a,anagrams:n})))break;
let d=f.map(b=>W[b]);for(let b of ft(d)){a++;let T=gt(b,i);T>l&&(n.push([b,T]),c=!1)}}s(),g&&console.
log(performance.now()-g+"ms"),await o({working:!1,evaluated:a,anagrams:n})}var dt={loadWordWeights:P,getWordsCount:V,wordsMatchingPattern:_,find:U};A(dt);
/*! Bundled license information:

comlink/dist/esm/comlink.mjs:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
