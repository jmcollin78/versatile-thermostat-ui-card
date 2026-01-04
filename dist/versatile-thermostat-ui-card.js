function t(t,e,i,o){var a,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new s(i,t,o)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,_=globalThis,m=_.trustedTypes,v=m?m.emptyScript:"",f=_.reactiveElementPolyfillSupport,g=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:a}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const s=o?.call(this);a.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...u(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of o){const o=document.createElement("style"),a=e.litNonce;void 0!==a&&o.setAttribute("nonce",a),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=o,this[o]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,o=!1,a){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(o?a:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[g("elementProperties")]=new Map,k[g("finalized")]=new Map,f?.({ReactiveElement:k}),(_.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,A=$.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,L="?"+S,M=`<${L}>`,E=document,T=()=>E.createComment(""),V=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,P="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,O=/>/g,N=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,I=/"/g,R=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),U=B(1),W=B(2),F=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),q=new WeakMap,K=E.createTreeWalker(E,129);function Y(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,o=[];let a,s=2===e?"<svg>":"",n=H;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===H?"!--"===l[1]?n=D:void 0!==l[1]?n=O:void 0!==l[2]?(R.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=N):void 0!==l[3]&&(n=N):n===N?">"===l[0]?(n=a??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?N:'"'===l[3]?I:j):n===I||n===j?n=N:n===D||n===O?n=H:(n=N,a=void 0);const u=n===N&&t[e+1].startsWith("/>")?" ":"";s+=n===H?i+M:c>=0?(o.push(r),i.slice(0,c)+x+i.slice(c)+S+u):i+S+(-2===c?e:u)}return[Y(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class G{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let a=0,s=0;const n=t.length-1,r=this.parts,[l,c]=X(t,e);if(this.el=G.createElement(l,i),K.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=K.nextNode())&&r.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(x)){const e=c[s++],i=o.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);r.push({type:1,index:a,name:n[2],strings:i,ctor:"."===n[1]?it:"?"===n[1]?ot:"@"===n[1]?at:et}),o.removeAttribute(t)}else t.startsWith(S)&&(r.push({type:6,index:a}),o.removeAttribute(t));if(R.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],T()),K.nextNode(),r.push({type:2,index:++a});o.append(t[e],T())}}}else if(8===o.nodeType)if(o.data===L)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)r.push({type:7,index:a}),t+=S.length-1}a++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,o){if(e===F)return e;let a=void 0!==o?i._$Co?.[o]:i._$Cl;const s=V(e)?void 0:e._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),void 0===s?a=void 0:(a=new s(t),a._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=a:i._$Cl=a),void 0!==a&&(e=J(t,a._$AS(t,e.values),a,o)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??E).importNode(e,!0);K.currentNode=o;let a=K.nextNode(),s=0,n=0,r=i[0];for(;void 0!==r;){if(s===r.index){let e;2===r.type?e=new tt(a,a.nextSibling,this,t):1===r.type?e=new r.ctor(a,r.name,r.strings,this,t):6===r.type&&(e=new st(a,this,t)),this._$AV.push(e),r=i[++n]}s!==r?.index&&(a=K.nextNode(),s++)}return K.currentNode=E,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),V(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Z&&V(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Q(o,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new G(t)),e}T(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const a of t)o===e.length?e.push(i=new tt(this.k(T()),this.k(T()),this,this.options)):i=e[o],i._$AI(a),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(t,e=this,i,o){const a=this.strings;let s=!1;if(void 0===a)t=J(this,t,e,0),s=!V(t)||t!==this._$AH&&t!==F,s&&(this._$AH=t);else{const o=t;let n,r;for(t=a[0],n=0;n<a.length-1;n++)r=J(this,o[i+n],e,n),r===F&&(r=this._$AH[n]),s||=!V(r)||r!==this._$AH[n],r===Z?t=Z:t!==Z&&(t+=(r??"")+a[n+1]),this._$AH[n]=r}s&&!o&&this.O(t)}O(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===Z?void 0:t}}class ot extends et{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class at extends et{constructor(t,e,i,o,a){super(t,e,i,o,a),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??Z)===F)return;const i=this._$AH,o=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Z&&(i===Z||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const nt=$.litHtmlPolyfillSupport;nt?.(G,tt),($.litHtmlVersions??=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class rt extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let a=o._$litPart$;if(void 0===a){const t=i?.renderBefore??null;o._$litPart$=a=new tt(e.insertBefore(T(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const lt=globalThis.litElementPolyfillSupport;lt?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.0.1");
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
 */,dt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},ut=(t=dt,e,i)=>{const{kind:o,metadata:a}=i;let s=globalThis.litPropertyMetadata.get(a);if(void 0===s&&globalThis.litPropertyMetadata.set(a,s=new Map),s.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,a,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){const{name:o}=i;return function(i){const a=this[o];e.call(this,i),this.requestUpdate(o,a,t)}}throw Error("Unsupported decorator location: "+o)};function ht(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function pt(t){return ht({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function mt(t,e){return(i,o,a)=>{const s=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:n}="object"==typeof o?i:a??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return _t(i,o,{get(){if(e){let e=t.call(this);return void 0===e&&(e=s(this),n.call(this,e)),e}return s(this)}})}return _t(i,o,{get(){return s(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=1;class ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ft{constructor(t){if(super(t),t.type!==vt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.it)t in e||(i.remove(t),this.it.delete(t));for(const t in e){const o=!!e[t];o===this.it.has(t)||this.st?.has(t)||(o?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return F}});var bt="M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z",yt="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",wt="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",kt="M5,2V13H8V22L15,10H11L15,2M17,15H19V17H17V15M17,7H19V13H17V7Z",$t="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z",At="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z",Ct="M12 2C7.04 2 3 6.04 3 11C3 14.91 5.5 18.24 9 19.47V22H11V19.94C11.33 20 11.66 20 12 20S12.67 20 13 19.94V22H15V19.47C18.5 18.23 21 14.9 21 11C21 6.04 16.96 2 12 2M14.25 14L11.25 17L9.75 15.5L11 14.25L9.75 13L12.75 10L14.25 11.5L13 12.75L14.25 14M16 9H8V7H16V9Z",xt="M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",St="M18.73,18C15.4,21.69 9.71,22 6,18.64C2.33,15.31 2.04,9.62 5.37,5.93C6.9,4.25 9,3.2 11.27,3C7.96,6.7 8.27,12.39 12,15.71C13.63,17.19 15.78,18 18,18C18.25,18 18.5,18 18.73,18Z",Lt="M17 13V7H19V13H17M17 17V15H19V17H17M13 13V5C13 3.3 11.7 2 10 2S7 3.3 7 5V13C4.8 14.7 4.3 17.8 6 20S10.8 22.7 13 21 15.7 16.2 14 14C13.7 13.6 13.4 13.3 13 13M10 4C10.6 4 11 4.4 11 5V8H9V5C9 4.4 9.4 4 10 4Z",Mt="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",Et="M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z",Tt="M2 4H20V8H18V20H16V8H6V20H4V8H2V4M7 9H15V11H7V9M7 12H15V14H7V12M20 19V17H22V19H20M20 15V10H22V15H20Z";var Vt={version:"version",current:"current"},zt={card:{climate:{autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",disable_circle:"Disable circle",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",allow_lock_toggle:"Allow lock/unlock from card",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Pt={window_open:"Window open",window_bypass:"Bypass window activated",night_mode:"Night mode",eco:"Eco",overpowering:"Overpowering detected",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active",lock_users_active:"User controls locked",lock_automations_active:"Automation changes locked","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",code_error:"Incorrect code",lock:"Lock",unlock:"Unlock",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset"},Ht={common:Vt,editor:zt,extra_states:Pt},Dt=Object.freeze({__proto__:null,common:Vt,default:Ht,editor:zt,extra_states:Pt}),Ot={version:"Version",current:"Aktuell"},Nt={card:{climate:{autoStartStopEnableEntity:"Auto-Start/Stop-Entität",powerEntity:"Entität für den Stromverbrauch",disable_circle:"Kreis deaktivieren",disable_window:"Fenster deaktivieren",disable_autoStartStop:"Auto-Start/Stop deaktivieren",disable_overpowering:"Überverbrauch deaktivieren",disable_heat:"Heizen deaktivieren",disable_cool:"Kühlen deaktivieren",disable_heat_cool:"Heizen/Kühlen deaktivieren",disable_auto:"Auto deaktivieren",disable_fan_only:"Nur-Lüfter deaktivieren",disable_dry:"Entfeuchten deaktivieren",disable_off:"Aus deaktivieren",disable_menu:"Menü deaktivieren",set_current_as_main:"Zieltemperatur mit aktueller Temperatur tauschen",disable_safety_warning:"Sicherheitsmeldungen deaktivieren",disable_buttons:"Plus/Minus-Buttons deaktivieren",disable_power_infos:"Verbrauchsinformationen deaktivieren",disable_auto_fan_infos:"Auto-Lüfter-Informationen deaktivieren",disable_name:"Name deaktivieren",eco_temperature:"Eco-Temperatur",allow_lock_toggle:"Allow lock/unlock from card"}}},jt={window_open:"Fenster offen",window_bypass:"Fenster-Bypass aktiviert",night_mode:"Nachtmodus",eco:"Eco",overpowering:"Überverbrauch erkannt",none:"Manuell",comfort:"Komfort",boost:"Boost",frost:"Frostschutz",power:"Lastabwurf",activity:"Aktivität erkannt",presence:"Anwesenheit erkannt",motion:"Bewegung erkannt",auto_regulation_light:"Leicht",auto_regulation_medium:"Mittel",auto_regulation_strong:"Stark",auto_regulation_slow:"Langsam",auto_regulation_expert:"Experte",auto_fan_mode:"Auto-Lüfter",auto_fan_mode_off:"Keine",auto_fan_none:"Keine",auto_fan_low:"Niedrig",auto_fan_medium:"Mittel",auto_fan_high:"Hoch",auto_fan_turbo:"Turbo",fan_low:"Niedrig",fan_low_mid:"Niedrig-mittel",fan_mid:"Mittel",fan_mid_high:"Mittel-hoch",fan_high:"Hoch",fan_mute:"Leise",fan_turbo:"Turbo",fan_none:"Keine",fan_auto:"Auto",change_message:"Klicken zum Ändern des Presets",toggle_message:"Klicken zum Umschalten",auto_start_stop:"Gestoppt durch Auto-Start/Stop",auto_start_stop_enable:"Aktiviert/deaktiviert Auto-Start/Stop",auto_start_stop_label:"Auto-Start/Stop",temp_unavailable:"-",sleep:"Schlafmodus",lock_users_active:"Benutzersteuerung gesperrt",lock_automations_active:"Automatisierungsänderungen gesperrt",lock:"Sperren",unlock:"Entsperren",code_error:"Falscher Code"},It={common:Ot,editor:Nt,extra_states:jt},Rt=Object.freeze({__proto__:null,common:Ot,default:It,editor:Nt,extra_states:jt}),Bt={version:"version",current:"Actuelle"},Ut={card:{climate:{autoStartStopEnableEntity:"Entité - auto-start/stop",powerEntity:"Entité - puissance consommée",disable_circle:"Désactiver le cercle",disable_window:"Désactiver fenêtre status",disable_autoStartStop:"Désactiver auto-startStop",disable_overpowering:"Désactiver sur-puissance status",disable_heat:"Désactiver mode chauffe",disable_cool:"Désactiver mode clim",disable_heat_cool:"Désactiver mode chauffe/clim",disable_auto:"Désactiver mode auto",disable_fan_only:"Désactiver mode ventilation",disable_dry:"Désactiver mode déshumidification",disable_off:"Désactiver mode arret",disable_sleep:"Désactiver mode endormi",set_current_as_main:"Echanger temperature cible avec temperature locale",disable_safety_warning:"Désactiver sécurité messages",disable_buttons:"Désactiver les boutons +/-",disable_power_infos:"Désactiver les infos de puissance",disable_auto_fan_infos:"Désactiver les infos auto-ventilation",disable_name:"Désactiver le nom",disable_target_icon:"Désactiver l'icône cible",allow_lock_toggle:"Activer le verrouillage/déverrouillage depuis la carte",disable_timed_preset:"Désactiver le champ de durée du preset temporisé",use_manual_duration_input:"Permettre la saisie manuelle de la durée"}}},Wt={window_open:"Fenêtre ouverte",window_bypass:"Bypass fenêtre activé",eco:"Eco",overpowering:"Sur-puissance détectée",none:"Manuel",comfort:"Confort",boost:"Boost",frost:"Hors-gel",power:"Délestage",activity:"Activité",presence:"Présence détectée",motion:"Mouvement détecté",auto_regulation_light:"Légère",auto_regulation_medium:"Moyenne",auto_regulation_strong:"Forte",auto_regulation_slow:"Lente",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"Aucun",auto_fan_none:"Aucun",auto_fan_low:"Bas",auto_fan_medium:"Moyen",auto_fan_high:"Haut",auto_fan_turbo:"Turbo",fan_low:"Bas",fan_low_mid:"Bas-moyen",fan_mid:"Moyen",fan_mid_high:"Moyen-haut",fan_high:"Haut",fan_mute:"Silence",fan_turbo:"Turbo",fan_none:"Aucun",fan_auto:"Auto",change_message:"Clic pour sélectionner le preset",toggle_message:"Clic pour basculer",auto_start_stop:"Stoppé par auto-start/stop",auto_start_stop_enable:"Active/désactive l'auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Endormi","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Temp. pièce",outdoor_temp:"Temp. ext.",safety_warning:"Attention",safety_warning_msg:"défaut de temp.",hvac_off_manual:"Eteint manuellement",hvac_off_auto_start_stop:"Eteint par auto-start/stop",hvac_off_window_detection:"Eteint par détection d'ouverture",hvac_off_sleep_mode:"Eteint par le mode endormi",hvac_off_safety_detection:"Eteint par le mode sécurité",hvac_off_central_mode:"Eteint par le mode central",safety_detected:"Mode sécurité détectée",overpowering_detected:"Sur-puissance détectée",target_temp_window_eco:"Temp. cible : fenêtre éco",target_temp_window_frost:"Temp. cible : fenêtre hors-gel",target_temp_power:"Temp. cible : délestage",target_temp_central_mode:"Temp. cible : mode central",target_temp_activity_detected:"Temp. cible : activité détectée",target_temp_activity_not_detected:"Temp. cible : activité non détectée",target_temp_absence_detected:"Temp. cible : absence détectée",target_temp_timed_preset:"Temporisation d'un preset active",lock_users_active:"Verrouillage utilisateurs actif",lock_automations_active:"Verrouillage automations actif","messages-button":"Pourquoi cet état ?",recalculation_scheduled:"Sous-jacent en cours de mise à jour","window-bypass-button":"Basculer le bypass fenêtre",code_error:"Code incorrect",lock:"Verrouiller",unlock:"Déverrouiller",timed_preset_title:"Durée en minutes (0 = permanent)",timed_preset_active:"Preset temporisé actif",cancel_timed_preset:"Annuler le preset temporisé"},Ft={common:Bt,editor:Ut,extra_states:Wt},Zt=Object.freeze({__proto__:null,common:Bt,default:Ft,editor:Ut,extra_states:Wt}),qt={version:"Версия",current:"Текущая"},Kt={card:{climate:{autoStartStopEnableEntity:"Сущность автоматического старта/стопа",powerEntity:"Сущность потребления энергии",disable_circle:"Отключить круг",disable_window:"Отключить окно",disable_autoStartStop:"Отключить автоматический старт/стоп",disable_overpowering:"Отключить перегрузку",disable_heat:"Отключить обогрев",disable_cool:"Отключить охлаждение",disable_heat_cool:"Отключить обогрев/охлаждение",disable_auto:"Отключить авто",disable_fan_only:"Отключить только вентилятор",disable_dry:"Отключить осушение",disable_off:"Отключить режим выключения",disable_sleep:"Отключить спящий режим",disable_menu:"Отключить меню",set_current_as_main:"Поменять местами целевую и текущую температуру",disable_safety_warning:"Отключить сообщения безопасности",disable_buttons:"Отключить кнопки плюс/минус",disable_power_infos:"Отключить информацию о питании",disable_auto_fan_infos:"Отключить информацию автовентилятора",disable_name:"Отключить название",disable_target_icon:"Отключить иконку цели",allow_lock_toggle:"Разрешить блокировку/разблокировку с карты"}}},Yt={window_open:"Окно открыто",window_bypass:"Обход окна активирован",night_mode:"Ночной режим",eco:"Эко",overpowering:"Обнаружена перегрузка",none:"Ручной",comfort:"Комфорт",boost:"Турбо",frost:"Защита от замерзания",power:"Перегрузка",activity:"Обнаружена активность",presence:"Обнаружено присутствие",motion:"Обнаружено движение",undefined:"Нет",auto_regulation_light:"Легкий",auto_regulation_medium:"Средний",auto_regulation_strong:"Сильный",auto_regulation_slow:"Медленный",auto_regulation_expert:"Экспертный",auto_fan_mode:"Авторежим вентилятора",auto_fan_mode_off:"Нет",auto_fan_none:"Нет",auto_fan_low:"Низкий",auto_fan_medium:"Средний",auto_fan_high:"Высокий",auto_fan_boost:"Турбо",fan_low:"Низкий",fan_low_mid:"Низкий-средний",fan_mid:"Средний",fan_mid_high:"Средний-высокий",fan_high:"Высокий",fan_mute:"Тихий",fan_turbo:"Турбо",fan_none:"Нет",fan_auto:"Авто",change_message:"Клик для смены предустановки",toggle_message:"Клик для переключения",auto_start_stop:"Остановлено авто-старт/стопом",auto_start_stop_enable:"Включить/отключить авто-старт/стоп",auto_start_stop_label:"Авто-старт/стоп",temp_unavailable:"-",sleep:"Сон",minutes:"мин",room_temp:"Температура в помещении",outdoor_temp:"Уличная температура",lock_users_active:"Пользовательское управление заблокировано",lock_automations_active:"Изменения автоматизации заблокированы",code_error:"Неверный код",lock:"Блокировать",unlock:"Разблокировать"},Xt={common:qt,editor:Kt,extra_states:Yt},Gt=Object.freeze({__proto__:null,common:qt,default:Xt,editor:Kt,extra_states:Yt}),Jt={version:"wersja",current:"aktualna"},Qt={card:{climate:{allow_lock_toggle:"Pozwól na blokowanie/odblokowanie z karty",autoStartStopEnableEntity:"Encja autoSTART/autoSTOP",powerEntity:"Encja poboru mocy",disable_circle:"Wyłącz koło",disable_window:"Wyłącz okno",disable_autoStartStop:"Wyłącz autoSTART/autoSTOP",disable_overpowering:"Wyłącz przeciążenie",disable_heat:"Wyłącz tryb grzania",disable_cool:"Wyłącz tryb chłodzenia",disable_heat_cool:"Wyłącz tryb 'grzanie/chłodzenie'",disable_auto:"Wyłącz tryb automatyczny",disable_fan_only:"Wyłącz tryb wentylatora",disable_dry:"Wyłącz tryb osuszania",disable_off:"Wyłącz tryb 'OFF'",disable_sleep:"Wyłącz tryb uśpienia",disable_menu:"Wyłącz menu",set_current_as_main:"Zamień temperaturę docelową z temperaturą pomieszczenia",disable_safety_warning:"Wyłącz ostrzeżenie bezpieczeństwa",disable_buttons:"Wyłącz przyciski +/- (plus/minus)",disable_power_infos:"Wyłącz komunikaty mocowe",disable_auto_fan_infos:"Wyłącz komunikaty autowentylacji",disable_name:"Wyłącz nazwę",disable_target_icon:"Wyłącz ikonę"}}},te={window_open:"Otwarte okno",window_bypass:"Załączone pomijanie okien",night_mode:"Tryb nocny",eco:"Tryb Eko",overpowering:"Wykryte przeciążenie",none:"Ręczny",comfort:"Komfort",boost:"Boost",frost:"Ochrona przed mrozem",power:"Przeciążenie",activity:"Wykryto aktywność",presence:"Wykryto obecność",motion:"Wykryto ruch",undefined:"Brak",auto_regulation_light:"Słaby",auto_regulation_medium:"Średni",auto_regulation_strong:"Silny",auto_regulation_slow:"Powolny",auto_regulation_expert:"Ekspert",auto_fan_mode:"Autowentylacja",auto_fan_mode_off:"Wyłączony",auto_fan_none:"Brak",auto_fan_low:"Niski",auto_fan_medium:"Średni",auto_fan_high:"Wysoki",auto_fan_boost:"Boost",fan_low:"Niski",fan_low_mid:"Niskośredni",fan_mid:"Średni",fan_mid_high:"Średniowysoki",fan_high:"Wysoki",fan_mute:"Cicho",fan_turbo:"Turbo",fan_none:"Brak",fan_auto:"Auto",change_message:"Kliknij aby zmienić preset",toggle_message:"Kliknij aby przełączyć",auto_start_stop:"Zatrzymany przez autoSTART/autoSTOP",auto_start_stop_enable:"Załącz/wyłącz autoSTART/autoSTOP",auto_start_stop_label:"AutoSTART/autoSTOP",temp_unavailable:"-",sleep:"Uśpienie","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Temp. pomieszczenia",outdoor_temp:"Temp. zewnętrzna",safety_warning:"Ostrzeżenie",safety_warning_msg:"Błąd temperatury",hvac_off_manual:"Wyłączony ręcznie",hvac_off_auto_start_stop:"Wyłączony przez autoSTART/autoSTOP",hvac_off_window_detection:"Wyłączony prze otwarcie okna",hvac_off_sleep_mode:"Wyłączony przez tryb uśpienia",hvac_off_safety_detection:"Wyłączony przez tryb bezpieczny",hvac_off_central_mode:"Wyłączony przez tryb główny",safety_detected:"Wykryty tryb bezpieczny",overpowering_detected:"Wykryte przeciążenie",target_temp_window_eco:"Docelowa temp.: Eko okno",target_temp_window_frost:"Docelowa temp.: ochr. przed mrozem okno",target_temp_power:"Docelowa temp.: moc",target_temp_central_mode:"Docelowa temp.: tryb główny",target_temp_activity_detected:"Docelowa temp.: wykryta aktywność",target_temp_activity_not_detected:"Docelowa temp.: brak aktywnści",target_temp_absence_detected:"Docelowa temp.: wykryta nieobecność","messages-button":"Dlaczego taki stan?",recalculation_scheduled:"Aktualizacja urządzeń w toku","window-bypass-button":"Przełącz pomijanie okna",lock_users_active:"Sterowanie użytkownika zablokowane",lock_automations_active:"Zmiany automatyzacji zablokowane",code_error:"Błędny kod",lock:"Zablokuj",unlock:"Odblokuj"},ee={common:Jt,editor:Qt,extra_states:te},ie=Object.freeze({__proto__:null,common:Jt,default:ee,editor:Qt,extra_states:te}),oe={version:"verzia",current:"aktuálny"},ae={card:{climate:{disable_window:"Zakázať okno",disable_overpowering:"Zakázať leto",disable_heat:"Zakázať kúrenie",disable_cool:"Zakázať chladenie",disable_heat_cool:"Zakázať kúrenie/chladenie",disable_auto:"Zakázat automatic",disable_fan_only:"Zakázať režim ventilátora",disable_dry:"Zakázať sušenie",disable_off:"Vypnúť",disable_menu:"Zakázať menu",disable_safety_warning:"Zakázať bezpečnostné správy",disable_buttons:"Zakázať plus/mínus tlačidlá",eco_temperature:"Eco teplota",set_current_as_main:"Vymeňte cieľ za miesta s aktuálnou teplotou",allow_lock_toggle:"Povoliť uzamknutie/odomknutie z karty"}}},se={window_open:"Okno otvorené",night_mode:"Nočný mód",eco:"Eco",overpowering:"Leto",lock_users_active:"Ovládanie používateľa zamknuté",lock_automations_active:"Zmeny automatizácie zamknuté",code_error:"Chybný kód",lock:"Zamknúť",unlock:"Odomknúť"},ne={common:oe,editor:ae,extra_states:se},re={version:"Verzió",current:"Aktuális"},le={card:{climate:{disable_window:"Ablak kikapcsolás",disable_overpowering:"Nyár kikapcsolás",disable_heat:"Fűtés kikacsolás",disable_cool:"Hűtés kikapcsolás",disable_heat_cool:"Fűtés/Hűtés kikapcsolás",disable_auto:"Auto kikapcsolás",disable_fan_only:"Csak ventillátor kikapcsolás",disable_dry:"Szárítás kikapcsolás",disable_off:"Kikapcsolás inaktiválás",eco_temperature:"Eco hőmérséklet",set_current_as_main:"Aktuális hőmérséklet használata",allow_lock_toggle:"Allow lock/unlock from card"}}},ce={window_open:"Ablak nyitva",night_mode:"Éjszakai mód",eco:"Eco",overpowering:"Nyár",lock_users_active:"Felhasználói vezérlők zárolva",lock_automations_active:"Automatizálási változtatások zárolva",code_error:"Rossz kód",lock:"Zárolás",unlock:"Feloldás"},de={common:re,editor:le,extra_states:ce},ue={version:"version",current:"nuværende"},he={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},pe={window_open:"Vindue åben",night_mode:"Nattilstand",eco:"Eco",overpowering:"Overpowering",lock_users_active:"Brugerkontroller låst",lock_automations_active:"Automatiske ændringer låst",code_error:"Forkert kode",lock:"Lås",unlock:"Lås op"},_e={common:ue,editor:he,extra_states:pe},me={version:"version",current:"Actual"},ve={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},fe={window_open:"Ventana abierta",night_mode:"Modo noche",eco:"Eco",overpowering:"Verano",lock_users_active:"Controles de usuario bloqueados",lock_automations_active:"Cambios de automatización bloqueados",code_error:"Código incorrecto",lock:"Bloquear",unlock:"Desbloquear"},ge={common:me,editor:ve,extra_states:fe},be={version:"versiyon",current:"şimdiki"},ye={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},we={window_open:"Pencere açık",night_mode:"Gece modu",eco:"Eco",overpowering:"Yaz",lock_users_active:"Kullanıcı kontrolleri kilitlendi",lock_automations_active:"Otomasyon değişiklikleri kilitlendi",code_error:"Hatalı kod",lock:"Kilitle",unlock:"Kilidi aç"},ke={common:be,editor:ye,extra_states:we},$e={version:"versione",current:"attuale"},Ae={card:{climate:{autoStartStopEnableEntity:"Entità di avvio/arresto automatico",powerEntity:"Entità di consumo energetico",disable_circle:"Disattivare cerchio",disable_window:"Disattivare la finestra",disable_autoStartStop:"Disattivare Avvio/Arresto automatico",disable_overpowering:"Disattivare la sovralimentazione",disable_heat:"Disabilita Riscalda",disable_cool:"Disabilita Raffresca",disable_heat_cool:"Disabilita Riscalda/Raffredda",disable_auto:"Disabilita Automatico",disable_fan_only:"Disabilita Ventilazione",disable_dry:"Disabilita Deumidifica",disable_off:"Disabilita off",disable_sleep:"Disabilita modo riposo",disable_menu:"Disabilita menu",set_current_as_main:"Scambia Setpoint con Temperatura ambiente",disable_safety_warning:"Disabilita i messaggi di sicurezza",disable_buttons:"Disabilita pulsanti Più/Meno",disable_power_infos:"Disabilita Info Potenza",disable_auto_fan_infos:"Disabilita Info auto-fan",disable_name:"Disabilita nome",disable_target_icon:"Disabilita  icona obbiettivo",allow_lock_toggle:"Allow lock/unlock from card"}}},Ce={window_open:"Finestra aperta",window_bypass:"Bypass finestra Attivo",night_mode:"Modalità notte",eco:"Eco",overpowering:"Rilevata Sovrapotenza",none:"Manuale",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Sovrapotenza",activity:"Rilevata Attività",presence:"Rilevata Presenza",motion:"Rilevato motimento",undefined:"Nulla",auto_regulation_light:"Leggero",auto_regulation_medium:"Medio",auto_regulation_strong:"Forte",auto_regulation_slow:"Lento",auto_regulation_expert:"Esperto",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"Nulla",auto_fan_none:"Nulla",auto_fan_low:"Basso",auto_fan_medium:"Medio",auto_fan_high:"Alto",auto_fan_boost:"Boost",fan_low:"Basso",fan_low_mid:"Medio-basso",fan_mid:"Medio",fan_mid_high:"Medio-alto",fan_high:"Alto",fan_mute:"Silenzioso",fan_turbo:"Turbo",fan_none:"Nulla",fan_auto:"Auto",change_message:"Click per cambio preimpostazione",toggle_message:"Click per commutare",auto_start_stop:"Fermato da auto-start/stop",auto_start_stop_enable:"Abilita/disabilita auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Riposo",lock_users_active:"Controlli utente bloccati",lock_automations_active:"Modifiche automazioni bloccate",code_error:"Codice errato",lock:"Blocca",unlock:"Sblocca"},xe={common:$e,editor:Ae,extra_states:Ce},Se={version:"versão",current:"actual"},Le={card:{climate:{disable_window:"Desactivar Janela",disable_overpowering:"Desactivar Verão",disable_heat:"Desactivar Aquecimento",disable_cool:"Desactivar Arrefecimento",disable_heat_cool:"Desactivar Aquecimento/Arrefecimento",disable_auto:"Desactivar Auto",disable_fan_only:"Desactivar Ventilação",disable_dry:"Desactivar Secagem",disable_off:"Desactivar Off",eco_temperature:"Modo Eco",set_current_as_main:"Mudar para a temperatura local actual",allow_lock_toggle:"Allow lock/unlock from card"}}},Me={window_open:"Janela Aberta",night_mode:"Modo Noturno",eco:"Eco",overpowering:"Verão",lock_users_active:"Controlos de utilizador bloqueados",lock_automations_active:"Alterações de automação bloqueadas",code_error:"Código incorreto",lock:"Bloquear",unlock:"Desbloquear"},Ee={common:Se,editor:Le,extra_states:Me},Te={version:"版本",current:"当前"},Ve={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},ze={window_open:"窗户打开",night_mode:"夜间模式",eco:"节能",overpowering:"夏季",lock_users_active:"用户控制已锁定",lock_automations_active:"自动化更改已锁定",code_error:"代码错误",lock:"锁定",unlock:"解锁"},Pe={common:Te,editor:Ve,extra_states:ze},He={version:"версія",current:"поточний"},De={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},Oe={window_open:"Вікно відчинено",night_mode:"Нічний режим",eco:"Економія",overpowering:"Літо",lock_users_active:"Керування користувача заблоковано",lock_automations_active:"Зміни автоматизації заблоковані",code_error:"Невірний код",lock:"Блокувати",unlock:"Розблокувати"},Ne={common:He,editor:De,extra_states:Oe},je={version:"έκδοση",current:"τρέχουσα"},Ie={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},Re={window_open:"Παράθυρο ανοικτό",night_mode:"Λειτουργία νυκτός",eco:"Εξοικονόμηση",overpowering:"Καλοκαίρι",lock_users_active:"Έλεγχοι χρήστη κλειδωμένοι",lock_automations_active:"Αλλαγές αυτοματισμών κλειδωμένες",code_error:"Λάθος κωδικός",lock:"Κλείδωμα",unlock:"Ξεκλείδωμα"},Be={common:je,editor:Ie,extra_states:Re},Ue={version:"versie",current:"huidig"},We={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},Fe={window_open:"Raam open",night_mode:"Nacht modus",eco:"Eco",overpowering:"Zomer",lock_users_active:"Gebruikersbediening vergrendeld",lock_automations_active:"Automatisatie wijzigingen vergrendeld",code_error:"Foute code",lock:"Vergrendelen",unlock:"Ontgrendelen"},Ze={common:Ue,editor:We,extra_states:Fe},qe={version:"versjon",current:"nåværende"},Ke={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},Ye={window_open:"Vindu åpent",night_mode:"Nattmodus",eco:"Eco",overpowering:"Sommer",lock_users_active:"Brukerkontroller låst",lock_automations_active:"Automatiseringsendringer låst",code_error:"Feil kode",lock:"Lås",unlock:"Lås opp"},Xe={common:qe,editor:Ke,extra_states:Ye},Ge={version:"verze",current:"aktuální"},Je={card:{climate:{disable_window:"Zakázat okno",disable_overpowering:"Zakázat léto",disable_heat:"Zakázat topení",disable_cool:"Zakázat chlazení",disable_heat_cool:"Zakázat topení/chlazení",disable_auto:"Zakázať automatic",disable_fan_only:"Zakázat pouze ventilátor",disable_dry:"Zakázat sušení",disable_off:"Zakázat vypnuto",disable_menu:"Zakázat menu",disable_safety_warning:"Zakázat bezpečnostní oznámení",disable_buttons:"Zakázat tlačítka plus/minus",eco_temperature:"Eco teplota",set_current_as_main:"Prohodit místa cílovoé a aktáalní teploty",allow_lock_toggle:"Allow lock/unlock from card"}}},Qe={window_open:"okno otevřeno",night_mode:"Noční režim",eco:"Eco",overpowering:"Léto",lock_users_active:"Uživatelské ovládání zamčeno",lock_automations_active:"Změny automatizace zamčeny",code_error:"Chybný kód",lock:"Zamknout",unlock:"Odemknout"},ti={common:Ge,editor:Je,extra_states:Qe},ei={version:"različica",current:"trenutno"},ii={card:{climate:{allow_lock_toggle:"Dovoli zaklepanje/odklepanje iz kartice"}}},oi={window_open:"Okno odprto",night_mode:"Nočni način",eco:"Eko",overpowering:"Poletje",lock_users_active:"Uporabniške kontrole zaklenjene",lock_automations_active:"Spremembe avtomatizacije zaklenjene",code_error:"Napačna koda",lock:"Zakleni",unlock:"Odkleni"},ai={common:ei,editor:ii,extra_states:oi},si={version:"version",current:"Nuvarande"},ni={window_open:"Fönster öppet",night_mode:"Nattläge",eco:"Eco",overpowering:"Sommar",lock_users_active:"Användarkontroller låsta",lock_automations_active:"Automationsändringar låsta",code_error:"Fel kod",lock:"Lås",unlock:"Lås upp"},ri={common:si,extra_states:ni},li={version:"версия",currrent:"текущий"},ci={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},di={window_open:"Отворен прозорец",night_mode:"Нощен режим",eco:"Екологичен режим",overpowering:"Лято",lock_users_active:"Потребителските контроли са заключени",lock_automations_active:"Промените от автоматизации са заключени",code_error:"Грешен код",lock:"Заключване",unlock:"Отключване"},ui={common:li,editor:ci,extra_states:di},hi={version:"version",current:"Nykyinen"},pi={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},_i={window_open:"Ikkuna auki",night_mode:"Yötila",eco:"Eco",overpowering:"Kesä",lock_users_active:"Käyttäjän säädöt lukittu",lock_automations_active:"Automaation muutokset lukittu",code_error:"Virheellinen koodi",lock:"Lukitse",unlock:"Avaa lukitus"},mi={common:hi,editor:pi,extra_states:_i},vi={version:"versiune",current:"curent"},fi={card:{climate:{allow_lock_toggle:"Permite blocarea/deblocarea din card"}}},gi={window_open:"Fereastră deschisă",night_mode:"Mod noapte",eco:"Eco",overpowering:"Vară",lock_users_active:"Comenzi utilizator blocate",lock_automations_active:"Modificări automatizări blocate",code_error:"Cod incorect",lock:"Blocare",unlock:"Deblocare"},bi={common:vi,editor:fi,extra_states:gi},yi={version:"versió",current:"Actual"},wi={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},ki={window_open:"Finestra oberta",night_mode:"Mode nocturn",eco:"Eco",overpowering:"Estiu",lock_users_active:"Controls d'usuari bloquejats",lock_automations_active:"Canvis d'automatització bloquejats",code_error:"Codi incorrecte",lock:"Bloquejar",unlock:"Desbloquejar"},$i={common:yi,editor:wi,extra_states:ki};const Ai={en:Dt,de:Rt,fr:Zt,ru:Gt,sk:Object.freeze({__proto__:null,common:oe,default:ne,editor:ae,extra_states:se}),hu:Object.freeze({__proto__:null,common:re,default:de,editor:le,extra_states:ce}),pl:ie,da:Object.freeze({__proto__:null,common:ue,default:_e,editor:he,extra_states:pe}),es:Object.freeze({__proto__:null,common:me,default:ge,editor:ve,extra_states:fe}),tr:Object.freeze({__proto__:null,common:be,default:ke,editor:ye,extra_states:we}),it:Object.freeze({__proto__:null,common:$e,default:xe,editor:Ae,extra_states:Ce}),pt:Object.freeze({__proto__:null,common:Se,default:Ee,editor:Le,extra_states:Me}),cn:Object.freeze({__proto__:null,common:Te,default:Pe,editor:Ve,extra_states:ze}),uk:Object.freeze({__proto__:null,common:He,default:Ne,editor:De,extra_states:Oe}),el:Object.freeze({__proto__:null,common:je,default:Be,editor:Ie,extra_states:Re}),nl:Object.freeze({__proto__:null,common:Ue,default:Ze,editor:We,extra_states:Fe}),no:Object.freeze({__proto__:null,common:qe,default:Xe,editor:Ke,extra_states:Ye}),cs:Object.freeze({__proto__:null,common:Ge,default:ti,editor:Je,extra_states:Qe}),sl:Object.freeze({__proto__:null,common:ei,default:ai,editor:ii,extra_states:oi}),sv:Object.freeze({__proto__:null,common:si,default:ri,extra_states:ni}),bg:Object.freeze({__proto__:null,common:li,default:ui,editor:ci,extra_states:di}),fi:Object.freeze({__proto__:null,common:hi,default:mi,editor:pi,extra_states:_i}),ro:Object.freeze({__proto__:null,common:vi,default:bi,editor:fi,extra_states:gi}),ca:Object.freeze({__proto__:null,common:yi,default:$i,editor:wi,extra_states:ki})},Ci="en";function xi({hass:t,string:e,search:i="",replace:o=""}){var a;const s=null!==(a=null==t?void 0:t.locale.language)&&void 0!==a?a:Ci;let n;try{n=e.split(".").reduce(((t,e)=>t[e]),Ai[s])}catch(t){n=e.split(".").reduce(((t,e)=>t[e]),Ai.en)}return void 0===n&&(n=e.split(".").reduce(((t,e)=>t[e]),Ai.en)),""!==i&&""!==o&&(n=n.replace(i,o)),n}function Si(t,e){try{return t.split(".").reduce(((t,e)=>t[e]),Ai[e])}catch(t){return}}var Li,Mi,Ei=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function Ti(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(o=t[i],a=e[i],!(o===a||Ei(o)&&Ei(a)))return!1;var o,a;return!0}function Vi(t,e){void 0===e&&(e=Ti);var i=null;function o(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(i&&i.lastThis===this&&e(o,i.lastArgs))return i.lastResult;var s=t.apply(this,o);return i={lastResult:s,lastArgs:o,lastThis:this},s}return o.clear=function(){i=null},o}Vi((t=>new Intl.DateTimeFormat(t.language,{weekday:"long",month:"long",day:"numeric"}))),Vi((t=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"}))),Vi((t=>new Intl.DateTimeFormat(t.language,{year:"numeric",month:"numeric",day:"numeric"}))),Vi((t=>new Intl.DateTimeFormat(t.language,{day:"numeric",month:"short"}))),Vi((t=>new Intl.DateTimeFormat(t.language,{month:"long",year:"numeric"}))),Vi((t=>new Intl.DateTimeFormat(t.language,{month:"long"}))),Vi((t=>new Intl.DateTimeFormat(t.language,{year:"numeric"}))),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Li||(Li={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Mi||(Mi={}));const zi=Vi((t=>{if(t.time_format===Mi.language||t.time_format===Mi.system){const e=t.time_format===Mi.language?t.language:void 0,i=(new Date).toLocaleString(e);return i.includes("AM")||i.includes("PM")}return t.time_format===Mi.am_pm}));Vi((t=>new Intl.DateTimeFormat("en"!==t.language||zi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:zi(t)?"numeric":"2-digit",minute:"2-digit",hour12:zi(t)}))),Vi((t=>new Intl.DateTimeFormat("en"!==t.language||zi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:zi(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:zi(t)}))),Vi((t=>new Intl.DateTimeFormat("en"!==t.language||zi(t)?t.language:"en-u-hc-h23",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:zi(t)}))),Vi((t=>new Intl.DateTimeFormat("en"!==t.language||zi(t)?t.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:zi(t)}))),Vi((t=>new Intl.DateTimeFormat("en"!==t.language||zi(t)?t.language:"en-u-hc-h23",{hour:zi(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:zi(t)}))),Vi((t=>new Intl.DateTimeFormat("en"!==t.language||zi(t)?t.language:"en-u-hc-h23",{weekday:"long",hour:zi(t)?"numeric":"2-digit",minute:"2-digit",hour12:zi(t)})));const Pi=(t,e,i,o)=>{o=o||{},i=null==i?{}:i;const a=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return a.detail=i,t.dispatchEvent(a),a},Hi=(t,e,i)=>Math.min(Math.max(t,e),i),Di=(t,e,i)=>{const o=e?(t=>{switch(t.number_format){case Li.comma_decimal:return["en-US","en"];case Li.decimal_comma:return["de","es","it"];case Li.space_comma:return["fr","sv","cs"];case Li.system:return;default:return t.language}})(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==Li.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(o,Oi(t,i)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,Oi(t,i)).format(Number(t))}return"string"==typeof t?t:`${((t,e=2)=>Math.round(t*10**e)/10**e)(t,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`},Oi=(t,e)=>{const i=Object.assign({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){const e=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=e,i.maximumFractionDigits=e}return i};class Ni extends TypeError{constructor(t,e){let i;const{message:o,explanation:a,...s}=t,{path:n}=t,r=0===n.length?o:`At path: ${n.join(".")} -- ${o}`;super(a??r),null!=a&&(this.cause=r),Object.assign(this,s),this.name=this.constructor.name,this.failures=()=>i??(i=[t,...e()])}}function ji(t){return"object"==typeof t&&null!=t}function Ii(t){return"symbol"==typeof t?t.toString():"string"==typeof t?JSON.stringify(t):`${t}`}function Ri(t,e,i,o){if(!0===t)return;!1===t?t={}:"string"==typeof t&&(t={message:t});const{path:a,branch:s}=e,{type:n}=i,{refinement:r,message:l=`Expected a value of type \`${n}\`${r?` with refinement \`${r}\``:""}, but received: \`${Ii(o)}\``}=t;return{value:o,type:n,refinement:r,key:a[a.length-1],path:a,branch:s,...t,message:l}}function*Bi(t,e,i,o){(function(t){return ji(t)&&"function"==typeof t[Symbol.iterator]})(t)||(t=[t]);for(const a of t){const t=Ri(a,e,i,o);t&&(yield t)}}function*Ui(t,e,i={}){const{path:o=[],branch:a=[t],coerce:s=!1,mask:n=!1}=i,r={path:o,branch:a};if(s&&(t=e.coercer(t,r),n&&"type"!==e.type&&ji(e.schema)&&ji(t)&&!Array.isArray(t)))for(const i in t)void 0===e.schema[i]&&delete t[i];let l="valid";for(const o of e.validator(t,r))o.explanation=i.message,l="not_valid",yield[o,void 0];for(let[c,d,u]of e.entries(t,r)){const e=Ui(d,u,{path:void 0===c?o:[...o,c],branch:void 0===c?a:[...a,d],coerce:s,mask:n,message:i.message});for(const i of e)i[0]?(l=null!=i[0].refinement?"not_refined":"not_valid",yield[i[0],void 0]):s&&(d=i[1],void 0===c?t=d:t instanceof Map?t.set(c,d):t instanceof Set?t.add(d):ji(t)&&(void 0!==d||c in t)&&(t[c]=d))}if("not_valid"!==l)for(const o of e.refiner(t,r))o.explanation=i.message,l="not_refined",yield[o,void 0];"valid"===l&&(yield[void 0,t])}class Wi{constructor(t){const{type:e,schema:i,validator:o,refiner:a,coercer:s=(t=>t),entries:n=function*(){}}=t;this.type=e,this.schema=i,this.entries=n,this.coercer=s,this.validator=o?(t,e)=>Bi(o(t,e),e,this,t):()=>[],this.refiner=a?(t,e)=>Bi(a(t,e),e,this,t):()=>[]}assert(t,e){return Fi(t,this,e)}create(t,e){return function(t,e,i){const o=Zi(t,e,{coerce:!0,message:i});if(o[0])throw o[0];return o[1]}(t,this,e)}is(t){return function(t,e){const i=Zi(t,e);return!i[0]}(t,this)}mask(t,e){return function(t,e,i){const o=Zi(t,e,{coerce:!0,mask:!0,message:i});if(o[0])throw o[0];return o[1]}(t,this,e)}validate(t,e={}){return Zi(t,this,e)}}function Fi(t,e,i){const o=Zi(t,e,{message:i});if(o[0])throw o[0]}function Zi(t,e,i={}){const o=Ui(t,e,i),a=function(t){const{done:e,value:i}=t.next();return e?void 0:i}(o);if(a[0]){const t=new Ni(a[0],(function*(){for(const t of o)t[0]&&(yield t[0])}));return[t,void 0]}return[void 0,a[1]]}function qi(t,e){return new Wi({type:t,schema:null,validator:e})}function Ki(t){return new Wi({type:"array",schema:t,*entries(e){if(t&&Array.isArray(e))for(const[i,o]of e.entries())yield[i,o,t]},coercer:t=>Array.isArray(t)?t.slice():t,validator:t=>Array.isArray(t)||`Expected an array value, but received: ${Ii(t)}`})}function Yi(){return qi("boolean",(t=>"boolean"==typeof t))}function Xi(t){const e=Ii(t),i=typeof t;return new Wi({type:"literal",schema:"string"===i||"number"===i||"boolean"===i?t:null,validator:i=>i===t||`Expected the literal \`${e}\`, but received: ${Ii(i)}`})}function Gi(){return qi("number",(t=>"number"==typeof t&&!isNaN(t)||`Expected a number, but received: ${Ii(t)}`))}function Ji(t){const e=t?Object.keys(t):[],i=qi("never",(()=>!1));return new Wi({type:"object",schema:t||null,*entries(o){if(t&&ji(o)){const a=new Set(Object.keys(o));for(const i of e)a.delete(i),yield[i,o[i],t[i]];for(const t of a)yield[t,o[t],i]}},validator:t=>ji(t)||`Expected an object, but received: ${Ii(t)}`,coercer:t=>ji(t)?{...t}:t})}function Qi(t){return new Wi({...t,validator:(e,i)=>void 0===e||t.validator(e,i),refiner:(e,i)=>void 0===e||t.refiner(e,i)})}function to(){return qi("string",(t=>"string"==typeof t||`Expected a string, but received: ${Ii(t)}`))}function eo(t){const e=Object.keys(t);return new Wi({type:"type",schema:t,*entries(i){if(ji(i))for(const o of e)yield[o,i[o],t[o]]},validator:t=>ji(t)||`Expected an object, but received: ${Ii(t)}`,coercer:t=>ji(t)?{...t}:t})}function io(t){const e=t.map((t=>t.type)).join(" | ");return new Wi({type:"union",schema:null,coercer(e){for(const i of t){const[t,o]=i.validate(e,{coerce:!0});if(!t)return o}return e},validator(i,o){const a=[];for(const e of t){const[...t]=Ui(i,e,o),[s]=t;if(!s[0])return[];for(const[e]of t)e&&a.push(e)}return[`Expected the value to satisfy a union of \`${e}\`, but received: ${Ii(i)}`,...a]}})}const oo=Ji({user:to()}),ao=io([Yi(),Ji({text:Qi(to()),excemptions:Qi(Ki(oo))})]),so=Ji({action:Xi("url"),url_path:to(),confirmation:Qi(ao)}),no=Ji({action:Xi("call-service"),service:to(),service_data:Qi(Ji()),data:Qi(Ji()),target:Qi(Ji({entity_id:Qi(io([to(),Ki(to())])),device_id:Qi(io([to(),Ki(to())])),area_id:Qi(io([to(),Ki(to())]))})),confirmation:Qi(ao)}),ro=Ji({action:Xi("navigate"),navigation_path:to(),confirmation:Qi(ao)}),lo=eo({action:Xi("fire-dom-event")}),co=Ji({action:function(t){const e={},i=t.map((t=>Ii(t))).join();for(const i of t)e[i]=i;return new Wi({type:"enums",schema:e,validator:e=>t.includes(e)||`Expected one of \`${i}\`, but received: ${Ii(e)}`})}(["none","toggle","more-info","call-service","url","navigate"]),confirmation:Qi(ao)});var uo;uo=t=>{if(t&&"object"==typeof t&&"action"in t)switch(t.action){case"call-service":return no;case"fire-dom-event":return lo;case"navigate":return ro;case"url":return so}return co},new Wi({type:"dynamic",schema:null,*entries(t,e){const i=uo(t,e);yield*i.entries(t,e)},validator:(t,e)=>uo(t,e).validator(t,e),coercer:(t,e)=>uo(t,e).coercer(t,e),refiner:(t,e)=>uo(t,e).refiner(t,e)}),n`
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
`;const ho=([[t,e],[i,o]],[a,s])=>[t*a+e*s,i*a+o*s],po=([t,e],[i,o])=>[t+i,e+o],_o=t=>t/180*Math.PI,mo=t=>{const{x:e,y:i,r:o,start:a,end:s,rotate:n=0}=t,r=e,l=i,c=o,d=o,u=_o(a),h=(_o(s)-u)%(2*Math.PI),p=_o(n),_=(t=>[[Math.cos(t),-Math.sin(t)],[Math.sin(t),Math.cos(t)]])(p),[m,v]=po(ho(_,[c*Math.cos(u),d*Math.sin(u)]),[r,l]),[f,g]=po(ho(_,[c*Math.cos(u+h),d*Math.sin(u+h)]),[r,l]),b=h>Math.PI?1:0,y=h>0?1:0;return["M",m,v,"A",c,d,p/(2*Math.PI)*360,b,y,f,g].join(" ")};function vo(){return vo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},vo.apply(this,arguments)}function fo(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function go(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var bo,yo="function"!=typeof Object.assign?function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(null!=o)for(var a in o)o.hasOwnProperty(a)&&(e[a]=o[a])}return e}:Object.assign,wo=["","webkit","Moz","MS","ms","o"],ko="undefined"==typeof document?{style:{}}:document.createElement("div"),$o=Math.round,Ao=Math.abs,Co=Date.now;function xo(t,e){for(var i,o,a=e[0].toUpperCase()+e.slice(1),s=0;s<wo.length;){if((o=(i=wo[s])?i+a:e)in t)return o;s++}}bo="undefined"==typeof window?{}:window;var So=xo(ko.style,"touchAction"),Lo=void 0!==So;var Mo="compute",Eo="auto",To="manipulation",Vo="none",zo="pan-x",Po="pan-y",Ho=function(){if(!Lo)return!1;var t={},e=bo.CSS&&bo.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){return t[i]=!e||bo.CSS.supports("touch-action",i)})),t}(),Do="ontouchstart"in bo,Oo=void 0!==xo(bo,"PointerEvent"),No=Do&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),jo="touch",Io="mouse",Ro=25,Bo=1,Uo=4,Wo=8,Fo=1,Zo=2,qo=4,Ko=8,Yo=16,Xo=Zo|qo,Go=Ko|Yo,Jo=Xo|Go,Qo=["x","y"],ta=["clientX","clientY"];function ea(t,e,i){var o;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!==t.length)for(o=0;o<t.length;)e.call(i,t[o],o,t),o++;else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)}function ia(t,e){return"function"==typeof t?t.apply(e&&e[0]||void 0,e):t}function oa(t,e){return t.indexOf(e)>-1}var aa=function(){function t(t,e){this.manager=t,this.set(e)}var e=t.prototype;return e.set=function(t){t===Mo&&(t=this.compute()),Lo&&this.manager.element.style&&Ho[t]&&(this.manager.element.style[So]=t),this.actions=t.toLowerCase().trim()},e.update=function(){this.set(this.manager.options.touchAction)},e.compute=function(){var t=[];return ea(this.manager.recognizers,(function(e){ia(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(oa(t,Vo))return Vo;var e=oa(t,zo),i=oa(t,Po);return e&&i?Vo:e||i?e?zo:Po:oa(t,To)?To:Eo}(t.join(" "))},e.preventDefaults=function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var o=this.actions,a=oa(o,Vo)&&!Ho[Vo],s=oa(o,Po)&&!Ho[Po],n=oa(o,zo)&&!Ho[zo];if(a){var r=1===t.pointers.length,l=t.distance<2,c=t.deltaTime<250;if(r&&l&&c)return}if(!n||!s)return a||s&&i&Xo||n&&i&Go?this.preventSrc(e):void 0}},e.preventSrc=function(t){this.manager.session.prevented=!0,t.preventDefault()},t}();function sa(t,e){for(;t;){if(t===e)return!0;t=t.parentNode}return!1}function na(t){var e=t.length;if(1===e)return{x:$o(t[0].clientX),y:$o(t[0].clientY)};for(var i=0,o=0,a=0;a<e;)i+=t[a].clientX,o+=t[a].clientY,a++;return{x:$o(i/e),y:$o(o/e)}}function ra(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:$o(t.pointers[i].clientX),clientY:$o(t.pointers[i].clientY)},i++;return{timeStamp:Co(),pointers:e,center:na(e),deltaX:t.deltaX,deltaY:t.deltaY}}function la(t,e,i){i||(i=Qo);var o=e[i[0]]-t[i[0]],a=e[i[1]]-t[i[1]];return Math.sqrt(o*o+a*a)}function ca(t,e,i){i||(i=Qo);var o=e[i[0]]-t[i[0]],a=e[i[1]]-t[i[1]];return 180*Math.atan2(a,o)/Math.PI}function da(t,e){return t===e?Fo:Ao(t)>=Ao(e)?t<0?Zo:qo:e<0?Ko:Yo}function ua(t,e,i){return{x:e/t||0,y:i/t||0}}function ha(t,e){var i=t.session,o=e.pointers,a=o.length;i.firstInput||(i.firstInput=ra(e)),a>1&&!i.firstMultiple?i.firstMultiple=ra(e):1===a&&(i.firstMultiple=!1);var s=i.firstInput,n=i.firstMultiple,r=n?n.center:s.center,l=e.center=na(o);e.timeStamp=Co(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=ca(r,l),e.distance=la(r,l),function(t,e){var i=e.center,o=t.offsetDelta||{},a=t.prevDelta||{},s=t.prevInput||{};e.eventType!==Bo&&s.eventType!==Uo||(a=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},o=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=a.x+(i.x-o.x),e.deltaY=a.y+(i.y-o.y)}(i,e),e.offsetDirection=da(e.deltaX,e.deltaY);var c,d,u=ua(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=Ao(u.x)>Ao(u.y)?u.x:u.y,e.scale=n?(c=n.pointers,la((d=o)[0],d[1],ta)/la(c[0],c[1],ta)):1,e.rotation=n?function(t,e){return ca(e[1],e[0],ta)+ca(t[1],t[0],ta)}(n.pointers,o):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,o,a,s,n=t.lastInterval||e,r=e.timeStamp-n.timeStamp;if(e.eventType!==Wo&&(r>Ro||void 0===n.velocity)){var l=e.deltaX-n.deltaX,c=e.deltaY-n.deltaY,d=ua(r,l,c);o=d.x,a=d.y,i=Ao(d.x)>Ao(d.y)?d.x:d.y,s=da(l,c),t.lastInterval=e}else i=n.velocity,o=n.velocityX,a=n.velocityY,s=n.direction;e.velocity=i,e.velocityX=o,e.velocityY=a,e.direction=s}(i,e);var h,p=t.element,_=e.srcEvent;sa(h=_.composedPath?_.composedPath()[0]:_.path?_.path[0]:_.target,p)&&(p=h),e.target=p}function pa(t,e,i){var o=i.pointers.length,a=i.changedPointers.length,s=e&Bo&&o-a==0,n=e&(Uo|Wo)&&o-a==0;i.isFirst=!!s,i.isFinal=!!n,s&&(t.session={}),i.eventType=e,ha(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function _a(t){return t.trim().split(/\s+/g)}function ma(t,e,i){ea(_a(e),(function(e){t.addEventListener(e,i,!1)}))}function va(t,e,i){ea(_a(e),(function(e){t.removeEventListener(e,i,!1)}))}function fa(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||window}var ga=function(){function t(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){ia(t.options.enable,[t])&&i.handler(e)},this.init()}var e=t.prototype;return e.handler=function(){},e.init=function(){this.evEl&&ma(this.element,this.evEl,this.domHandler),this.evTarget&&ma(this.target,this.evTarget,this.domHandler),this.evWin&&ma(fa(this.element),this.evWin,this.domHandler)},e.destroy=function(){this.evEl&&va(this.element,this.evEl,this.domHandler),this.evTarget&&va(this.target,this.evTarget,this.domHandler),this.evWin&&va(fa(this.element),this.evWin,this.domHandler)},t}();function ba(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var o=0;o<t.length;){if(i&&t[o][i]==e||!i&&t[o]===e)return o;o++}return-1}var ya={pointerdown:Bo,pointermove:2,pointerup:Uo,pointercancel:Wo,pointerout:Wo},wa={2:jo,3:"pen",4:Io,5:"kinect"},ka="pointerdown",$a="pointermove pointerup pointercancel";bo.MSPointerEvent&&!bo.PointerEvent&&(ka="MSPointerDown",$a="MSPointerMove MSPointerUp MSPointerCancel");var Aa=function(t){function e(){var i,o=e.prototype;return o.evEl=ka,o.evWin=$a,(i=t.apply(this,arguments)||this).store=i.manager.session.pointerEvents=[],i}return fo(e,t),e.prototype.handler=function(t){var e=this.store,i=!1,o=t.type.toLowerCase().replace("ms",""),a=ya[o],s=wa[t.pointerType]||t.pointerType,n=s===jo,r=ba(e,t.pointerId,"pointerId");a&Bo&&(0===t.button||n)?r<0&&(e.push(t),r=e.length-1):a&(Uo|Wo)&&(i=!0),r<0||(e[r]=t,this.callback(this.manager,a,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(r,1))},e}(ga);function Ca(t){return Array.prototype.slice.call(t,0)}function xa(t,e,i){for(var o=[],a=[],s=0;s<t.length;){var n=e?t[s][e]:t[s];ba(a,n)<0&&o.push(t[s]),a[s]=n,s++}return i&&(o=e?o.sort((function(t,i){return t[e]>i[e]})):o.sort()),o}var Sa={touchstart:Bo,touchmove:2,touchend:Uo,touchcancel:Wo},La=function(t){function e(){var i;return e.prototype.evTarget="touchstart touchmove touchend touchcancel",(i=t.apply(this,arguments)||this).targetIds={},i}return fo(e,t),e.prototype.handler=function(t){var e=Sa[t.type],i=Ma.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:jo,srcEvent:t})},e}(ga);function Ma(t,e){var i,o,a=Ca(t.touches),s=this.targetIds;if(e&(2|Bo)&&1===a.length)return s[a[0].identifier]=!0,[a,a];var n=Ca(t.changedTouches),r=[],l=this.target;if(o=a.filter((function(t){return sa(t.target,l)})),e===Bo)for(i=0;i<o.length;)s[o[i].identifier]=!0,i++;for(i=0;i<n.length;)s[n[i].identifier]&&r.push(n[i]),e&(Uo|Wo)&&delete s[n[i].identifier],i++;return r.length?[xa(o.concat(r),"identifier",!0),r]:void 0}var Ea={mousedown:Bo,mousemove:2,mouseup:Uo},Ta=function(t){function e(){var i,o=e.prototype;return o.evEl="mousedown",o.evWin="mousemove mouseup",(i=t.apply(this,arguments)||this).pressed=!1,i}return fo(e,t),e.prototype.handler=function(t){var e=Ea[t.type];e&Bo&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=Uo),this.pressed&&(e&Uo&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:Io,srcEvent:t}))},e}(ga),Va=2500;function za(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY},o=this.lastTouches;this.lastTouches.push(i);setTimeout((function(){var t=o.indexOf(i);t>-1&&o.splice(t,1)}),Va)}}function Pa(t,e){t&Bo?(this.primaryTouch=e.changedPointers[0].identifier,za.call(this,e)):t&(Uo|Wo)&&za.call(this,e)}function Ha(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,o=0;o<this.lastTouches.length;o++){var a=this.lastTouches[o],s=Math.abs(e-a.x),n=Math.abs(i-a.y);if(s<=25&&n<=25)return!0}return!1}var Da=function(){return function(t){function e(e,i){var o;return(o=t.call(this,e,i)||this).handler=function(t,e,i){var a=i.pointerType===jo,s=i.pointerType===Io;if(!(s&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(a)Pa.call(go(go(o)),e,i);else if(s&&Ha.call(go(go(o)),i))return;o.callback(t,e,i)}},o.touch=new La(o.manager,o.handler),o.mouse=new Ta(o.manager,o.handler),o.primaryTouch=null,o.lastTouches=[],o}return fo(e,t),e.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},e}(ga)}();function Oa(t,e,i){return!!Array.isArray(t)&&(ea(t,i[e],i),!0)}var Na=32,ja=1;function Ia(t,e){var i=e.manager;return i?i.get(t):t}function Ra(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}var Ba=function(){function t(t){void 0===t&&(t={}),this.options=vo({enable:!0},t),this.id=ja++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var e=t.prototype;return e.set=function(t){return yo(this.options,t),this.manager&&this.manager.touchAction.update(),this},e.recognizeWith=function(t){if(Oa(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Ia(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},e.dropRecognizeWith=function(t){return Oa(t,"dropRecognizeWith",this)||(t=Ia(t,this),delete this.simultaneous[t.id]),this},e.requireFailure=function(t){if(Oa(t,"requireFailure",this))return this;var e=this.requireFail;return-1===ba(e,t=Ia(t,this))&&(e.push(t),t.requireFailure(this)),this},e.dropRequireFailure=function(t){if(Oa(t,"dropRequireFailure",this))return this;t=Ia(t,this);var e=ba(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},e.hasRequireFailures=function(){return this.requireFail.length>0},e.canRecognizeWith=function(t){return!!this.simultaneous[t.id]},e.emit=function(t){var e=this,i=this.state;function o(i){e.manager.emit(i,t)}i<8&&o(e.options.event+Ra(i)),o(e.options.event),t.additionalEvent&&o(t.additionalEvent),i>=8&&o(e.options.event+Ra(i))},e.tryEmit=function(t){if(this.canEmit())return this.emit(t);this.state=Na},e.canEmit=function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},e.recognize=function(t){var e=yo({},t);if(!ia(this.options.enable,[this,e]))return this.reset(),void(this.state=Na);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},e.process=function(t){},e.getTouchAction=function(){},e.reset=function(){},t}(),Ua=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,vo({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},e))||this).pTime=!1,i.pCenter=!1,i._timer=null,i._input=null,i.count=0,i}fo(e,t);var i=e.prototype;return i.getTouchAction=function(){return[To]},i.process=function(t){var e=this,i=this.options,o=t.pointers.length===i.pointers,a=t.distance<i.threshold,s=t.deltaTime<i.time;if(this.reset(),t.eventType&Bo&&0===this.count)return this.failTimeout();if(a&&s&&o){if(t.eventType!==Uo)return this.failTimeout();var n=!this.pTime||t.timeStamp-this.pTime<i.interval,r=!this.pCenter||la(this.pCenter,t.center)<i.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,r&&n?this.count+=1:this.count=1,this._input=t,0===this.count%i.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.interval),2):8}return Na},i.failTimeout=function(){var t=this;return this._timer=setTimeout((function(){t.state=Na}),this.options.interval),Na},i.reset=function(){clearTimeout(this._timer)},i.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},e}(Ba),Wa=function(t){function e(e){return void 0===e&&(e={}),t.call(this,vo({pointers:1},e))||this}fo(e,t);var i=e.prototype;return i.attrTest=function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},i.process=function(t){var e=this.state,i=t.eventType,o=6&e,a=this.attrTest(t);return o&&(i&Wo||!a)?16|e:o||a?i&Uo?8|e:2&e?4|e:2:Na},e}(Ba);function Fa(t){return t===Yo?"down":t===Ko?"up":t===Zo?"left":t===qo?"right":""}var Za=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,vo({event:"pan",threshold:10,pointers:1,direction:Jo},e))||this).pX=null,i.pY=null,i}fo(e,t);var i=e.prototype;return i.getTouchAction=function(){var t=this.options.direction,e=[];return t&Xo&&e.push(Po),t&Go&&e.push(zo),e},i.directionTest=function(t){var e=this.options,i=!0,o=t.distance,a=t.direction,s=t.deltaX,n=t.deltaY;return a&e.direction||(e.direction&Xo?(a=0===s?Fo:s<0?Zo:qo,i=s!==this.pX,o=Math.abs(t.deltaX)):(a=0===n?Fo:n<0?Ko:Yo,i=n!==this.pY,o=Math.abs(t.deltaY))),t.direction=a,i&&o>e.threshold&&a&e.direction},i.attrTest=function(t){return Wa.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},i.emit=function(e){this.pX=e.deltaX,this.pY=e.deltaY;var i=Fa(e.direction);i&&(e.additionalEvent=this.options.event+i),t.prototype.emit.call(this,e)},e}(Wa),qa=function(t){function e(e){return void 0===e&&(e={}),t.call(this,vo({event:"swipe",threshold:10,velocity:.3,direction:Xo|Go,pointers:1},e))||this}fo(e,t);var i=e.prototype;return i.getTouchAction=function(){return Za.prototype.getTouchAction.call(this)},i.attrTest=function(e){var i,o=this.options.direction;return o&(Xo|Go)?i=e.overallVelocity:o&Xo?i=e.overallVelocityX:o&Go&&(i=e.overallVelocityY),t.prototype.attrTest.call(this,e)&&o&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers===this.options.pointers&&Ao(i)>this.options.velocity&&e.eventType&Uo},i.emit=function(t){var e=Fa(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)},e}(Wa),Ka=function(t){function e(e){return void 0===e&&(e={}),t.call(this,vo({event:"pinch",threshold:0,pointers:2},e))||this}fo(e,t);var i=e.prototype;return i.getTouchAction=function(){return[Vo]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)},i.emit=function(e){if(1!==e.scale){var i=e.scale<1?"in":"out";e.additionalEvent=this.options.event+i}t.prototype.emit.call(this,e)},e}(Wa),Ya=function(t){function e(e){return void 0===e&&(e={}),t.call(this,vo({event:"rotate",threshold:0,pointers:2},e))||this}fo(e,t);var i=e.prototype;return i.getTouchAction=function(){return[Vo]},i.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)},e}(Wa),Xa=function(t){function e(e){var i;return void 0===e&&(e={}),(i=t.call(this,vo({event:"press",pointers:1,time:251,threshold:9},e))||this)._timer=null,i._input=null,i}fo(e,t);var i=e.prototype;return i.getTouchAction=function(){return[Eo]},i.process=function(t){var e=this,i=this.options,o=t.pointers.length===i.pointers,a=t.distance<i.threshold,s=t.deltaTime>i.time;if(this._input=t,!a||!o||t.eventType&(Uo|Wo)&&!s)this.reset();else if(t.eventType&Bo)this.reset(),this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),i.time);else if(t.eventType&Uo)return 8;return Na},i.reset=function(){clearTimeout(this._timer)},i.emit=function(t){8===this.state&&(t&&t.eventType&Uo?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=Co(),this.manager.emit(this.options.event,this._input)))},e}(Ba),Ga={domEvents:!1,touchAction:Mo,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Ja=[[Ya,{enable:!1}],[Ka,{enable:!1},["rotate"]],[qa,{direction:Xo}],[Za,{direction:Xo},["swipe"]],[Ua],[Ua,{event:"doubletap",taps:2},["tap"]],[Xa]];function Qa(t,e){var i,o=t.element;o.style&&(ea(t.options.cssProps,(function(a,s){i=xo(o.style,s),e?(t.oldCssProps[i]=o.style[i],o.style[i]=a):o.style[i]=t.oldCssProps[i]||""})),e||(t.oldCssProps={}))}var ts=function(){function t(t,e){var i,o=this;this.options=yo({},Ga,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(Oo?Aa:No?La:Do?Da:Ta))(i,pa),this.touchAction=new aa(this,this.options.touchAction),Qa(this,!0),ea(this.options.recognizers,(function(t){var e=o.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}var e=t.prototype;return e.set=function(t){return yo(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},e.stop=function(t){this.session.stopped=t?2:1},e.recognize=function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var o=this.recognizers,a=e.curRecognizer;(!a||a&&8&a.state)&&(e.curRecognizer=null,a=null);for(var s=0;s<o.length;)i=o[s],2===e.stopped||a&&i!==a&&!i.canRecognizeWith(a)?i.reset():i.recognize(t),!a&&14&i.state&&(e.curRecognizer=i,a=i),s++}},e.get=function(t){if(t instanceof Ba)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event===t)return e[i];return null},e.add=function(t){if(Oa(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},e.remove=function(t){if(Oa(t,"remove",this))return this;var e=this.get(t);if(t){var i=this.recognizers,o=ba(i,e);-1!==o&&(i.splice(o,1),this.touchAction.update())}return this},e.on=function(t,e){if(void 0===t||void 0===e)return this;var i=this.handlers;return ea(_a(t),(function(t){i[t]=i[t]||[],i[t].push(e)})),this},e.off=function(t,e){if(void 0===t)return this;var i=this.handlers;return ea(_a(t),(function(t){e?i[t]&&i[t].splice(ba(i[t],e),1):delete i[t]})),this},e.emit=function(t,e){this.options.domEvents&&function(t,e){var i=document.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var o=0;o<i.length;)i[o](e),o++}},e.destroy=function(){this.element&&Qa(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},t}(),es={touchstart:Bo,touchmove:2,touchend:Uo,touchcancel:Wo},is=function(t){function e(){var i,o=e.prototype;return o.evTarget="touchstart",o.evWin="touchstart touchmove touchend touchcancel",(i=t.apply(this,arguments)||this).started=!1,i}return fo(e,t),e.prototype.handler=function(t){var e=es[t.type];if(e===Bo&&(this.started=!0),this.started){var i=os.call(this,t,e);e&(Uo|Wo)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:jo,srcEvent:t})}},e}(ga);function os(t,e){var i=Ca(t.touches),o=Ca(t.changedTouches);return e&(Uo|Wo)&&(i=xa(i.concat(o),"identifier",!0)),[i,o]}function as(t,e,i){var o="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",a=window.console&&(window.console.warn||window.console.log);return a&&a.call(window.console,o,i),t.apply(this,arguments)}}var ss=as((function(t,e,i){for(var o=Object.keys(e),a=0;a<o.length;)(!i||i&&void 0===t[o[a]])&&(t[o[a]]=e[o[a]]),a++;return t}),"extend","Use `assign`."),ns=as((function(t,e){return ss(t,e,!0)}),"merge","Use `assign`.");function rs(t,e,i){var o,a=e.prototype;(o=t.prototype=Object.create(a)).constructor=t,o._super=a,i&&yo(o,i)}function ls(t,e){return function(){return t.apply(e,arguments)}}(function(){var t=function(t,e){return void 0===e&&(e={}),new ts(t,vo({recognizers:Ja.concat()},e))};return t.VERSION="2.0.17-rc",t.DIRECTION_ALL=Jo,t.DIRECTION_DOWN=Yo,t.DIRECTION_LEFT=Zo,t.DIRECTION_RIGHT=qo,t.DIRECTION_UP=Ko,t.DIRECTION_HORIZONTAL=Xo,t.DIRECTION_VERTICAL=Go,t.DIRECTION_NONE=Fo,t.DIRECTION_DOWN=Yo,t.INPUT_START=Bo,t.INPUT_MOVE=2,t.INPUT_END=Uo,t.INPUT_CANCEL=Wo,t.STATE_POSSIBLE=1,t.STATE_BEGAN=2,t.STATE_CHANGED=4,t.STATE_ENDED=8,t.STATE_RECOGNIZED=8,t.STATE_CANCELLED=16,t.STATE_FAILED=Na,t.Manager=ts,t.Input=ga,t.TouchAction=aa,t.TouchInput=La,t.MouseInput=Ta,t.PointerEventInput=Aa,t.TouchMouseInput=Da,t.SingleTouchInput=is,t.Recognizer=Ba,t.AttrRecognizer=Wa,t.Tap=Ua,t.Pan=Za,t.Swipe=qa,t.Pinch=Ka,t.Rotate=Ya,t.Press=Xa,t.on=ma,t.off=va,t.each=ea,t.merge=ns,t.extend=ss,t.bindFn=ls,t.assign=yo,t.inherit=rs,t.bindFn=ls,t.prefixed=xo,t.toArray=Ca,t.inArray=ba,t.uniqueArray=xa,t.splitStr=_a,t.boolOrFn=ia,t.hasParent=sa,t.addEventListeners=ma,t.removeEventListeners=va,t.defaults=yo({},Ga,{preset:Ja}),t})().defaults;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cs=270;const ds=new Set(["ArrowRight","ArrowUp","ArrowLeft","ArrowDown","PageUp","PageDown","Home","End"]);let us=class extends rt{constructor(){super(...arguments),this.disabled=!1,this.step=1,this.min=0,this.max=100,this._localValue=this.value,this._localLow=this.low,this._localHigh=this.high,this._getPercentageFromEvent=t=>{const e=this._slider.getBoundingClientRect(),i=2*(t.center.x-e.left-e.width/2)/e.width,o=2*(t.center.y-e.top-e.height/2)/e.height,[,a]=function(t,e){return[Math.sqrt(t*t+e*e),Math.atan2(e,t)]}(i,o),s=(a/(2*Math.PI)*360+45-135+360)%360-45;return Math.max(Math.min(s/cs,1),0)}}_valueToPercentage(t){return(Hi(t,this.min,this.max)-this.min)/(this.max-this.min)}_percentageToValue(t){return(this.max-this.min)*t+this.min}_steppedValue(t){return Math.round(t/this.step)*this.step}_boundedValue(t){var e,i;const o="high"===this._activeSlider?Math.min(null!==(e=this._localLow)&&void 0!==e?e:this.max):this.min,a="low"===this._activeSlider?Math.max(null!==(i=this._localHigh)&&void 0!==i?i:this.min):this.max;return Math.min(Math.max(t,o),a)}firstUpdated(t){super.firstUpdated(t),this._setupListeners()}updated(t){super.updated(t),this._activeSlider||(t.has("value")&&(this._localValue=this.value),t.has("low")&&(this._localLow=this.low),t.has("high")&&(this._localHigh=this.high))}connectedCallback(){super.connectedCallback(),this._setupListeners()}disconnectedCallback(){super.disconnectedCallback()}_findActiveSlider(t){var e,i;if(!this.dual)return"value";const o=Math.max(null!==(e=this._localLow)&&void 0!==e?e:this.min,this.min),a=Math.min(null!==(i=this._localHigh)&&void 0!==i?i:this.max,this.max);if(o>=t)return"low";if(a<=t)return"high";return Math.abs(t-o)<=Math.abs(t-a)?"low":"high"}_setActiveValue(t){switch(this._activeSlider){case"high":this._localHigh=t;break;case"low":this._localLow=t;break;case"value":this._localValue=t}}_getActiveValue(){switch(this._activeSlider){case"high":return this._localHigh;case"low":return this._localLow;case"value":return this._localValue}}_setupListeners(){this._interaction&&!this._mc&&(this._mc=new ts(this._interaction,{inputClass:Da}),this._mc.add(new Za({direction:Jo,enable:!0,threshold:0})),this._mc.add(new Ua({event:"singletap"})),this._mc.on("pan",(t=>{t.srcEvent.stopPropagation(),t.srcEvent.preventDefault()})),this._mc.on("panstart",(t=>{var e,i;if(this.disabled)return;const o=this._getPercentageFromEvent(t),a=this._percentageToValue(o);this._activeSlider=this._findActiveSlider(a),this._lastSlider=this._activeSlider,null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("#slider"))||void 0===i||i.focus()})),this._mc.on("pancancel",(()=>{this.disabled||(this._activeSlider=void 0)})),this._mc.on("panmove",(t=>{if(this.disabled)return;const e=this._getPercentageFromEvent(t),i=this._percentageToValue(e),o=this._boundedValue(i);this._setActiveValue(o);const a=this._steppedValue(o);this._activeSlider&&Pi(this,`${this._activeSlider}-changing`,{value:a})})),this._mc.on("panend",(t=>{if(this.disabled)return;const e=this._getPercentageFromEvent(t),i=this._percentageToValue(e),o=this._boundedValue(i),a=this._steppedValue(o);this._setActiveValue(a),this._activeSlider&&(Pi(this,`${this._activeSlider}-changing`,{value:void 0}),Pi(this,`${this._activeSlider}-changed`,{value:a})),this._activeSlider=void 0})),this._mc.on("singletap",(t=>{var e,i;if(this.disabled)return;const o=this._getPercentageFromEvent(t),a=this._percentageToValue(o);this._activeSlider=this._findActiveSlider(a);const s=this._boundedValue(a),n=this._steppedValue(s);this._setActiveValue(n),this._activeSlider&&(Pi(this,`${this._activeSlider}-changing`,{value:void 0}),Pi(this,`${this._activeSlider}-changed`,{value:n})),this._lastSlider=this._activeSlider,null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("#slider"))||void 0===i||i.focus(),this._activeSlider=void 0})))}get _tenPercentStep(){return Math.max(this.step,(this.max-this.min)/10)}_handleKeyDown(t){var e,i,o;if(!ds.has(t.code))return;t.preventDefault(),this._lastSlider&&(null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById(this._lastSlider))||void 0===i||i.focus()),this._activeSlider=null!==(o=this._lastSlider)&&void 0!==o?o:t.currentTarget.id,this._lastSlider=void 0;const a=this._getActiveValue();switch(t.code){case"ArrowRight":case"ArrowUp":this._setActiveValue(this._boundedValue((null!=a?a:this.min)+this.step));break;case"ArrowLeft":case"ArrowDown":this._setActiveValue(this._boundedValue((null!=a?a:this.min)-this.step));break;case"PageUp":this._setActiveValue(this._steppedValue(this._boundedValue((null!=a?a:this.min)+this._tenPercentStep)));break;case"PageDown":this._setActiveValue(this._steppedValue(this._boundedValue((null!=a?a:this.min)-this._tenPercentStep)));break;case"Home":this._setActiveValue(this._boundedValue(this.min));break;case"End":this._setActiveValue(this._boundedValue(this.max))}Pi(this,`${this._activeSlider}-changing`,{value:this._getActiveValue()}),this._activeSlider=void 0}_handleKeyUp(t){ds.has(t.code)&&(this._activeSlider=t.currentTarget.id,t.preventDefault(),Pi(this,`${this._activeSlider}-changing`,{value:void 0}),Pi(this,`${this._activeSlider}-changed`,{value:this._getActiveValue()}),this._activeSlider=void 0)}destroyListeners(){this._mc&&(this._mc.destroy(),this._mc=void 0)}_strokeCircleDashArc(t){return this._strokeDashArc(t,t)}_strokeDashArc(t,e){const i=this._valueToPercentage(t),o=this._valueToPercentage(e),a=290*Math.PI*cs/360,s=Math.max((o-i)*a,0);return[`${s} ${a-s}`,`-${i*a-.5}`]}renderArc(t,e,i){var o,a;if(this.disabled)return Z;const s=mo({x:0,y:0,start:0,end:cs,r:145}),n="end"===i?this.max:this.min,r=null!==(o=this.current)&&void 0!==o?o:n,l=null!=e?e:n,c="end"===i?l<=r:"start"===i&&r<=l,d=c?"end"===i?this._strokeDashArc(l,r):this._strokeDashArc(r,l):this._strokeCircleDashArc(l),u="full"===i?this._strokeDashArc(this.min,this.max):"end"===i?this._strokeDashArc(l,n):this._strokeDashArc(n,l),h=this._strokeCircleDashArc(l),p=null!=this.current&&this.current<=this.max&&this.current>=this.min&&(c||"full"===this.mode)?this._strokeCircleDashArc(this.current):void 0;return W`
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
            stroke-dasharray=${d[0]}
            stroke-dashoffset=${d[1]}
            role="slider"
            tabindex="0"
            aria-valuemin=${this.min}
            aria-valuemax=${this.max}
            aria-valuenow=${null!=this._localValue?this._steppedValue(this._localValue):void 0}
            aria-disabled=${this.disabled}
            aria-label=${(t=>t??Z)(null!==(a=this.lowLabel)&&void 0!==a?a:this.label)}
            @keydown=${this._handleKeyDown}
            @keyup=${this._handleKeyUp}
          />
          ${p?W`
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
            stroke-dasharray=${h[0]}
            stroke-dashoffset=${h[1]}
          />
          <path
            class="target"
            d=${s}
            stroke-dasharray=${h[0]}
            stroke-dashoffset=${h[1]}
          />
        </g>
      `}render(){const t=mo({x:0,y:0,start:0,end:cs,r:145}),e=this.dual?this._localLow:this._localValue,i=this._localHigh,o=this.current,a=o?this._strokeCircleDashArc(o):void 0;return U`
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
              ${a?W`
                    <path
                      class="current"
                      d=${t}
                      stroke-dasharray=${a[0]}
                      stroke-dashoffset=${a[1]}
                    />
                  `:Z}
              ${null!=e?this.renderArc(this.dual?"low":"value",e,!this.dual&&this.mode||"start"):Z}
              ${this.dual&&null!=i?this.renderArc("high",i,"end"):Z}
            </g>
          </g>
        </svg>
        <slot></slot>
      `}static get styles(){return n`
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
      `}};t([ht({type:Boolean,reflect:!0})],us.prototype,"disabled",void 0),t([ht({type:Boolean})],us.prototype,"dual",void 0),t([ht({type:String})],us.prototype,"mode",void 0),t([ht({type:Boolean})],us.prototype,"inactive",void 0),t([ht({type:String})],us.prototype,"label",void 0),t([ht({type:String,attribute:"low-label"})],us.prototype,"lowLabel",void 0),t([ht({type:String,attribute:"high-label"})],us.prototype,"highLabel",void 0),t([ht({type:Number})],us.prototype,"value",void 0),t([ht({type:Number})],us.prototype,"low",void 0),t([ht({type:Number})],us.prototype,"high",void 0),t([ht({type:Number})],us.prototype,"current",void 0),t([ht({type:Number})],us.prototype,"step",void 0),t([ht({type:Number})],us.prototype,"min",void 0),t([ht({type:Number})],us.prototype,"max",void 0),t([pt()],us.prototype,"_localValue",void 0),t([pt()],us.prototype,"_localLow",void 0),t([pt()],us.prototype,"_localHigh",void 0),t([pt()],us.prototype,"_activeSlider",void 0),t([pt()],us.prototype,"_lastSlider",void 0),t([mt("#slider")],us.prototype,"_slider",void 0),t([mt("#interaction")],us.prototype,"_interaction",void 0),us=t([ct("vt-ha-control-circular-slider")],us);const hs={auto:"M18,11V12.5C21.19,12.5 23.09,16.05 21.33,18.71L20.24,17.62C21.06,15.96 19.85,14 18,14V15.5L15.75,13.25L18,11M18,22V20.5C14.81,20.5 12.91,16.95 14.67,14.29L15.76,15.38C14.94,17.04 16.15,19 18,19V17.5L20.25,19.75L18,22M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H14C13.36,20.45 12.86,19.77 12.5,19H5V8H19V10.59C19.71,10.7 20.39,10.94 21,11.31V5A2,2 0 0,0 19,3Z",heat_cool:"M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z",heat:"M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z",cool:"M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z",off:"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",fan_only:wt,dry:Mt,window_open:Et,windowBypass:Tt,presence:$t,motion:xt,eco:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z",comfort:"M12.5 7C12.5 5.89 13.39 5 14.5 5H18C19.1 5 20 5.9 20 7V9.16C18.84 9.57 18 10.67 18 11.97V14H12.5V7M6 11.96V14H11.5V7C11.5 5.89 10.61 5 9.5 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96M20.66 10.03C19.68 10.19 19 11.12 19 12.12V15H5V12C5 10.9 4.11 10 3 10S1 10.9 1 12V17C1 18.1 1.9 19 3 19V21H5V19H19V21H21V19C22.1 19 23 18.1 23 17V12C23 10.79 21.91 9.82 20.66 10.03Z",boost:"M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z",frost:"M14.46 9.41L11 7.38V5.12L12.71 3.41L11.29 2L10 3.29L8.71 2L7.29 3.41L9 5.12V7.38L6.5 8.82L4.5 7.69L3.92 5.36L2 5.88L2.47 7.65L.7 8.12L1.22 10.05L3.55 9.43L5.55 10.56V13.45L3.55 14.58L1.22 13.96L.7 15.89L2.47 16.36L2 18.12L3.93 18.64L4.55 16.31L6.55 15.18L9 16.62V18.88L7.29 20.59L8.71 22L10 20.71L11.29 22L12.7 20.59L11 18.88V16.62L14.46 14.61M7.5 10.56L10 9.11L12.5 10.56V13.44L10 14.89L7.5 13.44M19 5C17.89 5 17 5.89 17 7V13.76C16.36 14.33 16 15.15 16 16C16 17.66 17.34 19 19 19S22 17.66 22 16C22 15.15 21.64 14.33 21 13.77V7C21 5.89 20.11 5 19 5M19 6C19.55 6 20 6.45 20 7V8H18V7C18 6.45 18.45 6 19 6",activity:xt,power:"M12 3L2 12H5V20H19V12H22L12 3M11.5 18V14H9L12.5 7V11H15L11.5 18Z",flashAlert:kt,temperature:"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",humidity:Mt,ok:bt,thermometerAlert:Lt,none:"M23 17C23 20.31 20.31 23 17 23V21.5C19.5 21.5 21.5 19.5 21.5 17H23M1 7C1 3.69 3.69 1 7 1V2.5C4.5 2.5 2.5 4.5 2.5 7H1M8 4.32L3.41 8.92C.19 12.14 .19 17.37 3.41 20.59S11.86 23.81 15.08 20.59L22.15 13.5C22.64 13.03 22.64 12.24 22.15 11.75C21.66 11.26 20.87 11.26 20.38 11.75L15.96 16.17L15.25 15.46L21.79 8.92C22.28 8.43 22.28 7.64 21.79 7.15S20.5 6.66 20 7.15L14.19 13L13.5 12.27L20.37 5.38C20.86 4.89 20.86 4.1 20.37 3.61S19.09 3.12 18.6 3.61L11.71 10.5L11 9.8L16.5 4.32C17 3.83 17 3.04 16.5 2.55S15.22 2.06 14.73 2.55L7.11 10.17C8.33 11.74 8.22 14 6.78 15.45L6.07 14.74C7.24 13.57 7.24 11.67 6.07 10.5L5.72 10.15L9.79 6.08C10.28 5.59 10.28 4.8 9.79 4.31C9.29 3.83 8.5 3.83 8 4.32Z",auto_regulation_mode:Ct,power_percent:Ct,mean_power_cycle:"M7,2V13H10V22L17,10H13L17,2H7Z",valve_open_percent:"M22 13V21H20V19H16.58C15.81 20.76 14.05 22 12 22S8.19 20.76 7.42 19H4V21H2V13H4V15H7.43C7.93 13.85 8.85 12.93 10 12.42V11H8V9H16V11H14V12.42C15.15 12.93 16.07 13.85 16.57 15H20V13H22M17 2H7C6.45 2 6 2.45 6 3S6.45 4 7 4H10V5H11V8H13V5H14V4H17C17.55 4 18 3.55 18 3S17.55 2 17 2Z",regulated_target_temperature:"M12 14C11.7 13.6 11.4 13.3 11 13V5C11 3.3 9.7 2 8 2S5 3.3 5 5V13C2.8 14.7 2.3 17.8 4 20S8.8 22.7 11 21 13.7 16.2 12 14M9 8H7V5C7 4.5 7.5 4 8 4S9 4.5 9 5V8M18 3H16L12.8 12H14.7L15.4 10H18.6L19.3 12H21.2L18 3M15.8 8.7L17 5L18.2 8.7H15.8Z",auto_fan_mode:"M12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2M12 11C12.54 11 13 11.45 13 12C13 12.55 12.54 13 12 13C11.43 13 11 12.55 11 12C11 11.45 11.43 11 12 11M18 15C16.89 15 16 15.9 16 17V23H18V21H20V23H22V17C22 15.9 21.1 15 20 15M18 17H20V19H18Z",auto_fan_mode_off:"M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z",fan_mode:wt,power_sleep:St,sleep:"M23,12H17V10L20.39,6H17V4H23V6L19.62,10H23V12M15,16H9V14L12.39,10H9V8H15V10L11.62,14H15V16M7,20H1V18L4.39,14H1V12H7V14L3.62,18H7V20Z"},ps="none",_s="off",ms="sleep",vs="auto_fan_none",fs="cooling",gs="heating",bs={auto_fan_none:"None",auto_fan_low:"Low",auto_fan_mid:"Medium",auto_fan_high:"High",auto_fan_turbo:"Turbo"};function ys(t){const e=window;e.customCards=e.customCards||[],e.customCards.push(Object.assign(Object.assign({},t),{preview:!0}))}function ws(t){const e=(new Date).getTime()-t.getTime();return Math.floor(e/6e4)}function ks(t,e){const i=Math.round(t*e)/e;return parseFloat(i.toFixed(e))}console.info("%c  VersatileThermostatUI-CARD \n%c  version: 2.2.1    ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),ys({type:"versatile-thermostat-ui-card",name:"Versatile Thermostat Climate Card",description:"Card for climate entity"});let $s=class extends rt{_highChanged(t){if(this.isUserLocked)return;const e=t.detail.value;if(isNaN(e))return;const i=t.type.replace("-changed","");this.value=Object.assign(Object.assign({},this.value),{[i]:e}),this._selectTargetTemperature=i,this._callService(i)}_highChanging(t){if(this.isUserLocked)return;const e=t.detail.value;if(isNaN(e))return;const i=t.type.replace("-changing","");this.value=Object.assign(Object.assign({},this.value),{[i]:e}),this._selectTargetTemperature=i,this._updateDisplay(),this._vibrate(20)}_callService(t){this.isUserLocked||("high"!==t&&"low"!==t?this.hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,temperature:this.value.value}):this.hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,target_temp_low:this.value.low,target_temp_high:this.value.high}))}_handleButton(t){var e;if(this.isUserLocked)return;const i=t.currentTarget.target,o=t.currentTarget.step,a="high"===i?this.max:this.min;let s=null!==(e=this.value[i])&&void 0!==e?e:a;s+=o,s=Hi(s,this.min,this.max),"high"===i&&null!=this.value.low&&(s=Hi(s,this.value.low,this.max)),"low"===i&&null!=this.value.high&&(s=Hi(s,this.min,this.value.high)),this.value=Object.assign(Object.assign({},this.value),{[i]:s}),this._updateDisplay(),this._vibrate(40),this._debouncedCallService(i)}_handleSelectTemp(t){if(this.isUserLocked)return;const e=t.currentTarget.target;this._selectTargetTemperature=e,this._updateDisplay(),this._vibrate(40)}setConfig(t){this._config=Object.assign({tap_action:{action:"toggle"},hold_action:{action:"more-info"}},t)}getCardSize(){return 1}_vibrate(t){try{navigator.vibrate(t)}catch(t){}}firstUpdated(t){this._init=!1}shouldUpdate(t){return void 0!==t.has("_config")&&void 0!==t.get("_config")&&(this._hasOverpowering=!1,this._hasWindow=!1,this._hasWindowByPass=!1,this._hasMotion=!1,this._hasPresence=!1,this._hasAutoStartStop=!1,this._isAutoStartStopEnabled=!1,this.humidity=0),void 0!==t.get("hass")&&(this._init=!1),!0}updated(t){var e,i;super.updated(t),this._firstRender=!1,t.has("showDigicodeModal")&&(this.showDigicodeModal?window.addEventListener("keydown",this._handleKeyDown):window.removeEventListener("keydown",this._handleKeyDown)),null===(i=null===(e=null==this?void 0:this.shadowRoot)||void 0===e?void 0:e.querySelector(".security"))||void 0===i||i.addEventListener("click",(()=>{var t,e,i,o;null===(e=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.querySelector(".security"))||void 0===e||e.remove(),null===(o=null===(i=null==this?void 0:this.shadowRoot)||void 0===i?void 0:i.querySelector(".content"))||void 0===o||o.classList.remove("security_msg"),this._vibrate(2)}))}_willUpdatePower(){let t,e,i;this._externalPowerInfos=[],this._config.powerEntity&&(t=this.hass.states[this._config.powerEntity],e=Number(t.state),i=t.attributes.unit_of_measurement),e&&this._externalPowerInfos.push({name:"mean_power_cycle",value:e,unit:i,class:"vt-power-color"})}willUpdate(t){var e,i,o,a,s,n,r,l,c,d,u,h,p,_,m,v,f,g,b,y,w,k,$,A,C,x,S,L,M,E,T,V,z,P,H,D,O,N,j,I,R,B,U,W,F,Z,q,K,Y,X,G,J;if(!this.hass||!this._config||!t.has("hass")&&!t.has("_config"))return;const Q=this._config.entity;this._willUpdatePower();const tt=this.hass.states[Q];if(!tt)return;const et=t.get("hass");if(!et||et.states[Q]!==tt){if(!this._config||!this.hass||!this._config.entity)return;this.stateObj=tt;const t=this.stateObj.attributes,Q=this.stateObj.state;this._isLockConfigured=!0===(null==t?void 0:t.is_lock_configured),(null==t?void 0:t.lock_manager)&&(this._isLocked=(null===(e=null==t?void 0:t.lock_manager)||void 0===e?void 0:e.is_locked)||!1),this.isUserLocked=this._isLocked&&(!this._isLockConfigured||(null===(i=null==t?void 0:t.lock_manager)||void 0===i?void 0:i.lock_users)||!1),this.isAutomationLocked=this._isLocked&&((null===(o=null==t?void 0:t.lock_manager)||void 0===o?void 0:o.lock_automations)||!1),this._hasLockCode=!0===(null===(a=null==t?void 0:t.lock_manager)||void 0===a?void 0:a.lock_code),this.name="",this.hvacMode=Q||_s,this.hvacAction=null==t?void 0:t.hvac_action,this.preset=null==t?void 0:t.preset_mode,this.modes=(null==t?void 0:t.hvac_modes)?Object.values(t.hvac_modes):[],this.presets=t.preset_modes?Object.values(t.preset_modes):[],this.isSleeping=!0===(null===(s=null==t?void 0:t.specific_states)||void 0===s?void 0:s.is_sleeping),this.powerPercent=(null===(n=null==t?void 0:t.vtherm_over_switch)||void 0===n?void 0:n.power_percent)||(null===(l=null===(r=null==t?void 0:t.vtherm_over_climate)||void 0===r?void 0:r.valve_regulation)||void 0===l?void 0:l.power_percent)||0,void 0===(null===(c=null==t?void 0:t.specific_states)||void 0===c?void 0:c.is_device_active)?this.isDeviceActive=this.hvacAction==gs||this.hvacAction==fs:this.isDeviceActive=!0===(null===(d=null==t?void 0:t.specific_states)||void 0===d?void 0:d.is_device_active),this.temperature=null==t?void 0:t.temperature,this.step=(null===(u=null==t?void 0:t.configuration)||void 0===u?void 0:u.target_temperature_step)||.5,this.min=(null==t?void 0:t.min_temp)||7,this.max=(null==t?void 0:t.max_temp)||35,this.current=(null==t?void 0:t.current_temperature)||0,this.windowState=null===(h=null==t?void 0:t.window_manager)||void 0===h?void 0:h.window_state,this.windowAutoState=null===(p=null==t?void 0:t.window_manager)||void 0===p?void 0:p.window_auto_state,this.humidity=(null==t?void 0:t.humidity)?parseFloat(t.humidity):0,this.overpoweringState=(null===(_=null==t?void 0:t.power_manager)||void 0===_?void 0:_.overpowering_state)||"off",this.presenceState=(null===(m=null==t?void 0:t.presence_manager)||void 0===m?void 0:m.presence_state)||"off",this.motionState=(null===(v=null==t?void 0:t.motion_manager)||void 0===v?void 0:v.motion_state)||"off",this._hasWindowByPass=!0===(null===(f=null==t?void 0:t.window_manager)||void 0===f?void 0:f.is_window_bypass),this.safetyState=(null===(g=null==t?void 0:t.safety_manager)||void 0===g?void 0:g.safety_state)||"off",this.meanCyclePower=(null===(b=null==t?void 0:t.power_manager)||void 0===b?void 0:b.mean_cycle_power)||0,this.valveOpenPercent=(null===(y=null==t?void 0:t.vtherm_over_valve)||void 0===y?void 0:y.valve_open_percent)||(null===(k=null===(w=null==t?void 0:t.vtherm_over_climate_valve)||void 0===w?void 0:w.valve_regulation)||void 0===k?void 0:k.valve_open_percent)||0,this.devicePower=(null===($=null==t?void 0:t.power_manager)||void 0===$?void 0:$.device_power)||0,this.isRegulated=!0===(null===(A=null==t?void 0:t.vtherm_over_climate)||void 0===A?void 0:A.is_regulated),this.regulatedTargetTemperature=(null===(x=null===(C=null==t?void 0:t.vtherm_over_climate)||void 0===C?void 0:C.regulation)||void 0===x?void 0:x.regulated_target_temperature)||null,this.autoRegulationMode=(null===(L=null===(S=null==t?void 0:t.vtherm_over_climate)||void 0===S?void 0:S.regulation)||void 0===L?void 0:L.auto_regulation_mode)||null,this.currentAutoFanMode=(null===(M=null==t?void 0:t.vtherm_over_climate)||void 0===M?void 0:M.current_auto_fan_mode)||null,this.autoFanMode=(null===(E=null==t?void 0:t.vtherm_over_climate)||void 0===E?void 0:E.auto_fan_mode)||null,this.fanMode=(null==t?void 0:t.fan_mode)||null,this.hvacOffReason=(null===(T=null==t?void 0:t.specific_states)||void 0===T?void 0:T.hvac_off_reason)||null,this.isRecalculateScheduled=(null===(V=null==t?void 0:t.specific_states)||void 0===V?void 0:V.is_recalculate_scheduled)||null,this.isOn=!0===(null===(z=null==t?void 0:t.specific_states)||void 0===z?void 0:z.is_on),this.timedPresetActive=!0===(null===(P=null==t?void 0:t.timed_preset_manager)||void 0===P?void 0:P.is_active),this.timedPresetRemainingTime=(null===(H=null==t?void 0:t.timed_preset_manager)||void 0===H?void 0:H.remaining_time_min)||null,this.timedPresetPreset=(null===(D=null==t?void 0:t.timed_preset_manager)||void 0===D?void 0:D.preset)||null;const et=(null===(O=null==t?void 0:t.requested_state)||void 0===O?void 0:O.hvac_mode)||null,it=(null===(N=null==t?void 0:t.specific_states)||void 0===N?void 0:N.messages)||[],ot=1==(null===(j=null==t?void 0:t.vtherm_over_climate_valve)||void 0===j?void 0:j.have_valve_regulation);if((null===(I=this._config)||void 0===I?void 0:I.disable_name)||(this.name=this._config.name?this._config.name:t.friendly_name),this.hvacMode==_s&&!0===this.isSleeping&&(this.hvacMode=ms),!0===(null==t?void 0:t.is_over_switch)&&this.powerPercent>0&&(this.hvacAction="heat"==et?gs:fs),this.modes.length>1&&this.modes.includes(_s)&&this.modes.sort(((t,e)=>"off"===t?1:"off"===e?-1:t.localeCompare(e))),this.presets.length>0&&(this.presets=this.presets.filter((t=>t!=ps&&("cool"!=Q||"frost"!=t)))),this.value={value:(null==t?void 0:t.temperature)||0,low:(null==t?void 0:t.target_temp_low)||null,high:(null==t?void 0:t.target_temp_high)||null},"on"===this.windowState||"on"===this.windowAutoState?this._hasWindow=!0:this._hasWindow=!1,"on"===this.overpoweringState?(this._hasOverpowering=!0,this.overpowering=!0):(this._hasOverpowering=!1,this.overpowering=!1),"on"===this.presenceState?(this._hasPresence=!0,this.presence=!0):(this._hasPresence=!1,this.presence=!1),"on"===this.motionState?(this._hasMotion=!0,this.motion=!0):(this._hasMotion=!1,this.motion=!1),"on"!==this.safetyState||(null===(R=null==this?void 0:this._config)||void 0===R?void 0:R.disable_safety_warning))this.safety_state=null;else{if(this.safety_state=[],this.safety_state.push({name:xi({hass:this.hass,string:"extra_states.safety_warning"}),security_msg:xi({hass:this.hass,string:"extra_states.safety_warning_msg"})}),null===(B=t.specific_states)||void 0===B?void 0:B.last_temperature_datetime){let e=ws(new Date(null===(U=t.specific_states)||void 0===U?void 0:U.last_temperature_datetime));e>0&&this.safety_state.push({name:xi({hass:this.hass,string:"extra_states.room_temp"}),security_msg:e+" "+xi({hass:this.hass,string:"extra_states.minutes"})})}if(null===(W=t.specific_states)||void 0===W?void 0:W.last_ext_temperature_datetime){let e=ws(new Date(null===(F=t.specific_states)||void 0===F?void 0:F.last_ext_temperature_datetime));e>0&&this.safety_state.push({name:xi({hass:this.hass,string:"extra_states.outdoor_temp"}),security_msg:e+" "+xi({hass:this.hass,string:"extra_states.minutes"})})}}this.messages=[];for(const t of it)this.messages.push(xi({hass:this.hass,string:`extra_states.${t}`}));if(this.powerInfos=[],(null===(Z=this._config)||void 0===Z?void 0:Z.disable_power_infos)||!this.isOn&&!ot||((null==t?void 0:t.is_over_switch)&&(this.meanCyclePower&&!(null===(q=this._config)||void 0===q?void 0:q.powerEntity)&&this.powerInfos.push({name:"mean_power_cycle",value:ks(this.meanCyclePower,1),unit:this.meanCyclePower<7?"kW":"W",class:"vt-power-color"}),this.powerInfos.push({name:"power_percent",value:this.powerPercent,unit:"%",class:"vt-power-color"})),((null==t?void 0:t.is_over_valve)||ot)&&(this.meanCyclePower&&!(null===(K=this._config)||void 0===K?void 0:K.powerEntity)&&this.powerInfos.push({name:"mean_power_cycle",value:ks(this.meanCyclePower,1),unit:this.meanCyclePower<7?"kW":"W",class:"vt-power-color"}),this.powerInfos.push({name:"valve_open_percent",value:this.valveOpenPercent,unit:"%",class:"vt-power-color"})),(null==t?void 0:t.is_over_climate)&&!ot&&(this.devicePower&&!(null===(Y=this._config)||void 0===Y?void 0:Y.powerEntity)&&this.powerInfos.push({name:"mean_power_cycle",value:this.devicePower,unit:this.devicePower<7?"kW":"W",class:"vt-power-color"}),this.isRegulated&&(this.powerInfos.push({name:"regulated_target_temperature",value:this.regulatedTargetTemperature,unit:null===(X=null==t?void 0:t.configuration)||void 0===X?void 0:X.temperature_unit,class:"vt-temp-color"}),this.powerInfos.push({name:"auto_regulation_mode",value:xi({hass:this.hass,string:`extra_states.${this.autoRegulationMode}`}),unit:"",class:"vt-label-color"})))),this.autoFanInfos=[],!(null===(G=null==this?void 0:this._config)||void 0===G?void 0:G.disable_auto_fan_infos)&&(null==t?void 0:t.is_over_climate)&&!ot){const t=this.currentAutoFanMode!=vs?"auto_fan_mode":"auto_fan_mode_off";this.autoFanInfos.push({name:t,value:xi({hass:this.hass,string:`extra_states.${this.currentAutoFanMode}`}),unit:"",class:"vt-label-color"}),this.fanMode&&this.autoFanInfos.push({name:"fan_mode",value:xi({hass:this.hass,string:`extra_states.fan_${this.fanMode}`}),unit:"",class:"vt-label-color"})}this._hasAutoStartStop="hvac_off_auto_start_stop"===this.hvacOffReason,this._isAutoStartStopConfigured=!0===(null==t?void 0:t.is_auto_start_stop_configured),this._isAutoStartStopEnabled=!0===(null===(J=null==t?void 0:t.auto_start_stop_manager)||void 0===J?void 0:J.auto_start_stop_enable),this._updateDisplay()}}_updateDisplay(){var t;(null===(t=null==this?void 0:this._config)||void 0===t?void 0:t.set_current_as_main)?(this._display_bottom=this._getCurrentSetpoint(),this._display_top=this.current):(this._display_bottom=this.current,this._display_top=this._getCurrentSetpoint())}_handleAction(t){this.isUserLocked||(t.currentTarget.mode===ms?this.hass.callService("versatile_thermostat","set_hvac_mode_sleep",{entity_id:this._config.entity}):this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:t.currentTarget.mode}))}_handleDisplayMessages(){this.displayMessages=!this.displayMessages,this.requestUpdate(),this._vibrate(40)}_handlePreset(t){if(this.isUserLocked)return;this.last_target_temperature=this.temperature;const e=t.currentTarget.preset;this.timedPresetDuration&&this.timedPresetDuration>0?(this.hass.callService("versatile_thermostat","set_timed_preset",{entity_id:this._config.entity,preset:e,duration_minutes:this.timedPresetDuration}),this.timedPresetDuration=null):this.hass.callService("climate","set_preset_mode",{entity_id:this._config.entity,preset_mode:e})}_formatRemainingTime(t){if(null===t||t<=0)return"0";if(t<60)return`${t}`;const e=Math.floor(t/60),i=t%60;return 0===i?`${e}h`:`${e}h${i}`}_handleTimedPresetDurationChange(t){const e=t.target,i=e.value?parseInt(e.value,10):null;this.timedPresetDuration=i&&i>0?i:null}_handleTimedPresetSelectChange(t){const e=t.target,i=e.value?parseInt(e.value,10):null;this.timedPresetDuration=i&&i>0?i:null}_handleCancelTimedPreset(){this.isUserLocked||(console.info("VersatileThermostatUI-CARD canceling timed preset"),this.hass.callService("versatile_thermostat","cancel_timed_preset",{entity_id:this._config.entity}))}_handleClickAutoFanInfo(){if(this.isUserLocked)return;let t=vs;this.currentAutoFanMode==vs&&(t=this.autoFanMode);const e=bs[t];console.info(`VersatileThermostatUI-CARD changing auto_fan_mode to ${t} (mapped=$${e}`),this.hass.callService("versatile_thermostat","set_auto_fan_mode",{entity_id:this._config.entity,auto_fan_mode:e})}_handleClickAutoStartStopEnable(){if(this.isUserLocked)return;let t=!this._isAutoStartStopEnabled;console.info(`VersatileThermostatUI-CARD changing auto_start_stop_enable to ${t}`),this.hass.callService("switch","toggle",{entity_id:this._config.autoStartStopEnableEntity})}_handleToggleWindowByPass(){if(this.isUserLocked)return;let t=!this._hasWindowByPass;console.info(`VersatileThermostatUI-CARD changing windowByPass to ${t}`),this.hass.callService("versatile_thermostat","set_window_bypass",{entity_id:this._config.entity,window_bypass:t})}_getCurrentSetpoint(){var t,e,i,o,a,s,n,r;return null!==(null===(t=null==this?void 0:this.value)||void 0===t?void 0:t.high)&&null!==(null===(e=null==this?void 0:this.value)||void 0===e?void 0:e.low)?((null===(i=null==this?void 0:this.value)||void 0===i?void 0:i.low)||0)>=this.current?(null===(o=null==this?void 0:this.value)||void 0===o?void 0:o.low)||0:((null===(a=null==this?void 0:this.value)||void 0===a?void 0:a.high)||0)<=this.current?(null===(s=null==this?void 0:this.value)||void 0===s?void 0:s.high)||0:(null===(n=null==this?void 0:this.value)||void 0===n?void 0:n.low)||0:(null===(r=null==this?void 0:this.value)||void 0===r?void 0:r.value)||0}_renderHVACAction(){return"heating"===this.hvacAction||"heat"==this.hvacMode||"heat_cool"==this.hvacMode?W`<path class="status ${this.isDeviceActive?"active":""}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${"M8.5 4.5L5.4 9.5L8.5 14.7L5.2 20.5L3.4 19.6L6.1 14.7L3 9.5L6.7 3.6L8.5 4.5M14.7 4.4L11.6 9.5L14.7 14.5L11.4 20.3L9.6 19.4L12.3 14.5L9.2 9.5L12.9 3.5L14.7 4.4M21 4.4L17.9 9.5L21 14.5L17.7 20.3L15.9 19.4L18.6 14.5L15.5 9.5L19.2 3.5L21 4.4"}" />`:"cooling"===this.hvacAction||"cool"==this.hvacMode?W`<path class="status cooler ${this.isDeviceActive?"active":""}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${bt}" />`:W`<path class="status" transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${yt}" />`}_renderIcon(t,e){if(!hs[t])return U``;const i=this.hass.localize(`component.climate.state._.${t}`)||xi({hass:this.hass,string:`extra_states.${t}`});return U`
      <ha-icon-button
        title="${e===t?t:""}"
        class=${gt({"selected-icon":e===t})}
        .mode=${t}
        @click=${this._handleAction}
        tabindex="0"
        .path=${hs[t]}
        .label=${i}
      >
      </ha-icon-button>
    `}_renderMessagesButton(){const t=xi({hass:this.hass,string:"extra_states.messages-button"});return U`
      <ha-icon-button
        title="${t}"
        class="messages-button"
        @click=${this._handleDisplayMessages}
        tabindex="0"
        .path=${At}
        .label=${t}
      >
      </ha-icon-button>
    `}_renderRecalculateScheduledButton(){const t=xi({hass:this.hass,string:"extra_states.recalculation_scheduled"});return U`
      <ha-icon-button
        title="${t}"
        class="messages-button"
        tabindex="0"
        .path=${"M21,10.12H14.22L16.96,7.3C14.23,4.6 9.81,4.5 7.08,7.2C4.35,9.91 4.35,14.28 7.08,17C9.81,19.7 14.23,19.7 16.96,17C18.32,15.65 19,14.08 19,12.1H21C21,14.08 20.12,16.65 18.36,18.39C14.85,21.87 9.15,21.87 5.64,18.39C2.14,14.92 2.11,9.28 5.62,5.81C9.13,2.34 14.76,2.34 18.27,5.81L21,3V10.12M12.5,8V12.25L16,14.33L15.28,15.54L11,13V8H12.5Z"}
        .label=${t}
      >
      </ha-icon-button>
    `}_renderWindowByPassButton(){const t=xi({hass:this.hass,string:"extra_states.window-bypass-button"});return U`
      <ha-icon-button
        title="${t}"
        class="window-bypass-button"
        @click=${this._handleToggleWindowByPass}
        tabindex="0"
        .path=${Tt}
        .label=${t}
      >
      </ha-icon-button>
    `}_renderPreset(t,e){const i=(this.hass.localize(`component.climate.state._.${t}`)||xi({hass:this.hass,string:`extra_states.${t}`}))+"\n"+xi({hass:this.hass,string:"extra_states.change_message"});return U`
      <div class="preset-label">
          <ha-icon-button
            title="${e===t?t:""}"
            class=${gt({"selected-icon":e===t})}
            .preset=${t}
            @click=${this._handlePreset}
            tabindex="0"
            .path=${hs[t]}
            .label=${i}
          >
        </ha-icon-button>
      </div>
    `}_renderPowerInfo(t){const e=this.hass.localize(`component.climate.state._.${t.name}`)||xi({hass:this.hass,string:`extra_states.${t.name}`});return U`
      <div class="left-info-label">
        <span>
          <ha-icon-button
            title="${e}"
            class=${t.class} 
            .name=${t.name}
            tabindex="0"
            .path=${hs[t.name]}
            .label=${e}
          >
        </ha-icon-button>
        </span>
        <span>${t.value} ${t.unit}</span>
      </div>
    `}_renderAutoFanInfo(t){const e=(this.hass.localize(`component.climate.state._.${t.name}`)||xi({hass:this.hass,string:`extra_states.${t.name}`}))+"\n"+xi({hass:this.hass,string:"extra_states.toggle_message"});return U`
      <div class="left-info-label">
        <span>
          <ha-icon-button
            title="${e}"
            class=${t.class} 
            .name=${t.name}
            @click=${this._handleClickAutoFanInfo}
            tabindex="0"
            .path=${hs[t.name]}
            .label=${e}
          >
        </ha-icon-button>
        </span>
        <span>${t.value} ${t.unit}</span>
      </div>
    `}_renderAutoStartStopEnable(){const t=xi({hass:this.hass,string:"extra_states.auto_start_stop_enable"}),e=xi({hass:this.hass,string:"extra_states.auto_start_stop_label"});return this._isAutoStartStopEnabled,U`
      <div class="left-info-label" title="${t}">
        <span>
          <input type="checkbox" .checked=${this._isAutoStartStopEnabled} class="auto-start-stop-enable" @click=${this._handleClickAutoStartStopEnable} .label="${t}" name="auto-start-stop-enable">
        </span>
        <span>${e}</span>
      </div>
    `}_handleMoreInfo(){Pi(this,"hass-more-info",{entityId:this._config.entity})}_handleLockToggle(){var t,e;if((null===(t=this._config)||void 0===t?void 0:t.allow_lock_toggle)&&(null===(e=this._config)||void 0===e?void 0:e.entity)&&this.hass&&this.stateObj)if(this._isLocked){if(this._hasLockCode)return this.isLocking=!1,this.showDigicodeModal=!0,void(this.enteredCode="");this._isLockConfigured?this.hass.callService("versatile_thermostat","unlock",{entity_id:this._config.entity}):(this._isLocked=this.isUserLocked=!1,this.requestUpdate())}else{if(this._hasLockCode)return this.isLocking=!0,this.showDigicodeModal=!0,void(this.enteredCode="");this._isLockConfigured?this.hass.callService("versatile_thermostat","lock",{entity_id:this._config.entity}):(this._isLocked=this.isUserLocked=!0,this.requestUpdate())}}_handleKeypadPress(t){this.enteredCode.length<4&&(this.enteredCode+=t,this.codeError=!1,4===this.enteredCode.length&&this._handleValidate())}_handleKeypadClear(){this.enteredCode=this.enteredCode.slice(0,-1),this.codeError=!1}_handleModalClose(){this.showDigicodeModal=!1,this.enteredCode="",this.codeError=!1}async _handleValidate(){if(4===this.enteredCode.length){const t=this.isLocking?"lock":"unlock";try{await this.hass.callService("versatile_thermostat",t,{entity_id:this._config.entity,code:this.enteredCode}),this._handleModalClose()}catch(t){this.codeError=!0,this.enteredCode="",this._vibrate(200)}}else this.codeError=!0,this.enteredCode="",this._vibrate(200)}buildTitle(){var t,e,i;let o="";return this._hasWindow&&!(null===(t=this._config)||void 0===t?void 0:t.disable_window)&&(o+=xi({hass:this.hass,string:"extra_states.window_open"})+"\n"),this._hasWindowByPass&&(o+=xi({hass:this.hass,string:"extra_states.window_bypass"})+"\n"),this._hasOverpowering&&!(null===(e=this._config)||void 0===e?void 0:e.disable_overpowering)&&(o+=xi({hass:this.hass,string:"extra_states.overpowering"})+"\n"),this._hasPresence&&(o+=xi({hass:this.hass,string:"extra_states.presence"})+"\n"),this._hasAutoStartStop&&!(null===(i=this._config)||void 0===i?void 0:i.disable_autoStartStop)&&(o+=xi({hass:this.hass,string:"extra_states.auto_start_stop"})+"\n"),this._hasMotion&&(o+=xi({hass:this.hass,string:"extra_states.motion"})+"\n"),o}_renderTemperature(t,e,i,o,a){var s,n;const r=e?15:6,l=e?-2:-1,c=e?-5.5:-2,d=e?5:3;let u,h=76,p=57,_=.2;return u=t?Di(t,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1}):this.hass.localize("extra_states.temp_unavailable"),a&&e&&(h=30,p=56,_=.25),W`
      ${a&&!(null===(s=this._config)||void 0===s?void 0:s.disable_target_icon)&&(null===(n=this._config)||void 0===n?void 0:n.disable_circle)?W`
        <path 
          class="main-value" 
          transform="translate(${h}, ${p}) scale(${_})" 
          fill="#ffffff" 
          d="${"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z"}" 
        />`:""}
      <text class="main-value" x="${i}" y="${o}" dominant-baseline="middle" text-anchor="middle" style="font-size:${r}px;">
        ${W`${u}`}
        <tspan dx="${l}" dy="${c}" style="font-size: ${d}px;">
          ${W`
            ${this.hass.config.unit_system.temperature}
          `}
        </tspan>
      </text>
    `}constructor(){super(),this.value={},this._selectTargetTemperature="low",this.current=0,this.humidity=0,this.temperature=0,this.min=7,this.max=35,this.step=.5,this.powerPercent=0,this.meanCyclePower=0,this.valveOpenPercent=0,this.devicePower=0,this.regulatedTargetTemperature=null,this.isOn=!1,this.window=!1,this.windowByPass=!1,this.presence=!1,this.motion=!1,this.overpowering=!1,this.isDeviceActive=!1,this.isSleeping=!1,this.isRegulated=!1,this.isRecalculateScheduled=!1,this.windowState="off",this.windowAutoState="off",this.overpoweringState="off",this.presenceState="off",this.motionState="off",this.safetyState="off",this.status="loading",this.hvacMode=_s,this.hvacAction="idle",this.preset=ps,this.autoRegulationMode="",this.currentAutoFanMode=vs,this.autoFanMode=vs,this.fanMode="",this.hvacOffReason="",this.dragging=!1,this.name="",this.target="value",this._debouncedCallService=((t,e,i=!1)=>{let o;const a=(...a)=>{const s=i&&!o;clearTimeout(o),o=window.setTimeout((()=>{o=void 0,i||t(...a)}),e),s&&t(...a)};return a.cancel=()=>{clearTimeout(o)},a})((t=>this._callService(t)),1e3),this._init=!0,this._firstRender=!0,this._ignore=!1,this._hasWindow=!1,this._hasWindowByPass=!1,this._hasPresence=!1,this._hasMotion=!1,this._hasOverpowering=!1,this._hasAutoStartStop=!1,this._isAutoStartStopEnabled=!1,this._isAutoStartStopConfigured=!1,this._isLockConfigured=!1,this._isLocked=!1,this._hasLockCode=!1,this._oldValueMin=0,this._oldValueMax=0,this._display_bottom=0,this._display_top=0,this.modes=[],this.presets=[],this.safety_state={},this.powerInfos=[],this._externalPowerInfos=[],this.autoFanInfos=[],this.messages=[],this.displayMessages=!1,this.isLocked=!1,this.isUserLocked=!1,this.isAutomationLocked=!1,this.showDigicodeModal=!1,this.enteredCode="",this.codeError=!1,this.isLocking=!1,this.timedPresetDuration=null,this.timedPresetActive=!1,this.timedPresetRemainingTime=null,this.timedPresetPreset=null,this._handleKeyDown=t=>{t.key>="0"&&t.key<="9"?this._handleKeypadPress(t.key):"Backspace"===t.key&&this._handleKeypadClear()},this.render=()=>{var t,e,i,o,a,s,n,r,l,c,d,u,h,p,_,m,v,f,g,b,y,w;return U`
   <ha-card class=${gt({[this.hvacMode]:!0,locked:this.isUserLocked})}
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

      ${(null===(e=this.safety_state)||void 0===e?void 0:e.length)>0&&!this.displayMessages?U`
        <div class="security">
          <ha-icon-button class="alert" .path=${Lt}>
          </ha-icon-button>
          ${U`
            ${this.safety_state.map((t=>U`<span>${t.name}: ${t.security_msg}</span>`))}
           `}
        </div>
      `:""}
      ${this.messages.length>0&&this.displayMessages?U`
        <div class="messages">
          <ha-icon-button class="alert" .path=${At}>
          </ha-icon-button>
          ${this.messages.map((t=>U`<span>${t}</span>`))}
        </div>
      `:""}

      <div title="${this.buildTitle()}" class="${(null===(i=this._config)||void 0===i?void 0:i.disable_circle)?"disabled-circle-container":""}  ${this.hvacMode}_${this.hvacAction} ${this._hasWindow?"window_open":""}  ${this.overpowering?"overpowering":""}">
        ${(null===(o=this._config)||void 0===o?void 0:o.disable_circle)?U`
            <!-- No cicle configured -->
          `:null!=this.value.low&&null!=this.value.high&&"unavailable"!==this.stateObj.state?U`
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
            `:U`
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
                ${this._hasWindowByPass?W`
                  <g transform="${this._hasWindowByPass?"translate(-50.25,0)":""}" @click=${this._handleToggleWindowByPass} class="icon-group">
                    <rect width="24" height="24" fill="transparent" style="cursor: pointer;"/>
                    <path class="window window-by-pass ${this._hasWindowByPass?"active":""}" id="window-by-pass" d=${Tt}/>
                  </g>
                `:""}
                ${this._hasWindowByPass||!this._hasWindow||(null===(a=this._config)||void 0===a?void 0:a.disable_window)?"":W`
                  <g transform="${this._hasWindow&&!(null===(s=this._config)||void 0===s?void 0:s.disable_window)?"translate(-50.25,0)":""}" @click=${this._handleToggleWindowByPass} class="icon-group">
                    <rect width="24" height="24" fill="transparent" style="cursor: pointer;"/>
                    <path class="window ${this._hasWindow?"active":""}" id="window" d=${Et}/>
                  </g>
                `}
                ${this._hasOverpowering&&!(null===(n=this._config)||void 0===n?void 0:n.disable_overpowering)?W`
                  <path class="overpowering ${this.overpowering?"active":""}" transform="${this._hasOverpowering&&!(null===(r=this._config)||void 0===r?void 0:r.disable_overpowering)?"translate(-25.25,0)":""}" id="overpowering" d=${kt} />
                `:""}
                ${this._hasPresence?W`
                  <path class="presence ${this.presence?"active":""}" transform="${this._hasPresence?"translate(0.25,0)":""}" id="overpowering" d=${$t} />
                `:""}
                ${this._hasAutoStartStop&&!(null===(l=this._config)||void 0===l?void 0:l.disable_autoStartStop)?W`
                  <path class="auto-start-stop" transform="${this._hasAutoStartStop&&!(null===(c=this._config)||void 0===c?void 0:c.disable_autoStartStop)?"translate(25.25,0)":""}" id="autoStartStop" d=${St}/>
                `:""}
                ${this._hasMotion?W`
                  <path class="motion ${this.motion?"active":""}" transform="${this._hasMotion?"translate(50.25,0)":""}" id="motion" d=${xt} />
                `:""}
              </g>

              ${(null===(d=this._config)||void 0===d?void 0:d.disable_circle)?W`
                  ${this._renderTemperature(this._display_top,!0,"55","60%",!(null===(u=null==this?void 0:this._config)||void 0===u?void 0:u.set_current_as_main))}
                  ${this._renderTemperature(this._display_bottom,!1,"90","60%",1==(null===(h=null==this?void 0:this._config)||void 0===h?void 0:h.set_current_as_main))}
                  <g class="current-info" transform="translate(100,65)">
                    ${this._renderHVACAction()}
                  </g>
                `:W`
                  ${this._renderTemperature(this._display_top,!0,"50%","60%",!(null===(p=null==this?void 0:this._config)||void 0===p?void 0:p.set_current_as_main))}
                  <line x1="35" y1="72" x2="90" y2="72" stroke="#e7e7e8" stroke-width="0.5" />
                  <g class="current-info" transform="translate(62.5,80)">
                    ${this._renderTemperature(this._display_bottom,!1,"-5%","0%",1==(null===(_=null==this?void 0:this._config)||void 0===_?void 0:_.set_current_as_main))}
                  ${this._renderHVACAction()}
                </g>
              `}              
          </svg>
          </div>
          ${(null===(m=this._config)||void 0===m?void 0:m.disable_window)?U``:U`
          </vt-ha-control-circular-slider>`}
        </div>
      <div id="modes" class="${null!==this.safety_state||this.displayMessages?"security_msg":""}">
        ${W`
          ${this.modes.map((t=>{var e,i,o,a,s,n,r,l;return(null===(e=this._config)||void 0===e?void 0:e.disable_heat)&&"heat"===t||(null===(i=this._config)||void 0===i?void 0:i.disable_auto)&&"auto"===t||(null===(o=this._config)||void 0===o?void 0:o.disable_cool)&&"cool"===t||(null===(a=this._config)||void 0===a?void 0:a.disable_heat_cool)&&"heat_cool"===t||(null===(s=this._config)||void 0===s?void 0:s.disable_dry)&&"dry"===t||(null===(n=this._config)||void 0===n?void 0:n.disable_fan_only)&&"fan_only"===t||(null===(r=this._config)||void 0===r?void 0:r.disable_off)&&"off"===t||(null===(l=this._config)||void 0===l?void 0:l.disable_sleep)&&"sleep"===t?U``:this._renderIcon(t,this.hvacMode)}))}
        `}
      </div>
      ${(null===(v=null==this?void 0:this._config)||void 0===v?void 0:v.disable_buttons)?U``:U`
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
        ${W`
          ${this.presets.map((t=>this._renderPreset(t,this.preset)))}
        `}
        ${(null===(f=this._config)||void 0===f?void 0:f.disable_timed_preset)?"":U`
          <div class="timed-preset-container">
            ${this.timedPresetActive?U`
              <span class="timed-preset-remaining" title="${xi({hass:this.hass,string:"extra_states.timed_preset_active"})}">
                ${this._formatRemainingTime(this.timedPresetRemainingTime)}
              </span>
              ${(null!==(g=this.timedPresetRemainingTime)&&void 0!==g?g:0)<60?U`
                <span class="timed-preset-label">${xi({hass:this.hass,string:"extra_states.minutes"})}</span>
              `:""}
              <ha-icon-button
                class="timed-preset-cancel"
                @click=${this._handleCancelTimedPreset}
                title="${xi({hass:this.hass,string:"extra_states.cancel_timed_preset"})}"
                .path=${yt}
              ></ha-icon-button>
            `:(null===(b=this._config)||void 0===b?void 0:b.use_manual_duration_input)?U`
              <input
                type="number"
                class="timed-preset-input ${this.timedPresetDuration?"active":""}"
                .value=${null!==(y=this.timedPresetDuration)&&void 0!==y?y:""}
                @input=${this._handleTimedPresetDurationChange}
                placeholder="0"
                min="0"
                max="1440"
                title="${xi({hass:this.hass,string:"extra_states.timed_preset_title"})}"
              />
              <span class="timed-preset-label">${xi({hass:this.hass,string:"extra_states.minutes"})}</span>
            `:U`
              <select
                class="timed-preset-select ${this.timedPresetDuration?"active":""}"
                @change=${this._handleTimedPresetSelectChange}
                title="${xi({hass:this.hass,string:"extra_states.timed_preset_title"})}"
              >
                <option value="" ?selected=${!this.timedPresetDuration}>--</option>
                <option value="15" ?selected=${15===this.timedPresetDuration}>15 ${xi({hass:this.hass,string:"extra_states.minutes"})}</option>
                <option value="30" ?selected=${30===this.timedPresetDuration}>30 ${xi({hass:this.hass,string:"extra_states.minutes"})}</option>
                <option value="60" ?selected=${60===this.timedPresetDuration}>1 h</option>
                <option value="240" ?selected=${240===this.timedPresetDuration}>4 h</option>
                <option value="480" ?selected=${480===this.timedPresetDuration}>8 h</option>
                <option value="1440" ?selected=${1440===this.timedPresetDuration}>24 h</option>
              </select>
            `}
          </div>
        `}
      </div>

      <div id="left-infos">
      ${this.isRecalculateScheduled?W`
        ${this._renderRecalculateScheduledButton()}
        `:""}
      ${this.messages.length>0?W`
        ${this._renderMessagesButton()}
        `:""}
      ${this._config.autoStartStopEnableEntity&&this._isAutoStartStopConfigured?W`
        ${this._renderAutoStartStopEnable()}
        `:""}
      ${W`
        ${this._externalPowerInfos.map((t=>this._renderPowerInfo(t)))}
      `}
      ${W`
        ${this.powerInfos.map((t=>this._renderPowerInfo(t)))}
      `}
      ${W`
        ${this.autoFanInfos.map((t=>this._renderAutoFanInfo(t)))}
      `}
    </div>

    <div id="right-lock">
      ${(null===(w=this._config)||void 0===w?void 0:w.allow_lock_toggle)?U`
              <ha-icon-button
                class="lock-icon ${this._isLocked?"locked":"unlocked"}"
                .path=${this._isLocked?"M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z":"M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17Z"}
                @click=${this._handleLockToggle}
                tabindex="0"
              ></ha-icon-button>
            `:""}
    </div>

    <ha-dialog
      .open=${this.showDigicodeModal}
      @closed=${this._handleModalClose}
      hideActions
      class="digicode-dialog"
    >
      <div class="dialog-content">
        <h2 class="dialog-title">
          ${this.isLocking?xi({hass:this.hass,string:"extra_states.lock"}):xi({hass:this.hass,string:"extra_states.unlock"})} ${this.name}
        </h2>
        <div class="code-display ${this.codeError?"error":""}">
          <span class="digit ${this.enteredCode.length>0?"filled":""}"></span>
          <span class="digit ${this.enteredCode.length>1?"filled":""}"></span>
          <span class="digit ${this.enteredCode.length>2?"filled":""}"></span>
          <span class="digit ${this.enteredCode.length>3?"filled":""}"></span>
        </div>
        <div class="error-message ${this.codeError?"visible":""}">
          ${xi({hass:this.hass,string:"extra_states.code_error"})}
        </div>

        <div class="keypad">
          <div class="keypad-row">
            <mwc-button class="keypad-btn" @click=${()=>this._handleKeypadPress("1")}>1</mwc-button>
            <mwc-button class="keypad-btn" @click=${()=>this._handleKeypadPress("2")}>2</mwc-button>
            <mwc-button class="keypad-btn" @click=${()=>this._handleKeypadPress("3")}>3</mwc-button>
          </div>
          <div class="keypad-row">
            <mwc-button class="keypad-btn" @click=${()=>this._handleKeypadPress("4")}>4</mwc-button>
            <mwc-button class="keypad-btn" @click=${()=>this._handleKeypadPress("5")}>5</mwc-button>
            <mwc-button class="keypad-btn" @click=${()=>this._handleKeypadPress("6")}>6</mwc-button>
          </div>
          <div class="keypad-row">
            <mwc-button class="keypad-btn" @click=${()=>this._handleKeypadPress("7")}>7</mwc-button>
            <mwc-button class="keypad-btn" @click=${()=>this._handleKeypadPress("8")}>8</mwc-button>
            <mwc-button class="keypad-btn" @click=${()=>this._handleKeypadPress("9")}>9</mwc-button>
          </div>
          <div class="keypad-row">
            <mwc-button class="keypad-btn spacer" disabled></mwc-button>
            <mwc-button class="keypad-btn" @click=${()=>this._handleKeypadPress("0")}>0</mwc-button>
            <mwc-button class="keypad-btn action-btn clear" @click=${this._handleKeypadClear}><ha-svg-icon .path=${"M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12L19,15.59M22,3A2,2 0 0,1 24,5V19A2,2 0 0,1 22,21H7C6.31,21 5.77,20.64 5.41,20.11L0,12L5.41,3.88C5.77,3.35 6.31,3 7,3H22M22,5H7L2.28,12L7,19H22V5Z"}></ha-svg-icon></mwc-button>
          </div>
        </div>
      </div>
    </ha-dialog>
    </ha-card>
  `}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleKeyDown)}static async getConfigElement(){return await Promise.resolve().then((function(){return Es})),document.createElement("versatile-thermostat-ui-card-editor")}static async getStubConfig(t){const e=Object.keys(t.states).filter((t=>["climate"].includes(t.split(".")[0]))),i=e.filter((e=>{var i;return null===(i=t.states[e].attributes)||void 0===i?void 0:i.specific_states}));return{type:"custom:versatile-thermostat-ui-card",entity:i[0]||e[0]}}};$s.styles=n`
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

      ha-card.locked #modes ha-icon-button,
      ha-card.locked #vt-control-buttons vt-ha-outlined-icon-button,
      ha-card.locked #vt-control-buttons ha-svg-icon,
      ha-card.locked #presets ha-icon-button,
      ha-card.locked #presets .preset-label,
      ha-card.locked vt-ha-control-circular-slider,
      ha-card.locked .left-info-label .auto-start-stop-enable,
      ha-card.locked .left-info-label ha-icon-button {
        opacity: 0.6;
        pointer-events: none;
      }
      
      ha-card.locked #presets .preset-label {
        cursor: default !important;
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
        align-items: center;
        margin-top: -1em;
        margin-bottom: 1em;
      }

      #presets > * {
        color: var(--disabled-text-color);
      }
      #presets .selected-icon {
        color: var(--label-badge-yellow);
      }

      .timed-preset-container {
        display: flex;
        align-items: center;
        margin-left: 10px;
        padding-left: 10px;
        border-left: 1px solid var(--divider-color, #e0e0e0);
      }

      .timed-preset-input {
        width: 30px;
        height: 32px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        padding: 0 8px;
        font-size: 14px;
        text-align: center;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        outline: none;
        transition: border-color 0.2s ease;
      }

      .timed-preset-input:focus {
        border-color: var(--primary-color);
      }

      .timed-preset-input::-webkit-outer-spin-button,
      .timed-preset-input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      .timed-preset-input[type=number] {
        -moz-appearance: textfield;
      }

      .timed-preset-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-left: 4px;
      }

      .timed-preset-input.active {
        border-color: var(--primary-color);
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }

      .timed-preset-select {
        height: 32px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        padding: 0 4px;
        font-size: 14px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        outline: none;
        cursor: pointer;
        transition: border-color 0.2s ease;
      }

      .timed-preset-select:focus {
        border-color: var(--primary-color);
      }

      .timed-preset-select.active {
        border-color: var(--primary-color);
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }

      .timed-preset-remaining {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-color);
        min-width: 30px;
        text-align: center;
      }

      .timed-preset-cancel {
        --mdc-icon-size: 20px;
        color: var(--error-color);
        margin-left: 4px;
        cursor: pointer;
      }

      .timed-preset-cancel:hover {
        color: var(--primary-color);
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

      #right-lock {
        z-index: 0;
        position: absolute;
        right: 0;
        top: 15%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 0.2em;
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

      .lock-icon {
        --mdc-icon-size: 24px;
      }

      .lock-icon.locked {
        color: var(--error-color);
      }

      .lock-icon.unlocked {
        color: var(--success-color);
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
      /* Dialog Customization */
      ha-dialog.digicode-dialog {
          --mdc-dialog-min-width: 400px;
          --mdc-dialog-max-width: 450px;
          --mdc-theme-primary: var(--primary-color);
          --mdc-theme-surface: var(--card-background-color);
      }

      .dialog-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
      }

      .dialog-title {
        margin-top: 0;
        margin-bottom: 40px;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
      }

      .error-message {
        color: var(--error-color);
        font-size: 14px;
        height: 20px;
        margin-top: 4px;
        margin-bottom: 20px;
        text-align: center;
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      .error-message.visible {
        opacity: 1;
      }

      .code-display {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        padding: 20px 0;
        border-bottom: 1px solid var(--secondary-text-color);
      }

      .digit {
        width: 12px;
        height: 12px;
        margin: 0 5px;
        border-radius: 50%;
        background-color: var(--secondary-text-color);
        opacity: 0.3;
        transition: all 0.2s ease;
      }

      .digit.filled {
        opacity: 1;
        background-color: var(--primary-text-color);
        transform: scale(1.2);
      }

      .code-display.error {
        animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        color: var(--error-color);
      }

      .keypad {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-width: 320px;
      }

      .keypad-row {
        display: flex;
        justify-content: space-around;
        gap: 16px;
      }

      .keypad-btn {
        flex: 1;
        --mdc-shape-small: 4px;
        --mdc-typography-button-font-size: 24px;
        --mdc-typography-button-font-weight: 400;
        height: 64px;
        --mdc-theme-primary: var(--primary-text-color);
        --mdc-button-outline-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .keypad-btn.spacer {
          visibility: hidden;
          pointer-events: none;
      }
      
      @keyframes shake {
        10%, 90% { transform: translate3d(-1px, 0, 0); }
        20%, 80% { transform: translate3d(2px, 0, 0); }
        30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
        40%, 60% { transform: translate3d(4px, 0, 0); }
      }
  `,t([ht({attribute:!1})],$s.prototype,"hass",void 0),t([ht({type:Number})],$s.prototype,"value",void 0),t([pt()],$s.prototype,"_selectTargetTemperature",void 0),t([ht({type:Number})],$s.prototype,"current",void 0),t([ht({type:Number})],$s.prototype,"humidity",void 0),t([ht({type:Number})],$s.prototype,"temperature",void 0),t([ht({type:Number})],$s.prototype,"min",void 0),t([ht({type:Number})],$s.prototype,"max",void 0),t([ht({type:Number})],$s.prototype,"step",void 0),t([ht({type:Number})],$s.prototype,"powerPercent",void 0),t([ht({type:Number})],$s.prototype,"meanCyclePower",void 0),t([ht({type:Number})],$s.prototype,"valveOpenPercent",void 0),t([ht({type:Number})],$s.prototype,"devicePower",void 0),t([ht({type:Number})],$s.prototype,"regulatedTargetTemperature",void 0),t([ht({type:Boolean})],$s.prototype,"isOn",void 0),t([ht({type:Boolean})],$s.prototype,"window",void 0),t([ht({type:Boolean})],$s.prototype,"windowByPass",void 0),t([ht({type:Boolean})],$s.prototype,"presence",void 0),t([ht({type:Boolean})],$s.prototype,"motion",void 0),t([ht({type:Boolean})],$s.prototype,"overpowering",void 0),t([ht({type:Boolean})],$s.prototype,"isDeviceActive",void 0),t([ht({type:Boolean})],$s.prototype,"isSleeping",void 0),t([ht({type:Boolean})],$s.prototype,"isRegulated",void 0),t([ht({type:Boolean})],$s.prototype,"isRecalculateScheduled",void 0),t([ht({type:String})],$s.prototype,"windowState",void 0),t([ht({type:String})],$s.prototype,"windowAutoState",void 0),t([ht({type:String})],$s.prototype,"overpoweringState",void 0),t([ht({type:String})],$s.prototype,"presenceState",void 0),t([ht({type:String})],$s.prototype,"motionState",void 0),t([ht({type:String})],$s.prototype,"safetyState",void 0),t([ht({type:String})],$s.prototype,"status",void 0),t([ht({type:String})],$s.prototype,"hvacMode",void 0),t([ht({type:String})],$s.prototype,"hvacAction",void 0),t([ht({type:String})],$s.prototype,"preset",void 0),t([ht({type:String})],$s.prototype,"autoRegulationMode",void 0),t([ht({type:String})],$s.prototype,"currentAutoFanMode",void 0),t([ht({type:String})],$s.prototype,"autoFanMode",void 0),t([ht({type:String})],$s.prototype,"fanMode",void 0),t([ht({type:String})],$s.prototype,"hvacOffReason",void 0),t([ht({type:Boolean,reflect:!0})],$s.prototype,"dragging",void 0),t([ht({type:String})],$s.prototype,"name",void 0),t([pt()],$s.prototype,"changingHigh",void 0),t([pt()],$s.prototype,"_config",void 0),t([pt()],$s.prototype,"isLocked",void 0),t([pt()],$s.prototype,"isUserLocked",void 0),t([pt()],$s.prototype,"isAutomationLocked",void 0),t([pt()],$s.prototype,"showDigicodeModal",void 0),t([pt()],$s.prototype,"enteredCode",void 0),t([pt()],$s.prototype,"codeError",void 0),t([pt()],$s.prototype,"isLocking",void 0),t([pt()],$s.prototype,"timedPresetDuration",void 0),t([pt()],$s.prototype,"timedPresetActive",void 0),t([pt()],$s.prototype,"timedPresetRemainingTime",void 0),t([pt()],$s.prototype,"timedPresetPreset",void 0),$s=t([ct("versatile-thermostat-ui-card")],$s);const As=function(...t){const e="type"===t[0].type,i=t.map((t=>t.schema)),o=Object.assign({},...i);return e?eo(o):Ji(o)}(Ji({index:Qi(Gi()),view_index:Qi(Gi()),view_layout:qi("any",(()=>!0)),type:to()}),Ji({entity:Qi(to()),name:Qi(to()),icon:Qi(to()),autoStartStopEnableEntity:Qi(to()),powerEntity:Qi(to())}),Ji({disable_name:Qi(Yi()),disable_circle:Qi(Yi()),disable_window:Qi(Yi()),disable_autoStartStop:Qi(Yi()),disable_overpowering:Qi(Yi()),disable_heat:Qi(Yi()),disable_cool:Qi(Yi()),disable_heat_cool:Qi(Yi()),disable_auto:Qi(Yi()),disable_dry:Qi(Yi()),disable_fan_only:Qi(Yi()),disable_off:Qi(Yi()),disable_sleep:Qi(Yi()),disable_safety_warning:Qi(Yi()),disable_power_infos:Qi(Yi()),disable_auto_fan_infos:Qi(Yi()),disable_target_icon:Qi(Yi()),set_current_as_main:Qi(Yi()),eco_temperature:Qi(Gi()),disable_menu:Qi(Yi()),disable_buttons:Qi(Yi()),allow_lock_toggle:Qi(Yi()),disable_timed_preset:Qi(Yi()),use_manual_duration_input:Qi(Yi())})),Cs=["icon_color","layout","fill_container","primary_info","secondary_info","icon_type","content_info","use_entity_picture","collapsible_controls","icon_animation"],xs=t=>{var e,i;customElements.get("ha-form")&&(customElements.get("hui-action-editor")||((t,e,i,o)=>{const[a,s,n]=t.split(".",3);return Number(a)>e||Number(a)===e&&(void 0===o?Number(s)>=i:Number(s)>i)||void 0!==o&&Number(a)===e&&Number(s)===i&&Number(n)>=o})(t,2022,11))||null===(e=customElements.get("hui-button-card"))||void 0===e||e.getConfigElement(),customElements.get("ha-entity-picker")||null===(i=customElements.get("hui-entities-card"))||void 0===i||i.getConfigElement()},Ss=["autoStartStopEnableEntity","powerEntity","disable_name","disable_circle","disable_window","disable_autoStartStop","disable_overpowering","disable_heat","disable_cool","disable_heat_cool","disable_auto","disable_dry","disable_fan_only","disable_off","disable_sleep","disable_menu","disable_safety_warning","disable_buttons","set_current_as_main","disable_power_infos","disable_auto_fan_infos","disable_target_icon","allow_lock_toggle","disable_timed_preset","use_manual_duration_input"],Ls=Vi((()=>[{name:"entity",selector:{entity:{domain:["climate"]}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"autoStartStopEnableEntity",selector:{entity:{domain:["switch"]}}},{name:"powerEntity",selector:{entity:{domain:["sensor","input_number"]}}}]},{type:"grid",name:"",schema:[{name:"disable_name",selector:{boolean:{}}},{name:"disable_circle",selector:{boolean:{}}},{name:"disable_window",selector:{boolean:{}}},{name:"disable_autoStartStop",selector:{boolean:{}}},{name:"disable_overpowering",selector:{boolean:{}}},{name:"disable_heat",selector:{boolean:{}}},{name:"disable_cool",selector:{boolean:{}}},{name:"disable_heat_cool",selector:{boolean:{}}},{name:"disable_auto",selector:{boolean:{}}},{name:"disable_dry",selector:{boolean:{}}},{name:"disable_fan_only",selector:{boolean:{}}},{name:"disable_off",selector:{boolean:{}}},{name:"disable_sleep",selector:{boolean:{}}},{name:"disable_menu",selector:{boolean:{}}},{name:"disable_safety_warning",selector:{boolean:{}}},{name:"disable_buttons",selector:{boolean:{}}},{name:"set_current_as_main",selector:{boolean:{}}},{name:"disable_power_infos",selector:{boolean:{}}},{name:"disable_auto_fan_infos",selector:{boolean:{}}},{name:"disable_target_icon",selector:{boolean:{}}},{name:"allow_lock_toggle",selector:{boolean:{}}},{name:"disable_timed_preset",selector:{boolean:{}}},{name:"use_manual_duration_input",selector:{boolean:{}}}]}]));let Ms=class extends rt{constructor(){super(...arguments),this._computeLabel=t=>{const e=(i=this.hass,function(t){var e;let o=Si(t,null!==(e=null==i?void 0:i.locale.language)&&void 0!==e?e:Ci);return o||(o=Si(t,Ci)),null!=o?o:t});var i;return Cs.includes(t.name)?e(`editor.card.generic.${t.name}`):Ss.includes(t.name)?e(`editor.card.climate.${t.name}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}}connectedCallback(){super.connectedCallback(),xs(this.hass.connection.haVersion)}setConfig(t){Fi(t,As),this._config=t}render(){if(!this.hass||!this._config)return U``;const t=Ls();return U`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${t}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `}_valueChanged(t){Pi(this,"config-changed",{config:t.detail.value}),Pi(this,"hass",{config:t.detail.value})}};t([pt()],Ms.prototype,"_config",void 0),t([ht({attribute:!1})],Ms.prototype,"hass",void 0),Ms=t([ct("versatile-thermostat-ui-card-editor")],Ms);var Es=Object.freeze({__proto__:null,get ClimateCardEditor(){return Ms}});export{$s as VersatileThermostatUi,ys as registerCustomCard};
