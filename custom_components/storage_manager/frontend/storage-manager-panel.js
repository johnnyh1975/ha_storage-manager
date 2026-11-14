var Xe=Object.defineProperty;var et=(r,e,t)=>e in r?Xe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ie=(r,e,t)=>et(r,typeof e!="symbol"?e+"":e,t);var F=globalThis,W=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol(),we=new WeakMap,B=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(W&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=we.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&we.set(t,e))}return e}toString(){return this.cssText}},xe=r=>new B(typeof r=="string"?r:r+"",void 0,ae),ne=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((s,i,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[a+1],r[0]);return new B(t,r,ae)},ke=(r,e)=>{if(W)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=F.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},re=W?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return xe(t)})(r):r;var{is:tt,defineProperty:st,getOwnPropertyDescriptor:it,getOwnPropertyNames:at,getOwnPropertySymbols:nt,getPrototypeOf:rt}=Object,q=globalThis,Ae=q.trustedTypes,ot=Ae?Ae.emptyScript:"",lt=q.reactiveElementPolyfillSupport,P=(r,e)=>r,oe={toAttribute(r,e){switch(e){case Boolean:r=r?ot:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Se=(r,e)=>!tt(r,e),Ee={attribute:!0,type:String,converter:oe,reflect:!1,useDefault:!1,hasChanged:Se};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;var w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&st(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:a}=it(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){let l=i?.call(this);a?.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ee}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;let e=rt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){let t=this.properties,s=[...at(t),...nt(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(re(i))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let a=(s.converter?.toAttribute!==void 0?s.converter:oe).toAttribute(t,s.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let a=s.getPropertyOptions(i),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:oe;this._$Em=i;let l=n.fromAttribute(t,a.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,s,i=!1,a){if(e!==void 0){let n=this.constructor;if(i===!1&&(a=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??Se)(a,t)||s.useDefault&&s.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:a},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,a]of s){let{wrapped:n}=a,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[P("elementProperties")]=new Map,w[P("finalized")]=new Map,lt?.({ReactiveElement:w}),(q.reactiveElementVersions??=[]).push("2.1.2");var ce=globalThis,Te=r=>r,K=ce.trustedTypes,ze=K?K.createPolicy("lit-html",{createHTML:r=>r}):void 0,de="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+x,ct=`<${he}>`,D=document,U=()=>D.createComment(""),I=r=>r===null||typeof r!="object"&&typeof r!="function",pe=Array.isArray,Le=r=>pe(r)||typeof r?.[Symbol.iterator]=="function",le=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,De=/-->/g,Ce=/>/g,T=RegExp(`>|${le}(?:([^\\s"'>=/]+)(${le}*=${le}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ne=/'/g,Re=/"/g,Oe=/^(?:script|style|textarea|title)$/i,_e=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),o=_e(1),ue=_e(2),Et=_e(3),y=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),Me=new WeakMap,z=D.createTreeWalker(D,129);function Be(r,e){if(!pe(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ze!==void 0?ze.createHTML(e):e}var Pe=(r,e)=>{let t=r.length-1,s=[],i,a=e===2?"<svg>":e===3?"<math>":"",n=H;for(let l=0;l<t;l++){let h=r[l],p,u,d=-1,m=0;for(;m<h.length&&(n.lastIndex=m,u=n.exec(h),u!==null);)m=n.lastIndex,n===H?u[1]==="!--"?n=De:u[1]!==void 0?n=Ce:u[2]!==void 0?(Oe.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=T):u[3]!==void 0&&(n=T):n===T?u[0]===">"?(n=i??H,d=-1):u[1]===void 0?d=-2:(d=n.lastIndex-u[2].length,p=u[1],n=u[3]===void 0?T:u[3]==='"'?Re:Ne):n===Re||n===Ne?n=T:n===De||n===Ce?n=H:(n=T,i=void 0);let v=n===T&&r[l+1].startsWith("/>")?" ":"";a+=n===H?h+ct:d>=0?(s.push(p),h.slice(0,d)+de+h.slice(d)+x+v):h+x+(d===-2?l:v)}return[Be(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},V=class r{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let a=0,n=0,l=e.length-1,h=this.parts,[p,u]=Pe(e,t);if(this.el=r.createElement(p,s),z.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=z.nextNode())!==null&&h.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(de)){let m=u[n++],v=i.getAttribute(d).split(x),b=/([.?@])?(.*)/.exec(m);h.push({type:1,index:a,name:b[2],strings:v,ctor:b[1]==="."?Z:b[1]==="?"?J:b[1]==="@"?Q:N}),i.removeAttribute(d)}else d.startsWith(x)&&(h.push({type:6,index:a}),i.removeAttribute(d));if(Oe.test(i.tagName)){let d=i.textContent.split(x),m=d.length-1;if(m>0){i.textContent=K?K.emptyScript:"";for(let v=0;v<m;v++)i.append(d[v],U()),z.nextNode(),h.push({type:2,index:++a});i.append(d[m],U())}}}else if(i.nodeType===8)if(i.data===he)h.push({type:2,index:a});else{let d=-1;for(;(d=i.data.indexOf(x,d+1))!==-1;)h.push({type:7,index:a}),d+=x.length-1}a++}}static createElement(e,t){let s=D.createElement("template");return s.innerHTML=e,s}};function C(r,e,t=r,s){if(e===y)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,a=I(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=C(r,i._$AS(r,e.values),i,s)),e}var Y=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??D).importNode(t,!0);z.currentNode=i;let a=z.nextNode(),n=0,l=0,h=s[0];for(;h!==void 0;){if(n===h.index){let p;h.type===2?p=new L(a,a.nextSibling,this,e):h.type===1?p=new h.ctor(a,h.name,h.strings,this,e):h.type===6&&(p=new X(a,this,e)),this._$AV.push(p),h=s[++l]}n!==h?.index&&(a=z.nextNode(),n++)}return z.currentNode=D,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},L=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),I(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==y&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Le(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==c&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=V.createElement(Be(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let a=new Y(i,this),n=a.u(this.options);a.p(t),this.T(n),this._$AH=a}}_$AC(e){let t=Me.get(e.strings);return t===void 0&&Me.set(e.strings,t=new V(e)),t}k(e){pe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let a of e)i===t.length?t.push(s=new r(this.O(U()),this.O(U()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=Te(e).nextSibling;Te(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},N=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,a){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(e,t=this,s,i){let a=this.strings,n=!1;if(a===void 0)e=C(this,e,t,0),n=!I(e)||e!==this._$AH&&e!==y,n&&(this._$AH=e);else{let l=e,h,p;for(e=a[0],h=0;h<a.length-1;h++)p=C(this,l[s+h],t,h),p===y&&(p=this._$AH[h]),n||=!I(p)||p!==this._$AH[h],p===c?e=c:e!==c&&(e+=(p??"")+a[h+1]),this._$AH[h]=p}n&&!i&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Z=class extends N{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}},J=class extends N{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}},Q=class extends N{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??c)===y)return;let s=this._$AH,i=e===c&&s!==c||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},X=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}},He={M:de,P:x,A:he,C:1,L:Pe,R:Y,D:Le,V:C,I:L,H:N,N:J,U:Q,B:Z,F:X},dt=ce.litHtmlPolyfillSupport;dt?.(V,L),(ce.litHtmlVersions??=[]).push("3.3.3");var Ue=(r,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let a=t?.renderBefore??null;s._$litPart$=i=new L(e.insertBefore(U(),a),a,void 0,t??{})}return i._$AI(r),i};var ge=globalThis,A=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ue(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return y}};A._$litElement$=!0,A.finalized=!0,ge.litElementHydrateSupport?.({LitElement:A});var ht=ge.litElementPolyfillSupport;ht?.({LitElement:A});(ge.litElementVersions??=[]).push("4.2.2");var R={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ie=r=>(...e)=>({_$litDirective$:r,values:e}),ee=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:It}=He;var Ve=r=>r.strings===void 0;var pt={},je=(r,e=pt)=>r._$AH=e;var Ge=Ie(class extends ee{constructor(r){if(super(r),r.type!==R.PROPERTY&&r.type!==R.ATTRIBUTE&&r.type!==R.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ve(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===y||e===c)return e;let t=r.element,s=r.name;if(r.type===R.PROPERTY){if(e===t[s])return y}else if(r.type===R.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(s))return y}else if(r.type===R.ATTRIBUTE&&t.getAttribute(s)===e+"")return y;return je(r),e}});var Fe=["B","KB","MB","GB","TB"];function _(r,e="en"){if(r==null||Number.isNaN(r))return"\u2013";let t=Math.abs(r),s=0;for(;t>=1024&&s<Fe.length-1;)t/=1024,s+=1;let i=t>=100||s===0?0:t>=10?1:2,a=new Intl.NumberFormat(e,{maximumFractionDigits:i}).format(t);return`${r<0?"\u2212":""}${a} ${Fe[s]}`}function $(r,e="en"){return r==null?"\u2013":new Intl.NumberFormat(e).format(r)}function k(r,e="en"){return new Intl.NumberFormat(e,{style:"percent",maximumFractionDigits:0}).format(r)}function We(r,e,t="en"){if(!r)return e("never");let s=Math.round(Date.now()/1e3-r);if(s<60)return e("just_now");let i=new Intl.RelativeTimeFormat(t,{numeric:"auto"}),a=[[60,"second"],[60,"minute"],[24,"hour"],[7,"day"],[4.35,"week"],[12,"month"],[Number.POSITIVE_INFINITY,"year"]],n=s;for(let[l,h]of a){if(Math.abs(n)<l)return i.format(-Math.round(n),h);n/=l}return""}function j(r,e="en"){if(!r)return"\u2013";let t=typeof r=="number"?new Date(r*1e3):new Date(r);return new Intl.DateTimeFormat(e,{dateStyle:"medium",timeStyle:"short"}).format(t)}var _t=["default","7","3","1","drop","excluded"],te={7:7,3:3,1:1,drop:0,excluded:0},ut={sqlite:"SQLite",mysql:"MariaDB/MySQL",postgresql:"PostgreSQL"},O=150;function be(r,e,t){if(!r)return"\u2013";let s=86400/r;return s<60?e("rate_seconds",{n:Math.max(1,Math.round(s))}):s<3600?e("rate_minutes",{n:Math.round(s/60)}):e("rate_per_day",{n:$(r,t)})}var qe=r=>class extends r{_tierLabel(e){let t=this.t,s=this._entities?.keep_days??this._overview?.data?.database?.keep_days;return e==="default"?t("tier_default",{days:s}):e==="excluded"?this._entities?.packages_available===!1?t("tier_excluded_needs_packages"):t("tier_excluded"):t(`tier_${e}`)}_reasonText(e,t){let s=this.t;if(!e)return"";let i=e.used||{},a={rate:be(t?.rows_24h,s,this.lang),share:k(e.facts?.attr_share||0,this.lang),days:i.min_days||""};return s(`reason_${e.reason}`,a)}_noteChips(e){let t=this.t;if(!e)return c;let s=e.used||{},i=[];return e.protected&&i.push(o`<span class="tag ok">${t(`protected_${e.protected}`)}</span>`),(s.automations||s.scripts)&&i.push(o`<span class="tag" title=${t("note_automation_hint")}>${t("note_automation",{n:s.automations+s.scripts})}</span>`),s.min_days&&i.push(o`<span class="tag">${t("note_dashboard",{days:s.min_days})}</span>`),s.energy&&i.push(o`<span class="tag">${t("note_energy")}</span>`),e.facts?.state_class&&i.push(o`<span class="tag" title=${t("note_statistics_hint")}>${t("note_statistics")}</span>`),e.facts?.entity_category==="diagnostic"&&i.push(o`<span class="tag">${t("note_diagnostic")}</span>`),i}_integrationName(e){return this.hass?.localize?.(`component.${e}.title`)||e.replace(/_/g," ").replace(/^\w/,s=>s.toUpperCase())}_rowById(e){return this._entities?.rows.find(t=>t.entity_id===e)}_accept(e){let t=new Map(this._draft);for(let s of e){let i=this._rowById(s),a=i?.advice?.action;!i||!a||i.excluded_by_yaml||(a===this._original(i)?t.delete(s):t.set(s,{value:a,row:i}))}this._draft=t}async _dismiss(e,t=!1){try{await this._ws("dismiss",{entity_ids:e,undo:t}),await this._loadEntities()}catch(s){this._showToast(this.t("error",{msg:s.message}))}}async _openDetail(e){this._detail={entity_id:e,loading:!0};try{this._detail=await this._ws("entity_detail",{entity_id:e})}catch(t){this._detail=void 0,this._showToast(this.t("error",{msg:t.message}))}}_renderDatabase(){let e=this.t,t=this._overview,s=t.data.database,i=t.data.recorder,a=this._entities,n=s.analysis_running||this._working==="analyze";return o`
        ${i.restart_required?o`<div class="banner"><ha-icon icon="mdi:restart-alert"></ha-icon>
              <div class="txt">${e("restart_banner",{n:i.pending_restart.length})}</div>
              <button class="btn primary" @click=${this._confirmRestart}>${e("restart")}</button></div>`:c}
        ${i.unwritten.length&&!i.packages.available?o`<div class="banner"><ha-icon icon="mdi:package-variant"></ha-icon>
              <div class="txt">${e("packages_banner")}</div>
              <button class="btn" @click=${()=>this._navigate("/config/repairs")}>${e("packages_open")}</button></div>`:c}
        ${t.gui_recorder&&!t.gui_recorder_imported?o`<div class="banner info"><ha-icon icon="mdi:import"></ha-icon>
              <div class="txt">${e("gui_recorder_banner")}</div>
              <button class="btn" @click=${this._importGuiRecorder}>${e("gui_recorder_import")}</button></div>`:c}

        <div class="grid2">
          <div class="card">
            <div class="kpis">
              <div class="kpi"><div class="v">${_(s.size,this.lang)}</div><div class="l">${e("db_size")}</div></div>
              <div class="kpi"><div class="v">${ut[s.dialect]||s.dialect||"\u2013"}</div><div class="l">${e("db_engine")}</div></div>
              <div class="kpi"><div class="v">${e("days",{n:s.keep_days})}</div><div class="l">${e("db_keep")}</div></div>
              <div class="kpi"><div class="v">${n?o`<span class="spinner" style="width:18px;height:18px"></span>`:We(s.analysis_at,e,this.lang)}</div>
                <div class="l">${e("db_analysis")}</div></div>
            </div>
            ${s.obsolete?.states||s.obsolete?.events?o`<div class="row obsolete">
                  <span class="small">${e("obsolete",{n:$((s.obsolete.states||0)+(s.obsolete.events||0),this.lang),bytes:_(s.obsolete.bytes,this.lang),days:s.obsolete.keep_days})}</span>
                  <span class="spacer"></span>
                  <button class="btn" ?disabled=${!!this._working} @click=${()=>this._previewAndClean(["purge"])}>${e("obsolete_purge")}</button>
                </div>`:c}
            <div class="row" style="margin-top:12px">
              <span class="muted small">${a?.calibrated?e("db_calibrated"):e("db_estimated")}
                ${i.yaml_filters?.uses_include?o` <b>${e("yaml_include_warning")}</b>`:c}</span>
              <span class="spacer"></span>
              <button class="btn" ?disabled=${n||!!this._working} @click=${this._analyze}>${e("analyze")}</button>
            </div>
          </div>
          ${this._renderEffect(a)}
        </div>

        ${a?a.analysis_at?o`${this._renderInbox(a)} ${this._renderExplorer(a)}`:o`<div class="card"><p class="muted">${e("analysis_needed")}</p></div>`:o`<div class="card"><div class="center"><span class="spinner"></span></div></div>`}

        ${this._renderSettings(a)}
        ${a?.events?.length?o`<div class="card"><h2>${e("events_title")}</h2>
              ${a.events.slice(0,8).map(l=>o`<div class="list-row"><div><code>${l.event_type}</code></div><div></div><div class="num">${$(l.rows,this.lang)}</div></div>`)}</div>`:c}
        ${this._renderDetail()}
      `}_renderInbox(e){let t=this.t,s=e.inbox||[],i=s.filter(a=>!this._draft.has(a.entity_id));return o`<div class="card">
        <h2>${t("inbox_title")}
          <span class="spacer"></span>
          ${s.length?o`<span class="muted small">${t("inbox_summary",{n:s.length,bytes:_(e.inbox_saving,this.lang)})}</span>`:c}
        </h2>
        ${s.length===0?o`<p class="muted">${t("inbox_empty")}</p>`:o`
              <p class="muted small" style="margin-top:-4px">${t("inbox_hint")}</p>
              ${s.map(a=>this._renderInboxItem(a))}
              <div class="row" style="margin-top:12px">
                ${e.dismissed_count?o`<button class="btn" @click=${()=>this._dismiss([],!0)}>${t("inbox_show_dismissed",{n:e.dismissed_count})}</button>`:c}
                <span class="spacer"></span>
                <button class="btn primary" ?disabled=${!i.length}
                  @click=${()=>this._accept(i.map(a=>a.entity_id))}>${t("inbox_accept_all",{n:i.length})}</button>
              </div>`}
        ${!s.length&&e.dismissed_count?o`<button class="btn" @click=${()=>this._dismiss([],!0)}>${t("inbox_show_dismissed",{n:e.dismissed_count})}</button>`:c}
      </div>`}_renderInboxItem(e){let t=this.t,s=this._rowById(e.entity_id),i=this._draft.get(e.entity_id)?.value===e.action;return o`<div class="rec ${e.conflict?"conflict":""}">
        <div class="ico"><ha-icon icon=${e.conflict?"mdi:alert-outline":"mdi:lightbulb-on-outline"}></ha-icon></div>
        <div>
          <button class="linklike t" @click=${()=>this._openDetail(e.entity_id)}>${e.name}</button>
          <div class="muted small">${this._reasonText(e,s)}</div>
          <div class="chips">
            <span class="tag ${e.conflict?"warn":"ok"}">→ ${this._tierLabel(e.action)}</span>
            ${this._noteChips({...e,protected:null})}
          </div>
        </div>
        <div class="act row">
          ${e.saving?o`<span class="amount">${_(e.saving,this.lang)}</span>`:c}
          ${i?o`<span class="tag ok">${t("inbox_in_draft")}</span>`:o`<button class="btn" @click=${()=>this._dismiss([e.entity_id])}>${t("inbox_dismiss")}</button>
                <button class="btn primary" @click=${()=>this._accept([e.entity_id])}>${t("inbox_accept")}</button>`}
        </div>
      </div>`}_renderEffect(e){let t=this.t,s=(e?.size_history||[]).filter(n=>n[2]>0),i=(e?.changes||[]).map(n=>new Date(n).getTime()/1e3),a=t("effect_waiting");if(s.length>=2&&i.length){let n=i[0],l=[...s].reverse().find(p=>p[0]<=n)||s[0],h=s[s.length-1];if(h[0]>l[0]){let p=(h[2]-l[2])/l[2];a=t("effect_since_change",{delta:`${p<=0?"\u2212":"+"}${k(Math.abs(p),this.lang)}`,bytes:_(Math.abs(h[2]-l[2]),this.lang)})}}else s.length>=2&&(a=t("effect_no_changes"));return o`<div class="card">
        <h2>${t("effect_title")}</h2>
        ${s.length>=2?this._sizeChart(s,i):o`<p class="muted small">${t("effect_need_samples")}</p>`}
        <p class="small" style="margin:8px 0 0">${a}</p>
      </div>`}_sizeChart(e,t){let a=e.map(b=>b[0]),n=e.map(b=>b[2]),l=Math.min(...a),h=Math.max(...a,l+1),p=Math.max(...n)*1.05,u=b=>(b-l)/(h-l)*320,d=b=>90-b/p*90,m=e.map((b,g)=>`${g?"L":"M"}${u(b[0]).toFixed(1)},${d(b[2]).toFixed(1)}`).join(" "),v=`${m} L${u(h).toFixed(1)},90 L0,90 Z`;return o`<svg class="chart" viewBox="0 0 ${320} ${104}" role="img" aria-label=${this.t("effect_title")}>
        ${ue`<path d=${v} fill="var(--sm-c1)" opacity="0.12"></path>
          <path d=${m} fill="none" stroke="var(--sm-c1)" stroke-width="2"></path>
          ${t.filter(b=>b>=l&&b<=h).map(b=>ue`<line x1=${u(b)} x2=${u(b)} y1="0" y2=${90} stroke="var(--warning-color, #ffa600)" stroke-dasharray="3 3"></line>`)}
          <text x="0" y=${102} font-size="10" fill="var(--secondary-text-color)">${j(l,this.lang)}</text>
          <text x=${320} y=${102} font-size="10" text-anchor="end" fill="var(--secondary-text-color)">${_(n[n.length-1],this.lang)}</text>`}
      </svg>`}_renderExplorer(e){let t=this.t,s=this._view||"top";return o`<div class="card">
        <div class="row" style="margin-bottom:12px">
          <div class="segmented" role="tablist">
            ${["top","groups","all"].map(i=>o`<button role="tab" aria-selected=${i===s?"true":"false"}
                @click=${()=>{this._view=i,this._limit=O}}>${t(`view_${i}`)}</button>`)}
          </div>
          <span class="spacer"></span>
          <span class="muted small">${t("view_total",{n:$(e.rows.length,this.lang),bytes:_(e.total_bytes,this.lang)})}</span>
        </div>
        ${s==="groups"?this._renderGroups(e):s==="all"?this._renderAll(e):this._renderTop(e)}
      </div>`}_renderTop(e){let t=this.t,s=e.rows.filter(n=>n.top||this._draft.has(n.entity_id)),i=s.reduce((n,l)=>Math.max(n,l.est_bytes),1),a=e.total_bytes?1-e.rest_bytes/e.total_bytes:0;return o`
        <p class="muted small" style="margin-top:0">${t("top_hint",{n:s.length,share:k(a,this.lang)})}</p>
        ${this._table(s,i)}
        ${e.rest_count?o`<div class="restline">
              <span>${t("top_rest",{n:$(e.rest_count,this.lang),bytes:_(e.rest_bytes,this.lang),share:k(e.total_bytes?e.rest_bytes/e.total_bytes:0,this.lang)})}</span>
              <button class="btn" @click=${()=>this._view="all"}>${t("top_show_all")}</button>
            </div>`:c}`}_groups(e){let t=new Map;for(let s of e.rows){let i=s.integration||s.domain;t.has(i)||t.set(i,{key:i,rows:[],bytes:0,advice:[],saving:0});let a=t.get(i);a.rows.push(s),a.bytes+=s.est_bytes,s.advice?.action&&(a.advice.push(s.entity_id),a.saving+=s.advice.saving||0)}return[...t.values()].sort((s,i)=>i.bytes-s.bytes)}_renderGroups(e){let t=this.t,s=this._groups(e),i=this._openGroups||new Set,a=e.total_bytes||1;return o`${s.map(n=>{let l=i.has(n.key),h=n.rows.reduce((p,u)=>Math.max(p,u.est_bytes),1);return o`<div class="group">
          <div class="group-head">
            <button class="linklike group-toggle" aria-expanded=${l?"true":"false"} @click=${()=>{let p=new Set(i);l?p.delete(n.key):p.add(n.key),this._openGroups=p}}>
              <span class="chev">${l?"\u25BE":"\u25B8"}</span>
              <span><b>${this._integrationName(n.key)}</b> <span class="muted small">${t("group_count",{n:n.rows.length})}</span></span>
            </button>
            <span class="spacer"></span>
            ${n.advice.length?o`<button class="btn" @click=${()=>this._accept(n.advice)}>${t("group_accept",{n:n.advice.length,bytes:_(n.saving,this.lang)})}</button>`:c}
            <span class="num"><b>${_(n.bytes,this.lang)}</b></span>
          </div>
          <div class="bar"><div style="width:${Math.max(n.bytes/a*100,.5)}%;background:var(--sm-c1)"></div></div>
          ${l?this._table(n.rows.slice(0,O),h):c}
        </div>`})}`}_filteredRows(e){let t=(this._search||"").trim().toLowerCase(),s=e.filter(i=>this._domain&&i.domain!==this._domain||this._onlyOrphans&&!i.orphan||this._onlyChanged&&!this._draft.has(i.entity_id)&&i.tier==="default"&&!i.excluded||this._onlyAdvice&&!i.advice?.action?!1:t?[i.entity_id,i.name,i.integration,i.area,i.device].some(a=>(a||"").toLowerCase().includes(t)):!0);return this._sort==="rate"?s=[...s].sort((i,a)=>a.rows_24h-i.rows_24h):this._sort==="name"&&(s=[...s].sort((i,a)=>(i.name||"").localeCompare(a.name||"",this.lang))),s}_renderAll(e){let t=this.t,s=[...new Set(e.rows.map(l=>l.domain))].sort(),i=this._filteredRows(e.rows),a=i.reduce((l,h)=>Math.max(l,h.est_bytes),1),n=i.slice(0,this._limit);return o`
        <div class="filters">
          <input type="search" placeholder=${t("search")} .value=${this._search}
            @input=${l=>{this._search=l.target.value,this._limit=O}} />
          <select @change=${l=>{this._domain=l.target.value,this._limit=O}} aria-label=${t("all_domains")}>
            <option value="">${t("all_domains")}</option>
            ${s.map(l=>o`<option value=${l} ?selected=${l===this._domain}>${l}</option>`)}
          </select>
          <select @change=${l=>this._sort=l.target.value} aria-label="sort">
            ${["size","rate","name"].map(l=>o`<option value=${l} ?selected=${l===this._sort}>${t(`sort_${l}`)}</option>`)}
          </select>
          <button class="chip" aria-pressed=${this._onlyAdvice?"true":"false"}
            @click=${()=>this._onlyAdvice=!this._onlyAdvice}>${t("filter_advice")}</button>
          <button class="chip" aria-pressed=${this._onlyChanged?"true":"false"}
            @click=${()=>this._onlyChanged=!this._onlyChanged}>${t("filter_changed")}</button>
          <button class="chip" aria-pressed=${this._onlyOrphans?"true":"false"}
            @click=${()=>this._onlyOrphans=!this._onlyOrphans}>${t("filter_orphans")}</button>
        </div>
        ${this._selected.size?o`<div class="banner info" style="margin-bottom:8px">
              <div class="txt">${t("selected",{n:this._selected.size})}</div>
              ${this._tierSelect(null,l=>this._setValue(e.rows.filter(h=>this._selected.has(h.entity_id)),l),t("set_for_selection"))}
              <button class="btn" @click=${()=>this._selected=new Set}>${t("clear_selection")}</button>
            </div>`:c}
        ${this._table(n,a,!0)}
        ${i.length>this._limit?o`<div class="row" style="justify-content:center;margin-top:12px">
              <button class="btn" @click=${()=>this._limit+=O}>${t("show_more",{n:Math.min(O,i.length-this._limit)})}</button></div>`:c}`}_table(e,t,s=!1){let i=this.t,a=s&&e.length>0&&e.every(n=>this._selected.has(n.entity_id));return o`<table class="responsive ${s?"":"noselect"}">
        <thead><tr>
          ${s?o`<th style="width:28px"><input type="checkbox" .checked=${a} aria-label="select all"
                @change=${n=>{let l=new Set(this._selected);e.forEach(h=>n.target.checked?l.add(h.entity_id):l.delete(h.entity_id)),this._selected=l}} /></th>`:c}
          <th>${i("col_entity")}</th>
          <th class="num">${i("col_size")}</th>
          <th class="num">${i("col_rate")}</th>
          <th>${i("col_retention")}</th>
        </tr></thead>
        <tbody>${e.map(n=>this._row(n,t,s))}</tbody>
      </table>`}_row(e,t,s){let i=this.t,a=this._draft.has(e.entity_id),n=[e.entity_id,e.integration,e.area].filter(Boolean).join(" \xB7 "),l=e.advice,h=l?.action&&this._effective(e)!==l.action;return o`<tr class=${a?"changed":""}>
        ${s?o`<td class="c-check"><input type="checkbox" .checked=${this._selected.has(e.entity_id)} aria-label=${e.entity_id}
              @change=${p=>{let u=new Set(this._selected);p.target.checked?u.add(e.entity_id):u.delete(e.entity_id),this._selected=u}} /></td>`:c}
        <td class="c-ent ent">
          <div class="n"><button class="linklike" @click=${()=>this._openDetail(e.entity_id)}>${e.name}</button>
            ${e.orphan?o`<span class="tag bad">${i("orphan")}</span>`:c}
            ${e.excluded_by_yaml?o`<span class="tag">${i("excluded_by_yaml")}</span>`:c}
            ${e.excluded&&!e.recorded?o`<span class="tag ok">${i("tier_excluded")}</span>`:c}
          </div>
          <div class="i">${n}</div>
          <div class="chips">
            ${h?o`<button class="tag ${l.conflict?"warn":"ok"} tagbtn" title=${this._reasonText(l,e)}
                  @click=${()=>this._accept([e.entity_id])}>${l.conflict?"\u26A0 ":""}${i("suggested",{tier:this._tierLabel(l.action)})}</button>`:c}
            ${this._noteChips(l)}
          </div>
        </td>
        <td class="c-size num">${e.est_bytes?_(e.est_bytes,this.lang):"\u2013"}
          <div class="sizebar" style="width:${Math.max(e.est_bytes/t*100,1)}%"></div></td>
        <td class="c-rate num">${be(e.rows_24h,i,this.lang)}</td>
        <td class="c-tier">${this._tierSelect(e,p=>this._setValue([e],p))}</td>
      </tr>`}_tierSelect(e,t,s){let i=this.t,a=e?this._effective(e):"";return o`<select aria-label=${i("col_retention")} ?disabled=${e?.excluded_by_yaml} .value=${Ge(a)}
        @change=${n=>{t(n.target.value),e||(n.target.value="")}}>
        ${s?o`<option value="" selected disabled>${s}</option>`:c}
        ${_t.map(n=>o`<option value=${n} ?selected=${n===a}>${this._tierLabel(n)}</option>`)}
      </select>`}_settingsState(e){return this._settingsDraft||(this._settingsDraft={filters:JSON.parse(JSON.stringify(e.filters||{})),settings:{...e.settings||{}}}),this._settingsDraft}_renderSettings(e){let t=this.t,s=this._overview.data.recorder,i=!!this._settingsOpen,a=s.exclusion_orphans||{entities:[],domains:[],entity_globs:[]},n=a.entities.length+a.domains.length+a.entity_globs.length;return o`<div class="card">
        <h2><button class="linklike group-toggle" aria-expanded=${i?"true":"false"}
            @click=${()=>{this._settingsOpen=!i,this._settingsDraft=void 0}}>
          <span class="chev">${i?"\u25BE":"\u25B8"}</span>${t("settings_title")}</button>
          <span class="spacer"></span>
          ${n?o`<span class="tag warn">${t("orphans_badge",{n})}</span>`:c}
        </h2>
        ${i?this._settingsBody(s,e,a,n):o`<p class="muted small" style="margin:0">${t("settings_hint")}</p>`}
      </div>`}_settingsBody(e,t,s,i){let a=this.t,n=this._settingsState(e),l=e.locked_settings||{},h=e.effective_settings||{},p=()=>this._settingsDraft={...n},u=(g,E,S,M)=>{let f=g in l,se=f?l[g]:n.settings[g]??"";return o`<label class="field">
          <span>${a(`setting_${g}`)}</span>
          <span class="row">
            <input type="number" min=${E} max=${S} .value=${String(se)} placeholder=${String(h[g]??"")}
              ?disabled=${f}
              @change=${$e=>{let Qe=$e.target.value===""?null:Number($e.target.value);n.settings={...n.settings,[g]:Qe},p()}} />
            <span class="muted small">${M}</span>
          </span>
          <span class="muted small">${a(f?"setting_locked":`setting_${g}_hint`)}</span>
        </label>`},d=g=>{let E=g in l,S=E?l[g]:n.settings[g]??h[g];return o`<label class="field toggle">
          <input type="checkbox" .checked=${!!S} ?disabled=${E}
            @change=${M=>{n.settings={...n.settings,[g]:M.target.checked},p()}} />
          <span><span>${a(`setting_${g}`)}</span><br />
            <span class="muted small">${a(E?"setting_locked":`setting_${g}_hint`)}</span></span>
        </label>`},m=[...new Set((t?.rows||[]).map(g=>g.domain))].sort(),v=(t?.events||[]).map(g=>g.event_type),b=(g,E)=>{let S=n.filters[g]||[],M=`sm-${g}`;return o`<div class="field">
          <span>${a(`filter_${g}`)}</span>
          <div class="chips">
            ${S.map(f=>o`<span class="tag">${f}
              <button class="tagx" aria-label=${a("remove")} @click=${()=>{n.filters={...n.filters,[g]:S.filter(se=>se!==f)},p()}}>✕</button></span>`)}
          </div>
          <span class="row">
            <input type="text" list=${M} placeholder=${a(`filter_${g}_placeholder`)}
              @keydown=${f=>{f.key!=="Enter"||!f.target.value.trim()||(n.filters={...n.filters,[g]:[...new Set([...S,f.target.value.trim()])]},f.target.value="",p())}} />
            <datalist id=${M}>${E.map(f=>o`<option value=${f}></option>`)}</datalist>
          </span>
          <span class="muted small">${a(`filter_${g}_hint`)}</span>
        </div>`};return o`
        <p class="muted small" style="margin-top:0">${a("settings_restart_hint")}</p>
        <h4 class="sub">${a("settings_global")}</h4>
        <div class="fields">
          ${u("purge_keep_days",1,3650,a("unit_days"))}
          ${u("commit_interval",0,30,a("unit_seconds"))}
          ${d("auto_purge")}
          ${d("auto_repack")}
        </div>
        <h4 class="sub">${a("settings_filters")}</h4>
        <div class="fields">
          ${b("domains",m)}
          ${b("entity_globs",[])}
          ${b("event_types",v)}
        </div>
        ${i?o`<div class="banner" style="margin-top:12px">
              <div class="txt">${a("orphans_text",{n:i})}
                <div class="muted small">${[...s.entities,...s.domains,...s.entity_globs].slice(0,8).join(", ")}</div></div>
              <button class="btn" @click=${this._removeExclusionOrphans}>${a("orphans_remove")}</button>
            </div>`:c}
        <div class="row" style="margin-top:16px">
          <span class="spacer"></span>
          <button class="btn" @click=${()=>this._settingsDraft=void 0}>${a("discard")}</button>
          <button class="btn primary" ?disabled=${!!this._working} @click=${this._saveSettings}>${a("settings_save")}</button>
        </div>`}async _saveSettings(){let e=this._settingsDraft;if(!e)return;let t=this._overview.data.recorder.locked_settings||{},s=Object.fromEntries(Object.entries(e.settings).filter(([i,a])=>!(i in t)&&a!==""&&a!==void 0));this._working="settings";try{let i=await this._ws("settings",{filters:e.filters,settings:s});this._showToast(i.packages_missing?this.t("packages_banner"):this.t("settings_saved")),this._settingsDraft=void 0,await Promise.all([this._loadOverview(),this._loadEntities()])}catch(i){this._showToast(this.t("error",{msg:i.message}))}finally{this._working=null}}async _removeExclusionOrphans(){try{let e=await this._ws("remove_exclusion_orphans");this._showToast(this.t("orphans_removed",{n:e.removed})),this._settingsDraft=void 0,await Promise.all([this._loadOverview(),this._loadEntities()])}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_renderDetail(){let e=this._detail;if(!e)return c;let t=this.t,s=()=>this._detail=void 0,i=this._rowById(e.entity_id),a=e.loading?o`<div class="center"><span class="spinner"></span></div>`:this._detailBody(e,i);return o`<div class="scrim sheet-scrim" @click=${n=>n.target===n.currentTarget&&s()}
        @keydown=${n=>n.key==="Escape"&&s()}>
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
      </div>`}_detailBody(e,t){let s=this.t,i=e.info||{},a=e.advice,n=e.usage||{},l=Math.max(...e.daily,1),h=t?this._effective(t):"default",p=(n.automations||[]).map(d=>this.hass.states[d]?.attributes?.friendly_name||d),u=(n.scripts||[]).map(d=>this.hass.states[d]?.attributes?.friendly_name||d);return o`
        <div class="kpis" style="margin-bottom:16px">
          <div class="kpi"><div class="v">${_(i.est_bytes||0,this.lang)}</div><div class="l">${s("col_size")}</div></div>
          <div class="kpi"><div class="v">${$(i.rows||0,this.lang)}</div><div class="l">${s("col_rows")}</div></div>
          <div class="kpi"><div class="v">${be(i.rows_24h,s,this.lang)}</div><div class="l">${s("detail_rate")}</div></div>
        </div>

        <h4>${s("detail_daily",{n:e.days})}</h4>
        <div class="spark" role="img" aria-label=${s("detail_daily",{n:e.days})}>
          ${e.daily.map((d,m)=>o`<div title=${`${$(d,this.lang)}`} style="height:${Math.max(d/l*100,d?3:0)}%"
            class=${m===e.daily.length-1?"today":""}></div>`)}
        </div>

        ${e.attributes.length?o`<h4>${s("detail_attributes",{n:$(e.attribute_variants,this.lang)})}</h4>
              ${e.attributes.map(d=>o`<div class="attr"><code>${d.name}</code><span class="spacer"></span><span class="muted small">${_(d.bytes,this.lang)}</span></div>`)}
              <p class="muted small">${s("detail_attributes_hint")}</p>`:c}

        <h4>${s("detail_usage")}</h4>
        <ul class="usage">
          ${p.length?o`<li>${s("detail_automations")}: ${p.join(", ")}</li>`:c}
          ${u.length?o`<li>${s("detail_scripts")}: ${u.join(", ")}</li>`:c}
          ${(n.helpers||[]).map(d=>o`<li>${s("detail_helper",{title:d.title,domain:d.domain})}
            ${["statistics","history_stats","filter"].includes(d.domain)?o`<span class="tag ok">${s("protected_history_reader")}</span>`:c}</li>`)}
          ${(n.dashboards||[]).map(d=>o`<li>${s("detail_dashboard",{title:d.dashboard,card:d.card,days:d.days})}</li>`)}
          ${n.energy?o`<li>${s("note_energy")}</li>`:c}
          ${!p.length&&!u.length&&!(n.helpers||[]).length&&!(n.dashboards||[]).length&&!n.energy?o`<li class="muted">${s("detail_unused")}</li>`:c}
        </ul>
        <p class="muted small">${s("detail_usage_limits")}</p>

        ${a?.action?o`<div class="banner ${a.conflict?"":"info"}" style="margin:12px 0">
              <div class="txt"><b>${s("suggested",{tier:this._tierLabel(a.action)})}</b><br />${this._reasonText(a,t)}
                ${a.saving?o`<br /><span class="muted small">${s("detail_saving",{bytes:_(a.saving,this.lang)})}</span>`:c}</div>
              <button class="btn primary" @click=${()=>this._accept([e.entity_id])}>${s("inbox_accept")}</button>
            </div>`:c}

        <h4>${s("col_retention")}</h4>
        ${t?this._tierSelect(t,d=>this._setValue([t],d)):c}
        <p class="small">${s(`impact_${h}`,{days:te[h]??e.keep_days})}</p>
      `}};var Ke=ne`
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
    max-width: 1100px;
    margin: 0 auto;
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
    grid-template-columns: 1fr auto auto;
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
`;var gt={title:"Storage Manager",tab_overview:"\xDCbersicht",tab_database:"Datenbank",tab_backups:"Backups",tab_files:"Dateien",refresh:"Aktualisieren",loading:"Lade \u2026",free:"frei",of:"von",used:"belegt",disk:"Speicher",growth_none:"Kein messbares Wachstum in den letzten 7 Tagen.",growth_unknown:"Prognose ab ca. 12 Stunden Messdaten.",growth_full:"W\xE4chst um {growth}/Tag \u2013 voll in etwa {days} Tagen.",growth_ok:"W\xE4chst um {growth}/Tag.",reclaim_title:"Gr\xF6\xDFte Einsparpotenziale",reclaim_total:"Sicher freigebbar: {bytes}",reclaim_none:"Gerade nichts Nennenswertes freizugeben. Gut gepflegt!",safe_cleanup:"Sicher aufr\xE4umen",preview:"Vorschau",free_now:"Jetzt freigeben",open:"\xD6ffnen",rec_backups:"Lokale Backups au\xDFerhalb der Rotation",rec_backups_desc:"{count} lokale Kopien liegen auch extern und fallen aus deinem Aufbewahrungsschema.",rec_backups_rotation_off:"Backup-Rotation ist aus",rec_backups_rotation_off_desc:"{count} lokale Kopien w\xE4ren laut Schema entbehrlich. Rotation in den Optionen aktivieren.",rec_backups_offsite:"Backups nur lokal",rec_backups_offsite_desc:"{count} Backups existieren nur auf diesem Ger\xE4t \u2013 richte ein externes Backup-Ziel ein.",rec_files:"Caches und alte Logs",rec_files_desc:"Dateien, die Home Assistant bei Bedarf neu erzeugt.",rec_orphans:"Verlauf gel\xF6schter Entit\xE4ten",rec_orphans_desc:"{count} Entit\xE4ten existieren nicht mehr, ihr Verlauf liegt noch in der Datenbank.",rec_statistics:"Statistiken gel\xF6schter Entit\xE4ten",rec_statistics_desc:"{count} Langzeitstatistiken ohne zugeh\xF6rige Entit\xE4t.",rec_repack:"Datenbank neu packen",rec_repack_desc:"Freie Seiten in der Datenbankdatei werden an das Dateisystem zur\xFCckgegeben.",rec_top_entities:"{count} Entit\xE4ten = {share} der Datenbank",rec_top_entities_desc:"Hier lohnt sich eine k\xFCrzere Aufbewahrung am meisten.",breakdown_title:"Speicher-Aufteilung",breakdown_unavailable:"Die Aufteilung nach Bereichen liefert nur der Supervisor (Home Assistant OS / Supervised).",cat_system:"System",cat_homeassistant:"Home Assistant",cat_apps_data:"Add-on-Daten",cat_apps_config:"Add-on-Konfiguration",cat_media:"Medien",cat_share:"Share",cat_backup:"Backups",cat_ssl:"SSL",cat_free:"Frei",history_title:"Verlauf",history_empty:"Noch nichts aufger\xE4umt.",history_total:"Insgesamt freigegeben: {bytes}",action_cleanup:"Aufr\xE4umen",action_purge_entities:"Verlauf bereinigt",db_size:"Datenbank",db_engine:"Engine",db_keep:"Globale Aufbewahrung",days:"{n} Tage",db_analysis:"Analyse",db_analysis_never:"noch nie",db_analysis_running:"Analyse l\xE4uft \u2026",analyze:"Analysieren",db_estimated:"Gr\xF6\xDFen sind Sch\xE4tzungen aus Zeilen und Attributen.",db_calibrated:"Gr\xF6\xDFen sind anhand der echten Tabellengr\xF6\xDFen kalibriert.",search:"Suchen \u2026",all_domains:"Alle Domains",filter_changed:"Nur ge\xE4ndert",filter_orphans:"Nur verwaiste",sort_size:"Gr\xF6\xDFe",sort_rate:"Eintr\xE4ge/24 h",sort_name:"Name",col_entity:"Entit\xE4t",col_size:"Gr\xF6\xDFe",col_rate:"24 h",col_rows:"Eintr\xE4ge",col_retention:"Aufbewahrung",tier_default:"Standard ({days} Tage)",tier_7:"7 Tage",tier_3:"3 Tage",tier_1:"1 Tag",tier_drop:"Nur letzte Stunde",tier_excluded:"Nicht aufzeichnen",tier_excluded_needs_packages:"Nicht aufzeichnen (Packages n\xF6tig)",excluded_by_yaml:"Per YAML ausgeschlossen",orphan:"verwaist",show_more:"{n} weitere anzeigen",selected:"{n} ausgew\xE4hlt",set_for_selection:"Aufbewahrung f\xFCr Auswahl",clear_selection:"Auswahl aufheben",draft:"{n} \xC4nderungen",draft_estimate:"ca. {bytes} frei nach dem Anwenden",discard:"Verwerfen",apply:"Anwenden",applied:"\xC4nderungen angewendet.",restart_banner:"Ge\xE4nderte Ausschl\xFCsse ({n}) wirken erst nach einem Neustart.",restart:"Neu starten",restart_confirm:"Home Assistant jetzt neu starten?",packages_banner:"\u201ENicht aufzeichnen\u201C braucht einen Packages-Ordner. Die Reparaturmeldung richtet ihn mit einem Klick ein.",packages_open:"Reparaturen \xF6ffnen",gui_recorder_banner:"GUI Recorder ist installiert. Seine Ausschl\xFCsse lassen sich \xFCbernehmen.",gui_recorder_import:"\xDCbernehmen",gui_recorder_done:"{n} Ausschl\xFCsse \xFCbernommen. Entferne danach den Eintrag \u201Erecorder: !include gui_recorder.yaml\u201C und deinstalliere GUI Recorder.",yaml_filters:"Vorhandene YAML-Filter bleiben unver\xE4ndert und werden respektiert.",yaml_include_warning:"Dein Recorder nutzt eine Include-Liste. Nur dort aufgef\xFChrte Entit\xE4ten werden aufgezeichnet.",events_title:"H\xE4ufigste Ereignisse",analysis_needed:"F\xFCr Gr\xF6\xDFen pro Entit\xE4t bitte zuerst analysieren.",bk_local:"Lokal",bk_count:"{n} Backups",bk_rotation_on:"Rotation aktiv",bk_rotation_off:"Rotation aus (in den Optionen aktivieren)",bk_schedule:"Behalte {d} t\xE4gliche, {w} w\xF6chentliche, {m} monatliche",bk_offsite_required:"Lokale Kopien werden nur gel\xF6scht, wenn das Backup auch extern liegt.",bk_unavailable:"Die Backup-Integration ist nicht geladen.",bk_none:"Keine lokalen Backups.",bk_apply:"Rotation jetzt anwenden",bk_reason_newest:"Neuestes",bk_reason_daily:"T\xE4glich",bk_reason_weekly:"W\xF6chentlich",bk_reason_monthly:"Monatlich",bk_reason_only_local:"Nur lokal vorhanden",bk_reason_unknown_date:"Datum unbekannt",bk_reason_rotated:"Lokal l\xF6schen",col_backup:"Backup",col_locations:"Orte",col_action:"Plan",files_hogs:"Aufr\xE4umbare Dateien",files_none:"Keine bekannten Platzfresser gefunden.",files_large:"Gro\xDFe Dateien im Konfigurationsordner",files_large_hint:"Nur zur Info \u2013 diese Dateien werden nie automatisch gel\xF6scht.",safety_safe:"sicher",safety_review:"pr\xFCfen",hog_esphome_build:"ESPHome-Build-Cache",hog_tts_cache:"Sprachausgabe-Cache (TTS)",hog_rotated_logs:"Alte Logdateien",hog_corrupt_databases:"Besch\xE4digte Datenbank-Kopien",hog_zigbee2mqtt_logs:"Zigbee2MQTT-Logs",hog_core_dumps:"Absturzabbilder",delete:"L\xF6schen",maintenance:"Wartung",docker_title:"Ungenutzte Docker-Images",docker_desc:"L\xE4sst den Supervisor ungenutzte Images, Container und Build-Reste entfernen. Dauert einige Minuten.",repack_title:"Datenbank neu packen",repack_desc:"Gibt freie Seiten der Datenbankdatei zur\xFCck. Braucht etwa so viel freien Speicher wie die Datenbank gro\xDF ist.",repack_impossible:"Zu wenig freier Speicher f\xFCr das Neupacken.",run:"Ausf\xFChren",confirm_title:"Best\xE4tigen",confirm_cleanup:"Folgendes wird entfernt:",confirm_total:"Insgesamt ca. {bytes}",cancel:"Abbrechen",done_freed:"{bytes} freigegeben.",done:"Erledigt.",error:"Fehler: {msg}",busy:"L\xE4uft: {what} \u2026",unknown:"unbekannt",never:"nie",just_now:"gerade eben",ago:"vor {t}",not_admin:"Nur f\xFCr Administratoren.",options:"Optionen",obsolete:"{n} veraltete Eintr\xE4ge (\xE4lter als {days} Tage, ca. {bytes}) warten auf den n\xE4chtlichen Purge.",obsolete_purge:"Jetzt bereinigen",settings_title:"Recorder-Einstellungen",settings_hint:"Globale Aufbewahrung, Schreibintervall und Ausschluss-Filter f\xFCr Domains, Muster und Ereignisse.",settings_restart_hint:"\xC4nderungen landen in der Package-Datei und wirken nach einem Neustart. Einstellungen aus deiner eigenen YAML bleiben unangetastet.",settings_global:"Global",settings_filters:"Nicht aufzeichnen",settings_save:"Speichern",settings_saved:"Gespeichert \u2013 wirkt nach einem Neustart.",setting_purge_keep_days:"Aufbewahrung",setting_purge_keep_days_hint:"Wie viele Tage Verlauf Home Assistant beh\xE4lt (Standard 10).",setting_commit_interval:"Schreibintervall",setting_commit_interval_hint:"Sekunden zwischen Schreibvorg\xE4ngen. H\xF6her schont SD-Karten (Standard 5).",setting_auto_purge:"N\xE4chtlicher Purge",setting_auto_purge_hint:"L\xF6scht jede Nacht um 04:12 Daten, die \xE4lter als die Aufbewahrung sind.",setting_auto_repack:"Automatisch neu packen",setting_auto_repack_hint:"Packt die Datenbank jeden zweiten Sonntag nach dem Purge neu.",setting_locked:"In deiner configuration.yaml gesetzt \u2013 dort \xE4ndern.",unit_days:"Tage",unit_seconds:"s",filter_domains:"Domains",filter_domains_placeholder:"z. B. media_player \u2013 Enter",filter_domains_hint:"Alle Entit\xE4ten dieser Domains werden nicht aufgezeichnet.",filter_entity_globs:"Muster",filter_entity_globs_placeholder:"z. B. sensor.*_rssi \u2013 Enter",filter_entity_globs_hint:"Platzhalter * und ? wie in der Recorder-Konfiguration.",filter_event_types:"Ereignisse",filter_event_types_placeholder:"z. B. call_service \u2013 Enter",filter_event_types_hint:"Ereignistypen, die nicht gespeichert werden.",remove:"Entfernen",orphans_badge:"{n} verwaist",orphans_text:"{n} Ausschl\xFCsse passen auf nichts mehr, das existiert.",orphans_remove:"Aufr\xE4umen",orphans_removed:"{n} verwaiste Ausschl\xFCsse entfernt.",rate_seconds:"alle {n} s",rate_minutes:"alle {n} min",rate_per_day:"{n}\xD7 pro Tag",reason_noise:"Technischer Diagnosewert \u2013 den Verlauf braucht man praktisch nie.",reason_noise_statistics:"Technischer Wert mit Langzeitstatistik \u2013 1 Tag Verlauf gen\xFCgt, die Statistik bleibt.",reason_attributes:"{share} des Speichers stecken in Attributen, nicht im Zustand.",reason_statistics_kept:"Neuer Wert {rate}. Die st\xFCndliche Langzeitstatistik bleibt dauerhaft erhalten.",reason_frequent:"Neuer Wert {rate} \u2013 meist reicht ein kurzer Verlauf.",reason_energy:"Wird im Energie-Dashboard genutzt \u2013 Aufzeichnung bleibt, nur der Verlauf wird k\xFCrzer.",reason_conflict_dashboard:"Ein Dashboard zeigt {days} Tage Verlauf \u2013 die aktuelle Aufbewahrung ist k\xFCrzer.",reason_conflict_energy:"Wird im Energie-Dashboard genutzt \u2013 ohne Aufzeichnung fehlen dort Daten.",reason_conflict_history_reader:"Ein Helfer liest den Verlauf dieser Entit\xE4t \u2013 er sollte nicht gek\xFCrzt sein.",protected_history_reader:"Verlauf wird von einem Helfer gelesen",protected_dashboard:"Dashboard braucht den vollen Verlauf",note_automation:"In {n} Automationen/Skripten",note_automation_hint:"Automationen nutzen den Live-Zustand \u2013 der Verlauf wird daf\xFCr nicht gebraucht.",note_dashboard:"Dashboard: {days} Tage",note_energy:"Energie-Dashboard",note_statistics:"Langzeitstatistik",note_statistics_hint:"St\xFCndliche Mittel-, Min- und Max-Werte bleiben unabh\xE4ngig von der Aufbewahrung erhalten.",note_diagnostic:"Diagnose",inbox_title:"Empfehlungen",inbox_summary:"{n} Empfehlungen \xB7 ca. {bytes}",inbox_empty:"Keine Empfehlungen \u2013 die Datenbank ist gut eingestellt.",inbox_hint:"\xDCbernommene Empfehlungen landen im Entwurf und werden erst mit \u201EAnwenden\u201C wirksam.",inbox_show_dismissed:"Abgelehnte wieder anzeigen ({n})",inbox_accept_all:"Alle \xFCbernehmen ({n})",inbox_in_draft:"Im Entwurf",inbox_dismiss:"Ablehnen",inbox_accept:"\xDCbernehmen",effect_title:"Wirkung",effect_waiting:"Nach der n\xE4chsten Analyse siehst du hier, was deine \xC4nderungen gebracht haben.",effect_since_change:"Seit der ersten \xC4nderung: {delta} ({bytes}).",effect_no_changes:"Noch keine \xC4nderungen \u2013 der Verlauf zeigt die normale Entwicklung.",effect_need_samples:"Der Verlauf entsteht mit jeder Analyse (t\xE4glich und nach jeder \xC4nderung).",view_top:"Top-Verursacher",view_groups:"Nach Integration",view_all:"Alle",view_total:"{n} Entit\xE4ten \xB7 {bytes}",top_hint:"Diese {n} Entit\xE4ten machen {share} der Datenbank aus.",top_rest:"{n} weitere Entit\xE4ten = {bytes} ({share}) \u2013 hier gibt es nichts zu tun.",top_show_all:"Alle anzeigen",group_count:"Entit\xE4ten: {n}",group_accept:"{n} Empfehlungen \xFCbernehmen ({bytes})",filter_advice:"Mit Empfehlung",suggested:"Empfohlen: {tier}",detail_rate:"H\xE4ufigkeit",detail_daily:"Eintr\xE4ge pro Tag (letzte {n} Tage)",detail_attributes:"Gr\xF6\xDFte Attribute ({n} Varianten gespeichert)",detail_attributes_hint:"Jede neue Attribut-Kombination wird einmal gespeichert. H\xE4ufig wechselnde Attribute wie Zeitstempel oder Vorhersagen erzeugen viele Varianten.",detail_usage:"Verwendung",detail_automations:"Automationen",detail_scripts:"Skripte",detail_helper:"Helfer \u201E{title}\u201C ({domain})",detail_dashboard:"Dashboard \u201E{title}\u201C: {card}, {days} Tage",detail_unused:"Keine Verwendung gefunden.",detail_usage_limits:"Erkannt werden Automationen, Skripte, UI-Helfer, das Energie-Dashboard und Dashboards im UI-Modus \u2013 YAML-Helfer und Templates nicht.",detail_saving:"Gibt ca. {bytes} frei.",impact_default:"Verlauf und Logbuch: {days} Tage (globale Einstellung). Die Langzeitstatistik bleibt dauerhaft.",impact_7:"Verlaufsgraph und Logbuch zeigen nur {days} Tage. Die st\xFCndliche Langzeitstatistik bleibt erhalten.",impact_3:"Verlaufsgraph und Logbuch zeigen nur {days} Tage. Die st\xFCndliche Langzeitstatistik bleibt erhalten.",impact_1:"Verlaufsgraph und Logbuch zeigen nur {days} Tag. Die st\xFCndliche Langzeitstatistik bleibt erhalten.",impact_drop:"Nur die letzte Stunde bleibt im Verlauf ({days} Tage). Die Langzeitstatistik bleibt, die Werte werden weiter geschrieben.",impact_excluded:"Nichts wird aufgezeichnet ({days} Tage): kein Verlauf, kein Logbuch, keine Langzeitstatistik. Wirkt nach einem Neustart.",used_cap:"Belegt",low_space_banner:"Nur noch {free} frei. Etwa {reclaim} lassen sich sicher freigeben.",low_space_banner_db:"Nur noch {free} frei. In der Datenbank-Ansicht siehst du, wo sich k\xFCrzere Aufbewahrung lohnt.",forecast_banner:"Beim aktuellen Wachstum ist der Speicher in etwa {days} Tagen voll.",bk_kpi_local:"Lokal belegt",bk_kpi_count:"Lokale Backups",bk_kpi_deletable:"Nach Plan l\xF6schbar"},me={title:"Storage Manager",tab_overview:"Overview",tab_database:"Database",tab_backups:"Backups",tab_files:"Files",refresh:"Refresh",loading:"Loading \u2026",free:"free",of:"of",used:"used",disk:"Disk",growth_none:"No measurable growth in the last 7 days.",growth_unknown:"Forecast available after about 12 hours of samples.",growth_full:"Growing {growth}/day \u2013 full in about {days} days.",growth_ok:"Growing {growth}/day.",reclaim_title:"Biggest savings",reclaim_total:"Safely reclaimable: {bytes}",reclaim_none:"Nothing worth cleaning right now. Well kept!",safe_cleanup:"Safe cleanup",preview:"Preview",free_now:"Free now",open:"Open",rec_backups:"Local backups outside the rotation",rec_backups_desc:"{count} local copies also exist elsewhere and fall outside your retention schedule.",rec_backups_rotation_off:"Backup rotation is off",rec_backups_rotation_off_desc:"{count} local copies would be expendable. Enable rotation in the options.",rec_backups_offsite:"Backups only stored locally",rec_backups_offsite_desc:"{count} backups exist only on this device \u2013 set up an off-site backup location.",rec_files:"Caches and old logs",rec_files_desc:"Files Home Assistant recreates when needed.",rec_orphans:"History of deleted entities",rec_orphans_desc:"{count} entities no longer exist but their history is still stored.",rec_statistics:"Statistics of deleted entities",rec_statistics_desc:"{count} long-term statistics without an entity.",rec_repack:"Repack the database",rec_repack_desc:"Returns free pages inside the database file to the file system.",rec_top_entities:"{count} entities = {share} of the database",rec_top_entities_desc:"Shorter retention pays off most here.",breakdown_title:"Storage breakdown",breakdown_unavailable:"The breakdown by area is only provided by the Supervisor (Home Assistant OS / Supervised).",cat_system:"System",cat_homeassistant:"Home Assistant",cat_apps_data:"Add-on data",cat_apps_config:"Add-on configuration",cat_media:"Media",cat_share:"Share",cat_backup:"Backups",cat_ssl:"SSL",cat_free:"Free",history_title:"History",history_empty:"Nothing cleaned yet.",history_total:"Freed in total: {bytes}",action_cleanup:"Cleanup",action_purge_entities:"History purged",db_size:"Database",db_engine:"Engine",db_keep:"Global retention",days:"{n} days",db_analysis:"Analysis",db_analysis_never:"never",db_analysis_running:"Analysis running \u2026",analyze:"Analyze",db_estimated:"Sizes are estimates based on rows and attributes.",db_calibrated:"Sizes are calibrated with the real table sizes.",search:"Search \u2026",all_domains:"All domains",filter_changed:"Changed only",filter_orphans:"Orphans only",sort_size:"Size",sort_rate:"Rows/24 h",sort_name:"Name",col_entity:"Entity",col_size:"Size",col_rate:"24 h",col_rows:"Rows",col_retention:"Retention",tier_default:"Default ({days} days)",tier_7:"7 days",tier_3:"3 days",tier_1:"1 day",tier_drop:"Last hour only",tier_excluded:"Don't record",tier_excluded_needs_packages:"Don't record (needs packages)",excluded_by_yaml:"Excluded in YAML",orphan:"orphaned",show_more:"Show {n} more",selected:"{n} selected",set_for_selection:"Retention for selection",clear_selection:"Clear selection",draft:"{n} changes",draft_estimate:"about {bytes} freed after applying",discard:"Discard",apply:"Apply",applied:"Changes applied.",restart_banner:"Changed exclusions ({n}) take effect after a restart.",restart:"Restart",restart_confirm:"Restart Home Assistant now?",packages_banner:"\u201CDon't record\u201D needs a packages folder. The repair issue sets it up with one click.",packages_open:"Open repairs",gui_recorder_banner:"GUI Recorder is installed. Its exclusions can be imported.",gui_recorder_import:"Import",gui_recorder_done:"{n} exclusions imported. Afterwards remove \u201Crecorder: !include gui_recorder.yaml\u201D and uninstall GUI Recorder.",yaml_filters:"Existing YAML filters stay untouched and are respected.",yaml_include_warning:"Your recorder uses an include list. Only entities listed there are recorded.",events_title:"Most frequent events",analysis_needed:"Run an analysis first to see sizes per entity.",bk_local:"Local",bk_count:"{n} backups",bk_rotation_on:"Rotation on",bk_rotation_off:"Rotation off (enable in the options)",bk_schedule:"Keep {d} daily, {w} weekly, {m} monthly",bk_offsite_required:"Local copies are only deleted when the backup also exists elsewhere.",bk_unavailable:"The backup integration is not loaded.",bk_none:"No local backups.",bk_apply:"Apply rotation now",bk_reason_newest:"Newest",bk_reason_daily:"Daily",bk_reason_weekly:"Weekly",bk_reason_monthly:"Monthly",bk_reason_only_local:"Only stored locally",bk_reason_unknown_date:"Unknown date",bk_reason_rotated:"Delete local copy",col_backup:"Backup",col_locations:"Locations",col_action:"Plan",files_hogs:"Files that can be cleaned",files_none:"No known space hogs found.",files_large:"Large files in the config folder",files_large_hint:"For information only \u2013 these files are never deleted automatically.",safety_safe:"safe",safety_review:"review",hog_esphome_build:"ESPHome build cache",hog_tts_cache:"Text-to-speech cache",hog_rotated_logs:"Old log files",hog_corrupt_databases:"Corrupt database copies",hog_zigbee2mqtt_logs:"Zigbee2MQTT logs",hog_core_dumps:"Crash dumps",delete:"Delete",maintenance:"Maintenance",docker_title:"Unused Docker images",docker_desc:"Lets the Supervisor remove unused images, containers and build leftovers. Takes a few minutes.",repack_title:"Repack the database",repack_desc:"Returns free pages of the database file. Needs about as much free space as the database size.",repack_impossible:"Not enough free space to repack.",run:"Run",confirm_title:"Confirm",confirm_cleanup:"The following will be removed:",confirm_total:"About {bytes} in total",cancel:"Cancel",done_freed:"{bytes} freed.",done:"Done.",error:"Error: {msg}",busy:"Running: {what} \u2026",unknown:"unknown",never:"never",just_now:"just now",ago:"{t} ago",not_admin:"Administrators only.",options:"Options",obsolete:"{n} outdated rows (older than {days} days, about {bytes}) are waiting for the nightly purge.",obsolete_purge:"Purge now",settings_title:"Recorder settings",settings_hint:"Global retention, commit interval and exclude filters for domains, patterns and events.",settings_restart_hint:"Changes go into the package file and take effect after a restart. Settings from your own YAML stay untouched.",settings_global:"Global",settings_filters:"Don't record",settings_save:"Save",settings_saved:"Saved \u2013 takes effect after a restart.",setting_purge_keep_days:"Retention",setting_purge_keep_days_hint:"How many days of history Home Assistant keeps (default 10).",setting_commit_interval:"Commit interval",setting_commit_interval_hint:"Seconds between writes. Higher values spare SD cards (default 5).",setting_auto_purge:"Nightly purge",setting_auto_purge_hint:"Deletes data older than the retention every night at 04:12.",setting_auto_repack:"Repack automatically",setting_auto_repack_hint:"Repacks the database every second Sunday after the purge.",setting_locked:"Set in your configuration.yaml \u2013 change it there.",unit_days:"days",unit_seconds:"s",filter_domains:"Domains",filter_domains_placeholder:"e.g. media_player \u2013 Enter",filter_domains_hint:"No entity of these domains is recorded.",filter_entity_globs:"Patterns",filter_entity_globs_placeholder:"e.g. sensor.*_rssi \u2013 Enter",filter_entity_globs_hint:"Wildcards * and ? as in the recorder configuration.",filter_event_types:"Events",filter_event_types_placeholder:"e.g. call_service \u2013 Enter",filter_event_types_hint:"Event types that are not stored.",remove:"Remove",orphans_badge:"{n} orphaned",orphans_text:"{n} exclusions no longer match anything that exists.",orphans_remove:"Clean up",orphans_removed:"Removed {n} orphaned exclusions.",rate_seconds:"every {n} s",rate_minutes:"every {n} min",rate_per_day:"{n}\xD7 per day",reason_noise:"Technical diagnostic value \u2013 its history is practically never needed.",reason_noise_statistics:"Technical value with long-term statistics \u2013 1 day of history is enough, the statistics stay.",reason_attributes:"{share} of the space is used by attributes, not by the state.",reason_statistics_kept:"New value {rate}. The hourly long-term statistics are kept permanently.",reason_frequent:"New value {rate} \u2013 a short history is usually enough.",reason_energy:"Used by the energy dashboard \u2013 recording stays, only the history gets shorter.",reason_conflict_dashboard:"A dashboard shows {days} days of history \u2013 the current retention is shorter.",reason_conflict_energy:"Used by the energy dashboard \u2013 without recording it misses data.",reason_conflict_history_reader:"A helper reads this entity's history \u2013 it should not be shortened.",protected_history_reader:"History is read by a helper",protected_dashboard:"A dashboard needs the full history",note_automation:"In {n} automations/scripts",note_automation_hint:"Automations use the live state \u2013 they do not need the history.",note_dashboard:"Dashboard: {days} days",note_energy:"Energy dashboard",note_statistics:"Long-term statistics",note_statistics_hint:"Hourly mean, min and max values are kept regardless of the retention.",note_diagnostic:"Diagnostic",inbox_title:"Recommendations",inbox_summary:"{n} recommendations \xB7 about {bytes}",inbox_empty:"No recommendations \u2013 the database is well tuned.",inbox_hint:"Accepted recommendations go into the draft and take effect with \u201CApply\u201D.",inbox_show_dismissed:"Show dismissed again ({n})",inbox_accept_all:"Accept all ({n})",inbox_in_draft:"In draft",inbox_dismiss:"Dismiss",inbox_accept:"Accept",effect_title:"Effect",effect_waiting:"After the next analysis you will see here what your changes achieved.",effect_since_change:"Since the first change: {delta} ({bytes}).",effect_no_changes:"No changes yet \u2013 the chart shows the normal development.",effect_need_samples:"The chart builds up with every analysis (daily and after each change).",view_top:"Top causes",view_groups:"By integration",view_all:"All",view_total:"{n} entities \xB7 {bytes}",top_hint:"These {n} entities make up {share} of the database.",top_rest:"{n} more entities = {bytes} ({share}) \u2013 nothing to do here.",top_show_all:"Show all",group_count:"entities: {n}",group_accept:"Accept {n} recommendations ({bytes})",filter_advice:"With recommendation",suggested:"Suggested: {tier}",detail_rate:"Frequency",detail_daily:"Rows per day (last {n} days)",detail_attributes:"Largest attributes ({n} variants stored)",detail_attributes_hint:"Every new attribute combination is stored once. Frequently changing attributes such as timestamps or forecasts create many variants.",detail_usage:"Usage",detail_automations:"Automations",detail_scripts:"Scripts",detail_helper:"Helper \u201C{title}\u201D ({domain})",detail_dashboard:"Dashboard \u201C{title}\u201D: {card}, {days} days",detail_unused:"No usage found.",detail_usage_limits:"Detected: automations, scripts, UI helpers, the energy dashboard and UI-mode dashboards \u2013 not YAML helpers or templates.",detail_saving:"Frees about {bytes}.",impact_default:"History and logbook: {days} days (global setting). Long-term statistics are kept permanently.",impact_7:"History graph and logbook show only {days} days. Hourly long-term statistics are kept.",impact_3:"History graph and logbook show only {days} days. Hourly long-term statistics are kept.",impact_1:"History graph and logbook show only {days} day. Hourly long-term statistics are kept.",impact_drop:"Only the last hour stays in the history ({days} days). Statistics are kept, values are still written.",impact_excluded:"Nothing is recorded ({days} days): no history, no logbook, no long-term statistics. Takes effect after a restart.",used_cap:"Used",low_space_banner:"Only {free} free. About {reclaim} can be reclaimed safely.",low_space_banner_db:"Only {free} free. The database view shows where shorter retention pays off.",forecast_banner:"At the current growth the disk is full in about {days} days.",bk_kpi_local:"Used locally",bk_kpi_count:"Local backups",bk_kpi_deletable:"Deletable by plan"},bt={de:gt,en:me};function Ye(r){let e=(r?.locale?.language||r?.language||"en").split("-")[0],t=bt[e]||me;return(s,i={})=>{let a=t[s]??me[s]??s;for(let[n,l]of Object.entries(i))a=a.replaceAll(`{${n}}`,String(l));return a}}function Ze(r){return r?.locale?.language||r?.language||"en"}var fe="storage_manager",ve=["overview","database","backups","files"],mt=150,ye={homeassistant:"var(--sm-c1)",apps_data:"var(--sm-c2)",apps_config:"var(--sm-c6)",backup:"var(--sm-c4)",media:"var(--sm-c3)",share:"var(--sm-c5)",ssl:"var(--sm-c6)",system:"var(--sm-c7)"},ft={backups:"mdi:backup-restore",backups_rotation_off:"mdi:backup-restore",backups_offsite:"mdi:cloud-alert",files:"mdi:file-cabinet",orphans:"mdi:ghost-outline",statistics:"mdi:chart-box-outline",repack:"mdi:database-refresh",top_entities:"mdi:database-alert"},Je=r=>o`<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
  <path fill="currentColor" d=${r}></path></svg>`,vt="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",yt="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",G=class extends qe(A){constructor(){super();let e=window.location.hash.replace("#","");this._tab=ve.includes(e)?e:"overview",this._draft=new Map,this._selected=new Set,this._search="",this._domain="",this._onlyChanged=!1,this._onlyOrphans=!1,this._sort="size",this._limit=mt,this._working=null}get t(){return Ye(this.hass)}get lang(){return Ze(this.hass)}connectedCallback(){super.connectedCallback(),this._hashListener=()=>{let e=window.location.hash.replace("#","");ve.includes(e)&&e!==this._tab&&this._setTab(e,!1)},window.addEventListener("hashchange",this._hashListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._hashListener),this._unsubscribe?.then(e=>e()).catch(()=>{}),this._unsubscribe=void 0}updated(e){e.has("hass")&&this.hass&&!this._started&&(this._started=!0,this._loadOverview(),this._loadTab(this._tab),this._unsubscribe=this.hass.connection.subscribeMessage(()=>this._scheduleReload(),{type:`${fe}/subscribe`}).catch(()=>{}))}_ws(e,t={}){return this.hass.callWS({type:`${fe}/${e}`,...t})}_scheduleReload(){clearTimeout(this._reloadTimer),this._reloadTimer=setTimeout(()=>this._loadOverview(),400)}async _loadOverview(){try{this._overview=await this._ws("overview"),this._error=void 0}catch(e){this._error=e.message||String(e)}}async _loadEntities(){try{this._entities=await this._ws("entities")}catch(e){this._showToast(this.t("error",{msg:e.message}))}}async _loadBackups(){try{this._backups=await this._ws("backups")}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_loadTab(e){e==="database"&&!this._entities&&this._loadEntities(),e==="backups"&&this._loadBackups()}_setTab(e,t=!0){this._tab=e,t&&history.replaceState(null,"",`#${e}`),this._loadTab(e)}async _refreshAll(){this._working="refresh";try{await this._ws("refresh"),await this._loadOverview(),this._tab==="database"&&await this._loadEntities(),this._tab==="backups"&&await this._loadBackups()}finally{this._working=null}}_showToast(e){this._toast=e,clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toast=void 0,5e3)}_navigate(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}_toggleMenu(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}async _previewAndClean(e,t={}){let s;try{s=await this._ws("preview",{targets:e})}catch(a){this._showToast(this.t("error",{msg:a.message}));return}let i=[];for(let a of e){let n=s[a];n&&(a==="backups"?n.items.forEach(l=>i.push(`${l.name} \xB7 ${_(l.bytes,this.lang)}`)):a==="files"?n.items.forEach(l=>i.push(`${this.t(`hog_${l.name}`)} \xB7 ${_(l.bytes,this.lang)}`)):a==="orphans"?i.push(`${this.t("rec_orphans")}: ${n.items.length} \xB7 ${_(n.bytes,this.lang)}`):a==="statistics"?i.push(`${this.t("rec_statistics")}: ${n.items.length}`):a==="purge"?i.push(`${this.t("obsolete_purge")}: ${$(n.rows,this.lang)} \xB7 ${_(n.bytes,this.lang)}`):a==="repack"?i.push(`${this.t("rec_repack")} \xB7 ${_(n.bytes,this.lang)}`):a==="docker"&&i.push(this.t("docker_title")))}this._dialog={title:this.t("confirm_title"),body:o`<p>${this.t("confirm_cleanup")}</p>
        <ul>${i.map(a=>o`<li>${a}</li>`)}</ul>
        ${s.total?o`<p><b>${this.t("confirm_total",{bytes:_(s.total,this.lang)})}</b></p>`:c}`,confirm:this.t("free_now"),danger:!0,action:()=>this._clean(e,t)}}async _clean(e,t={}){this._working=e.join(",");try{let s=await this._ws("clean",{targets:e,...t}),i=s.freed>0?this.t("done_freed",{bytes:_(s.freed,this.lang)}):this.t("done");this._showToast(s.errors?.length?`${i} ${s.errors.join("; ")}`:i),await this._loadOverview(),this._entities&&await this._loadEntities(),this._tab==="backups"&&await this._loadBackups()}catch(s){this._showToast(this.t("error",{msg:s.message}))}finally{this._working=null}}async _analyze(){this._working="analyze";try{await this._ws("analyze"),await Promise.all([this._loadOverview(),this._loadEntities()])}catch(e){this._showToast(this.t("error",{msg:e.message}))}finally{this._working=null}}_confirmRestart(){this._dialog={title:this.t("restart"),body:o`<p>${this.t("restart_confirm")}</p>`,confirm:this.t("restart"),danger:!0,action:()=>this.hass.callService("homeassistant","restart")}}async _importGuiRecorder(){try{let e=await this._ws("import_gui_recorder");this._showToast(this.t("gui_recorder_done",{n:e.imported})),await Promise.all([this._loadOverview(),this._loadEntities()])}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_effective(e){let t=this._draft.get(e.entity_id);return t?t.value:e.excluded?"excluded":e.tier}_original(e){return e.excluded?"excluded":e.tier}_setValue(e,t){let s=new Map(this._draft);for(let i of e)i.excluded_by_yaml||(t===this._original(i)?s.delete(i.entity_id):s.set(i.entity_id,{value:t,row:i}));this._draft=s}_draftEstimate(){let e=0;for(let{value:t,row:s}of this._draft.values()){if(!(t in te)||!s.rows)continue;let i=te[t],a=i===0?0:Math.min(s.rows_24h*i,s.rows);e+=s.est_state_bytes*(1-a/s.rows)}return Math.max(e,0)}async _applyDraft(){let e={},t={};for(let[s,{value:i,row:a}]of this._draft){let n=a.excluded;i==="excluded"?n||(t[s]=!0):(n&&(t[s]=!1),i!==a.tier&&(e[s]=i))}this._working="apply";try{let s=await this._ws("apply",{retention:e,excluded:t,purge_now:!0});this._draft=new Map,this._selected=new Set,this._showToast(this.t("applied")),await Promise.all([this._loadOverview(),this._loadEntities()]),s.packages_missing&&this._showToast(this.t("packages_banner"))}catch(s){this._showToast(this.t("error",{msg:s.message}))}finally{this._working=null}}render(){if(!this.hass)return c;let e=this.t;return o`
      <header>
        <div class="toolbar">
          ${this.narrow?o`<button class="icon-btn" @click=${this._toggleMenu} aria-label="menu">${Je(vt)}</button>`:c}
          <div class="title">${e("title")}</div>
          <button class="icon-btn" title=${e("refresh")} aria-label=${e("refresh")}
            ?disabled=${!!this._working} @click=${this._refreshAll}>${Je(yt)}</button>
        </div>
        <nav class="tabs" role="tablist">
          ${ve.map(t=>o`<button role="tab" aria-selected=${t===this._tab?"true":"false"}
              @click=${()=>this._setTab(t)}>${e(`tab_${t}`)}</button>`)}
        </nav>
      </header>
      <main>
        ${this._error?o`<div class="banner"><div class="txt">${e("error",{msg:this._error})}</div></div>`:c}
        ${this._busyBanner()}
        ${this._overview?this._renderTab():o`<div class="center"><span class="spinner"></span><p class="muted">${e("loading")}</p></div>`}
      </main>
      ${this._renderDraftBar()} ${this._toast?o`<div class="toast" role="status">${this._toast}</div>`:c}
      ${this._renderDialog()}
    `}_busyBanner(){let e=this._overview?.data?.busy||(this._working&&this._working!=="refresh"?this._working:null);return e?o`<div class="banner info"><span class="spinner"></span><div class="txt">${this.t("busy",{what:e})}</div></div>`:c}_renderTab(){switch(this._tab){case"database":return this._renderDatabase();case"backups":return this._renderBackups();case"files":return this._renderFiles();default:return this._renderOverview()}}_renderOverview(){let e=this.t,{data:t,recommendations:s,history:i}=this._overview,a=t.disk,n=t.forecast,l;n.growth_per_day===null?l=e("growth_unknown"):n.days_until_full!==null?l=e("growth_full",{growth:_(n.growth_per_day,this.lang),days:Math.round(n.days_until_full)}):n.growth_per_day>1024*1024?l=e("growth_ok",{growth:_(n.growth_per_day,this.lang)}):l=e("growth_none");let h=this._segments(t),p=100-a.percent_used<this._overview.options.low_space_percent,u=n.days_until_full!==null&&n.days_until_full<this._overview.options.forecast_warning_days;return o`
      ${p||u?o`<div class="banner"><ha-icon icon="mdi:harddisk-remove"></ha-icon>
            <div class="txt">${p?t.reclaimable.total>0?e("low_space_banner",{free:_(a.free,this.lang),reclaim:_(t.reclaimable.total,this.lang)}):e("low_space_banner_db",{free:_(a.free,this.lang)}):e("forecast_banner",{days:Math.round(n.days_until_full)})}</div>
            ${t.reclaimable.files+t.reclaimable.backups>0?o`<button class="btn primary" ?disabled=${!!this._working}
                  @click=${()=>this._previewAndClean(this._safeTargets())}>${e("safe_cleanup")}</button>`:o`<button class="btn" @click=${()=>this._setTab("database")}>${e("tab_database")}</button>`}
          </div>`:c}
      <div class="card">
        <div class="hero">
          <div>
            <div class="big">${_(a.free,this.lang)}</div>
            <div class="muted">${e("free")} ${e("of")} ${_(a.total,this.lang)}</div>
          </div>
          <div>
            <div class="row"><b>${k(a.percent_used/100,this.lang)} ${e("used")}</b></div>
            <div class="stack" role="img" aria-label=${`${k(a.percent_used/100,this.lang)} ${e("used")}`}>
              ${h.map(d=>o`<div style="width:${d.share*100}%;background:${d.color}" title=${`${d.label}: ${_(d.bytes,this.lang)}`}></div>`)}
            </div>
            <div class="legend">
              ${h.map(d=>o`<span><i class="dot" style="background:${d.color}"></i>${d.label} ${_(d.bytes,this.lang)}</span>`)}
            </div>
            <p class="muted small" style="margin:10px 0 0">${l}</p>
          </div>
        </div>
      </div>

      <div class="card">
        <h2>${e("reclaim_title")}<span class="spacer"></span>
          ${t.reclaimable.total>0?o`<span class="muted small">${e("reclaim_total",{bytes:_(t.reclaimable.total,this.lang)})}</span>`:c}
        </h2>
        ${s.length===0?o`<p class="muted">${e("reclaim_none")}</p>`:s.map(d=>this._renderRec(d))}
      </div>

      <div class="grid2">
        <div class="card">
          <h2>${e("breakdown_title")}</h2>
          ${this._renderBreakdown(t)}
        </div>
        <div class="card">
          <h2>${e("history_title")}<span class="spacer"></span>
            <span class="muted small">${e("history_total",{bytes:_(t.freed_total,this.lang)})}</span></h2>
          ${i.length===0?o`<p class="muted">${e("history_empty")}</p>`:i.slice(0,8).map(d=>o`<div class="list-row">
                  <div>${e(`action_${d.action}`)}<div class="muted small">${j(d.time,this.lang)}</div></div>
                  <div></div>
                  <div class="num"><b>${_(d.freed_bytes,this.lang)}</b></div>
                </div>`)}
        </div>
      </div>
    `}_safeTargets(){return this._overview.options.backup_rotation?["backups","files"]:["files"]}_segments(e){let t=e.disk,s=[],i=e.breakdown?.children;if(i?.length){for(let a of i)a.used_bytes&&s.push({id:a.id,label:this.t(`cat_${a.id}`)!==`cat_${a.id}`?this.t(`cat_${a.id}`):a.label||a.id,bytes:a.used_bytes,share:a.used_bytes/t.total,color:ye[a.id]||"var(--sm-c7)"});s.sort((a,n)=>n.bytes-a.bytes)}else s.push({id:"used",label:this.t("used_cap"),bytes:t.used,share:t.used/t.total,color:"var(--sm-c1)"});return s}_renderRec(e){let t=this.t,s={count:e.count??"",share:e.share?k(e.share,this.lang):""},i=t(`rec_${e.id}`,s),a=t(`rec_${e.id}_desc`,s),n=!!this._working;return o`<div class="rec">
      <div class="ico"><ha-icon icon=${ft[e.id]||"mdi:broom"}></ha-icon></div>
      <div>
        <div class="t">${i}</div>
        <div class="muted small">${a}</div>
      </div>
      <div class="act row">
        ${e.bytes?o`<span class="amount">${_(e.bytes,this.lang)}</span>`:c}
        ${e.action==="clean"?o`<button class="btn" ?disabled=${n} @click=${()=>this._previewAndClean(e.targets)}>${t("preview")}</button>`:o`<button class="btn" @click=${()=>this._setTab(e.view)}>${t("open")}</button>`}
      </div>
    </div>`}_renderBreakdown(e){let t=this.t,s=e.breakdown;if(!s?.children?.length)return o`<p class="muted small">${t("breakdown_unavailable")}</p>
        ${this._bars([{label:t("used_cap"),bytes:e.disk.used},{label:t("cat_free"),bytes:e.disk.free}],e.disk.total)}`;let i=e.addon_names||{},a=[];for(let n of s.children)if(a.push({label:t(`cat_${n.id}`)!==`cat_${n.id}`?t(`cat_${n.id}`):n.label||n.id,bytes:n.used_bytes,color:ye[n.id]}),n.id==="apps_data"&&n.children?.length)for(let l of n.children.slice(0,6))a.push({label:i[l.id]||l.label||l.id,bytes:l.used_bytes,color:ye.apps_data,indent:!0});return this._bars(a,e.disk.total)}_bars(e,t){return e.map(s=>o`<div style="margin:8px 0 ${s.indent?"6px 18px":"10px"}">
        <div class="row small"><span>${s.label}</span><span class="spacer"></span><span class="muted">${_(s.bytes,this.lang)}</span></div>
        <div class="bar"><div style="width:${Math.max(s.bytes/t*100,.5)}%;background:${s.color||"var(--sm-c1)"}"></div></div>
      </div>`)}_renderDraftBar(){if(!this._draft.size||this._tab!=="database")return c;let e=this.t,t=this._draftEstimate();return o`<div class="draftbar" role="region" aria-label=${e("draft",{n:this._draft.size})}>
      <div>
        <div class="txt">${e("draft",{n:this._draft.size})}</div>
        ${t>0?o`<div class="muted small">${e("draft_estimate",{bytes:_(t,this.lang)})}</div>`:c}
      </div>
      <button class="btn" @click=${()=>this._draft=new Map}>${e("discard")}</button>
      <button class="btn primary" ?disabled=${!!this._working} @click=${this._applyDraft}>${e("apply")}</button>
    </div>`}_renderBackups(){let e=this.t,t=this._overview,s=t.data.backups,i=t.options;if(!s.available)return o`<div class="card"><p class="muted">${e("bk_unavailable")}</p></div>`;let a=this._backups?.plan;return o`
      <div class="card">
        <div class="kpis">
          <div class="kpi"><div class="v">${_(s.local_total,this.lang)}</div><div class="l">${e("bk_kpi_local")}</div></div>
          <div class="kpi"><div class="v">${$(s.local_count,this.lang)}</div><div class="l">${e("bk_kpi_count")}</div></div>
          <div class="kpi"><div class="v">${_(s.deletable_bytes,this.lang)}</div><div class="l">${e("bk_kpi_deletable")}</div></div>
        </div>
        <p class="muted small" style="margin:12px 0 0">
          ${s.rotation_enabled?e("bk_rotation_on"):e("bk_rotation_off")} ·
          ${e("bk_schedule",{d:i.keep_daily,w:i.keep_weekly,m:i.keep_monthly})}
          ${i.require_offsite?o`<br />${e("bk_offsite_required")}`:c}
        </p>
        <div class="row" style="margin-top:12px">
          <button class="btn" @click=${()=>this._navigate(`/config/integrations/integration/${fe}`)}>${e("options")}</button>
          <span class="spacer"></span>
          <button class="btn primary danger" ?disabled=${!s.deletable_count||!!this._working}
            @click=${()=>this._previewAndClean(["backups"])}>${e("bk_apply")}</button>
        </div>
      </div>
      <div class="card">
        ${a?a.length===0?o`<p class="muted">${e("bk_none")}</p>`:o`<table>
              <thead><tr><th>${e("col_backup")}</th><th class="num">${e("col_size")}</th><th>${e("col_locations")}</th><th>${e("col_action")}</th></tr></thead>
              <tbody>${a.map(n=>o`<tr>
                  <td><div>${n.name}</div><div class="muted small">${j(n.date,this.lang)}</div></td>
                  <td class="num">${_(n.local_size,this.lang)}</td>
                  <td>${n.local_agents.map(l=>o`<span class="tag" title=${l}>${this._agentName(l)}</span>`)}${n.remote_agents.map(l=>o`<span class="tag ok" title=${l}>${this._agentName(l)}</span>`)}</td>
                  <td>${n.action==="delete_local"?o`<span class="tag bad">${e("bk_reason_rotated")}</span>`:o`<span class=${n.reason==="only_local"?"tag warn":"tag"}>${e(`bk_reason_${n.reason}`)}</span>`}</td>
                </tr>`)}</tbody>
            </table>`:o`<div class="center"><span class="spinner"></span></div>`}
      </div>
    `}_agentName(e){if(e==="hassio.local"||e==="backup.local")return this.t("bk_local");if(e==="cloud.cloud")return"Home Assistant Cloud";let[t,s]=e.split(".",2);return t==="hassio"&&s?s:t.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase())}_renderFiles(){let e=this.t,t=this._overview.data,s=t.files||{hogs:[],large_files:[]},i=!!this._working,a=t.disk.free>(t.database.size||0)*1.1;return o`
      <div class="card">
        <h2>${e("files_hogs")}</h2>
        ${s.hogs.length===0?o`<p class="muted">${e("files_none")}</p>`:s.hogs.map(n=>o`<div class="list-row">
                <div>
                  <div>${e(`hog_${n.key}`)} <span class=${n.safety==="safe"?"tag ok":"tag warn"}>${e(`safety_${n.safety}`)}</span></div>
                  <div class="muted small" style="overflow-wrap:anywhere">${n.paths.slice(0,3).join(", ")}${n.paths.length>3?" \u2026":""}</div>
                </div>
                <div class="num"><b>${_(n.size_bytes,this.lang)}</b></div>
                <button class="btn danger" ?disabled=${i}
                  @click=${()=>this._confirmHog(n)}>${e("delete")}</button>
              </div>`)}
      </div>

      <div class="card">
        <h2>${e("maintenance")}</h2>
        <div class="list-row">
          <div><div>${e("repack_title")}</div><div class="muted small">${e(a?"repack_desc":"repack_impossible")}</div></div>
          <div class="num">${t.reclaimable.repack?_(t.reclaimable.repack,this.lang):""}</div>
          <button class="btn" ?disabled=${i||!a} @click=${()=>this._previewAndClean(["repack"])}>${e("run")}</button>
        </div>
        ${t.is_hassio?o`<div class="list-row">
              <div><div>${e("docker_title")}</div><div class="muted small">${e("docker_desc")}</div></div>
              <div></div>
              <button class="btn" ?disabled=${i} @click=${()=>this._previewAndClean(["docker"])}>${e("run")}</button>
            </div>`:c}
      </div>

      ${s.large_files.length?o`<div class="card"><h2>${e("files_large")}</h2>
            <p class="muted small">${e("files_large_hint")}</p>
            ${s.large_files.map(n=>o`<div class="list-row"><div style="overflow-wrap:anywhere"><code>${n.path}</code></div><div></div><div class="num">${_(n.size_bytes,this.lang)}</div></div>`)}</div>`:c}
    `}_confirmHog(e){let t=this.t;this._dialog={title:t(`hog_${e.key}`),body:o`<p>${t("confirm_cleanup")}</p><ul>${e.paths.map(s=>o`<li><code>${s}</code></li>`)}</ul>
        <p><b>${t("confirm_total",{bytes:_(e.size_bytes,this.lang)})}</b></p>`,confirm:t("delete"),danger:!0,action:()=>this._clean(["files"],{hog_keys:[e.key]})}}_renderDialog(){let e=this._dialog;if(!e)return c;let t=()=>this._dialog=void 0;return o`<div class="scrim" @click=${s=>s.target===s.currentTarget&&t()}
      @keydown=${s=>s.key==="Escape"&&t()}>
      <div class="dialog" role="dialog" aria-modal="true" aria-label=${e.title}>
        <h3>${e.title}</h3>
        ${e.body}
        <div class="actions">
          <button class="btn" @click=${t}>${this.t("cancel")}</button>
          <button class=${e.danger?"btn primary danger":"btn primary"} autofocus
            @click=${()=>{t(),e.action()}}>${e.confirm}</button>
        </div>
      </div>
    </div>`}};ie(G,"properties",{hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_tab:{state:!0},_overview:{state:!0},_entities:{state:!0},_backups:{state:!0},_draft:{state:!0},_selected:{state:!0},_search:{state:!0},_domain:{state:!0},_onlyChanged:{state:!0},_onlyOrphans:{state:!0},_sort:{state:!0},_limit:{state:!0},_dialog:{state:!0},_detail:{state:!0},_view:{state:!0},_openGroups:{state:!0},_onlyAdvice:{state:!0},_settingsOpen:{state:!0},_settingsDraft:{state:!0},_toast:{state:!0},_working:{state:!0},_error:{state:!0}}),ie(G,"styles",Ke);customElements.get("storage-manager-panel")||customElements.define("storage-manager-panel",G);
