(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const tt="https://js-headquaters.github.io/beast-memory-game/back-dark-93c23538.jpg",it="https://js-headquaters.github.io/beast-memory-game/back-light-3b72eb17.jpg";var ie,h,Be,Oe,j,ge,Ne,le,E={},Ee=[],nt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,fe=Array.isArray;function x(t,e){for(var i in e)t[i]=e[i];return t}function Fe(t){var e=t.parentNode;e&&e.removeChild(t)}function st(t,e,i){var n,r,s,a={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?ie.call(arguments,2):i),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)a[s]===void 0&&(a[s]=t.defaultProps[s]);return J(t,a,n,r,null)}function J(t,e,i,n,r){var s={type:t,props:e,key:i,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Be};return r==null&&h.vnode!=null&&h.vnode(s),s}function ne(t){return t.children}function G(t,e){this.props=t,this.context=e}function q(t,e){if(e==null)return t.__?q(t.__,t.__.__k.indexOf(t)+1):null;for(var i;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null)return i.__e;return typeof t.type=="function"?q(t):null}function De(t){var e,i;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((i=t.__k[e])!=null&&i.__e!=null){t.__e=t.__c.base=i.__e;break}return De(t)}}function ye(t){(!t.__d&&(t.__d=!0)&&j.push(t)&&!Z.__r++||ge!==h.debounceRendering)&&((ge=h.debounceRendering)||Ne)(Z)}function Z(){var t,e,i,n,r,s,a,l,c;for(j.sort(le);t=j.shift();)t.__d&&(e=j.length,n=void 0,r=void 0,s=void 0,l=(a=(i=t).__v).__e,(c=i.__P)&&(n=[],r=[],(s=x({},a)).__v=a.__v+1,de(c,a,s,i.__n,c.ownerSVGElement!==void 0,a.__h!=null?[l]:null,n,l??q(a),a.__h,r),qe(n,a,r),a.__e!=l&&De(a)),j.length>e&&j.sort(le));Z.__r=0}function He(t,e,i,n,r,s,a,l,c,p,v){var o,b,f,u,d,O,m,y,M,T=0,C=n&&n.__k||Ee,H=C.length,I=H,N=e.length;for(i.__k=[],o=0;o<N;o++)(u=i.__k[o]=(u=e[o])==null||typeof u=="boolean"||typeof u=="function"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?J(null,u,null,null,u):fe(u)?J(ne,{children:u},null,null,null):u.__b>0?J(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)!=null?(u.__=i,u.__b=i.__b+1,(y=rt(u,C,m=o+T,I))===-1?f=E:(f=C[y]||E,C[y]=void 0,I--),de(t,u,f,r,s,a,l,c,p,v),d=u.__e,(b=u.ref)&&f.ref!=b&&(f.ref&&ve(f.ref,null,u),v.push(b,u.__c||d,u)),d!=null&&(O==null&&(O=d),(M=f===E||f.__v===null)?y==-1&&T--:y!==m&&(y===m+1?T++:y>m?I>N-m?T+=y-m:T--:T=y<m&&y==m-1?y-m:0),m=o+T,typeof u.type!="function"||y===m&&f.__k!==u.__k?typeof u.type=="function"||y===m&&!M?u.__d!==void 0?(c=u.__d,u.__d=void 0):c=d.nextSibling:c=Ue(t,d,c):c=Ge(u,c,t),typeof i.type=="function"&&(i.__d=c))):(f=C[o])&&f.key==null&&f.__e&&(f.__e==c&&(c=q(f)),ce(f,f,!1),C[o]=null);for(i.__e=O,o=H;o--;)C[o]!=null&&(typeof i.type=="function"&&C[o].__e!=null&&C[o].__e==i.__d&&(i.__d=C[o].__e.nextSibling),ce(C[o],C[o]))}function Ge(t,e,i){for(var n,r=t.__k,s=0;r&&s<r.length;s++)(n=r[s])&&(n.__=t,e=typeof n.type=="function"?Ge(n,e,i):Ue(i,n.__e,e));return e}function Ue(t,e,i){return i==null||i.parentNode!==t?t.insertBefore(e,null):e==i&&e.parentNode!=null||t.insertBefore(e,i),e.nextSibling}function rt(t,e,i,n){var r=t.key,s=t.type,a=i-1,l=i+1,c=e[i];if(c===null||c&&r==c.key&&s===c.type)return i;if(n>(c!=null?1:0))for(;a>=0||l<e.length;){if(a>=0){if((c=e[a])&&r==c.key&&s===c.type)return a;a--}if(l<e.length){if((c=e[l])&&r==c.key&&s===c.type)return l;l++}}return-1}function ot(t,e,i,n,r){var s;for(s in i)s==="children"||s==="key"||s in e||Q(t,s,null,i[s],n);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||i[s]===e[s]||Q(t,s,e[s],i[s],n)}function be(t,e,i){e[0]==="-"?t.setProperty(e,i??""):t[e]=i==null?"":typeof i!="number"||nt.test(e)?i:i+"px"}function Q(t,e,i,n,r){var s;e:if(e==="style")if(typeof i=="string")t.style.cssText=i;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)i&&e in i||be(t.style,e,"");if(i)for(e in i)n&&i[e]===n[e]||be(t.style,e,i[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=i,i?n||t.addEventListener(e,s?Se:Ce,s):t.removeEventListener(e,s?Se:Ce,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=i??"";break e}catch{}typeof i=="function"||(i==null||i===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,i))}}function Ce(t){return this.l[t.type+!1](h.event?h.event(t):t)}function Se(t){return this.l[t.type+!0](h.event?h.event(t):t)}function de(t,e,i,n,r,s,a,l,c,p){var v,o,b,f,u,d,O,m,y,M,T,C,H,I,N,$=e.type;if(e.constructor!==void 0)return null;i.__h!=null&&(c=i.__h,l=e.__e=i.__e,e.__h=null,s=[l]),(v=h.__b)&&v(e);e:if(typeof $=="function")try{if(m=e.props,y=(v=$.contextType)&&n[v.__c],M=v?y?y.props.value:v.__:n,i.__c?O=(o=e.__c=i.__c).__=o.__E:("prototype"in $&&$.prototype.render?e.__c=o=new $(m,M):(e.__c=o=new G(m,M),o.constructor=$,o.render=lt),y&&y.sub(o),o.props=m,o.state||(o.state={}),o.context=M,o.__n=n,b=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),$.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=x({},o.__s)),x(o.__s,$.getDerivedStateFromProps(m,o.__s))),f=o.props,u=o.state,o.__v=e,b)$.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if($.getDerivedStateFromProps==null&&m!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(m,M),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(m,o.__s,M)===!1||e.__v===i.__v)){for(e.__v!==i.__v&&(o.props=m,o.state=o.__s,o.__d=!1),e.__e=i.__e,e.__k=i.__k,e.__k.forEach(function(R){R&&(R.__=e)}),T=0;T<o._sb.length;T++)o.__h.push(o._sb[T]);o._sb=[],o.__h.length&&a.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(m,o.__s,M),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,u,d)})}if(o.context=M,o.props=m,o.__P=t,o.__e=!1,C=h.__r,H=0,"prototype"in $&&$.prototype.render){for(o.state=o.__s,o.__d=!1,C&&C(e),v=o.render(o.props,o.state,o.context),I=0;I<o._sb.length;I++)o.__h.push(o._sb[I]);o._sb=[]}else do o.__d=!1,C&&C(e),v=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++H<25);o.state=o.__s,o.getChildContext!=null&&(n=x(x({},n),o.getChildContext())),b||o.getSnapshotBeforeUpdate==null||(d=o.getSnapshotBeforeUpdate(f,u)),He(t,fe(N=v!=null&&v.type===ne&&v.key==null?v.props.children:v)?N:[N],e,i,n,r,s,a,l,c,p),o.base=e.__e,e.__h=null,o.__h.length&&a.push(o),O&&(o.__E=o.__=null)}catch(R){e.__v=null,(c||s!=null)&&(e.__e=l,e.__h=!!c,s[s.indexOf(l)]=null),h.__e(R,e,i)}else s==null&&e.__v===i.__v?(e.__k=i.__k,e.__e=i.__e):e.__e=at(i.__e,e,i,n,r,s,a,c,p);(v=h.diffed)&&v(e)}function qe(t,e,i){for(var n=0;n<i.length;n++)ve(i[n],i[++n],i[++n]);h.__c&&h.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(s){s.call(r)})}catch(s){h.__e(s,r.__v)}})}function at(t,e,i,n,r,s,a,l,c){var p,v,o,b=i.props,f=e.props,u=e.type,d=0;if(u==="svg"&&(r=!0),s!=null){for(;d<s.length;d++)if((p=s[d])&&"setAttribute"in p==!!u&&(u?p.localName===u:p.nodeType===3)){t=p,s[d]=null;break}}if(t==null){if(u===null)return document.createTextNode(f);t=r?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,f.is&&f),s=null,l=!1}if(u===null)b===f||l&&t.data===f||(t.data=f);else{if(s=s&&ie.call(t.childNodes),v=(b=i.props||E).dangerouslySetInnerHTML,o=f.dangerouslySetInnerHTML,!l){if(s!=null)for(b={},d=0;d<t.attributes.length;d++)b[t.attributes[d].name]=t.attributes[d].value;(o||v)&&(o&&(v&&o.__html==v.__html||o.__html===t.innerHTML)||(t.innerHTML=o&&o.__html||""))}if(ot(t,f,b,r,l),o)e.__k=[];else if(He(t,fe(d=e.props.children)?d:[d],e,i,n,r&&u!=="foreignObject",s,a,s?s[0]:i.__k&&q(i,0),l,c),s!=null)for(d=s.length;d--;)s[d]!=null&&Fe(s[d]);l||("value"in f&&(d=f.value)!==void 0&&(d!==t.value||u==="progress"&&!d||u==="option"&&d!==b.value)&&Q(t,"value",d,b.value,!1),"checked"in f&&(d=f.checked)!==void 0&&d!==t.checked&&Q(t,"checked",d,b.checked,!1))}return t}function ve(t,e,i){try{typeof t=="function"?t(e):t.current=e}catch(n){h.__e(n,i)}}function ce(t,e,i){var n,r;if(h.unmount&&h.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||ve(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){h.__e(s,e)}n.base=n.__P=null,t.__c=void 0}if(n=t.__k)for(r=0;r<n.length;r++)n[r]&&ce(n[r],e,i||typeof t.type!="function");i||t.__e==null||Fe(t.__e),t.__=t.__e=t.__d=void 0}function lt(t,e,i){return this.constructor(t,i)}function ct(t,e,i){var n,r,s,a;h.__&&h.__(t,e),r=(n=typeof i=="function")?null:i&&i.__k||e.__k,s=[],a=[],de(e,t=(!n&&i||e).__k=st(ne,null,[t]),r||E,E,e.ownerSVGElement!==void 0,!n&&i?[i]:r?null:e.firstChild?ie.call(e.childNodes):null,s,!n&&i?i:r?r.__e:e.firstChild,n,a),qe(s,t,a)}ie=Ee.slice,h={__e:function(t,e,i,n){for(var r,s,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(t)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,n||{}),a=r.__d),a)return r.__E=r}catch(l){t=l}throw t}},Be=0,Oe=function(t){return t!=null&&t.constructor===void 0},G.prototype.setState=function(t,e){var i;i=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof t=="function"&&(t=t(x({},i),this.props)),t&&x(i,t),t!=null&&this.__v&&(e&&this._sb.push(e),ye(this))},G.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ye(this))},G.prototype.render=ne,j=[],Ne=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,le=function(t,e){return t.__v.__b-e.__v.__b},Z.__r=0;var ue,k,oe,we,ke=0,We=[],Y=[],Te=h.__b,$e=h.__r,Me=h.diffed,Ae=h.__c,Ie=h.unmount;function ut(t,e){h.__h&&h.__h(k,t,ke||e),ke=0;var i=k.__H||(k.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:Y}),i.__[t]}function Ve(t,e){var i=ut(ue++,7);return ft(i.__H,e)?(i.__V=t(),i.i=e,i.__h=t,i.__V):i.__}function _t(){for(var t;t=We.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(K),t.__H.__h.forEach(_e),t.__H.__h=[]}catch(e){t.__H.__h=[],h.__e(e,t.__v)}}h.__b=function(t){k=null,Te&&Te(t)},h.__r=function(t){$e&&$e(t),ue=0;var e=(k=t.__c).__H;e&&(oe===k?(e.__h=[],k.__h=[],e.__.forEach(function(i){i.__N&&(i.__=i.__N),i.__V=Y,i.__N=i.i=void 0})):(e.__h.forEach(K),e.__h.forEach(_e),e.__h=[],ue=0)),oe=k},h.diffed=function(t){Me&&Me(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(We.push(e)!==1&&we===h.requestAnimationFrame||((we=h.requestAnimationFrame)||ht)(_t)),e.__H.__.forEach(function(i){i.i&&(i.__H=i.i),i.__V!==Y&&(i.__=i.__V),i.i=void 0,i.__V=Y})),oe=k=null},h.__c=function(t,e){e.some(function(i){try{i.__h.forEach(K),i.__h=i.__h.filter(function(n){return!n.__||_e(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],h.__e(n,i.__v)}}),Ae&&Ae(t,e)},h.unmount=function(t){Ie&&Ie(t);var e,i=t.__c;i&&i.__H&&(i.__H.__.forEach(function(n){try{K(n)}catch(r){e=r}}),i.__H=void 0,e&&h.__e(e,i.__v))};var xe=typeof requestAnimationFrame=="function";function ht(t){var e,i=function(){clearTimeout(n),xe&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(i,100);xe&&(e=requestAnimationFrame(i))}function K(t){var e=k,i=t.__c;typeof i=="function"&&(t.__c=void 0,i()),k=e}function _e(t){var e=k;t.__c=t.__(),k=e}function ft(t,e){return!t||t.length!==e.length||e.some(function(i,n){return i!==t[n]})}function se(){throw new Error("Cycle detected")}var dt=Symbol.for("preact-signals");function me(){if(F>1)F--;else{for(var t,e=!1;U!==void 0;){var i=U;for(U=void 0,he++;i!==void 0;){var n=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&Re(i))try{i.c()}catch(r){e||(t=r,e=!0)}i=n}}if(he=0,F--,e)throw t}}var g=void 0,U=void 0,F=0,he=0,X=0;function ze(t){if(g!==void 0){var e=t.n;if(e===void 0||e.t!==g)return e={i:0,S:t,p:g.s,n:void 0,t:g,e:void 0,x:void 0,r:e},g.s!==void 0&&(g.s.n=e),g.s=e,t.n=e,32&g.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=g.s,e.n=void 0,g.s.n=e,g.s=e),e}}function w(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}w.prototype.brand=dt;w.prototype.h=function(){return!0};w.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};w.prototype.U=function(t){if(this.t!==void 0){var e=t.e,i=t.x;e!==void 0&&(e.x=i,t.e=void 0),i!==void 0&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}};w.prototype.subscribe=function(t){var e=this;return P(function(){var i=e.value,n=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=n}})};w.prototype.valueOf=function(){return this.value};w.prototype.toString=function(){return this.value+""};w.prototype.toJSON=function(){return this.value};w.prototype.peek=function(){return this.v};Object.defineProperty(w.prototype,"value",{get:function(){var t=ze(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(g instanceof L&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){he>100&&se(),this.v=t,this.i++,X++,F++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{me()}}}});function S(t){return new w(t)}function Re(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Je(t){for(var e=t.s;e!==void 0;e=e.n){var i=e.S.n;if(i!==void 0&&(e.r=i),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Ye(t){for(var e=t.s,i=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):i=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}t.s=i}function L(t){w.call(this,void 0),this.x=t,this.s=void 0,this.g=X-1,this.f=4}(L.prototype=new w).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===X))return!0;if(this.g=X,this.f|=1,this.i>0&&!Re(this))return this.f&=-2,!0;var t=g;try{Je(this),g=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return g=t,Ye(this),this.f&=-2,!0};L.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}w.prototype.S.call(this,t)};L.prototype.U=function(t){if(this.t!==void 0&&(w.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};L.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};L.prototype.peek=function(){if(this.h()||se(),16&this.f)throw this.v;return this.v};Object.defineProperty(L.prototype,"value",{get:function(){1&this.f&&se();var t=ze(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function A(t){return new L(t)}function Ke(t){var e=t.u;if(t.u=void 0,typeof e=="function"){F++;var i=g;g=void 0;try{e()}catch(n){throw t.f&=-2,t.f|=8,pe(t),n}finally{g=i,me()}}}function pe(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Ke(t)}function vt(t){if(g!==this)throw new Error("Out-of-order effect");Ye(this),g=t,this.f&=-2,8&this.f&&pe(this),me()}function W(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}W.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};W.prototype.S=function(){1&this.f&&se(),this.f|=1,this.f&=-9,Ke(this),Je(this),F++;var t=g;return g=this,vt.bind(this,t)};W.prototype.N=function(){2&this.f||(this.f|=2,this.o=U,U=this)};W.prototype.d=function(){this.f|=8,1&this.f||pe(this)};function P(t){var e=new W(t);try{e.c()}catch(i){throw e.d(),i}return e.d.bind(e)}var ae;function D(t,e){h[t]=e.bind(null,h[t]||function(){})}function ee(t){ae&&ae(),ae=t&&t.S()}function Ze(t){var e=this,i=t.data,n=Qe(i);n.value=i;var r=Ve(function(){for(var s=e.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return e.__$u.c=function(){var a;!Oe(r.peek())&&((a=e.base)==null?void 0:a.nodeType)===3?e.base.data=r.peek():(e.__$f|=1,e.setState({}))},A(function(){var a=n.value.value;return a===0?0:a===!0?"":a||""})},[]);return r.value}Ze.displayName="_st";Object.defineProperties(w.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Ze},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});D("__b",function(t,e){if(typeof e.type=="string"){var i,n=e.props;for(var r in n)if(r!=="children"){var s=n[r];s instanceof w&&(i||(e.__np=i={}),i[r]=s,n[r]=s.peek())}}t(e)});D("__r",function(t,e){ee();var i,n=e.__c;n&&(n.__$f&=-2,(i=n.__$u)===void 0&&(n.__$u=i=function(r){var s;return P(function(){s=this}),s.c=function(){n.__$f|=1,n.setState({})},s}())),ee(i),t(e)});D("__e",function(t,e,i,n){ee(),t(e,i,n)});D("diffed",function(t,e){ee();var i;if(typeof e.type=="string"&&(i=e.__e)){var n=e.__np,r=e.props;if(n){var s=i.U;if(s)for(var a in s){var l=s[a];l!==void 0&&!(a in n)&&(l.d(),s[a]=void 0)}else i.U=s={};for(var c in n){var p=s[c],v=n[c];p===void 0?(p=mt(i,c,v,r),s[c]=p):p.o(v,r)}}}t(e)});function mt(t,e,i,n){var r=e in t&&t.ownerSVGElement===void 0,s=S(i);return{o:function(a,l){s.value=a,n=l},d:P(function(){var a=s.value.value;n[e]!==a&&(n[e]=a,r?t[e]=a:a?t.setAttribute(e,a):t.removeAttribute(e))})}}D("unmount",function(t,e){if(typeof e.type=="string"){var i=e.__e;if(i){var n=i.U;if(n){i.U=void 0;for(var r in n){var s=n[r];s&&s.d()}}}}else{var a=e.__c;if(a){var l=a.__$u;l&&(a.__$u=void 0,l.d())}}t(e)});D("__h",function(t,e,i,n){(n<3||n===9)&&(e.__$f|=2),t(e,i,n)});G.prototype.shouldComponentUpdate=function(t,e){var i=this.__$u;if(!(i&&i.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var n in e)return!0;for(var r in t)if(r!=="__source"&&t[r]!==this.props[r])return!0;for(var s in this.props)if(!(s in t))return!0;return!1};function Qe(t){return Ve(function(){return S(t)},[])}function Xe(){return window.Telegram.WebApp.MainButton}function pt(){return JSON.stringify(window.Telegram,null,2)}function gt(){return window.Telegram.WebApp.platform!=="unknown"}function yt(){return window.Telegram.WebApp}function Le(){return window.Telegram.WebApp.colorScheme}class bt{constructor(){this.isMenuOpen=S(!1),this.isMenuButtonVisible=S(!0),this.debugClickCount=S(0),this.mainButton=Xe(),this.isDebugActive=A(()=>this.debugClickCount.value>3),this.menuButtonText=A(()=>this.isMenuOpen.value?"Close":"Menu"),this.toggleMenu=()=>{this.isMenuOpen.value=!this.isMenuOpen.value},this.hideMenu=()=>{this.isMenuButtonVisible.value=!1},this.showMenu=()=>{this.isMenuButtonVisible.value=!0},this.incrementDebugClickCount=()=>{this.debugClickCount.value+=1},this.mainButton.onClick(this.toggleMenu),P(()=>{this.mainButton.setText(this.menuButtonText.value)}),P(()=>{this.isMenuButtonVisible.value?this.mainButton.show():this.mainButton.hide()})}}const te=new bt,Ct=["bear","bee","cat","chicken","dog","frog","hedgehog","lion","monkey","mouse","panda","pig","rabbit","sheep","turtle"],St=new Map([[1,{horizontalCardsCount:3,pairsCount:3}],[2,{horizontalCardsCount:4,pairsCount:6}],[3,{horizontalCardsCount:4,pairsCount:8}],[4,{horizontalCardsCount:4,pairsCount:10}],[5,{horizontalCardsCount:4,pairsCount:12}],[6,{horizontalCardsCount:5,pairsCount:15}]]);class wt{constructor(e,i){this.gameStatisticService=e,this.gameLevelService=i,this.cards=S([]),this.horizontalCardsCount=S(0),this.verticalCardsCount=S(0),this.currentState=S("init"),this.openCardsIds=S([]),this.cardsFlipCount=S(0),this.cardsMap=A(()=>this.cards.value.reduce((n,r)=>(n.set(r.id,r),n),new Map)),this.timeSpentInSeconds=A(()=>{const n=this.startTimestamp.value,s=this.currentTimestamp.value-n;return s>0?Math.floor(s/1e3):0}),this.startTimestamp=S(null),this.currentTimestamp=S(null),this.start=()=>{this.setState("run")},this.openCard=n=>{this.currentState.value!=="run"||!n.isActive||this.openCardsIds.value.length>=2||this.isCardOpen(n)||(this.openCardsIds.value=[...this.openCardsIds.value,n.id],this.cardsFlipCount.value+=1,!(this.openCardsIds.value.length<2)&&this.closeCards())},this.isCardOpen=n=>this.openCardsIds.value.includes(n.id),this.startTimer=()=>{this.timer=setInterval(()=>{this.currentTimestamp.value=Date.now()},1e3)},this.stopTimer=()=>{clearInterval(this.timer)},this.resetTimer=()=>{this.startTimestamp.value=Date.now()},this.start()}closeCards(){const e=this.cardsMap.value,i=this.openCardsIds.value,n=e.get(i[0]),r=e.get(i[1]),s=n.animalType===r.animalType;setTimeout(()=>{s&&(n.isActive=!1,r.isActive=!1,window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy"),this.cards.value.every(a=>!a.isActive)?(window.Telegram.WebApp.HapticFeedback.notificationOccurred("success"),this.setState("game_over")):this.cards.value=[...this.cards.value]),this.openCardsIds.value=[]},1e3)}createGameCards(e){const i=(l,c)=>({animalType:l,isActive:!0,id:`${l}-${c}`}),n=this.getRandomAnimalTypes(e),r=n.map(l=>i(l,1)),s=n.map(l=>i(l,2));return this.getShuffledArray([...r,...s])}getShuffledArray(e){const i=[...e];for(let n=i.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[i[n],i[r]]=[i[r],i[n]]}return i}getRandomAnimalTypes(e){return this.getShuffledArray(Ct).slice(0,e)}setState(e){if(e==="run"){this.resetTimer(),this.startTimer(),te.showMenu(),this.openCardsIds.value=[],this.cardsFlipCount.value=0;const{horizontalCardsCount:i,pairsCount:n}=St.get(this.gameLevelService.gameLevel.value);this.cards.value=this.createGameCards(n),this.horizontalCardsCount.value=i,this.verticalCardsCount.value=this.cards.value.length/i}e==="game_over"&&(this.stopTimer(),te.hideMenu(),this.gameStatisticService.addGameStatistic({timeSpentInSeconds:this.timeSpentInSeconds.value,cardFlipsCount:this.cardsFlipCount.value})),this.currentState.value=e}formatTime(e){const i=a=>a.toString().padStart(2,"0"),n=Math.floor(e/1e3);let r=i(Math.floor(n/60));r=r.length>2?"99":r;const s=i(n%60);return`${r}:${s}`}}class B{static hasTelegramAPI(){return!!window.Telegram?.WebApp?.CloudStorage&&window.Telegram.WebApp.isVersionAtLeast("6.9")}static async setItem(e,i){if(!B.hasTelegramAPI()){localStorage.setItem(e,i);return}return new Promise((n,r)=>{window.Telegram.WebApp.CloudStorage.setItem(e,i,(s,a)=>{if(s){r(s);return}n(a)})})}static async getItem(e){return B.hasTelegramAPI()?new Promise((i,n)=>{window.Telegram.WebApp.CloudStorage.getItem(e,(r,s)=>{if(r){n(r);return}i(s)})}):localStorage.getItem(e)}}const kt=5;class Tt{constructor(e){this.gameLevelService=e,this.statistic=S({}),this.lastGameStatistic=S(null),this.averageTimeSpentInSeconds=A(()=>{if(!this.gameLevelService.gameLevel.value)return null;const i=this.statistic.value[this.gameLevelService.gameLevel.value]||[];if(i.length===0)return null;const n=i.reduce((r,s)=>r+=s.timeSpentInSeconds,0);return Math.floor(n/i.length)}),this.averageCardFlipsCount=A(()=>{if(!this.gameLevelService.gameLevel.value)return null;const i=this.statistic.value[this.gameLevelService.gameLevel.value]||[];if(i.length===0)return null;const n=i.reduce((r,s)=>r+=s.cardFlipsCount,0);return Math.floor(n/i.length)}),this.timeSpentMessage=A(()=>{const{timeSpentInSeconds:i}=this.lastGameStatistic.value;return this.getTimeSpentMessage(i,this.averageTimeSpentInSeconds.value)}),this.cardFlipsCountMessage=A(()=>{const{cardFlipsCount:i}=this.lastGameStatistic.value;return this.getCardFlipsCountMessage(i,this.averageCardFlipsCount.value)}),this.addGameStatistic=async i=>{const n=this.gameLevelService.gameLevel.value;this.lastGameStatistic.value=i,this.statistic.value={...this.statistic.value,[n]:[i,...this.statistic.value?.[n]||[]].slice(0,kt)},await $t(this.statistic.value)},this.loadGameStatistic=async()=>{this.statistic.value=await Mt()}}getTimeSpentMessage(e,i){let n=`You completed this round in ${e} seconds.`;const r=i-e;return r>0?n+=` That's ${r} seconds faster than your average time.`:r<0&&(n+=` You're just a bit off from your average of ${i} seconds. Keep practicing and you'll surely beat it next time!`),n}getCardFlipsCountMessage(e,i){let n=`You finished the level with ${e} card flips`;const r=i-e;return r>0?n+=` which is ${r} less than your average`:r<0&&(n+=` You're just a few flips away from your average of ${i}. Keep going, and you'll hit it or even do better next time!`),n}}async function $t(t){await B.setItem("results",JSON.stringify(t)),console.log(">> persistGameStatisticsByLevel",JSON.stringify(t))}async function Mt(){const t=await B.getItem("results")||"{}";return console.log(">> getResultsStorage: resultsAsString",t),JSON.parse(t)}class At{constructor(){this.maxDifficulty=6,this.gameLevel=S(1),this.loadLevel=async()=>{const e=Number(await B.getItem("level"));e&&(this.gameLevel.value=e),P(async()=>{await B.setItem("level",String(this.gameLevel.value))})},this.increaseLevel=()=>{const e=this.gameLevel.value+1;return e<=this.maxDifficulty?(this.gameLevel.value=e,!0):!1},this.degreesLevel=()=>{const e=this.gameLevel.value-1;return e>0?(this.gameLevel.value=e,!0):!1},this.isMaxLevel=()=>this.gameLevel.value===this.maxDifficulty}}const It={themeBackground:"rgba(234, 231, 242, 1)",themeModalBackground:"rgba(255, 255, 255, 0.8)",themePrimaryColor:"rgba(110, 72, 170, 1)",themeAccentColor:"rgba(148, 0, 211, 0.48)",themeButtonBackground:"rgba(181, 161, 214, 1)",themeTextMainColor:"rgba(20, 12, 33, 1)",themeTextHighlightColor:"rgba(75, 0, 130, 1)",themeShadowColor:"rgba(148, 0, 211, 0.33)",themeBorderColor:"rgba(110, 72, 170, 0.53)"},xt={themeBackground:"rgba(20, 12, 33, 1)",themeModalBackground:"rgba(30, 0, 60, 1)",themePrimaryColor:"rgba(110, 72, 170, 1)",themeAccentColor:"rgba(148, 0, 211, 1)",themeButtonBackground:"rgba(75, 0, 130, 1)",themeTextMainColor:"rgba(224, 191, 254, 1)",themeTextHighlightColor:"rgba(255, 204, 255, 1)",themeShadowColor:"rgba(206, 2, 255, 0.67)",themeBorderColor:"rgba(206, 2, 255, 0.67)"};class Lt{constructor(){this.theme=S(Le()),this.themeProperties=A(()=>this.theme.value==="light"?It:xt),this.mainButton=Xe(),this.webApp=yt(),this.setTheme=e=>{this.theme.value=e},this.toggleTheme=()=>{this.theme.value=this.theme.value==="light"?"dark":"light"},P(()=>{const{themeAccentColor:e,themeTextMainColor:i}=this.themeProperties.value;this.mainButton.setParams({text_color:i,color:e}),this.applyTheme(this.themeProperties.value)}),this.webApp.onEvent("themeChanged",()=>{this.setTheme(Le())})}applyTheme(e){const i=document.documentElement;for(const[n,r]of Object.entries(e)){const s=`--${this.camelToKebab(n)}`;i.style.setProperty(s,r)}}camelToKebab(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}}const et=new Lt,V=new At,re=new Tt(V);await Promise.all([await V.loadLevel(),await re.loadGameStatistic()]);const z=new wt(re,V),jt="https://js-headquaters.github.io/beast-memory-game/bear-2a024f96.jpg",Pt="https://js-headquaters.github.io/beast-memory-game/bee-aab93015.jpg",Bt="https://js-headquaters.github.io/beast-memory-game/cat-3b5927fa.jpg",Ot="https://js-headquaters.github.io/beast-memory-game/chicken-bbdea4b0.jpg",Nt="https://js-headquaters.github.io/beast-memory-game/dog-05a67f24.jpg",Et="https://js-headquaters.github.io/beast-memory-game/frog-6f66e0e1.jpg",Ft="https://js-headquaters.github.io/beast-memory-game/hedgehog-23945674.jpg",Dt="https://js-headquaters.github.io/beast-memory-game/lion-5ad0dad5.jpg",Ht="https://js-headquaters.github.io/beast-memory-game/monkey-0ff29deb.jpg",Gt="https://js-headquaters.github.io/beast-memory-game/mouse-635bb8de.jpg",Ut="https://js-headquaters.github.io/beast-memory-game/panda-03212336.jpg",qt="https://js-headquaters.github.io/beast-memory-game/pig-a81ff79f.jpg",Wt="https://js-headquaters.github.io/beast-memory-game/rabbit-611b5470.jpg",Vt="https://js-headquaters.github.io/beast-memory-game/sheep-31b0667b.jpg",zt="https://js-headquaters.github.io/beast-memory-game/turtle-61d81b79.jpg",Rt=new Map([["bear",jt],["bee",Pt],["cat",Bt],["chicken",Ot],["dog",Nt],["frog",Et],["hedgehog",Ft],["lion",Dt],["monkey",Ht],["mouse",Gt],["panda",Ut],["pig",qt],["rabbit",Vt],["sheep",Wt],["turtle",zt]]);var Jt=0;function _(t,e,i,n,r,s){var a,l,c={};for(l in e)l=="ref"?a=e[l]:c[l]=e[l];var p={type:t,props:c,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Jt,__source:r,__self:s};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)c[l]===void 0&&(c[l]=a[l]);return h.vnode&&h.vnode(p),p}function Yt(t){const{openCard:e,isCardOpen:i}=z,{theme:n}=et,r=()=>{e(t)};return _("div",{class:(a=>`game-card ${i(a)&&"game-card_open"} ${a.isActive&&"game-card_active"}`)(t),onClick:r,children:_("div",{class:"game-card__inner",children:[_("div",{class:"game-card__backing",children:_("img",{class:"game-card__backing-image",src:n.value==="dark"?tt:it,alt:"card backing",loading:"eager"})}),_("div",{class:"game-card__animal",children:_("img",{class:"game-card__animal-image",src:Rt.get(t.animalType),alt:t.animalType})})]})})}function Kt(){const{cards:t}=z;return _("div",{class:"game-field",children:_("div",{class:"game-field__cards",children:t.value.map(e=>_(Yt,{...e}))})})}const je="N/A";function Zt(){const{increaseLevel:t,degreesLevel:e,gameLevel:i}=V,{incrementDebugClickCount:n,isDebugActive:r}=te,{averageCardFlipsCount:s,averageTimeSpentInSeconds:a}=re,{start:l}=z,{toggleTheme:c,theme:p}=et,v=()=>{t()&&l()},o=()=>{e()&&l()};return _("div",{class:"game-menu",children:[_("div",{onClick:n,class:"game-menu__header",children:"Settings"}),_("div",{class:"game-menu__item",children:[_("div",{class:"game-menu__item-name",children:"Difficulty:"}),_("div",{class:"game-menu__item-value",children:[_("button",{className:"game-menu__level-diff-button",onClick:o,children:"-"}),_("span",{children:i.value}),_("button",{className:"game-menu__level-diff-button",onClick:v,children:"+"})]})]}),_("div",{class:"game-menu__item",children:[_("div",{class:"game-menu__item-name",children:"Theme:"}),_("div",{class:"game-menu__item-value",children:_("button",{className:"game-menu__level-diff-button",onClick:c,children:p.value})})]}),_("div",{class:"game-menu__header",children:"Statistic"}),_("div",{class:"game-menu__item",children:[_("div",{class:"game-menu__item-name",children:"Average time:"}),_("div",{class:"game-menu__item-value",children:a.value?`${a.value}s`:je})]}),_("div",{class:"game-menu__item",children:[_("div",{class:"game-menu__item-name",children:"Average flips:"}),_("div",{class:"game-menu__item-value",children:s.value?s.value:je})]}),_("div",{class:"game-menu__header",children:"Game history"}),_("div",{children:"TODO make some table"}),r.value&&_("div",{class:"game-menu__debug",children:pt()})]})}const Pe=["Absolutely Brilliant!","Spectacular Achievement!","Exceptional Job!","Mind-Blowing Performance!","Stunning Effort!","Breathtaking Success!","Astonishing Results!","You're Unstoppable!","Phenomenal Work!","Simply Marvelous!"],Qt=()=>{const t=Math.floor(Math.random()*Pe.length);return Pe[t]};function Xt(){const{increaseLevel:t,isMaxLevel:e}=V,{start:i}=z,n=e(),{timeSpentMessage:r,cardFlipsCountMessage:s}=re,a=Qe(Qt()),l=c=>{c&&t(),i()};return _("div",{class:"game-over",children:[_("div",{class:"game-over__header",children:a.value}),_("div",{class:"game-over__statistic",children:[_("div",{class:"game-over__statistic-message",children:r.value}),_("div",{class:"game-over__statistic-message",children:s.value})]}),_("div",{class:"game-over__level-settings",children:[!n&&_("div",{class:"game-over__level-settings-message",children:"Do you want to increase the game's difficulty?"}),_("div",{class:"game-over__level-settings-actions",children:[_("button",{class:"game-over__action-button",onClick:()=>l(!1),children:"Play again"}),!n&&_("button",{class:"game-over__action-button",onClick:()=>l(!0),children:"Increase difficulty"})]})]})]})}const ei=new Map([["run",Kt],["game_over",Xt]]);function ti(){const{currentState:t,horizontalCardsCount:e,verticalCardsCount:i}=z,{isMenuOpen:n,toggleMenu:r,isMenuButtonVisible:s,menuButtonText:a}=te,l=ei.get(t.value);let c=`--horizontal-cards-count: ${e.value};`;c+=`--vertical-cards-count: ${i.value};`;const p=!gt()&&s.value;return _("div",{style:c,class:"game",children:[_("div",{class:"game__spacer"}),_("div",{class:"game__content",children:[n.value?_(Zt,{}):_(l,{}),p&&_("button",{class:"game__fallback-menu",onClick:r,children:a.value})]}),_("div",{class:"game__spacer"})]})}ct(_(ti,{}),document.getElementById("app"));
