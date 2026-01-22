var j=Symbol("Comlink.proxy"),B=Symbol("Comlink.endpoint"),Y=Symbol("Comlink.releaseProxy"),S=Symbol(
"Comlink.finalizer"),M=Symbol("Comlink.thrown"),v=e=>typeof e=="object"&&e!==null||typeof e=="functi\
on",$={canHandle:e=>v(e)&&e[j],serialize(e){let{port1:t,port2:r}=new MessageChannel;return P(e,t),[r,
[r]]},deserialize(e){return e.start(),Q(e)}},X={canHandle:e=>v(e)&&M in e,serialize({value:e}){let t;
return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,
value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.
value}},I=new Map([["proxy",$],["throw",X]]);function J(e,t){for(let r of e)if(t===r||r==="*"||r instanceof
RegExp&&r.test(t))return!0;return!1}function P(e,t=globalThis,r=["*"]){t.addEventListener("message",
function a(n){if(!n||!n.data)return;if(!J(r,n.origin)){console.warn(`Invalid origin '${n.origin}' fo\
r comlink proxy`);return}let{id:i,type:l,path:u}=Object.assign({path:[]},n.data),c=(n.data.argumentList||
[]).map(h),o;try{let s=u.slice(0,-1).reduce((f,d)=>f[d],e),g=u.reduce((f,d)=>f[d],e);switch(l){case"\
GET":o=g;break;case"SET":s[u.slice(-1)[0]]=h(n.data.value),o=!0;break;case"APPLY":o=g.apply(s,c);break;case"\
CONSTRUCT":{let f=new g(...c);o=ne(f)}break;case"ENDPOINT":{let{port1:f,port2:d}=new MessageChannel;
P(e,d),o=re(f,[f])}break;case"RELEASE":o=void 0;break;default:return}}catch(s){o={value:s,[M]:0}}Promise.
resolve(o).catch(s=>({value:s,[M]:0})).then(s=>{let[g,f]=C(s);t.postMessage(Object.assign(Object.assign(
{},g),{id:i}),f),l==="RELEASE"&&(t.removeEventListener("message",a),D(t),S in e&&typeof e[S]=="funct\
ion"&&e[S]())}).catch(s=>{let[g,f]=C({value:new TypeError("Unserializable return value"),[M]:0});t.postMessage(
Object.assign(Object.assign({},g),{id:i}),f)})}),t.start&&t.start()}function K(e){return e.constructor.
name==="MessagePort"}function D(e){K(e)&&e.close()}function Q(e,t){let r=new Map;return e.addEventListener(
"message",function(n){let{data:i}=n;if(!i||!i.id)return;let l=r.get(i.id);if(l)try{l(i)}finally{r.delete(
i.id)}}),L(e,r,[],t)}function E(e){if(e)throw new Error("Proxy has been released and is not useable")}
function H(e){return w(e,new Map,{type:"RELEASE"}).then(()=>{D(e)})}var k=new WeakMap,x="Finalizatio\
nRegistry"in globalThis&&new FinalizationRegistry(e=>{let t=(k.get(e)||0)-1;k.set(e,t),t===0&&H(e)});
function Z(e,t){let r=(k.get(t)||0)+1;k.set(t,r),x&&x.register(e,t,e)}function ee(e){x&&x.unregister(
e)}function L(e,t,r=[],a=function(){}){let n=!1,i=new Proxy(a,{get(l,u){if(E(n),u===Y)return()=>{ee(
i),H(e),t.clear(),n=!0};if(u==="then"){if(r.length===0)return{then:()=>i};let c=w(e,t,{type:"GET",path:r.
map(o=>o.toString())}).then(h);return c.then.bind(c)}return L(e,t,[...r,u])},set(l,u,c){E(n);let[o,s]=C(
c);return w(e,t,{type:"SET",path:[...r,u].map(g=>g.toString()),value:o},s).then(h)},apply(l,u,c){E(n);
let o=r[r.length-1];if(o===B)return w(e,t,{type:"ENDPOINT"}).then(h);if(o==="bind")return L(e,t,r.slice(
0,-1));let[s,g]=z(c);return w(e,t,{type:"APPLY",path:r.map(f=>f.toString()),argumentList:s},g).then(
h)},construct(l,u){E(n);let[c,o]=z(u);return w(e,t,{type:"CONSTRUCT",path:r.map(s=>s.toString()),argumentList:c},
o).then(h)}});return Z(i,e),i}function te(e){return Array.prototype.concat.apply([],e)}function z(e){
let t=e.map(C);return[t.map(r=>r[0]),te(t.map(r=>r[1]))]}var N=new WeakMap;function re(e,t){return N.
set(e,t),e}function ne(e){return Object.assign(e,{[j]:!0})}function C(e){for(let[t,r]of I)if(r.canHandle(e)){let[a,n]=r.serialize(e);return[{type:"HANDLER",name:t,
value:a},n]}return[{type:"RAW",value:e},N.get(e)||[]]}function h(e){switch(e.type){case"HANDLER":return I.
get(e.name).deserialize(e.value);case"RAW":return e.value}}function w(e,t,r,a){return new Promise(n=>{
let i=se();t.set(i,n),e.start&&e.start(),e.postMessage(Object.assign({id:i},r),a)})}function se(){return new Array(
4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}function F(e){return e.toLowerCase().replace(/[^a-z]+/g,"")}var y;async function A(){y===void 0&&(y=
await(await fetch("words.json")).json(),y.i=y.you)}var O;async function ae(){O===void 0&&(O=await(await fetch(
"multiwords.json")).json())}async function W(){return await A(),y}async function R(){return await ae(),
O}async function V(){return await A(),Object.keys(y).length}var p;function _(e,t=!1){return new RegExp("^"+e.replace(/[*]/g,t?"[^ ]*":".*").replace(/[?]/g,t?"[^\
 ]":".")+"$")}async function ie(e,t){let r=e.startsWith("~"),a=e.endsWith("<"),n=e.toLowerCase(),i=r?
e:n.replace(/[^a-z.?*]/g,""),l=r?new RegExp(i.slice(1),"i"):_(i),u=await(t?R():W()),c=[];for(let o in u)
l.test(o)&&c.push(o);if(a){let o=await W(),s=await R(),g=[];for(let f of c){let d=f.split("").reverse().
join("");(d in o||d in s)&&g.push(f)}c=g}if(t&&e.indexOf(" ")!==-1){let o=n.replace(/[^a-z.?* ]/g,""),
s=r?new RegExp(o.slice(1),"i"):_(o,!0),g=[];for(let f of c){let m=u[f][0].toLowerCase().replace(/-/g,
" ").replace(/[^a-z.?* ]/g,"");s.test(m)&&g.push(f)}c=g}return c}async function G(e,t,r,a,n,i){let l;
try{l=p?.pattern===e&&p?.multi===i?p.results:await ie(e,i)}catch(c){return l=[c.message],p={pattern:e,
order:t,direction:r,multi:i,results:l},{count:-1,results:l}}let u=await(i?R():W());if(p?.pattern!==e||
p?.multi!==i||p.order!==t){let c=r==="asc"?1:-1;i?l.sort(t==="freq"?(o,s)=>c*(u[o][1]-u[s][1]):t==="\
length"?(o,s)=>c*(o.length-s.length||u[s][1]-u[o][1]):(o,s)=>c*o.localeCompare(s)):l.sort(t==="freq"?
(o,s)=>c*(u[o]-u[s]):t==="length"?(o,s)=>c*(o.length-s.length||u[s]-u[o]):(o,s)=>c*o.localeCompare(s))}else
p.direction!==r&&l.reverse();return p={pattern:e,order:t,direction:r,multi:i,results:l},{count:l.length,
results:i?l.slice(a,a+n).map(c=>u[c][0]):l.slice(a,a+n)}}var b;function ce(e){if(!b){b={};for(let t in e){let r=t.split("").sort().join("");b[r]??=[],b[r].push(
t)}}}function le(e){let t=e.split("").sort(),r=[],a=[],n;for(let i of t)n!==i&&(r.push(i),a.push(0)),
a[a.length-1]++,n=i;return[r,a]}function*ue(e){let[t,r]=le(e),a=t.length,n=0,i=t.map(()=>0),l=r.reduce(
(c,o)=>c*(o+1),1),u=Math.ceil(l/2);do{let c="",o="";for(let s=0;s<a;s++){let g=t[s],f=r[s],d=i[s];c+=
g.repeat(d),o+=g.repeat(f-d)}yield[o,c],n++;for(let s=0;s<a&&(i[s]++,!(i[s]<=r[s]));s++)i[s]=0}while(n<
u)}function*U(e,t=[]){for(let[r,a]of ue(e)){if(!b[r])continue;let n=[...t,r];a===""?yield n:yield*U(
a,n)}}function*fe(e){let t=e.map(a=>a.length),r=e.map(()=>0);for(;;){yield e.map((a,n)=>a[r[n]]);for(let a=0;a<
r.length&&(r[a]++,!(r[a]<t[a]));a++){if(a===r.length-1)return;r[a]=0}}}function ge(e,t){let r=e.length,
a=0,n=1/0;for(let l=0;l<r;l++){let u=e[l],c=t[u];c<n&&(n=c),a+=c}let i=a/r;return(n+.01*i)/(r+1)}async function q(e,t,r,a){
if(e=F(e),!e.length)return;let n=[],i=0,l=0,u=-1/0,c=!1,o=await W();ce(o);let s=()=>{c||(n.sort(([,f],[
,d])=>d-f),c=!0),n.length>t&&(n.splice(t),u=n[t-1][1])},g=typeof performance<"u"&&performance.now();
for(let f of U(e)){if(i>=l&&(n.length>t&&s(),l+=r,await a({working:!0,evaluated:i,anagrams:n})))break;
let d=f.map(m=>b[m]);for(let m of fe(d)){i++;let T=ge(m,o);T>u&&(n.push([m,T]),c=!1)}}s(),g&&console.
log(performance.now()-g+"ms"),await a({working:!1,evaluated:i,anagrams:n})}var de={loadWordWeights:A,getWordsCount:V,wordsMatchingPattern:G,find:q};P(de);
/*! Bundled license information:

comlink/dist/esm/comlink.mjs:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
