var kr=Object.create;var pt=Object.defineProperty;var Rr=Object.getOwnPropertyDescriptor;var zr=Object.getOwnPropertyNames;var Nr=Object.getPrototypeOf,Sr=Object.prototype.hasOwnProperty;var L=(r,i)=>()=>(i||r((i={exports:{}}).exports,i),i.exports);var Lr=(r,i,a,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let c of zr(i))!Sr.call(r,c)&&
c!==a&&pt(r,c,{get:()=>i[c],enumerable:!(l=Rr(i,c))||l.enumerable});return r};var oe=(r,i,a)=>(a=r!=null?kr(Nr(r)):{},Lr(i||!r||!r.__esModule?pt(a,"default",{value:r,enumerable:!0}):
a,r));var G=L((Rn,ht)=>{"use strict";function Z(r,i,a,l,c,o){return{tag:r,key:i,attrs:a,children:l,text:c,
dom:o,is:void 0,domSize:void 0,state:void 0,events:void 0,instance:void 0}}Z.normalize=function(r){return Array.
isArray(r)?Z("[",void 0,void 0,Z.normalizeChildren(r),void 0,void 0):r==null||typeof r=="boolean"?null:
typeof r=="object"?r:Z("#",void 0,void 0,String(r),void 0,void 0)};Z.normalizeChildren=function(r){var i=[];
if(r.length){for(var a=r[0]!=null&&r[0].key!=null,l=1;l<r.length;l++)if((r[l]!=null&&r[l].key!=null)!==
a)throw new TypeError(a&&(r[l]==null||typeof r[l]=="boolean")?"In fragments, vnodes must either all \
have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.frag\
ment({key: ...}), instead of a hole.":"In fragments, vnodes must either all have keys or none have k\
eys.");for(var l=0;l<r.length;l++)i[l]=Z.normalize(r[l])}return i};ht.exports=Z});var Fe=L((zn,gt)=>{"use strict";var jr=G();gt.exports=function(r,i){return r==null||typeof r=="objec\
t"&&r.tag==null&&!Array.isArray(r)?i.length===1&&Array.isArray(i[0])&&(i=i[0]):(i=i.length===0&&Array.
isArray(r)?r:[r,...i],r=void 0),jr("",r&&r.key,r,i)}});var ye=L((Nn,yt)=>{"use strict";yt.exports={}.hasOwnProperty});var _e=L((Sn,wt)=>{"use strict";wt.exports={}});var $e=L((Ln,dt)=>{"use strict";var Ir=_e();dt.exports=new Map([[Ir,!0]])});var Ue=L((jn,At)=>{"use strict";var Wr=G(),vr=Fe(),He=ye(),bt=_e(),Dr=$e(),Fr=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
xt=Object.create(null);function _r(r){for(var i in r)if(He.call(r,i))return!1;return!0}function $r(r){
return r==="value"||r==="checked"||r==="selectedIndex"||r==="selected"}function Hr(r){for(var i,a="d\
iv",l=[],c={},o=!0;i=Fr.exec(r);){var u=i[1],g=i[2];if(u===""&&g!=="")a=g;else if(u==="#")c.id=g;else if(u===
".")l.push(g);else if(i[3][0]==="["){var h=i[6];h&&(h=h.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),
i[4]==="class"?l.push(h):(c[i[4]]=h===""?h:h||!0,$r(i[4])&&(o=!1))}}return l.length>0&&(c.className=
l.join(" ")),_r(c)?c=bt:Dr.set(c,o),xt[r]={tag:a,attrs:c,is:c.is}}function Ur(r,i){i.tag=r.tag;var a=i.
attrs;if(a==null)return i.attrs=r.attrs,i.is=r.is,i;var l=He.call(a,"class"),c=l?a.class:a.className;
return r.attrs!==bt?(a=Object.assign({},r.attrs,a),(c!=null||r.attrs.className!=null)&&(a.className=
c!=null?r.attrs.className!=null?String(r.attrs.className)+" "+String(c):c:r.attrs.className)):c!=null&&
(a.className=c),l&&(a.class=null),r.tag==="input"&&He.call(a,"type")&&(a=Object.assign({type:a.type},
a)),i.is=a.is,i.attrs=a,i}function Vr(r,i,...a){if(r==null||typeof r!="string"&&typeof r!="function"&&
typeof r.view!="function")throw Error("The selector must be either a string or a component.");var l=vr(
i,a);return typeof r=="string"&&(l.children=Wr.normalizeChildren(l.children),r!=="[")?Ur(xt[r]||Hr(r),
l):(l.attrs==null&&(l.attrs={}),l.tag=r,l)}At.exports=Vr});var qt=L((In,Et)=>{"use strict";var Br=G();Et.exports=function(r){return r==null&&(r=""),Br("<",void 0,
void 0,r,void 0,void 0)}});var Pt=L((Wn,Ct)=>{"use strict";var Jr=G(),Kr=Fe();Ct.exports=function(r,...i){var a=Kr(r,i);return a.
attrs==null&&(a.attrs={}),a.tag="[",a.children=Jr.normalizeChildren(a.children),a}});var Mt=L((vn,Ot)=>{"use strict";var Ve=Ue();Ve.trust=qt();Ve.fragment=Pt();Ot.exports=Ve});var Je=L((Dn,Tt)=>{"use strict";var Be=new WeakMap;function*Qr(r){var i=r.dom,a=r.domSize,l=Be.get(i);
if(i!=null)do{var c=i.nextSibling;Be.get(i)===l&&(yield i,a--),i=c}while(a)}Tt.exports={delayedRemoval:Be,
domFor:Qr}});var Nt=L((Fn,zt)=>{"use strict";var Ke=G(),Rt=Je(),Gr=Rt.delayedRemoval,Qe=Rt.domFor,kt=$e();zt.exports=
function(){var r={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},i,a;function l(t){
return t.ownerDocument}function c(t){return t.attrs&&t.attrs.xmlns||r[t.tag]}function o(t,e){if(t.state!==
e)throw new Error("'vnode.state' must not be modified.")}function u(t){var e=t.state;try{return this.
apply(e,arguments)}finally{o(t,e)}}function g(t){try{return l(t).activeElement}catch{return null}}function h(t,e,n,s,f,m,M){
for(var R=n;R<s;R++){var x=e[R];x!=null&&w(t,x,f,M,m)}}function w(t,e,n,s,f){var m=e.tag;if(typeof m==
"string")switch(e.state={},e.attrs!=null&&Ne(e.attrs,e,n),m){case"#":d(t,e,f);break;case"<":C(t,e,s,
f);break;case"[":p(t,e,n,s,f);break;default:q(t,e,n,s,f)}else N(t,e,n,s,f)}function d(t,e,n){e.dom=l(
t).createTextNode(e.children),Q(t,e.dom,n)}var E={caption:"table",thead:"table",tbody:"table",tfoot:"\
table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function C(t,e,n,s){var f=e.children.
match(/^\s*?<(\w+)/im)||[],m=l(t).createElement(E[f[1]]||"div");n==="http://www.w3.org/2000/svg"?(m.
innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",m=m.firstChild):m.innerHTML=
e.children,e.dom=m.firstChild,e.domSize=m.childNodes.length;for(var M=l(t).createDocumentFragment(),
R;R=m.firstChild;)M.appendChild(R);Q(t,M,s)}function p(t,e,n,s,f){var m=l(t).createDocumentFragment();
if(e.children!=null){var M=e.children;h(m,M,0,M.length,n,null,s)}e.dom=m.firstChild,e.domSize=m.childNodes.
length,Q(t,m,f)}function q(t,e,n,s,f){var m=e.tag,M=e.attrs,R=e.is;s=c(e)||s;var x=s?R?l(t).createElementNS(
s,m,{is:R}):l(t).createElementNS(s,m):R?l(t).createElement(m,{is:R}):l(t).createElement(m);if(e.dom=
x,M!=null&&Er(e,M,s),Q(t,x,f),!Y(e)&&e.children!=null){var z=e.children;h(x,z,0,z.length,n,null,s),e.
tag==="select"&&M!=null&&Cr(e,M)}}function W(t,e){var n;if(typeof t.tag.view=="function"){if(t.state=
Object.create(t.tag),n=t.state.view,n.$$reentrantLock$$!=null)return;n.$$reentrantLock$$=!0}else{if(t.
state=void 0,n=t.tag,n.$$reentrantLock$$!=null)return;n.$$reentrantLock$$=!0,t.state=t.tag.prototype!=
null&&typeof t.tag.prototype.view=="function"?new t.tag(t):t.tag(t)}if(Ne(t.state,t,e),t.attrs!=null&&
Ne(t.attrs,t,e),t.instance=Ke.normalize(u.call(t.state.view,t)),t.instance===t)throw Error("A view c\
annot return the vnode it received as argument");n.$$reentrantLock$$=null}function N(t,e,n,s,f){W(e,
n),e.instance!=null?(w(t,e.instance,n,s,f),e.dom=e.instance.dom,e.domSize=e.dom!=null?e.instance.domSize:
0):e.domSize=0}function I(t,e,n,s,f,m){if(!(e===n||e==null&&n==null))if(e==null||e.length===0)h(t,n,
0,n.length,s,f,m);else if(n==null||n.length===0)ue(t,e,0,e.length);else{var M=e[0]!=null&&e[0].key!=
null,R=n[0]!=null&&n[0].key!=null,x=0,z=0;if(!M)for(;z<e.length&&e[z]==null;)z++;if(!R)for(;x<n.length&&
n[x]==null;)x++;if(M!==R)ue(t,e,z,e.length),h(t,n,x,n.length,s,f,m);else if(R){for(var B=e.length-1,
H=n.length-1,ge,J,F,V,j,je;B>=z&&H>=x&&(V=e[B],j=n[H],V.key===j.key);)V!==j&&S(t,V,j,s,f,m),j.dom!=null&&
(f=j.dom),B--,H--;for(;B>=z&&H>=x&&(J=e[z],F=n[x],J.key===F.key);)z++,x++,J!==F&&S(t,J,F,s,X(e,z,f),
m);for(;B>=z&&H>=x&&!(x===H||J.key!==j.key||V.key!==F.key);)je=X(e,z,f),se(t,V,je),V!==F&&S(t,V,F,s,
je,m),++x<=--H&&se(t,J,f),J!==j&&S(t,J,j,s,f,m),j.dom!=null&&(f=j.dom),z++,B--,V=e[B],j=n[H],J=e[z],
F=n[x];for(;B>=z&&H>=x&&V.key===j.key;)V!==j&&S(t,V,j,s,f,m),j.dom!=null&&(f=j.dom),B--,H--,V=e[B],j=
n[H];if(x>H)ue(t,e,z,B+1);else if(z>B)h(t,n,x,H+1,s,f,m);else{var Tr=f,mt=H-x+1,fe=new Array(mt),Ie=0,
D=0,We=2147483647,ve=0,ge,De;for(D=0;D<mt;D++)fe[D]=-1;for(D=H;D>=x;D--){ge==null&&(ge=O(e,z,B+1)),j=
n[D];var te=ge[j.key];te!=null&&(We=te<We?te:-1,fe[D-x]=te,V=e[te],e[te]=null,V!==j&&S(t,V,j,s,f,m),
j.dom!=null&&(f=j.dom),ve++)}if(f=Tr,ve!==B-z+1&&ue(t,e,z,B+1),ve===0)h(t,n,x,H+1,s,f,m);else if(We===
-1)for(De=$(fe),Ie=De.length-1,D=H;D>=x;D--)F=n[D],fe[D-x]===-1?w(t,F,s,m,f):De[Ie]===D-x?Ie--:se(t,
F,f),F.dom!=null&&(f=n[D].dom);else for(D=H;D>=x;D--)F=n[D],fe[D-x]===-1&&w(t,F,s,m,f),F.dom!=null&&
(f=n[D].dom)}}else{var Le=e.length<n.length?e.length:n.length;for(x=x<z?x:z;x<Le;x++)J=e[x],F=n[x],!(J===
F||J==null&&F==null)&&(J==null?w(t,F,s,m,X(e,x+1,f)):F==null?he(t,J):S(t,J,F,s,X(e,x+1,f),m));e.length>
Le&&ue(t,e,x,e.length),n.length>Le&&h(t,n,x,n.length,s,f,m)}}}function S(t,e,n,s,f,m){var M=e.tag,R=n.
tag;if(M===R&&e.is===n.is){if(n.state=e.state,n.events=e.events,Mr(n,e))return;if(typeof M=="string")
switch(n.attrs!=null&&Se(n.attrs,n,s),M){case"#":T(e,n);break;case"<":y(t,e,n,m,f);break;case"[":k(t,
e,n,s,f,m);break;default:A(e,n,s,m)}else v(t,e,n,s,f,m)}else he(t,e),w(t,n,s,m,f)}function T(t,e){t.
children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children),e.dom=t.dom}function y(t,e,n,s,f){
e.children!==n.children?(ut(t,e),C(t,n,s,f)):(n.dom=e.dom,n.domSize=e.domSize)}function k(t,e,n,s,f,m){
I(t,e.children,n.children,s,f,m);var M=0,R=n.children;if(n.dom=null,R!=null){for(var x=0;x<R.length;x++){
var z=R[x];z!=null&&z.dom!=null&&(n.dom==null&&(n.dom=z.dom),M+=z.domSize||1)}M!==1&&(n.domSize=M)}}
function A(t,e,n,s){var f=e.dom=t.dom;s=c(e)||s,(t.attrs!=e.attrs||e.attrs!=null&&!kt.get(e.attrs))&&
Pr(e,t.attrs,e.attrs,s),Y(e)||I(f,t.children,e.children,n,null,s)}function v(t,e,n,s,f,m){if(n.instance=
Ke.normalize(u.call(n.state.view,n)),n.instance===n)throw Error("A view cannot return the vnode it r\
eceived as argument");Se(n.state,n,s),n.attrs!=null&&Se(n.attrs,n,s),n.instance!=null?(e.instance==null?
w(t,n.instance,s,m,f):S(t,e.instance,n.instance,s,f,m),n.dom=n.instance.dom,n.domSize=n.instance.domSize):
e.instance!=null?(he(t,e.instance),n.dom=void 0,n.domSize=0):(n.dom=e.dom,n.domSize=e.domSize)}function O(t,e,n){
for(var s=Object.create(null);e<n;e++){var f=t[e];if(f!=null){var m=f.key;m!=null&&(s[m]=e)}}return s}
var P=[];function $(t){for(var e=[0],n=0,s=0,f=0,m=P.length=t.length,f=0;f<m;f++)P[f]=t[f];for(var f=0;f<
m;++f)if(t[f]!==-1){var M=e[e.length-1];if(t[M]<t[f]){P[f]=M,e.push(f);continue}for(n=0,s=e.length-1;n<
s;){var R=(n>>>1)+(s>>>1)+(n&s&1);t[e[R]]<t[f]?n=R+1:s=R}t[f]<t[e[n]]&&(n>0&&(P[f]=e[n-1]),e[n]=f)}for(n=
e.length,s=e[n-1];n-- >0;)e[n]=s,s=P[s];return P.length=0,e}function X(t,e,n){for(;e<t.length;e++)if(t[e]!=
null&&t[e].dom!=null)return t[e].dom;return n}function se(t,e,n){if(e.dom!=null){var s;if(e.domSize==
null)s=e.dom;else{s=l(t).createDocumentFragment();for(var f of Qe(e))s.appendChild(f)}Q(t,s,n)}}function Q(t,e,n){
n!=null?t.insertBefore(e,n):t.appendChild(e)}function Y(t){if(t.attrs==null||t.attrs.contenteditable==
null&&t.attrs.contentEditable==null)return!1;var e=t.children;if(e!=null&&e.length===1&&e[0].tag==="\
<"){var n=e[0].children;t.dom.innerHTML!==n&&(t.dom.innerHTML=n)}else if(e!=null&&e.length!==0)throw new Error(
"Child node of a contenteditable must be trusted.");return!0}function ue(t,e,n,s){for(var f=n;f<s;f++){
var m=e[f];m!=null&&he(t,m)}}function at(t,e,n,s){var f=e.state,m=u.call(n.onbeforeremove,e);if(m!=null){
var M=a;for(var R of Qe(e))Gr.set(R,M);s.v++,Promise.resolve(m).finally(function(){o(e,f),st(t,e,s)})}}
function st(t,e,n){--n.v===0&&(ke(e),ut(t,e))}function he(t,e){var n={v:1};typeof e.tag!="string"&&typeof e.
state.onbeforeremove=="function"&&at(t,e,e.state,n),e.attrs&&typeof e.attrs.onbeforeremove=="functio\
n"&&at(t,e,e.attrs,n),st(t,e,n)}function ut(t,e){if(e.dom!=null)if(e.domSize==null)t.removeChild(e.dom);else
for(var n of Qe(e))t.removeChild(n)}function ke(t){if(typeof t.tag!="string"&&typeof t.state.onremove==
"function"&&u.call(t.state.onremove,t),t.attrs&&typeof t.attrs.onremove=="function"&&u.call(t.attrs.
onremove,t),typeof t.tag!="string")t.instance!=null&&ke(t.instance);else{t.events!=null&&(t.events._=
null);var e=t.children;if(Array.isArray(e))for(var n=0;n<e.length;n++){var s=e[n];s!=null&&ke(s)}}}function Er(t,e,n){
for(var s in e)Re(t,s,null,e[s],n)}function Re(t,e,n,s,f){if(!(e==="key"||s==null||lt(e)||n===s&&!Or(
t,e)&&typeof s!="object")){if(e[0]==="o"&&e[1]==="n")return ct(t,e,s);if(e.slice(0,6)==="xlink:")t.dom.
setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),s);else if(e==="style")ot(t.dom,n,s);else if(ft(
t,e,f)){if(e==="value"){if((t.tag==="input"||t.tag==="textarea")&&t.dom.value===""+s||t.tag==="selec\
t"&&n!==null&&t.dom.value===""+s||t.tag==="option"&&n!==null&&t.dom.value===""+s)return;if(t.tag==="\
input"&&t.attrs.type==="file"&&""+s!=""){console.error("`value` is read-only on file inputs!");return}}
t.tag==="input"&&e==="type"?t.dom.setAttribute(e,s):t.dom[e]=s}else typeof s=="boolean"?s?t.dom.setAttribute(
e,""):t.dom.removeAttribute(e):t.dom.setAttribute(e==="className"?"class":e,s)}}function qr(t,e,n,s){
if(!(e==="key"||n==null||lt(e)))if(e[0]==="o"&&e[1]==="n")ct(t,e,void 0);else if(e==="style")ot(t.dom,
n,null);else if(ft(t,e,s)&&e!=="className"&&e!=="title"&&!(e==="value"&&(t.tag==="option"||t.tag==="\
select"&&t.dom.selectedIndex===-1&&t.dom===g(t.dom)))&&!(t.tag==="input"&&e==="type"))t.dom[e]=null;else{
var f=e.indexOf(":");f!==-1&&(e=e.slice(f+1)),n!==!1&&t.dom.removeAttribute(e==="className"?"class":
e)}}function Cr(t,e){if("value"in e)if(e.value===null)t.dom.selectedIndex!==-1&&(t.dom.value=null);else{
var n=""+e.value;(t.dom.value!==n||t.dom.selectedIndex===-1)&&(t.dom.value=n)}"selectedIndex"in e&&Re(
t,"selectedIndex",null,e.selectedIndex,void 0)}function Pr(t,e,n,s){var f;if(e!=null){e===n&&!kt.has(
n)&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next\
 major");for(var m in e)(f=e[m])!=null&&(n==null||n[m]==null)&&qr(t,m,f,s)}if(n!=null)for(var m in n)
Re(t,m,e&&e[m],n[m],s)}function Or(t,e){return e==="value"||e==="checked"||e==="selectedIndex"||e===
"selected"&&(t.dom===g(t.dom)||t.tag==="option"&&t.dom.parentNode===g(t.dom))}function lt(t){return t===
"oninit"||t==="oncreate"||t==="onupdate"||t==="onremove"||t==="onbeforeremove"||t==="onbeforeupdate"}
function ft(t,e,n){return n===void 0&&(t.tag.indexOf("-")>-1||t.is||e!=="href"&&e!=="list"&&e!=="for\
m"&&e!=="width"&&e!=="height")&&e in t.dom}function ot(t,e,n){if(e!==n)if(n==null)t.style="";else if(typeof n!=
"object")t.style=n;else if(e==null||typeof e!="object"){t.style="";for(var s in n){var f=n[s];f!=null&&
(s.includes("-")?t.style.setProperty(s,String(f)):t.style[s]=String(f))}}else{for(var s in e)e[s]!=null&&
n[s]==null&&(s.includes("-")?t.style.removeProperty(s):t.style[s]="");for(var s in n){var f=n[s];f!=
null&&(f=String(f))!==String(e[s])&&(s.includes("-")?t.style.setProperty(s,f):t.style[s]=f)}}}function ze(){
this._=i}ze.prototype=Object.create(null),ze.prototype.handleEvent=function(t){var e=this["on"+t.type],
n;typeof e=="function"?n=e.call(t.currentTarget,t):typeof e.handleEvent=="function"&&e.handleEvent(t);
var s=this;s._!=null&&(t.redraw!==!1&&(0,s._)(),n!=null&&typeof n.then=="function"&&Promise.resolve(
n).then(function(){s._!=null&&t.redraw!==!1&&(0,s._)()})),n===!1&&(t.preventDefault(),t.stopPropagation())};
function ct(t,e,n){if(t.events!=null){if(t.events._=i,t.events[e]===n)return;n!=null&&(typeof n=="fu\
nction"||typeof n=="object")?(t.events[e]==null&&t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=
n):(t.events[e]!=null&&t.dom.removeEventListener(e.slice(2),t.events,!1),t.events[e]=void 0)}else n!=
null&&(typeof n=="function"||typeof n=="object")&&(t.events=new ze,t.dom.addEventListener(e.slice(2),
t.events,!1),t.events[e]=n)}function Ne(t,e,n){typeof t.oninit=="function"&&u.call(t.oninit,e),typeof t.
oncreate=="function"&&n.push(u.bind(t.oncreate,e))}function Se(t,e,n){typeof t.onupdate=="function"&&
n.push(u.bind(t.onupdate,e))}function Mr(t,e){do{if(t.attrs!=null&&typeof t.attrs.onbeforeupdate=="f\
unction"){var n=u.call(t.attrs.onbeforeupdate,t,e);if(n!==void 0&&!n)break}if(typeof t.tag!="string"&&
typeof t.state.onbeforeupdate=="function"){var n=u.call(t.state.onbeforeupdate,t,e);if(n!==void 0&&!n)
break}return!1}while(!1);return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,
t.children=e.children,t.text=e.text,!0}var le;return function(t,e,n){if(!t)throw new TypeError("DOM \
element being rendered to does not exist.");if(le!=null&&t.contains(le))throw new TypeError("Node is\
 currently being rendered to and thus is locked.");var s=i,f=le,m=[],M=g(t),R=t.namespaceURI;le=t,i=
typeof n=="function"?n:void 0,a={};try{t.vnodes==null&&(t.textContent=""),e=Ke.normalizeChildren(Array.
isArray(e)?e:[e]),I(t,t.vnodes,e,m,null,R==="http://www.w3.org/1999/xhtml"?void 0:R),t.vnodes=e,M!=null&&
g(t)!==M&&typeof M.focus=="function"&&M.focus();for(var x=0;x<m.length;x++)m[x]()}finally{i=s,le=f}}}});var Ge=L((_n,St)=>{"use strict";St.exports=Nt()(typeof window<"u"?window:null)});var It=L(($n,jt)=>{"use strict";var Lt=G();jt.exports=function(r,i,a){var l=[],c=!1,o=-1;function u(){
for(o=0;o<l.length;o+=2)try{r(l[o],Lt(l[o+1]),g)}catch(w){a.error(w)}o=-1}function g(){c||(c=!0,i(function(){
c=!1,u()}))}g.sync=u;function h(w,d){if(d!=null&&d.view==null&&typeof d!="function")throw new TypeError(
"m.mount expects a component, not a vnode.");var E=l.indexOf(w);E>=0&&(l.splice(E,2),E<=o&&(o-=2),r(
w,[])),d!=null&&(l.push(w,d),r(w,Lt(d),g))}return{mount:h,redraw:g}}});var we=L((Hn,Wt)=>{"use strict";var Yr=Ge();Wt.exports=It()(Yr,typeof requestAnimationFrame<"u"?requestAnimationFrame:
null,typeof console<"u"?console:null)});var Ye=L((Un,vt)=>{"use strict";vt.exports=function(r){if(Object.prototype.toString.call(r)!=="[obje\
ct Object]")return"";var i=[];for(var a in r)l(a,r[a]);return i.join("&");function l(c,o){if(Array.isArray(
o))for(var u=0;u<o.length;u++)l(c+"["+u+"]",o[u]);else if(Object.prototype.toString.call(o)==="[obje\
ct Object]")for(var u in o)l(c+"["+u+"]",o[u]);else i.push(encodeURIComponent(c)+(o!=null&&o!==""?"="+
encodeURIComponent(o):""))}}});var de=L((Vn,Dt)=>{"use strict";var Xr=Ye();Dt.exports=function(r,i){if(/:([^\/\.-]+)(\.{3})?:/.test(
r))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
if(i==null)return r;var a=r.indexOf("?"),l=r.indexOf("#"),c=l<0?r.length:l,o=a<0?c:a,u=r.slice(0,o),
g={};Object.assign(g,i);var h=u.replace(/:([^\/\.-]+)(\.{3})?/g,function(W,N,I){return delete g[N],i[N]==
null?W:I?i[N]:encodeURIComponent(String(i[N]))}),w=h.indexOf("?"),d=h.indexOf("#"),E=d<0?h.length:d,
C=w<0?E:w,p=h.slice(0,C);a>=0&&(p+=r.slice(a,c)),w>=0&&(p+=(a<0?"?":"&")+h.slice(w,E));var q=Xr(g);return q&&
(p+=(a<0&&w<0?"?":"&")+q),l>=0&&(p+=r.slice(l)),d>=0&&(p+=(l<0?"":"&")+h.slice(d)),p}});var $t=L((Bn,_t)=>{"use strict";var Zr=de(),Ft=ye();_t.exports=function(r,i){function a(o){return new Promise(
o)}function l(o,u){return new Promise(function(g,h){o=Zr(o,u.params);var w=u.method!=null?u.method.toUpperCase():
"GET",d=u.body,E=(u.serialize==null||u.serialize===JSON.serialize)&&!(d instanceof r.FormData||d instanceof
r.URLSearchParams),C=u.responseType||(typeof u.extract=="function"?"":"json"),p=new r.XMLHttpRequest,
q=!1,W=!1,N=p,I,S=p.abort;p.abort=function(){q=!0,S.call(this)},p.open(w,o,u.async!==!1,typeof u.user==
"string"?u.user:void 0,typeof u.password=="string"?u.password:void 0),E&&d!=null&&!c(u,"content-type")&&
p.setRequestHeader("Content-Type","application/json; charset=utf-8"),typeof u.deserialize!="function"&&
!c(u,"accept")&&p.setRequestHeader("Accept","application/json, text/*"),u.withCredentials&&(p.withCredentials=
u.withCredentials),u.timeout&&(p.timeout=u.timeout),p.responseType=C;for(var T in u.headers)Ft.call(
u.headers,T)&&p.setRequestHeader(T,u.headers[T]);p.onreadystatechange=function(y){if(!q&&y.target.readyState===
4)try{var k=y.target.status>=200&&y.target.status<300||y.target.status===304||/^file:\/\//i.test(o),
A=y.target.response,v;if(C==="json"){if(!y.target.responseType&&typeof u.extract!="function")try{A=JSON.
parse(y.target.responseText)}catch{A=null}}else(!C||C==="text")&&A==null&&(A=y.target.responseText);
if(typeof u.extract=="function"?(A=u.extract(y.target,u),k=!0):typeof u.deserialize=="function"&&(A=
u.deserialize(A)),k){if(typeof u.type=="function")if(Array.isArray(A))for(var O=0;O<A.length;O++)A[O]=
new u.type(A[O]);else A=new u.type(A);g(A)}else{var P=function(){try{v=y.target.responseText}catch{v=
A}var $=new Error(v);$.code=y.target.status,$.response=A,h($)};p.status===0?setTimeout(function(){W||
P()}):P()}}catch($){h($)}},p.ontimeout=function(y){W=!0;var k=new Error("Request timed out");k.code=
y.target.status,h(k)},typeof u.config=="function"&&(p=u.config(p,u,o)||p,p!==N&&(I=p.abort,p.abort=function(){
q=!0,I.call(this)})),d==null?p.send():typeof u.serialize=="function"?p.send(u.serialize(d)):d instanceof
r.FormData||d instanceof r.URLSearchParams?p.send(d):p.send(JSON.stringify(d))})}a.prototype=Promise.
prototype,a.__proto__=Promise;function c(o,u){for(var g in o.headers)if(Ft.call(o.headers,g)&&g.toLowerCase()===
u)return!0;return!1}return{request:function(o,u){typeof o!="string"?(u=o,o=o.url):u==null&&(u={});var g=l(
o,u);if(u.background===!0)return g;var h=0;function w(){--h===0&&typeof i=="function"&&i()}return d(
g);function d(E){var C=E.then;return E.constructor=a,E.then=function(){h++;var p=C.apply(E,arguments);
return p.then(w,function(q){if(w(),h===0)throw q}),d(p)},E}}}}});var Ut=L((Jn,Ht)=>{"use strict";var en=we();Ht.exports=$t()(typeof window<"u"?window:null,en.redraw)});var Xe=L((Kn,Bt)=>{"use strict";function Vt(r){try{return decodeURIComponent(r)}catch{return r}}Bt.exports=
function(r){if(r===""||r==null)return{};r.charAt(0)==="?"&&(r=r.slice(1));for(var i=r.split("&"),a={},
l={},c=0;c<i.length;c++){var o=i[c].split("="),u=Vt(o[0]),g=o.length===2?Vt(o[1]):"";g==="true"?g=!0:
g==="false"&&(g=!1);var h=u.split(/\]\[?|\[/),w=l;u.indexOf("[")>-1&&h.pop();for(var d=0;d<h.length;d++){
var E=h[d],C=h[d+1],p=C==""||!isNaN(parseInt(C,10));if(E===""){var u=h.slice(0,d).join();a[u]==null&&
(a[u]=Array.isArray(w)?w.length:0),E=a[u]++}else if(E==="__proto__")break;if(d===h.length-1)w[E]=g;else{
var q=Object.getOwnPropertyDescriptor(w,E);q!=null&&(q=q.value),q==null&&(w[E]=q=p?[]:{}),w=q}}}return l}});var be=L((Qn,Jt)=>{"use strict";var tn=Xe();Jt.exports=function(r){var i=r.indexOf("?"),a=r.indexOf(
"#"),l=a<0?r.length:a,c=i<0?l:i,o=r.slice(0,c).replace(/\/{2,}/g,"/");return o?o[0]!=="/"&&(o="/"+o):
o="/",{path:o,params:i<0?{}:tn(r.slice(i+1,l))}}});var Qt=L((Gn,Kt)=>{"use strict";var rn=be();Kt.exports=function(r){var i=rn(r),a=Object.keys(i.params),
l=[],c=new RegExp("^"+i.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(o,u,g){
return u==null?"\\"+o:(l.push({k:u,r:g==="..."}),g==="..."?"(.*)":g==="."?"([^/]+)\\.":"([^/]+)"+(g||
""))})+"\\/?$");return function(o){for(var u=0;u<a.length;u++)if(i.params[a[u]]!==o.params[a[u]])return!1;
if(!l.length)return c.test(o.path);var g=c.exec(o.path);if(g==null)return!1;for(var u=0;u<l.length;u++)
o.params[l[u].k]=l[u].r?g[u+1]:decodeURIComponent(g[u+1]);return!0}}});var Ze=L((Yn,Xt)=>{"use strict";var Gt=ye(),Yt=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|on\
update|onbeforeremove|onremove)$");Xt.exports=function(r,i){var a={};if(i!=null)for(var l in r)Gt.call(
r,l)&&!Yt.test(l)&&i.indexOf(l)<0&&(a[l]=r[l]);else for(var l in r)Gt.call(r,l)&&!Yt.test(l)&&(a[l]=
r[l]);return a}});var rr=L((Xn,tr)=>{"use strict";var nn=G(),an=Ue(),Zt=de(),er=be(),sn=Qt(),un=Ze();function ln(r){try{
return decodeURIComponent(r)}catch{return r}}tr.exports=function(r,i){var a=r==null?null:typeof r.setImmediate==
"function"?r.setImmediate:r.setTimeout,l=Promise.resolve(),c=!1,o=!1,u=!1,g,h,w,d,E,C,p,q,W={onremove:function(){
o=u=!1,r.removeEventListener("popstate",S,!1)},view:function(){var y=nn(E,C.key,C);return d?d.render(
y):[y]}},N=T.SKIP={};function I(){c=!1;var y=r.location.hash;T.prefix[0]!=="#"&&(y=r.location.search+
y,T.prefix[0]!=="?"&&(y=r.location.pathname+y,y[0]!=="/"&&(y="/"+y)));var k=y.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,
ln).slice(T.prefix.length),A=er(k);Object.assign(A.params,r.history.state);function v(P){console.error(
P),T.set(w,null,{replace:!0})}O(0);function O(P){for(;P<h.length;P++)if(h[P].check(A)){var $=h[P].component,
X=h[P].route,se=$,Q=q=function(Y){if(Q===q){if(Y===N)return O(P+1);E=Y!=null&&(typeof Y.view=="funct\
ion"||typeof Y=="function")?Y:"div",C=A.params,p=k,q=null,d=$.render?$:null,u?i.redraw():(u=!0,i.mount(
g,W))}};$.view||typeof $=="function"?($={},Q(se)):$.onmatch?l.then(function(){return $.onmatch(A.params,
k,X)}).then(Q,k===w?null:v):Q();return}if(k===w)throw new Error("Could not resolve default route "+w+
".");T.set(w,null,{replace:!0})}}function S(){c||(c=!0,a(I))}function T(y,k,A){if(!y)throw new TypeError(
"DOM element being rendered to does not exist.");if(h=Object.keys(A).map(function(O){if(O[0]!=="/")throw new SyntaxError(
"Routes must start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(O))throw new SyntaxError("Route par\
ameter names must be separated with either '/', '.', or '-'.");return{route:O,component:A[O],check:sn(
O)}}),w=k,k!=null){var v=er(k);if(!h.some(function(O){return O.check(v)}))throw new ReferenceError("\
Default route doesn't match any known routes.")}g=y,r.addEventListener("popstate",S,!1),o=!0,I()}return T.
set=function(y,k,A){if(q!=null&&(A=A||{},A.replace=!0),q=null,y=Zt(y,k),o){S();var v=A?A.state:null,
O=A?A.title:null;A&&A.replace?r.history.replaceState(v,O,T.prefix+y):r.history.pushState(v,O,T.prefix+
y)}else r.location.href=T.prefix+y},T.get=function(){return p},T.prefix="#!",T.Link={view:function(y){
var k=an(y.attrs.selector||"a",un(y.attrs,["options","params","selector","onclick"]),y.children),A,v,
O;return(k.attrs.disabled=!!k.attrs.disabled)?(k.attrs.href=null,k.attrs["aria-disabled"]="true"):(A=
y.attrs.options,v=y.attrs.onclick,O=Zt(k.attrs.href,y.attrs.params),k.attrs.href=T.prefix+O,k.attrs.
onclick=function(P){var $;typeof v=="function"?$=v.call(P.currentTarget,P):v==null||typeof v!="objec\
t"||typeof v.handleEvent=="function"&&v.handleEvent(P),$!==!1&&!P.defaultPrevented&&(P.button===0||P.
which===0||P.which===1)&&(!P.currentTarget.target||P.currentTarget.target==="_self")&&!P.ctrlKey&&!P.
metaKey&&!P.shiftKey&&!P.altKey&&(P.preventDefault(),P.redraw=!1,T.set(O,null,A))}),k}},T.param=function(y){
return C&&y!=null?C[y]:C},T}});var ir=L((Zn,nr)=>{"use strict";var fn=we();nr.exports=rr()(typeof window<"u"?window:null,fn)});var re=L((ei,sr)=>{"use strict";var xe=Mt(),on=Ut(),ar=we(),cn=Je(),U=function(){return xe.apply(this,
arguments)};U.m=xe;U.trust=xe.trust;U.fragment=xe.fragment;U.Fragment="[";U.mount=ar.mount;U.route=ir();
U.render=Ge();U.redraw=ar.redraw;U.request=on.request;U.parseQueryString=Xe();U.buildQueryString=Ye();
U.parsePathname=be();U.buildPathname=de();U.vnode=G();U.censor=Ze();U.domFor=cn.domFor;sr.exports=U});var Ar=oe(re(),1);var b=oe(re(),1);var ne=oe(re(),1);function ur(r,i){return typeof i=="string"?(0,ne.default)(ne.default.route.Link,{href:i},
r):(0,ne.default)("span.link",r)}function Ae(){return{view(r){return(0,ne.default)(".nav",ur("Unknow\
n letters",r.attrs.page!=="pattern"&&"/pattern/-/freq/desc/1"),ne.default.trust(" &nbsp; | &nbsp; "),
ur("Anagrams",r.attrs.page!=="anagram"&&"/anagram/-"))}}}function K(r){return String(r).replace(/\d(?=(\d{3})+\b)/g,"$&,")}var ce=oe(re(),1);var lr="./puff-FF7ZATQ6.svg";function me(r){return[(0,ce.default)("img",{src:lr,width:26,height:26,style:{verticalAlign:"text-bot\
tom"}}),ce.default.trust(` &nbsp; ${r} \u2026`)]}function Ee(r=""){return(0,ce.default)(".credits",ce.default.
trust(`We use a dictionary of ${K(291206)} names and English words derived from 
    <a href="http://aspell.net/">aspell</a>,
    <a href="http://web.mit.edu/freebsd/head/share/dict/">web2</a>,
    <a href="https://en.wikpedia.org">Wikipedia</a> and
    <a href="https://web.archive.org/web/20230401195411/https://crr.ugent.be/archives/2045">Brysbaer\
t et al</a>.
    Many of these aren't valid in word games.`+r))}var or=Symbol("Comlink.proxy"),hn=Symbol("Comlink.endpoint"),gn=Symbol("Comlink.releaseProxy"),et=Symbol(
"Comlink.finalizer"),Ce=Symbol("Comlink.thrown"),cr=r=>typeof r=="object"&&r!==null||typeof r=="func\
tion",yn={canHandle:r=>cr(r)&&r[or],serialize(r){let{port1:i,port2:a}=new MessageChannel;return pr(r,
i),[a,[a]]},deserialize(r){return r.start(),rt(r)}},wn={canHandle:r=>cr(r)&&Ce in r,serialize({value:r}){
let i;return r instanceof Error?i={isError:!0,value:{message:r.message,name:r.name,stack:r.stack}}:i=
{isError:!1,value:r},[i,[]]},deserialize(r){throw r.isError?Object.assign(new Error(r.value.message),
r.value):r.value}},mr=new Map([["proxy",yn],["throw",wn]]);function dn(r,i){for(let a of r)if(i===a||
a==="*"||a instanceof RegExp&&a.test(i))return!0;return!1}function pr(r,i=globalThis,a=["*"]){i.addEventListener(
"message",function l(c){if(!c||!c.data)return;if(!dn(a,c.origin)){console.warn(`Invalid origin '${c.
origin}' for comlink proxy`);return}let{id:o,type:u,path:g}=Object.assign({path:[]},c.data),h=(c.data.
argumentList||[]).map(ee),w;try{let d=g.slice(0,-1).reduce((C,p)=>C[p],r),E=g.reduce((C,p)=>C[p],r);
switch(u){case"GET":w=E;break;case"SET":d[g.slice(-1)[0]]=ee(c.data.value),w=!0;break;case"APPLY":w=
E.apply(d,h);break;case"CONSTRUCT":{let C=new E(...h);w=nt(C)}break;case"ENDPOINT":{let{port1:C,port2:p}=new MessageChannel;
pr(r,p),w=qn(C,[C])}break;case"RELEASE":w=void 0;break;default:return}}catch(d){w={value:d,[Ce]:0}}Promise.
resolve(w).catch(d=>({value:d,[Ce]:0})).then(d=>{let[E,C]=Me(d);i.postMessage(Object.assign(Object.assign(
{},E),{id:o}),C),u==="RELEASE"&&(i.removeEventListener("message",l),hr(i),et in r&&typeof r[et]=="fu\
nction"&&r[et]())}).catch(d=>{let[E,C]=Me({value:new TypeError("Unserializable return value"),[Ce]:0});
i.postMessage(Object.assign(Object.assign({},E),{id:o}),C)})}),i.start&&i.start()}function bn(r){return r.
constructor.name==="MessagePort"}function hr(r){bn(r)&&r.close()}function rt(r,i){let a=new Map;return r.
addEventListener("message",function(c){let{data:o}=c;if(!o||!o.id)return;let u=a.get(o.id);if(u)try{
u(o)}finally{a.delete(o.id)}}),tt(r,a,[],i)}function qe(r){if(r)throw new Error("Proxy has been rele\
ased and is not useable")}function gr(r){return ie(r,new Map,{type:"RELEASE"}).then(()=>{hr(r)})}var Pe=new WeakMap,
Oe="FinalizationRegistry"in globalThis&&new FinalizationRegistry(r=>{let i=(Pe.get(r)||0)-1;Pe.set(r,
i),i===0&&gr(r)});function xn(r,i){let a=(Pe.get(i)||0)+1;Pe.set(i,a),Oe&&Oe.register(r,i,r)}function An(r){
Oe&&Oe.unregister(r)}function tt(r,i,a=[],l=function(){}){let c=!1,o=new Proxy(l,{get(u,g){if(qe(c),
g===gn)return()=>{An(o),gr(r),i.clear(),c=!0};if(g==="then"){if(a.length===0)return{then:()=>o};let h=ie(
r,i,{type:"GET",path:a.map(w=>w.toString())}).then(ee);return h.then.bind(h)}return tt(r,i,[...a,g])},
set(u,g,h){qe(c);let[w,d]=Me(h);return ie(r,i,{type:"SET",path:[...a,g].map(E=>E.toString()),value:w},
d).then(ee)},apply(u,g,h){qe(c);let w=a[a.length-1];if(w===hn)return ie(r,i,{type:"ENDPOINT"}).then(
ee);if(w==="bind")return tt(r,i,a.slice(0,-1));let[d,E]=fr(h);return ie(r,i,{type:"APPLY",path:a.map(
C=>C.toString()),argumentList:d},E).then(ee)},construct(u,g){qe(c);let[h,w]=fr(g);return ie(r,i,{type:"\
CONSTRUCT",path:a.map(d=>d.toString()),argumentList:h},w).then(ee)}});return xn(o,r),o}function En(r){
return Array.prototype.concat.apply([],r)}function fr(r){let i=r.map(Me);return[i.map(a=>a[0]),En(i.
map(a=>a[1]))]}var yr=new WeakMap;function qn(r,i){return yr.set(r,i),r}function nt(r){return Object.
assign(r,{[or]:!0})}function Me(r){for(let[i,a]of mr)if(a.canHandle(r)){let[l,c]=a.serialize(r);return[{type:"HANDLER",name:i,
value:l},c]}return[{type:"RAW",value:r},yr.get(r)||[]]}function ee(r){switch(r.type){case"HANDLER":return mr.
get(r.name).deserialize(r.value);case"RAW":return r.value}}function ie(r,i,a,l){return new Promise(c=>{
let o=Cn();i.set(o,c),r.start&&r.start(),r.postMessage(Object.assign({id:o},a),l)})}function Cn(){return new Array(
4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var Te=rt(new Worker(new URL("./combined.worker.js",import.meta.url)));var On="-",ae=2e3;function dr(){let r="",i,a,l,c,o=!1,u=!1,g=[],h=0;async function w(p){let{pattern:q,
order:W,direction:N,list:I,page:S}=p.attrs;if(q===r&&W===i&&N===a&&I===l&&S===c)return;r=q,i=W,a=N,l=
I,c=S,u=!0,b.default.redraw();let T=(parseInt(S,10)-1)*ae,y=await Te.wordsMatchingPattern(q,W,N,T,ae,
I==="multi");g=y.results,h=y.count,u=!1,b.default.redraw()}function d(p,q,W,N){return(0,b.default)("\
label",(0,b.default)("input",{type:"radio",name:"order",checked:i===p&&a===q,onchange:()=>b.default.
route.set("/pattern/:pattern/:list/:order/:direction/:page",{...N,order:p,direction:q,page:1})}),W)}
function E(p,q,W){return(0,b.default)("label",(0,b.default)("input",{type:"radio",name:"multi",checked:l===
p,onchange:()=>b.default.route.set("/pattern/:pattern/:list/:order/:direction/:page",{...W,list:p,page:1})}),
q)}function C(p,q,W){return q>1&&(0,b.default)(".pagination",[1,p-1,p,p+1,q].filter(N=>N>=1&&N<=q).filter(
(N,I,S)=>N!==S[I-1]).reduce((N,I,S,T)=>(S>0&&T[S-1]!==I-1&&N.push((0,b.default)("span.ellipsis",b.default.
trust("&hellip;"))),N.push(W(I)),N),[]))}return{oncreate:w,onupdate:w,view(p){let q=p.attrs.pattern===
On?"":p.attrs.pattern,W=parseInt(p.attrs.page,10),N=Math.ceil(h/ae),I=(W-1)*ae,S=Math.min(I+ae-1,h),
T=()=>C(W,N,O=>(0,b.default)(b.default.route.Link,{href:"/pattern/:pattern/:list/:order/:direction/:\
page",selector:O===W?"a.current":"a",params:{...p.attrs,page:O}},String(O))),y=(O,P="freq/desc")=>(0,b.default)(
b.default.route.Link,{href:`/pattern/${encodeURIComponent(O)}/single/${P}/1`,selector:"a.example"},O),
k="http://economicspsychologypolicy.blogspot.com/2013/10/lecture-summary-judgement-heuristics.html",
A=b.default.trust(" \u2014&nbsp;"),v=[(0,b.default)("h4","Examples"),(0,b.default)("ul",(0,b.default)(
"li",y("...s.w.r."),", ",y("*tz"),", ",y("*yx")," or ",y("*sh.p*sh.p*")),(0,b.default)("li",y("*a*e*\
i*o*u*","length/asc"),A,"all vowels in order"),(0,b.default)("li",y("r..*")," and ",y("..r*"),A,(0,b.default)(
"a",{href:k,target:"_blank"},"r first vs. r third")),(0,b.default)("li",y("*","length/desc"),A,"long\
est")),(0,b.default)("h4","Advanced examples"),(0,b.default)("ul",(0,b.default)("li",y("~(^|[^c])ei"),
A,"i before e except after c, except \u2026"),(0,b.default)("li",y("~q([^u]|$)"),A,"q, no u"),(0,b.default)(
"li",y("~[aeiou]{4}$"),A,"4 vowels at end"),(0,b.default)("li",y("~(.{4,})\\1"),A,"4+ letters repeat\
ing"),(0,b.default)("li",y("~^(.)(.?)(.?)(.?).?\\4\\3\\2\\1$","length/desc"),A,"palindromes"))];return(0,b.default)(
".page",(0,b.default)(Ae,{page:"pattern"}),(0,b.default)(".pattern",(0,b.default)("h2","Find words w\
ith unknown letters"),o?(0,b.default)(".message",me("Loading dictionary")):(0,b.default)(".interface",
(0,b.default)(".pattern-entry",(0,b.default)("input.pattern-input",{type:"search",autocorrect:"off",
autocomplete:"off",autocapitalize:"none",spellcheck:!1,size:15,value:q,onchange:O=>{let{value:P}=O.currentTarget;
b.default.route.set("/pattern/:pattern/:list/:order/:direction/1",{...p.attrs,pattern:P})}}),(0,b.default)(
"button","Find"),(0,b.default)(".instructions",(0,b.default)("h4","Wildcards"),(0,b.default)("div",b.default.
trust('Use <span class="letter">.</span> or <span class="letter">?</span> for each unknown letter')),
(0,b.default)("div",b.default.trust('Use <span class="letter">*</span> for any number of unknowns')),
(0,b.default)("div",b.default.trust('<i>Advanced:</i> prefix <span class="letter">~</span> to use a \
<a href="https://cs.lmu.edu/~ray/notes/regex/" target="_blank">regex</a>'))),(0,b.default)(".list",(0,b.default)(
"h4","Search"),(0,b.default)("div",E("single"," Single words",p.attrs),E("multi"," Multiple words",p.
attrs))),(0,b.default)(".order",(0,b.default)("h4","Show first"),(0,b.default)("div",d("freq","desc",
" Common words",p.attrs),d("freq","asc"," Obscure words",p.attrs)),(0,b.default)("div",d("length","a\
sc"," Short words",p.attrs),d("length","desc"," Long words",p.attrs)),(0,b.default)("div",d("a-z","a\
sc"," A \u2013\xA0Z",p.attrs),d("a-z","desc"," Z \u2013\xA0A",p.attrs))),(0,b.default)(".message",q?
u?me("Searching"):h<0?g[0]:h>0?`${K(h)} words found`+(h>ae?` (showing ${K(I)} \u2013 ${K(S)})`:""):"\
No matching words found":"Please enter a search pattern above"),!q&&v,h>0&&u===!1&&[T(),(0,b.default)(
".matches",g.map(O=>(0,b.default)("a.match",{href:`https://www.google.com/search?q="${O}"+definition`,
target:"_blank"},O))),T()]),Ee(` For multiple words, we use ${K(330226)} entries from <a href="https\
://en.wiktionary.org/">Wiktionary</a>.`))))}}}var _=oe(re(),1);function it(r){return r.toLowerCase().replace(/[^a-z]+/g,"")}var br="-",pe=1e4,Mn=876543;function Tn(r,i=10){let a=[];for(let l=0;l<=i;l++)a.push([]);for(let l of r){
let[{length:c}]=l;a[c>i?i:c].push(l)}return a}function xr(r){let i=!1,a={evaluated:0,working:!1,anagrams:[]};
function l(){let c=it(document.querySelector("#anag-input").value);c&&(a.working=!0,Te.find(c,pe,Mn,
nt(async o=>{let u=a;return a=o,_.default.redraw(),!u.working})))}return{oncreate(c){let o=it(c.attrs.
letters);o&&o!==br&&l()},view(c){let o=c.attrs.letters===br?"":c.attrs.letters;return(0,_.default)("\
.page",(0,_.default)(Ae,{page:"anagram"}),(0,_.default)(".pattern",(0,_.default)("h2","Find anagrams"),
(0,_.default)(".interface",(0,_.default)(".pattern-entry",(0,_.default)("input#anag-input",{type:"se\
arch",autocorrect:"off",autocomplete:"off",autocapitalize:"none",spellcheck:!1,size:15,value:o,disabled:a.
working,onchange(u){let{value:g}=u.currentTarget;_.default.route.set("/anagram/:letters",{...c.attrs,
letters:g===""?"-":g})},onkeyup(u){u.key==="Enter"&&(a.working?a.working=!1:l()),u.redraw=!1}}),a.working?
[(0,_.default)("button",{onclick(){a.working=!1}},"Stop"),(0,_.default)(".progress",me(`${K(a.evaluated)}\
 evaluated`+(a.evaluated>pe?`, ${K(pe)} kept`:"")))]:[(0,_.default)("button",{onclick:l},"Find"),a.evaluated!==
0&&(0,_.default)(".progress",`${K(a.evaluated)} found`+(a.evaluated>pe?`, ${K(pe)} kept`:""))]),(0,_.default)(
"#grouping",(0,_.default)("label",(0,_.default)("input[type=checkbox]",{checked:i,onchange(u){i=u.currentTarget.
checked}})," Group by word count")),(0,_.default)(".matches",i?Tn(a.anagrams).map((u,g)=>u.length>0&&
[(0,_.default)("h3",`${g} words`),u.map(h=>(0,_.default)("span.match",h[0].join(" ")))]):a.anagrams.
map(u=>(0,_.default)("span.match",u[0].join(" "))))),Ee(" Anagrams are retained and ranked by prefer\
ring those where the least common word is more common, those with fewer words, and (only very slight\
ly) those where the mean word is more common.")))},onremove(){a.working=!1}}}Ar.default.route(document.getElementById("main"),"/pattern/-/single/freq/desc/1",{"/pattern/:pattern\
/:list/:order/:direction/:page":dr,"/anagram/:letters":xr});self.DEV&&new EventSource("/esbuild").addEventListener(
"change",()=>location.reload());
/*! Bundled license information:

comlink/dist/esm/comlink.mjs:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
