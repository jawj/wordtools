var Tr=Object.create;var mt=Object.defineProperty;var kr=Object.getOwnPropertyDescriptor;var Mr=Object.getOwnPropertyNames;var Rr=Object.getPrototypeOf,zr=Object.prototype.hasOwnProperty;var L=(r,i)=>()=>(i||r((i={exports:{}}).exports,i),i.exports);var Nr=(r,i,s,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let c of Mr(i))!zr.call(r,c)&&
c!==s&&mt(r,c,{get:()=>i[c],enumerable:!(l=kr(i,c))||l.enumerable});return r};var oe=(r,i,s)=>(s=r!=null?Tr(Rr(r)):{},Nr(i||!r||!r.__esModule?mt(s,"default",{value:r,enumerable:!0}):
s,r));var G=L((Mn,pt)=>{"use strict";function Z(r,i,s,l,c,o){return{tag:r,key:i,attrs:s,children:l,text:c,
dom:o,is:void 0,domSize:void 0,state:void 0,events:void 0,instance:void 0}}Z.normalize=function(r){return Array.
isArray(r)?Z("[",void 0,void 0,Z.normalizeChildren(r),void 0,void 0):r==null||typeof r=="boolean"?null:
typeof r=="object"?r:Z("#",void 0,void 0,String(r),void 0,void 0)};Z.normalizeChildren=function(r){var i=[];
if(r.length){for(var s=r[0]!=null&&r[0].key!=null,l=1;l<r.length;l++)if((r[l]!=null&&r[l].key!=null)!==
s)throw new TypeError(s&&(r[l]==null||typeof r[l]=="boolean")?"In fragments, vnodes must either all \
have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.frag\
ment({key: ...}), instead of a hole.":"In fragments, vnodes must either all have keys or none have k\
eys.");for(var l=0;l<r.length;l++)i[l]=Z.normalize(r[l])}return i};pt.exports=Z});var _e=L((Rn,ht)=>{"use strict";var Sr=G();ht.exports=function(r,i){return r==null||typeof r=="objec\
t"&&r.tag==null&&!Array.isArray(r)?i.length===1&&Array.isArray(i[0])&&(i=i[0]):(i=i.length===0&&Array.
isArray(r)?r:[r,...i],r=void 0),Sr("",r&&r.key,r,i)}});var we=L((zn,gt)=>{"use strict";gt.exports={}.hasOwnProperty});var $e=L((Nn,yt)=>{"use strict";yt.exports={}});var He=L((Sn,wt)=>{"use strict";var Lr=$e();wt.exports=new Map([[Lr,!0]])});var Ve=L((Ln,xt)=>{"use strict";var jr=G(),Ir=_e(),Ue=we(),dt=$e(),vr=He(),Dr=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
bt=Object.create(null);function Fr(r){for(var i in r)if(Ue.call(r,i))return!1;return!0}function _r(r){
return r==="value"||r==="checked"||r==="selectedIndex"||r==="selected"}function $r(r){for(var i,s="d\
iv",l=[],c={},o=!0;i=Dr.exec(r);){var u=i[1],g=i[2];if(u===""&&g!=="")s=g;else if(u==="#")c.id=g;else if(u===
".")l.push(g);else if(i[3][0]==="["){var m=i[6];m&&(m=m.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),
i[4]==="class"?l.push(m):(c[i[4]]=m===""?m:m||!0,_r(i[4])&&(o=!1))}}return l.length>0&&(c.className=
l.join(" ")),Fr(c)?c=dt:vr.set(c,o),bt[r]={tag:s,attrs:c,is:c.is}}function Hr(r,i){i.tag=r.tag;var s=i.
attrs;if(s==null)return i.attrs=r.attrs,i.is=r.is,i;var l=Ue.call(s,"class"),c=l?s.class:s.className;
return r.attrs!==dt?(s=Object.assign({},r.attrs,s),(c!=null||r.attrs.className!=null)&&(s.className=
c!=null?r.attrs.className!=null?String(r.attrs.className)+" "+String(c):c:r.attrs.className)):c!=null&&
(s.className=c),l&&(s.class=null),r.tag==="input"&&Ue.call(s,"type")&&(s=Object.assign({type:s.type},
s)),i.is=s.is,i.attrs=s,i}function Ur(r,i,...s){if(r==null||typeof r!="string"&&typeof r!="function"&&
typeof r.view!="function")throw Error("The selector must be either a string or a component.");var l=Ir(
i,s);return typeof r=="string"&&(l.children=jr.normalizeChildren(l.children),r!=="[")?Hr(bt[r]||$r(r),
l):(l.attrs==null&&(l.attrs={}),l.tag=r,l)}xt.exports=Ur});var Et=L((jn,At)=>{"use strict";var Vr=G();At.exports=function(r){return r==null&&(r=""),Vr("<",void 0,
void 0,r,void 0,void 0)}});var Pt=L((In,qt)=>{"use strict";var Wr=G(),Br=_e();qt.exports=function(r,...i){var s=Br(r,i);return s.
attrs==null&&(s.attrs={}),s.tag="[",s.children=Wr.normalizeChildren(s.children),s}});var Ot=L((vn,Ct)=>{"use strict";var We=Ve();We.trust=Et();We.fragment=Pt();Ct.exports=We});var Je=L((Dn,Tt)=>{"use strict";var Be=new WeakMap;function*Jr(r){var i=r.dom,s=r.domSize,l=Be.get(i);
if(i!=null)do{var c=i.nextSibling;Be.get(i)===l&&(yield i,s--),i=c}while(s)}Tt.exports={delayedRemoval:Be,
domFor:Jr}});var zt=L((Fn,Rt)=>{"use strict";var Ke=G(),Mt=Je(),Kr=Mt.delayedRemoval,Qe=Mt.domFor,kt=He();Rt.exports=
function(){var r={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},i,s;function l(t){
return t.ownerDocument}function c(t){return t.attrs&&t.attrs.xmlns||r[t.tag]}function o(t,e){if(t.state!==
e)throw new Error("'vnode.state' must not be modified.")}function u(t){var e=t.state;try{return this.
apply(e,arguments)}finally{o(t,e)}}function g(t){try{return l(t).activeElement}catch{return null}}function m(t,e,n,a,f,p,T){
for(var R=n;R<a;R++){var x=e[R];x!=null&&y(t,x,f,T,p)}}function y(t,e,n,a,f){var p=e.tag;if(typeof p==
"string")switch(e.state={},e.attrs!=null&&Ne(e.attrs,e,n),p){case"#":d(t,e,f);break;case"<":P(t,e,a,
f);break;case"[":h(t,e,n,a,f);break;default:q(t,e,n,a,f)}else N(t,e,n,a,f)}function d(t,e,n){e.dom=l(
t).createTextNode(e.children),Q(t,e.dom,n)}var E={caption:"table",thead:"table",tbody:"table",tfoot:"\
table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function P(t,e,n,a){var f=e.children.
match(/^\s*?<(\w+)/im)||[],p=l(t).createElement(E[f[1]]||"div");n==="http://www.w3.org/2000/svg"?(p.
innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",p=p.firstChild):p.innerHTML=
e.children,e.dom=p.firstChild,e.domSize=p.childNodes.length;for(var T=l(t).createDocumentFragment(),
R;R=p.firstChild;)T.appendChild(R);Q(t,T,a)}function h(t,e,n,a,f){var p=l(t).createDocumentFragment();
if(e.children!=null){var T=e.children;m(p,T,0,T.length,n,null,a)}e.dom=p.firstChild,e.domSize=p.childNodes.
length,Q(t,p,f)}function q(t,e,n,a,f){var p=e.tag,T=e.attrs,R=e.is;a=c(e)||a;var x=a?R?l(t).createElementNS(
a,p,{is:R}):l(t).createElementNS(a,p):R?l(t).createElement(p,{is:R}):l(t).createElement(p);if(e.dom=
x,T!=null&&xr(e,T,a),Q(t,x,f),!Y(e)&&e.children!=null){var z=e.children;m(x,z,0,z.length,n,null,a),e.
tag==="select"&&T!=null&&Er(e,T)}}function D(t,e){var n;if(typeof t.tag.view=="function"){if(t.state=
Object.create(t.tag),n=t.state.view,n.$$reentrantLock$$!=null)return;n.$$reentrantLock$$=!0}else{if(t.
state=void 0,n=t.tag,n.$$reentrantLock$$!=null)return;n.$$reentrantLock$$=!0,t.state=t.tag.prototype!=
null&&typeof t.tag.prototype.view=="function"?new t.tag(t):t.tag(t)}if(Ne(t.state,t,e),t.attrs!=null&&
Ne(t.attrs,t,e),t.instance=Ke.normalize(u.call(t.state.view,t)),t.instance===t)throw Error("A view c\
annot return the vnode it received as argument");n.$$reentrantLock$$=null}function N(t,e,n,a,f){D(e,
n),e.instance!=null?(y(t,e.instance,n,a,f),e.dom=e.instance.dom,e.domSize=e.dom!=null?e.instance.domSize:
0):e.domSize=0}function I(t,e,n,a,f,p){if(!(e===n||e==null&&n==null))if(e==null||e.length===0)m(t,n,
0,n.length,a,f,p);else if(n==null||n.length===0)le(t,e,0,e.length);else{var T=e[0]!=null&&e[0].key!=
null,R=n[0]!=null&&n[0].key!=null,x=0,z=0;if(!T)for(;z<e.length&&e[z]==null;)z++;if(!R)for(;x<n.length&&
n[x]==null;)x++;if(T!==R)le(t,e,z,e.length),m(t,n,x,n.length,a,f,p);else if(R){for(var B=e.length-1,
U=n.length-1,ye,J,$,W,j,je;B>=z&&U>=x&&(W=e[B],j=n[U],W.key===j.key);)W!==j&&S(t,W,j,a,f,p),j.dom!=null&&
(f=j.dom),B--,U--;for(;B>=z&&U>=x&&(J=e[z],$=n[x],J.key===$.key);)z++,x++,J!==$&&S(t,J,$,a,X(e,z,f),
p);for(;B>=z&&U>=x&&!(x===U||J.key!==j.key||W.key!==$.key);)je=X(e,z,f),ue(t,W,je),W!==$&&S(t,W,$,a,
je,p),++x<=--U&&ue(t,J,f),J!==j&&S(t,J,j,a,f,p),j.dom!=null&&(f=j.dom),z++,B--,W=e[B],j=n[U],J=e[z],
$=n[x];for(;B>=z&&U>=x&&W.key===j.key;)W!==j&&S(t,W,j,a,f,p),j.dom!=null&&(f=j.dom),B--,U--,W=e[B],j=
n[U];if(x>U)le(t,e,z,B+1);else if(z>B)m(t,n,x,U+1,a,f,p);else{var Or=f,ot=U-x+1,ce=new Array(ot),Ie=0,
_=0,ve=2147483647,De=0,ye,Fe;for(_=0;_<ot;_++)ce[_]=-1;for(_=U;_>=x;_--){ye==null&&(ye=O(e,z,B+1)),j=
n[_];var te=ye[j.key];te!=null&&(ve=te<ve?te:-1,ce[_-x]=te,W=e[te],e[te]=null,W!==j&&S(t,W,j,a,f,p),
j.dom!=null&&(f=j.dom),De++)}if(f=Or,De!==B-z+1&&le(t,e,z,B+1),De===0)m(t,n,x,U+1,a,f,p);else if(ve===
-1)for(Fe=H(ce),Ie=Fe.length-1,_=U;_>=x;_--)$=n[_],ce[_-x]===-1?y(t,$,a,p,f):Fe[Ie]===_-x?Ie--:ue(t,
$,f),$.dom!=null&&(f=n[_].dom);else for(_=U;_>=x;_--)$=n[_],ce[_-x]===-1&&y(t,$,a,p,f),$.dom!=null&&
(f=n[_].dom)}}else{var Le=e.length<n.length?e.length:n.length;for(x=x<z?x:z;x<Le;x++)J=e[x],$=n[x],!(J===
$||J==null&&$==null)&&(J==null?y(t,$,a,p,X(e,x+1,f)):$==null?ge(t,J):S(t,J,$,a,X(e,x+1,f),p));e.length>
Le&&le(t,e,x,e.length),n.length>Le&&m(t,n,x,n.length,a,f,p)}}}function S(t,e,n,a,f,p){var T=e.tag,R=n.
tag;if(T===R&&e.is===n.is){if(n.state=e.state,n.events=e.events,Cr(n,e))return;if(typeof T=="string")
switch(n.attrs!=null&&Se(n.attrs,n,a),T){case"#":k(e,n);break;case"<":w(t,e,n,p,f);break;case"[":M(t,
e,n,a,f,p);break;default:A(e,n,a,p)}else F(t,e,n,a,f,p)}else ge(t,e),y(t,n,a,p,f)}function k(t,e){t.
children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children),e.dom=t.dom}function w(t,e,n,a,f){
e.children!==n.children?(st(t,e),P(t,n,a,f)):(n.dom=e.dom,n.domSize=e.domSize)}function M(t,e,n,a,f,p){
I(t,e.children,n.children,a,f,p);var T=0,R=n.children;if(n.dom=null,R!=null){for(var x=0;x<R.length;x++){
var z=R[x];z!=null&&z.dom!=null&&(n.dom==null&&(n.dom=z.dom),T+=z.domSize||1)}T!==1&&(n.domSize=T)}}
function A(t,e,n,a){var f=e.dom=t.dom;a=c(e)||a,(t.attrs!=e.attrs||e.attrs!=null&&!kt.get(e.attrs))&&
qr(e,t.attrs,e.attrs,a),Y(e)||I(f,t.children,e.children,n,null,a)}function F(t,e,n,a,f,p){if(n.instance=
Ke.normalize(u.call(n.state.view,n)),n.instance===n)throw Error("A view cannot return the vnode it r\
eceived as argument");Se(n.state,n,a),n.attrs!=null&&Se(n.attrs,n,a),n.instance!=null?(e.instance==null?
y(t,n.instance,a,p,f):S(t,e.instance,n.instance,a,f,p),n.dom=n.instance.dom,n.domSize=n.instance.domSize):
e.instance!=null?(ge(t,e.instance),n.dom=void 0,n.domSize=0):(n.dom=e.dom,n.domSize=e.domSize)}function O(t,e,n){
for(var a=Object.create(null);e<n;e++){var f=t[e];if(f!=null){var p=f.key;p!=null&&(a[p]=e)}}return a}
var C=[];function H(t){for(var e=[0],n=0,a=0,f=0,p=C.length=t.length,f=0;f<p;f++)C[f]=t[f];for(var f=0;f<
p;++f)if(t[f]!==-1){var T=e[e.length-1];if(t[T]<t[f]){C[f]=T,e.push(f);continue}for(n=0,a=e.length-1;n<
a;){var R=(n>>>1)+(a>>>1)+(n&a&1);t[e[R]]<t[f]?n=R+1:a=R}t[f]<t[e[n]]&&(n>0&&(C[f]=e[n-1]),e[n]=f)}for(n=
e.length,a=e[n-1];n-- >0;)e[n]=a,a=C[a];return C.length=0,e}function X(t,e,n){for(;e<t.length;e++)if(t[e]!=
null&&t[e].dom!=null)return t[e].dom;return n}function ue(t,e,n){if(e.dom!=null){var a;if(e.domSize==
null)a=e.dom;else{a=l(t).createDocumentFragment();for(var f of Qe(e))a.appendChild(f)}Q(t,a,n)}}function Q(t,e,n){
n!=null?t.insertBefore(e,n):t.appendChild(e)}function Y(t){if(t.attrs==null||t.attrs.contenteditable==
null&&t.attrs.contentEditable==null)return!1;var e=t.children;if(e!=null&&e.length===1&&e[0].tag==="\
<"){var n=e[0].children;t.dom.innerHTML!==n&&(t.dom.innerHTML=n)}else if(e!=null&&e.length!==0)throw new Error(
"Child node of a contenteditable must be trusted.");return!0}function le(t,e,n,a){for(var f=n;f<a;f++){
var p=e[f];p!=null&&ge(t,p)}}function it(t,e,n,a){var f=e.state,p=u.call(n.onbeforeremove,e);if(p!=null){
var T=s;for(var R of Qe(e))Kr.set(R,T);a.v++,Promise.resolve(p).finally(function(){o(e,f),at(t,e,a)})}}
function at(t,e,n){--n.v===0&&(Me(e),st(t,e))}function ge(t,e){var n={v:1};typeof e.tag!="string"&&typeof e.
state.onbeforeremove=="function"&&it(t,e,e.state,n),e.attrs&&typeof e.attrs.onbeforeremove=="functio\
n"&&it(t,e,e.attrs,n),at(t,e,n)}function st(t,e){if(e.dom!=null)if(e.domSize==null)t.removeChild(e.dom);else
for(var n of Qe(e))t.removeChild(n)}function Me(t){if(typeof t.tag!="string"&&typeof t.state.onremove==
"function"&&u.call(t.state.onremove,t),t.attrs&&typeof t.attrs.onremove=="function"&&u.call(t.attrs.
onremove,t),typeof t.tag!="string")t.instance!=null&&Me(t.instance);else{t.events!=null&&(t.events._=
null);var e=t.children;if(Array.isArray(e))for(var n=0;n<e.length;n++){var a=e[n];a!=null&&Me(a)}}}function xr(t,e,n){
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
t,"selectedIndex",null,e.selectedIndex,void 0)}function qr(t,e,n,a){var f;if(e!=null){e===n&&!kt.has(
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
n.push(u.bind(t.onupdate,e))}function Cr(t,e){do{if(t.attrs!=null&&typeof t.attrs.onbeforeupdate=="f\
unction"){var n=u.call(t.attrs.onbeforeupdate,t,e);if(n!==void 0&&!n)break}if(typeof t.tag!="string"&&
typeof t.state.onbeforeupdate=="function"){var n=u.call(t.state.onbeforeupdate,t,e);if(n!==void 0&&!n)
break}return!1}while(!1);return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,
t.children=e.children,t.text=e.text,!0}var fe;return function(t,e,n){if(!t)throw new TypeError("DOM \
element being rendered to does not exist.");if(fe!=null&&t.contains(fe))throw new TypeError("Node is\
 currently being rendered to and thus is locked.");var a=i,f=fe,p=[],T=g(t),R=t.namespaceURI;fe=t,i=
typeof n=="function"?n:void 0,s={};try{t.vnodes==null&&(t.textContent=""),e=Ke.normalizeChildren(Array.
isArray(e)?e:[e]),I(t,t.vnodes,e,p,null,R==="http://www.w3.org/1999/xhtml"?void 0:R),t.vnodes=e,T!=null&&
g(t)!==T&&typeof T.focus=="function"&&T.focus();for(var x=0;x<p.length;x++)p[x]()}finally{i=a,fe=f}}}});var Ge=L((_n,Nt)=>{"use strict";Nt.exports=zt()(typeof window<"u"?window:null)});var jt=L(($n,Lt)=>{"use strict";var St=G();Lt.exports=function(r,i,s){var l=[],c=!1,o=-1;function u(){
for(o=0;o<l.length;o+=2)try{r(l[o],St(l[o+1]),g)}catch(y){s.error(y)}o=-1}function g(){c||(c=!0,i(function(){
c=!1,u()}))}g.sync=u;function m(y,d){if(d!=null&&d.view==null&&typeof d!="function")throw new TypeError(
"m.mount expects a component, not a vnode.");var E=l.indexOf(y);E>=0&&(l.splice(E,2),E<=o&&(o-=2),r(
y,[])),d!=null&&(l.push(y,d),r(y,St(d),g))}return{mount:m,redraw:g}}});var de=L((Hn,It)=>{"use strict";var Qr=Ge();It.exports=jt()(Qr,typeof requestAnimationFrame<"u"?requestAnimationFrame:
null,typeof console<"u"?console:null)});var Ye=L((Un,vt)=>{"use strict";vt.exports=function(r){if(Object.prototype.toString.call(r)!=="[obje\
ct Object]")return"";var i=[];for(var s in r)l(s,r[s]);return i.join("&");function l(c,o){if(Array.isArray(
o))for(var u=0;u<o.length;u++)l(c+"["+u+"]",o[u]);else if(Object.prototype.toString.call(o)==="[obje\
ct Object]")for(var u in o)l(c+"["+u+"]",o[u]);else i.push(encodeURIComponent(c)+(o!=null&&o!==""?"="+
encodeURIComponent(o):""))}}});var be=L((Vn,Dt)=>{"use strict";var Gr=Ye();Dt.exports=function(r,i){if(/:([^\/\.-]+)(\.{3})?:/.test(
r))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
if(i==null)return r;var s=r.indexOf("?"),l=r.indexOf("#"),c=l<0?r.length:l,o=s<0?c:s,u=r.slice(0,o),
g={};Object.assign(g,i);var m=u.replace(/:([^\/\.-]+)(\.{3})?/g,function(D,N,I){return delete g[N],i[N]==
null?D:I?i[N]:encodeURIComponent(String(i[N]))}),y=m.indexOf("?"),d=m.indexOf("#"),E=d<0?m.length:d,
P=y<0?E:y,h=m.slice(0,P);s>=0&&(h+=r.slice(s,c)),y>=0&&(h+=(s<0?"?":"&")+m.slice(y,E));var q=Gr(g);return q&&
(h+=(s<0&&y<0?"?":"&")+q),l>=0&&(h+=r.slice(l)),d>=0&&(h+=(l<0?"":"&")+m.slice(d)),h}});var $t=L((Wn,_t)=>{"use strict";var Yr=be(),Ft=we();_t.exports=function(r,i){function s(o){return new Promise(
o)}function l(o,u){return new Promise(function(g,m){o=Yr(o,u.params);var y=u.method!=null?u.method.toUpperCase():
"GET",d=u.body,E=(u.serialize==null||u.serialize===JSON.serialize)&&!(d instanceof r.FormData||d instanceof
r.URLSearchParams),P=u.responseType||(typeof u.extract=="function"?"":"json"),h=new r.XMLHttpRequest,
q=!1,D=!1,N=h,I,S=h.abort;h.abort=function(){q=!0,S.call(this)},h.open(y,o,u.async!==!1,typeof u.user==
"string"?u.user:void 0,typeof u.password=="string"?u.password:void 0),E&&d!=null&&!c(u,"content-type")&&
h.setRequestHeader("Content-Type","application/json; charset=utf-8"),typeof u.deserialize!="function"&&
!c(u,"accept")&&h.setRequestHeader("Accept","application/json, text/*"),u.withCredentials&&(h.withCredentials=
u.withCredentials),u.timeout&&(h.timeout=u.timeout),h.responseType=P;for(var k in u.headers)Ft.call(
u.headers,k)&&h.setRequestHeader(k,u.headers[k]);h.onreadystatechange=function(w){if(!q&&w.target.readyState===
4)try{var M=w.target.status>=200&&w.target.status<300||w.target.status===304||/^file:\/\//i.test(o),
A=w.target.response,F;if(P==="json"){if(!w.target.responseType&&typeof u.extract!="function")try{A=JSON.
parse(w.target.responseText)}catch{A=null}}else(!P||P==="text")&&A==null&&(A=w.target.responseText);
if(typeof u.extract=="function"?(A=u.extract(w.target,u),M=!0):typeof u.deserialize=="function"&&(A=
u.deserialize(A)),M){if(typeof u.type=="function")if(Array.isArray(A))for(var O=0;O<A.length;O++)A[O]=
new u.type(A[O]);else A=new u.type(A);g(A)}else{var C=function(){try{F=w.target.responseText}catch{F=
A}var H=new Error(F);H.code=w.target.status,H.response=A,m(H)};h.status===0?setTimeout(function(){D||
C()}):C()}}catch(H){m(H)}},h.ontimeout=function(w){D=!0;var M=new Error("Request timed out");M.code=
w.target.status,m(M)},typeof u.config=="function"&&(h=u.config(h,u,o)||h,h!==N&&(I=h.abort,h.abort=function(){
q=!0,I.call(this)})),d==null?h.send():typeof u.serialize=="function"?h.send(u.serialize(d)):d instanceof
r.FormData||d instanceof r.URLSearchParams?h.send(d):h.send(JSON.stringify(d))})}s.prototype=Promise.
prototype,s.__proto__=Promise;function c(o,u){for(var g in o.headers)if(Ft.call(o.headers,g)&&g.toLowerCase()===
u)return!0;return!1}return{request:function(o,u){typeof o!="string"?(u=o,o=o.url):u==null&&(u={});var g=l(
o,u);if(u.background===!0)return g;var m=0;function y(){--m===0&&typeof i=="function"&&i()}return d(
g);function d(E){var P=E.then;return E.constructor=s,E.then=function(){m++;var h=P.apply(E,arguments);
return h.then(y,function(q){if(y(),m===0)throw q}),d(h)},E}}}}});var Ut=L((Bn,Ht)=>{"use strict";var Xr=de();Ht.exports=$t()(typeof window<"u"?window:null,Xr.redraw)});var Xe=L((Jn,Wt)=>{"use strict";function Vt(r){try{return decodeURIComponent(r)}catch{return r}}Wt.exports=
function(r){if(r===""||r==null)return{};r.charAt(0)==="?"&&(r=r.slice(1));for(var i=r.split("&"),s={},
l={},c=0;c<i.length;c++){var o=i[c].split("="),u=Vt(o[0]),g=o.length===2?Vt(o[1]):"";g==="true"?g=!0:
g==="false"&&(g=!1);var m=u.split(/\]\[?|\[/),y=l;u.indexOf("[")>-1&&m.pop();for(var d=0;d<m.length;d++){
var E=m[d],P=m[d+1],h=P==""||!isNaN(parseInt(P,10));if(E===""){var u=m.slice(0,d).join();s[u]==null&&
(s[u]=Array.isArray(y)?y.length:0),E=s[u]++}else if(E==="__proto__")break;if(d===m.length-1)y[E]=g;else{
var q=Object.getOwnPropertyDescriptor(y,E);q!=null&&(q=q.value),q==null&&(y[E]=q=h?[]:{}),y=q}}}return l}});var xe=L((Kn,Bt)=>{"use strict";var Zr=Xe();Bt.exports=function(r){var i=r.indexOf("?"),s=r.indexOf(
"#"),l=s<0?r.length:s,c=i<0?l:i,o=r.slice(0,c).replace(/\/{2,}/g,"/");return o?o[0]!=="/"&&(o="/"+o):
o="/",{path:o,params:i<0?{}:Zr(r.slice(i+1,l))}}});var Kt=L((Qn,Jt)=>{"use strict";var en=xe();Jt.exports=function(r){var i=en(r),s=Object.keys(i.params),
l=[],c=new RegExp("^"+i.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(o,u,g){
return u==null?"\\"+o:(l.push({k:u,r:g==="..."}),g==="..."?"(.*)":g==="."?"([^/]+)\\.":"([^/]+)"+(g||
""))})+"\\/?$");return function(o){for(var u=0;u<s.length;u++)if(i.params[s[u]]!==o.params[s[u]])return!1;
if(!l.length)return c.test(o.path);var g=c.exec(o.path);if(g==null)return!1;for(var u=0;u<l.length;u++)
o.params[l[u].k]=l[u].r?g[u+1]:decodeURIComponent(g[u+1]);return!0}}});var Ze=L((Gn,Yt)=>{"use strict";var Qt=we(),Gt=new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|on\
update|onbeforeremove|onremove)$");Yt.exports=function(r,i){var s={};if(i!=null)for(var l in r)Qt.call(
r,l)&&!Gt.test(l)&&i.indexOf(l)<0&&(s[l]=r[l]);else for(var l in r)Qt.call(r,l)&&!Gt.test(l)&&(s[l]=
r[l]);return s}});var tr=L((Yn,er)=>{"use strict";var tn=G(),rn=Ve(),Xt=be(),Zt=xe(),nn=Kt(),an=Ze();function sn(r){try{
return decodeURIComponent(r)}catch{return r}}er.exports=function(r,i){var s=r==null?null:typeof r.setImmediate==
"function"?r.setImmediate:r.setTimeout,l=Promise.resolve(),c=!1,o=!1,u=!1,g,m,y,d,E,P,h,q,D={onremove:function(){
o=u=!1,r.removeEventListener("popstate",S,!1)},view:function(){var w=tn(E,P.key,P);return d?d.render(
w):[w]}},N=k.SKIP={};function I(){c=!1;var w=r.location.hash;k.prefix[0]!=="#"&&(w=r.location.search+
w,k.prefix[0]!=="?"&&(w=r.location.pathname+w,w[0]!=="/"&&(w="/"+w)));var M=w.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,
sn).slice(k.prefix.length),A=Zt(M);Object.assign(A.params,r.history.state);function F(C){console.error(
C),k.set(y,null,{replace:!0})}O(0);function O(C){for(;C<m.length;C++)if(m[C].check(A)){var H=m[C].component,
X=m[C].route,ue=H,Q=q=function(Y){if(Q===q){if(Y===N)return O(C+1);E=Y!=null&&(typeof Y.view=="funct\
ion"||typeof Y=="function")?Y:"div",P=A.params,h=M,q=null,d=H.render?H:null,u?i.redraw():(u=!0,i.mount(
g,D))}};H.view||typeof H=="function"?(H={},Q(ue)):H.onmatch?l.then(function(){return H.onmatch(A.params,
M,X)}).then(Q,M===y?null:F):Q();return}if(M===y)throw new Error("Could not resolve default route "+y+
".");k.set(y,null,{replace:!0})}}function S(){c||(c=!0,s(I))}function k(w,M,A){if(!w)throw new TypeError(
"DOM element being rendered to does not exist.");if(m=Object.keys(A).map(function(O){if(O[0]!=="/")throw new SyntaxError(
"Routes must start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(O))throw new SyntaxError("Route par\
ameter names must be separated with either '/', '.', or '-'.");return{route:O,component:A[O],check:nn(
O)}}),y=M,M!=null){var F=Zt(M);if(!m.some(function(O){return O.check(F)}))throw new ReferenceError("\
Default route doesn't match any known routes.")}g=w,r.addEventListener("popstate",S,!1),o=!0,I()}return k.
set=function(w,M,A){if(q!=null&&(A=A||{},A.replace=!0),q=null,w=Xt(w,M),o){S();var F=A?A.state:null,
O=A?A.title:null;A&&A.replace?r.history.replaceState(F,O,k.prefix+w):r.history.pushState(F,O,k.prefix+
w)}else r.location.href=k.prefix+w},k.get=function(){return h},k.prefix="#!",k.Link={view:function(w){
var M=rn(w.attrs.selector||"a",an(w.attrs,["options","params","selector","onclick"]),w.children),A,F,
O;return(M.attrs.disabled=!!M.attrs.disabled)?(M.attrs.href=null,M.attrs["aria-disabled"]="true"):(A=
w.attrs.options,F=w.attrs.onclick,O=Xt(M.attrs.href,w.attrs.params),M.attrs.href=k.prefix+O,M.attrs.
onclick=function(C){var H;typeof F=="function"?H=F.call(C.currentTarget,C):F==null||typeof F!="objec\
t"||typeof F.handleEvent=="function"&&F.handleEvent(C),H!==!1&&!C.defaultPrevented&&(C.button===0||C.
which===0||C.which===1)&&(!C.currentTarget.target||C.currentTarget.target==="_self")&&!C.ctrlKey&&!C.
metaKey&&!C.shiftKey&&!C.altKey&&(C.preventDefault(),C.redraw=!1,k.set(O,null,A))}),M}},k.param=function(w){
return P&&w!=null?P[w]:P},k}});var nr=L((Xn,rr)=>{"use strict";var un=de();rr.exports=tr()(typeof window<"u"?window:null,un)});var re=L((Zn,ar)=>{"use strict";var Ae=Ot(),ln=Ut(),ir=de(),fn=Je(),V=function(){return Ae.apply(this,
arguments)};V.m=Ae;V.trust=Ae.trust;V.fragment=Ae.fragment;V.Fragment="[";V.mount=ir.mount;V.route=nr();
V.render=Ge();V.redraw=ir.redraw;V.request=ln.request;V.parseQueryString=Xe();V.buildQueryString=Ye();
V.parsePathname=xe();V.buildPathname=be();V.vnode=G();V.censor=Ze();V.domFor=fn.domFor;ar.exports=V});var br=oe(re(),1);var b=oe(re(),1);var ne=oe(re(),1);function sr(r,i){return typeof i=="string"?(0,ne.default)(ne.default.route.Link,{href:i},
r):(0,ne.default)("span.link",r)}function Ee(){return{view(r){return(0,ne.default)(".nav",sr("Unknow\
n letters",r.attrs.page!=="pattern"&&"/pattern/-/freq/desc/1"),ne.default.trust(" &nbsp; | &nbsp; "),
sr("Anagrams",r.attrs.page!=="anagram"&&"/anagram/-"))}}}function K(r){return String(r).replace(/\d(?=(\d{3})+\b)/g,"$&,")}var me=oe(re(),1);var ur="./puff-FF7ZATQ6.svg";function ie(r){return[(0,me.default)("img",{src:ur,width:26,height:26,style:{verticalAlign:"text-bot\
tom"}}),me.default.trust(` &nbsp; ${r} \u2026`)]}function qe(r=""){return(0,me.default)(".credits",me.default.
trust(`We use a dictionary of ${K(291206)} names and English words derived from 
    <a href="http://aspell.net/">aspell</a>,
    <a href="http://web.mit.edu/freebsd/head/share/dict/">web2</a>,
    <a href="https://en.wikpedia.org">Wikipedia</a> and
    <a href="https://web.archive.org/web/20230401195411/https://crr.ugent.be/archives/2045">Brysbaer\
t et al</a>.
    Many of these aren't valid in word games.`+r))}var fr=Symbol("Comlink.proxy"),mn=Symbol("Comlink.endpoint"),pn=Symbol("Comlink.releaseProxy"),et=Symbol(
"Comlink.finalizer"),Ce=Symbol("Comlink.thrown"),cr=r=>typeof r=="object"&&r!==null||typeof r=="func\
tion",hn={canHandle:r=>cr(r)&&r[fr],serialize(r){let{port1:i,port2:s}=new MessageChannel;return mr(r,
i),[s,[s]]},deserialize(r){return r.start(),rt(r)}},gn={canHandle:r=>cr(r)&&Ce in r,serialize({value:r}){
let i;return r instanceof Error?i={isError:!0,value:{message:r.message,name:r.name,stack:r.stack}}:i=
{isError:!1,value:r},[i,[]]},deserialize(r){throw r.isError?Object.assign(new Error(r.value.message),
r.value):r.value}},or=new Map([["proxy",hn],["throw",gn]]);function yn(r,i){for(let s of r)if(i===s||
s==="*"||s instanceof RegExp&&s.test(i))return!0;return!1}function mr(r,i=globalThis,s=["*"]){i.addEventListener(
"message",function l(c){if(!c||!c.data)return;if(!yn(s,c.origin)){console.warn(`Invalid origin '${c.
origin}' for comlink proxy`);return}let{id:o,type:u,path:g}=Object.assign({path:[]},c.data),m=(c.data.
argumentList||[]).map(ee),y;try{let d=g.slice(0,-1).reduce((P,h)=>P[h],r),E=g.reduce((P,h)=>P[h],r);
switch(u){case"GET":y=E;break;case"SET":d[g.slice(-1)[0]]=ee(c.data.value),y=!0;break;case"APPLY":y=
E.apply(d,m);break;case"CONSTRUCT":{let P=new E(...m);y=nt(P)}break;case"ENDPOINT":{let{port1:P,port2:h}=new MessageChannel;
mr(r,h),y=An(P,[P])}break;case"RELEASE":y=void 0;break;default:return}}catch(d){y={value:d,[Ce]:0}}Promise.
resolve(y).catch(d=>({value:d,[Ce]:0})).then(d=>{let[E,P]=ke(d);i.postMessage(Object.assign(Object.assign(
{},E),{id:o}),P),u==="RELEASE"&&(i.removeEventListener("message",l),pr(i),et in r&&typeof r[et]=="fu\
nction"&&r[et]())}).catch(d=>{let[E,P]=ke({value:new TypeError("Unserializable return value"),[Ce]:0});
i.postMessage(Object.assign(Object.assign({},E),{id:o}),P)})}),i.start&&i.start()}function wn(r){return r.
constructor.name==="MessagePort"}function pr(r){wn(r)&&r.close()}function rt(r,i){let s=new Map;return r.
addEventListener("message",function(c){let{data:o}=c;if(!o||!o.id)return;let u=s.get(o.id);if(u)try{
u(o)}finally{s.delete(o.id)}}),tt(r,s,[],i)}function Pe(r){if(r)throw new Error("Proxy has been rele\
ased and is not useable")}function hr(r){return ae(r,new Map,{type:"RELEASE"}).then(()=>{pr(r)})}var Oe=new WeakMap,
Te="FinalizationRegistry"in globalThis&&new FinalizationRegistry(r=>{let i=(Oe.get(r)||0)-1;Oe.set(r,
i),i===0&&hr(r)});function dn(r,i){let s=(Oe.get(i)||0)+1;Oe.set(i,s),Te&&Te.register(r,i,r)}function bn(r){
Te&&Te.unregister(r)}function tt(r,i,s=[],l=function(){}){let c=!1,o=new Proxy(l,{get(u,g){if(Pe(c),
g===pn)return()=>{bn(o),hr(r),i.clear(),c=!0};if(g==="then"){if(s.length===0)return{then:()=>o};let m=ae(
r,i,{type:"GET",path:s.map(y=>y.toString())}).then(ee);return m.then.bind(m)}return tt(r,i,[...s,g])},
set(u,g,m){Pe(c);let[y,d]=ke(m);return ae(r,i,{type:"SET",path:[...s,g].map(E=>E.toString()),value:y},
d).then(ee)},apply(u,g,m){Pe(c);let y=s[s.length-1];if(y===mn)return ae(r,i,{type:"ENDPOINT"}).then(
ee);if(y==="bind")return tt(r,i,s.slice(0,-1));let[d,E]=lr(m);return ae(r,i,{type:"APPLY",path:s.map(
P=>P.toString()),argumentList:d},E).then(ee)},construct(u,g){Pe(c);let[m,y]=lr(g);return ae(r,i,{type:"\
CONSTRUCT",path:s.map(d=>d.toString()),argumentList:m},y).then(ee)}});return dn(o,r),o}function xn(r){
return Array.prototype.concat.apply([],r)}function lr(r){let i=r.map(ke);return[i.map(s=>s[0]),xn(i.
map(s=>s[1]))]}var gr=new WeakMap;function An(r,i){return gr.set(r,i),r}function nt(r){return Object.
assign(r,{[fr]:!0})}function ke(r){for(let[i,s]of or)if(s.canHandle(r)){let[l,c]=s.serialize(r);return[{type:"HANDLER",name:i,
value:l},c]}return[{type:"RAW",value:r},gr.get(r)||[]]}function ee(r){switch(r.type){case"HANDLER":return or.
get(r.name).deserialize(r.value);case"RAW":return r.value}}function ae(r,i,s,l){return new Promise(c=>{
let o=En();i.set(o,c),r.start&&r.start(),r.postMessage(Object.assign({id:o},s),l)})}function En(){return new Array(
4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var pe=rt(new Worker(new URL("./combined.worker.js",import.meta.url)));var Pn="-",se=2e3;function wr(){let r="",i,s,l,c,o=!1,u=!1,g=[],m=0;async function y(h){let{pattern:q,
order:D,direction:N,list:I,page:S}=h.attrs;if(q===r&&D===i&&N===s&&I===l&&S===c)return;r=q,i=D,s=N,l=
I,c=S,u=!0,b.default.redraw();let k=(parseInt(S,10)-1)*se,w=await pe.wordsMatchingPattern(q,D,N,k,se,
I==="multi");g=w.results,m=w.count,u=!1,b.default.redraw()}function d(h,q,D,N){return(0,b.default)("\
label",(0,b.default)("input",{type:"radio",name:"order",checked:i===h&&s===q,onchange:()=>b.default.
route.set("/pattern/:pattern/:list/:order/:direction/:page",{...N,order:h,direction:q,page:1})}),D)}
function E(h,q,D){return(0,b.default)("label",(0,b.default)("input",{type:"radio",name:"multi",checked:l===
h,onchange:()=>b.default.route.set("/pattern/:pattern/:list/:order/:direction/:page",{...D,list:h,page:1})}),
q)}function P(h,q,D){return q>1&&(0,b.default)(".pagination",[1,h-1,h,h+1,q].filter(N=>N>=1&&N<=q).filter(
(N,I,S)=>N!==S[I-1]).reduce((N,I,S,k)=>(S>0&&k[S-1]!==I-1&&N.push((0,b.default)("span.ellipsis",b.default.
trust("&hellip;"))),N.push(D(I)),N),[]))}return{oncreate:y,onupdate:y,view(h){let q=h.attrs.pattern===
Pn?"":h.attrs.pattern,D=parseInt(h.attrs.page,10),N=Math.ceil(m/se),I=(D-1)*se,S=Math.min(I+se-1,m),
k=()=>P(D,N,O=>(0,b.default)(b.default.route.Link,{href:"/pattern/:pattern/:list/:order/:direction/:\
page",selector:O===D?"a.current":"a",params:{...h.attrs,page:O}},String(O))),w=(O,C="freq/desc")=>(0,b.default)(
b.default.route.Link,{href:`/pattern/${encodeURIComponent(O)}/single/${C}/1`,selector:"a.example"},O),
M="http://economicspsychologypolicy.blogspot.com/2013/10/lecture-summary-judgement-heuristics.html",
A=b.default.trust(" \u2014&nbsp;"),F=[(0,b.default)("h4","Examples"),(0,b.default)("ul",(0,b.default)(
"li",w("...s.w.r."),", ",w("*tz"),", ",w("*yx")," or ",w("*sh.p*sh.p*")),(0,b.default)("li",w("*a*e*\
i*o*u*","length/asc"),A,"all vowels in order"),(0,b.default)("li",w("r..*")," and ",w("..r*"),A,(0,b.default)(
"a",{href:M,target:"_blank"},"r first vs. r third")),(0,b.default)("li",w("*","length/desc"),A,"long\
est")),(0,b.default)("h4","Advanced examples"),(0,b.default)("ul",(0,b.default)("li",w("~(^|[^c])ei"),
A,"i before e except after c, except \u2026"),(0,b.default)("li",w("~q([^u]|$)"),A,"q, no u"),(0,b.default)(
"li",w("~[aeiou]{4}$"),A,"4 vowels at end"),(0,b.default)("li",w("~(.{4,})\\1"),A,"4+ letters repeat\
ing"),(0,b.default)("li",w("~^(.)(.?)(.?)(.?).?\\4\\3\\2\\1$","length/desc"),A,"palindromes"))];return(0,b.default)(
".page",(0,b.default)(Ee,{page:"pattern"}),(0,b.default)(".pattern",(0,b.default)("h2","Find words w\
ith unknown letters"),o?(0,b.default)(".message",ie("Loading dictionary")):(0,b.default)(".interface",
(0,b.default)(".pattern-entry",(0,b.default)("input.pattern-input",{type:"search",autocorrect:"off",
autocomplete:"off",autocapitalize:"none",spellcheck:!1,size:15,value:q,onchange:O=>{let{value:C}=O.currentTarget;
b.default.route.set("/pattern/:pattern/:list/:order/:direction/1",{...h.attrs,pattern:C})}}),(0,b.default)(
"button","Find"),(0,b.default)(".instructions",(0,b.default)("h4","Wildcards"),(0,b.default)("div",b.default.
trust('Use <span class="letter">.</span> or <span class="letter">?</span> for each unknown letter')),
(0,b.default)("div",b.default.trust('Use <span class="letter">*</span> for any number of unknowns')),
(0,b.default)("div",b.default.trust('<i>Advanced:</i> prefix <span class="letter">~</span> to use a \
<a href="https://cs.lmu.edu/~ray/notes/regex/" target="_blank">regex</a>'))),(0,b.default)(".list",(0,b.default)(
"h4","Search"),(0,b.default)("div",E("single"," Single words",h.attrs),E("multi"," Multiple words",h.
attrs))),(0,b.default)(".order",(0,b.default)("h4","Show first"),(0,b.default)("div",d("freq","desc",
" Common words",h.attrs),d("freq","asc"," Obscure words",h.attrs)),(0,b.default)("div",d("length","a\
sc"," Short words",h.attrs),d("length","desc"," Long words",h.attrs)),(0,b.default)("div",d("a-z","a\
sc"," A \u2013\xA0Z",h.attrs),d("a-z","desc"," Z \u2013\xA0A",h.attrs))),(0,b.default)(".message",q?
u?ie("Searching"):m<0?g[0]:m>0?`${K(m)} words found`+(m>se?` (showing ${K(I)} \u2013 ${K(S)})`:""):"\
No matching words found":"Please enter a search pattern above"),!q&&F,m>0&&u===!1&&[k(),(0,b.default)(
".matches",g.map(O=>(0,b.default)("a.match",{href:`https://www.google.com/search?q="${O}"+definition`,
target:"_blank"},O))),k()]),qe(` For multiple words, we use ${K(330226)} entries from <a href="https\
://en.wiktionary.org/">Wiktionary</a>.`))))}}}var v=oe(re(),1);var Cn="-",he=1e4,On=876543;function Tn(r,i=10){let s=[];for(let l=0;l<=i;l++)s.push([]);for(let l of r){
let[{length:c}]=l;s[c>i?i:c].push(l)}return s}function dr(r){let i=!0,s=0,l=!1,c={evaluated:0,working:!1,
anagrams:[]};function o(){c.working=!0;let u=document.querySelector("#anag-input").value;pe.find(u,he,
On,nt(async g=>{let m=c;return c=g,v.default.redraw(),!m.working}))}return{view(u){let g=u.attrs.letters===
Cn?"":u.attrs.letters;return(0,v.default)(".page",(0,v.default)(Ee,{page:"anagram"}),(0,v.default)("\
.pattern",(0,v.default)("h2","Find anagrams"),i?(0,v.default)(".message",ie("Loading dictionary")):(0,v.default)(
".interface",(0,v.default)(".pattern-entry",(0,v.default)("input#anag-input",{type:"search",autocorrect:"\
off",autocomplete:"off",autocapitalize:"none",spellcheck:!1,size:15,value:g,disabled:c.working,onchange(m){
let{value:y}=m.currentTarget;v.default.route.set("/anagram/:letters",{...u.attrs,letters:y===""?"-":
y})},onkeyup(m){m.key==="Enter"&&(c.working?c.working=!1:o()),m.redraw=!1}}),c.working?[(0,v.default)(
"button",{onclick(){c.working=!1}},"Stop"),(0,v.default)(".progress",ie(`${K(c.evaluated)} evaluated`+
(c.evaluated>he?`, ${K(he)} kept`:"")))]:[(0,v.default)("button",{onclick:o},"Find"),c.evaluated!==0&&
(0,v.default)(".progress",`${K(c.evaluated)} found`+(c.evaluated>he?`, ${K(he)} kept`:""))]),(0,v.default)(
"#grouping",(0,v.default)("label",(0,v.default)("input[type=checkbox]",{checked:l,onchange(m){l=m.currentTarget.
checked}})," Group by word count")),(0,v.default)(".matches",l?Tn(c.anagrams).map((m,y)=>m.length>0&&
[(0,v.default)("h3",`${y} words`),m.map(d=>(0,v.default)("span.match",d[0].join(" ")))]):c.anagrams.
map(m=>(0,v.default)("span.match",m[0].join(" "))))),qe(" Anagrams are retained and ranked by prefer\
ring those where the least common word is more common, those with fewer words, and (only very slight\
ly) those where the mean word is more common.")))},async oninit(){s=await pe.getWordsCount(),i=!1,v.default.
redraw()},onremove(){c.working=!1}}}br.default.route(document.getElementById("main"),"/pattern/-/single/freq/desc/1",{"/pattern/:pattern\
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
