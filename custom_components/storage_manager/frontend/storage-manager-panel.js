var je=Object.defineProperty;var Ve=(r,e,t)=>e in r?je(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Y=(r,e,t)=>Ve(r,typeof e!="symbol"?e+"":e,t);var L=globalThis,H=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),pe=new WeakMap,C=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(H&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=pe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&pe.set(t,e))}return e}toString(){return this.cssText}},_e=r=>new C(typeof r=="string"?r:r+"",void 0,Z),Q=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((s,i,a)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[a+1],r[0]);return new C(t,r,Z)},ue=(r,e)=>{if(H)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=L.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},J=H?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return _e(t)})(r):r;var{is:Fe,defineProperty:Ge,getOwnPropertyDescriptor:qe,getOwnPropertyNames:We,getOwnPropertySymbols:Ke,getPrototypeOf:Ye}=Object,U=globalThis,be=U.trustedTypes,Ze=be?be.emptyScript:"",Qe=U.reactiveElementPolyfillSupport,z=(r,e)=>r,X={toAttribute(r,e){switch(e){case Boolean:r=r?Ze:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},fe=(r,e)=>!Fe(r,e),ge={attribute:!0,type:String,converter:X,reflect:!1,useDefault:!1,hasChanged:fe};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;var v=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Ge(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:a}=qe(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){let l=i?.call(this);a?.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ge}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;let e=Ye(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){let t=this.properties,s=[...We(t),...Ke(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(J(i))}else e!==void 0&&t.push(J(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ue(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let a=(s.converter?.toAttribute!==void 0?s.converter:X).toAttribute(t,s.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let a=s.getPropertyOptions(i),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:X;this._$Em=i;let l=n.fromAttribute(t,a.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,s,i=!1,a){if(e!==void 0){let n=this.constructor;if(i===!1&&(a=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??fe)(a,t)||s.useDefault&&s.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:a},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),a!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,a]of s){let{wrapped:n}=a,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[z("elementProperties")]=new Map,v[z("finalized")]=new Map,Qe?.({ReactiveElement:v}),(U.reactiveElementVersions??=[]).push("2.1.2");var te=globalThis,me=r=>r,I=te.trustedTypes,ve=I?I.createPolicy("lit-html",{createHTML:r=>r}):void 0,se="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,ie="?"+y,Je=`<${ie}>`,x=document,N=()=>x.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",ae=Array.isArray,Ae=r=>ae(r)||typeof r?.[Symbol.iterator]=="function",ee=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,$e=/>/g,w=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),we=/'/g,ke=/"/g,Se=/^(?:script|style|textarea|title)$/i,re=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),o=re(1),ut=re(2),bt=re(3),f=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),xe=new WeakMap,k=x.createTreeWalker(x,129);function Ee(r,e){if(!ae(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ve!==void 0?ve.createHTML(e):e}var Te=(r,e)=>{let t=r.length-1,s=[],i,a=e===2?"<svg>":e===3?"<math>":"",n=R;for(let l=0;l<t;l++){let c=r[l],_,b,h=-1,p=0;for(;p<c.length&&(n.lastIndex=p,b=n.exec(c),b!==null);)p=n.lastIndex,n===R?b[1]==="!--"?n=ye:b[1]!==void 0?n=$e:b[2]!==void 0?(Se.test(b[2])&&(i=RegExp("</"+b[2],"g")),n=w):b[3]!==void 0&&(n=w):n===w?b[0]===">"?(n=i??R,h=-1):b[1]===void 0?h=-2:(h=n.lastIndex-b[2].length,_=b[1],n=b[3]===void 0?w:b[3]==='"'?ke:we):n===ke||n===we?n=w:n===ye||n===$e?n=R:(n=w,i=void 0);let g=n===w&&r[l+1].startsWith("/>")?" ":"";a+=n===R?c+Je:h>=0?(s.push(_),c.slice(0,h)+se+c.slice(h)+y+g):c+y+(h===-2?l:g)}return[Ee(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},M=class r{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let a=0,n=0,l=e.length-1,c=this.parts,[_,b]=Te(e,t);if(this.el=r.createElement(_,s),k.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=k.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(se)){let p=b[n++],g=i.getAttribute(h).split(y),m=/([.?@])?(.*)/.exec(p);c.push({type:1,index:a,name:m[2],strings:g,ctor:m[1]==="."?V:m[1]==="?"?F:m[1]==="@"?G:S}),i.removeAttribute(h)}else h.startsWith(y)&&(c.push({type:6,index:a}),i.removeAttribute(h));if(Se.test(i.tagName)){let h=i.textContent.split(y),p=h.length-1;if(p>0){i.textContent=I?I.emptyScript:"";for(let g=0;g<p;g++)i.append(h[g],N()),k.nextNode(),c.push({type:2,index:++a});i.append(h[p],N())}}}else if(i.nodeType===8)if(i.data===ie)c.push({type:2,index:a});else{let h=-1;for(;(h=i.data.indexOf(y,h+1))!==-1;)c.push({type:7,index:a}),h+=y.length-1}a++}}static createElement(e,t){let s=x.createElement("template");return s.innerHTML=e,s}};function A(r,e,t=r,s){if(e===f)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,a=O(e)?void 0:e._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=A(r,i._$AS(r,e.values),i,s)),e}var j=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??x).importNode(t,!0);k.currentNode=i;let a=k.nextNode(),n=0,l=0,c=s[0];for(;c!==void 0;){if(n===c.index){let _;c.type===2?_=new T(a,a.nextSibling,this,e):c.type===1?_=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(_=new q(a,this,e)),this._$AV.push(_),c=s[++l]}n!==c?.index&&(a=k.nextNode(),n++)}return k.currentNode=x,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},T=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),O(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==f&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ae(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=M.createElement(Ee(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let a=new j(i,this),n=a.u(this.options);a.p(t),this.T(n),this._$AH=a}}_$AC(e){let t=xe.get(e.strings);return t===void 0&&xe.set(e.strings,t=new M(e)),t}k(e){ae(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let a of e)i===t.length?t.push(s=new r(this.O(N()),this.O(N()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=me(e).nextSibling;me(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,a){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(e,t=this,s,i){let a=this.strings,n=!1;if(a===void 0)e=A(this,e,t,0),n=!O(e)||e!==this._$AH&&e!==f,n&&(this._$AH=e);else{let l=e,c,_;for(e=a[0],c=0;c<a.length-1;c++)_=A(this,l[s+c],t,c),_===f&&(_=this._$AH[c]),n||=!O(_)||_!==this._$AH[c],_===d?e=d:e!==d&&(e+=(_??"")+a[c+1]),this._$AH[c]=_}n&&!i&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},V=class extends S{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},F=class extends S{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}},G=class extends S{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??d)===f)return;let s=this._$AH,i=e===d&&s!==d||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},q=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}},Ce={M:se,P:y,A:ie,C:1,L:Te,R:j,D:Ae,V:A,I:T,H:S,N:F,U:G,B:V,F:q},Xe=te.litHtmlPolyfillSupport;Xe?.(M,T),(te.litHtmlVersions??=[]).push("3.3.3");var ze=(r,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let a=t?.renderBefore??null;s._$litPart$=i=new T(e.insertBefore(N(),a),a,void 0,t??{})}return i._$AI(r),i};var ne=globalThis,$=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return f}};$._$litElement$=!0,$.finalized=!0,ne.litElementHydrateSupport?.({LitElement:$});var et=ne.litElementPolyfillSupport;et?.({LitElement:$});(ne.litElementVersions??=[]).push("4.2.2");var E={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Re=r=>(...e)=>({_$litDirective$:r,values:e}),W=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:zt}=Ce;var Ne=r=>r.strings===void 0;var tt={},Oe=(r,e=tt)=>r._$AH=e;var Me=Re(class extends W{constructor(r){if(super(r),r.type!==E.PROPERTY&&r.type!==E.ATTRIBUTE&&r.type!==E.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ne(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===f||e===d)return e;let t=r.element,s=r.name;if(r.type===E.PROPERTY){if(e===t[s])return f}else if(r.type===E.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(s))return f}else if(r.type===E.ATTRIBUTE&&t.getAttribute(s)===e+"")return f;return Oe(r),e}});var De=Q`
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
    .rec .act { grid-column: 2; justify-self: start; }
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
`;var st={title:"Storage Manager",tab_overview:"\xDCbersicht",tab_database:"Datenbank",tab_backups:"Backups",tab_files:"Dateien",refresh:"Aktualisieren",loading:"Lade \u2026",free:"frei",of:"von",used:"belegt",disk:"Speicher",growth_none:"Kein messbares Wachstum in den letzten 7 Tagen.",growth_unknown:"Prognose ab ca. 12 Stunden Messdaten.",growth_full:"W\xE4chst um {growth}/Tag \u2013 voll in etwa {days} Tagen.",growth_ok:"W\xE4chst um {growth}/Tag.",reclaim_title:"Gr\xF6\xDFte Einsparpotenziale",reclaim_total:"Sicher freigebbar: {bytes}",reclaim_none:"Gerade nichts Nennenswertes freizugeben. Gut gepflegt!",safe_cleanup:"Sicher aufr\xE4umen",preview:"Vorschau",free_now:"Jetzt freigeben",open:"\xD6ffnen",rec_backups:"Lokale Backups au\xDFerhalb der Rotation",rec_backups_desc:"{count} lokale Kopien liegen auch extern und fallen aus deinem Aufbewahrungsschema.",rec_backups_rotation_off:"Backup-Rotation ist aus",rec_backups_rotation_off_desc:"{count} lokale Kopien w\xE4ren laut Schema entbehrlich. Rotation in den Optionen aktivieren.",rec_backups_offsite:"Backups nur lokal",rec_backups_offsite_desc:"{count} Backups existieren nur auf diesem Ger\xE4t \u2013 richte ein externes Backup-Ziel ein.",rec_files:"Caches und alte Logs",rec_files_desc:"Dateien, die Home Assistant bei Bedarf neu erzeugt.",rec_orphans:"Verlauf gel\xF6schter Entit\xE4ten",rec_orphans_desc:"{count} Entit\xE4ten existieren nicht mehr, ihr Verlauf liegt noch in der Datenbank.",rec_statistics:"Statistiken gel\xF6schter Entit\xE4ten",rec_statistics_desc:"{count} Langzeitstatistiken ohne zugeh\xF6rige Entit\xE4t.",rec_repack:"Datenbank neu packen",rec_repack_desc:"Freie Seiten in der Datenbankdatei werden an das Dateisystem zur\xFCckgegeben.",rec_top_entities:"{count} Entit\xE4ten = {share} der Datenbank",rec_top_entities_desc:"Hier lohnt sich eine k\xFCrzere Aufbewahrung am meisten.",breakdown_title:"Speicher-Aufteilung",breakdown_unavailable:"Die Aufteilung nach Bereichen liefert nur der Supervisor (Home Assistant OS / Supervised).",cat_system:"System",cat_homeassistant:"Home Assistant",cat_apps_data:"Add-on-Daten",cat_apps_config:"Add-on-Konfiguration",cat_media:"Medien",cat_share:"Share",cat_backup:"Backups",cat_ssl:"SSL",cat_free:"Frei",history_title:"Verlauf",history_empty:"Noch nichts aufger\xE4umt.",history_total:"Insgesamt freigegeben: {bytes}",action_cleanup:"Aufr\xE4umen",action_purge_entities:"Verlauf bereinigt",db_size:"Datenbank",db_engine:"Engine",db_keep:"Globale Aufbewahrung",days:"{n} Tage",db_analysis:"Analyse",db_analysis_never:"noch nie",db_analysis_running:"Analyse l\xE4uft \u2026",analyze:"Analysieren",db_estimated:"Gr\xF6\xDFen sind Sch\xE4tzungen aus Zeilen und Attributen.",db_calibrated:"Gr\xF6\xDFen sind anhand der echten Tabellengr\xF6\xDFen kalibriert.",search:"Suchen \u2026",all_domains:"Alle Domains",filter_changed:"Nur ge\xE4ndert",filter_orphans:"Nur verwaiste",sort_size:"Gr\xF6\xDFe",sort_rate:"Eintr\xE4ge/24 h",sort_name:"Name",col_entity:"Entit\xE4t",col_size:"Gr\xF6\xDFe",col_rate:"24 h",col_rows:"Eintr\xE4ge",col_retention:"Aufbewahrung",tier_default:"Standard ({days} Tage)",tier_7:"7 Tage",tier_3:"3 Tage",tier_1:"1 Tag",tier_drop:"Nur letzte Stunde",tier_excluded:"Nicht aufzeichnen",tier_excluded_needs_packages:"Nicht aufzeichnen (Packages n\xF6tig)",excluded_by_yaml:"Per YAML ausgeschlossen",orphan:"verwaist",show_more:"{n} weitere anzeigen",selected:"{n} ausgew\xE4hlt",set_for_selection:"Aufbewahrung f\xFCr Auswahl",clear_selection:"Auswahl aufheben",draft:"{n} \xC4nderungen",draft_estimate:"ca. {bytes} frei nach dem Anwenden",discard:"Verwerfen",apply:"Anwenden",applied:"\xC4nderungen angewendet.",restart_banner:"Ge\xE4nderte Ausschl\xFCsse ({n}) wirken erst nach einem Neustart.",restart:"Neu starten",restart_confirm:"Home Assistant jetzt neu starten?",packages_banner:"\u201ENicht aufzeichnen\u201C braucht einen Packages-Ordner. Die Reparaturmeldung richtet ihn mit einem Klick ein.",packages_open:"Reparaturen \xF6ffnen",gui_recorder_banner:"GUI Recorder ist installiert. Seine Ausschl\xFCsse lassen sich \xFCbernehmen.",gui_recorder_import:"\xDCbernehmen",gui_recorder_done:"{n} Ausschl\xFCsse \xFCbernommen. Entferne danach den Eintrag \u201Erecorder: !include gui_recorder.yaml\u201C und deinstalliere GUI Recorder.",yaml_filters:"Vorhandene YAML-Filter bleiben unver\xE4ndert und werden respektiert.",yaml_include_warning:"Dein Recorder nutzt eine Include-Liste. Nur dort aufgef\xFChrte Entit\xE4ten werden aufgezeichnet.",events_title:"H\xE4ufigste Ereignisse",analysis_needed:"F\xFCr Gr\xF6\xDFen pro Entit\xE4t bitte zuerst analysieren.",bk_local:"Lokal",bk_count:"{n} Backups",bk_rotation_on:"Rotation aktiv",bk_rotation_off:"Rotation aus (in den Optionen aktivieren)",bk_schedule:"Behalte {d} t\xE4gliche, {w} w\xF6chentliche, {m} monatliche",bk_offsite_required:"Lokale Kopien werden nur gel\xF6scht, wenn das Backup auch extern liegt.",bk_unavailable:"Die Backup-Integration ist nicht geladen.",bk_none:"Keine lokalen Backups.",bk_apply:"Rotation jetzt anwenden",bk_reason_newest:"Neuestes",bk_reason_daily:"T\xE4glich",bk_reason_weekly:"W\xF6chentlich",bk_reason_monthly:"Monatlich",bk_reason_only_local:"Nur lokal vorhanden",bk_reason_unknown_date:"Datum unbekannt",bk_reason_rotated:"Lokal l\xF6schen",col_backup:"Backup",col_locations:"Orte",col_action:"Plan",files_hogs:"Aufr\xE4umbare Dateien",files_none:"Keine bekannten Platzfresser gefunden.",files_large:"Gro\xDFe Dateien im Konfigurationsordner",files_large_hint:"Nur zur Info \u2013 diese Dateien werden nie automatisch gel\xF6scht.",safety_safe:"sicher",safety_review:"pr\xFCfen",hog_esphome_build:"ESPHome-Build-Cache",hog_tts_cache:"Sprachausgabe-Cache (TTS)",hog_rotated_logs:"Alte Logdateien",hog_corrupt_databases:"Besch\xE4digte Datenbank-Kopien",hog_zigbee2mqtt_logs:"Zigbee2MQTT-Logs",hog_core_dumps:"Absturzabbilder",delete:"L\xF6schen",maintenance:"Wartung",docker_title:"Ungenutzte Docker-Images",docker_desc:"L\xE4sst den Supervisor ungenutzte Images, Container und Build-Reste entfernen. Dauert einige Minuten.",repack_title:"Datenbank neu packen",repack_desc:"Gibt freie Seiten der Datenbankdatei zur\xFCck. Braucht etwa so viel freien Speicher wie die Datenbank gro\xDF ist.",repack_impossible:"Zu wenig freier Speicher f\xFCr das Neupacken.",run:"Ausf\xFChren",confirm_title:"Best\xE4tigen",confirm_cleanup:"Folgendes wird entfernt:",confirm_total:"Insgesamt ca. {bytes}",cancel:"Abbrechen",done_freed:"{bytes} freigegeben.",done:"Erledigt.",error:"Fehler: {msg}",busy:"L\xE4uft: {what} \u2026",unknown:"unbekannt",never:"nie",just_now:"gerade eben",ago:"vor {t}",not_admin:"Nur f\xFCr Administratoren.",options:"Optionen",used_cap:"Belegt",low_space_banner:"Nur noch {free} frei. Etwa {reclaim} lassen sich sicher freigeben.",low_space_banner_db:"Nur noch {free} frei. In der Datenbank-Ansicht siehst du, wo sich k\xFCrzere Aufbewahrung lohnt.",forecast_banner:"Beim aktuellen Wachstum ist der Speicher in etwa {days} Tagen voll.",bk_kpi_local:"Lokal belegt",bk_kpi_count:"Lokale Backups",bk_kpi_deletable:"Nach Plan l\xF6schbar"},oe={title:"Storage Manager",tab_overview:"Overview",tab_database:"Database",tab_backups:"Backups",tab_files:"Files",refresh:"Refresh",loading:"Loading \u2026",free:"free",of:"of",used:"used",disk:"Disk",growth_none:"No measurable growth in the last 7 days.",growth_unknown:"Forecast available after about 12 hours of samples.",growth_full:"Growing {growth}/day \u2013 full in about {days} days.",growth_ok:"Growing {growth}/day.",reclaim_title:"Biggest savings",reclaim_total:"Safely reclaimable: {bytes}",reclaim_none:"Nothing worth cleaning right now. Well kept!",safe_cleanup:"Safe cleanup",preview:"Preview",free_now:"Free now",open:"Open",rec_backups:"Local backups outside the rotation",rec_backups_desc:"{count} local copies also exist elsewhere and fall outside your retention schedule.",rec_backups_rotation_off:"Backup rotation is off",rec_backups_rotation_off_desc:"{count} local copies would be expendable. Enable rotation in the options.",rec_backups_offsite:"Backups only stored locally",rec_backups_offsite_desc:"{count} backups exist only on this device \u2013 set up an off-site backup location.",rec_files:"Caches and old logs",rec_files_desc:"Files Home Assistant recreates when needed.",rec_orphans:"History of deleted entities",rec_orphans_desc:"{count} entities no longer exist but their history is still stored.",rec_statistics:"Statistics of deleted entities",rec_statistics_desc:"{count} long-term statistics without an entity.",rec_repack:"Repack the database",rec_repack_desc:"Returns free pages inside the database file to the file system.",rec_top_entities:"{count} entities = {share} of the database",rec_top_entities_desc:"Shorter retention pays off most here.",breakdown_title:"Storage breakdown",breakdown_unavailable:"The breakdown by area is only provided by the Supervisor (Home Assistant OS / Supervised).",cat_system:"System",cat_homeassistant:"Home Assistant",cat_apps_data:"Add-on data",cat_apps_config:"Add-on configuration",cat_media:"Media",cat_share:"Share",cat_backup:"Backups",cat_ssl:"SSL",cat_free:"Free",history_title:"History",history_empty:"Nothing cleaned yet.",history_total:"Freed in total: {bytes}",action_cleanup:"Cleanup",action_purge_entities:"History purged",db_size:"Database",db_engine:"Engine",db_keep:"Global retention",days:"{n} days",db_analysis:"Analysis",db_analysis_never:"never",db_analysis_running:"Analysis running \u2026",analyze:"Analyze",db_estimated:"Sizes are estimates based on rows and attributes.",db_calibrated:"Sizes are calibrated with the real table sizes.",search:"Search \u2026",all_domains:"All domains",filter_changed:"Changed only",filter_orphans:"Orphans only",sort_size:"Size",sort_rate:"Rows/24 h",sort_name:"Name",col_entity:"Entity",col_size:"Size",col_rate:"24 h",col_rows:"Rows",col_retention:"Retention",tier_default:"Default ({days} days)",tier_7:"7 days",tier_3:"3 days",tier_1:"1 day",tier_drop:"Last hour only",tier_excluded:"Don't record",tier_excluded_needs_packages:"Don't record (needs packages)",excluded_by_yaml:"Excluded in YAML",orphan:"orphaned",show_more:"Show {n} more",selected:"{n} selected",set_for_selection:"Retention for selection",clear_selection:"Clear selection",draft:"{n} changes",draft_estimate:"about {bytes} freed after applying",discard:"Discard",apply:"Apply",applied:"Changes applied.",restart_banner:"Changed exclusions ({n}) take effect after a restart.",restart:"Restart",restart_confirm:"Restart Home Assistant now?",packages_banner:"\u201CDon't record\u201D needs a packages folder. The repair issue sets it up with one click.",packages_open:"Open repairs",gui_recorder_banner:"GUI Recorder is installed. Its exclusions can be imported.",gui_recorder_import:"Import",gui_recorder_done:"{n} exclusions imported. Afterwards remove \u201Crecorder: !include gui_recorder.yaml\u201D and uninstall GUI Recorder.",yaml_filters:"Existing YAML filters stay untouched and are respected.",yaml_include_warning:"Your recorder uses an include list. Only entities listed there are recorded.",events_title:"Most frequent events",analysis_needed:"Run an analysis first to see sizes per entity.",bk_local:"Local",bk_count:"{n} backups",bk_rotation_on:"Rotation on",bk_rotation_off:"Rotation off (enable in the options)",bk_schedule:"Keep {d} daily, {w} weekly, {m} monthly",bk_offsite_required:"Local copies are only deleted when the backup also exists elsewhere.",bk_unavailable:"The backup integration is not loaded.",bk_none:"No local backups.",bk_apply:"Apply rotation now",bk_reason_newest:"Newest",bk_reason_daily:"Daily",bk_reason_weekly:"Weekly",bk_reason_monthly:"Monthly",bk_reason_only_local:"Only stored locally",bk_reason_unknown_date:"Unknown date",bk_reason_rotated:"Delete local copy",col_backup:"Backup",col_locations:"Locations",col_action:"Plan",files_hogs:"Files that can be cleaned",files_none:"No known space hogs found.",files_large:"Large files in the config folder",files_large_hint:"For information only \u2013 these files are never deleted automatically.",safety_safe:"safe",safety_review:"review",hog_esphome_build:"ESPHome build cache",hog_tts_cache:"Text-to-speech cache",hog_rotated_logs:"Old log files",hog_corrupt_databases:"Corrupt database copies",hog_zigbee2mqtt_logs:"Zigbee2MQTT logs",hog_core_dumps:"Crash dumps",delete:"Delete",maintenance:"Maintenance",docker_title:"Unused Docker images",docker_desc:"Lets the Supervisor remove unused images, containers and build leftovers. Takes a few minutes.",repack_title:"Repack the database",repack_desc:"Returns free pages of the database file. Needs about as much free space as the database size.",repack_impossible:"Not enough free space to repack.",run:"Run",confirm_title:"Confirm",confirm_cleanup:"The following will be removed:",confirm_total:"About {bytes} in total",cancel:"Cancel",done_freed:"{bytes} freed.",done:"Done.",error:"Error: {msg}",busy:"Running: {what} \u2026",unknown:"unknown",never:"never",just_now:"just now",ago:"{t} ago",not_admin:"Administrators only.",options:"Options",used_cap:"Used",low_space_banner:"Only {free} free. About {reclaim} can be reclaimed safely.",low_space_banner_db:"Only {free} free. The database view shows where shorter retention pays off.",forecast_banner:"At the current growth the disk is full in about {days} days.",bk_kpi_local:"Used locally",bk_kpi_count:"Local backups",bk_kpi_deletable:"Deletable by plan"},it={de:st,en:oe};function Pe(r){let e=(r?.locale?.language||r?.language||"en").split("-")[0],t=it[e]||oe;return(s,i={})=>{let a=t[s]??oe[s]??s;for(let[n,l]of Object.entries(i))a=a.replaceAll(`{${n}}`,String(l));return a}}function Be(r){return r?.locale?.language||r?.language||"en"}var Le=["B","KB","MB","GB","TB"];function u(r,e="en"){if(r==null||Number.isNaN(r))return"\u2013";let t=Math.abs(r),s=0;for(;t>=1024&&s<Le.length-1;)t/=1024,s+=1;let i=t>=100||s===0?0:t>=10?1:2,a=new Intl.NumberFormat(e,{maximumFractionDigits:i}).format(t);return`${r<0?"\u2212":""}${a} ${Le[s]}`}function D(r,e="en"){return r==null?"\u2013":new Intl.NumberFormat(e).format(r)}function K(r,e="en"){return new Intl.NumberFormat(e,{style:"percent",maximumFractionDigits:0}).format(r)}function He(r,e,t="en"){if(!r)return e("never");let s=Math.round(Date.now()/1e3-r);if(s<60)return e("just_now");let i=new Intl.RelativeTimeFormat(t,{numeric:"auto"}),a=[[60,"second"],[60,"minute"],[24,"hour"],[7,"day"],[4.35,"week"],[12,"month"],[Number.POSITIVE_INFINITY,"year"]],n=s;for(let[l,c]of a){if(Math.abs(n)<l)return i.format(-Math.round(n),c);n/=l}return""}function le(r,e="en"){if(!r)return"\u2013";let t=typeof r=="number"?new Date(r*1e3):new Date(r);return new Intl.DateTimeFormat(e,{dateStyle:"medium",timeStyle:"short"}).format(t)}var ce="storage_manager",de=["overview","database","backups","files"],P=150,he={homeassistant:"var(--sm-c1)",apps_data:"var(--sm-c2)",apps_config:"var(--sm-c6)",backup:"var(--sm-c4)",media:"var(--sm-c3)",share:"var(--sm-c5)",ssl:"var(--sm-c6)",system:"var(--sm-c7)"},at={backups:"mdi:backup-restore",backups_rotation_off:"mdi:backup-restore",backups_offsite:"mdi:cloud-alert",files:"mdi:file-cabinet",orphans:"mdi:ghost-outline",statistics:"mdi:chart-box-outline",repack:"mdi:database-refresh",top_entities:"mdi:database-alert"},rt={sqlite:"SQLite",mysql:"MariaDB/MySQL",postgresql:"PostgreSQL"},nt=["default","7","3","1","drop","excluded"],Ue={7:7,3:3,1:1,drop:0,excluded:0},Ie=r=>o`<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
  <path fill="currentColor" d=${r}></path></svg>`,ot="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",lt="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z",B=class extends ${constructor(){super();let e=window.location.hash.replace("#","");this._tab=de.includes(e)?e:"overview",this._draft=new Map,this._selected=new Set,this._search="",this._domain="",this._onlyChanged=!1,this._onlyOrphans=!1,this._sort="size",this._limit=P,this._working=null}get t(){return Pe(this.hass)}get lang(){return Be(this.hass)}connectedCallback(){super.connectedCallback(),this._hashListener=()=>{let e=window.location.hash.replace("#","");de.includes(e)&&e!==this._tab&&this._setTab(e,!1)},window.addEventListener("hashchange",this._hashListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._hashListener),this._unsubscribe?.then(e=>e()).catch(()=>{}),this._unsubscribe=void 0}updated(e){e.has("hass")&&this.hass&&!this._started&&(this._started=!0,this._loadOverview(),this._loadTab(this._tab),this._unsubscribe=this.hass.connection.subscribeMessage(()=>this._scheduleReload(),{type:`${ce}/subscribe`}).catch(()=>{}))}_ws(e,t={}){return this.hass.callWS({type:`${ce}/${e}`,...t})}_scheduleReload(){clearTimeout(this._reloadTimer),this._reloadTimer=setTimeout(()=>this._loadOverview(),400)}async _loadOverview(){try{this._overview=await this._ws("overview"),this._error=void 0}catch(e){this._error=e.message||String(e)}}async _loadEntities(){try{this._entities=await this._ws("entities")}catch(e){this._showToast(this.t("error",{msg:e.message}))}}async _loadBackups(){try{this._backups=await this._ws("backups")}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_loadTab(e){e==="database"&&!this._entities&&this._loadEntities(),e==="backups"&&this._loadBackups()}_setTab(e,t=!0){this._tab=e,t&&history.replaceState(null,"",`#${e}`),this._loadTab(e)}async _refreshAll(){this._working="refresh";try{await this._ws("refresh"),await this._loadOverview(),this._tab==="database"&&await this._loadEntities(),this._tab==="backups"&&await this._loadBackups()}finally{this._working=null}}_showToast(e){this._toast=e,clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toast=void 0,5e3)}_navigate(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}_toggleMenu(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}async _previewAndClean(e,t={}){let s;try{s=await this._ws("preview",{targets:e})}catch(a){this._showToast(this.t("error",{msg:a.message}));return}let i=[];for(let a of e){let n=s[a];n&&(a==="backups"?n.items.forEach(l=>i.push(`${l.name} \xB7 ${u(l.bytes,this.lang)}`)):a==="files"?n.items.forEach(l=>i.push(`${this.t(`hog_${l.name}`)} \xB7 ${u(l.bytes,this.lang)}`)):a==="orphans"?i.push(`${this.t("rec_orphans")}: ${n.items.length} \xB7 ${u(n.bytes,this.lang)}`):a==="statistics"?i.push(`${this.t("rec_statistics")}: ${n.items.length}`):a==="repack"?i.push(`${this.t("rec_repack")} \xB7 ${u(n.bytes,this.lang)}`):a==="docker"&&i.push(this.t("docker_title")))}this._dialog={title:this.t("confirm_title"),body:o`<p>${this.t("confirm_cleanup")}</p>
        <ul>${i.map(a=>o`<li>${a}</li>`)}</ul>
        ${s.total?o`<p><b>${this.t("confirm_total",{bytes:u(s.total,this.lang)})}</b></p>`:d}`,confirm:this.t("free_now"),danger:!0,action:()=>this._clean(e,t)}}async _clean(e,t={}){this._working=e.join(",");try{let s=await this._ws("clean",{targets:e,...t}),i=s.freed>0?this.t("done_freed",{bytes:u(s.freed,this.lang)}):this.t("done");this._showToast(s.errors?.length?`${i} ${s.errors.join("; ")}`:i),await this._loadOverview(),this._entities&&await this._loadEntities(),this._tab==="backups"&&await this._loadBackups()}catch(s){this._showToast(this.t("error",{msg:s.message}))}finally{this._working=null}}async _analyze(){this._working="analyze";try{await this._ws("analyze"),await Promise.all([this._loadOverview(),this._loadEntities()])}catch(e){this._showToast(this.t("error",{msg:e.message}))}finally{this._working=null}}_confirmRestart(){this._dialog={title:this.t("restart"),body:o`<p>${this.t("restart_confirm")}</p>`,confirm:this.t("restart"),danger:!0,action:()=>this.hass.callService("homeassistant","restart")}}async _importGuiRecorder(){try{let e=await this._ws("import_gui_recorder");this._showToast(this.t("gui_recorder_done",{n:e.imported})),await Promise.all([this._loadOverview(),this._loadEntities()])}catch(e){this._showToast(this.t("error",{msg:e.message}))}}_effective(e){let t=this._draft.get(e.entity_id);return t?t.value:e.excluded?"excluded":e.tier}_original(e){return e.excluded?"excluded":e.tier}_setValue(e,t){let s=new Map(this._draft);for(let i of e)i.excluded_by_yaml||(t===this._original(i)?s.delete(i.entity_id):s.set(i.entity_id,{value:t,row:i}));this._draft=s}_draftEstimate(){let e=0;for(let{value:t,row:s}of this._draft.values()){if(!(t in Ue)||!s.rows)continue;let i=Ue[t],a=i===0?0:Math.min(s.rows_24h*i,s.rows);e+=s.est_state_bytes*(1-a/s.rows)}return Math.max(e,0)}async _applyDraft(){let e={},t={};for(let[s,{value:i,row:a}]of this._draft){let n=a.excluded;i==="excluded"?n||(t[s]=!0):(n&&(t[s]=!1),i!==a.tier&&(e[s]=i))}this._working="apply";try{let s=await this._ws("apply",{retention:e,excluded:t,purge_now:!0});this._draft=new Map,this._selected=new Set,this._showToast(this.t("applied")),await Promise.all([this._loadOverview(),this._loadEntities()]),s.packages_missing&&this._showToast(this.t("packages_banner"))}catch(s){this._showToast(this.t("error",{msg:s.message}))}finally{this._working=null}}render(){if(!this.hass)return d;let e=this.t;return o`
      <header>
        <div class="toolbar">
          ${this.narrow?o`<button class="icon-btn" @click=${this._toggleMenu} aria-label="menu">${Ie(ot)}</button>`:d}
          <div class="title">${e("title")}</div>
          <button class="icon-btn" title=${e("refresh")} aria-label=${e("refresh")}
            ?disabled=${!!this._working} @click=${this._refreshAll}>${Ie(lt)}</button>
        </div>
        <nav class="tabs" role="tablist">
          ${de.map(t=>o`<button role="tab" aria-selected=${t===this._tab?"true":"false"}
              @click=${()=>this._setTab(t)}>${e(`tab_${t}`)}</button>`)}
        </nav>
      </header>
      <main>
        ${this._error?o`<div class="banner"><div class="txt">${e("error",{msg:this._error})}</div></div>`:d}
        ${this._busyBanner()}
        ${this._overview?this._renderTab():o`<div class="center"><span class="spinner"></span><p class="muted">${e("loading")}</p></div>`}
      </main>
      ${this._renderDraftBar()} ${this._toast?o`<div class="toast" role="status">${this._toast}</div>`:d}
      ${this._renderDialog()}
    `}_busyBanner(){let e=this._overview?.data?.busy||(this._working&&this._working!=="refresh"?this._working:null);return e?o`<div class="banner info"><span class="spinner"></span><div class="txt">${this.t("busy",{what:e})}</div></div>`:d}_renderTab(){switch(this._tab){case"database":return this._renderDatabase();case"backups":return this._renderBackups();case"files":return this._renderFiles();default:return this._renderOverview()}}_renderOverview(){let e=this.t,{data:t,recommendations:s,history:i}=this._overview,a=t.disk,n=t.forecast,l;n.growth_per_day===null?l=e("growth_unknown"):n.days_until_full!==null?l=e("growth_full",{growth:u(n.growth_per_day,this.lang),days:Math.round(n.days_until_full)}):n.growth_per_day>1024*1024?l=e("growth_ok",{growth:u(n.growth_per_day,this.lang)}):l=e("growth_none");let c=this._segments(t),_=100-a.percent_used<this._overview.options.low_space_percent,b=n.days_until_full!==null&&n.days_until_full<this._overview.options.forecast_warning_days;return o`
      ${_||b?o`<div class="banner"><ha-icon icon="mdi:harddisk-remove"></ha-icon>
            <div class="txt">${_?t.reclaimable.total>0?e("low_space_banner",{free:u(a.free,this.lang),reclaim:u(t.reclaimable.total,this.lang)}):e("low_space_banner_db",{free:u(a.free,this.lang)}):e("forecast_banner",{days:Math.round(n.days_until_full)})}</div>
            ${t.reclaimable.files+t.reclaimable.backups>0?o`<button class="btn primary" ?disabled=${!!this._working}
                  @click=${()=>this._previewAndClean(this._safeTargets())}>${e("safe_cleanup")}</button>`:o`<button class="btn" @click=${()=>this._setTab("database")}>${e("tab_database")}</button>`}
          </div>`:d}
      <div class="card">
        <div class="hero">
          <div>
            <div class="big">${u(a.free,this.lang)}</div>
            <div class="muted">${e("free")} ${e("of")} ${u(a.total,this.lang)}</div>
          </div>
          <div>
            <div class="row"><b>${K(a.percent_used/100,this.lang)} ${e("used")}</b></div>
            <div class="stack" role="img" aria-label=${`${K(a.percent_used/100,this.lang)} ${e("used")}`}>
              ${c.map(h=>o`<div style="width:${h.share*100}%;background:${h.color}" title=${`${h.label}: ${u(h.bytes,this.lang)}`}></div>`)}
            </div>
            <div class="legend">
              ${c.map(h=>o`<span><i class="dot" style="background:${h.color}"></i>${h.label} ${u(h.bytes,this.lang)}</span>`)}
            </div>
            <p class="muted small" style="margin:10px 0 0">${l}</p>
          </div>
        </div>
      </div>

      <div class="card">
        <h2>${e("reclaim_title")}<span class="spacer"></span>
          ${t.reclaimable.total>0?o`<span class="muted small">${e("reclaim_total",{bytes:u(t.reclaimable.total,this.lang)})}</span>`:d}
        </h2>
        ${s.length===0?o`<p class="muted">${e("reclaim_none")}</p>`:s.map(h=>this._renderRec(h))}
      </div>

      <div class="grid2">
        <div class="card">
          <h2>${e("breakdown_title")}</h2>
          ${this._renderBreakdown(t)}
        </div>
        <div class="card">
          <h2>${e("history_title")}<span class="spacer"></span>
            <span class="muted small">${e("history_total",{bytes:u(t.freed_total,this.lang)})}</span></h2>
          ${i.length===0?o`<p class="muted">${e("history_empty")}</p>`:i.slice(0,8).map(h=>o`<div class="list-row">
                  <div>${e(`action_${h.action}`)}<div class="muted small">${le(h.time,this.lang)}</div></div>
                  <div></div>
                  <div class="num"><b>${u(h.freed_bytes,this.lang)}</b></div>
                </div>`)}
        </div>
      </div>
    `}_safeTargets(){return this._overview.options.backup_rotation?["backups","files"]:["files"]}_segments(e){let t=e.disk,s=[],i=e.breakdown?.children;if(i?.length){for(let a of i)a.used_bytes&&s.push({id:a.id,label:this.t(`cat_${a.id}`)!==`cat_${a.id}`?this.t(`cat_${a.id}`):a.label||a.id,bytes:a.used_bytes,share:a.used_bytes/t.total,color:he[a.id]||"var(--sm-c7)"});s.sort((a,n)=>n.bytes-a.bytes)}else s.push({id:"used",label:this.t("used_cap"),bytes:t.used,share:t.used/t.total,color:"var(--sm-c1)"});return s}_renderRec(e){let t=this.t,s={count:e.count??"",share:e.share?K(e.share,this.lang):""},i=t(`rec_${e.id}`,s),a=t(`rec_${e.id}_desc`,s),n=!!this._working;return o`<div class="rec">
      <div class="ico"><ha-icon icon=${at[e.id]||"mdi:broom"}></ha-icon></div>
      <div>
        <div class="t">${i}</div>
        <div class="muted small">${a}</div>
      </div>
      <div class="act row">
        ${e.bytes?o`<span class="amount">${u(e.bytes,this.lang)}</span>`:d}
        ${e.action==="clean"?o`<button class="btn" ?disabled=${n} @click=${()=>this._previewAndClean(e.targets)}>${t("preview")}</button>`:o`<button class="btn" @click=${()=>this._setTab(e.view)}>${t("open")}</button>`}
      </div>
    </div>`}_renderBreakdown(e){let t=this.t,s=e.breakdown;if(!s?.children?.length)return o`<p class="muted small">${t("breakdown_unavailable")}</p>
        ${this._bars([{label:t("used_cap"),bytes:e.disk.used},{label:t("cat_free"),bytes:e.disk.free}],e.disk.total)}`;let i=e.addon_names||{},a=[];for(let n of s.children)if(a.push({label:t(`cat_${n.id}`)!==`cat_${n.id}`?t(`cat_${n.id}`):n.label||n.id,bytes:n.used_bytes,color:he[n.id]}),n.id==="apps_data"&&n.children?.length)for(let l of n.children.slice(0,6))a.push({label:i[l.id]||l.label||l.id,bytes:l.used_bytes,color:he.apps_data,indent:!0});return this._bars(a,e.disk.total)}_bars(e,t){return e.map(s=>o`<div style="margin:8px 0 ${s.indent?"6px 18px":"10px"}">
        <div class="row small"><span>${s.label}</span><span class="spacer"></span><span class="muted">${u(s.bytes,this.lang)}</span></div>
        <div class="bar"><div style="width:${Math.max(s.bytes/t*100,.5)}%;background:${s.color||"var(--sm-c1)"}"></div></div>
      </div>`)}_filteredRows(){let e=this._entities?.rows||[],t=this._search.trim().toLowerCase(),s=e.filter(i=>this._domain&&i.domain!==this._domain||this._onlyOrphans&&!i.orphan||this._onlyChanged&&!this._draft.has(i.entity_id)&&i.tier==="default"&&!i.excluded?!1:t?i.entity_id.includes(t)||(i.name||"").toLowerCase().includes(t)||(i.integration||"").toLowerCase().includes(t)||(i.area||"").toLowerCase().includes(t)||(i.device||"").toLowerCase().includes(t):!0);return this._sort==="rate"?s=[...s].sort((i,a)=>a.rows_24h-i.rows_24h):this._sort==="name"&&(s=[...s].sort((i,a)=>(i.name||"").localeCompare(a.name||"",this.lang))),s}_renderDatabase(){let e=this.t,t=this._overview,s=t.data.database,i=t.data.recorder,a=this._entities,n=s.analysis_running||this._working==="analyze",l=a?[...new Set(a.rows.map(p=>p.domain))].sort():[],c=a?this._filteredRows():[],_=c.reduce((p,g)=>Math.max(p,g.est_bytes),1),b=c.slice(0,this._limit),h=b.length>0&&b.every(p=>this._selected.has(p.entity_id));return o`
      ${i.restart_required?o`<div class="banner"><ha-icon icon="mdi:restart-alert"></ha-icon>
            <div class="txt">${e("restart_banner",{n:i.pending_restart.length})}</div>
            <button class="btn primary" @click=${this._confirmRestart}>${e("restart")}</button></div>`:d}
      ${i.unwritten.length&&!i.packages.available?o`<div class="banner"><ha-icon icon="mdi:package-variant"></ha-icon>
            <div class="txt">${e("packages_banner")}</div>
            <button class="btn" @click=${()=>this._navigate("/config/repairs")}>${e("packages_open")}</button></div>`:d}
      ${t.gui_recorder&&!t.gui_recorder_imported?o`<div class="banner info"><ha-icon icon="mdi:import"></ha-icon>
            <div class="txt">${e("gui_recorder_banner")}</div>
            <button class="btn" @click=${this._importGuiRecorder}>${e("gui_recorder_import")}</button></div>`:d}

      <div class="card">
        <div class="kpis">
          <div class="kpi"><div class="v">${u(s.size,this.lang)}</div><div class="l">${e("db_size")}</div></div>
          <div class="kpi"><div class="v">${rt[s.dialect]||s.dialect||"\u2013"}</div><div class="l">${e("db_engine")}</div></div>
          <div class="kpi"><div class="v">${e("days",{n:s.keep_days})}</div><div class="l">${e("db_keep")}</div></div>
          <div class="kpi"><div class="v">${n?o`<span class="spinner" style="width:18px;height:18px"></span>`:He(s.analysis_at,e,this.lang)}</div>
            <div class="l">${e("db_analysis")}</div></div>
        </div>
        <div class="row" style="margin-top:12px">
          <span class="muted small">${a?.calibrated?e("db_calibrated"):e("db_estimated")}
            ${i.yaml_filters?.include||i.yaml_filters?.exclude?o` ${e("yaml_filters")}`:d}
            ${i.yaml_filters?.uses_include?o` <b>${e("yaml_include_warning")}</b>`:d}</span>
          <span class="spacer"></span>
          <button class="btn" ?disabled=${n||!!this._working} @click=${this._analyze}>${e("analyze")}</button>
        </div>
      </div>

      <div class="card">
        ${a?o`
              <div class="filters">
                <input type="search" placeholder=${e("search")} .value=${this._search}
                  @input=${p=>{this._search=p.target.value,this._limit=P}} />
                <select @change=${p=>{this._domain=p.target.value,this._limit=P}} aria-label=${e("all_domains")}>
                  <option value="">${e("all_domains")}</option>
                  ${l.map(p=>o`<option value=${p} ?selected=${p===this._domain}>${p}</option>`)}
                </select>
                <select @change=${p=>this._sort=p.target.value} aria-label="sort">
                  ${["size","rate","name"].map(p=>o`<option value=${p} ?selected=${p===this._sort}>${e(`sort_${p}`)}</option>`)}
                </select>
                <button class="chip" aria-pressed=${this._onlyChanged?"true":"false"}
                  @click=${()=>this._onlyChanged=!this._onlyChanged}>${e("filter_changed")}</button>
                <button class="chip" aria-pressed=${this._onlyOrphans?"true":"false"}
                  @click=${()=>this._onlyOrphans=!this._onlyOrphans}>${e("filter_orphans")}</button>
              </div>
              ${this._selected.size?o`<div class="banner info" style="margin-bottom:8px">
                    <div class="txt">${e("selected",{n:this._selected.size})}</div>
                    ${this._tierSelect(null,p=>{let g=a.rows.filter(m=>this._selected.has(m.entity_id));this._setValue(g,p)},a.packages_available,e("set_for_selection"))}
                    <button class="btn" @click=${()=>this._selected=new Set}>${e("clear_selection")}</button>
                  </div>`:d}
              ${a.analysis_at?d:o`<p class="muted small">${e("analysis_needed")}</p>`}
              <table class="responsive">
                <thead><tr>
                  <th style="width:28px"><input type="checkbox" .checked=${h} aria-label="select all"
                    @change=${p=>{let g=new Set(this._selected);b.forEach(m=>p.target.checked?g.add(m.entity_id):g.delete(m.entity_id)),this._selected=g}} /></th>
                  <th>${e("col_entity")}</th>
                  <th class="num">${e("col_size")}</th>
                  <th class="num">${e("col_rate")}</th>
                  <th class="num">${e("col_rows")}</th>
                  <th>${e("col_retention")}</th>
                </tr></thead>
                <tbody>${b.map(p=>this._renderEntityRow(p,_,a.packages_available,a.keep_days))}</tbody>
              </table>
              ${c.length>this._limit?o`<div class="row" style="justify-content:center;margin-top:12px">
                    <button class="btn" @click=${()=>this._limit+=P}>${e("show_more",{n:Math.min(P,c.length-this._limit)})}</button></div>`:d}
            `:o`<div class="center"><span class="spinner"></span></div>`}
      </div>

      ${a?.events?.length?o`<div class="card"><h2>${e("events_title")}</h2>
            ${a.events.slice(0,8).map(p=>o`<div class="list-row"><div><code>${p.event_type}</code></div><div></div><div class="num">${D(p.rows,this.lang)}</div></div>`)}</div>`:d}
    `}_tierSelect(e,t,s,i){let a=this.t,n=this._overview?.data?.database?.keep_days,l=e?this._effective(e):"",c=_=>_==="default"?a("tier_default",{days:n}):a(_==="excluded"?s?"tier_excluded":"tier_excluded_needs_packages":`tier_${_}`);return o`<select aria-label=${a("col_retention")} ?disabled=${e?.excluded_by_yaml} .value=${Me(l)}
      @change=${_=>{t(_.target.value),e||(_.target.value="")}}>
      ${i?o`<option value="" selected disabled>${i}</option>`:d}
      ${nt.map(_=>o`<option value=${_} ?selected=${_===l}>${c(_)}</option>`)}
    </select>`}_renderEntityRow(e,t,s){let i=this.t,a=this._draft.has(e.entity_id),n=[e.entity_id,e.integration,e.area].filter(Boolean).join(" \xB7 ");return o`<tr class=${a?"changed":""}>
      <td class="c-check"><input type="checkbox" .checked=${this._selected.has(e.entity_id)} aria-label=${e.entity_id}
        @change=${l=>{let c=new Set(this._selected);l.target.checked?c.add(e.entity_id):c.delete(e.entity_id),this._selected=c}} /></td>
      <td class="c-ent ent">
        <div class="n">${e.name}
          ${e.orphan?o`<span class="tag bad">${i("orphan")}</span>`:d}
          ${e.excluded_by_yaml?o`<span class="tag">${i("excluded_by_yaml")}</span>`:d}
          ${e.excluded&&!e.recorded?o`<span class="tag ok">${i("tier_excluded")}</span>`:d}
        </div>
        <div class="i">${n}</div>
      </td>
      <td class="c-size num">${e.est_bytes?u(e.est_bytes,this.lang):"\u2013"}
        <div class="sizebar" style="width:${Math.max(e.est_bytes/t*100,1)}%"></div></td>
      <td class="c-rate num">${D(e.rows_24h,this.lang)}</td>
      <td class="c-rows num">${D(e.rows,this.lang)}</td>
      <td class="c-tier">${this._tierSelect(e,l=>this._setValue([e],l),s)}</td>
    </tr>`}_renderDraftBar(){if(!this._draft.size||this._tab!=="database")return d;let e=this.t,t=this._draftEstimate();return o`<div class="draftbar" role="region" aria-label=${e("draft",{n:this._draft.size})}>
      <div>
        <div class="txt">${e("draft",{n:this._draft.size})}</div>
        ${t>0?o`<div class="muted small">${e("draft_estimate",{bytes:u(t,this.lang)})}</div>`:d}
      </div>
      <button class="btn" @click=${()=>this._draft=new Map}>${e("discard")}</button>
      <button class="btn primary" ?disabled=${!!this._working} @click=${this._applyDraft}>${e("apply")}</button>
    </div>`}_renderBackups(){let e=this.t,t=this._overview,s=t.data.backups,i=t.options;if(!s.available)return o`<div class="card"><p class="muted">${e("bk_unavailable")}</p></div>`;let a=this._backups?.plan;return o`
      <div class="card">
        <div class="kpis">
          <div class="kpi"><div class="v">${u(s.local_total,this.lang)}</div><div class="l">${e("bk_kpi_local")}</div></div>
          <div class="kpi"><div class="v">${D(s.local_count,this.lang)}</div><div class="l">${e("bk_kpi_count")}</div></div>
          <div class="kpi"><div class="v">${u(s.deletable_bytes,this.lang)}</div><div class="l">${e("bk_kpi_deletable")}</div></div>
        </div>
        <p class="muted small" style="margin:12px 0 0">
          ${s.rotation_enabled?e("bk_rotation_on"):e("bk_rotation_off")} ·
          ${e("bk_schedule",{d:i.keep_daily,w:i.keep_weekly,m:i.keep_monthly})}
          ${i.require_offsite?o`<br />${e("bk_offsite_required")}`:d}
        </p>
        <div class="row" style="margin-top:12px">
          <button class="btn" @click=${()=>this._navigate(`/config/integrations/integration/${ce}`)}>${e("options")}</button>
          <span class="spacer"></span>
          <button class="btn primary danger" ?disabled=${!s.deletable_count||!!this._working}
            @click=${()=>this._previewAndClean(["backups"])}>${e("bk_apply")}</button>
        </div>
      </div>
      <div class="card">
        ${a?a.length===0?o`<p class="muted">${e("bk_none")}</p>`:o`<table>
              <thead><tr><th>${e("col_backup")}</th><th class="num">${e("col_size")}</th><th>${e("col_locations")}</th><th>${e("col_action")}</th></tr></thead>
              <tbody>${a.map(n=>o`<tr>
                  <td><div>${n.name}</div><div class="muted small">${le(n.date,this.lang)}</div></td>
                  <td class="num">${u(n.local_size,this.lang)}</td>
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
                <div class="num"><b>${u(n.size_bytes,this.lang)}</b></div>
                <button class="btn danger" ?disabled=${i}
                  @click=${()=>this._confirmHog(n)}>${e("delete")}</button>
              </div>`)}
      </div>

      <div class="card">
        <h2>${e("maintenance")}</h2>
        <div class="list-row">
          <div><div>${e("repack_title")}</div><div class="muted small">${e(a?"repack_desc":"repack_impossible")}</div></div>
          <div class="num">${t.reclaimable.repack?u(t.reclaimable.repack,this.lang):""}</div>
          <button class="btn" ?disabled=${i||!a} @click=${()=>this._previewAndClean(["repack"])}>${e("run")}</button>
        </div>
        ${t.is_hassio?o`<div class="list-row">
              <div><div>${e("docker_title")}</div><div class="muted small">${e("docker_desc")}</div></div>
              <div></div>
              <button class="btn" ?disabled=${i} @click=${()=>this._previewAndClean(["docker"])}>${e("run")}</button>
            </div>`:d}
      </div>

      ${s.large_files.length?o`<div class="card"><h2>${e("files_large")}</h2>
            <p class="muted small">${e("files_large_hint")}</p>
            ${s.large_files.map(n=>o`<div class="list-row"><div style="overflow-wrap:anywhere"><code>${n.path}</code></div><div></div><div class="num">${u(n.size_bytes,this.lang)}</div></div>`)}</div>`:d}
    `}_confirmHog(e){let t=this.t;this._dialog={title:t(`hog_${e.key}`),body:o`<p>${t("confirm_cleanup")}</p><ul>${e.paths.map(s=>o`<li><code>${s}</code></li>`)}</ul>
        <p><b>${t("confirm_total",{bytes:u(e.size_bytes,this.lang)})}</b></p>`,confirm:t("delete"),danger:!0,action:()=>this._clean(["files"],{hog_keys:[e.key]})}}_renderDialog(){let e=this._dialog;if(!e)return d;let t=()=>this._dialog=void 0;return o`<div class="scrim" @click=${s=>s.target===s.currentTarget&&t()}
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
    </div>`}};Y(B,"properties",{hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_tab:{state:!0},_overview:{state:!0},_entities:{state:!0},_backups:{state:!0},_draft:{state:!0},_selected:{state:!0},_search:{state:!0},_domain:{state:!0},_onlyChanged:{state:!0},_onlyOrphans:{state:!0},_sort:{state:!0},_limit:{state:!0},_dialog:{state:!0},_toast:{state:!0},_working:{state:!0},_error:{state:!0}}),Y(B,"styles",De);customElements.get("storage-manager-panel")||customElements.define("storage-manager-panel",B);
