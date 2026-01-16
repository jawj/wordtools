var Tr=Object.create;var mt=Object.defineProperty;var Mr=Object.getOwnPropertyDescriptor;var kr=Object.getOwnPropertyNames;var Rr=Object.getPrototypeOf,zr=Object.prototype.hasOwnProperty;var I=(r,i)=>()=>(i||r((i={exports:{}}).exports,i),i.exports);var Nr=(r,i,s,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let c of kr(i))!zr.call(r,c)&&
c!==s&&mt(r,c,{get:()=>i[c],enumerable:!(l=Mr(i,c))||l.enumerable});return r};var me=(r,i,s)=>(s=r!=null?Tr(Rr(r)):{},Nr(i||!r||!r.__esModule?mt(s,"default",{value:r,enumerable:!0}):
s,r));var G=I((Tn,pt)=>{"use strict";function Z(r,i,s,l,c,o){return{tag:r,key:i,attrs:s,children:l,text:c,
dom:o,is:void 0,domSize:void 0,state:void 0,events:void 0,instance:void 0}}Z.normalize=function(r){return Array.
isArray(r)?Z("[",void 0,void 0,Z.normalizeChildren(r),void 0,void 0):r==null||typeof r=="boolean"?null:
typeof r=="object"?r:Z("#",void 0,void 0,String(r),void 0,void 0)};Z.normalizeChildren=function(r){var i=[];
if(r.length){for(var s=r[0]!=null&&r[0].key!=null,l=1;l<r.length;l++)if((r[l]!=null&&r[l].key!=null)!==
s)throw new TypeError(s&&(r[l]==null||typeof r[l]=="boolean")?"In fragments, vnodes must either all \
have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.frag\
ment({key: ...}), instead of a hole.":"In fragments, vnodes must either all have keys or none have k\
eys.");for(var l=0;l<r.length;l++)i[l]=Z.normalize(r[l])}return i};pt.exports=Z});var Fe=I((Mn,ht)=>{"use strict";var Sr=G();ht.exports=function(r,i){return r==null||typeof r=="objec\
t"&&r.tag==null&&!Array.isArray(r)?i.length===1&&Array.isArray(i[0])&&(i=i[0]):(i=i.length===0&&Array.
isArray(r)?r:[r,...i],r=void 0),Sr("",r&&r.key,r,i)}});var we=I((kn,gt)=>{"use strict";gt.exports={}.hasOwnProperty});var $e=I((Rn,yt)=>{"use strict";yt.exports={}});var He=I((zn,wt)=>{"use strict";var Lr=$e();wt.exports=new Map([[Lr,!0]])});var Ve=I((Nn,xt)=>{"use strict";var jr=G(),Ir=Fe(),Ue=we(),dt=$e(),vr=He(),Dr=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
bt=Object.create(null);function _r(r){for(var i in r)if(Ue.call(r,i))return!1;return!0}function Fr(r){
return r==="value"||r==="checked"||r==="selectedIndex"||r==="selected"}function $r(r){for(var i,s="d\
iv",l=[],c={},o=!0;i=Dr.exec(r);){var u=i[1],g=i[2];if(u===""&&g!=="")s=g;else if(u==="#")c.id=g;else if(u===
".")l.push(g);else if(i[3][0]==="["){var m=i[6];m&&(m=m.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),
i[4]==="class"?l.push(m):(c[i[4]]=m===""?m:m||!0,Fr(i[4])&&(o=!1))}}return l.length>0&&(c.className=
l.join(" ")),_r(c)?c=dt:vr.set(c,o),bt[r]={tag:s,attrs:c,is:c.is}}function Hr(r,i){i.tag=r.tag;var s=i.
attrs;if(s==null)return i.attrs=r.attrs,i.is=r.is,i;var l=Ue.call(s,"class"),c=l?s.class:s.className;
return r.attrs!==dt?(s=Object.assign({},r.attrs,s),(c!=null||r.attrs.className!=null)&&(s.className=
c!=null?r.attrs.className!=null?String(r.attrs.className)+" "+String(c):c:r.attrs.className)):c!=null&&
(s.className=c),l&&(s.class=null),r.tag==="input"&&Ue.call(s,"type")&&(s=Object.assign({type:s.type},
s)),i.is=s.is,i.attrs=s,i}function Ur(r,i,...s){if(r==null||typeof r!="string"&&typeof r!="function"&&
typeof r.view!="function")throw Error("The selector must be either a string or a component.");var l=Ir(
i,s);return typeof r=="string"&&(l.children=jr.normalizeChildren(l.children),r!=="[")?Hr(bt[r]||$r(r),
l):(l.attrs==null&&(l.attrs={}),l.tag=r,l)}xt.exports=Ur});var Et=I((Sn,At)=>{"use strict";var Vr=G();At.exports=function(r){return r==null&&(r=""),Vr("<",void 0,
void 0,r,void 0,void 0)}});var Pt=I((Ln,qt)=>{"use strict";var Wr=G(),Br=Fe();qt.exports=function(r,...i){var s=Br(r,i);return s.
attrs==null&&(s.attrs={}),s.tag="[",s.children=Wr.normalizeChildren(s.children),s}});var Ct=I((jn,Ot)=>{"use strict";var We=Ve();We.trust=Et();We.fragment=Pt();Ot.exports=We});var Je=I((In,Tt)=>{"use strict";var Be=new WeakMap;function*Jr(r){var i=r.dom,s=r.domSize,l=Be.get(i);
if(i!=null)do{var c=i.nextSibling;Be.get(i)===l&&(yield i,s--),i=c}while(s)}Tt.exports={delayedRemoval:Be,
domFor:Jr}});var zt=I((vn,Rt)=>{"use strict";var Ke=G(),kt=Je(),Kr=kt.delayedRemoval,Qe=kt.domFor,Mt=He();Rt.exports=
function(){var r={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},i,s;function l(t){
return t.ownerDocument}function c(t){return t.attrs&&t.attrs.xmlns||r[t.tag]}function o(t,e){if(t.state!==
e)throw new Error("'vnode.state' must not be modified.")}function u(t){var e=t.state;try{return this.
apply(e,arguments)}finally{o(t,e)}}function g(t){try{return l(t).activeElement}catch{return null}}function m(t,e,n,a,f,p,M){
for(var k=n;k<a;k++){var b=e[k];b!=null&&h(t,b,f,M,p)}}function h(t,e,n,a,f){var p=e.tag;if(typeof p==
"string")switch(e.state={},e.attrs!=null&&Ne(e.attrs,e,n),p){case"#":w(t,e,f);break;case"<":C(t,e,a,
f);break;case"[":A(t,e,n,a,f);break;default:x(t,e,n,a,f)}else v(t,e,n,a,f)}function w(t,e,n){e.dom=l(
t).createTextNode(e.children),Q(t,e.dom,n)}var q={caption:"table",thead:"table",tbody:"table",tfoot:"\
table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function C(t,e,n,a){var f=e.children.
match(/^\s*?<(\w+)/im)||[],p=l(t).createElement(q[f[1]]||"div");n==="http://www.w3.org/2000/svg"?(p.
innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",p=p.firstChild):p.innerHTML=
e.children,e.dom=p.firstChild,e.domSize=p.childNodes.length;for(var M=l(t).createDocumentFragment(),
k;k=p.firstChild;)M.appendChild(k);Q(t,M,a)}function A(t,e,n,a,f){var p=l(t).createDocumentFragment();
if(e.children!=null){var M=e.children;m(p,M,0,M.length,n,null,a)}e.dom=p.firstChild,e.domSize=p.childNodes.
length,Q(t,p,f)}function x(t,e,n,a,f){var p=e.tag,M=e.attrs,k=e.is;a=c(e)||a;var b=a?k?l(t).createElementNS(
a,p,{is:k}):l(t).createElementNS(a,p):k?l(t).createElement(p,{is:k}):l(t).createElement(p);if(e.dom=
b,M!=null&&xr(e,M,a),Q(t,b,f),!Y(e)&&e.children!=null){var z=e.children;m(b,z,0,z.length,n,null,a),e.
tag==="select"&&M!=null&&Er(e,M)}}function j(t,e){var n;if(typeof t.tag.view=="function"){if(t.state=
Object.create(t.tag),n=t.state.view,n.$$reentrantLock$$!=null)return;n.$$reentrantLock$$=!0}else{if(t.
state=void 0,n=t.tag,n.$$reentrantLock$$!=null)return;n.$$reentrantLock$$=!0,t.state=t.tag.prototype!=
null&&typeof t.tag.prototype.view=="function"?new t.tag(t):t.tag(t)}if(Ne(t.state,t,e),t.attrs!=null&&
Ne(t.attrs,t,e),t.instance=Ke.normalize(u.call(t.state.view,t)),t.instance===t)throw Error("A view c\
annot return the vnode it received as argument");n.$$reentrantLock$$=null}function v(t,e,n,a,f){j(e,
n),e.instance!=null?(h(t,e.instance,n,a,f),e.dom=e.instance.dom,e.domSize=e.dom!=null?e.instance.domSize:
0):e.domSize=0}function N(t,e,n,a,f,p){if(!(e===n||e==null&&n==null))if(e==null||e.length===0)m(t,n,
0,n.length,a,f,p);else if(n==null||n.length===0)fe(t,e,0,e.length);else{var M=e[0]!=null&&e[0].key!=
null,k=n[0]!=null&&n[0].key!=null,b=0,z=0;if(!M)for(;z<e.length&&e[z]==null;)z++;if(!k)for(;b<n.length&&
n[b]==null;)b++;if(M!==k)fe(t,e,z,e.length),m(t,n,b,n.length,a,f,p);else if(k){for(var B=e.length-1,
U=n.length-1,ye,J,H,W,_,je;B>=z&&U>=b&&(W=e[B],_=n[U],W.key===_.key);)W!==_&&S(t,W,_,a,f,p),_.dom!=null&&
(f=_.dom),B--,U--;for(;B>=z&&U>=b&&(J=e[z],H=n[b],J.key===H.key);)z++,b++,J!==H&&S(t,J,H,a,X(e,z,f),
p);for(;B>=z&&U>=b&&!(b===U||J.key!==_.key||W.key!==H.key);)je=X(e,z,f),le(t,W,je),W!==H&&S(t,W,H,a,
je,p),++b<=--U&&le(t,J,f),J!==_&&S(t,J,_,a,f,p),_.dom!=null&&(f=_.dom),z++,B--,W=e[B],_=n[U],J=e[z],
H=n[b];for(;B>=z&&U>=b&&W.key===_.key;)W!==_&&S(t,W,_,a,f,p),_.dom!=null&&(f=_.dom),B--,U--,W=e[B],_=
n[U];if(b>U)fe(t,e,z,B+1);else if(z>B)m(t,n,b,U+1,a,f,p);else{var Cr=f,ot=U-b+1,oe=new Array(ot),Ie=0,
$=0,ve=2147483647,De=0,ye,_e;for($=0;$<ot;$++)oe[$]=-1;for($=U;$>=b;$--){ye==null&&(ye=L(e,z,B+1)),_=
n[$];var te=ye[_.key];te!=null&&(ve=te<ve?te:-1,oe[$-b]=te,W=e[te],e[te]=null,W!==_&&S(t,W,_,a,f,p),
_.dom!=null&&(f=_.dom),De++)}if(f=Cr,De!==B-z+1&&fe(t,e,z,B+1),De===0)m(t,n,b,U+1,a,f,p);else if(ve===
-1)for(_e=D(oe),Ie=_e.length-1,$=U;$>=b;$--)H=n[$],oe[$-b]===-1?h(t,H,a,p,f):_e[Ie]===$-b?Ie--:le(t,
H,f),H.dom!=null&&(f=n[$].dom);else for($=U;$>=b;$--)H=n[$],oe[$-b]===-1&&h(t,H,a,p,f),H.dom!=null&&
(f=n[$].dom)}}else{var Le=e.length<n.length?e.length:n.length;for(b=b<z?b:z;b<Le;b++)J=e[b],H=n[b],!(J===
H||J==null&&H==null)&&(J==null?h(t,H,a,p,X(e,b+1,f)):H==null?ge(t,J):S(t,J,H,a,X(e,b+1,f),p));e.length>
Le&&fe(t,e,b,e.length),n.length>Le&&m(t,n,b,n.length,a,f,p)}}}function S(t,e,n,a,f,p){var M=e.tag,k=n.
tag;if(M===k&&e.is===n.is){if(n.state=e.state,n.events=e.events,Or(n,e))return;if(typeof M=="string")
switch(n.attrs!=null&&Se(n.attrs,n,a),M){case"#":T(e,n);break;case"<":d(t,e,n,p,f);break;case"[":P(t,
e,n,a,f,p);break;default:O(e,n,a,p)}else R(t,e,n,a,f,p)}else ge(t,e),h(t,n,a,p,f)}function T(t,e){t.
children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children),e.dom=t.dom}function d(t,e,n,a,f){
e.children!==n.children?(st(t,e),C(t,n,a,f)):(n.dom=e.dom,n.domSize=e.domSize)}function P(t,e,n,a,f,p){
N(t,e.children,n.children,a,f,p);var M=0,k=n.children;if(n.dom=null,k!=null){for(var b=0;b<k.length;b++){
var z=k[b];z!=null&&z.dom!=null&&(n.dom==null&&(n.dom=z.dom),M+=z.domSize||1)}M!==1&&(n.domSize=M)}}
function O(t,e,n,a){var f=e.dom=t.dom;a=c(e)||a,(t.attrs!=e.attrs||e.attrs!=null&&!Mt.get(e.attrs))&&
qr(e,t.attrs,e.attrs,a),Y(e)||N(f,t.children,e.children,n,null,a)}function R(t,e,n,a,f,p){if(n.instance=
Ke.normalize(u.call(n.state.view,n)),n.instance===n)throw Error("A view cannot return the vnode it r\
eceived as argument");Se(n.state,n,a),n.attrs!=null&&Se(n.attrs,n,a),n.instance!=null?(e.instance==null?
h(t,n.instance,a,p,f):S(t,e.instance,n.instance,a,f,p),n.dom=n.instance.dom,n.domSize=n.instance.domSize):
e.instance!=null?(ge(t,e.instance),n.dom=void 0,n.domSize=0):(n.dom=e.dom,n.domSize=e.domSize)}function L(t,e,n){
for(var a=Object.create(null);e<n;e++){var f=t[e];if(f!=null){var p=f.key;p!=null&&(a[p]=e)}}return a}
var E=[];function D(t){for(var e=[0],n=0,a=0,f=0,p=E.length=t.length,f=0;f<p;f++)E[f]=t[f];for(var f=0;f<
p;++f)if(t[f]!==-1){var M=e[e.length-1];if(t[M]<t[f]){E[f]=M,e.push(f);continue}for(n=0,a=e.length-1;n<
a;){var k=(n>>>1)+(a>>>1)+(n&a&1);t[e[k]]<t[f]?n=k+1:a=k}t[f]<t[e[n]]&&(n>0&&(E[f]=e[n-1]),e[n]=f)}for(n=
e.length,a=e[n-1];n-- >0;)e[n]=a,a=E[a];return E.length=0,e}function X(t,e,n){for(;e<t.length;e++)if(t[e]!=
null&&t[e].dom!=null)return t[e].dom;return n}function le(t,e,n){if(e.dom!=null){var a;if(e.domSize==
null)a=e.dom;else{a=l(t).createDocumentFragment();for(var f of Qe(e))a.appendChild(f)}Q(t,a,n)}}function Q(t,e,n){
n!=null?t.insertBefore(e,n):t.appendChild(e)}function Y(t){if(t.attrs==null||t.attrs.contenteditable==
null&&t.attrs.contentEditable==null)return!1;var e=t.children;if(e!=null&&e.length===1&&e[0].tag==="\
<"){var n=e[0].children;t.dom.innerHTML!==n&&(t.dom.innerHTML=n)}else if(e!=null&&e.length!==0)throw new Error(
"Child node of a contenteditable must be trusted.");return!0}function fe(t,e,n,a){for(var f=n;f<a;f++){
var p=e[f];p!=null&&ge(t,p)}}function it(t,e,n,a){var f=e.state,p=u.call(n.onbeforeremove,e);if(p!=null){
var M=s;for(var k of Qe(e))Kr.set(k,M);a.v++,Promise.resolve(p).finally(function(){o(e,f),at(t,e,a)})}}
function at(t,e,n){--n.v===0&&(ke(e),st(t,e))}function ge(t,e){var n={v:1};typeof e.tag!="string"&&typeof e.
state.onbeforeremove=="function"&&it(t,e,e.state,n),e.attrs&&typeof e.attrs.onbeforeremove=="functio\
n"&&it(t,e,e.attrs,n),at(t,e,n)}function st(t,e){if(e.dom!=null)if(e.domSize==null)t.removeChild(e.dom);else
for(var n of Qe(e))t.removeChild(n)}function ke(t){if(typeof t.tag!="string"&&typeof t.state.onremove==
"function"&&u.call(t.state.onremove,t),t.attrs&&typeof t.attrs.onremove=="function"&&u.call(t.attrs.
onremove,t),typeof t.tag!="string")t.instance!=null&&ke(t.instance);else{t.events!=null&&(t.events._=
null);var e=t.children;if(Array.isArray(e))for(var n=0;n<e.length;n++){var a=e[n];a!=null&&ke(a)}}}function xr(t,e,n){
for(var a in e)Re(t,a,null,e[a],n)}function Re(t,e,n,a,f){if(!(e==="key"||a==null||ut(e)||n===a&&!Pr(
t,e)&&typeof a!="object")){if(e[0]==="o"&&e[1]==="n")return ct(t,e,a);if(e.slice(0,6)==="xlink:")t.dom.
setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),a);else if(e==="style")ft(t.dom,n,a);else if(lt(
t,e,f)){if(e==="value"){if((t.tag==="input"||t.tag==="textarea")&&t.dom.value===""+a||t.tag==="selec\
t"&&n!==null&&t.dom.value===""+a||t.tag==="option"&&n!==null&&t.dom.value===""+a)return;if(t.tag==="\
input"&&t.attrs.type==="file"&&""+a!=""){console.error("`value` is read-only on file inputs!");return}}
t.tag==="input"&&e==="type"?t.dom.setAttribute(e,a):t.dom[e]=a}else typeof a=="boolean"?a?t.dom.setAttribute(
e,""):t.dom.removeAttribute(e):t.dom.setAttribute(e==="className"?"class":e,a)}}function Ar(t,e,n,a){
if(!(e==="key"||n==null||ut(e)))if(e[0]==="o"&&e[1]==="n")ct(t,e,void 0);else if(e==="style")ft(t.dom,
n,null);else if(lt(t,e,a)&&e!=="className"&&e!=="title"&&!(e==="value"&&(t.tag==="option"||t.tag==="\
select"&&t.dom.selectedIndex===-1&&t.dom===g(t.dom)))&&!(t.tag==="input"&&e==="type"))t.dom[e]=null;else{
var f=e.indexOf(":");f!==-1&&(e=e.slice(f+1)),n!==!1&&t.dom.removeAttribute(e==="className"?"class":
e)}}function Er(t,e){if("value"in e)if(e.value===null)t.dom.selectedIndex!==-1&&(t.dom.value=null);else{
var n=""+e.value;(t.dom.value!==n||t.dom.selectedIndex===-1)&&(t.dom.value=n)}"selectedIndex"in e&&Re(
t,"selectedIndex",null,e.selectedIndex,void 0)}function qr(t,e,n,a){var f;if(e!=null){e===n&&!Mt.has(
n)&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next\
 major");for(var p in e)(f=e[p])!=null&&(n==null||n[p]==null)&&Ar(t,p,f,a)}if(n!=null)for(var p in n)
Re(t,p,e&&e[p],n[p],a)}function Pr(t,e){return e==="value"||e==="checked"||e==="selectedIndex"||e===
"selected"&&(t.dom===g(t.dom)||t.tag==="option"&&t.dom.parentNode===g(t.dom))}function ut(t){return t===
"oninit"||t==="oncreate"||t==="onupdate"||t==="onremove"||t==="onbeforeremove"||t==="onbeforeupdate"}
function lt(t,e,n){return n===void 0&&(t.tag.indexOf("-")>-1||t.is||e!=="href"&&e!=="list"&&e!=="for\
m"&&e!=="width"&&e!=="height")&&e in t.dom}function ft(t,e,n){if(e!==n)if(n==null)t.style="";else if(typeof n!=
"object")t.style=n;else if(e==null||typeof e!="object"){t.style="";for(var a in n){var f=n[a];f!=null&&
(a.includes("-")?t.style.setProperty(a,String(f)):t.style[a]=String(f))}}else{for(var a in e)e[a]!=null&&
n[a]==null&&(a.includes("-")?t.style.removeProperty(a):t.style[a]="");for(var a in n){var f=n[a];f!=
null&&(f=String(f))!==String(e[a])&&(a.includes("-")?t.style.setProperty(a,f):t.style[a]=f)}}}function ze(){
this._=i}ze.prototype=Object.create(null),ze.prototype.handleEvent=function(t){var e=this["on"+t.type],
n;typeof e=="function"?n=e.call(t.currentTarget,t):typeof e.handleEvent=="function"&&e.handleEvent(t);
var a=this;a._!=null&&(t.redraw!==!1&&(0,a._)(),n!=null&&typeof n.then=="function"&&Promise.resolve(
n).then(function(){a._!=null&&t.redraw!==!1&&(0,a._)()})),n===!1&&(t.preventDefault(),t.stopPropagation())};
function ct(t,e,n){if(t.events!=null){if(t.events._=i,t.events[e]===n)return;n!=null&&(typeof n=="fu\
nction"||typeof n=="object")?(t.events[e]==null&&t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=
n):(t.events[e]!=null&&t.dom.removeEventListener(e.slice(2),t.events,!1),t.events[e]=void 0)}else n!=
null&&(typeof n=="function"||typeof n=="object")&&(t.events=new ze,t.dom.addEventListener(e.slice(2),
t.events,!1),t.events[e]=n)}function Ne(t,e,n){typeof t.oninit=="function"&&u.call(t.oninit,e),typeof t.
oncreate=="function"&&n.push(u.bind(t.oncreate,e))}function Se(t,e,n){typeof t.onupdate=="function"&&
n.push(u.bind(t.onupdate,e))}function Or(t,e){do{if(t.attrs!=null&&typeof t.attrs.onbeforeupdate=="f\
unction"){var n=u.call(t.attrs.onbeforeupdate,t,e);if(n!==void 0&&!n)break}if(typeof t.tag!="string"&&
typeof t.state.onbeforeupdate=="function"){var n=u.call(t.state.onbeforeupdate,t,e);if(n!==void 0&&!n)
break}return!1}while(!1);return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,
t.children=e.children,t.text=e.text,!0}var ce;return function(t,e,n){if(!t)throw new TypeError("DOM \
element being rendered to does not exist.");if(ce!=null&&t.contains(ce))throw new TypeError("Node is\
 currently being rendered to and thus is locked.");var a=i,f=ce,p=[],M=g(t),k=t.namespaceURI;ce=t,i=
typeof n=="function"?n:void 0,s={};try{t.vnodes==null&&(t.textContent=""),e=Ke.normalizeChildren(Array.
isArray(e)?e:[e]),N(t,t.vnodes,e,p,null,k==="http://www.w3.org/1999/xhtml"?void 0:k),t.vnodes=e,M!=null&&
g(t)!==M&&typeof M.focus=="function"&&M.focus();for(var b=0;b<p.length;b++)p[b]()}finally{i=a,ce=f}}}});var Ge=I((Dn,Nt)=>{"use strict";Nt.exports=zt()(typeof window<"u"?window:null)});var jt=I((_n,Lt)=>{"use strict";var St=G();Lt.exports=function(r,i,s){var l=[],c=!1,o=-1;function u(){
for(o=0;o<l.length;o+=2)try{r(l[o],St(l[o+1]),g)}catch(h){s.error(h)}o=-1}function g(){c||(c=!0,i(function(){
c=!1,u()}))}g.sync=u;function m(h,w){if(w!=null&&w.view==null&&typeof w!="function")throw new TypeError(
"m.mount expects a component, not a vnode.");var q=l.indexOf(h);q>=0&&(l.splice(q,2),q<=o&&(o-=2),r(
h,[])),w!=null&&(l.push(h,w),r(h,St(w),g))}return{mount:m,redraw:g}}});var de=I((Fn,It)=>{"use strict";var Qr=Ge();It.exports=jt()(Qr,typeof requestAnimationFrame<"u"?requestAnimationFrame:
null,typeof console<"u"?console:null)});var Ye=I(($n,vt)=>{"use strict";vt.exports=function(r){if(Object.prototype.toString.call(r)!=="[obje\
ct Object]")return"";var i=[];for(var s in r)l(s,r[s]);return i.join("&");function l(c,o){if(Array.isArray(
o))for(var u=0;u<o.length;u++)l(c+"["+u+"]",o[u]);else if(Object.prototype.toString.call(o)==="[obje\
ct Object]")for(var u in o)l(c+"["+u+"]",o[u]);else i.push(encodeURIComponent(c)+(o!=null&&o!==""?"="+
encodeURIComponent(o):""))}}});var be=I((Hn,Dt)=>{"use strict";var Gr=Ye();Dt.exports=function(r,i){if(/:([^\/\.-]+)(\.{3})?:/.test(
r))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
if(i==null)return r;var s=r.indexOf("?"),l=r.indexOf("#"),c=l<0?r.length:l,o=s<0?c:s,u=r.slice(0,o),
g={};Object.assign(g,i);var m=u.replace(/:([^\/\.-]+)(\.{3})?/g,function(j,v,N){return delete g[v],i[v]==
null?j:N?i[v]:encodeURIComponent(String(i[v]))}),h=m.indexOf("?"),w=m.indexOf("#"),q=w<0?m.length:w,
C=h<0?q:h,A=m.slice(0,C);s>=0&&(A+=r.slice(s,c)),h>=0&&(A+=(s<0?"?":"&")+m.slice(h,q));var x=Gr(g);return x&&
(A+=(s<0&&h<0?"?":"&")+x),l>=0&&(A+=r.slice(l)),w>=0&&(A+=(l<0?"":"&")+m.slice(w)),A}});var $t=I((Un,Ft)=>{"use strict";var Yr=be(),_t=we();Ft.exports=function(r,i){function s(o){return new Promise(
o)}function l(o,u){return new Promise(function(g,m){o=Yr(o,u.params);var h=u.method!=null?u.method.toUpperCase():
"GET",w=u.body,q=(u.serialize==null||u.serialize===JSON.serialize)&&!(w instanceof r.FormData||w instanceof
r.URLSearchParams),C=u.responseType||(typeof u.extract=="function"?"":"json"),A=new r.XMLHttpRequest,
x=!1,j=!1,v=A,N,S=A.abort;A.abort=function(){x=!0,S.call(this)},A.open(h,o,u.async!==!1,typeof u.user==
"string"?u.user:void 0,typeof u.password=="string"?u.password:void 0),q&&w!=null&&!c(u,"content-type")&&
A.setRequestHeader("Content-Type","application/json; charset=utf-8"),typeof u.deserialize!="function"&&
!c(u,"accept")&&A.setRequestHeader("Accept","application/json, text/*"),u.withCredentials&&(A.withCredentials=
u.withCredentials),u.timeout&&(A.timeout=u.timeout),A.responseType=C;for(var T in u.headers)_t.call(
u.headers,T)&&A.setRequestHeader(T,u.headers[T]);A.onreadystatechange=function(d){if(!x&&d.target.readyState===
4)try{var P=d.target.status>=200&&d.target.status<300||d.target.status===304||/^file:\/\//i.test(o),
O=d.target.response,R;if(C==="json"){if(!d.target.responseType&&typeof u.extract!="function")try{O=JSON.
parse(d.target.responseText)}catch{O=null}}else(!C||C==="text")&&O==null&&(O=d.target.responseText);
if(typeof u.extract=="function"?(O=u.extract(d.target,u),P=!0):typeof u.deserialize=="function"&&(O=
u.deserialize(O)),P){if(typeof u.type=="function")if(Array.isArray(O))for(var L=0;L<O.length;L++)O[L]=
new u.type(O[L]);else O=new u.type(O);g(O)}else{var E=function(){try{R=d.target.responseText}catch{R=
O}var D=new Error(R);D.code=d.target.status,D.response=O,m(D)};A.status===0?setTimeout(function(){j||
E()}):E()}}catch(D){m(D)}},A.ontimeout=function(d){j=!0;var P=new Error("Request timed out");P.code=
d.target.status,m(P)},typeof u.config=="function"&&(A=u.config(A,u,o)||A,A!==v&&(N=A.abort,A.abort=function(){
x=!0,N.call(this)})),w==null?A.send():typeof u.serialize=="function"?A.send(u.serialize(w)):w instanceof
r.FormData||w instanceof r.URLSearchParams?A.send(w):A.send(JSON.stringify(w))})}s.prototype=Promise.
prototype,s.__proto__=Promise;function c(o,u){for(var g in o.headers)if(_t.call(o.headers,g)&&g.toLowerCase()===
u)return!0;return!1}return{request:function(o,u){typeof o!="string"?(u=o,o=o.url):u==null&&(u={});var g=l(
o,u);if(u.background===!0)return g;var m=0;function h(){--m===0&&typeof i=="function"&&i()}return w(
g);function w(q){var C=q.then;return q.constructor=s,q.then=function(){m++;var A=C.apply(q,arguments);
return A.then(h,function(x){if(h(),m===0)throw x}),w(A)},q}}}}});var Ut=I((Vn,Ht)=>{"use strict";var Xr=de();Ht.exports=$t()(typeof window<"u"?window:null,Xr.redraw)});var Xe=I((Wn,Wt)=>{"use strict";function Vt(r){try{return decodeURIComponent(r)}catch{return r}}Wt.exports=
function(r){if(r===""||r==null)return{};r.charAt(0)==="?"&&(r=r.slice(1));for(var i=r.split("&"),s={},
l={},c=0;c<i.length;c++){var o=i[c].split("="),u=Vt(o[0]),g=o.length===2?Vt(o[1]):"";g==="true"?g=!0:
g==="false"&&(g=!1);var m=u.split(/\]\[?|\[/),h=l;u.indexOf("[")>-1&&m.pop();for(var w=0;w<m.length;w++){
var q=m[w],C=m[w+1],A=C==""||!isNaN(parseInt(C,10));if(q===""){var u=m.slice(0,w).join();s[u]==null&&
(s[u]=Array.isArray(h)?h.length:0),q=s[u]++}else if(q==="__proto__")break;if(w===m.length-1)h[q]=g;else{
var x=Object.getOwnPropertyDescriptor(h,q);x!=null&&(x=x.value),x==null&&(h[q]=x=A?[]:{}),h=x}}}return l}});var xe=I((Bn,Bt)=>{"use strict";var Zr=Xe();Bt.exports=function(r){var i=r.indexOf("?"),s=r.indexOf(
"#"),l=s<0?r.length:s,c=i<0?l:i,o=r.slice(0,c).replace(/\/{2,}/g,"/");return o?o[0]!=="/"&&(o="/"+o):
o="/",{path:o,params:i<0?{}:Zr(r.slice(i+1,l))}}});var Kt=I((Jn,Jt)=>{"use strict";var en=xe();Jt.exports=function(r){var i=en(r),s=Object.keys(i.params),
l=[],c=new RegExp("^"+i.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(o,u,g){
return u==null?"\\"+o:(l.push({k:u,r:g==="..."}),g==="..."?"(.*)":g==="."?"([^/]+)\\.":"([^/]+)"+(g||
""))})+"\\/?$");return function(o){for(var u=0;u<s.length;u++)if(i.params[s[u]]!==o.params[s[u]])return!1;
if(!l.length)return c.test(o.path);var g=c.exec(o.path);if(g==null)return!1;for(var u=0;u<l.length;u++)
o.params[l[u].k]=l[u].r?g[u+1]:decodeURIComponent(g[u+1]);return!0}}});var Ze=I((Kn,Yt)=>{"use strict";var Qt=we(),Gt=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|on\
update|onbeforeremove|onremove)$");Yt.exports=function(r,i){var s={};if(i!=null)for(var l in r)Qt.call(
r,l)&&!Gt.test(l)&&i.indexOf(l)<0&&(s[l]=r[l]);else for(var l in r)Qt.call(r,l)&&!Gt.test(l)&&(s[l]=
r[l]);return s}});var tr=I((Qn,er)=>{"use strict";var tn=G(),rn=Ve(),Xt=be(),Zt=xe(),nn=Kt(),an=Ze();function sn(r){try{
return decodeURIComponent(r)}catch{return r}}er.exports=function(r,i){var s=r==null?null:typeof r.setImmediate==
"function"?r.setImmediate:r.setTimeout,l=Promise.resolve(),c=!1,o=!1,u=!1,g,m,h,w,q,C,A,x,j={onremove:function(){
o=u=!1,r.removeEventListener("popstate",S,!1)},view:function(){var d=tn(q,C.key,C);return w?w.render(
d):[d]}},v=T.SKIP={};function N(){c=!1;var d=r.location.hash;T.prefix[0]!=="#"&&(d=r.location.search+
d,T.prefix[0]!=="?"&&(d=r.location.pathname+d,d[0]!=="/"&&(d="/"+d)));var P=d.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,
sn).slice(T.prefix.length),O=Zt(P);Object.assign(O.params,r.history.state);function R(E){console.error(
E),T.set(h,null,{replace:!0})}L(0);function L(E){for(;E<m.length;E++)if(m[E].check(O)){var D=m[E].component,
X=m[E].route,le=D,Q=x=function(Y){if(Q===x){if(Y===v)return L(E+1);q=Y!=null&&(typeof Y.view=="funct\
ion"||typeof Y=="function")?Y:"div",C=O.params,A=P,x=null,w=D.render?D:null,u?i.redraw():(u=!0,i.mount(
g,j))}};D.view||typeof D=="function"?(D={},Q(le)):D.onmatch?l.then(function(){return D.onmatch(O.params,
P,X)}).then(Q,P===h?null:R):Q();return}if(P===h)throw new Error("Could not resolve default route "+h+
".");T.set(h,null,{replace:!0})}}function S(){c||(c=!0,s(N))}function T(d,P,O){if(!d)throw new TypeError(
"DOM element being rendered to does not exist.");if(m=Object.keys(O).map(function(L){if(L[0]!=="/")throw new SyntaxError(
"Routes must start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(L))throw new SyntaxError("Route par\
ameter names must be separated with either '/', '.', or '-'.");return{route:L,component:O[L],check:nn(
L)}}),h=P,P!=null){var R=Zt(P);if(!m.some(function(L){return L.check(R)}))throw new ReferenceError("\
Default route doesn't match any known routes.")}g=d,r.addEventListener("popstate",S,!1),o=!0,N()}return T.
set=function(d,P,O){if(x!=null&&(O=O||{},O.replace=!0),x=null,d=Xt(d,P),o){S();var R=O?O.state:null,
L=O?O.title:null;O&&O.replace?r.history.replaceState(R,L,T.prefix+d):r.history.pushState(R,L,T.prefix+
d)}else r.location.href=T.prefix+d},T.get=function(){return A},T.prefix="#!",T.Link={view:function(d){
var P=rn(d.attrs.selector||"a",an(d.attrs,["options","params","selector","onclick"]),d.children),O,R,
L;return(P.attrs.disabled=!!P.attrs.disabled)?(P.attrs.href=null,P.attrs["aria-disabled"]="true"):(O=
d.attrs.options,R=d.attrs.onclick,L=Xt(P.attrs.href,d.attrs.params),P.attrs.href=T.prefix+L,P.attrs.
onclick=function(E){var D;typeof R=="function"?D=R.call(E.currentTarget,E):R==null||typeof R!="objec\
t"||typeof R.handleEvent=="function"&&R.handleEvent(E),D!==!1&&!E.defaultPrevented&&(E.button===0||E.
which===0||E.which===1)&&(!E.currentTarget.target||E.currentTarget.target==="_self")&&!E.ctrlKey&&!E.
metaKey&&!E.shiftKey&&!E.altKey&&(E.preventDefault(),E.redraw=!1,T.set(L,null,O))}),P}},T.param=function(d){
return C&&d!=null?C[d]:C},T}});var nr=I((Gn,rr)=>{"use strict";var un=de();rr.exports=tr()(typeof window<"u"?window:null,un)});var re=I((Yn,ar)=>{"use strict";var Ae=Ct(),ln=Ut(),ir=de(),fn=Je(),V=function(){return Ae.apply(this,
arguments)};V.m=Ae;V.trust=Ae.trust;V.fragment=Ae.fragment;V.Fragment="[";V.mount=ir.mount;V.route=nr();
V.render=Ge();V.redraw=ir.redraw;V.request=ln.request;V.parseQueryString=Xe();V.buildQueryString=Ye();
V.parsePathname=xe();V.buildPathname=be();V.vnode=G();V.censor=Ze();V.domFor=fn.domFor;ar.exports=V});var br=me(re(),1);var y=me(re(),1);var ne=me(re(),1);function sr(r,i){return typeof i=="string"?(0,ne.default)(ne.default.route.Link,{href:i},
r):(0,ne.default)("span.link",r)}function Ee(){return{view(r){return(0,ne.default)(".nav",sr("Unknow\
n letters",r.attrs.page!=="pattern"&&"/pattern/-/freq/desc/1"),ne.default.trust(" &nbsp; | &nbsp; "),
sr("Anagrams",r.attrs.page!=="anagram"&&"/anagram/-"))}}}function K(r){return String(r).replace(/\d(?=(\d{3})+\b)/g,"$&,")}var pe=me(re(),1);var ur="./puff-FF7ZATQ6.svg";function ie(r){return[(0,pe.default)("img",{src:ur,width:26,height:26,style:{verticalAlign:"text-bot\
tom"}}),pe.default.trust(` &nbsp; ${r} \u2026`)]}function qe(r,i=""){return(0,pe.default)(".credits",
pe.default.trust(`We use a dictionary of ${K(r)} names and English words derived from 
    <a href="http://aspell.net/">aspell</a>,
    <a href="http://web.mit.edu/freebsd/head/share/dict/">web2</a>,
    <a href="https://en.wikpedia.org">Wikipedia</a> and
    <a href="https://web.archive.org/web/20230401195411/https://crr.ugent.be/archives/2045">Brysbaer\
t et al</a>.
    Many of these aren't valid in word games.`+i))}var fr=Symbol("Comlink.proxy"),on=Symbol("Comlink.endpoint"),mn=Symbol("Comlink.releaseProxy"),et=Symbol(
"Comlink.finalizer"),Oe=Symbol("Comlink.thrown"),cr=r=>typeof r=="object"&&r!==null||typeof r=="func\
tion",pn={canHandle:r=>cr(r)&&r[fr],serialize(r){let{port1:i,port2:s}=new MessageChannel;return mr(r,
i),[s,[s]]},deserialize(r){return r.start(),rt(r)}},hn={canHandle:r=>cr(r)&&Oe in r,serialize({value:r}){
let i;return r instanceof Error?i={isError:!0,value:{message:r.message,name:r.name,stack:r.stack}}:i=
{isError:!1,value:r},[i,[]]},deserialize(r){throw r.isError?Object.assign(new Error(r.value.message),
r.value):r.value}},or=new Map([["proxy",pn],["throw",hn]]);function gn(r,i){for(let s of r)if(i===s||
s==="*"||s instanceof RegExp&&s.test(i))return!0;return!1}function mr(r,i=globalThis,s=["*"]){i.addEventListener(
"message",function l(c){if(!c||!c.data)return;if(!gn(s,c.origin)){console.warn(`Invalid origin '${c.
origin}' for comlink proxy`);return}let{id:o,type:u,path:g}=Object.assign({path:[]},c.data),m=(c.data.
argumentList||[]).map(ee),h;try{let w=g.slice(0,-1).reduce((C,A)=>C[A],r),q=g.reduce((C,A)=>C[A],r);
switch(u){case"GET":h=q;break;case"SET":w[g.slice(-1)[0]]=ee(c.data.value),h=!0;break;case"APPLY":h=
q.apply(w,m);break;case"CONSTRUCT":{let C=new q(...m);h=nt(C)}break;case"ENDPOINT":{let{port1:C,port2:A}=new MessageChannel;
mr(r,A),h=xn(C,[C])}break;case"RELEASE":h=void 0;break;default:return}}catch(w){h={value:w,[Oe]:0}}Promise.
resolve(h).catch(w=>({value:w,[Oe]:0})).then(w=>{let[q,C]=Me(w);i.postMessage(Object.assign(Object.assign(
{},q),{id:o}),C),u==="RELEASE"&&(i.removeEventListener("message",l),pr(i),et in r&&typeof r[et]=="fu\
nction"&&r[et]())}).catch(w=>{let[q,C]=Me({value:new TypeError("Unserializable return value"),[Oe]:0});
i.postMessage(Object.assign(Object.assign({},q),{id:o}),C)})}),i.start&&i.start()}function yn(r){return r.
constructor.name==="MessagePort"}function pr(r){yn(r)&&r.close()}function rt(r,i){let s=new Map;return r.
addEventListener("message",function(c){let{data:o}=c;if(!o||!o.id)return;let u=s.get(o.id);if(u)try{
u(o)}finally{s.delete(o.id)}}),tt(r,s,[],i)}function Pe(r){if(r)throw new Error("Proxy has been rele\
ased and is not useable")}function hr(r){return ae(r,new Map,{type:"RELEASE"}).then(()=>{pr(r)})}var Ce=new WeakMap,
Te="FinalizationRegistry"in globalThis&&new FinalizationRegistry(r=>{let i=(Ce.get(r)||0)-1;Ce.set(r,
i),i===0&&hr(r)});function wn(r,i){let s=(Ce.get(i)||0)+1;Ce.set(i,s),Te&&Te.register(r,i,r)}function dn(r){
Te&&Te.unregister(r)}function tt(r,i,s=[],l=function(){}){let c=!1,o=new Proxy(l,{get(u,g){if(Pe(c),
g===mn)return()=>{dn(o),hr(r),i.clear(),c=!0};if(g==="then"){if(s.length===0)return{then:()=>o};let m=ae(
r,i,{type:"GET",path:s.map(h=>h.toString())}).then(ee);return m.then.bind(m)}return tt(r,i,[...s,g])},
set(u,g,m){Pe(c);let[h,w]=Me(m);return ae(r,i,{type:"SET",path:[...s,g].map(q=>q.toString()),value:h},
w).then(ee)},apply(u,g,m){Pe(c);let h=s[s.length-1];if(h===on)return ae(r,i,{type:"ENDPOINT"}).then(
ee);if(h==="bind")return tt(r,i,s.slice(0,-1));let[w,q]=lr(m);return ae(r,i,{type:"APPLY",path:s.map(
C=>C.toString()),argumentList:w},q).then(ee)},construct(u,g){Pe(c);let[m,h]=lr(g);return ae(r,i,{type:"\
CONSTRUCT",path:s.map(w=>w.toString()),argumentList:m},h).then(ee)}});return wn(o,r),o}function bn(r){
return Array.prototype.concat.apply([],r)}function lr(r){let i=r.map(Me);return[i.map(s=>s[0]),bn(i.
map(s=>s[1]))]}var gr=new WeakMap;function xn(r,i){return gr.set(r,i),r}function nt(r){return Object.
assign(r,{[fr]:!0})}function Me(r){for(let[i,s]of or)if(s.canHandle(r)){let[l,c]=s.serialize(r);return[{type:"HANDLER",name:i,
value:l},c]}return[{type:"RAW",value:r},gr.get(r)||[]]}function ee(r){switch(r.type){case"HANDLER":return or.
get(r.name).deserialize(r.value);case"RAW":return r.value}}function ae(r,i,s,l){return new Promise(c=>{
let o=An();i.set(o,c),r.start&&r.start(),r.postMessage(Object.assign({id:o},s),l)})}function An(){return new Array(
4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var se=rt(new Worker(new URL("./combined.worker.js",import.meta.url)));var En="-",ue=2e3;function wr(){let r="",i,s,l,c,o=0,u=!0,g=!1,m=[],h=0;async function w(x){let{pattern:j,
order:v,direction:N,list:S,page:T}=x.attrs;if(j===r&&v===i&&N===s&&S===l&&T===c)return;r=j,i=v,s=N,l=
S,c=T,g=!0,y.default.redraw();let d=(parseInt(T,10)-1)*ue,P=await se.wordsMatchingPattern(j,v,N,d,ue,
S==="multi");m=P.results,h=P.count,g=!1,y.default.redraw()}function q(x,j,v,N){return(0,y.default)("\
label",(0,y.default)("input",{type:"radio",name:"order",checked:i===x&&s===j,onchange:()=>y.default.
route.set("/pattern/:pattern/:list/:order/:direction/:page",{...N,order:x,direction:j,page:1})}),v)}
function C(x,j,v){return(0,y.default)("label",(0,y.default)("input",{type:"radio",name:"multi",checked:l===
x,onchange:()=>y.default.route.set("/pattern/:pattern/:list/:order/:direction/:page",{...v,list:x,page:1})}),
j)}function A(x,j,v){return j>1&&(0,y.default)(".pagination",[1,x-1,x,x+1,j].filter(N=>N>=1&&N<=j).filter(
(N,S,T)=>N!==T[S-1]).reduce((N,S,T,d)=>(T>0&&d[T-1]!==S-1&&N.push((0,y.default)("span.ellipsis",y.default.
trust("&hellip;"))),N.push(v(S)),N),[]))}return{async oninit(){o=await se.getWordsCount(),u=!1,y.default.
redraw()},oncreate:w,onupdate:w,view(x){let j=x.attrs.pattern===En?"":x.attrs.pattern,v=parseInt(x.attrs.
page,10),N=Math.ceil(h/ue),S=(v-1)*ue,T=Math.min(S+ue-1,h),d=()=>A(v,N,E=>(0,y.default)(y.default.route.
Link,{href:"/pattern/:pattern/:list/:order/:direction/:page",selector:E===v?"a.current":"a",params:{
...x.attrs,page:E}},String(E))),P=(E,D="freq/desc")=>(0,y.default)(y.default.route.Link,{href:`/patt\
ern/${encodeURIComponent(E)}/single/${D}/1`,selector:"a.example"},E),O="http://economicspsychologypo\
licy.blogspot.com/2013/10/lecture-summary-judgement-heuristics.html",R=y.default.trust(" \u2014&nbsp;"),
L=[(0,y.default)("h4","Examples"),(0,y.default)("ul",(0,y.default)("li",P("...s.w.r."),", ",P("*tz"),
", ",P("*yx")," or ",P("*sh.p*sh.p*")),(0,y.default)("li",P("*a*e*i*o*u*","length/asc"),R,"all vowel\
s in order"),(0,y.default)("li",P("r..*")," and ",P("..r*"),R,(0,y.default)("a",{href:O,target:"_bla\
nk"},"r first vs. r third")),(0,y.default)("li",P("*","length/desc"),R,"longest")),(0,y.default)("h4",
"Advanced examples"),(0,y.default)("ul",(0,y.default)("li",P("~(^|[^c])ei"),R,"i before e except aft\
er c, except \u2026"),(0,y.default)("li",P("~q([^u]|$)"),R,"q, no u"),(0,y.default)("li",P("~[aeiou]\
{4}$"),R,"4 vowels at end"),(0,y.default)("li",P("~(.{4,})\\1"),R,"4+ letters repeating"),(0,y.default)(
"li",P("~^(.)(.?)(.?)(.?).?\\4\\3\\2\\1$","length/desc"),R,"palindromes"))];return(0,y.default)(".pa\
ge",(0,y.default)(Ee,{page:"pattern"}),(0,y.default)(".pattern",(0,y.default)("h2","Find words with \
unknown letters"),u?(0,y.default)(".message",ie("Loading dictionary")):(0,y.default)(".interface",(0,y.default)(
".pattern-entry",(0,y.default)("input.pattern-input",{type:"search",autocorrect:"off",autocomplete:"\
off",autocapitalize:"none",spellcheck:!1,size:15,value:j,onchange:E=>{let{value:D}=E.currentTarget;y.default.
route.set("/pattern/:pattern/:list/:order/:direction/1",{...x.attrs,pattern:D})}}),(0,y.default)("bu\
tton","Find"),(0,y.default)(".instructions",(0,y.default)("h4","Wildcards"),(0,y.default)("div",y.default.
trust('Use <span class="letter">.</span> or <span class="letter">?</span> for each unknown letter')),
(0,y.default)("div",y.default.trust('Use <span class="letter">*</span> for any number of unknowns')),
(0,y.default)("div",y.default.trust('<i>Advanced:</i> prefix <span class="letter">~</span> to use a \
<a href="https://cs.lmu.edu/~ray/notes/regex/" target="_blank">regex</a>'))),(0,y.default)(".list",(0,y.default)(
"h4","Search"),(0,y.default)("div",C("single"," Single words",x.attrs),C("multi"," Multiple words",x.
attrs))),(0,y.default)(".order",(0,y.default)("h4","Show first"),(0,y.default)("div",q("freq","desc",
" Common words",x.attrs),q("freq","asc"," Obscure words",x.attrs)),(0,y.default)("div",q("length","a\
sc"," Short words",x.attrs),q("length","desc"," Long words",x.attrs)),(0,y.default)("div",q("a-z","a\
sc"," A \u2013\xA0Z",x.attrs),q("a-z","desc"," Z \u2013\xA0A",x.attrs))),(0,y.default)(".message",j?
g?ie("Searching"):h<0?m[0]:h>0?`${K(h)} words found`+(h>ue?` (showing ${K(S)} \u2013 ${K(T)})`:""):"\
No matching words found":"Please enter a search pattern above"),!j&&L,h>0&&g===!1&&[d(),(0,y.default)(
".matches",m.map(E=>(0,y.default)("a.match",{href:`https://www.google.com/search?q="${E}"+definition`,
target:"_blank"},E))),d()]),qe(o))))}}}var F=me(re(),1);var qn="-",he=1e4,Pn=876543;function On(r,i=10){let s=[];for(let l=0;l<=i;l++)s.push([]);for(let l of r){
let[{length:c}]=l;s[c>i?i:c].push(l)}return s}function dr(r){let i=!0,s=0,l=!1,c={evaluated:0,working:!1,
anagrams:[]};function o(){c.working=!0;let u=document.querySelector("#anag-input").value;se.find(u,he,
Pn,nt(async g=>{let m=c;return c=g,F.default.redraw(),!m.working}))}return{view(u){let g=u.attrs.letters===
qn?"":u.attrs.letters;return(0,F.default)(".page",(0,F.default)(Ee,{page:"anagram"}),(0,F.default)("\
.pattern",(0,F.default)("h2","Find anagrams"),i?(0,F.default)(".message",ie("Loading dictionary")):(0,F.default)(
".interface",(0,F.default)(".pattern-entry",(0,F.default)("input#anag-input",{type:"search",autocorrect:"\
off",autocomplete:"off",autocapitalize:"none",spellcheck:!1,size:15,value:g,disabled:c.working,onchange(m){
let{value:h}=m.currentTarget;F.default.route.set("/anagram/:letters",{...u.attrs,letters:h===""?"-":
h})},onkeyup(m){m.key==="Enter"&&(c.working?c.working=!1:o()),m.redraw=!1}}),c.working?[(0,F.default)(
"button",{onclick(){c.working=!1}},"Stop"),(0,F.default)(".progress",ie(`${K(c.evaluated)} evaluated`+
(c.evaluated>he?`, ${K(he)} kept`:"")))]:[(0,F.default)("button",{onclick:o},"Find"),c.evaluated!==0&&
(0,F.default)(".progress",`${K(c.evaluated)} found`+(c.evaluated>he?`, ${K(he)} kept`:""))]),(0,F.default)(
"#grouping",(0,F.default)("label",(0,F.default)("input[type=checkbox]",{checked:l,onchange(m){l=m.currentTarget.
checked}})," Group by word count")),(0,F.default)(".matches",l?On(c.anagrams).map((m,h)=>m.length>0&&
[(0,F.default)("h3",`${h} words`),m.map(w=>(0,F.default)("span.match",w[0].join(" ")))]):c.anagrams.
map(m=>(0,F.default)("span.match",m[0].join(" "))))),qe(s," Anagrams are retained and ranked by pref\
erring those where the least common word is more common, those with fewer words, and (only very slig\
htly) those where the mean word is more common.")))},async oninit(){s=await se.getWordsCount(),i=!1,
F.default.redraw()},onremove(){c.working=!1}}}br.default.route(document.getElementById("main"),"/pattern/-/single/freq/desc/1",{"/pattern/:pattern\
/:list/:order/:direction/:page":wr,"/anagram/:letters":dr});self.DEV&&new EventSource("/esbuild").addEventListener(
"change",()=>location.reload());
/*! Bundled license information:

comlink/dist/esm/comlink.mjs:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
