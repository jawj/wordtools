(()=>{"use strict";const e=Symbol("Comlink.proxy"),t=Symbol("Comlink.endpoint"),n=Symbol("Comlink.releaseProxy"),r=Symbol("Comlink.thrown"),a=e=>"object"==typeof e&&null!==e||"function"==typeof e,o=new Map([["proxy",{canHandle:t=>a(t)&&t[e],serialize(e){const{port1:t,port2:n}=new MessageChannel;return i(e,t),[n,[n]]},deserialize:e=>(e.start(),s(e,[],undefined))}],["throw",{canHandle:e=>a(e)&&r in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function i(t,n=self){n.addEventListener("message",(function a(o){if(!o||!o.data)return;const{id:c,type:s,path:l}=Object.assign({path:[]},o.data),d=(o.data.argumentList||[]).map(p);let y;try{const n=l.slice(0,-1).reduce(((e,t)=>e[t]),t),r=l.reduce(((e,t)=>e[t]),t);switch(s){case"GET":y=r;break;case"SET":n[l.slice(-1)[0]]=p(o.data.value),y=!0;break;case"APPLY":y=r.apply(n,d);break;case"CONSTRUCT":y=function(t){return Object.assign(t,{[e]:!0})}(new r(...d));break;case"ENDPOINT":{const{port1:e,port2:n}=new MessageChannel;i(t,n),y=function(e,t){return f.set(e,t),e}(e,[e])}break;case"RELEASE":y=void 0;break;default:return}}catch(e){y={value:e,[r]:0}}Promise.resolve(y).catch((e=>({value:e,[r]:0}))).then((e=>{const[t,r]=h(e);n.postMessage(Object.assign(Object.assign({},t),{id:c}),r),"RELEASE"===s&&(n.removeEventListener("message",a),u(n))}))})),n.start&&n.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function c(e){if(e)throw new Error("Proxy has been released and is not useable")}function s(e,r=[],a=function(){}){let o=!1;const i=new Proxy(a,{get(t,a){if(c(o),a===n)return()=>d(e,{type:"RELEASE",path:r.map((e=>e.toString()))}).then((()=>{u(e),o=!0}));if("then"===a){if(0===r.length)return{then:()=>i};const t=d(e,{type:"GET",path:r.map((e=>e.toString()))}).then(p);return t.then.bind(t)}return s(e,[...r,a])},set(t,n,a){c(o);const[i,u]=h(a);return d(e,{type:"SET",path:[...r,n].map((e=>e.toString())),value:i},u).then(p)},apply(n,a,i){c(o);const u=r[r.length-1];if(u===t)return d(e,{type:"ENDPOINT"}).then(p);if("bind"===u)return s(e,r.slice(0,-1));const[f,h]=l(i);return d(e,{type:"APPLY",path:r.map((e=>e.toString())),argumentList:f},h).then(p)},construct(t,n){c(o);const[a,i]=l(n);return d(e,{type:"CONSTRUCT",path:r.map((e=>e.toString())),argumentList:a},i).then(p)}});return i}function l(e){const t=e.map(h);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const f=new WeakMap;function h(e){for(const[t,n]of o)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},f.get(e)||[]]}function p(e){switch(e.type){case"HANDLER":return o.get(e.name).deserialize(e.value);case"RAW":return e.value}}function d(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}var y,v=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function u(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},b=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};function w(){return v(this,void 0,void 0,(function(){return b(this,(function(e){switch(e.label){case 0:return void 0!==y?[3,3]:[4,fetch("words.json")];case 1:return[4,e.sent().json()];case 2:y=e.sent(),e.label=3;case 3:return[2]}}))}))}function g(){return v(this,void 0,void 0,(function(){return b(this,(function(e){switch(e.label){case 0:return[4,w()];case 1:return e.sent(),[2,y]}}))}))}var m,x=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function u(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},E=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};function S(e){return x(this,void 0,void 0,(function(){var t,n,r,a,o,i;return E(this,(function(u){switch(u.label){case 0:return t=e.startsWith("~"),n=t?e:e.toLowerCase().replace(/[^a-z.?*]/g,""),r=t?new RegExp(e.slice(1),"i"):new RegExp("^"+n.replace(/[*]/g,".*").replace(/[?]/g,".")+"$"),[4,g()];case 1:for(i in a=u.sent(),o=[],a)r.test(i)&&o.push(i);return[2,o]}}))}))}var k,A=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function u(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},L=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},P=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},R=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},T=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},j=function(e){return e.split("").sort().join("")};function C(){return A(this,void 0,void 0,(function(){var e,t;return L(this,(function(n){switch(n.label){case 0:return k?[3,2]:(console.log("Generating anagram data structures ..."),k={},[4,g()]);case 1:for(e in n.sent())t=j(e),k[t]||(k[t]=[]),k[t].push(e);console.log("Generated"),n.label=2;case 2:return[2,k]}}))}))}function M(e){return 16843009*((e=(858993459&(e=(0|e)-(e>>>1&1431655765)))+(e>>>2&858993459))+(e>>>4)&252645135)>>>24}function O(e,t,n,r){var a,o,i,u,c,s,l,f,h;return void 0===n&&(n=-1),void 0===r&&(r=0),L(this,(function(p){switch(p.label){case 0:if(n===e)return[2];a=!1;try{for(o=P(t),i=o.next();!i.done;i=o.next())if(u=i.value,0!=(c=r>>u[0]&u[1])&&(s=(1<<M(c))-1,c!==s)){a=!0;break}}catch(e){f={error:e}}finally{try{i&&!i.done&&(h=o.return)&&h.call(o)}finally{if(f)throw f.error}}return a?[3,5]:[4,r];case 1:p.sent(),l=n+1,p.label=2;case 2:return l<e?[5,P(O(e,t,l,r|1<<l))]:[3,5];case 3:p.sent(),p.label=4;case 4:return l++,[3,2];case 5:return[2]}}))}function N(e){var t,n,r,a,o,i,u;return L(this,(function(c){switch(c.label){case 0:c.trys.push([0,5,6,7]),t=P(O(e.length,function(e){for(var t,n=/(.)\1+/g,r=[];t=n.exec(e);){var a=t.index,o=t[0].length;r.push([a,(1<<o)-1])}return r}(e))),n=t.next(),c.label=1;case 1:return n.done?[3,4]:0===(r=n.value)?[3,3]:(a=function(e,t){for(var n=["",""],r=0,a=e.length;r<a;r++)n[t&1<<r?0:1]+=e.charAt(r);return n}(e,r),a[0]<=a[1]?[4,a]:[3,3]);case 2:c.sent(),c.label=3;case 3:return n=t.next(),[3,1];case 4:return[3,7];case 5:return o=c.sent(),i={error:o},[3,7];case 6:try{n&&!n.done&&(u=t.return)&&u.call(t)}finally{if(i)throw i.error}return[7];case 7:return[2]}}))}var z=function(e,t){return e.reduce((function(e,n){return Math.min(e,t[n])}),1/0)},G=0;function W(e,t,n,r,a,o,i,u,c){return void 0===i&&(i=[]),void 0===u&&(u=[]),void 0===c&&(c={nextReport:Date.now()+r}),A(this,void 0,void 0,(function(){var s,l,f,h,p,d,y,v,b,w,g,m,x,E,S,k,A,j,C,M,O,z,D,H,I,U,Y,_,q,F,X,$,B;return L(this,(function(L){switch(L.label){case 0:if(t<=1&&(s=o[e]))try{for(l=P(s),f=l.next();!f.done;f=l.next())if(h=f.value,u.length>0)try{for(U=void 0,p=P(u),d=p.next();!d.done;d=p.next())z=d.value,i.push(T(T([],R(z),!1),[h],!1))}catch(e){U={error:e}}finally{try{d&&!d.done&&(Y=p.return)&&Y.call(p)}finally{if(U)throw U.error}}else i.push([h])}catch(e){H={error:e}}finally{try{f&&!f.done&&(I=l.return)&&I.call(l)}finally{if(H)throw H.error}}if(!(n>1))return[3,10];L.label=1;case 1:L.trys.push([1,8,9,10]),y=P(N(e)),v=y.next(),L.label=2;case 2:return v.done?[3,7]:(b=R(v.value,2),w=b[0],g=b[1],G++,(m=o[w])?G%100!=0?[3,4]:(x=Date.now())>c.nextReport?(E=i.length,S=E>0?i[E-1].join(" "):void 0,[4,a(G,E,S)]):[3,4]:[3,6]);case 3:if(!L.sent())return[2,i];c.nextReport=x+r,L.label=4;case 4:k=[];try{for(F=void 0,A=P(m),j=A.next();!j.done;j=A.next())if(C=j.value,u.length>0)try{for($=void 0,M=P(u),O=M.next();!O.done;O=M.next())z=O.value,k.push(T(T([],R(z),!1),[C],!1))}catch(e){$={error:e}}finally{try{O&&!O.done&&(B=M.return)&&B.call(M)}finally{if($)throw $.error}}else k.push([C])}catch(e){F={error:e}}finally{try{j&&!j.done&&(X=A.return)&&X.call(A)}finally{if(F)throw F.error}}return[4,W(g,t-1,n-1,r,a,o,i,k,c)];case 5:L.sent(),L.label=6;case 6:return v=y.next(),[3,2];case 7:return[3,10];case 8:return D=L.sent(),_={error:D},[3,10];case 9:try{v&&!v.done&&(q=y.return)&&q.call(y)}finally{if(_)throw _.error}return[7];case 10:return[2,i]}}))}))}var D={wordsMatchingPattern:function(e,t,n,r,a){return x(this,void 0,void 0,(function(){var o,i,u,c,s;return E(this,(function(l){switch(l.label){case 0:return l.trys.push([0,4,,5]),(null==m?void 0:m.pattern)!==e?[3,1]:(i=m.results,[3,3]);case 1:return[4,S(e)];case 2:i=l.sent(),l.label=3;case 3:return o=i,[3,5];case 4:return u=l.sent(),o=[u.message],m={pattern:e,order:t,direction:n,results:o},[2,{count:-1,results:o}];case 5:return(null==m?void 0:m.pattern)===e&&m.order===t?[3,7]:[4,g()];case 6:return c=l.sent(),s="asc"===n?1:-1,o.sort("freq"===t?function(e,t){return s*(c[e]-c[t])}:"length"===t?function(e,t){return s*(e.length-t.length||c[t]-c[e])}:function(e,t){return s*e.localeCompare(t)}),[3,8];case 7:m.direction!==n&&o.reverse(),l.label=8;case 8:return m={pattern:e,order:t,direction:n,results:o},[2,{count:o.length,results:o.slice(r,r+a)}]}}))}))},findAnagrams:function(e,t,n,r,a){return A(this,void 0,void 0,(function(){var o,i,u,c;return L(this,(function(s){switch(s.label){case 0:return G=0,o=j(function(e){return e.toLowerCase().replace(/[^a-z]+/g,"")}(e)),[4,C()];case 1:return i=s.sent(),[4,W(o,t,n,r,a,i)];case 2:return u=s.sent(),[4,g()];case 3:return c=s.sent(),u.sort((function(e,t){return z(t,c)-z(e,c)})),[2,u]}}))}))},loadWordWeights:w,getWordsCount:function(){return v(this,void 0,void 0,(function(){return b(this,(function(e){switch(e.label){case 0:return[4,w()];case 1:return e.sent(),[2,Object.keys(y).length]}}))}))}};i(D)})();