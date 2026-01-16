var zr=Object.create;var pt=Object.defineProperty;var Rr=Object.getOwnPropertyDescriptor;var Sr=Object.getOwnPropertyNames;var Nr=Object.getPrototypeOf,Lr=Object.prototype.hasOwnProperty;var j=(r,i)=>()=>(i||r((i={exports:{}}).exports,i),i.exports);var jr=(r,i,s,f)=>{if(i&&typeof i=="object"||typeof i=="function")for(let c of Sr(i))!Lr.call(r,c)&&
c!==s&&pt(r,c,{get:()=>i[c],enumerable:!(f=Rr(i,c))||f.enumerable});return r};var oe=(r,i,s)=>(s=r!=null?zr(Nr(r)):{},jr(i||!r||!r.__esModule?pt(s,"default",{value:r,enumerable:!0}):
s,r));var G=j((Rn,ht)=>{"use strict";function Z(r,i,s,f,c,o){return{tag:r,key:i,attrs:s,children:f,text:c,
dom:o,is:void 0,domSize:void 0,state:void 0,events:void 0,instance:void 0}}Z.normalize=function(r){return Array.
isArray(r)?Z("[",void 0,void 0,Z.normalizeChildren(r),void 0,void 0):r==null||typeof r=="boolean"?null:
typeof r=="object"?r:Z("#",void 0,void 0,String(r),void 0,void 0)};Z.normalizeChildren=function(r){for(var i=new Array(
r.length),s=0,f=0;f<r.length;f++)i[f]=Z.normalize(r[f]),i[f]!==null&&i[f].key!=null&&s++;if(s!==0&&s!==
r.length)throw new TypeError(i.includes(null)?"In fragments, vnodes must either all have keys or non\
e have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...})\
, instead of a hole.":"In fragments, vnodes must either all have keys or none have keys.");return i};
ht.exports=Z});var De=j((Sn,gt)=>{"use strict";var Ir=G();gt.exports=function(r,i){return r==null||typeof r=="objec\
t"&&r.tag==null&&!Array.isArray(r)?i.length===1&&Array.isArray(i[0])&&(i=i[0]):(i=i.length===0&&Array.
isArray(r)?r:[r,...i],r=void 0),Ir("",r&&r.key,r,i)}});var ye=j((Nn,yt)=>{"use strict";yt.exports={}.hasOwnProperty});var _e=j((Ln,wt)=>{"use strict";wt.exports={}});var He=j((jn,dt)=>{"use strict";var vr=_e();dt.exports=new Map([[vr,!0]])});var Fe=j((In,At)=>{"use strict";var $r=G(),Dr=De(),Ue=ye(),bt=_e(),_r=He(),Hr=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,
xt=Object.create(null);function Ur(r){for(var i in r)if(Ue.call(r,i))return!1;return!0}function Fr(r){
return r==="value"||r==="checked"||r==="selectedIndex"||r==="selected"}function Vr(r){for(var i,s="d\
iv",f=[],c={},o=!0;i=Hr.exec(r);){var u=i[1],h=i[2];if(u===""&&h!=="")s=h;else if(u==="#")c.id=h;else if(u===
".")f.push(h);else if(i[3][0]==="["){var m=i[6];m&&(m=m.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),
i[4]==="class"?f.push(m):(c[i[4]]=m===""?m:m||!0,Fr(i[4])&&(o=!1))}}return f.length>0&&(c.className=
f.join(" ")),Ur(c)?c=bt:_r.set(c,o),xt[r]={tag:s,attrs:c,is:c.is}}function Wr(r,i){i.tag=r.tag;var s=i.
attrs;if(s==null)return i.attrs=r.attrs,i.is=r.is,i;if(Ue.call(s,"class")&&(s.class!=null&&(s.className=
s.class),s.class=null),r.attrs!==bt){var f=s.className;s=Object.assign({},r.attrs,s),r.attrs.className!=
null&&(s.className=f!=null?String(r.attrs.className)+" "+String(f):r.attrs.className)}return r.tag===
"input"&&Ue.call(s,"type")&&(s=Object.assign({type:s.type},s)),i.is=s.is,i.attrs=s,i}function Br(r,i,...s){
if(r==null||typeof r!="string"&&typeof r!="function"&&typeof r.view!="function")throw Error("The sel\
ector must be either a string or a component.");var f=Dr(i,s);return typeof r=="string"&&(f.children=
$r.normalizeChildren(f.children),r!=="[")?Wr(xt[r]||Vr(r),f):(f.attrs==null&&(f.attrs={}),f.tag=r,f)}
At.exports=Br});var qt=j((vn,Et)=>{"use strict";var Kr=G();Et.exports=function(r){return r==null&&(r=""),Kr("<",void 0,
void 0,r,void 0,void 0)}});var Ot=j(($n,Pt)=>{"use strict";var Jr=G(),Qr=De();Pt.exports=function(r,...i){var s=Qr(r,i);return s.
attrs==null&&(s.attrs={}),s.tag="[",s.children=Jr.normalizeChildren(s.children),s}});var Ct=j((Dn,Tt)=>{"use strict";var Ve=Fe();Ve.trust=qt();Ve.fragment=Ot();Tt.exports=Ve});var We=j((_n,Mt)=>{"use strict";Mt.exports=new WeakMap});var Be=j((Hn,zt)=>{"use strict";var kt=We();function*Gr(r){var i=r.dom,s=r.domSize,f=kt.get(i);if(i!=
null)do{var c=i.nextSibling;kt.get(i)===f&&(yield i,s--),i=c}while(s)}zt.exports=Gr});var Nt=j((Un,St)=>{"use strict";var Ke=G(),Yr=We(),Je=Be(),Rt=He();St.exports=function(){var r={svg:"\
http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},i,s;function f(t){return t.ownerDocument}
function c(t){return t.attrs&&t.attrs.xmlns||r[t.tag]}function o(t,e){if(t.state!==e)throw new Error(
"'vnode.state' must not be modified.")}function u(t){var e=t.state;try{return this.apply(e,arguments)}finally{
o(t,e)}}function h(t){try{return f(t).activeElement}catch{return null}}function m(t,e,n,a,l,p,R){for(var S=n;S<
a;S++){var b=e[S];b!=null&&g(t,b,l,R,p)}}function g(t,e,n,a,l){var p=e.tag;if(typeof p=="string")switch(e.
state={},e.attrs!=null&&Re(e.attrs,e,n),p){case"#":w(t,e,l);break;case"<":T(t,e,a,l);break;case"[":d(
t,e,n,a,l);break;default:E(t,e,n,a,l)}else v(t,e,n,a,l)}function w(t,e,n){e.dom=f(t).createTextNode(
e.children),J(t,e.dom,n)}var x={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",
th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function T(t,e,n,a){var l=e.children.match(/^\s*?<(\w+)/im)||
[],p=f(t).createElement(x[l[1]]||"div");n==="http://www.w3.org/2000/svg"?(p.innerHTML='<svg xmlns="h\
ttp://www.w3.org/2000/svg">'+e.children+"</svg>",p=p.firstChild):p.innerHTML=e.children,e.dom=p.firstChild,
e.domSize=p.childNodes.length;for(var R=f(t).createDocumentFragment(),S;S=p.firstChild;)R.appendChild(
S);J(t,R,a)}function d(t,e,n,a,l){var p=f(t).createDocumentFragment();if(e.children!=null){var R=e.children;
m(p,R,0,R.length,n,null,a)}e.dom=p.firstChild,e.domSize=p.childNodes.length,J(t,p,l)}function E(t,e,n,a,l){
var p=e.tag,R=e.attrs,S=e.is;a=c(e)||a;var b=a?S?f(t).createElementNS(a,p,{is:S}):f(t).createElementNS(
a,p):S?f(t).createElement(p,{is:S}):f(t).createElement(p);if(e.dom=b,R!=null&&qr(e,R,a),J(t,b,l),!it(
e)&&e.children!=null){var L=e.children;m(b,L,0,L.length,n,null,a),e.tag==="select"&&R!=null&&Or(e,R)}}
function I(t,e){var n;if(typeof t.tag.view=="function"){if(t.state=Object.create(t.tag),n=t.state.view,
n.$$reentrantLock$$!=null)return;n.$$reentrantLock$$=!0}else{if(t.state=void 0,n=t.tag,n.$$reentrantLock$$!=
null)return;n.$$reentrantLock$$=!0,t.state=t.tag.prototype!=null&&typeof t.tag.prototype.view=="func\
tion"?new t.tag(t):t.tag(t)}if(Re(t.state,t,e),t.attrs!=null&&Re(t.attrs,t,e),t.instance=Ke.normalize(
u.call(t.state.view,t)),t.instance===t)throw Error("A view cannot return the vnode it received as ar\
gument");n.$$reentrantLock$$=null}function v(t,e,n,a,l){I(e,n),e.instance!=null?(g(t,e.instance,n,a,
l),e.dom=e.instance.dom,e.domSize=e.instance.domSize):e.domSize=0}function N(t,e,n,a,l,p){if(!(e===n||
e==null&&n==null))if(e==null||e.length===0)m(t,n,0,n.length,a,l,p);else if(n==null||n.length===0)fe(
t,e,0,e.length);else{var R=e[0]!=null&&e[0].key!=null,S=n[0]!=null&&n[0].key!=null,b=0,L=0;if(!R)for(;L<
e.length&&e[L]==null;)L++;if(!S)for(;b<n.length&&n[b]==null;)b++;if(R!==S)fe(t,e,L,e.length),m(t,n,b,
n.length,a,l,p);else if(S){for(var W=e.length-1,U=n.length-1,ge,B,H,V,$,Le;W>=L&&U>=b&&(V=e[W],$=n[U],
V.key===$.key);)V!==$&&O(t,V,$,a,l,p),$.dom!=null&&(l=$.dom),W--,U--;for(;W>=L&&U>=b&&(B=e[L],H=n[b],
B.key===H.key);)L++,b++,B!==H&&O(t,B,H,a,X(e,L,l),p);for(;W>=L&&U>=b&&!(b===U||B.key!==$.key||V.key!==
H.key);)Le=X(e,L,l),Y(t,V,Le),V!==H&&O(t,V,H,a,Le,p),++b<=--U&&Y(t,B,l),B!==$&&O(t,B,$,a,l,p),$.dom!=
null&&(l=$.dom),L++,W--,V=e[W],$=n[U],B=e[L],H=n[b];for(;W>=L&&U>=b&&V.key===$.key;)V!==$&&O(t,V,$,a,
l,p),$.dom!=null&&(l=$.dom),W--,U--,V=e[W],$=n[U];if(b>U)fe(t,e,L,W+1);else if(L>W)m(t,n,b,U+1,a,l,p);else{
var kr=l,mt=U-b+1,ce=new Array(mt),je=0,_=0,Ie=2147483647,ve=0,ge,$e;for(_=0;_<mt;_++)ce[_]=-1;for(_=
U;_>=b;_--){ge==null&&(ge=M(e,L,W+1)),$=n[_];var te=ge[$.key];te!=null&&(Ie=te<Ie?te:-1,ce[_-b]=te,V=
e[te],e[te]=null,V!==$&&O(t,V,$,a,l,p),$.dom!=null&&(l=$.dom),ve++)}if(l=kr,ve!==W-L+1&&fe(t,e,L,W+1),
ve===0)m(t,n,b,U+1,a,l,p);else if(Ie===-1)for($e=K(ce),je=$e.length-1,_=U;_>=b;_--)H=n[_],ce[_-b]===
-1?g(t,H,a,p,l):$e[je]===_-b?je--:Y(t,H,l),H.dom!=null&&(l=n[_].dom);else for(_=U;_>=b;_--)H=n[_],ce[_-
b]===-1&&g(t,H,a,p,l),H.dom!=null&&(l=n[_].dom)}}else{var Ne=e.length<n.length?e.length:n.length;for(b=
b<L?b:L;b<Ne;b++)B=e[b],H=n[b],!(B===H||B==null&&H==null)&&(B==null?g(t,H,a,p,X(e,b+1,l)):H==null?he(
t,B):O(t,B,H,a,X(e,b+1,l),p));e.length>Ne&&fe(t,e,b,e.length),n.length>Ne&&m(t,n,b,n.length,a,l,p)}}}
function O(t,e,n,a,l,p){var R=e.tag,S=n.tag;if(R===S&&e.is===n.is){if(n.state=e.state,n.events=e.events,
Mr(n,e))return;if(typeof R=="string")switch(n.attrs!=null&&Se(n.attrs,n,a),R){case"#":A(e,n);break;case"\
<":P(t,e,n,p,l);break;case"[":q(t,e,n,a,l,p);break;default:C(e,n,a,p)}else z(t,e,n,a,l,p)}else he(t,
e),g(t,n,a,p,l)}function A(t,e){t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children),
e.dom=t.dom}function P(t,e,n,a,l){e.children!==n.children?(ut(t,e),T(t,n,a,l)):(n.dom=e.dom,n.domSize=
e.domSize)}function q(t,e,n,a,l,p){N(t,e.children,n.children,a,l,p);var R=0,S=n.children;if(n.dom=null,
S!=null)for(var b=0;b<S.length;b++){var L=S[b];L!=null&&L.dom!=null&&(n.dom==null&&(n.dom=L.dom),R+=
L.domSize||1)}n.domSize=R}function C(t,e,n,a){var l=e.dom=t.dom;a=c(e)||a,(t.attrs!=e.attrs||e.attrs!=
null&&!Rt.get(e.attrs))&&Tr(e,t.attrs,e.attrs,a),it(e)||N(l,t.children,e.children,n,null,a)}function z(t,e,n,a,l,p){
if(n.instance=Ke.normalize(u.call(n.state.view,n)),n.instance===n)throw Error("A view cannot return \
the vnode it received as argument");Se(n.state,n,a),n.attrs!=null&&Se(n.attrs,n,a),n.instance!=null?
(e.instance==null?g(t,n.instance,a,p,l):O(t,e.instance,n.instance,a,l,p),n.dom=n.instance.dom,n.domSize=
n.instance.domSize):(e.instance!=null&&he(t,e.instance),n.domSize=0)}function M(t,e,n){for(var a=Object.
create(null);e<n;e++){var l=t[e];if(l!=null){var p=l.key;p!=null&&(a[p]=e)}}return a}var k=[];function K(t){
for(var e=[0],n=0,a=0,l=0,p=k.length=t.length,l=0;l<p;l++)k[l]=t[l];for(var l=0;l<p;++l)if(t[l]!==-1){
var R=e[e.length-1];if(t[R]<t[l]){k[l]=R,e.push(l);continue}for(n=0,a=e.length-1;n<a;){var S=(n>>>1)+
(a>>>1)+(n&a&1);t[e[S]]<t[l]?n=S+1:a=S}t[l]<t[e[n]]&&(n>0&&(k[l]=e[n-1]),e[n]=l)}for(n=e.length,a=e[n-
1];n-- >0;)e[n]=a,a=k[a];return k.length=0,e}function X(t,e,n){for(;e<t.length;e++)if(t[e]!=null&&t[e].
dom!=null)return t[e].dom;return n}function Y(t,e,n){if(e.dom!=null){var a;if(e.domSize==null||e.domSize===
1)a=e.dom;else{a=f(t).createDocumentFragment();for(var l of Je(e))a.appendChild(l)}J(t,a,n)}}function J(t,e,n){
n!=null?t.insertBefore(e,n):t.appendChild(e)}function it(t){if(t.attrs==null||t.attrs.contenteditable==
null&&t.attrs.contentEditable==null)return!1;var e=t.children;if(e!=null&&e.length===1&&e[0].tag==="\
<"){var n=e[0].children;t.dom.innerHTML!==n&&(t.dom.innerHTML=n)}else if(e!=null&&e.length!==0)throw new Error(
"Child node of a contenteditable must be trusted.");return!0}function fe(t,e,n,a){for(var l=n;l<a;l++){
var p=e[l];p!=null&&he(t,p)}}function at(t,e,n,a){var l=e.state,p=u.call(n.onbeforeremove,e);if(p!=null){
var R=s;for(var S of Je(e))Yr.set(S,R);a.v++,Promise.resolve(p).finally(function(){o(e,l),st(t,e,a)})}}
function st(t,e,n){--n.v===0&&(Me(e),ut(t,e))}function he(t,e){var n={v:1};typeof e.tag!="string"&&typeof e.
state.onbeforeremove=="function"&&at(t,e,e.state,n),e.attrs&&typeof e.attrs.onbeforeremove=="functio\
n"&&at(t,e,e.attrs,n),st(t,e,n)}function ut(t,e){if(e.dom!=null)if(e.domSize==null||e.domSize===1)t.
removeChild(e.dom);else for(var n of Je(e))t.removeChild(n)}function Me(t){if(typeof t.tag!="string"&&
typeof t.state.onremove=="function"&&u.call(t.state.onremove,t),t.attrs&&typeof t.attrs.onremove=="f\
unction"&&u.call(t.attrs.onremove,t),typeof t.tag!="string")t.instance!=null&&Me(t.instance);else{t.
events!=null&&(t.events._=null);var e=t.children;if(Array.isArray(e))for(var n=0;n<e.length;n++){var a=e[n];
a!=null&&Me(a)}}}function qr(t,e,n){for(var a in e)ke(t,a,null,e[a],n)}function ke(t,e,n,a,l){if(!(e===
"key"||a==null||ft(e)||n===a&&!Cr(t,e)&&typeof a!="object")){if(e[0]==="o"&&e[1]==="n")return ot(t,e,
a);if(e.slice(0,6)==="xlink:")t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),a);else if(e===
"style")ct(t.dom,n,a);else if(lt(t,e,l)){if(e==="value"){if((t.tag==="input"||t.tag==="textarea")&&t.
dom.value===""+a||t.tag==="select"&&n!==null&&t.dom.value===""+a||t.tag==="option"&&n!==null&&t.dom.
value===""+a)return;if(t.tag==="input"&&t.attrs.type==="file"&&""+a!=""){console.error("`value` is r\
ead-only on file inputs!");return}}t.tag==="input"&&e==="type"?t.dom.setAttribute(e,a):t.dom[e]=a}else
typeof a=="boolean"?a?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute(e==="clas\
sName"?"class":e,a)}}function Pr(t,e,n,a){if(!(e==="key"||n==null||ft(e)))if(e[0]==="o"&&e[1]==="n")
ot(t,e,void 0);else if(e==="style")ct(t.dom,n,null);else if(lt(t,e,a)&&e!=="className"&&e!=="title"&&
!(e==="value"&&(t.tag==="option"||t.tag==="select"&&t.dom.selectedIndex===-1&&t.dom===h(t.dom)))&&!(t.
tag==="input"&&e==="type"))t.dom[e]=null;else{var l=e.indexOf(":");l!==-1&&(e=e.slice(l+1)),n!==!1&&
t.dom.removeAttribute(e==="className"?"class":e)}}function Or(t,e){if("value"in e)if(e.value===null)
t.dom.selectedIndex!==-1&&(t.dom.value=null);else{var n=""+e.value;(t.dom.value!==n||t.dom.selectedIndex===
-1)&&(t.dom.value=n)}"selectedIndex"in e&&ke(t,"selectedIndex",null,e.selectedIndex,void 0)}function Tr(t,e,n,a){
var l;if(e!=null){e===n&&!Rt.has(n)&&console.warn("Don't reuse attrs object, use new object for ever\
y redraw, this will throw in next major");for(var p in e)(l=e[p])!=null&&(n==null||n[p]==null)&&Pr(t,
p,l,a)}if(n!=null)for(var p in n)ke(t,p,e&&e[p],n[p],a)}function Cr(t,e){return e==="value"||e==="ch\
ecked"||e==="selectedIndex"||e==="selected"&&(t.dom===h(t.dom)||t.tag==="option"&&t.dom.parentNode===
h(t.dom))}function ft(t){return t==="oninit"||t==="oncreate"||t==="onupdate"||t==="onremove"||t==="o\
nbeforeremove"||t==="onbeforeupdate"}function lt(t,e,n){return n===void 0&&(t.tag.indexOf("-")>-1||t.
is||e!=="href"&&e!=="list"&&e!=="form"&&e!=="width"&&e!=="height")&&e in t.dom}function ct(t,e,n){if(e!==
n)if(n==null)t.style="";else if(typeof n!="object")t.style=n;else if(e==null||typeof e!="object"){t.
style="";for(var a in n){var l=n[a];l!=null&&(a.includes("-")?t.style.setProperty(a,String(l)):t.style[a]=
String(l))}}else{for(var a in e)e[a]!=null&&n[a]==null&&(a.includes("-")?t.style.removeProperty(a):t.
style[a]="");for(var a in n){var l=n[a];l!=null&&(l=String(l))!==String(e[a])&&(a.includes("-")?t.style.
setProperty(a,l):t.style[a]=l)}}}function ze(){this._=i}ze.prototype=Object.create(null),ze.prototype.
handleEvent=function(t){var e=this["on"+t.type],n;typeof e=="function"?n=e.call(t.currentTarget,t):typeof e.
handleEvent=="function"&&e.handleEvent(t);var a=this;a._!=null&&(t.redraw!==!1&&(0,a._)(),n!=null&&typeof n.
then=="function"&&Promise.resolve(n).then(function(){a._!=null&&t.redraw!==!1&&(0,a._)()})),n===!1&&
(t.preventDefault(),t.stopPropagation())};function ot(t,e,n){if(t.events!=null){if(t.events._=i,t.events[e]===
n)return;n!=null&&(typeof n=="function"||typeof n=="object")?(t.events[e]==null&&t.dom.addEventListener(
e.slice(2),t.events,!1),t.events[e]=n):(t.events[e]!=null&&t.dom.removeEventListener(e.slice(2),t.events,
!1),t.events[e]=void 0)}else n!=null&&(typeof n=="function"||typeof n=="object")&&(t.events=new ze,t.
dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=n)}function Re(t,e,n){typeof t.oninit=="fun\
ction"&&u.call(t.oninit,e),typeof t.oncreate=="function"&&n.push(u.bind(t.oncreate,e))}function Se(t,e,n){
typeof t.onupdate=="function"&&n.push(u.bind(t.onupdate,e))}function Mr(t,e){do{if(t.attrs!=null&&typeof t.
attrs.onbeforeupdate=="function"){var n=u.call(t.attrs.onbeforeupdate,t,e);if(n!==void 0&&!n)break}if(typeof t.
tag!="string"&&typeof t.state.onbeforeupdate=="function"){var n=u.call(t.state.onbeforeupdate,t,e);if(n!==
void 0&&!n)break}return!1}while(!1);return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=
e.attrs,t.children=e.children,t.text=e.text,!0}var le;return function(t,e,n){if(!t)throw new TypeError(
"DOM element being rendered to does not exist.");if(le!=null&&t.contains(le))throw new TypeError("No\
de is currently being rendered to and thus is locked.");var a=i,l=le,p=[],R=h(t),S=t.namespaceURI;le=
t,i=typeof n=="function"?n:void 0,s={};try{t.vnodes==null&&(t.textContent=""),e=Ke.normalizeChildren(
Array.isArray(e)?e:[e]),N(t,t.vnodes,e,p,null,S==="http://www.w3.org/1999/xhtml"?void 0:S),t.vnodes=
e,R!=null&&h(t)!==R&&typeof R.focus=="function"&&R.focus();for(var b=0;b<p.length;b++)p[b]()}finally{
i=a,le=l}}}});var Qe=j((Fn,Lt)=>{"use strict";Lt.exports=Nt()()});var vt=j((Vn,It)=>{"use strict";var jt=G();It.exports=function(r,i,s){var f=[],c=!1,o=-1;function u(){
for(o=0;o<f.length;o+=2)try{r(f[o],jt(f[o+1]),h)}catch(g){s.error(g)}o=-1}function h(){c||(c=!0,i(function(){
c=!1,u()}))}h.sync=u;function m(g,w){if(w!=null&&w.view==null&&typeof w!="function")throw new TypeError(
"m.mount expects a component, not a vnode.");var x=f.indexOf(g);x>=0&&(f.splice(x,2),x<=o&&(o-=2),r(
g,[])),w!=null&&(f.push(g,w),r(g,jt(w),h))}return{mount:m,redraw:h}}});var we=j((Wn,$t)=>{"use strict";var Xr=Qe();$t.exports=vt()(Xr,typeof requestAnimationFrame<"u"?requestAnimationFrame:
null,typeof console<"u"?console:null)});var Ge=j((Bn,Dt)=>{"use strict";Dt.exports=function(r){if(Object.prototype.toString.call(r)!=="[obje\
ct Object]")return"";var i=[];for(var s in r)f(s,r[s]);return i.join("&");function f(c,o){if(Array.isArray(
o))for(var u=0;u<o.length;u++)f(c+"["+u+"]",o[u]);else if(Object.prototype.toString.call(o)==="[obje\
ct Object]")for(var u in o)f(c+"["+u+"]",o[u]);else i.push(encodeURIComponent(c)+(o!=null&&o!==""?"="+
encodeURIComponent(o):""))}}});var de=j((Kn,_t)=>{"use strict";var Zr=Ge();_t.exports=function(r,i){if(/:([^\/\.-]+)(\.{3})?:/.test(
r))throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
if(i==null)return r;var s=r.indexOf("?"),f=r.indexOf("#"),c=f<0?r.length:f,o=s<0?c:s,u=r.slice(0,o),
h={};Object.assign(h,i);var m=u.replace(/:([^\/\.-]+)(\.{3})?/g,function(I,v,N){return delete h[v],i[v]==
null?I:N?i[v]:encodeURIComponent(String(i[v]))}),g=m.indexOf("?"),w=m.indexOf("#"),x=w<0?m.length:w,
T=g<0?x:g,d=m.slice(0,T);s>=0&&(d+=r.slice(s,c)),g>=0&&(d+=(s<0?"?":"&")+m.slice(g,x));var E=Zr(h);return E&&
(d+=(s<0&&g<0?"?":"&")+E),f>=0&&(d+=r.slice(f)),w>=0&&(d+=(f<0?"":"&")+m.slice(w)),d}});var Ft=j((Jn,Ut)=>{"use strict";var en=de(),Ht=ye();Ut.exports=function(r,i){function s(o){return new Promise(
o)}function f(o,u){return new Promise(function(h,m){o=en(o,u.params);var g=u.method!=null?u.method.toUpperCase():
"GET",w=u.body,x=(u.serialize==null||u.serialize===JSON.serialize)&&!(w instanceof r.FormData||w instanceof
r.URLSearchParams),T=u.responseType||(typeof u.extract=="function"?"":"json"),d=new r.XMLHttpRequest,
E=!1,I=!1,v=d,N,O=d.abort;d.abort=function(){E=!0,O.call(this)},d.open(g,o,u.async!==!1,typeof u.user==
"string"?u.user:void 0,typeof u.password=="string"?u.password:void 0),x&&w!=null&&!c(u,"content-type")&&
d.setRequestHeader("Content-Type","application/json; charset=utf-8"),typeof u.deserialize!="function"&&
!c(u,"accept")&&d.setRequestHeader("Accept","application/json, text/*"),u.withCredentials&&(d.withCredentials=
u.withCredentials),u.timeout&&(d.timeout=u.timeout),d.responseType=T;for(var A in u.headers)Ht.call(
u.headers,A)&&d.setRequestHeader(A,u.headers[A]);d.onreadystatechange=function(P){if(!E&&P.target.readyState===
4)try{var q=P.target.status>=200&&P.target.status<300||P.target.status===304||/^file:\/\//i.test(o),
C=P.target.response,z;if(T==="json"){if(!P.target.responseType&&typeof u.extract!="function")try{C=JSON.
parse(P.target.responseText)}catch{C=null}}else(!T||T==="text")&&C==null&&(C=P.target.responseText);
if(typeof u.extract=="function"?(C=u.extract(P.target,u),q=!0):typeof u.deserialize=="function"&&(C=
u.deserialize(C)),q){if(typeof u.type=="function")if(Array.isArray(C))for(var M=0;M<C.length;M++)C[M]=
new u.type(C[M]);else C=new u.type(C);h(C)}else{var k=function(){try{z=P.target.responseText}catch{z=
C}var K=new Error(z);K.code=P.target.status,K.response=C,m(K)};d.status===0?setTimeout(function(){I||
k()}):k()}}catch(K){m(K)}},d.ontimeout=function(P){I=!0;var q=new Error("Request timed out");q.code=
P.target.status,m(q)},typeof u.config=="function"&&(d=u.config(d,u,o)||d,d!==v&&(N=d.abort,d.abort=function(){
E=!0,N.call(this)})),w==null?d.send():typeof u.serialize=="function"?d.send(u.serialize(w)):w instanceof
r.FormData||w instanceof r.URLSearchParams?d.send(w):d.send(JSON.stringify(w))})}s.prototype=Promise.
prototype,s.__proto__=Promise;function c(o,u){for(var h in o.headers)if(Ht.call(o.headers,h)&&h.toLowerCase()===
u)return!0;return!1}return{request:function(o,u){typeof o!="string"?(u=o,o=o.url):u==null&&(u={});var h=f(
o,u);if(u.background===!0)return h;var m=0;function g(){--m===0&&typeof i=="function"&&i()}return w(
h);function w(x){var T=x.then;return x.constructor=s,x.then=function(){m++;var d=T.apply(x,arguments);
return d.then(g,function(E){if(g(),m===0)throw E}),w(d)},x}}}}});var Wt=j((Qn,Vt)=>{"use strict";var tn=we();Vt.exports=Ft()(typeof window<"u"?window:null,tn.redraw)});var Ye=j((Gn,Bt)=>{"use strict";var rn=/%(?:[0-7]|(?!c[01]|e0%[89]|ed%[ab]|f0%8|f4%[9ab])(?:c|d|(?:e|f[0-4]%[89ab])[\da-f]%[89ab])[\da-f]%[89ab])[\da-f]/gi;
Bt.exports=function(r){return String(r).replace(rn,decodeURIComponent)}});var Xe=j((Yn,Jt)=>{"use strict";var Kt=Ye();Jt.exports=function(r){if(r===""||r==null)return{};r.charAt(
0)==="?"&&(r=r.slice(1));for(var i=r.split("&"),s={},f={},c=0;c<i.length;c++){var o=i[c].split("="),
u=Kt(o[0]),h=o.length===2?Kt(o[1]):"";h==="true"?h=!0:h==="false"&&(h=!1);var m=u.split(/\]\[?|\[/),
g=f;u.indexOf("[")>-1&&m.pop();for(var w=0;w<m.length;w++){var x=m[w],T=m[w+1],d=T==""||!isNaN(parseInt(
T,10));if(x===""){var u=m.slice(0,w).join();s[u]==null&&(s[u]=Array.isArray(g)?g.length:0),x=s[u]++}else if(x===
"__proto__")break;if(w===m.length-1)g[x]=h;else{var E=Object.getOwnPropertyDescriptor(g,x);E!=null&&
(E=E.value),E==null&&(g[x]=E=d?[]:{}),g=E}}}return f}});var be=j((Xn,Qt)=>{"use strict";var nn=Xe();Qt.exports=function(r){var i=r.indexOf("?"),s=r.indexOf(
"#"),f=s<0?r.length:s,c=i<0?f:i,o=r.slice(0,c).replace(/\/{2,}/g,"/");return o?o[0]!=="/"&&(o="/"+o):
o="/",{path:o,params:i<0?{}:nn(r.slice(i+1,f))}}});var Yt=j((Zn,Gt)=>{"use strict";var an=be();Gt.exports=function(r){var i=an(r),s=Object.keys(i.params),
f=[],c=new RegExp("^"+i.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(o,u,h){
return u==null?"\\"+o:(f.push({k:u,r:h==="..."}),h==="..."?"(.*)":h==="."?"([^/]+)\\.":"([^/]+)"+(h||
""))})+"\\/?$");return function(o){for(var u=0;u<s.length;u++)if(i.params[s[u]]!==o.params[s[u]])return!1;
if(!f.length)return c.test(o.path);var h=c.exec(o.path);if(h==null)return!1;for(var u=0;u<f.length;u++)
o.params[f[u].k]=f[u].r?h[u+1]:decodeURIComponent(h[u+1]);return!0}}});var Ze=j((ei,er)=>{"use strict";var Xt=ye(),Zt=/^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$/;
er.exports=function(r,i){var s={};if(i!=null)for(var f in r)Xt.call(r,f)&&!Zt.test(f)&&i.indexOf(f)<
0&&(s[f]=r[f]);else for(var f in r)Xt.call(r,f)&&!Zt.test(f)&&(s[f]=r[f]);return s}});var ir=j((ti,nr)=>{"use strict";var sn=G(),un=Fe(),fn=Ye(),tr=de(),rr=be(),ln=Yt(),cn=Ze();nr.exports=
function(r,i){var s=Promise.resolve(),f=!1,c=!1,o=!1,u,h,m,g,w,x,T,d,E={onremove:function(){c=o=!1,r.
removeEventListener("popstate",N,!1)},view:function(){var A=sn(w,x.key,x);return g?g.render(A):[A]}},
I=O.SKIP={};function v(){f=!1;var A=r.location.hash;O.prefix[0]!=="#"&&(A=r.location.search+A,O.prefix[0]!==
"?"&&(A=r.location.pathname+A,A[0]!=="/"&&(A="/"+A)));var P=fn(A).slice(O.prefix.length),q=rr(P);Object.
assign(q.params,r.history.state);function C(M){console.error(M),O.set(m,null,{replace:!0})}z(0);function z(M){
for(;M<h.length;M++)if(h[M].check(q)){var k=h[M].component,K=h[M].route,X=k,Y=d=function(J){if(Y===d){
if(J===I)return z(M+1);w=J!=null&&(typeof J.view=="function"||typeof J=="function")?J:"div",x=q.params,
T=P,d=null,g=k.render?k:null,o?i.redraw():(o=!0,i.mount(u,E))}};k.view||typeof k=="function"?(k={},Y(
X)):k.onmatch?s.then(function(){return k.onmatch(q.params,P,K)}).then(Y,P===m?null:C):Y();return}if(P===
m)throw new Error("Could not resolve default route "+m+".");O.set(m,null,{replace:!0})}}function N(){
f||(f=!0,setTimeout(v))}function O(A,P,q){if(!A)throw new TypeError("DOM element being rendered to d\
oes not exist.");if(h=Object.keys(q).map(function(z){if(z[0]!=="/")throw new SyntaxError("Routes mus\
t start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(z))throw new SyntaxError("Route parameter name\
s must be separated with either '/', '.', or '-'.");return{route:z,component:q[z],check:ln(z)}}),m=P,
P!=null){var C=rr(P);if(!h.some(function(z){return z.check(C)}))throw new ReferenceError("Default ro\
ute doesn't match any known routes.")}u=A,r.addEventListener("popstate",N,!1),c=!0,v()}return O.set=
function(A,P,q){if(d!=null&&(q=q||{},q.replace=!0),d=null,A=tr(A,P),c){N();var C=q?q.state:null,z=q?
q.title:null;q&&q.replace?r.history.replaceState(C,z,O.prefix+A):r.history.pushState(C,z,O.prefix+A)}else
r.location.href=O.prefix+A},O.get=function(){return T},O.prefix="#!",O.Link={view:function(A){var P=un(
A.attrs.selector||"a",cn(A.attrs,["options","params","selector","onclick"]),A.children),q,C,z;return(P.
attrs.disabled=!!P.attrs.disabled)?(P.attrs.href=null,P.attrs["aria-disabled"]="true"):(q=A.attrs.options,
C=A.attrs.onclick,z=tr(P.attrs.href,A.attrs.params),P.attrs.href=O.prefix+z,P.attrs.onclick=function(M){
var k;typeof C=="function"?k=C.call(M.currentTarget,M):C==null||typeof C!="object"||typeof C.handleEvent==
"function"&&C.handleEvent(M),k!==!1&&!M.defaultPrevented&&(M.button===0||M.which===0||M.which===1)&&
(!M.currentTarget.target||M.currentTarget.target==="_self")&&!M.ctrlKey&&!M.metaKey&&!M.shiftKey&&!M.
altKey&&(M.preventDefault(),M.redraw=!1,O.set(z,null,q))}),P}},O.param=function(A){return x&&A!=null?
x[A]:x},O}});var sr=j((ri,ar)=>{"use strict";var on=we();ar.exports=ir()(typeof window<"u"?window:null,on)});var re=j((ni,fr)=>{"use strict";var xe=Ct(),ur=we(),mn=Wt(),pn=sr(),F=function(){return xe.apply(this,
arguments)};F.m=xe;F.trust=xe.trust;F.fragment=xe.fragment;F.Fragment="[";F.mount=ur.mount;F.route=pn;
F.render=Qe();F.redraw=ur.redraw;F.request=mn.request;F.parseQueryString=Xe();F.buildQueryString=Ge();
F.parsePathname=be();F.buildPathname=de();F.vnode=G();F.censor=Ze();F.domFor=Be();fr.exports=F});var Er=oe(re(),1);var y=oe(re(),1);var ne=oe(re(),1);function lr(r,i){return typeof i=="string"?(0,ne.default)(ne.default.route.Link,{href:i},
r):(0,ne.default)("span.link",r)}function Ae(){return{view(r){return(0,ne.default)(".nav",lr("Unknow\
n letters",r.attrs.page!=="pattern"&&"/pattern/-/freq/desc/1"),ne.default.trust(" &nbsp; | &nbsp; "),
lr("Anagrams",r.attrs.page!=="anagram"&&"/anagram/-"))}}}function Q(r){return String(r).replace(/\d(?=(\d{3})+\b)/g,"$&,")}var me=oe(re(),1);var cr="./puff-FF7ZATQ6.svg";function ie(r){return[(0,me.default)("img",{src:cr,width:26,height:26,style:{verticalAlign:"text-bot\
tom"}}),me.default.trust(` &nbsp; ${r} \u2026`)]}function Ee(r,i=""){return(0,me.default)(".credits",
me.default.trust(`We use a dictionary of ${Q(r)} names and English words derived from 
    <a href="http://aspell.net/">aspell</a>,
    <a href="http://web.mit.edu/freebsd/head/share/dict/">web2</a>,
    <a href="https://en.wikpedia.org">Wikipedia</a> and
    <a href="https://web.archive.org/web/20230401195411/https://crr.ugent.be/archives/2045">Brysbaer\
t et al</a>.
    Many of these aren't valid in word games.`+i))}var mr=Symbol("Comlink.proxy"),gn=Symbol("Comlink.endpoint"),yn=Symbol("Comlink.releaseProxy"),et=Symbol(
"Comlink.finalizer"),Pe=Symbol("Comlink.thrown"),pr=r=>typeof r=="object"&&r!==null||typeof r=="func\
tion",wn={canHandle:r=>pr(r)&&r[mr],serialize(r){let{port1:i,port2:s}=new MessageChannel;return gr(r,
i),[s,[s]]},deserialize(r){return r.start(),rt(r)}},dn={canHandle:r=>pr(r)&&Pe in r,serialize({value:r}){
let i;return r instanceof Error?i={isError:!0,value:{message:r.message,name:r.name,stack:r.stack}}:i=
{isError:!1,value:r},[i,[]]},deserialize(r){throw r.isError?Object.assign(new Error(r.value.message),
r.value):r.value}},hr=new Map([["proxy",wn],["throw",dn]]);function bn(r,i){for(let s of r)if(i===s||
s==="*"||s instanceof RegExp&&s.test(i))return!0;return!1}function gr(r,i=globalThis,s=["*"]){i.addEventListener(
"message",function f(c){if(!c||!c.data)return;if(!bn(s,c.origin)){console.warn(`Invalid origin '${c.
origin}' for comlink proxy`);return}let{id:o,type:u,path:h}=Object.assign({path:[]},c.data),m=(c.data.
argumentList||[]).map(ee),g;try{let w=h.slice(0,-1).reduce((T,d)=>T[d],r),x=h.reduce((T,d)=>T[d],r);
switch(u){case"GET":g=x;break;case"SET":w[h.slice(-1)[0]]=ee(c.data.value),g=!0;break;case"APPLY":g=
x.apply(w,m);break;case"CONSTRUCT":{let T=new x(...m);g=nt(T)}break;case"ENDPOINT":{let{port1:T,port2:d}=new MessageChannel;
gr(r,d),g=Pn(T,[T])}break;case"RELEASE":g=void 0;break;default:return}}catch(w){g={value:w,[Pe]:0}}Promise.
resolve(g).catch(w=>({value:w,[Pe]:0})).then(w=>{let[x,T]=Ce(w);i.postMessage(Object.assign(Object.assign(
{},x),{id:o}),T),u==="RELEASE"&&(i.removeEventListener("message",f),yr(i),et in r&&typeof r[et]=="fu\
nction"&&r[et]())}).catch(w=>{let[x,T]=Ce({value:new TypeError("Unserializable return value"),[Pe]:0});
i.postMessage(Object.assign(Object.assign({},x),{id:o}),T)})}),i.start&&i.start()}function xn(r){return r.
constructor.name==="MessagePort"}function yr(r){xn(r)&&r.close()}function rt(r,i){let s=new Map;return r.
addEventListener("message",function(c){let{data:o}=c;if(!o||!o.id)return;let u=s.get(o.id);if(u)try{
u(o)}finally{s.delete(o.id)}}),tt(r,s,[],i)}function qe(r){if(r)throw new Error("Proxy has been rele\
ased and is not useable")}function wr(r){return ae(r,new Map,{type:"RELEASE"}).then(()=>{yr(r)})}var Oe=new WeakMap,
Te="FinalizationRegistry"in globalThis&&new FinalizationRegistry(r=>{let i=(Oe.get(r)||0)-1;Oe.set(r,
i),i===0&&wr(r)});function An(r,i){let s=(Oe.get(i)||0)+1;Oe.set(i,s),Te&&Te.register(r,i,r)}function En(r){
Te&&Te.unregister(r)}function tt(r,i,s=[],f=function(){}){let c=!1,o=new Proxy(f,{get(u,h){if(qe(c),
h===yn)return()=>{En(o),wr(r),i.clear(),c=!0};if(h==="then"){if(s.length===0)return{then:()=>o};let m=ae(
r,i,{type:"GET",path:s.map(g=>g.toString())}).then(ee);return m.then.bind(m)}return tt(r,i,[...s,h])},
set(u,h,m){qe(c);let[g,w]=Ce(m);return ae(r,i,{type:"SET",path:[...s,h].map(x=>x.toString()),value:g},
w).then(ee)},apply(u,h,m){qe(c);let g=s[s.length-1];if(g===gn)return ae(r,i,{type:"ENDPOINT"}).then(
ee);if(g==="bind")return tt(r,i,s.slice(0,-1));let[w,x]=or(m);return ae(r,i,{type:"APPLY",path:s.map(
T=>T.toString()),argumentList:w},x).then(ee)},construct(u,h){qe(c);let[m,g]=or(h);return ae(r,i,{type:"\
CONSTRUCT",path:s.map(w=>w.toString()),argumentList:m},g).then(ee)}});return An(o,r),o}function qn(r){
return Array.prototype.concat.apply([],r)}function or(r){let i=r.map(Ce);return[i.map(s=>s[0]),qn(i.
map(s=>s[1]))]}var dr=new WeakMap;function Pn(r,i){return dr.set(r,i),r}function nt(r){return Object.
assign(r,{[mr]:!0})}function Ce(r){for(let[i,s]of hr)if(s.canHandle(r)){let[f,c]=s.serialize(r);return[{type:"HANDLER",name:i,
value:f},c]}return[{type:"RAW",value:r},dr.get(r)||[]]}function ee(r){switch(r.type){case"HANDLER":return hr.
get(r.name).deserialize(r.value);case"RAW":return r.value}}function ae(r,i,s,f){return new Promise(c=>{
let o=On();i.set(o,c),r.start&&r.start(),r.postMessage(Object.assign({id:o},s),f)})}function On(){return new Array(
4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var se=rt(new Worker(new URL("./combined.worker.js",import.meta.url)));var Tn="-",ue=2e3;function xr(){let r="",i,s,f,c,o=0,u=!0,h=!1,m=[],g=0;async function w(E){let{pattern:I,
order:v,direction:N,list:O,page:A}=E.attrs;if(I===r&&v===i&&N===s&&O===f&&A===c)return;r=I,i=v,s=N,f=
O,c=A,h=!0,y.default.redraw();let P=(parseInt(A,10)-1)*ue,q=await se.wordsMatchingPattern(I,v,N,P,ue,
O==="multi");m=q.results,g=q.count,h=!1,y.default.redraw()}function x(E,I,v,N){return(0,y.default)("\
label",(0,y.default)("input",{type:"radio",name:"order",checked:i===E&&s===I,onchange:()=>y.default.
route.set("/pattern/:pattern/:list/:order/:direction/:page",{...N,order:E,direction:I,page:1})}),v)}
function T(E,I,v){return(0,y.default)("label",(0,y.default)("input",{type:"radio",name:"multi",checked:f===
E,onchange:()=>y.default.route.set("/pattern/:pattern/:list/:order/:direction/:page",{...v,list:E,page:1})}),
I)}function d(E,I,v){return I>1&&(0,y.default)(".pagination",[1,E-1,E,E+1,I].filter(N=>N>=1&&N<=I).filter(
(N,O,A)=>N!==A[O-1]).reduce((N,O,A,P)=>(A>0&&P[A-1]!==O-1&&N.push((0,y.default)("span.ellipsis",y.default.
trust("&hellip;"))),N.push(v(O)),N),[]))}return{async oninit(){o=await se.getWordsCount(),u=!1,y.default.
redraw()},oncreate:w,onupdate:w,view(E){let I=E.attrs.pattern===Tn?"":E.attrs.pattern,v=parseInt(E.attrs.
page,10),N=Math.ceil(g/ue),O=(v-1)*ue,A=Math.min(O+ue-1,g),P=()=>d(v,N,k=>(0,y.default)(y.default.route.
Link,{href:"/pattern/:pattern/:order/:direction/:page",selector:k===v?"a.current":"a",params:{...E.attrs,
page:k}},String(k))),q=(k,K="freq/desc")=>(0,y.default)(y.default.route.Link,{href:`/pattern/${encodeURIComponent(
k)}/single/${K}/1`,selector:"a.example"},k),C="http://economicspsychologypolicy.blogspot.com/2013/10\
/lecture-summary-judgement-heuristics.html",z=y.default.trust(" \u2014&nbsp;"),M=[(0,y.default)("h4",
"Examples"),(0,y.default)("ul",(0,y.default)("li",q("...s.w.r."),", ",q("*tz"),", ",q("*yx")," or ",
q("*sh.p*sh.p*")),(0,y.default)("li",q("*a*e*i*o*u*","length/asc"),z,"all vowels in order"),(0,y.default)(
"li",q("r..*")," and ",q("..r*"),z,(0,y.default)("a",{href:C,target:"_blank"},"r first vs. r third")),
(0,y.default)("li",q("*","length/desc"),z,"longest")),(0,y.default)("h4","Advanced examples"),(0,y.default)(
"ul",(0,y.default)("li",q("~(^|[^c])ei"),z,"i before e except after c, except \u2026"),(0,y.default)(
"li",q("~q([^u]|$)"),z,"q, no u"),(0,y.default)("li",q("~[aeiou]{4}$"),z,"4 vowels at end"),(0,y.default)(
"li",q("~(.{4,})\\1"),z,"4+ letters repeating"),(0,y.default)("li",q("~^(.)(.?)(.?)(.?).?\\4\\3\\2\\1$",
"length/desc"),z,"palindromes"))];return(0,y.default)(".page",(0,y.default)(Ae,{page:"pattern"}),(0,y.default)(
".pattern",(0,y.default)("h2","Find words with unknown letters"),u?(0,y.default)(".message",ie("Load\
ing dictionary")):(0,y.default)(".interface",(0,y.default)(".pattern-entry",(0,y.default)("input.pat\
tern-input",{type:"search",autocorrect:"off",autocomplete:"off",autocapitalize:"none",spellcheck:!1,
size:15,value:I,onchange:k=>{let{value:K}=k.currentTarget;y.default.route.set("/pattern/:pattern/:li\
st/:order/:direction/1",{...E.attrs,pattern:K})}}),(0,y.default)("button","Find"),(0,y.default)(".in\
structions",(0,y.default)("h4","Wildcards"),(0,y.default)("div",y.default.trust('Use <span class="le\
tter">.</span> or <span class="letter">?</span> for each unknown letter')),(0,y.default)("div",y.default.
trust('Use <span class="letter">*</span> for any number of unknowns')),(0,y.default)("div",y.default.
trust('<i>Advanced:</i> prefix <span class="letter">~</span> to use a <a href="https://cs.lmu.edu/~r\
ay/notes/regex/" target="_blank">regex</a>'))),(0,y.default)(".list",(0,y.default)("h4","Search"),(0,y.default)(
"div",T("single"," Single words",E.attrs),T("multi"," Multiple words",E.attrs))),(0,y.default)(".ord\
er",(0,y.default)("h4","Show first"),(0,y.default)("div",x("freq","desc"," Common words",E.attrs),x(
"freq","asc"," Obscure words",E.attrs)),(0,y.default)("div",x("length","asc"," Short words",E.attrs),
x("length","desc"," Long words",E.attrs)),(0,y.default)("div",x("a-z","asc"," A \u2013\xA0Z",E.attrs),
x("a-z","desc"," Z \u2013\xA0A",E.attrs))),(0,y.default)(".message",I?h?ie("Searching"):g<0?m[0]:g>0?
`${Q(g)} words found`+(g>ue?` (showing ${Q(O)} \u2013 ${Q(A)})`:""):"No matching words found":"Pleas\
e enter a search pattern above"),!I&&M,g>0&&h===!1&&[P(),(0,y.default)(".matches",m.map(k=>(0,y.default)(
"a.match",{href:`https://www.google.com/search?q="${k}"+definition`,target:"_blank"},k))),P()]),Ee(o))))}}}var D=oe(re(),1);var Cn="-",pe=1e4,Mn=876543;function kn(r,i=10){let s=[];for(let f=0;f<=i;f++)s.push([]);for(let f of r){
let[{length:c}]=f;s[c>i?i:c].push(f)}return s}function Ar(r){let i=!0,s=0,f=!1,c={evaluated:0,working:!1,
anagrams:[]};function o(){c.working=!0;let u=document.querySelector("#anag-input").value;se.find(u,pe,
Mn,nt(async h=>{let m=c;return c=h,D.default.redraw(),!m.working}))}return{view(u){let h=u.attrs.letters===
Cn?"":u.attrs.letters;return(0,D.default)(".page",(0,D.default)(Ae,{page:"anagram"}),(0,D.default)("\
.pattern",(0,D.default)("h2","Find anagrams"),i?(0,D.default)(".message",ie("Loading dictionary")):(0,D.default)(
".interface",(0,D.default)(".pattern-entry",(0,D.default)("input#anag-input",{type:"search",autocorrect:"\
off",autocomplete:"off",autocapitalize:"none",spellcheck:!1,size:15,value:h,disabled:c.working,onchange(m){
let{value:g}=m.currentTarget;D.default.route.set("/anagram/:letters",{...u.attrs,letters:g===""?"-":
g})},onkeyup(m){m.key==="Enter"&&(c.working?c.working=!1:o()),m.redraw=!1}}),c.working?[(0,D.default)(
"button",{onclick(){c.working=!1}},"Stop"),(0,D.default)(".progress",ie(`${Q(c.evaluated)} evaluated`+
(c.evaluated>pe?`, ${Q(pe)} kept`:"")))]:[(0,D.default)("button",{onclick:o},"Find"),c.evaluated!==0&&
(0,D.default)(".progress",`${Q(c.evaluated)} found`+(c.evaluated>pe?`, ${Q(pe)} kept`:""))]),(0,D.default)(
"#grouping",(0,D.default)("label",(0,D.default)("input[type=checkbox]",{checked:f,onchange(m){f=m.currentTarget.
checked}})," Group by word count")),(0,D.default)(".matches",f?kn(c.anagrams).map((m,g)=>m.length>0&&
[(0,D.default)("h3",`${g} words`),m.map(w=>(0,D.default)("span.match",w[0].join(" ")))]):c.anagrams.
map(m=>(0,D.default)("span.match",m[0].join(" "))))),Ee(s," Anagrams are retained and ranked by pref\
erring those where the least common word is more common, those with fewer words, and (only very slig\
htly) those where the mean word is more common.")))},async oninit(){s=await se.getWordsCount(),i=!1,
D.default.redraw()},onremove(){c.working=!1}}}Er.default.route(document.getElementById("main"),"/pattern/-/single/freq/desc/1",{"/pattern/:pattern\
/:list/:order/:direction/:page":xr,"/anagram/:letters":Ar});self.DEV&&new EventSource("/esbuild").addEventListener(
"change",()=>location.reload());
/*! Bundled license information:

comlink/dist/esm/comlink.mjs:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
