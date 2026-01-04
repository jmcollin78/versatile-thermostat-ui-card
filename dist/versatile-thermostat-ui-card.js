function e(e,t,i,o){var a,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(s=(n<3?a(s):n>3?a(t,i,s):a(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new n(i,e,o)},r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:_}=Object,p=globalThis,m=p.trustedTypes,v=m?m.emptyScript:"",f=p.reactiveElementPolyfillSupport,g=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:a}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const n=o?.call(this);a.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const e=_(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const e=this.properties,t=[...u(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of o){const o=document.createElement("style"),a=t.litNonce;void 0!==a&&o.setAttribute("nonce",a),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=o,this[o]=a.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i,o=!1,a){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??b)(o?a:this[e],t))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$ES?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EO(e,this[e]))),this._$ET()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[g("elementProperties")]=new Map,k[g("finalized")]=new Map,f?.({ReactiveElement:k}),(p.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,A=$.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,L="?"+S,M=`<${L}>`,E=document,T=()=>E.createComment(""),V=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,H="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,O=/>/g,N=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,I=/"/g,R=/^(?:script|style|textarea|title)$/i,B=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),U=B(1),W=B(2),F=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),q=new WeakMap,K=E.createTreeWalker(E,129);function Y(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const X=(e,t)=>{const i=e.length-1,o=[];let a,n=2===t?"<svg>":"",s=P;for(let t=0;t<i;t++){const i=e[t];let r,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===P?"!--"===l[1]?s=D:void 0!==l[1]?s=O:void 0!==l[2]?(R.test(l[2])&&(a=RegExp("</"+l[2],"g")),s=N):void 0!==l[3]&&(s=N):s===N?">"===l[0]?(s=a??P,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?N:'"'===l[3]?I:j):s===I||s===j?s=N:s===D||s===O?s=P:(s=N,a=void 0);const u=s===N&&e[t+1].startsWith("/>")?" ":"";n+=s===P?i+M:c>=0?(o.push(r),i.slice(0,c)+x+i.slice(c)+S+u):i+S+(-2===c?t:u)}return[Y(e,n+(e[i]||"<?>")+(2===t?"</svg>":"")),o]};class G{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let a=0,n=0;const s=e.length-1,r=this.parts,[l,c]=X(e,t);if(this.el=G.createElement(l,i),K.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=K.nextNode())&&r.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(x)){const t=c[n++],i=o.getAttribute(e).split(S),s=/([.?@])?(.*)/.exec(t);r.push({type:1,index:a,name:s[2],strings:i,ctor:"."===s[1]?ie:"?"===s[1]?oe:"@"===s[1]?ae:te}),o.removeAttribute(e)}else e.startsWith(S)&&(r.push({type:6,index:a}),o.removeAttribute(e));if(R.test(o.tagName)){const e=o.textContent.split(S),t=e.length-1;if(t>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],T()),K.nextNode(),r.push({type:2,index:++a});o.append(e[t],T())}}}else if(8===o.nodeType)if(o.data===L)r.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(S,e+1));)r.push({type:7,index:a}),e+=S.length-1}a++}}static createElement(e,t){const i=E.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,o){if(t===F)return t;let a=void 0!==o?i._$Co?.[o]:i._$Cl;const n=V(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=a:i._$Cl=a),void 0!==a&&(t=J(e,a._$AS(e,t.values),a,o)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??E).importNode(t,!0);K.currentNode=o;let a=K.nextNode(),n=0,s=0,r=i[0];for(;void 0!==r;){if(n===r.index){let t;2===r.type?t=new ee(a,a.nextSibling,this,e):1===r.type?t=new r.ctor(a,r.name,r.strings,this,e):6===r.type&&(t=new ne(a,this,e)),this._$AV.push(t),r=i[++s]}n!==r?.index&&(a=K.nextNode(),n++)}return K.currentNode=E,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),V(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>z(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Z&&V(this._$AH)?this._$AA.nextSibling.data=e:this.$(E.createTextNode(e)),this._$AH=e}g(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Q(o,this),i=e.u(this.options);e.p(t),this.$(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new G(e)),t}T(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const a of e)o===t.length?t.push(i=new ee(this.k(T()),this.k(T()),this,this.options)):i=t[o],i._$AI(a),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(e,t=this,i,o){const a=this.strings;let n=!1;if(void 0===a)e=J(this,e,t,0),n=!V(e)||e!==this._$AH&&e!==F,n&&(this._$AH=e);else{const o=e;let s,r;for(e=a[0],s=0;s<a.length-1;s++)r=J(this,o[i+s],t,s),r===F&&(r=this._$AH[s]),n||=!V(r)||r!==this._$AH[s],r===Z?e=Z:e!==Z&&(e+=(r??"")+a[s+1]),this._$AH[s]=r}n&&!o&&this.O(e)}O(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends te{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===Z?void 0:e}}class oe extends te{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class ae extends te{constructor(e,t,i,o,a){super(e,t,i,o,a),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??Z)===F)return;const i=this._$AH,o=e===Z&&i!==Z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==Z&&(i===Z||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const se=$.litHtmlPolyfillSupport;se?.(G,ee),($.litHtmlVersions??=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class re extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let a=o._$litPart$;if(void 0===a){const e=i?.renderBefore??null;o._$litPart$=a=new ee(t.insertBefore(T(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}re._$litElement$=!0,re.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:re});const le=globalThis.litElementPolyfillSupport;le?.({LitElement:re}),(globalThis.litElementVersions??=[]).push("4.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,de={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},ue=(e=de,t,i)=>{const{kind:o,metadata:a}=i;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,a,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const a=this[o];t.call(this,i),this.requestUpdate(o,a,e)}}throw Error("Unsupported decorator location: "+o)};function he(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function _e(e){return he({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function me(e,t){return(i,o,a)=>{const n=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:s}="object"==typeof o?i:a??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return pe(i,o,{get(){if(t){let t=e.call(this);return void 0===t&&(t=n(this),s.call(this,t)),t}return n(this)}})}return pe(i,o,{get(){return n(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=1;class fe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends fe{constructor(e){if(super(e),e.type!==ve||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.st?.has(e)&&this.it.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.it)e in t||(i.remove(e),this.it.delete(e));for(const e in t){const o=!!t[e];o===this.it.has(e)||this.st?.has(e)||(o?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return F}});var ye="M6.59,0.66C8.93,-1.15 11.47,1.06 12.04,4.5C12.47,4.5 12.89,4.62 13.27,4.84C13.79,4.24 14.25,3.42 14.07,2.5C13.65,0.35 16.06,-1.39 18.35,1.58C20.16,3.92 17.95,6.46 14.5,7.03C14.5,7.46 14.39,7.89 14.16,8.27C14.76,8.78 15.58,9.24 16.5,9.06C18.63,8.64 20.38,11.04 17.41,13.34C15.07,15.15 12.53,12.94 11.96,9.5C11.53,9.5 11.11,9.37 10.74,9.15C10.22,9.75 9.75,10.58 9.93,11.5C10.35,13.64 7.94,15.39 5.65,12.42C3.83,10.07 6.05,7.53 9.5,6.97C9.5,6.54 9.63,6.12 9.85,5.74C9.25,5.23 8.43,4.76 7.5,4.94C5.37,5.36 3.62,2.96 6.59,0.66M5,16H7A2,2 0 0,1 9,18V24H7V22H5V24H3V18A2,2 0 0,1 5,16M5,18V20H7V18H5M12.93,16H15L12.07,24H10L12.93,16M18,16H21V18H18V22H21V24H18A2,2 0 0,1 16,22V18A2,2 0 0,1 18,16Z",be="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M11,15H13V17H11V15M11,7H13V13H11V7",we="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",ke="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",$e="M5,2V13H8V22L15,10H11L15,2M17,15H19V17H17V15M17,7H19V13H17V7Z",Ae="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z",Ce="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z",xe="M12 2C7.04 2 3 6.04 3 11C3 14.91 5.5 18.24 9 19.47V22H11V19.94C11.33 20 11.66 20 12 20S12.67 20 13 19.94V22H15V19.47C18.5 18.23 21 14.9 21 11C21 6.04 16.96 2 12 2M14.25 14L11.25 17L9.75 15.5L11 14.25L9.75 13L12.75 10L14.25 11.5L13 12.75L14.25 14M16 9H8V7H16V9Z",Se="M10,0.2C9,0.2 8.2,1 8.2,2C8.2,3 9,3.8 10,3.8C11,3.8 11.8,3 11.8,2C11.8,1 11,0.2 10,0.2M15.67,1A7.33,7.33 0 0,0 23,8.33V7A6,6 0 0,1 17,1H15.67M18.33,1C18.33,3.58 20.42,5.67 23,5.67V4.33C21.16,4.33 19.67,2.84 19.67,1H18.33M21,1A2,2 0 0,0 23,3V1H21M7.92,4.03C7.75,4.03 7.58,4.06 7.42,4.11L2,5.8V11H3.8V7.33L5.91,6.67L2,22H3.8L6.67,13.89L9,17V22H10.8V15.59L8.31,11.05L9.04,8.18L10.12,10H15V8.2H11.38L9.38,4.87C9.08,4.37 8.54,4.03 7.92,4.03Z",Le="M18.73,18C15.4,21.69 9.71,22 6,18.64C2.33,15.31 2.04,9.62 5.37,5.93C6.9,4.25 9,3.2 11.27,3C7.96,6.7 8.27,12.39 12,15.71C13.63,17.19 15.78,18 18,18C18.25,18 18.5,18 18.73,18Z",Me="M17 13V7H19V13H17M17 17V15H19V17H17M13 13V5C13 3.3 11.7 2 10 2S7 3.3 7 5V13C4.8 14.7 4.3 17.8 6 20S10.8 22.7 13 21 15.7 16.2 14 14C13.7 13.6 13.4 13.3 13 13M10 4C10.6 4 11 4.4 11 5V8H9V5C9 4.4 9.4 4 10 4Z",Ee="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",Te="M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z",Ve="M2 4H20V8H18V20H16V8H6V20H4V8H2V4M7 9H15V11H7V9M7 12H15V14H7V12M20 19V17H22V19H20M20 15V10H22V15H20Z";var ze={version:"version",current:"current"},He={card:{climate:{autoStartStopEnableEntity:"Auto-start/stop entity",powerEntity:"Power consumption entity",disable_circle:"Disable circle",disable_window:"Disable window",disable_autoStartStop:"Disable auto-startStop",disable_overpowering:"Disable overpowering",disable_heat:"Disable heat mode",disable_cool:"Disable cool mode",disable_heat_cool:"Disable heat/cool mode",disable_auto:"Disable auto mode",disable_fan_only:"Disable fan only mode",disable_dry:"Disable dry mode",disable_off:"Disable off mode",disable_sleep:"Disable sleep mode",disable_menu:"Disable menu",set_current_as_main:"Exchange target temperature and room temperature",disable_safety_warning:"Disable safety warning",disable_buttons:"Disable plus/minus buttons",disable_power_infos:"Disable power infos",disable_auto_fan_infos:"Disable auto-fan infos",disable_name:"Disable name",disable_target_icon:"Disable the target icon",allow_lock_toggle:"Allow lock/unlock from card",disable_timed_preset:"Disable timed preset duration input",use_manual_duration_input:"Allow manual duration input instead of selector"}}},Pe={window_open:"Window open",window_bypass:"Bypass window activated",night_mode:"Night mode",eco:"Eco",overpowering:"Overpowering detected",none:"Manual",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Overpowering",activity:"Activity detected",presence:"Presence detected",motion:"Motion detected",undefined:"None",auto_regulation_light:"Light",auto_regulation_medium:"Medium",auto_regulation_strong:"Strong",auto_regulation_slow:"Slow",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"None",auto_fan_none:"None",auto_fan_low:"Low",auto_fan_medium:"Medium",auto_fan_high:"High",auto_fan_boost:"Boost",fan_low:"Low",fan_low_mid:"Low-medium",fan_mid:"Medium",fan_mid_high:"Medium-high",fan_high:"High",fan_mute:"Mute",fan_turbo:"Turbo",fan_none:"None",fan_auto:"Auto",change_message:"Click to change preset",toggle_message:"Click to toggle",auto_start_stop:"Stopped by auto-start/stop",auto_start_stop_enable:"Enable/disable auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Sleeping","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Room temp.",outdoor_temp:"Outdoor temp.",safety_warning:"Warning",safety_warning_msg:"Temp. fault",hvac_off_manual:"Turned off manually",hvac_off_auto_start_stop:"Turned off by auto-start/stop",hvac_off_window_detection:"Turned off by window detection",hvac_off_sleep_mode:"Turned off by sleep mode",hvac_off_safety_detection:"Turned off by safety mode",hvac_off_central_mode:"Turned off by central mode",safety_detected:"Safety mode detected",overpowering_detected:"Overpowering detected",target_temp_window_eco:"Target temp.: window eco",target_temp_window_frost:"Target temp.: window frost",target_temp_power:"Target temp.: power",target_temp_central_mode:"Target temp.: central mode",target_temp_activity_detected:"Target temp.: activity detected",target_temp_activity_not_detected:"Target temp.: activity not detected",target_temp_absence_detected:"Target temp.: absence detected",target_temp_timed_preset:"Timed preset active",lock_users_active:"User controls locked",lock_automations_active:"Automation changes locked","messages-button":"Why this state?",recalculation_scheduled:"Underlying update in progress","window-bypass-button":"Toggle window bypass",code_error:"Incorrect code",lock:"Lock",unlock:"Unlock",timed_preset_title:"Duration in minutes (0 = permanent)",timed_preset_active:"Timed preset active",cancel_timed_preset:"Cancel timed preset",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},De={common:ze,editor:He,extra_states:Pe},Oe=Object.freeze({__proto__:null,common:ze,default:De,editor:He,extra_states:Pe}),Ne={version:"Version",current:"Aktuell"},je={card:{climate:{autoStartStopEnableEntity:"Auto-Start/Stop-Entität",powerEntity:"Entität für den Stromverbrauch",disable_circle:"Kreis deaktivieren",disable_window:"Fenster deaktivieren",disable_autoStartStop:"Auto-Start/Stop deaktivieren",disable_overpowering:"Überverbrauch deaktivieren",disable_heat:"Heizen deaktivieren",disable_cool:"Kühlen deaktivieren",disable_heat_cool:"Heizen/Kühlen deaktivieren",disable_auto:"Auto deaktivieren",disable_fan_only:"Nur-Lüfter deaktivieren",disable_dry:"Entfeuchten deaktivieren",disable_off:"Aus deaktivieren",disable_menu:"Menü deaktivieren",set_current_as_main:"Zieltemperatur mit aktueller Temperatur tauschen",disable_safety_warning:"Sicherheitsmeldungen deaktivieren",disable_buttons:"Plus/Minus-Buttons deaktivieren",disable_power_infos:"Verbrauchsinformationen deaktivieren",disable_auto_fan_infos:"Auto-Lüfter-Informationen deaktivieren",disable_name:"Name deaktivieren",eco_temperature:"Eco-Temperatur",allow_lock_toggle:"Allow lock/unlock from card"}}},Ie={window_open:"Fenster offen",window_bypass:"Fenster-Bypass aktiviert",night_mode:"Nachtmodus",eco:"Eco",overpowering:"Überverbrauch erkannt",none:"Manuell",comfort:"Komfort",boost:"Boost",frost:"Frostschutz",power:"Lastabwurf",activity:"Aktivität erkannt",presence:"Anwesenheit erkannt",motion:"Bewegung erkannt",auto_regulation_light:"Leicht",auto_regulation_medium:"Mittel",auto_regulation_strong:"Stark",auto_regulation_slow:"Langsam",auto_regulation_expert:"Experte",auto_fan_mode:"Auto-Lüfter",auto_fan_mode_off:"Keine",auto_fan_none:"Keine",auto_fan_low:"Niedrig",auto_fan_medium:"Mittel",auto_fan_high:"Hoch",auto_fan_turbo:"Turbo",fan_low:"Niedrig",fan_low_mid:"Niedrig-mittel",fan_mid:"Mittel",fan_mid_high:"Mittel-hoch",fan_high:"Hoch",fan_mute:"Leise",fan_turbo:"Turbo",fan_none:"Keine",fan_auto:"Auto",change_message:"Klicken zum Ändern des Presets",toggle_message:"Klicken zum Umschalten",auto_start_stop:"Gestoppt durch Auto-Start/Stop",auto_start_stop_enable:"Aktiviert/deaktiviert Auto-Start/Stop",auto_start_stop_label:"Auto-Start/Stop",temp_unavailable:"-",sleep:"Schlafmodus",lock_users_active:"Benutzersteuerung gesperrt",lock_automations_active:"Automatisierungsänderungen gesperrt",lock:"Sperren",unlock:"Entsperren",code_error:"Falscher Code",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},Re={common:Ne,editor:je,extra_states:Ie},Be=Object.freeze({__proto__:null,common:Ne,default:Re,editor:je,extra_states:Ie}),Ue={version:"version",current:"Actuelle"},We={card:{climate:{autoStartStopEnableEntity:"Entité - auto-start/stop",powerEntity:"Entité - puissance consommée",disable_circle:"Désactiver le cercle",disable_window:"Désactiver fenêtre status",disable_autoStartStop:"Désactiver auto-startStop",disable_overpowering:"Désactiver sur-puissance status",disable_heat:"Désactiver mode chauffe",disable_cool:"Désactiver mode clim",disable_heat_cool:"Désactiver mode chauffe/clim",disable_auto:"Désactiver mode auto",disable_fan_only:"Désactiver mode ventilation",disable_dry:"Désactiver mode déshumidification",disable_off:"Désactiver mode arret",disable_sleep:"Désactiver mode endormi",set_current_as_main:"Echanger temperature cible avec temperature locale",disable_safety_warning:"Désactiver sécurité messages",disable_buttons:"Désactiver les boutons +/-",disable_power_infos:"Désactiver les infos de puissance",disable_auto_fan_infos:"Désactiver les infos auto-ventilation",disable_name:"Désactiver le nom",disable_target_icon:"Désactiver l'icône cible",allow_lock_toggle:"Activer le verrouillage/déverrouillage depuis la carte",disable_timed_preset:"Désactiver le champ de durée du preset temporisé",use_manual_duration_input:"Permettre la saisie manuelle de la durée"}}},Fe={window_open:"Fenêtre ouverte",window_bypass:"Bypass fenêtre activé",eco:"Eco",overpowering:"Sur-puissance détectée",none:"Manuel",comfort:"Confort",boost:"Boost",frost:"Hors-gel",power:"Délestage",activity:"Activité",presence:"Présence détectée",motion:"Mouvement détecté",auto_regulation_light:"Légère",auto_regulation_medium:"Moyenne",auto_regulation_strong:"Forte",auto_regulation_slow:"Lente",auto_regulation_expert:"Expert",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"Aucun",auto_fan_none:"Aucun",auto_fan_low:"Bas",auto_fan_medium:"Moyen",auto_fan_high:"Haut",auto_fan_turbo:"Turbo",fan_low:"Bas",fan_low_mid:"Bas-moyen",fan_mid:"Moyen",fan_mid_high:"Moyen-haut",fan_high:"Haut",fan_mute:"Silence",fan_turbo:"Turbo",fan_none:"Aucun",fan_auto:"Auto",change_message:"Clic pour sélectionner le preset",toggle_message:"Clic pour basculer",auto_start_stop:"Stoppé par auto-start/stop",auto_start_stop_enable:"Active/désactive l'auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Endormi","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Temp. pièce",outdoor_temp:"Temp. ext.",safety_warning:"Attention",safety_warning_msg:"défaut de temp.",hvac_off_manual:"Eteint manuellement",hvac_off_auto_start_stop:"Eteint par auto-start/stop",hvac_off_window_detection:"Eteint par détection d'ouverture",hvac_off_sleep_mode:"Eteint par le mode endormi",hvac_off_safety_detection:"Eteint par le mode sécurité",hvac_off_central_mode:"Eteint par le mode central",safety_detected:"Mode sécurité détectée",overpowering_detected:"Sur-puissance détectée",target_temp_window_eco:"Temp. cible : fenêtre éco",target_temp_window_frost:"Temp. cible : fenêtre hors-gel",target_temp_power:"Temp. cible : délestage",target_temp_central_mode:"Temp. cible : mode central",target_temp_activity_detected:"Temp. cible : activité détectée",target_temp_activity_not_detected:"Temp. cible : activité non détectée",target_temp_absence_detected:"Temp. cible : absence détectée",target_temp_timed_preset:"Temporisation d'un preset active",lock_users_active:"Verrouillage utilisateurs actif",lock_automations_active:"Verrouillage automations actif","messages-button":"Pourquoi cet état ?",recalculation_scheduled:"Sous-jacent en cours de mise à jour","window-bypass-button":"Basculer le bypass fenêtre",code_error:"Code incorrect",lock:"Verrouiller",unlock:"Déverrouiller",timed_preset_title:"Durée en minutes (0 = permanent)",timed_preset_active:"Preset temporisé actif",cancel_timed_preset:"Annuler le preset temporisé",heating_failure:"Défaut de chauffage détecté",cooling_failure:"Défaut de refroidissement détecté"},Ze={common:Ue,editor:We,extra_states:Fe},qe=Object.freeze({__proto__:null,common:Ue,default:Ze,editor:We,extra_states:Fe}),Ke={version:"Версия",current:"Текущая"},Ye={card:{climate:{autoStartStopEnableEntity:"Сущность автоматического старта/стопа",powerEntity:"Сущность потребления энергии",disable_circle:"Отключить круг",disable_window:"Отключить окно",disable_autoStartStop:"Отключить автоматический старт/стоп",disable_overpowering:"Отключить перегрузку",disable_heat:"Отключить обогрев",disable_cool:"Отключить охлаждение",disable_heat_cool:"Отключить обогрев/охлаждение",disable_auto:"Отключить авто",disable_fan_only:"Отключить только вентилятор",disable_dry:"Отключить осушение",disable_off:"Отключить режим выключения",disable_sleep:"Отключить спящий режим",disable_menu:"Отключить меню",set_current_as_main:"Поменять местами целевую и текущую температуру",disable_safety_warning:"Отключить сообщения безопасности",disable_buttons:"Отключить кнопки плюс/минус",disable_power_infos:"Отключить информацию о питании",disable_auto_fan_infos:"Отключить информацию автовентилятора",disable_name:"Отключить название",disable_target_icon:"Отключить иконку цели",allow_lock_toggle:"Разрешить блокировку/разблокировку с карты"}}},Xe={window_open:"Окно открыто",window_bypass:"Обход окна активирован",night_mode:"Ночной режим",eco:"Эко",overpowering:"Обнаружена перегрузка",none:"Ручной",comfort:"Комфорт",boost:"Турбо",frost:"Защита от замерзания",power:"Перегрузка",activity:"Обнаружена активность",presence:"Обнаружено присутствие",motion:"Обнаружено движение",undefined:"Нет",auto_regulation_light:"Легкий",auto_regulation_medium:"Средний",auto_regulation_strong:"Сильный",auto_regulation_slow:"Медленный",auto_regulation_expert:"Экспертный",auto_fan_mode:"Авторежим вентилятора",auto_fan_mode_off:"Нет",auto_fan_none:"Нет",auto_fan_low:"Низкий",auto_fan_medium:"Средний",auto_fan_high:"Высокий",auto_fan_boost:"Турбо",fan_low:"Низкий",fan_low_mid:"Низкий-средний",fan_mid:"Средний",fan_mid_high:"Средний-высокий",fan_high:"Высокий",fan_mute:"Тихий",fan_turbo:"Турбо",fan_none:"Нет",fan_auto:"Авто",change_message:"Клик для смены предустановки",toggle_message:"Клик для переключения",auto_start_stop:"Остановлено авто-старт/стопом",auto_start_stop_enable:"Включить/отключить авто-старт/стоп",auto_start_stop_label:"Авто-старт/стоп",temp_unavailable:"-",sleep:"Сон",minutes:"мин",room_temp:"Температура в помещении",outdoor_temp:"Уличная температура",lock_users_active:"Пользовательское управление заблокировано",lock_automations_active:"Изменения автоматизации заблокированы",code_error:"Неверный код",lock:"Блокировать",unlock:"Разблокировать",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},Ge={common:Ke,editor:Ye,extra_states:Xe},Je=Object.freeze({__proto__:null,common:Ke,default:Ge,editor:Ye,extra_states:Xe}),Qe={version:"wersja",current:"aktualna"},et={card:{climate:{allow_lock_toggle:"Pozwól na blokowanie/odblokowanie z karty",autoStartStopEnableEntity:"Encja autoSTART/autoSTOP",powerEntity:"Encja poboru mocy",disable_circle:"Wyłącz koło",disable_window:"Wyłącz okno",disable_autoStartStop:"Wyłącz autoSTART/autoSTOP",disable_overpowering:"Wyłącz przeciążenie",disable_heat:"Wyłącz tryb grzania",disable_cool:"Wyłącz tryb chłodzenia",disable_heat_cool:"Wyłącz tryb 'grzanie/chłodzenie'",disable_auto:"Wyłącz tryb automatyczny",disable_fan_only:"Wyłącz tryb wentylatora",disable_dry:"Wyłącz tryb osuszania",disable_off:"Wyłącz tryb 'OFF'",disable_sleep:"Wyłącz tryb uśpienia",disable_menu:"Wyłącz menu",set_current_as_main:"Zamień temperaturę docelową z temperaturą pomieszczenia",disable_safety_warning:"Wyłącz ostrzeżenie bezpieczeństwa",disable_buttons:"Wyłącz przyciski +/- (plus/minus)",disable_power_infos:"Wyłącz komunikaty mocowe",disable_auto_fan_infos:"Wyłącz komunikaty autowentylacji",disable_name:"Wyłącz nazwę",disable_target_icon:"Wyłącz ikonę"}}},tt={window_open:"Otwarte okno",window_bypass:"Załączone pomijanie okien",night_mode:"Tryb nocny",eco:"Tryb Eko",overpowering:"Wykryte przeciążenie",none:"Ręczny",comfort:"Komfort",boost:"Boost",frost:"Ochrona przed mrozem",power:"Przeciążenie",activity:"Wykryto aktywność",presence:"Wykryto obecność",motion:"Wykryto ruch",undefined:"Brak",auto_regulation_light:"Słaby",auto_regulation_medium:"Średni",auto_regulation_strong:"Silny",auto_regulation_slow:"Powolny",auto_regulation_expert:"Ekspert",auto_fan_mode:"Autowentylacja",auto_fan_mode_off:"Wyłączony",auto_fan_none:"Brak",auto_fan_low:"Niski",auto_fan_medium:"Średni",auto_fan_high:"Wysoki",auto_fan_boost:"Boost",fan_low:"Niski",fan_low_mid:"Niskośredni",fan_mid:"Średni",fan_mid_high:"Średniowysoki",fan_high:"Wysoki",fan_mute:"Cicho",fan_turbo:"Turbo",fan_none:"Brak",fan_auto:"Auto",change_message:"Kliknij aby zmienić preset",toggle_message:"Kliknij aby przełączyć",auto_start_stop:"Zatrzymany przez autoSTART/autoSTOP",auto_start_stop_enable:"Załącz/wyłącz autoSTART/autoSTOP",auto_start_stop_label:"AutoSTART/autoSTOP",temp_unavailable:"-",sleep:"Uśpienie","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Temp. pomieszczenia",outdoor_temp:"Temp. zewnętrzna",safety_warning:"Ostrzeżenie",safety_warning_msg:"Błąd temperatury",hvac_off_manual:"Wyłączony ręcznie",hvac_off_auto_start_stop:"Wyłączony przez autoSTART/autoSTOP",hvac_off_window_detection:"Wyłączony prze otwarcie okna",hvac_off_sleep_mode:"Wyłączony przez tryb uśpienia",hvac_off_safety_detection:"Wyłączony przez tryb bezpieczny",hvac_off_central_mode:"Wyłączony przez tryb główny",safety_detected:"Wykryty tryb bezpieczny",overpowering_detected:"Wykryte przeciążenie",target_temp_window_eco:"Docelowa temp.: Eko okno",target_temp_window_frost:"Docelowa temp.: ochr. przed mrozem okno",target_temp_power:"Docelowa temp.: moc",target_temp_central_mode:"Docelowa temp.: tryb główny",target_temp_activity_detected:"Docelowa temp.: wykryta aktywność",target_temp_activity_not_detected:"Docelowa temp.: brak aktywnści",target_temp_absence_detected:"Docelowa temp.: wykryta nieobecność","messages-button":"Dlaczego taki stan?",recalculation_scheduled:"Aktualizacja urządzeń w toku","window-bypass-button":"Przełącz pomijanie okna",lock_users_active:"Sterowanie użytkownika zablokowane",lock_automations_active:"Zmiany automatyzacji zablokowane",code_error:"Błędny kod",lock:"Zablokuj",unlock:"Odblokuj",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},it={common:Qe,editor:et,extra_states:tt},ot=Object.freeze({__proto__:null,common:Qe,default:it,editor:et,extra_states:tt}),at={version:"verzia",current:"aktuálny"},nt={card:{climate:{disable_window:"Zakázať okno",disable_overpowering:"Zakázať leto",disable_heat:"Zakázať kúrenie",disable_cool:"Zakázať chladenie",disable_heat_cool:"Zakázať kúrenie/chladenie",disable_auto:"Zakázat automatic",disable_fan_only:"Zakázať režim ventilátora",disable_dry:"Zakázať sušenie",disable_off:"Vypnúť",disable_menu:"Zakázať menu",disable_safety_warning:"Zakázať bezpečnostné správy",disable_buttons:"Zakázať plus/mínus tlačidlá",eco_temperature:"Eco teplota",set_current_as_main:"Vymeňte cieľ za miesta s aktuálnou teplotou",allow_lock_toggle:"Povoliť uzamknutie/odomknutie z karty"}}},st={window_open:"Okno otvorené",night_mode:"Nočný mód",eco:"Eco",overpowering:"Leto",lock_users_active:"Ovládanie používateľa zamknuté",lock_automations_active:"Zmeny automatizácie zamknuté",code_error:"Chybný kód",lock:"Zamknúť",unlock:"Odomknúť",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},rt={common:at,editor:nt,extra_states:st},lt={version:"Verzió",current:"Aktuális"},ct={card:{climate:{disable_window:"Ablak kikapcsolás",disable_overpowering:"Nyár kikapcsolás",disable_heat:"Fűtés kikacsolás",disable_cool:"Hűtés kikapcsolás",disable_heat_cool:"Fűtés/Hűtés kikapcsolás",disable_auto:"Auto kikapcsolás",disable_fan_only:"Csak ventillátor kikapcsolás",disable_dry:"Szárítás kikapcsolás",disable_off:"Kikapcsolás inaktiválás",eco_temperature:"Eco hőmérséklet",set_current_as_main:"Aktuális hőmérséklet használata",allow_lock_toggle:"Allow lock/unlock from card"}}},dt={window_open:"Ablak nyitva",night_mode:"Éjszakai mód",eco:"Eco",overpowering:"Nyár",lock_users_active:"Felhasználói vezérlők zárolva",lock_automations_active:"Automatizálási változtatások zárolva",code_error:"Rossz kód",lock:"Zárolás",unlock:"Feloldás",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},ut={common:lt,editor:ct,extra_states:dt},ht={version:"version",current:"nuværende"},_t={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},pt={window_open:"Vindue åben",night_mode:"Nattilstand",eco:"Eco",overpowering:"Overpowering",lock_users_active:"Brugerkontroller låst",lock_automations_active:"Automatiske ændringer låst",code_error:"Forkert kode",lock:"Lås",unlock:"Lås op",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},mt={common:ht,editor:_t,extra_states:pt},vt={version:"version",current:"Actual"},ft={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},gt={window_open:"Ventana abierta",night_mode:"Modo noche",eco:"Eco",overpowering:"Verano",lock_users_active:"Controles de usuario bloqueados",lock_automations_active:"Cambios de automatización bloqueados",code_error:"Código incorrecto",lock:"Bloquear",unlock:"Desbloquear",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},yt={common:vt,editor:ft,extra_states:gt},bt={version:"versiyon",current:"şimdiki"},wt={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},kt={window_open:"Pencere açık",night_mode:"Gece modu",eco:"Eco",overpowering:"Yaz",lock_users_active:"Kullanıcı kontrolleri kilitlendi",lock_automations_active:"Otomasyon değişiklikleri kilitlendi",code_error:"Hatalı kod",lock:"Kilitle",unlock:"Kilidi aç",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},$t={common:bt,editor:wt,extra_states:kt},At={version:"versione",current:"attuale"},Ct={card:{climate:{autoStartStopEnableEntity:"Entità di avvio/arresto automatico",powerEntity:"Entità di consumo energetico",disable_circle:"Disabilita cerchio",disable_window:"Disabilita la finestra",disable_autoStartStop:"Disabilita Avvio/Arresto automatico",disable_overpowering:"Disabilita la sovralimentazione",disable_heat:"Disabilita Riscalda",disable_cool:"Disabilita Raffresca",disable_heat_cool:"Disabilita Riscalda/Raffredda",disable_auto:"Disabilita Automatico",disable_fan_only:"Disabilita Ventilazione",disable_dry:"Disabilita Deumidifica",disable_off:"Disabilita off",disable_sleep:"Disabilita modo riposo",disable_menu:"Disabilita menu",set_current_as_main:"Scambia Setpoint con Temperatura ambiente",disable_safety_warning:"Disabilita i messaggi di sicurezza",disable_buttons:"Disabilita pulsanti Più/Meno",disable_power_infos:"Disabilita Info Potenza",disable_auto_fan_infos:"Disabilita Info auto-fan",disable_name:"Disabilita nome",disable_target_icon:"Disabilita  icona obbiettivo",allow_lock_toggle:"Allow lock/unlock from card"}}},xt={window_open:"Finestra aperta",window_bypass:"Bypass finestra Attivo",night_mode:"Modalità notte",eco:"Eco",overpowering:"Rilevata Sovrapotenza",none:"Manuale",comfort:"Comfort",boost:"Boost",frost:"Frost",power:"Sovrapotenza",activity:"Rilevata Attività",presence:"Rilevata Presenza",motion:"Rilevato motimento",undefined:"Nulla",auto_regulation_light:"Leggero",auto_regulation_medium:"Medio",auto_regulation_strong:"Forte",auto_regulation_slow:"Lento",auto_regulation_expert:"Esperto",auto_fan_mode:"Auto-fan",auto_fan_mode_off:"Nulla",auto_fan_none:"Nulla",auto_fan_low:"Basso",auto_fan_medium:"Medio",auto_fan_high:"Alto",auto_fan_boost:"Boost",fan_low:"Basso",fan_low_mid:"Medio-basso",fan_mid:"Medio",fan_mid_high:"Medio-alto",fan_high:"Alto",fan_mute:"Silenzioso",fan_turbo:"Turbo",fan_none:"Nulla",fan_auto:"Auto",change_message:"Click per cambio preimpostazione",toggle_message:"Click per commutare",auto_start_stop:"Fermato da auto-start/stop",auto_start_stop_enable:"Abilita/disabilita auto-start/stop",auto_start_stop_label:"Auto-start/stop",temp_unavailable:"-",sleep:"Riposo","New strings for recent edits. Please translate":"-------------------------------------",minutes:"min",room_temp:"Temp. ambiente",outdoor_temp:"Temp. esterna",safety_warning:"Avviso",safety_warning_msg:"Guasto Temp.",hvac_off_manual:"Spento manualmente",hvac_off_auto_start_stop:"Spento da auto-start/stop",hvac_off_window_detection:"Spento da rilevamento finestra",hvac_off_sleep_mode:"Spento da modo notte",hvac_off_safety_detection:"Spento da modalità sicurezza",hvac_off_central_mode:"Spento da modalità centralizzato",safety_detected:"Modalità sicurezza rilavata",overpowering_detected:"Sovrapotenza rilevata",target_temp_window_eco:"Temp. impostata: window eco",target_temp_window_frost:"Temp. impostata: window freddo",target_temp_power:"Temp. impostata: power",target_temp_central_mode:"Temp. impostata: modalità centralizzata",target_temp_activity_detected:"Temp. impostata: rilevata atività",target_temp_activity_not_detected:"Temp. impostata: attività non rilevata",target_temp_absence_detected:"Temp. impostata: assenza rilevata",lock_users_active:"Controlli utente bloccati",lock_automations_active:"Modifiche automazioni bloccate","messages-button":"Perchè questo stato?",recalculation_scheduled:"Aggiornamento sottostanti in corso","window-bypass-button":"Commuta bypass finestra",code_error:"Codice errato",lock:"Blocca",unlock:"Sblocca",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},St={common:At,editor:Ct,extra_states:xt},Lt={version:"versão",current:"actual"},Mt={card:{climate:{disable_window:"Desactivar Janela",disable_overpowering:"Desactivar Verão",disable_heat:"Desactivar Aquecimento",disable_cool:"Desactivar Arrefecimento",disable_heat_cool:"Desactivar Aquecimento/Arrefecimento",disable_auto:"Desactivar Auto",disable_fan_only:"Desactivar Ventilação",disable_dry:"Desactivar Secagem",disable_off:"Desactivar Off",eco_temperature:"Modo Eco",set_current_as_main:"Mudar para a temperatura local actual",allow_lock_toggle:"Allow lock/unlock from card"}}},Et={window_open:"Janela Aberta",night_mode:"Modo Noturno",eco:"Eco",overpowering:"Verão",lock_users_active:"Controlos de utilizador bloqueados",lock_automations_active:"Alterações de automação bloqueadas",code_error:"Código incorreto",lock:"Bloquear",unlock:"Desbloquear",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},Tt={common:Lt,editor:Mt,extra_states:Et},Vt={version:"版本",current:"当前"},zt={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},Ht={window_open:"窗户打开",night_mode:"夜间模式",eco:"节能",overpowering:"夏季",lock_users_active:"用户控制已锁定",lock_automations_active:"自动化更改已锁定",code_error:"代码错误",lock:"锁定",unlock:"解锁",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},Pt={common:Vt,editor:zt,extra_states:Ht},Dt={version:"версія",current:"поточний"},Ot={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},Nt={window_open:"Вікно відчинено",night_mode:"Нічний режим",eco:"Економія",overpowering:"Літо",lock_users_active:"Керування користувача заблоковано",lock_automations_active:"Зміни автоматизації заблоковані",code_error:"Невірний код",lock:"Блокувати",unlock:"Розблокувати",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},jt={common:Dt,editor:Ot,extra_states:Nt},It={version:"έκδοση",current:"τρέχουσα"},Rt={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},Bt={window_open:"Παράθυρο ανοικτό",night_mode:"Λειτουργία νυκτός",eco:"Εξοικονόμηση",overpowering:"Καλοκαίρι",lock_users_active:"Έλεγχοι χρήστη κλειδωμένοι",lock_automations_active:"Αλλαγές αυτοματισμών κλειδωμένες",code_error:"Λάθος κωδικός",lock:"Κλείδωμα",unlock:"Ξεκλείδωμα",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},Ut={common:It,editor:Rt,extra_states:Bt},Wt={version:"versie",current:"huidig"},Ft={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},Zt={window_open:"Raam open",night_mode:"Nacht modus",eco:"Eco",overpowering:"Zomer",lock_users_active:"Gebruikersbediening vergrendeld",lock_automations_active:"Automatisatie wijzigingen vergrendeld",code_error:"Foute code",lock:"Vergrendelen",unlock:"Ontgrendelen",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},qt={common:Wt,editor:Ft,extra_states:Zt},Kt={version:"versjon",current:"nåværende"},Yt={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},Xt={window_open:"Vindu åpent",night_mode:"Nattmodus",eco:"Eco",overpowering:"Sommer",lock_users_active:"Brukerkontroller låst",lock_automations_active:"Automatiseringsendringer låst",code_error:"Feil kode",lock:"Lås",unlock:"Lås opp",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},Gt={common:Kt,editor:Yt,extra_states:Xt},Jt={version:"verze",current:"aktuální"},Qt={card:{climate:{disable_window:"Zakázat okno",disable_overpowering:"Zakázat léto",disable_heat:"Zakázat topení",disable_cool:"Zakázat chlazení",disable_heat_cool:"Zakázat topení/chlazení",disable_auto:"Zakázať automatic",disable_fan_only:"Zakázat pouze ventilátor",disable_dry:"Zakázat sušení",disable_off:"Zakázat vypnuto",disable_menu:"Zakázat menu",disable_safety_warning:"Zakázat bezpečnostní oznámení",disable_buttons:"Zakázat tlačítka plus/minus",eco_temperature:"Eco teplota",set_current_as_main:"Prohodit místa cílovoé a aktáalní teploty",allow_lock_toggle:"Allow lock/unlock from card"}}},ei={window_open:"okno otevřeno",night_mode:"Noční režim",eco:"Eco",overpowering:"Léto",lock_users_active:"Uživatelské ovládání zamčeno",lock_automations_active:"Změny automatizace zamčeny",code_error:"Chybný kód",lock:"Zamknout",unlock:"Odemknout",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},ti={common:Jt,editor:Qt,extra_states:ei},ii={version:"različica",current:"trenutno"},oi={card:{climate:{allow_lock_toggle:"Dovoli zaklepanje/odklepanje iz kartice"}}},ai={window_open:"Okno odprto",night_mode:"Nočni način",eco:"Eko",overpowering:"Poletje",lock_users_active:"Uporabniške kontrole zaklenjene",lock_automations_active:"Spremembe avtomatizacije zaklenjene",code_error:"Napačna koda",lock:"Zakleni",unlock:"Odkleni",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},ni={common:ii,editor:oi,extra_states:ai},si={version:"version",current:"Nuvarande"},ri={window_open:"Fönster öppet",night_mode:"Nattläge",eco:"Eco",overpowering:"Sommar",lock_users_active:"Användarkontroller låsta",lock_automations_active:"Automationsändringar låsta",code_error:"Fel kod",lock:"Lås",unlock:"Lås upp",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},li={common:si,extra_states:ri},ci={version:"версия",currrent:"текущий"},di={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},ui={window_open:"Отворен прозорец",night_mode:"Нощен режим",eco:"Екологичен режим",overpowering:"Лято",lock_users_active:"Потребителските контроли са заключени",lock_automations_active:"Промените от автоматизации са заключени",code_error:"Грешен код",lock:"Заключване",unlock:"Отключване",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},hi={common:ci,editor:di,extra_states:ui},_i={version:"version",current:"Nykyinen"},pi={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},mi={window_open:"Ikkuna auki",night_mode:"Yötila",eco:"Eco",overpowering:"Kesä",lock_users_active:"Käyttäjän säädöt lukittu",lock_automations_active:"Automaation muutokset lukittu",code_error:"Virheellinen koodi",lock:"Lukitse",unlock:"Avaa lukitus",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},vi={common:_i,editor:pi,extra_states:mi},fi={version:"versiune",current:"curent"},gi={card:{climate:{allow_lock_toggle:"Permite blocarea/deblocarea din card"}}},yi={window_open:"Fereastră deschisă",night_mode:"Mod noapte",eco:"Eco",overpowering:"Vară",lock_users_active:"Comenzi utilizator blocate",lock_automations_active:"Modificări automatizări blocate",code_error:"Cod incorect",lock:"Blocare",unlock:"Deblocare",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},bi={common:fi,editor:gi,extra_states:yi},wi={version:"versió",current:"Actual"},ki={card:{climate:{allow_lock_toggle:"Allow lock/unlock from card"}}},$i={window_open:"Finestra oberta",night_mode:"Mode nocturn",eco:"Eco",overpowering:"Estiu",lock_users_active:"Controls d'usuari bloquejats",lock_automations_active:"Canvis d'automatització bloquejats",code_error:"Codi incorrecte",lock:"Bloquejar",unlock:"Desbloquejar",heating_failure:"Heating failure detected",cooling_failure:"Cooling failure detected"},Ai={common:wi,editor:ki,extra_states:$i};const Ci={en:Oe,de:Be,fr:qe,ru:Je,sk:Object.freeze({__proto__:null,common:at,default:rt,editor:nt,extra_states:st}),hu:Object.freeze({__proto__:null,common:lt,default:ut,editor:ct,extra_states:dt}),pl:ot,da:Object.freeze({__proto__:null,common:ht,default:mt,editor:_t,extra_states:pt}),es:Object.freeze({__proto__:null,common:vt,default:yt,editor:ft,extra_states:gt}),tr:Object.freeze({__proto__:null,common:bt,default:$t,editor:wt,extra_states:kt}),it:Object.freeze({__proto__:null,common:At,default:St,editor:Ct,extra_states:xt}),pt:Object.freeze({__proto__:null,common:Lt,default:Tt,editor:Mt,extra_states:Et}),cn:Object.freeze({__proto__:null,common:Vt,default:Pt,editor:zt,extra_states:Ht}),uk:Object.freeze({__proto__:null,common:Dt,default:jt,editor:Ot,extra_states:Nt}),el:Object.freeze({__proto__:null,common:It,default:Ut,editor:Rt,extra_states:Bt}),nl:Object.freeze({__proto__:null,common:Wt,default:qt,editor:Ft,extra_states:Zt}),no:Object.freeze({__proto__:null,common:Kt,default:Gt,editor:Yt,extra_states:Xt}),cs:Object.freeze({__proto__:null,common:Jt,default:ti,editor:Qt,extra_states:ei}),sl:Object.freeze({__proto__:null,common:ii,default:ni,editor:oi,extra_states:ai}),sv:Object.freeze({__proto__:null,common:si,default:li,extra_states:ri}),bg:Object.freeze({__proto__:null,common:ci,default:hi,editor:di,extra_states:ui}),fi:Object.freeze({__proto__:null,common:_i,default:vi,editor:pi,extra_states:mi}),ro:Object.freeze({__proto__:null,common:fi,default:bi,editor:gi,extra_states:yi}),ca:Object.freeze({__proto__:null,common:wi,default:Ai,editor:ki,extra_states:$i})},xi="en";function Si({hass:e,string:t,search:i="",replace:o=""}){var a;const n=null!==(a=null==e?void 0:e.locale.language)&&void 0!==a?a:xi;let s;try{s=t.split(".").reduce(((e,t)=>e[t]),Ci[n])}catch(e){s=t.split(".").reduce(((e,t)=>e[t]),Ci.en)}return void 0===s&&(s=t.split(".").reduce(((e,t)=>e[t]),Ci.en)),""!==i&&""!==o&&(s=s.replace(i,o)),s}function Li(e,t){try{return e.split(".").reduce(((e,t)=>e[t]),Ci[t])}catch(e){return}}var Mi,Ei,Ti=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function Vi(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(o=e[i],a=t[i],!(o===a||Ti(o)&&Ti(a)))return!1;var o,a;return!0}function zi(e,t){void 0===t&&(t=Vi);var i=null;function o(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(i&&i.lastThis===this&&t(o,i.lastArgs))return i.lastResult;var n=e.apply(this,o);return i={lastResult:n,lastArgs:o,lastThis:this},n}return o.clear=function(){i=null},o}zi((e=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"}))),zi((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"}))),zi((e=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric"}))),zi((e=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short"}))),zi((e=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric"}))),zi((e=>new Intl.DateTimeFormat(e.language,{month:"long"}))),zi((e=>new Intl.DateTimeFormat(e.language,{year:"numeric"}))),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Mi||(Mi={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ei||(Ei={}));const Hi=zi((e=>{if(e.time_format===Ei.language||e.time_format===Ei.system){const t=e.time_format===Ei.language?e.language:void 0,i=(new Date).toLocaleString(t);return i.includes("AM")||i.includes("PM")}return e.time_format===Ei.am_pm}));zi((e=>new Intl.DateTimeFormat("en"!==e.language||Hi(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:Hi(e)?"numeric":"2-digit",minute:"2-digit",hour12:Hi(e)}))),zi((e=>new Intl.DateTimeFormat("en"!==e.language||Hi(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"long",day:"numeric",hour:Hi(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:Hi(e)}))),zi((e=>new Intl.DateTimeFormat("en"!==e.language||Hi(e)?e.language:"en-u-hc-h23",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:Hi(e)}))),zi((e=>new Intl.DateTimeFormat("en"!==e.language||Hi(e)?e.language:"en-u-hc-h23",{hour:"numeric",minute:"2-digit",hour12:Hi(e)}))),zi((e=>new Intl.DateTimeFormat("en"!==e.language||Hi(e)?e.language:"en-u-hc-h23",{hour:Hi(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:Hi(e)}))),zi((e=>new Intl.DateTimeFormat("en"!==e.language||Hi(e)?e.language:"en-u-hc-h23",{weekday:"long",hour:Hi(e)?"numeric":"2-digit",minute:"2-digit",hour12:Hi(e)})));const Pi=(e,t,i,o)=>{o=o||{},i=null==i?{}:i;const a=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return a.detail=i,e.dispatchEvent(a),a},Di=(e,t,i)=>Math.min(Math.max(e,t),i),Oi=(e,t,i)=>{const o=t?(e=>{switch(e.number_format){case Mi.comma_decimal:return["en-US","en"];case Mi.decimal_comma:return["de","es","it"];case Mi.space_comma:return["fr","sv","cs"];case Mi.system:return;default:return e.language}})(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==Mi.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(o,Ni(e,i)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,Ni(e,i)).format(Number(e))}return"string"==typeof e?e:`${((e,t=2)=>Math.round(e*10**t)/10**t)(e,null==i?void 0:i.maximumFractionDigits).toString()}${"currency"===(null==i?void 0:i.style)?` ${i.currency}`:""}`},Ni=(e,t)=>{const i=Object.assign({maximumFractionDigits:2},t);if("string"!=typeof e)return i;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=t,i.maximumFractionDigits=t}return i};class ji extends TypeError{constructor(e,t){let i;const{message:o,explanation:a,...n}=e,{path:s}=e,r=0===s.length?o:`At path: ${s.join(".")} -- ${o}`;super(a??r),null!=a&&(this.cause=r),Object.assign(this,n),this.name=this.constructor.name,this.failures=()=>i??(i=[e,...t()])}}function Ii(e){return"object"==typeof e&&null!=e}function Ri(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function Bi(e,t,i,o){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:a,branch:n}=t,{type:s}=i,{refinement:r,message:l=`Expected a value of type \`${s}\`${r?` with refinement \`${r}\``:""}, but received: \`${Ri(o)}\``}=e;return{value:o,type:s,refinement:r,key:a[a.length-1],path:a,branch:n,...e,message:l}}function*Ui(e,t,i,o){(function(e){return Ii(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const a of e){const e=Bi(a,t,i,o);e&&(yield e)}}function*Wi(e,t,i={}){const{path:o=[],branch:a=[e],coerce:n=!1,mask:s=!1}=i,r={path:o,branch:a};if(n&&(e=t.coercer(e,r),s&&"type"!==t.type&&Ii(t.schema)&&Ii(e)&&!Array.isArray(e)))for(const i in e)void 0===t.schema[i]&&delete e[i];let l="valid";for(const o of t.validator(e,r))o.explanation=i.message,l="not_valid",yield[o,void 0];for(let[c,d,u]of t.entries(e,r)){const t=Wi(d,u,{path:void 0===c?o:[...o,c],branch:void 0===c?a:[...a,d],coerce:n,mask:s,message:i.message});for(const i of t)i[0]?(l=null!=i[0].refinement?"not_refined":"not_valid",yield[i[0],void 0]):n&&(d=i[1],void 0===c?e=d:e instanceof Map?e.set(c,d):e instanceof Set?e.add(d):Ii(e)&&(void 0!==d||c in e)&&(e[c]=d))}if("not_valid"!==l)for(const o of t.refiner(e,r))o.explanation=i.message,l="not_refined",yield[o,void 0];"valid"===l&&(yield[void 0,e])}class Fi{constructor(e){const{type:t,schema:i,validator:o,refiner:a,coercer:n=(e=>e),entries:s=function*(){}}=e;this.type=t,this.schema=i,this.entries=s,this.coercer=n,this.validator=o?(e,t)=>Ui(o(e,t),t,this,e):()=>[],this.refiner=a?(e,t)=>Ui(a(e,t),t,this,e):()=>[]}assert(e,t){return Zi(e,this,t)}create(e,t){return function(e,t,i){const o=qi(e,t,{coerce:!0,message:i});if(o[0])throw o[0];return o[1]}(e,this,t)}is(e){return function(e,t){const i=qi(e,t);return!i[0]}(e,this)}mask(e,t){return function(e,t,i){const o=qi(e,t,{coerce:!0,mask:!0,message:i});if(o[0])throw o[0];return o[1]}(e,this,t)}validate(e,t={}){return qi(e,this,t)}}function Zi(e,t,i){const o=qi(e,t,{message:i});if(o[0])throw o[0]}function qi(e,t,i={}){const o=Wi(e,t,i),a=function(e){const{done:t,value:i}=e.next();return t?void 0:i}(o);if(a[0]){const e=new ji(a[0],(function*(){for(const e of o)e[0]&&(yield e[0])}));return[e,void 0]}return[void 0,a[1]]}function Ki(e,t){return new Fi({type:e,schema:null,validator:t})}function Yi(e){return new Fi({type:"array",schema:e,*entries(t){if(e&&Array.isArray(t))for(const[i,o]of t.entries())yield[i,o,e]},coercer:e=>Array.isArray(e)?e.slice():e,validator:e=>Array.isArray(e)||`Expected an array value, but received: ${Ri(e)}`})}function Xi(){return Ki("boolean",(e=>"boolean"==typeof e))}function Gi(e){const t=Ri(e),i=typeof e;return new Fi({type:"literal",schema:"string"===i||"number"===i||"boolean"===i?e:null,validator:i=>i===e||`Expected the literal \`${t}\`, but received: ${Ri(i)}`})}function Ji(){return Ki("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${Ri(e)}`))}function Qi(e){const t=e?Object.keys(e):[],i=Ki("never",(()=>!1));return new Fi({type:"object",schema:e||null,*entries(o){if(e&&Ii(o)){const a=new Set(Object.keys(o));for(const i of t)a.delete(i),yield[i,o[i],e[i]];for(const e of a)yield[e,o[e],i]}},validator:e=>Ii(e)||`Expected an object, but received: ${Ri(e)}`,coercer:e=>Ii(e)?{...e}:e})}function eo(e){return new Fi({...e,validator:(t,i)=>void 0===t||e.validator(t,i),refiner:(t,i)=>void 0===t||e.refiner(t,i)})}function to(){return Ki("string",(e=>"string"==typeof e||`Expected a string, but received: ${Ri(e)}`))}function io(e){const t=Object.keys(e);return new Fi({type:"type",schema:e,*entries(i){if(Ii(i))for(const o of t)yield[o,i[o],e[o]]},validator:e=>Ii(e)||`Expected an object, but received: ${Ri(e)}`,coercer:e=>Ii(e)?{...e}:e})}function oo(e){const t=e.map((e=>e.type)).join(" | ");return new Fi({type:"union",schema:null,coercer(t){for(const i of e){const[e,o]=i.validate(t,{coerce:!0});if(!e)return o}return t},validator(i,o){const a=[];for(const t of e){const[...e]=Wi(i,t,o),[n]=e;if(!n[0])return[];for(const[t]of e)t&&a.push(t)}return[`Expected the value to satisfy a union of \`${t}\`, but received: ${Ri(i)}`,...a]}})}const ao=Qi({user:to()}),no=oo([Xi(),Qi({text:eo(to()),excemptions:eo(Yi(ao))})]),so=Qi({action:Gi("url"),url_path:to(),confirmation:eo(no)}),ro=Qi({action:Gi("call-service"),service:to(),service_data:eo(Qi()),data:eo(Qi()),target:eo(Qi({entity_id:eo(oo([to(),Yi(to())])),device_id:eo(oo([to(),Yi(to())])),area_id:eo(oo([to(),Yi(to())]))})),confirmation:eo(no)}),lo=Qi({action:Gi("navigate"),navigation_path:to(),confirmation:eo(no)}),co=io({action:Gi("fire-dom-event")}),uo=Qi({action:function(e){const t={},i=e.map((e=>Ri(e))).join();for(const i of e)t[i]=i;return new Fi({type:"enums",schema:t,validator:t=>e.includes(t)||`Expected one of \`${i}\`, but received: ${Ri(t)}`})}(["none","toggle","more-info","call-service","url","navigate"]),confirmation:eo(no)});var ho;ho=e=>{if(e&&"object"==typeof e&&"action"in e)switch(e.action){case"call-service":return ro;case"fire-dom-event":return co;case"navigate":return lo;case"url":return so}return uo},new Fi({type:"dynamic",schema:null,*entries(e,t){const i=ho(e,t);yield*i.entries(e,t)},validator:(e,t)=>ho(e,t).validator(e,t),coercer:(e,t)=>ho(e,t).coercer(e,t),refiner:(e,t)=>ho(e,t).refiner(e,t)}),s`
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
`;const _o=([[e,t],[i,o]],[a,n])=>[e*a+t*n,i*a+o*n],po=([e,t],[i,o])=>[e+i,t+o],mo=e=>e/180*Math.PI,vo=e=>{const{x:t,y:i,r:o,start:a,end:n,rotate:s=0}=e,r=t,l=i,c=o,d=o,u=mo(a),h=(mo(n)-u)%(2*Math.PI),_=mo(s),p=(e=>[[Math.cos(e),-Math.sin(e)],[Math.sin(e),Math.cos(e)]])(_),[m,v]=po(_o(p,[c*Math.cos(u),d*Math.sin(u)]),[r,l]),[f,g]=po(_o(p,[c*Math.cos(u+h),d*Math.sin(u+h)]),[r,l]),y=h>Math.PI?1:0,b=h>0?1:0;return["M",m,v,"A",c,d,_/(2*Math.PI)*360,y,b,f,g].join(" ")};function fo(){return fo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},fo.apply(this,arguments)}function go(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function yo(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var bo,wo="function"!=typeof Object.assign?function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),i=1;i<arguments.length;i++){var o=arguments[i];if(null!=o)for(var a in o)o.hasOwnProperty(a)&&(t[a]=o[a])}return t}:Object.assign,ko=["","webkit","Moz","MS","ms","o"],$o="undefined"==typeof document?{style:{}}:document.createElement("div"),Ao=Math.round,Co=Math.abs,xo=Date.now;function So(e,t){for(var i,o,a=t[0].toUpperCase()+t.slice(1),n=0;n<ko.length;){if((o=(i=ko[n])?i+a:t)in e)return o;n++}}bo="undefined"==typeof window?{}:window;var Lo=So($o.style,"touchAction"),Mo=void 0!==Lo;var Eo="compute",To="auto",Vo="manipulation",zo="none",Ho="pan-x",Po="pan-y",Do=function(){if(!Mo)return!1;var e={},t=bo.CSS&&bo.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(i){return e[i]=!t||bo.CSS.supports("touch-action",i)})),e}(),Oo="ontouchstart"in bo,No=void 0!==So(bo,"PointerEvent"),jo=Oo&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),Io="touch",Ro="mouse",Bo=25,Uo=1,Wo=4,Fo=8,Zo=1,qo=2,Ko=4,Yo=8,Xo=16,Go=qo|Ko,Jo=Yo|Xo,Qo=Go|Jo,ea=["x","y"],ta=["clientX","clientY"];function ia(e,t,i){var o;if(e)if(e.forEach)e.forEach(t,i);else if(void 0!==e.length)for(o=0;o<e.length;)t.call(i,e[o],o,e),o++;else for(o in e)e.hasOwnProperty(o)&&t.call(i,e[o],o,e)}function oa(e,t){return"function"==typeof e?e.apply(t&&t[0]||void 0,t):e}function aa(e,t){return e.indexOf(t)>-1}var na=function(){function e(e,t){this.manager=e,this.set(t)}var t=e.prototype;return t.set=function(e){e===Eo&&(e=this.compute()),Mo&&this.manager.element.style&&Do[e]&&(this.manager.element.style[Lo]=e),this.actions=e.toLowerCase().trim()},t.update=function(){this.set(this.manager.options.touchAction)},t.compute=function(){var e=[];return ia(this.manager.recognizers,(function(t){oa(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))})),function(e){if(aa(e,zo))return zo;var t=aa(e,Ho),i=aa(e,Po);return t&&i?zo:t||i?t?Ho:Po:aa(e,Vo)?Vo:To}(e.join(" "))},t.preventDefaults=function(e){var t=e.srcEvent,i=e.offsetDirection;if(this.manager.session.prevented)t.preventDefault();else{var o=this.actions,a=aa(o,zo)&&!Do[zo],n=aa(o,Po)&&!Do[Po],s=aa(o,Ho)&&!Do[Ho];if(a){var r=1===e.pointers.length,l=e.distance<2,c=e.deltaTime<250;if(r&&l&&c)return}if(!s||!n)return a||n&&i&Go||s&&i&Jo?this.preventSrc(t):void 0}},t.preventSrc=function(e){this.manager.session.prevented=!0,e.preventDefault()},e}();function sa(e,t){for(;e;){if(e===t)return!0;e=e.parentNode}return!1}function ra(e){var t=e.length;if(1===t)return{x:Ao(e[0].clientX),y:Ao(e[0].clientY)};for(var i=0,o=0,a=0;a<t;)i+=e[a].clientX,o+=e[a].clientY,a++;return{x:Ao(i/t),y:Ao(o/t)}}function la(e){for(var t=[],i=0;i<e.pointers.length;)t[i]={clientX:Ao(e.pointers[i].clientX),clientY:Ao(e.pointers[i].clientY)},i++;return{timeStamp:xo(),pointers:t,center:ra(t),deltaX:e.deltaX,deltaY:e.deltaY}}function ca(e,t,i){i||(i=ea);var o=t[i[0]]-e[i[0]],a=t[i[1]]-e[i[1]];return Math.sqrt(o*o+a*a)}function da(e,t,i){i||(i=ea);var o=t[i[0]]-e[i[0]],a=t[i[1]]-e[i[1]];return 180*Math.atan2(a,o)/Math.PI}function ua(e,t){return e===t?Zo:Co(e)>=Co(t)?e<0?qo:Ko:t<0?Yo:Xo}function ha(e,t,i){return{x:t/e||0,y:i/e||0}}function _a(e,t){var i=e.session,o=t.pointers,a=o.length;i.firstInput||(i.firstInput=la(t)),a>1&&!i.firstMultiple?i.firstMultiple=la(t):1===a&&(i.firstMultiple=!1);var n=i.firstInput,s=i.firstMultiple,r=s?s.center:n.center,l=t.center=ra(o);t.timeStamp=xo(),t.deltaTime=t.timeStamp-n.timeStamp,t.angle=da(r,l),t.distance=ca(r,l),function(e,t){var i=t.center,o=e.offsetDelta||{},a=e.prevDelta||{},n=e.prevInput||{};t.eventType!==Uo&&n.eventType!==Wo||(a=e.prevDelta={x:n.deltaX||0,y:n.deltaY||0},o=e.offsetDelta={x:i.x,y:i.y}),t.deltaX=a.x+(i.x-o.x),t.deltaY=a.y+(i.y-o.y)}(i,t),t.offsetDirection=ua(t.deltaX,t.deltaY);var c,d,u=ha(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=u.x,t.overallVelocityY=u.y,t.overallVelocity=Co(u.x)>Co(u.y)?u.x:u.y,t.scale=s?(c=s.pointers,ca((d=o)[0],d[1],ta)/ca(c[0],c[1],ta)):1,t.rotation=s?function(e,t){return da(t[1],t[0],ta)+da(e[1],e[0],ta)}(s.pointers,o):0,t.maxPointers=i.prevInput?t.pointers.length>i.prevInput.maxPointers?t.pointers.length:i.prevInput.maxPointers:t.pointers.length,function(e,t){var i,o,a,n,s=e.lastInterval||t,r=t.timeStamp-s.timeStamp;if(t.eventType!==Fo&&(r>Bo||void 0===s.velocity)){var l=t.deltaX-s.deltaX,c=t.deltaY-s.deltaY,d=ha(r,l,c);o=d.x,a=d.y,i=Co(d.x)>Co(d.y)?d.x:d.y,n=ua(l,c),e.lastInterval=t}else i=s.velocity,o=s.velocityX,a=s.velocityY,n=s.direction;t.velocity=i,t.velocityX=o,t.velocityY=a,t.direction=n}(i,t);var h,_=e.element,p=t.srcEvent;sa(h=p.composedPath?p.composedPath()[0]:p.path?p.path[0]:p.target,_)&&(_=h),t.target=_}function pa(e,t,i){var o=i.pointers.length,a=i.changedPointers.length,n=t&Uo&&o-a==0,s=t&(Wo|Fo)&&o-a==0;i.isFirst=!!n,i.isFinal=!!s,n&&(e.session={}),i.eventType=t,_a(e,i),e.emit("hammer.input",i),e.recognize(i),e.session.prevInput=i}function ma(e){return e.trim().split(/\s+/g)}function va(e,t,i){ia(ma(t),(function(t){e.addEventListener(t,i,!1)}))}function fa(e,t,i){ia(ma(t),(function(t){e.removeEventListener(t,i,!1)}))}function ga(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||window}var ya=function(){function e(e,t){var i=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(t){oa(e.options.enable,[e])&&i.handler(t)},this.init()}var t=e.prototype;return t.handler=function(){},t.init=function(){this.evEl&&va(this.element,this.evEl,this.domHandler),this.evTarget&&va(this.target,this.evTarget,this.domHandler),this.evWin&&va(ga(this.element),this.evWin,this.domHandler)},t.destroy=function(){this.evEl&&fa(this.element,this.evEl,this.domHandler),this.evTarget&&fa(this.target,this.evTarget,this.domHandler),this.evWin&&fa(ga(this.element),this.evWin,this.domHandler)},e}();function ba(e,t,i){if(e.indexOf&&!i)return e.indexOf(t);for(var o=0;o<e.length;){if(i&&e[o][i]==t||!i&&e[o]===t)return o;o++}return-1}var wa={pointerdown:Uo,pointermove:2,pointerup:Wo,pointercancel:Fo,pointerout:Fo},ka={2:Io,3:"pen",4:Ro,5:"kinect"},$a="pointerdown",Aa="pointermove pointerup pointercancel";bo.MSPointerEvent&&!bo.PointerEvent&&($a="MSPointerDown",Aa="MSPointerMove MSPointerUp MSPointerCancel");var Ca=function(e){function t(){var i,o=t.prototype;return o.evEl=$a,o.evWin=Aa,(i=e.apply(this,arguments)||this).store=i.manager.session.pointerEvents=[],i}return go(t,e),t.prototype.handler=function(e){var t=this.store,i=!1,o=e.type.toLowerCase().replace("ms",""),a=wa[o],n=ka[e.pointerType]||e.pointerType,s=n===Io,r=ba(t,e.pointerId,"pointerId");a&Uo&&(0===e.button||s)?r<0&&(t.push(e),r=t.length-1):a&(Wo|Fo)&&(i=!0),r<0||(t[r]=e,this.callback(this.manager,a,{pointers:t,changedPointers:[e],pointerType:n,srcEvent:e}),i&&t.splice(r,1))},t}(ya);function xa(e){return Array.prototype.slice.call(e,0)}function Sa(e,t,i){for(var o=[],a=[],n=0;n<e.length;){var s=t?e[n][t]:e[n];ba(a,s)<0&&o.push(e[n]),a[n]=s,n++}return i&&(o=t?o.sort((function(e,i){return e[t]>i[t]})):o.sort()),o}var La={touchstart:Uo,touchmove:2,touchend:Wo,touchcancel:Fo},Ma=function(e){function t(){var i;return t.prototype.evTarget="touchstart touchmove touchend touchcancel",(i=e.apply(this,arguments)||this).targetIds={},i}return go(t,e),t.prototype.handler=function(e){var t=La[e.type],i=Ea.call(this,e,t);i&&this.callback(this.manager,t,{pointers:i[0],changedPointers:i[1],pointerType:Io,srcEvent:e})},t}(ya);function Ea(e,t){var i,o,a=xa(e.touches),n=this.targetIds;if(t&(2|Uo)&&1===a.length)return n[a[0].identifier]=!0,[a,a];var s=xa(e.changedTouches),r=[],l=this.target;if(o=a.filter((function(e){return sa(e.target,l)})),t===Uo)for(i=0;i<o.length;)n[o[i].identifier]=!0,i++;for(i=0;i<s.length;)n[s[i].identifier]&&r.push(s[i]),t&(Wo|Fo)&&delete n[s[i].identifier],i++;return r.length?[Sa(o.concat(r),"identifier",!0),r]:void 0}var Ta={mousedown:Uo,mousemove:2,mouseup:Wo},Va=function(e){function t(){var i,o=t.prototype;return o.evEl="mousedown",o.evWin="mousemove mouseup",(i=e.apply(this,arguments)||this).pressed=!1,i}return go(t,e),t.prototype.handler=function(e){var t=Ta[e.type];t&Uo&&0===e.button&&(this.pressed=!0),2&t&&1!==e.which&&(t=Wo),this.pressed&&(t&Wo&&(this.pressed=!1),this.callback(this.manager,t,{pointers:[e],changedPointers:[e],pointerType:Ro,srcEvent:e}))},t}(ya),za=2500;function Ha(e){var t=e.changedPointers[0];if(t.identifier===this.primaryTouch){var i={x:t.clientX,y:t.clientY},o=this.lastTouches;this.lastTouches.push(i);setTimeout((function(){var e=o.indexOf(i);e>-1&&o.splice(e,1)}),za)}}function Pa(e,t){e&Uo?(this.primaryTouch=t.changedPointers[0].identifier,Ha.call(this,t)):e&(Wo|Fo)&&Ha.call(this,t)}function Da(e){for(var t=e.srcEvent.clientX,i=e.srcEvent.clientY,o=0;o<this.lastTouches.length;o++){var a=this.lastTouches[o],n=Math.abs(t-a.x),s=Math.abs(i-a.y);if(n<=25&&s<=25)return!0}return!1}var Oa=function(){return function(e){function t(t,i){var o;return(o=e.call(this,t,i)||this).handler=function(e,t,i){var a=i.pointerType===Io,n=i.pointerType===Ro;if(!(n&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(a)Pa.call(yo(yo(o)),t,i);else if(n&&Da.call(yo(yo(o)),i))return;o.callback(e,t,i)}},o.touch=new Ma(o.manager,o.handler),o.mouse=new Va(o.manager,o.handler),o.primaryTouch=null,o.lastTouches=[],o}return go(t,e),t.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},t}(ya)}();function Na(e,t,i){return!!Array.isArray(e)&&(ia(e,i[t],i),!0)}var ja=32,Ia=1;function Ra(e,t){var i=t.manager;return i?i.get(e):e}function Ba(e){return 16&e?"cancel":8&e?"end":4&e?"move":2&e?"start":""}var Ua=function(){function e(e){void 0===e&&(e={}),this.options=fo({enable:!0},e),this.id=Ia++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var t=e.prototype;return t.set=function(e){return wo(this.options,e),this.manager&&this.manager.touchAction.update(),this},t.recognizeWith=function(e){if(Na(e,"recognizeWith",this))return this;var t=this.simultaneous;return t[(e=Ra(e,this)).id]||(t[e.id]=e,e.recognizeWith(this)),this},t.dropRecognizeWith=function(e){return Na(e,"dropRecognizeWith",this)||(e=Ra(e,this),delete this.simultaneous[e.id]),this},t.requireFailure=function(e){if(Na(e,"requireFailure",this))return this;var t=this.requireFail;return-1===ba(t,e=Ra(e,this))&&(t.push(e),e.requireFailure(this)),this},t.dropRequireFailure=function(e){if(Na(e,"dropRequireFailure",this))return this;e=Ra(e,this);var t=ba(this.requireFail,e);return t>-1&&this.requireFail.splice(t,1),this},t.hasRequireFailures=function(){return this.requireFail.length>0},t.canRecognizeWith=function(e){return!!this.simultaneous[e.id]},t.emit=function(e){var t=this,i=this.state;function o(i){t.manager.emit(i,e)}i<8&&o(t.options.event+Ba(i)),o(t.options.event),e.additionalEvent&&o(e.additionalEvent),i>=8&&o(t.options.event+Ba(i))},t.tryEmit=function(e){if(this.canEmit())return this.emit(e);this.state=ja},t.canEmit=function(){for(var e=0;e<this.requireFail.length;){if(!(33&this.requireFail[e].state))return!1;e++}return!0},t.recognize=function(e){var t=wo({},e);if(!oa(this.options.enable,[this,t]))return this.reset(),void(this.state=ja);56&this.state&&(this.state=1),this.state=this.process(t),30&this.state&&this.tryEmit(t)},t.process=function(e){},t.getTouchAction=function(){},t.reset=function(){},e}(),Wa=function(e){function t(t){var i;return void 0===t&&(t={}),(i=e.call(this,fo({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},t))||this).pTime=!1,i.pCenter=!1,i._timer=null,i._input=null,i.count=0,i}go(t,e);var i=t.prototype;return i.getTouchAction=function(){return[Vo]},i.process=function(e){var t=this,i=this.options,o=e.pointers.length===i.pointers,a=e.distance<i.threshold,n=e.deltaTime<i.time;if(this.reset(),e.eventType&Uo&&0===this.count)return this.failTimeout();if(a&&n&&o){if(e.eventType!==Wo)return this.failTimeout();var s=!this.pTime||e.timeStamp-this.pTime<i.interval,r=!this.pCenter||ca(this.pCenter,e.center)<i.posThreshold;if(this.pTime=e.timeStamp,this.pCenter=e.center,r&&s?this.count+=1:this.count=1,this._input=e,0===this.count%i.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){t.state=8,t.tryEmit()}),i.interval),2):8}return ja},i.failTimeout=function(){var e=this;return this._timer=setTimeout((function(){e.state=ja}),this.options.interval),ja},i.reset=function(){clearTimeout(this._timer)},i.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},t}(Ua),Fa=function(e){function t(t){return void 0===t&&(t={}),e.call(this,fo({pointers:1},t))||this}go(t,e);var i=t.prototype;return i.attrTest=function(e){var t=this.options.pointers;return 0===t||e.pointers.length===t},i.process=function(e){var t=this.state,i=e.eventType,o=6&t,a=this.attrTest(e);return o&&(i&Fo||!a)?16|t:o||a?i&Wo?8|t:2&t?4|t:2:ja},t}(Ua);function Za(e){return e===Xo?"down":e===Yo?"up":e===qo?"left":e===Ko?"right":""}var qa=function(e){function t(t){var i;return void 0===t&&(t={}),(i=e.call(this,fo({event:"pan",threshold:10,pointers:1,direction:Qo},t))||this).pX=null,i.pY=null,i}go(t,e);var i=t.prototype;return i.getTouchAction=function(){var e=this.options.direction,t=[];return e&Go&&t.push(Po),e&Jo&&t.push(Ho),t},i.directionTest=function(e){var t=this.options,i=!0,o=e.distance,a=e.direction,n=e.deltaX,s=e.deltaY;return a&t.direction||(t.direction&Go?(a=0===n?Zo:n<0?qo:Ko,i=n!==this.pX,o=Math.abs(e.deltaX)):(a=0===s?Zo:s<0?Yo:Xo,i=s!==this.pY,o=Math.abs(e.deltaY))),e.direction=a,i&&o>t.threshold&&a&t.direction},i.attrTest=function(e){return Fa.prototype.attrTest.call(this,e)&&(2&this.state||!(2&this.state)&&this.directionTest(e))},i.emit=function(t){this.pX=t.deltaX,this.pY=t.deltaY;var i=Za(t.direction);i&&(t.additionalEvent=this.options.event+i),e.prototype.emit.call(this,t)},t}(Fa),Ka=function(e){function t(t){return void 0===t&&(t={}),e.call(this,fo({event:"swipe",threshold:10,velocity:.3,direction:Go|Jo,pointers:1},t))||this}go(t,e);var i=t.prototype;return i.getTouchAction=function(){return qa.prototype.getTouchAction.call(this)},i.attrTest=function(t){var i,o=this.options.direction;return o&(Go|Jo)?i=t.overallVelocity:o&Go?i=t.overallVelocityX:o&Jo&&(i=t.overallVelocityY),e.prototype.attrTest.call(this,t)&&o&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers===this.options.pointers&&Co(i)>this.options.velocity&&t.eventType&Wo},i.emit=function(e){var t=Za(e.offsetDirection);t&&this.manager.emit(this.options.event+t,e),this.manager.emit(this.options.event,e)},t}(Fa),Ya=function(e){function t(t){return void 0===t&&(t={}),e.call(this,fo({event:"pinch",threshold:0,pointers:2},t))||this}go(t,e);var i=t.prototype;return i.getTouchAction=function(){return[zo]},i.attrTest=function(t){return e.prototype.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},i.emit=function(t){if(1!==t.scale){var i=t.scale<1?"in":"out";t.additionalEvent=this.options.event+i}e.prototype.emit.call(this,t)},t}(Fa),Xa=function(e){function t(t){return void 0===t&&(t={}),e.call(this,fo({event:"rotate",threshold:0,pointers:2},t))||this}go(t,e);var i=t.prototype;return i.getTouchAction=function(){return[zo]},i.attrTest=function(t){return e.prototype.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)},t}(Fa),Ga=function(e){function t(t){var i;return void 0===t&&(t={}),(i=e.call(this,fo({event:"press",pointers:1,time:251,threshold:9},t))||this)._timer=null,i._input=null,i}go(t,e);var i=t.prototype;return i.getTouchAction=function(){return[To]},i.process=function(e){var t=this,i=this.options,o=e.pointers.length===i.pointers,a=e.distance<i.threshold,n=e.deltaTime>i.time;if(this._input=e,!a||!o||e.eventType&(Wo|Fo)&&!n)this.reset();else if(e.eventType&Uo)this.reset(),this._timer=setTimeout((function(){t.state=8,t.tryEmit()}),i.time);else if(e.eventType&Wo)return 8;return ja},i.reset=function(){clearTimeout(this._timer)},i.emit=function(e){8===this.state&&(e&&e.eventType&Wo?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=xo(),this.manager.emit(this.options.event,this._input)))},t}(Ua),Ja={domEvents:!1,touchAction:Eo,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Qa=[[Xa,{enable:!1}],[Ya,{enable:!1},["rotate"]],[Ka,{direction:Go}],[qa,{direction:Go},["swipe"]],[Wa],[Wa,{event:"doubletap",taps:2},["tap"]],[Ga]];function en(e,t){var i,o=e.element;o.style&&(ia(e.options.cssProps,(function(a,n){i=So(o.style,n),t?(e.oldCssProps[i]=o.style[i],o.style[i]=a):o.style[i]=e.oldCssProps[i]||""})),t||(e.oldCssProps={}))}var tn=function(){function e(e,t){var i,o=this;this.options=wo({},Ja,t||{}),this.options.inputTarget=this.options.inputTarget||e,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,this.input=new((i=this).options.inputClass||(No?Ca:jo?Ma:Oo?Oa:Va))(i,pa),this.touchAction=new na(this,this.options.touchAction),en(this,!0),ia(this.options.recognizers,(function(e){var t=o.add(new e[0](e[1]));e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])}),this)}var t=e.prototype;return t.set=function(e){return wo(this.options,e),e.touchAction&&this.touchAction.update(),e.inputTarget&&(this.input.destroy(),this.input.target=e.inputTarget,this.input.init()),this},t.stop=function(e){this.session.stopped=e?2:1},t.recognize=function(e){var t=this.session;if(!t.stopped){var i;this.touchAction.preventDefaults(e);var o=this.recognizers,a=t.curRecognizer;(!a||a&&8&a.state)&&(t.curRecognizer=null,a=null);for(var n=0;n<o.length;)i=o[n],2===t.stopped||a&&i!==a&&!i.canRecognizeWith(a)?i.reset():i.recognize(e),!a&&14&i.state&&(t.curRecognizer=i,a=i),n++}},t.get=function(e){if(e instanceof Ua)return e;for(var t=this.recognizers,i=0;i<t.length;i++)if(t[i].options.event===e)return t[i];return null},t.add=function(e){if(Na(e,"add",this))return this;var t=this.get(e.options.event);return t&&this.remove(t),this.recognizers.push(e),e.manager=this,this.touchAction.update(),e},t.remove=function(e){if(Na(e,"remove",this))return this;var t=this.get(e);if(e){var i=this.recognizers,o=ba(i,t);-1!==o&&(i.splice(o,1),this.touchAction.update())}return this},t.on=function(e,t){if(void 0===e||void 0===t)return this;var i=this.handlers;return ia(ma(e),(function(e){i[e]=i[e]||[],i[e].push(t)})),this},t.off=function(e,t){if(void 0===e)return this;var i=this.handlers;return ia(ma(e),(function(e){t?i[e]&&i[e].splice(ba(i[e],t),1):delete i[e]})),this},t.emit=function(e,t){this.options.domEvents&&function(e,t){var i=document.createEvent("Event");i.initEvent(e,!0,!0),i.gesture=t,t.target.dispatchEvent(i)}(e,t);var i=this.handlers[e]&&this.handlers[e].slice();if(i&&i.length){t.type=e,t.preventDefault=function(){t.srcEvent.preventDefault()};for(var o=0;o<i.length;)i[o](t),o++}},t.destroy=function(){this.element&&en(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},e}(),on={touchstart:Uo,touchmove:2,touchend:Wo,touchcancel:Fo},an=function(e){function t(){var i,o=t.prototype;return o.evTarget="touchstart",o.evWin="touchstart touchmove touchend touchcancel",(i=e.apply(this,arguments)||this).started=!1,i}return go(t,e),t.prototype.handler=function(e){var t=on[e.type];if(t===Uo&&(this.started=!0),this.started){var i=nn.call(this,e,t);t&(Wo|Fo)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,t,{pointers:i[0],changedPointers:i[1],pointerType:Io,srcEvent:e})}},t}(ya);function nn(e,t){var i=xa(e.touches),o=xa(e.changedTouches);return t&(Wo|Fo)&&(i=Sa(i.concat(o),"identifier",!0)),[i,o]}function sn(e,t,i){var o="DEPRECATED METHOD: "+t+"\n"+i+" AT \n";return function(){var t=new Error("get-stack-trace"),i=t&&t.stack?t.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",a=window.console&&(window.console.warn||window.console.log);return a&&a.call(window.console,o,i),e.apply(this,arguments)}}var rn=sn((function(e,t,i){for(var o=Object.keys(t),a=0;a<o.length;)(!i||i&&void 0===e[o[a]])&&(e[o[a]]=t[o[a]]),a++;return e}),"extend","Use `assign`."),ln=sn((function(e,t){return rn(e,t,!0)}),"merge","Use `assign`.");function cn(e,t,i){var o,a=t.prototype;(o=e.prototype=Object.create(a)).constructor=e,o._super=a,i&&wo(o,i)}function dn(e,t){return function(){return e.apply(t,arguments)}}(function(){var e=function(e,t){return void 0===t&&(t={}),new tn(e,fo({recognizers:Qa.concat()},t))};return e.VERSION="2.0.17-rc",e.DIRECTION_ALL=Qo,e.DIRECTION_DOWN=Xo,e.DIRECTION_LEFT=qo,e.DIRECTION_RIGHT=Ko,e.DIRECTION_UP=Yo,e.DIRECTION_HORIZONTAL=Go,e.DIRECTION_VERTICAL=Jo,e.DIRECTION_NONE=Zo,e.DIRECTION_DOWN=Xo,e.INPUT_START=Uo,e.INPUT_MOVE=2,e.INPUT_END=Wo,e.INPUT_CANCEL=Fo,e.STATE_POSSIBLE=1,e.STATE_BEGAN=2,e.STATE_CHANGED=4,e.STATE_ENDED=8,e.STATE_RECOGNIZED=8,e.STATE_CANCELLED=16,e.STATE_FAILED=ja,e.Manager=tn,e.Input=ya,e.TouchAction=na,e.TouchInput=Ma,e.MouseInput=Va,e.PointerEventInput=Ca,e.TouchMouseInput=Oa,e.SingleTouchInput=an,e.Recognizer=Ua,e.AttrRecognizer=Fa,e.Tap=Wa,e.Pan=qa,e.Swipe=Ka,e.Pinch=Ya,e.Rotate=Xa,e.Press=Ga,e.on=va,e.off=fa,e.each=ia,e.merge=ln,e.extend=rn,e.bindFn=dn,e.assign=wo,e.inherit=cn,e.bindFn=dn,e.prefixed=So,e.toArray=xa,e.inArray=ba,e.uniqueArray=Sa,e.splitStr=ma,e.boolOrFn=oa,e.hasParent=sa,e.addEventListeners=va,e.removeEventListeners=fa,e.defaults=wo({},Ja,{preset:Qa}),e})().defaults;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const un=270;const hn=new Set(["ArrowRight","ArrowUp","ArrowLeft","ArrowDown","PageUp","PageDown","Home","End"]);let _n=class extends re{constructor(){super(...arguments),this.disabled=!1,this.step=1,this.min=0,this.max=100,this._localValue=this.value,this._localLow=this.low,this._localHigh=this.high,this._getPercentageFromEvent=e=>{const t=this._slider.getBoundingClientRect(),i=2*(e.center.x-t.left-t.width/2)/t.width,o=2*(e.center.y-t.top-t.height/2)/t.height,[,a]=function(e,t){return[Math.sqrt(e*e+t*t),Math.atan2(t,e)]}(i,o),n=(a/(2*Math.PI)*360+45-135+360)%360-45;return Math.max(Math.min(n/un,1),0)}}_valueToPercentage(e){return(Di(e,this.min,this.max)-this.min)/(this.max-this.min)}_percentageToValue(e){return(this.max-this.min)*e+this.min}_steppedValue(e){return Math.round(e/this.step)*this.step}_boundedValue(e){var t,i;const o="high"===this._activeSlider?Math.min(null!==(t=this._localLow)&&void 0!==t?t:this.max):this.min,a="low"===this._activeSlider?Math.max(null!==(i=this._localHigh)&&void 0!==i?i:this.min):this.max;return Math.min(Math.max(e,o),a)}firstUpdated(e){super.firstUpdated(e),this._setupListeners()}updated(e){super.updated(e),this._activeSlider||(e.has("value")&&(this._localValue=this.value),e.has("low")&&(this._localLow=this.low),e.has("high")&&(this._localHigh=this.high))}connectedCallback(){super.connectedCallback(),this._setupListeners()}disconnectedCallback(){super.disconnectedCallback()}_findActiveSlider(e){var t,i;if(!this.dual)return"value";const o=Math.max(null!==(t=this._localLow)&&void 0!==t?t:this.min,this.min),a=Math.min(null!==(i=this._localHigh)&&void 0!==i?i:this.max,this.max);if(o>=e)return"low";if(a<=e)return"high";return Math.abs(e-o)<=Math.abs(e-a)?"low":"high"}_setActiveValue(e){switch(this._activeSlider){case"high":this._localHigh=e;break;case"low":this._localLow=e;break;case"value":this._localValue=e}}_getActiveValue(){switch(this._activeSlider){case"high":return this._localHigh;case"low":return this._localLow;case"value":return this._localValue}}_setupListeners(){this._interaction&&!this._mc&&(this._mc=new tn(this._interaction,{inputClass:Oa}),this._mc.add(new qa({direction:Qo,enable:!0,threshold:0})),this._mc.add(new Wa({event:"singletap"})),this._mc.on("pan",(e=>{e.srcEvent.stopPropagation(),e.srcEvent.preventDefault()})),this._mc.on("panstart",(e=>{var t,i;if(this.disabled)return;const o=this._getPercentageFromEvent(e),a=this._percentageToValue(o);this._activeSlider=this._findActiveSlider(a),this._lastSlider=this._activeSlider,null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("#slider"))||void 0===i||i.focus()})),this._mc.on("pancancel",(()=>{this.disabled||(this._activeSlider=void 0)})),this._mc.on("panmove",(e=>{if(this.disabled)return;const t=this._getPercentageFromEvent(e),i=this._percentageToValue(t),o=this._boundedValue(i);this._setActiveValue(o);const a=this._steppedValue(o);this._activeSlider&&Pi(this,`${this._activeSlider}-changing`,{value:a})})),this._mc.on("panend",(e=>{if(this.disabled)return;const t=this._getPercentageFromEvent(e),i=this._percentageToValue(t),o=this._boundedValue(i),a=this._steppedValue(o);this._setActiveValue(a),this._activeSlider&&(Pi(this,`${this._activeSlider}-changing`,{value:void 0}),Pi(this,`${this._activeSlider}-changed`,{value:a})),this._activeSlider=void 0})),this._mc.on("singletap",(e=>{var t,i;if(this.disabled)return;const o=this._getPercentageFromEvent(e),a=this._percentageToValue(o);this._activeSlider=this._findActiveSlider(a);const n=this._boundedValue(a),s=this._steppedValue(n);this._setActiveValue(s),this._activeSlider&&(Pi(this,`${this._activeSlider}-changing`,{value:void 0}),Pi(this,`${this._activeSlider}-changed`,{value:s})),this._lastSlider=this._activeSlider,null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("#slider"))||void 0===i||i.focus(),this._activeSlider=void 0})))}get _tenPercentStep(){return Math.max(this.step,(this.max-this.min)/10)}_handleKeyDown(e){var t,i,o;if(!hn.has(e.code))return;e.preventDefault(),this._lastSlider&&(null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById(this._lastSlider))||void 0===i||i.focus()),this._activeSlider=null!==(o=this._lastSlider)&&void 0!==o?o:e.currentTarget.id,this._lastSlider=void 0;const a=this._getActiveValue();switch(e.code){case"ArrowRight":case"ArrowUp":this._setActiveValue(this._boundedValue((null!=a?a:this.min)+this.step));break;case"ArrowLeft":case"ArrowDown":this._setActiveValue(this._boundedValue((null!=a?a:this.min)-this.step));break;case"PageUp":this._setActiveValue(this._steppedValue(this._boundedValue((null!=a?a:this.min)+this._tenPercentStep)));break;case"PageDown":this._setActiveValue(this._steppedValue(this._boundedValue((null!=a?a:this.min)-this._tenPercentStep)));break;case"Home":this._setActiveValue(this._boundedValue(this.min));break;case"End":this._setActiveValue(this._boundedValue(this.max))}Pi(this,`${this._activeSlider}-changing`,{value:this._getActiveValue()}),this._activeSlider=void 0}_handleKeyUp(e){hn.has(e.code)&&(this._activeSlider=e.currentTarget.id,e.preventDefault(),Pi(this,`${this._activeSlider}-changing`,{value:void 0}),Pi(this,`${this._activeSlider}-changed`,{value:this._getActiveValue()}),this._activeSlider=void 0)}destroyListeners(){this._mc&&(this._mc.destroy(),this._mc=void 0)}_strokeCircleDashArc(e){return this._strokeDashArc(e,e)}_strokeDashArc(e,t){const i=this._valueToPercentage(e),o=this._valueToPercentage(t),a=290*Math.PI*un/360,n=Math.max((o-i)*a,0);return[`${n} ${a-n}`,`-${i*a-.5}`]}renderArc(e,t,i){var o,a;if(this.disabled)return Z;const n=vo({x:0,y:0,start:0,end:un,r:145}),s="end"===i?this.max:this.min,r=null!==(o=this.current)&&void 0!==o?o:s,l=null!=t?t:s,c="end"===i?l<=r:"start"===i&&r<=l,d=c?"end"===i?this._strokeDashArc(l,r):this._strokeDashArc(r,l):this._strokeCircleDashArc(l),u="full"===i?this._strokeDashArc(this.min,this.max):"end"===i?this._strokeDashArc(l,s):this._strokeDashArc(s,l),h=this._strokeCircleDashArc(l),_=null!=this.current&&this.current<=this.max&&this.current>=this.min&&(c||"full"===this.mode)?this._strokeCircleDashArc(this.current):void 0;return W`
        <g class=${ge({inactive:Boolean(this.inactive)})}>
          <path
            class="arc arc-clear"
            d=${n}
            stroke-dasharray=${u[0]}
            stroke-dashoffset=${u[1]}
          />
          <path
            class="arc arc-colored ${ge({[e]:!0})}"
            d=${n}
            stroke-dasharray=${u[0]}
            stroke-dashoffset=${u[1]}
          />
          <path
            .id=${e}
            d=${n}
            class="arc arc-active ${ge({[e]:!0})}"
            stroke-dasharray=${d[0]}
            stroke-dashoffset=${d[1]}
            role="slider"
            tabindex="0"
            aria-valuemin=${this.min}
            aria-valuemax=${this.max}
            aria-valuenow=${null!=this._localValue?this._steppedValue(this._localValue):void 0}
            aria-disabled=${this.disabled}
            aria-label=${(e=>e??Z)(null!==(a=this.lowLabel)&&void 0!==a?a:this.label)}
            @keydown=${this._handleKeyDown}
            @keyup=${this._handleKeyUp}
          />
          ${_?W`
                <path
                  class="current arc-current"
                  d=${n}
                  stroke-dasharray=${_[0]}
                  stroke-dashoffset=${_[1]}
                />
            `:Z}
          <path
            class="target-border ${ge({[e]:!0})}"
            d=${n}
            stroke-dasharray=${h[0]}
            stroke-dashoffset=${h[1]}
          />
          <path
            class="target"
            d=${n}
            stroke-dasharray=${h[0]}
            stroke-dashoffset=${h[1]}
          />
        </g>
      `}render(){const e=vo({x:0,y:0,start:0,end:un,r:145}),t=this.dual?this._localLow:this._localValue,i=this._localHigh,o=this.current,a=o?this._strokeCircleDashArc(o):void 0;return U`
        <svg
          id="slider"
          viewBox="0 0 320 320"
          overflow="visible"
          class=${ge({pressed:Boolean(this._activeSlider)})}
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
              ${a?W`
                    <path
                      class="current"
                      d=${e}
                      stroke-dasharray=${a[0]}
                      stroke-dashoffset=${a[1]}
                    />
                  `:Z}
              ${null!=t?this.renderArc(this.dual?"low":"value",t,!this.dual&&this.mode||"start"):Z}
              ${this.dual&&null!=i?this.renderArc("high",i,"end"):Z}
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
      `}};e([he({type:Boolean,reflect:!0})],_n.prototype,"disabled",void 0),e([he({type:Boolean})],_n.prototype,"dual",void 0),e([he({type:String})],_n.prototype,"mode",void 0),e([he({type:Boolean})],_n.prototype,"inactive",void 0),e([he({type:String})],_n.prototype,"label",void 0),e([he({type:String,attribute:"low-label"})],_n.prototype,"lowLabel",void 0),e([he({type:String,attribute:"high-label"})],_n.prototype,"highLabel",void 0),e([he({type:Number})],_n.prototype,"value",void 0),e([he({type:Number})],_n.prototype,"low",void 0),e([he({type:Number})],_n.prototype,"high",void 0),e([he({type:Number})],_n.prototype,"current",void 0),e([he({type:Number})],_n.prototype,"step",void 0),e([he({type:Number})],_n.prototype,"min",void 0),e([he({type:Number})],_n.prototype,"max",void 0),e([_e()],_n.prototype,"_localValue",void 0),e([_e()],_n.prototype,"_localLow",void 0),e([_e()],_n.prototype,"_localHigh",void 0),e([_e()],_n.prototype,"_activeSlider",void 0),e([_e()],_n.prototype,"_lastSlider",void 0),e([me("#slider")],_n.prototype,"_slider",void 0),e([me("#interaction")],_n.prototype,"_interaction",void 0),_n=e([ce("vt-ha-control-circular-slider")],_n);const pn={auto:"M18,11V12.5C21.19,12.5 23.09,16.05 21.33,18.71L20.24,17.62C21.06,15.96 19.85,14 18,14V15.5L15.75,13.25L18,11M18,22V20.5C14.81,20.5 12.91,16.95 14.67,14.29L15.76,15.38C14.94,17.04 16.15,19 18,19V17.5L20.25,19.75L18,22M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H14C13.36,20.45 12.86,19.77 12.5,19H5V8H19V10.59C19.71,10.7 20.39,10.94 21,11.31V5A2,2 0 0,0 19,3Z",heat_cool:"M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z",heat:"M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z",cool:"M20.79,13.95L18.46,14.57L16.46,13.44V10.56L18.46,9.43L20.79,10.05L21.31,8.12L19.54,7.65L20,5.88L18.07,5.36L17.45,7.69L15.45,8.82L13,7.38V5.12L14.71,3.41L13.29,2L12,3.29L10.71,2L9.29,3.41L11,5.12V7.38L8.5,8.82L6.5,7.69L5.92,5.36L4,5.88L4.47,7.65L2.7,8.12L3.22,10.05L5.55,9.43L7.55,10.56V13.45L5.55,14.58L3.22,13.96L2.7,15.89L4.47,16.36L4,18.12L5.93,18.64L6.55,16.31L8.55,15.18L11,16.62V18.88L9.29,20.59L10.71,22L12,20.71L13.29,22L14.7,20.59L13,18.88V16.62L15.5,15.17L17.5,16.3L18.12,18.63L20,18.12L19.53,16.35L21.3,15.88L20.79,13.95M9.5,10.56L12,9.11L14.5,10.56V13.44L12,14.89L9.5,13.44V10.56Z",off:"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13",fan_only:ke,dry:Ee,window_open:Te,windowBypass:Ve,presence:Ae,motion:Se,eco:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z",comfort:"M12.5 7C12.5 5.89 13.39 5 14.5 5H18C19.1 5 20 5.9 20 7V9.16C18.84 9.57 18 10.67 18 11.97V14H12.5V7M6 11.96V14H11.5V7C11.5 5.89 10.61 5 9.5 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96M20.66 10.03C19.68 10.19 19 11.12 19 12.12V15H5V12C5 10.9 4.11 10 3 10S1 10.9 1 12V17C1 18.1 1.9 19 3 19V21H5V19H19V21H21V19C22.1 19 23 18.1 23 17V12C23 10.79 21.91 9.82 20.66 10.03Z",boost:"M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z",frost:"M14.46 9.41L11 7.38V5.12L12.71 3.41L11.29 2L10 3.29L8.71 2L7.29 3.41L9 5.12V7.38L6.5 8.82L4.5 7.69L3.92 5.36L2 5.88L2.47 7.65L.7 8.12L1.22 10.05L3.55 9.43L5.55 10.56V13.45L3.55 14.58L1.22 13.96L.7 15.89L2.47 16.36L2 18.12L3.93 18.64L4.55 16.31L6.55 15.18L9 16.62V18.88L7.29 20.59L8.71 22L10 20.71L11.29 22L12.7 20.59L11 18.88V16.62L14.46 14.61M7.5 10.56L10 9.11L12.5 10.56V13.44L10 14.89L7.5 13.44M19 5C17.89 5 17 5.89 17 7V13.76C16.36 14.33 16 15.15 16 16C16 17.66 17.34 19 19 19S22 17.66 22 16C22 15.15 21.64 14.33 21 13.77V7C21 5.89 20.11 5 19 5M19 6C19.55 6 20 6.45 20 7V8H18V7C18 6.45 18.45 6 19 6",activity:Se,power:"M12 3L2 12H5V20H19V12H22L12 3M11.5 18V14H9L12.5 7V11H15L11.5 18Z",flashAlert:$e,temperature:"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",humidity:Ee,ok:ye,thermometerAlert:Me,none:"M23 17C23 20.31 20.31 23 17 23V21.5C19.5 21.5 21.5 19.5 21.5 17H23M1 7C1 3.69 3.69 1 7 1V2.5C4.5 2.5 2.5 4.5 2.5 7H1M8 4.32L3.41 8.92C.19 12.14 .19 17.37 3.41 20.59S11.86 23.81 15.08 20.59L22.15 13.5C22.64 13.03 22.64 12.24 22.15 11.75C21.66 11.26 20.87 11.26 20.38 11.75L15.96 16.17L15.25 15.46L21.79 8.92C22.28 8.43 22.28 7.64 21.79 7.15S20.5 6.66 20 7.15L14.19 13L13.5 12.27L20.37 5.38C20.86 4.89 20.86 4.1 20.37 3.61S19.09 3.12 18.6 3.61L11.71 10.5L11 9.8L16.5 4.32C17 3.83 17 3.04 16.5 2.55S15.22 2.06 14.73 2.55L7.11 10.17C8.33 11.74 8.22 14 6.78 15.45L6.07 14.74C7.24 13.57 7.24 11.67 6.07 10.5L5.72 10.15L9.79 6.08C10.28 5.59 10.28 4.8 9.79 4.31C9.29 3.83 8.5 3.83 8 4.32Z",auto_regulation_mode:xe,power_percent:xe,mean_power_cycle:"M7,2V13H10V22L17,10H13L17,2H7Z",valve_open_percent:"M22 13V21H20V19H16.58C15.81 20.76 14.05 22 12 22S8.19 20.76 7.42 19H4V21H2V13H4V15H7.43C7.93 13.85 8.85 12.93 10 12.42V11H8V9H16V11H14V12.42C15.15 12.93 16.07 13.85 16.57 15H20V13H22M17 2H7C6.45 2 6 2.45 6 3S6.45 4 7 4H10V5H11V8H13V5H14V4H17C17.55 4 18 3.55 18 3S17.55 2 17 2Z",regulated_target_temperature:"M12 14C11.7 13.6 11.4 13.3 11 13V5C11 3.3 9.7 2 8 2S5 3.3 5 5V13C2.8 14.7 2.3 17.8 4 20S8.8 22.7 11 21 13.7 16.2 12 14M9 8H7V5C7 4.5 7.5 4 8 4S9 4.5 9 5V8M18 3H16L12.8 12H14.7L15.4 10H18.6L19.3 12H21.2L18 3M15.8 8.7L17 5L18.2 8.7H15.8Z",auto_fan_mode:"M12.5 2C8.93 2 8.14 5.96 10.13 9.65C9.72 9.97 9.4 10.39 9.21 10.87C8.28 10.68 7.23 10.25 6.73 9.26C5.56 6.89 2 7 2 11.5C2 15.07 5.95 15.85 9.64 13.87C9.96 14.27 10.39 14.59 10.88 14.79C10.68 15.71 10.24 16.75 9.26 17.24C6.9 18.42 7 22 11.5 22C12.31 22 13 21.78 13.5 21.41C13.19 20.67 13 19.86 13 19C13 17.59 13.5 16.3 14.3 15.28C14.17 14.97 14.03 14.65 13.86 14.34C14.26 14 14.57 13.59 14.77 13.11C15.26 13.21 15.78 13.39 16.25 13.67C17.07 13.25 18 13 19 13C20.05 13 21.03 13.27 21.89 13.74C21.95 13.37 22 12.96 22 12.5C22 8.92 18.03 8.13 14.33 10.13C14 9.73 13.59 9.42 13.11 9.22C13.3 8.29 13.74 7.24 14.73 6.75C17.09 5.57 17 2 12.5 2M12 11C12.54 11 13 11.45 13 12C13 12.55 12.54 13 12 13C11.43 13 11 12.55 11 12C11 11.45 11.43 11 12 11M18 15C16.89 15 16 15.9 16 17V23H18V21H20V23H22V17C22 15.9 21.1 15 20 15M18 17H20V19H18Z",auto_fan_mode_off:"M12.5,2C9.64,2 8.57,4.55 9.29,7.47L15,13.16C15.87,13.37 16.81,13.81 17.28,14.73C18.46,17.1 22.03,17 22.03,12.5C22.03,8.92 18.05,8.13 14.35,10.13C14.03,9.73 13.61,9.42 13.13,9.22C13.32,8.29 13.76,7.24 14.75,6.75C17.11,5.57 17,2 12.5,2M3.28,4L2,5.27L4.47,7.73C3.22,7.74 2,8.87 2,11.5C2,15.07 5.96,15.85 9.65,13.87C9.97,14.27 10.4,14.59 10.89,14.79C10.69,15.71 10.25,16.75 9.27,17.24C6.91,18.42 7,22 11.5,22C13.8,22 14.94,20.36 14.94,18.21L18.73,22L20,20.72L3.28,4Z",fan_mode:ke,power_sleep:Le,sleep:"M23,12H17V10L20.39,6H17V4H23V6L19.62,10H23V12M15,16H9V14L12.39,10H9V8H15V10L11.62,14H15V16M7,20H1V18L4.39,14H1V12H7V14L3.62,18H7V20Z"},mn="none",vn="off",fn="sleep",gn="auto_fan_none",yn="cooling",bn="heating",wn={auto_fan_none:"None",auto_fan_low:"Low",auto_fan_mid:"Medium",auto_fan_high:"High",auto_fan_turbo:"Turbo"};function kn(e){const t=window;t.customCards=t.customCards||[],t.customCards.push(Object.assign(Object.assign({},e),{preview:!0}))}function $n(e){const t=(new Date).getTime()-e.getTime();return Math.floor(t/6e4)}function An(e,t){const i=Math.round(e*t)/t;return parseFloat(i.toFixed(t))}console.info("%c  VersatileThermostatUI-CARD \n%c  version: 2.2.1    ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),kn({type:"versatile-thermostat-ui-card",name:"Versatile Thermostat Climate Card",description:"Card for climate entity"});let Cn=class extends re{_highChanged(e){if(this.isUserLocked)return;const t=e.detail.value;if(isNaN(t))return;const i=e.type.replace("-changed","");this.value=Object.assign(Object.assign({},this.value),{[i]:t}),this._selectTargetTemperature=i,this._callService(i)}_highChanging(e){if(this.isUserLocked)return;const t=e.detail.value;if(isNaN(t))return;const i=e.type.replace("-changing","");this.value=Object.assign(Object.assign({},this.value),{[i]:t}),this._selectTargetTemperature=i,this._updateDisplay(),this._vibrate(20)}_callService(e){this.isUserLocked||("high"!==e&&"low"!==e?this.hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,temperature:this.value.value}):this.hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,target_temp_low:this.value.low,target_temp_high:this.value.high}))}_handleButton(e){var t;if(this.isUserLocked)return;const i=e.currentTarget.target,o=e.currentTarget.step,a="high"===i?this.max:this.min;let n=null!==(t=this.value[i])&&void 0!==t?t:a;n+=o,n=Di(n,this.min,this.max),"high"===i&&null!=this.value.low&&(n=Di(n,this.value.low,this.max)),"low"===i&&null!=this.value.high&&(n=Di(n,this.min,this.value.high)),this.value=Object.assign(Object.assign({},this.value),{[i]:n}),this._updateDisplay(),this._vibrate(40),this._debouncedCallService(i)}_handleSelectTemp(e){if(this.isUserLocked)return;const t=e.currentTarget.target;this._selectTargetTemperature=t,this._updateDisplay(),this._vibrate(40)}setConfig(e){this._config=Object.assign({tap_action:{action:"toggle"},hold_action:{action:"more-info"}},e)}getCardSize(){return 1}_vibrate(e){try{navigator.vibrate(e)}catch(e){}}firstUpdated(e){this._init=!1}shouldUpdate(e){return void 0!==e.has("_config")&&void 0!==e.get("_config")&&(this._hasOverpowering=!1,this._hasWindow=!1,this._hasWindowByPass=!1,this._hasMotion=!1,this._hasPresence=!1,this._hasAutoStartStop=!1,this._isAutoStartStopEnabled=!1,this.humidity=0),void 0!==e.get("hass")&&(this._init=!1),!0}updated(e){var t,i;super.updated(e),this._firstRender=!1,e.has("showDigicodeModal")&&(this.showDigicodeModal?window.addEventListener("keydown",this._handleKeyDown):window.removeEventListener("keydown",this._handleKeyDown)),null===(i=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.querySelector(".security"))||void 0===i||i.addEventListener("click",(()=>{var e,t,i,o;null===(t=null===(e=null==this?void 0:this.shadowRoot)||void 0===e?void 0:e.querySelector(".security"))||void 0===t||t.remove(),null===(o=null===(i=null==this?void 0:this.shadowRoot)||void 0===i?void 0:i.querySelector(".content"))||void 0===o||o.classList.remove("security_msg"),this._vibrate(2)}))}_willUpdatePower(){let e,t,i;this._externalPowerInfos=[],this._config.powerEntity&&(e=this.hass.states[this._config.powerEntity],t=Number(e.state),i=e.attributes.unit_of_measurement),t&&this._externalPowerInfos.push({name:"mean_power_cycle",value:t,unit:i,class:"vt-power-color"})}willUpdate(e){var t,i,o,a,n,s,r,l,c,d,u,h,_,p,m,v,f,g,y,b,w,k,$,A,C,x,S,L,M,E,T,V,z,H,P,D,O,N,j,I,R,B,U,W,F,Z,q,K,Y,X,G,J;if(!this.hass||!this._config||!e.has("hass")&&!e.has("_config"))return;const Q=this._config.entity;this._willUpdatePower();const ee=this.hass.states[Q];if(!ee)return;const te=e.get("hass");if(!te||te.states[Q]!==ee){if(!this._config||!this.hass||!this._config.entity)return;this.stateObj=ee;const e=this.stateObj.attributes,Q=this.stateObj.state;this._isLockConfigured=!0===(null==e?void 0:e.is_lock_configured),(null==e?void 0:e.lock_manager)&&(this._isLocked=(null===(t=null==e?void 0:e.lock_manager)||void 0===t?void 0:t.is_locked)||!1),this.isUserLocked=this._isLocked&&(!this._isLockConfigured||(null===(i=null==e?void 0:e.lock_manager)||void 0===i?void 0:i.lock_users)||!1),this.isAutomationLocked=this._isLocked&&((null===(o=null==e?void 0:e.lock_manager)||void 0===o?void 0:o.lock_automations)||!1),this._hasLockCode=!0===(null===(a=null==e?void 0:e.lock_manager)||void 0===a?void 0:a.lock_code),this.name="",this.hvacMode=Q||vn,this.hvacAction=null==e?void 0:e.hvac_action,this.preset=null==e?void 0:e.preset_mode,this.modes=(null==e?void 0:e.hvac_modes)?Object.values(e.hvac_modes):[],this.presets=e.preset_modes?Object.values(e.preset_modes):[],this.isSleeping=!0===(null===(n=null==e?void 0:e.specific_states)||void 0===n?void 0:n.is_sleeping),this.powerPercent=(null===(s=null==e?void 0:e.vtherm_over_switch)||void 0===s?void 0:s.power_percent)||(null===(l=null===(r=null==e?void 0:e.vtherm_over_climate)||void 0===r?void 0:r.valve_regulation)||void 0===l?void 0:l.power_percent)||0,void 0===(null===(c=null==e?void 0:e.specific_states)||void 0===c?void 0:c.is_device_active)?this.isDeviceActive=this.hvacAction==bn||this.hvacAction==yn:this.isDeviceActive=!0===(null===(d=null==e?void 0:e.specific_states)||void 0===d?void 0:d.is_device_active),this.temperature=null==e?void 0:e.temperature,this.step=(null===(u=null==e?void 0:e.configuration)||void 0===u?void 0:u.target_temperature_step)||.5,this.min=(null==e?void 0:e.min_temp)||7,this.max=(null==e?void 0:e.max_temp)||35,this.current=(null==e?void 0:e.current_temperature)||0,this.windowState=null===(h=null==e?void 0:e.window_manager)||void 0===h?void 0:h.window_state,this.windowAutoState=null===(_=null==e?void 0:e.window_manager)||void 0===_?void 0:_.window_auto_state,this.humidity=(null==e?void 0:e.humidity)?parseFloat(e.humidity):0,this.overpoweringState=(null===(p=null==e?void 0:e.power_manager)||void 0===p?void 0:p.overpowering_state)||"off",this.presenceState=(null===(m=null==e?void 0:e.presence_manager)||void 0===m?void 0:m.presence_state)||"off",this.motionState=(null===(v=null==e?void 0:e.motion_manager)||void 0===v?void 0:v.motion_state)||"off",this._hasWindowByPass=!0===(null===(f=null==e?void 0:e.window_manager)||void 0===f?void 0:f.is_window_bypass),this.safetyState=(null===(g=null==e?void 0:e.safety_manager)||void 0===g?void 0:g.safety_state)||"off",this.meanCyclePower=(null===(y=null==e?void 0:e.power_manager)||void 0===y?void 0:y.mean_cycle_power)||0,this.valveOpenPercent=(null===(b=null==e?void 0:e.vtherm_over_valve)||void 0===b?void 0:b.valve_open_percent)||(null===(k=null===(w=null==e?void 0:e.vtherm_over_climate_valve)||void 0===w?void 0:w.valve_regulation)||void 0===k?void 0:k.valve_open_percent)||0,this.devicePower=(null===($=null==e?void 0:e.power_manager)||void 0===$?void 0:$.device_power)||0,this.isRegulated=!0===(null===(A=null==e?void 0:e.vtherm_over_climate)||void 0===A?void 0:A.is_regulated),this.regulatedTargetTemperature=(null===(x=null===(C=null==e?void 0:e.vtherm_over_climate)||void 0===C?void 0:C.regulation)||void 0===x?void 0:x.regulated_target_temperature)||null,this.autoRegulationMode=(null===(L=null===(S=null==e?void 0:e.vtherm_over_climate)||void 0===S?void 0:S.regulation)||void 0===L?void 0:L.auto_regulation_mode)||null,this.currentAutoFanMode=(null===(M=null==e?void 0:e.vtherm_over_climate)||void 0===M?void 0:M.current_auto_fan_mode)||null,this.autoFanMode=(null===(E=null==e?void 0:e.vtherm_over_climate)||void 0===E?void 0:E.auto_fan_mode)||null,this.fanMode=(null==e?void 0:e.fan_mode)||null,this.hvacOffReason=(null===(T=null==e?void 0:e.specific_states)||void 0===T?void 0:T.hvac_off_reason)||null,this.isRecalculateScheduled=(null===(V=null==e?void 0:e.specific_states)||void 0===V?void 0:V.is_recalculate_scheduled)||null,this.isOn=!0===(null===(z=null==e?void 0:e.specific_states)||void 0===z?void 0:z.is_on),this.timedPresetActive=!0===(null===(H=null==e?void 0:e.timed_preset_manager)||void 0===H?void 0:H.is_active),this.timedPresetRemainingTime=(null===(P=null==e?void 0:e.timed_preset_manager)||void 0===P?void 0:P.remaining_time_min)||null,this.timedPresetPreset=(null===(D=null==e?void 0:e.timed_preset_manager)||void 0===D?void 0:D.preset)||null;const te=(null===(O=null==e?void 0:e.requested_state)||void 0===O?void 0:O.hvac_mode)||null;let ie=(null===(N=null==e?void 0:e.specific_states)||void 0===N?void 0:N.messages)||[];ie&&!Array.isArray(ie)&&(ie=[ie]);const oe=1==(null===(j=null==e?void 0:e.vtherm_over_climate_valve)||void 0===j?void 0:j.have_valve_regulation);if((null===(I=this._config)||void 0===I?void 0:I.disable_name)||(this.name=this._config.name?this._config.name:e.friendly_name),this.hvacMode==vn&&!0===this.isSleeping&&(this.hvacMode=fn),!0===(null==e?void 0:e.is_over_switch)&&this.powerPercent>0&&(this.hvacAction="heat"==te?bn:yn),this.modes.length>1&&this.modes.includes(vn)&&this.modes.sort(((e,t)=>"off"===e?1:"off"===t?-1:e.localeCompare(t))),this.presets.length>0&&(this.presets=this.presets.filter((e=>e!=mn&&("cool"!=Q||"frost"!=e)))),this.value={value:(null==e?void 0:e.temperature)||0,low:(null==e?void 0:e.target_temp_low)||null,high:(null==e?void 0:e.target_temp_high)||null},"on"===this.windowState||"on"===this.windowAutoState?this._hasWindow=!0:this._hasWindow=!1,"on"===this.overpoweringState?(this._hasOverpowering=!0,this.overpowering=!0):(this._hasOverpowering=!1,this.overpowering=!1),"on"===this.presenceState?(this._hasPresence=!0,this.presence=!0):(this._hasPresence=!1,this.presence=!1),"on"===this.motionState?(this._hasMotion=!0,this.motion=!0):(this._hasMotion=!1,this.motion=!1),"on"!==this.safetyState||(null===(R=null==this?void 0:this._config)||void 0===R?void 0:R.disable_safety_warning))this.safety_state=null;else{if(this.safety_state=[],this.safety_state.push({name:Si({hass:this.hass,string:"extra_states.safety_warning"}),security_msg:Si({hass:this.hass,string:"extra_states.safety_warning_msg"})}),null===(B=e.specific_states)||void 0===B?void 0:B.last_temperature_datetime){let t=$n(new Date(null===(U=e.specific_states)||void 0===U?void 0:U.last_temperature_datetime));t>0&&this.safety_state.push({name:Si({hass:this.hass,string:"extra_states.room_temp"}),security_msg:t+" "+Si({hass:this.hass,string:"extra_states.minutes"})})}if(null===(W=e.specific_states)||void 0===W?void 0:W.last_ext_temperature_datetime){let t=$n(new Date(null===(F=e.specific_states)||void 0===F?void 0:F.last_ext_temperature_datetime));t>0&&this.safety_state.push({name:Si({hass:this.hass,string:"extra_states.outdoor_temp"}),security_msg:t+" "+Si({hass:this.hass,string:"extra_states.minutes"})})}}if(this.messages=[],this._hasError=!1,this.safety_state)for(const e of this.safety_state)this.messages.push(`${e.name}: ${e.security_msg}`),this._hasError=!0;for(const e of ie)this.messages.push(Si({hass:this.hass,string:`extra_states.${e}`}));const ae=null==e?void 0:e.heating_failure_detection_manager,ne="on"===(null==ae?void 0:ae.heating_failure_state),se="on"===(null==ae?void 0:ae.cooling_failure_state);if(ne&&(this.messages.push(Si({hass:this.hass,string:"extra_states.heating_failure"})),this._hasError=!0),se&&(this.messages.push(Si({hass:this.hass,string:"extra_states.cooling_failure"})),this._hasError=!0),this.powerInfos=[],(null===(Z=this._config)||void 0===Z?void 0:Z.disable_power_infos)||!this.isOn&&!oe||((null==e?void 0:e.is_over_switch)&&(this.meanCyclePower&&!(null===(q=this._config)||void 0===q?void 0:q.powerEntity)&&this.powerInfos.push({name:"mean_power_cycle",value:An(this.meanCyclePower,1),unit:this.meanCyclePower<7?"kW":"W",class:"vt-power-color"}),this.powerInfos.push({name:"power_percent",value:this.powerPercent,unit:"%",class:"vt-power-color"})),((null==e?void 0:e.is_over_valve)||oe)&&(this.meanCyclePower&&!(null===(K=this._config)||void 0===K?void 0:K.powerEntity)&&this.powerInfos.push({name:"mean_power_cycle",value:An(this.meanCyclePower,1),unit:this.meanCyclePower<7?"kW":"W",class:"vt-power-color"}),this.powerInfos.push({name:"valve_open_percent",value:this.valveOpenPercent,unit:"%",class:"vt-power-color"})),(null==e?void 0:e.is_over_climate)&&!oe&&(this.devicePower&&!(null===(Y=this._config)||void 0===Y?void 0:Y.powerEntity)&&this.powerInfos.push({name:"mean_power_cycle",value:this.devicePower,unit:this.devicePower<7?"kW":"W",class:"vt-power-color"}),this.isRegulated&&(this.powerInfos.push({name:"regulated_target_temperature",value:this.regulatedTargetTemperature,unit:null===(X=null==e?void 0:e.configuration)||void 0===X?void 0:X.temperature_unit,class:"vt-temp-color"}),this.powerInfos.push({name:"auto_regulation_mode",value:Si({hass:this.hass,string:`extra_states.${this.autoRegulationMode}`}),unit:"",class:"vt-label-color"})))),this.autoFanInfos=[],!(null===(G=null==this?void 0:this._config)||void 0===G?void 0:G.disable_auto_fan_infos)&&(null==e?void 0:e.is_over_climate)&&!oe){const e=this.currentAutoFanMode!=gn?"auto_fan_mode":"auto_fan_mode_off";this.autoFanInfos.push({name:e,value:Si({hass:this.hass,string:`extra_states.${this.currentAutoFanMode}`}),unit:"",class:"vt-label-color"}),this.fanMode&&this.autoFanInfos.push({name:"fan_mode",value:Si({hass:this.hass,string:`extra_states.fan_${this.fanMode}`}),unit:"",class:"vt-label-color"})}this._hasAutoStartStop="hvac_off_auto_start_stop"===this.hvacOffReason,this._isAutoStartStopConfigured=!0===(null==e?void 0:e.is_auto_start_stop_configured),this._isAutoStartStopEnabled=!0===(null===(J=null==e?void 0:e.auto_start_stop_manager)||void 0===J?void 0:J.auto_start_stop_enable),this._updateDisplay()}}_updateDisplay(){var e;(null===(e=null==this?void 0:this._config)||void 0===e?void 0:e.set_current_as_main)?(this._display_bottom=this._getCurrentSetpoint(),this._display_top=this.current):(this._display_bottom=this.current,this._display_top=this._getCurrentSetpoint())}_handleAction(e){this.isUserLocked||(e.currentTarget.mode===fn?this.hass.callService("versatile_thermostat","set_hvac_mode_sleep",{entity_id:this._config.entity}):this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:e.currentTarget.mode}))}_handleDisplayMessages(){this.displayMessages=!this.displayMessages,this.requestUpdate(),this._vibrate(40)}_handlePreset(e){if(this.isUserLocked)return;this.last_target_temperature=this.temperature;const t=e.currentTarget.preset;this.timedPresetDuration&&this.timedPresetDuration>0?(this.hass.callService("versatile_thermostat","set_timed_preset",{entity_id:this._config.entity,preset:t,duration_minutes:this.timedPresetDuration}),this.timedPresetDuration=null):this.hass.callService("climate","set_preset_mode",{entity_id:this._config.entity,preset_mode:t})}_formatRemainingTime(e){if(null===e||e<=0)return"0";if(e<60)return`${e}`;const t=Math.floor(e/60),i=e%60;return 0===i?`${t}h`:`${t}h${i}`}_handleTimedPresetDurationChange(e){const t=e.target,i=t.value?parseInt(t.value,10):null;this.timedPresetDuration=i&&i>0?i:null}_handleTimedPresetSelectChange(e){const t=e.target,i=t.value?parseInt(t.value,10):null;this.timedPresetDuration=i&&i>0?i:null}_handleCancelTimedPreset(){this.isUserLocked||(console.info("VersatileThermostatUI-CARD canceling timed preset"),this.hass.callService("versatile_thermostat","cancel_timed_preset",{entity_id:this._config.entity}))}_handleClickAutoFanInfo(){if(this.isUserLocked)return;let e=gn;this.currentAutoFanMode==gn&&(e=this.autoFanMode);const t=wn[e];console.info(`VersatileThermostatUI-CARD changing auto_fan_mode to ${e} (mapped=$${t}`),this.hass.callService("versatile_thermostat","set_auto_fan_mode",{entity_id:this._config.entity,auto_fan_mode:t})}_handleClickAutoStartStopEnable(){if(this.isUserLocked)return;let e=!this._isAutoStartStopEnabled;console.info(`VersatileThermostatUI-CARD changing auto_start_stop_enable to ${e}`),this.hass.callService("switch","toggle",{entity_id:this._config.autoStartStopEnableEntity})}_handleToggleWindowByPass(){if(this.isUserLocked)return;let e=!this._hasWindowByPass;console.info(`VersatileThermostatUI-CARD changing windowByPass to ${e}`),this.hass.callService("versatile_thermostat","set_window_bypass",{entity_id:this._config.entity,window_bypass:e})}_getCurrentSetpoint(){var e,t,i,o,a,n,s,r;return null!==(null===(e=null==this?void 0:this.value)||void 0===e?void 0:e.high)&&null!==(null===(t=null==this?void 0:this.value)||void 0===t?void 0:t.low)?((null===(i=null==this?void 0:this.value)||void 0===i?void 0:i.low)||0)>=this.current?(null===(o=null==this?void 0:this.value)||void 0===o?void 0:o.low)||0:((null===(a=null==this?void 0:this.value)||void 0===a?void 0:a.high)||0)<=this.current?(null===(n=null==this?void 0:this.value)||void 0===n?void 0:n.high)||0:(null===(s=null==this?void 0:this.value)||void 0===s?void 0:s.low)||0:(null===(r=null==this?void 0:this.value)||void 0===r?void 0:r.value)||0}_renderHVACAction(){return"heating"===this.hvacAction||"heat"==this.hvacMode||"heat_cool"==this.hvacMode?W`<path class="status ${this.isDeviceActive?"active":""}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${"M8.5 4.5L5.4 9.5L8.5 14.7L5.2 20.5L3.4 19.6L6.1 14.7L3 9.5L6.7 3.6L8.5 4.5M14.7 4.4L11.6 9.5L14.7 14.5L11.4 20.3L9.6 19.4L12.3 14.5L9.2 9.5L12.9 3.5L14.7 4.4M21 4.4L17.9 9.5L21 14.5L17.7 20.3L15.9 19.4L18.6 14.5L15.5 9.5L19.2 3.5L21 4.4"}" />`:"cooling"===this.hvacAction||"cool"==this.hvacMode?W`<path class="status cooler ${this.isDeviceActive?"active":""}"  transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${ye}" />`:W`<path class="status" transform="translate(5,-4) scale(0.25)" fill="#9d9d9d"  d="${we}" />`}_renderIcon(e,t){if(!pn[e])return U``;const i=this.hass.localize(`component.climate.state._.${e}`)||Si({hass:this.hass,string:`extra_states.${e}`});return U`
      <ha-icon-button
        title="${t===e?e:""}"
        class=${ge({"selected-icon":t===e})}
        .mode=${e}
        @click=${this._handleAction}
        tabindex="0"
        .path=${pn[e]}
        .label=${i}
      >
      </ha-icon-button>
    `}_renderMessagesButton(){const e=Si({hass:this.hass,string:"extra_states.messages-button"});return U`
      <ha-icon-button
        title="${e}"
        class="messages-button ${this._hasError?"error":""}"
        @click=${this._handleDisplayMessages}
        tabindex="0"
        .path=${this._hasError?be:Ce}
        .label=${e}
      >
      </ha-icon-button>
    `}_renderRecalculateScheduledButton(){const e=Si({hass:this.hass,string:"extra_states.recalculation_scheduled"});return U`
      <ha-icon-button
        title="${e}"
        class="messages-button"
        tabindex="0"
        .path=${"M21,10.12H14.22L16.96,7.3C14.23,4.6 9.81,4.5 7.08,7.2C4.35,9.91 4.35,14.28 7.08,17C9.81,19.7 14.23,19.7 16.96,17C18.32,15.65 19,14.08 19,12.1H21C21,14.08 20.12,16.65 18.36,18.39C14.85,21.87 9.15,21.87 5.64,18.39C2.14,14.92 2.11,9.28 5.62,5.81C9.13,2.34 14.76,2.34 18.27,5.81L21,3V10.12M12.5,8V12.25L16,14.33L15.28,15.54L11,13V8H12.5Z"}
        .label=${e}
      >
      </ha-icon-button>
    `}_renderWindowByPassButton(){const e=Si({hass:this.hass,string:"extra_states.window-bypass-button"});return U`
      <ha-icon-button
        title="${e}"
        class="window-bypass-button"
        @click=${this._handleToggleWindowByPass}
        tabindex="0"
        .path=${Ve}
        .label=${e}
      >
      </ha-icon-button>
    `}_renderPreset(e,t){const i=(this.hass.localize(`component.climate.state._.${e}`)||Si({hass:this.hass,string:`extra_states.${e}`}))+"\n"+Si({hass:this.hass,string:"extra_states.change_message"});return U`
      <div class="preset-label">
          <ha-icon-button
            title="${t===e?e:""}"
            class=${ge({"selected-icon":t===e})}
            .preset=${e}
            @click=${this._handlePreset}
            tabindex="0"
            .path=${pn[e]}
            .label=${i}
          >
        </ha-icon-button>
      </div>
    `}_renderPowerInfo(e){const t=this.hass.localize(`component.climate.state._.${e.name}`)||Si({hass:this.hass,string:`extra_states.${e.name}`});return U`
      <div class="left-info-label">
        <span>
          <ha-icon-button
            title="${t}"
            class=${e.class} 
            .name=${e.name}
            tabindex="0"
            .path=${pn[e.name]}
            .label=${t}
          >
        </ha-icon-button>
        </span>
        <span>${e.value} ${e.unit}</span>
      </div>
    `}_renderAutoFanInfo(e){const t=(this.hass.localize(`component.climate.state._.${e.name}`)||Si({hass:this.hass,string:`extra_states.${e.name}`}))+"\n"+Si({hass:this.hass,string:"extra_states.toggle_message"});return U`
      <div class="left-info-label">
        <span>
          <ha-icon-button
            title="${t}"
            class=${e.class} 
            .name=${e.name}
            @click=${this._handleClickAutoFanInfo}
            tabindex="0"
            .path=${pn[e.name]}
            .label=${t}
          >
        </ha-icon-button>
        </span>
        <span>${e.value} ${e.unit}</span>
      </div>
    `}_renderAutoStartStopEnable(){const e=Si({hass:this.hass,string:"extra_states.auto_start_stop_enable"}),t=Si({hass:this.hass,string:"extra_states.auto_start_stop_label"});return this._isAutoStartStopEnabled,U`
      <div class="left-info-label" title="${e}">
        <span>
          <input type="checkbox" .checked=${this._isAutoStartStopEnabled} class="auto-start-stop-enable" @click=${this._handleClickAutoStartStopEnable} .label="${e}" name="auto-start-stop-enable">
        </span>
        <span>${t}</span>
      </div>
    `}_handleMoreInfo(){Pi(this,"hass-more-info",{entityId:this._config.entity})}_handleLockToggle(){var e,t;if((null===(e=this._config)||void 0===e?void 0:e.allow_lock_toggle)&&(null===(t=this._config)||void 0===t?void 0:t.entity)&&this.hass&&this.stateObj)if(this._isLocked){if(this._hasLockCode)return this.isLocking=!1,this.showDigicodeModal=!0,void(this.enteredCode="");this._isLockConfigured?this.hass.callService("versatile_thermostat","unlock",{entity_id:this._config.entity}):(this._isLocked=this.isUserLocked=!1,this.requestUpdate())}else{if(this._hasLockCode)return this.isLocking=!0,this.showDigicodeModal=!0,void(this.enteredCode="");this._isLockConfigured?this.hass.callService("versatile_thermostat","lock",{entity_id:this._config.entity}):(this._isLocked=this.isUserLocked=!0,this.requestUpdate())}}_handleKeypadPress(e){this.enteredCode.length<4&&(this.enteredCode+=e,this.codeError=!1,4===this.enteredCode.length&&this._handleValidate())}_handleKeypadClear(){this.enteredCode=this.enteredCode.slice(0,-1),this.codeError=!1}_handleModalClose(){this.showDigicodeModal=!1,this.enteredCode="",this.codeError=!1}async _handleValidate(){if(4===this.enteredCode.length){const e=this.isLocking?"lock":"unlock";try{await this.hass.callService("versatile_thermostat",e,{entity_id:this._config.entity,code:this.enteredCode}),this._handleModalClose()}catch(e){this.codeError=!0,this.enteredCode="",this._vibrate(200)}}else this.codeError=!0,this.enteredCode="",this._vibrate(200)}buildTitle(){var e,t,i;let o="";return this._hasWindow&&!(null===(e=this._config)||void 0===e?void 0:e.disable_window)&&(o+=Si({hass:this.hass,string:"extra_states.window_open"})+"\n"),this._hasWindowByPass&&(o+=Si({hass:this.hass,string:"extra_states.window_bypass"})+"\n"),this._hasOverpowering&&!(null===(t=this._config)||void 0===t?void 0:t.disable_overpowering)&&(o+=Si({hass:this.hass,string:"extra_states.overpowering"})+"\n"),this._hasPresence&&(o+=Si({hass:this.hass,string:"extra_states.presence"})+"\n"),this._hasAutoStartStop&&!(null===(i=this._config)||void 0===i?void 0:i.disable_autoStartStop)&&(o+=Si({hass:this.hass,string:"extra_states.auto_start_stop"})+"\n"),this._hasMotion&&(o+=Si({hass:this.hass,string:"extra_states.motion"})+"\n"),o}_renderTemperature(e,t,i,o,a){var n,s;const r=t?15:6,l=t?-2:-1,c=t?-5.5:-2,d=t?5:3;let u,h=76,_=57,p=.2;return u=e?Oi(e,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1}):this.hass.localize("extra_states.temp_unavailable"),a&&t&&(h=30,_=56,p=.25),W`
      ${a&&!(null===(n=this._config)||void 0===n?void 0:n.disable_target_icon)&&(null===(s=this._config)||void 0===s?void 0:s.disable_circle)?W`
        <path 
          class="main-value" 
          transform="translate(${h}, ${_}) scale(${p})" 
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
    `}constructor(){super(),this.value={},this._selectTargetTemperature="low",this.current=0,this.humidity=0,this.temperature=0,this.min=7,this.max=35,this.step=.5,this.powerPercent=0,this.meanCyclePower=0,this.valveOpenPercent=0,this.devicePower=0,this.regulatedTargetTemperature=null,this.isOn=!1,this.window=!1,this.windowByPass=!1,this.presence=!1,this.motion=!1,this.overpowering=!1,this.isDeviceActive=!1,this.isSleeping=!1,this.isRegulated=!1,this.isRecalculateScheduled=!1,this.windowState="off",this.windowAutoState="off",this.overpoweringState="off",this.presenceState="off",this.motionState="off",this.safetyState="off",this.status="loading",this.hvacMode=vn,this.hvacAction="idle",this.preset=mn,this.autoRegulationMode="",this.currentAutoFanMode=gn,this.autoFanMode=gn,this.fanMode="",this.hvacOffReason="",this.dragging=!1,this.name="",this.target="value",this._debouncedCallService=((e,t,i=!1)=>{let o;const a=(...a)=>{const n=i&&!o;clearTimeout(o),o=window.setTimeout((()=>{o=void 0,i||e(...a)}),t),n&&e(...a)};return a.cancel=()=>{clearTimeout(o)},a})((e=>this._callService(e)),1e3),this._init=!0,this._firstRender=!0,this._ignore=!1,this._hasWindow=!1,this._hasWindowByPass=!1,this._hasPresence=!1,this._hasMotion=!1,this._hasOverpowering=!1,this._hasAutoStartStop=!1,this._isAutoStartStopEnabled=!1,this._isAutoStartStopConfigured=!1,this._isLockConfigured=!1,this._isLocked=!1,this._hasLockCode=!1,this._oldValueMin=0,this._oldValueMax=0,this._display_bottom=0,this._display_top=0,this.modes=[],this.presets=[],this.safety_state={},this.powerInfos=[],this._externalPowerInfos=[],this.autoFanInfos=[],this.messages=[],this.displayMessages=!1,this._hasError=!1,this.isLocked=!1,this.isUserLocked=!1,this.isAutomationLocked=!1,this.showDigicodeModal=!1,this.enteredCode="",this.codeError=!1,this.isLocking=!1,this.timedPresetDuration=null,this.timedPresetActive=!1,this.timedPresetRemainingTime=null,this.timedPresetPreset=null,this._handleKeyDown=e=>{e.key>="0"&&e.key<="9"?this._handleKeypadPress(e.key):"Backspace"===e.key&&this._handleKeypadClear()},this.render=()=>{var e,t,i,o,a,n,s,r,l,c,d,u,h,_,p,m,v,f,g,y,b,w;return U`
   <ha-card class=${ge({[this.hvacMode]:!0,locked:this.isUserLocked})}
   >
    ${(null===(e=this._config)||void 0===e?void 0:e.disable_menu)?"":U`
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

      ${(null===(t=this.safety_state)||void 0===t?void 0:t.length)>0&&!this.displayMessages?U`
        <div class="security">
          <ha-icon-button class="alert" .path=${Me}>
          </ha-icon-button>
          ${U`
            ${this.safety_state.map((e=>U`<span>${e.name}: ${e.security_msg}</span>`))}
           `}
        </div>
      `:""}
      ${this.messages.length>0&&this.displayMessages?U`
        <div class="messages">
          <ha-icon-button class="alert" .path=${this._hasError?be:Ce}>
          </ha-icon-button>
          ${this.messages.map((e=>U`<span>${e}</span>`))}
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
                    <path class="window window-by-pass ${this._hasWindowByPass?"active":""}" id="window-by-pass" d=${Ve}/>
                  </g>
                `:""}
                ${this._hasWindowByPass||!this._hasWindow||(null===(a=this._config)||void 0===a?void 0:a.disable_window)?"":W`
                  <g transform="${this._hasWindow&&!(null===(n=this._config)||void 0===n?void 0:n.disable_window)?"translate(-50.25,0)":""}" @click=${this._handleToggleWindowByPass} class="icon-group">
                    <rect width="24" height="24" fill="transparent" style="cursor: pointer;"/>
                    <path class="window ${this._hasWindow?"active":""}" id="window" d=${Te}/>
                  </g>
                `}
                ${this._hasOverpowering&&!(null===(s=this._config)||void 0===s?void 0:s.disable_overpowering)?W`
                  <path class="overpowering ${this.overpowering?"active":""}" transform="${this._hasOverpowering&&!(null===(r=this._config)||void 0===r?void 0:r.disable_overpowering)?"translate(-25.25,0)":""}" id="overpowering" d=${$e} />
                `:""}
                ${this._hasPresence?W`
                  <path class="presence ${this.presence?"active":""}" transform="${this._hasPresence?"translate(0.25,0)":""}" id="overpowering" d=${Ae} />
                `:""}
                ${this._hasAutoStartStop&&!(null===(l=this._config)||void 0===l?void 0:l.disable_autoStartStop)?W`
                  <path class="auto-start-stop" transform="${this._hasAutoStartStop&&!(null===(c=this._config)||void 0===c?void 0:c.disable_autoStartStop)?"translate(25.25,0)":""}" id="autoStartStop" d=${Le}/>
                `:""}
                ${this._hasMotion?W`
                  <path class="motion ${this.motion?"active":""}" transform="${this._hasMotion?"translate(50.25,0)":""}" id="motion" d=${Se} />
                `:""}
              </g>

              ${(null===(d=this._config)||void 0===d?void 0:d.disable_circle)?W`
                  ${this._renderTemperature(this._display_top,!0,"55","60%",!(null===(u=null==this?void 0:this._config)||void 0===u?void 0:u.set_current_as_main))}
                  ${this._renderTemperature(this._display_bottom,!1,"90","60%",1==(null===(h=null==this?void 0:this._config)||void 0===h?void 0:h.set_current_as_main))}
                  <g class="current-info" transform="translate(100,65)">
                    ${this._renderHVACAction()}
                  </g>
                `:W`
                  ${this._renderTemperature(this._display_top,!0,"50%","60%",!(null===(_=null==this?void 0:this._config)||void 0===_?void 0:_.set_current_as_main))}
                  <line x1="35" y1="72" x2="90" y2="72" stroke="#e7e7e8" stroke-width="0.5" />
                  <g class="current-info" transform="translate(62.5,80)">
                    ${this._renderTemperature(this._display_bottom,!1,"-5%","0%",1==(null===(p=null==this?void 0:this._config)||void 0===p?void 0:p.set_current_as_main))}
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
          ${this.modes.map((e=>{var t,i,o,a,n,s,r,l;return(null===(t=this._config)||void 0===t?void 0:t.disable_heat)&&"heat"===e||(null===(i=this._config)||void 0===i?void 0:i.disable_auto)&&"auto"===e||(null===(o=this._config)||void 0===o?void 0:o.disable_cool)&&"cool"===e||(null===(a=this._config)||void 0===a?void 0:a.disable_heat_cool)&&"heat_cool"===e||(null===(n=this._config)||void 0===n?void 0:n.disable_dry)&&"dry"===e||(null===(s=this._config)||void 0===s?void 0:s.disable_fan_only)&&"fan_only"===e||(null===(r=this._config)||void 0===r?void 0:r.disable_off)&&"off"===e||(null===(l=this._config)||void 0===l?void 0:l.disable_sleep)&&"sleep"===e?U``:this._renderIcon(e,this.hvacMode)}))}
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
          ${this.presets.map((e=>this._renderPreset(e,this.preset)))}
        `}
        ${(null===(f=this._config)||void 0===f?void 0:f.disable_timed_preset)?"":U`
          <div class="timed-preset-container">
            ${this.timedPresetActive?U`
              <span class="timed-preset-remaining" title="${Si({hass:this.hass,string:"extra_states.timed_preset_active"})}">
                ${this._formatRemainingTime(this.timedPresetRemainingTime)}
              </span>
              ${(null!==(g=this.timedPresetRemainingTime)&&void 0!==g?g:0)<60?U`
                <span class="timed-preset-label">${Si({hass:this.hass,string:"extra_states.minutes"})}</span>
              `:""}
              <ha-icon-button
                class="timed-preset-cancel"
                @click=${this._handleCancelTimedPreset}
                title="${Si({hass:this.hass,string:"extra_states.cancel_timed_preset"})}"
                .path=${we}
              ></ha-icon-button>
            `:(null===(y=this._config)||void 0===y?void 0:y.use_manual_duration_input)?U`
              <input
                type="number"
                class="timed-preset-input ${this.timedPresetDuration?"active":""}"
                .value=${null!==(b=this.timedPresetDuration)&&void 0!==b?b:""}
                @input=${this._handleTimedPresetDurationChange}
                placeholder="0"
                min="0"
                max="1440"
                title="${Si({hass:this.hass,string:"extra_states.timed_preset_title"})}"
              />
              <span class="timed-preset-label">${Si({hass:this.hass,string:"extra_states.minutes"})}</span>
            `:U`
              <select
                class="timed-preset-select ${this.timedPresetDuration?"active":""}"
                @change=${this._handleTimedPresetSelectChange}
                title="${Si({hass:this.hass,string:"extra_states.timed_preset_title"})}"
              >
                <option value="" ?selected=${!this.timedPresetDuration}>--</option>
                <option value="15" ?selected=${15===this.timedPresetDuration}>15 ${Si({hass:this.hass,string:"extra_states.minutes"})}</option>
                <option value="30" ?selected=${30===this.timedPresetDuration}>30 ${Si({hass:this.hass,string:"extra_states.minutes"})}</option>
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
          ${this.isLocking?Si({hass:this.hass,string:"extra_states.lock"}):Si({hass:this.hass,string:"extra_states.unlock"})} ${this.name}
        </h2>
        <div class="code-display ${this.codeError?"error":""}">
          <span class="digit ${this.enteredCode.length>0?"filled":""}"></span>
          <span class="digit ${this.enteredCode.length>1?"filled":""}"></span>
          <span class="digit ${this.enteredCode.length>2?"filled":""}"></span>
          <span class="digit ${this.enteredCode.length>3?"filled":""}"></span>
        </div>
        <div class="error-message ${this.codeError?"visible":""}">
          ${Si({hass:this.hass,string:"extra_states.code_error"})}
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
  `}}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleKeyDown)}static async getConfigElement(){return await Promise.resolve().then((function(){return Vn})),document.createElement("versatile-thermostat-ui-card-editor")}static async getStubConfig(e){const t=Object.keys(e.states).filter((e=>["climate"].includes(e.split(".")[0]))),i=t.filter((t=>{var i;return null===(i=e.states[t].attributes)||void 0===i?void 0:i.specific_states}));return{type:"custom:versatile-thermostat-ui-card",entity:i[0]||t[0]}}};Cn.styles=s`
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
  `,e([he({attribute:!1})],Cn.prototype,"hass",void 0),e([he({type:Number})],Cn.prototype,"value",void 0),e([_e()],Cn.prototype,"_selectTargetTemperature",void 0),e([he({type:Number})],Cn.prototype,"current",void 0),e([he({type:Number})],Cn.prototype,"humidity",void 0),e([he({type:Number})],Cn.prototype,"temperature",void 0),e([he({type:Number})],Cn.prototype,"min",void 0),e([he({type:Number})],Cn.prototype,"max",void 0),e([he({type:Number})],Cn.prototype,"step",void 0),e([he({type:Number})],Cn.prototype,"powerPercent",void 0),e([he({type:Number})],Cn.prototype,"meanCyclePower",void 0),e([he({type:Number})],Cn.prototype,"valveOpenPercent",void 0),e([he({type:Number})],Cn.prototype,"devicePower",void 0),e([he({type:Number})],Cn.prototype,"regulatedTargetTemperature",void 0),e([he({type:Boolean})],Cn.prototype,"isOn",void 0),e([he({type:Boolean})],Cn.prototype,"window",void 0),e([he({type:Boolean})],Cn.prototype,"windowByPass",void 0),e([he({type:Boolean})],Cn.prototype,"presence",void 0),e([he({type:Boolean})],Cn.prototype,"motion",void 0),e([he({type:Boolean})],Cn.prototype,"overpowering",void 0),e([he({type:Boolean})],Cn.prototype,"isDeviceActive",void 0),e([he({type:Boolean})],Cn.prototype,"isSleeping",void 0),e([he({type:Boolean})],Cn.prototype,"isRegulated",void 0),e([he({type:Boolean})],Cn.prototype,"isRecalculateScheduled",void 0),e([he({type:String})],Cn.prototype,"windowState",void 0),e([he({type:String})],Cn.prototype,"windowAutoState",void 0),e([he({type:String})],Cn.prototype,"overpoweringState",void 0),e([he({type:String})],Cn.prototype,"presenceState",void 0),e([he({type:String})],Cn.prototype,"motionState",void 0),e([he({type:String})],Cn.prototype,"safetyState",void 0),e([he({type:String})],Cn.prototype,"status",void 0),e([he({type:String})],Cn.prototype,"hvacMode",void 0),e([he({type:String})],Cn.prototype,"hvacAction",void 0),e([he({type:String})],Cn.prototype,"preset",void 0),e([he({type:String})],Cn.prototype,"autoRegulationMode",void 0),e([he({type:String})],Cn.prototype,"currentAutoFanMode",void 0),e([he({type:String})],Cn.prototype,"autoFanMode",void 0),e([he({type:String})],Cn.prototype,"fanMode",void 0),e([he({type:String})],Cn.prototype,"hvacOffReason",void 0),e([he({type:Boolean,reflect:!0})],Cn.prototype,"dragging",void 0),e([he({type:String})],Cn.prototype,"name",void 0),e([_e()],Cn.prototype,"changingHigh",void 0),e([_e()],Cn.prototype,"_hasError",void 0),e([_e()],Cn.prototype,"_config",void 0),e([_e()],Cn.prototype,"isLocked",void 0),e([_e()],Cn.prototype,"isUserLocked",void 0),e([_e()],Cn.prototype,"isAutomationLocked",void 0),e([_e()],Cn.prototype,"showDigicodeModal",void 0),e([_e()],Cn.prototype,"enteredCode",void 0),e([_e()],Cn.prototype,"codeError",void 0),e([_e()],Cn.prototype,"isLocking",void 0),e([_e()],Cn.prototype,"timedPresetDuration",void 0),e([_e()],Cn.prototype,"timedPresetActive",void 0),e([_e()],Cn.prototype,"timedPresetRemainingTime",void 0),e([_e()],Cn.prototype,"timedPresetPreset",void 0),Cn=e([ce("versatile-thermostat-ui-card")],Cn);const xn=function(...e){const t="type"===e[0].type,i=e.map((e=>e.schema)),o=Object.assign({},...i);return t?io(o):Qi(o)}(Qi({index:eo(Ji()),view_index:eo(Ji()),view_layout:Ki("any",(()=>!0)),type:to()}),Qi({entity:eo(to()),name:eo(to()),icon:eo(to()),autoStartStopEnableEntity:eo(to()),powerEntity:eo(to())}),Qi({disable_name:eo(Xi()),disable_circle:eo(Xi()),disable_window:eo(Xi()),disable_autoStartStop:eo(Xi()),disable_overpowering:eo(Xi()),disable_heat:eo(Xi()),disable_cool:eo(Xi()),disable_heat_cool:eo(Xi()),disable_auto:eo(Xi()),disable_dry:eo(Xi()),disable_fan_only:eo(Xi()),disable_off:eo(Xi()),disable_sleep:eo(Xi()),disable_safety_warning:eo(Xi()),disable_power_infos:eo(Xi()),disable_auto_fan_infos:eo(Xi()),disable_target_icon:eo(Xi()),set_current_as_main:eo(Xi()),eco_temperature:eo(Ji()),disable_menu:eo(Xi()),disable_buttons:eo(Xi()),allow_lock_toggle:eo(Xi()),disable_timed_preset:eo(Xi()),use_manual_duration_input:eo(Xi())})),Sn=["icon_color","layout","fill_container","primary_info","secondary_info","icon_type","content_info","use_entity_picture","collapsible_controls","icon_animation"],Ln=e=>{var t,i;customElements.get("ha-form")&&(customElements.get("hui-action-editor")||((e,t,i,o)=>{const[a,n,s]=e.split(".",3);return Number(a)>t||Number(a)===t&&(void 0===o?Number(n)>=i:Number(n)>i)||void 0!==o&&Number(a)===t&&Number(n)===i&&Number(s)>=o})(e,2022,11))||null===(t=customElements.get("hui-button-card"))||void 0===t||t.getConfigElement(),customElements.get("ha-entity-picker")||null===(i=customElements.get("hui-entities-card"))||void 0===i||i.getConfigElement()},Mn=["autoStartStopEnableEntity","powerEntity","disable_name","disable_circle","disable_window","disable_autoStartStop","disable_overpowering","disable_heat","disable_cool","disable_heat_cool","disable_auto","disable_dry","disable_fan_only","disable_off","disable_sleep","disable_menu","disable_safety_warning","disable_buttons","set_current_as_main","disable_power_infos","disable_auto_fan_infos","disable_target_icon","allow_lock_toggle","disable_timed_preset","use_manual_duration_input"],En=zi((()=>[{name:"entity",selector:{entity:{domain:["climate"]}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"autoStartStopEnableEntity",selector:{entity:{domain:["switch"]}}},{name:"powerEntity",selector:{entity:{domain:["sensor","input_number"]}}}]},{type:"grid",name:"",schema:[{name:"disable_name",selector:{boolean:{}}},{name:"disable_circle",selector:{boolean:{}}},{name:"disable_window",selector:{boolean:{}}},{name:"disable_autoStartStop",selector:{boolean:{}}},{name:"disable_overpowering",selector:{boolean:{}}},{name:"disable_heat",selector:{boolean:{}}},{name:"disable_cool",selector:{boolean:{}}},{name:"disable_heat_cool",selector:{boolean:{}}},{name:"disable_auto",selector:{boolean:{}}},{name:"disable_dry",selector:{boolean:{}}},{name:"disable_fan_only",selector:{boolean:{}}},{name:"disable_off",selector:{boolean:{}}},{name:"disable_sleep",selector:{boolean:{}}},{name:"disable_menu",selector:{boolean:{}}},{name:"disable_safety_warning",selector:{boolean:{}}},{name:"disable_buttons",selector:{boolean:{}}},{name:"set_current_as_main",selector:{boolean:{}}},{name:"disable_power_infos",selector:{boolean:{}}},{name:"disable_auto_fan_infos",selector:{boolean:{}}},{name:"disable_target_icon",selector:{boolean:{}}},{name:"allow_lock_toggle",selector:{boolean:{}}},{name:"disable_timed_preset",selector:{boolean:{}}},{name:"use_manual_duration_input",selector:{boolean:{}}}]}]));let Tn=class extends re{constructor(){super(...arguments),this._computeLabel=e=>{const t=(i=this.hass,function(e){var t;let o=Li(e,null!==(t=null==i?void 0:i.locale.language)&&void 0!==t?t:xi);return o||(o=Li(e,xi)),null!=o?o:e});var i;return Sn.includes(e.name)?t(`editor.card.generic.${e.name}`):Mn.includes(e.name)?t(`editor.card.climate.${e.name}`):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}connectedCallback(){super.connectedCallback(),Ln(this.hass.connection.haVersion)}setConfig(e){Zi(e,xn),this._config=e}render(){if(!this.hass||!this._config)return U``;const e=En();return U`
            <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${e}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `}_valueChanged(e){Pi(this,"config-changed",{config:e.detail.value}),Pi(this,"hass",{config:e.detail.value})}};e([_e()],Tn.prototype,"_config",void 0),e([he({attribute:!1})],Tn.prototype,"hass",void 0),Tn=e([ce("versatile-thermostat-ui-card-editor")],Tn);var Vn=Object.freeze({__proto__:null,get ClimateCardEditor(){return Tn}});export{Cn as VersatileThermostatUi,kn as registerCustomCard};
