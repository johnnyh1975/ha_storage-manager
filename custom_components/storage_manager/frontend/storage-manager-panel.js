var _t=Object.defineProperty;var ut=(u,e,t)=>e in u?_t(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var ue=(u,e,t)=>ut(u,typeof e!="symbol"?e+"":e,t);var J=globalThis,X=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol(),Ne=new WeakMap,W=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(X&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=Ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ne.set(t,e))}return e}toString(){return this.cssText}},Re=u=>new W(typeof u=="string"?u:u+"",void 0,pe),ge=(u,...e)=>{let t=u.length===1?u[0]:e.reduce((s,i,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+u[a+1],u[0]);return new W(t,u,pe)},Me=(u,e)=>{if(X)u.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=J.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,u.appendChild(s)}},me=X?u=>u:u=>u instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return Re(t)})(u):u;var{is:pt,defineProperty:gt,getOwnPropertyDescriptor:mt,getOwnPropertyNames:bt,getOwnPropertySymbols:ft,getPrototypeOf:yt}=Object,ee=globalThis,Be=ee.trustedTypes,wt=Be?Be.emptyScript:"",kt=ee.reactiveElementPolyfillSupport,F=(u,e)=>u,be={toAttribute(u,e){switch(e){case Boolean:u=u?wt:null;break;case Object:case Array:u=u==null?u:JSON.stringify(u)}return u},fromAttribute(u,e){let t=u;switch(e){case Boolean:t=u!==null;break;case Number:t=u===null?null:Number(u);break;case Object:case Array:try{t=JSON.parse(u)}catch{t=null}}return t}},Pe=(u,e)=>!pt(u,e),Ce={attribute:!0,type:String,converter:be,reflect:!1,useDefault:!1,hasChanged:Pe};Symbol.metadata??=Symbol("metadata"),ee.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&gt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:a}=mt(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){let o=i?.call(this);a?.call(this,n),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ce}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;let e=yt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){let t=this.properties,s=[...bt(t),...ft(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(me(i))}else e!==void 0&&t.push(me(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let a=(s.converter?.toAttribute!==void 0?s.converter:be).toAttribute(t,s.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let a=s.getPropertyOptions(i),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:be;this._$Em=i;let o=n.fromAttribute(t,a.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(e,t,s,i=!1,a){if(e!==void 0){let n=this.constructor;if(i===!1&&(a=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??Pe)(a,t)||s.useDefault&&s.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:a},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,a]of s){let{wrapped:n}=a,o=this[i];n!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,a,o)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[F("elementProperties")]=new Map,T[F("finalized")]=new Map,kt?.({ReactiveElement:T}),(ee.reactiveElementVersions??=[]).push("2.1.2");var ye=globalThis,Oe=u=>u,te=ye.trustedTypes,Ie=te?te.createPolicy("lit-html",{createHTML:u=>u}):void 0,we="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,ke="?"+L,vt=`<${ke}>`,P=document,j=()=>P.createComment(""),G=u=>u===null||typeof u!="object"&&typeof u!="function",ve=Array.isArray,Ze=u=>ve(u)||typeof u?.[Symbol.iterator]=="function",fe=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,He=/-->/g,Ve=/>/g,B=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ue=/'/g,We=/"/g,je=/^(?:script|style|textarea|title)$/i,$e=u=>(e,...t)=>({_$litType$:u,strings:e,values:t}),r=$e(1),D=$e(2),Ht=$e(3),E=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Fe=new WeakMap,C=P.createTreeWalker(P,129);function Ge(u,e){if(!ve(u)||!u.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ie!==void 0?Ie.createHTML(e):e}var Ke=(u,e)=>{let t=u.length-1,s=[],i,a=e===2?"<svg>":e===3?"<math>":"",n=Z;for(let o=0;o<t;o++){let l=u[o],h,c,_=-1,g=0;for(;g<l.length&&(n.lastIndex=g,c=n.exec(l),c!==null);)g=n.lastIndex,n===Z?c[1]==="!--"?n=He:c[1]!==void 0?n=Ve:c[2]!==void 0?(je.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=B):c[3]!==void 0&&(n=B):n===B?c[0]===">"?(n=i??Z,_=-1):c[1]===void 0?_=-2:(_=n.lastIndex-c[2].length,h=c[1],n=c[3]===void 0?B:c[3]==='"'?We:Ue):n===We||n===Ue?n=B:n===He||n===Ve?n=Z:(n=B,i=void 0);let f=n===B&&u[o+1].startsWith("/>")?" ":"";a+=n===Z?l+vt:_>=0?(s.push(h),l.slice(0,_)+we+l.slice(_)+L+f):l+L+(_===-2?o:f)}return[Ge(u,a+(u[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},K=class u{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let a=0,n=0,o=e.length-1,l=this.parts,[h,c]=Ke(e,t);if(this.el=u.createElement(h,s),C.currentNode=this.el.content,t===2||t===3){let _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(i=C.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(let _ of i.getAttributeNames())if(_.endsWith(we)){let g=c[n++],f=i.getAttribute(_).split(L),w=/([.?@])?(.*)/.exec(g);l.push({type:1,index:a,name:w[2],strings:f,ctor:w[1]==="."?ie:w[1]==="?"?ae:w[1]==="@"?ne:I}),i.removeAttribute(_)}else _.startsWith(L)&&(l.push({type:6,index:a}),i.removeAttribute(_));if(je.test(i.tagName)){let _=i.textContent.split(L),g=_.length-1;if(g>0){i.textContent=te?te.emptyScript:"";for(let f=0;f<g;f++)i.append(_[f],j()),C.nextNode(),l.push({type:2,index:++a});i.append(_[g],j())}}}else if(i.nodeType===8)if(i.data===ke)l.push({type:2,index:a});else{let _=-1;for(;(_=i.data.indexOf(L,_+1))!==-1;)l.push({type:7,index:a}),_+=L.length-1}a++}}static createElement(e,t){let s=P.createElement("template");return s.innerHTML=e,s}};function O(u,e,t=u,s){if(e===E)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,a=G(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(u),i._$AT(u,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=O(u,i._$AS(u,e.values),i,s)),e}var se=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??P).importNode(t,!0);C.currentNode=i;let a=C.nextNode(),n=0,o=0,l=s[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new U(a,a.nextSibling,this,e):l.type===1?h=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(h=new re(a,this,e)),this._$AV.push(h),l=s[++o]}n!==l?.index&&(a=C.nextNode(),n++)}return C.currentNode=P,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},U=class u{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),G(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ze(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&G(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=K.createElement(Ge(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let a=new se(i,this),n=a.u(this.options);a.p(t),this.T(n),this._$AH=a}}_$AC(e){let t=Fe.get(e.strings);return t===void 0&&Fe.set(e.strings,t=new K(e)),t}k(e){ve(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let a of e)i===t.length?t.push(s=new u(this.O(j()),this.O(j()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=Oe(e).nextSibling;Oe(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,a){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){let a=this.strings,n=!1;if(a===void 0)e=O(this,e,t,0),n=!G(e)||e!==this._$AH&&e!==E,n&&(this._$AH=e);else{let o=e,l,h;for(e=a[0],l=0;l<a.length-1;l++)h=O(this,o[s+l],t,l),h===E&&(h=this._$AH[l]),n||=!G(h)||h!==this._$AH[l],h===d?e=d:e!==d&&(e+=(h??"")+a[l+1]),this._$AH[l]=h}n&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ie=class extends I{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},ae=class extends I{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}},ne=class extends I{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??d)===E)return;let s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},re=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}},qe={M:we,P:L,A:ke,C:1,L:Ke,R:se,D:Ze,V:O,I:U,H:I,N:ae,U:ne,B:ie,F:re},$t=ye.litHtmlPolyfillSupport;$t?.(K,U),(ye.litHtmlVersions??=[]).push("3.3.3");var Ye=(u,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let a=t?.renderBefore??null;s._$litPart$=i=new U(e.insertBefore(j(),a),a,void 0,t??{})}return i._$AI(u),i};var xe=globalThis,M=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};M._$litElement$=!0,M.finalized=!0,xe.litElementHydrateSupport?.({LitElement:M});var xt=xe.litElementPolyfillSupport;xt?.({LitElement:M});(xe.litElementVersions??=[]).push("4.2.2");var H={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Qe=u=>(...e)=>({_$litDirective$:u,values:e}),oe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:ts}=qe;var Je=u=>u.strings===void 0;var At={},Xe=(u,e=At)=>u._$AH=e;var le=Qe(class extends oe{constructor(u){if(super(u),u.type!==H.PROPERTY&&u.type!==H.ATTRIBUTE&&u.type!==H.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Je(u))throw Error("`live` bindings can only contain a single expression")}render(u){return u}update(u,[e]){if(e===E||e===d)return e;let t=u.element,s=u.name;if(u.type===H.PROPERTY){if(e===t[s])return E}else if(u.type===H.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(s))return E}else if(u.type===H.ATTRIBUTE&&t.getAttribute(s)===e+"")return E;return Xe(u),e}});var et=["B","KB","MB","GB","TB"];function p(u,e="en"){if(u==null||Number.isNaN(u))return"\u2013";let t=Math.abs(u),s=0;for(;t>=1024&&s<et.length-1;)t/=1024,s+=1;let i=t>=100||s===0?0:t>=10?1:2,a=new Intl.NumberFormat(e,{maximumFractionDigits:i}).format(t);return`${u<0?"\u2212":""}${a} ${et[s]}`}function y(u,e="en"){return u==null?"\u2013":new Intl.NumberFormat(e).format(u)}function S(u,e="en"){return new Intl.NumberFormat(e,{style:"percent",maximumFractionDigits:0}).format(u)}function tt(u,e,t="en"){if(!u)return e("never");let s=Math.round(Date.now()/1e3-u);if(s<60)return e("just_now");let i=new Intl.RelativeTimeFormat(t,{numeric:"auto"}),a=[[60,"second"],[60,"minute"],[24,"hour"],[7,"day"],[4.35,"week"],[12,"month"],[Number.POSITIVE_INFINITY,"year"]],n=s;for(let[o,l]of a){if(Math.abs(n)<o)return i.format(-Math.round(n),l);n/=o}return""}function k(u,e="en",t=!1){if(!u)return"\u2013";let s=typeof u=="number"?new Date(u*1e3):new Date(u);return new Intl.DateTimeFormat(e,{dateStyle:"medium",timeStyle:t?"medium":"short"}).format(s)}var Ae=["#4f9bd9","#f0a04b","#5db36b","#d9667a","#9a7bd1","#3fb7b0","#c2b74a","#8d99a6"];function st(u,e,t,s,i){let a=u.reduce((f,w)=>f+w.v,0);if(!a||!u.length)return[];let n=s*i/a,o=u.map(f=>({...f,a:f.v*n})),l=[],h={x:e,y:t,w:s,h:i},c=[],_=(f,w)=>{let m=f.reduce(($,A)=>$+A.a,0),v=Math.max(...f.map($=>$.a)),x=Math.min(...f.map($=>$.a));return Math.max(w*w*v/(m*m),m*m/(w*w*x))},g=f=>{let w=f.reduce((m,v)=>m+v.a,0);if(h.w>=h.h){let m=w/h.h,v=h.y;for(let x of f){let $=x.a/m;l.push({...x,x:h.x,y:v,w:m,h:$}),v+=$}h={x:h.x+m,y:h.y,w:h.w-m,h:h.h}}else{let m=w/h.w,v=h.x;for(let x of f){let $=x.a/m;l.push({...x,x:v,y:h.y,w:$,h:m}),v+=$}h={x:h.x,y:h.y+m,w:h.w,h:h.h-m}}};for(let f of o){let w=Math.min(h.w,h.h);!c.length||_([...c,f],w)<=_(c,w)?c.push(f):(g(c),c=[f])}return c.length&&g(c),l}function de(u,e,t){if(!u)return"\u2013";let s=86400/u;return s<60?e("rate_seconds",{n:Math.max(1,Math.round(s))}):s<3600?e("rate_minutes",{n:Math.round(s/60)}):e("rate_per_day",{n:y(u,t)})}var St=["default","7","3","1","drop","excluded"],ce={7:7,3:3,1:1,drop:0,excluded:0},Et={sqlite:"SQLite",mysql:"MariaDB/MySQL",postgresql:"PostgreSQL"},N=150,it=u=>class extends u{_tierLabel(e){let t=this.t,s=this._entities?.keep_days??this._overview?.data?.database?.keep_days;return e==="default"?t("tier_default",{days:s}):e==="excluded"?this._entities?.packages_available===!1?t("tier_excluded_needs_packages"):t("tier_excluded"):t(`tier_${e}`)}_reasonText(e,t){let s=this.t;if(!e)return"";let i=e.used||{},a={rate:de(t?.rows_24h,s,this.lang),share:S(e.facts?.attr_share||0,this.lang),attr_only:S(e.facts?.attr_only_share||0,this.lang),days:i.min_days||""};return s(`reason_${e.reason}`,a)}_noteChips(e){let t=this.t;if(!e)return d;let s=e.used||{},i=[];return e.protected&&i.push(r`<span class="tag ok">${t(`protected_${e.protected}`)}</span>`),(s.automations||s.scripts)&&i.push(r`<span class="tag" title=${t("note_automation_hint")}>${t("note_automation",{n:s.automations+s.scripts})}</span>`),s.min_days&&i.push(r`<span class="tag">${t("note_dashboard",{days:s.min_days})}</span>`),s.energy&&i.push(r`<span class="tag">${t("note_energy")}</span>`),e.facts?.state_class&&i.push(r`<span class="tag" title=${t("note_statistics_hint")}>${t("note_statistics")}</span>`),e.facts?.entity_category==="diagnostic"&&i.push(r`<span class="tag">${t("note_diagnostic")}</span>`),i}_integrationName(e){return this.hass?.localize?.(`component.${e}.title`)||this._entities?.integration_names?.[e]||e.replace(/_/g," ").replace(/^\w/,s=>s.toUpperCase())}_rowById(e){return this._entities?.rows.find(t=>t.entity_id===e)}_accept(e){let t=new Map(this._draft);for(let s of e){let i=this._rowById(s),a=i?.advice?.action;!i||!a||i.excluded_by_yaml||(a===this._original(i)?t.delete(s):t.set(s,{value:a,row:i}))}this._draft=t}async _dismiss(e,t=!1){try{await this._ws("dismiss",{entity_ids:e,undo:t}),await this._loadEntities()}catch(s){this._showToast(this.t("error",{msg:s.message}))}}async _openDetail(e){this._detail={entity_id:e,loading:!0};try{this._detail=await this._ws("entity_detail",{entity_id:e})}catch(t){this._detail=void 0,this._showToast(this.t("error",{msg:t.message}))}}_renderDatabase(){let e=this.t,t=this._overview,s=t.data.database,i=t.data.recorder,a=this._entities,n=s.analysis_running||this._working==="analyze";return r`
        ${i.restart_required?r`<div class="banner"><ha-icon icon="mdi:restart-alert"></ha-icon>
              <div class="txt">${e("restart_banner",{n:i.pending_restart.length})}</div>
              <button class="btn primary" @click=${this._confirmRestart}>${e("restart")}</button></div>`:d}
        ${i.unwritten.length&&!i.packages.available?r`<div class="banner"><ha-icon icon="mdi:package-variant"></ha-icon>
              <div class="txt">${e("packages_banner")}</div>
              <button class="btn" @click=${()=>this._navigate("/config/repairs")}>${e("packages_open")}</button></div>`:d}
        ${i.core_entity_options==="writable"?r`<div class="banner info"><ha-icon icon="mdi:new-box"></ha-icon>
              <div class="txt">${e("core_options_banner")}</div></div>`:d}
        ${t.gui_recorder&&!t.gui_recorder_imported?r`<div class="banner info"><ha-icon icon="mdi:import"></ha-icon>
              <div class="txt">${e("gui_recorder_banner")}</div>
              <button class="btn" @click=${this._importGuiRecorder}>${e("gui_recorder_import")}</button></div>`:d}

        <div class="grid2">
          <div class="card">
            <div class="kpis">
              <div class="kpi"><div class="v">${p(s.size,this.lang)}</div><div class="l">${e("db_size")}</div></div>
              <div class="kpi"><div class="v">${Et[s.dialect]||s.dialect||"\u2013"}</div><div class="l">${e("db_engine")}</div></div>
              <div class="kpi"><div class="v">${e("days",{n:s.keep_days})}</div><div class="l">${e("db_keep")}</div></div>
              <div class="kpi"><div class="v">${n?r`<span class="spinner" style="width:18px;height:18px"></span>`:tt(s.analysis_at,e,this.lang)}</div>
                <div class="l">${e("db_analysis")}</div></div>
            </div>
            ${s.obsolete?.states||s.obsolete?.events?r`<div class="row obsolete">
                  <span class="small">${e("obsolete",{n:y((s.obsolete.states||0)+(s.obsolete.events||0),this.lang),bytes:p(s.obsolete.bytes,this.lang),days:s.obsolete.keep_days})}</span>
                  <span class="spacer"></span>
                  <button class="btn" ?disabled=${!!this._working} @click=${()=>this._previewAndClean(["purge"])}>${e("obsolete_purge")}</button>
                </div>`:d}
            <div class="row" style="margin-top:12px">
              <span class="muted small">${a?.estimated_sizes===!1?e("db_calibrated"):a?.dialect==="mysql"&&a?.calibrated?e("db_estimated_innodb"):a?.scaled_to_file?e("db_scaled"):e("db_estimated")}
                ${i.yaml_filters?.uses_include?r` <b>${e("yaml_include_warning")}</b>`:d}</span>
              <span class="spacer"></span>
              <button class="btn" ?disabled=${n||!!this._working} @click=${this._analyze}>${e("analyze")}</button>
            </div>
            ${a?.dialect&&a.dialect!=="sqlite"?r`<div class="banner" style="margin-top:8px"><div class="txt">${e("engine_untested",{engine:a.dialect==="mysql"?"MariaDB/MySQL":a.dialect==="postgresql"?"PostgreSQL":a.dialect})}</div></div>`:d}
            ${this._renderAnalysisProgress(s)}
          </div>
          ${this._renderEffect(a)}
        </div>
        ${this._renderWindowResult()}

        ${a?a.analysis_at?r`${this._renderInbox(a)} ${this._renderDead()} ${this._renderUnused()} ${this._renderExplorer(a)}`:r`<div class="card"><p class="muted">${e("analysis_needed")}</p></div>`:r`<div class="card"><div class="center"><span class="spinner"></span></div></div>`}

        ${this._healthCard("database")}
        ${this._renderEvents(a)}
        ${this._renderDetail()}
      `}_renderDead(){let e=this.t,t=this._dead;if(!t||!t.items.length&&!t.disabled.length)return d;let s=this._deadSel||new Set,i=t.items.filter(c=>c.selectable),a=t.items.filter(c=>!c.selectable),n=!!this._working,o=i.filter(c=>s.has(c.entity_id)),l=(c,_)=>{let g=new Set(s);_?g.add(c):g.delete(c),this._deadSel=g},h=c=>r`<span class="muted small">${c.entity_id} · ${e(`dead_kind_${c.kind}`)}
        · ${c.no_value_recorded?e("dead_never",{date:k(c.since,this.lang)}):e("dead_since",{date:k(c.since,this.lang)})}
        ${c.bytes?` \xB7 ${p(c.bytes,this.lang)}`:""}</span>`;return r`<div class="card">
        <h2 class="wrap">${e("dead_title")}<span class="spacer"></span>
          ${t.bytes?r`<span class="muted small">${p(t.bytes,this.lang)}</span>`:d}</h2>
        <p class="muted small" style="margin-top:0">${e("dead_hint")}</p>
        ${i.length?r`<div class="dead-actions">
              <button class="linklike" ?disabled=${n} @click=${()=>this._deadSel=o.length===i.length?new Set:new Set(i.map(c=>c.entity_id))}>
                ${e(o.length===i.length?"dead_select_none":"dead_select_all")}</button>
              <span class="spacer"></span>
              <button class="btn" ?disabled=${n||!o.length} @click=${()=>this._confirmDisableDead(o)}>
                ${e("dead_disable",{n:o.length})}</button>
              <button class="btn danger" ?disabled=${n||!o.length}
                @click=${()=>this._previewAndClean(["dead"],{entity_ids:o.map(c=>c.entity_id)})}>
                ${e("dead_disable_delete")}</button>
            </div>
            <ul class="dead-list">${i.map(c=>r`<li><label class="check-line"><input type="checkbox" .checked=${le(s.has(c.entity_id))}
                ?disabled=${n} @change=${_=>l(c.entity_id,_.target.checked)} />
                <span>${c.name}<br />${h(c)}</span></label></li>`)}</ul>`:d}
        ${a.length?r`<h4>${e("dead_blocked_title",{n:a.length})}</h4>
              <p class="muted small" style="margin-top:0">${e("dead_blocked_hint")}</p>
              <ul class="group-members">${a.map(c=>r`<li><button class="linklike" @click=${()=>this._openDetail(c.entity_id)}>${c.name}</button><br />${h(c)}
                  <div class="small">${c.kind==="yaml"?e("dead_yaml_hint"):e("dead_used",{list:this._usageSummary(c.used)})}</div></li>`)}</ul>`:d}
        ${t.disabled.length?r`<h4>${e("dead_disabled_title",{n:t.disabled.length})}</h4>
              <ul class="group-members">${t.disabled.map(c=>r`<li>${c.name} <span class="muted small">${c.entity_id} · ${k(c.at,this.lang)}</span>
                  <button class="linklike" ?disabled=${n} @click=${()=>this._enableDead([c.entity_id])}>${e("dead_enable")}</button></li>`)}</ul>
              <p class="muted small">${e("dead_enable_hint")}</p>`:d}
      </div>`}_otherCards(e){let t=new Set([...(e.dashboards||[]).map(s=>s.dashboard),...e.statistics_cards||[]]);return(e.dashboard_cards||[]).filter(s=>!t.has(s))}_usageSummary(e){let t=this.t;if(!e)return"";let s=[],i=(a,n)=>n&&s.push(t(a,{n}));return i("dead_used_automations",(e.automations||[]).length),i("dead_used_scripts",(e.scripts||[]).length),i("dead_used_helpers",(e.helpers||[]).length),i("dead_used_dashboards",new Set([...e.dashboard_cards||[],...e.statistics_cards||[],...(e.dashboards||[]).map(a=>a.dashboard)]).size),i("dead_used_yaml",(e.yaml||[]).length),e.energy&&s.push(t("dead_used_energy")),s.join(", ")}_confirmDisableDead(e){let t=this.t;this._dialog={title:t("dead_disable_title"),body:r`<p>${t("dead_disable_body")}</p>
          <ul>${e.slice(0,30).map(s=>r`<li>${s.name} <span class="muted small">${s.entity_id}</span></li>`)}
            ${e.length>30?r`<li class="muted">${t("more_n",{n:e.length-30})}</li>`:d}</ul>`,confirm:t("dead_disable",{n:e.length}),typed:e.length>=25?e.length:0,action:()=>this._disableDead(e.map(s=>s.entity_id))}}async _disableDead(e){this._working="disable_dead";try{let t=await this._ws("disable_dead",{entity_ids:e});this._showToast(this.t("dead_disabled_done",{n:t.disabled.length})),this._deadSel=new Set,await Promise.all([this._loadDead(),this._loadOverview()])}catch(t){this._showToast(this.t("error",{msg:t.message}))}finally{this._working=null}}async _enableDead(e){this._working="enable_dead";try{let t=await this._ws("enable_dead",{entity_ids:e});this._showToast(this.t("dead_enabled_done",{n:t.enabled.length})),await Promise.all([this._loadDead(),this._loadOverview()])}catch(t){this._showToast(this.t("error",{msg:t.message}))}finally{this._working=null}}_renderUnused(){let e=this.t,t=this._unused;if(!t||!t.items.length&&!t.off.length)return d;let s=["noise","time","excluded","disabled","stale_import"].map(a=>({kind:a,items:t.items.filter(n=>n.kind===a)})).filter(a=>a.items.length),i=!!this._working;return r`<div class="card">
        <h2>${e("unused_title")}<span class="spacer"></span>
          ${t.bytes?r`<span class="muted small">${p(t.bytes,this.lang)}</span>`:d}</h2>
        <p class="muted small" style="margin-top:0">${e("unused_hint")}</p>
        ${s.map(a=>{let n=this._unusedOpen===a.kind,o=a.items.reduce((h,c)=>h+c.bytes,0),l=(a.kind==="noise"||a.kind==="time")&&!t.packages;return r`<div class="list-row">
            <div>
              <button class="linklike group-toggle" aria-expanded=${n?"true":"false"}
                @click=${()=>this._unusedOpen=n?null:a.kind}>
                <span class="chev">${n?"\u25BE":"\u25B8"}</span>${e(`unused_${a.kind}`,{n:a.items.length})}</button>
              <div class="muted small">${e(l?"unused_needs_packages":`unused_${a.kind}_hint`)}</div>
              ${n?r`<ul class="group-members">${a.items.slice(0,30).map(h=>r`<li>${h.name} <span class="muted small">${p(h.bytes,this.lang)}${h.last?` \xB7 ${e("unused_last",{date:k(h.last,this.lang)})}`:""}</span></li>`)}${a.items.length>30?r`<li class="muted">${e("more_n",{n:a.items.length-30})}</li>`:d}</ul>`:d}
            </div>
            <div class="num">${p(o,this.lang)}</div>
            <div><button class="btn" ?disabled=${i||l}
              @click=${()=>this._previewAndClean(["unused_statistics"],{statistic_ids:a.items.map(h=>h.statistic_id)})}>
              ${e(a.kind==="noise"||a.kind==="time"?"unused_switch_off":"unused_delete")}</button></div>
          </div>`})}
        ${t.off.length?r`<h4>${e("unused_off_title",{n:t.off.length})}</h4>
              <p class="muted small" style="margin-top:0">${e("unused_off_hint")}</p>
              <ul class="group-members">${t.off.map(a=>r`<li>${this.hass.states[a]?.attributes?.friendly_name||a}
                  <button class="linklike" ?disabled=${i} @click=${()=>this._statisticsOn([a])}>${e("unused_on")}</button></li>`)}</ul>`:d}
      </div>`}async _statisticsOn(e){this._working="statistics_on";try{let t=await this._ws("statistics_on",{entity_ids:e});this._showToast(this.t(t.packages_missing?"packages_banner":"unused_on_done")),await Promise.all([this._loadUnused(),this._loadOverview()])}catch(t){this._showToast(this.t("error",{msg:t.message}))}finally{this._working=null}}_renderEvents(e){let t=this.t,s=e?.event_types||[];if(!s.length)return d;let i=this._overview?.data?.system_log,a=!!this._working,n=s.filter(o=>o.excluded&&o.deletable);return r`<div class="card"><h2>${t("events_title")}</h2>
        <p class="muted small" style="margin-top:0">${t("events_hint")}</p>
        ${i?.fire_event?r`<div class="banner" style="margin:8px 0"><div class="txt">${t("system_log_fire_event",{rows:y(i.rows,this.lang)})}</div></div>`:d}
        ${s.slice(0,12).map(o=>r`<div class="list-row">
            <div><code>${o.event_type}</code>
              ${o.excluded?r` <span class="tag">${t("events_excluded")}</span>`:o.deletable?r` <span class="tag warn" title=${t("events_still_recorded_hint")}>${t("events_still_recorded")}</span>`:d}
              ${o.logbook?r` <span class="tag">${t("events_logbook")}</span>`:d}</div>
            <div class="num">${y(o.rows,this.lang)}${o.est_bytes?r`<br /><span class="muted small">${p(o.est_bytes,this.lang)}</span>`:d}</div>
            <div>${o.deletable?r`<button class="btn" ?disabled=${a} @click=${()=>this._previewAndClean(["events"],{event_types:[o.event_type]})}>${t("events_delete")}</button>`:d}</div>
          </div>`)}
        ${n.length>1?r`<div class="row" style="margin-top:8px"><button class="btn" ?disabled=${a}
              @click=${()=>this._previewAndClean(["events"],{event_types:n.map(o=>o.event_type)})}>${t("events_delete_excluded",{n:n.length})}</button></div>`:d}
      </div>`}_renderInbox(e){let t=this.t,s=e.inbox||[],i=n=>n.entity_ids||[n.entity_id],a=s.flatMap(i).filter(n=>!this._draft.has(n));return r`<div class="card">
        <h2>${t("inbox_title")}
          <span class="spacer"></span>
          ${s.length?r`<span class="muted small">${t("inbox_summary",{n:s.length,bytes:p(e.inbox_saving,this.lang)})}</span>`:d}
        </h2>
        ${s.length===0?r`<p class="muted">${t("inbox_empty")}</p>`:r`
              <p class="muted small" style="margin-top:-4px">${t("inbox_hint")}
                <button class="linklike" @click=${()=>this._setTab("settings")}>${t("kinds_link")}</button></p>
              ${s.map(n=>this._renderInboxItem(n))}
              <div class="row" style="margin-top:12px">
                ${e.dismissed_count?r`<button class="btn" @click=${()=>this._dismiss([],!0)}>${t("inbox_show_dismissed",{n:e.dismissed_count})}</button>`:d}
                <span class="spacer"></span>
                <button class="btn primary" ?disabled=${!a.length}
                  @click=${()=>this._accept(a)}>${t("inbox_accept_all",{n:a.length})}</button>
              </div>`}
        ${!s.length&&e.dismissed_count?r`<button class="btn" @click=${()=>this._dismiss([],!0)}>${t("inbox_show_dismissed",{n:e.dismissed_count})}</button>`:d}
      </div>`}_renderKinds(e){let t=this.t;if(!e)return r`<div class="card"><h2>${t("kinds_title")}</h2><div class="center"><span class="spinner"></span></div></div>`;let s=e.kinds||[],i=s.filter(a=>a.value).length;return r`<div class="card">
        <h2>${t("kinds_title")}
          <span class="spacer"></span>
          ${i?r`<span class="tag">${t("kinds_changed",{n:i})}</span>`:d}
        </h2>
        <p class="muted small" style="margin-top:0">${t("kinds_hint")}</p>
        <p class="muted small">${t("kinds_auto_hint")}</p>
        ${s.length?s.map(a=>this._renderKind(a)):r`<p class="muted">${t("analysis_needed")}</p>`}
      </div>`}_renderSettingsTab(){let e=this.t,t=this._entities;return r`
        ${this._renderKinds(t)}
        ${this._renderSettings(t)}
        ${this._renderStatsRetention()}
        <div class="card">
          <h2>${e("more_options_title")}</h2>
          <p class="muted small" style="margin-top:0">${e("more_options_hint")}</p>
          <button class="btn" @click=${()=>this._navigate("/config/integrations/integration/storage_manager")}>${e("options")}</button>
        </div>`}_renderStatsRetention(){let e=this.t,t=this._statsRet;if(!t)return d;let s=this._statsDraft||{},i=!!this._working,a=c=>c==null?e("stats_ret_forever"):c===12?e("stats_ret_year"):c%12===0?e("stats_ret_years",{n:c/12}):e("stats_ret_months",{n:c}),n=c=>r`<select .value=${String(s[c]??"")} ?disabled=${i}
          @change=${_=>{this._statsDraft={...s,[c]:_.target.value===""?null:Number(_.target.value)},this._loadStatsPlan()}}>
          <option value="" ?selected=${s[c]==null}>${a(null)}</option>
          ${t.options.map(_=>r`<option value=${_} ?selected=${s[c]===_}>${a(_)}</option>`)}
        </select>`,o=this._statsPlan,l=s.stats!==t.stats_months||s.energy!==t.energy_months,h=c=>{let _=o?.groups?.[c];return!_||_.months==null?e("stats_ret_kept"):_.rows?e("stats_ret_frees",{n:y(_.statistics,this.lang),rows:y(_.rows,this.lang),bytes:p(_.bytes,this.lang),date:_.oldest?k(_.oldest,this.lang):""}):e("stats_ret_nothing_older")};return r`<div class="card">
        <h2 class="wrap">${e("stats_ret_title")}</h2>
        <p class="muted small" style="margin-top:0">${e("stats_ret_hint")}</p>
        <div class="list-row kind-row">
          <div><div>${e("stats_ret_other")}</div><div class="muted small">${h("other")}</div></div>
          ${n("stats")}
        </div>
        <div class="list-row kind-row">
          <div><div>${e("stats_ret_energy")}</div><div class="muted small">${h("energy")}</div></div>
          ${n("energy")}
        </div>
        <p class="small ${t.active?"":"muted"}">${t.active?e("stats_ret_active"):s.stats==null&&s.energy==null?e("stats_ret_off"):e("stats_ret_pending")}</p>
        <div class="dead-actions">
          <span class="spacer"></span>
          <button class="btn" ?disabled=${i||!l} @click=${()=>this._saveStatsRetention(!1)}>${e("settings_save")}</button>
          <button class="btn danger" ?disabled=${i||s.stats==null&&s.energy==null} @click=${()=>this._saveStatsRetention(!0)}>${e("stats_ret_apply")}</button>
        </div>
      </div>`}_renderKind(e){let t=this.t,s=["7","3","1","drop",...e.statistics_only?[]:["excluded"],"off"],i=a=>a==="off"?t("kind_off"):this._tierLabel(a);return r`<div class="list-row kind-row">
        <div>
          <div>${t(`kind_${e.kind}`)}</div>
          <div class="muted small">${t(`kind_${e.kind}_desc`)}</div>
          <div class="muted small">${e.entities?t(e.saving?"kind_stats":"kind_stats_nosave",{n:y(e.entities,this.lang),bytes:p(e.bytes,this.lang),saving:p(e.saving,this.lang)}):t("kind_none")}</div>
          <label class="small kind-auto">
            <input type="checkbox" .checked=${!!e.auto&&e.value!=="off"}
              ?disabled=${!!this._working||e.value==="off"}
              @change=${a=>this._setKindAuto(e.kind,a.target.checked)} />
            ${e.auto&&e.value!=="off"?t("kind_auto_since",{date:k(e.auto,this.lang)}):t("kind_auto")}
          </label>
        </div>
        <div></div>
        <div>
          <select aria-label=${t(`kind_${e.kind}`)} ?disabled=${!!this._working}
            @change=${a=>this._setKind(e.kind,a.target.value||null)}>
            <option value="" ?selected=${!e.value}>${t("kind_default",{tier:i(e.default)})}</option>
            ${s.map(a=>r`<option value=${a} ?selected=${e.value===a}>${i(a)}</option>`)}
          </select>
        </div>
      </div>`}_setKind(e,t){return this._sendKinds({rules:{[e]:t}})}_setKindAuto(e,t){return this._sendKinds({auto:{[e]:t}})}async _sendKinds(e){this._working="kinds";try{await this._ws("kind_rules",e),await Promise.all([this._loadEntities(),this._loadOverview()]),this._showToast(this.t("kinds_saved"))}catch(t){this._showToast(this.t("error",{msg:t.message}))}finally{this._working=null}}_toggleGroup(e){let t=new Set(this._openGroups||[]);t.has(e)?t.delete(e):t.add(e),this._openGroups=t}_renderInboxItem(e){let t=this.t,s=this._rowById(e.entity_id),i=e.entity_ids||[e.entity_id],a=i.every(l=>this._draft.get(l)?.value===e.action),n=this._openGroups?.has(`inbox:${e.group}`),o=e.entity_ids?r`<button class="linklike t" @click=${()=>this._toggleGroup(`inbox:${e.group}`)}>
            ${t("inbox_group_title",{integration:this._integrationName(e.integration),n:e.count})}</button>`:r`<button class="linklike t" @click=${()=>this._openDetail(e.entity_id)}>${e.name}</button>`;return r`<div class="rec ${e.conflict?"conflict":""}">
        <div class="ico"><ha-icon icon=${e.conflict?"mdi:alert-outline":e.entity_ids?"mdi:format-list-group":"mdi:lightbulb-on-outline"}></ha-icon></div>
        <div>
          ${o}
          <div class="muted small">${e.entity_ids?t(`group_reason_${e.reason}`,{n:e.count}):this._reasonText(e,s)}</div>
          ${e.hint?r`<div class="small hint">${t(`hint_${e.hint}`)}</div>`:d}
          <div class="chips">
            <span class="tag ${e.conflict?"warn":"ok"}">→ ${this._tierLabel(e.action)}</span>
            ${this._noteChips({...e,protected:null})}
          </div>
          ${e.entity_ids&&n?r`<ul class="group-members">${e.entity_ids.map(l=>r`<li><button class="linklike" @click=${()=>this._openDetail(l)}>${this._rowById(l)?.name||l}</button></li>`)}</ul>`:d}
        </div>
        <div class="act row">
          ${e.saving?r`<span class="amount">${p(e.saving,this.lang)}</span>`:d}
          ${a?r`<span class="tag ok">${t("inbox_in_draft")}</span>`:r`<button class="btn" @click=${()=>this._dismiss(i)}>${t("inbox_dismiss")}</button>
                <button class="btn primary" @click=${()=>this._accept(i)}>${t("inbox_accept")}</button>`}
        </div>
      </div>`}_renderEffect(e){let t=this.t,s=(e?.size_history||[]).filter(l=>l[1]>0||l[2]>0),i=s.filter(l=>l[3]===1&&l[2]>0),a=(e?.changes||[]).map(l=>new Date(l).getTime()/1e3),n=i.length>=2?i.map(l=>[l[0],l[2]]):s.map(l=>[l[0],l[1]]),o=t("effect_waiting");if(n.length>=2&&a.length){let l=a.find(_=>_>=n[0][0])??a[a.length-1],h=[...n].reverse().find(_=>_[0]<=l)||n[0],c=n[n.length-1];if(c[0]>h[0]&&h[1]>0){let _=(c[1]-h[1])/h[1];o=t(i.length>=2?"effect_since_change_data":"effect_since_change",{delta:`${_<=0?"\u2212":"+"}${S(Math.abs(_),this.lang)}`,bytes:p(Math.abs(c[1]-h[1]),this.lang),date:k(h[0],this.lang)})}}else n.length>=2&&(o=t("effect_no_changes"));return r`<div class="card">
        <h2>${t("effect_title")}</h2>
        ${s.length>=2?this._sizeChart(s,a):r`<p class="muted small">${t("effect_need_samples")}</p>`}
        <p class="small" style="margin:8px 0 0">${o}</p>
        ${this._renderWindow()}
        ${s.length>=2&&i.length<2?r`<p class="muted small" style="margin:4px 0 0">${t("effect_data_soon")}</p>`:d}
      </div>`}async _loadWindow(e,t){this._win={start:e,end:t,loading:!0};try{this._win={...await this._ws("writers",{start:e,end:t}),loading:!1}}catch(s){this._win=void 0,this._showToast(this.t("error",{msg:s.message}))}}_renderWindow(){let e=this.t,t=Date.now()/1e3,s=[["24h",86400],["7d",7*86400]];return r`<div class="window-bar">
          <span class="muted small">${e("window_hint")}</span>
          <span class="spacer"></span>
          ${s.map(([i,a])=>r`<button class="chip" @click=${()=>this._loadWindow(t-a,t)}>${e(`window_${i}`)}</button>`)}
        </div>`}_renderWindowResult(){let e=this.t,t=this._win;if(!t)return d;let s=(i,a,n,o)=>r`<div class="list-row">
          <div>${i}${a?r`<div class="muted small">${a}</div>`:d}</div>
          <div class="num small">${e("window_rows",{n:y(n,this.lang)})}</div>
          <div class="num"><b>${o?p(o,this.lang):"\u2013"}</b></div></div>`;return r`<div class="card window-result">
        <div class="row">
          <h2 style="margin:0">${e("window_title",{from:k(t.start,this.lang),to:k(t.end,this.lang)})}</h2>
          <span class="spacer"></span>
          <button class="btn" @click=${()=>this._win=void 0}>${e("window_close")}</button>
        </div>
        ${t.loading?r`<div class="center"><span class="spinner"></span></div>`:r`
            ${t.complete_from&&t.start<t.complete_from?r`<p class="muted small">${e("window_partial",{date:k(t.complete_from,this.lang)})}</p>`:d}
            ${t.states.length===0&&t.events.length===0?r`<p class="muted">${e("window_none")}</p>`:d}
            ${t.states.length?r`<h4>${e("window_entities")}</h4>`:d}
            ${t.states.map(i=>s(r`<button class="linklike" @click=${()=>this._openDetail(i.entity_id)}>${i.name}</button>`,i.entity_id,i.rows,i.bytes))}
            ${t.events.length?r`<h4>${e("window_events")}</h4>`:d}
            ${t.events.map(i=>s(r`<code>${i.event_type}</code>`,null,i.rows,i.bytes))}`}
      </div>`}_sizeChart(e,t){let s=e.find(b=>b[3]===1&&b[2]>0),a=e.filter(b=>b[3]===1&&b[2]>0).length>=2?e.filter(b=>b[0]>=s[0]):e,n=320,o=96,l=44,h=a.map(b=>b[0]),c=a.map(b=>[b[0],b[1]]).filter(b=>b[1]>0),_=a.filter(b=>b[3]===1&&b[2]>0).map(b=>[b[0],b[2]]),g=[...c,..._].map(b=>b[1]),f=Math.min(...h),w=Math.max(...h,f+1),m=Math.min(...g),v=Math.max(...g),x=Math.max((v-m)*.1,v*.01,1),$=Math.max(m-x,0),A=v+x,z=b=>l+(b-f)/(w-f)*(n-l),Y=b=>o-(b-$)/(A-$)*o,V=b=>b.map((R,_e)=>`${_e?"L":"M"}${z(R[0]).toFixed(1)},${Y(R[1]).toFixed(1)}`).join(" "),Te=b=>{let R=b.currentTarget.getBoundingClientRect(),_e=(b.clientX-R.left)/R.width*n;return f+(Math.min(Math.max(_e,l),n)-l)/(n-l)*(w-f)},ht=b=>Math.min(Math.max(b,f),w),Le=this._winDrag||(this._win?[this._win.start,this._win.end]:null),Q=Le?Le.map(ht):null;return r`<svg class="chart window" viewBox="0 0 ${n} ${o+30}" role="img" aria-label=${this.t("effect_title")}
        @pointerdown=${b=>{b.currentTarget.setPointerCapture?.(b.pointerId);let R=Te(b);this._winDrag=[R,R]}}
        @pointermove=${b=>{this._winDrag&&(this._winDrag=[this._winDrag[0],Te(b)])}}
        @pointerup=${()=>{let b=this._winDrag;this._winDrag=null,b&&Math.abs(b[1]-b[0])>60&&this._loadWindow(Math.min(...b),Math.max(...b))}}>
        ${Q?D`<rect x=${z(Math.min(...Q))} y="0" width=${Math.max(Math.abs(z(Q[1])-z(Q[0])),1)} height=${o} fill="var(--primary-color)" opacity="0.15"></rect>`:d}
        ${D`<line x1=${l} x2=${n} y1="0" y2="0" stroke="var(--divider-color)"></line>
          <line x1=${l} x2=${n} y1=${o} y2=${o} stroke="var(--divider-color)"></line>
          <text x=${l-4} y="8" font-size="9" text-anchor="end" fill="var(--secondary-text-color)">${p(A,this.lang)}</text>
          <text x=${l-4} y=${o} font-size="9" text-anchor="end" fill="var(--secondary-text-color)">${p($,this.lang)}</text>
          ${t.filter(b=>b>=f&&b<=w).map(b=>D`<line x1=${z(b)} x2=${z(b)} y1="0" y2=${o} stroke="var(--warning-color, #ffa600)" stroke-dasharray="3 3"></line>`)}
          ${c.length>=2?D`<path d=${V(c)} fill="none" stroke="var(--secondary-text-color)" stroke-width="1.25" stroke-dasharray="4 3"></path>`:d}
          ${_.length>=2?D`<path d=${V(_)} fill="none" stroke="var(--sm-c1)" stroke-width="2"></path>`:d}
          <text x=${l} y=${o+12} font-size="10" fill="var(--secondary-text-color)">${k(f,this.lang)}</text>
          <text x=${n} y=${o+12} font-size="10" text-anchor="end" fill="var(--secondary-text-color)">${k(w,this.lang)}</text>
          ${_.length>=2?D`<line x1=${l} x2=${l+14} y1=${o+24} y2=${o+24} stroke="var(--sm-c1)" stroke-width="2"></line>
            <text x=${l+18} y=${o+27} font-size="10" fill="var(--secondary-text-color)">${this.t("effect_legend_data")}</text>`:d}
          <line x1=${l+110} x2=${l+124} y1=${o+24} y2=${o+24} stroke="var(--secondary-text-color)" stroke-dasharray="4 3"></line>
          <text x=${l+128} y=${o+27} font-size="10" fill="var(--secondary-text-color)">${this.t("effect_legend_file")}</text>
          <line x1=${l+200} x2=${l+210} y1=${o+24} y2=${o+24} stroke="var(--warning-color, #ffa600)" stroke-dasharray="3 3"></line>
          <text x=${l+214} y=${o+27} font-size="10" fill="var(--secondary-text-color)">${this.t("effect_legend_change")}</text>`}
      </svg>`}_renderExplorer(e){let t=this.t,s=this._view||"top";return r`<div class="card">
        <div class="row" style="margin-bottom:12px">
          <div class="segmented" role="tablist">
            ${["top","groups","all"].map(i=>r`<button role="tab" aria-selected=${i===s?"true":"false"}
                @click=${()=>{this._view=i,this._limit=N}}>${t(`view_${i}`)}</button>`)}
          </div>
          <span class="spacer"></span>
          <span class="muted small">${t("view_total",{n:y(e.rows.length,this.lang),bytes:p(e.total_bytes,this.lang)})}</span>
        </div>
        ${s==="groups"?this._renderGroups(e):s==="all"?this._renderAll(e):this._renderTop(e)}
      </div>`}_renderTop(e){let t=this.t,s=e.rows.filter(n=>n.top||this._draft.has(n.entity_id)),i=s.reduce((n,o)=>Math.max(n,o.est_bytes),1),a=e.total_bytes?1-e.rest_bytes/e.total_bytes:0;return r`
        <p class="muted small" style="margin-top:0">${t("top_hint",{n:s.length,share:S(a,this.lang)})}</p>
        ${this._table(s,i)}
        ${e.rest_count?r`<div class="restline">
              <span>${t("top_rest",{n:y(e.rest_count,this.lang),bytes:p(e.rest_bytes,this.lang),share:S(e.total_bytes?e.rest_bytes/e.total_bytes:0,this.lang)})}</span>
              <button class="btn" @click=${()=>this._view="all"}>${t("top_show_all")}</button>
            </div>`:d}`}_groups(e){let t=new Map;for(let s of e.rows){let i=s.integration||s.domain;t.has(i)||t.set(i,{key:i,rows:[],bytes:0,advice:[],saving:0});let a=t.get(i);a.rows.push(s),a.bytes+=s.est_bytes,s.advice?.action&&(a.advice.push(s.entity_id),a.saving+=s.advice.saving||0)}return[...t.values()].sort((s,i)=>i.bytes-s.bytes)}_renderGroups(e){let t=this.t,s=this._groups(e),i=this._openGroups||new Set,a=e.total_bytes||1;return r`${this._treemap(s,a)}${s.map(n=>{let o=i.has(n.key),l=n.rows.reduce((h,c)=>Math.max(h,c.est_bytes),1);return r`<div class="group">
          <div class="group-head">
            <button class="linklike group-toggle" aria-expanded=${o?"true":"false"} @click=${()=>{let h=new Set(i);o?h.delete(n.key):h.add(n.key),this._openGroups=h}}>
              <span class="chev">${o?"\u25BE":"\u25B8"}</span>
              <span><b>${this._integrationName(n.key)}</b> <span class="muted small">${t("group_count",{n:n.rows.length})}</span></span>
            </button>
            <span class="spacer"></span>
            ${n.advice.length?r`<button class="btn" @click=${()=>this._accept(n.advice)}>${t("group_accept",{n:n.advice.length,bytes:p(n.saving,this.lang)})}</button>`:d}
            <button class="linklike small" @click=${()=>this._drillIntegration(n.key)}>${t("group_list")}</button>
            <span class="num"><b>${p(n.bytes,this.lang)}</b></span>
          </div>
          <div class="bar"><div style="width:${Math.max(n.bytes/a*100,.5)}%;background:var(--sm-c1)"></div></div>
          ${o?this._table(n.rows.slice(0,N),l):d}
        </div>`})}`}_drillIntegration(e){this._facets={integration:e||""},this._search="",this._domain="",this._view="all",this._limit=N}_treemap(e,t){let s=e.filter(o=>o.bytes>0).slice(0,24);if(s.length<2)return d;let i=600,a=220,n=st(s.map(o=>({g:o,v:o.bytes})),0,0,i,a);return r`<svg class="treemap" viewBox="0 0 ${i} ${a}" role="img" aria-label=${this.t("treemap_label")}>
        ${n.map((o,l)=>D`<g class="tm" @click=${()=>this._drillIntegration(o.g.key)}>
          <rect x=${o.x+1} y=${o.y+1} width=${Math.max(o.w-2,0)} height=${Math.max(o.h-2,0)} rx="4"
            fill=${Ae[l%Ae.length]}><title>${this._integrationName(o.g.key)}: ${p(o.g.bytes,this.lang)} (${S(o.g.bytes/t,this.lang)})</title></rect>
          ${o.w>60&&o.h>28?D`<text x=${o.x+7} y=${o.y+17} class="tm-label">${this._integrationName(o.g.key)}</text>
                <text x=${o.x+7} y=${o.y+31} class="tm-sub">${p(o.g.bytes,this.lang)}</text>`:d}
        </g>`)}
      </svg>
      <p class="muted small" style="margin-top:4px">${this.t("treemap_hint")}</p>`}_filteredRows(e){let t=(this._search||"").trim().toLowerCase(),s=e.filter(i=>{if(this._domain&&i.domain!==this._domain||this._onlyOrphans&&!i.orphan||this._onlyChanged&&!this._draft.has(i.entity_id)&&i.tier==="default"&&!i.excluded||this._onlyAdvice&&!i.advice?.action)return!1;let a=this._facets||{};if(a.integration&&(i.integration||i.domain)!==a.integration||a.device&&(i.device||"")!==a.device||a.used&&i.used!==a.used||a.defined&&i.defined_in!==a.defined)return!1;if(a.age){let n=Date.now()/1e3-Number(a.age)*86400;if(i.newest&&i.newest>=n||!i.newest&&!i.rows)return!1}return t?[i.entity_id,i.name,i.integration,i.area,i.device].some(n=>(n||"").toLowerCase().includes(t)):!0});return this._sort==="rate"?s=[...s].sort((i,a)=>a.rows_24h-i.rows_24h):this._sort==="name"&&(s=[...s].sort((i,a)=>(i.name||"").localeCompare(a.name||"",this.lang))),s}_renderFacets(e,t){let s=this.t,i=this._facets||{},a=(g,f)=>{this._facets={...i,[g]:f},this._limit=N},n=g=>g.integration||g.domain,o=[...new Set(e.rows.map(n))].sort(),l=[...new Set(e.rows.filter(g=>!i.integration||n(g)===i.integration).map(g=>g.device).filter(Boolean))].sort((g,f)=>g.localeCompare(f,this.lang)),h=Object.values(i).filter(Boolean).length,c=this._facetsOpen||h>0,_=(g,f,w)=>r`<select aria-label=${f} @change=${m=>a(g,m.target.value)}>
          <option value="" ?selected=${!i[g]}>${f}</option>
          ${w.map(([m,v])=>r`<option value=${m} ?selected=${i[g]===m}>${v}</option>`)}
        </select>`;return r`
        ${c?r`<div class="filters facets">
              ${_("integration",s("facet_integration"),o.map(g=>[g,this._integrationName(g)]))}
              ${_("device",s("facet_device"),l.map(g=>[g,g]))}
              ${_("used",s("facet_used"),["yes","no","dynamic"].map(g=>[g,s(`facet_used_${g}`)]))}
              ${_("defined",s("facet_defined"),["ui","yaml","yaml_no_id","gone"].map(g=>[g,s(`facet_defined_${g}`)]))}
              ${_("age",s("facet_age"),[["7",s("facet_age_7")],["30",s("facet_age_30")],["180",s("facet_age_180")]])}
            </div>`:d}
        <div class="facet-bar small">
          <span class="muted">${s("facet_matches",{n:y(t.length,this.lang)})}</span>
          ${t.length&&t.length!==e.rows.length&&!t.every(g=>this._selected.has(g.entity_id))?r`<button class="linklike" @click=${()=>this._selected=new Set([...this._selected,...t.map(g=>g.entity_id)])}>${s("select_matching",{n:y(t.length,this.lang)})}</button>`:d}
          <span class="spacer"></span>
          ${h?r`<button class="linklike" @click=${()=>{this._facets={},this._limit=N}}>${s("facet_clear",{n:h})}</button>`:r`<button class="linklike" aria-expanded=${c?"true":"false"} @click=${()=>this._facetsOpen=!c}>${s(c?"facet_less":"facet_more")}</button>`}
        </div>`}_renderAll(e){let t=this.t,s=[...new Set(e.rows.map(o=>o.domain))].sort(),i=this._filteredRows(e.rows),a=i.reduce((o,l)=>Math.max(o,l.est_bytes),1),n=i.slice(0,this._limit);return r`
        <div class="filters">
          <input type="search" placeholder=${t("search")} .value=${this._search}
            @input=${o=>{this._search=o.target.value,this._limit=N}} />
          <select @change=${o=>{this._domain=o.target.value,this._limit=N}} aria-label=${t("all_domains")}>
            <option value="">${t("all_domains")}</option>
            ${s.map(o=>r`<option value=${o} ?selected=${o===this._domain}>${o}</option>`)}
          </select>
          <select @change=${o=>this._sort=o.target.value} aria-label="sort">
            ${["size","rate","name"].map(o=>r`<option value=${o} ?selected=${o===this._sort}>${t(`sort_${o}`)}</option>`)}
          </select>
          <button class="chip" aria-pressed=${this._onlyAdvice?"true":"false"}
            @click=${()=>this._onlyAdvice=!this._onlyAdvice}>${t("filter_advice")}</button>
          <button class="chip" aria-pressed=${this._onlyChanged?"true":"false"}
            @click=${()=>this._onlyChanged=!this._onlyChanged}>${t("filter_changed")}</button>
          <button class="chip" aria-pressed=${this._onlyOrphans?"true":"false"}
            @click=${()=>this._onlyOrphans=!this._onlyOrphans}>${t("filter_orphans")}</button>
        </div>
        ${this._renderFacets(e,i)}
        ${this._selected.size?r`<div class="banner info" style="margin-bottom:8px">
              <div class="txt">${t("selected",{n:this._selected.size})}</div>
              ${this._tierSelect(null,o=>this._setValue(e.rows.filter(l=>this._selected.has(l.entity_id)),o),t("set_for_selection"))}
              <button class="btn" @click=${()=>this._selected=new Set}>${t("clear_selection")}</button>
            </div>`:d}
        ${this._table(n,a,!0)}
        ${i.length>this._limit?r`<div class="row" style="justify-content:center;margin-top:12px">
              <button class="btn" @click=${()=>this._limit+=N}>${t("show_more",{n:Math.min(N,i.length-this._limit)})}</button></div>`:d}`}_table(e,t,s=!1){let i=this.t,a=s&&e.length>0&&e.every(n=>this._selected.has(n.entity_id));return r`<table class="responsive ${s?"":"noselect"}">
        <thead><tr>
          ${s?r`<th style="width:28px"><input type="checkbox" .checked=${a} aria-label="select all"
                @change=${n=>{let o=new Set(this._selected);e.forEach(l=>n.target.checked?o.add(l.entity_id):o.delete(l.entity_id)),this._selected=o}} /></th>`:d}
          <th>${i("col_entity")}</th>
          <th class="num">${i("col_size")}</th>
          <th class="num">${i("col_rate")}</th>
          <th>${i("col_retention")}</th>
        </tr></thead>
        <tbody>${e.map(n=>this._row(n,t,s))}</tbody>
      </table>`}_row(e,t,s){let i=this.t,a=this._draft.has(e.entity_id),n=[e.entity_id,e.integration,e.area].filter(Boolean).join(" \xB7 "),o=e.advice,l=o?.action&&this._effective(e)!==o.action;return r`<tr class=${a?"changed":""}>
        ${s?r`<td class="c-check"><input type="checkbox" .checked=${this._selected.has(e.entity_id)} aria-label=${e.entity_id}
              @change=${h=>{let c=new Set(this._selected);h.target.checked?c.add(e.entity_id):c.delete(e.entity_id),this._selected=c}} /></td>`:d}
        <td class="c-ent ent">
          <div class="n"><button class="linklike" @click=${()=>this._openDetail(e.entity_id)}>${e.name}</button>
            ${e.orphan?r`<span class="tag bad">${i("orphan")}</span>`:d}
            ${e.excluded_by_yaml?r`<span class="tag">${i("excluded_by_yaml")}</span>`:d}
            ${e.excluded&&!e.recorded?r`<span class="tag ok">${i("tier_excluded")}</span>`:d}
          </div>
          <div class="i">${n}</div>
          <div class="chips">
            ${l?r`<button class="tag ${o.conflict?"warn":"ok"} tagbtn" title=${this._reasonText(o,e)}
                  @click=${()=>this._accept([e.entity_id])}>${o.conflict?"\u26A0 ":""}${i("suggested",{tier:this._tierLabel(o.action)})}</button>`:d}
            ${this._noteChips(o)}
          </div>
        </td>
        <td class="c-size num">${e.est_bytes?p(e.est_bytes,this.lang):"\u2013"}
          <div class="sizebar" style="width:${Math.max(e.est_bytes/t*100,1)}%"></div></td>
        <td class="c-rate num">${de(e.rows_24h,i,this.lang)}</td>
        <td class="c-tier">${this._tierSelect(e,h=>this._setValue([e],h))}</td>
      </tr>`}_tierSelect(e,t,s){let i=this.t,a=e?this._effective(e):"";return r`<select aria-label=${i("col_retention")} ?disabled=${e?.excluded_by_yaml} .value=${le(a)}
        @change=${n=>{t(n.target.value),e||(n.target.value="")}}>
        ${s?r`<option value="" selected disabled>${s}</option>`:d}
        ${St.map(n=>r`<option value=${n} ?selected=${n===a}>${this._tierLabel(n)}</option>`)}
      </select>`}_settingsState(e){return this._settingsDraft||(this._settingsDraft={filters:JSON.parse(JSON.stringify(e.filters||{})),settings:{...e.settings||{}}}),this._settingsDraft}_renderSettings(e){let t=this.t,s=this._overview.data.recorder,i=s.exclusion_orphans||{entities:[],domains:[],entity_globs:[]},a=i.entities.length+i.domains.length+i.entity_globs.length;return r`<div class="card">
        <h2>${t("settings_title")}
          <span class="spacer"></span>
          ${a?r`<span class="tag warn">${t("orphans_badge",{n:a})}</span>`:d}
        </h2>
        <p class="muted small" style="margin-top:0">${t("settings_hint")}</p>
        ${this._settingsBody(s,e,i,a)}
      </div>`}_settingsBody(e,t,s,i){let a=this.t,n=this._settingsState(e),o=e.locked_settings||{},l=e.effective_settings||{},h=()=>this._settingsDraft={...n},c=(m,v,x,$)=>{let A=m in o,z=A?o[m]:n.settings[m]??"";return r`<label class="field">
          <span>${a(`setting_${m}`)}</span>
          <span class="row">
            <input type="number" name=${m} min=${v} max=${x} .value=${String(z)} placeholder=${String(l[m]??"")}
              ?disabled=${A}
              @change=${Y=>{let V=Y.target.value===""?null:Number(Y.target.value);n.settings={...n.settings,[m]:V},h(),m==="purge_keep_days"&&V&&this._loadWhatif([V])}} />
            <span class="muted small">${$}</span>
          </span>
          <span class="muted small">${a(A?"setting_locked":`setting_${m}_hint`)}</span>
        </label>`},_=m=>{let v=m in o,x=v?o[m]:n.settings[m]??l[m];return r`<label class="field toggle">
          <input type="checkbox" .checked=${!!x} ?disabled=${v}
            @change=${$=>{n.settings={...n.settings,[m]:$.target.checked},h()}} />
          <span><span>${a(`setting_${m}`)}</span><br />
            <span class="muted small">${a(v?"setting_locked":`setting_${m}_hint`)}</span></span>
        </label>`},g=[...new Set((t?.rows||[]).map(m=>m.domain))].sort(),f=(t?.events||[]).map(m=>m.event_type),w=(m,v)=>{let x=n.filters[m]||[],$=`sm-${m}`;return r`<div class="field">
          <span>${a(`filter_${m}`)}</span>
          <div class="chips">
            ${x.map(A=>r`<span class="tag">${A}
              <button class="tagx" aria-label=${a("remove")} @click=${()=>{n.filters={...n.filters,[m]:x.filter(z=>z!==A)},h()}}>✕</button></span>`)}
          </div>
          <span class="row">
            <input type="text" list=${$} placeholder=${a(`filter_${m}_placeholder`)}
              @keydown=${A=>{A.key!=="Enter"||!A.target.value.trim()||(n.filters={...n.filters,[m]:[...new Set([...x,A.target.value.trim()])]},A.target.value="",h())}} />
            <datalist id=${$}>${v.map(A=>r`<option value=${A}></option>`)}</datalist>
          </span>
          <span class="muted small">${a(`filter_${m}_hint`)}</span>
        </div>`};return r`
        <p class="muted small" style="margin-top:0">${a("settings_restart_hint")}</p>
        <h4 class="sub">${a("settings_global")}</h4>
        <div class="fields">
          ${c("purge_keep_days",1,3650,a("unit_days"))}
          ${this._renderWhatif(n,o,l)}
          ${c("commit_interval",0,30,a("unit_seconds"))}
          ${_("auto_purge")}
          ${_("auto_repack")}
        </div>
        <h4 class="sub">${a("settings_filters")}</h4>
        <div class="fields">
          ${w("domains",g)}
          ${w("entity_globs",[])}
          ${w("event_types",f)}
        </div>
        ${i?r`<div class="banner" style="margin-top:12px">
              <div class="txt">${a("orphans_text",{n:i})}
                <div class="muted small">${[...s.entities,...s.domains,...s.entity_globs].slice(0,8).join(", ")}</div></div>
              <button class="btn" @click=${this._removeExclusionOrphans}>${a("orphans_remove")}</button>
            </div>`:d}
        <div class="row" style="margin-top:16px">
          <span class="spacer"></span>
          <button class="btn" @click=${()=>this._settingsDraft=void 0}>${a("discard")}</button>
          <button class="btn primary settings-save" ?disabled=${!!this._working} @click=${()=>this._saveSettings()}>${a("settings_save")}</button>
        </div>`}async _loadWhatif(e=[]){let t=[...new Set([3,5,7,14,30,...e])].sort((s,i)=>s-i);try{let s=await this._ws("retention_whatif",{days:t});this._whatif={...this._whatif||{},...Object.fromEntries(s.results.map(i=>[i.days,i]))}}catch{this._whatif=this._whatif||{}}}_renderWhatif(e,t,s){let i=this.t;if(!this._whatif)return this._whatif={},this._loadWhatif(),d;let a=Number(s.purge_keep_days),n="purge_keep_days"in t?a:Number(e.settings.purge_keep_days??a),o=c=>c.bytes<=0?`\u2212${p(-c.bytes,this.lang)}`:`+${p(c.bytes,this.lang)}`,l=Object.values(this._whatif).filter(c=>c.days!==a&&c.days!==n).sort((c,_)=>c.days-_.days),h=n!==a?this._whatif[n]:null;return r`<div class="field whatif">
        <span>${i("whatif_title")}</span>
        ${h?r`<b>${i(h.bytes<=0?"whatif_less":"whatif_more",{days:n,bytes:p(Math.abs(h.bytes),this.lang)})}</b>`:d}
        <span class="chips">${l.map(c=>r`<span class="tag">${i("days",{n:c.days})}: ${o(c)}</span>`)}</span>
        <span class="muted small">${i("whatif_hint",{days:a})}</span>
      </div>`}async _saveSettings(e=!1){let t=this._settingsDraft;if(!t)return;let s=this.t,i=this._overview.data.recorder.locked_settings||{},a=Object.fromEntries(Object.entries(t.settings).filter(([l,h])=>!(l in i)&&h!==""&&h!==void 0)),n=Number((this._overview.data.recorder.effective_settings||{}).purge_keep_days),o=Number(a.purge_keep_days);if(e!==!0&&o&&n&&o<n){let l=this._whatif?.[o];if(!l)try{l=(await this._ws("retention_whatif",{days:[o]})).results.find(h=>h.days===o)}catch{l=void 0}this._dialog={title:s("confirm_title"),body:r`<p>${s("keep_shorter",{from:n,to:o})}</p>
            ${l&&l.bytes<0?r`<p><b>${s("keep_shorter_bytes",{bytes:p(-l.bytes,this.lang)})}</b></p>`:d}
            <p>${s("keep_shorter_no_undo")}</p>`,confirm:s("settings_save"),danger:!0,action:()=>this._saveSettings(!0)};return}this._working="settings";try{let l=await this._ws("settings",{filters:t.filters,settings:a});this._showToast(l.packages_missing?this.t("packages_banner"):this.t("settings_saved")),this._settingsDraft=void 0,this._whatif=void 0,await Promise.all([this._loadOverview(),this._loadEntities()])}catch(l){this._showToast(this.t("error",{msg:l.message}))}finally{this._working=null}}async _removeExclusionOrphans(){try{let e=await this._ws("remove_exclusion_orphans");this._showToast(this.t("orphans_removed",{n:e.removed})),this._settingsDraft=void 0,await Promise.all([this._loadOverview(),this._loadEntities()])}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_renderDetail(){let e=this._detail;if(!e)return d;let t=this.t,s=()=>this._detail=void 0,i=this._rowById(e.entity_id),a=e.loading?r`<div class="center"><span class="spinner"></span></div>`:this._detailBody(e,i);return r`<div class="scrim sheet-scrim" @click=${n=>n.target===n.currentTarget&&s()}>
        <aside class="sheet" role="dialog" aria-modal="true" aria-label=${i?.name||e.entity_id}>
          <div class="sheet-head">
            <div>
              <h3>${i?.name||e.entity_id}</h3>
              <div class="muted small">${e.entity_id}</div>
            </div>
            <button class="icon-btn" aria-label=${t("cancel")} @click=${s}>✕</button>
          </div>
          ${a}
        </aside>
      </div>`}_detailBody(e,t){let s=this.t,i=e.info||{},a=e.advice,n=e.usage||{},o=Math.max(...e.daily,1),l=t?this._effective(t):"default",h=(n.automations||[]).map(_=>this.hass.states[_]?.attributes?.friendly_name||_),c=(n.scripts||[]).map(_=>this.hass.states[_]?.attributes?.friendly_name||_);return r`
        <div class="kpis" style="margin-bottom:16px">
          <div class="kpi"><div class="v">${p(i.est_bytes||0,this.lang)}</div><div class="l">${s("col_size")}</div></div>
          <div class="kpi"><div class="v">${y(i.rows||0,this.lang)}</div><div class="l">${s("col_rows")}</div></div>
          <div class="kpi"><div class="v">${de(i.rows_24h,s,this.lang)}</div><div class="l">${s("detail_rate")}</div></div>
        </div>

        <h4>${s("detail_daily",{n:e.days})}</h4>
        <div class="spark" role="img" aria-label=${s("detail_daily",{n:e.days})}>
          ${e.daily.map((_,g)=>r`<div title=${`${y(_,this.lang)}`} style="height:${Math.max(_/o*100,_?3:0)}%"
            class=${g===e.daily.length-1?"today":""}></div>`)}
        </div>

        ${e.sample_rows?r`<p class="small">${s("detail_attr_only",{n:y(e.sample_attr_only,this.lang),total:y(e.sample_rows,this.lang)})}</p>`:d}
        ${(e.drivers||[]).length?r`<h4>${s("detail_drivers")}</h4>
              ${e.drivers.map(_=>r`<div class="attr"><code>${_.name}</code>
                  ${_.driver?r`<span class="tag warn">${s("detail_driver")}</span>`:d}
                  <span class="spacer"></span>
                  <span class="muted small">${s("detail_driver_values",{share:S(_.share,this.lang),rate:S(_.change_rate,this.lang),bytes:p(_.bytes,this.lang)})}</span></div>`)}
              <p class="muted small">${s("detail_drivers_hint")}</p>`:d}
        ${e.attributes.length?r`<h4>${s("detail_attributes",{n:y(e.attribute_variants,this.lang)})}</h4>
              ${e.attributes.map(_=>r`<div class="attr"><code>${_.name}</code><span class="spacer"></span><span class="muted small">${p(_.bytes,this.lang)}</span></div>`)}
              <p class="muted small">${s("detail_attributes_hint")}</p>`:d}

        <h4>${s("detail_usage")}</h4>
        <ul class="usage">
          ${h.length?r`<li>${s("detail_automations")}: ${h.join(", ")}</li>`:d}
          ${c.length?r`<li>${s("detail_scripts")}: ${c.join(", ")}</li>`:d}
          ${(n.helpers||[]).map(_=>r`<li>${s("detail_helper",{title:_.title,domain:_.domain})}
            ${["statistics","history_stats","filter"].includes(_.domain)?r`<span class="tag ok">${s("protected_history_reader")}</span>`:d}</li>`)}
          ${(n.dashboards||[]).map(_=>r`<li>${s("detail_dashboard",{title:_.dashboard,card:_.card,days:_.days})}</li>`)}
          ${n.energy?r`<li>${s("note_energy")}</li>`:d}
          ${(n.statistics_cards||[]).length?r`<li>${s("detail_statistics_cards",{titles:n.statistics_cards.join(", ")})}</li>`:d}
          ${(n.yaml||[]).length?r`<li>${s("detail_yaml")}: ${n.yaml.map(_=>`${_.file}:${_.line}`).join(", ")}</li>`:d}
          ${this._otherCards(n).length?r`<li>${s("detail_dashboard_cards",{titles:this._otherCards(n).join(", ")})}</li>`:d}
          ${(n.dynamic||[]).length?r`<li class="muted">${s("detail_dynamic",{files:n.dynamic.join(", ")})}</li>`:d}
          ${!h.length&&!c.length&&!(n.helpers||[]).length&&!(n.dashboards||[]).length&&!n.energy&&!(n.statistics_cards||[]).length&&!(n.yaml||[]).length&&!(n.dashboard_cards||[]).length?r`<li class="muted">${s("detail_unused")}</li>`:d}
        </ul>
        <p class="muted small">${s("detail_usage_limits")}</p>

        ${a?.action?r`<div class="banner ${a.conflict?"":"info"}" style="margin:12px 0">
              <div class="txt"><b>${s("suggested",{tier:this._tierLabel(a.action)})}</b><br />${this._reasonText(a,t)}
                ${a.saving?r`<br /><span class="muted small">${s("detail_saving",{bytes:p(a.saving,this.lang)})}</span>`:d}</div>
              <button class="btn primary" @click=${()=>this._accept([e.entity_id])}>${s("inbox_accept")}</button>
            </div>`:d}

        ${this._renderTemplate(e,a)}

        <h4>${s("col_retention")}</h4>
        ${t?this._tierSelect(t,_=>this._setValue([t],_)):d}
        <p class="small">${s(`impact_${l}`,{days:ce[l]??e.keep_days})}</p>
        ${this._renderInspector(e.entity_id)}
      `}async _loadRaw(e,t,s=!1){let i=this._raw?.entity_id===e&&this._raw.kind===t?this._raw:null;this._raw={entity_id:e,kind:t,rows:s&&i?i.rows:[],next:null,loading:!0};try{let a=await this._ws("raw_rows",{entity_id:e,kind:t,...s&&i?.next?{before:i.next}:{},limit:50});this._raw={entity_id:e,kind:t,rows:[...s&&i?i.rows:[],...a.rows],next:a.next,loading:!1}}catch(a){this._raw=void 0,this._showToast(this.t("error",{msg:a.message}))}}_renderInspector(e){let t=this.t,s=this._raw?.entity_id===e?this._raw:null,a=(this._rowById(e)?.stat_rows||0)>0?["states","statistics","statistics_short_term"]:["states"],n=o=>o==null?"\u2013":typeof o=="number"?y(Math.round(o*1e3)/1e3,this.lang):o;return r`<details class="inspector" @toggle=${o=>{o.target.open&&!s&&this._loadRaw(e,"states")}}>
        <summary><h4>${t("raw_title")}</h4></summary>
        <p class="muted small" style="margin-top:0">${t("raw_hint")}</p>
        ${a.length>1?r`<div class="segmented" role="tablist">${a.map(o=>r`<button role="tab" aria-selected=${s?.kind===o?"true":"false"}
                @click=${()=>this._loadRaw(e,o)}>${t(`raw_${o}`)}</button>`)}</div>`:d}
        ${s?r`${s.rows.length===0&&!s.loading?r`<p class="muted small">${t("raw_empty")}</p>`:d}
              ${s.kind==="states"?r`<div class="raw-list">${s.rows.map(o=>r`<div class="raw-row">
                      <span class="muted small">${k(o.ts,this.lang,!0)}</span>
                      <b>${o.state??"\u2013"}</b>
                      ${o.attributes?r`<details><summary class="small muted">${t("raw_attributes",{bytes:p(o.attributes.length,this.lang)})}</summary><pre>${this._prettyJson(o.attributes)}</pre></details>`:d}
                    </div>`)}</div>`:r`<div class="table-scroll"><table class="raw-table"><thead><tr><th>${t("raw_start")}</th><th class="num">mean</th><th class="num">min</th><th class="num">max</th><th class="num">state</th><th class="num">sum</th></tr></thead>
                    <tbody>${s.rows.map(o=>r`<tr><td>${k(o.ts,this.lang)}</td><td class="num">${n(o.mean)}</td><td class="num">${n(o.min)}</td><td class="num">${n(o.max)}</td><td class="num">${n(o.state)}</td><td class="num">${n(o.sum)}</td></tr>`)}</tbody></table></div>`}
              ${s.loading?r`<div class="center"><span class="spinner"></span></div>`:d}
              ${s.next&&!s.loading?r`<button class="btn" @click=${()=>this._loadRaw(e,s.kind,!0)}>${t("raw_more")}</button>`:d}`:d}
      </details>`}_prettyJson(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}}_templateFits(e,t){return["attributes","attribute_updates"].includes(t?.reason)||(e.drivers||[]).some(s=>s.driver)?!0:e.sample_rows>=20&&e.sample_attr_only/e.sample_rows>=.5}_renderTemplate(e,t){let s=this.t;if(!this._templateFits(e,t))return d;let i=this.hass.states[e.entity_id];if(!i)return d;let a=this._tpl?.entity_id===e.entity_id?this._tpl:{entity_id:e.entity_id,attrs:new Set},n=Object.keys(i.attributes).filter(h=>!["friendly_name","unit_of_measurement","device_class","state_class","icon","entity_picture","attribution","supported_features"].includes(h)),o=(h,c)=>{let _=new Set(a.attrs);c?_.add(h):_.delete(h),this._tpl={...a,attrs:_,result:void 0}},l=a.result;return r`<h4>${s("tpl_title")}</h4>
        <p class="small" style="margin-top:0">${s("tpl_hint")}</p>
        ${n.length?r`<details class="tpl-attrs"><summary class="small">${s("tpl_attrs",{n:a.attrs.size})}</summary>
              ${n.slice(0,40).map(h=>r`<label class="check-line small"><input type="checkbox"
                .checked=${le(a.attrs.has(h))} ?disabled=${!a.attrs.has(h)&&a.attrs.size>=10}
                @change=${c=>o(h,c.target.checked)} /><code>${h}</code></label>`)}
            </details>`:d}
        <button class="btn" ?disabled=${a.loading} @click=${()=>this._buildTemplate(a)}>${s("tpl_build")}</button>
        ${l?r`<div class="tpl-out">
              <pre>${l.yaml}</pre>
              <button class="btn" @click=${()=>this._copy(l.yaml)}>${s("tpl_copy")}</button>
              <ol class="small tpl-steps">
                <li>${s(l.packages?"tpl_step_add_packages":"tpl_step_add")}</li>
                <li>${s("tpl_step_reload")}</li>
                <li>${s("tpl_step_new",{ids:l.entity_ids.join(", ")})}</li>
                ${l.switch.length?r`<li>${s("tpl_step_switch")}<ul>${l.switch.map(h=>r`<li>${this._switchText(h)}</li>`)}</ul></li>`:d}
                <li>${s("tpl_step_drop")}</li>
              </ol>
              ${l.taken.length?r`<p class="small warn-text">${s("tpl_taken",{ids:l.taken.join(", ")})}</p>`:d}
            </div>`:d}`}_switchText(e){let t=this.t;return e.type==="dashboard"?t("detail_dashboard",{title:e.dashboard,card:e.card,days:e.days}):e.type==="statistics_card"?t("tpl_switch_statistics",{title:e.dashboard}):e.type==="helper"?t("detail_helper",{title:e.title,domain:e.domain}):t("note_energy")}async _buildTemplate(e){this._tpl={...e,loading:!0};try{let t=await this._ws("attribute_template",{entity_id:e.entity_id,attributes:[...e.attrs],language:this.hass.language});this._tpl={...e,loading:!1,result:t}}catch(t){this._tpl={...e,loading:!1},this._showToast(this.t("error",{msg:t.message}))}}async _copy(e){try{await navigator.clipboard.writeText(e),this._showToast(this.t("tpl_copied"))}catch{this._showToast(this.t("tpl_copy_failed"))}}};var at={ok:"mdi:check-circle",warning:"mdi:alert",error:"mdi:alert-circle",info:"mdi:information-outline",unknown:"mdi:help-circle-outline"},Dt=["backup_unavailable","backup_no_location","backup_failed","backup_not_verified"],nt=u=>class extends u{async _loadHealth(e=!1){try{this._health=await this._ws("health",{force:e})}catch(t){this._showToast(this.t("error",{msg:t.message}))}}async _attest(e,t){try{this._health=await this._ws("attest",{key:e,done:t})}catch(s){this._showToast(this.t("error",{msg:s.message}))}}async _checkIntegrity(){this._working="safety_integrity";try{let e=await this._ws("check_integrity");this._showToast(this.t(`integrity_${e.result}`)),await Promise.all([this._loadOverview(),this._loadHealth(!0)])}catch(e){this._showToast(this.t("error",{msg:e.message}))}finally{this._working=null}}async _stopAnalysis(){try{await this._ws("stop_analysis")}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_busyText(e){if(!e)return"";let[t,s]=String(e).split(":"),i=this.t(`busy_${t}`),a=i===`busy_${t}`?t:i;return s!==void 0?`${a} ${s} %`:a}_renderAnalysisProgress(e){let t=e.analysis_progress;if(!e.analysis_running||!t)return d;let s=this.t,i=Math.round((t.share||0)*100);return r`<div class="progress-row">
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${i}>
          <div style="width:${i}%"></div>
        </div>
        <span class="muted small">${s(`phase_${t.phase}`)} · ${i} %</span>
        <button class="btn" @click=${this._stopAnalysis}>${s("stop")}</button>
      </div>`}_repackPlanText(e){let t=this.t;if(!e)return t("repack_desc");let s={need:p(e.need,this.lang),free:p(e.disk_free,this.lang),ram:p(e.options?.memory?.need_ram,this.lang),ram_free:e.ram_free===null||e.ram_free===void 0?"?":p(e.ram_free,this.lang),mem_need:p(e.options?.memory?.need,this.lang),gain:p(e.free_pages_bytes,this.lang),live:p(e.live_bytes,this.lang),missing:p(e.missing_bytes,this.lang),reduce:p(e.reduce_bytes,this.lang)};return e.free_pages_bytes?e.method?t(`repack_plan_${e.method}`,s):t("repack_plan_none",s):t(e.can_convert?"repack_convert_only":"repack_nothing")}_safetyItems(e){if(!e)return d;let t=this.t,s=[],i=e.space,a={need:p(i.need,this.lang),free:p(i.free,this.lang),work:p(i.work,this.lang),backup:p(i.backup,this.lang)},n=i.backup?` ${t(i.backup_source==="previous"?"safety_space_split_previous":"safety_space_split_file",a)}`:"";s.push(r`<li class=${i.ok?"":"bad"}>${t(i.ok?"safety_space_ok":"safety_space_low",a)}${n}</li>`),e.integrity!=="unsupported"&&s.push(r`<li>${t(`safety_integrity_${e.integrity}`)}</li>`);let o=e.backup;return s.push(r`<li class=${o.action==="unavailable"?"bad":""}>${t(`safety_backup_${o.action}`,{name:o.name||"",date:o.date?k(o.date,this.lang):"",agents:(o.agents||[]).map(l=>this._agentName(l)).join(", "),undo:p(i.undo||0,this.lang)})}${o.action==="undo"&&o.fallback?t("safety_backup_undo_fallback"):""}</li>`),r`<h4>${t("safety_title")}</h4><ul class="safety">${s}</ul>`}_handleBlocked(e,t){let s=this.t,i=Dt.includes(e.reason);this._dialog={title:s("blocked_title"),body:r`<p>${s(`blocked_${e.reason}`,{detail:e.detail||"",need:p(Number(e.detail)||0,this.lang)})}</p>
          ${e.detail&&e.reason!=="no_space"?r`<p class="muted small"><code>${e.detail}</code></p>`:d}
          ${i?r`<p class="muted small">${s("blocked_without_backup_hint")}</p>`:d}`,confirm:s(i?"continue_without_backup":"ok"),danger:i,action:i?()=>t():()=>{}}}_checkRow(e,t=d){let s=this.t,i={...e.values||{}};for(let a of["bytes","need","free","typical","per_day","before_per_day"])typeof i[a]=="number"&&(i[a]=p(i[a],this.lang));i.at&&(i.at=k(i.at,this.lang)),i.date&&(i.date=k(i.date,this.lang)),Array.isArray(i.agents)&&(i.agents=i.agents.map(a=>this._agentName(a)).join(", ")),typeof i.share=="number"&&(i.share=`${Math.round(i.share*100)} %`),typeof i.count=="number"&&(i.count=y(i.count,this.lang));for(let[a,n]of Object.entries(i))n==null&&(i[a]="\u2013");return r`<div class="check ${e.status}">
        <ha-icon icon=${at[e.status]||at.unknown}></ha-icon>
        <div class="txt">
          <div>${s(`check_${e.key}`)}</div>
          <div class="muted small">${s(`check_${e.key}_${e.status}`,i)}</div>
          ${e.key==="writers"&&Array.isArray(e.values?.writers)?r`<ul class="group-members">${e.values.writers.map(a=>r`<li><button class="linklike" @click=${()=>this._openDetail?.(a.entity_id)}>${this._rowById?.(a.entity_id)?.name||a.entity_id}</button>
                  <span class="muted small">${a.before===null||a.before===void 0?s("writer_new",{now:y(a.per_day,this.lang)}):s("writer_rate",{before:y(a.before,this.lang),now:y(a.per_day,this.lang)})}</span></li>`)}</ul>`:d}
        </div>
        ${t}
      </div>`}_healthCard(e){let t=this.t,s=this._health?.[e];return s?r`<div class="card">
        <div class="row">
          <h2 style="margin:0">${t(`health_${e}`)}</h2>
          <span class="tag ${s.status==="ok"?"ok":s.status==="error"?"bad":"warn"}">${t(`status_${s.status}`)}</span>
          <span class="spacer"></span>
          ${e==="backups"?r`<button class="btn" @click=${()=>this._navigate("/config/backup/settings")}>${t("backup_settings")}</button>`:d}
          <button class="btn" ?disabled=${!!this._working} @click=${()=>this._loadHealth(!0)}>${t("check_again")}</button>
        </div>
        ${s.checks.map(i=>this._checkRow(i,this._checkAction(i)))}
      </div>`:r`<div class="card"><h2>${t(`health_${e}`)}</h2><div class="center"><span class="spinner"></span></div></div>`}async _ackWriters(){try{await this._ws("ack_writers"),this._showToast(this.t("writers_acked")),await this._loadHealth(!0)}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_checkAction(e){let t=this.t;if(e.key==="integrity")return r`<button class="btn" ?disabled=${!!this._working} @click=${this._checkIntegrity}>${t("integrity_run")}</button>`;if(e.key==="emergency_kit"||e.key==="restore_test"){let s=e.status==="ok";return r`<button class="btn" @click=${()=>this._attest(e.key,!s)}>${t(s?"attest_undo":`attest_${e.key}`)}</button>`}return e.key==="writers"&&e.status==="warning"?r`<button class="btn" ?disabled=${!!this._working} @click=${this._ackWriters}>${t("writers_ack")}</button>`:e.key==="statistics"&&e.status==="warning"?r`<button class="btn" @click=${()=>this._navigate("/developer-tools/statistics")}>${t("open")}</button>`:d}};var rt=ge`
  :host {
    display: block;
    height: 100%;
    background: var(--primary-background-color);
    color: var(--primary-text-color);
    font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, Roboto, sans-serif));
    --sm-radius: var(--ha-card-border-radius, 12px);
    --sm-gap: 16px;
    --sm-c1: var(--primary-color, #03a9f4);
    --sm-c2: #7e57c2;
    --sm-c3: #26a69a;
    --sm-c4: #ffa726;
    --sm-c5: #ec407a;
    --sm-c6: #8d6e63;
    --sm-c7: #78909c;
    --sm-free: var(--divider-color, rgba(127, 127, 127, 0.2));
  }
  header {
    position: sticky;
    top: 0;
    z-index: 4;
    background: var(--app-header-background-color, var(--primary-color));
    color: var(--app-header-text-color, var(--text-primary-color, #fff));
    border-bottom: var(--app-header-border-bottom, none);
  }
  .toolbar {
    display: flex;
    align-items: center;
    height: var(--header-height, 56px);
    padding: 0 12px;
    gap: 8px;
  }
  .toolbar .title {
    flex: 1;
    font-size: 20px;
    font-weight: 400;
    margin-left: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon-btn {
    background: none;
    border: none;
    color: inherit;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .icon-btn:hover { background: rgba(127, 127, 127, 0.15); }
  .icon-btn[disabled] { opacity: 0.4; cursor: default; }
  nav.tabs {
    display: flex;
    gap: 4px;
    padding: 0 8px;
    overflow-x: auto;
    scrollbar-width: none;
  }
  nav.tabs button {
    background: none;
    border: none;
    color: inherit;
    opacity: 0.75;
    padding: 12px 16px;
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.02em;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    white-space: nowrap;
  }
  nav.tabs button[aria-selected="true"] {
    opacity: 1;
    border-bottom-color: currentColor;
  }
  main {
    max-width: 1400px;
    margin: 0;
    padding: var(--sm-gap);
    padding-bottom: 96px;
    display: grid;
    gap: var(--sm-gap);
  }
  .grid2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--sm-gap);
  }
  @media (max-width: 860px) {
    .grid2 { grid-template-columns: 1fr; }
  }
  .card {
    background: var(--card-background-color, var(--ha-card-background, #fff));
    border-radius: var(--sm-radius);
    border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--divider-color, #e0e0e0));
    box-shadow: var(--ha-card-box-shadow, none);
    padding: 16px;
    min-width: 0;
  }
  .card h2 {
    margin: 0 0 12px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .card h2 .spacer { flex: 1; }
  .muted { color: var(--secondary-text-color); }
  .small { font-size: 12px; }
  .hero {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    align-items: center;
  }
  @media (max-width: 560px) {
    .hero { grid-template-columns: 1fr; }
  }
  .hero .big {
    font-size: 40px;
    font-weight: 300;
    line-height: 1.1;
  }
  .stack {
    display: flex;
    height: 14px;
    border-radius: 7px;
    overflow: hidden;
    background: var(--sm-free);
    margin: 8px 0;
  }
  .stack > div { height: 100%; min-width: 2px; }
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 14px;
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  .legend span { display: inline-flex; align-items: center; gap: 6px; }
  .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; flex: none; }
  .rec {
    display: grid;
    grid-template-columns: 40px 1fr auto;
    gap: 12px;
    align-items: center;
    padding: 12px 0;
    border-top: 1px solid var(--divider-color);
  }
  .rec:first-of-type { border-top: none; }
  .rec .ico {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--sm-c1) 14%, transparent);
    color: var(--sm-c1);
  }
  .rec .t { font-weight: 500; }
  .rec .amount { font-weight: 500; white-space: nowrap; }
  @media (max-width: 560px) {
    .rec { grid-template-columns: 40px 1fr; }
    .rec .act { grid-column: 2; justify-self: start; flex-wrap: nowrap; gap: 6px; }
    .rec .act .btn { padding: 0 12px; }
  }
  .btn {
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    border-radius: 18px;
    padding: 0 16px;
    height: 36px;
    border: 1px solid var(--divider-color);
    background: transparent;
    color: var(--primary-color);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
  }
  .btn.primary {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  .btn.danger { color: var(--error-color, #db4437); }
  .btn.primary.danger {
    background: var(--error-color, #db4437);
    border-color: var(--error-color, #db4437);
    color: #fff;
  }
  .btn[disabled] { opacity: 0.45; cursor: default; }
  .row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .row .spacer { flex: 1; }
  .kpis {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }
  .kpi .v { font-size: 22px; font-weight: 400; }
  .kpi .l { font-size: 12px; color: var(--secondary-text-color); }
  .banner {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 12px 16px;
    border-radius: var(--sm-radius);
    background: color-mix(in srgb, var(--warning-color, #ffa600) 14%, var(--card-background-color, #fff));
    border: 1px solid color-mix(in srgb, var(--warning-color, #ffa600) 40%, transparent);
  }
  .banner.info {
    background: color-mix(in srgb, var(--info-color, #039be5) 12%, var(--card-background-color, #fff));
    border-color: color-mix(in srgb, var(--info-color, #039be5) 35%, transparent);
  }
  .banner .txt { flex: 1; }
  .filters {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 8px;
  }
  input[type="search"], select {
    font: inherit;
    font-size: 14px;
    height: 36px;
    padding: 0 10px;
    border-radius: 8px;
    border: 1px solid var(--divider-color);
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
  }
  input[type="search"] { flex: 1; min-width: 160px; }
  .chip {
    font: inherit;
    font-size: 13px;
    height: 32px;
    padding: 0 12px;
    border-radius: 16px;
    border: 1px solid var(--divider-color);
    background: transparent;
    color: var(--primary-text-color);
    cursor: pointer;
  }
  .chip[aria-pressed="true"] {
    background: color-mix(in srgb, var(--primary-color) 16%, transparent);
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
  table { width: 100%; border-collapse: collapse; font-size: 14px; }
  th {
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: var(--secondary-text-color);
    padding: 8px 6px;
    border-bottom: 1px solid var(--divider-color);
    white-space: nowrap;
  }
  td { padding: 8px 6px; border-bottom: 1px solid var(--divider-color); vertical-align: middle; }
  tr.changed td { background: color-mix(in srgb, var(--primary-color) 7%, transparent); }
  td.num, th.num { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
  .ent .n { font-weight: 500; overflow-wrap: anywhere; }
  .ent .i { font-size: 12px; color: var(--secondary-text-color); overflow-wrap: anywhere; }
  .sizebar { height: 4px; border-radius: 2px; background: var(--sm-c1); margin: 4px 0 0 auto; opacity: 0.7; }
  .tag {
    display: inline-block;
    font-size: 11px;
    padding: 1px 8px;
    border-radius: 10px;
    background: var(--sm-free);
    color: var(--secondary-text-color);
    margin-left: 4px;
    white-space: nowrap;
  }
  .tag.warn { background: color-mix(in srgb, var(--warning-color, #ffa600) 22%, transparent); color: var(--primary-text-color); }
  .tag.ok { background: color-mix(in srgb, var(--success-color, #43a047) 22%, transparent); color: var(--primary-text-color); }
  .tag.bad { background: color-mix(in srgb, var(--error-color, #db4437) 20%, transparent); color: var(--primary-text-color); }
  @media (max-width: 700px) {
    table.responsive thead { display: none; }
    table.responsive tr {
      display: grid;
      grid-template-columns: 28px 1fr auto;
      gap: 4px 8px;
      padding: 10px 0;
      border-bottom: 1px solid var(--divider-color);
    }
    table.responsive td { border: none; padding: 0; }
    table.responsive td.c-check { grid-row: span 3; }
    table.responsive td.c-ent { grid-column: 2 / 4; }
    table.responsive td.c-size { grid-column: 2 / 4; text-align: left; }
    table.responsive .sizebar { margin-left: 0; }
    table.responsive td.c-rate, table.responsive td.c-rows { display: none; }
    table.responsive td.c-tier { grid-column: 2 / 4; }
    table.responsive td.c-tier select { width: 100%; }
    table.responsive.noselect tr { grid-template-columns: 1fr auto; }
    table.responsive.noselect td.c-ent, table.responsive.noselect td.c-tier { grid-column: 1 / 3; }
    table.responsive.noselect td.c-size { grid-column: 1 / 3; }
  }
  .draftbar {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 16px;
    z-index: 6;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px 10px 20px;
    border-radius: 28px;
    background: var(--card-background-color, #fff);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
    border: 1px solid var(--divider-color);
    max-width: calc(100vw - 32px);
    flex-wrap: wrap;
  }
  .draftbar .txt { font-weight: 500; }
  .toast {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 84px;
    z-index: 7;
    background: var(--primary-text-color);
    color: var(--card-background-color, #fff);
    padding: 10px 18px;
    border-radius: 8px;
    font-size: 14px;
    max-width: calc(100vw - 48px);
  }
  .scrim {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  .dialog {
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    border-radius: 24px;
    padding: 24px;
    width: min(520px, 100%);
    max-height: 80vh;
    overflow: auto;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
  .dialog h3 { margin: 0 0 12px; font-size: 20px; font-weight: 400; }
  .dialog ul { padding-left: 18px; margin: 8px 0; }
  .dialog li { margin: 4px 0; overflow-wrap: anywhere; }
  .dialog .actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 20px; }
  .list-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto auto;
    gap: 12px;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid var(--divider-color);
  }
  .list-row:first-of-type { border-top: none; }
  .bar {
    height: 6px;
    border-radius: 3px;
    background: var(--sm-free);
    overflow: hidden;
    margin-top: 6px;
  }
  .bar > div { height: 100%; }
  .center { text-align: center; padding: 48px 16px; }
  .spinner {
    width: 28px;
    height: 28px;
    border: 3px solid var(--divider-color);
    border-top-color: var(--primary-color);
    border-radius: 50%;
    animation: spin 0.9s linear infinite;
    display: inline-block;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  ha-icon { --mdc-icon-size: 22px; }

  .linklike {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    color: inherit;
    text-align: left;
    cursor: pointer;
  }
  .linklike:hover { color: var(--primary-color); text-decoration: underline; }
  .chips { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }
  .chips .tag { margin-left: 0; }
  .tagbtn { border: none; cursor: pointer; font: inherit; font-size: 11px; }
  .rec.conflict .ico {
    background: color-mix(in srgb, var(--warning-color, #ffa600) 18%, transparent);
    color: var(--warning-color, #ffa600);
  }
  svg.chart.window { cursor: crosshair; touch-action: pan-y; user-select: none; }
  .list-row code { overflow-wrap: anywhere; }
  .facet-bar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin: 4px 0 8px; }
  .facet-bar .spacer { flex: 1; }
  details.inspector > summary { cursor: pointer; list-style: revert; }
  details.inspector > summary h4 { display: inline; }
  .table-scroll { overflow-x: auto; }
  .window-bar { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
  .window-bar .spacer { flex: 1; }
  .raw-list { display: flex; flex-direction: column; gap: 4px; margin: 8px 0; }
  .raw-row { display: grid; grid-template-columns: auto 1fr; gap: 2px 12px; padding: 4px 0; border-bottom: 1px solid var(--divider-color); }
  .raw-row details { grid-column: 1 / -1; }
  .raw-row pre { max-height: 240px; overflow: auto; font-size: 12px; background: var(--secondary-background-color); padding: 8px; border-radius: 6px; margin: 4px 0; }
  .raw-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 8px 0; }
  .raw-table th, .raw-table td { padding: 3px 6px; border-bottom: 1px solid var(--divider-color); text-align: left; }
  .raw-table .num { text-align: right; font-variant-numeric: tabular-nums; }
  .facets { margin-top: -4px; }
  .facets select { max-width: 180px; }
  svg.treemap { width: 100%; height: auto; display: block; margin-bottom: 4px; }
  svg.treemap .tm { cursor: pointer; }
  svg.treemap .tm:hover rect { opacity: 0.85; }
  svg.treemap .tm-label { font-size: 12px; font-weight: 600; fill: #fff; pointer-events: none; }
  svg.treemap .tm-sub { font-size: 11px; fill: #fff; opacity: 0.9; pointer-events: none; }
  ul.changes { max-height: 220px; overflow: auto; margin: 4px 0 8px; padding-left: 18px; font-size: 14px; }
  .segmented {
    display: inline-flex;
    border: 1px solid var(--divider-color);
    border-radius: 18px;
    overflow: hidden;
  }
  .segmented button {
    font: inherit;
    font-size: 13px;
    background: transparent;
    color: var(--primary-text-color);
    border: none;
    padding: 0 14px;
    height: 32px;
    cursor: pointer;
  }
  .segmented button + button { border-left: 1px solid var(--divider-color); }
  .segmented button[aria-selected="true"] {
    background: color-mix(in srgb, var(--primary-color) 16%, transparent);
    color: var(--primary-color);
    font-weight: 500;
  }
  .restline {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    padding: 12px;
    margin-top: 8px;
    border-radius: 8px;
    background: var(--sm-free);
    font-size: 13px;
    color: var(--secondary-text-color);
  }
  .restline span { flex: 1; }
  .group { padding: 10px 0; border-top: 1px solid var(--divider-color); }
  .group:first-of-type { border-top: none; }
  .group-head { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .group-toggle { display: inline-flex; gap: 6px; align-items: baseline; }
  .chev { width: 12px; display: inline-block; color: var(--secondary-text-color); }
  .chart { width: 100%; height: auto; display: block; }
  .sheet-scrim { justify-content: flex-end; align-items: stretch; padding: 0; }
  .sheet {
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    width: min(480px, 100%);
    height: 100%;
    overflow: auto;
    padding: 20px 24px 32px;
    box-shadow: -8px 0 32px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
  }
  @media (max-width: 600px) {
    .sheet-scrim { align-items: flex-end; }
    .sheet { height: 88vh; border-radius: 20px 20px 0 0; padding: 16px 16px 32px; }
  }
  .sheet-head { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
  .sheet-head > div { flex: 1; min-width: 0; overflow-wrap: anywhere; }
  .sheet-head h3 { margin: 0; font-size: 20px; font-weight: 400; }
  .sheet h4 { margin: 18px 0 8px; font-size: 13px; font-weight: 500; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: 0.04em; }
  .spark { display: flex; align-items: flex-end; gap: 3px; height: 64px; }
  .spark > div { flex: 1; background: var(--sm-c1); opacity: 0.55; border-radius: 2px 2px 0 0; min-height: 0; }
  .spark > div.today { opacity: 1; }
  .attr { display: flex; align-items: center; gap: 8px; padding: 4px 0; border-bottom: 1px solid var(--divider-color); }
  .usage { padding-left: 18px; margin: 4px 0; }
  .usage li { margin: 4px 0; }
  table.noselect td.c-ent { padding-left: 0; }
  .sheet select { width: 100%; }
  .attr .spacer { flex: 1; }
  .obsolete { margin-top: 12px; padding: 8px 12px; border-radius: 8px; background: var(--sm-free); }
  h4.sub { margin: 16px 0 8px; font-size: 13px; font-weight: 500; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: 0.04em; }
  .fields { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
  .field { display: flex; flex-direction: column; gap: 4px; font-size: 14px; }
  .field.toggle { flex-direction: row; align-items: flex-start; gap: 10px; }
  .field input[type="number"], .field input[type="text"] {
    font: inherit; font-size: 14px; height: 36px; padding: 0 10px; border-radius: 8px;
    border: 1px solid var(--divider-color); background: var(--card-background-color, #fff);
    color: var(--primary-text-color); width: 100%; box-sizing: border-box;
  }
  .field input[type="number"] { width: 110px; }
  .field input[type="checkbox"] { width: 18px; height: 18px; margin-top: 2px; }
  .field input:disabled { opacity: 0.55; }
  .group-head .spacer { flex: 1; }
  .tagx { border: none; background: none; cursor: pointer; padding: 0 0 0 4px; font-size: 10px; color: inherit; }
  .check { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--divider-color); }
  .check:last-child { border-bottom: none; }
  .check .txt { flex: 1; min-width: 0; }
  .check ha-icon { flex: none; --mdc-icon-size: 22px; }
  .check.ok ha-icon { color: var(--success-color, #43a047); }
  .check.warning ha-icon { color: var(--warning-color, #ffa600); }
  .check.error ha-icon { color: var(--error-color, #db4437); }
  .check.info ha-icon, .check.unknown ha-icon { color: var(--secondary-text-color); }
  .check .btn { flex: none; }
  .progress-row { display: flex; align-items: center; gap: 12px; margin-top: 12px; flex-wrap: wrap; }
  .progress { flex: 1; min-width: 120px; height: 6px; border-radius: 3px; background: var(--divider-color); overflow: hidden; }
  .progress > div { height: 100%; background: var(--primary-color); transition: width 0.4s ease; }
  ul.safety { margin: 4px 0 8px; padding-left: 20px; }
  ul.safety li.bad { color: var(--error-color, #db4437); }
  .check-line { display: flex; gap: 10px; align-items: flex-start; margin-top: 12px; cursor: pointer; }
  .check-line input { width: 18px; height: 18px; margin-top: 2px; }
  .btn:disabled { opacity: 0.5; cursor: default; }
  .hint { color: var(--secondary-text-color); margin-top: 2px; }
  .hint::before { content: "💡 "; }
  .field.whatif { grid-column: 1 / -1; }
  h2.wrap { flex-wrap: wrap; row-gap: 2px; }
  @media (max-width: 600px) {
    h2.wrap .spacer { flex-basis: 100%; height: 0; }
  }
  .field.whatif .chips { margin-top: 4px; }
  .kind-auto { display: flex; gap: 6px; align-items: center; margin-top: 4px; }
  @media (max-width: 600px) {
    .list-row.kind-row { grid-template-columns: 1fr; gap: 6px; }
    .list-row.kind-row > div:nth-child(2) { display: none; }
    .list-row.kind-row select { width: 100%; }
  }
  .dead-actions { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin: 8px 0; }
  ul.dead-list { list-style: none; margin: 0; padding: 0; max-height: 360px; overflow: auto; }
  ul.dead-list .check-line { margin-top: 8px; }
  .tpl-attrs { margin: 4px 0 10px; }
  .tpl-attrs .check-line { margin-top: 6px; }
  .tpl-out pre {
    background: var(--secondary-background-color, #f5f5f5); padding: 10px; border-radius: 8px;
    overflow: auto; font-size: 12px; line-height: 1.4; max-height: 320px; white-space: pre;
  }
  .tpl-steps { padding-left: 20px; }
  .tpl-steps li { margin: 4px 0; }
  .warn-text { color: var(--warning-color, #c77700); }
  .explorer-roots { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; }
  .crumbs { margin: 8px 0 2px; overflow-wrap: anywhere; }
  .explorer { display: flex; gap: 16px; align-items: flex-start; flex-wrap: wrap; }
  .explorer-list { flex: 1; min-width: 240px; }
  .explorer-row { display: grid; grid-template-columns: 10px minmax(0, 1fr) 30% 80px; gap: 8px; align-items: center; padding: 3px 0; }
  .explorer-row .linklike { text-align: left; overflow-wrap: anywhere; }
  .explorer-row .bar { height: 6px; background: var(--divider-color, #e0e0e0); border-radius: 3px; overflow: hidden; }
  .explorer-row .bar span { display: block; height: 100%; background: var(--primary-color, #03a9f4); }
  .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
  svg.donut circle { transition: opacity 0.2s; }
  svg.donut circle:hover { opacity: 0.8; }
  .donut-total { font-size: 14px; fill: var(--primary-text-color); }
  label.typed { display: block; margin: 12px 0 4px; }
  label.typed input { display: block; margin-top: 6px; padding: 8px; font-size: 16px; width: 8em;
    border: 1px solid var(--divider-color, #ccc); border-radius: 6px; background: var(--card-background-color); color: var(--primary-text-color); }
  ul.group-members { margin: 6px 0 0; padding-left: 18px; max-height: 220px; overflow: auto; font-size: 13px; }
`;var zt={title:"Storage Manager",tab_overview:"\xDCbersicht",tab_database:"Datenbank",tab_backups:"Backups",tab_files:"Dateien",refresh:"Aktualisieren",loading:"Lade \u2026",free:"frei",of:"von",used:"belegt",disk:"Speicher",growth_none:"Kein messbares Wachstum in den letzten 7 Tagen.",growth_unknown:"Prognose ab ca. 12 Stunden Messdaten.",growth_full:"W\xE4chst um {growth}/Tag \u2013 voll in etwa {days} Tagen.",growth_ok:"W\xE4chst um {growth}/Tag.",reclaim_title:"Gr\xF6\xDFte Einsparpotenziale",reclaim_total:"Freigebbar: {bytes}, davon {safe} sofort mit \u201ESicher aufr\xE4umen\u201C",reclaim_none:"Gerade nichts Nennenswertes freizugeben. Gut gepflegt!",safe_cleanup:"Sicher aufr\xE4umen",preview:"Vorschau",free_now:"Jetzt freigeben",open:"\xD6ffnen",rec_backups:"Lokale Backups au\xDFerhalb der Rotation",rec_backups_desc:"{count} lokale Kopien liegen auch extern und fallen aus deinem Aufbewahrungsschema.",rec_backups_rotation_off:"Backup-Rotation ist aus",rec_backups_rotation_off_desc:"{count} lokale Kopien w\xE4ren laut Schema entbehrlich. Rotation in den Optionen aktivieren.",rec_backups_offsite:"Backups nur lokal",rec_backups_offsite_desc:"{count} Backups existieren nur auf diesem Ger\xE4t \u2013 richte ein externes Backup-Ziel ein.",rec_files:"Caches und alte Logs",rec_files_desc:"Dateien, die Home Assistant bei Bedarf neu erzeugt.",rec_orphans:"Verlauf gel\xF6schter Entit\xE4ten",rec_orphans_desc:"{count} Entit\xE4ten existieren nicht mehr, ihr Verlauf liegt noch in der Datenbank.",rec_statistics:"Statistiken gel\xF6schter Entit\xE4ten",rec_statistics_desc:"{count} Langzeitstatistiken ohne zugeh\xF6rige Entit\xE4t.",rec_repack:"Datenbank neu packen",rec_repack_desc:"Freie Seiten in der Datenbankdatei werden an das Dateisystem zur\xFCckgegeben.",rec_top_entities:"{count} Entit\xE4ten = {share} der Datenbank",rec_top_entities_desc:"Hier lohnt sich eine k\xFCrzere Aufbewahrung am meisten.",breakdown_title:"Speicher-Aufteilung",breakdown_unavailable:"Die Aufteilung nach Bereichen liefert nur der Supervisor (Home Assistant OS / Supervised).",cat_system:"System",cat_homeassistant:"Home Assistant",cat_apps_data:"Add-on-Daten",cat_apps_config:"Add-on-Konfiguration",cat_media:"Medien",cat_share:"Share",cat_backup:"Backups",cat_ssl:"SSL",cat_free:"Frei",history_title:"Verlauf",history_empty:"Noch nichts aufger\xE4umt.",history_total:"Insgesamt freigegeben: {bytes}",action_cleanup:"Aufr\xE4umen",action_purge_entities:"Verlauf bereinigt",action_retention:"Aufbewahrung nach Stufen",action_statistics_age:"Langzeitstatistik nach Alter",db_size:"Datenbank",db_engine:"Engine",db_keep:"Globale Aufbewahrung",days:"{n} Tage",db_analysis:"Analyse",db_analysis_never:"noch nie",db_analysis_running:"Analyse l\xE4uft \u2026",analyze:"Analysieren",db_estimated:"Gr\xF6\xDFen sind Sch\xE4tzungen aus Zeilen und Attributen.",db_calibrated:"Gr\xF6\xDFen sind anhand der echten Tabellengr\xF6\xDFen kalibriert.",search:"Suchen \u2026",all_domains:"Alle Domains",filter_changed:"Nur ge\xE4ndert",filter_orphans:"Nur verwaiste",sort_size:"Gr\xF6\xDFe",sort_rate:"Eintr\xE4ge/24 h",sort_name:"Name",col_entity:"Entit\xE4t",col_size:"Gr\xF6\xDFe",col_rate:"24 h",col_rows:"Eintr\xE4ge",col_retention:"Aufbewahrung",tier_default:"Standard ({days} Tage)",tier_7:"7 Tage",tier_3:"3 Tage",tier_1:"1 Tag",tier_drop:"Nur letzte Stunde",tier_excluded:"Nicht aufzeichnen",tier_excluded_needs_packages:"Nicht aufzeichnen (Packages n\xF6tig)",excluded_by_yaml:"Per YAML ausgeschlossen",orphan:"verwaist",show_more:"{n} weitere anzeigen",selected:"{n} ausgew\xE4hlt",set_for_selection:"Aufbewahrung f\xFCr Auswahl",clear_selection:"Auswahl aufheben",draft:"{n} \xC4nderungen",draft_one:"1 \xC4nderung",draft_estimate:"ca. {bytes} frei nach dem Anwenden",discard:"Verwerfen",apply:"Anwenden",applied:"\xC4nderungen angewendet.",restart_banner:"Ge\xE4nderte Ausschl\xFCsse ({n}) wirken erst nach einem Neustart.",restart:"Neu starten",restart_confirm:"Home Assistant jetzt neu starten?",packages_banner:"\u201ENicht aufzeichnen\u201C braucht einen Packages-Ordner. Die Reparaturmeldung zeigt die Zeile, die du in die configuration.yaml eintr\xE4gst.",packages_open:"Reparaturen \xF6ffnen",gui_recorder_banner:"GUI Recorder ist installiert. Seine Ausschl\xFCsse lassen sich \xFCbernehmen.",gui_recorder_import:"\xDCbernehmen",gui_recorder_done:"{n} Ausschl\xFCsse \xFCbernommen. Entferne danach den Eintrag \u201Erecorder: !include gui_recorder.yaml\u201C und deinstalliere GUI Recorder.",yaml_filters:"Vorhandene YAML-Filter bleiben unver\xE4ndert und werden respektiert.",yaml_include_warning:"Dein Recorder nutzt eine Include-Liste. Nur dort aufgef\xFChrte Entit\xE4ten werden aufgezeichnet.",events_title:"H\xE4ufigste Ereignisse",analysis_needed:"F\xFCr Gr\xF6\xDFen pro Entit\xE4t bitte zuerst analysieren.",bk_local:"Lokal",bk_count:"{n} Backups",bk_rotation_on:"Rotation aktiv",bk_rotation_off:"Rotation aus (in den Optionen aktivieren)",bk_schedule:"Behalte {d} t\xE4gliche, {w} w\xF6chentliche, {m} monatliche",bk_offsite_required:"Lokale Kopien werden nur gel\xF6scht, wenn das Backup auch extern liegt.",bk_unavailable:"Die Backup-Integration ist nicht geladen.",bk_none:"Keine lokalen Backups.",bk_apply:"Rotation jetzt anwenden",bk_reason_newest:"Neuestes",bk_reason_daily:"T\xE4glich",bk_reason_weekly:"W\xF6chentlich",bk_reason_monthly:"Monatlich",bk_reason_only_local:"Nur lokal vorhanden",bk_reason_unknown_date:"Datum unbekannt",bk_reason_rotated:"Lokal l\xF6schen",col_backup:"Backup",col_locations:"Orte",col_action:"Plan",files_hogs:"Aufr\xE4umbare Dateien",files_none:"Keine bekannten Platzfresser gefunden.",files_large:"Gro\xDFe Dateien im Konfigurationsordner",files_large_hint:"Nur zur Info \u2013 diese Dateien werden nie automatisch gel\xF6scht.",safety_safe:"sicher",safety_review:"pr\xFCfen",hog_esphome_build:"ESPHome-Build-Cache",hog_tts_cache:"Sprachausgabe-Cache (TTS)",hog_rotated_logs:"Alte Logdateien",hog_corrupt_databases:"Besch\xE4digte Datenbank-Kopien",hog_zigbee2mqtt_logs:"Zigbee2MQTT-Logs",hog_core_dumps:"Absturzabbilder",typed_confirm:"Das betrifft {n} Entit\xE4ten. Zum Best\xE4tigen die Zahl {n} eintippen:",apply_summary:"{n} \xC4nderungen anwenden:",apply_summary_one:"1 \xC4nderung anwenden:",apply_more:"und {n} weitere",plan_expired:"Die Vorschau ist abgelaufen. Bitte noch einmal \xF6ffnen; gel\xF6scht wurde nichts.",apply_deletes:"Sofort gek\xFCrzt bei {n} Entit\xE4ten: etwa {bytes}.",apply_deletes_one:"Sofort gek\xFCrzt bei 1 Entit\xE4t: etwa {bytes}.",apply_no_delete:"Es wird nichts gel\xF6scht, nur die Einstellungen \xE4ndern sich.",apply_many:"Die \xC4nderungen betreffen {n} Entit\xE4ten.",action_interrupted:"Unterbrochen (Neustart)",stats_ret_title:"Langzeitstatistik aufbewahren",stats_ret_hint:"Home Assistant beh\xE4lt die st\xFCndliche Langzeitstatistik f\xFCr immer. Hier legst du fest, ab welchem Alter sie gel\xF6scht wird, f\xFCr das Energie-Dashboard getrennt. Statistik-Karten und das Energie-Dashboard zeigen danach keine \xE4lteren Zeitr\xE4ume mehr. Der Verlauf (Zust\xE4nde) ist davon nicht betroffen.",stats_ret_other:"Alle Statistiken au\xDFer Energie",stats_ret_energy:"Statistiken des Energie-Dashboards",stats_ret_forever:"F\xFCr immer",stats_ret_years:"{n} Jahre",stats_ret_year:"1 Jahr",stats_ret_months:"{n} Monate",stats_ret_kept:"Bleibt vollst\xE4ndig erhalten.",stats_ret_frees:"Zu l\xF6schen: {rows} Zeilen (ca. {bytes}), die \xE4ltesten vom {date}. Betroffene Statistiken: {n}.",stats_ret_frees_one:"Zu l\xF6schen: 1 Zeile (ca. {bytes}) vom {date}. Betroffene Statistiken: {n}.",stats_ret_nothing_older:"Gerade nichts \xE4lter als diese Grenze.",stats_ret_active:"Wird jede Nacht angewendet: Zeilen, die die Grenze \xFCberschreiten, werden gel\xF6scht.",stats_ret_off:"Keine Grenze \u2013 alles bleibt.",stats_ret_pending:"Noch nicht angewendet. N\xE4chtlich gel\xF6scht wird erst, nachdem du einmal mit Vorschau und Sicherung angewendet hast.",stats_ret_apply:"Speichern und jetzt anwenden",stats_ret_saved:"Gespeichert.",stats_ret_preview_other:"Statistiken: {rows} Zeilen vor dem {date} (ca. {bytes}), betroffen: {n}",stats_ret_preview_energy:"Energie-Dashboard: {rows} Zeilen vor dem {date} (ca. {bytes}), betroffen: {n}",stats_ret_nothing:"Gerade nichts \xE4lter als die eingestellten Grenzen.",target_statistics_age:"alte Langzeitstatistik",busy_statistics_age:"Alte Langzeitstatistik wird gel\xF6scht",action_statistics_retention:"Aufbewahrung der Langzeitstatistik ge\xE4ndert",explorer_title:"Ordner erkunden",explorer_config:"Konfigurationsordner",explorer_hint:"Zeigt, was in einem Ordner Platz belegt. Nur lesend: hier wird nichts gel\xF6scht. Symbolische Links werden \xFCbersprungen, Dateien mit mehreren harten Links einmal gez\xE4hlt.",explorer_scanning:"Ordner wird gelesen \u2026",explorer_rest:"Rest",explorer_summary:"{size} in {files} Dateien \xB7 gelesen {date}",explorer_partial:"Abgebrochen nach {n} Eintr\xE4gen \u2013 Werte unvollst\xE4ndig.",explorer_warnings:"{n} Ordner nicht lesbar",explorer_rescan:"neu lesen",explorer_empty:"Leer.",explorer_more:"{n} weitere Ordner ({size})",explorer_own:"Dateien direkt in diesem Ordner",explorer_largest:"Gr\xF6\xDFte Dateien darunter",safety_backup_undo:"Die betroffenen Zeilen werden vorher gezielt gesichert (rund {undo} Platz); der Verlauf in der \xDCbersicht bietet danach \u201ER\xFCckg\xE4ngig\u201C.",safety_backup_undo_fallback:" Geht das nicht, wird stattdessen ein volles Backup erstellt.",busy_undo_export:"Betroffene Zeilen werden gesichert",busy_undo:"Gel\xF6schte Zeilen werden zur\xFCckgeholt",action_undo:"R\xFCckg\xE4ngig gemacht",undo_button:"R\xFCckg\xE4ngig",undo_done_at:"zur\xFCckgeholt",undo_expired:"Sicherung abgelaufen",undo_saved:"R\xFCckg\xE4ngig im Verlauf m\xF6glich.",undo_title:"Aufr\xE4umen r\xFCckg\xE4ngig machen",undo_body:"Die Zeilen, die beim Aufr\xE4umen am {date} gel\xF6scht wurden, kommen zur\xFCck:",undo_rows_states:"{n} Zust\xE4nde im Verlauf",undo_rows_states_one:"1 Zustand im Verlauf",undo_rows_statistics:"{n} Statistikzeilen",undo_rows_statistics_one:"1 Statistikzeile",undo_rows_events:"{n} Ereignisse",undo_rows_events_one:"1 Ereignis",undo_enable:"Dabei deaktivierte Entit\xE4ten werden wieder aktiviert: {n}.",undo_statistics_on:"Abgeschaltete Statistiken werden wieder eingeschaltet: {n} (wirkt nach einem Neustart).",undo_retention:"Die Aufbewahrung geht f\xFCr {n} Entit\xE4ten auf den Stand davor zur\xFCck, damit der n\xE4chste Lauf die Zeilen nicht wieder l\xF6scht.",undo_retention_one:"Die Aufbewahrung geht f\xFCr 1 Entit\xE4t auf den Stand davor zur\xFCck, damit der n\xE4chste Lauf die Zeilen nicht wieder l\xF6scht.",undo_include:"Wieder aufgezeichnet: {n} Entit\xE4ten (wirkt nach einem Neustart).",undo_include_one:"Wieder aufgezeichnet: 1 Entit\xE4t (wirkt nach einem Neustart).",undo_statistics_limits:"Die Grenze der Langzeitstatistik bleibt eingestellt, wird aber erst nach dem n\xE4chsten best\xE4tigten Lauf wieder jede Nacht angewendet.",undo_again:"Dieses Aufr\xE4umen wurde schon einmal r\xFCckg\xE4ngig gemacht. Vorhandene Zeilen werden \xFCbersprungen.",undo_note:"Was seither neu aufgezeichnet wurde, bleibt. Zeilen, die es schon gibt, werden \xFCbersprungen.",undo_confirm:"Zur\xFCckholen",undo_success:"{n} Zeilen zur\xFCckgeholt.",undo_error_missing:"Die Sicherungsdatei gibt es nicht mehr.",undo_error_incomplete:"Die Sicherungsdatei ist unvollst\xE4ndig und wird nicht verwendet.",undo_error_damaged:"Die Sicherungsdatei ist besch\xE4digt.",undo_error_format:"Die Sicherungsdatei stammt aus einer anderen Version von Storage Manager.",undo_error_schema:"Die Sicherung passt nicht mehr zur Datenbank, es fehlen Spalten ({missing}). Zur\xFCckholen ist nur mit dem vollen Backup m\xF6glich.",undo_schema_changed:"Die Sicherung stammt aus einem \xE4lteren Datenbankschema. Die Spalten wurden abgeglichen; was es nicht mehr gibt, wird weggelassen.",undo_error_no_space:"Zum Zur\xFCckholen fehlt Speicherplatz (n\xF6tig etwa {need}).",undo_error_unknown:"Unbekannte Sicherung.",hog_undo_files:"Sicherungen f\xFCr \u201ER\xFCckg\xE4ngig\u201C",delete:"L\xF6schen",maintenance:"Wartung",docker_title:"Ungenutzte Docker-Images",docker_desc:"L\xE4sst den Supervisor ungenutzte Images, Container und Build-Reste entfernen. Dauert einige Minuten.",repack_title:"Datenbank neu packen",repack_desc:"Gibt freie Seiten der Datenbankdatei zur\xFCck. Braucht etwa so viel freien Speicher wie die Datenbank gro\xDF ist.",repack_impossible:"Zu wenig freier Speicher f\xFCr das Neupacken.",run:"Ausf\xFChren",confirm_title:"Best\xE4tigen",confirm_cleanup:"Folgendes wird entfernt:",confirm_total:"Insgesamt ca. {bytes}",cancel:"Abbrechen",done_freed:"{bytes} freigegeben.",done:"Erledigt.",error:"Fehler: {msg}",busy:"L\xE4uft: {what} \u2026",unknown:"unbekannt",never:"nie",just_now:"gerade eben",ago:"vor {t}",not_admin:"Nur f\xFCr Administratoren.",options:"Optionen",obsolete:"{n} veraltete Eintr\xE4ge (\xE4lter als {days} Tage, ca. {bytes}) warten auf den n\xE4chtlichen Purge.",obsolete_purge:"Jetzt bereinigen",settings_title:"Recorder-Einstellungen",settings_hint:"Globale Aufbewahrung, Schreibintervall und Ausschluss-Filter f\xFCr Domains, Muster und Ereignisse.",settings_restart_hint:"\xC4nderungen landen in der Package-Datei und wirken nach einem Neustart. Einstellungen aus deiner eigenen YAML bleiben unangetastet.",settings_global:"Global",settings_filters:"Nicht aufzeichnen",settings_save:"Speichern",settings_saved:"Gespeichert \u2013 wirkt nach einem Neustart.",setting_purge_keep_days:"Aufbewahrung",setting_purge_keep_days_hint:"Wie viele Tage Verlauf Home Assistant beh\xE4lt (Standard 10).",setting_commit_interval:"Schreibintervall",setting_commit_interval_hint:"Sekunden zwischen Schreibvorg\xE4ngen. H\xF6her schont SD-Karten (Standard 5).",setting_auto_purge:"N\xE4chtlicher Purge",setting_auto_purge_hint:"L\xF6scht jede Nacht um 04:12 Daten, die \xE4lter als die Aufbewahrung sind.",setting_auto_repack:"Automatisch neu packen",setting_auto_repack_hint:"Packt die Datenbank jeden zweiten Sonntag nach dem Purge neu.",setting_locked:"In deiner configuration.yaml gesetzt \u2013 dort \xE4ndern.",unit_days:"Tage",unit_seconds:"s",filter_domains:"Domains",filter_domains_placeholder:"z. B. media_player \u2013 Enter",filter_domains_hint:"Alle Entit\xE4ten dieser Domains werden nicht aufgezeichnet.",filter_entity_globs:"Muster",filter_entity_globs_placeholder:"z. B. sensor.*_rssi \u2013 Enter",filter_entity_globs_hint:"Platzhalter * und ? wie in der Recorder-Konfiguration.",filter_event_types:"Ereignisse",filter_event_types_placeholder:"z. B. call_service \u2013 Enter",filter_event_types_hint:"Ereignistypen, die nicht gespeichert werden.",remove:"Entfernen",orphans_badge:"{n} verwaist",orphans_text:"{n} Ausschl\xFCsse passen auf nichts mehr, das existiert.",orphans_remove:"Aufr\xE4umen",orphans_removed:"{n} verwaiste Ausschl\xFCsse entfernt.",rate_seconds:"alle {n} s",rate_minutes:"alle {n} min",rate_per_day:"{n}\xD7 pro Tag",reason_noise:"Technischer Diagnosewert \u2013 den Verlauf braucht man praktisch nie.",reason_noise_statistics:"Technischer Wert mit Langzeitstatistik \u2013 1 Tag Verlauf gen\xFCgt, die Statistik bleibt.",reason_attributes:"{share} des Speichers stecken in Attributen, nicht im Zustand.",reason_statistics_kept:"Neuer Wert {rate}. Die st\xFCndliche Langzeitstatistik bleibt dauerhaft erhalten.",reason_frequent:"Neuer Wert {rate} \u2013 meist reicht ein kurzer Verlauf.",reason_energy:"Wird im Energie-Dashboard genutzt \u2013 Aufzeichnung bleibt, nur der Verlauf wird k\xFCrzer.",reason_conflict_dashboard:"Ein Dashboard zeigt {days} Tage Verlauf \u2013 die aktuelle Aufbewahrung ist k\xFCrzer.",reason_conflict_energy:"Wird im Energie-Dashboard genutzt \u2013 ohne Aufzeichnung fehlen dort Daten.",reason_conflict_history_reader:"Ein Helfer liest den Verlauf dieser Entit\xE4t \u2013 er sollte nicht gek\xFCrzt sein.",protected_history_reader:"Verlauf wird von einem Helfer gelesen",protected_dashboard:"Dashboard braucht den vollen Verlauf",note_automation:"In {n} Automationen/Skripten",note_automation_hint:"Automationen nutzen den Live-Zustand \u2013 der Verlauf wird daf\xFCr nicht gebraucht.",note_dashboard:"Dashboard: {days} Tage",note_energy:"Energie-Dashboard",note_statistics:"Langzeitstatistik",note_statistics_hint:"St\xFCndliche Mittel-, Min- und Max-Werte bleiben unabh\xE4ngig von der Aufbewahrung erhalten.",note_diagnostic:"Diagnose",inbox_title:"Empfehlungen",inbox_summary:"{n} Empfehlungen \xB7 ca. {bytes}",inbox_empty:"Keine Empfehlungen \u2013 die Datenbank ist gut eingestellt.",inbox_hint:"\xDCbernommene Empfehlungen landen im Entwurf und werden erst mit \u201EAnwenden\u201C wirksam.",inbox_show_dismissed:"Abgelehnte wieder anzeigen ({n})",inbox_accept_all:"Alle \xFCbernehmen ({n})",inbox_in_draft:"Im Entwurf",inbox_dismiss:"Ablehnen",inbox_accept:"\xDCbernehmen",effect_title:"Wirkung",effect_waiting:"Nach der n\xE4chsten Analyse siehst du hier, was deine \xC4nderungen gebracht haben.",effect_since_change:"Datei seit {date}: {delta} ({bytes}).",effect_no_changes:"Noch keine \xC4nderungen \u2013 der Verlauf zeigt die normale Entwicklung.",effect_need_samples:"Der Verlauf entsteht mit jeder Analyse (t\xE4glich und nach jeder \xC4nderung).",view_top:"Top-Verursacher",view_groups:"Nach Integration",view_all:"Alle",view_total:"{n} Entit\xE4ten \xB7 {bytes}",top_hint:"Diese {n} Entit\xE4ten machen {share} der Datenbank aus.",top_rest:"{n} weitere Entit\xE4ten = {bytes} ({share}) \u2013 hier gibt es nichts zu tun.",top_show_all:"Alle anzeigen",group_count:"Entit\xE4ten: {n}",group_accept:"Alle \xFCbernehmen ({n} \xB7 {bytes})",filter_advice:"Mit Empfehlung",suggested:"Empfohlen: {tier}",detail_rate:"H\xE4ufigkeit",detail_daily:"Eintr\xE4ge pro Tag (letzte {n} Tage)",detail_attributes:"Gr\xF6\xDFte Attribute ({n} Varianten gespeichert)",detail_attributes_hint:"Jede neue Attribut-Kombination wird einmal gespeichert. H\xE4ufig wechselnde Attribute wie Zeitstempel oder Vorhersagen erzeugen viele Varianten.",detail_usage:"Verwendung",detail_automations:"Automationen",detail_scripts:"Skripte",detail_helper:"Helfer \u201E{title}\u201C ({domain})",detail_dashboard:"Dashboard \u201E{title}\u201C: {card}, {days} Tage",detail_unused:"Keine Verwendung gefunden.",detail_usage_limits:"Erkannt werden Automationen, Skripte, Helfer (UI und YAML), Integrationen, Dashboards, das Energie-Dashboard und w\xF6rtliche Erw\xE4hnungen in YAML-Dateien. Nicht erkennbar: Templates, die IDs zusammensetzen oder \xFCber Bereiche und Labels gehen, und alles au\xDFerhalb von Home Assistant (Node-RED, Grafana, Apps).",detail_saving:"Gibt ca. {bytes} frei.",impact_default:"Verlauf und Logbuch: {days} Tage (globale Einstellung). Die Langzeitstatistik bleibt dauerhaft.",impact_7:"Verlaufsgraph und Logbuch zeigen nur {days} Tage. Die st\xFCndliche Langzeitstatistik bleibt erhalten.",impact_3:"Verlaufsgraph und Logbuch zeigen nur {days} Tage. Die st\xFCndliche Langzeitstatistik bleibt erhalten.",impact_1:"Verlaufsgraph und Logbuch zeigen nur {days} Tag. Die st\xFCndliche Langzeitstatistik bleibt erhalten.",impact_drop:"Nur die letzte Stunde bleibt im Verlauf ({days} Tage). Die Langzeitstatistik bleibt, die Werte werden weiter geschrieben.",impact_excluded:"Nichts wird aufgezeichnet ({days} Tage): kein Verlauf, kein Logbuch, keine Langzeitstatistik. Wirkt nach einem Neustart.",used_cap:"Belegt",low_space_banner:"Nur noch {free} frei. Etwa {reclaim} lassen sich freigeben, {safe} davon sofort mit \u201ESicher aufr\xE4umen\u201C; der Rest liegt in der Datenbank und wird erst durch Neupacken frei.",low_space_banner_db:"Nur noch {free} frei. In der Datenbank-Ansicht siehst du, wo sich k\xFCrzere Aufbewahrung lohnt.",forecast_banner:"Beim aktuellen Wachstum ist der Speicher in etwa {days} Tagen voll.",bk_kpi_local:"Lokal belegt",bk_kpi_count:"Lokale Backups",bk_kpi_deletable:"Nach Plan l\xF6schbar",busy_safety_integrity:"Integrit\xE4tspr\xFCfung der Datenbank",busy_safety_backup:"Backup vor dem L\xF6schen",busy_repack:"Datenbank wird neu gepackt",busy_backups:"Backups werden rotiert",busy_files:"Dateien werden gel\xF6scht",busy_orphans:"Verlauf gel\xF6schter Entit\xE4ten wird entfernt",busy_statistics:"Statistiken werden entfernt",busy_purge:"Alter Verlauf wird bereinigt",busy_docker:"Docker-Images werden aufger\xE4umt",busy_apply:"\xC4nderungen werden \xFCbernommen",busy_analyze:"Datenbank wird analysiert",phase_states:"Zust\xE4nde",phase_state_attributes:"Attribute",phase_statistics:"Statistiken",phase_statistics_short_term:"Kurzzeitstatistiken",phase_events:"Ereignisse",stop:"Abbrechen",analysis_stopped:"Analyse abgebrochen. Die letzte vollst\xE4ndige Analyse bleibt angezeigt.",repack_plan_none:"W\xFCrde {gain} zur\xFCckgeben, passt aber gerade nicht: In der Datei stecken {live} Daten. Normales Packen braucht etwa {need} freien Speicher ({free} frei). Mit der Zwischenkopie im RAM w\xE4ren es {mem_need} Speicher und {ram} freier RAM ({ram_free} frei). Es reicht, {missing} freizumachen (Backups, Docker-Images) \u2013 oder die Daten um {reduce} zu verkleinern, etwa mit den Empfehlungen in der Datenbank-Ansicht.",repack_plan_vacuum:"Gibt {gain} zur\xFCck. Braucht vor\xFCbergehend etwa {need} freien Speicher ({free} frei).",repack_plan_memory:"Gibt {gain} zur\xFCck. Zu wenig Platz f\xFCr das normale Packen, deshalb liegt die Zwischenkopie im Arbeitsspeicher: etwa {need} Speicher und {ram} RAM.",repack_plan_incremental:"Gibt {gain} in kleinen Schritten zur\xFCck und braucht dabei kaum zus\xE4tzlichen Speicher.",repack_convert:"F\xFCr k\xFCnftiges Packen in kleinen Schritten vorbereiten",repack_convert_hint:"Stellt die Datenbank beim Packen auf auto_vacuum=INCREMENTAL um. Danach braucht jedes weitere Packen kaum noch freien Speicher. Home Assistant arbeitet damit unver\xE4ndert.",safety_title:"Vor dem L\xF6schen",safety_space_split_previous:"({work} zum L\xF6schen, {backup} f\xFCr das Backup \u2013 so gro\xDF war das letzte mit Datenbank.)",safety_space_split_file:"({work} zum L\xF6schen, {backup} f\xFCr das Backup \u2013 noch keins zum Vergleich, deshalb die Dateigr\xF6\xDFe.)",safety_backup_not_needed:"Kein Backup n\xF6tig: Home Assistant l\xF6scht diese veralteten Eintr\xE4ge ohnehin jede Nacht.",safety_space_ok:"Freier Speicher gepr\xFCft: {need} n\xF6tig, {free} frei.",safety_space_low:"Zu wenig freier Speicher: {need} n\xF6tig, {free} frei. Erst Backups, Dateien oder Docker-Images aufr\xE4umen.",safety_integrity_run:"Die Datenbank wird auf Besch\xE4digungen gepr\xFCft. Das kann bei gro\xDFen Datenbanken einige Minuten dauern.",safety_integrity_cached:"Die Integrit\xE4tspr\xFCfung der letzten Tage war fehlerfrei und wird wiederverwendet.",safety_backup_reuse:"Das Backup \u201E{name}\u201C vom {date} enth\xE4lt die Datenbank und wird als Sicherung genutzt.",safety_backup_create:"Ein Backup von Home Assistant mit Datenbank wird erstellt und gepr\xFCft (Ziel: {agents}).",safety_backup_disabled:"Kein Backup vorher \u2013 in den Optionen ausgeschaltet.",safety_backup_unavailable:"Ein Backup ist nicht m\xF6glich: Es ist kein Backup-Ziel verf\xFCgbar.",blocked_title:"Nichts aus der Datenbank gel\xF6scht",blocked_no_space:"F\xFCr L\xF6schen und Sicherung sind etwa {need} freier Speicher n\xF6tig. R\xE4ume zuerst Backups, Dateien oder Docker-Images auf.",blocked_corrupt:"Die Integrit\xE4tspr\xFCfung hat Sch\xE4den gefunden. Solange die Datenbank besch\xE4digt ist, l\xF6scht Storage Manager nichts daraus.",blocked_integrity_error:"Die Integrit\xE4tspr\xFCfung konnte nicht laufen ({detail}). Ohne Pr\xFCfung l\xF6scht Storage Manager nichts. Bitte sp\xE4ter erneut versuchen.",blocked_backup_unavailable:"Die Backup-Funktion von Home Assistant ist nicht verf\xFCgbar.",blocked_backup_no_location:"Es gibt kein Ziel f\xFCr das Backup.",blocked_backup_failed:"Das Backup vor dem L\xF6schen ist fehlgeschlagen.",blocked_backup_not_verified:"Das Backup wurde erstellt, lie\xDF sich danach aber nicht in der Backup-Liste finden.",blocked_without_backup_hint:"Du kannst ohne Backup fortfahren. Gel\xF6schter Verlauf l\xE4sst sich dann nicht wiederherstellen.",continue_without_backup:"Ohne Backup l\xF6schen",ok:"OK",backup_used:"Sicherung: {name}.",applied_purge_waits:"Einstellungen gespeichert. Das sofortige L\xF6schen wurde angehalten; die n\xE4chtliche Aufbewahrung wendet sie sp\xE4ter an.",integrity_ok:"Integrit\xE4tspr\xFCfung bestanden.",integrity_corrupt:"Die Integrit\xE4tspr\xFCfung hat Sch\xE4den gefunden.",integrity_timeout:"Die Integrit\xE4tspr\xFCfung hat zu lange gedauert und wurde abgebrochen.",integrity_error:"Die Integrit\xE4tspr\xFCfung konnte nicht laufen.",integrity_unsupported:"Die Integrit\xE4tspr\xFCfung gibt es nur f\xFCr SQLite.",integrity_run:"Jetzt pr\xFCfen",health_database:"Zustand der Datenbank",health_backups:"Backup-Schutz",status_ok:"In Ordnung",status_warning:"Pr\xFCfen",status_error:"Problem",check_again:"Erneut pr\xFCfen",attest_emergency_kit:"Erledigt",attest_restore_test:"Heute getestet",attest_undo:"Zur\xFCcknehmen",backup_settings:"Backup-Einstellungen",check_wal:"Write-Ahead-Log",check_wal_ok:"{bytes} \u2013 normal.",check_wal_warning:"{bytes} ({share} der Datenbank). Ein gro\xDFes WAL deutet auf lange Lesevorg\xE4nge hin; nach einem Neustart schrumpft es meist.",check_growth:"Wachstum",check_growth_ok:"{bytes} in 7 Tagen, im \xFCblichen Rahmen.",check_growth_warning:"{bytes} in 7 Tagen ({per_day}/Tag, vorher {before_per_day}/Tag). Etwas zeichnet neuerdings deutlich mehr auf.",check_growth_unknown:"Braucht Analysen \xFCber mindestens eine Woche.",check_integrity:"Integrit\xE4t (SQLite)",check_integrity_ok:"Fehlerfrei gepr\xFCft am {at}.",check_integrity_error:"Besch\xE4digt (gepr\xFCft am {at}). Bis zu einer bestandenen Pr\xFCfung wird nichts aus der Datenbank gel\xF6scht.",check_integrity_info:"Letzte Pr\xFCfung am {at} \u2013 schon l\xE4nger her.",check_integrity_unknown:"Noch nicht gepr\xFCft. Die Pr\xFCfung liest die ganze Datei und kann einige Minuten dauern.",check_statistics:"Statistiken",check_statistics_ok:"Home Assistant meldet keine Probleme mit Langzeitstatistiken.",check_statistics_warning:"Home Assistant meldet {count} Probleme mit Langzeitstatistiken (Entwicklerwerkzeuge \u2192 Statistiken).",check_statistics_unknown:"Konnte nicht abgefragt werden.",check_backup_integration:"Backup-Funktion",check_backup_integration_unknown:"Die Backup-Funktion von Home Assistant ist nicht verf\xFCgbar.",check_schedule:"Automatische Backups",check_schedule_ok:"Eingeplant.",check_schedule_warning:"Keine automatischen Backups eingeplant.",check_newest:"Neuestes Backup mit Datenbank",check_newest_ok:"{date}",check_newest_warning:"{date} \u2013 \xE4lter als erwartet ({hours} Stunden).",check_newest_error:"Es gibt kein Backup mit Datenbank.",check_last_attempt:"Letzter automatischer Versuch",check_last_attempt_ok:"Erfolgreich.",check_last_attempt_error:"Fehlgeschlagen: Der letzte Versuch ist neuer als das letzte erfolgreiche Backup.",check_last_attempt_unknown:"Noch kein automatisches Backup versucht.",check_offsite:"Kopie au\xDFerhalb dieses Ger\xE4ts",check_offsite_ok:"Neueste externe Kopie vom {date}.",check_offsite_warning:"Keine aktuelle Kopie au\xDFerhalb dieses Ger\xE4ts. F\xE4llt die Speicherkarte aus, sind auch die Backups weg.",check_size:"Gr\xF6\xDFe des neuesten Backups",check_size_ok:"{bytes}, \xFCblich.",check_size_warning:"{bytes} statt \xFCblich {typical} \u2013 fehlt etwas oder ist etwas dazugekommen?",check_size_unknown:"Braucht mindestens vier Backups zum Vergleich.",check_encryption:"Verschl\xFCsselung externer Kopien",check_encryption_ok:"Alle externen Ziele sind verschl\xFCsselt.",check_encryption_warning:"Unverschl\xFCsselt: {agents}.",check_encryption_unknown:"Kein externes Backup-Ziel eingerichtet.",repack_nothing:"Keine freien Seiten in der Datei \u2013 Packen w\xFCrde nichts zur\xFCckgeben.",repack_convert_only:"Keine freien Seiten. Packen w\xFCrde jetzt nur das schrittweise Packen f\xFCr sp\xE4ter vorbereiten.",check_database_included:"Datenbank im automatischen Backup",check_database_included_ok:"Enthalten.",check_database_included_info:"Noch keine automatischen Backups geplant; diese Einstellung greift erst mit einem Zeitplan.",check_database_included_warning:"Nicht enthalten \u2013 nach einer Wiederherstellung fehlt der Verlauf.",check_space:"Platz f\xFCr das n\xE4chste Backup",check_space_ok:"{free} frei, {need} empfohlen.",check_space_warning:"Nur {free} frei, empfohlen sind {need}.",check_space_unknown:"Noch kein Backup zum Vergleich.",check_agents:"Backup-Ziele",check_agents_ok:"Alle erreichbar.",check_agents_warning:"Fehler bei: {agents}.",check_emergency_kit:"Notfallpaket gespeichert",check_emergency_kit_ok:"Best\xE4tigt am {date}.",check_emergency_kit_info:"Ohne Notfallpaket lassen sich verschl\xFCsselte Backups nicht \xF6ffnen. Lade es in den Backup-Einstellungen herunter und best\xE4tige hier.",check_restore_test:"Wiederherstellung getestet",check_restore_test_ok:"Zuletzt am {date}.",check_restore_test_info:"Ein Backup ist erst sicher, wenn eine Wiederherstellung einmal geklappt hat, zum Beispiel auf einem Testsystem.",check_restore_test_warning:"Letzter Test am {date} \u2013 l\xE4nger als ein halbes Jahr her.",core_options_banner:"Home Assistant kann die Aufzeichnung jetzt pro Entit\xE4t selbst abschalten. Eine kommende Version von Storage Manager nutzt das statt der Package-Datei.",db_estimated_innodb:"Gr\xF6\xDFen sind kalibriert, aber MariaDB/MySQL meldet Tabellengr\xF6\xDFen nur gesch\xE4tzt.",db_scaled:"Gr\xF6\xDFen sind auf die belegten Bytes der Datei hochgerechnet. Die Aufteilung auf Tabellen bleibt gesch\xE4tzt, weil dieses SQLite keine Tabellengr\xF6\xDFen (dbstat) liefert.",detail_attr_only:"In {n} der letzten {total} Zeilen haben sich nur Attribute ge\xE4ndert, nicht der Zustand.",detail_drivers:"Was neue Zeilen ausl\xF6st",detail_driver:"\xE4ndert sich st\xE4ndig",detail_driver_values:"{share} der Attribute \xB7 \xE4ndert sich in {rate} der Zeilen \xB7 \u2300 {bytes}",detail_drivers_hint:"Ein Attribut, das sich st\xE4ndig \xE4ndert, erzeugt bei jedem Wechsel eine neue Zeile, auch wenn der Zustand gleich bleibt. Abhilfe: k\xFCrzere Aufbewahrung, nicht aufzeichnen, oder in der Quell-Integration das Attribut abschalten.",reason_attribute_updates:"In {attr_only} der Zeilen hat sich nur ein Attribut ge\xE4ndert, nicht der Zustand.",inbox_group_title:"{integration} \xB7 {n} Entit\xE4ten",reason_time:"Uhrzeit- oder Datumssensor \u2013 \xE4ndert sich jede Minute, sein Verlauf hat keinen Nutzen.",reason_time_statistics:"Uhrzeit- oder Datumssensor mit Statistik \u2013 1 Tag Verlauf gen\xFCgt.",reason_power_statistics:"Leistungswert {rate}. Verlauf f\xFCr ein paar Tage gen\xFCgt, die st\xFCndliche Statistik bleibt dauerhaft.",reason_energy_statistics:"Energiez\xE4hler {rate}. Das Energie-Dashboard nutzt nur die Langzeitstatistik, die bleibt.",reason_gps_tracker:"GPS-Tracker: jede Position speichert Koordinaten. Eine Woche reicht f\xFCr die Karte.",reason_fast_presence:"Pr\xE4senz- oder Abstandssensor {rate} \u2013 erzeugt sehr viele Zeilen.",group_reason_noise:"Technische Diagnosewerte (Signal, IP, Uptime \u2026) \u2013 den Verlauf braucht man praktisch nie.",group_reason_noise_statistics:"Technische Werte mit Langzeitstatistik \u2013 1 Tag Verlauf gen\xFCgt, die Statistik bleibt.",group_reason_time:"Uhrzeit- und Datumssensoren \u2013 ihr Verlauf hat keinen Nutzen.",group_reason_time_statistics:"Uhrzeit- und Datumssensoren mit Statistik \u2013 1 Tag Verlauf gen\xFCgt.",group_reason_power_statistics:"Leistungssensoren \u2013 einzeln klein, zusammen gro\xDF. Die st\xFCndliche Statistik bleibt dauerhaft.",group_reason_energy_statistics:"Energiez\xE4hler \u2013 das Energie-Dashboard nutzt nur die Langzeitstatistik, die bleibt.",group_reason_gps_tracker:"GPS-Tracker \u2013 jede Position speichert Koordinaten. Eine Woche reicht f\xFCr die Karte.",group_reason_fast_presence:"Pr\xE4senz- und Abstandssensoren mit sehr vielen Zeilen.",group_reason_attribute_updates:"Sensoren, bei denen sich fast nur Attribute \xE4ndern, nicht der Zustand.",group_reason_attributes:"Sensoren, deren Speicher \xFCberwiegend in Attributen steckt.",group_reason_statistics_kept:"Sehr h\xE4ufige Werte. Die st\xFCndliche Langzeitstatistik bleibt dauerhaft erhalten.",group_reason_frequent:"Sehr h\xE4ufige Werte \u2013 meist reicht ein kurzer Verlauf.",hint_esphome:"Besser an der Quelle: in ESPHome mit \u201Ethrottle_average: 60s\u201C oder \u201Eor: throttle + delta\u201C nur noch sinnvolle Werte senden.",hint_powercalc:"Besser an der Quelle: in den Powercalc-Optionen die Update-Intervalle (energy_update_interval, group_power_update_interval) erh\xF6hen.",hint_shelly:"Besser an der Quelle: in der Shelly-Weboberfl\xE4che das Meldeintervall bzw. die Schwelle f\xFCr Leistungs\xE4nderungen erh\xF6hen.",hint_generic:"Besser an der Quelle: Wenn die Integration ein Abfrage- oder Meldeintervall hat, schreibt ein gr\xF6\xDFeres Intervall weniger Zeilen.",action_recorder_changes:"Recorder-Einstellungen ge\xE4ndert",target_backups:"Backups",target_files:"Dateien",target_orphans:"Verlauf gel\xF6schter Entit\xE4ten",target_statistics:"Statistiken",target_purge:"alter Verlauf",target_repack:"neu gepackt",target_docker:"Docker-Images",history_blocked:"angehalten",history_failed:"mit Fehler abgebrochen",rec_retention:"K\xFCrzere Aufbewahrung f\xFCr {count} Entit\xE4ten",rec_retention_desc:"Empfehlungen nach Sensorart in der Datenbank-Ansicht. Wird beim n\xE4chtlichen Purge frei; die Datei schrumpft erst nach dem Neupacken.",reclaim_retention:"mit k\xFCrzerer Aufbewahrung zus\xE4tzlich {bytes}",kinds_title:"Regeln nach Sensorart",kinds_hint:"Die Regeln \xE4ndern nur die Empfehlungen. Wirksam wird erst, was du \xFCbernimmst und anwendest. Bei \u201ENicht aufzeichnen\u201C behalten Sensoren mit Langzeitstatistik 1 Tag, damit die Statistik weiterl\xE4uft. Verwendung in Dashboards, Helfern und dem Energie-Dashboard wird weiter ber\xFCcksichtigt.",kinds_changed:"{n} angepasst",kinds_saved:"Regel gespeichert \u2013 Empfehlungen aktualisiert.",kind_default:"Standard: {tier}",kind_off:"Keine Empfehlung",kind_none:"Gerade keine passenden Entit\xE4ten.",kind_stats:"Entit\xE4ten: {n} \xB7 {bytes} Verlauf \xB7 Regel spart ca. {saving}",kind_stats_nosave:"Entit\xE4ten: {n} \xB7 {bytes} Verlauf \xB7 gerade nichts zu sparen",kind_noise:"Technische Diagnosewerte",kind_noise_desc:"Signal, IP, Uptime, Firmware und Entit\xE4ten der Kategorie Diagnose.",kind_time:"Uhrzeit und Datum",kind_time_desc:"Uhrzeit-, Datums- und Weltzeitsensoren, die sich jede Minute \xE4ndern.",kind_power:"Leistung (W)",kind_power_desc:"Leistungsmessung \xF6fter als alle 15 Minuten. Die st\xFCndliche Statistik bleibt.",kind_energy:"Energiez\xE4hler (kWh)",kind_energy_desc:"Z\xE4hlerst\xE4nde \xF6fter als alle 15 Minuten. Das Energie-Dashboard nutzt nur die Statistik.",kind_gps:"GPS-Tracker",kind_gps_desc:"Device-Tracker mit GPS, die \xF6fter als alle 30 Minuten eine Position melden.",kind_presence:"Pr\xE4senz und Abstand",kind_presence_desc:"Radar- und Abstandssensoren, die \xF6fter als einmal pro Minute melden.",kind_attribute_updates:"Nur Attribute \xE4ndern sich",kind_attribute_updates_desc:"Mindestens 80 % der Zeilen entstehen durch Attribute, der Zustand bleibt gleich.",kind_attributes:"Gro\xDFe Attribute",kind_attributes_desc:"Der Speicher steckt \xFCberwiegend in Attributen, zum Beispiel Vorhersagen oder Listen.",kind_frequent:"Sehr h\xE4ufige Werte",kind_frequent_desc:"Alle anderen Sensoren mit einem neuen Wert \xF6fter als alle 5 Minuten.",kind_auto:"Neue Sensoren dieser Art automatisch einstellen",kind_auto_since:"Neue Sensoren werden automatisch eingestellt (seit {date})",kinds_auto_hint:"Automatisch gilt nur f\xFCr Sensoren, die nach dem Einschalten neu angelegt werden. Sie bekommen die Regel nach der ersten Analyse, die sie erkennt (t\xE4glich), ohne Mindestgr\xF6\xDFe und ohne sofortiges L\xF6schen. Was du selbst eingestellt oder abgelehnt hast, und Verwendung in Dashboards, Helfern und dem Energie-Dashboard haben Vorrang. Jeder Sensor wird nur einmal automatisch eingestellt; danach kannst du ihn frei \xE4ndern. \u201ENicht aufzeichnen\u201C wirkt erst nach einem Neustart.",action_auto_rules:"Regeln auf neue Sensoren angewendet",tab_settings:"Einstellungen",kinds_link:"Regeln nach Sensorart anpassen",more_options_title:"Weitere Optionen",more_options_hint:"Backup-Rotation, Warnschwellen, Aktualisierungsintervall und Backup vor dem L\xF6schen stehen in den Optionen der Integration.",whatif_title:"Was-w\xE4re-wenn",whatif_less:"Mit {days} Tagen ca. {bytes} weniger",keep_shorter:"Die globale Aufbewahrung sinkt von {from} auf {to} Tage.",keep_shorter_bytes:"Der n\xE4chste n\xE4chtliche Purge von Home Assistant l\xF6scht dann etwa {bytes} Verlauf.",keep_shorter_no_undo:"Das l\xF6scht Home Assistant selbst: Storage Manager sichert diese Zeilen nicht, \u201ER\xFCckg\xE4ngig\u201C gibt es daf\xFCr nicht. Zur\xFCck geht es nur mit einem vollen Backup.",whatif_more:"Mit {days} Tagen ca. {bytes} mehr",whatif_hint:"Gesch\xE4tzt aus der letzten Analyse, verglichen mit heute ({days} Tage): nur der Verlauf der Zust\xE4nde, ohne Ereignisse und Statistiken. Eigene Aufbewahrung pro Entit\xE4t wird ber\xFCcksichtigt. Mehr Tage wachsen mit der heutigen Rate.",check_writers:"Pl\xF6tzliche Vielschreiber",check_writers_ok:"Keine Entit\xE4t schreibt deutlich mehr als \xFCblich.",check_writers_warning:"{count} Entit\xE4ten schreiben mindestens zehnmal so viele Zeilen pro Tag wie \xFCblich (oder als neue Entit\xE4t alle paar Sekunden).",check_writers_unknown:"Braucht eine Analyse.",writer_rate:"{before} \u2192 {now} pro Tag",writer_new:"neu \xB7 {now} pro Tag",writers_ack:"Als normal markieren",writers_acked:"Neue Raten als \xFCblich \xFCbernommen.",rec_debug_logging:"Debug-Logging ist an ({count})",rec_debug_logging_desc:"Aktiv f\xFCr: {sources}. Debug-Logging schreibt sehr viel ins Log, kostet CPU und nutzt Speicherkarten ab. In der Integration \u201EDebug-Logging deaktivieren\u201C w\xE4hlen oder den Eintrag unter logger: entfernen. Die Gr\xF6\xDFe ist die der aktuellen Logdatei, sobald sie sp\xFCrbar ist.",debug_default:"alles (logger default)",detail_statistics_cards:"Statistik-Karten: {titles} (brauchen die Langzeitstatistik)",detail_yaml:"In YAML",detail_dynamic:"M\xF6glicherweise in Templates, die alle Entit\xE4ten dieser Domain lesen: {files}",unused_title:"Statistiken ohne Nutzen",unused_hint:"Home Assistant l\xF6scht Langzeitstatistiken nie von selbst. Diese hier zeigt kein Energie-Dashboard und keine Statistik-Karte an, oder es kommt nichts mehr hinzu. Gel\xF6scht wird nach der Sicherheitskette mit Sicherung; \u201ER\xFCckg\xE4ngig\u201C holt sie zur\xFCck.",unused_noise:"Diagnosewerte mit Statistik ({n})",unused_noise_hint:"Signal, Uptime, CPU und \xC4hnliches. Abschalten entfernt die state_class per customize in der Package-Datei, l\xF6scht die Statistik und r\xE4umt nach dem n\xE4chsten Neustart Reste auf. Der Verlauf bleibt.",unused_time:"Uhrzeit-Sensoren mit Statistik ({n})",unused_time_hint:"Wie bei den Diagnosewerten: state_class entfernen und Statistik l\xF6schen.",unused_disabled:"Deaktivierte Entit\xE4ten ({n})",unused_disabled_hint:"Deaktivierte Entit\xE4ten schreiben nichts mehr, ihre Statistik bleibt aber f\xFCr immer liegen.",unused_stale_import:"Importe ohne neue Daten ({n})",unused_stale_import_hint:"Von Integrationen importierte Statistiken ohne neuen Eintrag seit 90 Tagen, zum Beispiel von entfernten Stromanbietern.",unused_needs_packages:"Braucht einen Packages-Ordner, sonst w\xFCrde die Statistik sofort neu entstehen.",unused_switch_off:"Abschalten und l\xF6schen",unused_delete:"L\xF6schen",unused_last:"letzter Eintrag {date}",unused_off_title:"Abgeschaltet ({n})",unused_off_hint:"F\xFCr diese Entit\xE4ten berechnet Home Assistant keine Statistik mehr. Wieder einschalten wirkt nach einem Neustart; gel\xF6schte Statistik holt nur \u201ER\xFCckg\xE4ngig\u201C zur\xFCck.",unused_on:"wieder einschalten",unused_on_done:"Statistik wird nach dem n\xE4chsten Neustart wieder berechnet.",unused_switch_off_note:"{n} Entit\xE4ten bekommen ihre state_class entfernt (wirkt nach einem Neustart vollst\xE4ndig).",more_n:"\u2026 und {n} weitere",events_hint:"Ausschlie\xDFen stoppt nur neue Ereignisse, vorhandene bleiben bis zum Purge nach der Aufbewahrungszeit. Hier lassen sie sich sofort l\xF6schen, nach der Sicherheitskette mit Backup.",events_excluded:"ausgeschlossen",events_still_recorded:"wird weiter aufgezeichnet",events_still_recorded_hint:"L\xF6schen entfernt nur die vorhandenen Zeilen; neue kommen sofort nach. Zuerst in den Einstellungen ausschlie\xDFen.",events_logbook:"Logbuch",events_delete:"L\xF6schen",events_delete_excluded:"Alle {n} ausgeschlossenen Typen l\xF6schen",events_logbook_note:"Darunter sind Ereignisse, die das Logbuch anzeigt: Diese Eintr\xE4ge verschwinden aus dem Logbuch.",system_log_fire_event:"system_log feuert f\xFCr jeden Logeintrag ein Ereignis (fire_event: true). Das erzeugt die {rows} system_log_event-Zeilen. Abschalten in der YAML unter system_log: (auch in Packages suchen), dann die alten Zeilen hier l\xF6schen.",rec_unused_statistics:"Statistiken ohne Nutzen ({count})",rec_unused_statistics_desc:"Langzeitstatistiken von Diagnosewerten, deaktivierten Entit\xE4ten und alten Importen. Werden nie automatisch gel\xF6scht.",rec_system_log_events:"system_log schreibt jeden Logeintrag als Ereignis",rec_system_log_events_desc:"fire_event ist an: {count} system_log_event-Zeilen. Abschalten und die alten Zeilen in der Datenbank-Ansicht l\xF6schen.",rec_system_log_rows:"Alte system_log_event-Zeilen",rec_system_log_rows_desc:"{count} Zeilen aus einer Zeit, als system_log Ereignisse schrieb. In der Datenbank-Ansicht l\xF6schen.",target_unused_statistics:"Statistiken ohne Nutzen",target_events:"Ereignisse",action_statistics_on:"Statistik wieder eingeschaltet",effect_since_change_data:"Daten in der Datenbank seit {date}: {delta} ({bytes}).",effect_data_soon:"Ab der n\xE4chsten Analyse zeigt die durchgezogene Linie die Daten ohne freie Seiten. K\xFCrzere Aufbewahrung macht Seiten frei, die Datei schrumpft erst beim Neupacken.",effect_legend_data:"Daten",effect_legend_file:"Datei",effect_legend_change:"\xC4nderung",unused_excluded:"Nicht mehr aufgezeichnete Entit\xE4ten ({n})",unused_excluded_hint:"Der Recorder zeichnet diese Entit\xE4ten nicht mehr auf (eigener Ausschluss, YAML-Filter oder Include-Liste). Neue Statistik entsteht keine, die alte bleibt sonst f\xFCr immer.",engine_untested:"{engine}: Analyse, Purges und das L\xF6schen von Statistiken und Ereignissen laufen \xFCber Home Assistant und SQLAlchemy, sind auf dieser Engine aber nicht getestet. Integrit\xE4tspr\xFCfung und Neupacken mit wenig Speicher gibt es nur f\xFCr SQLite.",events_rows:"{n} Zeilen",busy_dead:"Tote Entit\xE4ten werden deaktiviert und ihr Verlauf gel\xF6scht",busy_events:"Ereignisse werden gel\xF6scht",busy_unused_statistics:"Statistiken werden gel\xF6scht",dead_title:"Tote Entit\xE4ten",dead_hint:"Entit\xE4ten, die seit mindestens 7 Tagen nicht verf\xFCgbar sind und in der Zeit keinen echten Wert hatten, oder die ihre Integration gar nicht mehr liefert. Integrationen, die gerade nicht geladen sind, werden nicht mitgez\xE4hlt. Deaktivieren l\xE4sst sich jederzeit r\xFCckg\xE4ngig machen; gel\xF6schten Verlauf holt \u201ER\xFCckg\xE4ngig\u201C im Verlauf der \xDCbersicht zur\xFCck, solange die Sicherung besteht (14 Tage).",dead_kind_gone:"von der Integration nicht mehr geliefert",dead_kind_unavailable:"nicht verf\xFCgbar",dead_kind_yaml:"aus YAML ohne unique_id",dead_since:"letzter Wert {date}",dead_never:"kein Wert seit {date}",dead_select_all:"Alle ausw\xE4hlen",dead_select_none:"Auswahl aufheben",dead_disable:"Deaktivieren ({n})",dead_disable_delete:"Deaktivieren und Verlauf l\xF6schen",dead_blocked_title:"Nicht ausw\xE4hlbar ({n})",dead_blocked_hint:"Diese Entit\xE4ten sind ebenfalls tot, werden aber noch verwendet oder lassen sich nicht deaktivieren. Erst die Verwendung bereinigen.",dead_yaml_hint:"Ohne unique_id gibt es keinen Registry-Eintrag zum Deaktivieren. Die Definition in der YAML-Konfiguration entfernen.",dead_used:"Wird noch verwendet: {list}",dead_used_automations:"Automationen: {n}",dead_used_scripts:"Skripte: {n}",dead_used_helpers:"Helfer: {n}",dead_used_dashboards:"Dashboards: {n}",detail_dashboard_cards:"Angezeigt auf: {titles} (ohne Verlauf)",dead_used_yaml:"Stellen in YAML: {n}",dead_used_energy:"Energie-Dashboard",dead_disabled_title:"Von Storage Manager deaktiviert ({n})",dead_enable:"wieder aktivieren",dead_enable_hint:"Home Assistant l\xE4dt die Integration etwa 30 Sekunden nach dem Aktivieren neu; Entit\xE4ten aus YAML erscheinen erst nach dem Neuladen der YAML oder einem Neustart. Gel\xF6schten Verlauf holt nur \u201ER\xFCckg\xE4ngig\u201C im Verlauf der \xDCbersicht zur\xFCck.",dead_disable_title:"Entit\xE4ten deaktivieren",dead_disable_body:"Deaktivierte Entit\xE4ten werden nicht mehr aktualisiert und nicht mehr aufgezeichnet. Ihr Verlauf bleibt bis zum normalen Purge erhalten. R\xFCckg\xE4ngig in dieser Karte oder unter Einstellungen \u2192 Entit\xE4ten.",dead_disabled_done:"{n} Entit\xE4ten deaktiviert.",dead_enabled_done:"{n} Entit\xE4ten wieder aktiviert.",dead_confirm_note:"Die Entit\xE4ten werden zuerst deaktiviert, dann werden Verlauf und Langzeitstatistik gel\xF6scht.",rec_dead_entities:"Tote Entit\xE4ten ({count})",rec_dead_entities_desc:"Seit mindestens 7 Tagen ohne Wert und nirgends verwendet. Deaktivieren h\xE4lt die Liste sauber, l\xF6schen gibt den Verlauf frei.",target_dead:"Tote Entit\xE4ten",action_disable_dead:"Tote Entit\xE4ten deaktiviert",action_enable_dead:"Entit\xE4ten wieder aktiviert",tpl_title:"Schlanke Kopie als Template",tpl_hint:"Statt der ganzen Entit\xE4t mit ihren Attributen nur den Zustand aufzeichnen: ein Template-Sensor \xFCbernimmt den Wert, das Original wird nicht mehr aufgezeichnet. Einzelne Attribute, die du im Verlauf brauchst, bekommen eine eigene Entit\xE4t.",tpl_attrs:"Attribute als eigene Entit\xE4t behalten ({n})",tpl_build:"Template erzeugen",tpl_copy:"Kopieren",tpl_copied:"In die Zwischenablage kopiert.",tpl_copy_failed:"Kopieren nicht m\xF6glich, bitte den Text markieren.",tpl_step_add:"In die configuration.yaml einf\xFCgen (ein vorhandenes template: zusammenf\xFChren).",tpl_step_add_packages:"Als eigene Datei in den Packages-Ordner legen oder in die configuration.yaml einf\xFCgen.",tpl_step_reload:"Unter Entwicklerwerkzeuge \u2192 YAML \u201ETemplate-Entit\xE4ten\u201C neu laden (bei einer neuen Package-Datei neu starten).",tpl_step_new:"Neue Entit\xE4ten: {ids}",tpl_step_switch:"Diese Stellen lesen den Verlauf des Originals und sollten auf die neue Entit\xE4t umgestellt werden:",tpl_switch_statistics:"Statistik-Karte in \u201E{title}\u201C",tpl_step_drop:"Das Original unten auf \u201ENicht aufzeichnen\u201C stellen. Automationen k\xF6nnen das Original weiter nutzen, sie brauchen nur den aktuellen Zustand.",tpl_taken:"Es gibt schon Entit\xE4ten mit diesen IDs: {ids}. Home Assistant h\xE4ngt dann _2 an; den Namen im YAML anpassen.",raw_title:"Gespeicherte Daten",raw_hint:"Die Rohzeilen in der Datenbank, neueste zuerst.",raw_states:"Zust\xE4nde",raw_statistics:"Statistik (Stunde)",raw_statistics_short_term:"Statistik (5 Minuten)",raw_empty:"Keine Zeilen gespeichert.",raw_attributes:"Attribute ({bytes})",raw_start:"Beginn",raw_more:"\xC4ltere laden",window_hint:"Im Diagramm einen Zeitraum ziehen, um zu sehen, wer dort geschrieben hat.",window_24h:"Letzte 24 h",window_7d:"Letzte 7 Tage",window_title:"Geschrieben von {from} bis {to}",window_close:"Schlie\xDFen",window_partial:"\xC4ltere Daten sind schon gel\xF6scht: vollst\xE4ndig erst ab {date}.",window_none:"In diesem Zeitraum wurde nichts geschrieben.",window_rows:"{n} Zeilen",window_rows_one:"1 Zeile",facet_integration:"Integration",facet_device:"Ger\xE4t",facet_used:"Verwendung",facet_used_yes:"Verwendet",facet_used_no:"Nicht verwendet",facet_used_dynamic:"Nur dynamisch",facet_defined:"Definiert in",facet_defined_ui:"UI",facet_defined_yaml:"YAML",facet_defined_yaml_no_id:"YAML ohne unique_id",facet_defined_gone:"Nicht mehr vorhanden",facet_age:"Zuletzt geschrieben",facet_age_7:"\xC4lter als 7 Tage",facet_age_30:"\xC4lter als 30 Tage",facet_age_180:"\xC4lter als 6 Monate",facet_clear:"Filter zur\xFCcksetzen ({n})",facet_matches:"{n} Treffer",facet_matches_one:"1 Treffer",select_matching:"Alle {n} Treffer ausw\xE4hlen",select_matching_one:"Den 1 Treffer ausw\xE4hlen",treemap_label:"Speicher nach Integration",treemap_hint:"Auf eine Fl\xE4che tippen, um die Entit\xE4ten dieser Integration zu sehen.",group_list:"Als Liste",facet_more:"Weitere Filter",facet_less:"Weniger Filter",window_entities:"Entit\xE4ten",window_events:"Ereignisse"},he={title:"Storage Manager",tab_overview:"Overview",tab_database:"Database",tab_backups:"Backups",tab_files:"Files",refresh:"Refresh",loading:"Loading \u2026",free:"free",of:"of",used:"used",disk:"Disk",growth_none:"No measurable growth in the last 7 days.",growth_unknown:"Forecast available after about 12 hours of samples.",growth_full:"Growing {growth}/day \u2013 full in about {days} days.",growth_ok:"Growing {growth}/day.",reclaim_title:"Biggest savings",reclaim_total:"Reclaimable: {bytes}, {safe} of it right away with Safe cleanup",reclaim_none:"Nothing worth cleaning right now. Well kept!",safe_cleanup:"Safe cleanup",preview:"Preview",free_now:"Free now",open:"Open",rec_backups:"Local backups outside the rotation",rec_backups_desc:"{count} local copies also exist elsewhere and fall outside your retention schedule.",rec_backups_rotation_off:"Backup rotation is off",rec_backups_rotation_off_desc:"{count} local copies would be expendable. Enable rotation in the options.",rec_backups_offsite:"Backups only stored locally",rec_backups_offsite_desc:"{count} backups exist only on this device \u2013 set up an off-site backup location.",rec_files:"Caches and old logs",rec_files_desc:"Files Home Assistant recreates when needed.",rec_orphans:"History of deleted entities",rec_orphans_desc:"{count} entities no longer exist but their history is still stored.",rec_statistics:"Statistics of deleted entities",rec_statistics_desc:"{count} long-term statistics without an entity.",rec_repack:"Repack the database",rec_repack_desc:"Returns free pages inside the database file to the file system.",rec_top_entities:"{count} entities = {share} of the database",rec_top_entities_desc:"Shorter retention pays off most here.",breakdown_title:"Storage breakdown",breakdown_unavailable:"The breakdown by area is only provided by the Supervisor (Home Assistant OS / Supervised).",cat_system:"System",cat_homeassistant:"Home Assistant",cat_apps_data:"Add-on data",cat_apps_config:"Add-on configuration",cat_media:"Media",cat_share:"Share",cat_backup:"Backups",cat_ssl:"SSL",cat_free:"Free",history_title:"History",history_empty:"Nothing cleaned yet.",history_total:"Freed in total: {bytes}",action_cleanup:"Cleanup",action_purge_entities:"History purged",action_retention:"Retention by tier",action_statistics_age:"Long-term statistics by age",db_size:"Database",db_engine:"Engine",db_keep:"Global retention",days:"{n} days",db_analysis:"Analysis",db_analysis_never:"never",db_analysis_running:"Analysis running \u2026",analyze:"Analyze",db_estimated:"Sizes are estimates based on rows and attributes.",db_calibrated:"Sizes are calibrated with the real table sizes.",search:"Search \u2026",all_domains:"All domains",filter_changed:"Changed only",filter_orphans:"Orphans only",sort_size:"Size",sort_rate:"Rows/24 h",sort_name:"Name",col_entity:"Entity",col_size:"Size",col_rate:"24 h",col_rows:"Rows",col_retention:"Retention",tier_default:"Default ({days} days)",tier_7:"7 days",tier_3:"3 days",tier_1:"1 day",tier_drop:"Last hour only",tier_excluded:"Don't record",tier_excluded_needs_packages:"Don't record (needs packages)",excluded_by_yaml:"Excluded in YAML",orphan:"orphaned",show_more:"Show {n} more",selected:"{n} selected",set_for_selection:"Retention for selection",clear_selection:"Clear selection",draft:"{n} changes",draft_one:"1 change",draft_estimate:"about {bytes} freed after applying",discard:"Discard",apply:"Apply",applied:"Changes applied.",restart_banner:"Changed exclusions ({n}) take effect after a restart.",restart:"Restart",restart_confirm:"Restart Home Assistant now?",packages_banner:"\u201CDon't record\u201D needs a packages folder. The repair issue shows the line to add to configuration.yaml.",packages_open:"Open repairs",gui_recorder_banner:"GUI Recorder is installed. Its exclusions can be imported.",gui_recorder_import:"Import",gui_recorder_done:"{n} exclusions imported. Afterwards remove \u201Crecorder: !include gui_recorder.yaml\u201D and uninstall GUI Recorder.",yaml_filters:"Existing YAML filters stay untouched and are respected.",yaml_include_warning:"Your recorder uses an include list. Only entities listed there are recorded.",events_title:"Most frequent events",analysis_needed:"Run an analysis first to see sizes per entity.",bk_local:"Local",bk_count:"{n} backups",bk_rotation_on:"Rotation on",bk_rotation_off:"Rotation off (enable in the options)",bk_schedule:"Keep {d} daily, {w} weekly, {m} monthly",bk_offsite_required:"Local copies are only deleted when the backup also exists elsewhere.",bk_unavailable:"The backup integration is not loaded.",bk_none:"No local backups.",bk_apply:"Apply rotation now",bk_reason_newest:"Newest",bk_reason_daily:"Daily",bk_reason_weekly:"Weekly",bk_reason_monthly:"Monthly",bk_reason_only_local:"Only stored locally",bk_reason_unknown_date:"Unknown date",bk_reason_rotated:"Delete local copy",col_backup:"Backup",col_locations:"Locations",col_action:"Plan",files_hogs:"Files that can be cleaned",files_none:"No known space hogs found.",files_large:"Large files in the config folder",files_large_hint:"For information only \u2013 these files are never deleted automatically.",safety_safe:"safe",safety_review:"review",hog_esphome_build:"ESPHome build cache",hog_tts_cache:"Text-to-speech cache",hog_rotated_logs:"Old log files",hog_corrupt_databases:"Corrupt database copies",hog_zigbee2mqtt_logs:"Zigbee2MQTT logs",hog_core_dumps:"Crash dumps",typed_confirm:"This affects {n} entities. Type the number {n} to confirm:",apply_summary:"Apply {n} changes:",apply_summary_one:"Apply 1 change:",apply_more:"and {n} more",plan_expired:"The preview has expired. Please open it again; nothing was deleted.",apply_deletes:"Shortened right away for {n} entities: about {bytes}.",apply_deletes_one:"Shortened right away for 1 entity: about {bytes}.",apply_no_delete:"Nothing is deleted, only the settings change.",apply_many:"The changes affect {n} entities.",action_interrupted:"Interrupted (restart)",stats_ret_title:"Keep long-term statistics",stats_ret_hint:"Home Assistant keeps the hourly long-term statistics forever. Set the age from which they are deleted, with a separate limit for the energy dashboard. Statistics cards and the energy dashboard then show no older periods. The history (states) is not affected.",stats_ret_other:"All statistics except energy",stats_ret_energy:"Energy dashboard statistics",stats_ret_forever:"Forever",stats_ret_years:"{n} years",stats_ret_year:"1 year",stats_ret_months:"{n} months",stats_ret_kept:"Kept completely.",stats_ret_frees:"To delete: {rows} rows (about {bytes}), the oldest from {date}. Statistics affected: {n}.",stats_ret_frees_one:"To delete: 1 row (about {bytes}) from {date}. Statistics affected: {n}.",stats_ret_nothing_older:"Nothing older than this limit right now.",stats_ret_active:"Applied every night: rows that pass the limit are deleted.",stats_ret_off:"No limit \u2013 everything stays.",stats_ret_pending:"Not applied yet. The nightly run only deletes after you applied once with preview and backup.",stats_ret_apply:"Save and apply now",stats_ret_saved:"Saved.",stats_ret_preview_other:"Statistics: {rows} rows before {date} (about {bytes}), affected: {n}",stats_ret_preview_energy:"Energy dashboard: {rows} rows before {date} (about {bytes}), affected: {n}",stats_ret_nothing:"Nothing older than the limits right now.",target_statistics_age:"old long-term statistics",busy_statistics_age:"Deleting old long-term statistics",action_statistics_retention:"Long-term statistics retention changed",explorer_title:"Explore folders",explorer_config:"Config folder",explorer_hint:"Shows what takes the space in a folder. Read-only: nothing is deleted here. Symbolic links are skipped, files with several hard links are counted once.",explorer_scanning:"Reading the folder \u2026",explorer_rest:"Rest",explorer_summary:"{size} in {files} files \xB7 read {date}",explorer_partial:"Stopped after {n} entries \u2013 values are incomplete.",explorer_warnings:"{n} folders not readable",explorer_rescan:"read again",explorer_empty:"Empty.",explorer_more:"{n} more folders ({size})",explorer_own:"Files directly in this folder",explorer_largest:"Largest files below",safety_backup_undo:"The affected rows are saved first (about {undo} of space); the history in the overview then offers Undo.",safety_backup_undo_fallback:" If that is not possible, a full backup is created instead.",busy_undo_export:"Saving the affected rows",busy_undo:"Bringing deleted rows back",action_undo:"Undone",undo_button:"Undo",undo_done_at:"brought back",undo_expired:"backup expired",undo_saved:"Undo is available in the history.",undo_title:"Undo cleanup",undo_body:"The rows deleted by the cleanup on {date} come back:",undo_rows_states:"{n} states in the history",undo_rows_states_one:"1 state in the history",undo_rows_statistics:"{n} statistics rows",undo_rows_statistics_one:"1 statistics row",undo_rows_events:"{n} events",undo_rows_events_one:"1 event",undo_enable:"Entities that were disabled are enabled again: {n}.",undo_statistics_on:"Statistics that were switched off are switched back on: {n} (takes effect after a restart).",undo_retention:"Retention goes back to what it was for {n} entities, so the next run does not delete the rows again.",undo_retention_one:"Retention goes back to what it was for 1 entity, so the next run does not delete the rows again.",undo_include:"Recorded again: {n} entities (takes effect after a restart).",undo_include_one:"Recorded again: 1 entity (takes effect after a restart).",undo_statistics_limits:"The long-term statistics limit stays set but is applied every night only after the next confirmed run.",undo_again:"This cleanup was undone before. Rows that exist are skipped.",undo_note:"What was recorded since stays. Rows that exist already are skipped.",undo_confirm:"Bring back",undo_success:"{n} rows brought back.",undo_error_missing:"The backup file no longer exists.",undo_error_incomplete:"The backup file is incomplete and is not used.",undo_error_damaged:"The backup file is damaged.",undo_error_format:"The backup file comes from another version of Storage Manager.",undo_error_schema:"The backup no longer fits the database: columns are missing ({missing}). Only the full backup can bring the rows back.",undo_schema_changed:"The backup comes from an older database schema. Columns were matched; what no longer exists is left out.",undo_error_no_space:"Not enough free space to bring the rows back (about {need} needed).",undo_error_unknown:"Unknown backup.",hog_undo_files:"Backups for Undo",delete:"Delete",maintenance:"Maintenance",docker_title:"Unused Docker images",docker_desc:"Lets the Supervisor remove unused images, containers and build leftovers. Takes a few minutes.",repack_title:"Repack the database",repack_desc:"Returns free pages of the database file. Needs about as much free space as the database size.",repack_impossible:"Not enough free space to repack.",run:"Run",confirm_title:"Confirm",confirm_cleanup:"The following will be removed:",confirm_total:"About {bytes} in total",cancel:"Cancel",done_freed:"{bytes} freed.",done:"Done.",error:"Error: {msg}",busy:"Running: {what} \u2026",unknown:"unknown",never:"never",just_now:"just now",ago:"{t} ago",not_admin:"Administrators only.",options:"Options",obsolete:"{n} outdated rows (older than {days} days, about {bytes}) are waiting for the nightly purge.",obsolete_purge:"Purge now",settings_title:"Recorder settings",settings_hint:"Global retention, commit interval and exclude filters for domains, patterns and events.",settings_restart_hint:"Changes go into the package file and take effect after a restart. Settings from your own YAML stay untouched.",settings_global:"Global",settings_filters:"Don't record",settings_save:"Save",settings_saved:"Saved \u2013 takes effect after a restart.",setting_purge_keep_days:"Retention",setting_purge_keep_days_hint:"How many days of history Home Assistant keeps (default 10).",setting_commit_interval:"Commit interval",setting_commit_interval_hint:"Seconds between writes. Higher values spare SD cards (default 5).",setting_auto_purge:"Nightly purge",setting_auto_purge_hint:"Deletes data older than the retention every night at 04:12.",setting_auto_repack:"Repack automatically",setting_auto_repack_hint:"Repacks the database every second Sunday after the purge.",setting_locked:"Set in your configuration.yaml \u2013 change it there.",unit_days:"days",unit_seconds:"s",filter_domains:"Domains",filter_domains_placeholder:"e.g. media_player \u2013 Enter",filter_domains_hint:"No entity of these domains is recorded.",filter_entity_globs:"Patterns",filter_entity_globs_placeholder:"e.g. sensor.*_rssi \u2013 Enter",filter_entity_globs_hint:"Wildcards * and ? as in the recorder configuration.",filter_event_types:"Events",filter_event_types_placeholder:"e.g. call_service \u2013 Enter",filter_event_types_hint:"Event types that are not stored.",remove:"Remove",orphans_badge:"{n} orphaned",orphans_text:"{n} exclusions no longer match anything that exists.",orphans_remove:"Clean up",orphans_removed:"Removed {n} orphaned exclusions.",rate_seconds:"every {n} s",rate_minutes:"every {n} min",rate_per_day:"{n}\xD7 per day",reason_noise:"Technical diagnostic value \u2013 its history is practically never needed.",reason_noise_statistics:"Technical value with long-term statistics \u2013 1 day of history is enough, the statistics stay.",reason_attributes:"{share} of the space is used by attributes, not by the state.",reason_statistics_kept:"New value {rate}. The hourly long-term statistics are kept permanently.",reason_frequent:"New value {rate} \u2013 a short history is usually enough.",reason_energy:"Used by the energy dashboard \u2013 recording stays, only the history gets shorter.",reason_conflict_dashboard:"A dashboard shows {days} days of history \u2013 the current retention is shorter.",reason_conflict_energy:"Used by the energy dashboard \u2013 without recording it misses data.",reason_conflict_history_reader:"A helper reads this entity's history \u2013 it should not be shortened.",protected_history_reader:"History is read by a helper",protected_dashboard:"A dashboard needs the full history",note_automation:"In {n} automations/scripts",note_automation_hint:"Automations use the live state \u2013 they do not need the history.",note_dashboard:"Dashboard: {days} days",note_energy:"Energy dashboard",note_statistics:"Long-term statistics",note_statistics_hint:"Hourly mean, min and max values are kept regardless of the retention.",note_diagnostic:"Diagnostic",inbox_title:"Recommendations",inbox_summary:"{n} recommendations \xB7 about {bytes}",inbox_empty:"No recommendations \u2013 the database is well tuned.",inbox_hint:"Accepted recommendations go into the draft and take effect with \u201CApply\u201D.",inbox_show_dismissed:"Show dismissed again ({n})",inbox_accept_all:"Accept all ({n})",inbox_in_draft:"In draft",inbox_dismiss:"Dismiss",inbox_accept:"Accept",effect_title:"Effect",effect_waiting:"After the next analysis you will see here what your changes achieved.",effect_since_change:"File since {date}: {delta} ({bytes}).",effect_no_changes:"No changes yet \u2013 the chart shows the normal development.",effect_need_samples:"The chart builds up with every analysis (daily and after each change).",view_top:"Top causes",view_groups:"By integration",view_all:"All",view_total:"{n} entities \xB7 {bytes}",top_hint:"These {n} entities make up {share} of the database.",top_rest:"{n} more entities = {bytes} ({share}) \u2013 nothing to do here.",top_show_all:"Show all",group_count:"entities: {n}",group_accept:"Accept all ({n} \xB7 {bytes})",filter_advice:"With recommendation",suggested:"Suggested: {tier}",detail_rate:"Frequency",detail_daily:"Rows per day (last {n} days)",detail_attributes:"Largest attributes ({n} variants stored)",detail_attributes_hint:"Every new attribute combination is stored once. Frequently changing attributes such as timestamps or forecasts create many variants.",detail_usage:"Usage",detail_automations:"Automations",detail_scripts:"Scripts",detail_helper:"Helper \u201C{title}\u201D ({domain})",detail_dashboard:"Dashboard \u201C{title}\u201D: {card}, {days} days",detail_unused:"No usage found.",detail_usage_limits:"Detected: automations, scripts, helpers (UI and YAML), integrations, dashboards, the energy dashboard and literal mentions in YAML files. Not detectable: templates that build ids or go through areas and labels, and anything outside Home Assistant (Node-RED, Grafana, apps).",detail_saving:"Frees about {bytes}.",impact_default:"History and logbook: {days} days (global setting). Long-term statistics are kept permanently.",impact_7:"History graph and logbook show only {days} days. Hourly long-term statistics are kept.",impact_3:"History graph and logbook show only {days} days. Hourly long-term statistics are kept.",impact_1:"History graph and logbook show only {days} day. Hourly long-term statistics are kept.",impact_drop:"Only the last hour stays in the history ({days} days). Statistics are kept, values are still written.",impact_excluded:"Nothing is recorded ({days} days): no history, no logbook, no long-term statistics. Takes effect after a restart.",used_cap:"Used",low_space_banner:"Only {free} free. About {reclaim} can be reclaimed, {safe} of it right away with Safe cleanup; the rest is in the database and frees disk space only after a repack.",low_space_banner_db:"Only {free} free. The database view shows where shorter retention pays off.",forecast_banner:"At the current growth the disk is full in about {days} days.",bk_kpi_local:"Used locally",bk_kpi_count:"Local backups",bk_kpi_deletable:"Deletable by plan",busy_safety_integrity:"Checking database integrity",busy_safety_backup:"Backing up before deleting",busy_repack:"Repacking the database",busy_backups:"Rotating backups",busy_files:"Deleting files",busy_orphans:"Removing history of deleted entities",busy_statistics:"Removing statistics",busy_purge:"Purging old history",busy_docker:"Cleaning Docker images",busy_apply:"Applying changes",busy_analyze:"Analysing the database",phase_states:"States",phase_state_attributes:"Attributes",phase_statistics:"Statistics",phase_statistics_short_term:"Short-term statistics",phase_events:"Events",stop:"Stop",analysis_stopped:"Analysis stopped. The last complete analysis stays on screen.",repack_plan_none:"Would return {gain}, but does not fit right now: the file holds {live} of data. An ordinary repack needs about {need} of free space ({free} free). With the temporary copy in RAM it would be {mem_need} of disk and {ram} of free RAM ({ram_free} free). Freeing {missing} is enough (backups, Docker images) \u2013 or making the data {reduce} smaller, for example with the recommendations in the database view.",repack_plan_vacuum:"Returns {gain}. Needs about {need} of free space for a while ({free} free).",repack_plan_memory:"Returns {gain}. Not enough space for a normal repack, so the temporary copy stays in RAM: about {need} of disk and {ram} of RAM.",repack_plan_incremental:"Returns {gain} in small steps and needs almost no extra space.",repack_convert:"Prepare for repacking in small steps",repack_convert_hint:"Switches the database to auto_vacuum=INCREMENTAL while repacking. Every later repack then needs almost no free space. Home Assistant works with it unchanged.",safety_title:"Before anything is deleted",safety_space_split_previous:"({work} for deleting, {backup} for the backup \u2013 the size of the last one with the database.)",safety_space_split_file:"({work} for deleting, {backup} for the backup \u2013 none to compare yet, so the file size.)",safety_backup_not_needed:"No backup needed: Home Assistant deletes these outdated rows every night anyway.",safety_space_ok:"Free space checked: {need} needed, {free} free.",safety_space_low:"Not enough free space: {need} needed, {free} free. Clean up backups, files or Docker images first.",safety_integrity_run:"The database is checked for damage. On large databases this can take a few minutes.",safety_integrity_cached:"The integrity check from the last days passed and is reused.",safety_backup_reuse:"The backup \u201C{name}\u201D from {date} includes the database and is used as the safety copy.",safety_backup_create:"A backup of Home Assistant with the database is created and verified (location: {agents}).",safety_backup_disabled:"No backup first \u2013 turned off in the options.",safety_backup_unavailable:"A backup is not possible: no backup location is available.",blocked_title:"Nothing deleted from the database",blocked_no_space:"Deleting and the safety backup need about {need} of free space. Clean up backups, files or Docker images first.",blocked_corrupt:"The integrity check found damage. While the database is damaged, Storage Manager deletes nothing from it.",blocked_integrity_error:"The integrity check could not run ({detail}). Without it, Storage Manager deletes nothing. Please try again later.",blocked_backup_unavailable:"Home Assistant's backup feature is not available.",blocked_backup_no_location:"There is no location for the backup.",blocked_backup_failed:"The backup before deleting failed.",blocked_backup_not_verified:"The backup was created but could not be found in the backup list afterwards.",blocked_without_backup_hint:"You can continue without a backup. Deleted history cannot be restored then.",continue_without_backup:"Delete without backup",ok:"OK",backup_used:"Safety backup: {name}.",applied_purge_waits:"Settings saved. The immediate purge was stopped; the nightly retention applies them later.",integrity_ok:"Integrity check passed.",integrity_corrupt:"The integrity check found damage.",integrity_timeout:"The integrity check took too long and was stopped.",integrity_error:"The integrity check could not run.",integrity_unsupported:"The integrity check is only available for SQLite.",integrity_run:"Check now",health_database:"Database health",health_backups:"Backup protection",status_ok:"OK",status_warning:"Check",status_error:"Problem",check_again:"Check again",attest_emergency_kit:"Done",attest_restore_test:"Tested today",attest_undo:"Undo",backup_settings:"Backup settings",check_wal:"Write-ahead log",check_wal_ok:"{bytes} \u2013 normal.",check_wal_warning:"{bytes} ({share} of the database). A large WAL points to long reads; it usually shrinks after a restart.",check_growth:"Growth",check_growth_ok:"{bytes} in 7 days, within the usual range.",check_growth_warning:"{bytes} in 7 days ({per_day}/day, before {before_per_day}/day). Something records a lot more than before.",check_growth_unknown:"Needs analyses over at least a week.",check_integrity:"Integrity (SQLite)",check_integrity_ok:"Passed on {at}.",check_integrity_error:"Damaged (checked on {at}). Nothing is deleted from the database until a check passes.",check_integrity_info:"Last check on {at} \u2013 a while ago.",check_integrity_unknown:"Not checked yet. The check reads the whole file and can take a few minutes.",check_statistics:"Statistics",check_statistics_ok:"Home Assistant reports no problems with long-term statistics.",check_statistics_warning:"Home Assistant reports {count} problems with long-term statistics (Developer tools \u2192 Statistics).",check_statistics_unknown:"Could not be read.",check_backup_integration:"Backup feature",check_backup_integration_unknown:"Home Assistant's backup feature is not available.",check_schedule:"Automatic backups",check_schedule_ok:"Scheduled.",check_schedule_warning:"No automatic backups are scheduled.",check_newest:"Newest backup with the database",check_newest_ok:"{date}",check_newest_warning:"{date} \u2013 older than expected ({hours} hours).",check_newest_error:"There is no backup that includes the database.",check_last_attempt:"Last automatic attempt",check_last_attempt_ok:"Succeeded.",check_last_attempt_error:"Failed: the last attempt is newer than the last successful backup.",check_last_attempt_unknown:"No automatic backup attempted yet.",check_offsite:"Copy off this device",check_offsite_ok:"Newest off-device copy from {date}.",check_offsite_warning:"No recent copy off this device. If the storage fails, the backups are gone too.",check_size:"Size of the newest backup",check_size_ok:"{bytes}, as usual.",check_size_warning:"{bytes} instead of the usual {typical} \u2013 is something missing or new?",check_size_unknown:"Needs at least four backups to compare.",check_encryption:"Encryption of off-device copies",check_encryption_ok:"All off-device locations are encrypted.",check_encryption_warning:"Not encrypted: {agents}.",check_encryption_unknown:"No off-device backup location is set up.",repack_nothing:"No free pages in the file \u2013 a repack would return nothing.",repack_convert_only:"No free pages. A repack now would only prepare repacking in small steps for later.",check_database_included:"Database in the automatic backup",check_database_included_ok:"Included.",check_database_included_info:"No automatic backups scheduled yet; this setting only applies once there is a schedule.",check_database_included_warning:"Not included \u2013 history is missing after a restore.",check_space:"Space for the next backup",check_space_ok:"{free} free, {need} recommended.",check_space_warning:"Only {free} free, {need} recommended.",check_space_unknown:"No backup to compare yet.",check_agents:"Backup locations",check_agents_ok:"All reachable.",check_agents_warning:"Errors at: {agents}.",check_emergency_kit:"Emergency kit saved",check_emergency_kit_ok:"Confirmed on {date}.",check_emergency_kit_info:"Encrypted backups cannot be opened without the emergency kit. Download it in the backup settings and confirm here.",check_restore_test:"Restore tested",check_restore_test_ok:"Last on {date}.",check_restore_test_info:"A backup is only safe once a restore has worked, for example on a test system.",check_restore_test_warning:"Last test on {date} \u2013 more than half a year ago.",core_options_banner:"Home Assistant can now turn off recording per entity itself. An upcoming version of Storage Manager uses that instead of the package file.",db_estimated_innodb:"Sizes are calibrated, but MariaDB/MySQL reports table sizes only as estimates.",db_scaled:"Sizes are scaled to the bytes in use in the file. The split between tables stays an estimate because this SQLite build has no table sizes (dbstat).",detail_attr_only:"In {n} of the last {total} rows only attributes changed, not the state.",detail_drivers:"What triggers new rows",detail_driver:"keeps changing",detail_driver_values:"{share} of attributes \xB7 changes in {rate} of rows \xB7 \u2300 {bytes}",detail_drivers_hint:"An attribute that keeps changing writes a new row on every change, even when the state stays the same. Remedies: shorter retention, don't record, or turn the attribute off in the source integration.",reason_attribute_updates:"In {attr_only} of the rows only an attribute changed, not the state.",inbox_group_title:"{integration} \xB7 {n} entities",reason_time:"Time or date sensor \u2013 changes every minute, its history has no use.",reason_time_statistics:"Time or date sensor with statistics \u2013 1 day of history is enough.",reason_power_statistics:"Power reading {rate}. A few days of history are enough, the hourly statistics are kept for good.",reason_energy_statistics:"Energy meter {rate}. The energy dashboard only uses the long-term statistics, which are kept.",reason_gps_tracker:"GPS tracker: every position stores coordinates. A week is enough for the map.",reason_fast_presence:"Presence or distance sensor {rate} \u2013 writes a great many rows.",group_reason_noise:"Technical diagnostic values (signal, IP, uptime \u2026) \u2013 their history is practically never needed.",group_reason_noise_statistics:"Technical values with long-term statistics \u2013 1 day of history is enough, the statistics stay.",group_reason_time:"Time and date sensors \u2013 their history has no use.",group_reason_time_statistics:"Time and date sensors with statistics \u2013 1 day of history is enough.",group_reason_power_statistics:"Power sensors \u2013 small one by one, large together. The hourly statistics are kept for good.",group_reason_energy_statistics:"Energy meters \u2013 the energy dashboard only uses the long-term statistics, which are kept.",group_reason_gps_tracker:"GPS trackers \u2013 every position stores coordinates. A week is enough for the map.",group_reason_fast_presence:"Presence and distance sensors with a great many rows.",group_reason_attribute_updates:"Sensors where almost only attributes change, not the state.",group_reason_attributes:"Sensors whose space is mostly attributes.",group_reason_statistics_kept:"Very frequent values. The hourly long-term statistics are kept for good.",group_reason_frequent:"Very frequent values \u2013 a short history is usually enough.",hint_esphome:"Better at the source: in ESPHome send only useful values with \u201Cthrottle_average: 60s\u201D or \u201Cor: throttle + delta\u201D.",hint_powercalc:"Better at the source: raise the update intervals in the Powercalc options (energy_update_interval, group_power_update_interval).",hint_shelly:"Better at the source: raise the reporting interval or the power change threshold in the Shelly web interface.",hint_generic:"Better at the source: if the integration has a polling or reporting interval, a longer one writes fewer rows.",action_recorder_changes:"Recorder settings changed",target_backups:"backups",target_files:"files",target_orphans:"history of deleted entities",target_statistics:"statistics",target_purge:"old history",target_repack:"repacked",target_docker:"Docker images",history_blocked:"stopped",history_failed:"stopped by an error",rec_retention:"Shorter retention for {count} entities",rec_retention_desc:"Recommendations by kind of sensor in the database view. Freed by the nightly purge; the file only shrinks after a repack.",reclaim_retention:"another {bytes} with shorter retention",kinds_title:"Rules by kind of sensor",kinds_hint:"The rules only change the recommendations. Nothing takes effect until you accept and apply it. With \u201CDon't record\u201D, sensors with long-term statistics keep 1 day so the statistics continue. Use in dashboards, helpers and the energy dashboard is still respected.",kinds_changed:"{n} changed",kinds_saved:"Rule saved \u2013 recommendations updated.",kind_default:"Default: {tier}",kind_off:"No recommendation",kind_none:"No matching entities right now.",kind_stats:"Entities: {n} \xB7 {bytes} history \xB7 rule saves about {saving}",kind_stats_nosave:"Entities: {n} \xB7 {bytes} history \xB7 nothing to save right now",kind_noise:"Technical diagnostic values",kind_noise_desc:"Signal, IP, uptime, firmware and entities in the diagnostic category.",kind_time:"Time and date",kind_time_desc:"Time, date and world clock sensors that change every minute.",kind_power:"Power (W)",kind_power_desc:"Power readings more often than every 15 minutes. The hourly statistics stay.",kind_energy:"Energy meters (kWh)",kind_energy_desc:"Meter readings more often than every 15 minutes. The energy dashboard only uses the statistics.",kind_gps:"GPS trackers",kind_gps_desc:"Device trackers with GPS that report a position more often than every 30 minutes.",kind_presence:"Presence and distance",kind_presence_desc:"Radar and distance sensors that report more than once a minute.",kind_attribute_updates:"Only attributes change",kind_attribute_updates_desc:"At least 80 % of the rows come from attributes while the state stays the same.",kind_attributes:"Large attributes",kind_attributes_desc:"Most of the storage is in attributes, for example forecasts or lists.",kind_frequent:"Very frequent values",kind_frequent_desc:"All other sensors with a new value more often than every 5 minutes.",kind_auto:"Set up new sensors of this kind automatically",kind_auto_since:"New sensors are set up automatically (since {date})",kinds_auto_hint:"Automatic only applies to sensors created after it is switched on. They get the rule after the first analysis that recognises them (daily), with no minimum size and no immediate purge. Your own settings and dismissals, and use in dashboards, helpers and the energy dashboard come first. Each sensor is set up automatically only once; afterwards you can change it freely. \u201CDon't record\u201D takes effect after a restart.",action_auto_rules:"Rules applied to new sensors",tab_settings:"Settings",kinds_link:"Adjust rules by kind of sensor",more_options_title:"More options",more_options_hint:"Backup rotation, warning thresholds, update interval and the backup before deleting are in the integration's options.",whatif_title:"What if",whatif_less:"With {days} days about {bytes} less",keep_shorter:"The global retention goes down from {from} to {to} days.",keep_shorter_bytes:"Home Assistant's next nightly purge then deletes about {bytes} of history.",keep_shorter_no_undo:"Home Assistant deletes this itself: Storage Manager does not back these rows up and there is no Undo for them. Only a full backup brings them back.",whatif_more:"With {days} days about {bytes} more",whatif_hint:"Estimated from the last analysis, compared with today ({days} days): state history only, without events and statistics. Retention set per entity is taken into account. More days grow at today's rate.",check_writers:"Sudden heavy writers",check_writers_ok:"No entity writes much more than usual.",check_writers_warning:"{count} entities write at least ten times as many rows per day as usual (or every few seconds as a new entity).",check_writers_unknown:"Needs an analysis.",writer_rate:"{before} \u2192 {now} per day",writer_new:"new \xB7 {now} per day",writers_ack:"Mark as normal",writers_acked:"New rates taken as usual.",rec_debug_logging:"Debug logging is on ({count})",rec_debug_logging_desc:"On for: {sources}. Debug logging writes a lot to the log, costs CPU and wears out SD cards. Choose \u201CDisable debug logging\u201D on the integration or remove the entry under logger:. The size is that of the current log file once it is noticeable.",debug_default:"everything (logger default)",detail_statistics_cards:"Statistics cards: {titles} (need the long-term statistics)",detail_yaml:"In YAML",detail_dynamic:"Possibly in templates that read every entity of this domain: {files}",unused_title:"Statistics nobody needs",unused_hint:"Home Assistant never deletes long-term statistics by itself. No energy dashboard or statistics card shows these, or nothing is added to them any more. Deleted after the safety chain with a backup; Undo brings them back.",unused_noise:"Diagnostic values with statistics ({n})",unused_noise_hint:"Signal, uptime, CPU and the like. Switching off removes the state_class via customize in the package file, deletes the statistics and clears leftovers after the next restart. The history stays.",unused_time:"Time sensors with statistics ({n})",unused_time_hint:"As for diagnostic values: remove the state_class and delete the statistics.",unused_disabled:"Disabled entities ({n})",unused_disabled_hint:"Disabled entities write nothing any more, but their statistics stay forever.",unused_stale_import:"Imports without new data ({n})",unused_stale_import_hint:"Statistics imported by integrations without a new row for 90 days, for example from removed energy providers.",unused_needs_packages:"Needs a packages folder, otherwise the statistics would be compiled again right away.",unused_switch_off:"Switch off and delete",unused_delete:"Delete",unused_last:"last row {date}",unused_off_title:"Switched off ({n})",unused_off_hint:"Home Assistant compiles no statistics for these entities. Switching back on takes effect after a restart; deleted statistics only come back with Undo.",unused_on:"switch back on",unused_on_done:"Statistics are compiled again after the next restart.",unused_switch_off_note:"{n} entities get their state_class removed (fully effective after a restart).",more_n:"\u2026 and {n} more",events_hint:"Excluding stops new events only; existing ones stay until the purge after the retention period. Here they can be deleted right away, after the safety chain with a backup.",events_excluded:"excluded",events_still_recorded:"still recorded",events_still_recorded_hint:"Deleting removes only the rows there are; new ones follow right away. Exclude the type in the settings first.",events_logbook:"logbook",events_delete:"Delete",events_delete_excluded:"Delete all {n} excluded types",events_logbook_note:"This includes events the logbook shows: those entries disappear from the logbook.",system_log_fire_event:"system_log fires an event for every log entry (fire_event: true). That creates the {rows} system_log_event rows. Switch it off in YAML under system_log: (check packages too), then delete the old rows here.",rec_unused_statistics:"Statistics nobody needs ({count})",rec_unused_statistics_desc:"Long-term statistics of diagnostic values, disabled entities and old imports. Never deleted automatically.",rec_system_log_events:"system_log writes every log entry as an event",rec_system_log_events_desc:"fire_event is on: {count} system_log_event rows. Switch it off and delete the old rows in the database view.",rec_system_log_rows:"Old system_log_event rows",rec_system_log_rows_desc:"{count} rows from when system_log wrote events. Delete them in the database view.",target_unused_statistics:"unused statistics",target_events:"events",action_statistics_on:"Statistics switched back on",effect_since_change_data:"Data in the database since {date}: {delta} ({bytes}).",effect_data_soon:"From the next analysis the solid line shows the data without free pages. Shorter retention frees pages; the file only shrinks when repacked.",effect_legend_data:"Data",effect_legend_file:"File",effect_legend_change:"Change",unused_excluded:"Entities no longer recorded ({n})",unused_excluded_hint:"The recorder no longer records these entities (own exclusion, YAML filter or include list). No new statistics are compiled; the old ones would stay forever.",engine_untested:"{engine}: analysis, purges and deleting statistics and events go through Home Assistant and SQLAlchemy but are not tested on this engine. The integrity check and repacking with little space are SQLite only.",events_rows:"{n} rows",busy_dead:"Disabling dead entities and deleting their history",busy_events:"Deleting events",busy_unused_statistics:"Deleting statistics",dead_title:"Dead entities",dead_hint:"Entities that have been unavailable for at least 7 days without a real value in that time, or that their integration no longer provides. Integrations that are not loaded right now are left out. Disabling can be undone at any time; deleted history comes back with Undo in the overview history while its backup exists (14 days).",dead_kind_gone:"no longer provided by the integration",dead_kind_unavailable:"unavailable",dead_kind_yaml:"from YAML without unique_id",dead_since:"last value {date}",dead_never:"no value since {date}",dead_select_all:"Select all",dead_select_none:"Clear selection",dead_disable:"Disable ({n})",dead_disable_delete:"Disable and delete history",dead_blocked_title:"Not selectable ({n})",dead_blocked_hint:"These entities are dead too, but something still uses them or they cannot be disabled. Clean up the usage first.",dead_yaml_hint:"Without a unique_id there is no registry entry to disable. Remove the definition from the YAML configuration.",dead_used:"Still used: {list}",dead_used_automations:"automations: {n}",dead_used_scripts:"scripts: {n}",dead_used_helpers:"helpers: {n}",dead_used_dashboards:"dashboards: {n}",detail_dashboard_cards:"Shown on: {titles} (no history)",dead_used_yaml:"places in YAML: {n}",dead_used_energy:"energy dashboard",dead_disabled_title:"Disabled by Storage Manager ({n})",dead_enable:"enable again",dead_enable_hint:"Home Assistant reloads the integration about 30 seconds after enabling; entities from YAML come back after reloading the YAML or a restart. Deleted history only comes back with Undo in the overview history.",dead_disable_title:"Disable entities",dead_disable_body:"Disabled entities are no longer updated or recorded. Their history stays until the regular purge. Undo in this card or under Settings \u2192 Entities.",dead_disabled_done:"{n} entities disabled.",dead_enabled_done:"{n} entities enabled again.",dead_confirm_note:"The entities are disabled first, then their history and long-term statistics are deleted.",rec_dead_entities:"Dead entities ({count})",rec_dead_entities_desc:"Without a value for at least 7 days and not used anywhere. Disabling keeps the list tidy, deleting frees the history.",target_dead:"dead entities",action_disable_dead:"Dead entities disabled",action_enable_dead:"Entities enabled again",tpl_title:"Lean copy as a template",tpl_hint:"Record only the state instead of the whole entity with its attributes: a template sensor takes over the value and the original is no longer recorded. Attributes you need in the history get an entity of their own.",tpl_attrs:"Keep attributes as entities of their own ({n})",tpl_build:"Create template",tpl_copy:"Copy",tpl_copied:"Copied to the clipboard.",tpl_copy_failed:"Copying is not possible, please select the text.",tpl_step_add:"Add it to configuration.yaml (merge it with an existing template:).",tpl_step_add_packages:"Save it as a file of its own in the packages folder or add it to configuration.yaml.",tpl_step_reload:"Reload \u201CTemplate entities\u201D under Developer tools \u2192 YAML (restart for a new package file).",tpl_step_new:"New entities: {ids}",tpl_step_switch:"These read the original's history and should use the new entity instead:",tpl_switch_statistics:"Statistics card in \u201C{title}\u201D",tpl_step_drop:"Set the original to \u201CDo not record\u201D below. Automations can keep using the original, they only need the current state.",tpl_taken:"Entities with these ids already exist: {ids}. Home Assistant then appends _2; change the name in the YAML.",raw_title:"Stored data",raw_hint:"The raw rows in the database, newest first.",raw_states:"States",raw_statistics:"Statistics (hourly)",raw_statistics_short_term:"Statistics (5 minutes)",raw_empty:"No rows stored.",raw_attributes:"Attributes ({bytes})",raw_start:"Start",raw_more:"Load older",window_hint:"Drag a time range in the chart to see who wrote in it.",window_24h:"Last 24 h",window_7d:"Last 7 days",window_title:"Written from {from} to {to}",window_close:"Close",window_partial:"Older data is already purged: complete only from {date}.",window_none:"Nothing was written in this range.",window_rows:"{n} rows",window_rows_one:"1 row",facet_integration:"Integration",facet_device:"Device",facet_used:"Usage",facet_used_yes:"Used",facet_used_no:"Not used",facet_used_dynamic:"Only dynamically",facet_defined:"Defined in",facet_defined_ui:"UI",facet_defined_yaml:"YAML",facet_defined_yaml_no_id:"YAML without unique_id",facet_defined_gone:"No longer present",facet_age:"Last written",facet_age_7:"Older than 7 days",facet_age_30:"Older than 30 days",facet_age_180:"Older than 6 months",facet_clear:"Reset filters ({n})",facet_matches:"{n} matches",facet_matches_one:"1 match",select_matching:"Select all {n} matches",select_matching_one:"Select the 1 match",treemap_label:"Storage by integration",treemap_hint:"Tap an area to see that integration's entities.",group_list:"As list",facet_more:"More filters",facet_less:"Fewer filters",window_entities:"Entities",window_events:"Events"},Tt={de:zt,en:he};function ot(u){let e=(u?.locale?.language||u?.language||"en").split("-")[0],t=Tt[e]||he;return(s,i={})=>{let a=i.rows??i.n,o=(a!==void 0&&String(a).replace(/\D/g,"")==="1"?t[`${s}_one`]??he[`${s}_one`]:void 0)??t[s]??he[s]??s;for(let[l,h]of Object.entries(i))o=o.replaceAll(`{${l}}`,String(h));return o}}function lt(u){return u?.locale?.language||u?.language||"en"}var Se="storage_manager",Ee=25,dt=["#03a9f4","#ff9800","#4caf50","#e91e63","#9c27b0","#00bcd4","#8bc34a","#ffc107"],De=["overview","database","backups","files","settings"],Lt=150,ze={homeassistant:"var(--sm-c1)",apps_data:"var(--sm-c2)",apps_config:"var(--sm-c6)",backup:"var(--sm-c4)",media:"var(--sm-c3)",share:"var(--sm-c5)",ssl:"var(--sm-c6)",system:"var(--sm-c7)"},Nt={backups:"mdi:backup-restore",backups_rotation_off:"mdi:backup-restore",backups_offsite:"mdi:cloud-alert",files:"mdi:file-cabinet",orphans:"mdi:ghost-outline",statistics:"mdi:chart-box-outline",repack:"mdi:database-refresh",top_entities:"mdi:database-alert",unused_statistics:"mdi:chart-line-variant",dead_entities:"mdi:power-plug-off-outline",system_log_events:"mdi:text-box-remove-outline",system_log_rows:"mdi:text-box-remove-outline",debug_logging:"mdi:bug-outline",retention:"mdi:calendar-clock"},ct=u=>r`<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
  <path fill="currentColor" d=${u}></path></svg>`,Rt="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",Mt="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",q=class extends nt(it(M)){constructor(){super();let e=window.location.hash.replace("#","");this._tab=De.includes(e)?e:"overview",this._draft=new Map,this._selected=new Set,this._search="",this._domain="",this._onlyChanged=!1,this._onlyOrphans=!1,this._sort="size",this._limit=Lt,this._working=null}get t(){return ot(this.hass)}get lang(){return lt(this.hass)}connectedCallback(){super.connectedCallback(),this._hashListener=()=>{let e=window.location.hash.replace("#","");De.includes(e)&&e!==this._tab&&this._setTab(e,!1)},window.addEventListener("hashchange",this._hashListener),this._keyListener=e=>{if(e.key==="Tab"){this._trapFocus(e);return}if(e.key==="Escape"){if(this._dialog)this._dialog=void 0;else if(this._detail)this._detail=void 0;else return;e.stopPropagation()}},this.addEventListener("keydown",this._keyListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._hashListener),this.removeEventListener("keydown",this._keyListener),this._unsubscribe?.then(e=>e()).catch(()=>{}),this._unsubscribe=void 0}updated(e){if(this._manageFocus(e,"_dialog",".dialog label.typed input, .dialog .actions .btn"),this._manageFocus(e,"_detail",".sheet .icon-btn"),e.has("_tab")||e.has("_overview")){let t=this.renderRoot?.querySelector('nav.tabs [aria-selected="true"]'),s=t?.parentElement;if(s&&s.scrollWidth>s.clientWidth){let i=t.getBoundingClientRect().left-s.getBoundingClientRect().left+s.scrollLeft;s.scrollLeft=Math.max(0,i-(s.clientWidth-t.offsetWidth)/2)}}e.has("hass")&&this.hass&&!this._started&&(this._started=!0,this._loadOverview(),this._loadTab(this._tab),this._unsubscribe=this.hass.connection.subscribeMessage(()=>this._scheduleReload(),{type:`${Se}/subscribe`}).catch(()=>{}))}_trapFocus(e){let t=this.renderRoot.querySelector(this._dialog?".dialog":this._detail?".sheet":".none");if(!t)return;let s=[...t.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea, a[href], [tabindex]:not([tabindex="-1"])')];if(!s.length)return;let i=s[0],a=s[s.length-1],n=this.renderRoot.activeElement;e.shiftKey&&(n===i||!t.contains(n))?(e.preventDefault(),a.focus()):!e.shiftKey&&(n===a||!t.contains(n))&&(e.preventDefault(),i.focus())}_manageFocus(e,t,s){if(!e.has(t))return;let i=e.get(t),a=this[t];if(a&&(!i||t==="_dialog"&&a!==i))t==="_dialog"&&(this._typedValue=""),i||(this._returnFocus=this._returnFocus||this.renderRoot.activeElement),this.renderRoot.querySelector(s)?.focus();else if(!a&&i){let n=this._returnFocus;this._returnFocus=void 0,n?.isConnected&&n.focus()}}_ws(e,t={}){return this.hass.callWS({type:`${Se}/${e}`,...t})}_scheduleReload(){clearTimeout(this._reloadTimer),this._reloadTimer=setTimeout(()=>this._loadOverview(),400)}async _loadOverview(){try{this._overview=await this._ws("overview"),this._error=void 0}catch(e){this._error=e.message||String(e)}}async _loadEntities(){try{this._entities=await this._ws("entities")}catch(e){this._showToast(this.t("error",{msg:e.message}))}}async _loadUnused(){try{this._unused=await this._ws("unused_statistics")}catch{this._unused={items:[],off:[],bytes:0,packages:!1}}}_undoCell(e){let t=e.details?.undo;return!t||typeof t!="object"?d:e.details.undone?r`<span class="muted small" title=${k(e.details.undone,this.lang)}>${this.t("undo_done_at")}</span>`:(this._overview?.undo_available||[]).includes(t.id)?r`<button class="btn" ?disabled=${!!this._working} @click=${()=>this._previewUndo(t.id)}>${this.t("undo_button")}</button>`:r`<span class="muted small">${this.t("undo_expired")}</span>`}async _previewUndo(e){let t=this.t,s;try{s=await this._ws("undo_preview",{undo_id:e})}catch(n){let o=`undo_error_${(n.message||"").replace("undo_","")}`;this._showToast(t(o)!==o?t(o):t("error",{msg:n.message}));return}let i=Object.entries(s.rows).filter(([,n])=>n),a=s.schema_ok?s.free<s.need?"undo_error_no_space":null:"undo_error_schema";this._dialog={title:t("undo_title"),body:r`<p>${t("undo_body",{date:k(s.created,this.lang)})}</p>
        <ul>${i.map(([n,o])=>r`<li>${t(`undo_rows_${n}`,{n:y(o,this.lang)})}</li>`)}</ul>
        ${s.enable.length?r`<p>${t("undo_enable",{n:s.enable.length})}</p>`:d}
        ${s.statistics_on.length?r`<p>${t("undo_statistics_on",{n:s.statistics_on.length})}</p>`:d}
        ${Object.keys(s.retention||{}).length?r`<p>${t("undo_retention",{n:Object.keys(s.retention).length})}</p>`:d}
        ${(s.include||[]).length?r`<p>${t("undo_include",{n:s.include.length})}</p>`:d}
        ${s.statistics_limits?r`<p>${t("undo_statistics_limits")}</p>`:d}
        ${s.undone?r`<p class="muted small">${t("undo_again")}</p>`:d}
        ${s.schema_changed&&s.schema_ok?r`<p class="muted small">${t("undo_schema_changed")}</p>`:d}
        <p class="muted small">${t("undo_note")}</p>
        ${a?r`<p class="warn-text">${t(a,{need:p(s.need,this.lang),missing:(s.missing||[]).join(", ")})}</p>`:d}`,confirm:t("undo_confirm"),disabled:!!a,action:()=>this._runUndo(e)}}async _runUndo(e){let t=this.t;this._working="undo";try{let s=await this._ws("undo",{undo_id:e}),i=Object.values(s.added).reduce((a,n)=>a+n,0);this._showToast(t("undo_success",{n:y(i,this.lang)})),await this._loadOverview(),this._unused&&await this._loadUnused(),this._dead&&await this._loadDead()}catch(s){let i=`undo_error_${(s.message||"").replace("undo_","")}`;this._showToast(t(i)!==i?t(i):t("error",{msg:s.message}))}finally{this._working=null}}async _loadDead(){try{this._dead=await this._ws("dead_entities")}catch{this._dead={items:[],disabled:[],bytes:0}}let e=new Set(this._dead.items.filter(t=>t.selectable).map(t=>t.entity_id));this._deadSel=new Set([...this._deadSel||[]].filter(t=>e.has(t)))}async _loadBackups(){try{this._backups=await this._ws("backups")}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_loadTab(e){(e==="database"||e==="settings")&&!this._entities&&this._loadEntities(),e==="backups"&&this._loadBackups(),(e==="database"||e==="backups")&&this._loadHealth(),e==="database"&&(this._loadUnused(),this._loadDead()),e==="settings"&&this._loadStatsRetention(),e==="files"&&this._loadFolders()}async _loadStatsRetention(){try{this._statsRet=await this._ws("statistics_retention"),this._statsDraft={stats:this._statsRet.stats_months,energy:this._statsRet.energy_months},await this._loadStatsPlan()}catch{this._statsRet=null}}async _loadStatsPlan(){let e=this._statsDraft||{};this._statsPlan=null;try{this._statsPlan=await this._ws("statistics_age_plan",{stats_months:e.stats??null,energy_months:e.energy??null})}catch{this._statsPlan=null}}async _saveStatsRetention(e){let t=this._statsDraft||{};this._working="statistics_retention";try{this._statsRet=await this._ws("statistics_retention",{stats_months:t.stats??null,energy_months:t.energy??null}),this._showToast(this.t("stats_ret_saved"))}catch(s){this._showToast(this.t("error",{msg:s.message}));return}finally{this._working=null}e&&(await this._previewAndClean(["statistics_age"]),await this._loadStatsRetention())}async _loadFolders(){try{this._folders=await this._ws("folder_roots")}catch{this._folders=null}}async _scanFolder(e){this._working="folder_scan";try{this._folder=await this._ws("folder_scan",{root:e}),await this._loadFolders()}catch(t){this._showToast(this.t("error",{msg:t.message}))}finally{this._working=null}}async _browseFolder(e){try{this._folder=await this._ws("folder_browse",{root:this._folder.root,path:e})}catch(t){this._showToast(this.t("error",{msg:t.message}))}}_setTab(e,t=!0){this._tab=e,t&&history.replaceState(null,"",`#${e}`),this._loadTab(e)}async _refreshAll(){this._working="refresh";try{await this._ws("refresh"),await this._loadOverview(),(this._tab==="database"||this._tab==="settings")&&await this._loadEntities(),this._tab==="backups"&&await this._loadBackups()}finally{this._working=null}}_showToast(e){this._toast=e,clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toast=void 0,5e3)}_navigate(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}_toggleMenu(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}async _previewAndClean(e,t={}){let s;try{let h={};t.statistic_ids&&(h.statistic_ids=t.statistic_ids),t.event_types&&(h.event_types=t.event_types),t.entity_ids&&(h.entity_ids=t.entity_ids),s=await this._ws("preview",{targets:e,...h})}catch(h){this._showToast(this.t("error",{msg:h.message}));return}let i=[];for(let h of e){let c=s[h];if(c)if(h==="backups")c.items.forEach(_=>i.push(`${_.name} \xB7 ${p(_.bytes,this.lang)}`));else if(h==="files")c.items.forEach(_=>i.push(`${this.t(`hog_${_.name}`)} \xB7 ${p(_.bytes,this.lang)}`));else if(h==="orphans")i.push(`${this.t("rec_orphans")}: ${c.items.length} \xB7 ${p(c.bytes,this.lang)}`),c.items.slice(0,10).forEach(_=>i.push(_)),c.items.length>10&&i.push(this.t("apply_more",{n:c.items.length-10}));else if(h==="statistics")i.push(`${this.t("rec_statistics")}: ${c.items.length}${c.bytes?` \xB7 ${p(c.bytes,this.lang)}`:""}`),c.items.slice(0,10).forEach(_=>i.push(_)),c.items.length>10&&i.push(this.t("apply_more",{n:c.items.length-10}));else if(h==="purge")i.push(`${this.t("obsolete_purge")}: ${y(c.rows,this.lang)} \xB7 ${p(c.bytes,this.lang)}`);else if(h==="repack")i.push(`${this.t("rec_repack")} \xB7 ${p(c.bytes,this.lang)} \u2013 ${this._repackPlanText(c.plan)}`);else if(h==="docker")i.push(this.t("docker_title"));else if(h==="unused_statistics")i.push(`${this.t("unused_title")}: ${c.items.length} \xB7 ${p(c.bytes,this.lang)}`),c.switch_off&&i.push(this.t("unused_switch_off_note",{n:c.switch_off}));else if(h==="statistics_age"){for(let[_,g]of Object.entries(c.groups||{}))g.rows&&i.push(this.t(`stats_ret_preview_${_}`,{n:y(g.statistics,this.lang),rows:y(g.rows,this.lang),bytes:p(g.bytes,this.lang),date:g.cutoff?k(g.cutoff,this.lang):""}));c.rows||i.push(this.t("stats_ret_nothing"))}else h==="dead"?(c.items.forEach(_=>i.push(`${_.name} \xB7 ${p(_.bytes,this.lang)}`)),i.push(this.t("dead_confirm_note"))):h==="events"&&(c.items.forEach(_=>i.push(`${_.event_type}: ${this.t("events_rows",{n:y(_.rows,this.lang)})} \xB7 ${p(_.est_bytes||0,this.lang)}`)),c.items.some(_=>_.logbook)&&i.push(this.t("events_logbook_note")))}let n=!!s.repack?.plan?.can_convert;this._repackConvert=!0;let o=s.safety&&!s.safety.space.ok,l=(s.orphans?.items?.length||0)+(s.dead?.items?.length||0)+(s.unused_statistics?.items?.length||0)+(s.statistics?.items?.length||0)+Object.values(s.statistics_age?.groups||{}).reduce((h,c)=>h+(c.statistics||0),0);this._dialog={title:this.t("confirm_title"),typed:l>=Ee?l:0,body:()=>r`<p>${this.t("confirm_cleanup")}</p>
        <ul>${i.map(h=>r`<li>${h}</li>`)}</ul>
        ${s.total?r`<p><b>${this.t("confirm_total",{bytes:p(s.total,this.lang)})}</b></p>`:d}
        ${this._safetyItems(s.safety)}
        ${n?r`<label class="check-line"><input type="checkbox" .checked=${this._repackConvert}
              @change=${h=>this._repackConvert=h.target.checked} />
              <span>${this.t("repack_convert")}<br /><span class="muted small">${this.t("repack_convert_hint")}</span></span></label>`:d}`,confirm:this.t("free_now"),danger:!0,disabled:o,action:()=>this._clean(e,{...t,plan_id:s.plan_id,...n?{convert:this._repackConvert}:{}})}}async _clean(e,t={}){this._working=e.join(",");try{let s=await this._ws("clean",{targets:e,...t}),i=s.freed>0?this.t("done_freed",{bytes:p(s.freed,this.lang)}):this.t("done");if(s.blocked)this._handleBlocked(s.blocked,()=>this._clean(e,{...t,skip_backup:!0}));else{let a=s.undo?` ${this.t("undo_saved")}`:s.backup?` ${this.t("backup_used",{name:s.backup.name})}`:"";this._showToast(s.errors?.length?`${i}${a} ${s.errors.join("; ")}`:`${i}${a}`)}await this._loadOverview(),this._entities&&await this._loadEntities(),this._unused&&await this._loadUnused(),this._dead&&await this._loadDead(),this._tab==="backups"&&await this._loadBackups()}catch(s){this._showToast(s.message==="plan_expired"?this.t("plan_expired"):this.t("error",{msg:s.message}))}finally{this._working=null}}async _analyze(){this._working="analyze";try{(await this._ws("analyze")).cancelled&&this._showToast(this.t("analysis_stopped")),await Promise.all([this._loadOverview(),this._loadEntities()])}catch(e){this._showToast(this.t("error",{msg:e.message}))}finally{this._working=null}}_confirmRestart(){this._dialog={title:this.t("restart"),body:r`<p>${this.t("restart_confirm")}</p>`,confirm:this.t("restart"),danger:!0,action:()=>this.hass.callService("homeassistant","restart")}}async _importGuiRecorder(){try{let e=await this._ws("import_gui_recorder");this._showToast(this.t("gui_recorder_done",{n:e.imported})),await Promise.all([this._loadOverview(),this._loadEntities()])}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_effective(e){let t=this._draft.get(e.entity_id);return t?t.value:e.excluded?"excluded":e.tier}_original(e){return e.excluded?"excluded":e.tier}_setValue(e,t){let s=new Map(this._draft);for(let i of e)i.excluded_by_yaml||(t===this._original(i)?s.delete(i.entity_id):s.set(i.entity_id,{value:t,row:i}));this._draft=s}_draftEstimate(){let e=0;for(let{value:t,row:s}of this._draft.values()){if(!(t in ce)||!s.rows)continue;let i=ce[t],a=i===0?0:Math.min(s.rows_24h*i,s.rows);e+=s.est_state_bytes*(1-a/s.rows)}return Math.max(e,0)}async _applyDraft(){let e=this.t,t={},s={},i=[];for(let[l,{value:h,row:c}]of this._draft){let _=c.excluded,g=_?"excluded":c.tier;h==="excluded"?_||(s[l]=!0):(_&&(s[l]=!1),h!==c.tier&&(t[l]=h)),h!==g&&i.push({name:c.name||l,before:g,after:h})}let a=new Set([...Object.keys(t),...Object.keys(s)]).size;if(!a)return;let n;try{n=await this._ws("apply_preview",{retention:t,excluded:s})}catch(l){this._showToast(e("error",{msg:l.message}));return}let o=i.slice(0,8);this._dialog={title:e("confirm_title"),body:r`<p>${e("apply_summary",{n:a})}</p>
        <ul class="changes">${o.map(l=>r`<li>${l.name}: ${this._tierLabel(l.before)} → <b>${this._tierLabel(l.after)}</b></li>`)}${i.length>o.length?r`<li class="muted">${e("apply_more",{n:i.length-o.length})}</li>`:d}</ul>
        ${n.entities?r`<p><b>${e("apply_deletes",{n:n.entities,bytes:p(n.bytes,this.lang)})}</b></p>
              ${this._safetyItems(n.safety)}`:r`<p>${e("apply_no_delete")}</p>`}
        ${a>=Ee?r`<p>${e("apply_many",{n:a})}</p>`:d}`,typed:a>=Ee?a:void 0,confirm:e("apply"),danger:!!n.entities,action:()=>this._sendApply({retention:t,excluded:s,purge_now:!0})}}async _sendApply(e){this._working="apply";try{let t=await this._ws("apply",e);this._draft=new Map,this._selected=new Set,t.blocked?(this._showToast(this.t("applied_purge_waits")),this._handleBlocked(t.blocked,()=>this._sendApply({...e,skip_backup:!0}))):this._showToast(t.backup?`${this.t("applied")} ${this.t("backup_used",{name:t.backup.name})}`:this.t("applied")),await Promise.all([this._loadOverview(),this._loadEntities()]),t.packages_missing&&this._showToast(this.t("packages_banner"))}catch(t){this._showToast(this.t("error",{msg:t.message}))}finally{this._working=null}}render(){if(!this.hass)return d;let e=this.t;return r`
      <header>
        <div class="toolbar">
          ${this.narrow?r`<button class="icon-btn" @click=${this._toggleMenu} aria-label="menu">${ct(Rt)}</button>`:d}
          <div class="title">${e("title")}</div>
          <button class="icon-btn" title=${e("refresh")} aria-label=${e("refresh")}
            ?disabled=${!!this._working} @click=${this._refreshAll}>${ct(Mt)}</button>
        </div>
        <nav class="tabs" role="tablist">
          ${De.map(t=>r`<button role="tab" aria-selected=${t===this._tab?"true":"false"}
              @click=${()=>this._setTab(t)}>${e(`tab_${t}`)}</button>`)}
        </nav>
      </header>
      <main>
        ${this._error?r`<div class="banner"><div class="txt">${e("error",{msg:this._error})}</div></div>`:d}
        ${this._busyBanner()}
        ${this._overview?this._renderTab():r`<div class="center"><span class="spinner"></span><p class="muted">${e("loading")}</p></div>`}
      </main>
      ${this._renderDraftBar()}
      <div class="live" role="status" aria-live="polite">${this._toast?r`<div class="toast">${this._toast}</div>`:d}</div>
      ${this._renderDialog()}
    `}_busyBanner(){let e=this._overview?.data?.busy||(this._working&&this._working!=="refresh"?this._working:null);return e?r`<div class="banner info"><span class="spinner"></span><div class="txt">${this.t("busy",{what:this._busyText(e)})}</div></div>`:d}_renderTab(){switch(this._tab){case"database":return this._renderDatabase();case"backups":return this._renderBackups();case"files":return this._renderFiles();case"settings":return this._renderSettingsTab();default:return this._renderOverview()}}_renderOverview(){let e=this.t,{data:t,recommendations:s,history:i}=this._overview,a=t.disk,n=t.forecast,o;n.growth_per_day===null?o=e("growth_unknown"):n.days_until_full!==null?o=e("growth_full",{growth:p(n.growth_per_day,this.lang),days:Math.round(n.days_until_full)}):n.growth_per_day>1024*1024?o=e("growth_ok",{growth:p(n.growth_per_day,this.lang)}):o=e("growth_none");let l=this._segments(t),h=100-a.percent_used<this._overview.options.low_space_percent,c=n.days_until_full!==null&&n.days_until_full<this._overview.options.forecast_warning_days;return r`
      ${h||c?r`<div class="banner"><ha-icon icon="mdi:harddisk-remove"></ha-icon>
            <div class="txt">${h?t.reclaimable.total>0?e("low_space_banner",{free:p(a.free,this.lang),reclaim:p(t.reclaimable.total,this.lang),safe:p(t.reclaimable.files+t.reclaimable.backups,this.lang)}):e("low_space_banner_db",{free:p(a.free,this.lang)}):e("forecast_banner",{days:Math.round(n.days_until_full)})}</div>
            ${t.reclaimable.files+t.reclaimable.backups>0?r`<button class="btn primary" ?disabled=${!!this._working}
                  @click=${()=>this._previewAndClean(this._safeTargets())}>${e("safe_cleanup")}</button>`:r`<button class="btn" @click=${()=>this._setTab("database")}>${e("tab_database")}</button>`}
          </div>`:d}
      <div class="card">
        <div class="hero">
          <div>
            <div class="big">${p(a.free,this.lang)}</div>
            <div class="muted">${e("free")} ${e("of")} ${p(a.total,this.lang)}</div>
          </div>
          <div>
            <div class="row"><b>${S(a.percent_used/100,this.lang)} ${e("used")}</b></div>
            <div class="stack" role="img" aria-label=${`${S(a.percent_used/100,this.lang)} ${e("used")}`}>
              ${l.map(_=>r`<div style="width:${_.share*100}%;background:${_.color}" title=${`${_.label}: ${p(_.bytes,this.lang)}`}></div>`)}
            </div>
            <div class="legend">
              ${l.map(_=>r`<span><i class="dot" style="background:${_.color}"></i>${_.label} ${p(_.bytes,this.lang)}</span>`)}
            </div>
            <p class="muted small" style="margin:10px 0 0">${o}</p>
          </div>
        </div>
      </div>

      <div class="card">
        <h2 class="wrap">${e("reclaim_title")}<span class="spacer"></span>
          ${t.reclaimable.total>0?r`<span class="muted small">${e("reclaim_total",{bytes:p(t.reclaimable.total,this.lang),safe:p(t.reclaimable.files+t.reclaimable.backups,this.lang)})}</span>`:d}
          ${t.retention_potential?.bytes?r`<span class="muted small">&nbsp;· ${e("reclaim_retention",{bytes:p(t.retention_potential.bytes,this.lang)})}</span>`:d}
        </h2>
        ${s.length===0?r`<p class="muted">${e("reclaim_none")}</p>`:s.map(_=>this._renderRec(_))}
      </div>

      <div class="grid2">
        <div class="card">
          <h2>${e("breakdown_title")}</h2>
          ${this._renderBreakdown(t)}
        </div>
        <div class="card">
          <h2>${e("history_title")}<span class="spacer"></span>
            <span class="muted small">${e("history_total",{bytes:p(t.freed_total,this.lang)})}</span></h2>
          ${i.length===0?r`<p class="muted">${e("history_empty")}</p>`:i.slice(0,8).map(_=>r`<div class="list-row">
                  <div>${e(`action_${_.action}`)}<div class="muted small">${k(_.time,this.lang)}${_.details?.interrupted_action?` \xB7 ${e(`action_${_.details.interrupted_action}`)}`:""}${(_.details?.targets||[]).length?` \xB7 ${_.details.targets.map(g=>e(`target_${g}`)).join(", ")}`:""}${_.details?.blocked?` \xB7 ${e("history_blocked")}`:""}${_.details?.failed?` \xB7 ${e("history_failed")}`:""}</div></div>
                  <div>${this._undoCell(_)}</div>
                  <div class="num"><b>${p(_.freed_bytes,this.lang)}</b></div>
                </div>`)}
        </div>
      </div>
    `}_safeTargets(){return this._overview.options.backup_rotation?["backups","files"]:["files"]}_segments(e){let t=e.disk,s=[],i=e.breakdown?.children;if(i?.length){for(let a of i)a.used_bytes&&s.push({id:a.id,label:this.t(`cat_${a.id}`)!==`cat_${a.id}`?this.t(`cat_${a.id}`):a.label||a.id,bytes:a.used_bytes,share:a.used_bytes/t.total,color:ze[a.id]||"var(--sm-c7)"});s.sort((a,n)=>n.bytes-a.bytes)}else s.push({id:"used",label:this.t("used_cap"),bytes:t.used,share:t.used/t.total,color:"var(--sm-c1)"});return s}_renderRec(e){let t=this.t,s={count:e.count!=null?y(e.count,this.lang):"",share:e.share?S(e.share,this.lang):"",sources:(e.sources||[]).map(o=>o==="default"?t("debug_default"):this._integrationName(o)).join(", ")},i=t(`rec_${e.id}`,s),a=t(`rec_${e.id}_desc`,s),n=!!this._working;return r`<div class="rec">
      <div class="ico"><ha-icon icon=${Nt[e.id]||"mdi:broom"}></ha-icon></div>
      <div>
        <div class="t">${i}</div>
        <div class="muted small">${a}</div>
      </div>
      <div class="act row">
        ${e.bytes?r`<span class="amount">${p(e.bytes,this.lang)}</span>`:d}
        ${e.action==="clean"?r`<button class="btn" ?disabled=${n} @click=${()=>this._previewAndClean(e.targets)}>${t("preview")}</button>`:r`<button class="btn" @click=${()=>e.url?this._navigate(e.url):this._setTab(e.view)}>${t("open")}</button>`}
      </div>
    </div>`}_renderBreakdown(e){let t=this.t,s=e.breakdown;if(!s?.children?.length)return r`<p class="muted small">${t("breakdown_unavailable")}</p>
        ${this._bars([{label:t("used_cap"),bytes:e.disk.used},{label:t("cat_free"),bytes:e.disk.free}],e.disk.total)}`;let i=e.addon_names||{},a=[];for(let n of s.children)if(a.push({label:t(`cat_${n.id}`)!==`cat_${n.id}`?t(`cat_${n.id}`):n.label||n.id,bytes:n.used_bytes,color:ze[n.id]}),n.id==="apps_data"&&n.children?.length)for(let o of n.children.slice(0,6))a.push({label:i[o.id]||o.label||o.id,bytes:o.used_bytes,color:ze.apps_data,indent:!0});return this._bars(a,e.disk.total)}_bars(e,t){return e.map(s=>r`<div style="margin:8px 0 ${s.indent?"6px 18px":"10px"}">
        <div class="row small"><span>${s.label}</span><span class="spacer"></span><span class="muted">${p(s.bytes,this.lang)}</span></div>
        <div class="bar"><div style="width:${Math.max(s.bytes/t*100,.5)}%;background:${s.color||"var(--sm-c1)"}"></div></div>
      </div>`)}_renderDraftBar(){if(!this._draft.size||this._tab!=="database")return d;let e=this.t,t=this._draftEstimate();return r`<div class="draftbar" role="region" aria-label=${e("draft",{n:this._draft.size})}>
      <div>
        <div class="txt">${e("draft",{n:this._draft.size})}</div>
        ${t>0?r`<div class="muted small">${e("draft_estimate",{bytes:p(t,this.lang)})}</div>`:d}
      </div>
      <button class="btn" @click=${()=>this._draft=new Map}>${e("discard")}</button>
      <button class="btn primary" ?disabled=${!!this._working} @click=${this._applyDraft}>${e("apply")}</button>
    </div>`}_renderBackups(){let e=this.t,t=this._overview,s=t.data.backups,i=t.options;if(!s.available)return r`<div class="card"><p class="muted">${e("bk_unavailable")}</p></div>`;let a=this._backups?.plan;return r`
      ${this._healthCard("backups")}
      <div class="card">
        <div class="kpis">
          <div class="kpi"><div class="v">${p(s.local_total,this.lang)}</div><div class="l">${e("bk_kpi_local")}</div></div>
          <div class="kpi"><div class="v">${y(s.local_count,this.lang)}</div><div class="l">${e("bk_kpi_count")}</div></div>
          <div class="kpi"><div class="v">${p(s.deletable_bytes,this.lang)}</div><div class="l">${e("bk_kpi_deletable")}</div></div>
        </div>
        <p class="muted small" style="margin:12px 0 0">
          ${s.rotation_enabled?e("bk_rotation_on"):e("bk_rotation_off")} ·
          ${e("bk_schedule",{d:i.keep_daily,w:i.keep_weekly,m:i.keep_monthly})}
          ${i.require_offsite?r`<br />${e("bk_offsite_required")}`:d}
        </p>
        <div class="row" style="margin-top:12px">
          <button class="btn" @click=${()=>this._navigate(`/config/integrations/integration/${Se}`)}>${e("options")}</button>
          <span class="spacer"></span>
          <button class="btn primary danger" ?disabled=${!s.deletable_count||!!this._working}
            @click=${()=>this._previewAndClean(["backups"])}>${e("bk_apply")}</button>
        </div>
      </div>
      <div class="card">
        ${a?a.length===0?r`<p class="muted">${e("bk_none")}</p>`:r`<table>
              <thead><tr><th>${e("col_backup")}</th><th class="num">${e("col_size")}</th><th>${e("col_locations")}</th><th>${e("col_action")}</th></tr></thead>
              <tbody>${a.map(n=>r`<tr>
                  <td><div>${n.name}</div><div class="muted small">${k(n.date,this.lang)}</div></td>
                  <td class="num">${p(n.local_size,this.lang)}</td>
                  <td>${n.local_agents.map(o=>r`<span class="tag" title=${o}>${this._agentName(o)}</span>`)}${n.remote_agents.map(o=>r`<span class="tag ok" title=${o}>${this._agentName(o)}</span>`)}</td>
                  <td>${n.action==="delete_local"?r`<span class="tag bad">${e("bk_reason_rotated")}</span>`:r`<span class=${n.reason==="only_local"?"tag warn":"tag"}>${e(`bk_reason_${n.reason}`)}</span>`}</td>
                </tr>`)}</tbody>
            </table>`:r`<div class="center"><span class="spinner"></span></div>`}
      </div>
    `}_agentName(e){if(e==="hassio.local"||e==="backup.local")return this.t("bk_local");if(e==="cloud.cloud")return"Home Assistant Cloud";let[t,s]=e.split(".",2);return t==="hassio"&&s?s:t.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase())}_renderFiles(){let e=this.t,t=this._overview.data,s=t.files||{hogs:[],large_files:[]},i=!!this._working,a=t.database.repack,n=a?!!a.method&&(a.free_pages_bytes>0||a.can_convert):t.disk.free>(t.database.size||0)*1.1;return r`
      <div class="card">
        <h2>${e("files_hogs")}</h2>
        ${s.hogs.length===0?r`<p class="muted">${e("files_none")}</p>`:s.hogs.map(o=>r`<div class="list-row">
                <div>
                  <div>${e(`hog_${o.key}`)} <span class=${o.safety==="safe"?"tag ok":"tag warn"}>${e(`safety_${o.safety}`)}</span></div>
                  <div class="muted small" style="overflow-wrap:anywhere">${o.paths.slice(0,3).join(", ")}${o.paths.length>3?" \u2026":""}</div>
                </div>
                <div class="num"><b>${p(o.size_bytes,this.lang)}</b></div>
                <button class="btn danger" ?disabled=${i}
                  @click=${()=>this._confirmHog(o)}>${e("delete")}</button>
              </div>`)}
      </div>

      <div class="card">
        <h2>${e("maintenance")}</h2>
        <div class="list-row">
          <div><div>${e("repack_title")}</div><div class="muted small">${a?this._repackPlanText(a):e(n?"repack_desc":"repack_impossible")}</div></div>
          <div class="num">${t.reclaimable.repack?p(t.reclaimable.repack,this.lang):""}</div>
          <button class="btn" ?disabled=${i||!n} @click=${()=>this._previewAndClean(["repack"])}>${e("run")}</button>
        </div>
        ${t.is_hassio?r`<div class="list-row">
              <div><div>${e("docker_title")}</div><div class="muted small">${e("docker_desc")}</div></div>
              <div></div>
              <button class="btn" ?disabled=${i} @click=${()=>this._previewAndClean(["docker"])}>${e("run")}</button>
            </div>`:d}
      </div>

      ${this._renderFolderExplorer()}

      ${s.large_files.length?r`<div class="card"><h2>${e("files_large")}</h2>
            <p class="muted small">${e("files_large_hint")}</p>
            ${s.large_files.map(o=>r`<div class="list-row"><div style="overflow-wrap:anywhere"><code>${o.path}</code></div><div></div><div class="num">${p(o.size_bytes,this.lang)}</div></div>`)}</div>`:d}
    `}_renderFolderExplorer(){let e=this.t,t=this._folders?.roots||[];if(!t.length)return d;let s=this._folder,i=!!this._working;return r`<div class="card">
      <h2 class="wrap">${e("explorer_title")}</h2>
      <p class="muted small" style="margin-top:0">${e("explorer_hint")}</p>
      <div class="explorer-roots">${t.map(a=>r`<button class=${s?.root===a.path?"btn primary":"btn"} ?disabled=${i}
          @click=${()=>a.scanned_at&&s?.root!==a.path?this._ws("folder_browse",{root:a.path,path:a.path}).then(n=>this._folder=n):this._scanFolder(a.path)}>
          ${this._rootLabel(a.path)}${a.size!=null?r` · ${p(a.size,this.lang)}`:d}</button>`)}</div>
      ${this._working==="folder_scan"?r`<p class="muted">${e("explorer_scanning")}</p>`:d}
      ${s?this._renderFolder(s):d}
    </div>`}_rootLabel(e){return(this._folders?.roots||[]).find(s=>s.path===e)?.config?this.t("explorer_config"):e}_renderFolder(e){let t=this.t,s=e.size||0,i=e.children.slice(0,8).filter(l=>l.size>0),a=i.reduce((l,h)=>l+h.size,0),n=s-a,o=[...i.map(l=>({label:l.name,size:l.size,path:l.path})),...n>0?[{label:t("explorer_rest"),size:n}]:[]];return r`
      <div class="crumbs">${e.crumbs.map((l,h)=>{let c=h===0?this._rootLabel(l.path):l.name;return r`${h?r`<span class="muted"> / </span>`:d}${h===e.crumbs.length-1?r`<b>${c}</b>`:r`<button class="linklike" @click=${()=>this._browseFolder(l.path)}>${c}</button>`}`})}</div>
      <p class="muted small">${t("explorer_summary",{size:p(s,this.lang),files:y(e.files,this.lang),date:k(e.scanned_at,this.lang)})}
        ${e.partial?r` <span class="warn-text">${t("explorer_partial",{n:y(e.items,this.lang)})}</span>`:d}
        ${e.warnings?r` · ${t("explorer_warnings",{n:e.warnings})}`:d}
        <button class="linklike" ?disabled=${!!this._working} @click=${()=>this._scanFolder(e.root)}>${t("explorer_rescan")}</button></p>
      <div class="explorer">
        ${this._donut(o,s)}
        <div class="explorer-list">
          ${e.children.length===0&&!e.own?r`<p class="muted">${t("explorer_empty")}</p>`:d}
          ${e.children.map((l,h)=>r`<div class="explorer-row">
              <span class="dot" style=${`background:${h<8?dt[h]:"var(--divider-color)"}`}></span>
              <button class="linklike" @click=${()=>this._browseFolder(l.path)}>${l.name}/</button>
              <span class="bar"><span style=${`width:${s?Math.max(l.size/s*100,.5):0}%`}></span></span>
              <span class="num">${p(l.size,this.lang)}</span>
            </div>`)}
          ${e.rest.count?r`<div class="muted small">${t("explorer_more",{n:e.rest.count,size:p(e.rest.size,this.lang)})}</div>`:d}
          ${e.own?r`<div class="explorer-row"><span class="dot" style="background:var(--divider-color)"></span><span>${t("explorer_own")}</span><span></span><span class="num">${p(e.own,this.lang)}</span></div>`:d}
        </div>
      </div>
      ${e.largest.length?r`<h4>${t("explorer_largest")}</h4>${e.largest.map(l=>r`<div class="list-row"><div style="overflow-wrap:anywhere"><code>${l.path}</code></div><div></div><div class="num">${p(l.size,this.lang)}</div></div>`)}`:d}`}_donut(e,t){if(!t)return d;let s=60,i=2*Math.PI*s,a=0,n=e.map((o,l)=>{let h=o.size/t*i,c=D`<circle r=${s} cx="80" cy="80" fill="none" stroke-width="28"
        stroke=${o.path?dt[l]:"var(--divider-color)"}
        stroke-dasharray=${`${h} ${i-h}`} stroke-dashoffset=${-a}
        transform="rotate(-90 80 80)" style=${o.path?"cursor:pointer":""}
        @click=${()=>o.path&&this._browseFolder(o.path)}><title>${o.label}: ${p(o.size,this.lang)}</title></circle>`;return a+=h,c});return r`<svg class="donut" viewBox="0 0 160 160" width="160" height="160" role="img">
      ${n}
      <text x="80" y="84" text-anchor="middle" class="donut-total">${p(t,this.lang)}</text>
    </svg>`}_confirmHog(e){let t=this.t;this._dialog={title:t(`hog_${e.key}`),body:r`<p>${t("confirm_cleanup")}</p><ul>${e.paths.map(s=>r`<li><code>${s}</code></li>`)}</ul>
        <p><b>${t("confirm_total",{bytes:p(e.size_bytes,this.lang)})}</b></p>`,confirm:t("delete"),danger:!0,action:()=>this._clean(["files"],{hog_keys:[e.key]})}}_renderDialog(){let e=this._dialog;if(!e)return d;let t=()=>this._dialog=void 0;return r`<div class="scrim" @click=${s=>s.target===s.currentTarget&&t()}>
      <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <h3 id="dialog-title">${e.title}</h3>
        ${typeof e.body=="function"?e.body():e.body}
        ${e.typed?r`<label class="typed">${this.t("typed_confirm",{n:e.typed})}
              <input type="text" inputmode="numeric" .value=${this._typedValue||""}
                @input=${s=>this._typedValue=s.target.value.trim()} /></label>`:d}
        <div class="actions">
          <button class="btn" @click=${t}>${this.t("cancel")}</button>
          <button class=${e.danger?"btn primary danger":"btn primary"}
            ?disabled=${!!e.disabled||e.typed&&this._typedValue!==String(e.typed)}
            @click=${()=>{t(),e.action()}}>${e.confirm}</button>
        </div>
      </div>
    </div>`}};ue(q,"properties",{hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_tab:{state:!0},_whatif:{state:!0},_unused:{state:!0},_unusedOpen:{state:!0},_dead:{state:!0},_deadSel:{state:!0},_tpl:{state:!0},_statsRet:{state:!0},_statsDraft:{state:!0},_statsPlan:{state:!0},_folders:{state:!0},_typedValue:{state:!0},_raw:{state:!0},_win:{state:!0},_winDrag:{state:!0},_facets:{state:!0},_facetsOpen:{state:!0},_folder:{state:!0},_overview:{state:!0},_entities:{state:!0},_backups:{state:!0},_health:{state:!0},_repackConvert:{state:!0},_draft:{state:!0},_selected:{state:!0},_search:{state:!0},_domain:{state:!0},_onlyChanged:{state:!0},_onlyOrphans:{state:!0},_sort:{state:!0},_limit:{state:!0},_dialog:{state:!0},_detail:{state:!0},_view:{state:!0},_openGroups:{state:!0},_onlyAdvice:{state:!0},_settingsDraft:{state:!0},_toast:{state:!0},_working:{state:!0},_error:{state:!0}}),ue(q,"styles",rt);customElements.get("storage-manager-panel")||customElements.define("storage-manager-panel",q);
