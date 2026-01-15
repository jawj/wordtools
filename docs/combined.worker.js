var j=Symbol("Comlink.proxy"),q=Symbol("Comlink.endpoint"),B=Symbol("Comlink.releaseProxy"),S=Symbol(
"Comlink.finalizer"),k=Symbol("Comlink.thrown"),v=e=>typeof e=="object"&&e!==null||typeof e=="functi\
on",Y={canHandle:e=>v(e)&&e[j],serialize(e){let{port1:t,port2:r}=new MessageChannel;return A(e,t),[r,
[r]]},deserialize(e){return e.start(),K(e)}},$={canHandle:e=>v(e)&&k in e,serialize({value:e}){let t;
return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,
value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.
value}},I=new Map([["proxy",Y],["throw",$]]);function X(e,t){for(let r of e)if(t===r||r==="*"||r instanceof
RegExp&&r.test(t))return!0;return!1}function A(e,t=globalThis,r=["*"]){t.addEventListener("message",
function o(s){if(!s||!s.data)return;if(!X(r,s.origin)){console.warn(`Invalid origin '${s.origin}' fo\
r comlink proxy`);return}let{id:a,type:u,path:l}=Object.assign({path:[]},s.data),c=(s.data.argumentList||
[]).map(m),i;try{let n=l.slice(0,-1).reduce((f,d)=>f[d],e),g=l.reduce((f,d)=>f[d],e);switch(u){case"\
GET":i=g;break;case"SET":n[l.slice(-1)[0]]=m(s.data.value),i=!0;break;case"APPLY":i=g.apply(n,c);break;case"\
CONSTRUCT":{let f=new g(...c);i=re(f)}break;case"ENDPOINT":{let{port1:f,port2:d}=new MessageChannel;
A(e,d),i=te(f,[f])}break;case"RELEASE":i=void 0;break;default:return}}catch(n){i={value:n,[k]:0}}Promise.
resolve(i).catch(n=>({value:n,[k]:0})).then(n=>{let[g,f]=C(n);t.postMessage(Object.assign(Object.assign(
{},g),{id:a}),f),u==="RELEASE"&&(t.removeEventListener("message",o),D(t),S in e&&typeof e[S]=="funct\
ion"&&e[S]())}).catch(n=>{let[g,f]=C({value:new TypeError("Unserializable return value"),[k]:0});t.postMessage(
Object.assign(Object.assign({},g),{id:a}),f)})}),t.start&&t.start()}function J(e){return e.constructor.
name==="MessagePort"}function D(e){J(e)&&e.close()}function K(e,t){let r=new Map;return e.addEventListener(
"message",function(s){let{data:a}=s;if(!a||!a.id)return;let u=r.get(a.id);if(u)try{u(a)}finally{r.delete(
a.id)}}),R(e,r,[],t)}function E(e){if(e)throw new Error("Proxy has been released and is not useable")}
function H(e){return h(e,new Map,{type:"RELEASE"}).then(()=>{D(e)})}var M=new WeakMap,x="Finalizatio\
nRegistry"in globalThis&&new FinalizationRegistry(e=>{let t=(M.get(e)||0)-1;M.set(e,t),t===0&&H(e)});
function Q(e,t){let r=(M.get(t)||0)+1;M.set(t,r),x&&x.register(e,t,e)}function Z(e){x&&x.unregister(
e)}function R(e,t,r=[],o=function(){}){let s=!1,a=new Proxy(o,{get(u,l){if(E(s),l===B)return()=>{Z(a),
H(e),t.clear(),s=!0};if(l==="then"){if(r.length===0)return{then:()=>a};let c=h(e,t,{type:"GET",path:r.
map(i=>i.toString())}).then(m);return c.then.bind(c)}return R(e,t,[...r,l])},set(u,l,c){E(s);let[i,n]=C(
c);return h(e,t,{type:"SET",path:[...r,l].map(g=>g.toString()),value:i},n).then(m)},apply(u,l,c){E(s);
let i=r[r.length-1];if(i===q)return h(e,t,{type:"ENDPOINT"}).then(m);if(i==="bind")return R(e,t,r.slice(
0,-1));let[n,g]=z(c);return h(e,t,{type:"APPLY",path:r.map(f=>f.toString()),argumentList:n},g).then(
m)},construct(u,l){E(s);let[c,i]=z(l);return h(e,t,{type:"CONSTRUCT",path:r.map(n=>n.toString()),argumentList:c},
i).then(m)}});return Q(a,e),a}function ee(e){return Array.prototype.concat.apply([],e)}function z(e){
let t=e.map(C);return[t.map(r=>r[0]),ee(t.map(r=>r[1]))]}var N=new WeakMap;function te(e,t){return N.
set(e,t),e}function re(e){return Object.assign(e,{[j]:!0})}function C(e){for(let[t,r]of I)if(r.canHandle(e)){let[o,s]=r.serialize(e);return[{type:"HANDLER",name:t,
value:o},s]}return[{type:"RAW",value:e},N.get(e)||[]]}function m(e){switch(e.type){case"HANDLER":return I.
get(e.name).deserialize(e.value);case"RAW":return e.value}}function h(e,t,r,o){return new Promise(s=>{
let a=ne();t.set(a,s),e.start&&e.start(),e.postMessage(Object.assign({id:a},r),o)})}function ne(){return new Array(
4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}function F(e){return e.toLowerCase().replace(/[^a-z]+/g,"")}var w;async function P(){w===void 0&&(w=
await(await fetch("words.json")).json(),w.i=w.you)}var L;async function oe(){L===void 0&&(L=await(await fetch(
"multiwords.json")).json())}async function b(){return await P(),w}async function O(){return await oe(),
L}async function V(){return await P(),Object.keys(w).length}var p;function ae(e){return new RegExp("^"+e.replace(/[*]/g,".*").replace(/[?]/g,".")+"$")}async function ie(e,t){
let r=e.startsWith("~"),o=e.endsWith("<"),s=r?e:e.toLowerCase().replace(/[^a-z.?*]/g,""),a=r?new RegExp(
s.slice(1),"i"):ae(s),u=await(t?O():b()),l=[];for(let c in u)a.test(c)&&l.push(c);if(o){let c=new Set;
for(let n of l)c.add(n.split("").reverse().join(""));let i=[];for(let n in u)c.has(n)&&i.push(n);l=i}
return l}async function _(e,t,r,o,s,a){let u;try{u=p?.pattern===e&&p?.multi===a?p.results:await ie(e,
a)}catch(c){return u=[c.message],p={pattern:e,order:t,direction:r,multi:a,results:u},{count:-1,results:u}}
let l=await(a?O():b());if(p?.pattern!==e||p?.multi!==a||p.order!==t){let c=r==="asc"?1:-1;a?u.sort(t===
"freq"?(i,n)=>c*(l[i][1]-l[n][1]):t==="length"?(i,n)=>c*(i.length-n.length||l[n][1]-l[i][1]):(i,n)=>c*
i.localeCompare(n)):u.sort(t==="freq"?(i,n)=>c*(l[i]-l[n]):t==="length"?(i,n)=>c*(i.length-n.length||
l[n]-l[i]):(i,n)=>c*i.localeCompare(n))}else p.direction!==r&&u.reverse();return p={pattern:e,order:t,
direction:r,multi:a,results:u},{count:u.length,results:a?u.slice(o,o+s).map(c=>l[c][0]):u.slice(o,o+
s)}}var y;function ce(e){if(!y){y={};for(let t in e){let r=t.split("").sort().join("");y[r]??=[],y[r].push(
t)}}}function le(e){let t=e.split("").sort(),r=[],o=[],s;for(let a of t)s!==a&&(r.push(a),o.push(0)),
o[o.length-1]++,s=a;return[r,o]}function*ue(e){let[t,r]=le(e),o=t.length,s=0,a=t.map(()=>0),u=r.reduce(
(c,i)=>c*(i+1),1),l=Math.ceil(u/2);do{let c="",i="";for(let n=0;n<o;n++){let g=t[n],f=r[n],d=a[n];c+=
g.repeat(d),i+=g.repeat(f-d)}yield[i,c],s++;for(let n=0;n<o&&(a[n]++,!(a[n]<=r[n]));n++)a[n]=0}while(s<
l)}function*G(e,t=[]){for(let[r,o]of ue(e)){if(!y[r])continue;let s=[...t,r];o===""?yield s:yield*G(
o,s)}}function*fe(e){let t=e.map(o=>o.length),r=e.map(()=>0);for(;;){yield e.map((o,s)=>o[r[s]]);for(let o=0;o<
r.length&&(r[o]++,!(r[o]<t[o]));o++){if(o===r.length-1)return;r[o]=0}}}function ge(e,t){let r=e.length,
o=0,s=1/0;for(let u=0;u<r;u++){let l=e[u],c=t[l];c<s&&(s=c),o+=c}let a=o/r;return(s+.01*a)/(r+1)}async function U(e,t,r,o){
if(e=F(e),!e.length)return;let s=[],a=0,u=0,l=-1/0,c=!1,i=await b();ce(i);let n=()=>{c||(s.sort(([,f],[
,d])=>d-f),c=!0),s.length>t&&(s.splice(t),l=s[t-1][1])},g=typeof performance<"u"&&performance.now();
for(let f of G(e)){if(a>=u&&(s.length>t&&n(),u+=r,await o({working:!0,evaluated:a,anagrams:s})))break;
let d=f.map(W=>y[W]);for(let W of fe(d)){a++;let T=ge(W,i);T>l&&(s.push([W,T]),c=!1)}}n(),g&&console.
log(performance.now()-g+"ms"),await o({working:!1,evaluated:a,anagrams:s})}var de={loadWordWeights:P,getWordsCount:V,wordsMatchingPattern:_,find:U};A(de);
/*! Bundled license information:

comlink/dist/esm/comlink.mjs:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
