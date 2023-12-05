function t(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new s(i,t,n)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,m=globalThis,v=m.trustedTypes,_=v?v.emptyScript:"",f=m.reactiveElementPolyfillSupport,g=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return n?.call(this)},set(e){const s=n?.call(this);o.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...u(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of n){const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n,this[n]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,n=!1,o){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(n?o:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[g("elementProperties")]=new Map,$[g("finalized")]=new Map,f?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,A=x.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",L=`lit$${(Math.random()+"").slice(9)}$`,E="?"+L,S=`<${E}>`,V=document,T=()=>V.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,D="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,z=/>/g,N=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,I=/"/g,R=/^(?:script|style|textarea|title)$/i,F=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),U=F(1),B=F(2),Z=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,Y=V.createTreeWalker(V,129);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===P?"!--"===l[1]?r=O:void 0!==l[1]?r=z:void 0!==l[2]?(R.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=N):void 0!==l[3]&&(r=N):r===N?">"===l[0]?(r=o??P,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?N:'"'===l[3]?I:j):r===I||r===j?r=N:r===O||r===z?r=P:(r=N,o=void 0);const u=r===N&&t[e+1].startsWith("/>")?" ":"";s+=r===P?i+S:c>=0?(n.push(a),i.slice(0,c)+k+i.slice(c)+L+u):i+L+(-2===c?e:u)}return[X(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class J{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const r=t.length-1,a=this.parts,[l,c]=K(t,e);if(this.el=J.createElement(l,i),Y.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=Y.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(k)){const e=c[s++],i=n.getAttribute(t).split(L),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?it:"?"===r[1]?nt:"@"===r[1]?ot:et}),n.removeAttribute(t)}else t.startsWith(L)&&(a.push({type:6,index:o}),n.removeAttribute(t));if(R.test(n.tagName)){const t=n.textContent.split(L),e=t.length-1;if(e>0){n.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],T()),Y.nextNode(),a.push({type:2,index:++o});n.append(t[e],T())}}}else if(8===n.nodeType)if(n.data===E)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(L,t+1));)a.push({type:7,index:o}),t+=L.length-1}o++}}static createElement(t,e){const i=V.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,n){if(e===Z)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const s=M(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=G(t,o._$AS(t,e.values),o,n)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??V).importNode(e,!0);Y.currentNode=n;let o=Y.nextNode(),s=0,r=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new tt(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++r]}s!==a?.index&&(o=Y.nextNode(),s++)}return Y.currentNode=V,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),M(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=t:this.$(V.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Q(n,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new J(t)),e}T(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new tt(this.k(T()),this.k(T()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=G(this,t,e,0),s=!M(t)||t!==this._$AH&&t!==Z,s&&(this._$AH=t);else{const n=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=G(this,n[i+r],e,r),a===Z&&(a=this._$AH[r]),s||=!M(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}s&&!n&&this.O(t)}O(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===W?void 0:t}}class nt extends et{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class ot extends et{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??W)===Z)return;const i=this._$AH,n=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(J,tt),(x.litHtmlVersions??=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class at extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new tt(e.insertBefore(T(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const lt=globalThis.litElementPolyfillSupport;lt?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},ut=(t=ht,e,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t)},init(e){return void 0!==e&&this.C(n,void 0,t),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t)}}throw Error("Unsupported decorator location: "+n)};function dt(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function pt(t){return dt({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function vt(t,e){return(i,n,o)=>{const s=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:r}="object"==typeof n?i:o??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return mt(i,n,{get(){if(e){let e=t.call(this);return void 0===e&&(e=s(this),r.call(this,e)),e}return s(this)}})}return mt(i,n,{get(){return s(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=1;class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ft{constructor(t){if(super(t),t.type!==_t||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.it)t in e||(i.remove(t),this.it.delete(t));for(const t in e){const n=!!e[t];n===this.it.has(t)||this.st?.has(t)||(n?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return Z}});var yt="M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z",bt="M5,2V13H8V22L15,10H11L15,2M17,15H19V17H17V15M17,7H19V13H17V7Z",wt="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z",$t="M12 2C7.04 2 3 6.04 3 11C3 14.91 5.5 18.24 9 19.47V22H11V19.94C11.33 20 11.66 20 12 20S12.67 20 13 19.94V22H15V19.47C18.5 18.23 21 14.9 21 11C21 6.04 16.96 2 12 2M14.25 14L11.25 17L9.75 15.5L11 14.25L9.75 13L12.75 10L14.25 11.5L13 12.75L14.25 14M16 9H8V7H16V9Z",xt="M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",At="M17 13V7H19V13H17M17 17V15H19V17H17M13 13V5C13 3.3 11.7 2 10 2S7 3.3 7 5V13C4.8 14.7 4.3 17.8 6 20S10.8 22.7 13 21 15.7 16.2 14 14C13.7 13.6 13.4 13.3 13 13M10 4C10.6 4 11 4.4 11 5V8H9V5C9 4.4 9.4 4 10 4Z",Ct="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",kt="M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z",Lt="M20 14H18L14.8 23H16.7L17.4 21H20.6L21.3 23H23.2L20 14M17.8 19.7L19 16L20.2 19.7H17.8M7 9H15V11H7V9M7 12H15V14H7V12M7 15H15V16.5L14.8 17H7V15M13.7 20H7V18H14.5L13.7 20M16 8H6V20H4V8H2V4H20V8H18V12H16.6L16.1 13.3L16 13.7V8Z";var Et={version:"version",current:"current"},St={card:{climate:{disable_window:"Disable window",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat",disable_cool:"Disable cool",disable_heat_cool:"Disable heat/cool",disable_auto:"Disable auto",disable_fan_only:"Disable fan only",disable_dry:"Disable dry",disable_off:"Disable off",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_security_warning:"Disable battery warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_name:"Disable name"}}},Vt={window_open:"Window open",night_mode:"Night mode",eco:"Eco",overpowering:"Overpowering",none:"Manual",comfort:"Comfort",boost:"Boost",power:"Overpowering",activity:"Activity",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow"},Tt={common:Et,editor:St,extra_states:Vt},Mt=Object.freeze({__proto__:null,common:Et,default:Tt,editor:St,extra_states:Vt}),Ht={version:"Version",current:"Aktuell"},Dt={card:{climate:{disable_window:"Fenster-offen-Anzeige deaktivieren",disable_overpowering:"Sommer-Anzeige deaktivieren",disable_heat:"Heiz-Anzeige deaktivieren",disable_cool:"Kühl-Anzeige deaktivieren",disable_heat_cool:"Heiz-/Kühl-Anzeige deaktivieren",disable_auto:"Auto-Anzeige deaktivieren",disable_fan_only:"Nur-Lüften-Anzeige deaktivieren",disable_dry:"Trocknen-Anzeige deaktivieren",disable_off:"Aus-Anzeige deaktivieren",disable_menu:"Menü deaktivieren",disable_security_warning:"Batterie-Warnung deaktivieren",disable_buttons:"Plus/Minus Buttons deaktivieren",eco_temperature:"Eco Temperatur",set_current_as_main:"Zieltemperatur mit aktueller Temperatur tauschen"}}},Pt={window_open:"Fenster offen",night_mode:"Nachtmodus",eco:"Eco",overpowering:"Sommer"},Ot={common:Ht,editor:Dt,extra_states:Pt},zt=Object.freeze({__proto__:null,common:Ht,default:Ot,editor:Dt,extra_states:Pt}),Nt={version:"version",current:"Actuelle"},jt={card:{climate:{disable_window:"Désactiver fenêtre status",disable_overpowering:"Désactiver sur-puissance status",disable_heat:"Désactiver mode chauffe",disable_cool:"Désactiver mode clim",disable_heat_cool:"Désactiver mode chauffe/clim",disable_auto:"Désactiver mode auto",disable_fan_only:"Désactiver mode ventilation",disable_dry:"Désactiver mode déshumidification",disable_off:"Désactiver arret",set_current_as_main:"Echanger temperature cible avec temperature locale",disable_security_warning:"Désactiver sécurité messages",disable_buttons:"Désactiver les boutons +/-",disable_power_infos:"Désactiver les infos de puissance",disable_name:"Désactiver le nom"}}},It={window_open:"Fenêtre ouverte",eco:"Eco",overpowering:"Sur-puissance",none:"Manuel",comfort:"Confort",boost:"Boost",power:"Délestage",activity:"Activité",auto_regulation_light:"Légère",auto_regulation_medium:"Moyenne",auto_regulation_strong:"Forte",auto_regulation_slow:"Lente"},Rt={common:Nt,editor:jt,extra_states:It},Ft=Object.freeze({__proto__:null,common:Nt,default:Rt,editor:jt,extra_states:It}),Ut={version:"версия",current:"текущий"},Bt={window_open:"Окно открыто",night_mode:"Ночной режим",eco:"Эко",overpowering:"Лето"},Zt={common:Ut,extra_states:Bt},Wt=Object.freeze({__proto__:null,common:Ut,default:Zt,extra_states:Bt}),qt={version:"wersja",current:"aktualna"},Yt={window_open:"otwarte okno",night_mode:"tryb nocny",eco:"tryb ekonomiczny",overpowering:"lato"},Xt={common:qt,extra_states:Yt},Kt=Object.freeze({__proto__:null,common:qt,default:Xt,extra_states:Yt}),Jt={version:"verzia",current:"aktuálny"},Gt={card:{climate:{disable_window:"Zakázať okno",disable_overpowering:"Zakázať leto",disable_heat:"Zakázať kúrenie",disable_cool:"Zakázať chladenie",disable_heat_cool:"Zakázať kúrenie/chladenie",disable_auto:"Zakázat automatic",disable_fan_only:"Zakázať režim ventilátora",disable_dry:"Zakázať sušenie",disable_off:"Vypnúť",disable_menu:"Zakázať menu",disable_security_warning:"Zakázať upozornenie na batériu",disable_buttons:"Zakázať plus/mínus tlačidlá",eco_temperature:"Eco teplota",set_current_as_main:"Vymeňte cieľ za miesta s aktuálnou teplotou"}}},Qt={window_open:"Okno otvorené",night_mode:"Nočný mód",eco:"Eco",overpowering:"Leto"},te={common:Jt,editor:Gt,extra_states:Qt},ee={version:"Verzió",current:"Aktuális"},ie={card:{climate:{disable_window:"Ablak kikapcsolás",disable_overpowering:"Nyár kikapcsolás",disable_heat:"Fűtés kikacsolás",disable_cool:"Hűtés kikapcsolás",disable_heat_cool:"Fűtés/Hűtés kikapcsolás",disable_auto:"Auto kikapcsolás",disable_fan_only:"Csak ventillátor kikapcsolás",disable_dry:"Szárítás kikapcsolás",disable_off:"Kikapcsolás inaktiválás",eco_temperature:"Eco hőmérséklet",set_current_as_main:"Aktuális hőmérséklet használata"}}},ne={window_open:"Ablak nyitva",night_mode:"Éjszakai mód",eco:"Eco",overpowering:"Nyár"},oe={common:ee,editor:ie,extra_states:ne},se={version:"version",current:"nuværende"},re={window_open:"Vindue åben",night_mode:"Nattilstand",eco:"Eco",overpowering:"Overpowering"},ae={common:se,extra_states:re},le={version:"version",current:"Actual"},ce={window_open:"Ventana abierta",night_mode:"Modo noche",eco:"Eco",overpowering:"Verano"},he={common:le,extra_states:ce},ue={version:"versiyon",current:"şimdiki"},de={window_open:"Pencere açık",night_mode:"Gece modu",eco:"Eco",overpowering:"Yaz"},pe={common:ue,extra_states:de},me={version:"versione",current:"Corrente"},ve={card:{climate:{disable_window:"Disabilita indicatore Finestra",disable_overpowering:"Disabilita indicatore Estate",disable_heat:"Disabilita tasto heat",disable_cool:"Disabilita tasto cool",disable_heat_cool:"Disabilita tasto heat/cool",disable_auto:"Disabilita tasto auto",disable_fan_only:"Disabilita tasto fan only",disable_dry:"Disabilita tasto dry",disable_off:"Disabililita tasto off",eco_temperature:"Temperatura target",set_current_as_main:"Imposta la temperatura attuale come target"}}},_e={window_open:"Finestra aperta",night_mode:"Modalità notturna",eco:"Eco",overpowering:"Estate"},fe={common:me,editor:ve,extra_states:_e},ge={version:"versão",current:"actual"},ye={card:{climate:{disable_window:"Desactivar Janela",disable_overpowering:"Desactivar Verão",disable_heat:"Desactivar Aquecimento",disable_cool:"Desactivar Arrefecimento",disable_heat_cool:"Desactivar Aquecimento/Arrefecimento",disable_auto:"Desactivar Auto",disable_fan_only:"Desactivar Ventilação",disable_dry:"Desactivar Secagem",disable_off:"Desactivar Off",eco_temperature:"Modo Eco",set_current_as_main:"Mudar para a temperatura local actual"}}},be={window_open:"Janela Aberta",night_mode:"Modo Noturno",eco:"Eco",overpowering:"Verão"},we={common:ge,editor:ye,extra_states:be},$e={version:"版本",current:"当前"},xe={window_open:"窗户打开",night_mode:"夜间模式",eco:"节能",overpowering:"夏季"},Ae={common:$e,extra_states:xe},Ce={version:"версія",current:"поточний"},ke={window_open:"Вікно відчинено",night_mode:"Нічний режим",eco:"Економія",overpowering:"Літо"},Le={common:Ce,extra_states:ke},Ee={version:"έκδοση",current:"τρέχουσα"},Se={window_open:"Παράθυρο ανοικτό",night_mode:"Λειτουργία νυκτός",eco:"Εξοικονόμηση",overpowering:"Καλοκαίρι"},Ve={common:Ee,extra_states:Se},Te={version:"versie",current:"huidig"},Me={window_open:"Raam open",night_mode:"Nacht modus",eco:"Eco",overpowering:"Zomer"},He={common:Te,extra_states:Me},De={version:"versjon",current:"nåværende"},Pe={window_open:"Vindu åpent",night_mode:"Nattmodus",eco:"Eco",overpowering:"Sommer"},Oe={common:De,extra_states:Pe},ze={version:"verze",current:"aktuální"},Ne={card:{climate:{disable_window:"Zakázat okno",disable_overpowering:"Zakázat léto",disable_heat:"Zakázat topení",disable_cool:"Zakázat chlazení",disable_heat_cool:"Zakázat topení/chlazení",disable_auto:"Zakázať automatic",disable_fan_only:"Zakázat pouze ventilátor",disable_dry:"Zakázat sušení",disable_off:"Zakázat vypnuto",disable_menu:"Zakázat menu",disable_security_warning:"Zakázat upozornění baterie",disable_buttons:"Zakázat tlačítka plus/minus",eco_temperature:"Eco teplota",set_current_as_main:"Prohodit místa cílovoé a aktáalní teploty"}}},je={window_open:"okno otevřeno",night_mode:"Noční režim",eco:"Eco",overpowering:"Léto"},Ie={common:ze,editor:Ne,extra_states:je},Re={version:"različica",current:"trenutno"},Fe={window_open:"Okno odprto",night_mode:"Nočni način",eco:"Eko",overpowering:"Poletje"},Ue={common:Re,extra_states:Fe},Be={version:"version",current:"Nuvarande"},Ze={window_open:"Fönster öppet",night_mode:"Nattläge",eco:"Eco",overpowering:"Sommar"},We={common:Be,extra_states:Ze},qe={version:"версия",currrent:"текущий"},Ye={window_open:"Отворен прозорец",night_mode:"Нощен режим",eco:"Екологичен режим",overpowering:"Лято"},Xe={common:qe,extra_states:Ye},Ke={version:"version",current:"Nykyinen"},Je={window_open:"Ikkuna auki",night_mode:"Yötila",eco:"Eco",overpowering:"Kesä"},Ge={common:Ke,extra_states:Je},Qe={version:"versiune",current:"curent"},ti={window_open:"Fereastră deschisă",night_mode:"Mod noapte",eco:"Eco",overpowering:"Vară"},ei={common:Qe,extra_states:ti},ii={version:"versió",current:"Actual"},ni={window_open:"Finestra oberta",night_mode:"Mode nocturn",eco:"Eco",overpowering:"Estiu"},oi={common:ii,extra_states:ni};const si={en:Mt,de:zt,fr:Ft,ru:Wt,sk:Object.freeze({__proto__:null,common:Jt,default:te,editor:Gt,extra_states:Qt}),hu:Object.freeze({__proto__:null,common:ee,default:oe,editor:ie,extra_states:ne}),pl:Kt,da:Object.freeze({__proto__:null,common:se,default:ae,extra_states:re}),es:Object.freeze({__proto__:null,common:le,default:he,extra_states:ce}),tr:Object.freeze({__proto__:null,common:ue,default:pe,extra_states:de}),it:Object.freeze({__proto__:null,common:me,default:fe,editor:ve,extra_states:_e}),pt:Object.freeze({__proto__:null,common:ge,default:we,editor:ye,extra_states:be}),cn:Object.freeze({__proto__:null,common:$e,default:Ae,extra_states:xe}),uk:Object.freeze({__proto__:null,common:Ce,default:Le,extra_states:ke}),el:Object.freeze({__proto__:null,common:Ee,default:Ve,extra_states:Se}),nl:Object.freeze({__proto__:null,common:Te,default:He,extra_states:Me}),no:Object.freeze({__proto__:null,common:De,default:Oe,extra_states:Pe}),cs:Object.freeze({__proto__:null,common:ze,default:Ie,editor:Ne,extra_states:je}),sl:Object.freeze({__proto__:null,common:Re,default:Ue,extra_states:Fe}),sv:Object.freeze({__proto__:null,common:Be,default:We,extra_states:Ze}),bg:Object.freeze({__proto__:null,common:qe,default:Xe,extra_states:Ye}),fi:Object.freeze({__proto__:null,common:Ke,default:Ge,extra_states:Je}),ro:Object.freeze({__proto__:null,common:Qe,default:ei,extra_states:ti}),ca:Object.freeze({__proto__:null,common:ii,default:oi,extra_states:ni})},ri="en";function ai({hass:t,string:e,search:i="",replace:n=""}){var o;const s=null!==(o=null==t?void 0:t.locale.language)&&void 0!==o?o:ri;let r;try{r=e.split(".").reduce(((t,e)=>t[e]),si[s])}catch(t){r=e.split(".").reduce(((t,e)=>t[e]),si.en)}return void 0===r&&(r=e.split(".").reduce(((t,e)=>t[e]),si.en)),""!==i&&""!==n&&(r=r.replace(i,n)),r}function li(t,e){try{return t.split(".").reduce(((t,e)=>t[e]),si[e])}catch(t){return}}var ci,hi,ui=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function di(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(n=t[i],o=e[i],!(n===o||ui(n)&&ui(o)))return!1;var n,o;return!0}function pi(t,e){void 0===e&&(e=di);var i=null;function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(i&&i.lastThis===this&&e(n,i.lastArgs))return i.lastResult;var s=t.apply(this,n);return i={lastResult:s,lastArgs:n,lastThis:this},s}return n.clear=function(){i=null},n}pi((t=>new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric"}))),pi((t=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"}))),pi((t=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric"}))),pi((t=>new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short"}))),pi((t=>new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric"}))),pi((t=>new Intl.DateTimeFormat(t.language,{month:"long"}))),pi((t=>new Intl.DateTimeFormat(t.language,{year:"numeric"}))),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ci||(ci={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(hi||(hi={}));const mi=pi((t=>{if(t.time_format===hi.language||t.time_format===hi.system){const e=t.time_format===hi.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===hi.am_pm}));pi((t=>new Intl.DateTimeFormat("en"!==t.language||mi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:mi(t)?"numeric":"2-digit",minute:"2-digit",hour12:mi(t)}))),pi((t=>new Intl.DateTimeFormat("en"!==t.language||mi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:mi(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:mi(t)}))),pi((t=>new Intl.DateTimeFormat("en"!==t.language||mi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:mi(t)}))),pi((t=>new Intl.DateTimeFormat("en"!==t.language||mi(t)?t.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:mi(t)}))),pi((t=>new Intl.DateTimeFormat("en"!==t.language||mi(t)?t.language:"en-u-hc-h23",{hour:mi(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:mi(t)}))),pi((t=>new Intl.DateTimeFormat("en"!==t.language||mi(t)?t.language:"en-u-hc-h23",{weekday:"long",hour:mi(t)?"numeric":"2-digit",minute:"2-digit",hour12:mi(t)})));const vi=(t,e,i,n)=>{n=n||{},i=null==i?{}:i;const o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},_i=(t,e,i)=>Math.min(Math.max(t,e),i),fi=(t,e,i)=>{const n=e?(t=>{switch(t.number_format){case ci.comma_decimal:return["en-US","en"];case ci.decimal_comma:return["de","es","it"];case ci.space_comma:return["fr","sv","cs"];case ci.system:return;default:return t.language}})(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==ci.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(n,gi(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,gi(t,i)).format(Number(t))}return"string"==typeof t?t:`${((t,e=2)=>Math.round(t*10**e)/10**e)(t,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`},gi=(t,e)=>{const i=Object.assign({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){const e=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=e,i.maximumFractionDigits=e}return i};class yi extends TypeError{constructor(t,e){let i;const{message:n,explanation:o,...s}=t,{path:r}=t,a=0===r.length?n:`At path: ${r.join(".")} -- ${n}`;super(o??a),null!=o&&(this.cause=a),Object.assign(this,s),this.name=this.constructor.name,this.failures=()=>i??(i=[t,...e()])}}function bi(t){return"object"==typeof t&&null!=t}function wi(t){return"symbol"==typeof t?t.toString():"string"==typeof t?JSON.stringify(t):`${t}`}function $i(t,e,i,n){if(!0===t)return;!1===t?t={}:"string"==typeof t&&(t={message:t});const{path:o,branch:s}=e,{type:r}=i,{refinement:a,message:l=`Expected a value of type \`${r}\`${a?` with refinement \`${a}\``:""}, but received: \`${wi(n)}\``}=t;return{value:n,type:r,refinement:a,key:o[o.length-1],path:o,branch:s,...t,message:l}}function*xi(t,e,i,n){(function(t){return bi(t)&&"function"==typeof t[Symbol.iterator]})(t)||(t=[t]);for(const o of t){const t=$i(o,e,i,n);t&&(yield t)}}function*Ai(t,e,i={}){const{path:n=[],branch:o=[t],coerce:s=!1,mask:r=!1}=i,a={path:n,branch:o};if(s&&(t=e.coercer(t,a),r&&"type"!==e.type&&bi(e.schema)&&bi(t)&&!Array.isArray(t)))for(const i in t)void 0===e.schema[i]&&delete t[i];let l="valid";for(const n of e.validator(t,a))n.explanation=i.message,l="not_valid",yield[n,void 0];for(let[c,h,u]of e.entries(t,a)){const e=Ai(h,u,{path:void 0===c?n:[...n,c],branch:void 0===c?o:[...o,h],coerce:s,mask:r,message:i.message});for(const i of e)i[0]?(l=null!=i[0].refinement?"not_refined":"not_valid",yield[i[0],void 0]):s&&(h=i[1],void 0===c?t=h:t instanceof Map?t.set(c,h):t instanceof Set?t.add(h):bi(t)&&(void 0!==h||c in t)&&(t[c]=h))}if("not_valid"!==l)for(const n of e.refiner(t,a))n.explanation=i.message,l="not_refined",yield[n,void 0];"valid"===l&&(yield[void 0,t])}class Ci{constructor(t){const{type:e,schema:i,validator:n,refiner:o,coercer:s=(t=>t),entries:r=function*(){}}=t;this.type=e,this.schema=i,this.entries=r,this.coercer=s,this.validator=n?(t,e)=>xi(n(t,e),e,this,t):()=>[],this.refiner=o?(t,e)=>xi(o(t,e),e,this,t):()=>[]}assert(t,e){return ki(t,this,e)}create(t,e){return function(t,e,i){const n=Li(t,e,{coerce:!0,message:i});if(n[0])throw n[0];return n[1]}(t,this,e)}is(t){return function(t,e){const i=Li(t,e);return!i[0]}(t,this)}mask(t,e){return function(t,e,i){const n=Li(t,e,{coerce:!0,mask:!0,message:i});if(n[0])throw n[0];return n[1]}(t,this,e)}validate(t,e={}){return Li(t,this,e)}}function ki(t,e,i){const n=Li(t,e,{message:i});if(n[0])throw n[0]}function Li(t,e,i={}){const n=Ai(t,e,i),o=function(t){const{done:e,value:i}=t.next();return e?void 0:i}(n);if(o[0]){const t=new yi(o[0],(function*(){for(const t of n)t[0]&&(yield t[0])}));return[t,void 0]}return[void 0,o[1]]}function Ei(t,e){return new Ci({type:t,schema:null,validator:e})}function Si(t){return new Ci({type:"array",schema:t,*entries(e){if(t&&Array.isArray(e))for(const[i,n]of e.entries())yield[i,n,t]},coercer:t=>Array.isArray(t)?t.slice():t,validator:t=>Array.isArray(t)||`Expected an array value, but received: ${wi(t)}`})}function Vi(){return Ei("boolean",(t=>"boolean"==typeof t))}function Ti(t){const e=wi(t),i=typeof t;return new Ci({type:"literal",schema:"string"===i||"number"===i||"boolean"===i?t:null,validator:i=>i===t||`Expected the literal \`${e}\`, but received: ${wi(i)}`})}function Mi(){return Ei("number",(t=>"number"==typeof t&&!isNaN(t)||`Expected a number, but received: ${wi(t)}`))}function Hi(t){const e=t?Object.keys(t):[],i=Ei("never",(()=>!1));return new Ci({type:"object",schema:t||null,*entries(n){if(t&&bi(n)){const o=new Set(Object.keys(n));for(const i of e)o.delete(i),yield[i,n[i],t[i]];for(const t of o)yield[t,n[t],i]}},validator:t=>bi(t)||`Expected an object, but received: ${wi(t)}`,coercer:t=>bi(t)?{...t}:t})}function Di(t){return new Ci({...t,validator:(e,i)=>void 0===e||t.validator(e,i),refiner:(e,i)=>void 0===e||t.refiner(e,i)})}function Pi(){return Ei("string",(t=>"string"==typeof t||`Expected a string, but received: ${wi(t)}`))}function Oi(t){const e=Object.keys(t);return new Ci({type:"type",schema:t,*entries(i){if(bi(i))for(const n of e)yield[n,i[n],t[n]]},validator:t=>bi(t)||`Expected an object, but received: ${wi(t)}`,coercer:t=>bi(t)?{...t}:t})}function zi(t){const e=t.map((t=>t.type)).join(" | ");return new Ci({type:"union",schema:null,coercer(e){for(const i of t){const[t,n]=i.validate(e,{coerce:!0});if(!t)return n}return e},validator(i,n){const o=[];for(const e of t){const[...t]=Ai(i,e,n),[s]=t;if(!s[0])return[];for(const[e]of t)e&&o.push(e)}return[`Expected the value to satisfy a union of \`${e}\`, but received: ${wi(i)}`,...o]}})}const Ni=Hi({user:Pi()}),ji=zi([Vi(),Hi({text:Di(Pi()),excemptions:Di(Si(Ni))})]),Ii=Hi({action:Ti("url"),url_path:Pi(),confirmation:Di(ji)}),Ri=Hi({action:Ti("call-service"),service:Pi(),service_data:Di(Hi()),data:Di(Hi()),target:Di(Hi({entity_id:Di(zi([Pi(),Si(Pi())])),device_id:Di(zi([Pi(),Si(Pi())])),area_id:Di(zi([Pi(),Si(Pi())]))})),confirmation:Di(ji)}),Fi=Hi({action:Ti("navigate"),navigation_path:Pi(),confirmation:Di(ji)}),Ui=Oi({action:Ti("fire-dom-event")}),Bi=Hi({action:function(t){const e={},i=t.map((t=>wi(t))).join();for(const i of t)e[i]=i;return new Ci({type:"enums",schema:e,validator:e=>t.includes(e)||`Expected one of \`${i}\`, but received: ${wi(e)}`})}(["none","toggle","more-info","call-service","url","navigate"]),confirmation:Di(ji)});var Zi;Zi=t=>{if(t&&"object"==typeof t&&"action"in t)switch(t.action){case"call-service":return Ri;case"fire-dom-event":return Ui;case"navigate":return Fi;case"url":return Ii}return Bi},new Ci({type:"dynamic",schema:null,*entries(t,e){const i=Zi(t,e);yield*i.entries(t,e)},validator:(t,e)=>Zi(t,e).validator(t,e),coercer:(t,e)=>Zi(t,e).coercer(t,e),refiner:(t,e)=>Zi(t,e).refiner(t,e)}),r`
    #sortable a:nth-of-type(2n) paper-icon-item {
        animation-name: keyframes1;
        animation-iteration-count: infinite;
        transform-origin: 50% 10%;
        animation-delay: -0.75s;
        animation-duration: 0.25s;
    }

    #sortable a:nth-of-type(2n-1) paper-icon-item {
        animation-name: keyframes2;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        transform-origin: 30% 5%;
        animation-delay: -0.5s;
        animation-duration: 0.33s;
    }

    #sortable a {
        height: 48px;
        display: flex;
    }

    #sortable {
        outline: none;
        display: block !important;
    }

    .hidden-panel {
        display: flex !important;
    }

    .sortable-fallback {
        display: none;
    }

    .sortable-ghost {
        opacity: 0.4;
    }

    .sortable-fallback {
        opacity: 0;
    }

    @keyframes keyframes1 {
        0% {
            transform: rotate(-1deg);
            animation-timing-function: ease-in;
        }

        50% {
            transform: rotate(1.5deg);
            animation-timing-function: ease-out;
        }
    }

    @keyframes keyframes2 {
        0% {
            transform: rotate(1deg);
            animation-timing-function: ease-in;
        }

        50% {
            transform: rotate(-1.5deg);
            animation-timing-function: ease-out;
        }
    }

    .show-panel,
    .hide-panel {
        display: none;
        position: absolute;
        top: 0;
        right: 4px;
        --mdc-icon-button-size: 40px;
    }

    :host([rtl]) .show-panel {
        right: initial;
        left: 4px;
    }

    .hide-panel {
        top: 4px;
        right: 8px;
    }

    :host([rtl]) .hide-panel {
        right: initial;
        left: 8px;
    }

    :host([expanded]) .hide-panel {
        display: block;
    }

    :host([expanded]) .show-panel {
        display: inline-flex;
    }

    paper-icon-item.hidden-panel,
    paper-icon-item.hidden-panel span,
    paper-icon-item.hidden-panel ha-icon[slot="item-icon"] {
        color: var(--secondary-text-color);
        cursor: pointer;
    }
`;const Wi=([[t,e],[i,n]],[o,s])=>[t*o+e*s,i*o+n*s],qi=([t,e],[i,n])=>[t+i,e+n],Yi=t=>t/180*Math.PI,Xi=t=>{const{x:e,y:i,r:n,start:o,end:s,rotate:r=0}=t,a=e,l=i,c=n,h=n,u=Yi(o),d=(Yi(s)-u)%(2*Math.PI),p=Yi(r),m=(t=>[[Math.cos(t),-Math.sin(t)],[Math.sin(t),Math.cos(t)]])(p),[v,_]=qi(Wi(m,[c*Math.cos(u),h*Math.sin(u)]),[a,l]),[f,g]=qi(Wi(m,[c*Math.cos(u+d),h*Math.sin(u+d)]),[a,l]),y=d>Math.PI?1:0,b=d>0?1:0;return["M",v,_,"A",c,h,p/(2*Math.PI)*360,y,b,f,g].join(" ")};function Ki(){return Ki=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Ki.apply(this,arguments)}function Ji(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Gi(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var Qi,tn="function"!=typeof Object.assign?function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n)for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])}return e}:Object.assign,en=["","webkit","Moz","MS","ms","o"],nn="undefined"==typeof document?{style:{}}:document.createElement("div"),on=Math.round,sn=Math.abs,rn=Date.now;function an(t,e){for(var i,n,o=e[0].toUpperCase()+e.slice(1),s=0;s<en.length;){if((n=(i=en[s])?i+o:e)in t)return n;s++}}Qi="undefined"==typeof window?{}:window;var ln=an(nn.style,"touchAction"),cn=void 0!==ln;var hn="compute",un="auto",dn="manipulation",pn="none",mn="pan-x",vn="pan-y",_n=function(){if(!cn)return!1;var t={},e=Qi.CSS&&Qi.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){return t[i]=!e||Qi.CSS.supports("touch-action",i)})),t}(),fn="ontouchstart"in Qi,gn=void 0!==an(Qi,"PointerEvent"),yn=fn&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),bn="touch",wn="mouse",$n=25,xn=1,An=4,Cn=8,kn=1,Ln=2,En=4,Sn=8,Vn=16,Tn=Ln|En,Mn=Sn|Vn,Hn=Tn|Mn,Dn=["x","y"],Pn=["clientX","clientY"];function On(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!==t.length)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function zn(t,e){return"function"==typeof t?t.apply(e&&e[0]||void 0,e):t}function Nn(t,e){return t.indexOf(e)>-1}var jn=function(){function t(t,e){this.manager=t,this.set(e)}var e=t.prototype;return e.set=function(t){t===hn&&(t=this.compute()),cn&&this.manager.element.style&&_n[t]&&(this.manager.element.style[ln]=t),this.actions=t.toLowerCase().trim()},e.update=function(){this.set(this.manager.options.touchAction)},e.compute=function(){var t=[];return On(this.manager.recognizers,(function(e){zn(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(Nn(t,pn))return pn;var e=Nn(t,mn),i=Nn(t,vn);return e&&i?pn:e||i?e?mn:vn:Nn(t,dn)?dn:un}(t.join(" "))},e.preventDefaults=function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var n=this.actions,o=Nn(n,pn)&&!_n[pn],s=Nn(n,vn)&&!_n[vn],r=Nn(n,mn)&&!_n[mn];if(o){var a=1===t.pointers.length,l=t.distance<2,c=t.deltaTime<250;if(a&&l&&c)return}if(!r||!s)return o||s&&i&Tn||r&&i&Mn?this.preventSrc(e):void 0}},e.preventSrc=function(t){this.manager.session.prevented=!0,t.preventDefault()},t}();function In(t,e){for(;t;){if(t===e)return!0;t=t.parentNode}return!1}function Rn(t){var e=t.length;if(1===e)return{x:on(t[0].clientX),y:on(t[0].clientY)};for(var i=0,n=0,o=0;o<e;)i+=t[o].clientX,n+=t[o].clientY,o++;return{x:on(i/e),y:on(n/e)}}function Fn(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:on(t.pointers[i].clientX),clientY:on(t.pointers[i].clientY)},i++;return{timeStamp:rn(),pointers:e,center:Rn(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Un(t,e,i){i||(i=Dn);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return Math.sqrt(n*n+o*o)}function Bn(t,e,i){i||(i=Dn);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return 180*Math.atan2(o,n)/Math.PI}function Zn(t,e){return t===e?kn:sn(t)>=sn(e)?t<0?Ln:En:e<0?Sn:Vn}function Wn(t,e,i){return{x:e/t||0,y:i/t||0}}function qn(t,e){var i=t.session,n=e.pointers,o=n.length;i.firstInput||(i.firstInput=Fn(e)),o>1&&!i.firstMultiple?i.firstMultiple=Fn(e):1===o&&(i.firstMultiple=!1);var s=i.firstInput,r=i.firstMultiple,a=r?r.center:s.center,l=e.center=Rn(n);e.timeStamp=rn(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=Bn(a,l),e.distance=Un(a,l),function(t,e){var i=e.center,n=t.offsetDelta||{},o=t.prevDelta||{},s=t.prevInput||{};e.eventType!==xn&&s.eventType!==An||(o=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=o.x+(i.x-n.x),e.deltaY=o.y+(i.y-n.y)}(i,e),e.offsetDirection=Zn(e.deltaX,e.deltaY);var c,h,u=Wn(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=sn(u.x)>sn(u.y)?u.x:u.y,e.scale=r?(c=r.pointers,Un((h=n)[0],h[1],Pn)/Un(c[0],c[1],Pn)):1,e.rotation=r?function(t,e){return Bn(e[1],e[0],Pn)+Bn(t[1],t[0],Pn)}(r.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,n,o,s,r=t.lastInterval||e,a=e.timeStamp-r.timeStamp;if(e.eventType!==Cn&&(a>$n||void 0===r.velocity)){var l=e.deltaX-r.deltaX,c=e.deltaY-r.deltaY,h=Wn(a,l,c);n=h.x,o=h.y,i=sn(h.x)>sn(h.y)?h.x:h.y,s=Zn(l,c),t.lastInterval=e}else i=r.velocity,n=r.velocityX,o=r.velocityY,s=r.direction;e.velocity=i,e.velocityX=n,e.velocityY=o,e.direction=s}(i,e);var d,p=t.element,m=e.srcEvent;In(d=m.composedPath?m.composedPath()[0]:m.path?m.path[0]:m.target,p)&&(p=d),e.target=p}function Yn(t,e,i){var n=i.pointers.length,o=i.changedPointers.length,s=e&xn&&n-o==0,r=e&(An|Cn)&&n-o==0;i.isFirst=!!s,i.isFinal=!!r,s&&(t.session={}),i.eventType=e,qn(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function Xn(t){return t.trim().split(/\s+/g)}function Kn(t,e,i){On(Xn(e),(function(e){t.addEventListener(e,i,!1)}))}function Jn(t,e,i){On(Xn(e),(function(e){t.removeEventListener(e,i,!1)}))}function Gn(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||window}var Qn=function(){function t(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){zn(t.options.enable,[t])&&i.handler(e)},this.init()}var e=t.prototype;return e.handler=function(){},e.init=function(){this.evEl&&Kn(this.element,this.evEl,this.domHandler),this.evTarget&&Kn(this.target,this.evTarget,this.domHandler),this.evWin&&Kn(Gn(this.element),this.evWin,this.domHandler)},e.destroy=function(){this.evEl&&Jn(this.element,this.evEl,this.domHandler),this.evTarget&&Jn(this.target,this.evTarget,this.domHandler),this.evWin&&Jn(Gn(this.element),this.evWin,this.domHandler)},t}();function to(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}var eo={pointerdown:xn,pointermove:2,pointerup:An,pointercancel:Cn,pointerout:Cn},io={2:bn,3:"pen",4:wn,5:"kinect"},no="pointerdown",oo="pointermove pointerup pointercancel";Qi.MSPointerEvent&&!Qi.PointerEvent&&(no="MSPointerDown",oo="MSPointerMove MSPointerUp MSPointerCancel");var so=function(t){function e(){var i,n=e.prototype;return n.evEl=no,n.evWin=oo,(i=t.apply(this,arguments)||this).store=i.manager.session.pointerEvents=[],i}return Ji(e,t),e.prototype.handler=function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),o=eo[n],s=io[t.pointerType]||t.pointerType,r=s===bn,a=to(e,t.pointerId,"pointerId");o&xn&&(0===t.button||r)?a<0&&(e.push(t),a=e.length-1):o&(An|Cn)&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,o,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))},e}(Qn);function ro(t){return Array.prototype.slice.call(t,0)}function ao(t,e,i){for(var n=[],o=[],s=0;s<t.length;){var r=e?t[s][e]:t[s];to(o,r)<0&&n.push(t[s]),o[s]=r,s++}return i&&(n=e?n.sort((function(t,i){return t[e]>i[e]})):n.sort()),n}var lo={touchstart:xn,touchmove:2,touchend:An,touchcancel:Cn},co=function(t){function e(){var i;return e.prototype.evTarget="touchstart touchmove touchend touchcancel",(i=t.apply(this,arguments)||this).targetIds={},i}return Ji(e,t),e.prototype.handler=function(t){var e=lo[t.type],i=ho.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bn,srcEvent:t})},e}(Qn);function ho(t,e){var i,n,o=ro(t.touches),s=this.targetIds;if(e&(2|xn)&&1===o.length)return s[o[0].identifier]=!0,[o,o];var r=ro(t.changedTouches),a=[],l=this.target;if(n=o.filter((function(t){return In(t.target,l)})),e===xn)for(i=0;i<n.length;)s[n[i].identifier]=!0,i++;for(i=0;i<r.length;)s[r[i].identifier]&&a.push(r[i]),e&(An|Cn)&&delete s[r[i].identifier],i++;return a.length?[ao(n.concat(a),"identifier",!0),a]:void 0}var uo={mousedown:xn,mousemove:2,mouseup:An},po=function(t){function e(){var i,n=e.prototype;return n.evEl="mousedown",n.evWin="mousemove mouseup",(i=t.apply(this,arguments)||this).pressed=!1,i}return Ji(e,t),e.prototype.handler=function(t){var e=uo[t.type];e&xn&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=An),this.pressed&&(e&An&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:wn,srcEvent:t}))},e}(Qn),mo=2500;function vo(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY},n=this.lastTouches;this.lastTouches.push(i);setTimeout((function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)}),mo)}}function _o(t,e){t&xn?(this.primaryTouch=e.changedPointers[0].identifier,vo.call(this,e)):t&(An|Cn)&&vo.call(this,e)}function fo(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var o=this.lastTouches[n],s=Math.abs(e-o.x),r=Math.abs(i-o.y);if(s<=25&&r<=25)return!0}return!1}var go=function(){return function(t){function e(e,i){var n;return(n=t.call(this,e,i)||this).handler=function(t,e,i){var o=i.pointerType===bn,s=i.pointerType===wn;if(!(s&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(o)_o.call(Gi(Gi(n)),e,i);else if(s&&fo.call(Gi(Gi(n)),i))return;n.callback(t,e,i)}},n.touch=new co(n.manager,n.handler),n.mouse=new po(n.manager,n.handler),n.primaryTouch=null,n.lastTouches=[],n}return Ji(e,t),e.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},e}(Qn)}();function yo(t,e,i){return!!Array.isArray(t)&&(On(t,i[e],i),!0)}var bo=32,wo=1;function $o(t,e){var i=e.manager;return i?i.get(t):t}function xo(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}var Ao=function(){function t(t){void 0===t&&(t={}),this.options=Ki({enable:!0},t),this.id=wo++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var e=t.prototype;return e.set=function(t){return tn(this.options,t),this.manager&&this.manager.touchAction.update(),this},e.recognizeWith=function(t){if(yo(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=$o(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},e.dropRecognizeWith=function(t){return yo(t,"dropRecognizeWith",this)||(t=$o(t,this),delete this.simultaneous[t.id]),this},e.requireFailure=function(t){if(yo(t,"requireFailure",this))return this;var e=this.requireFail;return-1===to(e,t=$o(t,this))&&(e.push(t),t.requireFailure(this)),this},e.dropRequireFailure=function(t){if(yo(t,"dropRequireFailure",this))return this;t=$o(t,this);var e=to(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},e.hasRequireFailures=function(){return this.requireFail.length>0},e.canRecognizeWith=function(t){return!!this.simultaneous[t.id]},e.emit=function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<8&&n(e.options.event+xo(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=8&&n(e.options.event+xo(i))},e.tryEmit=function(t){if(this.canEmit())return this.emit(t);this.state=bo},e.canEmit=function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},e.recognize=function(t){var e=tn({},t);if(!zn(this.options.enable,[this,e]))return this.reset(),void(this.state=bo);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},e.process=function(t){},e.getTouchAction=function(){},e.reset=function(){},t}(),Co=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Ki({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},e))||this).pTime=!1,i.pCenter=!1,i._timer=null,i._input=null,i.count=0,i}Ji(e,t);var i=e.prototype;return i.getTouchAction=function(){return[dn]},i.process=function(t){var e=this,i=this.options,n=t.pointers.length===i.pointers,o=t.distance<i.threshold,s=t.deltaTime<i.time;if(this.reset(),t.eventType&xn&&0===this.count)return this.failTimeout();if(o&&s&&n){if(t.eventType!==An)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<i.interval,a=!this.pCenter||Un(this.pCenter,t.center)<i.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&r?this.count+=1:this.count=1,this._input=t,0===this.count%i.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.interval),2):8}return bo},i.failTimeout=function(){var t=this;return this._timer=setTimeout((function(){t.state=bo}),this.options.interval),bo},i.reset=function(){clearTimeout(this._timer)},i.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},e}(Ao),ko=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Ki({pointers:1},e))||this}Ji(e,t);var i=e.prototype;return i.attrTest=function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},i.process=function(t){var e=this.state,i=t.eventType,n=6&e,o=this.attrTest(t);return n&&(i&Cn||!o)?16|e:n||o?i&An?8|e:2&e?4|e:2:bo},e}(Ao);function Lo(t){return t===Vn?"down":t===Sn?"up":t===Ln?"left":t===En?"right":""}var Eo=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Ki({event:"pan",threshold:10,pointers:1,direction:Hn},e))||this).pX=null,i.pY=null,i}Ji(e,t);var i=e.prototype;return i.getTouchAction=function(){var t=this.options.direction,e=[];return t&Tn&&e.push(vn),t&Mn&&e.push(mn),e},i.directionTest=function(t){var e=this.options,i=!0,n=t.distance,o=t.direction,s=t.deltaX,r=t.deltaY;return o&e.direction||(e.direction&Tn?(o=0===s?kn:s<0?Ln:En,i=s!==this.pX,n=Math.abs(t.deltaX)):(o=0===r?kn:r<0?Sn:Vn,i=r!==this.pY,n=Math.abs(t.deltaY))),t.direction=o,i&&n>e.threshold&&o&e.direction},i.attrTest=function(t){return ko.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},i.emit=function(e){this.pX=e.deltaX,this.pY=e.deltaY;var i=Lo(e.direction);i&&(e.additionalEvent=this.options.event+i),t.prototype.emit.call(this,e)},e}(ko),So=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Ki({event:"swipe",threshold:10,velocity:.3,direction:Tn|Mn,pointers:1},e))||this}Ji(e,t);var i=e.prototype;return i.getTouchAction=function(){return Eo.prototype.getTouchAction.call(this)},i.attrTest=function(e){var i,n=this.options.direction;return n&(Tn|Mn)?i=e.overallVelocity:n&Tn?i=e.overallVelocityX:n&Mn&&(i=e.overallVelocityY),t.prototype.attrTest.call(this,e)&&n&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers===this.options.pointers&&sn(i)>this.options.velocity&&e.eventType&An},i.emit=function(t){var e=Lo(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)},e}(ko),Vo=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Ki({event:"pinch",threshold:0,pointers:2},e))||this}Ji(e,t);var i=e.prototype;return i.getTouchAction=function(){return[pn]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)},i.emit=function(e){if(1!==e.scale){var i=e.scale<1?"in":"out";e.additionalEvent=this.options.event+i}t.prototype.emit.call(this,e)},e}(ko),To=function(t){function e(e){return void 0===e&&(e={}),t.call(this,Ki({event:"rotate",threshold:0,pointers:2},e))||this}Ji(e,t);var i=e.prototype;return i.getTouchAction=function(){return[pn]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)},e}(ko),Mo=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,Ki({event:"press",pointers:1,time:251,threshold:9},e))||this)._timer=null,i._input=null,i}Ji(e,t);var i=e.prototype;return i.getTouchAction=function(){return[un]},i.process=function(t){var e=this,i=this.options,n=t.pointers.length===i.pointers,o=t.distance<i.threshold,s=t.deltaTime>i.time;if(this._input=t,!o||!n||t.eventType&(An|Cn)&&!s)this.reset();else if(t.eventType&xn)this.reset(),this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.time);else if(t.eventType&An)return 8;return bo},i.reset=function(){clearTimeout(this._timer)},i.emit=function(t){8===this.state&&(t&&t.eventType&An?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=rn(),this.manager.emit(this.options.event,this._input)))},e}(Ao),Ho={domEvents:!1,touchAction:hn,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Do=[[To,{enable:!1}],[Vo,{enable:!1},["rotate"]],[So,{direction:Tn}],[Eo,{direction:Tn},["swipe"]],[Co],[Co,{event:"doubletap",taps:2},["tap"]],[Mo]];function Po(t,e){var i,n=t.element;n.style&&(On(t.options.cssProps,(function(o,s){i=an(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=o):n.style[i]=t.oldCssProps[i]||""})),e||(t.oldCssProps={}))}var Oo=function(){function t(t,e){var i,n=this;this.options=tn({},Ho,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(gn?so:yn?co:fn?go:po))(i,Yn),this.touchAction=new jn(this,this.options.touchAction),Po(this,!0),On(this.options.recognizers,(function(t){var e=n.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}var e=t.prototype;return e.set=function(t){return tn(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},e.stop=function(t){this.session.stopped=t?2:1},e.recognize=function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var n=this.recognizers,o=e.curRecognizer;(!o||o&&8&o.state)&&(e.curRecognizer=null,o=null);for(var s=0;s<n.length;)i=n[s],2===e.stopped||o&&i!==o&&!i.canRecognizeWith(o)?i.reset():i.recognize(t),!o&&14&i.state&&(e.curRecognizer=i,o=i),s++}},e.get=function(t){if(t instanceof Ao)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event===t)return e[i];return null},e.add=function(t){if(yo(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},e.remove=function(t){if(yo(t,"remove",this))return this;var e=this.get(t);if(t){var i=this.recognizers,n=to(i,e);-1!==n&&(i.splice(n,1),this.touchAction.update())}return this},e.on=function(t,e){if(void 0===t||void 0===e)return this;var i=this.handlers;return On(Xn(t),(function(t){i[t]=i[t]||[],i[t].push(e)})),this},e.off=function(t,e){if(void 0===t)return this;var i=this.handlers;return On(Xn(t),(function(t){e?i[t]&&i[t].splice(to(i[t],e),1):delete i[t]})),this},e.emit=function(t,e){this.options.domEvents&&function(t,e){var i=document.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},e.destroy=function(){this.element&&Po(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},t}(),zo={touchstart:xn,touchmove:2,touchend:An,touchcancel:Cn},No=function(t){function e(){var i,n=e.prototype;return n.evTarget="touchstart",n.evWin="touchstart touchmove touchend touchcancel",(i=t.apply(this,arguments)||this).started=!1,i}return Ji(e,t),e.prototype.handler=function(t){var e=zo[t.type];if(e===xn&&(this.started=!0),this.started){var i=jo.call(this,t,e);e&(An|Cn)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bn,srcEvent:t})}},e}(Qn);function jo(t,e){var i=ro(t.touches),n=ro(t.changedTouches);return e&(An|Cn)&&(i=ao(i.concat(n),"identifier",!0)),[i,n]}function Io(t,e,i){var n="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=window.console&&(window.console.warn||window.console.log);return o&&o.call(window.console,n,i),t.apply(this,arguments)}}var Ro=Io((function(t,e,i){for(var n=Object.keys(e),o=0;o<n.length;)(!i||i&&void 0===t[n[o]])&&(t[n[o]]=e[n[o]]),o++;return t}),"extend","Use `assign`."),Fo=Io((function(t,e){return Ro(t,e,!0)}),"merge","Use `assign`.");function Uo(t,e,i){var n,o=e.prototype;(n=t.prototype=Object.create(o)).constructor=t,n._super=o,i&&tn(n,i)}function Bo(t,e){return function(){return t.apply(e,arguments)}}(function(){var t=function(t,e){return void 0===e&&(e={}),new Oo(t,Ki({recognizers:Do.concat()},e))};return t.VERSION="2.0.17-rc",t.DIRECTION_ALL=Hn,t.DIRECTION_DOWN=Vn,t.DIRECTION_LEFT=Ln,t.DIRECTION_RIGHT=En,t.DIRECTION_UP=Sn,t.DIRECTION_HORIZONTAL=Tn,t.DIRECTION_VERTICAL=Mn,t.DIRECTION_NONE=kn,t.DIRECTION_DOWN=Vn,t.INPUT_START=xn,t.INPUT_MOVE=2,t.INPUT_END=An,t.INPUT_CANCEL=Cn,t.STATE_POSSIBLE=1,t.STATE_BEGAN=2,t.STATE_CHANGED=4,t.STATE_ENDED=8,t.STATE_RECOGNIZED=8,t.STATE_CANCELLED=16,t.STATE_FAILED=bo,t.Manager=Oo,t.Input=Qn,t.TouchAction=jn,t.TouchInput=co,t.MouseInput=po,t.PointerEventInput=so,t.TouchMouseInput=go,t.SingleTouchInput=No,t.Recognizer=Ao,t.AttrRecognizer=ko,t.Tap=Co,t.Pan=Eo,t.Swipe=So,t.Pinch=Vo,t.Rotate=To,t.Press=Mo,t.on=Kn,t.off=Jn,t.each=On,t.merge=Fo,t.extend=Ro,t.bindFn=Bo,t.assign=tn,t.inherit=Uo,t.bindFn=Bo,t.prefixed=an,t.toArray=ro,t.inArray=to,t.uniqueArray=ao,t.splitStr=Xn,t.boolOrFn=zn,t.hasParent=In,t.addEventListeners=Kn,t.removeEventListeners=Jn,t.defaults=tn({},Ho,{preset:Do}),t})().defaults;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Zo=270;const Wo=new Set(["ArrowRight","ArrowUp","ArrowLeft","ArrowDown","PageUp","PageDown","Home","End"]);let qo=class extends at{constructor(){super(...arguments),this.disabled=!1,this.step=1,this.min=0,this.max=100,this._localValue=this.value,this._localLow=this.low,this._localHigh=this.high,this._getPercentageFromEvent=t=>{const e=this._slider.getBoundingClientRect(),i=2*(t.center.x-e.left-e.width/2)/e.width,n=2*(t.center.y-e.top-e.height/2)/e.height,[,o]=function(t,e){return[Math.sqrt(t*t+e*e),Math.atan2(e,t)]}(i,n),s=(o/(2*Math.PI)*360+45-135+360)%360-45;return Math.max(Math.min(s/Zo,1),0)}}_valueToPercentage(t){return(_i(t,this.min,this.max)-this.min)/(this.max-this.min)}_percentageToValue(t){return(this.max-this.min)*t+this.min}_steppedValue(t){return Math.round(t/this.step)*this.step}_boundedValue(t){var e,i;const n="high"===this._activeSlider?Math.min(null!==(e=this._localLow)&&void 0!==e?e:this.max):this.min,o="low"===this._activeSlider?Math.max(null!==(i=this._localHigh)&&void 0!==i?i:this.min):this.max;return Math.min(Math.max(t,n),o)}firstUpdated(t){super.firstUpdated(t),this._setupListeners()}updated(t){super.updated(t),this._activeSlider||(t.has("value")&&(this._localValue=this.value),t.has("low")&&(this._localLow=this.low),t.has("high")&&(this._localHigh=this.high))}connectedCallback(){super.connectedCallback(),this._setupListeners()}disconnectedCallback(){super.disconnectedCallback()}_findActiveSlider(t){var e,i;if(!this.dual)return"value";const n=Math.max(null!==(e=this._localLow)&&void 0!==e?e:this.min,this.min),o=Math.min(null!==(i=this._localHigh)&&void 0!==i?i:this.max,this.max);if(n>=t)return"low";if(o<=t)return"high";return Math.abs(t-n)<=Math.abs(t-o)?"low":"high"}_setActiveValue(t){switch(this._activeSlider){case"high":this._localHigh=t;break;case"low":this._localLow=t;break;case"value":this._localValue=t}}_getActiveValue(){switch(this._activeSlider){case"high":return this._localHigh;case"low":return this._localLow;case"value":return this._localValue}}_setupListeners(){this._interaction&&!this._mc&&(this._mc=new Oo(this._interaction,{inputClass:go}),this._mc.add(new Eo({direction:Hn,enable:!0,threshold:0})),this._mc.add(new Co({event:"singletap"})),this._mc.on("pan",(t=>{t.srcEvent.stopPropagation(),t.srcEvent.preventDefault()})),this._mc.on("panstart",(t=>{var e,i;if(this.disabled)return;const n=this._getPercentageFromEvent(t),o=this._percentageToValue(n);this._activeSlider=this._findActiveSlider(o),this._lastSlider=this._activeSlider,null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("#slider"))||void 0===i||i.focus()})),this._mc.on("pancancel",(()=>{this.disabled||(this._activeSlider=void 0)})),this._mc.on("panmove",(t=>{if(this.disabled)return;const e=this._getPercentageFromEvent(t),i=this._percentageToValue(e),n=this._boundedValue(i);this._setActiveValue(n);const o=this._steppedValue(n);this._activeSlider&&vi(this,`${this._activeSlider}-changing`,{value:o})})),this._mc.on("panend",(t=>{if(this.disabled)return;const e=this._getPercentageFromEvent(t),i=this._percentageToValue(e),n=this._boundedValue(i),o=this._steppedValue(n);this._setActiveValue(o),this._activeSlider&&(vi(this,`${this._activeSlider}-changing`,{value:void 0}),vi(this,`${this._activeSlider}-changed`,{value:o})),this._activeSlider=void 0})),this._mc.on("singletap",(t=>{var e,i;if(this.disabled)return;const n=this._getPercentageFromEvent(t),o=this._percentageToValue(n);this._activeSlider=this._findActiveSlider(o);const s=this._boundedValue(o),r=this._steppedValue(s);this._setActiveValue(r),this._activeSlider&&(vi(this,`${this._activeSlider}-changing`,{value:void 0}),vi(this,`${this._activeSlider}-changed`,{value:r})),this._lastSlider=this._activeSlider,null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("#slider"))||void 0===i||i.focus(),this._activeSlider=void 0})))}get _tenPercentStep(){return Math.max(this.step,(this.max-this.min)/10)}_handleKeyDown(t){var e,i,n;if(!Wo.has(t.code))return;t.preventDefault(),this._lastSlider&&(null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById(this._lastSlider))||void 0===i||i.focus()),this._activeSlider=null!==(n=this._lastSlider)&&void 0!==n?n:t.currentTarget.id,this._lastSlider=void 0;const o=this._getActiveValue();switch(t.code){case"ArrowRight":case"ArrowUp":this._setActiveValue(this._boundedValue((null!=o?o:this.min)+this.step));break;case"ArrowLeft":case"ArrowDown":this._setActiveValue(this._boundedValue((null!=o?o:this.min)-this.step));break;case"PageUp":this._setActiveValue(this._steppedValue(this._boundedValue((null!=o?o:this.min)+this._tenPercentStep)));break;case"PageDown":this._setActiveValue(this._steppedValue(this._boundedValue((null!=o?o:this.min)-this._tenPercentStep)));break;case"Home":this._setActiveValue(this._boundedValue(this.min));break;case"End":this._setActiveValue(this._boundedValue(this.max))}vi(this,`${this._activeSlider}-changing`,{value:this._getActiveValue()}),this._activeSlider=void 0}_handleKeyUp(t){Wo.has(t.code)&&(this._activeSlider=t.currentTarget.id,t.preventDefault(),vi(this,`${this._activeSlider}-changing`,{value:void 0}),vi(this,`${this._activeSlider}-changed`,{value:this._getActiveValue()}),this._activeSlider=void 0)}destroyListeners(){this._mc&&(this._mc.destroy(),this._mc=void 0)}_strokeCircleDashArc(t){return this._strokeDashArc(t,t)}_strokeDashArc(t,e){const i=this._valueToPercentage(t),n=this._valueToPercentage(e),o=290*Math.PI*Zo/360,s=Math.max((n-i)*o,0);return[`${s} ${o-s}`,`-${i*o-.5}`]}renderArc(t,e,i){var n,o;if(this.disabled)return W;const s=Xi({x:0,y:0,start:0,end:Zo,r:145}),r="end"===i?this.max:this.min,a=null!==(n=this.current)&&void 0!==n?n:r,l=null!=e?e:r,c="end"===i?l<=a:"start"===i&&a<=l,h=c?"end"===i?this._strokeDashArc(l,a):this._strokeDashArc(a,l):this._strokeCircleDashArc(l),u="full"===i?this._strokeDashArc(this.min,this.max):"end"===i?this._strokeDashArc(l,r):this._strokeDashArc(r,l),d=this._strokeCircleDashArc(l),p=null!=this.current&&this.current<=this.max&&this.current>=this.min&&(c||"full"===this.mode)?this._strokeCircleDashArc(this.current):void 0;return B`
        <g class=${gt({inactive:Boolean(this.inactive)})}>
          <path
            class="arc arc-clear"
            d=${s}
            stroke-dasharray=${u[0]}
            stroke-dashoffset=${u[1]}
          />
          <path
            class="arc arc-colored ${gt({[t]:!0})}"
            d=${s}
            stroke-dasharray=${u[0]}
            stroke-dashoffset=${u[1]}
          />
          <path
            .id=${t}
            d=${s}
            class="arc arc-active ${gt({[t]:!0})}"
            stroke-dasharray=${h[0]}
            stroke-dashoffset=${h[1]}
            role="slider"
            tabindex="0"
            aria-valuemin=${this.min}
            aria-valuemax=${this.max}
            aria-valuenow=${null!=this._localValue?this._steppedValue(this._localValue):void 0}
            aria-disabled=${this.disabled}
            aria-label=${(t=>t??W)(null!==(o=this.lowLabel)&&void 0!==o?o:this.label)}
            @keydown=${this._handleKeyDown}
            @keyup=${this._handleKeyUp}
          />
          ${p?B`
                <path
                  class="current arc-current"
                  d=${s}
                  stroke-dasharray=${p[0]}
                  stroke-dashoffset=${p[1]}
                />
            `:W}
          <path
            class="target-border ${gt({[t]:!0})}"
            d=${s}
            stroke-dasharray=${d[0]}
            stroke-dashoffset=${d[1]}
          />
          <path
            class="target"
            d=${s}
            stroke-dasharray=${d[0]}
            stroke-dashoffset=${d[1]}
          />
        </g>
      `}render(){const t=Xi({x:0,y:0,start:0,end:Zo,r:145}),e=this.dual?this._localLow:this._localValue,i=this._localHigh,n=this.current,o=n?this._strokeCircleDashArc(n):void 0;return U`
        <svg
          id="slider"
          viewBox="0 0 320 320"
          overflow="visible"
          class=${gt({pressed:Boolean(this._activeSlider)})}
          @keydown=${this._handleKeyDown}
          tabindex=${this._lastSlider?"0":"-1"}
        >
          <g
            id="container"
            transform="translate(160 160) rotate(${135})"
          >
            <g id="interaction">
              <path d=${t} />
            </g>
            <g id="display">
              <path class="background" d=${t} />
              ${o?B`
                    <path
                      class="current"
                      d=${t}
                      stroke-dasharray=${o[0]}
                      stroke-dashoffset=${o[1]}
                    />
                  `:W}
              ${null!=e?this.renderArc(this.dual?"low":"value",e,!this.dual&&this.mode||"start"):W}
              ${this.dual&&null!=i?this.renderArc("high",i,"end"):W}
            </g>
          </g>
        </svg>
        <slot></slot>
      `}static get styles(){return r`
        :host {
          --clear-background-color: #111111;
          --control-circular-slider-color: var(--primary-color);
          --control-circular-slider-background: var(--disabled-color);
          --control-circular-slider-background-opacity: 0.3;
          --control-circular-slider-low-color: var(
            --control-circular-slider-color
          );
          --control-circular-slider-high-color: var(
            --control-circular-slider-color
          );
        }
        #wrapper {
          position: relative;
        }
        svg {
          width: 320px;
          display: block;
        }
        #slider {
          width: 100%;
          max-width: 233px;
          outline: none;
          margin: 0 auto;
          margin-top: 1em;
          position: relative;
          z-index: 2;
        }
        #interaction {
          display: flex;
          fill: none;
          stroke: transparent;
          stroke-linecap: round;
          stroke-width: 48px;
          cursor: pointer;
        }
        #display {
          pointer-events: none;
        }
        :host([disabled]) #interaction {
          cursor: initial;
        }
  
        .background {
          fill: none;
          stroke: var(--control-circular-slider-background);
          opacity: var(--control-circular-slider-background-opacity);
          transition:
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
          stroke-linecap: round;
          stroke-width: 24px;
        }
  
        .arc {
          fill: none;
          stroke-linecap: round;
          stroke-width: 24px;
          transition:
            stroke-width 300ms ease-in-out,
            stroke-dasharray 300ms ease-in-out,
            stroke-dashoffset 300ms ease-in-out,
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
        }
  
        .target {
          fill: none;
          stroke-linecap: round;
          stroke-width: 18px;
          stroke: white;
          transition:
            stroke-width 300ms ease-in-out,
            stroke-dasharray 300ms ease-in-out,
            stroke-dashoffset 300ms ease-in-out,
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
        }
  
        .target-border {
          fill: none;
          stroke-linecap: round;
          stroke-width: 24px;
          stroke: white;
          transition:
            stroke-width 300ms ease-in-out,
            stroke-dasharray 300ms ease-in-out,
            stroke-dashoffset 300ms ease-in-out,
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
        }


  
        .current {
          fill: none;
          stroke-linecap: round;
          stroke-width: 8px;
          stroke: var(--primary-text-color);
          opacity: 0.5;
          transition:
            stroke-width 300ms ease-in-out,
            stroke-dasharray 300ms ease-in-out,
            stroke-dashoffset 300ms ease-in-out,
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
        }
  
        .arc-current {
          stroke: var(--clear-background-color);
        }
  
        .arc-clear {
          stroke: var(--clear-background-color);
        }
        .arc-colored {
          opacity: 0.5;
        }
        .arc-active {
          outline: none;
        }
        .arc-active:focus-visible {
          stroke-width: 28px;
        }
  
        .pressed .arc,
        .pressed .target,
        .pressed .target-border,
        .pressed .current {
          transition:
            stroke-width 300ms ease-in-out,
            stroke 180ms ease-in-out,
            opacity 180ms ease-in-out;
        }
  
        .inactive .arc,
        .inactive .arc-current {
          opacity: 0;
        }
  
        .value {
          stroke: var(--control-circular-slider-color);
        }
  
        .low {
          stroke: var(--control-circular-slider-low-color);
        }
  
        .high {
          stroke: var(--state-climate-cool-color);
        }
      `}};t([dt({type:Boolean,reflect:!0})],qo.prototype,"disabled",void 0),t([dt({type:Boolean})],qo.prototype,"dual",void 0),t([dt({type:String})],qo.prototype,"mode",void 0),t([dt({type:Boolean})],qo.prototype,"inactive",void 0),t([dt({type:String})],qo.prototype,"label",void 0),t([dt({type:String,attribute:"low-label"})],qo.prototype,"lowLabel",void 0),t([dt({type:String,attribute:"high-label"})],qo.prototype,"highLabel",void 0),t([dt({type:Number})],qo.prototype,"value",void 0),t([dt({type:Number})],qo.prototype,"low",void 0),t([dt({type:Number})],qo.prototype,"high",void 0),t([dt({type:Number})],qo.prototype,"current",void 0),t([dt({type:Number})],qo.prototype,"step",void 0),t([dt({type:Number})],qo.prototype,"min",void 0),t([dt({type:Number})],qo.prototype,"max",void 0),t([pt()],qo.prototype,"_localValue",void 0),t([pt()],qo.prototype,"_localLow",void 0),t([pt()],qo.prototype,"_localHigh",void 0),t([pt()],qo.prototype,"_activeSlider",void 0),t([pt()],qo.prototype,"_lastSlider",void 0),t([vt("#slider")],qo.prototype,"_slider",void 0),t([vt("#interaction")],qo.prototype,"_interaction",void 0),qo=t([ct("vt-ha-control-circular-slider")],qo);const Yo="unavailable",Xo={auto:"M18,11V12.5C21.19,12.5 23.09,16.05 21.33,18.71L20.24,17.62C21.06,15.96 19.85,14 18,14V15.5L15.75,13.25L18,11M18,22V20.5C14.81,20.5 12.91,16.95 14.67,14.29L15.76,15.38C14.94,17.04 16.15,19 18,19V17.5L20.25,19.75L18,22M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H14C13.36,20.45 12.86,19.77 12.5,19H5V8H19V10.59C19.71,10.7 20.39,10.94 21,11.31V5A2,2 0 0,0 19,3Z",heat_cool:"M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z",heat:"M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z",cool:"M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z",off:"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",fan_only:"M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",dry:Ct,window_open:kt,windowBypass:Lt,presence:wt,motion:xt,eco:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z",comfort:"M12.5 7C12.5 5.89 13.39 5 14.5 5H18C19.1 5 20 5.9 20 7V9.16C18.84 9.57 18 10.67 18 11.97V14H12.5V7M6 11.96V14H11.5V7C11.5 5.89 10.61 5 9.5 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96M20.66 10.03C19.68 10.19 19 11.12 19 12.12V15H5V12C5 10.9 4.11 10 3 10S1 10.9 1 12V17C1 18.1 1.9 19 3 19V21H5V19H19V21H21V19C22.1 19 23 18.1 23 17V12C23 10.79 21.91 9.82 20.66 10.03Z",boost:"M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z",activity:xt,power:"M12 3L2 12H5V20H19V12H22L12 3M11.5 18V14H9L12.5 7V11H15L11.5 18Z",flashAlert:bt,temperature:"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",humidity:Ct,ok:yt,thermometerAlert:At,none:"M23 17C23 20.31 20.31 23 17 23V21.5C19.5 21.5 21.5 19.5 21.5 17H23M1 7C1 3.69 3.69 1 7 1V2.5C4.5 2.5 2.5 4.5 2.5 7H1M8 4.32L3.41 8.92C.19 12.14 .19 17.37 3.41 20.59S11.86 23.81 15.08 20.59L22.15 13.5C22.64 13.03 22.64 12.24 22.15 11.75C21.66 11.26 20.87 11.26 20.38 11.75L15.96 16.17L15.25 15.46L21.79 8.92C22.28 8.43 22.28 7.64 21.79 7.15S20.5 6.66 20 7.15L14.19 13L13.5 12.27L20.37 5.38C20.86 4.89 20.86 4.1 20.37 3.61S19.09 3.12 18.6 3.61L11.71 10.5L11 9.8L16.5 4.32C17 3.83 17 3.04 16.5 2.55S15.22 2.06 14.73 2.55L7.11 10.17C8.33 11.74 8.22 14 6.78 15.45L6.07 14.74C7.24 13.57 7.24 11.67 6.07 10.5L5.72 10.15L9.79 6.08C10.28 5.59 10.28 4.8 9.79 4.31C9.29 3.83 8.5 3.83 8 4.32Z",auto_regulation_mode:$t,power_percent:$t,mean_power_cycle:"M7,2V13H10V22L17,10H13L17,2H7Z",valve_open_percent:"M22 13V21H20V19H16.58C15.81 20.76 14.05 22 12 22S8.19 20.76 7.42 19H4V21H2V13H4V15H7.43C7.93 13.85 8.85 12.93 10 12.42V11H8V9H16V11H14V12.42C15.15 12.93 16.07 13.85 16.57 15H20V13H22M17 2H7C6.45 2 6 2.45 6 3S6.45 4 7 4H10V5H11V8H13V5H14V4H17C17.55 4 18 3.55 18 3S17.55 2 17 2Z",regulated_target_temperature:"M12 14C11.7 13.6 11.4 13.3 11 13V5C11 3.3 9.7 2 8 2S5 3.3 5 5V13C2.8 14.7 2.3 17.8 4 20S8.8 22.7 11 21 13.7 16.2 12 14M9 8H7V5C7 4.5 7.5 4 8 4S9 4.5 9 5V8M18 3H16L12.8 12H14.7L15.4 10H18.6L19.3 12H21.2L18 3M15.8 8.7L17 5L18.2 8.7H15.8Z"};function Ko(t){const e=window;e.customCards=e.customCards||[],e.customCards.push(Object.assign(Object.assign({},t),{preview:!0}))}function Jo(t){const e=(new Date).getTime()-t.getTime();return Math.floor(e/6e4)}function Go(t,e){const i=Math.round(t*e)/e;return parseFloat(i.toFixed(e))}console.info("%c  VersatileThermostatUI-CARD \n%c  version: 0.4.0    ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),Ko({type:"versatile-thermostat-ui-card",name:"Versatile Thermostat Climate Card",description:"Card for climate entity"});let Qo=class extends at{constructor(){super(),this.value={},this._selectTargetTemperature="low",this.current=0,this.humidity=0,this.min=7,this.max=35,this.step=.5,this.window=!1,this.windowByPass=!1,this.presence=!1,this.motion=!1,this.overpowering=!1,this.is_device_active=!1,this.status="loading",this.mode="off",this.preset="manual",this.dragging=!1,this.name="",this.target="value",this._debouncedCallService=((t,e,i=!1)=>{let n;const o=(...o)=>{const s=i&&!n;clearTimeout(n),n=window.setTimeout((()=>{n=void 0,i||t(...o)}),e),s&&t(...o)};return o.cancel=()=>{clearTimeout(n)},o})((t=>this._callService(t)),1e3),this._init=!0,this._firstRender=!0,this._ignore=!1,this._hasWindow=!1,this._hasWindowByPass=!1,this._hasPresence=!1,this._hasMotion=!1,this._hasOverpowering=!1,this._oldValueMin=0,this._oldValueMax=0,this._display_bottom=0,this._display_top=0,this.modes=[],this.presets=[],this.security_state={},this.power_infos={},this.error=[],this.render=()=>{var t,e,i,n,o,s,r,a,l,c,h,u,d,p,m,v,_,f,g,y;return U`
    <ha-card class=${gt({[this.mode]:!0})}
    >
    ${(null===(t=this._config)||void 0===t?void 0:t.disable_menu)?"":U`
      <ha-icon-button
        class="more-info"
        .label=${this.hass.localize("ui.panel.lovelace.cards.show_more_info")}
        .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
        @click=${this._handleMoreInfo}
        tabindex="0"
      ></ha-icon-button>
      `}

      ${this.name.length>0?U`
        <div class="name">${this.name}</div>
        `:""}

      ${null!==this.security_state?U`
        <div class="security">
          <ha-icon-button class="alert" .path=${At}>
          </ha-icon-button>
          ${U`
            ${this.security_state.map((t=>U`<span>${t.name}: ${t.security_msg}</span>`))}
           `}
        </div>
      `:""}
      ${this.error.length>0?U`
        <div class="error">
          <ha-icon-button class="alert" .path=${"M3.27,1.44L2,2.72L4.05,4.77C2.75,5.37 1.5,6.11 0.38,7C4.2,11.8 8.14,16.67 12,21.5L15.91,16.63L19.23,19.95L20.5,18.68C14.87,13.04 3.27,1.44 3.27,1.44M12,3C10.6,3 9.21,3.17 7.86,3.5L9.56,5.19C10.37,5.07 11.18,5 12,5C15.07,5 18.09,5.86 20.71,7.45L16.76,12.38L18.18,13.8C20.08,11.43 22,9 23.65,7C20.32,4.41 16.22,3 12,3M5.57,6.29L14.5,15.21L12,18.3L3.27,7.44C4,7 4.78,6.61 5.57,6.29Z"}>
          </ha-icon-button>
          <span>${this.error}</span>
        </div>
      `:""}

      ${null!=this.value.low&&null!=this.value.high&&this.stateObj.state!==Yo?U`
        <vt-ha-control-circular-slider
          class="${(null===(i=null===(e=null==this?void 0:this.stateObj)||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.saved_temperature)&&null!==(null===(o=null===(n=null==this?void 0:this.stateObj)||void 0===n?void 0:n.attributes)||void 0===o?void 0:o.saved_temperature)?"eco":""} ${null!==this.security_state||this.error.length>0?"security_msg":""} ${this.window?"window_open":""}  ${this.overpowering?"overpowering":""} ${this.presence?"presence":""} ${this.motion?"motion":""}  ${this.windowByPass?"windowByPass":""} "
          .inactive=${this.window}
          dual
          .low=${this.value.low}
          .high=${this.value.high}
          .min=${this.min}
          .max=${this.max}
          .step=${this.step}
          .current=${this.current}
          @low-changed=${this._highChanged}
          @low-changing=${this._highChanging}
          @high-changed=${this._highChanged}
          @high-changing=${this._highChanging}
        >
        `:U`
        <vt-ha-control-circular-slider
          class="${(null===(r=null===(s=null==this?void 0:this.stateObj)||void 0===s?void 0:s.attributes)||void 0===r?void 0:r.saved_temperature)&&null!==(null===(l=null===(a=null==this?void 0:this.stateObj)||void 0===a?void 0:a.attributes)||void 0===l?void 0:l.saved_temperature)?"eco":""} ${null!==this.security_state||this.error.length>0?"security_msg":""} ${this.window?"window_open":""}  ${this.overpowering?"overpowering":""} ${this.presence?"presence":""} ${this.motion?"motion":""}  ${this.windowByPass?"windowByPass":""} "
          .inactive=${this.window}
          .mode="start"
          @value-changed=${this._highChanged}
          @value-changing=${this._highChanging}
          .value=${this.value.value}
          .current=${this.current}
          step=${this.step}
          min=${this.min}
          max=${this.max}
        >
        `}
      <div class="content ${0==this.name.length?"noname":""} ${null!==this.security_state||this.error.length>0?"security_msg":""} ${this.window?"window_open":""}  ${(null===(h=null===(c=null==this?void 0:this.stateObj)||void 0===c?void 0:c.attributes)||void 0===h?void 0:h.saved_temperature)&&null!==(null===(d=null===(u=null==this?void 0:this.stateObj)||void 0===u?void 0:u.attributes)||void 0===d?void 0:d.saved_temperature)?"eco":""} ${this.overpowering?"overpowering":""} ${this.presence?"presence":""} ${this.motion?"motion":""}  ${this.windowByPass?"windowByPass":""} " >
        <svg id="main" viewbox="0 0 125 100">
          <g transform="translate(57.5,37) scale(0.35)">
            ${this._hasWindow&&!(null===(p=this._config)||void 0===p?void 0:p.disable_window)?B`
              <path title="${ai({hass:this.hass,string:"extra_states.window_open"})}" class="window ${this.window?"active":""}" fill="none" transform="${this._hasWindow&&!(null===(m=this._config)||void 0===m?void 0:m.disable_window)?"translate(-50.25,0)":""}" id="window" d=${kt} />
            `:""}
            ${this._hasOverpowering&&!(null===(v=this._config)||void 0===v?void 0:v.disable_overpowering)?B`
              <path class="overpowering ${this.overpowering?"active":""}" fill="none" transform="${this._hasOverpowering&&!(null===(_=this._config)||void 0===_?void 0:_.disable_overpowering)?"translate(-25.25,0)":""}" id="overpowering" d=${bt} />
            `:""}
            ${this._hasPresence?B`
              <path class="presence ${this.presence?"active":""}" fill="none" transform="${this._hasPresence?"translate(0.25,0)":""}" id="overpowering" d=${wt} />
            `:""}
            ${this._hasWindowByPass?B`
              <path class="windowByPass ${this.windowByPass?"active":""}" fill="none" transform="${this._hasWindowByPass?"translate(25.25,0)":""}" id="window-by-pass" d=${Lt} />
            `:""}
            ${this._hasMotion?B`
              <path class="motion ${this.motion?"active":""}" fill="none" transform="${this._hasMotion?"translate(50.25,0)":""}" id="motion" d=${xt} />
            `:""}
          </g>

          <text class="main-value" x="62.5" y="60%" dominant-baseline="middle" text-anchor="middle" style="font-size:15px;">
            ${B`${fi(this._display_top,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})}`}
            <tspan dx="-2" dy="-5.5" style="font-size: 5px;">
              ${B`
                ${this.hass.config.unit_system.temperature}
              `}
            </tspan>
          </text>
          ${(null===(f=null==this?void 0:this.stateObj)||void 0===f?void 0:f.state)===Yo||"unknown"===(null===(g=null==this?void 0:this.stateObj)||void 0===g?void 0:g.state)?B`
          <text x="62.5" y="63%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">${this.hass.localize("state.default.unavailable")}</text>
          `:""}
          <line x1="35" y1="72" x2="90" y2="72" stroke="#e7e7e8" stroke-width="0.5" />
          <g class="current-info" transform="translate(62.5,80)">
            ${0===this.humidity?B`
                <text x="-5%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
                ${B`${fi(this._display_bottom,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})}`}
                <tspan dx="-1" dy="-2" style="font-size: 3px;">
                  ${B`
                    ${this.hass.config.unit_system.temperature}
                  `}
                </tspan>
              </text>
              ${this._renderHVACAction()}
            `:B`
              <text x="-12.25%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
                ${B`${fi(this._display_bottom,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})}`}
                <tspan dx="-0.3" dy="-2" style="font-size: 3px;">
                  ${B`
                    ${this.hass.config.unit_system.temperature}
                  `}
                </tspan>
              </text>
              <text x="12.25%" y="0%" dominant-baseline="middle" text-anchor="middle" style="font-size:6px;">
                ${B`${fi(this.humidity,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})}`}
                <tspan dx="-0.3" dy="-2" style="font-size: 3px;">
                %
                </tspan>
              </text>
              ${this._renderHVACAction()}
            `}
          </g>
        </svg>
        </div>
      </vt-ha-control-circular-slider>
      <div id="modes">
        ${B`
          ${this.modes.map((t=>{var e,i,n,o,s,r,a;return(null===(e=this._config)||void 0===e?void 0:e.disable_heat)&&"heat"===t||(null===(i=this._config)||void 0===i?void 0:i.disable_auto)&&"auto"===t||(null===(n=this._config)||void 0===n?void 0:n.disable_cool)&&"cool"===t||(null===(o=this._config)||void 0===o?void 0:o.disable_heat_cool)&&"heat_cool"===t||(null===(s=this._config)||void 0===s?void 0:s.disable_dry)&&"dry"===t||(null===(r=this._config)||void 0===r?void 0:r.disable_fan_only)&&"fan_only"===t||(null===(a=this._config)||void 0===a?void 0:a.disable_off)&&"off"===t?U``:this._renderIcon(t,this.mode)}))}
        `}
      </div>
      ${(null===(y=null==this?void 0:this._config)||void 0===y?void 0:y.disable_buttons)?U``:U`
        <div id="vt-control-buttons">
            <div class="button">
              <vt-ha-outlined-icon-button 
                .target=${this.target}
                .step=${this.step}
                @click=${this._handleButton}
              >
                <ha-svg-icon .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}></ha-svg-icon>
              </vt-ha-outlined-icon-button>
            </div>
            <div class="button">
              <vt-ha-outlined-icon-button
                .target=${this.target}
                .step=${-this.step}
                @click=${this._handleButton}
              >
                <ha-svg-icon .path=${"M19,13H5V11H19V13Z"}></ha-svg-icon>
              </vt-ha-outlined-icon-button>
            </div>
        </div>
      `}
      
      <div id="presets">
        ${B`
          ${this.presets.map((t=>this._renderPreset(t,this.preset)))}
        `}
      </div>

      <div id="power-infos">
      ${B`
        ${this.power_infos.map((t=>this._renderPowerInfo(t)))}
      `}
    </div>
      

    </ha-card>
  `}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static async getConfigElement(){return await Promise.resolve().then((function(){return rs})),document.createElement("versatile-thermostat-ui-card-editor")}static async getStubConfig(t){const e=Object.keys(t.states).filter((t=>["climate"].includes(t.split(".")[0]))),i=e.filter((e=>{var i;return null===(i=t.states[e].attributes)||void 0===i?void 0:i.call_for_heat}));return{type:"custom:versatile-thermostat-ui-card",entity:i[0]||e[0]}}_highChanged(t){const e=t.detail.value;if(isNaN(e))return;const i=t.type.replace("-changed","");this.value=Object.assign(Object.assign({},this.value),{[i]:e}),this._selectTargetTemperature=i,this._callService(i)}_highChanging(t){const e=t.detail.value;if(isNaN(e))return;const i=t.type.replace("-changing","");this.value=Object.assign(Object.assign({},this.value),{[i]:e}),this._selectTargetTemperature=i,this._updateDisplay(),this._vibrate(20)}_callService(t){"high"!==t&&"low"!==t?this.hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,temperature:this.value.value}):this.hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,target_temp_low:this.value.low,target_temp_high:this.value.high})}_handleButton(t){var e;const i=t.currentTarget.target,n=t.currentTarget.step,o="high"===i?this.max:this.min;let s=null!==(e=this.value[i])&&void 0!==e?e:o;s+=n,s=_i(s,this.min,this.max),"high"===i&&null!=this.value.low&&(s=_i(s,this.value.low,this.max)),"low"===i&&null!=this.value.high&&(s=_i(s,this.min,this.value.high)),this.value=Object.assign(Object.assign({},this.value),{[i]:s}),this._updateDisplay(),this._vibrate(40),this._debouncedCallService(i)}_handleSelectTemp(t){const e=t.currentTarget.target;this._selectTargetTemperature=e,this._updateDisplay(),this._vibrate(40)}setConfig(t){this._config=Object.assign({tap_action:{action:"toggle"},hold_action:{action:"more-info"}},t)}getCardSize(){return 1}_vibrate(t){try{navigator.vibrate(t)}catch(t){}}firstUpdated(t){this._init=!1}shouldUpdate(t){return void 0!==t.has("_config")&&void 0!==t.get("_config")&&(this._hasOverpowering=!1,this._hasWindow=!1,this._hasWindowByPass=!1,this._hasMotion=!1,this._hasPresence=!1,this.humidity=0),void 0!==t.get("hass")&&(this._init=!1),!0}updated(t){var e,i;super.updated(t),this._firstRender=!1,null===(i=null===(e=null==this?void 0:this.shadowRoot)||void 0===e?void 0:e.querySelector(".security"))||void 0===i||i.addEventListener("click",(()=>{var t,e,i,n;null===(e=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.querySelector(".security"))||void 0===e||e.remove(),null===(n=null===(i=null==this?void 0:this.shadowRoot)||void 0===i?void 0:i.querySelector(".content"))||void 0===n||n.classList.remove("security_msg"),this._vibrate(2)}))}willUpdate(t){var e,i;if(!this.hass||!this._config||!t.has("hass")&&!t.has("_config"))return;const n=this._config.entity,o=this.hass.states[n];if(!o)return;const s=t.get("hass");if(!s||s.states[n]!==o){if(!this._config||!this.hass||!this._config.entity)return;this.stateObj=o;const t=this.stateObj.attributes,n=this.stateObj.state;if(this.name="",this._config.disable_name||(this.name=this._config.name?this._config.name:t.friendly_name),this.mode=n||"off",t.hvac_modes&&(this.modes=Object.values(t.hvac_modes)),t.preset_modes&&(this.presets=Object.values(t.preset_modes.filter((t=>"none"!=t)))),this.preset=t.preset_mode,this.value={value:(null==t?void 0:t.temperature)||0,low:(null==t?void 0:t.target_temp_low)||null,high:(null==t?void 0:t.target_temp_high)||null},t.target_temperature_step&&(this.step=t.target_temperature_step),t.min_temp&&(this.min=t.min_temp),t.max_temp&&(this.max=t.max_temp),t.current_temperature&&(this.current=t.current_temperature),void 0!==(null==t?void 0:t.humidity)&&(this.humidity=parseFloat(t.humidity)),"on"===(null==t?void 0:t.window_state)||"on"===(null==t?void 0:t.window_auto_state)?(this._hasWindow=!0,this.window=!0):(this._hasWindow=!1,this.window=!1),(null==t?void 0:t.overpowering_state)?(this._hasOverpowering=!0,this.overpowering=t.overpowering_state):(this._hasOverpowering=!1,this.overpowering=!1),"on"===(null==t?void 0:t.presence_state)?(this._hasPresence=!0,this.presence=t.presence_state):(this._hasPresence=!1,this.presence=!1),"on"===(null==t?void 0:t.motion_state)?(this._hasMotion=!0,this.motion=t.motion_state):(this._hasMotion=!1,this.motion=!1),(null==t?void 0:t.window_bypass_state)?(this._hasWindowByPass=!0,this.windowByPass=t.window_bypass_state):(this._hasWindowByPass=!1,this.windowByPass=!1),(null==t?void 0:t.security_state)&&!(null===(e=null==this?void 0:this._config)||void 0===e?void 0:e.disable_security_warning)){if(this.security_state=[],t.last_temperature_datetime){let e=Jo(new Date(t.last_temperature_datetime));e>0&&this.security_state.push({name:"Internal temp.",security_msg:e+" min"})}if(t.last_ext_emperature_datetime){let e=Jo(new Date(t.last_ext_temperature_datetime));e>0&&this.security_state.push({name:"External temp.",security_msg:e+" min"})}}else this.security_state=null;if(this.is_device_active=!0===(null==t?void 0:t.is_device_active),void 0!==(null==t?void 0:t.errors)){const e=JSON.parse(t.errors);e.length>0?this.error=e[0]:this.error=[]}else this.error=[];this.power_infos=[],!(null===(i=null==this?void 0:this._config)||void 0===i?void 0:i.disable_power_infos)&&(null==t?void 0:t.is_on)&&((null==t?void 0:t.is_over_switch)&&((null==t?void 0:t.mean_cycle_power)&&this.power_infos.push({name:"mean_power_cycle",value:Go(null==t?void 0:t.mean_cycle_power,1),unit:(null==t?void 0:t.mean_cycle_power)<20?"kW":"W",class:"vt-power-color"}),this.power_infos.push({name:"power_percent",value:null==t?void 0:t.power_percent,unit:"%",class:"vt-power-color"})),(null==t?void 0:t.is_over_valve)&&this.power_infos.push({name:"valve_open_percent",value:null==t?void 0:t.valve_open_percent,unit:"%",class:"vt-power-color"}),(null==t?void 0:t.is_over_climate)&&((null==t?void 0:t.device_power)&&this.power_infos.push({name:"mean_power_cycle",value:null==t?void 0:t.device_power,unit:(null==t?void 0:t.device_power)<20?"kW":"W",class:"vt-power-color"}),(null==t?void 0:t.is_regulated)&&(this.power_infos.push({name:"regulated_target_temperature",value:null==t?void 0:t.regulated_target_temperature,unit:null==t?void 0:t.temperature_unit,class:"vt-temp-color"}),this.power_infos.push({name:"auto_regulation_mode",value:ai({hass:this.hass,string:`extra_states.${null==t?void 0:t.auto_regulation_mode}`}),unit:"",class:"vt-label-color"})))),this._updateDisplay()}}_updateDisplay(){var t;(null===(t=null==this?void 0:this._config)||void 0===t?void 0:t.set_current_as_main)?(this._display_bottom=this._getCurrentSetpoint(),this._display_top=this.current):(this._display_bottom=this.current,this._display_top=this._getCurrentSetpoint())}_handleAction(t){this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:t.currentTarget.mode})}_handlePreset(t){this.hass.callService("climate","set_preset_mode",{entity_id:this._config.entity,preset_mode:t.currentTarget.preset})}_handleClickInfo(t){this.hass.callService("versatile_thermostat","set_device_power",{entity_id:this._config.entity,preset_mode:t.currentTarget.preset})}_setTemperature(){this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:this.value})}_getCurrentSetpoint(){var t,e,i,n,o,s,r,a;return null!==(null===(t=null==this?void 0:this.value)||void 0===t?void 0:t.high)&&null!==(null===(e=null==this?void 0:this.value)||void 0===e?void 0:e.low)?((null===(i=null==this?void 0:this.value)||void 0===i?void 0:i.low)||0)>=this.current?(null===(n=null==this?void 0:this.value)||void 0===n?void 0:n.low)||0:((null===(o=null==this?void 0:this.value)||void 0===o?void 0:o.high)||0)<=this.current?(null===(s=null==this?void 0:this.value)||void 0===s?void 0:s.high)||0:(null===(r=null==this?void 0:this.value)||void 0===r?void 0:r.low)||0:(null===(a=null==this?void 0:this.value)||void 0===a?void 0:a.value)||0}_renderHVACAction(){return"heating"===this.stateObj.attributes.hvac_action||"heat"==this.stateObj.attributes.hvac_mode||"heat_cool"==this.stateObj.attributes.hvac_mode?B`<path class="status ${this.is_device_active?"active":""}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${"M8.5 4.5L5.4 9.5L8.5 14.7L5.2 20.5L3.4 19.6L6.1 14.7L3 9.5L6.7 3.6L8.5 4.5M14.7 4.4L11.6 9.5L14.7 14.5L11.4 20.3L9.6 19.4L12.3 14.5L9.2 9.5L12.9 3.5L14.7 4.4M21 4.4L17.9 9.5L21 14.5L17.7 20.3L15.9 19.4L18.6 14.5L15.5 9.5L19.2 3.5L21 4.4"}" />`:"cooling"===this.stateObj.attributes.hvac_action||"cool"==this.stateObj.attributes.hvac_mode?B`<path class="status cooler ${this.is_device_active?"active":""}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${yt}" />`:B`<path class="status" transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" />`}_renderIcon(t,e){if(!Xo[t])return U``;const i=this.hass.localize(`component.climate.state._.${t}`)||ai({hass:this.hass,string:`extra_states.${t}`});return U`
      <ha-icon-button
        title="${e===t?t:""}"
        class=${gt({"selected-icon":e===t})}
        .mode=${t}
        @click=${this._handleAction}
        tabindex="0"
        .path=${Xo[t]}
        .label=${i}
      >
      </ha-icon-button>
    `}_renderPreset(t,e){const i=this.hass.localize(`component.climate.state._.${t}`)||ai({hass:this.hass,string:`extra_states.${t}`});return U`
      <div class="preset-label">
          <ha-icon-button
            title="${e===t?t:""}"
            class=${gt({"selected-icon":e===t})}
            .preset=${t}
            @click=${this._handlePreset}
            tabindex="0"
            .path=${Xo[t]}
            .label=${i}
          >
        </ha-icon-button>
      </div>
    `}_renderPowerInfo(t){const e=this.hass.localize(`component.climate.state._.${t.name}`)||ai({hass:this.hass,string:`extra_states.${t.name}`});return U`
      <div class="power-info-label">
        <span>
          <ha-icon-button
            title="${e}"
            class=${t.class} 
            .name=${t.name}
            @click=${this._handleClickInfo}
            tabindex="0"
            .path=${Xo[t.name]}
            .label=${e}
          >
        </ha-icon-button>
        </span>
        <span>${t.value} ${t.unit}</span>
      </div>
    `}_handleMoreInfo(){vi(this,"hass-more-info",{entityId:this._config.entity})}};Qo.styles=r`
      :host {
          display: block;
          box-sizing: border-box;
          position: relative;
          container: vt-card / inline-size;
      }

      ha-card {
        overflow: hidden;
        height: 100%;
        width: 100%;
        vertical-align: middle;
        justify-content: center;
        justify-items: center;
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 1.5em;
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
      }

      vt-ha-outlined-icon-button {
        border: 1px solid var(--secondary-text-color);
        border-radius: 100%;
        padding: 0.5em;
        cursor: pointer;
      }

      .content.security_msg, vt-ha-control-circular-slider.security_msg {
        opacity: 0.5;
        filter: blur(5px);
        pointer-events: none;
      }
      

      .security, .error {
        position: absolute;
        display: flex;
        flex-flow: column;
        align-items: center;
        place-content: center;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        left: 0px;
        top: 0px;
        background: rgba(200, 200, 200, 0.16);
        border-radius: var(--ha-card-border-radius,12px);
        border-width: var(--ha-card-border-width,1px);
        border-style: solid;
        border-color: var(--ha-card-border-color,var(--divider-color,#e0e0e0));
        pointer-events: all;
        font-size: 22px;
        text-align: center;
        line-height: 40px;
        padding: 1em;
        --mdc-icon-size: 40px;

      }

      .unavailable {
          opacity: 0.3;
      }

      .unavailable #bar, .unavailable .main-value, .unavailable #value,.unavailable #current, .unavailable .current-info,
      .unknown #bar, .unknown .main-value, .unknown #value,.unknown #current, .unknown .current-info {
        display: none;
      }

      .more-info {
        position: absolute;
        cursor: pointer;
        top: 0px;
        right: 0px;
        inset-inline-end: 0px;
        inset-inline-start: initial;
        border-radius: 100%;
        color: var(--secondary-text-color);
        z-index: 1;
        direction: var(--direction);
    }
      .container {
          position: relative;
          width: 100%;
          height: 100%;
      }
      vt-ha-control-circular-slider {
        --primary-color: var(--mode-color);
      }

      .content {
        position: absolute;
        width: calc(70% - 40px);
        height: calc(70% - 100px);
        box-sizing: border-box;
        border-radius: 100%;
        left: 50%;
        top: calc(50% - 40px);
        text-align: center;
        overflow-wrap: break-word;
        pointer-events: none;
        display: flex;
        align-items: center;
        place-content: center;
        flex-flow: wrap;
        z-index: 0;
        transform: translate(-50%,-50%);
        max-width: 155px;
      }

      #main {
        transform: scale(2.3);
      }

      .name {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 20px;
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
      svg {
        height: auto;
        margin: auto;
        display: block;
        width: 100%;
        -webkit-backface-visibility: hidden;
        max-width: 233px;
      }
      
      path {
        stroke-linecap: round;
        stroke-width: 1;
      }

      text {
        fill: var(--primary-text-color);
      }
      .eco {
        --mode-color: var(--energy-non-fossil-color);
      }

      .overpowering {
        --mode-color: var(--label-badge-yellow)
      }

      .window_open {
        --mode-color: #80a7c4
      }

      .auto,
      .heat_cool {
        --mode-color: var(--state-climate-auto-color);
      }
      .cool {
        --mode-color: var(--label-badge-blue);
      }
      .heat, .heat_cool {
        --mode-color: var(--label-badge-red);
      }
      .manual {
        --mode-color: var(--state-climate-manual-color);
      }
      .off {
        --mode-color: var(--slider-track-color);
      }
      .fan_only {
        --mode-color: var(--state-climate-fan_only-color);
      }
      .dry {
        --mode-color: var(--state-climate-dry-color);
      }
      .idle {
        --mode-color: var(--state-climate-idle-color);
      }
      .unknown-mode {
        --mode-color: var(--state-unknown-color);
      }

      #modes {
        z-index: 3;
        position: relative;
        display: flex;
        width: auto;
        justify-content: center;
        margin-top: -3em;
        margin-bottom: 1em;
      }

      #presets {
        z-index: 3;
        position: relative;
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: -1em;
        margin-bottom: 1em;
      }

      #presets > * {
        color: var(--disabled-text-color);
      }
      #presets .selected-icon {
        color: var(--label-badge-yellow);
      }

      .preset-label {
        cursor: pointer;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        padding-top: 0px;
        padding-bottom: 0px;
        padding-left: 5px;
        padding-right: 5px;
        outline: 0px;
        height: 48px;
        color: var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));
        margin-left: 5px;
        margin-right: 5px;
      }

      #power-infos {
        z-index: 3;
        position: absolute;
        display: block;
        width: auto;
        justify-content: center;
        padding-bottom: 0.2em;
        left: 0%;
        top: 30%;
      }

      #power-infos > * {
        color: var(--enabled-text-color);
      }

      .power-info-label {
        -webkit-tap-highlight-color: transparent;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        padding: 0px 0px;
        height: 30px;
      }

      #vt-control-buttons {
        z-index: 3;
        position: absolute;
        display: block;
        width: auto;
        justify-content: center;
        padding-bottom: 0.2em;
        left: 90%;
        top: 35%;
      }

      #vt-control-buttons .button {
        z-index: 3;
        position: relative;
        display: flex;
        width: auto;
        justify-content: center;
        margin-bottom: 15px;
        margin-left: -5px;
      }

      #modes > * {
        color: var(--disabled-text-color);
        cursor: pointer;
        display: inline-block;
      }
      #modes .selected-icon {
        color: var(--mode-color);
      }

      #shadowpath {
        stroke: #e7e7e8;
      }

      #value {
        fill: var(--mode-color);
        r: 5;
        z-index: 9999 !important;
        transition: r 0.3s ease-in-out, fill 0.6s ease-in-out;
      }

      #value,#current {
        filter: drop-shadow(0px 0px 1px #000);
      }

      #value:hover, #value:active, #value:focus, #value.active {
        r: 8 !important;
      }

      #current {
        pointer-events: none;
        fill: var(--label-badge-grey);
      }
      
      .status {
        transition: fill 0.6s ease-in-out, filter 0.6s ease-in-out;
        filter: none;
      }
      .status.active {
        fill: var(--error-color);
        filter: drop-shadow(0px 0px 6px var(--error-color));
      }

      .status.cooler.active {
        fill: #03A9F4;
        filter: drop-shadow(0px 0px 6px #03A9F4);
      }

      #bar {
        stroke: var(--mode-color);
        stroke-dasharray: 176;
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 5.1s ease-in-out 0s, stroke 0.6s ease-in-out;
      }

      #bar.drag {
        transition: none !important;
      }
      #c-minus,#c-plus {
        cursor: pointer;
      }
      .control {
        cursor: pointer;
        pointer-events: none;
      }
      ha-icon-button {
        transition: color 0.6s ease-in-out;
      }
      .eco ha-icon-button[title="heat"], .window_open ha-icon-button[title="heat"], .overpowering ha-icon-button[title="heat"] {
        --mode-color: var(--disabled-text-color);
      }
      .window {
        transition: fill 0.3s ease;
        fill: var(--warning-color);
      }
      .overpowering {
        transition: fill 0.3s ease;
        fill: var(--error-color);
      }
      .presence {
        transition: fill 0.3s ease;
        fill: var(--success-color);
      }
      .motion {
        transition: fill 0.3s ease;
        fill: var(--info-color);
      }

      .windowByPass {
        transition: fill 0.3s ease;
        fill: var(--accent-color);
      }

      line {
        stroke: var(--disabled-text-color);
      }

      ha-icon-button[title="eco"] {
        --mode-color: var(--energy-non-fossil-color) !important;
      }
      @container vt-card (max-width: 280px) {
        .content {
          top: calc(50% - 10px);
        }
      }
      @container vt-card (max-width: 255px) {
        #modes {
          margin-top: -2em;
        }
        #presets {
          margin-top: -1em;
        }
        ha-card {
          padding-top: 2em;
        }
      }
  `,t([dt({attribute:!1})],Qo.prototype,"hass",void 0),t([dt({type:Number})],Qo.prototype,"value",void 0),t([pt()],Qo.prototype,"_selectTargetTemperature",void 0),t([dt({type:Number})],Qo.prototype,"current",void 0),t([dt({type:Number})],Qo.prototype,"humidity",void 0),t([dt({type:Number})],Qo.prototype,"min",void 0),t([dt({type:Number})],Qo.prototype,"max",void 0),t([dt({type:Number})],Qo.prototype,"step",void 0),t([dt({type:Boolean})],Qo.prototype,"window",void 0),t([dt({type:Boolean})],Qo.prototype,"windowByPass",void 0),t([dt({type:Boolean})],Qo.prototype,"presence",void 0),t([dt({type:Boolean})],Qo.prototype,"motion",void 0),t([dt({type:Boolean})],Qo.prototype,"overpowering",void 0),t([dt({type:Boolean})],Qo.prototype,"is_device_active",void 0),t([dt({type:String})],Qo.prototype,"status",void 0),t([dt({type:String})],Qo.prototype,"mode",void 0),t([dt({type:String})],Qo.prototype,"preset",void 0),t([dt({type:Boolean,reflect:!0})],Qo.prototype,"dragging",void 0),t([dt({type:String})],Qo.prototype,"name",void 0),t([pt()],Qo.prototype,"changingHigh",void 0),t([pt()],Qo.prototype,"_config",void 0),Qo=t([ct("versatile-thermostat-ui-card")],Qo);const ts=function(...t){const e="type"===t[0].type,i=t.map((t=>t.schema)),n=Object.assign({},...i);return e?Oi(n):Hi(n)}(Hi({index:Di(Mi()),view_index:Di(Mi()),view_layout:Ei("any",(()=>!0)),type:Pi()}),Hi({entity:Di(Pi()),name:Di(Pi()),icon:Di(Pi())}),Hi({disable_name:Di(Vi()),disable_window:Di(Vi()),disable_overpowering:Di(Vi()),disable_heat:Di(Vi()),disable_cool:Di(Vi()),disable_heat_cool:Di(Vi()),disable_auto:Di(Vi()),disable_dry:Di(Vi()),disable_fan_only:Di(Vi()),disable_off:Di(Vi()),disable_security_warning:Di(Vi()),disable_power_infos:Di(Vi()),set_current_as_main:Di(Vi()),eco_temperature:Di(Mi()),disable_menu:Di(Vi()),disable_buttons:Di(Vi())})),es=["icon_color","layout","fill_container","primary_info","secondary_info","icon_type","content_info","use_entity_picture","collapsible_controls","icon_animation"],is=t=>{var e,i;customElements.get("ha-form")&&(customElements.get("hui-action-editor")||((t,e,i,n)=>{const[o,s,r]=t.split(".",3);return Number(o)>e||Number(o)===e&&(void 0===n?Number(s)>=i:Number(s)>i)||void 0!==n&&Number(o)===e&&Number(s)===i&&Number(r)>=n})(t,2022,11))||null===(e=customElements.get("hui-button-card"))||void 0===e||e.getConfigElement(),customElements.get("ha-entity-picker")||null===(i=customElements.get("hui-entities-card"))||void 0===i||i.getConfigElement()},ns=["disable_name","disable_window","disable_overpowering","disable_heat","disable_cool","disable_heat_cool","disable_auto","disable_dry","disable_fan_only","disable_off","disable_menu","disable_security_warning","disable_buttons","set_current_as_main","disable_power_infos"],os=pi((()=>[{name:"entity",selector:{entity:{domain:["climate"]}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"disable_name",selector:{boolean:{}}},{name:"disable_window",selector:{boolean:{}}},{name:"disable_overpowering",selector:{boolean:{}}},{name:"disable_heat",selector:{boolean:{}}},{name:"disable_cool",selector:{boolean:{}}},{name:"disable_heat_cool",selector:{boolean:{}}},{name:"disable_auto",selector:{boolean:{}}},{name:"disable_dry",selector:{boolean:{}}},{name:"disable_fan_only",selector:{boolean:{}}},{name:"disable_off",selector:{boolean:{}}},{name:"disable_menu",selector:{boolean:{}}},{name:"disable_security_warning",selector:{boolean:{}}},{name:"disable_buttons",selector:{boolean:{}}},{name:"set_current_as_main",selector:{boolean:{}}},{name:"disable_power_infos",selector:{Boolean:{}}}]}]));let ss=class extends at{constructor(){super(...arguments),this._computeLabel=t=>{const e=(i=this.hass,function(t){var e;let n=li(t,null!==(e=null==i?void 0:i.locale.language)&&void 0!==e?e:ri);return n||(n=li(t,ri)),null!=n?n:t});var i;return es.includes(t.name)?e(`editor.card.generic.${t.name}`):ns.includes(t.name)?e(`editor.card.climate.${t.name}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}}connectedCallback(){super.connectedCallback(),is(this.hass.connection.haVersion)}setConfig(t){ki(t,ts),this._config=t}render(){if(!this.hass||!this._config)return U``;const t=os();return U`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${t}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `}_valueChanged(t){vi(this,"config-changed",{config:t.detail.value}),vi(this,"hass",{config:t.detail.value})}};t([pt()],ss.prototype,"_config",void 0),t([dt({attribute:!1})],ss.prototype,"hass",void 0),ss=t([ct("versatile-thermostat-ui-card-editor")],ss);var rs=Object.freeze({__proto__:null,get ClimateCardEditor(){return ss}});export{Qo as VersatileThermostatUi,Ko as registerCustomCard};
