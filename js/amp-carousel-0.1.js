(self.AMP=self.AMP||[]).push({m:0,v:"2309082229000",n:"amp-carousel",ev:"0.1",l:!0,f:function(t,e){!function(){function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return o(t)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=Array.isArray;function f(t){return"string"==typeof t}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var m=Object.prototype;function v(t){var e=Object.create(null);return t&&Object.assign(e,t),e}function b(t){return"number"==typeof t&&isFinite(t)}function g(t,e,n,i,r,o,s,a,h,l,u){return t}function y(t){return(t.ownerDocument||t).defaultView}m.hasOwnProperty,m.toString;var w=/(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;function x(t,e,n,i,r){return r||(e?"�":i?t.slice(0,-1)+"\\"+t.slice(-1).charCodeAt(0).toString(16)+" ":"\\"+t)}function A(t){return String(t).replace(w,x)}function E(t){return function(t,e){for(var n=[],i=t.firstElementChild;i;i=i.nextElementSibling)s=void 0,a=void 0,f(o=r=i)?s=o:1==(null==(a=o)?void 0:a.nodeType)&&(s=o.tagName),!(s&&s.toLowerCase().startsWith("i-")||r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("placeholder")||r.hasAttribute("fallback")||r.hasAttribute("overflow")))&&n.push(i);var r,o,s,a;return n}(t)}var S={bubbles:!0,cancelable:!0};function O(t,e,n){var i=t.hasAttribute(e),r=void 0!==n?n:!i;return r!==i&&(r?t.setAttribute(e,""):t.removeAttribute(e)),r}function P(t){return t.hasAttribute("i-amphtml-ssr")}var L,k="amp-carousel-button-prev",M="amp-carousel-button-next",_="i-amphtml-carousel-has-controls",C="amp-carousel-slide",j="i-amphtml-slide-item",I="i-amphtml-slides-container",T="i-amphtml-slidescroll-no-snap",N="i-amphtml-slide-item-show",R="i-amphtml-scrollable-carousel-container";function F(){for(var t=0;t<arguments.length;t++)if(!arguments[t])throw new Error("Invalid server render")}function B(t,e){var n=e.className,i=e.enabled,r=e.title,o=G(t)?"presentation":"button",s=t.ownerDocument.createElement("div");return s.setAttribute("tabindex","0"),s.classList.add("amp-carousel-button",n),s.setAttribute("role",o),s.setAttribute("title",r),V(s,i),t.appendChild(s),s}function V(t,e){t.classList.toggle("amp-disabled",!e),t.setAttribute("aria-disabled",String(!e)),t.setAttribute("tabindex",String(e?0:-1))}function q(t){var e=E(t).length,n=G(t)?function(t){if(P(t))return function(t){var e=t.querySelector(".".concat(A(R))),n=Array.from(t.querySelectorAll(".".concat(A(C))));return F(e,n),{container:e,cells:n}}(t);var e=t.ownerDocument,n=E(t),i=e.createElement("div");return i.classList.add(R),i.setAttribute("tabindex","-1"),t.appendChild(i),n.forEach((function(t){t.classList.add(C,"amp-scrollable-carousel-slide"),i.appendChild(t)})),{cells:n,container:i}}(t):function(t){var e;if(P(t))return function(t){var e=t.querySelector(".".concat(A(I))),n=Array.from(t.querySelectorAll(".".concat(A(j)))),i=Array.from(t.querySelectorAll(".".concat(A(C))));return F(e,n,i),{slides:i,slidesContainer:e,slideWrappers:n}}(t);var n=t.ownerDocument,i=E(t);t.classList.add("i-amphtml-slidescroll");var r=n.createElement("div");r.setAttribute("tabindex","-1"),r.classList.add(I,T),r.setAttribute("aria-live","polite"),t.appendChild(r);var o=[];return i.forEach((function(t){t.classList.add(C);var e=n.createElement("div");e.classList.add(j),e.appendChild(t),r.appendChild(e),o.push(e)})),null===(e=o[0])||void 0===e||e.classList.add(N),{slidesContainer:r,slides:i,slideWrappers:o}}(t);return u(u({},function(t,e){if(P(t))return function(t){var e=t.querySelector(".".concat(A(k))),n=t.querySelector(".".concat(A(M)));return F(e,n),{prevButton:e,nextButton:n}}(t);var n,i;n=t.ownerDocument,i=n.documentElement,(["⚡4email","amp4email"].some((function(t){return i.hasAttribute(t)}))||t.hasAttribute("controls"))&&t.classList.add(_);var r=t.hasAttribute("loop"),o=e>1?2:r?0:1;return{prevButton:B(t,{className:k,title:$(t,{index:String(r?e:0),total:String(e)}),enabled:t.hasAttribute("loop")}),nextButton:B(t,{className:M,title:W(t,{index:String(o),total:String(e)}),enabled:e>1})}}(t,e)),n)}function W(t,e){var n=t.getAttribute("data-next-button-aria-label")||"Next item in carousel";return z(t,{prefix:n,index:e.index,total:e.total})}function $(t,e){var n=t.getAttribute("data-prev-button-aria-label")||"Previous item in carousel";return z(t,{prefix:n,index:e.index,total:e.total})}function z(t,e){var n=e.index,i=e.prefix,r=e.total;if(G(t))return i;var o=(t.getAttribute("data-button-count-format")||"(%s of %s)").replace("%s",n).replace("%s",r);return"".concat(i," ").concat(o)}function G(t){return"slides"!==t.getAttribute("type")}function D(){return L||(L=Promise.resolve(void 0))}var H=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))},J="ArrowLeft",Z="ArrowRight",U="fixed",X="fixed-height";function Q(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.needsRootBounds,r=n.rootMargin,o=n.threshold,s=function(t){return t.parent&&t.parent!=t}(e)&&(i||r)?e.document:void 0;return new e.IntersectionObserver(t,{threshold:o,root:s,rootMargin:r})}var Y,K=new WeakMap,tt=new WeakMap;function et(t,e,n){var i=y(t);if(n){var r=Q((function(t){e(t[t.length-1])}),i,n);return r.observe(t),function(){r.unobserve(t)}}var o=K.get(i);o||K.set(i,o=Q(nt,i));var s=tt.get(t);return s||(s=[],tt.set(t,s)),s.push(e),o.observe(t),function(){!function(t,e){var n,i,r,o=tt.get(t);if(o&&(i=e,-1!=(r=(n=o).indexOf(i))&&(n.splice(r,1),1)&&!o.length)){var s=y(t),a=K.get(s);null==a||a.unobserve(t),tt.delete(t)}}(t,e)}}function nt(t){for(var e=new Set,n=t.length-1;n>=0;n--){var i=t[n],r=i.target;if(!e.has(r)){e.add(r);var o=tt.get(r);if(o)for(var s=0;s<o.length;s++)(0,o[s])(i)}}}function it(t){var e=Object.getOwnPropertyDescriptor(t,"message");if(null!=e&&e.writable)return t;var n=t.message,i=t.stack,r=new Error(n);for(var o in t)r[o]=t[o];return r.stack=i,r}function rt(t){for(var e,n=null,i="",r=d(arguments,!0);!(e=r()).done;){var o=e.value;o instanceof Error&&!n?n=it(o):(i&&(i+=" "),i+=o)}return n?i&&(n.message=i+": "+n.message):n=new Error(i),n}function ot(t){var e=rt.apply(null,arguments);setTimeout((function(){throw function(t){var e,n;null===(e=(n=self).__AMP_REPORT_ERROR)||void 0===e||e.call(n,t)}(e),e}))}function st(t){try{for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t.apply(null,n)}catch(t){ot(t)}}var at=["Webkit","webkit","Moz","moz","ms","O","o"],ht={getPropertyPriority:function(){return""},getPropertyValue:function(){return""}};function lt(t,e,n){if(ct(e))return e;Y||(Y=v());var i=Y[e];if(!i||n){if(i=e,void 0===t[e]){var r=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(e),o=function(t,e){for(var n=0;n<at.length;n++){var i=at[n]+e;if(void 0!==t[i])return i}return""}(t,r);void 0!==t[o]&&(i=o)}n||(Y[e]=i)}return i}function ut(t,e,n,i,r){var o=lt(t.style,e,r);if(o){var s,a=i?n+i:n;t.style.setProperty((s=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),at.some((function(t){return s.startsWith(t+"-")}))?"-".concat(s):s),a)}}function ct(t){return t.startsWith("--")}function ft(t,e){return function(n){return t+(e-t)*n}}var pt=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function dt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(t)}catch(t){return e}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var mt=self.__AMP_LOG;function vt(t,e){throw new Error("failed to call initLogConstructor")}function bt(t){return mt.user||(mt.user=gt()),function(t,e){return e&&e.ownerDocument.defaultView!=t}(mt.user.win,t)?mt.userForEmbed||(mt.userForEmbed=gt()):mt.user}function gt(t){return vt()}function yt(){return mt.dev||(mt.dev=vt())}function wt(t,e,n,i,r,o,s,a,h,l,u){return t}function xt(t,e){return Ot(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),e)}function At(t,e){return Ot(St(Et(t)),e)}function Et(t){return t.nodeType?(e=y(t),xt(e,"ampdoc")).getAmpDoc(t):t;var e}function St(t){var e=Et(t);return e.isSingleDoc()?e.win:e}function Ot(t,e){wt(kt(t,e));var n=Lt(t)[e];return n.obj||(wt(n.ctor),wt(n.context),n.obj=new n.ctor(n.context),wt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function Pt(t,e){var n=Lt(t)[e];return n?n.promise?n.promise:(Ot(t,e),n.promise=Promise.resolve(n.obj)):null}function Lt(t){var e=t.__AMP_SERVICES;return e||(e=t.__AMP_SERVICES={}),e}function kt(t,e){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[e];return!(!n||!n.ctor)}var Mt=function(t){return e="action",kt(n=St(Et(t)),e)?Ot(n,e):null;var e,n},_t=function(t){return function(t,e,n,i){var r=function(t,e){return Pt(St(t),e)}(t,e);if(r)return r;var o=Et(t);return o.whenExtensionsKnown().then((function(){var t=o.getExtensionVersion(n);return t?xt(o.win,"extensions").waitForExtension(n,t):null})).then((function(n){return n?function(t,e){return function(t,e){var n=Pt(t,e);if(n)return n;var i,r,o,s,a=Lt(t);return a[e]=(r=(i=new H).promise,o=i.reject,s=i.resolve,r.catch((function(){})),{obj:null,promise:r,resolve:s,reject:o,context:null,ctor:null}),a[e].promise}(St(t),e)}(t,e):null}))}(t,"amp-analytics-instrumentation","amp-analytics")},Ct=function(t){return At(t,"owners")},jt=function(t){return xt(t,"platform")},It=function(t){return Ot(t,"timer")},Tt=function(t){return xt(t,"vsync")};function Nt(t,e,n,i){return function(r){return Rt.solveYValueFromXValue(r,0,0,t,e,n,i,1,1)}}var Rt=function(){function t(){}return t.solveYValueFromXValue=function(e,n,i,r,o,s,a,h,l){return t.Ua(t.za(e,n,r,s,h),i,o,a,l)},t.za=function(e,n,i,r,o){var s=1e-6,a=(e-n)/(o-n);if(a<=0)return 0;if(a>=1)return 1;for(var h=0,l=1,u=0,c=0;c<8;c++){u=t.La(a,n,i,r,o);var f=(t.La(a+s,n,i,r,o)-u)/s;if(Math.abs(u-e)<s)return a;if(Math.abs(f)<s)break;u<e?h=a:l=a,a-=(u-e)/f}for(var p=0;Math.abs(u-e)>s&&p<8;p++)u<e?(h=a,a=(a+l)/2):(l=a,a=(a+h)/2),u=t.La(a,n,i,r,o);return a},t.La=function(e,n,i,r,o){if(0==e)return n;if(1==e)return o;var s=t.Ha(n,i,e),a=t.Ha(i,r,e),h=t.Ha(r,o,e);return s=t.Ha(s,a,e),a=t.Ha(a,h,e),t.Ha(s,a,e)},t.Ua=function(e,n,i,r,o){if(0==e)return n;if(1==e)return o;var s=t.Ha(n,i,e),a=t.Ha(i,r,e),h=t.Ha(r,o,e);return s=t.Ha(s,a,e),a=t.Ha(a,h,e),t.Ha(s,a,e)},t.Ha=function(t,e,n){return t+n*(e-t)},t}(),Ft={LINEAR:function(t){return t},EASE:function(t){return Rt.solveYValueFromXValue(t,0,0,.25,.1,.25,1,1,1)},EASE_IN:function(t){return Rt.solveYValueFromXValue(t,0,0,.42,0,1,1,1,1)},EASE_OUT:function(t){return Rt.solveYValueFromXValue(t,0,0,0,0,.58,1,1,1)},EASE_IN_OUT:function(t){return Rt.solveYValueFromXValue(t,0,0,.42,0,.58,1,1,1)}},Bt={linear:Ft.LINEAR,ease:Ft.EASE,"ease-in":Ft.EASE_IN,"ease-out":Ft.EASE_OUT,"ease-in-out":Ft.EASE_IN_OUT};function Vt(t){if(!t)return null;if(f(t)){if(-1!=t.indexOf("cubic-bezier")){var e=t.match(/cubic-bezier\((.+)\)/);if(e){var n=e[1].split(",").map(parseFloat);if(4==n.length){for(var i=0;i<4;i++)if(isNaN(n[i]))return null;return Nt(n[0],n[1],n[2],n[3])}}return null}return Bt[t]}return t}var qt,Wt="Animation",$t=function(){},zt=function(){function t(t,e){this.Ga=t,this.$s=e||Tt(self),this.Va=null,this.Fa=[]}t.animate=function(e,n,i,r){return new t(e).setCurve(r).add(0,n,1).start(i)};var e=t.prototype;return e.setCurve=function(t){return t&&(this.Va=Vt(t)),this},e.add=function(t,e,n,i){return this.Fa.push({delay:t,func:e,duration:n,curve:Vt(i)}),this},e.start=function(t){return new Gt(this.$s,this.Ga,this.Fa,this.Va,t)},t}(),Gt=function(){function t(t,e,n,i,r){this.$s=t,this.Ga=e,this.Fa=[];for(var o=0;o<n.length;o++){var s=n[o];this.Fa.push({delay:s.delay,func:s.func,duration:s.duration,curve:s.curve||i,started:!1,completed:!1})}this.Ba=r,this.Sh=Date.now(),this.re=!0,this.hi={};var a=new H;this.qa=a.promise,this.ni=a.resolve,this.$a=a.reject,this.Wa=this.$s.createAnimTask(this.Ga,{mutate:this.Ka.bind(this)}),this.$s.canAnimate(this.Ga)?this.Wa(this.hi):(yt().warn(Wt,"cannot animate"),this.Ya(!1,0))}var e=t.prototype;return e.then=function(t,e){return t||e?this.qa.then(t,e):this.qa},e.thenAlways=function(t){var e=t||$t;return this.then(e,e)},e.halt=function(t){this.Ya(!1,t||0)},e.Ya=function(t,e){if(this.re){if(this.re=!1,0!=e){this.Fa.length>1&&this.Fa.sort((function(t,e){return t.delay+t.duration-(e.delay+e.duration)}));try{if(e>0)for(var n=0;n<this.Fa.length;n++)this.Fa[n].func(1,!0);else for(var i=this.Fa.length-1;i>=0;i--)this.Fa[i].func(0,!1)}catch(e){yt().error(Wt,"completion failed: "+e,e),t=!1}}t?this.ni():this.$a()}},e.Ka=function(t){if(this.re){for(var e=Date.now(),n=Math.min((e-this.Sh)/this.Ba,1),i=0;i<this.Fa.length;i++){var r=this.Fa[i];!r.started&&n>=r.delay&&(r.started=!0)}for(var o=0;o<this.Fa.length;o++){var s=this.Fa[o];s.started&&!s.completed&&this.Ja(s,n)}1==n?this.Ya(!0,0):this.$s.canAnimate(this.Ga)?this.Wa(this.hi):(yt().warn(Wt,"cancel animation"),this.Ya(!1,0))}},e.Ja=function(t,e){var n,i;if(t.duration>0){if(i=n=Math.min((e-t.delay)/t.duration,1),t.curve&&1!=i)try{i=t.curve(n)}catch(t){return yt().error(Wt,"step curve failed: "+t,t),void this.Ya(!1,0)}}else n=1,i=1;1==n&&(t.completed=!0);try{t.func(i,t.completed)}catch(t){return yt().error(Wt,"step mutate failed: "+t,t),void this.Ya(!1,0)}},t}();function Dt(t,e,n,i){return function(t,e,n,i){var r=t,o=n,s=function(t){try{return o(t)}catch(t){var e,n;throw null===(e=(n=self).__AMP_REPORT_ERROR)||void 0===e||e.call(n,t),t}},a=function(){if(void 0!==qt)return qt;qt=!1;try{var t={get capture(){return qt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return qt}(),h=!(null==i||!i.capture);return r.addEventListener(e,s,a?i:h),function(){null==r||r.removeEventListener(e,s,a?i:h),o=null,r=null,s=null}}(t,e,n,i)}var Ht=function(){function t(t){var e=t.element,n=t.go,i=t.nextButton,r=t.prevButton;this.tp=e,this.tht=n,this.t=y(e),this.Mp=r,this.Pp=i,this.QQ=!1,this.iht()}var e=t.prototype;return e.iht=function(){var t,e=this;this.setupButtonInteraction(this.Mp,(function(){return e.handlePrev()})),this.setupButtonInteraction(this.Pp,(function(){return e.handleNext()})),this.tp.hasAttribute("controls")?this.QQ=!0:(t=this.t,xt(t,"input")).onMouseDetected((function(t){t&&(e.QQ=!0,O(e.tp,"i-amphtml-carousel-hide-buttons",!e.QQ),e.tp.classList.add(_))}),!0)},e.setupButtonInteraction=function(t,e){t.addEventListener("click",e),t.addEventListener("keydown",(function(t){t.defaultPrevented||"Enter"!=t.key&&" "!=t.key||(t.preventDefault(),e())}))},e.setControlsState=function(t){var e=t.next,n=t.prev;V(this.Mp,n),V(this.Pp,e)},e.hintControls=function(){var t=this;this.QQ||Tt(this.t).mutate((function(){var e="i-amphtml-carousel-button-start-hint";t.tp.classList.add(e),It(t.t).delay((function(){var n;(n=t.tp,At(n,"mutator")).measureMutateElement(t.tp,null,(function(){t.tp.classList.remove(e),O(t.tp,"i-amphtml-carousel-hide-buttons",!t.QQ)}))}),4e3)}))},e.updateButtonTitles=function(t,e){this.Mp.title=t,this.Pp.title=e},e.handlePrev=function(){!this.Mp.classList.contains("amp-disabled")&&this.tht(-1,!0,!1)},e.handleNext=function(){!this.Pp.classList.contains("amp-disabled")&&this.tht(1,!0,!1)},t}(),Jt="amp-scrollable-carousel",Zt=function(t){n(i,t);var e=a(i);function i(t){var n;return(n=e.call(this,t)).x6=0,n.nht=0,n.rht=null,n.fw=null,n.S6=null,n.GO=null,n.pd=null,n}var r=i.prototype;return r.isLayoutSupported=function(t){return function(t){return t==U||t==X}(t)},r.isRelayoutNeeded=function(){return!0},r.eht=function(){var t=this;this.oht(),this.fw.addEventListener("scroll",this.ap.bind(this)),this.fw.addEventListener("keydown",this.Xq.bind(this)),this.rht.forEach((function(e){Ct(t.element).setOwner(e,t.element)})),this.registerAction("goToSlide",(function(e){var n=e.args;if(n){var i=parseInt(n.index,10);t.goToSlide(i)}}),1),Mt(this.element).addToAllowlist("amp-carousel","goToSlide",["email"])},r.buildCallback=function(){var t=q(this.element),e=t.cells,n=t.container,i=t.nextButton,r=t.prevButton;this.fw=n,this.rht=e,this.pd=new Ht({element:this.element,prevButton:r,nextButton:i,go:this.go.bind(this)}),this.eht()},r.layoutCallback=function(){var t=this;return this.GO=et(this.element,(function(e){var n=e.isIntersecting;return t.viewportCallback(n)})),this.sht(this.x6),this.aht(this.x6,1),this.pd.setControlsState({prev:this.uht(),next:this.hht()}),D()},r.unlayoutCallback=function(){var t;return null===(t=this.GO)||void 0===t||t.call(this),this.GO=null,!0},r.viewportCallback=function(t){this.lht(this.x6,this.x6),t&&this.pd.hintControls()},r.go=function(t,e){var n=this,i=this.cht(this.x6,t),r=this.x6;if(i!=r)if(e){var o=ft(r,i);zt.animate(this.element,(function(t){n.fw.scrollLeft=o(t)}),200,"ease-in-out").thenAlways((function(){n.fht(i)}))}else this.fht(i),this.fw.scrollLeft=i},r.goToSlide=function(t){var e=this,n=this.rht.length;if(!isFinite(t)||t<0||t>=n)return this.user().error(Jt,"Invalid [slide] value: %s",t),D();var i=this.x6,r=i;this.measureMutateElement((function(){r=e.vht(t)}),(function(){if(r!=i){var t=ft(i,r);zt.animate(e.element,(function(n){e.fw.scrollLeft=t(n)}),200,"ease-in-out").thenAlways((function(){e.fht(r)}))}}))},r.vht=function(t){var e=this.element.offsetWidth;return this.rht[t].offsetLeft-(e-this.rht[t].offsetWidth)/2},r.ap=function(){var t=this.fw.scrollLeft;this.x6=t,null===this.S6&&this.F6(t)},r.Xq=function(t){var e=t.key;e!=J&&e!=Z||t.stopPropagation()},r.F6=function(t){var e=this;this.S6=It(this.win).delay((function(){Math.abs(t-e.x6)<30?(yt().fine(Jt,"slow scrolling: %s - %s",t,e.x6),e.S6=null,e.fht(e.x6)):(yt().fine(Jt,"fast scrolling: %s - %s",t,e.x6),e.F6(e.x6))}),100)},r.fht=function(t){this.lht(t,this.nht),this.sht(t),this.aht(t,Math.sign(t-this.nht)),this.nht=t,this.x6=t,this.pd.setControlsState({prev:this.uht(),next:this.hht()})},r.cht=function(t,e){var n=this.element.offsetWidth,i=this.fw.scrollWidth,r=t+e*n;return r<0?0:i>=n&&r>i-n?i-n:r},r.pht=function(t,e){for(var n=this.element.offsetWidth,i=0;i<this.rht.length;i++){var r=this.rht[i];r.offsetLeft+r.offsetWidth>=t&&r.offsetLeft<=t+n&&e(r)}},r.sht=function(t){var e=this;this.pht(t,(function(t){Ct(e.element).scheduleLayout(e.element,t)}))},r.aht=function(t,e){var n=this,i=this.cht(t,e);i!=t&&this.pht(i,(function(t){Ct(n.element).schedulePreload(n.element,t)}))},r.lht=function(t,e){var n=this,i=[];this.pht(t,(function(t){i.push(t)})),e!=t&&this.pht(e,(function(t){i.includes(t)||Ct(n.element).schedulePause(n.element,t)}))},r.uht=function(){return 0!=this.x6},r.hht=function(){var t=this.element.offsetWidth,e=this.fw.scrollWidth,n=Math.max(e-t,0);return this.x6!=n},r.interactionNext=function(){this.pd.handleNext()},r.interactionPrev=function(){this.pd.handlePrev()},r.goCallback=function(t,e){this.go(t,e)},r.oht=function(){Dt(this.element,"touchmove",(function(t){return t.stopPropagation()}),{passive:!0})},i}(t.BaseElement),Ut=/vertical/,Xt=new WeakMap,Qt=new WeakMap,Yt=new WeakMap;function Kt(t){var e=Xt.get(t);return e||(e=new t.ResizeObserver(te),Xt.set(t,e)),e}function te(t){for(var e=new Set,n=t.length-1;n>=0;n--){var i=t[n],r=i.target;if(!e.has(r)){e.add(r);var o=Qt.get(r);if(o){Yt.set(r,i);for(var s=0;s<o.length;s++){var a=o[s],h=a.callback;ee(a.type,h,i)}}}}}function ee(t,e,n){if(0==t){var i=n.contentRect,r=i.height;st(e,{width:i.width,height:r})}else if(1==t){var o,s=n.borderBoxSize;if(s)o=s.length>0?s[0]:{inlineSize:0,blockSize:0};else{var a,h,l=n.target,u=y(l),c=Ut.test(function(t,e){return t.getComputedStyle(e)||ht}(u,l).writingMode),f=l,p=f.offsetHeight,d=f.offsetWidth;c?(h=d,a=p):(a=d,h=p),o={inlineSize:a,blockSize:h}}st(e,o)}}var ne="__AMP__EXPERIMENT_TOGGLES",ie="AMP-CAROUSEL",re=function(t){n(i,t);var e=a(i);function i(t){var n;(n=e.call(this,t)).$s=null,n.mht=!1,n.JZ=[],n.dht=0,n.O2=null,n.bht=[],n.ght=!1,n.xht=null,n.yht=!1,n.wht=null,n.Sht=!1,n.kht=!1,n.jq=!1,n.jht=5e3,n.Eht=null,n.Oht=0,n.Mht=!1,n.Aht=!1,n.zht=0,n.Iht=null,n.Tht=0,n.Nht=0,n.Rht=0,n.Pht=[];var i,r=jt(n.win);return n.qQ=r.isIos(),n.hk=r.isSafari(),n.le=null,n._ht=!!jt(n.win).getIosVersionString().startsWith("10.3")||!n.qQ&&(i=function(t){var e,n,i,r,o;if(t[ne])return t[ne];t[ne]=v();var s=t[ne];g(s);var a,h=u(u({},null!==(e=t.AMP_CONFIG)&&void 0!==e?e:{}),null!==(n=t.AMP_EXP)&&void 0!==n?n:(a=(null===(i=t.__AMP_EXP)||void 0===i?void 0:i.textContent)||"{}",JSON.parse(a)));for(var l in h){var f=h[l];"number"==typeof f&&f>=0&&f<=1&&(s[l]=Math.random()<f)}var p=null===(r=t.AMP_CONFIG)||void 0===r?void 0:r["allow-doc-opt-in"];if(c(p)&&p.length){var m=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(m)for(var b,y,w=d((null===(b=m.getAttribute("content"))||void 0===b?void 0:b.split(","))||[],!0);!(y=w()).done;){var x=y.value;p.includes(x)&&(s[x]=!0)}}Object.assign(s,function(t){var e,n="";try{var i;"localStorage"in t&&(n=null!==(i=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==i?i:"")}catch(t){yt().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var r,o=(null===(e=n)||void 0===e?void 0:e.split(/\s*,\s*/g))||[],s=v(),a=d(o,!0);!(r=a()).done;){var h=r.value;h&&("-"==h[0]?s[h.substr(1)]=!1:s[h]=!0)}return s}(t));var A=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-url-opt-in"];if(c(A)&&A.length)for(var E,S=function(t){var e,n=v();if(!t)return n;for(;e=pt.exec(t);){var i=dt(e[1],e[1]),r=e[2]?dt(e[2].replace(/\+/g," "),e[2]):"";n[i]=r}return n}(t.location.originalHash||t.location.hash),O=d(A,!0);!(E=O()).done;){var P=E.value,L=S["e-".concat(P)];"1"==L&&(s[P]=!0),"0"==L&&(s[P]=!1)}return s}(n.win),!i["amp-carousel-chrome-scroll-snap"]),n.Bht=!1,n.xj=n.xj.bind(o(n)),n.GO=null,n.pd=null,n}var r=i.prototype;return r.isLayoutSupported=function(t){return function(t){return t==U||t==X||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},r.isRelayoutNeeded=function(){return!0},r.eht=function(){var t,e=this,n=this.element.getAttribute("autoplay");n&&(this.Eht=parseInt(n,10),t=b(this.Eht),bt().assert(t,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)),this.Aht&&0!=this.Eht&&this.Cht(),this.registerAction("toggleAutoplay",(function(t){var n=t.args;n&&void 0!==n.toggleOn?e.s$(n.toggleOn):e.s$(!e.jq)}),1)},r.Lht=function(){var t=this;if(this.$s=this.getVsync(),this.le=Mt(this.element),this.le.addToAllowlist(ie,"goToSlide",["email"]),this.mht=null!=function(t,e,n){var i=lt(t.style,"scrollSnapType",void 0);if(i)return ct(i)?t.style.getPropertyValue(i):t.style[i]}(this.element),this._ht&&(this.mht=!1),this.O2.classList.toggle(T,this._ht),this.mht){var e=this.win.document.createElement("div");e.classList.add("i-amphtml-carousel-start-marker"),this.O2.appendChild(e);var n=this.win.document.createElement("div");n.classList.add("i-amphtml-carousel-end-marker"),this.O2.appendChild(n)}this.JZ.forEach((function(e,n){var i=e.getAttribute("data-slide-id")||n.toString();t.Pht.push(i),Ct(t.element).setOwner(e,t.element)})),this.oht(),this.O2.addEventListener("scroll",this.ap.bind(this)),this.O2.addEventListener("keydown",this.Xq.bind(this)),Dt(this.O2,"touchmove",this.Wht.bind(this),{passive:!0}),Dt(this.O2,"touchend",this.Fht.bind(this),{passive:!0}),this.registerAction("goToSlide",(function(e){var n=e.args;n&&t.goToSlide(n.index,3)}),1)},r.attachedCallback=function(){!function(t,e,n){var i=t.ownerDocument.defaultView;if(i){var r=Qt.get(t);if(r||(r=[],Qt.set(t,r),Kt(i).observe(t)),!r.some((function(t){return t.callback===n&&0===t.type}))){r.push({type:0,callback:n});var o=Yt.get(t);o&&setTimeout((function(){return ee(0,n,o)}))}}}(this.element,0,this.xj)},r.detachedCallback=function(){!function(t,e,n){var i=Qt.get(t);if(i&&(function(t,e){for(var i=[],r=0,o=0;o<t.length;o++){var s=t[o];(a=s).callback===n&&0===a.type?i.push(s):(r<o&&(t[r]=s),r++)}var a;r<t.length&&(t.length=r)}(i),0==i.length)){Qt.delete(t),Yt.delete(t);var r=t.ownerDocument.defaultView;r&&Kt(r).unobserve(t)}}(this.element,0,this.xj)},r.isLoopingEligible=function(){return this.dht>1},r.mutatedAttributesCallback=function(t){var e=t.slide;void 0!==e&&this.goToSlide(e,3)},r.Wht=function(){this.Uht(),this.yht=!0},r.viewportCallback=function(t){var e;t?(this.RO(),null===(e=this.pd)||void 0===e||e.hintControls()):this.Uht()},r.interactionNext=function(){this.pd.handleNext()},r.interactionPrev=function(){this.pd.handlePrev()},r.goCallback=function(t,e,n){this.go(t,e,n)},r.go=function(t,e,n){var i=n?1:3;this.moveSlide(t,e,i),n?this.RO():this.Uht()},r.Dht=function(t){var e=this;this.xht&&It(this.win).cancel(this.xht),this.xht=It(this.win).delay((function(){if(e.xht=null,!e.ght&&!e.yht){var t=e.O2.scrollLeft;e.mht?e.Hht(t,1):e.Ght(t,void 0,3)}}),t)},r.Fht=function(){var t=this._ht?45:100;this.yht=!1,this.Dht(t)},r.xj=function(t){this.Nht=t.width,this.Bht=!0},r.buildCallback=function(){var t=q(this.element),e=t.nextButton,n=t.prevButton,i=t.slideWrappers,r=t.slides,o=t.slidesContainer;this.JZ=r,this.O2=o,this.bht=i,this.dht=this.JZ.length,this.Sht=this.element.hasAttribute("loop"),this.jq=this.element.hasAttribute("autoplay"),this.Mht=this.Sht&&this.isLoopingEligible(),this.Aht=this.jq&&this.isLoopingEligible(),this.pd=new Ht({element:this.element,go:this.go.bind(this),nextButton:e,prevButton:n}),this.pd.updateButtonTitles(this.getPrevButtonTitle(),this.getNextButtonTitle()),this.eht(),this.Lht()},r.layoutCallback=function(){var t,e=this;if(this.GO=et(this.element,(function(t){var n=t.isIntersecting;return e.viewportCallback(n)})),(t=this.element).closest?t.closest("[i-amphtml-scale-animation]"):function(t,e,n){var i;for(i=t;i&&void 0!==i;i=i.parentElement)if(e(i))return i;return null}(t,(function(t){return function(t,e){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,"[i-amphtml-scale-animation]")}(t)})))return D();if(this.Bht||(this.Nht=this.O2.clientWidth),null===this.Iht)this.Xht(this.Tht);else{var n=bt().assertNumber(this.Iht,"E#19457 this.slideIndex_"),i=this.Zht(n);Ct(this.element).scheduleLayout(this.element,this.JZ[n]),this.O2.scrollLeft=i,this.Rht=i}return D()},r.unlayoutCallback=function(){var t;return null===(t=this.GO)||void 0===t||t.call(this),this.GO=null,this.Iht=null,!0},r.uht=function(){return this.Mht||this.Iht>0},r.hht=function(){return this.Mht||this.Iht<this.JZ.length-1},r.moveSlide=function(t,e,n){if(null!==this.Iht){var i=this.hht(),r=this.uht();if(1==t&&i||-1==t&&r){var o=this.Iht+t;if(-1==o?o=this.dht-1:o>=this.dht&&(o=0),e){var s=1!=t||r?this.Nht:0;this.Ght(s,t,n)}else this.$ht(o,n)}}},r.ap=function(t){var e=this.O2.scrollLeft;this.qQ||this.hk||this.Jht(e);var n=this.mht?200:this.qQ?45:100;this.Dht(n),this.Rht=e},r.Xq=function(t){var e=t.key;e!=J&&e!=Z||t.stopPropagation()},r.Jht=function(t){var e=this,n=this.O2.scrollWidth;-1==this.zht&&t>=this.Rht||1==this.zht&&t<=this.Rht?this.Ght(t).then((function(){e.zht=0})):t<0?this.zht=-1:t+this.Nht>n?this.zht=1:this.zht=0},r.Ght=function(t,e,n){var i=this;this.ght=!0;var r=this.Vht(t)-this.Iht,o=this.uht(),s=o?this.Nht:0;return 0!=r||1!=e&&-1!=e||(r=e),1==r||-1!=r&&r==-1*(this.dht-1)?s=o?2*this.Nht:this.Nht:-1!=r&&r!=this.dht-1||(s=0),this.Yht(t,s).then((function(){i.Hht(s,n)}))},r.Vht=function(t){if(!t&&!this.Nht)return 0;var e=Math.round(t/this.Nht),n=0,i=this.uht(),r=this.hht();i&&r?n=e-1:r?n=e:i&&(n=e-1);var o=this.Iht+n;return this.Mht?o<0?this.dht-1:o>=this.dht?0:o:o<0?0:o>=this.dht?this.dht-1:o},r.getPrevButtonTitle=function(){var t=this.m$(this.Iht),e=(null==t?0:t)+1;return $(this.element,{index:String(e),total:String(this.dht)})},r.getNextButtonTitle=function(){var t=this.p$(this.Iht),e=(null==t?this.dht-1:t)+1;return W(this.element,{index:String(e),total:String(this.dht)})},r.Hht=function(t,e){var n=this;if(b(t)&&null!==this.Iht){this.ght=!0;var i=this.Vht(t);this.$s.mutate((function(){n.$ht(i,e),n.$s.mutate((function(){n.ght=!1}))}))}},r.goToSlide=function(t,e){var n=parseInt(t,10);!isFinite(n)||n<0||n>=this.dht?this.user().error(ie,"Invalid [slide] value: ",t):null!==this.Iht?this.$ht(n,e):this.Tht=n},r.m$=function(t){return t-1>=0?t-1:this.Mht?this.dht-1:null},r.p$=function(t){return t+1<this.dht?t+1:this.Mht?0:null},r.Xht=function(t){var e,n,i=this,r=this.dht;if(t<0||t>=r||this.Iht==t)return!1;var o=this.m$(t),s=this.p$(t),a=[];return null!=o&&a.push(o),a.push(t),null!=s&&s!==o&&a.push(s),void 0===this.JZ[t]?(yt().error(ie,"Attempting to access a non-existant slide %s / %s",t,r),!1):(a.forEach((function(e,n){i.Mht&&ut(i.bht[e],"order",n+1),i.bht[e].classList.add(N);var r=Ct(i.element);e==t?(r.scheduleLayout(i.element,i.JZ[e]),r.scheduleResume(i.element,i.JZ[e]),i.JZ[e].setAttribute("aria-hidden","false")):(r.schedulePreload(i.element,i.JZ[e]),i.JZ[e].setAttribute("aria-hidden","true"))})),this.O2.scrollLeft=this.Zht(t),this.S$(t),this.Iht=t,this.Eht&&this.Iht===this.dht-1&&(this.Oht++,this.Oht==this.Eht&&this.qht()),this.Kht(a),null===(e=this.pd)||void 0===e||e.setControlsState({prev:this.uht(),next:this.hht()}),null===(n=this.pd)||void 0===n||n.updateButtonTitles(this.getPrevButtonTitle(),this.getNextButtonTitle()),!0)},r.$ht=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(this.Xht(t)){var n="slideChange",i=function(t,e,n,i){var r={detail:n};if(Object.assign(r,i),"function"==typeof t.CustomEvent)return new t.CustomEvent(e,r);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(e,!!r.bubbles,!!r.cancelable,n),o}(this.win,"slidescroll.".concat(n),{index:t});this.le.trigger(this.element,n,i,e),function(t,e,n,i){var r=n||{};g(t.ownerDocument);var o=i||S,s=o.bubbles,a=o.cancelable,h=new MessageEvent(e,{data:r,bubbles:s,cancelable:a});t.dispatchEvent(h)}(this.element,n,{index:t,actionTrust:e})}},r.Zht=function(t){var e=this.Nht;return(!this.Mht&&0==t||this.JZ.length<=1)&&(e=0),e},r.Kht=function(t){for(var e=this.dht,n=0;n<e;n++)this.bht[n].classList.contains(N)&&(t.includes(n)||(this.Mht&&ut(this.bht[n],"order",""),this.bht[n].classList.remove(N),this.JZ[n].removeAttribute("aria-hidden")),this.Iht!=n&&Ct(this.element).schedulePause(this.element,this.JZ[n]))},r.Yht=function(t,e){var n=this;if(t==e)return D();var i=ft(t,e),r=Nt(.8,0,.6,1),o=this.O2;return zt.animate(o,(function(t){n.O2.scrollLeft=i(t)}),80,r).thenAlways()},r.oht=function(){Dt(this.element,"touchmove",(function(t){return t.stopPropagation()}),{passive:!0})},r.S$=function(t){var e=t-this.Iht;if(0!=e){1!==Math.abs(e)&&(e=e<0?1:-1,null===this.Iht&&(e=1));var n={fromSlide:null===this.Iht?"null":this.Pht[this.Iht],toSlide:this.Pht[t]};this.u1("amp-carousel-change",n),1==e?this.u1("amp-carousel-next",n):this.u1("amp-carousel-prev",n)}},r.u1=function(t,e){!function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];_t(t).then((function(r){r&&r.triggerEventForTarget(t,e,n,i)}))}(this.element,t,e)},r.Cht=function(){var t=Number(this.element.getAttribute("delay"));t>0&&(this.jht=Math.max(1e3,t)),this.Sht||(this.element.setAttribute("loop",""),this.kht=!0,this.Sht=!0,this.Mht=!0)},r.RO=function(){this.Aht&&0!=this.Eht&&(this.Uht(),this.wht=It(this.win).delay(this.go.bind(this,1,!0,!0),this.jht))},r.s$=function(t){if(t!=this.Aht){var e=this.Aht;this.jq=t,this.Aht=this.jq&&this.isLoopingEligible(),!e&&this.Aht&&this.Cht(),this.Aht?this.RO():this.Uht()}},r.Uht=function(){null!==this.wht&&(It(this.win).cancel(this.wht),this.wht=null)},r.qht=function(){this.Uht(),this.kht&&(this.element.removeAttribute("loop"),this.kht=!1,this.Sht=!1,this.Mht=!1),this.jq=!1,this.Aht=this.jq&&this.isLoopingEligible()},i}(t.BaseElement),oe=function(t){n(i,t);var e=a(i);function i(){return e.apply(this,arguments)}return i.prototype.upgradeCallback=function(){return G(this.element)?new Zt(this.element):new re(this.element)},i}(t.BaseElement);t.registerElement("amp-carousel",oe,'.amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;transform:translateY(-50%);visibility:hidden;z-index:10}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-mode-mouse .amp-carousel-button,amp-carousel.i-amphtml-carousel-has-controls .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/></svg>\');background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>\');background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:none}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{animation:none;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-next,amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-prev{opacity:0;pointer-events:none;visibility:visible!important}.i-amphtml-slides-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;scroll-snap-type:x mandatory!important;scrollbar-width:none;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container::-webkit-scrollbar{display:none!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-ms-flex-align:center!important;align-items:center!important;display:none!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;scroll-snap-align:start!important;width:1px!important}.i-amphtml-carousel-start-marker{-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{scroll-snap-align:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/')}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});