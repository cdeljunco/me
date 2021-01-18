!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,s=e=>"function"==typeof e&&i.has(e),a="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},r={},c={},l=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${l}--\x3e`,h=new RegExp(`${l}|${d}`);class u{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],s=document.createTreeWalker(t.content,133,null,!1);let a=0,o=-1,r=0;const{strings:c,values:{length:d}}=e;for(;r<d;){const e=s.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)p(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=c[r],n=f.exec(t)[2],i=n.toLowerCase()+"$lit$",s=e.getAttribute(i);e.removeAttribute(i);const a=s.split(h);this.parts.push({type:"attribute",index:o,name:n,strings:a}),r+=a.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const i=e.parentNode,s=t.split(h),a=s.length-1;for(let t=0;t<a;t++){let n,a=s[t];if(""===a)n=m();else{const e=f.exec(a);null!==e&&p(e[2],"$lit$")&&(a=a.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(a)}i.insertBefore(n,e),this.parts.push({type:"node",index:++o})}""===s[a]?(i.insertBefore(m(),e),n.push(e)):e.data=s[a],r+=a}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&o!==a||(o++,t.insertBefore(m(),e)),a=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(n.push(e),o--),r++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),r++}}else s.currentNode=i.pop()}for(const e of n)e.parentNode.removeChild(e)}}const p=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},_=e=>-1!==e.index,m=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let s,o=0,r=0,c=i.nextNode();for(;o<n.length;)if(s=n[o],_(s)){for(;r<s.index;)r++,"TEMPLATE"===c.nodeName&&(t.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=t.pop(),c=i.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return a&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=` ${l} `;class y{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],s=e.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===e.indexOf("--\x3e",s+1);const a=f.exec(e);t+=null===a?e+(n?b:d):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+l}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=e=>null===e||!("object"==typeof e||"function"==typeof e),w=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class k{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new x(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let i=0;i<t;i++){n+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(v(e)||!w(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===r||v(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=r,e(this)}this.value!==r&&this.committer.commit()}}class N{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=m()),e.__insert(this.endNode=m())}insertAfterPart(e){e.__insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}const e=this.__pendingValue;e!==r&&(v(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):w(e)?this.__commitIterable(e):e===c?(this.value=c,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const n=new g(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const s of e)n=t[i],void 0===n&&(n=new N(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(s),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class A{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=r}}class V extends k{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new S(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class S extends x{}let E=!1;(()=>{try{const e={get capture(){return E=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class T{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=C(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=r}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const C=e=>e&&(E?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const P=new class{handleAttributeExpressions(e,t,n,i){const s=t[0];if("."===s){return new V(e,t.slice(1),n).parts}return"@"===s?[new T(e,t.slice(1),i.eventContext)]:"?"===s?[new A(e,t.slice(1),n)]:new k(e,t,n).parts}handleTextExpression(e){return new N(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function I(e){let t=j.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},j.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const i=e.strings.join(l);return n=t.keyString.get(i),void 0===n&&(n=new u(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}const j=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const L=(e,...t)=>new y(e,t,"html",P);function q(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <div class="page page--about" name="about">\n        <div class="card">\n            <h2 class="title card__title card__title--about">About</h2>\n            <img src="files/me.jpg" alt="Clara del Junco" class="portrait onMobile"> \n            <p class="card__body card__body--about">\n            I am a postdoctoral scholar in the  <a class="card__body__link card__body__link--about" href="https://www.knowledgelab.org/" target="_blank">Knowledge Lab</a> at the University of Chicago. I apply a variety of computational methods to large data sets on publication, grant funding, and research teams to study processes of knowledge production. I am interested in how these quantitative approaches can yield new perspectives on questions in science and technology studies.\n   \n            <p class="card__body card__body--about">\n               Before joining the Knowledge Lab I did my PhD in chemistry at the University of Chicago under the supervision of <a class="card__body__link card__body__link--about" href="http://vaikuntanathan-group.uchicago.edu/" target="_blank">Suri Vaikuntanathan</a>. I used statistical mechanics to understand how energy consumption controls the properties of non-equilibrium materials and processes, especially in biophysics.</p>\n<p class="card__body card__body--about"> \nI am originally from Toronto, Canada, and have also lived in Montreal and the Netherlands. I speak English and French fluently, and some conversational Dutch. My last name is Spanish and is pronounced "del hoong-ko". Apart from my research, my recent interests/activities include: swimming at Promontory Point; organizing graduate student workers; reading poetry; dancing to techno and other electronic music (I contributed to the  <a class="card__body__link card__body__link--about" href="https://www.dropbox.com/s/x4kqcltm4vgo63y/Rave%20Ethics.pdf" target="_blank">rave ethics zine</a> and built the website for the <a class="card__body__link card__body__link--about" href="http://futureethics.net" target="_blank">future ethics</a> label); and experimenting with fermented foods. \n</p>\n<p class="card__body card__body--about">\nThis website was inspired by <a class="card__body__link card__body__link--about" href="https://www.brutalistwebsites.com/" target="_blank">brutalist web design</a>, especially <a class="card__body__link card__body__link--about" href="https://crevv.com/" target="_blank">crevv.com</a>, and built and designed by my friend  <a class="card__body__link card__body__link--about" href="https://www.hanna-jones.com/projects" target="_blank">Hanna Jones</a>, fellow techno enthusiast and web developer.\n</p>\n            <div class="contact onMobile">\n                <div class="contact__item">\n                    <img class="contact__icon" src="./public/assets/images/mail.svg" alt="email icon">\n                    <a class="contact__link" href="mailto:clara.deljunco@posteo.net">Email</a>\n                </div>\n                <div class="contact__item">\n                    <img class="contact__icon" src="./public/assets/images/file-text.svg" alt="email icon">\n                    <a class="contact__link" href="./files/cv-cdj.pdf" download target="_blank">CV</a>\n                </div>\n                <div class="contact__item">\n                    <img class="contact__icon" src="./public/assets/images/book-open.svg" alt="book icon">\n                    <a class="contact__link" href="https://scholar.google.com/citations?user=NyQ4unsAAAAJ&hl=en" target="_blank">Google Scholar</a>\n                </div>\n                <div class="contact__item">\n                    <img class="contact__icon" src="./public/assets/images/link.svg" alt="link icon">\n                    <a class="contact__link" href="https://www.knowledgelab.org/" target="_blank">Lab Website</a>\n                </div>\n            </div>\n        </div>\n    </div>\n']);return q=function(){return e},e}var O=L(q());function J(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <div class="page page--academics" name="academics">\n        <div class="card">\n           <h2 class="title card__title card__title--academics"> PhD Research</h2> \n            <div class="card__section">\n                \x3c!-- <h3 class="card__subtitle">Research interests</h3> --\x3e\n                <p class="card__body card__body--academics">\n                    Using equilibrium statistical mechanics, we can - in principle - derive macroscopic properties of systems from microscopic interactions. Yet most systems are out of equilibrium. In particular, evolution has produced many incredible nonequilibrium machines and materials: from self-healing materials like muscles, to nanoscale factories that underlie gene expression. A rigorous physical understanding of how these systems convert energy input to function is needed to make useful biomimetic materials and machines. During my PhD I have studied how energy consumption controls the properties of model\n                    systems inspired by two classes of contemporary experiments.\n                </p>\n                <h4 class="card__subtitle card__subtitle--small">1. Biochemical oscillators</h4>\n                <p class="card__body card__body--academics">\n                    A biochemical oscillator is a series of non-equilibrium chemical and physical processes that underlie biological clocks such as circadian rhythms. Biochemical oscillators are robust to fluctuations in chemical counts, inputs such as light levels, and other sources of noise, a highly desirable feature that is still poorly understood[1-3]. I study periodic Markov state models of biochemical oscillators to probe how energy consumption enables this robustness. I obtained analytical expressions for the period of oscillations in these stochastic oscillators. The period is expected to depend on all the details of the rates in the model. However, my calculations revealed that most of these details become irrelevant to these measures when the system is driven strongly out of equilibrium. Energy consumption thus allows the oscillator\'s period to be robustly maintained and tuned[4]. Moreover, I have shown how we can design the models so that they exhibit "input compensation", the ability to maintain a constant period when rates are affected by changes in input parameters[5]. </p>\n                <p class="card__body card__body--academics card__body--footnotes">\n                    [1] Paijmans J, Lubensky DK, ten Wolde PR (2017) Period Robustness and Entrainability of the Kai System to Changing Nucleotide Concentrations. Biophys J 113(1):157–173.\n                </p>\n                <p class="card__body card__body--academics card__body--footnotes">\n                    [2] Lin J, Chew J, Chockanathan U, Rust MJ (2014) Mixtures of opposing phosphorylations within hexamers precisely time feedback in the cyanobacterial circadian clock. Proc Natl Acad Sci U S A 111(37):E3937-45.\n                </p>\n                <p class="card__body card__body--academics card__body--footnotes">\n                    [3] Johnson CH, Egli M (2014) Metabolic compensation and circadian resilience in prokaryotic cyanobacteria. Annu Rev Biochem 83:221–47.\n                </p>\n                <p class="card__body card__body--academics card__body--footnotes">\n                    [4] del Junco C, Vaikuntanathan S (2018) High chemical affinity increases the robustness of biochemical oscillations. <a class="card__body__link" href="https://arxiv.org/abs/1808.04914" target="_blank">https://arxiv.org/abs/1808.04914</a>\n                </p>\n                 <p class="card__body card__body--academics card__body--footnotes">\n                    [5] del Junco C, Vaikuntanathan S (2019) Robust oscillations in multi-cyclic models of biochemical clocks. <a class="card__body__link" href="https://arxiv.org/abs/1909.02534" target="_blank">https://arxiv.org/abs/1909.02534</a>\n                </p>\n  \n                <figure class="figure onDesktop">\n                    <img class="figure__image" src="./files/bo-fig.png" alt="bo-fig">\n                    <figcaption class="figure__caption">\n                    (a) Biochemical oscillators undergo limit cycles in a high-dimensional phase space of molecule counts[1]. (b) I model oscillators by projecting down the average limit cycle on to a Markov state model. (c) Analytical expressions accurately predict the values of the period and coherence of the oscillations in models with randomly assigned rates. The derivation predicts that these values are insensitive to fluctuations in the rates when the driving force is high. Numerics confirm that, as a consequence, the time scales of oscillators with random rates become more tightly distributed, and therefore more robust, at high driving. (d) To include fluctuations about the average limit cycle, I add small secondary cycles to the Markov model. The time scales can also be analytically predicted in this model. (e) When the rates are correctly tuned in the multicyclic network in (d), the oscillator can compensate for changes in the driving force and keep a constant period.\n                    </figcaption>\n                </figure>\n\n                <h4 class="card__subtitle card__subtitle--small">2. Active colloids</h4>\n                <p class="card__body card__body card__body--academics">\n                   In recent experiments, colloids with one magnetic hemisphere spontaneously break symmetry and sort themselves according to chirality when exposed to a rotating magnetic field[6]. A whole phase diagram thus emerges from a single point in the equilibrium phase space. This phenomenology could be exploited to achieve reversible self-assembly without having to modify the chemistry of the system, if we can understand how driving the system out of equilibrium modifies the collective properties of the particles. Combining molecular dynamics simulations with analytical theory, I quantified how the work performed on the system by the driving forces leads to phase separation[7]. I used an equilibrium framework called capillary wave theory as a reference to quantify how interfaces in the phase-separated state are modified by driving, revealing that it can increase the surface tension - a quantity that drives self-assembly - by a factor of two[8]. These results showed how energy dissipation can be used to tune the material properties of this system.\n                </p>\n                <p class="card__body card__body--academics card__body--footnotes">\n                    [6] Han M, Yan J, Granick S, Luijten E (2017) Effective temperature concept evaluated in an active colloid mixture. Proc Natl Acad Sci U S A 114(29):7513–7518.\n                </p>\n                <p class="card__body card__body--academics card__body--footnotes">\n                    [7] del Junco C, Tociu L, Vaikuntanathan S (2018) Energy dissipation and fluctuations in a driven liquid. Proc Natl Acad Sci U S A 115(14):3569–3574.\n                </p>\n                <p class="card__body card__body--academics card__body--footnotes">\n                    [8] del Junco C, Vaikuntanathan S (2019) Interface height fluctuations and surface tension of driven liquids with time-dependent dynamics. J Chem Phys 150(9):094708.\n                </p>\n                <figure class="figure onDesktop">\n                    <img class="figure__image" src="./files/rb-fig.png" alt="rb-fig">\n                    <figcaption class="figure__caption">\n                    (a) Magnetic colloids separate according to chirality when exposed to a rotating magnetic field[6]. (b) A minimal model of 2D disks with repulsive Weeks-Chandler Andersen (WCA) interactions reproduces the basic features of the experiment. As the magnitude and period of the rotating driving force is increased, the colloids phase separate and then undergo a reentrant transition. (c) A whole phase diagram emerges from a single point in the equilibrium phase space of the particles. The work done on the red particles by the driving forces changes their diffusion constant, causing the system to separate in to regions of like-colored particles.\n                    </figcaption>\n                </figure>\n            </div>\n            <div class="card__section">\n                <h3 class="card__subtitle">Publications</h3>\n                <p class="card__body card__body--academics">\n                    del Junco C, Vaikuntanathan S (2019). Robust oscillations in multi-cyclic models of biochemical clocks. (under review) <a class="card__body__link" href="https://arxiv.org/abs/1909.02534" target="_blank">arXiv</a>\n                </p>\n                <p class="card__body card__body--academics">\n                    del Junco C, Vaikuntanathan S (2018). High chemical affinity increases the robustness of biochemical oscillations. (under review) <a class="card__body__link" href="https://arxiv.org/abs/1808.04914" target="_blank">arXiv</a>\n                </p>\n                <p class="card__body card__body--academics">\n                    del Junco C, Vaikuntanathan S (2019). Interface height fluctuations and surface tension of driven liquids with time-dependent dynamics. <cite>J Chem Phys</cite> 150(9):094708. <a class="card__body__link" href="https://arxiv.org/abs/1803.02678" target="_blank">arXiv</a> <a class="card__body__link" href="http://aip.scitation.org/doi/10.1063/1.5042251">JCP</a><br/>This paper was chosen as an Editor\'s Pick and highlighted in <a class="card__body__link" href="https://aip.scitation.org/doi/full/10.1063/1.5097126" target="_blank">Scilight</a>\n                </p>\n                <p class="card__body card__body--academics">\n                    del Junco C, Tociu L, Vaikuntanathan S (2018) Energy dissipation and fluctuations in a driven liquid. Proc Natl Acad Sci U S A 115(14):3569–3574. <a class="card__body__link" href="https://arxiv.org/abs/1611.00635" target="_blank">arXiv</a> <a class="card__body__link" href="https://www.pnas.org/content/115/14/3569.long" target="_blank">PNAS</a>\n                </p>\n            </div>\n        </div>\n    </div>\n']);return J=function(){return e},e}var $=L(J());function B(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(['\n    <div class="page page--academics" name="academics">\n        <div class="card">\n           <h2 class="title card__title card__title--academics">Research</h2> \n            <div class="card__section">\n                <h3 class="card__subtitle">Coming soon.</h3>\n            </div>\n        </div>\n    </div>\n']);return B=function(){return e},e}var H,R=L(B());function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D,z,U="about",F="academics",K="current_research",X=(W(H={},U,O),W(H,F,$),W(H,K,R),H),G=function(e){var t=window.location.hash.slice(1).toLocaleLowerCase()||"/";!function(e,t){var n=document.querySelector(".".concat("active"));n&&n.classList.remove("active");var i=document.getElementById(e)||document.getElementById(t);i&&!i.classList.contains("active")&&i.classList.add("active")}(t,U),((e,t,n)=>{let i=M.get(t);void 0===i&&(o(t,t.firstChild),M.set(t,i=new N(Object.assign({templateFactory:I},n))),i.appendInto(t)),i.setValue(e),i.commit()})(X[t]||X[U],e)};D=document.getElementById("main"),z=function(){return G(D)},window.addEventListener("hashchange",z),window.addEventListener("load",z)}]);