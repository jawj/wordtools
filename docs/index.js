var Mr=Object.create;var pt=Object.defineProperty;var Rr=Object.getOwnPropertyDescriptor;var Nr=Object.getOwnPropertyNames;var Sr=Object.getPrototypeOf,Lr=Object.prototype.hasOwnProperty;var j=(r,i)=>()=>(i||r((i={exports:{}}).exports,i),i.exports);var kr=(r,i,s,f)=>{if(i&&typeof i=="object"||typeof i=="function")for(let c of Nr(i))!Lr.call(r,c)&&
c!==s&&pt(r,c,{get:()=>i[c],enumerable:!(f=Rr(i,c))||f.enumerable});return r};var oe=(r,i,s)=>(s=r!=null?Mr(Sr(r)):{},kr(i||!r||!r.__esModule?pt(s,"default",{value:r,enumerable:!0}):
s,r));var G=j((Mn,ht)=>{"use strict";function Z(r,i,s,f,c,o){return{tag:r,key:i,attrs:s,children:f,text:c,
dom:o,is:void 0,domSize:void 0,state:void 0,events:void 0,instance:void 0}}Z.normalize=function(r){return Array.
isArray(r)?Z("[",void 0,void 0,Z.normalizeChildren(r),void 0,void 0):r==null||typeof r=="boolean"?null:
typeof r=="object"?r:Z("#",void 0,void 0,String(r),void 0,void 0)};Z.normalizeChildren=function(r){for(var i=new Array(
r.length),s=0,f=0;f<r.length;f++)i[f]=Z.normalize(r[f]),i[f]!==null&&i[f].key!=null&&s++;if(s!==0&&s!==
r.length)throw new TypeError(i.includes(null)?"In fragments, vnodes must either all have keys or non\
e have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...})\
, instead of a hole.":"In fragments, vnodes must either all have keys or none have keys.");return i};
ht.exports=Z});var De=j((Rn,gt)=>{"use strict";var jr=G();gt.exports=function(r,i){return r==null||typeof r=="objec\
t"&&r.tag==null&&!Array.isArray(r)?i.length===1&&Array.isArray(i[0])&&(i=i[0]):(i=i.length===0&&Array.
isArray(r)?r:[r,...i],r=void 0),jr("",r&&r.key,r,i)}});var ye=j((Nn,yt)=>{"use strict";yt.exports={}.hasOwnProperty});var He=j((Sn,wt)=>{"use strict";wt.exports={}});var Ue=j((Ln,dt)=>{"use strict";var Ir=He();dt.exports=new Map([[Ir,!0]])});var We=j((kn,xt)=>{"use strict";var $r=G(),_r=De(),Fe=ye(),bt=He(),Dr=Ue(),Hr=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
At=Object.create(null);function Ur(r){for(var i in r)if(Fe.call(r,i))return!1;return!0}function Fr(r){
return r==="value"||r==="checked"||r==="selectedIndex"||r==="selected"}function Wr(r){for(var i,s="d\
iv",f=[],c={},o=!0;i=Hr.exec(r);){var u=i[1],h=i[2];if(u===""&&h!=="")s=h;else if(u==="#")c.id=h;else if(u===
".")f.push(h);else if(i[3][0]==="["){var m=i[6];m&&(m=m.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),
i[4]==="class"?f.push(m):(c[i[4]]=m===""?m:m||!0,Fr(i[4])&&(o=!1))}}return f.length>0&&(c.className=
f.join(" ")),Ur(c)?c=bt:Dr.set(c,o),At[r]={tag:s,attrs:c,is:c.is}}function Vr(r,i){i.tag=r.tag;var s=i.
attrs;if(s==null)return i.attrs=r.attrs,i.is=r.is,i;if(Fe.call(s,"class")&&(s.class!=null&&(s.className=
s.class),s.class=null),r.attrs!==bt){var f=s.className;s=Object.assign({},r.attrs,s),r.attrs.className!=
null&&(s.className=f!=null?String(r.attrs.className)+" "+String(f):r.attrs.className)}return r.tag===
"input"&&Fe.call(s,"type")&&(s=Object.assign({type:s.type},s)),i.is=s.is,i.attrs=s,i}function vr(r,i,...s){
if(r==null||typeof r!="string"&&typeof r!="function"&&typeof r.view!="function")throw Error("The sel\
ector must be either a string or a component.");var f=_r(i,s);return typeof r=="string"&&(f.children=
$r.normalizeChildren(f.children),r!=="[")?Vr(At[r]||Wr(r),f):(f.attrs==null&&(f.attrs={}),f.tag=r,f)}
xt.exports=vr});var qt=j((jn,Et)=>{"use strict";var Br=G();Et.exports=function(r){return r==null&&(r=""),Br("<",void 0,
void 0,r,void 0,void 0)}});var Ot=j((In,Pt)=>{"use strict";var Kr=G(),Jr=De();Pt.exports=function(r,...i){var s=Jr(r,i);return s.
attrs==null&&(s.attrs={}),s.tag="[",s.children=Kr.normalizeChildren(s.children),s}});var Ct=j(($n,Tt)=>{"use strict";var Ve=We();Ve.trust=qt();Ve.fragment=Ot();Tt.exports=Ve});var ve=j((_n,zt)=>{"use strict";zt.exports=new WeakMap});var Be=j((Dn,Rt)=>{"use strict";var Mt=ve();function*Qr(r){var i=r.dom,s=r.domSize,f=Mt.get(i);if(i!=
null)do{var c=i.nextSibling;Mt.get(i)===f&&(yield i,s--),i=c}while(s)}Rt.exports=Qr});var Lt=j((Hn,St)=>{"use strict";var Ke=G(),Gr=ve(),Je=Be(),Nt=Ue();St.exports=function(){var r={svg:"\
http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},i,s;function f(t){return t.ownerDocument}
function c(t){return t.attrs&&t.attrs.xmlns||r[t.tag]}function o(t,e){if(t.state!==e)throw new Error(
"'vnode.state' must not be modified.")}function u(t){var e=t.state;try{return this.apply(e,arguments)}finally{
o(t,e)}}function h(t){try{return f(t).activeElement}catch{return null}}function m(t,e,n,a,l,p,N){for(var S=n;S<
a;S++){var b=e[S];b!=null&&g(t,b,l,N,p)}}function g(t,e,n,a,l){var p=e.tag;if(typeof p=="string")switch(e.
state={},e.attrs!=null&&Ne(e.attrs,e,n),p){case"#":w(t,e,l);break;case"<":T(t,e,a,l);break;case"[":d(
t,e,n,a,l);break;default:E(t,e,n,a,l)}else $(t,e,n,a,l)}function w(t,e,n){e.dom=f(t).createTextNode(
e.children),J(t,e.dom,n)}var A={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",
th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function T(t,e,n,a){var l=e.children.match(/^\s*?<(\w+)/im)||
[],p=f(t).createElement(A[l[1]]||"div");n==="http://www.w3.org/2000/svg"?(p.innerHTML='<svg xmlns="h\
ttp://www.w3.org/2000/svg">'+e.children+"</svg>",p=p.firstChild):p.innerHTML=e.children,e.dom=p.firstChild,
e.domSize=p.childNodes.length;for(var N=f(t).createDocumentFragment(),S;S=p.firstChild;)N.appendChild(
S);J(t,N,a)}function d(t,e,n,a,l){var p=f(t).createDocumentFragment();if(e.children!=null){var N=e.children;
m(p,N,0,N.length,n,null,a)}e.dom=p.firstChild,e.domSize=p.childNodes.length,J(t,p,l)}function E(t,e,n,a,l){
var p=e.tag,N=e.attrs,S=e.is;a=c(e)||a;var b=a?S?f(t).createElementNS(a,p,{is:S}):f(t).createElementNS(
a,p):S?f(t).createElement(p,{is:S}):f(t).createElement(p);if(e.dom=b,N!=null&&Er(e,N,a),J(t,b,l),!it(
e)&&e.children!=null){var k=e.children;m(b,k,0,k.length,n,null,a),e.tag==="select"&&N!=null&&Pr(e,N)}}
function I(t,e){var n;if(typeof t.tag.view=="function"){if(t.state=Object.create(t.tag),n=t.state.view,
n.$$reentrantLock$$!=null)return;n.$$reentrantLock$$=!0}else{if(t.state=void 0,n=t.tag,n.$$reentrantLock$$!=
null)return;n.$$reentrantLock$$=!0,t.state=t.tag.prototype!=null&&typeof t.tag.prototype.view=="func\
tion"?new t.tag(t):t.tag(t)}if(Ne(t.state,t,e),t.attrs!=null&&Ne(t.attrs,t,e),t.instance=Ke.normalize(
u.call(t.state.view,t)),t.instance===t)throw Error("A view cannot return the vnode it received as ar\
gument");n.$$reentrantLock$$=null}function $(t,e,n,a,l){I(e,n),e.instance!=null?(g(t,e.instance,n,a,
l),e.dom=e.instance.dom,e.domSize=e.instance.domSize):e.domSize=0}function L(t,e,n,a,l,p){if(!(e===n||
e==null&&n==null))if(e==null||e.length===0)m(t,n,0,n.length,a,l,p);else if(n==null||n.length===0)fe(
t,e,0,e.length);else{var N=e[0]!=null&&e[0].key!=null,S=n[0]!=null&&n[0].key!=null,b=0,k=0;if(!N)for(;k<
e.length&&e[k]==null;)k++;if(!S)for(;b<n.length&&n[b]==null;)b++;if(N!==S)fe(t,e,k,e.length),m(t,n,b,
n.length,a,l,p);else if(S){for(var v=e.length-1,F=n.length-1,ge,B,U,V,_,ke;v>=k&&F>=b&&(V=e[v],_=n[F],
V.key===_.key);)V!==_&&O(t,V,_,a,l,p),_.dom!=null&&(l=_.dom),v--,F--;for(;v>=k&&F>=b&&(B=e[k],U=n[b],
B.key===U.key);)k++,b++,B!==U&&O(t,B,U,a,X(e,k,l),p);for(;v>=k&&F>=b&&!(b===F||B.key!==_.key||V.key!==
U.key);)ke=X(e,k,l),Y(t,V,ke),V!==U&&O(t,V,U,a,ke,p),++b<=--F&&Y(t,B,l),B!==_&&O(t,B,_,a,l,p),_.dom!=
null&&(l=_.dom),k++,v--,V=e[v],_=n[F],B=e[k],U=n[b];for(;v>=k&&F>=b&&V.key===_.key;)V!==_&&O(t,V,_,a,
l,p),_.dom!=null&&(l=_.dom),v--,F--,V=e[v],_=n[F];if(b>F)fe(t,e,k,v+1);else if(k>v)m(t,n,b,F+1,a,l,p);else{
var zr=l,mt=F-b+1,ce=new Array(mt),je=0,H=0,Ie=2147483647,$e=0,ge,_e;for(H=0;H<mt;H++)ce[H]=-1;for(H=
F;H>=b;H--){ge==null&&(ge=z(e,k,v+1)),_=n[H];var te=ge[_.key];te!=null&&(Ie=te<Ie?te:-1,ce[H-b]=te,V=
e[te],e[te]=null,V!==_&&O(t,V,_,a,l,p),_.dom!=null&&(l=_.dom),$e++)}if(l=zr,$e!==v-k+1&&fe(t,e,k,v+1),
$e===0)m(t,n,b,F+1,a,l,p);else if(Ie===-1)for(_e=K(ce),je=_e.length-1,H=F;H>=b;H--)U=n[H],ce[H-b]===
-1?g(t,U,a,p,l):_e[je]===H-b?je--:Y(t,U,l),U.dom!=null&&(l=n[H].dom);else for(H=F;H>=b;H--)U=n[H],ce[H-
b]===-1&&g(t,U,a,p,l),U.dom!=null&&(l=n[H].dom)}}else{var Le=e.length<n.length?e.length:n.length;for(b=
b<k?b:k;b<Le;b++)B=e[b],U=n[b],!(B===U||B==null&&U==null)&&(B==null?g(t,U,a,p,X(e,b+1,l)):U==null?he(
t,B):O(t,B,U,a,X(e,b+1,l),p));e.length>Le&&fe(t,e,b,e.length),n.length>Le&&m(t,n,b,n.length,a,l,p)}}}
function O(t,e,n,a,l,p){var N=e.tag,S=n.tag;if(N===S&&e.is===n.is){if(n.state=e.state,n.events=e.events,
Cr(n,e))return;if(typeof N=="string")switch(n.attrs!=null&&Se(n.attrs,n,a),N){case"#":x(e,n);break;case"\
<":P(t,e,n,p,l);break;case"[":q(t,e,n,a,l,p);break;default:C(e,n,a,p)}else R(t,e,n,a,l,p)}else he(t,
e),g(t,n,a,p,l)}function x(t,e){t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children),
e.dom=t.dom}function P(t,e,n,a,l){e.children!==n.children?(ut(t,e),T(t,n,a,l)):(n.dom=e.dom,n.domSize=
e.domSize)}function q(t,e,n,a,l,p){L(t,e.children,n.children,a,l,p);var N=0,S=n.children;if(n.dom=null,
S!=null)for(var b=0;b<S.length;b++){var k=S[b];k!=null&&k.dom!=null&&(n.dom==null&&(n.dom=k.dom),N+=
k.domSize||1)}n.domSize=N}function C(t,e,n,a){var l=e.dom=t.dom;a=c(e)||a,(t.attrs!=e.attrs||e.attrs!=
null&&!Nt.get(e.attrs))&&Or(e,t.attrs,e.attrs,a),it(e)||L(l,t.children,e.children,n,null,a)}function R(t,e,n,a,l,p){
if(n.instance=Ke.normalize(u.call(n.state.view,n)),n.instance===n)throw Error("A view cannot return \
the vnode it received as argument");Se(n.state,n,a),n.attrs!=null&&Se(n.attrs,n,a),n.instance!=null?
(e.instance==null?g(t,n.instance,a,p,l):O(t,e.instance,n.instance,a,l,p),n.dom=n.instance.dom,n.domSize=
n.instance.domSize):(e.instance!=null&&he(t,e.instance),n.domSize=0)}function z(t,e,n){for(var a=Object.
create(null);e<n;e++){var l=t[e];if(l!=null){var p=l.key;p!=null&&(a[p]=e)}}return a}var M=[];function K(t){
for(var e=[0],n=0,a=0,l=0,p=M.length=t.length,l=0;l<p;l++)M[l]=t[l];for(var l=0;l<p;++l)if(t[l]!==-1){
var N=e[e.length-1];if(t[N]<t[l]){M[l]=N,e.push(l);continue}for(n=0,a=e.length-1;n<a;){var S=(n>>>1)+
(a>>>1)+(n&a&1);t[e[S]]<t[l]?n=S+1:a=S}t[l]<t[e[n]]&&(n>0&&(M[l]=e[n-1]),e[n]=l)}for(n=e.length,a=e[n-
1];n-- >0;)e[n]=a,a=M[a];return M.length=0,e}function X(t,e,n){for(;e<t.length;e++)if(t[e]!=null&&t[e].
dom!=null)return t[e].dom;return n}function Y(t,e,n){if(e.dom!=null){var a;if(e.domSize==null||e.domSize===
1)a=e.dom;else{a=f(t).createDocumentFragment();for(var l of Je(e))a.appendChild(l)}J(t,a,n)}}function J(t,e,n){
n!=null?t.insertBefore(e,n):t.appendChild(e)}function it(t){if(t.attrs==null||t.attrs.contenteditable==
null&&t.attrs.contentEditable==null)return!1;var e=t.children;if(e!=null&&e.length===1&&e[0].tag==="\
<"){var n=e[0].children;t.dom.innerHTML!==n&&(t.dom.innerHTML=n)}else if(e!=null&&e.length!==0)throw new Error(
"Child node of a contenteditable must be trusted.");return!0}function fe(t,e,n,a){for(var l=n;l<a;l++){
var p=e[l];p!=null&&he(t,p)}}function at(t,e,n,a){var l=e.state,p=u.call(n.onbeforeremove,e);if(p!=null){
var N=s;for(var S of Je(e))Gr.set(S,N);a.v++,Promise.resolve(p).finally(function(){o(e,l),st(t,e,a)})}}
function st(t,e,n){--n.v===0&&(ze(e),ut(t,e))}function he(t,e){var n={v:1};typeof e.tag!="string"&&typeof e.
state.onbeforeremove=="function"&&at(t,e,e.state,n),e.attrs&&typeof e.attrs.onbeforeremove=="functio\
n"&&at(t,e,e.attrs,n),st(t,e,n)}function ut(t,e){if(e.dom!=null)if(e.domSize==null||e.domSize===1)t.
removeChild(e.dom);else for(var n of Je(e))t.removeChild(n)}function ze(t){if(typeof t.tag!="string"&&
typeof t.state.onremove=="function"&&u.call(t.state.onremove,t),t.attrs&&typeof t.attrs.onremove=="f\
unction"&&u.call(t.attrs.onremove,t),typeof t.tag!="string")t.instance!=null&&ze(t.instance);else{t.
events!=null&&(t.events._=null);var e=t.children;if(Array.isArray(e))for(var n=0;n<e.length;n++){var a=e[n];
a!=null&&ze(a)}}}function Er(t,e,n){for(var a in e)Me(t,a,null,e[a],n)}function Me(t,e,n,a,l){if(!(e===
"key"||a==null||ft(e)||n===a&&!Tr(t,e)&&typeof a!="object")){if(e[0]==="o"&&e[1]==="n")return ot(t,e,
a);if(e.slice(0,6)==="xlink:")t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),a);else if(e===
"style")ct(t.dom,n,a);else if(lt(t,e,l)){if(e==="value"){if((t.tag==="input"||t.tag==="textarea")&&t.
dom.value===""+a||t.tag==="select"&&n!==null&&t.dom.value===""+a||t.tag==="option"&&n!==null&&t.dom.
value===""+a)return;if(t.tag==="input"&&t.attrs.type==="file"&&""+a!=""){console.error("`value` is r\
ead-only on file inputs!");return}}t.tag==="input"&&e==="type"?t.dom.setAttribute(e,a):t.dom[e]=a}else
typeof a=="boolean"?a?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute(e==="clas\
sName"?"class":e,a)}}function qr(t,e,n,a){if(!(e==="key"||n==null||ft(e)))if(e[0]==="o"&&e[1]==="n")
ot(t,e,void 0);else if(e==="style")ct(t.dom,n,null);else if(lt(t,e,a)&&e!=="className"&&e!=="title"&&
!(e==="value"&&(t.tag==="option"||t.tag==="select"&&t.dom.selectedIndex===-1&&t.dom===h(t.dom)))&&!(t.
tag==="input"&&e==="type"))t.dom[e]=null;else{var l=e.indexOf(":");l!==-1&&(e=e.slice(l+1)),n!==!1&&
t.dom.removeAttribute(e==="className"?"class":e)}}function Pr(t,e){if("value"in e)if(e.value===null)
t.dom.selectedIndex!==-1&&(t.dom.value=null);else{var n=""+e.value;(t.dom.value!==n||t.dom.selectedIndex===
-1)&&(t.dom.value=n)}"selectedIndex"in e&&Me(t,"selectedIndex",null,e.selectedIndex,void 0)}function Or(t,e,n,a){
var l;if(e!=null){e===n&&!Nt.has(n)&&console.warn("Don't reuse attrs object, use new object for ever\
y redraw, this will throw in next major");for(var p in e)(l=e[p])!=null&&(n==null||n[p]==null)&&qr(t,
p,l,a)}if(n!=null)for(var p in n)Me(t,p,e&&e[p],n[p],a)}function Tr(t,e){return e==="value"||e==="ch\
ecked"||e==="selectedIndex"||e==="selected"&&(t.dom===h(t.dom)||t.tag==="option"&&t.dom.parentNode===
h(t.dom))}function ft(t){return t==="oninit"||t==="oncreate"||t==="onupdate"||t==="onremove"||t==="o\
nbeforeremove"||t==="onbeforeupdate"}function lt(t,e,n){return n===void 0&&(t.tag.indexOf("-")>-1||t.
is||e!=="href"&&e!=="list"&&e!=="form"&&e!=="width"&&e!=="height")&&e in t.dom}function ct(t,e,n){if(e!==
n)if(n==null)t.style="";else if(typeof n!="object")t.style=n;else if(e==null||typeof e!="object"){t.
style="";for(var a in n){var l=n[a];l!=null&&(a.includes("-")?t.style.setProperty(a,String(l)):t.style[a]=
String(l))}}else{for(var a in e)e[a]!=null&&n[a]==null&&(a.includes("-")?t.style.removeProperty(a):t.
style[a]="");for(var a in n){var l=n[a];l!=null&&(l=String(l))!==String(e[a])&&(a.includes("-")?t.style.
setProperty(a,l):t.style[a]=l)}}}function Re(){this._=i}Re.prototype=Object.create(null),Re.prototype.
handleEvent=function(t){var e=this["on"+t.type],n;typeof e=="function"?n=e.call(t.currentTarget,t):typeof e.
handleEvent=="function"&&e.handleEvent(t);var a=this;a._!=null&&(t.redraw!==!1&&(0,a._)(),n!=null&&typeof n.
then=="function"&&Promise.resolve(n).then(function(){a._!=null&&t.redraw!==!1&&(0,a._)()})),n===!1&&
(t.preventDefault(),t.stopPropagation())};function ot(t,e,n){if(t.events!=null){if(t.events._=i,t.events[e]===
n)return;n!=null&&(typeof n=="function"||typeof n=="object")?(t.events[e]==null&&t.dom.addEventListener(
e.slice(2),t.events,!1),t.events[e]=n):(t.events[e]!=null&&t.dom.removeEventListener(e.slice(2),t.events,
!1),t.events[e]=void 0)}else n!=null&&(typeof n=="function"||typeof n=="object")&&(t.events=new Re,t.
dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=n)}function Ne(t,e,n){typeof t.oninit=="fun\
ction"&&u.call(t.oninit,e),typeof t.oncreate=="function"&&n.push(u.bind(t.oncreate,e))}function Se(t,e,n){
typeof t.onupdate=="function"&&n.push(u.bind(t.onupdate,e))}function Cr(t,e){do{if(t.attrs!=null&&typeof t.
attrs.onbeforeupdate=="function"){var n=u.call(t.attrs.onbeforeupdate,t,e);if(n!==void 0&&!n)break}if(typeof t.
tag!="string"&&typeof t.state.onbeforeupdate=="function"){var n=u.call(t.state.onbeforeupdate,t,e);if(n!==
void 0&&!n)break}return!1}while(!1);return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=
e.attrs,t.children=e.children,t.text=e.text,!0}var le;return function(t,e,n){if(!t)throw new TypeError(
"DOM element being rendered to does not exist.");if(le!=null&&t.contains(le))throw new TypeError("No\
de is currently being rendered to and thus is locked.");var a=i,l=le,p=[],N=h(t),S=t.namespaceURI;le=
t,i=typeof n=="function"?n:void 0,s={};try{t.vnodes==null&&(t.textContent=""),e=Ke.normalizeChildren(
Array.isArray(e)?e:[e]),L(t,t.vnodes,e,p,null,S==="http://www.w3.org/1999/xhtml"?void 0:S),t.vnodes=
e,N!=null&&h(t)!==N&&typeof N.focus=="function"&&N.focus();for(var b=0;b<p.length;b++)p[b]()}finally{
i=a,le=l}}}});var Qe=j((Un,kt)=>{"use strict";kt.exports=Lt()()});var $t=j((Fn,It)=>{"use strict";var jt=G();It.exports=function(r,i,s){var f=[],c=!1,o=-1;function u(){
for(o=0;o<f.length;o+=2)try{r(f[o],jt(f[o+1]),h)}catch(g){s.error(g)}o=-1}function h(){c||(c=!0,i(function(){
c=!1,u()}))}h.sync=u;function m(g,w){if(w!=null&&w.view==null&&typeof w!="function")throw new TypeError(
"m.mount expects a component, not a vnode.");var A=f.indexOf(g);A>=0&&(f.splice(A,2),A<=o&&(o-=2),r(
g,[])),w!=null&&(f.push(g,w),r(g,jt(w),h))}return{mount:m,redraw:h}}});var we=j((Wn,_t)=>{"use strict";var Yr=Qe();_t.exports=$t()(Yr,typeof requestAnimationFrame<"u"?requestAnimationFrame:
null,typeof console<"u"?console:null)});var Ge=j((Vn,Dt)=>{"use strict";Dt.exports=function(r){if(Object.prototype.toString.call(r)!=="[obje\
ct Object]")return"";var i=[];for(var s in r)f(s,r[s]);return i.join("&");function f(c,o){if(Array.isArray(
o))for(var u=0;u<o.length;u++)f(c+"["+u+"]",o[u]);else if(Object.prototype.toString.call(o)==="[obje\
ct Object]")for(var u in o)f(c+"["+u+"]",o[u]);else i.push(encodeURIComponent(c)+(o!=null&&o!==""?"="+
encodeURIComponent(o):""))}}});var de=j((vn,Ht)=>{"use strict";var Xr=Ge();Ht.exports=function(r,i){if(/:([^\/\.-]+)(\.{3})?:/.test(
r))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
if(i==null)return r;var s=r.indexOf("?"),f=r.indexOf("#"),c=f<0?r.length:f,o=s<0?c:s,u=r.slice(0,o),
h={};Object.assign(h,i);var m=u.replace(/:([^\/\.-]+)(\.{3})?/g,function(I,$,L){return delete h[$],i[$]==
null?I:L?i[$]:encodeURIComponent(String(i[$]))}),g=m.indexOf("?"),w=m.indexOf("#"),A=w<0?m.length:w,
T=g<0?A:g,d=m.slice(0,T);s>=0&&(d+=r.slice(s,c)),g>=0&&(d+=(s<0?"?":"&")+m.slice(g,A));var E=Xr(h);return E&&
(d+=(s<0&&g<0?"?":"&")+E),f>=0&&(d+=r.slice(f)),w>=0&&(d+=(f<0?"":"&")+m.slice(w)),d}});var Wt=j((Bn,Ft)=>{"use strict";var Zr=de(),Ut=ye();Ft.exports=function(r,i){function s(o){return new Promise(
o)}function f(o,u){return new Promise(function(h,m){o=Zr(o,u.params);var g=u.method!=null?u.method.toUpperCase():
"GET",w=u.body,A=(u.serialize==null||u.serialize===JSON.serialize)&&!(w instanceof r.FormData||w instanceof
r.URLSearchParams),T=u.responseType||(typeof u.extract=="function"?"":"json"),d=new r.XMLHttpRequest,
E=!1,I=!1,$=d,L,O=d.abort;d.abort=function(){E=!0,O.call(this)},d.open(g,o,u.async!==!1,typeof u.user==
"string"?u.user:void 0,typeof u.password=="string"?u.password:void 0),A&&w!=null&&!c(u,"content-type")&&
d.setRequestHeader("Content-Type","application/json; charset=utf-8"),typeof u.deserialize!="function"&&
!c(u,"accept")&&d.setRequestHeader("Accept","application/json, text/*"),u.withCredentials&&(d.withCredentials=
u.withCredentials),u.timeout&&(d.timeout=u.timeout),d.responseType=T;for(var x in u.headers)Ut.call(
u.headers,x)&&d.setRequestHeader(x,u.headers[x]);d.onreadystatechange=function(P){if(!E&&P.target.readyState===
4)try{var q=P.target.status>=200&&P.target.status<300||P.target.status===304||/^file:\/\//i.test(o),
C=P.target.response,R;if(T==="json"){if(!P.target.responseType&&typeof u.extract!="function")try{C=JSON.
parse(P.target.responseText)}catch{C=null}}else(!T||T==="text")&&C==null&&(C=P.target.responseText);
if(typeof u.extract=="function"?(C=u.extract(P.target,u),q=!0):typeof u.deserialize=="function"&&(C=
u.deserialize(C)),q){if(typeof u.type=="function")if(Array.isArray(C))for(var z=0;z<C.length;z++)C[z]=
new u.type(C[z]);else C=new u.type(C);h(C)}else{var M=function(){try{R=P.target.responseText}catch{R=
C}var K=new Error(R);K.code=P.target.status,K.response=C,m(K)};d.status===0?setTimeout(function(){I||
M()}):M()}}catch(K){m(K)}},d.ontimeout=function(P){I=!0;var q=new Error("Request timed out");q.code=
P.target.status,m(q)},typeof u.config=="function"&&(d=u.config(d,u,o)||d,d!==$&&(L=d.abort,d.abort=function(){
E=!0,L.call(this)})),w==null?d.send():typeof u.serialize=="function"?d.send(u.serialize(w)):w instanceof
r.FormData||w instanceof r.URLSearchParams?d.send(w):d.send(JSON.stringify(w))})}s.prototype=Promise.
prototype,s.__proto__=Promise;function c(o,u){for(var h in o.headers)if(Ut.call(o.headers,h)&&h.toLowerCase()===
u)return!0;return!1}return{request:function(o,u){typeof o!="string"?(u=o,o=o.url):u==null&&(u={});var h=f(
o,u);if(u.background===!0)return h;var m=0;function g(){--m===0&&typeof i=="function"&&i()}return w(
h);function w(A){var T=A.then;return A.constructor=s,A.then=function(){m++;var d=T.apply(A,arguments);
return d.then(g,function(E){if(g(),m===0)throw E}),w(d)},A}}}}});var vt=j((Kn,Vt)=>{"use strict";var en=we();Vt.exports=Wt()(typeof window<"u"?window:null,en.redraw)});var Ye=j((Jn,Bt)=>{"use strict";var tn=/%(?:[0-7]|(?!c[01]|e0%[89]|ed%[ab]|f0%8|f4%[9ab])(?:c|d|(?:e|f[0-4]%[89ab])[\da-f]%[89ab])[\da-f]%[89ab])[\da-f]/gi;
Bt.exports=function(r){return String(r).replace(tn,decodeURIComponent)}});var Xe=j((Qn,Jt)=>{"use strict";var Kt=Ye();Jt.exports=function(r){if(r===""||r==null)return{};r.charAt(
0)==="?"&&(r=r.slice(1));for(var i=r.split("&"),s={},f={},c=0;c<i.length;c++){var o=i[c].split("="),
u=Kt(o[0]),h=o.length===2?Kt(o[1]):"";h==="true"?h=!0:h==="false"&&(h=!1);var m=u.split(/\]\[?|\[/),
g=f;u.indexOf("[")>-1&&m.pop();for(var w=0;w<m.length;w++){var A=m[w],T=m[w+1],d=T==""||!isNaN(parseInt(
T,10));if(A===""){var u=m.slice(0,w).join();s[u]==null&&(s[u]=Array.isArray(g)?g.length:0),A=s[u]++}else if(A===
"__proto__")break;if(w===m.length-1)g[A]=h;else{var E=Object.getOwnPropertyDescriptor(g,A);E!=null&&
(E=E.value),E==null&&(g[A]=E=d?[]:{}),g=E}}}return f}});var be=j((Gn,Qt)=>{"use strict";var rn=Xe();Qt.exports=function(r){var i=r.indexOf("?"),s=r.indexOf(
"#"),f=s<0?r.length:s,c=i<0?f:i,o=r.slice(0,c).replace(/\/{2,}/g,"/");return o?o[0]!=="/"&&(o="/"+o):
o="/",{path:o,params:i<0?{}:rn(r.slice(i+1,f))}}});var Yt=j((Yn,Gt)=>{"use strict";var nn=be();Gt.exports=function(r){var i=nn(r),s=Object.keys(i.params),
f=[],c=new RegExp("^"+i.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(o,u,h){
return u==null?"\\"+o:(f.push({k:u,r:h==="..."}),h==="..."?"(.*)":h==="."?"([^/]+)\\.":"([^/]+)"+(h||
""))})+"\\/?$");return function(o){for(var u=0;u<s.length;u++)if(i.params[s[u]]!==o.params[s[u]])return!1;
if(!f.length)return c.test(o.path);var h=c.exec(o.path);if(h==null)return!1;for(var u=0;u<f.length;u++)
o.params[f[u].k]=f[u].r?h[u+1]:decodeURIComponent(h[u+1]);return!0}}});var Ze=j((Xn,er)=>{"use strict";var Xt=ye(),Zt=/^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$/;
er.exports=function(r,i){var s={};if(i!=null)for(var f in r)Xt.call(r,f)&&!Zt.test(f)&&i.indexOf(f)<
0&&(s[f]=r[f]);else for(var f in r)Xt.call(r,f)&&!Zt.test(f)&&(s[f]=r[f]);return s}});var ir=j((Zn,nr)=>{"use strict";var an=G(),sn=We(),un=Ye(),tr=de(),rr=be(),fn=Yt(),ln=Ze();nr.exports=
function(r,i){var s=Promise.resolve(),f=!1,c=!1,o=!1,u,h,m,g,w,A,T,d,E={onremove:function(){c=o=!1,r.
removeEventListener("popstate",L,!1)},view:function(){var x=an(w,A.key,A);return g?g.render(x):[x]}},
I=O.SKIP={};function $(){f=!1;var x=r.location.hash;O.prefix[0]!=="#"&&(x=r.location.search+x,O.prefix[0]!==
"?"&&(x=r.location.pathname+x,x[0]!=="/"&&(x="/"+x)));var P=un(x).slice(O.prefix.length),q=rr(P);Object.
assign(q.params,r.history.state);function C(z){console.error(z),O.set(m,null,{replace:!0})}R(0);function R(z){
for(;z<h.length;z++)if(h[z].check(q)){var M=h[z].component,K=h[z].route,X=M,Y=d=function(J){if(Y===d){
if(J===I)return R(z+1);w=J!=null&&(typeof J.view=="function"||typeof J=="function")?J:"div",A=q.params,
T=P,d=null,g=M.render?M:null,o?i.redraw():(o=!0,i.mount(u,E))}};M.view||typeof M=="function"?(M={},Y(
X)):M.onmatch?s.then(function(){return M.onmatch(q.params,P,K)}).then(Y,P===m?null:C):Y();return}if(P===
m)throw new Error("Could not resolve default route "+m+".");O.set(m,null,{replace:!0})}}function L(){
f||(f=!0,setTimeout($))}function O(x,P,q){if(!x)throw new TypeError("DOM element being rendered to d\
oes not exist.");if(h=Object.keys(q).map(function(R){if(R[0]!=="/")throw new SyntaxError("Routes mus\
t start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(R))throw new SyntaxError("Route parameter name\
s must be separated with either '/', '.', or '-'.");return{route:R,component:q[R],check:fn(R)}}),m=P,
P!=null){var C=rr(P);if(!h.some(function(R){return R.check(C)}))throw new ReferenceError("Default ro\
ute doesn't match any known routes.")}u=x,r.addEventListener("popstate",L,!1),c=!0,$()}return O.set=
function(x,P,q){if(d!=null&&(q=q||{},q.replace=!0),d=null,x=tr(x,P),c){L();var C=q?q.state:null,R=q?
q.title:null;q&&q.replace?r.history.replaceState(C,R,O.prefix+x):r.history.pushState(C,R,O.prefix+x)}else
r.location.href=O.prefix+x},O.get=function(){return T},O.prefix="#!",O.Link={view:function(x){var P=sn(
x.attrs.selector||"a",ln(x.attrs,["options","params","selector","onclick"]),x.children),q,C,R;return(P.
attrs.disabled=!!P.attrs.disabled)?(P.attrs.href=null,P.attrs["aria-disabled"]="true"):(q=x.attrs.options,
C=x.attrs.onclick,R=tr(P.attrs.href,x.attrs.params),P.attrs.href=O.prefix+R,P.attrs.onclick=function(z){
var M;typeof C=="function"?M=C.call(z.currentTarget,z):C==null||typeof C!="object"||typeof C.handleEvent==
"function"&&C.handleEvent(z),M!==!1&&!z.defaultPrevented&&(z.button===0||z.which===0||z.which===1)&&
(!z.currentTarget.target||z.currentTarget.target==="_self")&&!z.ctrlKey&&!z.metaKey&&!z.shiftKey&&!z.
altKey&&(z.preventDefault(),z.redraw=!1,O.set(R,null,q))}),P}},O.param=function(x){return A&&x!=null?
A[x]:A},O}});var sr=j((ei,ar)=>{"use strict";var cn=we();ar.exports=ir()(typeof window<"u"?window:null,cn)});var re=j((ti,fr)=>{"use strict";var Ae=Ct(),ur=we(),on=vt(),mn=sr(),W=function(){return Ae.apply(this,
arguments)};W.m=Ae;W.trust=Ae.trust;W.fragment=Ae.fragment;W.Fragment="[";W.mount=ur.mount;W.route=mn;
W.render=Qe();W.redraw=ur.redraw;W.request=on.request;W.parseQueryString=Xe();W.buildQueryString=Ge();
W.parsePathname=be();W.buildPathname=de();W.vnode=G();W.censor=Ze();W.domFor=Be();fr.exports=W});var xr=oe(re(),1);var y=oe(re(),1);var ne=oe(re(),1);function lr(r,i){return typeof i=="string"?(0,ne.default)(ne.default.route.Link,{href:i},
r):(0,ne.default)("span.link",r)}function xe(){return{view(r){return(0,ne.default)(".nav",lr("Unknow\
n letters",r.attrs.page!=="pattern"&&"/pattern/-/freq/desc/1"),ne.default.trust(" &nbsp; | &nbsp; "),
lr("Anagrams",r.attrs.page!=="anagram"&&"/anagram/-"))}}}function Q(r){return String(r).replace(/\d(?=(\d{3})+\b)/g,"$&,")}var me=oe(re(),1);function ie(r){return[(0,me.default)("img",{src:"puff.svg",width:26,height:26,style:{verticalAlign:"\
text-bottom"}}),me.default.trust(` &nbsp; ${r} \u2026`)]}function Ee(r,i=""){return(0,me.default)(".\
credits",me.default.trust(`We use a dictionary of ${Q(r)} names and English words derived from 
    <a href="http://aspell.net/">aspell</a>,
    <a href="http://web.mit.edu/freebsd/head/share/dict/">web2</a>,
    <a href="https://en.wikpedia.org">Wikipedia</a> and
    <a href="https://web.archive.org/web/20230401195411/https://crr.ugent.be/archives/2045">Brysbaer\
t et al</a>.
    Many of these aren't valid in word games.`+i))}var or=Symbol("Comlink.proxy"),pn=Symbol("Comlink.endpoint"),hn=Symbol("Comlink.releaseProxy"),et=Symbol(
"Comlink.finalizer"),Pe=Symbol("Comlink.thrown"),mr=r=>typeof r=="object"&&r!==null||typeof r=="func\
tion",gn={canHandle:r=>mr(r)&&r[or],serialize(r){let{port1:i,port2:s}=new MessageChannel;return hr(r,
i),[s,[s]]},deserialize(r){return r.start(),rt(r)}},yn={canHandle:r=>mr(r)&&Pe in r,serialize({value:r}){
let i;return r instanceof Error?i={isError:!0,value:{message:r.message,name:r.name,stack:r.stack}}:i=
{isError:!1,value:r},[i,[]]},deserialize(r){throw r.isError?Object.assign(new Error(r.value.message),
r.value):r.value}},pr=new Map([["proxy",gn],["throw",yn]]);function wn(r,i){for(let s of r)if(i===s||
s==="*"||s instanceof RegExp&&s.test(i))return!0;return!1}function hr(r,i=globalThis,s=["*"]){i.addEventListener(
"message",function f(c){if(!c||!c.data)return;if(!wn(s,c.origin)){console.warn(`Invalid origin '${c.
origin}' for comlink proxy`);return}let{id:o,type:u,path:h}=Object.assign({path:[]},c.data),m=(c.data.
argumentList||[]).map(ee),g;try{let w=h.slice(0,-1).reduce((T,d)=>T[d],r),A=h.reduce((T,d)=>T[d],r);
switch(u){case"GET":g=A;break;case"SET":w[h.slice(-1)[0]]=ee(c.data.value),g=!0;break;case"APPLY":g=
A.apply(w,m);break;case"CONSTRUCT":{let T=new A(...m);g=nt(T)}break;case"ENDPOINT":{let{port1:T,port2:d}=new MessageChannel;
hr(r,d),g=En(T,[T])}break;case"RELEASE":g=void 0;break;default:return}}catch(w){g={value:w,[Pe]:0}}Promise.
resolve(g).catch(w=>({value:w,[Pe]:0})).then(w=>{let[A,T]=Ce(w);i.postMessage(Object.assign(Object.assign(
{},A),{id:o}),T),u==="RELEASE"&&(i.removeEventListener("message",f),gr(i),et in r&&typeof r[et]=="fu\
nction"&&r[et]())}).catch(w=>{let[A,T]=Ce({value:new TypeError("Unserializable return value"),[Pe]:0});
i.postMessage(Object.assign(Object.assign({},A),{id:o}),T)})}),i.start&&i.start()}function dn(r){return r.
constructor.name==="MessagePort"}function gr(r){dn(r)&&r.close()}function rt(r,i){let s=new Map;return r.
addEventListener("message",function(c){let{data:o}=c;if(!o||!o.id)return;let u=s.get(o.id);if(u)try{
u(o)}finally{s.delete(o.id)}}),tt(r,s,[],i)}function qe(r){if(r)throw new Error("Proxy has been rele\
ased and is not useable")}function yr(r){return ae(r,new Map,{type:"RELEASE"}).then(()=>{gr(r)})}var Oe=new WeakMap,
Te="FinalizationRegistry"in globalThis&&new FinalizationRegistry(r=>{let i=(Oe.get(r)||0)-1;Oe.set(r,
i),i===0&&yr(r)});function bn(r,i){let s=(Oe.get(i)||0)+1;Oe.set(i,s),Te&&Te.register(r,i,r)}function An(r){
Te&&Te.unregister(r)}function tt(r,i,s=[],f=function(){}){let c=!1,o=new Proxy(f,{get(u,h){if(qe(c),
h===hn)return()=>{An(o),yr(r),i.clear(),c=!0};if(h==="then"){if(s.length===0)return{then:()=>o};let m=ae(
r,i,{type:"GET",path:s.map(g=>g.toString())}).then(ee);return m.then.bind(m)}return tt(r,i,[...s,h])},
set(u,h,m){qe(c);let[g,w]=Ce(m);return ae(r,i,{type:"SET",path:[...s,h].map(A=>A.toString()),value:g},
w).then(ee)},apply(u,h,m){qe(c);let g=s[s.length-1];if(g===pn)return ae(r,i,{type:"ENDPOINT"}).then(
ee);if(g==="bind")return tt(r,i,s.slice(0,-1));let[w,A]=cr(m);return ae(r,i,{type:"APPLY",path:s.map(
T=>T.toString()),argumentList:w},A).then(ee)},construct(u,h){qe(c);let[m,g]=cr(h);return ae(r,i,{type:"\
CONSTRUCT",path:s.map(w=>w.toString()),argumentList:m},g).then(ee)}});return bn(o,r),o}function xn(r){
return Array.prototype.concat.apply([],r)}function cr(r){let i=r.map(Ce);return[i.map(s=>s[0]),xn(i.
map(s=>s[1]))]}var wr=new WeakMap;function En(r,i){return wr.set(r,i),r}function nt(r){return Object.
assign(r,{[or]:!0})}function Ce(r){for(let[i,s]of pr)if(s.canHandle(r)){let[f,c]=s.serialize(r);return[{type:"HANDLER",name:i,
value:f},c]}return[{type:"RAW",value:r},wr.get(r)||[]]}function ee(r){switch(r.type){case"HANDLER":return pr.
get(r.name).deserialize(r.value);case"RAW":return r.value}}function ae(r,i,s,f){return new Promise(c=>{
let o=qn();i.set(o,c),r.start&&r.start(),r.postMessage(Object.assign({id:o},s),f)})}function qn(){return new Array(
4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var se=rt(new Worker(new URL("./combined.worker.js",import.meta.url)));var Pn="-",ue=2e3;function br(){let r="",i,s,f,c,o=0,u=!0,h=!1,m=[],g=0;async function w(E){let{pattern:I,
order:$,direction:L,list:O,page:x}=E.attrs;if(I===r&&$===i&&L===s&&O===f&&x===c)return;r=I,i=$,s=L,f=
O,c=x,h=!0,y.default.redraw();let P=(parseInt(x,10)-1)*ue,q=await se.wordsMatchingPattern(I,$,L,P,ue,
O==="multi");m=q.results,g=q.count,h=!1,y.default.redraw()}function A(E,I,$,L){return(0,y.default)("\
label",(0,y.default)("input",{type:"radio",name:"order",checked:i===E&&s===I,onchange:()=>y.default.
route.set("/pattern/:pattern/:list/:order/:direction/:page",{...L,order:E,direction:I,page:1})}),$)}
function T(E,I,$){return(0,y.default)("label",(0,y.default)("input",{type:"radio",name:"multi",checked:f===
E,onchange:()=>y.default.route.set("/pattern/:pattern/:list/:order/:direction/:page",{...$,list:E,page:1})}),
I)}function d(E,I,$){return I>1&&(0,y.default)(".pagination",[1,E-1,E,E+1,I].filter(L=>L>=1&&L<=I).filter(
(L,O,x)=>L!==x[O-1]).reduce((L,O,x,P)=>(x>0&&P[x-1]!==O-1&&L.push((0,y.default)("span.ellipsis",y.default.
trust("&hellip;"))),L.push($(O)),L),[]))}return{async oninit(){o=await se.getWordsCount(),u=!1,y.default.
redraw()},oncreate:w,onupdate:w,view(E){let I=E.attrs.pattern===Pn?"":E.attrs.pattern,$=parseInt(E.attrs.
page,10),L=Math.ceil(g/ue),O=($-1)*ue,x=Math.min(O+ue-1,g),P=()=>d($,L,M=>(0,y.default)(y.default.route.
Link,{href:"/pattern/:pattern/:order/:direction/:page",selector:M===$?"a.current":"a",params:{...E.attrs,
page:M}},String(M))),q=(M,K="freq/desc")=>(0,y.default)(y.default.route.Link,{href:`/pattern/${encodeURIComponent(
M)}/single/${K}/1`,selector:"a.example"},M),C="http://economicspsychologypolicy.blogspot.com/2013/10\
/lecture-summary-judgement-heuristics.html",R=y.default.trust(" \u2014&nbsp;"),z=[(0,y.default)("h4",
"Examples"),(0,y.default)("ul",(0,y.default)("li",q("...s.w.r."),", ",q("*tz"),", ",q("*yx")," or ",
q("*sh.p*sh.p*")),(0,y.default)("li",q("*a*e*i*o*u*","length/asc"),R,"all vowels in order"),(0,y.default)(
"li",q("r..*")," and ",q("..r*"),R,(0,y.default)("a",{href:C,target:"_blank"},"r first vs. r third")),
(0,y.default)("li",q("*","length/desc"),R,"longest")),(0,y.default)("h4","Advanced examples"),(0,y.default)(
"ul",(0,y.default)("li",q("~(^|[^c])ei"),R,"i before e except after c, except \u2026"),(0,y.default)(
"li",q("~q([^u]|$)"),R,"q, no u"),(0,y.default)("li",q("~[aeiou]{4}$"),R,"4 vowels at end"),(0,y.default)(
"li",q("~(.{4,})\\1"),R,"4+ letters repeating"),(0,y.default)("li",q("~^(.)(.?)(.?)(.?).?\\4\\3\\2\\1$",
"length/desc"),R,"palindromes"))];return(0,y.default)(".page",(0,y.default)(xe,{page:"pattern"}),(0,y.default)(
".pattern",(0,y.default)("h2","Find words with unknown letters"),u?(0,y.default)(".message",ie("Load\
ing dictionary")):(0,y.default)(".interface",(0,y.default)(".pattern-entry",(0,y.default)("input.pat\
tern-input",{type:"search",autocorrect:"off",autocomplete:"off",autocapitalize:"none",spellcheck:!1,
size:15,value:I,onchange:M=>{let{value:K}=M.currentTarget;y.default.route.set("/pattern/:pattern/:li\
st/:order/:direction/1",{...E.attrs,pattern:K})}}),(0,y.default)("button","Find"),(0,y.default)(".in\
structions",(0,y.default)("h4","Wildcards"),(0,y.default)("div",y.default.trust('Use <span class="le\
tter">.</span> or <span class="letter">?</span> for each unknown letter')),(0,y.default)("div",y.default.
trust('Use <span class="letter">*</span> for any number of unknowns')),(0,y.default)("div",y.default.
trust('<i>Advanced:</i> prefix <span class="letter">~</span> to use a <a href="https://cs.lmu.edu/~r\
ay/notes/regex/" target="_blank">regex</a>'))),(0,y.default)(".list",(0,y.default)("h4","Search"),(0,y.default)(
"div",T("single"," Single words",E.attrs),T("multi"," Multiple words and phrases",E.attrs))),(0,y.default)(
".order",(0,y.default)("h4","Show first"),(0,y.default)("div",A("freq","desc"," Common words",E.attrs),
A("freq","asc"," Obscure words",E.attrs)),(0,y.default)("div",A("length","asc"," Short words",E.attrs),
A("length","desc"," Long words",E.attrs)),(0,y.default)("div",A("a-z","asc"," A \u2013\xA0Z",E.attrs),
A("a-z","desc"," Z \u2013\xA0A",E.attrs))),(0,y.default)(".message",I?h?ie("Searching"):g<0?m[0]:g>0?
`${Q(g)} words found`+(g>ue?` (showing ${Q(O)} \u2013 ${Q(x)})`:""):"No matching words found":"Pleas\
e enter a search pattern above"),!I&&z,g>0&&h===!1&&[P(),(0,y.default)(".matches",m.map(M=>(0,y.default)(
"a.match",{href:`https://www.google.com/search?q="${M}"+definition`,target:"_blank"},M))),P()]),Ee(o))))}}}var D=oe(re(),1);var On="-",pe=1e4,Tn=876543;function Cn(r,i=10){let s=[];for(let f=0;f<=i;f++)s.push([]);for(let f of r){
let[{length:c}]=f;s[c>i?i:c].push(f)}return s}function Ar(r){let i=!0,s=0,f=!1,c={evaluated:0,working:!1,
anagrams:[]};function o(){c.working=!0;let u=document.querySelector("#anag-input").value;se.find(u,pe,
Tn,nt(async h=>{let m=c;return c=h,D.default.redraw(),!m.working}))}return{view(u){let h=u.attrs.letters===
On?"":u.attrs.letters;return(0,D.default)(".page",(0,D.default)(xe,{page:"anagram"}),(0,D.default)("\
.pattern",(0,D.default)("h2","Find anagrams"),i?(0,D.default)(".message",ie("Loading dictionary")):(0,D.default)(
".interface",(0,D.default)(".pattern-entry",(0,D.default)("input#anag-input",{type:"search",autocorrect:"\
off",autocomplete:"off",autocapitalize:"none",spellcheck:!1,size:15,value:h,disabled:c.working,onchange(m){
let{value:g}=m.currentTarget;D.default.route.set("/anagram/:letters",{...u.attrs,letters:g===""?"-":
g})},onkeyup(m){m.key==="Enter"&&(c.working?c.working=!1:o()),m.redraw=!1}}),c.working?[(0,D.default)(
"button",{onclick(){c.working=!1}},"Stop"),(0,D.default)(".progress",ie(`${Q(c.evaluated)} evaluated`+
(c.evaluated>pe?`, ${Q(pe)} kept`:"")))]:[(0,D.default)("button",{onclick:o},"Find"),c.evaluated!==0&&
(0,D.default)(".progress",`${Q(c.evaluated)} found`+(c.evaluated>pe?`, ${Q(pe)} kept`:""))]),(0,D.default)(
"#grouping",(0,D.default)("label",(0,D.default)("input[type=checkbox]",{checked:f,onchange(m){f=m.currentTarget.
checked}})," Group by word count")),(0,D.default)(".matches",f?Cn(c.anagrams).map((m,g)=>m.length>0&&
[(0,D.default)("h3",`${g} words`),m.map(w=>(0,D.default)("span.match",w[0].join(" ")))]):c.anagrams.
map(m=>(0,D.default)("span.match",m[0].join(" "))))),Ee(s," Anagrams are retained and ranked by pref\
erring those where the least common word is more common, those with fewer words, and (only very slig\
htly) those where the mean word is more common.")))},async oninit(){s=await se.getWordsCount(),i=!1,
D.default.redraw()},onremove(){c.working=!1}}}xr.default.route(document.getElementById("main"),"/pattern/-/single/freq/desc/1",{"/pattern/:pattern\
/:list/:order/:direction/:page":br,"/anagram/:letters":Ar});
/*! Bundled license information:

comlink/dist/esm/comlink.mjs:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
