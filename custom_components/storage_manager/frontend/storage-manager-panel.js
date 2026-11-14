var tt=Object.defineProperty;var st=(o,e,t)=>e in o?tt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var ae=(o,e,t)=>st(o,typeof e!="symbol"?e+"":e,t);var W=globalThis,F=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),we=new WeakMap,H=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(F&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=we.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&we.set(t,e))}return e}toString(){return this.cssText}},$e=o=>new H(typeof o=="string"?o:o+"",void 0,ie),ne=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((s,a,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+o[i+1],o[0]);return new H(t,o,ie)},xe=(o,e)=>{if(F)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),a=W.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=t.cssText,o.appendChild(s)}},re=F?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return $e(t)})(o):o;var{is:at,defineProperty:it,getOwnPropertyDescriptor:nt,getOwnPropertyNames:rt,getOwnPropertySymbols:ot,getPrototypeOf:lt}=Object,K=globalThis,Ae=K.trustedTypes,ct=Ae?Ae.emptyScript:"",dt=K.reactiveElementPolyfillSupport,O=(o,e)=>o,oe={toAttribute(o,e){switch(e){case Boolean:o=o?ct:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Ee=(o,e)=>!at(o,e),Se={attribute:!0,type:String,converter:oe,reflect:!1,useDefault:!1,hasChanged:Ee};Symbol.metadata??=Symbol("metadata"),K.litPropertyMetadata??=new WeakMap;var $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),a=this.getPropertyDescriptor(e,s,t);a!==void 0&&it(this.prototype,e,a)}}static getPropertyDescriptor(e,t,s){let{get:a,set:i}=nt(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:a,set(n){let l=a?.call(this);i?.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Se}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;let e=lt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){let t=this.properties,s=[...rt(t),...ot(t)];for(let a of s)this.createProperty(a,t[a])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,a]of t)this.elementProperties.set(s,a)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let a=this._$Eu(t,s);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let a of s)t.unshift(re(a))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,s);if(a!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:oe).toAttribute(t,s.type);this._$Em=e,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(e,t){let s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let i=s.getPropertyOptions(a),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:oe;this._$Em=a;let l=n.fromAttribute(t,i.type);this[a]=l??this._$Ej?.get(a)??l,this._$Em=null}}requestUpdate(e,t,s,a=!1,i){if(e!==void 0){let n=this.constructor;if(a===!1&&(i=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??Ee)(i,t)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:a,wrapped:i},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[a,i]of s){let{wrapped:n}=i,l=this[a];n!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,i,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[O("elementProperties")]=new Map,$[O("finalized")]=new Map,dt?.({ReactiveElement:$}),(K.reactiveElementVersions??=[]).push("2.1.2");var ce=globalThis,ze=o=>o,Z=ce.trustedTypes,Te=Z?Z.createPolicy("lit-html",{createHTML:o=>o}):void 0,de="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+x,ht=`<${he}>`,B=document,U=()=>B.createComment(""),V=o=>o===null||typeof o!="object"&&typeof o!="function",pe=Array.isArray,Pe=o=>pe(o)||typeof o?.[Symbol.iterator]=="function",le=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,De=/-->/g,Be=/>/g,T=RegExp(`>|${le}(?:([^\\s"'>=/]+)(${le}*=${le}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ne=/'/g,Ce=/"/g,Me=/^(?:script|style|textarea|title)$/i,_e=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),r=_e(1),ue=_e(2),Tt=_e(3),v=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Le=new WeakMap,D=B.createTreeWalker(B,129);function Re(o,e){if(!pe(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Te!==void 0?Te.createHTML(e):e}var He=(o,e)=>{let t=o.length-1,s=[],a,i=e===2?"<svg>":e===3?"<math>":"",n=I;for(let l=0;l<t;l++){let c=o[l],_,u,h=-1,f=0;for(;f<c.length&&(n.lastIndex=f,u=n.exec(c),u!==null);)f=n.lastIndex,n===I?u[1]==="!--"?n=De:u[1]!==void 0?n=Be:u[2]!==void 0?(Me.test(u[2])&&(a=RegExp("</"+u[2],"g")),n=T):u[3]!==void 0&&(n=T):n===T?u[0]===">"?(n=a??I,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,_=u[1],n=u[3]===void 0?T:u[3]==='"'?Ce:Ne):n===Ce||n===Ne?n=T:n===De||n===Be?n=I:(n=T,a=void 0);let k=n===T&&o[l+1].startsWith("/>")?" ":"";i+=n===I?c+ht:h>=0?(s.push(_),c.slice(0,h)+de+c.slice(h)+x+k):c+x+(h===-2?l:k)}return[Re(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},G=class o{constructor({strings:e,_$litType$:t},s){let a;this.parts=[];let i=0,n=0,l=e.length-1,c=this.parts,[_,u]=He(e,t);if(this.el=o.createElement(_,s),D.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(a=D.nextNode())!==null&&c.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(let h of a.getAttributeNames())if(h.endsWith(de)){let f=u[n++],k=a.getAttribute(h).split(x),b=/([.?@])?(.*)/.exec(f);c.push({type:1,index:i,name:b[2],strings:k,ctor:b[1]==="."?Q:b[1]==="?"?Y:b[1]==="@"?J:C}),a.removeAttribute(h)}else h.startsWith(x)&&(c.push({type:6,index:i}),a.removeAttribute(h));if(Me.test(a.tagName)){let h=a.textContent.split(x),f=h.length-1;if(f>0){a.textContent=Z?Z.emptyScript:"";for(let k=0;k<f;k++)a.append(h[k],U()),D.nextNode(),c.push({type:2,index:++i});a.append(h[f],U())}}}else if(a.nodeType===8)if(a.data===he)c.push({type:2,index:i});else{let h=-1;for(;(h=a.data.indexOf(x,h+1))!==-1;)c.push({type:7,index:i}),h+=x.length-1}i++}}static createElement(e,t){let s=B.createElement("template");return s.innerHTML=e,s}};function N(o,e,t=o,s){if(e===v)return e;let a=s!==void 0?t._$Co?.[s]:t._$Cl,i=V(e)?void 0:e._$litDirective$;return a?.constructor!==i&&(a?._$AO?.(!1),i===void 0?a=void 0:(a=new i(o),a._$AT(o,t,s)),s!==void 0?(t._$Co??=[])[s]=a:t._$Cl=a),a!==void 0&&(e=N(o,a._$AS(o,e.values),a,s)),e}var q=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,a=(e?.creationScope??B).importNode(t,!0);D.currentNode=a;let i=D.nextNode(),n=0,l=0,c=s[0];for(;c!==void 0;){if(n===c.index){let _;c.type===2?_=new M(i,i.nextSibling,this,e):c.type===1?_=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(_=new X(i,this,e)),this._$AV.push(_),c=s[++l]}n!==c?.index&&(i=D.nextNode(),n++)}return D.currentNode=B,a}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},M=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,a){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),V(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==v&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Pe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(B.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=G.createElement(Re(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===a)this._$AH.p(t);else{let i=new q(a,this),n=i.u(this.options);i.p(t),this.T(n),this._$AH=i}}_$AC(e){let t=Le.get(e.strings);return t===void 0&&Le.set(e.strings,t=new G(e)),t}k(e){pe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,a=0;for(let i of e)a===t.length?t.push(s=new o(this.O(U()),this.O(U()),this,this.options)):s=t[a],s._$AI(i),a++;a<t.length&&(this._$AR(s&&s._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=ze(e).nextSibling;ze(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,a,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,a){let i=this.strings,n=!1;if(i===void 0)e=N(this,e,t,0),n=!V(e)||e!==this._$AH&&e!==v,n&&(this._$AH=e);else{let l=e,c,_;for(e=i[0],c=0;c<i.length-1;c++)_=N(this,l[s+c],t,c),_===v&&(_=this._$AH[c]),n||=!V(_)||_!==this._$AH[c],_===d?e=d:e!==d&&(e+=(_??"")+i[c+1]),this._$AH[c]=_}n&&!a&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Q=class extends C{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},Y=class extends C{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}},J=class extends C{constructor(e,t,s,a,i){super(e,t,s,a,i),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??d)===v)return;let s=this._$AH,a=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==d&&(s===d||a);a&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},X=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}},Oe={M:de,P:x,A:he,C:1,L:He,R:q,D:Pe,V:N,I:M,H:C,N:Y,U:J,B:Q,F:X},pt=ce.litHtmlPolyfillSupport;pt?.(G,M),(ce.litHtmlVersions??=[]).push("3.3.3");var Ie=(o,e,t)=>{let s=t?.renderBefore??e,a=s._$litPart$;if(a===void 0){let i=t?.renderBefore??null;s._$litPart$=a=new M(e.insertBefore(U(),i),i,void 0,t??{})}return a._$AI(o),a};var ge=globalThis,S=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return v}};S._$litElement$=!0,S.finalized=!0,ge.litElementHydrateSupport?.({LitElement:S});var _t=ge.litElementPolyfillSupport;_t?.({LitElement:S});(ge.litElementVersions??=[]).push("4.2.2");var L={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ue=o=>(...e)=>({_$litDirective$:o,values:e}),ee=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:jt}=Oe;var Ve=o=>o.strings===void 0;var ut={},Ge=(o,e=ut)=>o._$AH=e;var je=Ue(class extends ee{constructor(o){if(super(o),o.type!==L.PROPERTY&&o.type!==L.ATTRIBUTE&&o.type!==L.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ve(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===v||e===d)return e;let t=o.element,s=o.name;if(o.type===L.PROPERTY){if(e===t[s])return v}else if(o.type===L.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(s))return v}else if(o.type===L.ATTRIBUTE&&t.getAttribute(s)===e+"")return v;return Ge(o),e}});var We=["B","KB","MB","GB","TB"];function p(o,e="en"){if(o==null||Number.isNaN(o))return"\u2013";let t=Math.abs(o),s=0;for(;t>=1024&&s<We.length-1;)t/=1024,s+=1;let a=t>=100||s===0?0:t>=10?1:2,i=new Intl.NumberFormat(e,{maximumFractionDigits:a}).format(t);return`${o<0?"\u2212":""}${i} ${We[s]}`}function m(o,e="en"){return o==null?"\u2013":new Intl.NumberFormat(e).format(o)}function w(o,e="en"){return new Intl.NumberFormat(e,{style:"percent",maximumFractionDigits:0}).format(o)}function Fe(o,e,t="en"){if(!o)return e("never");let s=Math.round(Date.now()/1e3-o);if(s<60)return e("just_now");let a=new Intl.RelativeTimeFormat(t,{numeric:"auto"}),i=[[60,"second"],[60,"minute"],[24,"hour"],[7,"day"],[4.35,"week"],[12,"month"],[Number.POSITIVE_INFINITY,"year"]],n=s;for(let[l,c]of i){if(Math.abs(n)<l)return a.format(-Math.round(n),c);n/=l}return""}function A(o,e="en"){if(!o)return"\u2013";let t=typeof o=="number"?new Date(o*1e3):new Date(o);return new Intl.DateTimeFormat(e,{dateStyle:"medium",timeStyle:"short"}).format(t)}var gt=["default","7","3","1","drop","excluded"],te={7:7,3:3,1:1,drop:0,excluded:0},bt={sqlite:"SQLite",mysql:"MariaDB/MySQL",postgresql:"PostgreSQL"},R=150;function be(o,e,t){if(!o)return"\u2013";let s=86400/o;return s<60?e("rate_seconds",{n:Math.max(1,Math.round(s))}):s<3600?e("rate_minutes",{n:Math.round(s/60)}):e("rate_per_day",{n:m(o,t)})}var Ke=o=>class extends o{_tierLabel(e){let t=this.t,s=this._entities?.keep_days??this._overview?.data?.database?.keep_days;return e==="default"?t("tier_default",{days:s}):e==="excluded"?this._entities?.packages_available===!1?t("tier_excluded_needs_packages"):t("tier_excluded"):t(`tier_${e}`)}_reasonText(e,t){let s=this.t;if(!e)return"";let a=e.used||{},i={rate:be(t?.rows_24h,s,this.lang),share:w(e.facts?.attr_share||0,this.lang),attr_only:w(e.facts?.attr_only_share||0,this.lang),days:a.min_days||""};return s(`reason_${e.reason}`,i)}_noteChips(e){let t=this.t;if(!e)return d;let s=e.used||{},a=[];return e.protected&&a.push(r`<span class="tag ok">${t(`protected_${e.protected}`)}</span>`),(s.automations||s.scripts)&&a.push(r`<span class="tag" title=${t("note_automation_hint")}>${t("note_automation",{n:s.automations+s.scripts})}</span>`),s.min_days&&a.push(r`<span class="tag">${t("note_dashboard",{days:s.min_days})}</span>`),s.energy&&a.push(r`<span class="tag">${t("note_energy")}</span>`),e.facts?.state_class&&a.push(r`<span class="tag" title=${t("note_statistics_hint")}>${t("note_statistics")}</span>`),e.facts?.entity_category==="diagnostic"&&a.push(r`<span class="tag">${t("note_diagnostic")}</span>`),a}_integrationName(e){return this.hass?.localize?.(`component.${e}.title`)||e.replace(/_/g," ").replace(/^\w/,s=>s.toUpperCase())}_rowById(e){return this._entities?.rows.find(t=>t.entity_id===e)}_accept(e){let t=new Map(this._draft);for(let s of e){let a=this._rowById(s),i=a?.advice?.action;!a||!i||a.excluded_by_yaml||(i===this._original(a)?t.delete(s):t.set(s,{value:i,row:a}))}this._draft=t}async _dismiss(e,t=!1){try{await this._ws("dismiss",{entity_ids:e,undo:t}),await this._loadEntities()}catch(s){this._showToast(this.t("error",{msg:s.message}))}}async _openDetail(e){this._detail={entity_id:e,loading:!0};try{this._detail=await this._ws("entity_detail",{entity_id:e})}catch(t){this._detail=void 0,this._showToast(this.t("error",{msg:t.message}))}}_renderDatabase(){let e=this.t,t=this._overview,s=t.data.database,a=t.data.recorder,i=this._entities,n=s.analysis_running||this._working==="analyze";return r`
        ${a.restart_required?r`<div class="banner"><ha-icon icon="mdi:restart-alert"></ha-icon>
              <div class="txt">${e("restart_banner",{n:a.pending_restart.length})}</div>
              <button class="btn primary" @click=${this._confirmRestart}>${e("restart")}</button></div>`:d}
        ${a.unwritten.length&&!a.packages.available?r`<div class="banner"><ha-icon icon="mdi:package-variant"></ha-icon>
              <div class="txt">${e("packages_banner")}</div>
              <button class="btn" @click=${()=>this._navigate("/config/repairs")}>${e("packages_open")}</button></div>`:d}
        ${a.core_entity_options==="writable"?r`<div class="banner info"><ha-icon icon="mdi:new-box"></ha-icon>
              <div class="txt">${e("core_options_banner")}</div></div>`:d}
        ${t.gui_recorder&&!t.gui_recorder_imported?r`<div class="banner info"><ha-icon icon="mdi:import"></ha-icon>
              <div class="txt">${e("gui_recorder_banner")}</div>
              <button class="btn" @click=${this._importGuiRecorder}>${e("gui_recorder_import")}</button></div>`:d}

        <div class="grid2">
          <div class="card">
            <div class="kpis">
              <div class="kpi"><div class="v">${p(s.size,this.lang)}</div><div class="l">${e("db_size")}</div></div>
              <div class="kpi"><div class="v">${bt[s.dialect]||s.dialect||"\u2013"}</div><div class="l">${e("db_engine")}</div></div>
              <div class="kpi"><div class="v">${e("days",{n:s.keep_days})}</div><div class="l">${e("db_keep")}</div></div>
              <div class="kpi"><div class="v">${n?r`<span class="spinner" style="width:18px;height:18px"></span>`:Fe(s.analysis_at,e,this.lang)}</div>
                <div class="l">${e("db_analysis")}</div></div>
            </div>
            ${s.obsolete?.states||s.obsolete?.events?r`<div class="row obsolete">
                  <span class="small">${e("obsolete",{n:m((s.obsolete.states||0)+(s.obsolete.events||0),this.lang),bytes:p(s.obsolete.bytes,this.lang),days:s.obsolete.keep_days})}</span>
                  <span class="spacer"></span>
                  <button class="btn" ?disabled=${!!this._working} @click=${()=>this._previewAndClean(["purge"])}>${e("obsolete_purge")}</button>
                </div>`:d}
            <div class="row" style="margin-top:12px">
              <span class="muted small">${i?.estimated_sizes===!1?e("db_calibrated"):i?.dialect==="mysql"&&i?.calibrated?e("db_estimated_innodb"):i?.scaled_to_file?e("db_scaled"):e("db_estimated")}
                ${a.yaml_filters?.uses_include?r` <b>${e("yaml_include_warning")}</b>`:d}</span>
              <span class="spacer"></span>
              <button class="btn" ?disabled=${n||!!this._working} @click=${this._analyze}>${e("analyze")}</button>
            </div>
            ${this._renderAnalysisProgress(s)}
          </div>
          ${this._renderEffect(i)}
        </div>

        ${i?i.analysis_at?r`${this._renderInbox(i)} ${this._renderExplorer(i)}`:r`<div class="card"><p class="muted">${e("analysis_needed")}</p></div>`:r`<div class="card"><div class="center"><span class="spinner"></span></div></div>`}

        ${this._healthCard("database")}
        ${this._renderSettings(i)}
        ${i?.events?.length?r`<div class="card"><h2>${e("events_title")}</h2>
              ${i.events.slice(0,8).map(l=>r`<div class="list-row"><div><code>${l.event_type}</code></div><div></div><div class="num">${m(l.rows,this.lang)}</div></div>`)}</div>`:d}
        ${this._renderDetail()}
      `}_renderInbox(e){let t=this.t,s=e.inbox||[],a=n=>n.entity_ids||[n.entity_id],i=s.flatMap(a).filter(n=>!this._draft.has(n));return r`<div class="card">
        <h2>${t("inbox_title")}
          <span class="spacer"></span>
          ${s.length?r`<span class="muted small">${t("inbox_summary",{n:s.length,bytes:p(e.inbox_saving,this.lang)})}</span>`:d}
        </h2>
        ${s.length===0?r`<p class="muted">${t("inbox_empty")}</p>`:r`
              <p class="muted small" style="margin-top:-4px">${t("inbox_hint")}</p>
              ${s.map(n=>this._renderInboxItem(n))}
              <div class="row" style="margin-top:12px">
                ${e.dismissed_count?r`<button class="btn" @click=${()=>this._dismiss([],!0)}>${t("inbox_show_dismissed",{n:e.dismissed_count})}</button>`:d}
                <span class="spacer"></span>
                <button class="btn primary" ?disabled=${!i.length}
                  @click=${()=>this._accept(i)}>${t("inbox_accept_all",{n:i.length})}</button>
              </div>`}
        ${!s.length&&e.dismissed_count?r`<button class="btn" @click=${()=>this._dismiss([],!0)}>${t("inbox_show_dismissed",{n:e.dismissed_count})}</button>`:d}
      </div>`}_toggleGroup(e){let t=new Set(this._openGroups||[]);t.has(e)?t.delete(e):t.add(e),this._openGroups=t}_renderInboxItem(e){let t=this.t,s=this._rowById(e.entity_id),a=e.entity_ids||[e.entity_id],i=a.every(c=>this._draft.get(c)?.value===e.action),n=this._openGroups?.has(`inbox:${e.group}`),l=e.entity_ids?r`<button class="linklike t" @click=${()=>this._toggleGroup(`inbox:${e.group}`)}>
            ${t("inbox_group_title",{integration:this._integrationName(e.integration),n:e.count})}</button>`:r`<button class="linklike t" @click=${()=>this._openDetail(e.entity_id)}>${e.name}</button>`;return r`<div class="rec ${e.conflict?"conflict":""}">
        <div class="ico"><ha-icon icon=${e.conflict?"mdi:alert-outline":e.entity_ids?"mdi:format-list-group":"mdi:lightbulb-on-outline"}></ha-icon></div>
        <div>
          ${l}
          <div class="muted small">${e.entity_ids?t(`group_reason_${e.reason}`,{n:e.count}):this._reasonText(e,s)}</div>
          ${e.hint?r`<div class="small hint">${t(`hint_${e.hint}`)}</div>`:d}
          <div class="chips">
            <span class="tag ${e.conflict?"warn":"ok"}">→ ${this._tierLabel(e.action)}</span>
            ${this._noteChips({...e,protected:null})}
          </div>
          ${e.entity_ids&&n?r`<ul class="group-members">${e.entity_ids.map(c=>r`<li><button class="linklike" @click=${()=>this._openDetail(c)}>${this._rowById(c)?.name||c}</button></li>`)}</ul>`:d}
        </div>
        <div class="act row">
          ${e.saving?r`<span class="amount">${p(e.saving,this.lang)}</span>`:d}
          ${i?r`<span class="tag ok">${t("inbox_in_draft")}</span>`:r`<button class="btn" @click=${()=>this._dismiss(a)}>${t("inbox_dismiss")}</button>
                <button class="btn primary" @click=${()=>this._accept(a)}>${t("inbox_accept")}</button>`}
        </div>
      </div>`}_renderEffect(e){let t=this.t,s=(e?.size_history||[]).filter(n=>n[2]>0),a=(e?.changes||[]).map(n=>new Date(n).getTime()/1e3),i=t("effect_waiting");if(s.length>=2&&a.length){let n=a[0],l=[...s].reverse().find(_=>_[0]<=n)||s[0],c=s[s.length-1];if(c[0]>l[0]){let _=(c[2]-l[2])/l[2];i=t("effect_since_change",{delta:`${_<=0?"\u2212":"+"}${w(Math.abs(_),this.lang)}`,bytes:p(Math.abs(c[2]-l[2]),this.lang)})}}else s.length>=2&&(i=t("effect_no_changes"));return r`<div class="card">
        <h2>${t("effect_title")}</h2>
        ${s.length>=2?this._sizeChart(s,a):r`<p class="muted small">${t("effect_need_samples")}</p>`}
        <p class="small" style="margin:8px 0 0">${i}</p>
      </div>`}_sizeChart(e,t){let i=e.map(b=>b[0]),n=e.map(b=>b[2]),l=Math.min(...i),c=Math.max(...i,l+1),_=Math.max(...n)*1.05,u=b=>(b-l)/(c-l)*320,h=b=>90-b/_*90,f=e.map((b,g)=>`${g?"L":"M"}${u(b[0]).toFixed(1)},${h(b[2]).toFixed(1)}`).join(" "),k=`${f} L${u(c).toFixed(1)},90 L0,90 Z`;return r`<svg class="chart" viewBox="0 0 ${320} ${104}" role="img" aria-label=${this.t("effect_title")}>
        ${ue`<path d=${k} fill="var(--sm-c1)" opacity="0.12"></path>
          <path d=${f} fill="none" stroke="var(--sm-c1)" stroke-width="2"></path>
          ${t.filter(b=>b>=l&&b<=c).map(b=>ue`<line x1=${u(b)} x2=${u(b)} y1="0" y2=${90} stroke="var(--warning-color, #ffa600)" stroke-dasharray="3 3"></line>`)}
          <text x="0" y=${102} font-size="10" fill="var(--secondary-text-color)">${A(l,this.lang)}</text>
          <text x=${320} y=${102} font-size="10" text-anchor="end" fill="var(--secondary-text-color)">${p(n[n.length-1],this.lang)}</text>`}
      </svg>`}_renderExplorer(e){let t=this.t,s=this._view||"top";return r`<div class="card">
        <div class="row" style="margin-bottom:12px">
          <div class="segmented" role="tablist">
            ${["top","groups","all"].map(a=>r`<button role="tab" aria-selected=${a===s?"true":"false"}
                @click=${()=>{this._view=a,this._limit=R}}>${t(`view_${a}`)}</button>`)}
          </div>
          <span class="spacer"></span>
          <span class="muted small">${t("view_total",{n:m(e.rows.length,this.lang),bytes:p(e.total_bytes,this.lang)})}</span>
        </div>
        ${s==="groups"?this._renderGroups(e):s==="all"?this._renderAll(e):this._renderTop(e)}
      </div>`}_renderTop(e){let t=this.t,s=e.rows.filter(n=>n.top||this._draft.has(n.entity_id)),a=s.reduce((n,l)=>Math.max(n,l.est_bytes),1),i=e.total_bytes?1-e.rest_bytes/e.total_bytes:0;return r`
        <p class="muted small" style="margin-top:0">${t("top_hint",{n:s.length,share:w(i,this.lang)})}</p>
        ${this._table(s,a)}
        ${e.rest_count?r`<div class="restline">
              <span>${t("top_rest",{n:m(e.rest_count,this.lang),bytes:p(e.rest_bytes,this.lang),share:w(e.total_bytes?e.rest_bytes/e.total_bytes:0,this.lang)})}</span>
              <button class="btn" @click=${()=>this._view="all"}>${t("top_show_all")}</button>
            </div>`:d}`}_groups(e){let t=new Map;for(let s of e.rows){let a=s.integration||s.domain;t.has(a)||t.set(a,{key:a,rows:[],bytes:0,advice:[],saving:0});let i=t.get(a);i.rows.push(s),i.bytes+=s.est_bytes,s.advice?.action&&(i.advice.push(s.entity_id),i.saving+=s.advice.saving||0)}return[...t.values()].sort((s,a)=>a.bytes-s.bytes)}_renderGroups(e){let t=this.t,s=this._groups(e),a=this._openGroups||new Set,i=e.total_bytes||1;return r`${s.map(n=>{let l=a.has(n.key),c=n.rows.reduce((_,u)=>Math.max(_,u.est_bytes),1);return r`<div class="group">
          <div class="group-head">
            <button class="linklike group-toggle" aria-expanded=${l?"true":"false"} @click=${()=>{let _=new Set(a);l?_.delete(n.key):_.add(n.key),this._openGroups=_}}>
              <span class="chev">${l?"\u25BE":"\u25B8"}</span>
              <span><b>${this._integrationName(n.key)}</b> <span class="muted small">${t("group_count",{n:n.rows.length})}</span></span>
            </button>
            <span class="spacer"></span>
            ${n.advice.length?r`<button class="btn" @click=${()=>this._accept(n.advice)}>${t("group_accept",{n:n.advice.length,bytes:p(n.saving,this.lang)})}</button>`:d}
            <span class="num"><b>${p(n.bytes,this.lang)}</b></span>
          </div>
          <div class="bar"><div style="width:${Math.max(n.bytes/i*100,.5)}%;background:var(--sm-c1)"></div></div>
          ${l?this._table(n.rows.slice(0,R),c):d}
        </div>`})}`}_filteredRows(e){let t=(this._search||"").trim().toLowerCase(),s=e.filter(a=>this._domain&&a.domain!==this._domain||this._onlyOrphans&&!a.orphan||this._onlyChanged&&!this._draft.has(a.entity_id)&&a.tier==="default"&&!a.excluded||this._onlyAdvice&&!a.advice?.action?!1:t?[a.entity_id,a.name,a.integration,a.area,a.device].some(i=>(i||"").toLowerCase().includes(t)):!0);return this._sort==="rate"?s=[...s].sort((a,i)=>i.rows_24h-a.rows_24h):this._sort==="name"&&(s=[...s].sort((a,i)=>(a.name||"").localeCompare(i.name||"",this.lang))),s}_renderAll(e){let t=this.t,s=[...new Set(e.rows.map(l=>l.domain))].sort(),a=this._filteredRows(e.rows),i=a.reduce((l,c)=>Math.max(l,c.est_bytes),1),n=a.slice(0,this._limit);return r`
        <div class="filters">
          <input type="search" placeholder=${t("search")} .value=${this._search}
            @input=${l=>{this._search=l.target.value,this._limit=R}} />
          <select @change=${l=>{this._domain=l.target.value,this._limit=R}} aria-label=${t("all_domains")}>
            <option value="">${t("all_domains")}</option>
            ${s.map(l=>r`<option value=${l} ?selected=${l===this._domain}>${l}</option>`)}
          </select>
          <select @change=${l=>this._sort=l.target.value} aria-label="sort">
            ${["size","rate","name"].map(l=>r`<option value=${l} ?selected=${l===this._sort}>${t(`sort_${l}`)}</option>`)}
          </select>
          <button class="chip" aria-pressed=${this._onlyAdvice?"true":"false"}
            @click=${()=>this._onlyAdvice=!this._onlyAdvice}>${t("filter_advice")}</button>
          <button class="chip" aria-pressed=${this._onlyChanged?"true":"false"}
            @click=${()=>this._onlyChanged=!this._onlyChanged}>${t("filter_changed")}</button>
          <button class="chip" aria-pressed=${this._onlyOrphans?"true":"false"}
            @click=${()=>this._onlyOrphans=!this._onlyOrphans}>${t("filter_orphans")}</button>
        </div>
        ${this._selected.size?r`<div class="banner info" style="margin-bottom:8px">
              <div class="txt">${t("selected",{n:this._selected.size})}</div>
              ${this._tierSelect(null,l=>this._setValue(e.rows.filter(c=>this._selected.has(c.entity_id)),l),t("set_for_selection"))}
              <button class="btn" @click=${()=>this._selected=new Set}>${t("clear_selection")}</button>
            </div>`:d}
        ${this._table(n,i,!0)}
        ${a.length>this._limit?r`<div class="row" style="justify-content:center;margin-top:12px">
              <button class="btn" @click=${()=>this._limit+=R}>${t("show_more",{n:Math.min(R,a.length-this._limit)})}</button></div>`:d}`}_table(e,t,s=!1){let a=this.t,i=s&&e.length>0&&e.every(n=>this._selected.has(n.entity_id));return r`<table class="responsive ${s?"":"noselect"}">
        <thead><tr>
          ${s?r`<th style="width:28px"><input type="checkbox" .checked=${i} aria-label="select all"
                @change=${n=>{let l=new Set(this._selected);e.forEach(c=>n.target.checked?l.add(c.entity_id):l.delete(c.entity_id)),this._selected=l}} /></th>`:d}
          <th>${a("col_entity")}</th>
          <th class="num">${a("col_size")}</th>
          <th class="num">${a("col_rate")}</th>
          <th>${a("col_retention")}</th>
        </tr></thead>
        <tbody>${e.map(n=>this._row(n,t,s))}</tbody>
      </table>`}_row(e,t,s){let a=this.t,i=this._draft.has(e.entity_id),n=[e.entity_id,e.integration,e.area].filter(Boolean).join(" \xB7 "),l=e.advice,c=l?.action&&this._effective(e)!==l.action;return r`<tr class=${i?"changed":""}>
        ${s?r`<td class="c-check"><input type="checkbox" .checked=${this._selected.has(e.entity_id)} aria-label=${e.entity_id}
              @change=${_=>{let u=new Set(this._selected);_.target.checked?u.add(e.entity_id):u.delete(e.entity_id),this._selected=u}} /></td>`:d}
        <td class="c-ent ent">
          <div class="n"><button class="linklike" @click=${()=>this._openDetail(e.entity_id)}>${e.name}</button>
            ${e.orphan?r`<span class="tag bad">${a("orphan")}</span>`:d}
            ${e.excluded_by_yaml?r`<span class="tag">${a("excluded_by_yaml")}</span>`:d}
            ${e.excluded&&!e.recorded?r`<span class="tag ok">${a("tier_excluded")}</span>`:d}
          </div>
          <div class="i">${n}</div>
          <div class="chips">
            ${c?r`<button class="tag ${l.conflict?"warn":"ok"} tagbtn" title=${this._reasonText(l,e)}
                  @click=${()=>this._accept([e.entity_id])}>${l.conflict?"\u26A0 ":""}${a("suggested",{tier:this._tierLabel(l.action)})}</button>`:d}
            ${this._noteChips(l)}
          </div>
        </td>
        <td class="c-size num">${e.est_bytes?p(e.est_bytes,this.lang):"\u2013"}
          <div class="sizebar" style="width:${Math.max(e.est_bytes/t*100,1)}%"></div></td>
        <td class="c-rate num">${be(e.rows_24h,a,this.lang)}</td>
        <td class="c-tier">${this._tierSelect(e,_=>this._setValue([e],_))}</td>
      </tr>`}_tierSelect(e,t,s){let a=this.t,i=e?this._effective(e):"";return r`<select aria-label=${a("col_retention")} ?disabled=${e?.excluded_by_yaml} .value=${je(i)}
        @change=${n=>{t(n.target.value),e||(n.target.value="")}}>
        ${s?r`<option value="" selected disabled>${s}</option>`:d}
        ${gt.map(n=>r`<option value=${n} ?selected=${n===i}>${this._tierLabel(n)}</option>`)}
      </select>`}_settingsState(e){return this._settingsDraft||(this._settingsDraft={filters:JSON.parse(JSON.stringify(e.filters||{})),settings:{...e.settings||{}}}),this._settingsDraft}_renderSettings(e){let t=this.t,s=this._overview.data.recorder,a=!!this._settingsOpen,i=s.exclusion_orphans||{entities:[],domains:[],entity_globs:[]},n=i.entities.length+i.domains.length+i.entity_globs.length;return r`<div class="card">
        <h2><button class="linklike group-toggle" aria-expanded=${a?"true":"false"}
            @click=${()=>{this._settingsOpen=!a,this._settingsDraft=void 0}}>
          <span class="chev">${a?"\u25BE":"\u25B8"}</span>${t("settings_title")}</button>
          <span class="spacer"></span>
          ${n?r`<span class="tag warn">${t("orphans_badge",{n})}</span>`:d}
        </h2>
        ${a?this._settingsBody(s,e,i,n):r`<p class="muted small" style="margin:0">${t("settings_hint")}</p>`}
      </div>`}_settingsBody(e,t,s,a){let i=this.t,n=this._settingsState(e),l=e.locked_settings||{},c=e.effective_settings||{},_=()=>this._settingsDraft={...n},u=(g,E,z,P)=>{let y=g in l,se=y?l[g]:n.settings[g]??"";return r`<label class="field">
          <span>${i(`setting_${g}`)}</span>
          <span class="row">
            <input type="number" min=${E} max=${z} .value=${String(se)} placeholder=${String(c[g]??"")}
              ?disabled=${y}
              @change=${ve=>{let et=ve.target.value===""?null:Number(ve.target.value);n.settings={...n.settings,[g]:et},_()}} />
            <span class="muted small">${P}</span>
          </span>
          <span class="muted small">${i(y?"setting_locked":`setting_${g}_hint`)}</span>
        </label>`},h=g=>{let E=g in l,z=E?l[g]:n.settings[g]??c[g];return r`<label class="field toggle">
          <input type="checkbox" .checked=${!!z} ?disabled=${E}
            @change=${P=>{n.settings={...n.settings,[g]:P.target.checked},_()}} />
          <span><span>${i(`setting_${g}`)}</span><br />
            <span class="muted small">${i(E?"setting_locked":`setting_${g}_hint`)}</span></span>
        </label>`},f=[...new Set((t?.rows||[]).map(g=>g.domain))].sort(),k=(t?.events||[]).map(g=>g.event_type),b=(g,E)=>{let z=n.filters[g]||[],P=`sm-${g}`;return r`<div class="field">
          <span>${i(`filter_${g}`)}</span>
          <div class="chips">
            ${z.map(y=>r`<span class="tag">${y}
              <button class="tagx" aria-label=${i("remove")} @click=${()=>{n.filters={...n.filters,[g]:z.filter(se=>se!==y)},_()}}>✕</button></span>`)}
          </div>
          <span class="row">
            <input type="text" list=${P} placeholder=${i(`filter_${g}_placeholder`)}
              @keydown=${y=>{y.key!=="Enter"||!y.target.value.trim()||(n.filters={...n.filters,[g]:[...new Set([...z,y.target.value.trim()])]},y.target.value="",_())}} />
            <datalist id=${P}>${E.map(y=>r`<option value=${y}></option>`)}</datalist>
          </span>
          <span class="muted small">${i(`filter_${g}_hint`)}</span>
        </div>`};return r`
        <p class="muted small" style="margin-top:0">${i("settings_restart_hint")}</p>
        <h4 class="sub">${i("settings_global")}</h4>
        <div class="fields">
          ${u("purge_keep_days",1,3650,i("unit_days"))}
          ${u("commit_interval",0,30,i("unit_seconds"))}
          ${h("auto_purge")}
          ${h("auto_repack")}
        </div>
        <h4 class="sub">${i("settings_filters")}</h4>
        <div class="fields">
          ${b("domains",f)}
          ${b("entity_globs",[])}
          ${b("event_types",k)}
        </div>
        ${a?r`<div class="banner" style="margin-top:12px">
              <div class="txt">${i("orphans_text",{n:a})}
                <div class="muted small">${[...s.entities,...s.domains,...s.entity_globs].slice(0,8).join(", ")}</div></div>
              <button class="btn" @click=${this._removeExclusionOrphans}>${i("orphans_remove")}</button>
            </div>`:d}
        <div class="row" style="margin-top:16px">
          <span class="spacer"></span>
          <button class="btn" @click=${()=>this._settingsDraft=void 0}>${i("discard")}</button>
          <button class="btn primary" ?disabled=${!!this._working} @click=${this._saveSettings}>${i("settings_save")}</button>
        </div>`}async _saveSettings(){let e=this._settingsDraft;if(!e)return;let t=this._overview.data.recorder.locked_settings||{},s=Object.fromEntries(Object.entries(e.settings).filter(([a,i])=>!(a in t)&&i!==""&&i!==void 0));this._working="settings";try{let a=await this._ws("settings",{filters:e.filters,settings:s});this._showToast(a.packages_missing?this.t("packages_banner"):this.t("settings_saved")),this._settingsDraft=void 0,await Promise.all([this._loadOverview(),this._loadEntities()])}catch(a){this._showToast(this.t("error",{msg:a.message}))}finally{this._working=null}}async _removeExclusionOrphans(){try{let e=await this._ws("remove_exclusion_orphans");this._showToast(this.t("orphans_removed",{n:e.removed})),this._settingsDraft=void 0,await Promise.all([this._loadOverview(),this._loadEntities()])}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_renderDetail(){let e=this._detail;if(!e)return d;let t=this.t,s=()=>this._detail=void 0,a=this._rowById(e.entity_id),i=e.loading?r`<div class="center"><span class="spinner"></span></div>`:this._detailBody(e,a);return r`<div class="scrim sheet-scrim" @click=${n=>n.target===n.currentTarget&&s()}
        @keydown=${n=>n.key==="Escape"&&s()}>
        <aside class="sheet" role="dialog" aria-modal="true" aria-label=${a?.name||e.entity_id}>
          <div class="sheet-head">
            <div>
              <h3>${a?.name||e.entity_id}</h3>
              <div class="muted small">${e.entity_id}</div>
            </div>
            <button class="icon-btn" aria-label=${t("cancel")} @click=${s}>✕</button>
          </div>
          ${i}
        </aside>
      </div>`}_detailBody(e,t){let s=this.t,a=e.info||{},i=e.advice,n=e.usage||{},l=Math.max(...e.daily,1),c=t?this._effective(t):"default",_=(n.automations||[]).map(h=>this.hass.states[h]?.attributes?.friendly_name||h),u=(n.scripts||[]).map(h=>this.hass.states[h]?.attributes?.friendly_name||h);return r`
        <div class="kpis" style="margin-bottom:16px">
          <div class="kpi"><div class="v">${p(a.est_bytes||0,this.lang)}</div><div class="l">${s("col_size")}</div></div>
          <div class="kpi"><div class="v">${m(a.rows||0,this.lang)}</div><div class="l">${s("col_rows")}</div></div>
          <div class="kpi"><div class="v">${be(a.rows_24h,s,this.lang)}</div><div class="l">${s("detail_rate")}</div></div>
        </div>

        <h4>${s("detail_daily",{n:e.days})}</h4>
        <div class="spark" role="img" aria-label=${s("detail_daily",{n:e.days})}>
          ${e.daily.map((h,f)=>r`<div title=${`${m(h,this.lang)}`} style="height:${Math.max(h/l*100,h?3:0)}%"
            class=${f===e.daily.length-1?"today":""}></div>`)}
        </div>

        ${e.sample_rows?r`<p class="small">${s("detail_attr_only",{n:m(e.sample_attr_only,this.lang),total:m(e.sample_rows,this.lang)})}</p>`:d}
        ${(e.drivers||[]).length?r`<h4>${s("detail_drivers")}</h4>
              ${e.drivers.map(h=>r`<div class="attr"><code>${h.name}</code>
                  ${h.driver?r`<span class="tag warn">${s("detail_driver")}</span>`:d}
                  <span class="spacer"></span>
                  <span class="muted small">${s("detail_driver_values",{share:w(h.share,this.lang),rate:w(h.change_rate,this.lang),bytes:p(h.bytes,this.lang)})}</span></div>`)}
              <p class="muted small">${s("detail_drivers_hint")}</p>`:d}
        ${e.attributes.length?r`<h4>${s("detail_attributes",{n:m(e.attribute_variants,this.lang)})}</h4>
              ${e.attributes.map(h=>r`<div class="attr"><code>${h.name}</code><span class="spacer"></span><span class="muted small">${p(h.bytes,this.lang)}</span></div>`)}
              <p class="muted small">${s("detail_attributes_hint")}</p>`:d}

        <h4>${s("detail_usage")}</h4>
        <ul class="usage">
          ${_.length?r`<li>${s("detail_automations")}: ${_.join(", ")}</li>`:d}
          ${u.length?r`<li>${s("detail_scripts")}: ${u.join(", ")}</li>`:d}
          ${(n.helpers||[]).map(h=>r`<li>${s("detail_helper",{title:h.title,domain:h.domain})}
            ${["statistics","history_stats","filter"].includes(h.domain)?r`<span class="tag ok">${s("protected_history_reader")}</span>`:d}</li>`)}
          ${(n.dashboards||[]).map(h=>r`<li>${s("detail_dashboard",{title:h.dashboard,card:h.card,days:h.days})}</li>`)}
          ${n.energy?r`<li>${s("note_energy")}</li>`:d}
          ${!_.length&&!u.length&&!(n.helpers||[]).length&&!(n.dashboards||[]).length&&!n.energy?r`<li class="muted">${s("detail_unused")}</li>`:d}
        </ul>
        <p class="muted small">${s("detail_usage_limits")}</p>

        ${i?.action?r`<div class="banner ${i.conflict?"":"info"}" style="margin:12px 0">
              <div class="txt"><b>${s("suggested",{tier:this._tierLabel(i.action)})}</b><br />${this._reasonText(i,t)}
                ${i.saving?r`<br /><span class="muted small">${s("detail_saving",{bytes:p(i.saving,this.lang)})}</span>`:d}</div>
              <button class="btn primary" @click=${()=>this._accept([e.entity_id])}>${s("inbox_accept")}</button>
            </div>`:d}

        <h4>${s("col_retention")}</h4>
        ${t?this._tierSelect(t,h=>this._setValue([t],h)):d}
        <p class="small">${s(`impact_${c}`,{days:te[c]??e.keep_days})}</p>
      `}};var Ze={ok:"mdi:check-circle",warning:"mdi:alert",error:"mdi:alert-circle",info:"mdi:information-outline",unknown:"mdi:help-circle-outline"},ft=["backup_unavailable","backup_no_location","backup_failed","backup_not_verified"],qe=o=>class extends o{async _loadHealth(e=!1){try{this._health=await this._ws("health",{force:e})}catch(t){this._showToast(this.t("error",{msg:t.message}))}}async _attest(e,t){try{this._health=await this._ws("attest",{key:e,done:t})}catch(s){this._showToast(this.t("error",{msg:s.message}))}}async _checkIntegrity(){this._working="safety_integrity";try{let e=await this._ws("check_integrity");this._showToast(this.t(`integrity_${e.result}`)),await Promise.all([this._loadOverview(),this._loadHealth(!0)])}catch(e){this._showToast(this.t("error",{msg:e.message}))}finally{this._working=null}}async _stopAnalysis(){try{await this._ws("stop_analysis")}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_busyText(e){if(!e)return"";let[t,s]=String(e).split(":"),a=this.t(`busy_${t}`),i=a===`busy_${t}`?t:a;return s!==void 0?`${i} ${s} %`:i}_renderAnalysisProgress(e){let t=e.analysis_progress;if(!e.analysis_running||!t)return d;let s=this.t,a=Math.round((t.share||0)*100);return r`<div class="progress-row">
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow=${a}>
          <div style="width:${a}%"></div>
        </div>
        <span class="muted small">${s(`phase_${t.phase}`)} · ${a} %</span>
        <button class="btn" @click=${this._stopAnalysis}>${s("stop")}</button>
      </div>`}_repackPlanText(e){let t=this.t;if(!e)return t("repack_desc");let s={need:p(e.need,this.lang),free:p(e.disk_free,this.lang),ram:p(e.options?.memory?.need_ram,this.lang),ram_free:e.ram_free===null||e.ram_free===void 0?"?":p(e.ram_free,this.lang),mem_need:p(e.options?.memory?.need,this.lang),gain:p(e.free_pages_bytes,this.lang),live:p(e.live_bytes,this.lang),missing:p(e.missing_bytes,this.lang),reduce:p(e.reduce_bytes,this.lang)};return e.free_pages_bytes?e.method?t(`repack_plan_${e.method}`,s):t("repack_plan_none",s):t(e.can_convert?"repack_convert_only":"repack_nothing")}_safetyItems(e){if(!e)return d;let t=this.t,s=[],a=e.space,i={need:p(a.need,this.lang),free:p(a.free,this.lang),work:p(a.work,this.lang),backup:p(a.backup,this.lang)},n=a.backup?` ${t(a.backup_source==="previous"?"safety_space_split_previous":"safety_space_split_file",i)}`:"";s.push(r`<li class=${a.ok?"":"bad"}>${t(a.ok?"safety_space_ok":"safety_space_low",i)}${n}</li>`),e.integrity!=="unsupported"&&s.push(r`<li>${t(`safety_integrity_${e.integrity}`)}</li>`);let l=e.backup;return s.push(r`<li class=${l.action==="unavailable"?"bad":""}>${t(`safety_backup_${l.action}`,{name:l.name||"",date:l.date?A(l.date,this.lang):"",agents:(l.agents||[]).map(c=>this._agentName(c)).join(", ")})}</li>`),r`<h4>${t("safety_title")}</h4><ul class="safety">${s}</ul>`}_handleBlocked(e,t){let s=this.t,a=ft.includes(e.reason);this._dialog={title:s("blocked_title"),body:r`<p>${s(`blocked_${e.reason}`,{detail:e.detail||"",need:p(Number(e.detail)||0,this.lang)})}</p>
          ${e.detail&&e.reason!=="no_space"?r`<p class="muted small"><code>${e.detail}</code></p>`:d}
          ${a?r`<p class="muted small">${s("blocked_without_backup_hint")}</p>`:d}`,confirm:s(a?"continue_without_backup":"ok"),danger:a,action:a?()=>t():()=>{}}}_checkRow(e,t=d){let s=this.t,a={...e.values||{}};for(let i of["bytes","need","free","typical","per_day","before_per_day"])typeof a[i]=="number"&&(a[i]=p(a[i],this.lang));a.at&&(a.at=A(a.at,this.lang)),a.date&&(a.date=A(a.date,this.lang)),Array.isArray(a.agents)&&(a.agents=a.agents.map(i=>this._agentName(i)).join(", ")),typeof a.share=="number"&&(a.share=`${Math.round(a.share*100)} %`),typeof a.count=="number"&&(a.count=m(a.count,this.lang));for(let[i,n]of Object.entries(a))n==null&&(a[i]="\u2013");return r`<div class="check ${e.status}">
        <ha-icon icon=${Ze[e.status]||Ze.unknown}></ha-icon>
        <div class="txt">
          <div>${s(`check_${e.key}`)}</div>
          <div class="muted small">${s(`check_${e.key}_${e.status}`,a)}</div>
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
        ${s.checks.map(a=>this._checkRow(a,this._checkAction(a)))}
      </div>`:r`<div class="card"><h2>${t(`health_${e}`)}</h2><div class="center"><span class="spinner"></span></div></div>`}_checkAction(e){let t=this.t;if(e.key==="integrity")return r`<button class="btn" ?disabled=${!!this._working} @click=${this._checkIntegrity}>${t("integrity_run")}</button>`;if(e.key==="emergency_kit"||e.key==="restore_test"){let s=e.status==="ok";return r`<button class="btn" @click=${()=>this._attest(e.key,!s)}>${t(s?"attest_undo":`attest_${e.key}`)}</button>`}return e.key==="statistics"&&e.status==="warning"?r`<button class="btn" @click=${()=>this._navigate("/developer-tools/statistics")}>${t("open")}</button>`:d}};var Qe=ne`
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
  ul.group-members { margin: 6px 0 0; padding-left: 18px; max-height: 220px; overflow: auto; font-size: 13px; }
`;var mt={title:"Storage Manager",tab_overview:"\xDCbersicht",tab_database:"Datenbank",tab_backups:"Backups",tab_files:"Dateien",refresh:"Aktualisieren",loading:"Lade \u2026",free:"frei",of:"von",used:"belegt",disk:"Speicher",growth_none:"Kein messbares Wachstum in den letzten 7 Tagen.",growth_unknown:"Prognose ab ca. 12 Stunden Messdaten.",growth_full:"W\xE4chst um {growth}/Tag \u2013 voll in etwa {days} Tagen.",growth_ok:"W\xE4chst um {growth}/Tag.",reclaim_title:"Gr\xF6\xDFte Einsparpotenziale",reclaim_total:"Sicher freigebbar: {bytes}",reclaim_none:"Gerade nichts Nennenswertes freizugeben. Gut gepflegt!",safe_cleanup:"Sicher aufr\xE4umen",preview:"Vorschau",free_now:"Jetzt freigeben",open:"\xD6ffnen",rec_backups:"Lokale Backups au\xDFerhalb der Rotation",rec_backups_desc:"{count} lokale Kopien liegen auch extern und fallen aus deinem Aufbewahrungsschema.",rec_backups_rotation_off:"Backup-Rotation ist aus",rec_backups_rotation_off_desc:"{count} lokale Kopien w\xE4ren laut Schema entbehrlich. Rotation in den Optionen aktivieren.",rec_backups_offsite:"Backups nur lokal",rec_backups_offsite_desc:"{count} Backups existieren nur auf diesem Ger\xE4t \u2013 richte ein externes Backup-Ziel ein.",rec_files:"Caches und alte Logs",rec_files_desc:"Dateien, die Home Assistant bei Bedarf neu erzeugt.",rec_orphans:"Verlauf gel\xF6schter Entit\xE4ten",rec_orphans_desc:"{count} Entit\xE4ten existieren nicht mehr, ihr Verlauf liegt noch in der Datenbank.",rec_statistics:"Statistiken gel\xF6schter Entit\xE4ten",rec_statistics_desc:"{count} Langzeitstatistiken ohne zugeh\xF6rige Entit\xE4t.",rec_repack:"Datenbank neu packen",rec_repack_desc:"Freie Seiten in der Datenbankdatei werden an das Dateisystem zur\xFCckgegeben.",rec_top_entities:"{count} Entit\xE4ten = {share} der Datenbank",rec_top_entities_desc:"Hier lohnt sich eine k\xFCrzere Aufbewahrung am meisten.",breakdown_title:"Speicher-Aufteilung",breakdown_unavailable:"Die Aufteilung nach Bereichen liefert nur der Supervisor (Home Assistant OS / Supervised).",cat_system:"System",cat_homeassistant:"Home Assistant",cat_apps_data:"Add-on-Daten",cat_apps_config:"Add-on-Konfiguration",cat_media:"Medien",cat_share:"Share",cat_backup:"Backups",cat_ssl:"SSL",cat_free:"Frei",history_title:"Verlauf",history_empty:"Noch nichts aufger\xE4umt.",history_total:"Insgesamt freigegeben: {bytes}",action_cleanup:"Aufr\xE4umen",action_purge_entities:"Verlauf bereinigt",db_size:"Datenbank",db_engine:"Engine",db_keep:"Globale Aufbewahrung",days:"{n} Tage",db_analysis:"Analyse",db_analysis_never:"noch nie",db_analysis_running:"Analyse l\xE4uft \u2026",analyze:"Analysieren",db_estimated:"Gr\xF6\xDFen sind Sch\xE4tzungen aus Zeilen und Attributen.",db_calibrated:"Gr\xF6\xDFen sind anhand der echten Tabellengr\xF6\xDFen kalibriert.",search:"Suchen \u2026",all_domains:"Alle Domains",filter_changed:"Nur ge\xE4ndert",filter_orphans:"Nur verwaiste",sort_size:"Gr\xF6\xDFe",sort_rate:"Eintr\xE4ge/24 h",sort_name:"Name",col_entity:"Entit\xE4t",col_size:"Gr\xF6\xDFe",col_rate:"24 h",col_rows:"Eintr\xE4ge",col_retention:"Aufbewahrung",tier_default:"Standard ({days} Tage)",tier_7:"7 Tage",tier_3:"3 Tage",tier_1:"1 Tag",tier_drop:"Nur letzte Stunde",tier_excluded:"Nicht aufzeichnen",tier_excluded_needs_packages:"Nicht aufzeichnen (Packages n\xF6tig)",excluded_by_yaml:"Per YAML ausgeschlossen",orphan:"verwaist",show_more:"{n} weitere anzeigen",selected:"{n} ausgew\xE4hlt",set_for_selection:"Aufbewahrung f\xFCr Auswahl",clear_selection:"Auswahl aufheben",draft:"{n} \xC4nderungen",draft_estimate:"ca. {bytes} frei nach dem Anwenden",discard:"Verwerfen",apply:"Anwenden",applied:"\xC4nderungen angewendet.",restart_banner:"Ge\xE4nderte Ausschl\xFCsse ({n}) wirken erst nach einem Neustart.",restart:"Neu starten",restart_confirm:"Home Assistant jetzt neu starten?",packages_banner:"\u201ENicht aufzeichnen\u201C braucht einen Packages-Ordner. Die Reparaturmeldung richtet ihn mit einem Klick ein.",packages_open:"Reparaturen \xF6ffnen",gui_recorder_banner:"GUI Recorder ist installiert. Seine Ausschl\xFCsse lassen sich \xFCbernehmen.",gui_recorder_import:"\xDCbernehmen",gui_recorder_done:"{n} Ausschl\xFCsse \xFCbernommen. Entferne danach den Eintrag \u201Erecorder: !include gui_recorder.yaml\u201C und deinstalliere GUI Recorder.",yaml_filters:"Vorhandene YAML-Filter bleiben unver\xE4ndert und werden respektiert.",yaml_include_warning:"Dein Recorder nutzt eine Include-Liste. Nur dort aufgef\xFChrte Entit\xE4ten werden aufgezeichnet.",events_title:"H\xE4ufigste Ereignisse",analysis_needed:"F\xFCr Gr\xF6\xDFen pro Entit\xE4t bitte zuerst analysieren.",bk_local:"Lokal",bk_count:"{n} Backups",bk_rotation_on:"Rotation aktiv",bk_rotation_off:"Rotation aus (in den Optionen aktivieren)",bk_schedule:"Behalte {d} t\xE4gliche, {w} w\xF6chentliche, {m} monatliche",bk_offsite_required:"Lokale Kopien werden nur gel\xF6scht, wenn das Backup auch extern liegt.",bk_unavailable:"Die Backup-Integration ist nicht geladen.",bk_none:"Keine lokalen Backups.",bk_apply:"Rotation jetzt anwenden",bk_reason_newest:"Neuestes",bk_reason_daily:"T\xE4glich",bk_reason_weekly:"W\xF6chentlich",bk_reason_monthly:"Monatlich",bk_reason_only_local:"Nur lokal vorhanden",bk_reason_unknown_date:"Datum unbekannt",bk_reason_rotated:"Lokal l\xF6schen",col_backup:"Backup",col_locations:"Orte",col_action:"Plan",files_hogs:"Aufr\xE4umbare Dateien",files_none:"Keine bekannten Platzfresser gefunden.",files_large:"Gro\xDFe Dateien im Konfigurationsordner",files_large_hint:"Nur zur Info \u2013 diese Dateien werden nie automatisch gel\xF6scht.",safety_safe:"sicher",safety_review:"pr\xFCfen",hog_esphome_build:"ESPHome-Build-Cache",hog_tts_cache:"Sprachausgabe-Cache (TTS)",hog_rotated_logs:"Alte Logdateien",hog_corrupt_databases:"Besch\xE4digte Datenbank-Kopien",hog_zigbee2mqtt_logs:"Zigbee2MQTT-Logs",hog_core_dumps:"Absturzabbilder",delete:"L\xF6schen",maintenance:"Wartung",docker_title:"Ungenutzte Docker-Images",docker_desc:"L\xE4sst den Supervisor ungenutzte Images, Container und Build-Reste entfernen. Dauert einige Minuten.",repack_title:"Datenbank neu packen",repack_desc:"Gibt freie Seiten der Datenbankdatei zur\xFCck. Braucht etwa so viel freien Speicher wie die Datenbank gro\xDF ist.",repack_impossible:"Zu wenig freier Speicher f\xFCr das Neupacken.",run:"Ausf\xFChren",confirm_title:"Best\xE4tigen",confirm_cleanup:"Folgendes wird entfernt:",confirm_total:"Insgesamt ca. {bytes}",cancel:"Abbrechen",done_freed:"{bytes} freigegeben.",done:"Erledigt.",error:"Fehler: {msg}",busy:"L\xE4uft: {what} \u2026",unknown:"unbekannt",never:"nie",just_now:"gerade eben",ago:"vor {t}",not_admin:"Nur f\xFCr Administratoren.",options:"Optionen",obsolete:"{n} veraltete Eintr\xE4ge (\xE4lter als {days} Tage, ca. {bytes}) warten auf den n\xE4chtlichen Purge.",obsolete_purge:"Jetzt bereinigen",settings_title:"Recorder-Einstellungen",settings_hint:"Globale Aufbewahrung, Schreibintervall und Ausschluss-Filter f\xFCr Domains, Muster und Ereignisse.",settings_restart_hint:"\xC4nderungen landen in der Package-Datei und wirken nach einem Neustart. Einstellungen aus deiner eigenen YAML bleiben unangetastet.",settings_global:"Global",settings_filters:"Nicht aufzeichnen",settings_save:"Speichern",settings_saved:"Gespeichert \u2013 wirkt nach einem Neustart.",setting_purge_keep_days:"Aufbewahrung",setting_purge_keep_days_hint:"Wie viele Tage Verlauf Home Assistant beh\xE4lt (Standard 10).",setting_commit_interval:"Schreibintervall",setting_commit_interval_hint:"Sekunden zwischen Schreibvorg\xE4ngen. H\xF6her schont SD-Karten (Standard 5).",setting_auto_purge:"N\xE4chtlicher Purge",setting_auto_purge_hint:"L\xF6scht jede Nacht um 04:12 Daten, die \xE4lter als die Aufbewahrung sind.",setting_auto_repack:"Automatisch neu packen",setting_auto_repack_hint:"Packt die Datenbank jeden zweiten Sonntag nach dem Purge neu.",setting_locked:"In deiner configuration.yaml gesetzt \u2013 dort \xE4ndern.",unit_days:"Tage",unit_seconds:"s",filter_domains:"Domains",filter_domains_placeholder:"z. B. media_player \u2013 Enter",filter_domains_hint:"Alle Entit\xE4ten dieser Domains werden nicht aufgezeichnet.",filter_entity_globs:"Muster",filter_entity_globs_placeholder:"z. B. sensor.*_rssi \u2013 Enter",filter_entity_globs_hint:"Platzhalter * und ? wie in der Recorder-Konfiguration.",filter_event_types:"Ereignisse",filter_event_types_placeholder:"z. B. call_service \u2013 Enter",filter_event_types_hint:"Ereignistypen, die nicht gespeichert werden.",remove:"Entfernen",orphans_badge:"{n} verwaist",orphans_text:"{n} Ausschl\xFCsse passen auf nichts mehr, das existiert.",orphans_remove:"Aufr\xE4umen",orphans_removed:"{n} verwaiste Ausschl\xFCsse entfernt.",rate_seconds:"alle {n} s",rate_minutes:"alle {n} min",rate_per_day:"{n}\xD7 pro Tag",reason_noise:"Technischer Diagnosewert \u2013 den Verlauf braucht man praktisch nie.",reason_noise_statistics:"Technischer Wert mit Langzeitstatistik \u2013 1 Tag Verlauf gen\xFCgt, die Statistik bleibt.",reason_attributes:"{share} des Speichers stecken in Attributen, nicht im Zustand.",reason_statistics_kept:"Neuer Wert {rate}. Die st\xFCndliche Langzeitstatistik bleibt dauerhaft erhalten.",reason_frequent:"Neuer Wert {rate} \u2013 meist reicht ein kurzer Verlauf.",reason_energy:"Wird im Energie-Dashboard genutzt \u2013 Aufzeichnung bleibt, nur der Verlauf wird k\xFCrzer.",reason_conflict_dashboard:"Ein Dashboard zeigt {days} Tage Verlauf \u2013 die aktuelle Aufbewahrung ist k\xFCrzer.",reason_conflict_energy:"Wird im Energie-Dashboard genutzt \u2013 ohne Aufzeichnung fehlen dort Daten.",reason_conflict_history_reader:"Ein Helfer liest den Verlauf dieser Entit\xE4t \u2013 er sollte nicht gek\xFCrzt sein.",protected_history_reader:"Verlauf wird von einem Helfer gelesen",protected_dashboard:"Dashboard braucht den vollen Verlauf",note_automation:"In {n} Automationen/Skripten",note_automation_hint:"Automationen nutzen den Live-Zustand \u2013 der Verlauf wird daf\xFCr nicht gebraucht.",note_dashboard:"Dashboard: {days} Tage",note_energy:"Energie-Dashboard",note_statistics:"Langzeitstatistik",note_statistics_hint:"St\xFCndliche Mittel-, Min- und Max-Werte bleiben unabh\xE4ngig von der Aufbewahrung erhalten.",note_diagnostic:"Diagnose",inbox_title:"Empfehlungen",inbox_summary:"{n} Empfehlungen \xB7 ca. {bytes}",inbox_empty:"Keine Empfehlungen \u2013 die Datenbank ist gut eingestellt.",inbox_hint:"\xDCbernommene Empfehlungen landen im Entwurf und werden erst mit \u201EAnwenden\u201C wirksam.",inbox_show_dismissed:"Abgelehnte wieder anzeigen ({n})",inbox_accept_all:"Alle \xFCbernehmen ({n})",inbox_in_draft:"Im Entwurf",inbox_dismiss:"Ablehnen",inbox_accept:"\xDCbernehmen",effect_title:"Wirkung",effect_waiting:"Nach der n\xE4chsten Analyse siehst du hier, was deine \xC4nderungen gebracht haben.",effect_since_change:"Seit der ersten \xC4nderung: {delta} ({bytes}).",effect_no_changes:"Noch keine \xC4nderungen \u2013 der Verlauf zeigt die normale Entwicklung.",effect_need_samples:"Der Verlauf entsteht mit jeder Analyse (t\xE4glich und nach jeder \xC4nderung).",view_top:"Top-Verursacher",view_groups:"Nach Integration",view_all:"Alle",view_total:"{n} Entit\xE4ten \xB7 {bytes}",top_hint:"Diese {n} Entit\xE4ten machen {share} der Datenbank aus.",top_rest:"{n} weitere Entit\xE4ten = {bytes} ({share}) \u2013 hier gibt es nichts zu tun.",top_show_all:"Alle anzeigen",group_count:"Entit\xE4ten: {n}",group_accept:"{n} Empfehlungen \xFCbernehmen ({bytes})",filter_advice:"Mit Empfehlung",suggested:"Empfohlen: {tier}",detail_rate:"H\xE4ufigkeit",detail_daily:"Eintr\xE4ge pro Tag (letzte {n} Tage)",detail_attributes:"Gr\xF6\xDFte Attribute ({n} Varianten gespeichert)",detail_attributes_hint:"Jede neue Attribut-Kombination wird einmal gespeichert. H\xE4ufig wechselnde Attribute wie Zeitstempel oder Vorhersagen erzeugen viele Varianten.",detail_usage:"Verwendung",detail_automations:"Automationen",detail_scripts:"Skripte",detail_helper:"Helfer \u201E{title}\u201C ({domain})",detail_dashboard:"Dashboard \u201E{title}\u201C: {card}, {days} Tage",detail_unused:"Keine Verwendung gefunden.",detail_usage_limits:"Erkannt werden Automationen, Skripte, UI-Helfer, das Energie-Dashboard und Dashboards im UI-Modus \u2013 YAML-Helfer und Templates nicht.",detail_saving:"Gibt ca. {bytes} frei.",impact_default:"Verlauf und Logbuch: {days} Tage (globale Einstellung). Die Langzeitstatistik bleibt dauerhaft.",impact_7:"Verlaufsgraph und Logbuch zeigen nur {days} Tage. Die st\xFCndliche Langzeitstatistik bleibt erhalten.",impact_3:"Verlaufsgraph und Logbuch zeigen nur {days} Tage. Die st\xFCndliche Langzeitstatistik bleibt erhalten.",impact_1:"Verlaufsgraph und Logbuch zeigen nur {days} Tag. Die st\xFCndliche Langzeitstatistik bleibt erhalten.",impact_drop:"Nur die letzte Stunde bleibt im Verlauf ({days} Tage). Die Langzeitstatistik bleibt, die Werte werden weiter geschrieben.",impact_excluded:"Nichts wird aufgezeichnet ({days} Tage): kein Verlauf, kein Logbuch, keine Langzeitstatistik. Wirkt nach einem Neustart.",used_cap:"Belegt",low_space_banner:"Nur noch {free} frei. Etwa {reclaim} lassen sich sicher freigeben.",low_space_banner_db:"Nur noch {free} frei. In der Datenbank-Ansicht siehst du, wo sich k\xFCrzere Aufbewahrung lohnt.",forecast_banner:"Beim aktuellen Wachstum ist der Speicher in etwa {days} Tagen voll.",bk_kpi_local:"Lokal belegt",bk_kpi_count:"Lokale Backups",bk_kpi_deletable:"Nach Plan l\xF6schbar",busy_safety_integrity:"Integrit\xE4tspr\xFCfung der Datenbank",busy_safety_backup:"Backup vor dem L\xF6schen",busy_repack:"Datenbank wird neu gepackt",busy_backups:"Backups werden rotiert",busy_files:"Dateien werden gel\xF6scht",busy_orphans:"Verlauf gel\xF6schter Entit\xE4ten wird entfernt",busy_statistics:"Statistiken werden entfernt",busy_purge:"Alter Verlauf wird bereinigt",busy_docker:"Docker-Images werden aufger\xE4umt",busy_apply:"\xC4nderungen werden \xFCbernommen",busy_analyze:"Datenbank wird analysiert",phase_states:"Zust\xE4nde",phase_state_attributes:"Attribute",phase_statistics:"Statistiken",phase_statistics_short_term:"Kurzzeitstatistiken",phase_events:"Ereignisse",stop:"Abbrechen",analysis_stopped:"Analyse abgebrochen. Die letzte vollst\xE4ndige Analyse bleibt angezeigt.",repack_plan_none:"W\xFCrde {gain} zur\xFCckgeben, passt aber gerade nicht: In der Datei stecken {live} Daten. Normales Packen braucht etwa {need} freien Speicher ({free} frei). Mit der Zwischenkopie im RAM w\xE4ren es {mem_need} Speicher und {ram} freier RAM ({ram_free} frei). Es reicht, {missing} freizumachen (Backups, Docker-Images) \u2013 oder die Daten um {reduce} zu verkleinern, etwa mit den Empfehlungen in der Datenbank-Ansicht.",repack_plan_vacuum:"Gibt {gain} zur\xFCck. Braucht vor\xFCbergehend etwa {need} freien Speicher ({free} frei).",repack_plan_memory:"Gibt {gain} zur\xFCck. Zu wenig Platz f\xFCr das normale Packen, deshalb liegt die Zwischenkopie im Arbeitsspeicher: etwa {need} Speicher und {ram} RAM.",repack_plan_incremental:"Gibt {gain} in kleinen Schritten zur\xFCck und braucht dabei kaum zus\xE4tzlichen Speicher.",repack_convert:"F\xFCr k\xFCnftiges Packen in kleinen Schritten vorbereiten",repack_convert_hint:"Stellt die Datenbank beim Packen auf auto_vacuum=INCREMENTAL um. Danach braucht jedes weitere Packen kaum noch freien Speicher. Home Assistant arbeitet damit unver\xE4ndert.",safety_title:"Vor dem L\xF6schen",safety_space_split_previous:"({work} zum L\xF6schen, {backup} f\xFCr das Backup \u2013 so gro\xDF war das letzte mit Datenbank.)",safety_space_split_file:"({work} zum L\xF6schen, {backup} f\xFCr das Backup \u2013 noch keins zum Vergleich, deshalb die Dateigr\xF6\xDFe.)",safety_backup_not_needed:"Kein Backup n\xF6tig: Home Assistant l\xF6scht diese veralteten Eintr\xE4ge ohnehin jede Nacht.",safety_space_ok:"Freier Speicher gepr\xFCft: {need} n\xF6tig, {free} frei.",safety_space_low:"Zu wenig freier Speicher: {need} n\xF6tig, {free} frei. Erst Backups, Dateien oder Docker-Images aufr\xE4umen.",safety_integrity_run:"Die Datenbank wird auf Besch\xE4digungen gepr\xFCft. Das kann bei gro\xDFen Datenbanken einige Minuten dauern.",safety_integrity_cached:"Die Integrit\xE4tspr\xFCfung der letzten Tage war fehlerfrei und wird wiederverwendet.",safety_backup_reuse:"Das Backup \u201E{name}\u201C vom {date} enth\xE4lt die Datenbank und wird als Sicherung genutzt.",safety_backup_create:"Ein Backup von Home Assistant mit Datenbank wird erstellt und gepr\xFCft (Ziel: {agents}).",safety_backup_disabled:"Kein Backup vorher \u2013 in den Optionen ausgeschaltet.",safety_backup_unavailable:"Ein Backup ist nicht m\xF6glich: Es ist kein Backup-Ziel verf\xFCgbar.",blocked_title:"Nichts aus der Datenbank gel\xF6scht",blocked_no_space:"F\xFCr L\xF6schen und Sicherung sind etwa {need} freier Speicher n\xF6tig. R\xE4ume zuerst Backups, Dateien oder Docker-Images auf.",blocked_corrupt:"Die Integrit\xE4tspr\xFCfung hat Sch\xE4den gefunden. Solange die Datenbank besch\xE4digt ist, l\xF6scht Storage Manager nichts daraus.",blocked_backup_unavailable:"Die Backup-Funktion von Home Assistant ist nicht verf\xFCgbar.",blocked_backup_no_location:"Es gibt kein Ziel f\xFCr das Backup.",blocked_backup_failed:"Das Backup vor dem L\xF6schen ist fehlgeschlagen.",blocked_backup_not_verified:"Das Backup wurde erstellt, lie\xDF sich danach aber nicht in der Backup-Liste finden.",blocked_without_backup_hint:"Du kannst ohne Backup fortfahren. Gel\xF6schter Verlauf l\xE4sst sich dann nicht wiederherstellen.",continue_without_backup:"Ohne Backup l\xF6schen",ok:"OK",backup_used:"Sicherung: {name}.",applied_purge_waits:"Einstellungen gespeichert. Das sofortige L\xF6schen wurde angehalten; die n\xE4chtliche Aufbewahrung wendet sie sp\xE4ter an.",integrity_ok:"Integrit\xE4tspr\xFCfung bestanden.",integrity_corrupt:"Die Integrit\xE4tspr\xFCfung hat Sch\xE4den gefunden.",integrity_timeout:"Die Integrit\xE4tspr\xFCfung hat zu lange gedauert und wurde abgebrochen.",integrity_error:"Die Integrit\xE4tspr\xFCfung konnte nicht laufen.",integrity_unsupported:"Die Integrit\xE4tspr\xFCfung gibt es nur f\xFCr SQLite.",integrity_run:"Jetzt pr\xFCfen",health_database:"Zustand der Datenbank",health_backups:"Backup-Schutz",status_ok:"In Ordnung",status_warning:"Pr\xFCfen",status_error:"Problem",check_again:"Erneut pr\xFCfen",attest_emergency_kit:"Erledigt",attest_restore_test:"Heute getestet",attest_undo:"Zur\xFCcknehmen",backup_settings:"Backup-Einstellungen",check_wal:"Write-Ahead-Log",check_wal_ok:"{bytes} \u2013 normal.",check_wal_warning:"{bytes} ({share} der Datenbank). Ein gro\xDFes WAL deutet auf lange Lesevorg\xE4nge hin; nach einem Neustart schrumpft es meist.",check_growth:"Wachstum",check_growth_ok:"{bytes} in 7 Tagen, im \xFCblichen Rahmen.",check_growth_warning:"{bytes} in 7 Tagen ({per_day}/Tag, vorher {before_per_day}/Tag). Etwas zeichnet neuerdings deutlich mehr auf.",check_growth_unknown:"Braucht Analysen \xFCber mindestens eine Woche.",check_integrity:"Integrit\xE4t (SQLite)",check_integrity_ok:"Fehlerfrei gepr\xFCft am {at}.",check_integrity_error:"Besch\xE4digt (gepr\xFCft am {at}). Bis zu einer bestandenen Pr\xFCfung wird nichts aus der Datenbank gel\xF6scht.",check_integrity_info:"Letzte Pr\xFCfung am {at} \u2013 schon l\xE4nger her.",check_integrity_unknown:"Noch nicht gepr\xFCft. Die Pr\xFCfung liest die ganze Datei und kann einige Minuten dauern.",check_statistics:"Statistiken",check_statistics_ok:"Home Assistant meldet keine Probleme mit Langzeitstatistiken.",check_statistics_warning:"Home Assistant meldet {count} Probleme mit Langzeitstatistiken (Entwicklerwerkzeuge \u2192 Statistiken).",check_statistics_unknown:"Konnte nicht abgefragt werden.",check_backup_integration:"Backup-Funktion",check_backup_integration_unknown:"Die Backup-Funktion von Home Assistant ist nicht verf\xFCgbar.",check_schedule:"Automatische Backups",check_schedule_ok:"Eingeplant.",check_schedule_warning:"Keine automatischen Backups eingeplant.",check_newest:"Neuestes Backup mit Datenbank",check_newest_ok:"{date}",check_newest_warning:"{date} \u2013 \xE4lter als erwartet ({hours} Stunden).",check_newest_error:"Es gibt kein Backup mit Datenbank.",check_last_attempt:"Letzter automatischer Versuch",check_last_attempt_ok:"Erfolgreich.",check_last_attempt_error:"Fehlgeschlagen: Der letzte Versuch ist neuer als das letzte erfolgreiche Backup.",check_last_attempt_unknown:"Noch kein automatisches Backup versucht.",check_offsite:"Kopie au\xDFerhalb dieses Ger\xE4ts",check_offsite_ok:"Neueste externe Kopie vom {date}.",check_offsite_warning:"Keine aktuelle Kopie au\xDFerhalb dieses Ger\xE4ts. F\xE4llt die Speicherkarte aus, sind auch die Backups weg.",check_size:"Gr\xF6\xDFe des neuesten Backups",check_size_ok:"{bytes}, \xFCblich.",check_size_warning:"{bytes} statt \xFCblich {typical} \u2013 fehlt etwas oder ist etwas dazugekommen?",check_size_unknown:"Braucht mindestens vier Backups zum Vergleich.",check_encryption:"Verschl\xFCsselung externer Kopien",check_encryption_ok:"Alle externen Ziele sind verschl\xFCsselt.",check_encryption_warning:"Unverschl\xFCsselt: {agents}.",check_encryption_unknown:"Kein externes Backup-Ziel eingerichtet.",repack_nothing:"Keine freien Seiten in der Datei \u2013 Packen w\xFCrde nichts zur\xFCckgeben.",repack_convert_only:"Keine freien Seiten. Packen w\xFCrde jetzt nur das schrittweise Packen f\xFCr sp\xE4ter vorbereiten.",check_database_included:"Datenbank im automatischen Backup",check_database_included_ok:"Enthalten.",check_database_included_warning:"Nicht enthalten \u2013 nach einer Wiederherstellung fehlt der Verlauf.",check_space:"Platz f\xFCr das n\xE4chste Backup",check_space_ok:"{free} frei, {need} empfohlen.",check_space_warning:"Nur {free} frei, empfohlen sind {need}.",check_space_unknown:"Noch kein Backup zum Vergleich.",check_agents:"Backup-Ziele",check_agents_ok:"Alle erreichbar.",check_agents_warning:"Fehler bei: {agents}.",check_emergency_kit:"Notfallpaket gespeichert",check_emergency_kit_ok:"Best\xE4tigt am {date}.",check_emergency_kit_info:"Ohne Notfallpaket lassen sich verschl\xFCsselte Backups nicht \xF6ffnen. Lade es in den Backup-Einstellungen herunter und best\xE4tige hier.",check_restore_test:"Wiederherstellung getestet",check_restore_test_ok:"Zuletzt am {date}.",check_restore_test_info:"Ein Backup ist erst sicher, wenn eine Wiederherstellung einmal geklappt hat, zum Beispiel auf einem Testsystem.",check_restore_test_warning:"Letzter Test am {date} \u2013 l\xE4nger als ein halbes Jahr her.",core_options_banner:"Home Assistant kann die Aufzeichnung jetzt pro Entit\xE4t selbst abschalten. Eine kommende Version von Storage Manager nutzt das statt der Package-Datei.",db_estimated_innodb:"Gr\xF6\xDFen sind kalibriert, aber MariaDB/MySQL meldet Tabellengr\xF6\xDFen nur gesch\xE4tzt.",db_scaled:"Gr\xF6\xDFen sind auf die belegten Bytes der Datei hochgerechnet. Die Aufteilung auf Tabellen bleibt gesch\xE4tzt, weil dieses SQLite keine Tabellengr\xF6\xDFen (dbstat) liefert.",detail_attr_only:"In {n} der letzten {total} Zeilen haben sich nur Attribute ge\xE4ndert, nicht der Zustand.",detail_drivers:"Was neue Zeilen ausl\xF6st",detail_driver:"\xE4ndert sich st\xE4ndig",detail_driver_values:"{share} der Attribute \xB7 \xE4ndert sich in {rate} der Zeilen \xB7 \u2300 {bytes}",detail_drivers_hint:"Ein Attribut, das sich st\xE4ndig \xE4ndert, erzeugt bei jedem Wechsel eine neue Zeile, auch wenn der Zustand gleich bleibt. Abhilfe: k\xFCrzere Aufbewahrung, nicht aufzeichnen, oder in der Quell-Integration das Attribut abschalten.",reason_attribute_updates:"In {attr_only} der Zeilen hat sich nur ein Attribut ge\xE4ndert, nicht der Zustand.",inbox_group_title:"{integration} \xB7 {n} Entit\xE4ten",reason_time:"Uhrzeit- oder Datumssensor \u2013 \xE4ndert sich jede Minute, sein Verlauf hat keinen Nutzen.",reason_time_statistics:"Uhrzeit- oder Datumssensor mit Statistik \u2013 1 Tag Verlauf gen\xFCgt.",reason_power_statistics:"Leistungswert {rate}. Verlauf f\xFCr ein paar Tage gen\xFCgt, die st\xFCndliche Statistik bleibt dauerhaft.",reason_energy_statistics:"Energiez\xE4hler {rate}. Das Energie-Dashboard nutzt nur die Langzeitstatistik, die bleibt.",reason_gps_tracker:"GPS-Tracker: jede Position speichert Koordinaten. Eine Woche reicht f\xFCr die Karte.",reason_fast_presence:"Pr\xE4senz- oder Abstandssensor {rate} \u2013 erzeugt sehr viele Zeilen.",group_reason_noise:"Technische Diagnosewerte (Signal, IP, Uptime \u2026) \u2013 den Verlauf braucht man praktisch nie.",group_reason_noise_statistics:"Technische Werte mit Langzeitstatistik \u2013 1 Tag Verlauf gen\xFCgt, die Statistik bleibt.",group_reason_time:"Uhrzeit- und Datumssensoren \u2013 ihr Verlauf hat keinen Nutzen.",group_reason_time_statistics:"Uhrzeit- und Datumssensoren mit Statistik \u2013 1 Tag Verlauf gen\xFCgt.",group_reason_power_statistics:"Leistungssensoren \u2013 einzeln klein, zusammen gro\xDF. Die st\xFCndliche Statistik bleibt dauerhaft.",group_reason_energy_statistics:"Energiez\xE4hler \u2013 das Energie-Dashboard nutzt nur die Langzeitstatistik, die bleibt.",group_reason_gps_tracker:"GPS-Tracker \u2013 jede Position speichert Koordinaten. Eine Woche reicht f\xFCr die Karte.",group_reason_fast_presence:"Pr\xE4senz- und Abstandssensoren mit sehr vielen Zeilen.",group_reason_attribute_updates:"Sensoren, bei denen sich fast nur Attribute \xE4ndern, nicht der Zustand.",group_reason_attributes:"Sensoren, deren Speicher \xFCberwiegend in Attributen steckt.",group_reason_statistics_kept:"Sehr h\xE4ufige Werte. Die st\xFCndliche Langzeitstatistik bleibt dauerhaft erhalten.",group_reason_frequent:"Sehr h\xE4ufige Werte \u2013 meist reicht ein kurzer Verlauf.",hint_esphome:"Besser an der Quelle: in ESPHome mit \u201Ethrottle_average: 60s\u201C oder \u201Eor: throttle + delta\u201C nur noch sinnvolle Werte senden.",hint_powercalc:"Besser an der Quelle: in den Powercalc-Optionen die Update-Intervalle (energy_update_interval, group_power_update_interval) erh\xF6hen.",hint_shelly:"Besser an der Quelle: in der Shelly-Weboberfl\xE4che das Meldeintervall bzw. die Schwelle f\xFCr Leistungs\xE4nderungen erh\xF6hen.",hint_generic:"Besser an der Quelle: Wenn die Integration ein Abfrage- oder Meldeintervall hat, schreibt ein gr\xF6\xDFeres Intervall weniger Zeilen."},fe={title:"Storage Manager",tab_overview:"Overview",tab_database:"Database",tab_backups:"Backups",tab_files:"Files",refresh:"Refresh",loading:"Loading \u2026",free:"free",of:"of",used:"used",disk:"Disk",growth_none:"No measurable growth in the last 7 days.",growth_unknown:"Forecast available after about 12 hours of samples.",growth_full:"Growing {growth}/day \u2013 full in about {days} days.",growth_ok:"Growing {growth}/day.",reclaim_title:"Biggest savings",reclaim_total:"Safely reclaimable: {bytes}",reclaim_none:"Nothing worth cleaning right now. Well kept!",safe_cleanup:"Safe cleanup",preview:"Preview",free_now:"Free now",open:"Open",rec_backups:"Local backups outside the rotation",rec_backups_desc:"{count} local copies also exist elsewhere and fall outside your retention schedule.",rec_backups_rotation_off:"Backup rotation is off",rec_backups_rotation_off_desc:"{count} local copies would be expendable. Enable rotation in the options.",rec_backups_offsite:"Backups only stored locally",rec_backups_offsite_desc:"{count} backups exist only on this device \u2013 set up an off-site backup location.",rec_files:"Caches and old logs",rec_files_desc:"Files Home Assistant recreates when needed.",rec_orphans:"History of deleted entities",rec_orphans_desc:"{count} entities no longer exist but their history is still stored.",rec_statistics:"Statistics of deleted entities",rec_statistics_desc:"{count} long-term statistics without an entity.",rec_repack:"Repack the database",rec_repack_desc:"Returns free pages inside the database file to the file system.",rec_top_entities:"{count} entities = {share} of the database",rec_top_entities_desc:"Shorter retention pays off most here.",breakdown_title:"Storage breakdown",breakdown_unavailable:"The breakdown by area is only provided by the Supervisor (Home Assistant OS / Supervised).",cat_system:"System",cat_homeassistant:"Home Assistant",cat_apps_data:"Add-on data",cat_apps_config:"Add-on configuration",cat_media:"Media",cat_share:"Share",cat_backup:"Backups",cat_ssl:"SSL",cat_free:"Free",history_title:"History",history_empty:"Nothing cleaned yet.",history_total:"Freed in total: {bytes}",action_cleanup:"Cleanup",action_purge_entities:"History purged",db_size:"Database",db_engine:"Engine",db_keep:"Global retention",days:"{n} days",db_analysis:"Analysis",db_analysis_never:"never",db_analysis_running:"Analysis running \u2026",analyze:"Analyze",db_estimated:"Sizes are estimates based on rows and attributes.",db_calibrated:"Sizes are calibrated with the real table sizes.",search:"Search \u2026",all_domains:"All domains",filter_changed:"Changed only",filter_orphans:"Orphans only",sort_size:"Size",sort_rate:"Rows/24 h",sort_name:"Name",col_entity:"Entity",col_size:"Size",col_rate:"24 h",col_rows:"Rows",col_retention:"Retention",tier_default:"Default ({days} days)",tier_7:"7 days",tier_3:"3 days",tier_1:"1 day",tier_drop:"Last hour only",tier_excluded:"Don't record",tier_excluded_needs_packages:"Don't record (needs packages)",excluded_by_yaml:"Excluded in YAML",orphan:"orphaned",show_more:"Show {n} more",selected:"{n} selected",set_for_selection:"Retention for selection",clear_selection:"Clear selection",draft:"{n} changes",draft_estimate:"about {bytes} freed after applying",discard:"Discard",apply:"Apply",applied:"Changes applied.",restart_banner:"Changed exclusions ({n}) take effect after a restart.",restart:"Restart",restart_confirm:"Restart Home Assistant now?",packages_banner:"\u201CDon't record\u201D needs a packages folder. The repair issue sets it up with one click.",packages_open:"Open repairs",gui_recorder_banner:"GUI Recorder is installed. Its exclusions can be imported.",gui_recorder_import:"Import",gui_recorder_done:"{n} exclusions imported. Afterwards remove \u201Crecorder: !include gui_recorder.yaml\u201D and uninstall GUI Recorder.",yaml_filters:"Existing YAML filters stay untouched and are respected.",yaml_include_warning:"Your recorder uses an include list. Only entities listed there are recorded.",events_title:"Most frequent events",analysis_needed:"Run an analysis first to see sizes per entity.",bk_local:"Local",bk_count:"{n} backups",bk_rotation_on:"Rotation on",bk_rotation_off:"Rotation off (enable in the options)",bk_schedule:"Keep {d} daily, {w} weekly, {m} monthly",bk_offsite_required:"Local copies are only deleted when the backup also exists elsewhere.",bk_unavailable:"The backup integration is not loaded.",bk_none:"No local backups.",bk_apply:"Apply rotation now",bk_reason_newest:"Newest",bk_reason_daily:"Daily",bk_reason_weekly:"Weekly",bk_reason_monthly:"Monthly",bk_reason_only_local:"Only stored locally",bk_reason_unknown_date:"Unknown date",bk_reason_rotated:"Delete local copy",col_backup:"Backup",col_locations:"Locations",col_action:"Plan",files_hogs:"Files that can be cleaned",files_none:"No known space hogs found.",files_large:"Large files in the config folder",files_large_hint:"For information only \u2013 these files are never deleted automatically.",safety_safe:"safe",safety_review:"review",hog_esphome_build:"ESPHome build cache",hog_tts_cache:"Text-to-speech cache",hog_rotated_logs:"Old log files",hog_corrupt_databases:"Corrupt database copies",hog_zigbee2mqtt_logs:"Zigbee2MQTT logs",hog_core_dumps:"Crash dumps",delete:"Delete",maintenance:"Maintenance",docker_title:"Unused Docker images",docker_desc:"Lets the Supervisor remove unused images, containers and build leftovers. Takes a few minutes.",repack_title:"Repack the database",repack_desc:"Returns free pages of the database file. Needs about as much free space as the database size.",repack_impossible:"Not enough free space to repack.",run:"Run",confirm_title:"Confirm",confirm_cleanup:"The following will be removed:",confirm_total:"About {bytes} in total",cancel:"Cancel",done_freed:"{bytes} freed.",done:"Done.",error:"Error: {msg}",busy:"Running: {what} \u2026",unknown:"unknown",never:"never",just_now:"just now",ago:"{t} ago",not_admin:"Administrators only.",options:"Options",obsolete:"{n} outdated rows (older than {days} days, about {bytes}) are waiting for the nightly purge.",obsolete_purge:"Purge now",settings_title:"Recorder settings",settings_hint:"Global retention, commit interval and exclude filters for domains, patterns and events.",settings_restart_hint:"Changes go into the package file and take effect after a restart. Settings from your own YAML stay untouched.",settings_global:"Global",settings_filters:"Don't record",settings_save:"Save",settings_saved:"Saved \u2013 takes effect after a restart.",setting_purge_keep_days:"Retention",setting_purge_keep_days_hint:"How many days of history Home Assistant keeps (default 10).",setting_commit_interval:"Commit interval",setting_commit_interval_hint:"Seconds between writes. Higher values spare SD cards (default 5).",setting_auto_purge:"Nightly purge",setting_auto_purge_hint:"Deletes data older than the retention every night at 04:12.",setting_auto_repack:"Repack automatically",setting_auto_repack_hint:"Repacks the database every second Sunday after the purge.",setting_locked:"Set in your configuration.yaml \u2013 change it there.",unit_days:"days",unit_seconds:"s",filter_domains:"Domains",filter_domains_placeholder:"e.g. media_player \u2013 Enter",filter_domains_hint:"No entity of these domains is recorded.",filter_entity_globs:"Patterns",filter_entity_globs_placeholder:"e.g. sensor.*_rssi \u2013 Enter",filter_entity_globs_hint:"Wildcards * and ? as in the recorder configuration.",filter_event_types:"Events",filter_event_types_placeholder:"e.g. call_service \u2013 Enter",filter_event_types_hint:"Event types that are not stored.",remove:"Remove",orphans_badge:"{n} orphaned",orphans_text:"{n} exclusions no longer match anything that exists.",orphans_remove:"Clean up",orphans_removed:"Removed {n} orphaned exclusions.",rate_seconds:"every {n} s",rate_minutes:"every {n} min",rate_per_day:"{n}\xD7 per day",reason_noise:"Technical diagnostic value \u2013 its history is practically never needed.",reason_noise_statistics:"Technical value with long-term statistics \u2013 1 day of history is enough, the statistics stay.",reason_attributes:"{share} of the space is used by attributes, not by the state.",reason_statistics_kept:"New value {rate}. The hourly long-term statistics are kept permanently.",reason_frequent:"New value {rate} \u2013 a short history is usually enough.",reason_energy:"Used by the energy dashboard \u2013 recording stays, only the history gets shorter.",reason_conflict_dashboard:"A dashboard shows {days} days of history \u2013 the current retention is shorter.",reason_conflict_energy:"Used by the energy dashboard \u2013 without recording it misses data.",reason_conflict_history_reader:"A helper reads this entity's history \u2013 it should not be shortened.",protected_history_reader:"History is read by a helper",protected_dashboard:"A dashboard needs the full history",note_automation:"In {n} automations/scripts",note_automation_hint:"Automations use the live state \u2013 they do not need the history.",note_dashboard:"Dashboard: {days} days",note_energy:"Energy dashboard",note_statistics:"Long-term statistics",note_statistics_hint:"Hourly mean, min and max values are kept regardless of the retention.",note_diagnostic:"Diagnostic",inbox_title:"Recommendations",inbox_summary:"{n} recommendations \xB7 about {bytes}",inbox_empty:"No recommendations \u2013 the database is well tuned.",inbox_hint:"Accepted recommendations go into the draft and take effect with \u201CApply\u201D.",inbox_show_dismissed:"Show dismissed again ({n})",inbox_accept_all:"Accept all ({n})",inbox_in_draft:"In draft",inbox_dismiss:"Dismiss",inbox_accept:"Accept",effect_title:"Effect",effect_waiting:"After the next analysis you will see here what your changes achieved.",effect_since_change:"Since the first change: {delta} ({bytes}).",effect_no_changes:"No changes yet \u2013 the chart shows the normal development.",effect_need_samples:"The chart builds up with every analysis (daily and after each change).",view_top:"Top causes",view_groups:"By integration",view_all:"All",view_total:"{n} entities \xB7 {bytes}",top_hint:"These {n} entities make up {share} of the database.",top_rest:"{n} more entities = {bytes} ({share}) \u2013 nothing to do here.",top_show_all:"Show all",group_count:"entities: {n}",group_accept:"Accept {n} recommendations ({bytes})",filter_advice:"With recommendation",suggested:"Suggested: {tier}",detail_rate:"Frequency",detail_daily:"Rows per day (last {n} days)",detail_attributes:"Largest attributes ({n} variants stored)",detail_attributes_hint:"Every new attribute combination is stored once. Frequently changing attributes such as timestamps or forecasts create many variants.",detail_usage:"Usage",detail_automations:"Automations",detail_scripts:"Scripts",detail_helper:"Helper \u201C{title}\u201D ({domain})",detail_dashboard:"Dashboard \u201C{title}\u201D: {card}, {days} days",detail_unused:"No usage found.",detail_usage_limits:"Detected: automations, scripts, UI helpers, the energy dashboard and UI-mode dashboards \u2013 not YAML helpers or templates.",detail_saving:"Frees about {bytes}.",impact_default:"History and logbook: {days} days (global setting). Long-term statistics are kept permanently.",impact_7:"History graph and logbook show only {days} days. Hourly long-term statistics are kept.",impact_3:"History graph and logbook show only {days} days. Hourly long-term statistics are kept.",impact_1:"History graph and logbook show only {days} day. Hourly long-term statistics are kept.",impact_drop:"Only the last hour stays in the history ({days} days). Statistics are kept, values are still written.",impact_excluded:"Nothing is recorded ({days} days): no history, no logbook, no long-term statistics. Takes effect after a restart.",used_cap:"Used",low_space_banner:"Only {free} free. About {reclaim} can be reclaimed safely.",low_space_banner_db:"Only {free} free. The database view shows where shorter retention pays off.",forecast_banner:"At the current growth the disk is full in about {days} days.",bk_kpi_local:"Used locally",bk_kpi_count:"Local backups",bk_kpi_deletable:"Deletable by plan",busy_safety_integrity:"Checking database integrity",busy_safety_backup:"Backing up before deleting",busy_repack:"Repacking the database",busy_backups:"Rotating backups",busy_files:"Deleting files",busy_orphans:"Removing history of deleted entities",busy_statistics:"Removing statistics",busy_purge:"Purging old history",busy_docker:"Cleaning Docker images",busy_apply:"Applying changes",busy_analyze:"Analysing the database",phase_states:"States",phase_state_attributes:"Attributes",phase_statistics:"Statistics",phase_statistics_short_term:"Short-term statistics",phase_events:"Events",stop:"Stop",analysis_stopped:"Analysis stopped. The last complete analysis stays on screen.",repack_plan_none:"Would return {gain}, but does not fit right now: the file holds {live} of data. An ordinary repack needs about {need} of free space ({free} free). With the temporary copy in RAM it would be {mem_need} of disk and {ram} of free RAM ({ram_free} free). Freeing {missing} is enough (backups, Docker images) \u2013 or making the data {reduce} smaller, for example with the recommendations in the database view.",repack_plan_vacuum:"Returns {gain}. Needs about {need} of free space for a while ({free} free).",repack_plan_memory:"Returns {gain}. Not enough space for a normal repack, so the temporary copy stays in RAM: about {need} of disk and {ram} of RAM.",repack_plan_incremental:"Returns {gain} in small steps and needs almost no extra space.",repack_convert:"Prepare for repacking in small steps",repack_convert_hint:"Switches the database to auto_vacuum=INCREMENTAL while repacking. Every later repack then needs almost no free space. Home Assistant works with it unchanged.",safety_title:"Before anything is deleted",safety_space_split_previous:"({work} for deleting, {backup} for the backup \u2013 the size of the last one with the database.)",safety_space_split_file:"({work} for deleting, {backup} for the backup \u2013 none to compare yet, so the file size.)",safety_backup_not_needed:"No backup needed: Home Assistant deletes these outdated rows every night anyway.",safety_space_ok:"Free space checked: {need} needed, {free} free.",safety_space_low:"Not enough free space: {need} needed, {free} free. Clean up backups, files or Docker images first.",safety_integrity_run:"The database is checked for damage. On large databases this can take a few minutes.",safety_integrity_cached:"The integrity check from the last days passed and is reused.",safety_backup_reuse:"The backup \u201C{name}\u201D from {date} includes the database and is used as the safety copy.",safety_backup_create:"A backup of Home Assistant with the database is created and verified (location: {agents}).",safety_backup_disabled:"No backup first \u2013 turned off in the options.",safety_backup_unavailable:"A backup is not possible: no backup location is available.",blocked_title:"Nothing deleted from the database",blocked_no_space:"Deleting and the safety backup need about {need} of free space. Clean up backups, files or Docker images first.",blocked_corrupt:"The integrity check found damage. While the database is damaged, Storage Manager deletes nothing from it.",blocked_backup_unavailable:"Home Assistant's backup feature is not available.",blocked_backup_no_location:"There is no location for the backup.",blocked_backup_failed:"The backup before deleting failed.",blocked_backup_not_verified:"The backup was created but could not be found in the backup list afterwards.",blocked_without_backup_hint:"You can continue without a backup. Deleted history cannot be restored then.",continue_without_backup:"Delete without backup",ok:"OK",backup_used:"Safety backup: {name}.",applied_purge_waits:"Settings saved. The immediate purge was stopped; the nightly retention applies them later.",integrity_ok:"Integrity check passed.",integrity_corrupt:"The integrity check found damage.",integrity_timeout:"The integrity check took too long and was stopped.",integrity_error:"The integrity check could not run.",integrity_unsupported:"The integrity check is only available for SQLite.",integrity_run:"Check now",health_database:"Database health",health_backups:"Backup protection",status_ok:"OK",status_warning:"Check",status_error:"Problem",check_again:"Check again",attest_emergency_kit:"Done",attest_restore_test:"Tested today",attest_undo:"Undo",backup_settings:"Backup settings",check_wal:"Write-ahead log",check_wal_ok:"{bytes} \u2013 normal.",check_wal_warning:"{bytes} ({share} of the database). A large WAL points to long reads; it usually shrinks after a restart.",check_growth:"Growth",check_growth_ok:"{bytes} in 7 days, within the usual range.",check_growth_warning:"{bytes} in 7 days ({per_day}/day, before {before_per_day}/day). Something records a lot more than before.",check_growth_unknown:"Needs analyses over at least a week.",check_integrity:"Integrity (SQLite)",check_integrity_ok:"Passed on {at}.",check_integrity_error:"Damaged (checked on {at}). Nothing is deleted from the database until a check passes.",check_integrity_info:"Last check on {at} \u2013 a while ago.",check_integrity_unknown:"Not checked yet. The check reads the whole file and can take a few minutes.",check_statistics:"Statistics",check_statistics_ok:"Home Assistant reports no problems with long-term statistics.",check_statistics_warning:"Home Assistant reports {count} problems with long-term statistics (Developer tools \u2192 Statistics).",check_statistics_unknown:"Could not be read.",check_backup_integration:"Backup feature",check_backup_integration_unknown:"Home Assistant's backup feature is not available.",check_schedule:"Automatic backups",check_schedule_ok:"Scheduled.",check_schedule_warning:"No automatic backups are scheduled.",check_newest:"Newest backup with the database",check_newest_ok:"{date}",check_newest_warning:"{date} \u2013 older than expected ({hours} hours).",check_newest_error:"There is no backup that includes the database.",check_last_attempt:"Last automatic attempt",check_last_attempt_ok:"Succeeded.",check_last_attempt_error:"Failed: the last attempt is newer than the last successful backup.",check_last_attempt_unknown:"No automatic backup attempted yet.",check_offsite:"Copy off this device",check_offsite_ok:"Newest off-device copy from {date}.",check_offsite_warning:"No recent copy off this device. If the storage fails, the backups are gone too.",check_size:"Size of the newest backup",check_size_ok:"{bytes}, as usual.",check_size_warning:"{bytes} instead of the usual {typical} \u2013 is something missing or new?",check_size_unknown:"Needs at least four backups to compare.",check_encryption:"Encryption of off-device copies",check_encryption_ok:"All off-device locations are encrypted.",check_encryption_warning:"Not encrypted: {agents}.",check_encryption_unknown:"No off-device backup location is set up.",repack_nothing:"No free pages in the file \u2013 a repack would return nothing.",repack_convert_only:"No free pages. A repack now would only prepare repacking in small steps for later.",check_database_included:"Database in the automatic backup",check_database_included_ok:"Included.",check_database_included_warning:"Not included \u2013 history is missing after a restore.",check_space:"Space for the next backup",check_space_ok:"{free} free, {need} recommended.",check_space_warning:"Only {free} free, {need} recommended.",check_space_unknown:"No backup to compare yet.",check_agents:"Backup locations",check_agents_ok:"All reachable.",check_agents_warning:"Errors at: {agents}.",check_emergency_kit:"Emergency kit saved",check_emergency_kit_ok:"Confirmed on {date}.",check_emergency_kit_info:"Encrypted backups cannot be opened without the emergency kit. Download it in the backup settings and confirm here.",check_restore_test:"Restore tested",check_restore_test_ok:"Last on {date}.",check_restore_test_info:"A backup is only safe once a restore has worked, for example on a test system.",check_restore_test_warning:"Last test on {date} \u2013 more than half a year ago.",core_options_banner:"Home Assistant can now turn off recording per entity itself. An upcoming version of Storage Manager uses that instead of the package file.",db_estimated_innodb:"Sizes are calibrated, but MariaDB/MySQL reports table sizes only as estimates.",db_scaled:"Sizes are scaled to the bytes in use in the file. The split between tables stays an estimate because this SQLite build has no table sizes (dbstat).",detail_attr_only:"In {n} of the last {total} rows only attributes changed, not the state.",detail_drivers:"What triggers new rows",detail_driver:"keeps changing",detail_driver_values:"{share} of attributes \xB7 changes in {rate} of rows \xB7 \u2300 {bytes}",detail_drivers_hint:"An attribute that keeps changing writes a new row on every change, even when the state stays the same. Remedies: shorter retention, don't record, or turn the attribute off in the source integration.",reason_attribute_updates:"In {attr_only} of the rows only an attribute changed, not the state.",inbox_group_title:"{integration} \xB7 {n} entities",reason_time:"Time or date sensor \u2013 changes every minute, its history has no use.",reason_time_statistics:"Time or date sensor with statistics \u2013 1 day of history is enough.",reason_power_statistics:"Power reading {rate}. A few days of history are enough, the hourly statistics are kept for good.",reason_energy_statistics:"Energy meter {rate}. The energy dashboard only uses the long-term statistics, which are kept.",reason_gps_tracker:"GPS tracker: every position stores coordinates. A week is enough for the map.",reason_fast_presence:"Presence or distance sensor {rate} \u2013 writes a great many rows.",group_reason_noise:"Technical diagnostic values (signal, IP, uptime \u2026) \u2013 their history is practically never needed.",group_reason_noise_statistics:"Technical values with long-term statistics \u2013 1 day of history is enough, the statistics stay.",group_reason_time:"Time and date sensors \u2013 their history has no use.",group_reason_time_statistics:"Time and date sensors with statistics \u2013 1 day of history is enough.",group_reason_power_statistics:"Power sensors \u2013 small one by one, large together. The hourly statistics are kept for good.",group_reason_energy_statistics:"Energy meters \u2013 the energy dashboard only uses the long-term statistics, which are kept.",group_reason_gps_tracker:"GPS trackers \u2013 every position stores coordinates. A week is enough for the map.",group_reason_fast_presence:"Presence and distance sensors with a great many rows.",group_reason_attribute_updates:"Sensors where almost only attributes change, not the state.",group_reason_attributes:"Sensors whose space is mostly attributes.",group_reason_statistics_kept:"Very frequent values. The hourly long-term statistics are kept for good.",group_reason_frequent:"Very frequent values \u2013 a short history is usually enough.",hint_esphome:"Better at the source: in ESPHome send only useful values with \u201Cthrottle_average: 60s\u201D or \u201Cor: throttle + delta\u201D.",hint_powercalc:"Better at the source: raise the update intervals in the Powercalc options (energy_update_interval, group_power_update_interval).",hint_shelly:"Better at the source: raise the reporting interval or the power change threshold in the Shelly web interface.",hint_generic:"Better at the source: if the integration has a polling or reporting interval, a longer one writes fewer rows."},yt={de:mt,en:fe};function Ye(o){let e=(o?.locale?.language||o?.language||"en").split("-")[0],t=yt[e]||fe;return(s,a={})=>{let i=t[s]??fe[s]??s;for(let[n,l]of Object.entries(a))i=i.replaceAll(`{${n}}`,String(l));return i}}function Je(o){return o?.locale?.language||o?.language||"en"}var me="storage_manager",ye=["overview","database","backups","files"],kt=150,ke={homeassistant:"var(--sm-c1)",apps_data:"var(--sm-c2)",apps_config:"var(--sm-c6)",backup:"var(--sm-c4)",media:"var(--sm-c3)",share:"var(--sm-c5)",ssl:"var(--sm-c6)",system:"var(--sm-c7)"},vt={backups:"mdi:backup-restore",backups_rotation_off:"mdi:backup-restore",backups_offsite:"mdi:cloud-alert",files:"mdi:file-cabinet",orphans:"mdi:ghost-outline",statistics:"mdi:chart-box-outline",repack:"mdi:database-refresh",top_entities:"mdi:database-alert"},Xe=o=>r`<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
  <path fill="currentColor" d=${o}></path></svg>`,wt="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",$t="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",j=class extends qe(Ke(S)){constructor(){super();let e=window.location.hash.replace("#","");this._tab=ye.includes(e)?e:"overview",this._draft=new Map,this._selected=new Set,this._search="",this._domain="",this._onlyChanged=!1,this._onlyOrphans=!1,this._sort="size",this._limit=kt,this._working=null}get t(){return Ye(this.hass)}get lang(){return Je(this.hass)}connectedCallback(){super.connectedCallback(),this._hashListener=()=>{let e=window.location.hash.replace("#","");ye.includes(e)&&e!==this._tab&&this._setTab(e,!1)},window.addEventListener("hashchange",this._hashListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._hashListener),this._unsubscribe?.then(e=>e()).catch(()=>{}),this._unsubscribe=void 0}updated(e){e.has("hass")&&this.hass&&!this._started&&(this._started=!0,this._loadOverview(),this._loadTab(this._tab),this._unsubscribe=this.hass.connection.subscribeMessage(()=>this._scheduleReload(),{type:`${me}/subscribe`}).catch(()=>{}))}_ws(e,t={}){return this.hass.callWS({type:`${me}/${e}`,...t})}_scheduleReload(){clearTimeout(this._reloadTimer),this._reloadTimer=setTimeout(()=>this._loadOverview(),400)}async _loadOverview(){try{this._overview=await this._ws("overview"),this._error=void 0}catch(e){this._error=e.message||String(e)}}async _loadEntities(){try{this._entities=await this._ws("entities")}catch(e){this._showToast(this.t("error",{msg:e.message}))}}async _loadBackups(){try{this._backups=await this._ws("backups")}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_loadTab(e){e==="database"&&!this._entities&&this._loadEntities(),e==="backups"&&this._loadBackups(),(e==="database"||e==="backups")&&this._loadHealth()}_setTab(e,t=!0){this._tab=e,t&&history.replaceState(null,"",`#${e}`),this._loadTab(e)}async _refreshAll(){this._working="refresh";try{await this._ws("refresh"),await this._loadOverview(),this._tab==="database"&&await this._loadEntities(),this._tab==="backups"&&await this._loadBackups()}finally{this._working=null}}_showToast(e){this._toast=e,clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toast=void 0,5e3)}_navigate(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}_toggleMenu(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}async _previewAndClean(e,t={}){let s;try{s=await this._ws("preview",{targets:e})}catch(c){this._showToast(this.t("error",{msg:c.message}));return}let a=[];for(let c of e){let _=s[c];_&&(c==="backups"?_.items.forEach(u=>a.push(`${u.name} \xB7 ${p(u.bytes,this.lang)}`)):c==="files"?_.items.forEach(u=>a.push(`${this.t(`hog_${u.name}`)} \xB7 ${p(u.bytes,this.lang)}`)):c==="orphans"?a.push(`${this.t("rec_orphans")}: ${_.items.length} \xB7 ${p(_.bytes,this.lang)}`):c==="statistics"?a.push(`${this.t("rec_statistics")}: ${_.items.length}`):c==="purge"?a.push(`${this.t("obsolete_purge")}: ${m(_.rows,this.lang)} \xB7 ${p(_.bytes,this.lang)}`):c==="repack"?a.push(`${this.t("rec_repack")} \xB7 ${p(_.bytes,this.lang)} \u2013 ${this._repackPlanText(_.plan)}`):c==="docker"&&a.push(this.t("docker_title")))}let n=!!s.repack?.plan?.can_convert;this._repackConvert=!0;let l=s.safety&&!s.safety.space.ok;this._dialog={title:this.t("confirm_title"),body:()=>r`<p>${this.t("confirm_cleanup")}</p>
        <ul>${a.map(c=>r`<li>${c}</li>`)}</ul>
        ${s.total?r`<p><b>${this.t("confirm_total",{bytes:p(s.total,this.lang)})}</b></p>`:d}
        ${this._safetyItems(s.safety)}
        ${n?r`<label class="check-line"><input type="checkbox" .checked=${this._repackConvert}
              @change=${c=>this._repackConvert=c.target.checked} />
              <span>${this.t("repack_convert")}<br /><span class="muted small">${this.t("repack_convert_hint")}</span></span></label>`:d}`,confirm:this.t("free_now"),danger:!0,disabled:l,action:()=>this._clean(e,n?{...t,convert:this._repackConvert}:t)}}async _clean(e,t={}){this._working=e.join(",");try{let s=await this._ws("clean",{targets:e,...t}),a=s.freed>0?this.t("done_freed",{bytes:p(s.freed,this.lang)}):this.t("done");if(s.blocked)this._handleBlocked(s.blocked,()=>this._clean(e,{...t,skip_backup:!0}));else{let i=s.backup?` ${this.t("backup_used",{name:s.backup.name})}`:"";this._showToast(s.errors?.length?`${a}${i} ${s.errors.join("; ")}`:`${a}${i}`)}await this._loadOverview(),this._entities&&await this._loadEntities(),this._tab==="backups"&&await this._loadBackups()}catch(s){this._showToast(this.t("error",{msg:s.message}))}finally{this._working=null}}async _analyze(){this._working="analyze";try{(await this._ws("analyze")).cancelled&&this._showToast(this.t("analysis_stopped")),await Promise.all([this._loadOverview(),this._loadEntities()])}catch(e){this._showToast(this.t("error",{msg:e.message}))}finally{this._working=null}}_confirmRestart(){this._dialog={title:this.t("restart"),body:r`<p>${this.t("restart_confirm")}</p>`,confirm:this.t("restart"),danger:!0,action:()=>this.hass.callService("homeassistant","restart")}}async _importGuiRecorder(){try{let e=await this._ws("import_gui_recorder");this._showToast(this.t("gui_recorder_done",{n:e.imported})),await Promise.all([this._loadOverview(),this._loadEntities()])}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_effective(e){let t=this._draft.get(e.entity_id);return t?t.value:e.excluded?"excluded":e.tier}_original(e){return e.excluded?"excluded":e.tier}_setValue(e,t){let s=new Map(this._draft);for(let a of e)a.excluded_by_yaml||(t===this._original(a)?s.delete(a.entity_id):s.set(a.entity_id,{value:t,row:a}));this._draft=s}_draftEstimate(){let e=0;for(let{value:t,row:s}of this._draft.values()){if(!(t in te)||!s.rows)continue;let a=te[t],i=a===0?0:Math.min(s.rows_24h*a,s.rows);e+=s.est_state_bytes*(1-i/s.rows)}return Math.max(e,0)}async _applyDraft(){let e={},t={};for(let[s,{value:a,row:i}]of this._draft){let n=i.excluded;a==="excluded"?n||(t[s]=!0):(n&&(t[s]=!1),a!==i.tier&&(e[s]=a))}await this._sendApply({retention:e,excluded:t,purge_now:!0})}async _sendApply(e){this._working="apply";try{let t=await this._ws("apply",e);this._draft=new Map,this._selected=new Set,t.blocked?(this._showToast(this.t("applied_purge_waits")),this._handleBlocked(t.blocked,()=>this._sendApply({...e,skip_backup:!0}))):this._showToast(t.backup?`${this.t("applied")} ${this.t("backup_used",{name:t.backup.name})}`:this.t("applied")),await Promise.all([this._loadOverview(),this._loadEntities()]),t.packages_missing&&this._showToast(this.t("packages_banner"))}catch(t){this._showToast(this.t("error",{msg:t.message}))}finally{this._working=null}}render(){if(!this.hass)return d;let e=this.t;return r`
      <header>
        <div class="toolbar">
          ${this.narrow?r`<button class="icon-btn" @click=${this._toggleMenu} aria-label="menu">${Xe(wt)}</button>`:d}
          <div class="title">${e("title")}</div>
          <button class="icon-btn" title=${e("refresh")} aria-label=${e("refresh")}
            ?disabled=${!!this._working} @click=${this._refreshAll}>${Xe($t)}</button>
        </div>
        <nav class="tabs" role="tablist">
          ${ye.map(t=>r`<button role="tab" aria-selected=${t===this._tab?"true":"false"}
              @click=${()=>this._setTab(t)}>${e(`tab_${t}`)}</button>`)}
        </nav>
      </header>
      <main>
        ${this._error?r`<div class="banner"><div class="txt">${e("error",{msg:this._error})}</div></div>`:d}
        ${this._busyBanner()}
        ${this._overview?this._renderTab():r`<div class="center"><span class="spinner"></span><p class="muted">${e("loading")}</p></div>`}
      </main>
      ${this._renderDraftBar()} ${this._toast?r`<div class="toast" role="status">${this._toast}</div>`:d}
      ${this._renderDialog()}
    `}_busyBanner(){let e=this._overview?.data?.busy||(this._working&&this._working!=="refresh"?this._working:null);return e?r`<div class="banner info"><span class="spinner"></span><div class="txt">${this.t("busy",{what:this._busyText(e)})}</div></div>`:d}_renderTab(){switch(this._tab){case"database":return this._renderDatabase();case"backups":return this._renderBackups();case"files":return this._renderFiles();default:return this._renderOverview()}}_renderOverview(){let e=this.t,{data:t,recommendations:s,history:a}=this._overview,i=t.disk,n=t.forecast,l;n.growth_per_day===null?l=e("growth_unknown"):n.days_until_full!==null?l=e("growth_full",{growth:p(n.growth_per_day,this.lang),days:Math.round(n.days_until_full)}):n.growth_per_day>1024*1024?l=e("growth_ok",{growth:p(n.growth_per_day,this.lang)}):l=e("growth_none");let c=this._segments(t),_=100-i.percent_used<this._overview.options.low_space_percent,u=n.days_until_full!==null&&n.days_until_full<this._overview.options.forecast_warning_days;return r`
      ${_||u?r`<div class="banner"><ha-icon icon="mdi:harddisk-remove"></ha-icon>
            <div class="txt">${_?t.reclaimable.total>0?e("low_space_banner",{free:p(i.free,this.lang),reclaim:p(t.reclaimable.total,this.lang)}):e("low_space_banner_db",{free:p(i.free,this.lang)}):e("forecast_banner",{days:Math.round(n.days_until_full)})}</div>
            ${t.reclaimable.files+t.reclaimable.backups>0?r`<button class="btn primary" ?disabled=${!!this._working}
                  @click=${()=>this._previewAndClean(this._safeTargets())}>${e("safe_cleanup")}</button>`:r`<button class="btn" @click=${()=>this._setTab("database")}>${e("tab_database")}</button>`}
          </div>`:d}
      <div class="card">
        <div class="hero">
          <div>
            <div class="big">${p(i.free,this.lang)}</div>
            <div class="muted">${e("free")} ${e("of")} ${p(i.total,this.lang)}</div>
          </div>
          <div>
            <div class="row"><b>${w(i.percent_used/100,this.lang)} ${e("used")}</b></div>
            <div class="stack" role="img" aria-label=${`${w(i.percent_used/100,this.lang)} ${e("used")}`}>
              ${c.map(h=>r`<div style="width:${h.share*100}%;background:${h.color}" title=${`${h.label}: ${p(h.bytes,this.lang)}`}></div>`)}
            </div>
            <div class="legend">
              ${c.map(h=>r`<span><i class="dot" style="background:${h.color}"></i>${h.label} ${p(h.bytes,this.lang)}</span>`)}
            </div>
            <p class="muted small" style="margin:10px 0 0">${l}</p>
          </div>
        </div>
      </div>

      <div class="card">
        <h2>${e("reclaim_title")}<span class="spacer"></span>
          ${t.reclaimable.total>0?r`<span class="muted small">${e("reclaim_total",{bytes:p(t.reclaimable.total,this.lang)})}</span>`:d}
        </h2>
        ${s.length===0?r`<p class="muted">${e("reclaim_none")}</p>`:s.map(h=>this._renderRec(h))}
      </div>

      <div class="grid2">
        <div class="card">
          <h2>${e("breakdown_title")}</h2>
          ${this._renderBreakdown(t)}
        </div>
        <div class="card">
          <h2>${e("history_title")}<span class="spacer"></span>
            <span class="muted small">${e("history_total",{bytes:p(t.freed_total,this.lang)})}</span></h2>
          ${a.length===0?r`<p class="muted">${e("history_empty")}</p>`:a.slice(0,8).map(h=>r`<div class="list-row">
                  <div>${e(`action_${h.action}`)}<div class="muted small">${A(h.time,this.lang)}</div></div>
                  <div></div>
                  <div class="num"><b>${p(h.freed_bytes,this.lang)}</b></div>
                </div>`)}
        </div>
      </div>
    `}_safeTargets(){return this._overview.options.backup_rotation?["backups","files"]:["files"]}_segments(e){let t=e.disk,s=[],a=e.breakdown?.children;if(a?.length){for(let i of a)i.used_bytes&&s.push({id:i.id,label:this.t(`cat_${i.id}`)!==`cat_${i.id}`?this.t(`cat_${i.id}`):i.label||i.id,bytes:i.used_bytes,share:i.used_bytes/t.total,color:ke[i.id]||"var(--sm-c7)"});s.sort((i,n)=>n.bytes-i.bytes)}else s.push({id:"used",label:this.t("used_cap"),bytes:t.used,share:t.used/t.total,color:"var(--sm-c1)"});return s}_renderRec(e){let t=this.t,s={count:e.count??"",share:e.share?w(e.share,this.lang):""},a=t(`rec_${e.id}`,s),i=t(`rec_${e.id}_desc`,s),n=!!this._working;return r`<div class="rec">
      <div class="ico"><ha-icon icon=${vt[e.id]||"mdi:broom"}></ha-icon></div>
      <div>
        <div class="t">${a}</div>
        <div class="muted small">${i}</div>
      </div>
      <div class="act row">
        ${e.bytes?r`<span class="amount">${p(e.bytes,this.lang)}</span>`:d}
        ${e.action==="clean"?r`<button class="btn" ?disabled=${n} @click=${()=>this._previewAndClean(e.targets)}>${t("preview")}</button>`:r`<button class="btn" @click=${()=>this._setTab(e.view)}>${t("open")}</button>`}
      </div>
    </div>`}_renderBreakdown(e){let t=this.t,s=e.breakdown;if(!s?.children?.length)return r`<p class="muted small">${t("breakdown_unavailable")}</p>
        ${this._bars([{label:t("used_cap"),bytes:e.disk.used},{label:t("cat_free"),bytes:e.disk.free}],e.disk.total)}`;let a=e.addon_names||{},i=[];for(let n of s.children)if(i.push({label:t(`cat_${n.id}`)!==`cat_${n.id}`?t(`cat_${n.id}`):n.label||n.id,bytes:n.used_bytes,color:ke[n.id]}),n.id==="apps_data"&&n.children?.length)for(let l of n.children.slice(0,6))i.push({label:a[l.id]||l.label||l.id,bytes:l.used_bytes,color:ke.apps_data,indent:!0});return this._bars(i,e.disk.total)}_bars(e,t){return e.map(s=>r`<div style="margin:8px 0 ${s.indent?"6px 18px":"10px"}">
        <div class="row small"><span>${s.label}</span><span class="spacer"></span><span class="muted">${p(s.bytes,this.lang)}</span></div>
        <div class="bar"><div style="width:${Math.max(s.bytes/t*100,.5)}%;background:${s.color||"var(--sm-c1)"}"></div></div>
      </div>`)}_renderDraftBar(){if(!this._draft.size||this._tab!=="database")return d;let e=this.t,t=this._draftEstimate();return r`<div class="draftbar" role="region" aria-label=${e("draft",{n:this._draft.size})}>
      <div>
        <div class="txt">${e("draft",{n:this._draft.size})}</div>
        ${t>0?r`<div class="muted small">${e("draft_estimate",{bytes:p(t,this.lang)})}</div>`:d}
      </div>
      <button class="btn" @click=${()=>this._draft=new Map}>${e("discard")}</button>
      <button class="btn primary" ?disabled=${!!this._working} @click=${this._applyDraft}>${e("apply")}</button>
    </div>`}_renderBackups(){let e=this.t,t=this._overview,s=t.data.backups,a=t.options;if(!s.available)return r`<div class="card"><p class="muted">${e("bk_unavailable")}</p></div>`;let i=this._backups?.plan;return r`
      ${this._healthCard("backups")}
      <div class="card">
        <div class="kpis">
          <div class="kpi"><div class="v">${p(s.local_total,this.lang)}</div><div class="l">${e("bk_kpi_local")}</div></div>
          <div class="kpi"><div class="v">${m(s.local_count,this.lang)}</div><div class="l">${e("bk_kpi_count")}</div></div>
          <div class="kpi"><div class="v">${p(s.deletable_bytes,this.lang)}</div><div class="l">${e("bk_kpi_deletable")}</div></div>
        </div>
        <p class="muted small" style="margin:12px 0 0">
          ${s.rotation_enabled?e("bk_rotation_on"):e("bk_rotation_off")} ·
          ${e("bk_schedule",{d:a.keep_daily,w:a.keep_weekly,m:a.keep_monthly})}
          ${a.require_offsite?r`<br />${e("bk_offsite_required")}`:d}
        </p>
        <div class="row" style="margin-top:12px">
          <button class="btn" @click=${()=>this._navigate(`/config/integrations/integration/${me}`)}>${e("options")}</button>
          <span class="spacer"></span>
          <button class="btn primary danger" ?disabled=${!s.deletable_count||!!this._working}
            @click=${()=>this._previewAndClean(["backups"])}>${e("bk_apply")}</button>
        </div>
      </div>
      <div class="card">
        ${i?i.length===0?r`<p class="muted">${e("bk_none")}</p>`:r`<table>
              <thead><tr><th>${e("col_backup")}</th><th class="num">${e("col_size")}</th><th>${e("col_locations")}</th><th>${e("col_action")}</th></tr></thead>
              <tbody>${i.map(n=>r`<tr>
                  <td><div>${n.name}</div><div class="muted small">${A(n.date,this.lang)}</div></td>
                  <td class="num">${p(n.local_size,this.lang)}</td>
                  <td>${n.local_agents.map(l=>r`<span class="tag" title=${l}>${this._agentName(l)}</span>`)}${n.remote_agents.map(l=>r`<span class="tag ok" title=${l}>${this._agentName(l)}</span>`)}</td>
                  <td>${n.action==="delete_local"?r`<span class="tag bad">${e("bk_reason_rotated")}</span>`:r`<span class=${n.reason==="only_local"?"tag warn":"tag"}>${e(`bk_reason_${n.reason}`)}</span>`}</td>
                </tr>`)}</tbody>
            </table>`:r`<div class="center"><span class="spinner"></span></div>`}
      </div>
    `}_agentName(e){if(e==="hassio.local"||e==="backup.local")return this.t("bk_local");if(e==="cloud.cloud")return"Home Assistant Cloud";let[t,s]=e.split(".",2);return t==="hassio"&&s?s:t.replace(/_/g," ").replace(/\b\w/g,a=>a.toUpperCase())}_renderFiles(){let e=this.t,t=this._overview.data,s=t.files||{hogs:[],large_files:[]},a=!!this._working,i=t.database.repack,n=i?!!i.method&&(i.free_pages_bytes>0||i.can_convert):t.disk.free>(t.database.size||0)*1.1;return r`
      <div class="card">
        <h2>${e("files_hogs")}</h2>
        ${s.hogs.length===0?r`<p class="muted">${e("files_none")}</p>`:s.hogs.map(l=>r`<div class="list-row">
                <div>
                  <div>${e(`hog_${l.key}`)} <span class=${l.safety==="safe"?"tag ok":"tag warn"}>${e(`safety_${l.safety}`)}</span></div>
                  <div class="muted small" style="overflow-wrap:anywhere">${l.paths.slice(0,3).join(", ")}${l.paths.length>3?" \u2026":""}</div>
                </div>
                <div class="num"><b>${p(l.size_bytes,this.lang)}</b></div>
                <button class="btn danger" ?disabled=${a}
                  @click=${()=>this._confirmHog(l)}>${e("delete")}</button>
              </div>`)}
      </div>

      <div class="card">
        <h2>${e("maintenance")}</h2>
        <div class="list-row">
          <div><div>${e("repack_title")}</div><div class="muted small">${i?this._repackPlanText(i):e(n?"repack_desc":"repack_impossible")}</div></div>
          <div class="num">${t.reclaimable.repack?p(t.reclaimable.repack,this.lang):""}</div>
          <button class="btn" ?disabled=${a||!n} @click=${()=>this._previewAndClean(["repack"])}>${e("run")}</button>
        </div>
        ${t.is_hassio?r`<div class="list-row">
              <div><div>${e("docker_title")}</div><div class="muted small">${e("docker_desc")}</div></div>
              <div></div>
              <button class="btn" ?disabled=${a} @click=${()=>this._previewAndClean(["docker"])}>${e("run")}</button>
            </div>`:d}
      </div>

      ${s.large_files.length?r`<div class="card"><h2>${e("files_large")}</h2>
            <p class="muted small">${e("files_large_hint")}</p>
            ${s.large_files.map(l=>r`<div class="list-row"><div style="overflow-wrap:anywhere"><code>${l.path}</code></div><div></div><div class="num">${p(l.size_bytes,this.lang)}</div></div>`)}</div>`:d}
    `}_confirmHog(e){let t=this.t;this._dialog={title:t(`hog_${e.key}`),body:r`<p>${t("confirm_cleanup")}</p><ul>${e.paths.map(s=>r`<li><code>${s}</code></li>`)}</ul>
        <p><b>${t("confirm_total",{bytes:p(e.size_bytes,this.lang)})}</b></p>`,confirm:t("delete"),danger:!0,action:()=>this._clean(["files"],{hog_keys:[e.key]})}}_renderDialog(){let e=this._dialog;if(!e)return d;let t=()=>this._dialog=void 0;return r`<div class="scrim" @click=${s=>s.target===s.currentTarget&&t()}
      @keydown=${s=>s.key==="Escape"&&t()}>
      <div class="dialog" role="dialog" aria-modal="true" aria-label=${e.title}>
        <h3>${e.title}</h3>
        ${typeof e.body=="function"?e.body():e.body}
        <div class="actions">
          <button class="btn" @click=${t}>${this.t("cancel")}</button>
          <button class=${e.danger?"btn primary danger":"btn primary"} autofocus ?disabled=${!!e.disabled}
            @click=${()=>{t(),e.action()}}>${e.confirm}</button>
        </div>
      </div>
    </div>`}};ae(j,"properties",{hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_tab:{state:!0},_overview:{state:!0},_entities:{state:!0},_backups:{state:!0},_health:{state:!0},_repackConvert:{state:!0},_draft:{state:!0},_selected:{state:!0},_search:{state:!0},_domain:{state:!0},_onlyChanged:{state:!0},_onlyOrphans:{state:!0},_sort:{state:!0},_limit:{state:!0},_dialog:{state:!0},_detail:{state:!0},_view:{state:!0},_openGroups:{state:!0},_onlyAdvice:{state:!0},_settingsOpen:{state:!0},_settingsDraft:{state:!0},_toast:{state:!0},_working:{state:!0},_error:{state:!0}}),ae(j,"styles",Qe);customElements.get("storage-manager-panel")||customElements.define("storage-manager-panel",j);
