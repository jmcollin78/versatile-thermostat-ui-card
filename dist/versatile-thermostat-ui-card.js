function e(e,t,o,a){var i,n=arguments.length,s=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,a);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(s=(n<3?i(s):n>3?i(t,o,s):i(t,o))||s);return n>3&&s&&Object.defineProperty(t,o,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,o=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),i=new WeakMap;let n=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=i.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&i.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1]),e[0]);return new n(o,e,a)},r=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,a))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:_,getOwnPropertySymbols:u,getPrototypeOf:m}=Object,h=globalThis,p=h.trustedTypes,g=p?p.emptyScript:"",f=h.reactiveElementPolyfillSupport,b=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},y=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),a=this.getPropertyDescriptor(e,o,t);void 0!==a&&d(this.prototype,e,a)}}static getPropertyDescriptor(e,t,o){const{get:a,set:i}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return a?.call(this)},set(t){const n=a?.call(this);i.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[..._(e),...u(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,a)=>{if(o)e.adoptedStyleSheets=a.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const o of a){const a=document.createElement("style"),i=t.litNonce;void 0!==i&&a.setAttribute("nonce",i),a.textContent=o.cssText,e.appendChild(a)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t){const o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(void 0!==a&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:v).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(e,t){const o=this.constructor,a=o._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=o.getPropertyOptions(a),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=a,this[a]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,o,a=!1,i){if(void 0!==e){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??y)(a?i:this[e],t))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e)!0!==o.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[b("elementProperties")]=new Map,k[b("finalized")]=new Map,f?.({ReactiveElement:k}),(h.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T=globalThis,S=T.trustedTypes,A=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,D="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,$="?"+x,C=`<${$}>`,M=document,L=()=>M.createComment(""),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,V=Array.isArray,P="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,O=/>/g,N=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,U=/"/g,j=/^(?:script|style|textarea|title)$/i,R=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),I=R(1),W=R(2),F=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),G=new WeakMap,K=M.createTreeWalker(M,129);function q(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const Y=(e,t)=>{const o=e.length-1,a=[];let i,n=2===t?"<svg>":"",s=z;for(let t=0;t<o;t++){const o=e[t];let r,l,d=-1,c=0;for(;c<o.length&&(s.lastIndex=c,l=s.exec(o),null!==l);)c=s.lastIndex,s===z?"!--"===l[1]?s=H:void 0!==l[1]?s=O:void 0!==l[2]?(j.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=N):void 0!==l[3]&&(s=N):s===N?">"===l[0]?(s=i??z,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?N:'"'===l[3]?U:B):s===U||s===B?s=N:s===H||s===O?s=z:(s=N,i=void 0);const _=s===N&&e[t+1].startsWith("/>")?" ":"";n+=s===z?o+C:d>=0?(a.push(r),o.slice(0,d)+D+o.slice(d)+x+_):o+x+(-2===d?t:_)}return[q(e,n+(e[o]||"<?>")+(2===t?"</svg>":"")),a]};class X{constructor({strings:e,_$litType$:t},o){let a;this.parts=[];let i=0,n=0;const s=e.length-1,r=this.parts,[l,d]=Y(e,t);if(this.el=X.createElement(l,o),K.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=K.nextNode())&&r.length<s;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(D)){const t=d[n++],o=a.getAttribute(e).split(x),s=/([.?@])?(.*)/.exec(t);r.push({type:1,index:i,name:s[2],strings:o,ctor:"."===s[1]?oe:"?"===s[1]?ae:"@"===s[1]?ie:te}),a.removeAttribute(e)}else e.startsWith(x)&&(r.push({type:6,index:i}),a.removeAttribute(e));if(j.test(a.tagName)){const e=a.textContent.split(x),t=e.length-1;if(t>0){a.textContent=S?S.emptyScript:"";for(let o=0;o<t;o++)a.append(e[o],L()),K.nextNode(),r.push({type:2,index:++i});a.append(e[t],L())}}}else if(8===a.nodeType)if(a.data===$)r.push({type:2,index:i});else{let e=-1;for(;-1!==(e=a.data.indexOf(x,e+1));)r.push({type:7,index:i}),e+=x.length-1}i++}}static createElement(e,t){const o=M.createElement("template");return o.innerHTML=e,o}}function J(e,t,o=e,a){if(t===F)return t;let i=void 0!==a?o._$Co?.[a]:o._$Cl;const n=E(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(e),i._$AT(e,o,a)),void 0!==a?(o._$Co??=[])[a]=i:o._$Cl=i),void 0!==i&&(t=J(e,i._$AS(e,t.values),i,a)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,a=(e?.creationScope??M).importNode(t,!0);K.currentNode=a;let i=K.nextNode(),n=0,s=0,r=o[0];for(;void 0!==r;){if(n===r.index){let t;2===r.type?t=new ee(i,i.nextSibling,this,e):1===r.type?t=new r.ctor(i,r.name,r.strings,this,e):6===r.type&&(t=new ne(i,this,e)),this._$AV.push(t),r=o[++s]}n!==r?.index&&(i=K.nextNode(),n++)}return K.currentNode=M,a}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,a){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),E(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>V(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Z&&E(this._$AH)?this._$AA.nextSibling.data=e:this.$(M.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:o}=e,a="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=X.createElement(q(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new Q(a,this),o=e.u(this.options);e.p(t),this.$(o),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new X(e)),t}T(e){V(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,a=0;for(const i of e)a===t.length?t.push(o=new ee(this.k(L()),this.k(L()),this,this.options)):o=t[a],o._$AI(i),a++;a<t.length&&(this._$AR(o&&o._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,a,i){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Z}_$AI(e,t=this,o,a){const i=this.strings;let n=!1;if(void 0===i)e=J(this,e,t,0),n=!E(e)||e!==this._$AH&&e!==F,n&&(this._$AH=e);else{const a=e;let s,r;for(e=i[0],s=0;s<i.length-1;s++)r=J(this,a[o+s],t,s),r===F&&(r=this._$AH[s]),n||=!E(r)||r!==this._$AH[s],r===Z?e=Z:e!==Z&&(e+=(r??"")+i[s+1]),this._$AH[s]=r}n&&!a&&this.O(e)}O(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends te{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Z?void 0:e}}class ae extends te{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class ie extends te{constructor(e,t,o,a,i){super(e,t,o,a,i),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??Z)===F)return;const o=this._$AH,a=e===Z&&o!==Z||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==Z&&(o===Z||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const se=T.litHtmlPolyfillSupport;se?.(X,ee),(T.litHtmlVersions??=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class re extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const a=o?.renderBefore??t;let i=a._$litPart$;if(void 0===i){const e=o?.renderBefore??null;a._$litPart$=i=new ee(t.insertBefore(L(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}re._$litElement$=!0,re.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:re});const le=globalThis.litElementPolyfillSupport;le?.({LitElement:re}),(globalThis.litElementVersions??=[]).push("4.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=e=>(t,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ce={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},_e=(e=ce,t,o)=>{const{kind:a,metadata:i}=o;let n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(o.name,e),"accessor"===a){const{name:a}=o;return{set(o){const i=t.get.call(this);t.set.call(this,o),this.requestUpdate(a,i,e)},init(t){return void 0!==t&&this.C(a,void 0,e),t}}}if("setter"===a){const{name:a}=o;return function(o){const i=this[a];t.call(this,o),this.requestUpdate(a,i,e)}}throw Error("Unsupported decorator location: "+a)};function ue(e){return(t,o)=>"object"==typeof o?_e(e,t,o):((e,t,o)=>{const a=t.hasOwnProperty(o);return t.constructor.createProperty(o,a?{...e,wrapped:!0}:e),a?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function me(e){return ue({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function pe(e,t){return(o,a,i)=>{const n=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:s}="object"==typeof a?o:i??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return he(o,a,{get(){if(t){let t=e.call(this);return void 0===t&&(t=n(this),s.call(this,t)),t}return n(this)}})}return he(o,a,{get(){return n(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=1;class fe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends fe{constructor(e){if(super(e),e.type!==ge||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.it)e in t||(o.remove(e),this.it.delete(e));for(const e in t){const a=!!t[e];a===this.it.has(e)||this.st?.has(e)||(a?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return F}});var ve="M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z",ye="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M11,15H13V17H11V15M11,7H13V13H11V7",we="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",ke="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",Te="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",Se="M5,2V13H8V22L15,10H11L15,2M17,15H19V17H17V15M17,7H19V13H17V7Z",Ae="M8.5 4.5L5.4 9.5L8.5 14.7L5.2 20.5L3.4 19.6L6.1 14.7L3 9.5L6.7 3.6L8.5 4.5M14.7 4.4L11.6 9.5L14.7 14.5L11.4 20.3L9.6 19.4L12.3 14.5L9.2 9.5L12.9 3.5L14.7 4.4M21 4.4L17.9 9.5L21 14.5L17.7 20.3L15.9 19.4L18.6 14.5L15.5 9.5L19.2 3.5L21 4.4",De="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z",xe="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z",$e="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",Ce="M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17Z",Me="M12 2C7.04 2 3 6.04 3 11C3 14.91 5.5 18.24 9 19.47V22H11V19.94C11.33 20 11.66 20 12 20S12.67 20 13 19.94V22H15V19.47C18.5 18.23 21 14.9 21 11C21 6.04 16.96 2 12 2M14.25 14L11.25 17L9.75 15.5L11 14.25L9.75 13L12.75 10L14.25 11.5L13 12.75L14.25 14M16 9H8V7H16V9Z",Le="M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",Ee="M18.73,18C15.4,21.69 9.71,22 6,18.64C2.33,15.31 2.04,9.62 5.37,5.93C6.9,4.25 9,3.2 11.27,3C7.96,6.7 8.27,12.39 12,15.71C13.63,17.19 15.78,18 18,18C18.25,18 18.5,18 18.73,18Z",Ve="M17 13V7H19V13H17M17 17V15H19V17H17M13 13V5C13 3.3 11.7 2 10 2S7 3.3 7 5V13C4.8 14.7 4.3 17.8 6 20S10.8 22.7 13 21 15.7 16.2 14 14C13.7 13.6 13.4 13.3 13 13M10 4C10.6 4 11 4.4 11 5V8H9V5C9 4.4 9.4 4 10 4Z",Pe="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",ze="M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z",He="M2 4H20V8H18V20H16V8H6V20H4V8H2V4M7 9H15V11H7V9M7 12H15V14H7V12M20 19V17H22V19H20M20 15V10H22V15H20Z";var Oe={version:"version",current:"current"},Ne={card:{climate:{autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",allow_lock_toggle:"Allow lock/unlock from card",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Be={window_open:"Window open",window_bypass:"Bypass window activated",night_mode:"Night mode",eco:"Eco",overpowering:"Overpowering detected",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active",lock_users_active:"User controls locked",lock_automations_active:"Automation changes locked","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",code_error:"Incorrect code",lock:"Lock",unlock:"Unlock",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},Ue={common:Oe,editor:Ne,extra_states:Be},je=Object.freeze({__proto__:null,common:Oe,default:Ue,editor:Ne,extra_states:Be}),Re={version:"Version",current:"Aktuell"},Ie={card:{climate:{autoStartStopEnableEntity:"Auto-Start/Stop-Entität",powerEntity:"Entität für den Stromverbrauch",theme:"Thema",theme_classic:"Klassisch",theme_vtherm:"VTherm",theme_uncolored:"Ohne Farbe",theme_gunmalmg:"Gunmalmg",disable_circle:"Kreis deaktivieren",disable_background_color:"Hintergrundfarbe-Ellipse deaktivieren",disable_window:"Fenster deaktivieren",disable_autoStartStop:"Auto-Start/Stop deaktivieren",disable_overpowering:"Überverbrauch deaktivieren",disable_heat:"Heizen deaktivieren",disable_cool:"Kühlen deaktivieren",disable_heat_cool:"Heizen/Kühlen deaktivieren",disable_auto:"Auto deaktivieren",disable_fan_only:"Nur-Lüfter deaktivieren",disable_dry:"Entfeuchten deaktivieren",disable_off:"Aus deaktivieren",disable_menu:"Menü deaktivieren",set_current_as_main:"Zieltemperatur mit aktueller Temperatur tauschen",disable_safety_warning:"Sicherheitsmeldungen deaktivieren",disable_buttons:"Plus/Minus-Buttons deaktivieren",disable_power_infos:"Verbrauchsinformationen deaktivieren",disable_auto_fan_infos:"Auto-Lüfter-Informationen deaktivieren",disable_name:"Name deaktivieren",eco_temperature:"Eco-Temperatur",allow_lock_toggle:"Allow lock/unlock from card",menu_system:"System menu",disable_sleep:"Disable sleep mode",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},We={window_open:"Fenster offen",window_bypass:"Fenster-Bypass aktiviert",night_mode:"Nachtmodus",eco:"Eco",overpowering:"Überverbrauch erkannt",none:"Manuell",comfort:"Komfort",boost:"Boost",frost:"Frostschutz",power:"Lastabwurf",activity:"Aktivität erkannt",presence:"Anwesenheit erkannt",motion:"Bewegung erkannt",auto_regulation_light:"Leicht",auto_regulation_medium:"Mittel",auto_regulation_strong:"Stark",auto_regulation_slow:"Langsam",auto_regulation_expert:"Experte",auto_fan_mode:"Auto-Lüfter",auto_fan_mode_off:"Keine",auto_fan_none:"Keine",auto_fan_low:"Niedrig",auto_fan_medium:"Mittel",auto_fan_high:"Hoch",auto_fan_turbo:"Turbo",fan_low:"Niedrig",fan_low_mid:"Niedrig-mittel",fan_mid:"Mittel",fan_mid_high:"Mittel-hoch",fan_high:"Hoch",fan_mute:"Leise",fan_turbo:"Turbo",fan_none:"Keine",fan_auto:"Auto",change_message:"Klicken zum Ändern des Presets",toggle_message:"Klicken zum Umschalten",auto_start_stop:"Gestoppt durch Auto-Start/Stop",auto_start_stop_enable:"Aktiviert/deaktiviert Auto-Start/Stop",auto_start_stop_label:"Auto-Start/Stop",temp_unavailable:"-",sleep:"Schlafmodus",lock_users_active:"Benutzersteuerung gesperrt",lock_automations_active:"Automatisierungsänderungen gesperrt",lock:"Sperren",unlock:"Entsperren",code_error:"Falscher Code",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",increase_temp:"Temperatur erhöhen",decrease_temp:"Temperatur verringern",undefined:"None",auto_fan_boost:"Boost",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset"},Fe={common:Re,editor:Ie,extra_states:We},Ze=Object.freeze({__proto__:null,common:Re,default:Fe,editor:Ie,extra_states:We}),Ge={version:"version",current:"Actuelle"},Ke={card:{climate:{autoStartStopEnableEntity:"Entité - auto-start/stop",powerEntity:"Entité - puissance consommée",theme:"Thème",theme_classic:"Classique",theme_vtherm:"VTherm",theme_uncolored:"Sans couleur",theme_gunmalmg:"Gunmalmg",menu_system:"Menu système",disable_circle:"Désactiver le cercle",disable_background_color:"Désactiver l'ellipse colorée de fond",disable_window:"Désactiver fenêtre status",disable_autoStartStop:"Désactiver auto-startStop",disable_overpowering:"Désactiver sur-puissance status",disable_heat:"Désactiver mode chauffe",disable_cool:"Désactiver mode clim",disable_heat_cool:"Désactiver mode chauffe/clim",disable_auto:"Désactiver mode auto",disable_fan_only:"Désactiver mode ventilation",disable_dry:"Désactiver mode déshumidification",disable_off:"Désactiver mode arret",disable_sleep:"Désactiver mode endormi",set_current_as_main:"Echanger temperature cible avec temperature locale",disable_safety_warning:"Désactiver sécurité messages",disable_buttons:"Désactiver les boutons +/-",disable_power_infos:"Désactiver les infos de puissance",disable_auto_fan_infos:"Désactiver les infos auto-ventilation",disable_name:"Désactiver le nom",disable_target_icon:"Désactiver l'icône cible",allow_lock_toggle:"Activer le verrouillage/déverrouillage depuis la carte",lock_relock_delay:"Délai de reverrouillage auto (secondes, 0 = désactivé)",disable_presets:"Désactiver les presets",disable_timed_preset:"Désactiver le champ de durée du preset temporisé",use_manual_duration_input:"Permettre la saisie manuelle de la durée",disable_menu:"Disable menu"}}},qe={window_open:"Fenêtre ouverte",window_bypass:"Bypass fenêtre activé",eco:"Eco",overpowering:"Sur-puissance détectée",none:"Manuel",comfort:"Confort",boost:"Boost",frost:"Hors-gel",power:"Délestage",activity:"Activité",presence:"Présence détectée",motion:"Mouvement détecté",auto_regulation_light:"Légère",auto_regulation_medium:"Moyenne",auto_regulation_strong:"Forte",auto_regulation_slow:"Lente",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"Aucun",auto_fan_none:"Aucun",auto_fan_low:"Bas",auto_fan_medium:"Moyen",auto_fan_high:"Haut",auto_fan_turbo:"Turbo",fan_low:"Bas",fan_low_mid:"Bas-moyen",fan_mid:"Moyen",fan_mid_high:"Moyen-haut",fan_high:"Haut",fan_mute:"Silence",fan_turbo:"Turbo",fan_none:"Aucun",fan_auto:"Auto",fan_1:"Vitesse 1",fan_2:"Vitesse 2",fan_3:"Vitesse 3",fan_4:"Vitesse 4",fan_5:"Vitesse 5",change_message:"Clic pour sélectionner le preset",toggle_message:"Clic pour basculer",auto_start_stop:"Stoppé par auto-start/stop",auto_start_stop_enable:"Active/désactive l'auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Endormi","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Temp. pièce",outdoor_temp:"Temp. ext.",safety_warning:"Attention",safety_warning_msg:"défaut de temp.",hvac_off_manual:"Eteint manuellement",hvac_off_auto_start_stop:"Eteint par auto-start/stop",hvac_off_window_detection:"Eteint par détection d'ouverture",hvac_off_sleep_mode:"Eteint par le mode endormi",hvac_off_safety_detection:"Eteint par le mode sécurité",hvac_off_central_mode:"Eteint par le mode central",safety_detected:"Mode sécurité détectée",overpowering_detected:"Sur-puissance détectée",target_temp_window_eco:"Temp. cible : fenêtre éco",target_temp_window_frost:"Temp. cible : fenêtre hors-gel",target_temp_power:"Temp. cible : délestage",target_temp_central_mode:"Temp. cible : mode central",target_temp_activity_detected:"Temp. cible : activité détectée",target_temp_activity_not_detected:"Temp. cible : activité non détectée",target_temp_absence_detected:"Temp. cible : absence détectée",target_temp_timed_preset:"Temporisation d'un preset active",lock_users_active:"Verrouillage utilisateurs actif",lock_automations_active:"Verrouillage automations actif","messages-button":"Pourquoi cet état ?",recalculation_scheduled:"Sous-jacent en cours de mise à jour","window-bypass-button":"Basculer le bypass fenêtre",code_error:"Code incorrect",lock:"Verrouiller",unlock:"Déverrouiller",timed_preset_title:"Durée en minutes (0 = permanent)",timed_preset_active:"Preset temporisé actif",cancel_timed_preset:"Annuler le preset temporisé",heating_failure:"Défaut de chauffage détecté",cooling_failure:"Défaut de refroidissement détecté",increase_temp:"Augmenter la température",decrease_temp:"Diminuer la température",night_mode:"Night mode",undefined:"None",auto_fan_boost:"Boost"},Ye={common:Ge,editor:Ke,extra_states:qe},Xe=Object.freeze({__proto__:null,common:Ge,default:Ye,editor:Ke,extra_states:qe}),Je={version:"Версия",current:"Текущая"},Qe={card:{climate:{autoStartStopEnableEntity:"Сущность автоматического старта/стопа",powerEntity:"Сущность потребления энергии",disable_circle:"Отключить круг",disable_background_color:"Отключить цветной эллипс фона",disable_window:"Отключить окно",disable_autoStartStop:"Отключить автоматический старт/стоп",disable_overpowering:"Отключить перегрузку",disable_heat:"Отключить обогрев",disable_cool:"Отключить охлаждение",disable_heat_cool:"Отключить обогрев/охлаждение",disable_auto:"Отключить авто",disable_fan_only:"Отключить только вентилятор",disable_dry:"Отключить осушение",disable_off:"Отключить режим выключения",disable_sleep:"Отключить спящий режим",disable_menu:"Отключить меню",set_current_as_main:"Поменять местами целевую и текущую температуру",disable_safety_warning:"Отключить сообщения безопасности",disable_buttons:"Отключить кнопки плюс/минус",disable_power_infos:"Отключить информацию о питании",disable_auto_fan_infos:"Отключить информацию автовентилятора",disable_name:"Отключить название",disable_target_icon:"Отключить иконку цели",allow_lock_toggle:"Разрешить блокировку/разблокировку с карты",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},et={window_open:"Окно открыто",window_bypass:"Обход окна активирован",night_mode:"Ночной режим",eco:"Эко",overpowering:"Обнаружена перегрузка",none:"Ручной",comfort:"Комфорт",boost:"Турбо",frost:"Защита от замерзания",power:"Перегрузка",activity:"Обнаружена активность",presence:"Обнаружено присутствие",motion:"Обнаружено движение",undefined:"Нет",auto_regulation_light:"Легкий",auto_regulation_medium:"Средний",auto_regulation_strong:"Сильный",auto_regulation_slow:"Медленный",auto_regulation_expert:"Экспертный",auto_fan_mode:"Авторежим вентилятора",auto_fan_mode_off:"Нет",auto_fan_none:"Нет",auto_fan_low:"Низкий",auto_fan_medium:"Средний",auto_fan_high:"Высокий",auto_fan_boost:"Турбо",fan_low:"Низкий",fan_low_mid:"Низкий-средний",fan_mid:"Средний",fan_mid_high:"Средний-высокий",fan_high:"Высокий",fan_mute:"Тихий",fan_turbo:"Турбо",fan_none:"Нет",fan_auto:"Авто",change_message:"Клик для смены предустановки",toggle_message:"Клик для переключения",auto_start_stop:"Остановлено авто-старт/стопом",auto_start_stop_enable:"Включить/отключить авто-старт/стоп",auto_start_stop_label:"Авто-старт/стоп",temp_unavailable:"-",sleep:"Сон",minutes:"мин",room_temp:"Температура в помещении",outdoor_temp:"Уличная температура",lock_users_active:"Пользовательское управление заблокировано",lock_automations_active:"Изменения автоматизации заблокированы",code_error:"Неверный код",lock:"Блокировать",unlock:"Разблокировать",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5","New strings for recent edits. Please translate":"-------------------------------------",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},tt="Тема",ot="Классический",at="VTherm",it="Без цвета",nt="Gunmalmg",st={common:Je,editor:Qe,extra_states:et,theme:tt,theme_classic:ot,theme_vtherm:at,theme_uncolored:it,theme_gunmalmg:nt},rt=Object.freeze({__proto__:null,common:Je,default:st,editor:Qe,extra_states:et,theme:tt,theme_classic:ot,theme_gunmalmg:nt,theme_uncolored:it,theme_vtherm:at}),lt={version:"wersja",current:"aktualna"},dt={card:{climate:{allow_lock_toggle:"Pozwól na blokowanie/odblokowanie z karty",autoStartStopEnableEntity:"Encja autoSTART/autoSTOP",powerEntity:"Encja poboru mocy",disable_circle:"Wyłącz koło",disable_background_color:"Wyłącz kolorową elipsę tła",disable_window:"Wyłącz okno",disable_autoStartStop:"Wyłącz autoSTART/autoSTOP",disable_overpowering:"Wyłącz przeciążenie",disable_heat:"Wyłącz tryb grzania",disable_cool:"Wyłącz tryb chłodzenia",disable_heat_cool:"Wyłącz tryb 'grzanie/chłodzenie'",disable_auto:"Wyłącz tryb automatyczny",disable_fan_only:"Wyłącz tryb wentylatora",disable_dry:"Wyłącz tryb osuszania",disable_off:"Wyłącz tryb 'OFF'",disable_sleep:"Wyłącz tryb uśpienia",disable_menu:"Wyłącz menu",set_current_as_main:"Zamień temperaturę docelową z temperaturą pomieszczenia",disable_safety_warning:"Wyłącz ostrzeżenie bezpieczeństwa",disable_buttons:"Wyłącz przyciski +/- (plus/minus)",disable_power_infos:"Wyłącz komunikaty mocowe",disable_auto_fan_infos:"Wyłącz komunikaty autowentylacji",disable_name:"Wyłącz nazwę",disable_target_icon:"Wyłącz ikonę",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},ct={window_open:"Otwarte okno",window_bypass:"Załączone pomijanie okien",night_mode:"Tryb nocny",eco:"Tryb Eko",overpowering:"Wykryte przeciążenie",none:"Ręczny",theme:"Motyw",theme_classic:"Klasyczny",theme_vtherm:"VTherm",theme_uncolored:"Bez koloru",theme_gunmalmg:"Gunmalmg",comfort:"Komfort",boost:"Boost",frost:"Ochrona przed mrozem",power:"Przeciążenie",activity:"Wykryto aktywność",presence:"Wykryto obecność",motion:"Wykryto ruch",undefined:"Brak",auto_regulation_light:"Słaby",auto_regulation_medium:"Średni",auto_regulation_strong:"Silny",auto_regulation_slow:"Powolny",auto_regulation_expert:"Ekspert",auto_fan_mode:"Autowentylacja",auto_fan_mode_off:"Wyłączony",auto_fan_none:"Brak",auto_fan_low:"Niski",auto_fan_medium:"Średni",auto_fan_high:"Wysoki",auto_fan_boost:"Boost",fan_low:"Niski",fan_low_mid:"Niskośredni",fan_mid:"Średni",fan_mid_high:"Średniowysoki",fan_high:"Wysoki",fan_mute:"Cicho",fan_turbo:"Turbo",fan_none:"Brak",fan_auto:"Auto",change_message:"Kliknij aby zmienić preset",toggle_message:"Kliknij aby przełączyć",auto_start_stop:"Zatrzymany przez autoSTART/autoSTOP",auto_start_stop_enable:"Załącz/wyłącz autoSTART/autoSTOP",auto_start_stop_label:"AutoSTART/autoSTOP",temp_unavailable:"-",sleep:"Uśpienie","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Temp. pomieszczenia",outdoor_temp:"Temp. zewnętrzna",safety_warning:"Ostrzeżenie",safety_warning_msg:"Błąd temperatury",hvac_off_manual:"Wyłączony ręcznie",hvac_off_auto_start_stop:"Wyłączony przez autoSTART/autoSTOP",hvac_off_window_detection:"Wyłączony prze otwarcie okna",hvac_off_sleep_mode:"Wyłączony przez tryb uśpienia",hvac_off_safety_detection:"Wyłączony przez tryb bezpieczny",hvac_off_central_mode:"Wyłączony przez tryb główny",safety_detected:"Wykryty tryb bezpieczny",overpowering_detected:"Wykryte przeciążenie",target_temp_window_eco:"Docelowa temp.: Eko okno",target_temp_window_frost:"Docelowa temp.: ochr. przed mrozem okno",target_temp_power:"Docelowa temp.: moc",target_temp_central_mode:"Docelowa temp.: tryb główny",target_temp_activity_detected:"Docelowa temp.: wykryta aktywność",target_temp_activity_not_detected:"Docelowa temp.: brak aktywnści",target_temp_absence_detected:"Docelowa temp.: wykryta nieobecność","messages-button":"Dlaczego taki stan?",recalculation_scheduled:"Aktualizacja urządzeń w toku","window-bypass-button":"Przełącz pomijanie okna",lock_users_active:"Sterowanie użytkownika zablokowane",lock_automations_active:"Zmiany automatyzacji zablokowane",code_error:"Błędny kod",lock:"Zablokuj",unlock:"Odblokuj",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",target_temp_timed_preset:"Timed preset active",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},_t={common:lt,editor:dt,extra_states:ct},ut=Object.freeze({__proto__:null,common:lt,default:_t,editor:dt,extra_states:ct}),mt={version:"verzia",current:"aktuálny"},ht={card:{climate:{disable_window:"Zakázať okno",disable_overpowering:"Zakázať leto",disable_heat:"Zakázať kúrenie",disable_cool:"Zakázať chladenie",disable_heat_cool:"Zakázať kúrenie/chladenie",disable_auto:"Zakázat automatic",disable_fan_only:"Zakázať režim ventilátora",disable_dry:"Zakázať sušenie",disable_off:"Vypnúť",disable_menu:"Zakázať menu",disable_safety_warning:"Zakázať bezpečnostné správy",disable_buttons:"Zakázať plus/mínus tlačidlá",eco_temperature:"Eco teplota",set_current_as_main:"Vymeňte cieľ za miesta s aktuálnou teplotou",allow_lock_toggle:"Povoliť uzamknutie/odomknutie z karty",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_autoStartStop:"Disable auto-startStop",disable_sleep:"Disable sleep mode",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},pt={window_open:"Okno otvorené",night_mode:"Nočný mód",eco:"Eco",overpowering:"Leto",lock_users_active:"Ovládanie používateľa zamknuté",lock_automations_active:"Zmeny automatizácie zamknuté",code_error:"Chybný kód",lock:"Zamknúť",unlock:"Odomknúť",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},gt="Téma",ft="Klasický",bt="VTherm",vt="Bez farby",yt="Gunmalmg",wt={common:mt,editor:ht,extra_states:pt,theme:gt,theme_classic:ft,theme_vtherm:bt,theme_uncolored:vt,theme_gunmalmg:yt},kt={version:"Verzió",current:"Aktuális"},Tt={card:{climate:{disable_window:"Ablak kikapcsolás",disable_overpowering:"Nyár kikapcsolás",disable_heat:"Fűtés kikacsolás",disable_cool:"Hűtés kikapcsolás",disable_heat_cool:"Fűtés/Hűtés kikapcsolás",disable_auto:"Auto kikapcsolás",disable_fan_only:"Csak ventillátor kikapcsolás",disable_dry:"Szárítás kikapcsolás",disable_off:"Kikapcsolás inaktiválás",eco_temperature:"Eco hőmérséklet",set_current_as_main:"Aktuális hőmérséklet használata",allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_autoStartStop:"Disable auto-startStop",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},St={window_open:"Ablak nyitva",night_mode:"Éjszakai mód",eco:"Eco",overpowering:"Nyár",lock_users_active:"Felhasználói vezérlők zárolva",lock_automations_active:"Automatizálási változtatások zárolva",code_error:"Rossz kód",lock:"Zárolás",unlock:"Feloldás",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},At="Téma",Dt="Klasszikus",xt="VTherm",$t="Színtelen",Ct="Gunmalmg",Mt={common:kt,editor:Tt,extra_states:St,theme:At,theme_classic:Dt,theme_vtherm:xt,theme_uncolored:$t,theme_gunmalmg:Ct},Lt={version:"version",current:"nuværende"},Et={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Vt={window_open:"Vindue åben",night_mode:"Nattilstand",eco:"Eco",overpowering:"Overpowering",lock_users_active:"Brugerkontroller låst",lock_automations_active:"Automatiske ændringer låst",code_error:"Forkert kode",lock:"Lås",unlock:"Lås op",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},Pt="Tema",zt="Klassisk",Ht="VTherm",Ot="Ufarvet",Nt="Gunmalmg",Bt={common:Lt,editor:Et,extra_states:Vt,theme:Pt,theme_classic:zt,theme_vtherm:Ht,theme_uncolored:Ot,theme_gunmalmg:Nt},Ut={version:"version",current:"Actual"},jt={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Rt={window_open:"Ventana abierta",night_mode:"Modo noche",eco:"Eco",overpowering:"Verano",lock_users_active:"Controles de usuario bloqueados",lock_automations_active:"Cambios de automatización bloqueados",code_error:"Código incorrecto",lock:"Bloquear",unlock:"Desbloquear",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",increase_temp:"Aumentar la temperatura",decrease_temp:"Disminuir la temperatura",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset"},It="Tema",Wt="Clásico",Ft="VTherm",Zt="Sin color",Gt="Gunmalmg",Kt={common:Ut,editor:jt,extra_states:Rt,theme:It,theme_classic:Wt,theme_vtherm:Ft,theme_uncolored:Zt,theme_gunmalmg:Gt},qt={version:"versiyon",current:"şimdiki"},Yt={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Xt={window_open:"Pencere açık",night_mode:"Gece modu",eco:"Eco",overpowering:"Yaz",lock_users_active:"Kullanıcı kontrolleri kilitlendi",lock_automations_active:"Otomasyon değişiklikleri kilitlendi",code_error:"Hatalı kod",lock:"Kilitle",unlock:"Kilidi aç",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},Jt="Tema",Qt="Klasik",eo="VTherm",to="Renksiz",oo="Gunmalmg",ao={common:qt,editor:Yt,extra_states:Xt,theme:Jt,theme_classic:Qt,theme_vtherm:eo,theme_uncolored:to,theme_gunmalmg:oo},io={version:"versione",current:"attuale"},no={card:{climate:{autoStartStopEnableEntity:"Entità di avvio/arresto automatico",powerEntity:"Entità di consumo energetico",disable_circle:"Disabilita cerchio",disable_background_color:"Disabilita ellisse colore di sfondo",disable_window:"Disabilita la finestra",disable_autoStartStop:"Disabilita Avvio/Arresto automatico",disable_overpowering:"Disabilita la sovralimentazione",disable_heat:"Disabilita Riscalda",disable_cool:"Disabilita Raffresca",disable_heat_cool:"Disabilita Riscalda/Raffredda",disable_auto:"Disabilita Automatico",disable_fan_only:"Disabilita Ventilazione",disable_dry:"Disabilita Deumidifica",disable_off:"Disabilita off",disable_sleep:"Disabilita modo riposo",disable_menu:"Disabilita menu",set_current_as_main:"Scambia Setpoint con Temperatura ambiente",disable_safety_warning:"Disabilita i messaggi di sicurezza",disable_buttons:"Disabilita pulsanti Più/Meno",disable_power_infos:"Disabilita Info Potenza",disable_auto_fan_infos:"Disabilita Info auto-fan",disable_name:"Disabilita nome",disable_target_icon:"Disabilita  icona obbiettivo",allow_lock_toggle:"Allow lock/unlock from card",disable_timed_preset:"Disattiva immissione durata preimpostata",use_manual_duration_input:"Consenti l'inserimento manuale della durata invece della selezione",theme:"Tema",theme_classic:"Classico",theme_vtherm:"VTherm",theme_uncolored:"Senza colore",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets"}}},so={window_open:"Finestra aperta",window_bypass:"Bypass finestra Attivo",night_mode:"Modalità notte",eco:"Eco",overpowering:"Rilevata Sovrapotenza",none:"Manuale",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Sovrapotenza",activity:"Rilevata Attività",presence:"Rilevata Presenza",motion:"Rilevato motimento",undefined:"Nulla",auto_regulation_light:"Leggero",auto_regulation_medium:"Medio",auto_regulation_strong:"Forte",auto_regulation_slow:"Lento",auto_regulation_expert:"Esperto",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"Nulla",auto_fan_none:"Nulla",auto_fan_low:"Basso",auto_fan_medium:"Medio",auto_fan_high:"Alto",auto_fan_boost:"Boost",fan_low:"Basso",fan_low_mid:"Medio-basso",fan_mid:"Medio",fan_mid_high:"Medio-alto",fan_high:"Alto",fan_mute:"Silenzioso",fan_turbo:"Turbo",fan_none:"Nulla",fan_auto:"Auto",change_message:"Click per cambio preimpostazione",toggle_message:"Click per commutare",auto_start_stop:"Fermato da auto-start/stop",auto_start_stop_enable:"Abilita/disabilita auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Riposo","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Temp. ambiente",outdoor_temp:"Temp. esterna",safety_warning:"Avviso",safety_warning_msg:"Guasto Temp.",hvac_off_manual:"Spento manualmente",hvac_off_auto_start_stop:"Spento da auto-start/stop",hvac_off_window_detection:"Spento da rilevamento finestra",hvac_off_sleep_mode:"Spento da modo notte",hvac_off_safety_detection:"Spento da modalità sicurezza",hvac_off_central_mode:"Spento da modalità centralizzato",safety_detected:"Modalità sicurezza rilavata",overpowering_detected:"Sovrapotenza rilevata",target_temp_window_eco:"Temp. impostata: window eco",target_temp_window_frost:"Temp. impostata: window freddo",target_temp_power:"Temp. impostata: power",target_temp_central_mode:"Temp. impostata: modalità centralizzata",target_temp_activity_detected:"Temp. impostata: rilevata atività",target_temp_activity_not_detected:"Temp. impostata: attività non rilevata",target_temp_absence_detected:"Temp. impostata: assenza rilevata",lock_users_active:"Controlli utente bloccati",lock_automations_active:"Modifiche automazioni bloccate","messages-button":"Perchè questo stato?",recalculation_scheduled:"Aggiornamento sottostanti in corso","window-bypass-button":"Commuta bypass finestra",code_error:"Codice errato",lock:"Blocca",unlock:"Sblocca",timed_preset_title:"Durata in minuti (0 = permanente)",timed_preset_active:"Preimpostazione temporizzata attiva",cancel_timed_preset:"Disattiva Preimpostazione temporizzata",heating_failure:"Rilevato guasto al riscaldamento",cooling_failure:"Rilevato guasto al raffrescamento",increase_temp:"Aumenta la temperatura",decrease_temp:"Diminuisci la temperatura",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",target_temp_timed_preset:"Timed preset active"},ro={common:io,editor:no,extra_states:so},lo={version:"versão",current:"actual"},co={card:{climate:{disable_window:"Desactivar Janela",disable_overpowering:"Desactivar Verão",disable_heat:"Desactivar Aquecimento",disable_cool:"Desactivar Arrefecimento",disable_heat_cool:"Desactivar Aquecimento/Arrefecimento",disable_auto:"Desactivar Auto",disable_fan_only:"Desactivar Ventilação",disable_dry:"Desactivar Secagem",disable_off:"Desactivar Off",eco_temperature:"Modo Eco",set_current_as_main:"Mudar para a temperatura local actual",theme:"Tema",theme_classic:"Clássico",theme_vtherm:"VTherm",theme_uncolored:"Sem cor",theme_gunmalmg:"Gunmalmg",allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_autoStartStop:"Disable auto-startStop",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},_o={window_open:"Janela Aberta",night_mode:"Modo Noturno",eco:"Eco",overpowering:"Verão",lock_users_active:"Controlos de utilizador bloqueados",lock_automations_active:"Alterações de automação bloqueadas",code_error:"Código incorreto",lock:"Bloquear",unlock:"Desbloquear",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},uo={common:lo,editor:co,extra_states:_o},mo={version:"版本",current:"当前"},ho={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},po={window_open:"窗户打开",night_mode:"夜间模式",eco:"节能",overpowering:"夏季",lock_users_active:"用户控制已锁定",lock_automations_active:"自动化更改已锁定",code_error:"代码错误",lock:"锁定",unlock:"解锁",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},go="VTherm",fo="Gunmalmg",bo={common:mo,editor:ho,extra_states:po,theme:"主题",theme_classic:"经典",theme_vtherm:go,theme_uncolored:"无颜色",theme_gunmalmg:fo},vo={version:"версія",current:"поточний"},yo={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},wo={window_open:"Вікно відчинено",night_mode:"Нічний режим",eco:"Економія",overpowering:"Літо",lock_users_active:"Керування користувача заблоковано",lock_automations_active:"Зміни автоматизації заблоковані",code_error:"Невірний код",lock:"Блокувати",unlock:"Розблокувати",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},ko="Тема",To="Класичний",So="VTherm",Ao="Без кольору",Do="Gunmalmg",xo={common:vo,editor:yo,extra_states:wo,theme:ko,theme_classic:To,theme_vtherm:So,theme_uncolored:Ao,theme_gunmalmg:Do},$o={version:"έκδοση",current:"τρέχουσα"},Co={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Mo={window_open:"Παράθυρο ανοικτό",night_mode:"Λειτουργία νυκτός",eco:"Εξοικονόμηση",overpowering:"Καλοκαίρι",lock_users_active:"Έλεγχοι χρήστη κλειδωμένοι",lock_automations_active:"Αλλαγές αυτοματισμών κλειδωμένες",code_error:"Λάθος κωδικός",lock:"Κλείδωμα",unlock:"Ξεκλείδωμα",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},Lo="Θέμα",Eo="Κλασικό",Vo="VTherm",Po="Χωρίς χρώμα",zo="Gunmalmg",Ho={common:$o,editor:Co,extra_states:Mo,theme:Lo,theme_classic:Eo,theme_vtherm:Vo,theme_uncolored:Po,theme_gunmalmg:zo},Oo={version:"versie",current:"huidig"},No={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Bo={window_open:"Raam open",night_mode:"Nacht modus",eco:"Eco",overpowering:"Zomer",lock_users_active:"Gebruikersbediening vergrendeld",lock_automations_active:"Automatisatie wijzigingen vergrendeld",code_error:"Foute code",lock:"Vergrendelen",unlock:"Ontgrendelen",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},Uo="Thema",jo="Classic",Ro="VTherm",Io="Ongekleurd",Wo="Gunmalmg",Fo={common:Oo,editor:No,extra_states:Bo,theme:Uo,theme_classic:jo,theme_vtherm:Ro,theme_uncolored:Io,theme_gunmalmg:Wo},Zo={version:"versjon",current:"nåværende"},Go={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Ko={window_open:"Vindu åpent",night_mode:"Nattmodus",eco:"Eco",overpowering:"Sommer",lock_users_active:"Brukerkontroller låst",lock_automations_active:"Automatiseringsendringer låst",code_error:"Feil kode",lock:"Lås",unlock:"Lås opp",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},qo="Tema",Yo="Klassisk",Xo="VTherm",Jo="Uten farge",Qo="Gunmalmg",ea={common:Zo,editor:Go,extra_states:Ko,theme:qo,theme_classic:Yo,theme_vtherm:Xo,theme_uncolored:Jo,theme_gunmalmg:Qo},ta={version:"verze",current:"aktuální"},oa={card:{climate:{disable_window:"Zakázat okno",disable_overpowering:"Zakázat léto",disable_heat:"Zakázat topení",disable_cool:"Zakázat chlazení",disable_heat_cool:"Zakázat topení/chlazení",disable_auto:"Zakázať automatic",disable_fan_only:"Zakázat pouze ventilátor",disable_dry:"Zakázat sušení",disable_off:"Zakázat vypnuto",disable_menu:"Zakázat menu",disable_safety_warning:"Zakázat bezpečnostní oznámení",disable_buttons:"Zakázat tlačítka plus/minus",eco_temperature:"Eco teplota",set_current_as_main:"Prohodit místa cílovoé a aktáalní teploty",allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_autoStartStop:"Disable auto-startStop",disable_sleep:"Disable sleep mode",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},aa={window_open:"okno otevřeno",night_mode:"Noční režim",eco:"Eco",overpowering:"Léto",lock_users_active:"Uživatelské ovládání zamčeno",lock_automations_active:"Změny automatizace zamčeny",code_error:"Chybný kód",lock:"Zamknout",unlock:"Odemknout",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},ia="Téma",na="Klasické",sa="VTherm",ra="Bez barvy",la="Gunmalmg",da={common:ta,editor:oa,extra_states:aa,theme:ia,theme_classic:na,theme_vtherm:sa,theme_uncolored:ra,theme_gunmalmg:la},ca={version:"različica",current:"trenutno"},_a={card:{climate:{allow_lock_toggle:"Dovoli zaklepanje/odklepanje iz kartice",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},ua={window_open:"Okno odprto",night_mode:"Nočni način",eco:"Eko",overpowering:"Poletje",lock_users_active:"Uporabniške kontrole zaklenjene",lock_automations_active:"Spremembe avtomatizacije zaklenjene",code_error:"Napačna koda",lock:"Zakleni",unlock:"Odkleni",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},ma="Tema",ha="Klasična",pa="VTherm",ga="Brez barve",fa="Gunmalmg",ba={common:ca,editor:_a,extra_states:ua,theme:ma,theme_classic:ha,theme_vtherm:pa,theme_uncolored:ga,theme_gunmalmg:fa},va={version:"version",current:"Nuvarande"},ya={window_open:"Fönster öppet",night_mode:"Nattläge",eco:"Eco",overpowering:"Sommar",lock_users_active:"Användarkontroller låsta",lock_automations_active:"Automationsändringar låsta",code_error:"Fel kod",lock:"Lås",unlock:"Lås upp",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},wa="Tema",ka="Klassisk",Ta="VTherm",Sa="Omdfärgad",Aa="Gunmalmg",Da={card:{climate:{autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",allow_lock_toggle:"Allow lock/unlock from card",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},xa={common:va,extra_states:ya,theme:wa,theme_classic:ka,theme_vtherm:Ta,theme_uncolored:Sa,theme_gunmalmg:Aa,editor:Da},$a={version:"версия",currrent:"текущий",current:"current"},Ca={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Ma={window_open:"Отворен прозорец",night_mode:"Нощен режим",eco:"Екологичен режим",overpowering:"Лято",lock_users_active:"Потребителските контроли са заключени",lock_automations_active:"Промените от автоматизации са заключени",code_error:"Грешен код",lock:"Заключване",unlock:"Отключване",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},La="Тема",Ea="Класически",Va="VTherm",Pa="Без цвят",za="Gunmalmg",Ha={common:$a,editor:Ca,extra_states:Ma,theme:La,theme_classic:Ea,theme_vtherm:Va,theme_uncolored:Pa,theme_gunmalmg:za},Oa={version:"version",current:"Nykyinen"},Na={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Ba={window_open:"Ikkuna auki",night_mode:"Yötila",eco:"Eco",overpowering:"Kesä",lock_users_active:"Käyttäjän säädöt lukittu",lock_automations_active:"Automaation muutokset lukittu",code_error:"Virheellinen koodi",lock:"Lukitse",unlock:"Avaa lukitus",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},Ua="Teema",ja="Klassinen",Ra="VTherm",Ia="Väritön",Wa="Gunmalmg",Fa={common:Oa,editor:Na,extra_states:Ba,theme:Ua,theme_classic:ja,theme_vtherm:Ra,theme_uncolored:Ia,theme_gunmalmg:Wa},Za={version:"versiune",current:"curent"},Ga={card:{climate:{allow_lock_toggle:"Permite blocarea/deblocarea din card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Ka={window_open:"Fereastră deschisă",night_mode:"Mod noapte",eco:"Eco",overpowering:"Vară",lock_users_active:"Comenzi utilizator blocate",lock_automations_active:"Modificări automatizări blocate",code_error:"Cod incorect",lock:"Blocare",unlock:"Deblocare",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},qa="Temă",Ya="Clasic",Xa="VTherm",Ja="Fără culoare",Qa="Gunmalmg",ei={common:Za,editor:Ga,extra_states:Ka,theme:qa,theme_classic:Ya,theme_vtherm:Xa,theme_uncolored:Ja,theme_gunmalmg:Qa},ti={version:"versió",current:"Actual"},oi={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card",autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",theme:"Theme",theme_classic:"Classic",theme_vtherm:"VTherm",theme_uncolored:"Uncolored",theme_gunmalmg:"Gunmalmg",menu_system:"System menu",disable_circle:"Disable circle",disable_background_color:"Disable background color ellipse",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",lock_relock_delay:"Auto-relock delay (seconds, 0 = disabled)",disable_presets:"Disable presets",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},ai={window_open:"Finestra oberta",night_mode:"Mode nocturn",eco:"Eco",overpowering:"Estiu",lock_users_active:"Controls d'usuari bloquejats",lock_automations_active:"Canvis d'automatització bloquejats",code_error:"Codi incorrecte",lock:"Bloquejar",unlock:"Desbloquejar",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected",window_bypass:"Bypass window activated",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",fan_1:"Speed 1",fan_2:"Speed 2",fan_3:"Speed 3",fan_4:"Speed 4",fan_5:"Speed 5",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",increase_temp:"Increase temperature",decrease_temp:"Decrease temperature"},ii="Tema",ni="Clàssic",si="VTherm",ri="Sense color",li="Gunmalmg",di={common:ti,editor:oi,extra_states:ai,theme:ii,theme_classic:ni,theme_vtherm:si,theme_uncolored:ri,theme_gunmalmg:li};const ci={en:je,de:Ze,fr:Xe,ru:rt,sk:Object.freeze({__proto__:null,common:mt,default:wt,editor:ht,extra_states:pt,theme:gt,theme_classic:ft,theme_gunmalmg:yt,theme_uncolored:vt,theme_vtherm:bt}),hu:Object.freeze({__proto__:null,common:kt,default:Mt,editor:Tt,extra_states:St,theme:At,theme_classic:Dt,theme_gunmalmg:Ct,theme_uncolored:$t,theme_vtherm:xt}),pl:ut,da:Object.freeze({__proto__:null,common:Lt,default:Bt,editor:Et,extra_states:Vt,theme:Pt,theme_classic:zt,theme_gunmalmg:Nt,theme_uncolored:Ot,theme_vtherm:Ht}),es:Object.freeze({__proto__:null,common:Ut,default:Kt,editor:jt,extra_states:Rt,theme:It,theme_classic:Wt,theme_gunmalmg:Gt,theme_uncolored:Zt,theme_vtherm:Ft}),tr:Object.freeze({__proto__:null,common:qt,default:ao,editor:Yt,extra_states:Xt,theme:Jt,theme_classic:Qt,theme_gunmalmg:oo,theme_uncolored:to,theme_vtherm:eo}),it:Object.freeze({__proto__:null,common:io,default:ro,editor:no,extra_states:so}),pt:Object.freeze({__proto__:null,common:lo,default:uo,editor:co,extra_states:_o}),cn:Object.freeze({__proto__:null,common:mo,default:bo,editor:ho,extra_states:po,theme:"主题",theme_classic:"经典",theme_gunmalmg:fo,theme_uncolored:"无颜色",theme_vtherm:go}),uk:Object.freeze({__proto__:null,common:vo,default:xo,editor:yo,extra_states:wo,theme:ko,theme_classic:To,theme_gunmalmg:Do,theme_uncolored:Ao,theme_vtherm:So}),el:Object.freeze({__proto__:null,common:$o,default:Ho,editor:Co,extra_states:Mo,theme:Lo,theme_classic:Eo,theme_gunmalmg:zo,theme_uncolored:Po,theme_vtherm:Vo}),nl:Object.freeze({__proto__:null,common:Oo,default:Fo,editor:No,extra_states:Bo,theme:Uo,theme_classic:jo,theme_gunmalmg:Wo,theme_uncolored:Io,theme_vtherm:Ro}),no:Object.freeze({__proto__:null,common:Zo,default:ea,editor:Go,extra_states:Ko,theme:qo,theme_classic:Yo,theme_gunmalmg:Qo,theme_uncolored:Jo,theme_vtherm:Xo}),cs:Object.freeze({__proto__:null,common:ta,default:da,editor:oa,extra_states:aa,theme:ia,theme_classic:na,theme_gunmalmg:la,theme_uncolored:ra,theme_vtherm:sa}),sl:Object.freeze({__proto__:null,common:ca,default:ba,editor:_a,extra_states:ua,theme:ma,theme_classic:ha,theme_gunmalmg:fa,theme_uncolored:ga,theme_vtherm:pa}),sv:Object.freeze({__proto__:null,common:va,default:xa,editor:Da,extra_states:ya,theme:wa,theme_classic:ka,theme_gunmalmg:Aa,theme_uncolored:Sa,theme_vtherm:Ta}),bg:Object.freeze({__proto__:null,common:$a,default:Ha,editor:Ca,extra_states:Ma,theme:La,theme_classic:Ea,theme_gunmalmg:za,theme_uncolored:Pa,theme_vtherm:Va}),fi:Object.freeze({__proto__:null,common:Oa,default:Fa,editor:Na,extra_states:Ba,theme:Ua,theme_classic:ja,theme_gunmalmg:Wa,theme_uncolored:Ia,theme_vtherm:Ra}),ro:Object.freeze({__proto__:null,common:Za,default:ei,editor:Ga,extra_states:Ka,theme:qa,theme_classic:Ya,theme_gunmalmg:Qa,theme_uncolored:Ja,theme_vtherm:Xa}),ca:Object.freeze({__proto__:null,common:ti,default:di,editor:oi,extra_states:ai,theme:ii,theme_classic:ni,theme_gunmalmg:li,theme_uncolored:ri,theme_vtherm:si})},_i="en";function ui({hass:e,string:t,search:o="",replace:a=""}){var i;const n=null!==(i=null==e?void 0:e.locale.language)&&void 0!==i?i:_i;let s;try{s=t.split(".").reduce(((e,t)=>e[t]),ci[n])}catch(e){s=t.split(".").reduce(((e,t)=>e[t]),ci.en)}return void 0===s&&(s=t.split(".").reduce(((e,t)=>e[t]),ci.en)),""!==o&&""!==a&&(s=s.replace(o,a)),s}function mi(e,t){try{return e.split(".").reduce(((e,t)=>e[t]),ci[t])}catch(e){return}}function hi(e){return function(t){var o;let a=mi(t,null!==(o=null==e?void 0:e.locale.language)&&void 0!==o?o:_i);return a||(a=mi(t,_i)),null!=a?a:t}}var pi,gi,fi=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function bi(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(a=e[o],i=t[o],!(a===i||fi(a)&&fi(i)))return!1;var a,i;return!0}function vi(e,t){void 0===t&&(t=bi);var o=null;function a(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];if(o&&o.lastThis===this&&t(a,o.lastArgs))return o.lastResult;var n=e.apply(this,a);return o={lastResult:n,lastArgs:a,lastThis:this},n}return a.clear=function(){o=null},a}vi((e=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"}))),vi((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"}))),vi((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric"}))),vi((e=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short"}))),vi((e=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric"}))),vi((e=>new Intl.DateTimeFormat(e.language,{month:"long"}))),vi((e=>new Intl.DateTimeFormat(e.language,{year:"numeric"}))),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(pi||(pi={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(gi||(gi={}));const yi=vi((e=>{if(e.time_format===gi.language||e.time_format===gi.system){const t=e.time_format===gi.language?e.language:void 0,o=(new Date).toLocaleString(t);return o.includes("AM")||o.includes("PM")}return e.time_format===gi.am_pm}));vi((e=>new Intl.DateTimeFormat("en"!==e.language||yi(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:yi(e)?"numeric":"2-digit",minute:"2-digit",hour12:yi(e)}))),vi((e=>new Intl.DateTimeFormat("en"!==e.language||yi(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:yi(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:yi(e)}))),vi((e=>new Intl.DateTimeFormat("en"!==e.language||yi(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:yi(e)}))),vi((e=>new Intl.DateTimeFormat("en"!==e.language||yi(e)?e.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:yi(e)}))),vi((e=>new Intl.DateTimeFormat("en"!==e.language||yi(e)?e.language:"en-u-hc-h23",{hour:yi(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:yi(e)}))),vi((e=>new Intl.DateTimeFormat("en"!==e.language||yi(e)?e.language:"en-u-hc-h23",{weekday:"long",hour:yi(e)?"numeric":"2-digit",minute:"2-digit",hour12:yi(e)})));const wi=(e,t,o,a)=>{a=a||{},o=null==o?{}:o;const i=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return i.detail=o,e.dispatchEvent(i),i},ki=(e,t,o)=>Math.min(Math.max(e,t),o),Ti=(e,t,o)=>{const a=t?(e=>{switch(e.number_format){case pi.comma_decimal:return["en-US","en"];case pi.decimal_comma:return["de","es","it"];case pi.space_comma:return["fr","sv","cs"];case pi.system:return;default:return e.language}})(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==pi.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(a,Si(e,o)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,Si(e,o)).format(Number(e))}return"string"==typeof e?e:`${((e,t=2)=>Math.round(e*10**t)/10**t)(e,null==o?void 0:o.maximumFractionDigits).toString()}${"currency"===(null==o?void 0:o.style)?` ${o.currency}`:""}`},Si=(e,t)=>{const o=Object.assign({maximumFractionDigits:2},t);if("string"!=typeof e)return o;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;o.minimumFractionDigits=t,o.maximumFractionDigits=t}return o};class Ai extends TypeError{constructor(e,t){let o;const{message:a,explanation:i,...n}=e,{path:s}=e,r=0===s.length?a:`At path: ${s.join(".")} -- ${a}`;super(i??r),null!=i&&(this.cause=r),Object.assign(this,n),this.name=this.constructor.name,this.failures=()=>o??(o=[e,...t()])}}function Di(e){return"object"==typeof e&&null!=e}function xi(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function $i(e,t,o,a){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:i,branch:n}=t,{type:s}=o,{refinement:r,message:l=`Expected a value of type \`${s}\`${r?` with refinement \`${r}\``:""}, but received: \`${xi(a)}\``}=e;return{value:a,type:s,refinement:r,key:i[i.length-1],path:i,branch:n,...e,message:l}}function*Ci(e,t,o,a){(function(e){return Di(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const i of e){const e=$i(i,t,o,a);e&&(yield e)}}function*Mi(e,t,o={}){const{path:a=[],branch:i=[e],coerce:n=!1,mask:s=!1}=o,r={path:a,branch:i};if(n&&(e=t.coercer(e,r),s&&"type"!==t.type&&Di(t.schema)&&Di(e)&&!Array.isArray(e)))for(const o in e)void 0===t.schema[o]&&delete e[o];let l="valid";for(const a of t.validator(e,r))a.explanation=o.message,l="not_valid",yield[a,void 0];for(let[d,c,_]of t.entries(e,r)){const t=Mi(c,_,{path:void 0===d?a:[...a,d],branch:void 0===d?i:[...i,c],coerce:n,mask:s,message:o.message});for(const o of t)o[0]?(l=null!=o[0].refinement?"not_refined":"not_valid",yield[o[0],void 0]):n&&(c=o[1],void 0===d?e=c:e instanceof Map?e.set(d,c):e instanceof Set?e.add(c):Di(e)&&(void 0!==c||d in e)&&(e[d]=c))}if("not_valid"!==l)for(const a of t.refiner(e,r))a.explanation=o.message,l="not_refined",yield[a,void 0];"valid"===l&&(yield[void 0,e])}class Li{constructor(e){const{type:t,schema:o,validator:a,refiner:i,coercer:n=(e=>e),entries:s=function*(){}}=e;this.type=t,this.schema=o,this.entries=s,this.coercer=n,this.validator=a?(e,t)=>Ci(a(e,t),t,this,e):()=>[],this.refiner=i?(e,t)=>Ci(i(e,t),t,this,e):()=>[]}assert(e,t){return Ei(e,this,t)}create(e,t){return function(e,t,o){const a=Vi(e,t,{coerce:!0,message:o});if(a[0])throw a[0];return a[1]}(e,this,t)}is(e){return function(e,t){const o=Vi(e,t);return!o[0]}(e,this)}mask(e,t){return function(e,t,o){const a=Vi(e,t,{coerce:!0,mask:!0,message:o});if(a[0])throw a[0];return a[1]}(e,this,t)}validate(e,t={}){return Vi(e,this,t)}}function Ei(e,t,o){const a=Vi(e,t,{message:o});if(a[0])throw a[0]}function Vi(e,t,o={}){const a=Mi(e,t,o),i=function(e){const{done:t,value:o}=e.next();return t?void 0:o}(a);if(i[0]){const e=new Ai(i[0],(function*(){for(const e of a)e[0]&&(yield e[0])}));return[e,void 0]}return[void 0,i[1]]}function Pi(e,t){return new Li({type:e,schema:null,validator:t})}function zi(e){return new Li({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[o,a]of t.entries())yield[o,a,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${xi(e)}`})}function Hi(){return Pi("boolean",(e=>"boolean"==typeof e))}function Oi(e){const t=xi(e),o=typeof e;return new Li({type:"literal",schema:"string"===o||"number"===o||"boolean"===o?e:null,validator:o=>o===e||`Expected the literal \`${t}\`, but received: ${xi(o)}`})}function Ni(){return Pi("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${xi(e)}`))}function Bi(e){const t=e?Object.keys(e):[],o=Pi("never",(()=>!1));return new Li({type:"object",schema:e||null,*entries(a){if(e&&Di(a)){const i=new Set(Object.keys(a));for(const o of t)i.delete(o),yield[o,a[o],e[o]];for(const e of i)yield[e,a[e],o]}},validator:e=>Di(e)||`Expected an object, but received: ${xi(e)}`,coercer:e=>Di(e)?{...e}:e})}function Ui(e){return new Li({...e,validator:(t,o)=>void 0===t||e.validator(t,o),refiner:(t,o)=>void 0===t||e.refiner(t,o)})}function ji(){return Pi("string",(e=>"string"==typeof e||`Expected a string, but received: ${xi(e)}`))}function Ri(e){const t=Object.keys(e);return new Li({type:"type",schema:e,*entries(o){if(Di(o))for(const a of t)yield[a,o[a],e[a]]},validator:e=>Di(e)||`Expected an object, but received: ${xi(e)}`,coercer:e=>Di(e)?{...e}:e})}function Ii(e){const t=e.map((e=>e.type)).join(" | ");return new Li({type:"union",schema:null,coercer(t){for(const o of e){const[e,a]=o.validate(t,{coerce:!0});if(!e)return a}return t},validator(o,a){const i=[];for(const t of e){const[...e]=Mi(o,t,a),[n]=e;if(!n[0])return[];for(const[t]of e)t&&i.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${xi(o)}`,...i]}})}const Wi=Bi({user:ji()}),Fi=Ii([Hi(),Bi({text:Ui(ji()),excemptions:Ui(zi(Wi))})]),Zi=Bi({action:Oi("url"),url_path:ji(),confirmation:Ui(Fi)}),Gi=Bi({action:Oi("call-service"),service:ji(),service_data:Ui(Bi()),data:Ui(Bi()),target:Ui(Bi({entity_id:Ui(Ii([ji(),zi(ji())])),device_id:Ui(Ii([ji(),zi(ji())])),area_id:Ui(Ii([ji(),zi(ji())]))})),confirmation:Ui(Fi)}),Ki=Bi({action:Oi("navigate"),navigation_path:ji(),confirmation:Ui(Fi)}),qi=Ri({action:Oi("fire-dom-event")}),Yi=Bi({action:function(e){const t={},o=e.map((e=>xi(e))).join();for(const o of e)t[o]=o;return new Li({type:"enums",schema:t,validator:t=>e.includes(t)||`Expected one of \`${o}\`, but received: ${xi(t)}`})}(["none","toggle","more-info","call-service","url","navigate"]),confirmation:Ui(Fi)});var Xi;Xi=e=>{if(e&&"object"==typeof e&&"action"in e)switch(e.action){case"call-service":return Gi;case"fire-dom-event":return qi;case"navigate":return Ki;case"url":return Zi}return Yi},new Li({type:"dynamic",schema:null,*entries(e,t){const o=Xi(e,t);yield*o.entries(e,t)},validator:(e,t)=>Xi(e,t).validator(e,t),coercer:(e,t)=>Xi(e,t).coercer(e,t),refiner:(e,t)=>Xi(e,t).refiner(e,t)}),s`
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
`;const Ji=([[e,t],[o,a]],[i,n])=>[e*i+t*n,o*i+a*n],Qi=([e,t],[o,a])=>[e+o,t+a],en=e=>e/180*Math.PI,tn=e=>{const{x:t,y:o,r:a,start:i,end:n,rotate:s=0}=e,r=t,l=o,d=a,c=a,_=en(i),u=(en(n)-_)%(2*Math.PI),m=en(s),h=(e=>[[Math.cos(e),-Math.sin(e)],[Math.sin(e),Math.cos(e)]])(m),[p,g]=Qi(Ji(h,[d*Math.cos(_),c*Math.sin(_)]),[r,l]),[f,b]=Qi(Ji(h,[d*Math.cos(_+u),c*Math.sin(_+u)]),[r,l]),v=u>Math.PI?1:0,y=u>0?1:0;return["M",p,g,"A",d,c,m/(2*Math.PI)*360,v,y,f,b].join(" ")};function on(){return on=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},on.apply(this,arguments)}function an(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function nn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var sn,rn="function"!=typeof Object.assign?function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),o=1;o<arguments.length;o++){var a=arguments[o];if(null!=a)for(var i in a)a.hasOwnProperty(i)&&(t[i]=a[i])}return t}:Object.assign,ln=["","webkit","Moz","MS","ms","o"],dn="undefined"==typeof document?{style:{}}:document.createElement("div"),cn=Math.round,_n=Math.abs,un=Date.now;function mn(e,t){for(var o,a,i=t[0].toUpperCase()+t.slice(1),n=0;n<ln.length;){if((a=(o=ln[n])?o+i:t)in e)return a;n++}}sn="undefined"==typeof window?{}:window;var hn=mn(dn.style,"touchAction"),pn=void 0!==hn;var gn="compute",fn="auto",bn="manipulation",vn="none",yn="pan-x",wn="pan-y",kn=function(){if(!pn)return!1;var e={},t=sn.CSS&&sn.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(o){return e[o]=!t||sn.CSS.supports("touch-action",o)})),e}(),Tn="ontouchstart"in sn,Sn=void 0!==mn(sn,"PointerEvent"),An=Tn&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),Dn="touch",xn="mouse",$n=25,Cn=1,Mn=4,Ln=8,En=1,Vn=2,Pn=4,zn=8,Hn=16,On=Vn|Pn,Nn=zn|Hn,Bn=On|Nn,Un=["x","y"],jn=["clientX","clientY"];function Rn(e,t,o){var a;if(e)if(e.forEach)e.forEach(t,o);else if(void 0!==e.length)for(a=0;a<e.length;)t.call(o,e[a],a,e),a++;else for(a in e)e.hasOwnProperty(a)&&t.call(o,e[a],a,e)}function In(e,t){return"function"==typeof e?e.apply(t&&t[0]||void 0,t):e}function Wn(e,t){return e.indexOf(t)>-1}var Fn=function(){function e(e,t){this.manager=e,this.set(t)}var t=e.prototype;return t.set=function(e){e===gn&&(e=this.compute()),pn&&this.manager.element.style&&kn[e]&&(this.manager.element.style[hn]=e),this.actions=e.toLowerCase().trim()},t.update=function(){this.set(this.manager.options.touchAction)},t.compute=function(){var e=[];return Rn(this.manager.recognizers,(function(t){In(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))})),function(e){if(Wn(e,vn))return vn;var t=Wn(e,yn),o=Wn(e,wn);return t&&o?vn:t||o?t?yn:wn:Wn(e,bn)?bn:fn}(e.join(" "))},t.preventDefaults=function(e){var t=e.srcEvent,o=e.offsetDirection;if(this.manager.session.prevented)t.preventDefault();else{var a=this.actions,i=Wn(a,vn)&&!kn[vn],n=Wn(a,wn)&&!kn[wn],s=Wn(a,yn)&&!kn[yn];if(i){var r=1===e.pointers.length,l=e.distance<2,d=e.deltaTime<250;if(r&&l&&d)return}if(!s||!n)return i||n&&o&On||s&&o&Nn?this.preventSrc(t):void 0}},t.preventSrc=function(e){this.manager.session.prevented=!0,e.preventDefault()},e}();function Zn(e,t){for(;e;){if(e===t)return!0;e=e.parentNode}return!1}function Gn(e){var t=e.length;if(1===t)return{x:cn(e[0].clientX),y:cn(e[0].clientY)};for(var o=0,a=0,i=0;i<t;)o+=e[i].clientX,a+=e[i].clientY,i++;return{x:cn(o/t),y:cn(a/t)}}function Kn(e){for(var t=[],o=0;o<e.pointers.length;)t[o]={clientX:cn(e.pointers[o].clientX),clientY:cn(e.pointers[o].clientY)},o++;return{timeStamp:un(),pointers:t,center:Gn(t),deltaX:e.deltaX,deltaY:e.deltaY}}function qn(e,t,o){o||(o=Un);var a=t[o[0]]-e[o[0]],i=t[o[1]]-e[o[1]];return Math.sqrt(a*a+i*i)}function Yn(e,t,o){o||(o=Un);var a=t[o[0]]-e[o[0]],i=t[o[1]]-e[o[1]];return 180*Math.atan2(i,a)/Math.PI}function Xn(e,t){return e===t?En:_n(e)>=_n(t)?e<0?Vn:Pn:t<0?zn:Hn}function Jn(e,t,o){return{x:t/e||0,y:o/e||0}}function Qn(e,t){var o=e.session,a=t.pointers,i=a.length;o.firstInput||(o.firstInput=Kn(t)),i>1&&!o.firstMultiple?o.firstMultiple=Kn(t):1===i&&(o.firstMultiple=!1);var n=o.firstInput,s=o.firstMultiple,r=s?s.center:n.center,l=t.center=Gn(a);t.timeStamp=un(),t.deltaTime=t.timeStamp-n.timeStamp,t.angle=Yn(r,l),t.distance=qn(r,l),function(e,t){var o=t.center,a=e.offsetDelta||{},i=e.prevDelta||{},n=e.prevInput||{};t.eventType!==Cn&&n.eventType!==Mn||(i=e.prevDelta={x:n.deltaX||0,y:n.deltaY||0},a=e.offsetDelta={x:o.x,y:o.y}),t.deltaX=i.x+(o.x-a.x),t.deltaY=i.y+(o.y-a.y)}(o,t),t.offsetDirection=Xn(t.deltaX,t.deltaY);var d,c,_=Jn(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=_.x,t.overallVelocityY=_.y,t.overallVelocity=_n(_.x)>_n(_.y)?_.x:_.y,t.scale=s?(d=s.pointers,qn((c=a)[0],c[1],jn)/qn(d[0],d[1],jn)):1,t.rotation=s?function(e,t){return Yn(t[1],t[0],jn)+Yn(e[1],e[0],jn)}(s.pointers,a):0,t.maxPointers=o.prevInput?t.pointers.length>o.prevInput.maxPointers?t.pointers.length:o.prevInput.maxPointers:t.pointers.length,function(e,t){var o,a,i,n,s=e.lastInterval||t,r=t.timeStamp-s.timeStamp;if(t.eventType!==Ln&&(r>$n||void 0===s.velocity)){var l=t.deltaX-s.deltaX,d=t.deltaY-s.deltaY,c=Jn(r,l,d);a=c.x,i=c.y,o=_n(c.x)>_n(c.y)?c.x:c.y,n=Xn(l,d),e.lastInterval=t}else o=s.velocity,a=s.velocityX,i=s.velocityY,n=s.direction;t.velocity=o,t.velocityX=a,t.velocityY=i,t.direction=n}(o,t);var u,m=e.element,h=t.srcEvent;Zn(u=h.composedPath?h.composedPath()[0]:h.path?h.path[0]:h.target,m)&&(m=u),t.target=m}function es(e,t,o){var a=o.pointers.length,i=o.changedPointers.length,n=t&Cn&&a-i==0,s=t&(Mn|Ln)&&a-i==0;o.isFirst=!!n,o.isFinal=!!s,n&&(e.session={}),o.eventType=t,Qn(e,o),e.emit("hammer.input",o),e.recognize(o),e.session.prevInput=o}function ts(e){return e.trim().split(/\s+/g)}function os(e,t,o){Rn(ts(t),(function(t){e.addEventListener(t,o,!1)}))}function as(e,t,o){Rn(ts(t),(function(t){e.removeEventListener(t,o,!1)}))}function is(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||window}var ns=function(){function e(e,t){var o=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(t){In(e.options.enable,[e])&&o.handler(t)},this.init()}var t=e.prototype;return t.handler=function(){},t.init=function(){this.evEl&&os(this.element,this.evEl,this.domHandler),this.evTarget&&os(this.target,this.evTarget,this.domHandler),this.evWin&&os(is(this.element),this.evWin,this.domHandler)},t.destroy=function(){this.evEl&&as(this.element,this.evEl,this.domHandler),this.evTarget&&as(this.target,this.evTarget,this.domHandler),this.evWin&&as(is(this.element),this.evWin,this.domHandler)},e}();function ss(e,t,o){if(e.indexOf&&!o)return e.indexOf(t);for(var a=0;a<e.length;){if(o&&e[a][o]==t||!o&&e[a]===t)return a;a++}return-1}var rs={pointerdown:Cn,pointermove:2,pointerup:Mn,pointercancel:Ln,pointerout:Ln},ls={2:Dn,3:"pen",4:xn,5:"kinect"},ds="pointerdown",cs="pointermove pointerup pointercancel";sn.MSPointerEvent&&!sn.PointerEvent&&(ds="MSPointerDown",cs="MSPointerMove MSPointerUp MSPointerCancel");var _s=function(e){function t(){var o,a=t.prototype;return a.evEl=ds,a.evWin=cs,(o=e.apply(this,arguments)||this).store=o.manager.session.pointerEvents=[],o}return an(t,e),t.prototype.handler=function(e){var t=this.store,o=!1,a=e.type.toLowerCase().replace("ms",""),i=rs[a],n=ls[e.pointerType]||e.pointerType,s=n===Dn,r=ss(t,e.pointerId,"pointerId");i&Cn&&(0===e.button||s)?r<0&&(t.push(e),r=t.length-1):i&(Mn|Ln)&&(o=!0),r<0||(t[r]=e,this.callback(this.manager,i,{pointers:t,changedPointers:[e],pointerType:n,srcEvent:e}),o&&t.splice(r,1))},t}(ns);function us(e){return Array.prototype.slice.call(e,0)}function ms(e,t,o){for(var a=[],i=[],n=0;n<e.length;){var s=t?e[n][t]:e[n];ss(i,s)<0&&a.push(e[n]),i[n]=s,n++}return o&&(a=t?a.sort((function(e,o){return e[t]>o[t]})):a.sort()),a}var hs={touchstart:Cn,touchmove:2,touchend:Mn,touchcancel:Ln},ps=function(e){function t(){var o;return t.prototype.evTarget="touchstart touchmove touchend touchcancel",(o=e.apply(this,arguments)||this).targetIds={},o}return an(t,e),t.prototype.handler=function(e){var t=hs[e.type],o=gs.call(this,e,t);o&&this.callback(this.manager,t,{pointers:o[0],changedPointers:o[1],pointerType:Dn,srcEvent:e})},t}(ns);function gs(e,t){var o,a,i=us(e.touches),n=this.targetIds;if(t&(2|Cn)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var s=us(e.changedTouches),r=[],l=this.target;if(a=i.filter((function(e){return Zn(e.target,l)})),t===Cn)for(o=0;o<a.length;)n[a[o].identifier]=!0,o++;for(o=0;o<s.length;)n[s[o].identifier]&&r.push(s[o]),t&(Mn|Ln)&&delete n[s[o].identifier],o++;return r.length?[ms(a.concat(r),"identifier",!0),r]:void 0}var fs={mousedown:Cn,mousemove:2,mouseup:Mn},bs=function(e){function t(){var o,a=t.prototype;return a.evEl="mousedown",a.evWin="mousemove mouseup",(o=e.apply(this,arguments)||this).pressed=!1,o}return an(t,e),t.prototype.handler=function(e){var t=fs[e.type];t&Cn&&0===e.button&&(this.pressed=!0),2&t&&1!==e.which&&(t=Mn),this.pressed&&(t&Mn&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:xn,srcEvent:e}))},t}(ns),vs=2500;function ys(e){var t=e.changedPointers[0];if(t.identifier===this.primaryTouch){var o={x:t.clientX,y:t.clientY},a=this.lastTouches;this.lastTouches.push(o);setTimeout((function(){var e=a.indexOf(o);e>-1&&a.splice(e,1)}),vs)}}function ws(e,t){e&Cn?(this.primaryTouch=t.changedPointers[0].identifier,ys.call(this,t)):e&(Mn|Ln)&&ys.call(this,t)}function ks(e){for(var t=e.srcEvent.clientX,o=e.srcEvent.clientY,a=0;a<this.lastTouches.length;a++){var i=this.lastTouches[a],n=Math.abs(t-i.x),s=Math.abs(o-i.y);if(n<=25&&s<=25)return!0}return!1}var Ts=function(){return function(e){function t(t,o){var a;return(a=e.call(this,t,o)||this).handler=function(e,t,o){var i=o.pointerType===Dn,n=o.pointerType===xn;if(!(n&&o.sourceCapabilities&&o.sourceCapabilities.firesTouchEvents)){if(i)ws.call(nn(nn(a)),t,o);else if(n&&ks.call(nn(nn(a)),o))return;a.callback(e,t,o)}},a.touch=new ps(a.manager,a.handler),a.mouse=new bs(a.manager,a.handler),a.primaryTouch=null,a.lastTouches=[],a}return an(t,e),t.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},t}(ns)}();function Ss(e,t,o){return!!Array.isArray(e)&&(Rn(e,o[t],o),!0)}var As=32,Ds=1;function xs(e,t){var o=t.manager;return o?o.get(e):e}function $s(e){return 16&e?"cancel":8&e?"end":4&e?"move":2&e?"start":""}var Cs=function(){function e(e){void 0===e&&(e={}),this.options=on({enable:!0},e),this.id=Ds++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var t=e.prototype;return t.set=function(e){return rn(this.options,e),this.manager&&this.manager.touchAction.update(),this},t.recognizeWith=function(e){if(Ss(e,"recognizeWith",this))return this;var t=this.simultaneous;return t[(e=xs(e,this)).id]||(t[e.id]=e,e.recognizeWith(this)),this},t.dropRecognizeWith=function(e){return Ss(e,"dropRecognizeWith",this)||(e=xs(e,this),delete this.simultaneous[e.id]),this},t.requireFailure=function(e){if(Ss(e,"requireFailure",this))return this;var t=this.requireFail;return-1===ss(t,e=xs(e,this))&&(t.push(e),e.requireFailure(this)),this},t.dropRequireFailure=function(e){if(Ss(e,"dropRequireFailure",this))return this;e=xs(e,this);var t=ss(this.requireFail,e);return t>-1&&this.requireFail.splice(t,1),this},t.hasRequireFailures=function(){return this.requireFail.length>0},t.canRecognizeWith=function(e){return!!this.simultaneous[e.id]},t.emit=function(e){var t=this,o=this.state;function a(o){t.manager.emit(o,e)}o<8&&a(t.options.event+$s(o)),a(t.options.event),e.additionalEvent&&a(e.additionalEvent),o>=8&&a(t.options.event+$s(o))},t.tryEmit=function(e){if(this.canEmit())return this.emit(e);this.state=As},t.canEmit=function(){for(var e=0;e<this.requireFail.length;){if(!(33&this.requireFail[e].state))return!1;e++}return!0},t.recognize=function(e){var t=rn({},e);if(!In(this.options.enable,[this,t]))return this.reset(),void(this.state=As);56&this.state&&(this.state=1),this.state=this.process(t),30&this.state&&this.tryEmit(t)},t.process=function(e){},t.getTouchAction=function(){},t.reset=function(){},e}(),Ms=function(e){function t(t){var o;return void 0===t&&(t={}),(o=e.call(this,on({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},t))||this).pTime=!1,o.pCenter=!1,o._timer=null,o._input=null,o.count=0,o}an(t,e);var o=t.prototype;return o.getTouchAction=function(){return[bn]},o.process=function(e){var t=this,o=this.options,a=e.pointers.length===o.pointers,i=e.distance<o.threshold,n=e.deltaTime<o.time;if(this.reset(),e.eventType&Cn&&0===this.count)return this.failTimeout();if(i&&n&&a){if(e.eventType!==Mn)return this.failTimeout();var s=!this.pTime||e.timeStamp-this.pTime<o.interval,r=!this.pCenter||qn(this.pCenter,e.center)<o.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,r&&s?this.count+=1:this.count=1,this._input=e,0===this.count%o.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){t.state=8,t.tryEmit()}),o.interval),2):8}return As},o.failTimeout=function(){var e=this;return this._timer=setTimeout((function(){e.state=As}),this.options.interval),As},o.reset=function(){clearTimeout(this._timer)},o.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},t}(Cs),Ls=function(e){function t(t){return void 0===t&&(t={}),e.call(this,on({pointers:1},t))||this}an(t,e);var o=t.prototype;return o.attrTest=function(e){var t=this.options.pointers;return 0===t||e.pointers.length===t},o.process=function(e){var t=this.state,o=e.eventType,a=6&t,i=this.attrTest(e);return a&&(o&Ln||!i)?16|t:a||i?o&Mn?8|t:2&t?4|t:2:As},t}(Cs);function Es(e){return e===Hn?"down":e===zn?"up":e===Vn?"left":e===Pn?"right":""}var Vs=function(e){function t(t){var o;return void 0===t&&(t={}),(o=e.call(this,on({event:"pan",threshold:10,pointers:1,direction:Bn},t))||this).pX=null,o.pY=null,o}an(t,e);var o=t.prototype;return o.getTouchAction=function(){var e=this.options.direction,t=[];return e&On&&t.push(wn),e&Nn&&t.push(yn),t},o.directionTest=function(e){var t=this.options,o=!0,a=e.distance,i=e.direction,n=e.deltaX,s=e.deltaY;return i&t.direction||(t.direction&On?(i=0===n?En:n<0?Vn:Pn,o=n!==this.pX,a=Math.abs(e.deltaX)):(i=0===s?En:s<0?zn:Hn,o=s!==this.pY,a=Math.abs(e.deltaY))),e.direction=i,o&&a>t.threshold&&i&t.direction},o.attrTest=function(e){return Ls.prototype.attrTest.call(this,e)&&(2&this.state||!(2&this.state)&&this.directionTest(e))},o.emit=function(t){this.pX=t.deltaX,this.pY=t.deltaY;var o=Es(t.direction);o&&(t.additionalEvent=this.options.event+o),e.prototype.emit.call(this,t)},t}(Ls),Ps=function(e){function t(t){return void 0===t&&(t={}),e.call(this,on({event:"swipe",threshold:10,velocity:.3,direction:On|Nn,pointers:1},t))||this}an(t,e);var o=t.prototype;return o.getTouchAction=function(){return Vs.prototype.getTouchAction.call(this)},o.attrTest=function(t){var o,a=this.options.direction;return a&(On|Nn)?o=t.overallVelocity:a&On?o=t.overallVelocityX:a&Nn&&(o=t.overallVelocityY),e.prototype.attrTest.call(this,t)&&a&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers===this.options.pointers&&_n(o)>this.options.velocity&&t.eventType&Mn},o.emit=function(e){var t=Es(e.offsetDirection);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)},t}(Ls),zs=function(e){function t(t){return void 0===t&&(t={}),e.call(this,on({event:"pinch",threshold:0,pointers:2},t))||this}an(t,e);var o=t.prototype;return o.getTouchAction=function(){return[vn]},o.attrTest=function(t){return e.prototype.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},o.emit=function(t){if(1!==t.scale){var o=t.scale<1?"in":"out";t.additionalEvent=this.options.event+o}e.prototype.emit.call(this,t)},t}(Ls),Hs=function(e){function t(t){return void 0===t&&(t={}),e.call(this,on({event:"rotate",threshold:0,pointers:2},t))||this}an(t,e);var o=t.prototype;return o.getTouchAction=function(){return[vn]},o.attrTest=function(t){return e.prototype.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)},t}(Ls),Os=function(e){function t(t){var o;return void 0===t&&(t={}),(o=e.call(this,on({event:"press",pointers:1,time:251,threshold:9},t))||this)._timer=null,o._input=null,o}an(t,e);var o=t.prototype;return o.getTouchAction=function(){return[fn]},o.process=function(e){var t=this,o=this.options,a=e.pointers.length===o.pointers,i=e.distance<o.threshold,n=e.deltaTime>o.time;if(this._input=e,!i||!a||e.eventType&(Mn|Ln)&&!n)this.reset();else if(e.eventType&Cn)this.reset(),this._timer=setTimeout((function(){t.state=8,t.tryEmit()}),o.time);else if(e.eventType&Mn)return 8;return As},o.reset=function(){clearTimeout(this._timer)},o.emit=function(e){8===this.state&&(e&&e.eventType&Mn?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=un(),this.manager.emit(this.options.event,this._input)))},t}(Cs),Ns={domEvents:!1,touchAction:gn,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Bs=[[Hs,{enable:!1}],[zs,{enable:!1},["rotate"]],[Ps,{direction:On}],[Vs,{direction:On},["swipe"]],[Ms],[Ms,{event:"doubletap",taps:2},["tap"]],[Os]];function Us(e,t){var o,a=e.element;a.style&&(Rn(e.options.cssProps,(function(i,n){o=mn(a.style,n),t?(e.oldCssProps[o]=a.style[o],a.style[o]=i):a.style[o]=e.oldCssProps[o]||""})),t||(e.oldCssProps={}))}var js=function(){function e(e,t){var o,a=this;this.options=rn({},Ns,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new((o=this).options.inputClass||(Sn?_s:An?ps:Tn?Ts:bs))(o,es),this.touchAction=new Fn(this,this.options.touchAction),Us(this,!0),Rn(this.options.recognizers,(function(e){var t=a.add(new e[0](e[1]));e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])}),this)}var t=e.prototype;return t.set=function(e){return rn(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},t.stop=function(e){this.session.stopped=e?2:1},t.recognize=function(e){var t=this.session;if(!t.stopped){var o;this.touchAction.preventDefaults(e);var a=this.recognizers,i=t.curRecognizer;(!i||i&&8&i.state)&&(t.curRecognizer=null,i=null);for(var n=0;n<a.length;)o=a[n],2===t.stopped||i&&o!==i&&!o.canRecognizeWith(i)?o.reset():o.recognize(e),!i&&14&o.state&&(t.curRecognizer=o,i=o),n++}},t.get=function(e){if(e instanceof Cs)return e;for(var t=this.recognizers,o=0;o<t.length;o++)if(t[o].options.event===e)return t[o];return null},t.add=function(e){if(Ss(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e},t.remove=function(e){if(Ss(e,"remove",this))return this;var t=this.get(e);if(e){var o=this.recognizers,a=ss(o,t);-1!==a&&(o.splice(a,1),this.touchAction.update())}return this},t.on=function(e,t){if(void 0===e||void 0===t)return this;var o=this.handlers;return Rn(ts(e),(function(e){o[e]=o[e]||[],o[e].push(t)})),this},t.off=function(e,t){if(void 0===e)return this;var o=this.handlers;return Rn(ts(e),(function(e){t?o[e]&&o[e].splice(ss(o[e],t),1):delete o[e]})),this},t.emit=function(e,t){this.options.domEvents&&function(e,t){var o=document.createEvent("Event");o.initEvent(e,!0,!0),o.gesture=t,t.target.dispatchEvent(o)}(e,t);var o=this.handlers[e]&&this.handlers[e].slice();if(o&&o.length){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};for(var a=0;a<o.length;)o[a](t),a++}},t.destroy=function(){this.element&&Us(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},e}(),Rs={touchstart:Cn,touchmove:2,touchend:Mn,touchcancel:Ln},Is=function(e){function t(){var o,a=t.prototype;return a.evTarget="touchstart",a.evWin="touchstart touchmove touchend touchcancel",(o=e.apply(this,arguments)||this).started=!1,o}return an(t,e),t.prototype.handler=function(e){var t=Rs[e.type];if(t===Cn&&(this.started=!0),this.started){var o=Ws.call(this,e,t);t&(Mn|Ln)&&o[0].length-o[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:o[0],changedPointers:o[1],pointerType:Dn,srcEvent:e})}},t}(ns);function Ws(e,t){var o=us(e.touches),a=us(e.changedTouches);return t&(Mn|Ln)&&(o=ms(o.concat(a),"identifier",!0)),[o,a]}function Fs(e,t,o){var a="DEPRECATED METHOD: "+t+"\n"+o+" AT \n";return function(){var t=new Error("get-stack-trace"),o=t&&t.stack?t.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",i=window.console&&(window.console.warn||window.console.log);return i&&i.call(window.console,a,o),e.apply(this,arguments)}}var Zs=Fs((function(e,t,o){for(var a=Object.keys(t),i=0;i<a.length;)(!o||o&&void 0===e[a[i]])&&(e[a[i]]=t[a[i]]),i++;return e}),"extend","Use `assign`."),Gs=Fs((function(e,t){return Zs(e,t,!0)}),"merge","Use `assign`.");function Ks(e,t,o){var a,i=t.prototype;(a=e.prototype=Object.create(i)).constructor=e,a._super=i,o&&rn(a,o)}function qs(e,t){return function(){return e.apply(t,arguments)}}(function(){var e=function(e,t){return void 0===t&&(t={}),new js(e,on({recognizers:Bs.concat()},t))};return e.VERSION="2.0.17-rc",e.DIRECTION_ALL=Bn,e.DIRECTION_DOWN=Hn,e.DIRECTION_LEFT=Vn,e.DIRECTION_RIGHT=Pn,e.DIRECTION_UP=zn,e.DIRECTION_HORIZONTAL=On,e.DIRECTION_VERTICAL=Nn,e.DIRECTION_NONE=En,e.DIRECTION_DOWN=Hn,e.INPUT_START=Cn,e.INPUT_MOVE=2,e.INPUT_END=Mn,e.INPUT_CANCEL=Ln,e.STATE_POSSIBLE=1,e.STATE_BEGAN=2,e.STATE_CHANGED=4,e.STATE_ENDED=8,e.STATE_RECOGNIZED=8,e.STATE_CANCELLED=16,e.STATE_FAILED=As,e.Manager=js,e.Input=ns,e.TouchAction=Fn,e.TouchInput=ps,e.MouseInput=bs,e.PointerEventInput=_s,e.TouchMouseInput=Ts,e.SingleTouchInput=Is,e.Recognizer=Cs,e.AttrRecognizer=Ls,e.Tap=Ms,e.Pan=Vs,e.Swipe=Ps,e.Pinch=zs,e.Rotate=Hs,e.Press=Os,e.on=os,e.off=as,e.each=Rn,e.merge=Gs,e.extend=Zs,e.bindFn=qs,e.assign=rn,e.inherit=Ks,e.bindFn=qs,e.prefixed=mn,e.toArray=us,e.inArray=ss,e.uniqueArray=ms,e.splitStr=ts,e.boolOrFn=In,e.hasParent=Zn,e.addEventListeners=os,e.removeEventListeners=as,e.defaults=rn({},Ns,{preset:Bs}),e})().defaults;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ys=270;const Xs=new Set(["ArrowRight","ArrowUp","ArrowLeft","ArrowDown","PageUp","PageDown","Home","End"]);let Js=class extends re{constructor(){super(...arguments),this.disabled=!1,this.step=1,this.min=0,this.max=100,this._localValue=this.value,this._localLow=this.low,this._localHigh=this.high,this._getPercentageFromEvent=e=>{const t=this._slider.getBoundingClientRect(),o=2*(e.center.x-t.left-t.width/2)/t.width,a=2*(e.center.y-t.top-t.height/2)/t.height,[,i]=function(e,t){return[Math.sqrt(e*e+t*t),Math.atan2(t,e)]}(o,a),n=(i/(2*Math.PI)*360+45-135+360)%360-45;return Math.max(Math.min(n/Ys,1),0)}}_valueToPercentage(e){return(ki(e,this.min,this.max)-this.min)/(this.max-this.min)}_percentageToValue(e){return(this.max-this.min)*e+this.min}_steppedValue(e){return Math.round(e/this.step)*this.step}_boundedValue(e){var t,o;const a="high"===this._activeSlider?Math.min(null!==(t=this._localLow)&&void 0!==t?t:this.max):this.min,i="low"===this._activeSlider?Math.max(null!==(o=this._localHigh)&&void 0!==o?o:this.min):this.max;return Math.min(Math.max(e,a),i)}firstUpdated(e){super.firstUpdated(e),this._setupListeners()}updated(e){super.updated(e),this._activeSlider||(e.has("value")&&(this._localValue=this.value),e.has("low")&&(this._localLow=this.low),e.has("high")&&(this._localHigh=this.high))}connectedCallback(){super.connectedCallback(),this._setupListeners()}disconnectedCallback(){super.disconnectedCallback()}_findActiveSlider(e){var t,o;if(!this.dual)return"value";const a=Math.max(null!==(t=this._localLow)&&void 0!==t?t:this.min,this.min),i=Math.min(null!==(o=this._localHigh)&&void 0!==o?o:this.max,this.max);if(a>=e)return"low";if(i<=e)return"high";return Math.abs(e-a)<=Math.abs(e-i)?"low":"high"}_setActiveValue(e){switch(this._activeSlider){case"high":this._localHigh=e;break;case"low":this._localLow=e;break;case"value":this._localValue=e}}_getActiveValue(){switch(this._activeSlider){case"high":return this._localHigh;case"low":return this._localLow;case"value":return this._localValue}}_setupListeners(){this._interaction&&!this._mc&&(this._mc=new js(this._interaction,{inputClass:Ts}),this._mc.add(new Vs({direction:Bn,enable:!0,threshold:0})),this._mc.add(new Ms({event:"singletap"})),this._mc.on("pan",(e=>{e.srcEvent.stopPropagation(),e.srcEvent.preventDefault()})),this._mc.on("panstart",(e=>{var t,o;if(this.disabled)return;const a=this._getPercentageFromEvent(e),i=this._percentageToValue(a);this._activeSlider=this._findActiveSlider(i),this._lastSlider=this._activeSlider,null===(o=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("#slider"))||void 0===o||o.focus()})),this._mc.on("pancancel",(()=>{this.disabled||(this._activeSlider=void 0)})),this._mc.on("panmove",(e=>{if(this.disabled)return;const t=this._getPercentageFromEvent(e),o=this._percentageToValue(t),a=this._boundedValue(o);this._setActiveValue(a);const i=this._steppedValue(a);this._activeSlider&&wi(this,`${this._activeSlider}-changing`,{value:i})})),this._mc.on("panend",(e=>{if(this.disabled)return;const t=this._getPercentageFromEvent(e),o=this._percentageToValue(t),a=this._boundedValue(o),i=this._steppedValue(a);this._setActiveValue(i),this._activeSlider&&(wi(this,`${this._activeSlider}-changing`,{value:void 0}),wi(this,`${this._activeSlider}-changed`,{value:i})),this._activeSlider=void 0})),this._mc.on("singletap",(e=>{var t,o;if(this.disabled)return;const a=this._getPercentageFromEvent(e),i=this._percentageToValue(a);this._activeSlider=this._findActiveSlider(i);const n=this._boundedValue(i),s=this._steppedValue(n);this._setActiveValue(s),this._activeSlider&&(wi(this,`${this._activeSlider}-changing`,{value:void 0}),wi(this,`${this._activeSlider}-changed`,{value:s})),this._lastSlider=this._activeSlider,null===(o=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("#slider"))||void 0===o||o.focus(),this._activeSlider=void 0})))}get _tenPercentStep(){return Math.max(this.step,(this.max-this.min)/10)}_handleKeyDown(e){var t,o,a;if(!Xs.has(e.code))return;e.preventDefault(),this._lastSlider&&(null===(o=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById(this._lastSlider))||void 0===o||o.focus()),this._activeSlider=null!==(a=this._lastSlider)&&void 0!==a?a:e.currentTarget.id,this._lastSlider=void 0;const i=this._getActiveValue();switch(e.code){case"ArrowRight":case"ArrowUp":this._setActiveValue(this._boundedValue((null!=i?i:this.min)+this.step));break;case"ArrowLeft":case"ArrowDown":this._setActiveValue(this._boundedValue((null!=i?i:this.min)-this.step));break;case"PageUp":this._setActiveValue(this._steppedValue(this._boundedValue((null!=i?i:this.min)+this._tenPercentStep)));break;case"PageDown":this._setActiveValue(this._steppedValue(this._boundedValue((null!=i?i:this.min)-this._tenPercentStep)));break;case"Home":this._setActiveValue(this._boundedValue(this.min));break;case"End":this._setActiveValue(this._boundedValue(this.max))}wi(this,`${this._activeSlider}-changing`,{value:this._getActiveValue()}),this._activeSlider=void 0}_handleKeyUp(e){Xs.has(e.code)&&(this._activeSlider=e.currentTarget.id,e.preventDefault(),wi(this,`${this._activeSlider}-changing`,{value:void 0}),wi(this,`${this._activeSlider}-changed`,{value:this._getActiveValue()}),this._activeSlider=void 0)}destroyListeners(){this._mc&&(this._mc.destroy(),this._mc=void 0)}_strokeCircleDashArc(e){return this._strokeDashArc(e,e)}_strokeDashArc(e,t){const o=this._valueToPercentage(e),a=this._valueToPercentage(t),i=290*Math.PI*Ys/360,n=Math.max((a-o)*i,0);return[`${n} ${i-n}`,`-${o*i-.5}`]}renderArc(e,t,o){var a,i;if(this.disabled)return Z;const n=tn({x:0,y:0,start:0,end:Ys,r:145}),s="end"===o?this.max:this.min,r=null!==(a=this.current)&&void 0!==a?a:s,l=null!=t?t:s,d="end"===o?l<=r:"start"===o&&r<=l,c=d?"end"===o?this._strokeDashArc(l,r):this._strokeDashArc(r,l):this._strokeCircleDashArc(l),_="full"===o?this._strokeDashArc(this.min,this.max):"end"===o?this._strokeDashArc(l,s):this._strokeDashArc(s,l),u=this._strokeCircleDashArc(l),m=null!=this.current&&this.current<=this.max&&this.current>=this.min&&(d||"full"===this.mode)?this._strokeCircleDashArc(this.current):void 0;return W`
        <g class=${be({inactive:Boolean(this.inactive)})}>
          <path
            class="arc arc-clear"
            d=${n}
            stroke-dasharray=${_[0]}
            stroke-dashoffset=${_[1]}
          />
          <path
            class="arc arc-colored ${be({[e]:!0})}"
            d=${n}
            stroke-dasharray=${_[0]}
            stroke-dashoffset=${_[1]}
          />
          <path
            .id=${e}
            d=${n}
            class="arc arc-active ${be({[e]:!0})}"
            stroke-dasharray=${c[0]}
            stroke-dashoffset=${c[1]}
            role="slider"
            tabindex="0"
            aria-valuemin=${this.min}
            aria-valuemax=${this.max}
            aria-valuenow=${null!=this._localValue?this._steppedValue(this._localValue):void 0}
            aria-disabled=${this.disabled}
            aria-label=${(e=>e??Z)(null!==(i=this.lowLabel)&&void 0!==i?i:this.label)}
            @keydown=${this._handleKeyDown}
            @keyup=${this._handleKeyUp}
          />
          ${m?W`
                <path
                  class="current arc-current"
                  d=${n}
                  stroke-dasharray=${m[0]}
                  stroke-dashoffset=${m[1]}
                />
            `:Z}
          <path
            class="target-border ${be({[e]:!0})}"
            d=${n}
            stroke-dasharray=${u[0]}
            stroke-dashoffset=${u[1]}
          />
          <path
            class="target"
            d=${n}
            stroke-dasharray=${u[0]}
            stroke-dashoffset=${u[1]}
          />
        </g>
      `}render(){const e=tn({x:0,y:0,start:0,end:Ys,r:145}),t=this.dual?this._localLow:this._localValue,o=this._localHigh,a=this.current,i=a?this._strokeCircleDashArc(a):void 0;return I`
        <svg
          id="slider"
          viewBox="0 0 320 320"
          overflow="visible"
          class=${be({pressed:Boolean(this._activeSlider)})}
          @keydown=${this._handleKeyDown}
          tabindex=${this._lastSlider?"0":"-1"}
        >
          <g
            id="container"
            transform="translate(160 160) rotate(${135})"
          >
            <g id="interaction">
              <path d=${e} />
            </g>
            <g id="display">
              <path class="background" d=${e} />
              ${i?W`
                    <path
                      class="current"
                      d=${e}
                      stroke-dasharray=${i[0]}
                      stroke-dashoffset=${i[1]}
                    />
                  `:Z}
              ${null!=t?this.renderArc(this.dual?"low":"value",t,!this.dual&&this.mode||"start"):Z}
              ${this.dual&&null!=o?this.renderArc("high",o,"end"):Z}
            </g>
          </g>
        </svg>
        <slot></slot>
      `}static get styles(){return s`
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
      `}};e([ue({type:Boolean,reflect:!0})],Js.prototype,"disabled",void 0),e([ue({type:Boolean})],Js.prototype,"dual",void 0),e([ue({type:String})],Js.prototype,"mode",void 0),e([ue({type:Boolean})],Js.prototype,"inactive",void 0),e([ue({type:String})],Js.prototype,"label",void 0),e([ue({type:String,attribute:"low-label"})],Js.prototype,"lowLabel",void 0),e([ue({type:String,attribute:"high-label"})],Js.prototype,"highLabel",void 0),e([ue({type:Number})],Js.prototype,"value",void 0),e([ue({type:Number})],Js.prototype,"low",void 0),e([ue({type:Number})],Js.prototype,"high",void 0),e([ue({type:Number})],Js.prototype,"current",void 0),e([ue({type:Number})],Js.prototype,"step",void 0),e([ue({type:Number})],Js.prototype,"min",void 0),e([ue({type:Number})],Js.prototype,"max",void 0),e([me()],Js.prototype,"_localValue",void 0),e([me()],Js.prototype,"_localLow",void 0),e([me()],Js.prototype,"_localHigh",void 0),e([me()],Js.prototype,"_activeSlider",void 0),e([me()],Js.prototype,"_lastSlider",void 0),e([pe("#slider")],Js.prototype,"_slider",void 0),e([pe("#interaction")],Js.prototype,"_interaction",void 0),Js=e([de("vt-ha-control-circular-slider")],Js);const Qs=s`
        :host([theme="gunmalmg"]) vt-ha-control-circular-slider { display: none; }
          :host([theme="gunmalmg"]) vt-ha-control-circular-slider { display: none !important; }
        :host([theme="gunmalmg"]) .disabled-circle-container { display: block; background: none; }

        /* Gunmalmg theme - minimalist compact list style */
        :host([theme="gunmalmg"]) ha-card {
          background: #121212;
          color: #e6e6e6;
          border-radius: 10px;
          padding: 0px 0px;
          box-shadow: none;
        }
        :host([theme="gunmalmg"]) .name { font-weight: 600; color: #ffffff; font-size: 17px; text-align: left;}
        :host([theme="gunmalmg"]) .content { display: flex; position: relative; width: 100%; height: auto; max-width: none; transform: none; left: 0; top: 0; padding: 0; align-items: center; justify-content: center; }
        :host([theme="gunmalmg"]) .current-info, :host([theme="gunmalmg"]) #left-infos, :host([theme="gunmalmg"]) #vt-control-buttons { display: none !important; }
        :host([theme="gunmalmg"]) .disabled-circle-container { height: 64px; background: transparent; }

        /* Presets as pill buttons */
        :host([theme="gunmalmg"]) #presets {
          display: grid;
          grid-template-columns: repeat(3, minmax(56px, 1fr));
          margin-top: 8px;
          justify-items: center;
          align-items: center;
        }
        :host([theme="gunmalmg"]) .preset-label {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0; padding: 0;
        }

        :host([theme="gunmalmg"]) .preset-label ha-icon-button {
          --mdc-icon-size: 22px; /* ~20% larger */
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          color: #e6e6e6;
          border: 1px solid rgba(255,255,255,0.03);
        }
        :host([theme="gunmalmg"]) .preset-label .selected-icon {
          box-shadow: 0 2px 0 rgba(0,0,0,0.3) inset;
        }

        /* Presets base: icon grey, dark grey background */
        :host([theme="gunmalmg"]) .preset-label ha-icon-button {
          background: #2b2b2b; /* dark grey */
          border: 1px solid rgba(255,255,255,0.03);
        }

        /* Only selected preset icon should be colored */
        :host([theme="gunmalmg"]) .preset-label ha-icon-button.selected-icon { background: #111111; color: #e6e6e6 !important; transition: background-color 180ms ease, color 180ms ease;}

        /* Selected colors mapping */
        :host([theme="gunmalmg"]) .preset-frost ha-icon-button.selected-icon { background: #3a9ff2; } /* blue */
        :host([theme="gunmalmg"]) .preset-eco ha-icon-button.selected-icon { background: #5dd461; } /* green */
        :host([theme="gunmalmg"]) .preset-comfort ha-icon-button.selected-icon { background: #f9a21f; } /* orange */
        :host([theme="gunmalmg"]) .preset-boost ha-icon-button.selected-icon { background: #f75252; } /* red-ish */
        :host([theme="gunmalmg"]) .preset-activity ha-icon-button.selected-icon { background: #c455f7; } /* blue */
        /* Left-side compact hvac icon + action for gunmalmg */
        :host([theme="gunmalmg"]) #left-infos-gunmalmg {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 4;
        }

        :host([theme="gunmalmg"]) .hvac-mode ha-icon-button {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          --mdc-icon-size: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.02);
          color: var(--secondary-text-color);
          border: none;
          transition: background-color 220ms ease, color 220ms ease, transform 160ms ease;
        }

        /* Colored states for hvac mode icon */
        :host([theme="gunmalmg"]) ha-card.heat .hvac-mode-tile ha-icon-button,
        :host([theme="gunmalmg"]) ha-card.heat_cool .hvac-mode-tile ha-icon-button {
          background: #3e2a00; /* dark orange */
          color: #fb9600; /* orange icon */
        }
        :host([theme="gunmalmg"]) ha-card.cool .hvac-mode-tile ha-icon-button {
          background: #003147; /* dark blue */
          color: #038dfe; /* blue icon */
        }
        :host([theme="gunmalmg"]) ha-card.off .hvac-mode-tile ha-icon-button {
          background: #2b2b2b; /* dark grey */
          color: #bdbdbd; /* grey icon */
        }

        :host([theme="gunmalmg"]) .hvac-action svg {
          width: 20px;
          height: 20px;
          fill: #ffffff;
          opacity: 0.95;
        }

        /* Badge: top-right white icon on colored background */
        :host([theme="gunmalmg"]) .hvac-badge-container { position: relative; display: inline-block; }
        :host([theme="gunmalmg"]) .hvac-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          width: 20px;
          height: 20px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff; /* icon white */
        }
        :host([theme="gunmalmg"]) .hvac-badge.heating { background: #f44336; }
        :host([theme="gunmalmg"]) .hvac-badge.cooling { background: #03A9F4; }
        :host([theme="gunmalmg"]) .hvac-badge.warning { background: #ff9800; }
        :host([theme="gunmalmg"]) .hvac-badge svg { fill: #ffffff; width: 14px; height: 14px; }

        /* Preset pills tweaks */
        :host([theme="gunmalmg"]) .preset-label {
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        /* Temperatures look: main number larger, unit and secondary smaller */
        :host([theme="gunmalmg"]) .main-value { font-size: 16px; font-weight: 600; }
        :host([theme="gunmalmg"]) #current { font-size: 12px; }
        :host([theme="gunmalmg"]) .content .name + * { color: var(--secondary-text-color); font-size: 10px; }

        /* Inline temperature display (left-aligned) */
        :host([theme="gunmalmg"]) .gunmalmg-temps-inline { display: flex; gap: 8px; align-items: baseline; justify-content: flex-start; }
        :host([theme="gunmalmg"]) .gunmalmg-temp-main { font-size: 17px; font-weight: 700; color: var(--secondary-text-color); }
        :host([theme="gunmalmg"]) .gunmalmg-temp-secondary { font-size: 13px; color: var(--secondary-text-color); margin-left: 6px; }
        :host([theme="gunmalmg"]) .gunmalmg-uom { font-size: 16px; color: var(--secondary-text-color); margin-left: 2px; }

        /* Hide timed preset controls for Gunmalmg */
        :host([theme="gunmalmg"]) .timed-preset-container { display: none !important; }

        /* Grid layout: name spans columns 1-2 on first row; left/center/right on second row */
        :host([theme="gunmalmg"]) .gunmalmg-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.6fr 2.4fr;
          grid-template-areas:
            "name name right"
            "left center right";
          gap: 6px;
          align-items: center;
        }

        :host([theme="gunmalmg"]) .gunmalmg-name { 
          grid-area: name; 
          text-align: left; 
          padding-left: 8px; 
          display: -webkit-box; 
          -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical; 
          overflow: hidden; 
          text-overflow: ellipsis; 
          white-space: normal; 
          line-height: 1.2;
        }
        :host([theme="gunmalmg"]) .gunmalmg-left { grid-area: left; }
        :host([theme="gunmalmg"]) .gunmalmg-center { grid-area: center; }
        :host([theme="gunmalmg"]) .gunmalmg-right { grid-area: right; }

        @media (max-width: 480px) {
          :host([theme="gunmalmg"]) .gunmalmg-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
              "name right"
              "left center";
          }
          :host([theme="gunmalmg"]) .gunmalmg-right {
            margin-top: 8px;
            justify-content: center;
            padding-right: 0;
          }
        }

        :host([theme="gunmalmg"]) .gunmalmg-left { background: transparent; padding: 0; display: flex; align-items: center; justify-content: center; }
        :host([theme="gunmalmg"]) .gunmalmg-center { text-align: left; max-width: 100%; display:flex; flex-direction:column; justify-content:left; }
        :host([theme="gunmalmg"]) .gunmalmg-right { padding-right: 30px; display: flex; justify-content: flex-end; }

        :host([theme="gunmalmg"]) .hvac-mode-tile { display: flex; align-items: center; justify-content: center; padding: 0; background: transparent; }

        :host([theme="gunmalmg"]) .hvac-mode-tile ha-icon-button { overflow: hidden; box-shadow: none; border-radius: 30px; }

        /* Dim hvac mode and preset icons when locked */
        :host([theme="gunmalmg"]) ha-card.locked .hvac-mode-tile ha-icon-button,
        :host([theme="gunmalmg"]) ha-card.locked #presets ha-icon-button,
        :host([theme="gunmalmg"]) ha-card.locked #presets .preset-label {
          opacity: 0.5;
          color: var(--disabled-text-color);
          pointer-events: none;
        }

        :host([theme="gunmalmg"]) .gunmalmg-presets { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; justify-items: center; }

        /* Make the more-info icon more visible on dark background */
        :host([theme="gunmalmg"]) .more-info { color: #e6e6e6; z-index: 6; }
        :host([theme="gunmalmg"]) #right-lock {
          position: absolute;
          top: 60px; /* place under the menu button */
          right: 0px;
          z-index: 8; /* above some elements but below the menu overlay */
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
        }
        :host([theme="gunmalmg"]) .theme-menu { background: #1b1b1b; color: #e6e6e6; border-color: rgba(255,255,255,0.06); }
        :host([theme="gunmalmg"]) .theme-menu-item { color: #e6e6e6; }
        :host([theme="gunmalmg"]) .theme-menu-header { display:flex; align-items:center; justify-content:space-between; padding: 8px 12px; border-bottom: 1px solid rgba(255,255,255,0.04); }
        :host([theme="gunmalmg"]) .theme-menu-title { font-weight:600; cursor:pointer; }
`,er=s`
  :host([theme="vtherm"]) ha-card { background: var(--card-background-color); color: var(--primary-text-color); }
  :host([theme="vtherm"]) .vtherm-grid { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 8px; align-items: center; }
  :host([theme="vtherm"]) .vtherm-left { display:flex; justify-content:center; }
  :host([theme="vtherm"]) .vtherm-center { text-align:center; }
  :host([theme="vtherm"]) .vtherm-right { display:flex; justify-content:flex-end; }
  :host([theme="vtherm"]) .more-info { z-index:6 }
  :host([theme="vtherm"]) .theme-menu { background: var(--card-background-color); }
  /* Dim hvac mode and preset icons when locked */
  :host([theme="vtherm"]) ha-card.locked .vtherm-left ha-icon-button,
  :host([theme="vtherm"]) ha-card.locked .vtherm-right ha-icon-button,
  :host([theme="vtherm"]) ha-card.locked .vtherm-right .preset-label {
    opacity: 0.5;
    color: var(--disabled-text-color);
    pointer-events: none;
  }
`,tr={auto:"M18,11V12.5C21.19,12.5 23.09,16.05 21.33,18.71L20.24,17.62C21.06,15.96 19.85,14 18,14V15.5L15.75,13.25L18,11M18,22V20.5C14.81,20.5 12.91,16.95 14.67,14.29L15.76,15.38C14.94,17.04 16.15,19 18,19V17.5L20.25,19.75L18,22M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H14C13.36,20.45 12.86,19.77 12.5,19H5V8H19V10.59C19.71,10.7 20.39,10.94 21,11.31V5A2,2 0 0,0 19,3Z",heat_cool:"M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z",heat:"M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z",cool:"M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z",off:"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",fan_only:Te,dry:Pe,window_open:ze,windowBypass:He,presence:De,motion:Le,eco:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z",comfort:"M12.5 7C12.5 5.89 13.39 5 14.5 5H18C19.1 5 20 5.9 20 7V9.16C18.84 9.57 18 10.67 18 11.97V14H12.5V7M6 11.96V14H11.5V7C11.5 5.89 10.61 5 9.5 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96M20.66 10.03C19.68 10.19 19 11.12 19 12.12V15H5V12C5 10.9 4.11 10 3 10S1 10.9 1 12V17C1 18.1 1.9 19 3 19V21H5V19H19V21H21V19C22.1 19 23 18.1 23 17V12C23 10.79 21.91 9.82 20.66 10.03Z",boost:"M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z",frost:"M14.46 9.41L11 7.38V5.12L12.71 3.41L11.29 2L10 3.29L8.71 2L7.29 3.41L9 5.12V7.38L6.5 8.82L4.5 7.69L3.92 5.36L2 5.88L2.47 7.65L.7 8.12L1.22 10.05L3.55 9.43L5.55 10.56V13.45L3.55 14.58L1.22 13.96L.7 15.89L2.47 16.36L2 18.12L3.93 18.64L4.55 16.31L6.55 15.18L9 16.62V18.88L7.29 20.59L8.71 22L10 20.71L11.29 22L12.7 20.59L11 18.88V16.62L14.46 14.61M7.5 10.56L10 9.11L12.5 10.56V13.44L10 14.89L7.5 13.44M19 5C17.89 5 17 5.89 17 7V13.76C16.36 14.33 16 15.15 16 16C16 17.66 17.34 19 19 19S22 17.66 22 16C22 15.15 21.64 14.33 21 13.77V7C21 5.89 20.11 5 19 5M19 6C19.55 6 20 6.45 20 7V8H18V7C18 6.45 18.45 6 19 6",activity:Le,power:"M12 3L2 12H5V20H19V12H22L12 3M11.5 18V14H9L12.5 7V11H15L11.5 18Z",flashAlert:Se,temperature:"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",humidity:Pe,ok:ve,thermometerAlert:Ve,none:"M23 17C23 20.31 20.31 23 17 23V21.5C19.5 21.5 21.5 19.5 21.5 17H23M1 7C1 3.69 3.69 1 7 1V2.5C4.5 2.5 2.5 4.5 2.5 7H1M8 4.32L3.41 8.92C.19 12.14 .19 17.37 3.41 20.59S11.86 23.81 15.08 20.59L22.15 13.5C22.64 13.03 22.64 12.24 22.15 11.75C21.66 11.26 20.87 11.26 20.38 11.75L15.96 16.17L15.25 15.46L21.79 8.92C22.28 8.43 22.28 7.64 21.79 7.15S20.5 6.66 20 7.15L14.19 13L13.5 12.27L20.37 5.38C20.86 4.89 20.86 4.1 20.37 3.61S19.09 3.12 18.6 3.61L11.71 10.5L11 9.8L16.5 4.32C17 3.83 17 3.04 16.5 2.55S15.22 2.06 14.73 2.55L7.11 10.17C8.33 11.74 8.22 14 6.78 15.45L6.07 14.74C7.24 13.57 7.24 11.67 6.07 10.5L5.72 10.15L9.79 6.08C10.28 5.59 10.28 4.8 9.79 4.31C9.29 3.83 8.5 3.83 8 4.32Z",auto_regulation_mode:Me,power_percent:Me,mean_power_cycle:"M7,2V13H10V22L17,10H13L17,2H7Z",valve_open_percent:"M22 13V21H20V19H16.58C15.81 20.76 14.05 22 12 22S8.19 20.76 7.42 19H4V21H2V13H4V15H7.43C7.93 13.85 8.85 12.93 10 12.42V11H8V9H16V11H14V12.42C15.15 12.93 16.07 13.85 16.57 15H20V13H22M17 2H7C6.45 2 6 2.45 6 3S6.45 4 7 4H10V5H11V8H13V5H14V4H17C17.55 4 18 3.55 18 3S17.55 2 17 2Z",regulated_target_temperature:"M12 14C11.7 13.6 11.4 13.3 11 13V5C11 3.3 9.7 2 8 2S5 3.3 5 5V13C2.8 14.7 2.3 17.8 4 20S8.8 22.7 11 21 13.7 16.2 12 14M9 8H7V5C7 4.5 7.5 4 8 4S9 4.5 9 5V8M18 3H16L12.8 12H14.7L15.4 10H18.6L19.3 12H21.2L18 3M15.8 8.7L17 5L18.2 8.7H15.8Z",auto_fan_mode:"M12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2M12 11C12.54 11 13 11.45 13 12C13 12.55 12.54 13 12 13C11.43 13 11 12.55 11 12C11 11.45 11.43 11 12 11M18 15C16.89 15 16 15.9 16 17V23H18V21H20V23H22V17C22 15.9 21.1 15 20 15M18 17H20V19H18Z",auto_fan_mode_off:"M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z",fan_mode:Te,power_sleep:Ee,sleep:"M23,12H17V10L20.39,6H17V4H23V6L19.62,10H23V12M15,16H9V14L12.39,10H9V8H15V10L11.62,14H15V16M7,20H1V18L4.39,14H1V12H7V14L3.62,18H7V20Z"},or="none",ar="off",ir="sleep",nr="auto_fan_none",sr="cooling",rr="heating",lr={auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_turbo:"Turbo"},dr="classic",cr="vtherm",_r="uncolored",ur="gunmalmg";function mr(e){const t=window;t.customCards=t.customCards||[],t.customCards.push(Object.assign(Object.assign({},e),{preview:!0}))}function hr(e){const t=(new Date).getTime()-e.getTime();return Math.floor(t/6e4)}function pr(e,t){const o=Math.round(e*t)/t;return parseFloat(o.toFixed(t))}console.info("%c  VersatileThermostatUI-CARD \n%c  version: 2.3.0    ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),mr({type:"versatile-thermostat-ui-card",name:"Versatile Thermostat Climate Card",description:"Card for climate entity"});let gr=class extends re{_highChanged(e){if(this.isUserLocked)return;const t=e.detail.value;if(isNaN(t))return;const o=e.type.replace("-changed","");this.value=Object.assign(Object.assign({},this.value),{[o]:t}),this._selectTargetTemperature=o,this._callService(o)}_highChanging(e){if(this.isUserLocked)return;const t=e.detail.value;if(isNaN(t))return;const o=e.type.replace("-changing","");this.value=Object.assign(Object.assign({},this.value),{[o]:t}),this._selectTargetTemperature=o,this._updateDisplay(),this._vibrate(20)}_callService(e){this.isUserLocked||("high"!==e&&"low"!==e?this.hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,temperature:this.value.value}):this.hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,target_temp_low:this.value.low,target_temp_high:this.value.high}))}_handleButton(e){var t;if(this.isUserLocked)return;const o=e.currentTarget.target,a=e.currentTarget.step,i="high"===o?this.max:this.min;let n=null!==(t=this.value[o])&&void 0!==t?t:i;n+=a,n=ki(n,this.min,this.max),"high"===o&&null!=this.value.low&&(n=ki(n,this.value.low,this.max)),"low"===o&&null!=this.value.high&&(n=ki(n,this.min,this.value.high)),this.value=Object.assign(Object.assign({},this.value),{[o]:n}),this._updateDisplay(),this._vibrate(40),this._debouncedCallService(o)}_handleTempUp(){var e;if(this.isUserLocked)return;const t=this.step||.5;let o="number"==typeof(null===(e=this.value)||void 0===e?void 0:e.value)?this.value.value:this.min;o+=t,o=Math.min(o,this.max),this.value=Object.assign(Object.assign({},this.value),{value:o}),this._callService("value")}_handleTempDown(){var e;if(this.isUserLocked)return;const t=this.step||.5;let o="number"==typeof(null===(e=this.value)||void 0===e?void 0:e.value)?this.value.value:this.min;o-=t,o=Math.max(o,this.min),this.value=Object.assign(Object.assign({},this.value),{value:o}),this._callService("value")}_handleSelectTemp(e){if(this.isUserLocked)return;const t=e.currentTarget.target;this._selectTargetTemperature=t,this._updateDisplay(),this._vibrate(40)}setConfig(e){var t;this._config=Object.assign({tap_action:{action:"toggle"},hold_action:{action:"more-info"}},e);const o=this._config&&this._config.theme?this._config.theme:"";this.theme=o,this.theme?this.setAttribute("theme",this.theme):this.effectiveDisableCircle?this.effectiveDisableCircle&&!this.effectiveDisableBackgroundColor?this.setAttribute("theme","vtherm"):this.effectiveDisableCircle&&this.effectiveDisableBackgroundColor&&this.setAttribute("theme","uncolored"):this.setAttribute("theme","classic"),this._config&&this._config.theme===ur?(this._originalConfigOptions||(this._originalConfigOptions={disable_circle:this._config.disable_circle,disable_background_color:this._config.disable_background_color,disable_buttons:this._config.disable_buttons,disable_power_infos:this._config.disable_power_infos,disable_auto_fan_infos:this._config.disable_auto_fan_infos,disable_target_icon:this._config.disable_target_icon,disable_window:this._config.disable_window,disable_overpowering:this._config.disable_overpowering,allow_lock_toggle:this._config.allow_lock_toggle,disable_presets:this._config.disable_presets}),this._config.disable_circle=!0,this._config.disable_background_color=!0,this._config.disable_buttons=!0,this._config.disable_power_infos=!0,this._config.disable_auto_fan_infos=!0,this._config.disable_target_icon=!0,this._config.disable_window=!0,this._config.disable_overpowering=!0,this._config.disable_presets=null!==(t=this._config.disable_presets)&&void 0!==t&&t):this._originalConfigOptions&&(Object.assign(this._config,this._originalConfigOptions),this._originalConfigOptions=void 0,this._config=Object.assign({},this._config),this.willUpdate(new Map([["_config",void 0]])),this.requestUpdate()),this._config&&this._config.theme&&this.setAttribute("theme",this._config.theme)}_applyThemeOverrides(e){var t;this._config||(this._config={}),e===ur?(this._originalConfigOptions||(this._originalConfigOptions={disable_circle:this._config.disable_circle,disable_background_color:this._config.disable_background_color,disable_buttons:this._config.disable_buttons,disable_power_infos:this._config.disable_power_infos,disable_auto_fan_infos:this._config.disable_auto_fan_infos,disable_target_icon:this._config.disable_target_icon,disable_window:this._config.disable_window,disable_overpowering:this._config.disable_overpowering,allow_lock_toggle:this._config.allow_lock_toggle,disable_presets:this._config.disable_presets}),this._config.disable_circle=!0,this._config.disable_background_color=!0,this._config.disable_buttons=!0,this._config.disable_power_infos=!0,this._config.disable_auto_fan_infos=!0,this._config.disable_target_icon=!0,this._config.disable_window=!0,this._config.disable_overpowering=!0,this._config.disable_presets=null!==(t=this._config.disable_presets)&&void 0!==t&&t):this._originalConfigOptions&&(Object.assign(this._config,this._originalConfigOptions),this._originalConfigOptions=void 0,this._config=Object.assign({},this._config),this.willUpdate(new Map([["_config",void 0]])),this.requestUpdate())}get effectiveDisableCircle(){var e;const t=this._config&&this._config.theme?this._config.theme:void 0;return t!==dr&&(t===cr||(t===_r||(t===ur||!!(null===(e=this._config)||void 0===e?void 0:e.disable_circle))))}get effectiveDisableBackgroundColor(){var e;const t=this._config&&this._config.theme?this._config.theme:void 0;return t!==dr&&(t!==cr&&(t===_r||(t===ur||!!(null===(e=this._config)||void 0===e?void 0:e.disable_background_color))))}getCardSize(){return 1}_vibrate(e){try{navigator.vibrate(e)}catch(e){}}_toggleThemeMenu(){this._showThemeMenu=!this._showThemeMenu}_closeThemeMenu(){this._showThemeMenu=!1}_applyTheme(e){this._config||(this._config={}),this._config.theme=e,wi(this,"config-changed",{config:this._config}),this._closeThemeMenu(),this.setAttribute("theme",e),this._applyThemeOverrides(e)}async _menuLockToggle(){var e;if((null===(e=this._config)||void 0===e?void 0:e.entity)&&this.hass&&this.stateObj){if(this._hasLockCode)return this.isLocking=!this._isLocked,this.showDigicodeModal=!0,void(this.enteredCode="");try{this._isLocked?this._isLockConfigured?(await this.hass.callService("versatile_thermostat","unlock",{entity_id:this._config.entity}),this._startRelockTimeout()):(this._isLocked=this.isUserLocked=!1,this.requestUpdate(),this._startRelockTimeout()):this._isLockConfigured?await this.hass.callService("versatile_thermostat","lock",{entity_id:this._config.entity}):(this._isLocked=this.isUserLocked=!0,this.requestUpdate())}catch(e){console.error(e)}}}_menuCancelTimedPreset(){this.timedPresetActive&&this._handleCancelTimedPreset()}firstUpdated(e){this._init=!1}shouldUpdate(e){return void 0!==e.has("_config")&&void 0!==e.get("_config")&&(this._hasOverpowering=!1,this._hasWindow=!1,this._hasWindowByPass=!1,this._hasMotion=!1,this._hasPresence=!1,this._hasAutoStartStop=!1,this._isAutoStartStopEnabled=!1,this.humidity=0),void 0!==e.get("hass")&&(this._init=!1),!0}updated(e){var t,o;super.updated(e),this._firstRender=!1,e.has("showDigicodeModal")&&(this.showDigicodeModal?window.addEventListener("keydown",this._handleKeyDown):window.removeEventListener("keydown",this._handleKeyDown)),null===(o=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.querySelector(".security"))||void 0===o||o.addEventListener("click",(()=>{var e,t,o,a;null===(t=null===(e=null==this?void 0:this.shadowRoot)||void 0===e?void 0:e.querySelector(".security"))||void 0===t||t.remove(),null===(a=null===(o=null==this?void 0:this.shadowRoot)||void 0===o?void 0:o.querySelector(".content"))||void 0===a||a.classList.remove("security_msg"),this._vibrate(2)}))}_willUpdatePower(){let e,t,o;this._externalPowerInfos=[],this._config.powerEntity&&(console.log(`There is a powerEntity ${this._config.powerEntity}`),e=this.hass.states[this._config.powerEntity],t=Number(e.state),o=e.attributes.unit_of_measurement,console.log(`Power found ${t} ${o} for ${name}`)),t&&(console.log("J'ai pushé du power"),this._externalPowerInfos.push({name:"mean_power_cycle",value:t,unit:o,class:"vt-power-color"}))}willUpdate(e){var t,o,a,i,n,s,r,l,d,c,_,u,m,h,p,g,f,b,v,y,w,k,T,S,A,D,x,$,C,M,L,E,V,P,z,H,O,N,B,U,j,R,I,W,F,Z,G,K,q,Y,X,J;if(!this.hass||!this._config||!e.has("hass")&&!e.has("_config"))return;const Q=this._config.entity;this._willUpdatePower();const ee=this.hass.states[Q];if(!ee)return void console.log("No state");const te=e.get("hass");if(!te||te.states[Q]!==ee){if(!this._config||!this.hass||!this._config.entity)return void console.log("No change return");console.log("Something may have change"),this.stateObj=ee;const e=this.stateObj.attributes,Q=this.stateObj.state;this._isLockConfigured=!0===(null==e?void 0:e.is_lock_configured),(null==e?void 0:e.lock_manager)&&(this._isLocked=(null===(t=null==e?void 0:e.lock_manager)||void 0===t?void 0:t.is_locked)||!1),this.isUserLocked=this._isLocked&&(!this._isLockConfigured||(null===(o=null==e?void 0:e.lock_manager)||void 0===o?void 0:o.lock_users)||!1),this.isAutomationLocked=this._isLocked&&((null===(a=null==e?void 0:e.lock_manager)||void 0===a?void 0:a.lock_automations)||!1),this._hasLockCode=!0===(null===(i=null==e?void 0:e.lock_manager)||void 0===i?void 0:i.lock_code),console.log(`Lock states. isConfigured:${this._isLockConfigured} isLocked=${this._isLocked} isUserLocked=${this.isUserLocked} isAutomationLocked=${this.isAutomationLocked} hasLockCode=${this._hasLockCode}`),this.name="",this.hvacMode=Q||ar,this.hvacAction=null==e?void 0:e.hvac_action,this.preset=null==e?void 0:e.preset_mode,this.modes=(null==e?void 0:e.hvac_modes)?Object.values(e.hvac_modes):[],this.presets=e.preset_modes?Object.values(e.preset_modes):[],this.isSleeping=!0===(null===(n=null==e?void 0:e.specific_states)||void 0===n?void 0:n.is_sleeping),this.powerPercent=(null===(s=null==e?void 0:e.vtherm_over_switch)||void 0===s?void 0:s.power_percent)||(null===(l=null===(r=null==e?void 0:e.vtherm_over_climate)||void 0===r?void 0:r.valve_regulation)||void 0===l?void 0:l.power_percent)||0,void 0===(null===(d=null==e?void 0:e.specific_states)||void 0===d?void 0:d.is_device_active)?(this.isDeviceActive=this.hvacAction==rr||this.hvacAction==sr,console.log(`is_device_active not found value=${this.isDeviceActive}`)):(this.isDeviceActive=!0===(null===(c=null==e?void 0:e.specific_states)||void 0===c?void 0:c.is_device_active),console.log(`is_device_active found value=${this.isDeviceActive}`)),this.temperature=null==e?void 0:e.temperature,this.step=(null===(_=null==e?void 0:e.configuration)||void 0===_?void 0:_.target_temperature_step)||.5,this.min=(null==e?void 0:e.min_temp)||7,this.max=(null==e?void 0:e.max_temp)||35,this.current=(null==e?void 0:e.current_temperature)||0,this.windowState=null===(u=null==e?void 0:e.window_manager)||void 0===u?void 0:u.window_state,this.windowAutoState=null===(m=null==e?void 0:e.window_manager)||void 0===m?void 0:m.window_auto_state,this.humidity=(null==e?void 0:e.humidity)?parseFloat(e.humidity):0,this.overpoweringState=(null===(h=null==e?void 0:e.power_manager)||void 0===h?void 0:h.overpowering_state)||"off",this.presenceState=(null===(p=null==e?void 0:e.presence_manager)||void 0===p?void 0:p.presence_state)||"off",this.motionState=(null===(g=null==e?void 0:e.motion_manager)||void 0===g?void 0:g.motion_state)||"off",this._hasWindowByPass=!0===(null===(f=null==e?void 0:e.window_manager)||void 0===f?void 0:f.is_window_bypass),this.safetyState=(null===(b=null==e?void 0:e.safety_manager)||void 0===b?void 0:b.safety_state)||"off",this.meanCyclePower=(null===(v=null==e?void 0:e.power_manager)||void 0===v?void 0:v.mean_cycle_power)||0,this.valveOpenPercent=(null===(y=null==e?void 0:e.vtherm_over_valve)||void 0===y?void 0:y.valve_open_percent)||(null===(k=null===(w=null==e?void 0:e.vtherm_over_climate_valve)||void 0===w?void 0:w.valve_regulation)||void 0===k?void 0:k.valve_open_percent)||0,this.devicePower=(null===(T=null==e?void 0:e.power_manager)||void 0===T?void 0:T.device_power)||0,this.isRegulated=!0===(null===(S=null==e?void 0:e.vtherm_over_climate)||void 0===S?void 0:S.is_regulated),this.regulatedTargetTemperature=(null===(D=null===(A=null==e?void 0:e.vtherm_over_climate)||void 0===A?void 0:A.regulation)||void 0===D?void 0:D.regulated_target_temperature)||null,this.autoRegulationMode=(null===($=null===(x=null==e?void 0:e.vtherm_over_climate)||void 0===x?void 0:x.regulation)||void 0===$?void 0:$.auto_regulation_mode)||null,this.currentAutoFanMode=(null===(C=null==e?void 0:e.vtherm_over_climate)||void 0===C?void 0:C.current_auto_fan_mode)||null,this.autoFanMode=(null===(M=null==e?void 0:e.vtherm_over_climate)||void 0===M?void 0:M.auto_fan_mode)||null,this.fanMode=(null==e?void 0:e.fan_mode)||null,this.hvacOffReason=(null===(L=null==e?void 0:e.specific_states)||void 0===L?void 0:L.hvac_off_reason)||null,this.isRecalculateScheduled=(null===(E=null==e?void 0:e.specific_states)||void 0===E?void 0:E.is_recalculate_scheduled)||null,this.isOn=!0===(null===(V=null==e?void 0:e.specific_states)||void 0===V?void 0:V.is_on),this.timedPresetActive=!0===(null===(P=null==e?void 0:e.timed_preset_manager)||void 0===P?void 0:P.is_active),this.timedPresetRemainingTime=(null===(z=null==e?void 0:e.timed_preset_manager)||void 0===z?void 0:z.remaining_time_min)||null,this.timedPresetPreset=(null===(H=null==e?void 0:e.timed_preset_manager)||void 0===H?void 0:H.preset)||null;const te=(null===(O=null==e?void 0:e.requested_state)||void 0===O?void 0:O.hvac_mode)||null;let oe=(null===(N=null==e?void 0:e.specific_states)||void 0===N?void 0:N.messages)||[];oe&&!Array.isArray(oe)&&(oe=[oe]);const ae=1==(null===(B=null==e?void 0:e.vtherm_over_climate_valve)||void 0===B?void 0:B.have_valve_regulation);if((null===(U=this._config)||void 0===U?void 0:U.disable_name)||(this.name=this._config.name?this._config.name:e.friendly_name),this.hvacMode==ar&&!0===this.isSleeping&&(this.hvacMode=ir),console.log(`Mode is ${this.hvacMode}`),!0===(null==e?void 0:e.is_over_switch)&&this.powerPercent>0&&(this.hvacAction="heat"==te?rr:sr,console.log(`After hvac_action patch ${this.hvacAction}`)),console.log(`Modes are ${this.modes}`),this.modes.length>1&&this.modes.includes(ar)&&this.modes.sort(((e,t)=>"off"===e?1:"off"===t?-1:e.localeCompare(t))),console.log(`After sort modes are ${this.modes}`),this.presets.length>0&&(this.presets=this.presets.filter((e=>e!=or&&("cool"!=Q||"frost"!=e)))),this.value={value:(null==e?void 0:e.temperature)||0,low:(null==e?void 0:e.target_temp_low)||null,high:(null==e?void 0:e.target_temp_high)||null},"on"===this.windowState||"on"===this.windowAutoState?this._hasWindow=!0:this._hasWindow=!1,"on"===this.overpoweringState?(this._hasOverpowering=!0,this.overpowering=!0):(this._hasOverpowering=!1,this.overpowering=!1),"on"===this.presenceState?(this._hasPresence=!0,this.presence=!0):(this._hasPresence=!1,this.presence=!1),"on"===this.motionState?(this._hasMotion=!0,this.motion=!0):(this._hasMotion=!1,this.motion=!1),"on"!==this.safetyState||(null===(j=null==this?void 0:this._config)||void 0===j?void 0:j.disable_safety_warning))this.safety_state=null;else{if(this.safety_state=[],this.safety_state.push({name:ui({hass:this.hass,string:"extra_states.safety_warning"}),security_msg:ui({hass:this.hass,string:"extra_states.safety_warning_msg"})}),null===(R=e.specific_states)||void 0===R?void 0:R.last_temperature_datetime){let t=hr(new Date(null===(I=e.specific_states)||void 0===I?void 0:I.last_temperature_datetime));t>0&&this.safety_state.push({name:ui({hass:this.hass,string:"extra_states.room_temp"}),security_msg:t+" "+ui({hass:this.hass,string:"extra_states.minutes"})})}if(null===(W=e.specific_states)||void 0===W?void 0:W.last_ext_temperature_datetime){let t=hr(new Date(null===(F=e.specific_states)||void 0===F?void 0:F.last_ext_temperature_datetime));t>0&&this.safety_state.push({name:ui({hass:this.hass,string:"extra_states.outdoor_temp"}),security_msg:t+" "+ui({hass:this.hass,string:"extra_states.minutes"})})}}if(console.log(`Brut messages=${oe}`),this.messages=[],this._hasError=!1,this.safety_state)for(const e of this.safety_state)this.messages.push(`${e.name}: ${e.security_msg}`),this._hasError=!0;for(const e of oe)this.messages.push(ui({hass:this.hass,string:`extra_states.${e}`}));const ie=null==e?void 0:e.heating_failure_detection_manager,ne="on"===(null==ie?void 0:ie.heating_failure_state),se="on"===(null==ie?void 0:ie.cooling_failure_state);if(ne&&(this.messages.push(ui({hass:this.hass,string:"extra_states.heating_failure"})),this._hasError=!0),se&&(this.messages.push(ui({hass:this.hass,string:"extra_states.cooling_failure"})),this._hasError=!0),console.log(`Messages=${JSON.stringify(this.messages)}`),this.powerInfos=[],console.log(`MeanCyclePower=${this.meanCyclePower} PowerPercent=${this.powerPercent} ValveOpenPercent=${this.valveOpenPercent} DevicePower=${this.devicePower}`),(null===(Z=this._config)||void 0===Z?void 0:Z.disable_power_infos)||!this.isOn&&!ae?console.log(`No power to disply is_on=${this.isOn} or disabled`):((null==e?void 0:e.is_over_switch)&&(this.meanCyclePower&&!(null===(G=this._config)||void 0===G?void 0:G.powerEntity)&&this.powerInfos.push({name:"mean_power_cycle",value:pr(this.meanCyclePower,1),unit:this.meanCyclePower<7?"kW":"W",class:"vt-power-color"}),this.powerInfos.push({name:"power_percent",value:this.powerPercent,unit:"%",class:"vt-power-color"})),((null==e?void 0:e.is_over_valve)||ae)&&(this.meanCyclePower&&!(null===(K=this._config)||void 0===K?void 0:K.powerEntity)&&this.powerInfos.push({name:"mean_power_cycle",value:pr(this.meanCyclePower,1),unit:this.meanCyclePower<7?"kW":"W",class:"vt-power-color"}),this.powerInfos.push({name:"valve_open_percent",value:this.valveOpenPercent,unit:"%",class:"vt-power-color"})),(null==e?void 0:e.is_over_climate)&&!ae&&(this.devicePower&&!(null===(q=this._config)||void 0===q?void 0:q.powerEntity)&&this.powerInfos.push({name:"mean_power_cycle",value:this.devicePower,unit:this.devicePower<7?"kW":"W",class:"vt-power-color"}),this.isRegulated&&(this.powerInfos.push({name:"regulated_target_temperature",value:this.regulatedTargetTemperature,unit:null===(Y=null==e?void 0:e.configuration)||void 0===Y?void 0:Y.temperature_unit,class:"vt-temp-color"}),this.powerInfos.push({name:"auto_regulation_mode",value:ui({hass:this.hass,string:`extra_states.${this.autoRegulationMode}`}),unit:"",class:"vt-label-color"})))),this.autoFanInfos=[],!(null===(X=null==this?void 0:this._config)||void 0===X?void 0:X.disable_auto_fan_infos)&&(null==e?void 0:e.is_over_climate)&&!ae){const e=this.currentAutoFanMode!=nr?"auto_fan_mode":"auto_fan_mode_off";console.log(`VersatileThermostat UI : auto_fan icon name ${e}`),this.autoFanInfos.push({name:e,value:ui({hass:this.hass,string:`extra_states.${this.currentAutoFanMode}`}),unit:"",class:"vt-label-color"}),this.fanMode&&this.autoFanInfos.push({name:"fan_mode",value:ui({hass:this.hass,string:`extra_states.fan_${this.fanMode}`}),unit:"",class:"vt-label-color"})}this._hasAutoStartStop="hvac_off_auto_start_stop"===this.hvacOffReason,this._isAutoStartStopConfigured=!0===(null==e?void 0:e.is_auto_start_stop_configured),this._isAutoStartStopEnabled=!0===(null===(J=null==e?void 0:e.auto_start_stop_manager)||void 0===J?void 0:J.auto_start_stop_enable),console.log(`_isAutoStartStopConfigured=${this._isAutoStartStopConfigured} _isAutoStartStopEnabled=${this._isAutoStartStopEnabled} hvac_off_reason=${this.hvacOffReason}`),this._updateDisplay()}}_updateDisplay(){var e;(null===(e=null==this?void 0:this._config)||void 0===e?void 0:e.set_current_as_main)?(this._display_bottom=this._getCurrentSetpoint(),this._display_top=this.current):(this._display_bottom=this.current,this._display_top=this._getCurrentSetpoint())}_handleAction(e){this.isUserLocked||(e.currentTarget.mode===ir?this.hass.callService("versatile_thermostat","set_hvac_mode_sleep",{entity_id:this._config.entity}):this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:e.currentTarget.mode}))}_handleDisplayMessages(){this.displayMessages=!this.displayMessages,this.requestUpdate(),this._vibrate(40)}_handlePreset(e){if(this.isUserLocked)return;this.last_target_temperature=this.temperature;const t=e.currentTarget.preset;this.timedPresetDuration&&this.timedPresetDuration>0?(this.hass.callService("versatile_thermostat","set_timed_preset",{entity_id:this._config.entity,preset:t,duration_minutes:this.timedPresetDuration}),this.timedPresetDuration=null):this.hass.callService("climate","set_preset_mode",{entity_id:this._config.entity,preset_mode:t})}_formatRemainingTime(e){if(null===e||e<=0)return"0";if(e<60)return`${e}`;const t=Math.floor(e/60),o=e%60;return 0===o?`${t}h`:`${t}h${o}`}_handleTimedPresetDurationChange(e){const t=e.target,o=t.value?parseInt(t.value,10):null;this.timedPresetDuration=o&&o>0?o:null}_handleTimedPresetSelectChange(e){const t=e.target,o=t.value?parseInt(t.value,10):null;this.timedPresetDuration=o&&o>0?o:null}_handleCancelTimedPreset(){this.isUserLocked||(console.info("VersatileThermostatUI-CARD canceling timed preset"),this.hass.callService("versatile_thermostat","cancel_timed_preset",{entity_id:this._config.entity}))}_handleClickAutoFanInfo(){if(this.isUserLocked)return;let e=nr;this.currentAutoFanMode==nr&&(e=this.autoFanMode);const t=lr[e];console.info(`VersatileThermostatUI-CARD changing auto_fan_mode to ${e} (mapped=$${t}`),t?this.hass.callService("versatile_thermostat","set_auto_fan_mode",{entity_id:this._config.entity,auto_fan_mode:t}):console.warn(`VersatileThermostatUI-CARD: auto_fan_mode ${e} has no mapping, aborting change.`)}_handleClickAutoStartStopEnable(){if(this.isUserLocked)return;let e=!this._isAutoStartStopEnabled;console.info(`VersatileThermostatUI-CARD changing auto_start_stop_enable to ${e}`),this.hass.callService("switch","toggle",{entity_id:this._config.autoStartStopEnableEntity})}_handleToggleWindowByPass(){if(this.isUserLocked)return;console.log(`_handleToggleWindowByPass called. Current windowByPass is ${this._hasWindowByPass}`);let e=!this._hasWindowByPass;console.info(`VersatileThermostatUI-CARD changing windowByPass to ${e}`),this.hass.callService("versatile_thermostat","set_window_bypass",{entity_id:this._config.entity,window_bypass:e})}_getCurrentSetpoint(){var e,t,o,a,i,n,s,r;return null!==(null===(e=null==this?void 0:this.value)||void 0===e?void 0:e.high)&&null!==(null===(t=null==this?void 0:this.value)||void 0===t?void 0:t.low)?((null===(o=null==this?void 0:this.value)||void 0===o?void 0:o.low)||0)>=this.current?(null===(a=null==this?void 0:this.value)||void 0===a?void 0:a.low)||0:((null===(i=null==this?void 0:this.value)||void 0===i?void 0:i.high)||0)<=this.current?(null===(n=null==this?void 0:this.value)||void 0===n?void 0:n.high)||0:(null===(s=null==this?void 0:this.value)||void 0===s?void 0:s.low)||0:(null===(r=null==this?void 0:this.value)||void 0===r?void 0:r.value)||0}_renderHVACAction(){return this.hvacAction&&"off"!==this.hvacAction&&"idle"!==this.hvacAction?"heating"===this.hvacAction?W`<path class="status ${this.isDeviceActive?"active":""}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${Ae}" />`:"cooling"===this.hvacAction||"cool"==this.hvacMode?W`<path class="status cooler ${this.isDeviceActive?"active":""}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${ve}" />`:W`<path class="status" transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${we}" />`:I``}_renderHVACActionBadge(){return this.hvacAction&&"off"!==this.hvacAction&&"idle"!==this.hvacAction?"heating"===this.hvacAction?W`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${Ae}"/></svg>`:"cooling"===this.hvacAction?W`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ve}"/></svg>`:W`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ye}"/></svg>`:I``}_renderIcon(e,t,o){if(!tr[e])return I``;const a=this.hass.localize(`component.climate.state._.${e}`)||ui({hass:this.hass,string:`extra_states.${e}`});return I`
      <div class="hvac-badge-container">
        <ha-icon-button
          title="${t===e?e:""}"
          class=${be({"selected-icon":t===e})}
          .mode=${e}
          @click=${o?this._cycleHvacMode:this._handleAction}
          tabindex="0"
          .path=${tr[e]}
          .label=${a}
        ></ha-icon-button>
        ${(()=>{if(this.theme!==ur)return I``;let e="";return this.hvacAction&&"off"!==this.hvacAction&&"idle"!==this.hvacAction?(e="heating"===this.hvacAction?"heating":"cooling"===this.hvacAction?"cooling":"warning",I`<div class="hvac-badge ${e}">${this._renderHVACActionBadge()}</div>`):I``})()}
      </div>
    `}async _cycleHvacMode(){var e;if(!(null===(e=this._config)||void 0===e?void 0:e.entity)||!this.hass)return;const t=Array.isArray(this.modes)&&this.modes.length>0?this.modes:[];if(0===t.length)return;const o=this.hvacMode||"";let a=t.indexOf(o);-1===a&&(a=0);const i=t[(a+1)%t.length];try{i===ir?await this.hass.callService("versatile_thermostat","set_hvac_mode_sleep",{entity_id:this._config.entity}):await this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:i})}catch(e){console.error(e)}}_renderMessagesButton(){const e=ui({hass:this.hass,string:"extra_states.messages-button"});return I`
      <ha-icon-button
        title="${e}"
        class="messages-button ${this._hasError?"error":""}"
        @click=${this._handleDisplayMessages}
        tabindex="0"
        .path=${this._hasError?ye:xe}
        .label=${e}
      >
      </ha-icon-button>
    `}_renderRecalculateScheduledButton(){const e=ui({hass:this.hass,string:"extra_states.recalculation_scheduled"});return I`
      <ha-icon-button
        title="${e}"
        class="messages-button"
        tabindex="0"
        .path=${"M21,10.12H14.22L16.96,7.3C14.23,4.6 9.81,4.5 7.08,7.2C4.35,9.91 4.35,14.28 7.08,17C9.81,19.7 14.23,19.7 16.96,17C18.32,15.65 19,14.08 19,12.1H21C21,14.08 20.12,16.65 18.36,18.39C14.85,21.87 9.15,21.87 5.64,18.39C2.14,14.92 2.11,9.28 5.62,5.81C9.13,2.34 14.76,2.34 18.27,5.81L21,3V10.12M12.5,8V12.25L16,14.33L15.28,15.54L11,13V8H12.5Z"}
        .label=${e}
      >
      </ha-icon-button>
    `}_renderWindowByPassButton(){const e=ui({hass:this.hass,string:"extra_states.window-bypass-button"});return I`
      <ha-icon-button
        title="${e}"
        class="window-bypass-button"
        @click=${this._handleToggleWindowByPass}
        tabindex="0"
        .path=${He}
        .label=${e}
      >
      </ha-icon-button>
    `}_renderPreset(e,t){const o=(this.hass.localize(`component.climate.state._.${e}`)||ui({hass:this.hass,string:`extra_states.${e}`}))+"\n"+ui({hass:this.hass,string:"extra_states.change_message"});return I`
      <div class="preset-label preset-${e}">
          <ha-icon-button
            title="${t===e?e:""}"
            class=${be({"selected-icon":t===e})}
            .preset=${e}
            @click=${this._handlePreset}
            tabindex="0"
            .path=${tr[e]}
            .label=${o}
          >
        </ha-icon-button>
      </div>
    `}_renderPowerInfo(e){const t=this.hass.localize(`component.climate.state._.${e.name}`)||ui({hass:this.hass,string:`extra_states.${e.name}`});return I`
      <div class="left-info-label">
        <span>
          <ha-icon-button
            title="${t}"
            class=${e.class} 
            .name=${e.name}
            tabindex="0"
            .path=${tr[e.name]}
            .label=${t}
          >
        </ha-icon-button>
        </span>
        <span>${e.value} ${e.unit}</span>
      </div>
    `}_renderAutoFanInfo(e){const t=(this.hass.localize(`component.climate.state._.${e.name}`)||ui({hass:this.hass,string:`extra_states.${e.name}`}))+"\n"+ui({hass:this.hass,string:"extra_states.toggle_message"});return I`
      <div class="left-info-label">
        <span>
          <ha-icon-button
            title="${t}"
            class=${e.class} 
            .name=${e.name}
            @click=${this._handleClickAutoFanInfo}
            tabindex="0"
            .path=${tr[e.name]}
            .label=${t}
          >
        </ha-icon-button>
        </span>
        <span>${e.value} ${e.unit}</span>
      </div>
    `}_renderAutoStartStopEnable(){const e=ui({hass:this.hass,string:"extra_states.auto_start_stop_enable"}),t=ui({hass:this.hass,string:"extra_states.auto_start_stop_label"}),o=this._isAutoStartStopEnabled?"checked":"";return console.log(`checked=${o}`),I`
      <div class="left-info-label" title="${e}">
        <span>
          <input type="checkbox" .checked=${this._isAutoStartStopEnabled} class="auto-start-stop-enable" @click=${this._handleClickAutoStartStopEnable} .label="${e}" name="auto-start-stop-enable">
        </span>
        <span>${t}</span>
      </div>
    `}_handleMoreInfo(){wi(this,"hass-more-info",{entityId:this._config.entity})}_handleLockToggle(){var e,t;if((null===(e=this._config)||void 0===e?void 0:e.allow_lock_toggle)&&(null===(t=this._config)||void 0===t?void 0:t.entity)&&this.hass&&this.stateObj)if(this._clearRelockTimeout(),this._isLocked){if(this._hasLockCode)return this.isLocking=!1,this.showDigicodeModal=!0,void(this.enteredCode="");this._isLockConfigured?(this.hass.callService("versatile_thermostat","unlock",{entity_id:this._config.entity}),this._startRelockTimeout()):(this._isLocked=this.isUserLocked=!1,this.requestUpdate(),this._startRelockTimeout())}else{if(this._hasLockCode)return this.isLocking=!0,this.showDigicodeModal=!0,void(this.enteredCode="");this._isLockConfigured?this.hass.callService("versatile_thermostat","lock",{entity_id:this._config.entity}):(this._isLocked=this.isUserLocked=!0,this.requestUpdate())}}_startRelockTimeout(){var e;const t=null===(e=this._config)||void 0===e?void 0:e.lock_relock_delay;t&&t>0&&(this._relockTimeout=setTimeout((()=>{this._relockCard()}),1e3*t))}_clearRelockTimeout(){this._relockTimeout&&(clearTimeout(this._relockTimeout),this._relockTimeout=null)}_relockCard(){var e;(null===(e=this._config)||void 0===e?void 0:e.entity)&&this.hass&&(this._isLockConfigured?this.hass.callService("versatile_thermostat","lock",{entity_id:this._config.entity}):(this._isLocked=this.isUserLocked=!0,this.requestUpdate()))}_handleKeypadPress(e){this.enteredCode.length<4&&(this.enteredCode+=e,this.codeError=!1,4===this.enteredCode.length&&this._handleValidate())}_handleKeypadClear(){this.enteredCode=this.enteredCode.slice(0,-1),this.codeError=!1}_handleModalClose(){this.showDigicodeModal=!1,this.enteredCode="",this.codeError=!1}async _handleValidate(){if(4===this.enteredCode.length){const e=this.isLocking?"lock":"unlock";try{await this.hass.callService("versatile_thermostat",e,{entity_id:this._config.entity,code:this.enteredCode}),this._handleModalClose(),this.isLocking||this._startRelockTimeout()}catch(e){this.codeError=!0,this.enteredCode="",this._vibrate(200)}}else this.codeError=!0,this.enteredCode="",this._vibrate(200)}buildTitle(){var e,t,o;let a="";return this._hasWindow&&!(null===(e=this._config)||void 0===e?void 0:e.disable_window)&&(a+=ui({hass:this.hass,string:"extra_states.window_open"})+"\n"),this._hasWindowByPass&&(a+=ui({hass:this.hass,string:"extra_states.window_bypass"})+"\n"),this._hasOverpowering&&!(null===(t=this._config)||void 0===t?void 0:t.disable_overpowering)&&(a+=ui({hass:this.hass,string:"extra_states.overpowering"})+"\n"),this._hasPresence&&(a+=ui({hass:this.hass,string:"extra_states.presence"})+"\n"),this._hasAutoStartStop&&!(null===(o=this._config)||void 0===o?void 0:o.disable_autoStartStop)&&(a+=ui({hass:this.hass,string:"extra_states.auto_start_stop"})+"\n"),this._hasMotion&&(a+=ui({hass:this.hass,string:"extra_states.motion"})+"\n"),a}_renderTemperature(e,t,o,a,i){var n,s,r,l,d;let c=t?15:6,_=t?-2:-1,u=t?-5.5:-2,m=t?5:3;(null===(n=this._config)||void 0===n?void 0:n.theme)===ur&&(c=t?10:5,_=-1,u=t?-4:-2,m=t?4:3);let h,p=76,g=57,f=.2;return h=e?Ti(e,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1}):this.hass.localize("extra_states.temp_unavailable"),i&&t&&(p=(null===(s=this._config)||void 0===s?void 0:s.theme)===ur?40:30,null===(r=this._config)||void 0===r||r.theme,g=56,f=(null===(l=this._config)||void 0===l?void 0:l.theme)===ur?.22:.25),W`
      ${i&&!(null===(d=this._config)||void 0===d?void 0:d.disable_target_icon)&&this.effectiveDisableCircle?W`
        <path 
          class="main-value" 
          transform="translate(${p}, ${g}) scale(${f})" 
          fill="#ffffff" 
          d="${"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z"}" 
        />`:""}
      <text class="main-value" x="${o}" y="${a}" dominant-baseline="middle" text-anchor="middle" style="font-size:${c}px;">
        ${W`${h}`}
        <tspan dx="${_}" dy="${u}" style="font-size: ${m}px;">
          ${W`
            ${this.hass.config.unit_system.temperature}
          `}
        </tspan>
      </text>
    `}constructor(){super(),this.value={},this._selectTargetTemperature="low",this.current=0,this.humidity=0,this.temperature=0,this.min=7,this.max=35,this.step=.5,this.powerPercent=0,this.meanCyclePower=0,this.valveOpenPercent=0,this.devicePower=0,this.regulatedTargetTemperature=null,this.isOn=!1,this.window=!1,this.windowByPass=!1,this.presence=!1,this.motion=!1,this.overpowering=!1,this.isDeviceActive=!1,this.isSleeping=!1,this.isRegulated=!1,this.isRecalculateScheduled=!1,this.windowState="off",this.windowAutoState="off",this.overpoweringState="off",this.presenceState="off",this.motionState="off",this.safetyState="off",this.status="loading",this.hvacMode=ar,this.hvacAction="idle",this.preset=or,this.autoRegulationMode="",this.currentAutoFanMode=nr,this.autoFanMode=nr,this.fanMode="",this.hvacOffReason="",this.dragging=!1,this.name="",this.target="value",this._debouncedCallService=((e,t,o=!1)=>{let a;const i=(...i)=>{const n=o&&!a;clearTimeout(a),a=window.setTimeout((()=>{a=void 0,o||e(...i)}),t),n&&e(...i)};return i.cancel=()=>{clearTimeout(a)},i})((e=>this._callService(e)),1e3),this._init=!0,this._firstRender=!0,this._ignore=!1,this._hasWindow=!1,this._hasWindowByPass=!1,this._hasPresence=!1,this._hasMotion=!1,this._hasOverpowering=!1,this._hasAutoStartStop=!1,this._isAutoStartStopEnabled=!1,this._isAutoStartStopConfigured=!1,this._isLockConfigured=!1,this._isLocked=!1,this._hasLockCode=!1,this._relockTimeout=null,this._oldValueMin=0,this._oldValueMax=0,this._display_bottom=0,this._display_top=0,this.modes=[],this.presets=[],this.safety_state={},this.powerInfos=[],this._externalPowerInfos=[],this.autoFanInfos=[],this.messages=[],this.displayMessages=!1,this._hasError=!1,this._showThemeMenu=!1,this.theme="",this.isLocked=!1,this.isUserLocked=!1,this.isAutomationLocked=!1,this.showDigicodeModal=!1,this.enteredCode="",this.codeError=!1,this.isLocking=!1,this.timedPresetDuration=null,this.timedPresetActive=!1,this.timedPresetRemainingTime=null,this.timedPresetPreset=null,this._handleKeyDown=e=>{e.key>="0"&&e.key<="9"?this._handleKeypadPress(e.key):"Backspace"===e.key&&this._handleKeypadClear()},this.render=()=>{var e,t,o,a,i,n,s,r,l,d,c,_,u,m,h,p,g,f,b,v,y,w,k,T,S,A;return(null===(e=this._config)||void 0===e?void 0:e.theme)===ur?(console.log("Rendering Gunmalmg theme"),function(e){var t,o;return I`
    <ha-card class="gunmalmg-card ${e.hvacMode} ${e._isLocked?"locked":""}">
      <ha-icon-button
        class="more-info"
        .label=${e.hass.localize("ui.panel.lovelace.cards.show_more_info")}
        .path=${ke}
        @click=${()=>e._toggleThemeMenu()}
        tabindex="0"
      ></ha-icon-button>
      ${e._showThemeMenu?I`
        <div class="menu-backdrop" @click=${()=>e._closeThemeMenu()}></div>
        <div class="theme-menu">
          <div class="theme-menu-header">
            <div class="theme-menu-title" @click=${()=>{e._handleMoreInfo(),e._closeThemeMenu()}}>${ui({hass:e.hass,string:"editor.card.climate.menu_system"})}</div>
          </div>
          <div class="theme-menu-item" style="border-top:1px solid var(--divider-color, #e0e0e0);"></div>
          

          <div class="theme-menu-item" @click=${()=>e._applyTheme("classic")}>${ui({hass:e.hass,string:"editor.card.climate.theme_classic"})}</div>
          <div class="theme-menu-item" @click=${()=>e._applyTheme("vtherm")}>${ui({hass:e.hass,string:"editor.card.climate.theme_vtherm"})}</div>
          <div class="theme-menu-item" @click=${()=>e._applyTheme("uncolored")}>${ui({hass:e.hass,string:"editor.card.climate.theme_uncolored"})}</div>

          <div class="theme-menu-item" style="border-top:1px solid var(--divider-color, #e0e0e0);"></div>
          ${e.timedPresetActive?I`
            <div class="theme-menu-item" @click=${()=>{e._menuCancelTimedPreset(),e._closeThemeMenu()}}>
              ${ui({hass:e.hass,string:"extra_states.cancel_timed_preset"})}
            </div>
          `:""}
          <div class="theme-menu-item" @click=${()=>{e._handleTempUp(),e._closeThemeMenu()}}>
              ${ui({hass:e.hass,string:"extra_states.increase_temp"})||"+ Température"}
          </div>
          <div class="theme-menu-item" @click=${()=>{e._handleTempDown(),e._closeThemeMenu()}}>
              ${ui({hass:e.hass,string:"extra_states.decrease_temp"})||"- Température"}
          </div>
        </div>
      `:""}

      <div id="right-lock" style="margin-top: 4px; display: flex; justify-content: center;">
        ${(null===(t=e._config)||void 0===t?void 0:t.allow_lock_toggle)?I`
            <ha-icon-button
                class="lock-icon ${e._isLocked?"locked":"unlocked"}"
                .path=${e._isLocked?$e:Ce}
                @click=${e._handleLockToggle}
                tabindex="0"
            ></ha-icon-button>
            `:""}
      </div>

      <div class="gunmalmg-grid">
        <div class="gunmalmg-name name">${e.name}</div>
        <div class="gunmalmg-left">
          <div class="hvac-mode-tile">
            ${e._renderIcon(e.hvacMode,e.hvacMode,!0)}
          </div>
        </div>
        <div class="gunmalmg-center">
          <div class="temps">
            ${(()=>{var t,o,a,i;const n=(null===(t=e.hass)||void 0===t?void 0:t.locale)||void 0,s=new Intl.NumberFormat(n,{minimumFractionDigits:1,maximumFractionDigits:1}),r=e._display_top,l=e._display_bottom,d=(null===(i=null===(a=null===(o=e.hass)||void 0===o?void 0:o.config)||void 0===a?void 0:a.unit_system)||void 0===i?void 0:i.temperature)||"",c=null==r?e.hass?e.hass.localize("extra_states.temp_unavailable"):"":s.format(r),_=null==l?null:s.format(l);return I`
                <div class="gunmalmg-temps-inline">
                  <span class="gunmalmg-temp-main">${c}<span class="gunmalmg-uom"> ${d}</span></span>
                  ${_?I`<span class="gunmalmg-temp-secondary">(${_}<span class="gunmalmg-uom"> ${d}</span>)</span>`:""}
                </div>
              `})()}
          </div>
        </div>
        <div class="gunmalmg-right">
          <div id="presets" class="gunmalmg-presets">
            ${(null===(o=e._config)||void 0===o?void 0:o.disable_presets)?"":e.presets.map((t=>I`${e._renderPreset(t,e.preset)}`))}
          </div>
        </div>
      </div>
    </ha-card>
  `}(this)):I`
   <ha-card class=${be({[this.hvacMode]:!0,locked:this.isUserLocked})}
   >
    ${(null===(t=this._config)||void 0===t?void 0:t.disable_menu)?"":I`
      <ha-icon-button
        class="more-info"
        .label=${this.hass.localize("ui.panel.lovelace.cards.show_more_info")}
        .path=${ke}
        @click=${this._toggleThemeMenu}
        tabindex="0"
      ></ha-icon-button>
      ${this._showThemeMenu?I`
        <div class="menu-backdrop" @click=${this._closeThemeMenu}></div>
        <div class="theme-menu">
          <div class="theme-menu-header">
            <div class="theme-menu-title" @click=${()=>{this._handleMoreInfo(),this._closeThemeMenu()}}>${ui({hass:this.hass,string:"editor.card.climate.menu_system"})}</div>
          </div>
          <div class="theme-menu-item" style="border-top:1px solid var(--divider-color, #e0e0e0);"></div>
          ${""}
          ${(null===(o=this._config)||void 0===o?void 0:o.theme)===ur?I`
            <div class="theme-menu-item" @click=${()=>{this._menuLockToggle(),this._closeThemeMenu()}}>
              ${this._isLocked?ui({hass:this.hass,string:"extra_states.unlock"}):ui({hass:this.hass,string:"extra_states.lock"})}
            </div>
            ${this.timedPresetActive?I`
              <div class="theme-menu-item" @click=${()=>{this._menuCancelTimedPreset(),this._closeThemeMenu()}}>
                ${ui({hass:this.hass,string:"extra_states.cancel_timed_preset"})}
              </div>
            `:""}
          `:""}
          <div class="theme-menu-item" @click=${()=>this._applyTheme("classic")}>${ui({hass:this.hass,string:"editor.card.climate.theme_classic"})}</div>
          <div class="theme-menu-item" @click=${()=>this._applyTheme("vtherm")}>${ui({hass:this.hass,string:"editor.card.climate.theme_vtherm"})}</div>
          <div class="theme-menu-item" @click=${()=>this._applyTheme("uncolored")}>${ui({hass:this.hass,string:"editor.card.climate.theme_uncolored"})}</div>
          <div class="theme-menu-item" @click=${()=>this._applyTheme("gunmalmg")}>${ui({hass:this.hass,string:"editor.card.climate.theme_gunmalmg"})}</div>
        </div>
      `:""}
      `}

      ${this.name.length>0?I`
        <div class="name">${this.name}</div>
        `:""}

      ${(null===(a=this.safety_state)||void 0===a?void 0:a.length)>0&&!this.displayMessages?I`
        <div class="security">
          <ha-icon-button class="alert" .path=${Ve}>
          </ha-icon-button>
          ${I`
            ${this.safety_state.map((e=>I`<span>${e.name}: ${e.security_msg}</span>`))}
           `}
        </div>
      `:""}
      ${this.messages.length>0&&this.displayMessages?I`
        <div class="messages">
          <ha-icon-button class="alert" .path=${this._hasError?ye:xe}>
          </ha-icon-button>
          ${this.messages.map((e=>I`<span>${e}</span>`))}
        </div>
      `:""}

      <div title="${this.buildTitle()}" class="${this.effectiveDisableCircle?"disabled-circle-container":""} ${this.effectiveDisableBackgroundColor?"no-background-color":""}  ${this.hvacMode}_${this.hvacAction} ${this._hasWindow?"window_open":""}  ${this.overpowering?"overpowering":""}">
        ${this.effectiveDisableCircle?I`
            <!-- No cicle configured -->
          `:null!=this.value.low&&null!=this.value.high&&"unavailable"!==this.stateObj.state?I`
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
            `:I`
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
          <div class="content${(null===(i=this._config)||void 0===i?void 0:i.disable_presets)?" no-presets":""} ${0==this.name.length?" noname":""} ${null!==this.safety_state||this.displayMessages?" security_msg":""} ${this._hasWindow?" window_open":""}  ${this.overpowering?" overpowering":""} ${this.presence?" presence":""} ${this.motion?" motion":""}  ${this._hasWindowByPass?" windowByPass":""} " >
            <svg id="main" viewbox="0 0 125 100">
              <g transform="translate(57.5,37) scale(0.35)">
                ${this._hasWindowByPass?W`
                  <g transform="${this._hasWindowByPass?"translate(-50.25,0)":""}" @click=${this._handleToggleWindowByPass} class="icon-group">
                    <rect width="24" height="24" fill="transparent" style="cursor: pointer;"/>
                    <path class="window window-by-pass ${this._hasWindowByPass?"active":""}" id="window-by-pass" d=${He}/>
                  </g>
                `:""}
                ${this._hasWindowByPass||!this._hasWindow||(null===(n=this._config)||void 0===n?void 0:n.disable_window)?"":W`
                  <g transform="${this._hasWindow&&!(null===(s=this._config)||void 0===s?void 0:s.disable_window)?"translate(-50.25,0)":""}" @click=${this._handleToggleWindowByPass} class="icon-group">
                    <rect width="24" height="24" fill="transparent" style="cursor: pointer;"/>
                    <path class="window ${this._hasWindow?"active":""}" id="window" d=${ze}/>
                  </g>
                `}
                ${this._hasOverpowering&&!(null===(r=this._config)||void 0===r?void 0:r.disable_overpowering)?W`
                  <path class="overpowering ${this.overpowering?"active":""}" transform="${this._hasOverpowering&&!(null===(l=this._config)||void 0===l?void 0:l.disable_overpowering)?"translate(-25.25,0)":""}" id="overpowering" d=${Se} />
                `:""}
                ${this._hasPresence&&(null===(d=this._config)||void 0===d?void 0:d.theme)!==ur?W`
                  <path class="presence ${this.presence?"active":""}" transform="${this._hasPresence?"translate(0.25,0)":""}" id="overpowering" d=${De} />
                `:""}
                ${this._hasAutoStartStop&&!(null===(c=this._config)||void 0===c?void 0:c.disable_autoStartStop)?W`
                  <path class="auto-start-stop" transform="${this._hasAutoStartStop&&!(null===(_=this._config)||void 0===_?void 0:_.disable_autoStartStop)?"translate(25.25,0)":""}" id="autoStartStop" d=${Ee}/>
                `:""}
                ${this._hasMotion&&(null===(u=this._config)||void 0===u?void 0:u.theme)!==ur?W`
                  <path class="motion ${this.motion?"active":""}" transform="${this._hasMotion?"translate(50.25,0)":""}" id="motion" d=${Le} />
                `:""}
              </g>

              ${this.effectiveDisableCircle?W`
                  ${this._renderTemperature(this._display_top,!0,"55","60%",!(null===(m=null==this?void 0:this._config)||void 0===m?void 0:m.set_current_as_main))}
                  ${this._renderTemperature(this._display_bottom,!1,"90","60%",1==(null===(h=null==this?void 0:this._config)||void 0===h?void 0:h.set_current_as_main))}
                  <g class="current-info" transform="translate(100,65)">
                    ${this._renderHVACAction()}
                  </g>
                `:W`
                  ${this._renderTemperature(this._display_top,!0,"50%","60%",!(null===(p=null==this?void 0:this._config)||void 0===p?void 0:p.set_current_as_main))}
                  <line x1="35" y1="72" x2="90" y2="72" stroke="#e7e7e8" stroke-width="0.5" />
                  <g class="current-info" transform="translate(62.5,80)">
                    ${this._renderTemperature(this._display_bottom,!1,"-5%","0%",1==(null===(g=null==this?void 0:this._config)||void 0===g?void 0:g.set_current_as_main))}
                  ${this._renderHVACAction()}
                </g>
              `}              
          </svg>
          </div>
          ${(null===(f=this._config)||void 0===f?void 0:f.disable_window)?I``:I`
          </vt-ha-control-circular-slider>`}
        </div>
      <div id="modes" class="${null!==this.safety_state||this.displayMessages?"security_msg":""}">
        ${W`
          ${this.modes.map((e=>{var t,o,a,i,n,s,r,l;return(null===(t=this._config)||void 0===t?void 0:t.disable_heat)&&"heat"===e||(null===(o=this._config)||void 0===o?void 0:o.disable_auto)&&"auto"===e||(null===(a=this._config)||void 0===a?void 0:a.disable_cool)&&"cool"===e||(null===(i=this._config)||void 0===i?void 0:i.disable_heat_cool)&&"heat_cool"===e||(null===(n=this._config)||void 0===n?void 0:n.disable_dry)&&"dry"===e||(null===(s=this._config)||void 0===s?void 0:s.disable_fan_only)&&"fan_only"===e||(null===(r=this._config)||void 0===r?void 0:r.disable_off)&&"off"===e||(null===(l=this._config)||void 0===l?void 0:l.disable_sleep)&&"sleep"===e?I``:this._renderIcon(e,this.hvacMode)}))}
        `}
      </div>
      ${(null===(b=null==this?void 0:this._config)||void 0===b?void 0:b.disable_buttons)?I``:I`
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
      
      ${(null===(v=this._config)||void 0===v?void 0:v.disable_presets)?"":I`
      <div id="presets" class="${null!==this.safety_state||this.displayMessages?"security_msg":""}">
        ${W`
          ${this.presets.map((e=>this._renderPreset(e,this.preset)))}
        `}
        ${(null===(y=this._config)||void 0===y?void 0:y.disable_timed_preset)?"":I`
          <div class="timed-preset-container">
            ${this.timedPresetActive?I`
              <span class="timed-preset-remaining" title="${ui({hass:this.hass,string:"extra_states.timed_preset_active"})}">
                ${this._formatRemainingTime(this.timedPresetRemainingTime)}
              </span>
              ${(null!==(w=this.timedPresetRemainingTime)&&void 0!==w?w:0)<60?I`
                <span class="timed-preset-label">${ui({hass:this.hass,string:"extra_states.minutes"})}</span>
              `:""}
              <ha-icon-button
                class="timed-preset-cancel"
                @click=${this._handleCancelTimedPreset}
                title="${ui({hass:this.hass,string:"extra_states.cancel_timed_preset"})}"
                .path=${we}
              ></ha-icon-button>
            `:(null===(k=this._config)||void 0===k?void 0:k.use_manual_duration_input)?I`
              <input
                type="number"
                class="timed-preset-input ${this.timedPresetDuration?"active":""}"
                .value=${null!==(T=this.timedPresetDuration)&&void 0!==T?T:""}
                @input=${this._handleTimedPresetDurationChange}
                placeholder="0"
                min="0"
                max="1440"
                title="${ui({hass:this.hass,string:"extra_states.timed_preset_title"})}"
              />
              <span class="timed-preset-label">${ui({hass:this.hass,string:"extra_states.minutes"})}</span>
            `:I`
              <select
                class="timed-preset-select ${this.timedPresetDuration?"active":""}"
                @change=${this._handleTimedPresetSelectChange}
                title="${ui({hass:this.hass,string:"extra_states.timed_preset_title"})}"
              >
                <option value="" ?selected=${!this.timedPresetDuration}>--</option>
                <option value="15" ?selected=${15===this.timedPresetDuration}>15 ${ui({hass:this.hass,string:"extra_states.minutes"})}</option>
                <option value="30" ?selected=${30===this.timedPresetDuration}>30 ${ui({hass:this.hass,string:"extra_states.minutes"})}</option>
                <option value="60" ?selected=${60===this.timedPresetDuration}>1 h</option>
                <option value="120" ?selected=${120===this.timedPresetDuration}>2 h</option>
                <option value="240" ?selected=${240===this.timedPresetDuration}>4 h</option>
                <option value="480" ?selected=${480===this.timedPresetDuration}>8 h</option>
                <option value="1440" ?selected=${1440===this.timedPresetDuration}>24 h</option>
              </select>
            `}
          </div>
        `}
      </div>
      `}

      <div id="left-infos" class="${(null===(S=this._config)||void 0===S?void 0:S.disable_presets)?"no-presets":""}">
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
        ${this._externalPowerInfos.map((e=>this._renderPowerInfo(e)))}
      `}
      ${W`
        ${this.powerInfos.map((e=>this._renderPowerInfo(e)))}
      `}
      ${W`
        ${this.autoFanInfos.map((e=>this._renderAutoFanInfo(e)))}
      `}
    </div>

    <div id="right-lock">
      ${(null===(A=this._config)||void 0===A?void 0:A.allow_lock_toggle)?I`
              <ha-icon-button
                class="lock-icon ${this._isLocked?"locked":"unlocked"}"
                .path=${this._isLocked?$e:Ce}
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
          ${this.isLocking?ui({hass:this.hass,string:"extra_states.lock"}):ui({hass:this.hass,string:"extra_states.unlock"})} ${this.name}
        </h2>
        <div class="code-display ${this.codeError?"error":""}">
          <span class="digit ${this.enteredCode.length>0?"filled":""}"></span>
          <span class="digit ${this.enteredCode.length>1?"filled":""}"></span>
          <span class="digit ${this.enteredCode.length>2?"filled":""}"></span>
          <span class="digit ${this.enteredCode.length>3?"filled":""}"></span>
        </div>
        <div class="error-message ${this.codeError?"visible":""}">
          ${ui({hass:this.hass,string:"extra_states.code_error"})}
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
  `}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleKeyDown),this._clearRelockTimeout()}static async getConfigElement(){return await Promise.resolve().then((function(){return Tr})),document.createElement("versatile-thermostat-ui-card-editor")}static async getStubConfig(e){const t=Object.keys(e.states).filter((e=>["climate"].includes(e.split(".")[0]))),o=t.filter((t=>{var o;return null===(o=e.states[t].attributes)||void 0===o?void 0:o.specific_states}));return{type:"custom:versatile-thermostat-ui-card",entity:o[0]||t[0]}}};gr.styles=[s`
      :host {
          display: block;
          box-sizing: border-box;
          position: relative;
        container: vt-card / inline-size;
      }

      ha-card {
        overflow: visible;
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

      .disabled-circle-container.no-background-color{
          background: none;
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
        justify-content: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
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

      .messages-button.error {
        color: var(--error-color) !important;
        animation: pulse 2s infinite;
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
      .content.no-presets {
        top: calc(60% - 30px);
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
        #left-infos.no-presets {
          top: 30%;
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

      /* Theme menu styles */
      .theme-menu {
        position: absolute;
        right: 8px;
        top: 36px;
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 10;
        min-width: 160px;
        max-height: 60vh;
        overflow-y: auto;
        box-sizing: border-box;
      }
      .theme-menu-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }
      .theme-menu-title {
        font-weight: 600;
        cursor: pointer;
      }
      .menu-backdrop {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 9;
        background: transparent;
      }
      /* theme-menu-close removed: menu header no longer contains a close button */
      .theme-menu-item {
        padding: 8px 12px;
        cursor: pointer;
      }
      .theme-menu-item:hover { background: var(--divider-color, #f1f1f1); }

        /* Theme variations ------------------------------------------------- */
        :host([theme="classic"]) vt-ha-control-circular-slider { display: block; }
          :host([theme="classic"]) .disabled-circle-container { display: none !important; }

        :host([theme="vtherm"]) vt-ha-control-circular-slider { display: none !important; }
          :host([theme="vtherm"]) .disabled-circle-container { display: block !important; background: radial-gradient(var(--hvac-mode-color), transparent 50%); }

        :host([theme="uncolored"]) vt-ha-control-circular-slider { display: none; }
          :host([theme="uncolored"]) .disabled-circle-container { display: block !important; background: none !important; }

        /* gunmalmg theme rules moved to src/themes/gunmalmg.ts */


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
      }

      @keyframes shake {
        10%, 90% { transform: translate3d(-1px, 0, 0); }
        20%, 80% { transform: translate3d(2px, 0, 0); }
        30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
        40%, 60% { transform: translate3d(4px, 0, 0); }
      }
  `,Qs,er],gr.additionalThemeStyles=[er],e([ue({attribute:!1})],gr.prototype,"hass",void 0),e([ue({type:Number})],gr.prototype,"value",void 0),e([me()],gr.prototype,"_selectTargetTemperature",void 0),e([ue({type:Number})],gr.prototype,"current",void 0),e([ue({type:Number})],gr.prototype,"humidity",void 0),e([ue({type:Number})],gr.prototype,"temperature",void 0),e([ue({type:Number})],gr.prototype,"min",void 0),e([ue({type:Number})],gr.prototype,"max",void 0),e([ue({type:Number})],gr.prototype,"step",void 0),e([ue({type:Number})],gr.prototype,"powerPercent",void 0),e([ue({type:Number})],gr.prototype,"meanCyclePower",void 0),e([ue({type:Number})],gr.prototype,"valveOpenPercent",void 0),e([ue({type:Number})],gr.prototype,"devicePower",void 0),e([ue({type:Number})],gr.prototype,"regulatedTargetTemperature",void 0),e([ue({type:Boolean})],gr.prototype,"isOn",void 0),e([ue({type:Boolean})],gr.prototype,"window",void 0),e([ue({type:Boolean})],gr.prototype,"windowByPass",void 0),e([ue({type:Boolean})],gr.prototype,"presence",void 0),e([ue({type:Boolean})],gr.prototype,"motion",void 0),e([ue({type:Boolean})],gr.prototype,"overpowering",void 0),e([ue({type:Boolean})],gr.prototype,"isDeviceActive",void 0),e([ue({type:Boolean})],gr.prototype,"isSleeping",void 0),e([ue({type:Boolean})],gr.prototype,"isRegulated",void 0),e([ue({type:Boolean})],gr.prototype,"isRecalculateScheduled",void 0),e([ue({type:String})],gr.prototype,"windowState",void 0),e([ue({type:String})],gr.prototype,"windowAutoState",void 0),e([ue({type:String})],gr.prototype,"overpoweringState",void 0),e([ue({type:String})],gr.prototype,"presenceState",void 0),e([ue({type:String})],gr.prototype,"motionState",void 0),e([ue({type:String})],gr.prototype,"safetyState",void 0),e([ue({type:String})],gr.prototype,"status",void 0),e([ue({type:String})],gr.prototype,"hvacMode",void 0),e([ue({type:String})],gr.prototype,"hvacAction",void 0),e([ue({type:String})],gr.prototype,"preset",void 0),e([ue({type:String})],gr.prototype,"autoRegulationMode",void 0),e([ue({type:String})],gr.prototype,"currentAutoFanMode",void 0),e([ue({type:String})],gr.prototype,"autoFanMode",void 0),e([ue({type:String})],gr.prototype,"fanMode",void 0),e([ue({type:String})],gr.prototype,"hvacOffReason",void 0),e([ue({type:Boolean,reflect:!0})],gr.prototype,"dragging",void 0),e([ue({type:String})],gr.prototype,"name",void 0),e([me()],gr.prototype,"changingHigh",void 0),e([me()],gr.prototype,"_hasError",void 0),e([me()],gr.prototype,"_config",void 0),e([me()],gr.prototype,"_showThemeMenu",void 0),e([ue({type:String})],gr.prototype,"theme",void 0),e([me()],gr.prototype,"isLocked",void 0),e([me()],gr.prototype,"isUserLocked",void 0),e([me()],gr.prototype,"isAutomationLocked",void 0),e([me()],gr.prototype,"showDigicodeModal",void 0),e([me()],gr.prototype,"enteredCode",void 0),e([me()],gr.prototype,"codeError",void 0),e([me()],gr.prototype,"isLocking",void 0),e([me()],gr.prototype,"timedPresetDuration",void 0),e([me()],gr.prototype,"timedPresetActive",void 0),e([me()],gr.prototype,"timedPresetRemainingTime",void 0),e([me()],gr.prototype,"timedPresetPreset",void 0),gr=e([de("versatile-thermostat-ui-card")],gr);const fr=function(...e){const t="type"===e[0].type,o=e.map((e=>e.schema)),a=Object.assign({},...o);return t?Ri(a):Bi(a)}(Bi({index:Ui(Ni()),view_index:Ui(Ni()),view_layout:Pi("any",(()=>!0)),type:ji()}),Bi({entity:Ui(ji()),name:Ui(ji()),icon:Ui(ji()),autoStartStopEnableEntity:Ui(ji()),powerEntity:Ui(ji())}),Bi({disable_name:Ui(Hi()),disable_circle:Ui(Hi()),disable_background_color:Ui(Hi()),disable_window:Ui(Hi()),disable_autoStartStop:Ui(Hi()),disable_overpowering:Ui(Hi()),disable_heat:Ui(Hi()),disable_cool:Ui(Hi()),disable_heat_cool:Ui(Hi()),disable_auto:Ui(Hi()),disable_dry:Ui(Hi()),disable_fan_only:Ui(Hi()),disable_off:Ui(Hi()),disable_sleep:Ui(Hi()),disable_safety_warning:Ui(Hi()),disable_power_infos:Ui(Hi()),disable_auto_fan_infos:Ui(Hi()),disable_target_icon:Ui(Hi()),set_current_as_main:Ui(Hi()),eco_temperature:Ui(Ni()),disable_menu:Ui(Hi()),disable_buttons:Ui(Hi()),allow_lock_toggle:Ui(Hi()),lock_relock_delay:Ui(Ni()),disable_presets:Ui(Hi()),theme:Ui(Ii([Oi("classic"),Oi("vtherm"),Oi("uncolored"),Oi("gunmalmg")])),disable_timed_preset:Ui(Hi()),use_manual_duration_input:Ui(Hi())})),br=["icon_color","layout","fill_container","primary_info","secondary_info","icon_type","content_info","use_entity_picture","collapsible_controls","icon_animation"],vr=e=>{var t,o;customElements.get("ha-form")&&(customElements.get("hui-action-editor")||((e,t,o,a)=>{const[i,n,s]=e.split(".",3);return Number(i)>t||Number(i)===t&&(void 0===a?Number(n)>=o:Number(n)>o)||void 0!==a&&Number(i)===t&&Number(n)===o&&Number(s)>=a})(e,2022,11))||null===(t=customElements.get("hui-button-card"))||void 0===t||t.getConfigElement(),customElements.get("ha-entity-picker")||null===(o=customElements.get("hui-entities-card"))||void 0===o||o.getConfigElement()},yr=["theme","autoStartStopEnableEntity","powerEntity","disable_name","disable_window","disable_autoStartStop","disable_overpowering","disable_heat","disable_cool","disable_heat_cool","disable_auto","disable_dry","disable_fan_only","disable_off","disable_sleep","disable_menu","disable_safety_warning","disable_buttons","set_current_as_main","disable_power_infos","disable_auto_fan_infos","disable_target_icon","allow_lock_toggle","lock_relock_delay","disable_presets","disable_timed_preset","use_manual_duration_input"],wr=vi((e=>[{name:"entity",selector:{entity:{domain:["climate"]}}},{name:"name",selector:{text:{}}},{name:"theme",selector:{select:{options:e}}},{type:"grid",name:"",schema:[{name:"autoStartStopEnableEntity",selector:{entity:{domain:["switch"]}}},{name:"powerEntity",selector:{entity:{domain:["sensor","input_number"]}}}]},{type:"grid",name:"",schema:[{name:"disable_name",selector:{boolean:{}}},{name:"disable_window",selector:{boolean:{}}},{name:"disable_autoStartStop",selector:{boolean:{}}},{name:"disable_overpowering",selector:{boolean:{}}},{name:"disable_heat",selector:{boolean:{}}},{name:"disable_cool",selector:{boolean:{}}},{name:"disable_heat_cool",selector:{boolean:{}}},{name:"disable_auto",selector:{boolean:{}}},{name:"disable_dry",selector:{boolean:{}}},{name:"disable_fan_only",selector:{boolean:{}}},{name:"disable_off",selector:{boolean:{}}},{name:"disable_sleep",selector:{boolean:{}}},{name:"disable_menu",selector:{boolean:{}}},{name:"disable_safety_warning",selector:{boolean:{}}},{name:"disable_buttons",selector:{boolean:{}}},{name:"set_current_as_main",selector:{boolean:{}}},{name:"disable_power_infos",selector:{boolean:{}}},{name:"disable_auto_fan_infos",selector:{boolean:{}}},{name:"disable_target_icon",selector:{boolean:{}}},{name:"allow_lock_toggle",selector:{boolean:{}}},{name:"lock_relock_delay",selector:{number:{min:0,max:3600,unit_of_measurement:"s",mode:"box"}}},{name:"disable_presets",selector:{boolean:{}}},{name:"disable_timed_preset",selector:{boolean:{}}},{name:"use_manual_duration_input",selector:{boolean:{}}}]}]));let kr=class extends re{constructor(){super(...arguments),this._computeLabel=e=>{const t=hi(this.hass);return br.includes(e.name)?t(`editor.card.generic.${e.name}`):yr.includes(e.name)?t(`editor.card.climate.${e.name}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}connectedCallback(){super.connectedCallback(),vr(this.hass.connection.haVersion)}setConfig(e){Ei(e,fr),this._config=e}render(){if(!this.hass||!this._config)return I``;const e=hi(this.hass),t=[{value:"classic",label:e("editor.card.climate.theme_classic")||"Classic"},{value:"vtherm",label:e("editor.card.climate.theme_vtherm")||"VTherm"},{value:"uncolored",label:e("editor.card.climate.theme_uncolored")||"Uncolored"},{value:"gunmalmg",label:e("editor.card.climate.theme_gunmalmg")||"Gunmalmg"}],o=wr(t);return I`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${o}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `}_valueChanged(e){const t=e.detail.value;if(!t.theme){const e=!!t.disable_circle,o=!!t.disable_background_color;e?e&&!o?t.theme="vtherm":e&&o&&(t.theme="uncolored"):t.theme="classic"}wi(this,"config-changed",{config:t}),wi(this,"hass",{config:t})}};e([me()],kr.prototype,"_config",void 0),e([ue({attribute:!1})],kr.prototype,"hass",void 0),kr=e([de("versatile-thermostat-ui-card-editor")],kr);var Tr=Object.freeze({__proto__:null,get ClimateCardEditor(){return kr}});export{gr as VersatileThermostatUi,mr as registerCustomCard};
