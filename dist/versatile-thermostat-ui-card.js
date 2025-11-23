function t(t,e,i,o){var n,s=arguments.length,a=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new s(i,t,o)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,_=globalThis,m=_.trustedTypes,v=m?m.emptyScript:"",f=_.reactiveElementPolyfillSupport,g=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const s=o?.call(this);n.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of o){const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=o,this[o]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,o=!1,n){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(o?n:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[g("elementProperties")]=new Map,$[g("finalized")]=new Map,f?.({ReactiveElement:$}),(_.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,S=A.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,L="?"+k,E=`<${L}>`,M=document,T=()=>M.createComment(""),V=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,z="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,O=/>/g,N=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,j=/^(?:script|style|textarea|title)$/i,W=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),B=W(1),F=W(2),U=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),q=new WeakMap,Y=M.createTreeWalker(M,129);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",a=P;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===P?"!--"===l[1]?a=D:void 0!==l[1]?a=O:void 0!==l[2]?(j.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=N):void 0!==l[3]&&(a=N):a===N?">"===l[0]?(a=n??P,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?N:'"'===l[3]?R:I):a===R||a===I?a=N:a===D||a===O?a=P:(a=N,n=void 0);const h=a===N&&t[e+1].startsWith("/>")?" ":"";s+=a===P?i+E:c>=0?(o.push(r),i.slice(0,c)+x+i.slice(c)+k+h):i+k+(-2===c?e:h)}return[X(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class G{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const a=t.length-1,r=this.parts,[l,c]=K(t,e);if(this.el=G.createElement(l,i),Y.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=Y.nextNode())&&r.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(x)){const e=c[s++],i=o.getAttribute(t).split(k),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?it:"?"===a[1]?ot:"@"===a[1]?nt:et}),o.removeAttribute(t)}else t.startsWith(k)&&(r.push({type:6,index:n}),o.removeAttribute(t));if(j.test(o.tagName)){const t=o.textContent.split(k),e=t.length-1;if(e>0){o.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],T()),Y.nextNode(),r.push({type:2,index:++n});o.append(t[e],T())}}}else if(8===o.nodeType)if(o.data===L)r.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(k,t+1));)r.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,o){if(e===U)return e;let n=void 0!==o?i._$Co?.[o]:i._$Cl;const s=V(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=n:i._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,o)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??M).importNode(e,!0);Y.currentNode=o;let n=Y.nextNode(),s=0,a=0,r=i[0];for(;void 0!==r;){if(s===r.index){let e;2===r.type?e=new tt(n,n.nextSibling,this,t):1===r.type?e=new r.ctor(n,r.name,r.strings,this,t):6===r.type&&(e=new st(n,this,t)),this._$AV.push(e),r=i[++a]}s!==r?.index&&(n=Y.nextNode(),s++)}return Y.currentNode=M,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),V(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Z&&V(this._$AH)?this._$AA.nextSibling.data=t:this.$(M.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Q(o,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new G(t)),e}T(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new tt(this.k(T()),this.k(T()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=J(this,t,e,0),s=!V(t)||t!==this._$AH&&t!==U,s&&(this._$AH=t);else{const o=t;let a,r;for(t=n[0],a=0;a<n.length-1;a++)r=J(this,o[i+a],e,a),r===U&&(r=this._$AH[a]),s||=!V(r)||r!==this._$AH[a],r===Z?t=Z:t!==Z&&(t+=(r??"")+n[a+1]),this._$AH[a]=r}s&&!o&&this.O(t)}O(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===Z?void 0:t}}class ot extends et{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class nt extends et{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??Z)===U)return;const i=this._$AH,o=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==Z&&(i===Z||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const at=A.litHtmlPolyfillSupport;at?.(G,tt),(A.litHtmlVersions??=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class rt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=i?.renderBefore??null;o._$litPart$=n=new tt(e.insertBefore(T(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const lt=globalThis.litElementPolyfillSupport;lt?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.0.1");
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
 */,dt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},ht=(t=dt,e,i)=>{const{kind:o,metadata:n}=i;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];e.call(this,i),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+o)};function ut(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function pt(t){return ut({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function mt(t,e){return(i,o,n)=>{const s=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:a}="object"==typeof o?i:n??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return _t(i,o,{get(){if(e){let e=t.call(this);return void 0===e&&(e=s(this),a.call(this,e)),e}return s(this)}})}return _t(i,o,{get(){return s(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=1;class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ft{constructor(t){if(super(t),t.type!==vt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.it)t in e||(i.remove(t),this.it.delete(t));for(const t in e){const o=!!e[t];o===this.it.has(t)||this.st?.has(t)||(o?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return U}});var yt="M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z",bt="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",wt="M5,2V13H8V22L15,10H11L15,2M17,15H19V17H17V15M17,7H19V13H17V7Z",$t="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z",At="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z",St="M12 2C7.04 2 3 6.04 3 11C3 14.91 5.5 18.24 9 19.47V22H11V19.94C11.33 20 11.66 20 12 20S12.67 20 13 19.94V22H15V19.47C18.5 18.23 21 14.9 21 11C21 6.04 16.96 2 12 2M14.25 14L11.25 17L9.75 15.5L11 14.25L9.75 13L12.75 10L14.25 11.5L13 12.75L14.25 14M16 9H8V7H16V9Z",Ct="M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",xt="M18.73,18C15.4,21.69 9.71,22 6,18.64C2.33,15.31 2.04,9.62 5.37,5.93C6.9,4.25 9,3.2 11.27,3C7.96,6.7 8.27,12.39 12,15.71C13.63,17.19 15.78,18 18,18C18.25,18 18.5,18 18.73,18Z",kt="M17 13V7H19V13H17M17 17V15H19V17H17M13 13V5C13 3.3 11.7 2 10 2S7 3.3 7 5V13C4.8 14.7 4.3 17.8 6 20S10.8 22.7 13 21 15.7 16.2 14 14C13.7 13.6 13.4 13.3 13 13M10 4C10.6 4 11 4.4 11 5V8H9V5C9 4.4 9.4 4 10 4Z",Lt="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",Et="M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z",Mt="M2 4H20V8H18V20H16V8H6V20H4V8H2V4M7 9H15V11H7V9M7 12H15V14H7V12M20 19V17H22V19H20M20 15V10H22V15H20Z";var Tt={version:"version",current:"current"},Vt={card:{climate:{autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",disable_circle:"Disable circle",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon"}}},Ht={window_open:"Window open",window_bypass:"Bypass window activated",night_mode:"Night mode",eco:"Eco",overpowering:"Overpowering detected",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",change_message:"Double click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass"},zt={common:Tt,editor:Vt,extra_states:Ht},Pt=Object.freeze({__proto__:null,common:Tt,default:zt,editor:Vt,extra_states:Ht}),Dt={version:"Version",current:"Aktuell"},Ot={card:{climate:{autoStartStopEnableEntity:"Auto-Start/Stop-Entität",powerEntity:"Entität für den Stromverbrauch",disable_circle:"Kreis deaktivieren",disable_window:"Fenster deaktivieren",disable_autoStartStop:"Auto-Start/Stop deaktivieren",disable_overpowering:"Überverbrauch deaktivieren",disable_heat:"Heizen deaktivieren",disable_cool:"Kühlen deaktivieren",disable_heat_cool:"Heizen/Kühlen deaktivieren",disable_auto:"Auto deaktivieren",disable_fan_only:"Nur-Lüfter deaktivieren",disable_dry:"Entfeuchten deaktivieren",disable_off:"Aus deaktivieren",disable_menu:"Menü deaktivieren",set_current_as_main:"Zieltemperatur mit aktueller Temperatur tauschen",disable_safety_warning:"Sicherheitsmeldungen deaktivieren",disable_buttons:"Plus/Minus-Buttons deaktivieren",disable_power_infos:"Verbrauchsinformationen deaktivieren",disable_auto_fan_infos:"Auto-Lüfter-Informationen deaktivieren",disable_name:"Name deaktivieren",eco_temperature:"Eco-Temperatur"}}},Nt={window_open:"Fenster offen",window_bypass:"Fenster-Bypass aktiviert",night_mode:"Nachtmodus",eco:"Eco",overpowering:"Überverbrauch erkannt",none:"Manuell",comfort:"Komfort",boost:"Boost",frost:"Frostschutz",power:"Lastabwurf",activity:"Aktivität erkannt",presence:"Anwesenheit erkannt",motion:"Bewegung erkannt",auto_regulation_light:"Leicht",auto_regulation_medium:"Mittel",auto_regulation_strong:"Stark",auto_regulation_slow:"Langsam",auto_regulation_expert:"Experte",auto_fan_mode:"Auto-Lüfter",auto_fan_mode_off:"Keine",auto_fan_none:"Keine",auto_fan_low:"Niedrig",auto_fan_medium:"Mittel",auto_fan_high:"Hoch",auto_fan_turbo:"Turbo",fan_low:"Niedrig",fan_low_mid:"Niedrig-mittel",fan_mid:"Mittel",fan_mid_high:"Mittel-hoch",fan_high:"Hoch",fan_mute:"Leise",fan_turbo:"Turbo",fan_none:"Keine",fan_auto:"Auto",change_message:"Doppelklick zum Ändern des Presets",toggle_message:"Klicken zum Umschalten",auto_start_stop:"Gestoppt durch Auto-Start/Stop",auto_start_stop_enable:"Aktiviert/deaktiviert Auto-Start/Stop",auto_start_stop_label:"Auto-Start/Stop",temp_unavailable:"-",sleep:"Schlafmodus"},It={common:Dt,editor:Ot,extra_states:Nt},Rt=Object.freeze({__proto__:null,common:Dt,default:It,editor:Ot,extra_states:Nt}),jt={version:"version",current:"Actuelle"},Wt={card:{climate:{autoStartStopEnableEntity:"Entité - auto-start/stop",powerEntity:"Entité - puissance consommée",disable_circle:"Désactiver le cercle",disable_window:"Désactiver fenêtre status",disable_autoStartStop:"Désactiver auto-startStop",disable_overpowering:"Désactiver sur-puissance status",disable_heat:"Désactiver mode chauffe",disable_cool:"Désactiver mode clim",disable_heat_cool:"Désactiver mode chauffe/clim",disable_auto:"Désactiver mode auto",disable_fan_only:"Désactiver mode ventilation",disable_dry:"Désactiver mode déshumidification",disable_off:"Désactiver mode arret",disable_sleep:"Désactiver mode endormi",set_current_as_main:"Echanger temperature cible avec temperature locale",disable_safety_warning:"Désactiver sécurité messages",disable_buttons:"Désactiver les boutons +/-",disable_power_infos:"Désactiver les infos de puissance",disable_auto_fan_infos:"Désactiver les infos auto-ventilation",disable_name:"Désactiver le nom",disable_target_icon:"Désactiver l'icône cible"}}},Bt={window_open:"Fenêtre ouverte",window_bypass:"Bypass fenêtre activé",eco:"Eco",overpowering:"Sur-puissance détectée",none:"Manuel",comfort:"Confort",boost:"Boost",frost:"Hors-gel",power:"Délestage",activity:"Activité",presence:"Présence détectée",motion:"Mouvement détecté",auto_regulation_light:"Légère",auto_regulation_medium:"Moyenne",auto_regulation_strong:"Forte",auto_regulation_slow:"Lente",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"Aucun",auto_fan_none:"Aucun",auto_fan_low:"Bas",auto_fan_medium:"Moyen",auto_fan_high:"Haut",auto_fan_turbo:"Turbo",fan_low:"Bas",fan_low_mid:"Bas-moyen",fan_mid:"Moyen",fan_mid_high:"Moyen-haut",fan_high:"Haut",fan_mute:"Silence",fan_turbo:"Turbo",fan_none:"Aucun",fan_auto:"Auto",change_message:"Double clic pour changer le preset",toggle_message:"Clic pour basculer",auto_start_stop:"Stoppé par auto-start/stop",auto_start_stop_enable:"Active/désactive l'auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Endormi","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Temp. pièce",outdoor_temp:"Temp. ext.",safety_warning:"Attention",safety_warning_msg:"défaut de temp.",hvac_off_manual:"Eteint manuellement",hvac_off_auto_start_stop:"Eteint par auto-start/stop",hvac_off_window_detection:"Eteint par détection d'ouverture",hvac_off_sleep_mode:"Eteint par le mode endormi",hvac_off_safety_detection:"Eteint par le mode sécurité",hvac_off_central_mode:"Eteint par le mode central",safety_detected:"Mode sécurité détectée",overpowering_detected:"Sur-puissance détectée",target_temp_window_eco:"Temp. cible : fenêtre éco",target_temp_window_frost:"Temp. cible : fenêtre hors-gel",target_temp_power:"Temp. cible : délestage",target_temp_central_mode:"Temp. cible : mode central",target_temp_activity_detected:"Temp. cible : activité détectée",target_temp_activity_not_detected:"Temp. cible : activité non détectée",target_temp_absence_detected:"Temp. cible : absence détectée","messages-button":"Pourquoi cet état ?",recalculation_scheduled:"Sous-jacent en cours de mise à jour","window-bypass-button":"Basculer le bypass fenêtre"},Ft={common:jt,editor:Wt,extra_states:Bt},Ut=Object.freeze({__proto__:null,common:jt,default:Ft,editor:Wt,extra_states:Bt}),Zt={version:"Версия",current:"Текущая"},qt={card:{climate:{autoStartStopEnableEntity:"Сущность автоматического старта/стопа",powerEntity:"Сущность потребления энергии",disable_circle:"Отключить круг",disable_window:"Отключить окно",disable_autoStartStop:"Отключить автоматический старт/стоп",disable_overpowering:"Отключить перегрузку",disable_heat:"Отключить обогрев",disable_cool:"Отключить охлаждение",disable_heat_cool:"Отключить обогрев/охлаждение",disable_auto:"Отключить авто",disable_fan_only:"Отключить только вентилятор",disable_dry:"Отключить осушение",disable_off:"Отключить режим выключения",disable_sleep:"Отключить спящий режим",disable_menu:"Отключить меню",set_current_as_main:"Поменять местами целевую и текущую температуру",disable_safety_warning:"Отключить сообщения безопасности",disable_buttons:"Отключить кнопки плюс/минус",disable_power_infos:"Отключить информацию о питании",disable_auto_fan_infos:"Отключить информацию автовентилятора",disable_name:"Отключить название",disable_target_icon:"Отключить иконку цели"}}},Yt={window_open:"Окно открыто",window_bypass:"Обход окна активирован",night_mode:"Ночной режим",eco:"Эко",overpowering:"Обнаружена перегрузка",none:"Ручной",comfort:"Комфорт",boost:"Турбо",frost:"Защита от замерзания",power:"Перегрузка",activity:"Обнаружена активность",presence:"Обнаружено присутствие",motion:"Обнаружено движение",undefined:"Нет",auto_regulation_light:"Легкий",auto_regulation_medium:"Средний",auto_regulation_strong:"Сильный",auto_regulation_slow:"Медленный",auto_regulation_expert:"Экспертный",auto_fan_mode:"Авторежим вентилятора",auto_fan_mode_off:"Нет",auto_fan_none:"Нет",auto_fan_low:"Низкий",auto_fan_medium:"Средний",auto_fan_high:"Высокий",auto_fan_boost:"Турбо",fan_low:"Низкий",fan_low_mid:"Низкий-средний",fan_mid:"Средний",fan_mid_high:"Средний-высокий",fan_high:"Высокий",fan_mute:"Тихий",fan_turbo:"Турбо",fan_none:"Нет",fan_auto:"Авто",change_message:"Двойной клик для смены предустановки",toggle_message:"Клик для переключения",auto_start_stop:"Остановлено авто-старт/стопом",auto_start_stop_enable:"Включить/отключить авто-старт/стоп",auto_start_stop_label:"Авто-старт/стоп",temp_unavailable:"-",sleep:"Сон",minutes:"мин",room_temp:"Температура в помещении",outdoor_temp:"Уличная температура"},Xt={common:Zt,editor:qt,extra_states:Yt},Kt=Object.freeze({__proto__:null,common:Zt,default:Xt,editor:qt,extra_states:Yt}),Gt={version:"wersja",current:"aktualna"},Jt={card:{climate:{autoStartStopEnableEntity:"Encja autoSTART/autoSTOP",powerEntity:"Encja poboru mocy",disable_circle:"Wyłącz koło",disable_window:"Wyłącz okno",disable_autoStartStop:"Wyłącz autoSTART/autoSTOP",disable_overpowering:"Wyłącz przeciążenie",disable_heat:"Wyłącz tryb grzania",disable_cool:"Wyłącz tryb chłodzenia",disable_heat_cool:"Wyłącz tryb 'grzanie/chłodzenie'",disable_auto:"Wyłącz tryb automatyczny",disable_fan_only:"Wyłącz tryb wentylatora",disable_dry:"Wyłącz tryb osuszania",disable_off:"Wyłącz tryb 'OFF'",disable_sleep:"Wyłącz tryb uśpienia",disable_menu:"Wyłącz menu",set_current_as_main:"Zamień temperaturę docelową z temperaturą pomieszczenia",disable_safety_warning:"Wyłącz ostrzeżenie bezpieczeństwa",disable_buttons:"Wyłącz przyciski +/- (plus/minus)",disable_power_infos:"Wyłącz komunikaty mocowe",disable_auto_fan_infos:"Wyłącz komunikaty autowentylacji",disable_name:"Wyłącz nazwę",disable_target_icon:"Wyłącz ikonę"}}},Qt={window_open:"Otwarte okno",window_bypass:"Załączone pomijanie okien",night_mode:"Tryb nocny",eco:"Tryb Eko",overpowering:"Wykryte przeciążenie",none:"Ręczny",comfort:"Komfort",boost:"Boost",frost:"Ochrona przed mrozem",power:"Przeciążenie",activity:"Wykryto aktywność",presence:"Wykryto obecność",motion:"Wykryto ruch",undefined:"Brak",auto_regulation_light:"Słaby",auto_regulation_medium:"Średni",auto_regulation_strong:"Silny",auto_regulation_slow:"Powolny",auto_regulation_expert:"Ekspert",auto_fan_mode:"Autowentylacja",auto_fan_mode_off:"Wyłączony",auto_fan_none:"Brak",auto_fan_low:"Niski",auto_fan_medium:"Średni",auto_fan_high:"Wysoki",auto_fan_boost:"Boost",fan_low:"Niski",fan_low_mid:"Niskośredni",fan_mid:"Średni",fan_mid_high:"Średniowysoki",fan_high:"Wysoki",fan_mute:"Cicho",fan_turbo:"Turbo",fan_none:"Brak",fan_auto:"Auto",change_message:"Kliknij dwokrotnie aby zmienić preset",toggle_message:"Kliknij aby przełączyć",auto_start_stop:"Zatrzymany przez autoSTART/autoSTOP",auto_start_stop_enable:"Załącz/wyłącz autoSTART/autoSTOP",auto_start_stop_label:"AutoSTART/autoSTOP",temp_unavailable:"-",sleep:"Uśpienie","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Temp. pomieszczenia",outdoor_temp:"Temp. zewnętrzna",safety_warning:"Ostrzeżenie",safety_warning_msg:"Błąd temperatury",hvac_off_manual:"Wyłączony ręcznie",hvac_off_auto_start_stop:"Wyłączony przez autoSTART/autoSTOP",hvac_off_window_detection:"Wyłączony prze otwarcie okna",hvac_off_sleep_mode:"Wyłączony przez tryb uśpienia",hvac_off_safety_detection:"Wyłączony przez tryb bezpieczny",hvac_off_central_mode:"Wyłączony przez tryb główny",safety_detected:"Wykryty tryb bezpieczny",overpowering_detected:"Wykryte przeciążenie",target_temp_window_eco:"Docelowa temp.: Eko okno",target_temp_window_frost:"Docelowa temp.: ochr. przed mrozem okno",target_temp_power:"Docelowa temp.: moc",target_temp_central_mode:"Docelowa temp.: tryb główny",target_temp_activity_detected:"Docelowa temp.: wykryta aktywność",target_temp_activity_not_detected:"Docelowa temp.: brak aktywnści",target_temp_absence_detected:"Docelowa temp.: wykryta nieobecność","messages-button":"Dlaczego taki stan?",recalculation_scheduled:"Aktualizacja urządzeń w toku","window-bypass-button":"Przełącz pomijanie okna"},te={common:Gt,editor:Jt,extra_states:Qt},ee=Object.freeze({__proto__:null,common:Gt,default:te,editor:Jt,extra_states:Qt}),ie={version:"verzia",current:"aktuálny"},oe={card:{climate:{disable_window:"Zakázať okno",disable_overpowering:"Zakázať leto",disable_heat:"Zakázať kúrenie",disable_cool:"Zakázať chladenie",disable_heat_cool:"Zakázať kúrenie/chladenie",disable_auto:"Zakázat automatic",disable_fan_only:"Zakázať režim ventilátora",disable_dry:"Zakázať sušenie",disable_off:"Vypnúť",disable_menu:"Zakázať menu",disable_safety_warning:"Zakázať bezpečnostné správy",disable_buttons:"Zakázať plus/mínus tlačidlá",eco_temperature:"Eco teplota",set_current_as_main:"Vymeňte cieľ za miesta s aktuálnou teplotou"}}},ne={window_open:"Okno otvorené",night_mode:"Nočný mód",eco:"Eco",overpowering:"Leto"},se={common:ie,editor:oe,extra_states:ne},ae={version:"Verzió",current:"Aktuális"},re={card:{climate:{disable_window:"Ablak kikapcsolás",disable_overpowering:"Nyár kikapcsolás",disable_heat:"Fűtés kikacsolás",disable_cool:"Hűtés kikapcsolás",disable_heat_cool:"Fűtés/Hűtés kikapcsolás",disable_auto:"Auto kikapcsolás",disable_fan_only:"Csak ventillátor kikapcsolás",disable_dry:"Szárítás kikapcsolás",disable_off:"Kikapcsolás inaktiválás",eco_temperature:"Eco hőmérséklet",set_current_as_main:"Aktuális hőmérséklet használata"}}},le={window_open:"Ablak nyitva",night_mode:"Éjszakai mód",eco:"Eco",overpowering:"Nyár"},ce={common:ae,editor:re,extra_states:le},de={version:"version",current:"nuværende"},he={window_open:"Vindue åben",night_mode:"Nattilstand",eco:"Eco",overpowering:"Overpowering"},ue={common:de,extra_states:he},pe={version:"version",current:"Actual"},_e={window_open:"Ventana abierta",night_mode:"Modo noche",eco:"Eco",overpowering:"Verano"},me={common:pe,extra_states:_e},ve={version:"versiyon",current:"şimdiki"},fe={window_open:"Pencere açık",night_mode:"Gece modu",eco:"Eco",overpowering:"Yaz"},ge={common:ve,extra_states:fe},ye={version:"versione",current:"attuale"},be={card:{climate:{autoStartStopEnableEntity:"Entità di avvio/arresto automatico",powerEntity:"Entità di consumo energetico",disable_circle:"Disattivare cerchio",disable_window:"Disattivare la finestra",disable_autoStartStop:"Disattivare Avvio/Arresto automatico",disable_overpowering:"Disattivare la sovralimentazione",disable_heat:"Disabilita Riscalda",disable_cool:"Disabilita Raffresca",disable_heat_cool:"Disabilita Riscalda/Raffredda",disable_auto:"Disabilita Automatico",disable_fan_only:"Disabilita Ventilazione",disable_dry:"Disabilita Deumidifica",disable_off:"Disabilita off",disable_sleep:"Disabilita modo riposo",disable_menu:"Disabilita menu",set_current_as_main:"Scambia Setpoint con Temperatura ambiente",disable_safety_warning:"Disabilita i messaggi di sicurezza",disable_buttons:"Disabilita pulsanti Più/Meno",disable_power_infos:"Disabilita Info Potenza",disable_auto_fan_infos:"Disabilita Info auto-fan",disable_name:"Disabilita nome",disable_target_icon:"Disabilita  icona obbiettivo"}}},we={window_open:"Finestra aperta",window_bypass:"Bypass finestra Attivo",night_mode:"Modalità notte",eco:"Eco",overpowering:"Rilevata Sovrapotenza",none:"Manuale",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Sovrapotenza",activity:"Rilevata Attività",presence:"Rilevata Presenza",motion:"Rilevato motimento",undefined:"Nulla",auto_regulation_light:"Leggero",auto_regulation_medium:"Medio",auto_regulation_strong:"Forte",auto_regulation_slow:"Lento",auto_regulation_expert:"Esperto",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"Nulla",auto_fan_none:"Nulla",auto_fan_low:"Basso",auto_fan_medium:"Medio",auto_fan_high:"Alto",auto_fan_boost:"Boost",fan_low:"Basso",fan_low_mid:"Medio-basso",fan_mid:"Medio",fan_mid_high:"Medio-alto",fan_high:"Alto",fan_mute:"Silenzioso",fan_turbo:"Turbo",fan_none:"Nulla",fan_auto:"Auto",change_message:"Doppio click per cambio preimpostazione",toggle_message:"Click per commutare",auto_start_stop:"Fermato da auto-start/stop",auto_start_stop_enable:"Abilita/disabilita auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Riposo"},$e={common:ye,editor:be,extra_states:we},Ae={version:"versão",current:"actual"},Se={card:{climate:{disable_window:"Desactivar Janela",disable_overpowering:"Desactivar Verão",disable_heat:"Desactivar Aquecimento",disable_cool:"Desactivar Arrefecimento",disable_heat_cool:"Desactivar Aquecimento/Arrefecimento",disable_auto:"Desactivar Auto",disable_fan_only:"Desactivar Ventilação",disable_dry:"Desactivar Secagem",disable_off:"Desactivar Off",eco_temperature:"Modo Eco",set_current_as_main:"Mudar para a temperatura local actual"}}},Ce={window_open:"Janela Aberta",night_mode:"Modo Noturno",eco:"Eco",overpowering:"Verão"},xe={common:Ae,editor:Se,extra_states:Ce},ke={version:"版本",current:"当前"},Le={window_open:"窗户打开",night_mode:"夜间模式",eco:"节能",overpowering:"夏季"},Ee={common:ke,extra_states:Le},Me={version:"версія",current:"поточний"},Te={window_open:"Вікно відчинено",night_mode:"Нічний режим",eco:"Економія",overpowering:"Літо"},Ve={common:Me,extra_states:Te},He={version:"έκδοση",current:"τρέχουσα"},ze={window_open:"Παράθυρο ανοικτό",night_mode:"Λειτουργία νυκτός",eco:"Εξοικονόμηση",overpowering:"Καλοκαίρι"},Pe={common:He,extra_states:ze},De={version:"versie",current:"huidig"},Oe={window_open:"Raam open",night_mode:"Nacht modus",eco:"Eco",overpowering:"Zomer"},Ne={common:De,extra_states:Oe},Ie={version:"versjon",current:"nåværende"},Re={window_open:"Vindu åpent",night_mode:"Nattmodus",eco:"Eco",overpowering:"Sommer"},je={common:Ie,extra_states:Re},We={version:"verze",current:"aktuální"},Be={card:{climate:{disable_window:"Zakázat okno",disable_overpowering:"Zakázat léto",disable_heat:"Zakázat topení",disable_cool:"Zakázat chlazení",disable_heat_cool:"Zakázat topení/chlazení",disable_auto:"Zakázať automatic",disable_fan_only:"Zakázat pouze ventilátor",disable_dry:"Zakázat sušení",disable_off:"Zakázat vypnuto",disable_menu:"Zakázat menu",disable_safety_warning:"Zakázat bezpečnostní oznámení",disable_buttons:"Zakázat tlačítka plus/minus",eco_temperature:"Eco teplota",set_current_as_main:"Prohodit místa cílovoé a aktáalní teploty"}}},Fe={window_open:"okno otevřeno",night_mode:"Noční režim",eco:"Eco",overpowering:"Léto"},Ue={common:We,editor:Be,extra_states:Fe},Ze={version:"različica",current:"trenutno"},qe={window_open:"Okno odprto",night_mode:"Nočni način",eco:"Eko",overpowering:"Poletje"},Ye={common:Ze,extra_states:qe},Xe={version:"version",current:"Nuvarande"},Ke={window_open:"Fönster öppet",night_mode:"Nattläge",eco:"Eco",overpowering:"Sommar"},Ge={common:Xe,extra_states:Ke},Je={version:"версия",currrent:"текущий"},Qe={window_open:"Отворен прозорец",night_mode:"Нощен режим",eco:"Екологичен режим",overpowering:"Лято"},ti={common:Je,extra_states:Qe},ei={version:"version",current:"Nykyinen"},ii={window_open:"Ikkuna auki",night_mode:"Yötila",eco:"Eco",overpowering:"Kesä"},oi={common:ei,extra_states:ii},ni={version:"versiune",current:"curent"},si={window_open:"Fereastră deschisă",night_mode:"Mod noapte",eco:"Eco",overpowering:"Vară"},ai={common:ni,extra_states:si},ri={version:"versió",current:"Actual"},li={window_open:"Finestra oberta",night_mode:"Mode nocturn",eco:"Eco",overpowering:"Estiu"},ci={common:ri,extra_states:li};const di={en:Pt,de:Rt,fr:Ut,ru:Kt,sk:Object.freeze({__proto__:null,common:ie,default:se,editor:oe,extra_states:ne}),hu:Object.freeze({__proto__:null,common:ae,default:ce,editor:re,extra_states:le}),pl:ee,da:Object.freeze({__proto__:null,common:de,default:ue,extra_states:he}),es:Object.freeze({__proto__:null,common:pe,default:me,extra_states:_e}),tr:Object.freeze({__proto__:null,common:ve,default:ge,extra_states:fe}),it:Object.freeze({__proto__:null,common:ye,default:$e,editor:be,extra_states:we}),pt:Object.freeze({__proto__:null,common:Ae,default:xe,editor:Se,extra_states:Ce}),cn:Object.freeze({__proto__:null,common:ke,default:Ee,extra_states:Le}),uk:Object.freeze({__proto__:null,common:Me,default:Ve,extra_states:Te}),el:Object.freeze({__proto__:null,common:He,default:Pe,extra_states:ze}),nl:Object.freeze({__proto__:null,common:De,default:Ne,extra_states:Oe}),no:Object.freeze({__proto__:null,common:Ie,default:je,extra_states:Re}),cs:Object.freeze({__proto__:null,common:We,default:Ue,editor:Be,extra_states:Fe}),sl:Object.freeze({__proto__:null,common:Ze,default:Ye,extra_states:qe}),sv:Object.freeze({__proto__:null,common:Xe,default:Ge,extra_states:Ke}),bg:Object.freeze({__proto__:null,common:Je,default:ti,extra_states:Qe}),fi:Object.freeze({__proto__:null,common:ei,default:oi,extra_states:ii}),ro:Object.freeze({__proto__:null,common:ni,default:ai,extra_states:si}),ca:Object.freeze({__proto__:null,common:ri,default:ci,extra_states:li})},hi="en";function ui({hass:t,string:e,search:i="",replace:o=""}){var n;const s=null!==(n=null==t?void 0:t.locale.language)&&void 0!==n?n:hi;let a;try{a=e.split(".").reduce(((t,e)=>t[e]),di[s])}catch(t){a=e.split(".").reduce(((t,e)=>t[e]),di.en)}return void 0===a&&(a=e.split(".").reduce(((t,e)=>t[e]),di.en)),""!==i&&""!==o&&(a=a.replace(i,o)),a}function pi(t,e){try{return t.split(".").reduce(((t,e)=>t[e]),di[e])}catch(t){return}}var _i,mi,vi=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function fi(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(o=t[i],n=e[i],!(o===n||vi(o)&&vi(n)))return!1;var o,n;return!0}function gi(t,e){void 0===e&&(e=fi);var i=null;function o(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];if(i&&i.lastThis===this&&e(o,i.lastArgs))return i.lastResult;var s=t.apply(this,o);return i={lastResult:s,lastArgs:o,lastThis:this},s}return o.clear=function(){i=null},o}gi((t=>new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric"}))),gi((t=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"}))),gi((t=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric"}))),gi((t=>new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short"}))),gi((t=>new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric"}))),gi((t=>new Intl.DateTimeFormat(t.language,{month:"long"}))),gi((t=>new Intl.DateTimeFormat(t.language,{year:"numeric"}))),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(_i||(_i={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(mi||(mi={}));const yi=gi((t=>{if(t.time_format===mi.language||t.time_format===mi.system){const e=t.time_format===mi.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===mi.am_pm}));gi((t=>new Intl.DateTimeFormat("en"!==t.language||yi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:yi(t)?"numeric":"2-digit",minute:"2-digit",hour12:yi(t)}))),gi((t=>new Intl.DateTimeFormat("en"!==t.language||yi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:yi(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:yi(t)}))),gi((t=>new Intl.DateTimeFormat("en"!==t.language||yi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:yi(t)}))),gi((t=>new Intl.DateTimeFormat("en"!==t.language||yi(t)?t.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:yi(t)}))),gi((t=>new Intl.DateTimeFormat("en"!==t.language||yi(t)?t.language:"en-u-hc-h23",{hour:yi(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:yi(t)}))),gi((t=>new Intl.DateTimeFormat("en"!==t.language||yi(t)?t.language:"en-u-hc-h23",{weekday:"long",hour:yi(t)?"numeric":"2-digit",minute:"2-digit",hour12:yi(t)})));const bi=(t,e,i,o)=>{o=o||{},i=null==i?{}:i;const n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n},wi=(t,e,i)=>Math.min(Math.max(t,e),i),$i=(t,e,i)=>{const o=e?(t=>{switch(t.number_format){case _i.comma_decimal:return["en-US","en"];case _i.decimal_comma:return["de","es","it"];case _i.space_comma:return["fr","sv","cs"];case _i.system:return;default:return t.language}})(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==_i.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(o,Ai(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,Ai(t,i)).format(Number(t))}return"string"==typeof t?t:`${((t,e=2)=>Math.round(t*10**e)/10**e)(t,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`},Ai=(t,e)=>{const i=Object.assign({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){const e=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=e,i.maximumFractionDigits=e}return i};class Si extends TypeError{constructor(t,e){let i;const{message:o,explanation:n,...s}=t,{path:a}=t,r=0===a.length?o:`At path: ${a.join(".")} -- ${o}`;super(n??r),null!=n&&(this.cause=r),Object.assign(this,s),this.name=this.constructor.name,this.failures=()=>i??(i=[t,...e()])}}function Ci(t){return"object"==typeof t&&null!=t}function xi(t){return"symbol"==typeof t?t.toString():"string"==typeof t?JSON.stringify(t):`${t}`}function ki(t,e,i,o){if(!0===t)return;!1===t?t={}:"string"==typeof t&&(t={message:t});const{path:n,branch:s}=e,{type:a}=i,{refinement:r,message:l=`Expected a value of type \`${a}\`${r?` with refinement \`${r}\``:""}, but received: \`${xi(o)}\``}=t;return{value:o,type:a,refinement:r,key:n[n.length-1],path:n,branch:s,...t,message:l}}function*Li(t,e,i,o){(function(t){return Ci(t)&&"function"==typeof t[Symbol.iterator]})(t)||(t=[t]);for(const n of t){const t=ki(n,e,i,o);t&&(yield t)}}function*Ei(t,e,i={}){const{path:o=[],branch:n=[t],coerce:s=!1,mask:a=!1}=i,r={path:o,branch:n};if(s&&(t=e.coercer(t,r),a&&"type"!==e.type&&Ci(e.schema)&&Ci(t)&&!Array.isArray(t)))for(const i in t)void 0===e.schema[i]&&delete t[i];let l="valid";for(const o of e.validator(t,r))o.explanation=i.message,l="not_valid",yield[o,void 0];for(let[c,d,h]of e.entries(t,r)){const e=Ei(d,h,{path:void 0===c?o:[...o,c],branch:void 0===c?n:[...n,d],coerce:s,mask:a,message:i.message});for(const i of e)i[0]?(l=null!=i[0].refinement?"not_refined":"not_valid",yield[i[0],void 0]):s&&(d=i[1],void 0===c?t=d:t instanceof Map?t.set(c,d):t instanceof Set?t.add(d):Ci(t)&&(void 0!==d||c in t)&&(t[c]=d))}if("not_valid"!==l)for(const o of e.refiner(t,r))o.explanation=i.message,l="not_refined",yield[o,void 0];"valid"===l&&(yield[void 0,t])}class Mi{constructor(t){const{type:e,schema:i,validator:o,refiner:n,coercer:s=(t=>t),entries:a=function*(){}}=t;this.type=e,this.schema=i,this.entries=a,this.coercer=s,this.validator=o?(t,e)=>Li(o(t,e),e,this,t):()=>[],this.refiner=n?(t,e)=>Li(n(t,e),e,this,t):()=>[]}assert(t,e){return Ti(t,this,e)}create(t,e){return function(t,e,i){const o=Vi(t,e,{coerce:!0,message:i});if(o[0])throw o[0];return o[1]}(t,this,e)}is(t){return function(t,e){const i=Vi(t,e);return!i[0]}(t,this)}mask(t,e){return function(t,e,i){const o=Vi(t,e,{coerce:!0,mask:!0,message:i});if(o[0])throw o[0];return o[1]}(t,this,e)}validate(t,e={}){return Vi(t,this,e)}}function Ti(t,e,i){const o=Vi(t,e,{message:i});if(o[0])throw o[0]}function Vi(t,e,i={}){const o=Ei(t,e,i),n=function(t){const{done:e,value:i}=t.next();return e?void 0:i}(o);if(n[0]){const t=new Si(n[0],(function*(){for(const t of o)t[0]&&(yield t[0])}));return[t,void 0]}return[void 0,n[1]]}function Hi(t,e){return new Mi({type:t,schema:null,validator:e})}function zi(t){return new Mi({type:"array",schema:t,*entries(e){if(t&&Array.isArray(e))for(const[i,o]of e.entries())yield[i,o,t]},coercer:t=>Array.isArray(t)?t.slice():t,validator:t=>Array.isArray(t)||`Expected an array value, but received: ${xi(t)}`})}function Pi(){return Hi("boolean",(t=>"boolean"==typeof t))}function Di(t){const e=xi(t),i=typeof t;return new Mi({type:"literal",schema:"string"===i||"number"===i||"boolean"===i?t:null,validator:i=>i===t||`Expected the literal \`${e}\`, but received: ${xi(i)}`})}function Oi(){return Hi("number",(t=>"number"==typeof t&&!isNaN(t)||`Expected a number, but received: ${xi(t)}`))}function Ni(t){const e=t?Object.keys(t):[],i=Hi("never",(()=>!1));return new Mi({type:"object",schema:t||null,*entries(o){if(t&&Ci(o)){const n=new Set(Object.keys(o));for(const i of e)n.delete(i),yield[i,o[i],t[i]];for(const t of n)yield[t,o[t],i]}},validator:t=>Ci(t)||`Expected an object, but received: ${xi(t)}`,coercer:t=>Ci(t)?{...t}:t})}function Ii(t){return new Mi({...t,validator:(e,i)=>void 0===e||t.validator(e,i),refiner:(e,i)=>void 0===e||t.refiner(e,i)})}function Ri(){return Hi("string",(t=>"string"==typeof t||`Expected a string, but received: ${xi(t)}`))}function ji(t){const e=Object.keys(t);return new Mi({type:"type",schema:t,*entries(i){if(Ci(i))for(const o of e)yield[o,i[o],t[o]]},validator:t=>Ci(t)||`Expected an object, but received: ${xi(t)}`,coercer:t=>Ci(t)?{...t}:t})}function Wi(t){const e=t.map((t=>t.type)).join(" | ");return new Mi({type:"union",schema:null,coercer(e){for(const i of t){const[t,o]=i.validate(e,{coerce:!0});if(!t)return o}return e},validator(i,o){const n=[];for(const e of t){const[...t]=Ei(i,e,o),[s]=t;if(!s[0])return[];for(const[e]of t)e&&n.push(e)}return[`Expected the value to satisfy a union of \`${e}\`, but received: ${xi(i)}`,...n]}})}const Bi=Ni({user:Ri()}),Fi=Wi([Pi(),Ni({text:Ii(Ri()),excemptions:Ii(zi(Bi))})]),Ui=Ni({action:Di("url"),url_path:Ri(),confirmation:Ii(Fi)}),Zi=Ni({action:Di("call-service"),service:Ri(),service_data:Ii(Ni()),data:Ii(Ni()),target:Ii(Ni({entity_id:Ii(Wi([Ri(),zi(Ri())])),device_id:Ii(Wi([Ri(),zi(Ri())])),area_id:Ii(Wi([Ri(),zi(Ri())]))})),confirmation:Ii(Fi)}),qi=Ni({action:Di("navigate"),navigation_path:Ri(),confirmation:Ii(Fi)}),Yi=ji({action:Di("fire-dom-event")}),Xi=Ni({action:function(t){const e={},i=t.map((t=>xi(t))).join();for(const i of t)e[i]=i;return new Mi({type:"enums",schema:e,validator:e=>t.includes(e)||`Expected one of \`${i}\`, but received: ${xi(e)}`})}(["none","toggle","more-info","call-service","url","navigate"]),confirmation:Ii(Fi)});var Ki;Ki=t=>{if(t&&"object"==typeof t&&"action"in t)switch(t.action){case"call-service":return Zi;case"fire-dom-event":return Yi;case"navigate":return qi;case"url":return Ui}return Xi},new Mi({type:"dynamic",schema:null,*entries(t,e){const i=Ki(t,e);yield*i.entries(t,e)},validator:(t,e)=>Ki(t,e).validator(t,e),coercer:(t,e)=>Ki(t,e).coercer(t,e),refiner:(t,e)=>Ki(t,e).refiner(t,e)}),a`
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
`;const Gi=([[t,e],[i,o]],[n,s])=>[t*n+e*s,i*n+o*s],Ji=([t,e],[i,o])=>[t+i,e+o],Qi=t=>t/180*Math.PI,to=t=>{const{x:e,y:i,r:o,start:n,end:s,rotate:a=0}=t,r=e,l=i,c=o,d=o,h=Qi(n),u=(Qi(s)-h)%(2*Math.PI),p=Qi(a),_=(t=>[[Math.cos(t),-Math.sin(t)],[Math.sin(t),Math.cos(t)]])(p),[m,v]=Ji(Gi(_,[c*Math.cos(h),d*Math.sin(h)]),[r,l]),[f,g]=Ji(Gi(_,[c*Math.cos(h+u),d*Math.sin(h+u)]),[r,l]),y=u>Math.PI?1:0,b=u>0?1:0;return["M",m,v,"A",c,d,p/(2*Math.PI)*360,y,b,f,g].join(" ")};function eo(){return eo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},eo.apply(this,arguments)}function io(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function oo(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var no,so="function"!=typeof Object.assign?function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(null!=o)for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n])}return e}:Object.assign,ao=["","webkit","Moz","MS","ms","o"],ro="undefined"==typeof document?{style:{}}:document.createElement("div"),lo=Math.round,co=Math.abs,ho=Date.now;function uo(t,e){for(var i,o,n=e[0].toUpperCase()+e.slice(1),s=0;s<ao.length;){if((o=(i=ao[s])?i+n:e)in t)return o;s++}}no="undefined"==typeof window?{}:window;var po=uo(ro.style,"touchAction"),_o=void 0!==po;var mo="compute",vo="auto",fo="manipulation",go="none",yo="pan-x",bo="pan-y",wo=function(){if(!_o)return!1;var t={},e=no.CSS&&no.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){return t[i]=!e||no.CSS.supports("touch-action",i)})),t}(),$o="ontouchstart"in no,Ao=void 0!==uo(no,"PointerEvent"),So=$o&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),Co="touch",xo="mouse",ko=25,Lo=1,Eo=4,Mo=8,To=1,Vo=2,Ho=4,zo=8,Po=16,Do=Vo|Ho,Oo=zo|Po,No=Do|Oo,Io=["x","y"],Ro=["clientX","clientY"];function jo(t,e,i){var o;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!==t.length)for(o=0;o<t.length;)e.call(i,t[o],o,t),o++;else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)}function Wo(t,e){return"function"==typeof t?t.apply(e&&e[0]||void 0,e):t}function Bo(t,e){return t.indexOf(e)>-1}var Fo=function(){function t(t,e){this.manager=t,this.set(e)}var e=t.prototype;return e.set=function(t){t===mo&&(t=this.compute()),_o&&this.manager.element.style&&wo[t]&&(this.manager.element.style[po]=t),this.actions=t.toLowerCase().trim()},e.update=function(){this.set(this.manager.options.touchAction)},e.compute=function(){var t=[];return jo(this.manager.recognizers,(function(e){Wo(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(Bo(t,go))return go;var e=Bo(t,yo),i=Bo(t,bo);return e&&i?go:e||i?e?yo:bo:Bo(t,fo)?fo:vo}(t.join(" "))},e.preventDefaults=function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var o=this.actions,n=Bo(o,go)&&!wo[go],s=Bo(o,bo)&&!wo[bo],a=Bo(o,yo)&&!wo[yo];if(n){var r=1===t.pointers.length,l=t.distance<2,c=t.deltaTime<250;if(r&&l&&c)return}if(!a||!s)return n||s&&i&Do||a&&i&Oo?this.preventSrc(e):void 0}},e.preventSrc=function(t){this.manager.session.prevented=!0,t.preventDefault()},t}();function Uo(t,e){for(;t;){if(t===e)return!0;t=t.parentNode}return!1}function Zo(t){var e=t.length;if(1===e)return{x:lo(t[0].clientX),y:lo(t[0].clientY)};for(var i=0,o=0,n=0;n<e;)i+=t[n].clientX,o+=t[n].clientY,n++;return{x:lo(i/e),y:lo(o/e)}}function qo(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:lo(t.pointers[i].clientX),clientY:lo(t.pointers[i].clientY)},i++;return{timeStamp:ho(),pointers:e,center:Zo(e),deltaX:t.deltaX,deltaY:t.deltaY}}function Yo(t,e,i){i||(i=Io);var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return Math.sqrt(o*o+n*n)}function Xo(t,e,i){i||(i=Io);var o=e[i[0]]-t[i[0]],n=e[i[1]]-t[i[1]];return 180*Math.atan2(n,o)/Math.PI}function Ko(t,e){return t===e?To:co(t)>=co(e)?t<0?Vo:Ho:e<0?zo:Po}function Go(t,e,i){return{x:e/t||0,y:i/t||0}}function Jo(t,e){var i=t.session,o=e.pointers,n=o.length;i.firstInput||(i.firstInput=qo(e)),n>1&&!i.firstMultiple?i.firstMultiple=qo(e):1===n&&(i.firstMultiple=!1);var s=i.firstInput,a=i.firstMultiple,r=a?a.center:s.center,l=e.center=Zo(o);e.timeStamp=ho(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=Xo(r,l),e.distance=Yo(r,l),function(t,e){var i=e.center,o=t.offsetDelta||{},n=t.prevDelta||{},s=t.prevInput||{};e.eventType!==Lo&&s.eventType!==Eo||(n=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},o=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=n.x+(i.x-o.x),e.deltaY=n.y+(i.y-o.y)}(i,e),e.offsetDirection=Ko(e.deltaX,e.deltaY);var c,d,h=Go(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=co(h.x)>co(h.y)?h.x:h.y,e.scale=a?(c=a.pointers,Yo((d=o)[0],d[1],Ro)/Yo(c[0],c[1],Ro)):1,e.rotation=a?function(t,e){return Xo(e[1],e[0],Ro)+Xo(t[1],t[0],Ro)}(a.pointers,o):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,o,n,s,a=t.lastInterval||e,r=e.timeStamp-a.timeStamp;if(e.eventType!==Mo&&(r>ko||void 0===a.velocity)){var l=e.deltaX-a.deltaX,c=e.deltaY-a.deltaY,d=Go(r,l,c);o=d.x,n=d.y,i=co(d.x)>co(d.y)?d.x:d.y,s=Ko(l,c),t.lastInterval=e}else i=a.velocity,o=a.velocityX,n=a.velocityY,s=a.direction;e.velocity=i,e.velocityX=o,e.velocityY=n,e.direction=s}(i,e);var u,p=t.element,_=e.srcEvent;Uo(u=_.composedPath?_.composedPath()[0]:_.path?_.path[0]:_.target,p)&&(p=u),e.target=p}function Qo(t,e,i){var o=i.pointers.length,n=i.changedPointers.length,s=e&Lo&&o-n==0,a=e&(Eo|Mo)&&o-n==0;i.isFirst=!!s,i.isFinal=!!a,s&&(t.session={}),i.eventType=e,Jo(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function tn(t){return t.trim().split(/\s+/g)}function en(t,e,i){jo(tn(e),(function(e){t.addEventListener(e,i,!1)}))}function on(t,e,i){jo(tn(e),(function(e){t.removeEventListener(e,i,!1)}))}function nn(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||window}var sn=function(){function t(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){Wo(t.options.enable,[t])&&i.handler(e)},this.init()}var e=t.prototype;return e.handler=function(){},e.init=function(){this.evEl&&en(this.element,this.evEl,this.domHandler),this.evTarget&&en(this.target,this.evTarget,this.domHandler),this.evWin&&en(nn(this.element),this.evWin,this.domHandler)},e.destroy=function(){this.evEl&&on(this.element,this.evEl,this.domHandler),this.evTarget&&on(this.target,this.evTarget,this.domHandler),this.evWin&&on(nn(this.element),this.evWin,this.domHandler)},t}();function an(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var o=0;o<t.length;){if(i&&t[o][i]==e||!i&&t[o]===e)return o;o++}return-1}var rn={pointerdown:Lo,pointermove:2,pointerup:Eo,pointercancel:Mo,pointerout:Mo},ln={2:Co,3:"pen",4:xo,5:"kinect"},cn="pointerdown",dn="pointermove pointerup pointercancel";no.MSPointerEvent&&!no.PointerEvent&&(cn="MSPointerDown",dn="MSPointerMove MSPointerUp MSPointerCancel");var hn=function(t){function e(){var i,o=e.prototype;return o.evEl=cn,o.evWin=dn,(i=t.apply(this,arguments)||this).store=i.manager.session.pointerEvents=[],i}return io(e,t),e.prototype.handler=function(t){var e=this.store,i=!1,o=t.type.toLowerCase().replace("ms",""),n=rn[o],s=ln[t.pointerType]||t.pointerType,a=s===Co,r=an(e,t.pointerId,"pointerId");n&Lo&&(0===t.button||a)?r<0&&(e.push(t),r=e.length-1):n&(Eo|Mo)&&(i=!0),r<0||(e[r]=t,this.callback(this.manager,n,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(r,1))},e}(sn);function un(t){return Array.prototype.slice.call(t,0)}function pn(t,e,i){for(var o=[],n=[],s=0;s<t.length;){var a=e?t[s][e]:t[s];an(n,a)<0&&o.push(t[s]),n[s]=a,s++}return i&&(o=e?o.sort((function(t,i){return t[e]>i[e]})):o.sort()),o}var _n={touchstart:Lo,touchmove:2,touchend:Eo,touchcancel:Mo},mn=function(t){function e(){var i;return e.prototype.evTarget="touchstart touchmove touchend touchcancel",(i=t.apply(this,arguments)||this).targetIds={},i}return io(e,t),e.prototype.handler=function(t){var e=_n[t.type],i=vn.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:Co,srcEvent:t})},e}(sn);function vn(t,e){var i,o,n=un(t.touches),s=this.targetIds;if(e&(2|Lo)&&1===n.length)return s[n[0].identifier]=!0,[n,n];var a=un(t.changedTouches),r=[],l=this.target;if(o=n.filter((function(t){return Uo(t.target,l)})),e===Lo)for(i=0;i<o.length;)s[o[i].identifier]=!0,i++;for(i=0;i<a.length;)s[a[i].identifier]&&r.push(a[i]),e&(Eo|Mo)&&delete s[a[i].identifier],i++;return r.length?[pn(o.concat(r),"identifier",!0),r]:void 0}var fn={mousedown:Lo,mousemove:2,mouseup:Eo},gn=function(t){function e(){var i,o=e.prototype;return o.evEl="mousedown",o.evWin="mousemove mouseup",(i=t.apply(this,arguments)||this).pressed=!1,i}return io(e,t),e.prototype.handler=function(t){var e=fn[t.type];e&Lo&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=Eo),this.pressed&&(e&Eo&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:xo,srcEvent:t}))},e}(sn),yn=2500;function bn(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY},o=this.lastTouches;this.lastTouches.push(i);setTimeout((function(){var t=o.indexOf(i);t>-1&&o.splice(t,1)}),yn)}}function wn(t,e){t&Lo?(this.primaryTouch=e.changedPointers[0].identifier,bn.call(this,e)):t&(Eo|Mo)&&bn.call(this,e)}function $n(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,o=0;o<this.lastTouches.length;o++){var n=this.lastTouches[o],s=Math.abs(e-n.x),a=Math.abs(i-n.y);if(s<=25&&a<=25)return!0}return!1}var An=function(){return function(t){function e(e,i){var o;return(o=t.call(this,e,i)||this).handler=function(t,e,i){var n=i.pointerType===Co,s=i.pointerType===xo;if(!(s&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)wn.call(oo(oo(o)),e,i);else if(s&&$n.call(oo(oo(o)),i))return;o.callback(t,e,i)}},o.touch=new mn(o.manager,o.handler),o.mouse=new gn(o.manager,o.handler),o.primaryTouch=null,o.lastTouches=[],o}return io(e,t),e.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},e}(sn)}();function Sn(t,e,i){return!!Array.isArray(t)&&(jo(t,i[e],i),!0)}var Cn=32,xn=1;function kn(t,e){var i=e.manager;return i?i.get(t):t}function Ln(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}var En=function(){function t(t){void 0===t&&(t={}),this.options=eo({enable:!0},t),this.id=xn++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var e=t.prototype;return e.set=function(t){return so(this.options,t),this.manager&&this.manager.touchAction.update(),this},e.recognizeWith=function(t){if(Sn(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=kn(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},e.dropRecognizeWith=function(t){return Sn(t,"dropRecognizeWith",this)||(t=kn(t,this),delete this.simultaneous[t.id]),this},e.requireFailure=function(t){if(Sn(t,"requireFailure",this))return this;var e=this.requireFail;return-1===an(e,t=kn(t,this))&&(e.push(t),t.requireFailure(this)),this},e.dropRequireFailure=function(t){if(Sn(t,"dropRequireFailure",this))return this;t=kn(t,this);var e=an(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},e.hasRequireFailures=function(){return this.requireFail.length>0},e.canRecognizeWith=function(t){return!!this.simultaneous[t.id]},e.emit=function(t){var e=this,i=this.state;function o(i){e.manager.emit(i,t)}i<8&&o(e.options.event+Ln(i)),o(e.options.event),t.additionalEvent&&o(t.additionalEvent),i>=8&&o(e.options.event+Ln(i))},e.tryEmit=function(t){if(this.canEmit())return this.emit(t);this.state=Cn},e.canEmit=function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},e.recognize=function(t){var e=so({},t);if(!Wo(this.options.enable,[this,e]))return this.reset(),void(this.state=Cn);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},e.process=function(t){},e.getTouchAction=function(){},e.reset=function(){},t}(),Mn=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,eo({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},e))||this).pTime=!1,i.pCenter=!1,i._timer=null,i._input=null,i.count=0,i}io(e,t);var i=e.prototype;return i.getTouchAction=function(){return[fo]},i.process=function(t){var e=this,i=this.options,o=t.pointers.length===i.pointers,n=t.distance<i.threshold,s=t.deltaTime<i.time;if(this.reset(),t.eventType&Lo&&0===this.count)return this.failTimeout();if(n&&s&&o){if(t.eventType!==Eo)return this.failTimeout();var a=!this.pTime||t.timeStamp-this.pTime<i.interval,r=!this.pCenter||Yo(this.pCenter,t.center)<i.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,r&&a?this.count+=1:this.count=1,this._input=t,0===this.count%i.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.interval),2):8}return Cn},i.failTimeout=function(){var t=this;return this._timer=setTimeout((function(){t.state=Cn}),this.options.interval),Cn},i.reset=function(){clearTimeout(this._timer)},i.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},e}(En),Tn=function(t){function e(e){return void 0===e&&(e={}),t.call(this,eo({pointers:1},e))||this}io(e,t);var i=e.prototype;return i.attrTest=function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},i.process=function(t){var e=this.state,i=t.eventType,o=6&e,n=this.attrTest(t);return o&&(i&Mo||!n)?16|e:o||n?i&Eo?8|e:2&e?4|e:2:Cn},e}(En);function Vn(t){return t===Po?"down":t===zo?"up":t===Vo?"left":t===Ho?"right":""}var Hn=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,eo({event:"pan",threshold:10,pointers:1,direction:No},e))||this).pX=null,i.pY=null,i}io(e,t);var i=e.prototype;return i.getTouchAction=function(){var t=this.options.direction,e=[];return t&Do&&e.push(bo),t&Oo&&e.push(yo),e},i.directionTest=function(t){var e=this.options,i=!0,o=t.distance,n=t.direction,s=t.deltaX,a=t.deltaY;return n&e.direction||(e.direction&Do?(n=0===s?To:s<0?Vo:Ho,i=s!==this.pX,o=Math.abs(t.deltaX)):(n=0===a?To:a<0?zo:Po,i=a!==this.pY,o=Math.abs(t.deltaY))),t.direction=n,i&&o>e.threshold&&n&e.direction},i.attrTest=function(t){return Tn.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},i.emit=function(e){this.pX=e.deltaX,this.pY=e.deltaY;var i=Vn(e.direction);i&&(e.additionalEvent=this.options.event+i),t.prototype.emit.call(this,e)},e}(Tn),zn=function(t){function e(e){return void 0===e&&(e={}),t.call(this,eo({event:"swipe",threshold:10,velocity:.3,direction:Do|Oo,pointers:1},e))||this}io(e,t);var i=e.prototype;return i.getTouchAction=function(){return Hn.prototype.getTouchAction.call(this)},i.attrTest=function(e){var i,o=this.options.direction;return o&(Do|Oo)?i=e.overallVelocity:o&Do?i=e.overallVelocityX:o&Oo&&(i=e.overallVelocityY),t.prototype.attrTest.call(this,e)&&o&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers===this.options.pointers&&co(i)>this.options.velocity&&e.eventType&Eo},i.emit=function(t){var e=Vn(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)},e}(Tn),Pn=function(t){function e(e){return void 0===e&&(e={}),t.call(this,eo({event:"pinch",threshold:0,pointers:2},e))||this}io(e,t);var i=e.prototype;return i.getTouchAction=function(){return[go]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)},i.emit=function(e){if(1!==e.scale){var i=e.scale<1?"in":"out";e.additionalEvent=this.options.event+i}t.prototype.emit.call(this,e)},e}(Tn),Dn=function(t){function e(e){return void 0===e&&(e={}),t.call(this,eo({event:"rotate",threshold:0,pointers:2},e))||this}io(e,t);var i=e.prototype;return i.getTouchAction=function(){return[go]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)},e}(Tn),On=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,eo({event:"press",pointers:1,time:251,threshold:9},e))||this)._timer=null,i._input=null,i}io(e,t);var i=e.prototype;return i.getTouchAction=function(){return[vo]},i.process=function(t){var e=this,i=this.options,o=t.pointers.length===i.pointers,n=t.distance<i.threshold,s=t.deltaTime>i.time;if(this._input=t,!n||!o||t.eventType&(Eo|Mo)&&!s)this.reset();else if(t.eventType&Lo)this.reset(),this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.time);else if(t.eventType&Eo)return 8;return Cn},i.reset=function(){clearTimeout(this._timer)},i.emit=function(t){8===this.state&&(t&&t.eventType&Eo?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ho(),this.manager.emit(this.options.event,this._input)))},e}(En),Nn={domEvents:!1,touchAction:mo,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},In=[[Dn,{enable:!1}],[Pn,{enable:!1},["rotate"]],[zn,{direction:Do}],[Hn,{direction:Do},["swipe"]],[Mn],[Mn,{event:"doubletap",taps:2},["tap"]],[On]];function Rn(t,e){var i,o=t.element;o.style&&(jo(t.options.cssProps,(function(n,s){i=uo(o.style,s),e?(t.oldCssProps[i]=o.style[i],o.style[i]=n):o.style[i]=t.oldCssProps[i]||""})),e||(t.oldCssProps={}))}var jn=function(){function t(t,e){var i,o=this;this.options=so({},Nn,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(Ao?hn:So?mn:$o?An:gn))(i,Qo),this.touchAction=new Fo(this,this.options.touchAction),Rn(this,!0),jo(this.options.recognizers,(function(t){var e=o.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}var e=t.prototype;return e.set=function(t){return so(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},e.stop=function(t){this.session.stopped=t?2:1},e.recognize=function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var o=this.recognizers,n=e.curRecognizer;(!n||n&&8&n.state)&&(e.curRecognizer=null,n=null);for(var s=0;s<o.length;)i=o[s],2===e.stopped||n&&i!==n&&!i.canRecognizeWith(n)?i.reset():i.recognize(t),!n&&14&i.state&&(e.curRecognizer=i,n=i),s++}},e.get=function(t){if(t instanceof En)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event===t)return e[i];return null},e.add=function(t){if(Sn(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},e.remove=function(t){if(Sn(t,"remove",this))return this;var e=this.get(t);if(t){var i=this.recognizers,o=an(i,e);-1!==o&&(i.splice(o,1),this.touchAction.update())}return this},e.on=function(t,e){if(void 0===t||void 0===e)return this;var i=this.handlers;return jo(tn(t),(function(t){i[t]=i[t]||[],i[t].push(e)})),this},e.off=function(t,e){if(void 0===t)return this;var i=this.handlers;return jo(tn(t),(function(t){e?i[t]&&i[t].splice(an(i[t],e),1):delete i[t]})),this},e.emit=function(t,e){this.options.domEvents&&function(t,e){var i=document.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var o=0;o<i.length;)i[o](e),o++}},e.destroy=function(){this.element&&Rn(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},t}(),Wn={touchstart:Lo,touchmove:2,touchend:Eo,touchcancel:Mo},Bn=function(t){function e(){var i,o=e.prototype;return o.evTarget="touchstart",o.evWin="touchstart touchmove touchend touchcancel",(i=t.apply(this,arguments)||this).started=!1,i}return io(e,t),e.prototype.handler=function(t){var e=Wn[t.type];if(e===Lo&&(this.started=!0),this.started){var i=Fn.call(this,t,e);e&(Eo|Mo)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:Co,srcEvent:t})}},e}(sn);function Fn(t,e){var i=un(t.touches),o=un(t.changedTouches);return e&(Eo|Mo)&&(i=pn(i.concat(o),"identifier",!0)),[i,o]}function Un(t,e,i){var o="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",n=window.console&&(window.console.warn||window.console.log);return n&&n.call(window.console,o,i),t.apply(this,arguments)}}var Zn=Un((function(t,e,i){for(var o=Object.keys(e),n=0;n<o.length;)(!i||i&&void 0===t[o[n]])&&(t[o[n]]=e[o[n]]),n++;return t}),"extend","Use `assign`."),qn=Un((function(t,e){return Zn(t,e,!0)}),"merge","Use `assign`.");function Yn(t,e,i){var o,n=e.prototype;(o=t.prototype=Object.create(n)).constructor=t,o._super=n,i&&so(o,i)}function Xn(t,e){return function(){return t.apply(e,arguments)}}(function(){var t=function(t,e){return void 0===e&&(e={}),new jn(t,eo({recognizers:In.concat()},e))};return t.VERSION="2.0.17-rc",t.DIRECTION_ALL=No,t.DIRECTION_DOWN=Po,t.DIRECTION_LEFT=Vo,t.DIRECTION_RIGHT=Ho,t.DIRECTION_UP=zo,t.DIRECTION_HORIZONTAL=Do,t.DIRECTION_VERTICAL=Oo,t.DIRECTION_NONE=To,t.DIRECTION_DOWN=Po,t.INPUT_START=Lo,t.INPUT_MOVE=2,t.INPUT_END=Eo,t.INPUT_CANCEL=Mo,t.STATE_POSSIBLE=1,t.STATE_BEGAN=2,t.STATE_CHANGED=4,t.STATE_ENDED=8,t.STATE_RECOGNIZED=8,t.STATE_CANCELLED=16,t.STATE_FAILED=Cn,t.Manager=jn,t.Input=sn,t.TouchAction=Fo,t.TouchInput=mn,t.MouseInput=gn,t.PointerEventInput=hn,t.TouchMouseInput=An,t.SingleTouchInput=Bn,t.Recognizer=En,t.AttrRecognizer=Tn,t.Tap=Mn,t.Pan=Hn,t.Swipe=zn,t.Pinch=Pn,t.Rotate=Dn,t.Press=On,t.on=en,t.off=on,t.each=jo,t.merge=qn,t.extend=Zn,t.bindFn=Xn,t.assign=so,t.inherit=Yn,t.bindFn=Xn,t.prefixed=uo,t.toArray=un,t.inArray=an,t.uniqueArray=pn,t.splitStr=tn,t.boolOrFn=Wo,t.hasParent=Uo,t.addEventListeners=en,t.removeEventListeners=on,t.defaults=so({},Nn,{preset:In}),t})().defaults;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Kn=270;const Gn=new Set(["ArrowRight","ArrowUp","ArrowLeft","ArrowDown","PageUp","PageDown","Home","End"]);let Jn=class extends rt{constructor(){super(...arguments),this.disabled=!1,this.step=1,this.min=0,this.max=100,this._localValue=this.value,this._localLow=this.low,this._localHigh=this.high,this._getPercentageFromEvent=t=>{const e=this._slider.getBoundingClientRect(),i=2*(t.center.x-e.left-e.width/2)/e.width,o=2*(t.center.y-e.top-e.height/2)/e.height,[,n]=function(t,e){return[Math.sqrt(t*t+e*e),Math.atan2(e,t)]}(i,o),s=(n/(2*Math.PI)*360+45-135+360)%360-45;return Math.max(Math.min(s/Kn,1),0)}}_valueToPercentage(t){return(wi(t,this.min,this.max)-this.min)/(this.max-this.min)}_percentageToValue(t){return(this.max-this.min)*t+this.min}_steppedValue(t){return Math.round(t/this.step)*this.step}_boundedValue(t){var e,i;const o="high"===this._activeSlider?Math.min(null!==(e=this._localLow)&&void 0!==e?e:this.max):this.min,n="low"===this._activeSlider?Math.max(null!==(i=this._localHigh)&&void 0!==i?i:this.min):this.max;return Math.min(Math.max(t,o),n)}firstUpdated(t){super.firstUpdated(t),this._setupListeners()}updated(t){super.updated(t),this._activeSlider||(t.has("value")&&(this._localValue=this.value),t.has("low")&&(this._localLow=this.low),t.has("high")&&(this._localHigh=this.high))}connectedCallback(){super.connectedCallback(),this._setupListeners()}disconnectedCallback(){super.disconnectedCallback()}_findActiveSlider(t){var e,i;if(!this.dual)return"value";const o=Math.max(null!==(e=this._localLow)&&void 0!==e?e:this.min,this.min),n=Math.min(null!==(i=this._localHigh)&&void 0!==i?i:this.max,this.max);if(o>=t)return"low";if(n<=t)return"high";return Math.abs(t-o)<=Math.abs(t-n)?"low":"high"}_setActiveValue(t){switch(this._activeSlider){case"high":this._localHigh=t;break;case"low":this._localLow=t;break;case"value":this._localValue=t}}_getActiveValue(){switch(this._activeSlider){case"high":return this._localHigh;case"low":return this._localLow;case"value":return this._localValue}}_setupListeners(){this._interaction&&!this._mc&&(this._mc=new jn(this._interaction,{inputClass:An}),this._mc.add(new Hn({direction:No,enable:!0,threshold:0})),this._mc.add(new Mn({event:"singletap"})),this._mc.on("pan",(t=>{t.srcEvent.stopPropagation(),t.srcEvent.preventDefault()})),this._mc.on("panstart",(t=>{var e,i;if(this.disabled)return;const o=this._getPercentageFromEvent(t),n=this._percentageToValue(o);this._activeSlider=this._findActiveSlider(n),this._lastSlider=this._activeSlider,null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("#slider"))||void 0===i||i.focus()})),this._mc.on("pancancel",(()=>{this.disabled||(this._activeSlider=void 0)})),this._mc.on("panmove",(t=>{if(this.disabled)return;const e=this._getPercentageFromEvent(t),i=this._percentageToValue(e),o=this._boundedValue(i);this._setActiveValue(o);const n=this._steppedValue(o);this._activeSlider&&bi(this,`${this._activeSlider}-changing`,{value:n})})),this._mc.on("panend",(t=>{if(this.disabled)return;const e=this._getPercentageFromEvent(t),i=this._percentageToValue(e),o=this._boundedValue(i),n=this._steppedValue(o);this._setActiveValue(n),this._activeSlider&&(bi(this,`${this._activeSlider}-changing`,{value:void 0}),bi(this,`${this._activeSlider}-changed`,{value:n})),this._activeSlider=void 0})),this._mc.on("singletap",(t=>{var e,i;if(this.disabled)return;const o=this._getPercentageFromEvent(t),n=this._percentageToValue(o);this._activeSlider=this._findActiveSlider(n);const s=this._boundedValue(n),a=this._steppedValue(s);this._setActiveValue(a),this._activeSlider&&(bi(this,`${this._activeSlider}-changing`,{value:void 0}),bi(this,`${this._activeSlider}-changed`,{value:a})),this._lastSlider=this._activeSlider,null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("#slider"))||void 0===i||i.focus(),this._activeSlider=void 0})))}get _tenPercentStep(){return Math.max(this.step,(this.max-this.min)/10)}_handleKeyDown(t){var e,i,o;if(!Gn.has(t.code))return;t.preventDefault(),this._lastSlider&&(null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById(this._lastSlider))||void 0===i||i.focus()),this._activeSlider=null!==(o=this._lastSlider)&&void 0!==o?o:t.currentTarget.id,this._lastSlider=void 0;const n=this._getActiveValue();switch(t.code){case"ArrowRight":case"ArrowUp":this._setActiveValue(this._boundedValue((null!=n?n:this.min)+this.step));break;case"ArrowLeft":case"ArrowDown":this._setActiveValue(this._boundedValue((null!=n?n:this.min)-this.step));break;case"PageUp":this._setActiveValue(this._steppedValue(this._boundedValue((null!=n?n:this.min)+this._tenPercentStep)));break;case"PageDown":this._setActiveValue(this._steppedValue(this._boundedValue((null!=n?n:this.min)-this._tenPercentStep)));break;case"Home":this._setActiveValue(this._boundedValue(this.min));break;case"End":this._setActiveValue(this._boundedValue(this.max))}bi(this,`${this._activeSlider}-changing`,{value:this._getActiveValue()}),this._activeSlider=void 0}_handleKeyUp(t){Gn.has(t.code)&&(this._activeSlider=t.currentTarget.id,t.preventDefault(),bi(this,`${this._activeSlider}-changing`,{value:void 0}),bi(this,`${this._activeSlider}-changed`,{value:this._getActiveValue()}),this._activeSlider=void 0)}destroyListeners(){this._mc&&(this._mc.destroy(),this._mc=void 0)}_strokeCircleDashArc(t){return this._strokeDashArc(t,t)}_strokeDashArc(t,e){const i=this._valueToPercentage(t),o=this._valueToPercentage(e),n=290*Math.PI*Kn/360,s=Math.max((o-i)*n,0);return[`${s} ${n-s}`,`-${i*n-.5}`]}renderArc(t,e,i){var o,n;if(this.disabled)return Z;const s=to({x:0,y:0,start:0,end:Kn,r:145}),a="end"===i?this.max:this.min,r=null!==(o=this.current)&&void 0!==o?o:a,l=null!=e?e:a,c="end"===i?l<=r:"start"===i&&r<=l,d=c?"end"===i?this._strokeDashArc(l,r):this._strokeDashArc(r,l):this._strokeCircleDashArc(l),h="full"===i?this._strokeDashArc(this.min,this.max):"end"===i?this._strokeDashArc(l,a):this._strokeDashArc(a,l),u=this._strokeCircleDashArc(l),p=null!=this.current&&this.current<=this.max&&this.current>=this.min&&(c||"full"===this.mode)?this._strokeCircleDashArc(this.current):void 0;return F`
        <g class=${gt({inactive:Boolean(this.inactive)})}>
          <path
            class="arc arc-clear"
            d=${s}
            stroke-dasharray=${h[0]}
            stroke-dashoffset=${h[1]}
          />
          <path
            class="arc arc-colored ${gt({[t]:!0})}"
            d=${s}
            stroke-dasharray=${h[0]}
            stroke-dashoffset=${h[1]}
          />
          <path
            .id=${t}
            d=${s}
            class="arc arc-active ${gt({[t]:!0})}"
            stroke-dasharray=${d[0]}
            stroke-dashoffset=${d[1]}
            role="slider"
            tabindex="0"
            aria-valuemin=${this.min}
            aria-valuemax=${this.max}
            aria-valuenow=${null!=this._localValue?this._steppedValue(this._localValue):void 0}
            aria-disabled=${this.disabled}
            aria-label=${(t=>t??Z)(null!==(n=this.lowLabel)&&void 0!==n?n:this.label)}
            @keydown=${this._handleKeyDown}
            @keyup=${this._handleKeyUp}
          />
          ${p?F`
                <path
                  class="current arc-current"
                  d=${s}
                  stroke-dasharray=${p[0]}
                  stroke-dashoffset=${p[1]}
                />
            `:Z}
          <path
            class="target-border ${gt({[t]:!0})}"
            d=${s}
            stroke-dasharray=${u[0]}
            stroke-dashoffset=${u[1]}
          />
          <path
            class="target"
            d=${s}
            stroke-dasharray=${u[0]}
            stroke-dashoffset=${u[1]}
          />
        </g>
      `}render(){const t=to({x:0,y:0,start:0,end:Kn,r:145}),e=this.dual?this._localLow:this._localValue,i=this._localHigh,o=this.current,n=o?this._strokeCircleDashArc(o):void 0;return B`
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
              ${n?F`
                    <path
                      class="current"
                      d=${t}
                      stroke-dasharray=${n[0]}
                      stroke-dashoffset=${n[1]}
                    />
                  `:Z}
              ${null!=e?this.renderArc(this.dual?"low":"value",e,!this.dual&&this.mode||"start"):Z}
              ${this.dual&&null!=i?this.renderArc("high",i,"end"):Z}
            </g>
          </g>
        </svg>
        <slot></slot>
      `}static get styles(){return a`
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
      `}};t([ut({type:Boolean,reflect:!0})],Jn.prototype,"disabled",void 0),t([ut({type:Boolean})],Jn.prototype,"dual",void 0),t([ut({type:String})],Jn.prototype,"mode",void 0),t([ut({type:Boolean})],Jn.prototype,"inactive",void 0),t([ut({type:String})],Jn.prototype,"label",void 0),t([ut({type:String,attribute:"low-label"})],Jn.prototype,"lowLabel",void 0),t([ut({type:String,attribute:"high-label"})],Jn.prototype,"highLabel",void 0),t([ut({type:Number})],Jn.prototype,"value",void 0),t([ut({type:Number})],Jn.prototype,"low",void 0),t([ut({type:Number})],Jn.prototype,"high",void 0),t([ut({type:Number})],Jn.prototype,"current",void 0),t([ut({type:Number})],Jn.prototype,"step",void 0),t([ut({type:Number})],Jn.prototype,"min",void 0),t([ut({type:Number})],Jn.prototype,"max",void 0),t([pt()],Jn.prototype,"_localValue",void 0),t([pt()],Jn.prototype,"_localLow",void 0),t([pt()],Jn.prototype,"_localHigh",void 0),t([pt()],Jn.prototype,"_activeSlider",void 0),t([pt()],Jn.prototype,"_lastSlider",void 0),t([mt("#slider")],Jn.prototype,"_slider",void 0),t([mt("#interaction")],Jn.prototype,"_interaction",void 0),Jn=t([ct("vt-ha-control-circular-slider")],Jn);const Qn={auto:"M18,11V12.5C21.19,12.5 23.09,16.05 21.33,18.71L20.24,17.62C21.06,15.96 19.85,14 18,14V15.5L15.75,13.25L18,11M18,22V20.5C14.81,20.5 12.91,16.95 14.67,14.29L15.76,15.38C14.94,17.04 16.15,19 18,19V17.5L20.25,19.75L18,22M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H14C13.36,20.45 12.86,19.77 12.5,19H5V8H19V10.59C19.71,10.7 20.39,10.94 21,11.31V5A2,2 0 0,0 19,3Z",heat_cool:"M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z",heat:"M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z",cool:"M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z",off:"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",fan_only:bt,dry:Lt,window_open:Et,windowBypass:Mt,presence:$t,motion:Ct,eco:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z",comfort:"M12.5 7C12.5 5.89 13.39 5 14.5 5H18C19.1 5 20 5.9 20 7V9.16C18.84 9.57 18 10.67 18 11.97V14H12.5V7M6 11.96V14H11.5V7C11.5 5.89 10.61 5 9.5 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96M20.66 10.03C19.68 10.19 19 11.12 19 12.12V15H5V12C5 10.9 4.11 10 3 10S1 10.9 1 12V17C1 18.1 1.9 19 3 19V21H5V19H19V21H21V19C22.1 19 23 18.1 23 17V12C23 10.79 21.91 9.82 20.66 10.03Z",boost:"M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z",frost:"M14.46 9.41L11 7.38V5.12L12.71 3.41L11.29 2L10 3.29L8.71 2L7.29 3.41L9 5.12V7.38L6.5 8.82L4.5 7.69L3.92 5.36L2 5.88L2.47 7.65L.7 8.12L1.22 10.05L3.55 9.43L5.55 10.56V13.45L3.55 14.58L1.22 13.96L.7 15.89L2.47 16.36L2 18.12L3.93 18.64L4.55 16.31L6.55 15.18L9 16.62V18.88L7.29 20.59L8.71 22L10 20.71L11.29 22L12.7 20.59L11 18.88V16.62L14.46 14.61M7.5 10.56L10 9.11L12.5 10.56V13.44L10 14.89L7.5 13.44M19 5C17.89 5 17 5.89 17 7V13.76C16.36 14.33 16 15.15 16 16C16 17.66 17.34 19 19 19S22 17.66 22 16C22 15.15 21.64 14.33 21 13.77V7C21 5.89 20.11 5 19 5M19 6C19.55 6 20 6.45 20 7V8H18V7C18 6.45 18.45 6 19 6",activity:Ct,power:"M12 3L2 12H5V20H19V12H22L12 3M11.5 18V14H9L12.5 7V11H15L11.5 18Z",flashAlert:wt,temperature:"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",humidity:Lt,ok:yt,thermometerAlert:kt,none:"M23 17C23 20.31 20.31 23 17 23V21.5C19.5 21.5 21.5 19.5 21.5 17H23M1 7C1 3.69 3.69 1 7 1V2.5C4.5 2.5 2.5 4.5 2.5 7H1M8 4.32L3.41 8.92C.19 12.14 .19 17.37 3.41 20.59S11.86 23.81 15.08 20.59L22.15 13.5C22.64 13.03 22.64 12.24 22.15 11.75C21.66 11.26 20.87 11.26 20.38 11.75L15.96 16.17L15.25 15.46L21.79 8.92C22.28 8.43 22.28 7.64 21.79 7.15S20.5 6.66 20 7.15L14.19 13L13.5 12.27L20.37 5.38C20.86 4.89 20.86 4.1 20.37 3.61S19.09 3.12 18.6 3.61L11.71 10.5L11 9.8L16.5 4.32C17 3.83 17 3.04 16.5 2.55S15.22 2.06 14.73 2.55L7.11 10.17C8.33 11.74 8.22 14 6.78 15.45L6.07 14.74C7.24 13.57 7.24 11.67 6.07 10.5L5.72 10.15L9.79 6.08C10.28 5.59 10.28 4.8 9.79 4.31C9.29 3.83 8.5 3.83 8 4.32Z",auto_regulation_mode:St,power_percent:St,mean_power_cycle:"M7,2V13H10V22L17,10H13L17,2H7Z",valve_open_percent:"M22 13V21H20V19H16.58C15.81 20.76 14.05 22 12 22S8.19 20.76 7.42 19H4V21H2V13H4V15H7.43C7.93 13.85 8.85 12.93 10 12.42V11H8V9H16V11H14V12.42C15.15 12.93 16.07 13.85 16.57 15H20V13H22M17 2H7C6.45 2 6 2.45 6 3S6.45 4 7 4H10V5H11V8H13V5H14V4H17C17.55 4 18 3.55 18 3S17.55 2 17 2Z",regulated_target_temperature:"M12 14C11.7 13.6 11.4 13.3 11 13V5C11 3.3 9.7 2 8 2S5 3.3 5 5V13C2.8 14.7 2.3 17.8 4 20S8.8 22.7 11 21 13.7 16.2 12 14M9 8H7V5C7 4.5 7.5 4 8 4S9 4.5 9 5V8M18 3H16L12.8 12H14.7L15.4 10H18.6L19.3 12H21.2L18 3M15.8 8.7L17 5L18.2 8.7H15.8Z",auto_fan_mode:"M12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2M12 11C12.54 11 13 11.45 13 12C13 12.55 12.54 13 12 13C11.43 13 11 12.55 11 12C11 11.45 11.43 11 12 11M18 15C16.89 15 16 15.9 16 17V23H18V21H20V23H22V17C22 15.9 21.1 15 20 15M18 17H20V19H18Z",auto_fan_mode_off:"M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z",fan_mode:bt,power_sleep:xt,sleep:"M23,12H17V10L20.39,6H17V4H23V6L19.62,10H23V12M15,16H9V14L12.39,10H9V8H15V10L11.62,14H15V16M7,20H1V18L4.39,14H1V12H7V14L3.62,18H7V20Z"},ts="none",es="off",is="sleep",os="auto_fan_none",ns="cooling",ss="heating",as={auto_fan_none:"None",auto_fan_low:"Low",auto_fan_mid:"Medium",auto_fan_high:"High",auto_fan_turbo:"Turbo"};function rs(t){const e=window;e.customCards=e.customCards||[],e.customCards.push(Object.assign(Object.assign({},t),{preview:!0}))}function ls(t){const e=(new Date).getTime()-t.getTime();return Math.floor(e/6e4)}function cs(t,e){const i=Math.round(t*e)/e;return parseFloat(i.toFixed(e))}console.info("%c  VersatileThermostatUI-CARD \n%c  version: 2.0.1    ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),rs({type:"versatile-thermostat-ui-card",name:"Versatile Thermostat Climate Card",description:"Card for climate entity"});let ds=class extends rt{_highChanged(t){const e=t.detail.value;if(isNaN(e))return;const i=t.type.replace("-changed","");this.value=Object.assign(Object.assign({},this.value),{[i]:e}),this._selectTargetTemperature=i,this._callService(i)}_highChanging(t){const e=t.detail.value;if(isNaN(e))return;const i=t.type.replace("-changing","");this.value=Object.assign(Object.assign({},this.value),{[i]:e}),this._selectTargetTemperature=i,this._updateDisplay(),this._vibrate(20)}_callService(t){"high"!==t&&"low"!==t?this.hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,temperature:this.value.value}):this.hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,target_temp_low:this.value.low,target_temp_high:this.value.high})}_handleButton(t){var e;const i=t.currentTarget.target,o=t.currentTarget.step,n="high"===i?this.max:this.min;let s=null!==(e=this.value[i])&&void 0!==e?e:n;s+=o,s=wi(s,this.min,this.max),"high"===i&&null!=this.value.low&&(s=wi(s,this.value.low,this.max)),"low"===i&&null!=this.value.high&&(s=wi(s,this.min,this.value.high)),this.value=Object.assign(Object.assign({},this.value),{[i]:s}),this._updateDisplay(),this._vibrate(40),this._debouncedCallService(i)}_handleSelectTemp(t){const e=t.currentTarget.target;this._selectTargetTemperature=e,this._updateDisplay(),this._vibrate(40)}setConfig(t){this._config=Object.assign({tap_action:{action:"toggle"},hold_action:{action:"more-info"}},t)}getCardSize(){return 1}_vibrate(t){try{navigator.vibrate(t)}catch(t){}}firstUpdated(t){this._init=!1}shouldUpdate(t){return void 0!==t.has("_config")&&void 0!==t.get("_config")&&(this._hasOverpowering=!1,this._hasWindow=!1,this._hasWindowByPass=!1,this._hasMotion=!1,this._hasPresence=!1,this._hasAutoStartStop=!1,this._isAutoStartStopEnabled=!1,this.humidity=0),void 0!==t.get("hass")&&(this._init=!1),!0}updated(t){var e,i;super.updated(t),this._firstRender=!1,null===(i=null===(e=null==this?void 0:this.shadowRoot)||void 0===e?void 0:e.querySelector(".security"))||void 0===i||i.addEventListener("click",(()=>{var t,e,i,o;null===(e=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.querySelector(".security"))||void 0===e||e.remove(),null===(o=null===(i=null==this?void 0:this.shadowRoot)||void 0===i?void 0:i.querySelector(".content"))||void 0===o||o.classList.remove("security_msg"),this._vibrate(2)}))}_willUpdatePower(){let t,e,i;this._externalPowerInfos=[],this._config.powerEntity&&(t=this.hass.states[this._config.powerEntity],e=Number(t.state),i=t.attributes.unit_of_measurement),e&&this._externalPowerInfos.push({name:"mean_power_cycle",value:e,unit:i,class:"vt-power-color"})}willUpdate(t){var e,i,o,n,s,a,r,l,c,d,h,u,p,_,m,v,f,g,y,b,w,$,A,S,C,x,k,L,E,M,T,V,H,z,P,D,O,N,I,R,j,W,B,F;if(!this.hass||!this._config||!t.has("hass")&&!t.has("_config"))return;const U=this._config.entity;this._willUpdatePower();const Z=this.hass.states[U];if(!Z)return;const q=t.get("hass");if(!q||q.states[U]!==Z){if(!this._config||!this.hass||!this._config.entity)return;console.log("Something may have change"),this.stateObj=Z;const t=this.stateObj.attributes,U=this.stateObj.state;this.name="",this.hvacMode=U||es,this.hvacAction=null==t?void 0:t.hvac_action,this.preset=null==t?void 0:t.preset_mode,this.modes=(null==t?void 0:t.hvac_modes)?Object.values(t.hvac_modes):[],this.presets=t.preset_modes?Object.values(t.preset_modes):[],this.isSleeping=!0===(null===(e=null==t?void 0:t.specific_states)||void 0===e?void 0:e.is_sleeping),this.powerPercent=(null===(i=null==t?void 0:t.vtherm_over_switch)||void 0===i?void 0:i.power_percent)||(null===(n=null===(o=null==t?void 0:t.vtherm_over_climate)||void 0===o?void 0:o.valve_regulation)||void 0===n?void 0:n.power_percent)||0,void 0===(null===(s=null==t?void 0:t.specific_states)||void 0===s?void 0:s.is_device_active)?this.isDeviceActive=this.hvacAction==ss||this.hvacAction==ns:this.isDeviceActive=!0===(null===(a=null==t?void 0:t.specific_states)||void 0===a?void 0:a.is_device_active),this.temperature=null==t?void 0:t.temperature,this.step=(null===(r=null==t?void 0:t.configuration)||void 0===r?void 0:r.target_temperature_step)||.5,this.min=(null==t?void 0:t.min_temp)||7,this.max=(null==t?void 0:t.max_temp)||35,this.current=(null==t?void 0:t.current_temperature)||0,this.windowState=null===(l=null==t?void 0:t.window_manager)||void 0===l?void 0:l.window_state,this.windowAutoState=null===(c=null==t?void 0:t.window_manager)||void 0===c?void 0:c.window_auto_state,this.humidity=(null==t?void 0:t.humidity)?parseFloat(t.humidity):0,this.overpoweringState=(null===(d=null==t?void 0:t.power_manager)||void 0===d?void 0:d.overpowering_state)||"off",this.presenceState=(null===(h=null==t?void 0:t.presence_manager)||void 0===h?void 0:h.presence_state)||"off",this.motionState=(null===(u=null==t?void 0:t.motion_manager)||void 0===u?void 0:u.motion_state)||"off",this._hasWindowByPass=!0===(null===(p=null==t?void 0:t.window_manager)||void 0===p?void 0:p.is_window_bypass),this.safetyState=(null===(_=null==t?void 0:t.safety_manager)||void 0===_?void 0:_.safety_state)||"off",this.meanCyclePower=(null===(m=null==t?void 0:t.power_manager)||void 0===m?void 0:m.mean_cycle_power)||0,this.valveOpenPercent=(null===(v=null==t?void 0:t.vtherm_over_valve)||void 0===v?void 0:v.valve_open_percent)||(null===(g=null===(f=null==t?void 0:t.vtherm_over_climate_valve)||void 0===f?void 0:f.valve_regulation)||void 0===g?void 0:g.valve_open_percent)||0,this.devicePower=(null===(y=null==t?void 0:t.power_manager)||void 0===y?void 0:y.device_power)||0,this.isRegulated=!0===(null===(b=null==t?void 0:t.vtherm_over_climate)||void 0===b?void 0:b.is_regulated),this.regulatedTargetTemperature=(null===($=null===(w=null==t?void 0:t.vtherm_over_climate)||void 0===w?void 0:w.regulation)||void 0===$?void 0:$.regulated_target_temperature)||null,this.autoRegulationMode=(null===(S=null===(A=null==t?void 0:t.vtherm_over_climate)||void 0===A?void 0:A.regulation)||void 0===S?void 0:S.auto_regulation_mode)||null,this.currentAutoFanMode=(null===(C=null==t?void 0:t.vtherm_over_climate)||void 0===C?void 0:C.current_auto_fan_mode)||null,this.autoFanMode=(null===(x=null==t?void 0:t.vtherm_over_climate)||void 0===x?void 0:x.auto_fan_mode)||null,this.fanMode=(null==t?void 0:t.fan_mode)||null,this.hvacOffReason=(null===(k=null==t?void 0:t.specific_states)||void 0===k?void 0:k.hvac_off_reason)||null,this.isRecalculateScheduled=(null===(L=null==t?void 0:t.specific_states)||void 0===L?void 0:L.is_recalculate_scheduled)||null,this.isOn=!0===(null===(E=null==t?void 0:t.specific_states)||void 0===E?void 0:E.is_on);const q=(null===(M=null==t?void 0:t.requested_state)||void 0===M?void 0:M.hvac_mode)||null,Y=(null===(T=null==t?void 0:t.specific_states)||void 0===T?void 0:T.messages)||[],X=1==(null===(V=null==t?void 0:t.vtherm_over_climate_valve)||void 0===V?void 0:V.have_valve_regulation);if((null===(H=this._config)||void 0===H?void 0:H.disable_name)||(this.name=this._config.name?this._config.name:t.friendly_name),this.hvacMode==es&&!0===this.isSleeping&&(this.hvacMode=is),!this.isSleeping&&this.powerPercent>0&&(this.hvacAction="heat"==q?ss:ns),this.modes.length>1&&this.modes.includes(es)&&this.modes.sort(((t,e)=>"off"===t?1:"off"===e?-1:t.localeCompare(e))),this.presets.length>0&&(this.presets=this.presets.filter((t=>t!=ts&&("cool"!=U||"frost"!=t)))),this.value={value:(null==t?void 0:t.temperature)||0,low:(null==t?void 0:t.target_temp_low)||null,high:(null==t?void 0:t.target_temp_high)||null},"on"===this.windowState||"on"===this.windowAutoState?this._hasWindow=!0:this._hasWindow=!1,"on"===this.overpoweringState?(this._hasOverpowering=!0,this.overpowering=!0):(this._hasOverpowering=!1,this.overpowering=!1),"on"===this.presenceState?(this._hasPresence=!0,this.presence=!0):(this._hasPresence=!1,this.presence=!1),"on"===this.motionState?(this._hasMotion=!0,this.motion=!0):(this._hasMotion=!1,this.motion=!1),"on"!==this.safetyState||(null===(z=null==this?void 0:this._config)||void 0===z?void 0:z.disable_safety_warning))this.safety_state=null;else{if(this.safety_state=[],this.safety_state.push({name:ui({hass:this.hass,string:"extra_states.safety_warning"}),security_msg:ui({hass:this.hass,string:"extra_states.safety_warning_msg"})}),null===(P=t.specific_states)||void 0===P?void 0:P.last_temperature_datetime){let e=ls(new Date(null===(D=t.specific_states)||void 0===D?void 0:D.last_temperature_datetime));e>0&&this.safety_state.push({name:ui({hass:this.hass,string:"extra_states.room_temp"}),security_msg:e+" "+ui({hass:this.hass,string:"extra_states.minutes"})})}if(null===(O=t.specific_states)||void 0===O?void 0:O.last_ext_temperature_datetime){let e=ls(new Date(null===(N=t.specific_states)||void 0===N?void 0:N.last_ext_temperature_datetime));e>0&&this.safety_state.push({name:ui({hass:this.hass,string:"extra_states.outdoor_temp"}),security_msg:e+" "+ui({hass:this.hass,string:"extra_states.minutes"})})}}this.messages=[];for(const t of Y)this.messages.push(ui({hass:this.hass,string:`extra_states.${t}`}));if(this.powerInfos=[],(null===(I=this._config)||void 0===I?void 0:I.disable_power_infos)||!this.isOn&&!X||((null==t?void 0:t.is_over_switch)&&(this.meanCyclePower&&!(null===(R=this._config)||void 0===R?void 0:R.powerEntity)&&this.powerInfos.push({name:"mean_power_cycle",value:cs(this.meanCyclePower,1),unit:this.meanCyclePower<7?"kW":"W",class:"vt-power-color"}),this.powerInfos.push({name:"power_percent",value:this.powerPercent,unit:"%",class:"vt-power-color"})),((null==t?void 0:t.is_over_valve)||X)&&this.powerInfos.push({name:"valve_open_percent",value:this.valveOpenPercent,unit:"%",class:"vt-power-color"}),(null==t?void 0:t.is_over_climate)&&!X&&(this.devicePower&&!(null===(j=this._config)||void 0===j?void 0:j.powerEntity)&&this.powerInfos.push({name:"mean_power_cycle",value:this.devicePower,unit:this.devicePower<7?"kW":"W",class:"vt-power-color"}),this.isRegulated&&(this.powerInfos.push({name:"regulated_target_temperature",value:this.regulatedTargetTemperature,unit:null===(W=null==t?void 0:t.configuration)||void 0===W?void 0:W.temperature_unit,class:"vt-temp-color"}),this.powerInfos.push({name:"auto_regulation_mode",value:ui({hass:this.hass,string:`extra_states.${this.autoRegulationMode}`}),unit:"",class:"vt-label-color"})))),this.autoFanInfos=[],!(null===(B=null==this?void 0:this._config)||void 0===B?void 0:B.disable_auto_fan_infos)&&(null==t?void 0:t.is_over_climate)&&!X){const t=this.currentAutoFanMode!=os?"auto_fan_mode":"auto_fan_mode_off";this.autoFanInfos.push({name:t,value:ui({hass:this.hass,string:`extra_states.${this.currentAutoFanMode}`}),unit:"",class:"vt-label-color"}),this.fanMode&&this.autoFanInfos.push({name:"fan_mode",value:ui({hass:this.hass,string:`extra_states.fan_${this.fanMode}`}),unit:"",class:"vt-label-color"})}this._hasAutoStartStop="hvac_off_auto_start_stop"===this.hvacOffReason,this._isAutoStartStopConfigured=!0===(null==t?void 0:t.is_auto_start_stop_configured),this._isAutoStartStopEnabled=!0===(null===(F=null==t?void 0:t.auto_start_stop_manager)||void 0===F?void 0:F.auto_start_stop_enable),this._updateDisplay()}}_updateDisplay(){var t;(null===(t=null==this?void 0:this._config)||void 0===t?void 0:t.set_current_as_main)?(this._display_bottom=this._getCurrentSetpoint(),this._display_top=this.current):(this._display_bottom=this.current,this._display_top=this._getCurrentSetpoint())}_handleAction(t){t.currentTarget.mode===is?this.hass.callService("versatile_thermostat","set_hvac_mode_sleep",{entity_id:this._config.entity}):this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:t.currentTarget.mode})}_handleDisplayMessages(){this.displayMessages=!this.displayMessages,this.requestUpdate(),this._vibrate(40)}_handlePreset(t){this.last_target_temperature=this.temperature,this.hass.callService("climate","set_preset_mode",{entity_id:this._config.entity,preset_mode:t.currentTarget.preset})}_handleClickAutoFanInfo(){let t=os;this.currentAutoFanMode==os&&(t=this.autoFanMode);const e=as[t];console.info(`VersatileThermostatUI-CARD changing auto_fan_mode to ${t} (mapped=$${e}`),this.hass.callService("versatile_thermostat","set_auto_fan_mode",{entity_id:this._config.entity,auto_fan_mode:e})}_handleClickAutoStartStopEnable(){let t=!this._isAutoStartStopEnabled;console.info(`VersatileThermostatUI-CARD changing auto_start_stop_enable to ${t}`),this.hass.callService("switch","toggle",{entity_id:this._config.autoStartStopEnableEntity})}_handleToggleWindowByPass(){let t=!this._hasWindowByPass;console.info(`VersatileThermostatUI-CARD changing windowByPass to ${t}`),this.hass.callService("versatile_thermostat","set_window_bypass",{entity_id:this._config.entity,window_bypass:t})}_getCurrentSetpoint(){var t,e,i,o,n,s,a,r;return null!==(null===(t=null==this?void 0:this.value)||void 0===t?void 0:t.high)&&null!==(null===(e=null==this?void 0:this.value)||void 0===e?void 0:e.low)?((null===(i=null==this?void 0:this.value)||void 0===i?void 0:i.low)||0)>=this.current?(null===(o=null==this?void 0:this.value)||void 0===o?void 0:o.low)||0:((null===(n=null==this?void 0:this.value)||void 0===n?void 0:n.high)||0)<=this.current?(null===(s=null==this?void 0:this.value)||void 0===s?void 0:s.high)||0:(null===(a=null==this?void 0:this.value)||void 0===a?void 0:a.low)||0:(null===(r=null==this?void 0:this.value)||void 0===r?void 0:r.value)||0}_renderHVACAction(){return"heating"===this.hvacAction||"heat"==this.hvacMode||"heat_cool"==this.hvacMode?F`<path class="status ${this.isDeviceActive?"active":""}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${"M8.5 4.5L5.4 9.5L8.5 14.7L5.2 20.5L3.4 19.6L6.1 14.7L3 9.5L6.7 3.6L8.5 4.5M14.7 4.4L11.6 9.5L14.7 14.5L11.4 20.3L9.6 19.4L12.3 14.5L9.2 9.5L12.9 3.5L14.7 4.4M21 4.4L17.9 9.5L21 14.5L17.7 20.3L15.9 19.4L18.6 14.5L15.5 9.5L19.2 3.5L21 4.4"}" />`:"cooling"===this.hvacAction||"cool"==this.hvacMode?F`<path class="status cooler ${this.isDeviceActive?"active":""}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${yt}" />`:F`<path class="status" transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" />`}_renderIcon(t,e){if(!Qn[t])return B``;const i=this.hass.localize(`component.climate.state._.${t}`)||ui({hass:this.hass,string:`extra_states.${t}`});return B`
      <ha-icon-button
        title="${e===t?t:""}"
        class=${gt({"selected-icon":e===t})}
        .mode=${t}
        @click=${this._handleAction}
        tabindex="0"
        .path=${Qn[t]}
        .label=${i}
      >
      </ha-icon-button>
    `}_renderMessagesButton(){const t=ui({hass:this.hass,string:"extra_states.messages-button"});return B`
      <ha-icon-button
        title="${t}"
        class="messages-button"
        @click=${this._handleDisplayMessages}
        tabindex="0"
        .path=${At}
        .label=${t}
      >
      </ha-icon-button>
    `}_renderRecalculateScheduledButton(){const t=ui({hass:this.hass,string:"extra_states.recalculation_scheduled"});return B`
      <ha-icon-button
        title="${t}"
        class="messages-button"
        tabindex="0"
        .path=${"M21,10.12H14.22L16.96,7.3C14.23,4.6 9.81,4.5 7.08,7.2C4.35,9.91 4.35,14.28 7.08,17C9.81,19.7 14.23,19.7 16.96,17C18.32,15.65 19,14.08 19,12.1H21C21,14.08 20.12,16.65 18.36,18.39C14.85,21.87 9.15,21.87 5.64,18.39C2.14,14.92 2.11,9.28 5.62,5.81C9.13,2.34 14.76,2.34 18.27,5.81L21,3V10.12M12.5,8V12.25L16,14.33L15.28,15.54L11,13V8H12.5Z"}
        .label=${t}
      >
      </ha-icon-button>
    `}_renderWindowByPassButton(){const t=ui({hass:this.hass,string:"extra_states.window-bypass-button"});return B`
      <ha-icon-button
        title="${t}"
        class="window-bypass-button"
        @click=${this._handleToggleWindowByPass}
        tabindex="0"
        .path=${Mt}
        .label=${t}
      >
      </ha-icon-button>
    `}_renderPreset(t,e){const i=(this.hass.localize(`component.climate.state._.${t}`)||ui({hass:this.hass,string:`extra_states.${t}`}))+"\n"+ui({hass:this.hass,string:"extra_states.change_message"});return B`
      <div class="preset-label">
          <ha-icon-button
            title="${e===t?t:""}"
            class=${gt({"selected-icon":e===t})}
            .preset=${t}
            @click=${this._handlePreset}
            tabindex="0"
            .path=${Qn[t]}
            .label=${i}
          >
        </ha-icon-button>
      </div>
    `}_renderPowerInfo(t){const e=this.hass.localize(`component.climate.state._.${t.name}`)||ui({hass:this.hass,string:`extra_states.${t.name}`});return B`
      <div class="left-info-label">
        <span>
          <ha-icon-button
            title="${e}"
            class=${t.class} 
            .name=${t.name}
            tabindex="0"
            .path=${Qn[t.name]}
            .label=${e}
          >
        </ha-icon-button>
        </span>
        <span>${t.value} ${t.unit}</span>
      </div>
    `}_renderAutoFanInfo(t){const e=(this.hass.localize(`component.climate.state._.${t.name}`)||ui({hass:this.hass,string:`extra_states.${t.name}`}))+"\n"+ui({hass:this.hass,string:"extra_states.toggle_message"});return B`
      <div class="left-info-label">
        <span>
          <ha-icon-button
            title="${e}"
            class=${t.class} 
            .name=${t.name}
            @click=${this._handleClickAutoFanInfo}
            tabindex="0"
            .path=${Qn[t.name]}
            .label=${e}
          >
        </ha-icon-button>
        </span>
        <span>${t.value} ${t.unit}</span>
      </div>
    `}_renderAutoStartStopEnable(){const t=ui({hass:this.hass,string:"extra_states.auto_start_stop_enable"}),e=ui({hass:this.hass,string:"extra_states.auto_start_stop_label"});return this._isAutoStartStopEnabled,B`
      <div class="left-info-label" title="${t}">
        <span>
          <input type="checkbox" .checked=${this._isAutoStartStopEnabled} class="auto-start-stop-enable" @click=${this._handleClickAutoStartStopEnable} .label="${t}" name="auto-start-stop-enable">
        </span>
        <span>${e}</span>
      </div>
    `}_handleMoreInfo(){bi(this,"hass-more-info",{entityId:this._config.entity})}buildTitle(){var t,e,i;let o="";return this._hasWindow&&!(null===(t=this._config)||void 0===t?void 0:t.disable_window)&&(o+=ui({hass:this.hass,string:"extra_states.window_open"})+"\n"),this._hasWindowByPass&&(o+=ui({hass:this.hass,string:"extra_states.window_bypass"})+"\n"),this._hasOverpowering&&!(null===(e=this._config)||void 0===e?void 0:e.disable_overpowering)&&(o+=ui({hass:this.hass,string:"extra_states.overpowering"})+"\n"),this._hasPresence&&(o+=ui({hass:this.hass,string:"extra_states.presence"})+"\n"),this._hasAutoStartStop&&!(null===(i=this._config)||void 0===i?void 0:i.disable_autoStartStop)&&(o+=ui({hass:this.hass,string:"extra_states.auto_start_stop"})+"\n"),this._hasMotion&&(o+=ui({hass:this.hass,string:"extra_states.motion"})+"\n"),o}_renderTemperature(t,e,i,o,n){var s,a;const r=e?15:6,l=e?-2:-1,c=e?-5.5:-2,d=e?5:3;let h,u=76,p=57,_=.2;return h=t?$i(t,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1}):this.hass.localize("extra_states.temp_unavailable"),n&&e&&(u=30,p=56,_=.25),F`
      ${n&&!(null===(s=this._config)||void 0===s?void 0:s.disable_target_icon)&&(null===(a=this._config)||void 0===a?void 0:a.disable_circle)?F`
        <path 
          class="main-value" 
          transform="translate(${u}, ${p}) scale(${_})" 
          fill="#ffffff" 
          d="${"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z"}" 
        />`:""}
      <text class="main-value" x="${i}" y="${o}" dominant-baseline="middle" text-anchor="middle" style="font-size:${r}px;">
        ${F`${h}`}
        <tspan dx="${l}" dy="${c}" style="font-size: ${d}px;">
          ${F`
            ${this.hass.config.unit_system.temperature}
          `}
        </tspan>
      </text>
    `}constructor(){super(),this.value={},this._selectTargetTemperature="low",this.current=0,this.humidity=0,this.temperature=0,this.min=7,this.max=35,this.step=.5,this.powerPercent=0,this.meanCyclePower=0,this.valveOpenPercent=0,this.devicePower=0,this.regulatedTargetTemperature=null,this.isOn=!1,this.window=!1,this.windowByPass=!1,this.presence=!1,this.motion=!1,this.overpowering=!1,this.isDeviceActive=!1,this.isSleeping=!1,this.isRegulated=!1,this.isRecalculateScheduled=!1,this.windowState="off",this.windowAutoState="off",this.overpoweringState="off",this.presenceState="off",this.motionState="off",this.safetyState="off",this.status="loading",this.hvacMode=es,this.hvacAction="idle",this.preset=ts,this.autoRegulationMode="",this.currentAutoFanMode=os,this.autoFanMode=os,this.fanMode="",this.hvacOffReason="",this.dragging=!1,this.name="",this.target="value",this._debouncedCallService=((t,e,i=!1)=>{let o;const n=(...n)=>{const s=i&&!o;clearTimeout(o),o=window.setTimeout((()=>{o=void 0,i||t(...n)}),e),s&&t(...n)};return n.cancel=()=>{clearTimeout(o)},n})((t=>this._callService(t)),1e3),this._init=!0,this._firstRender=!0,this._ignore=!1,this._hasWindow=!1,this._hasWindowByPass=!1,this._hasPresence=!1,this._hasMotion=!1,this._hasOverpowering=!1,this._hasAutoStartStop=!1,this._isAutoStartStopEnabled=!1,this._isAutoStartStopConfigured=!1,this._oldValueMin=0,this._oldValueMax=0,this._display_bottom=0,this._display_top=0,this.modes=[],this.presets=[],this.safety_state={},this.powerInfos=[],this._externalPowerInfos=[],this.autoFanInfos=[],this.messages=[],this.displayMessages=!1,this.render=()=>{var t,e,i,o,n,s,a,r,l,c,d,h,u,p,_,m,v;return B`
    <ha-card class=${gt({[this.hvacMode]:!0})}
    >
    ${(null===(t=this._config)||void 0===t?void 0:t.disable_menu)?"":B`
      <ha-icon-button
        class="more-info"
        .label=${this.hass.localize("ui.panel.lovelace.cards.show_more_info")}
        .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}
        @click=${this._handleMoreInfo}
        tabindex="0"
      ></ha-icon-button>
      `}

      ${this.name.length>0?B`
        <div class="name">${this.name}</div>
        `:""}

      ${(null===(e=this.safety_state)||void 0===e?void 0:e.length)>0&&!this.displayMessages?B`
        <div class="security">
          <ha-icon-button class="alert" .path=${kt}>
          </ha-icon-button>
          ${B`
            ${this.safety_state.map((t=>B`<span>${t.name}: ${t.security_msg}</span>`))}
           `}
        </div>
      `:""}
      ${this.messages.length>0&&this.displayMessages?B`
        <div class="messages">
          <ha-icon-button class="alert" .path=${At}>
          </ha-icon-button>
          ${this.messages.map((t=>B`<span>${t}</span>`))}
        </div>
      `:""}

      <div title="${this.buildTitle()}" class="${(null===(i=this._config)||void 0===i?void 0:i.disable_circle)?"disabled-circle-container":""}  ${this.hvacMode}_${this.hvacAction} ${this._hasWindow?"window_open":""}  ${this.overpowering?"overpowering":""}">
        ${(null===(o=this._config)||void 0===o?void 0:o.disable_circle)?B`
            <!-- No cicle configured -->
          `:null!=this.value.low&&null!=this.value.high&&"unavailable"!==this.stateObj.state?B`
            <vt-ha-control-circular-slider
              class="${null!==this.safety_state||this.displayMessages?"security_msg":""} ${this._hasWindow?"window_open":""}  ${this.overpowering?"overpowering":""} ${this.presence?"presence":""} ${this.motion?"motion":""}  ${this._hasWindowByPass?"windowByPass":""} "
              .inactive=${this._hasWindow}
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
            `:B`
            <vt-ha-control-circular-slider
              class="${null!==this.safety_state||this.displayMessages?"security_msg":""} ${this._hasWindow?"window_open":""}  ${this.overpowering?"overpowering":""} ${this.presence?"presence":""} ${this.motion?"motion":""}  ${this._hasWindowByPass?"windowByPass":""} "
              .inactive=${this._hasWindow}
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
          <div class="content ${0==this.name.length?"noname":""} ${null!==this.safety_state||this.displayMessages?"security_msg":""} ${this._hasWindow?"window_open":""}  ${this.overpowering?"overpowering":""} ${this.presence?"presence":""} ${this.motion?"motion":""}  ${this._hasWindowByPass?"windowByPass":""} " >
            <svg id="main" viewbox="0 0 125 100">
              <g transform="translate(57.5,37) scale(0.35)">
                ${this._hasWindowByPass?F`
                  <g transform="${this._hasWindowByPass?"translate(-50.25,0)":""}" @click=${this._handleToggleWindowByPass} class="icon-group">
                    <rect width="24" height="24" fill="transparent" style="cursor: pointer;"/>
                    <path class="window window-by-pass ${this._hasWindowByPass?"active":""}" id="window-by-pass" d=${Mt}/>
                  </g>
                `:""}
                ${this._hasWindowByPass||!this._hasWindow||(null===(n=this._config)||void 0===n?void 0:n.disable_window)?"":F`
                  <g transform="${this._hasWindow&&!(null===(s=this._config)||void 0===s?void 0:s.disable_window)?"translate(-50.25,0)":""}" @click=${this._handleToggleWindowByPass} class="icon-group">
                    <rect width="24" height="24" fill="transparent" style="cursor: pointer;"/>
                    <path class="window ${this._hasWindow?"active":""}" id="window" d=${Et}/>
                  </g>
                `}
                ${this._hasOverpowering&&!(null===(a=this._config)||void 0===a?void 0:a.disable_overpowering)?F`
                  <path class="overpowering ${this.overpowering?"active":""}" transform="${this._hasOverpowering&&!(null===(r=this._config)||void 0===r?void 0:r.disable_overpowering)?"translate(-25.25,0)":""}" id="overpowering" d=${wt} />
                `:""}
                ${this._hasPresence?F`
                  <path class="presence ${this.presence?"active":""}" transform="${this._hasPresence?"translate(0.25,0)":""}" id="overpowering" d=${$t} />
                `:""}
                ${this._hasAutoStartStop&&!(null===(l=this._config)||void 0===l?void 0:l.disable_autoStartStop)?F`
                  <path class="auto-start-stop" transform="${this._hasAutoStartStop&&!(null===(c=this._config)||void 0===c?void 0:c.disable_autoStartStop)?"translate(25.25,0)":""}" id="autoStartStop" d=${xt}/>
                `:""}
                ${this._hasMotion?F`
                  <path class="motion ${this.motion?"active":""}" transform="${this._hasMotion?"translate(50.25,0)":""}" id="motion" d=${Ct} />
                `:""}
              </g>

              ${(null===(d=this._config)||void 0===d?void 0:d.disable_circle)?F`
                  ${this._renderTemperature(this._display_top,!0,"55","60%",!(null===(h=null==this?void 0:this._config)||void 0===h?void 0:h.set_current_as_main))}
                  ${this._renderTemperature(this._display_bottom,!1,"90","60%",1==(null===(u=null==this?void 0:this._config)||void 0===u?void 0:u.set_current_as_main))}
                  <g class="current-info" transform="translate(100,65)">
                    ${this._renderHVACAction()}
                  </g>
                `:F`
                  ${this._renderTemperature(this._display_top,!0,"50%","60%",!(null===(p=null==this?void 0:this._config)||void 0===p?void 0:p.set_current_as_main))}
                  <line x1="35" y1="72" x2="90" y2="72" stroke="#e7e7e8" stroke-width="0.5" />
                  <g class="current-info" transform="translate(62.5,80)">
                    ${this._renderTemperature(this._display_bottom,!1,"-5%","0%",1==(null===(_=null==this?void 0:this._config)||void 0===_?void 0:_.set_current_as_main))}
                  ${this._renderHVACAction()}
                </g>
              `}              
          </svg>
        </svg>
            </svg>
          </div>
          ${(null===(m=this._config)||void 0===m?void 0:m.disable_window)?B``:B`
          </vt-ha-control-circular-slider>`}
        </div>
      <div id="modes" class="${null!==this.safety_state||this.displayMessages?"security_msg":""}">
        ${F`
          ${this.modes.map((t=>{var e,i,o,n,s,a,r,l;return(null===(e=this._config)||void 0===e?void 0:e.disable_heat)&&"heat"===t||(null===(i=this._config)||void 0===i?void 0:i.disable_auto)&&"auto"===t||(null===(o=this._config)||void 0===o?void 0:o.disable_cool)&&"cool"===t||(null===(n=this._config)||void 0===n?void 0:n.disable_heat_cool)&&"heat_cool"===t||(null===(s=this._config)||void 0===s?void 0:s.disable_dry)&&"dry"===t||(null===(a=this._config)||void 0===a?void 0:a.disable_fan_only)&&"fan_only"===t||(null===(r=this._config)||void 0===r?void 0:r.disable_off)&&"off"===t||(null===(l=this._config)||void 0===l?void 0:l.disable_sleep)&&"sleep"===t?B``:this._renderIcon(t,this.hvacMode)}))}
        `}
      </div>
      ${(null===(v=null==this?void 0:this._config)||void 0===v?void 0:v.disable_buttons)?B``:B`
        <div id="vt-control-buttons" class="${null!==this.safety_state||this.displayMessages?"security_msg":""}">
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
      
      <div id="presets" class="${null!==this.safety_state||this.displayMessages?"security_msg":""}">
        ${F`
          ${this.presets.map((t=>this._renderPreset(t,this.preset)))}
        `}
      </div>

      <div id="left-infos">
      ${this.isRecalculateScheduled?F`
        ${this._renderRecalculateScheduledButton()}
        `:""}
      ${this.messages.length>0?F`
        ${this._renderMessagesButton()}
        `:""}
      ${this._config.autoStartStopEnableEntity&&this._isAutoStartStopConfigured?F`
        ${this._renderAutoStartStopEnable()}
        `:""}
      ${F`
        ${this._externalPowerInfos.map((t=>this._renderPowerInfo(t)))}
      `}
      ${F`
        ${this.powerInfos.map((t=>this._renderPowerInfo(t)))}
      `}
      ${F`
        ${this.autoFanInfos.map((t=>this._renderAutoFanInfo(t)))}
      `}
    </div>
    </ha-card>
  `}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}static async getConfigElement(){return await Promise.resolve().then((function(){return fs})),document.createElement("versatile-thermostat-ui-card-editor")}static async getStubConfig(t){const e=Object.keys(t.states).filter((t=>["climate"].includes(t.split(".")[0]))),i=e.filter((e=>{var i;return null===(i=t.states[e].attributes)||void 0===i?void 0:i.specific_states}));return{type:"custom:versatile-thermostat-ui-card",entity:i[0]||e[0]}}};ds.styles=a`
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

      .disabled-circle-container{
          height: 145px;
          width: 100%;
          background: radial-gradient(var(--hvac-mode-color), transparent 50%);
      }

      vt-ha-outlined-icon-button {
        border: 1px solid var(--secondary-text-color);
        border-radius: 100%;
        padding: 0.5em;
        cursor: pointer;
      }

      .content.security_msg, vt-ha-control-circular-slider.security_msg, #modes.security_msg, #presets.security_msg, #vt-control-buttons.security_msg {
        opacity: 0.5;
        filter: blur(5px);
        pointer-events: none;
      }
      

      .security, .messages {
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
        z-index: 2;
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
        z-index: 3;
        direction: var(--direction);
    }
      .container {
          position: relative;
          width: 100%;
          height: 100%;
      }
      vt-ha-control-circular-slider {
        --primary-color: var(--hvac-mode-color);
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
      
      .auto,
      .heat_cool {
        --hvac-mode-color: var(--state-climate-auto-color);
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
      .sleep {
        --mode-color: #2641a3ff !important;
      }
      .fan_only {
        --mode-color: var(--state-climate-fan_only-color);
      }
      .dry {
        --mode-color: var(--state-climate-dry-color);
      }
      .idle {
        --mode-color: var(--state-climate-dry-color);
      }
      .unknown-mode {
        --mode-color: var(--state-unknown-color);
      }

      .window_open {
        --mode-color: #80a7c4 !important;
      }
        
      .overpowering {
        --mode-color: var(--error-color) !important;
      }

      .heat_heating {
        --hvac-mode-color: var(--label-badge-red);
      }

      .heat_idle, .heat_off {
        --hvac-mode-color: var(--label-badge-yellow);
      }

      .cool_cooling {
        --hvac-mode-color: var(--label-badge-blue);
      }

      .cool_idle {
        --hvac-mode-color:rgb(125, 194, 225);
      }

      .off_off, .off_idle {
        --hvac-mode-color: var(--slider-track-color);
      }

      .off_heating {
        --hvac-mode-color: #c7b598ff;
      }

      .off_cooling {
        --hvac-mode-color: #90acb8ff;
      }


      .sleep_off, .sleep_idle {
        --hvac-mode-color: #2641a3ff;
      }

      #modes {
        z-index: 0;
        position: relative;
        display: flex;
        width: auto;
        justify-content: center;
        margin-top: -3em;
        margin-bottom: 1em;
      }

      #presets {
        z-index: 0;
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

      #left-infos {
        z-index: 3;
        position: absolute;
        display: block;
        width: auto;
        justify-content: center;
        padding-bottom: 0.2em;
        left: 0%;
        top: 15%;
      }

      #left-infos > * {
        color: var(--enabled-text-color);
      }

      .left-info-label {
        -webkit-tap-highlight-color: transparent;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        padding: 0px 0px;
        height: 30px;
      }

      .left-info-label input {
        width: 40px;
      }

      #vt-control-buttons {
        z-index: 0;
        position: absolute;
        display: block;
        width: auto;
        justify-content: center;
        padding-bottom: 0.2em;
        left: 90%;
        top: 35%;
      }

      #vt-control-buttons .button {
        z-index: 0;
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
        z-index: 4 !important;
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

      .icon-group {
        cursor: pointer;
        pointer-events: auto;
      }

      .window {
        transition: fill 0.3s ease;
        fill: var(--warning-color);
        cursor: pointer;
        pointer-events: all;
      }

      .auto-start-stop {
        transition: fill 0.3s ease;
        fill: var(--state-icon-color);
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
  `,t([ut({attribute:!1})],ds.prototype,"hass",void 0),t([ut({type:Number})],ds.prototype,"value",void 0),t([pt()],ds.prototype,"_selectTargetTemperature",void 0),t([ut({type:Number})],ds.prototype,"current",void 0),t([ut({type:Number})],ds.prototype,"humidity",void 0),t([ut({type:Number})],ds.prototype,"temperature",void 0),t([ut({type:Number})],ds.prototype,"min",void 0),t([ut({type:Number})],ds.prototype,"max",void 0),t([ut({type:Number})],ds.prototype,"step",void 0),t([ut({type:Number})],ds.prototype,"powerPercent",void 0),t([ut({type:Number})],ds.prototype,"meanCyclePower",void 0),t([ut({type:Number})],ds.prototype,"valveOpenPercent",void 0),t([ut({type:Number})],ds.prototype,"devicePower",void 0),t([ut({type:Number})],ds.prototype,"regulatedTargetTemperature",void 0),t([ut({type:Boolean})],ds.prototype,"isOn",void 0),t([ut({type:Boolean})],ds.prototype,"window",void 0),t([ut({type:Boolean})],ds.prototype,"windowByPass",void 0),t([ut({type:Boolean})],ds.prototype,"presence",void 0),t([ut({type:Boolean})],ds.prototype,"motion",void 0),t([ut({type:Boolean})],ds.prototype,"overpowering",void 0),t([ut({type:Boolean})],ds.prototype,"isDeviceActive",void 0),t([ut({type:Boolean})],ds.prototype,"isSleeping",void 0),t([ut({type:Boolean})],ds.prototype,"isRegulated",void 0),t([ut({type:Boolean})],ds.prototype,"isRecalculateScheduled",void 0),t([ut({type:String})],ds.prototype,"windowState",void 0),t([ut({type:String})],ds.prototype,"windowAutoState",void 0),t([ut({type:String})],ds.prototype,"overpoweringState",void 0),t([ut({type:String})],ds.prototype,"presenceState",void 0),t([ut({type:String})],ds.prototype,"motionState",void 0),t([ut({type:String})],ds.prototype,"safetyState",void 0),t([ut({type:String})],ds.prototype,"status",void 0),t([ut({type:String})],ds.prototype,"hvacMode",void 0),t([ut({type:String})],ds.prototype,"hvacAction",void 0),t([ut({type:String})],ds.prototype,"preset",void 0),t([ut({type:String})],ds.prototype,"autoRegulationMode",void 0),t([ut({type:String})],ds.prototype,"currentAutoFanMode",void 0),t([ut({type:String})],ds.prototype,"autoFanMode",void 0),t([ut({type:String})],ds.prototype,"fanMode",void 0),t([ut({type:String})],ds.prototype,"hvacOffReason",void 0),t([ut({type:Boolean,reflect:!0})],ds.prototype,"dragging",void 0),t([ut({type:String})],ds.prototype,"name",void 0),t([pt()],ds.prototype,"changingHigh",void 0),t([pt()],ds.prototype,"_config",void 0),ds=t([ct("versatile-thermostat-ui-card")],ds);const hs=function(...t){const e="type"===t[0].type,i=t.map((t=>t.schema)),o=Object.assign({},...i);return e?ji(o):Ni(o)}(Ni({index:Ii(Oi()),view_index:Ii(Oi()),view_layout:Hi("any",(()=>!0)),type:Ri()}),Ni({entity:Ii(Ri()),name:Ii(Ri()),icon:Ii(Ri()),autoStartStopEnableEntity:Ii(Ri()),powerEntity:Ii(Ri())}),Ni({disable_name:Ii(Pi()),disable_circle:Ii(Pi()),disable_window:Ii(Pi()),disable_autoStartStop:Ii(Pi()),disable_overpowering:Ii(Pi()),disable_heat:Ii(Pi()),disable_cool:Ii(Pi()),disable_heat_cool:Ii(Pi()),disable_auto:Ii(Pi()),disable_dry:Ii(Pi()),disable_fan_only:Ii(Pi()),disable_off:Ii(Pi()),disable_sleep:Ii(Pi()),disable_safety_warning:Ii(Pi()),disable_power_infos:Ii(Pi()),disable_auto_fan_infos:Ii(Pi()),disable_target_icon:Ii(Pi()),set_current_as_main:Ii(Pi()),eco_temperature:Ii(Oi()),disable_menu:Ii(Pi()),disable_buttons:Ii(Pi())})),us=["icon_color","layout","fill_container","primary_info","secondary_info","icon_type","content_info","use_entity_picture","collapsible_controls","icon_animation"],ps=t=>{var e,i;customElements.get("ha-form")&&(customElements.get("hui-action-editor")||((t,e,i,o)=>{const[n,s,a]=t.split(".",3);return Number(n)>e||Number(n)===e&&(void 0===o?Number(s)>=i:Number(s)>i)||void 0!==o&&Number(n)===e&&Number(s)===i&&Number(a)>=o})(t,2022,11))||null===(e=customElements.get("hui-button-card"))||void 0===e||e.getConfigElement(),customElements.get("ha-entity-picker")||null===(i=customElements.get("hui-entities-card"))||void 0===i||i.getConfigElement()},_s=["autoStartStopEnableEntity","powerEntity","disable_name","disable_circle","disable_window","disable_autoStartStop","disable_overpowering","disable_heat","disable_cool","disable_heat_cool","disable_auto","disable_dry","disable_fan_only","disable_off","disable_sleep","disable_menu","disable_safety_warning","disable_buttons","set_current_as_main","disable_power_infos","disable_auto_fan_infos","disable_target_icon"],ms=gi((()=>[{name:"entity",selector:{entity:{domain:["climate"]}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"autoStartStopEnableEntity",selector:{entity:{domain:["switch"]}}},{name:"powerEntity",selector:{entity:{domain:["sensor","input_number"]}}}]},{type:"grid",name:"",schema:[{name:"disable_name",selector:{boolean:{}}},{name:"disable_circle",selector:{boolean:{}}},{name:"disable_window",selector:{boolean:{}}},{name:"disable_autoStartStop",selector:{boolean:{}}},{name:"disable_overpowering",selector:{boolean:{}}},{name:"disable_heat",selector:{boolean:{}}},{name:"disable_cool",selector:{boolean:{}}},{name:"disable_heat_cool",selector:{boolean:{}}},{name:"disable_auto",selector:{boolean:{}}},{name:"disable_dry",selector:{boolean:{}}},{name:"disable_fan_only",selector:{boolean:{}}},{name:"disable_off",selector:{boolean:{}}},{name:"disable_sleep",selector:{boolean:{}}},{name:"disable_menu",selector:{boolean:{}}},{name:"disable_safety_warning",selector:{boolean:{}}},{name:"disable_buttons",selector:{boolean:{}}},{name:"set_current_as_main",selector:{boolean:{}}},{name:"disable_power_infos",selector:{Boolean:{}}},{name:"disable_auto_fan_infos",selector:{Boolean:{}}},{name:"disable_target_icon",selector:{Boolean:{}}}]}]));let vs=class extends rt{constructor(){super(...arguments),this._computeLabel=t=>{const e=(i=this.hass,function(t){var e;let o=pi(t,null!==(e=null==i?void 0:i.locale.language)&&void 0!==e?e:hi);return o||(o=pi(t,hi)),null!=o?o:t});var i;return us.includes(t.name)?e(`editor.card.generic.${t.name}`):_s.includes(t.name)?e(`editor.card.climate.${t.name}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}}connectedCallback(){super.connectedCallback(),ps(this.hass.connection.haVersion)}setConfig(t){Ti(t,hs),this._config=t}render(){if(!this.hass||!this._config)return B``;const t=ms();return B`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${t}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `}_valueChanged(t){bi(this,"config-changed",{config:t.detail.value}),bi(this,"hass",{config:t.detail.value})}};t([pt()],vs.prototype,"_config",void 0),t([ut({attribute:!1})],vs.prototype,"hass",void 0),vs=t([ct("versatile-thermostat-ui-card-editor")],vs);var fs=Object.freeze({__proto__:null,get ClimateCardEditor(){return vs}});export{ds as VersatileThermostatUi,rs as registerCustomCard};
