"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[711],{2797:function(e,t,r){r.d(t,{A:function(){return n}});var s=r(6540),a=r(4810);function n(e){return void 0!==e.isNewTab&&e.isNewTab?s.createElement("div",null,s.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer"},s.createElement("button",{className:"stationary-button",style:e.css,type:void 0!==e.buttonType?e.buttonType:"button"},e.title))):s.createElement("div",null,s.createElement(a.N_,{to:e.link},s.createElement("button",{className:"stationary-button",style:e.css},e.title)))}},510:function(e,t,r){r.d(t,{A:function(){return d}});var s=r(5540),a=r(6540),n=r(4810);let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,s.A)(t,e),t.prototype.render=function(){const e=this.props.footerlinks.map((e=>a.createElement(n.N_,{className:"footer-link",style:{color:"white"},to:`/${e.toLowerCase().replace(/\s/g,"")}`,key:e},e)));return a.createElement("div",null,a.createElement("div",{className:"footer-links-container"},e))},t}(a.Component);var l=i,o=r(2797);const u=new Date;let c=function(e){function t(){return e.apply(this,arguments)||this}return(0,s.A)(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement("div",{className:"action-container"},a.createElement(o.A,{title:"Repo",link:"/repo"}),a.createElement(o.A,{title:"About",link:"/about"}),a.createElement(o.A,{title:"Contact",link:"/contact"})),a.createElement("footer",null,a.createElement("div",{className:"links-container"},a.createElement(l,{footerlinks:["Repo","Projects"]}),a.createElement(l,{footerlinks:["Blog","Games","Privacy Policy"]}),a.createElement(l,{footerlinks:["Contact","About"]})),a.createElement("p",null,"Copyright © ",u.getFullYear()," Owen Bean. All rights reserved.")))},t}(a.Component);var d=c},6634:function(e,t,r){r.d(t,{A:function(){return d}});var s=r(5540),a=r(6540),n=r(4810);var i=function(e){function t(t){var r;return(r=e.call(this,t)||this).showLinks=()=>{r.setState((e=>({css:{height:64*r.props.links.length+"px"}})))},r.hideLinks=()=>{r.setState((e=>({css:{height:"64px"}})))},r.state={css:{height:"64px"}},r.showLinks=r.showLinks.bind(r),r.hideLinks=r.hideLinks.bind(r),r}return(0,s.A)(t,e),t.prototype.render=function(){return a.createElement("div",null,a.createElement("div",{onMouseOver:this.showLinks,onMouseLeave:this.hideLinks,style:this.state.css,className:"nav-links-container"},this.props.links.map((e=>a.createElement(n.N_,{className:"nav-link",to:`/${e.toLowerCase().replace(/\s/g,"")}`,key:e},e))),";"))},t}(a.Component);var l=e=>a.createElement("div",{className:"hamburger-container",onClick:e.clickMe},a.createElement("div",{className:"hamburger-bar"}),a.createElement("div",{className:"hamburger-bar"}),a.createElement("div",{className:"hamburger-bar"}));let o=function(e){function t(){return e.apply(this,arguments)||this}return(0,s.A)(t,e),t.prototype.render=function(){const e=this.props.sidelinks.map((e=>a.createElement(n.N_,{className:"nav-side-link",to:`/${e.toLowerCase().replace(/\s/g,"")}`,style:{color:"white"},key:e},e.charAt(0).toUpperCase()+e.substring(1,e.length))));return a.createElement("div",{className:"sidebar-container",style:this.props.sidebarCss},a.createElement("div",{className:"sidebar-header-container"},a.createElement("h1",{onClick:this.props.clickHide},"Owen Bean"),a.createElement("div",{className:"spacer"}),a.createElement("div",{className:"x-container",onClick:this.props.clickHide},a.createElement("div",{className:"x-bar-left"}),a.createElement("div",{className:"x-bar-right"}))),a.createElement("div",{className:"sidebar-links-container",onClick:this.props.clickHide},e))},t}(a.Component);var u=o;const c={repo:["Repo","Projects"],blog:["Blog","Games"],about:["About","Contact"]};var d=function(e){function t(t){var r;return(r=e.call(this,t)||this).showSide=()=>{r.setState((e=>({css:{top:0}})))},r.hideSide=()=>{r.setState((e=>({css:{top:"-100vh"}})))},r.state={css:{top:"-100vh"}},r.showSide=r.showSide.bind(r),r.hideSide=r.hideSide.bind(r),r}return(0,s.A)(t,e),t.prototype.render=function(){var e=[];for(let t=0;t<Object.keys(c).length;t++)e.push(a.createElement(i,{className:"nav-links-container",links:c[Object.keys(c)[t]],key:c[Object.keys(c)[t]]}));return a.createElement("div",null,a.createElement("nav",null,a.createElement("h1",null,a.createElement(n.N_,{to:"/"},"Owen Bean")),a.createElement("div",{className:"spacer"}),e,a.createElement(l,{clickMe:this.showSide}),a.createElement(u,{sidelinks:Object.keys(c),sidebarCss:this.state.css,clickHide:this.hideSide})))},t}(a.Component)},8127:function(e,t,r){r.r(t),r.d(t,{default:function(){return Se}});var s=r(4810),a=r(6540),n=e=>"checkbox"===e.type,i=e=>e instanceof Date,l=e=>null==e;const o=e=>"object"==typeof e;var u=e=>!l(e)&&!Array.isArray(e)&&o(e)&&!i(e),c=e=>u(e)&&e.target?n(e.target)?e.target.checked:e.target.value:e,d=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),f=e=>{const t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},m="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function h(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(m&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;if(t=r?[]:{},r||f(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=h(e[r]));else t=e}return t}var y=e=>Array.isArray(e)?e.filter(Boolean):[],v=e=>void 0===e,p=(e,t,r)=>{if(!t||!u(e))return r;const s=y(t.split(/[,[\].]+?/)).reduce(((e,t)=>l(e)?e:e[t]),e);return v(s)||s===e?v(e[t])?r:e[t]:s},g=e=>"boolean"==typeof e,b=e=>/^\w*$/.test(e),k=e=>y(e.replace(/["|']|\]/g,"").split(/\.|\[/)),_=(e,t,r)=>{let s=-1;const a=b(t)?[t]:k(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}if("__proto__"===t)return;e[t]=n,e=e[t]}return e};const w={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},A={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},E="max",V="min",S="maxLength",F="minLength",x="pattern",D="required",N="validate";a.createContext(null);var C=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t._proxyFormState[a]!==A.all&&(t._proxyFormState[a]=!s||A.all),r&&(r[a]=!0),e[a]}});return a},O=e=>u(e)&&!Object.keys(e).length,L=(e,t,r,s)=>{r(e);const{name:a,...n}=e;return O(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find((e=>t[e]===(!s||A.all)))},M=e=>Array.isArray(e)?e:[e];function T(e){const t=a.useRef(e);t.current=e,a.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var j=e=>"string"==typeof e,B=(e,t,r,s,a)=>j(e)?(s&&t.watch.add(e),p(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),p(r,e)))):(s&&(t.watchAll=!0),r);var U=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},R=e=>({isOnSubmit:!e||e===A.onSubmit,isOnBlur:e===A.onBlur,isOnChange:e===A.onChange,isOnAll:e===A.all,isOnTouch:e===A.onTouched}),P=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));const H=(e,t,r,s)=>{for(const a of r||Object.keys(e)){const r=p(e,a);if(r){const{_f:e,...n}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],a)&&!s)break;if(e.ref&&t(e.ref,e.name)&&!s)break;H(n,t)}else u(n)&&H(n,t)}}};var q=(e,t,r)=>{const s=y(p(e,r));return _(s,"root",t[r]),_(e,r,s),e},$=e=>"file"===e.type,I=e=>"function"==typeof e,W=e=>{if(!m)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},G=e=>j(e),Y=e=>"radio"===e.type,z=e=>e instanceof RegExp;const J={value:!1,isValid:!1},K={value:!0,isValid:!0};var Q=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!v(e[0].attributes.value)?v(e[0].value)||""===e[0].value?K:{value:e[0].value,isValid:!0}:K:J}return J};const X={isValid:!1,value:null};var Z=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),X):X;function ee(e,t,r="validate"){if(G(e)||Array.isArray(e)&&e.every(G)||g(e)&&!e)return{type:r,message:G(e)?e:"",ref:t}}var te=e=>u(e)&&!z(e)?e:{value:e,message:""},re=async(e,t,r,s,a)=>{const{ref:i,refs:o,required:c,maxLength:d,minLength:f,min:m,max:h,pattern:y,validate:b,name:k,valueAsNumber:_,mount:w,disabled:A}=e._f,C=p(t,k);if(!w||A)return{};const L=o?o[0]:i,M=e=>{s&&L.reportValidity&&(L.setCustomValidity(g(e)?"":e||""),L.reportValidity())},T={},B=Y(i),R=n(i),P=B||R,H=(_||$(i))&&v(i.value)&&v(C)||W(i)&&""===i.value||""===C||Array.isArray(C)&&!C.length,q=U.bind(null,k,r,T),J=(e,t,r,s=S,a=F)=>{const n=e?t:r;T[k]={type:e?s:a,message:n,ref:i,...q(e?s:a,n)}};if(a?!Array.isArray(C)||!C.length:c&&(!P&&(H||l(C))||g(C)&&!C||R&&!Q(o).isValid||B&&!Z(o).isValid)){const{value:e,message:t}=G(c)?{value:!!c,message:c}:te(c);if(e&&(T[k]={type:D,message:t,ref:L,...q(D,t)},!r))return M(t),T}if(!(H||l(m)&&l(h))){let e,t;const s=te(h),a=te(m);if(l(C)||isNaN(C)){const r=i.valueAsDate||new Date(C),n=e=>new Date((new Date).toDateString()+" "+e),l="time"==i.type,o="week"==i.type;j(s.value)&&C&&(e=l?n(C)>n(s.value):o?C>s.value:r>new Date(s.value)),j(a.value)&&C&&(t=l?n(C)<n(a.value):o?C<a.value:r<new Date(a.value))}else{const r=i.valueAsNumber||(C?+C:C);l(s.value)||(e=r>s.value),l(a.value)||(t=r<a.value)}if((e||t)&&(J(!!e,s.message,a.message,E,V),!r))return M(T[k].message),T}if((d||f)&&!H&&(j(C)||a&&Array.isArray(C))){const e=te(d),t=te(f),s=!l(e.value)&&C.length>+e.value,a=!l(t.value)&&C.length<+t.value;if((s||a)&&(J(s,e.message,t.message),!r))return M(T[k].message),T}if(y&&!H&&j(C)){const{value:e,message:t}=te(y);if(z(e)&&!C.match(e)&&(T[k]={type:x,message:t,ref:i,...q(x,t)},!r))return M(t),T}if(b)if(I(b)){const e=ee(await b(C,t),L);if(e&&(T[k]={...e,...q(N,e.message)},!r))return M(e.message),T}else if(u(b)){let e={};for(const s in b){if(!O(e)&&!r)break;const a=ee(await b[s](C,t),L,s);a&&(e={...a,...q(s,a.message)},M(a.message),r&&(T[k]=e))}if(!O(e)&&(T[k]={ref:L,...e},!r))return T}return M(!0),T};function se(e,t){const r=Array.isArray(t)?t:b(t)?[t]:k(t),s=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=v(e)?s++:e[t[s++]];return e}(e,r),a=r.length-1,n=r[a];return s&&delete s[n],0!==a&&(u(s)&&O(s)||Array.isArray(s)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!v(e[t]))return!1;return!0}(s))&&se(e,r.slice(0,-1)),e}var ae=()=>{let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}},ne=e=>l(e)||!o(e);function ie(e,t){if(ne(e)||ne(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!ie(r,e):r!==e)return!1}}return!0}var le=e=>"select-multiple"===e.type,oe=e=>Y(e)||n(e),ue=e=>W(e)&&e.isConnected,ce=e=>{for(const t in e)if(I(e[t]))return!0;return!1};function de(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!ce(e[s])?(t[s]=Array.isArray(e[s])?[]:{},de(e[s],t[s])):l(e[s])||(t[s]=!0);return t}function fe(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!ce(e[a])?v(t)||ne(r[a])?r[a]=Array.isArray(e[a])?de(e[a],[]):{...de(e[a])}:fe(e[a],l(t)?{}:t[a],r[a]):r[a]=!ie(e[a],t[a]);return r}var me=(e,t)=>fe(e,t,de(t)),he=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>v(e)?e:t?""===e?NaN:e?+e:e:r&&j(e)?new Date(e):s?s(e):e;function ye(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return $(t)?t.files:Y(t)?Z(e.refs).value:le(t)?[...t.selectedOptions].map((({value:e})=>e)):n(t)?Q(e.refs).value:he(v(t.value)?e.ref.value:t.value,e)}var ve=(e,t,r,s)=>{const a={};for(const n of e){const e=p(t,n);e&&_(a,n,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},pe=e=>v(e)?e:z(e)?e.source:u(e)?z(e.value)?e.value.source:e.value:e,ge=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function be(e,t,r){const s=p(e,r);if(s||b(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=p(t,s),i=p(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}var ke=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),_e=(e,t)=>!y(p(e,t)).length&&se(e,t);const we={mode:A.onSubmit,reValidateMode:A.onChange,shouldFocusError:!0};function Ae(e={}){let t,r={...we,...e},s={submitCount:0,isDirty:!1,isLoading:I(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},a={},o=(u(r.defaultValues)||u(r.values))&&h(r.defaultValues||r.values)||{},f=r.shouldUnregister?{}:h(o),b={action:!1,mount:!1,watch:!1},k={mount:new Set,unMount:new Set,array:new Set,watch:new Set},E=0;const V={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},S={values:ae(),array:ae(),state:ae()},F=R(r.mode),x=R(r.reValidateMode),D=r.criteriaMode===A.all,N=async e=>{if(V.isValid||e){const e=r.resolver?O((await G()).errors):await Y(a,!0);e!==s.isValid&&S.state.next({isValid:e})}},C=(e,t)=>{(V.isValidating||V.validatingFields)&&((e||Array.from(k.mount)).forEach((e=>{e&&(t?_(s.validatingFields,e,t):se(s.validatingFields,e))})),S.state.next({validatingFields:s.validatingFields,isValidating:!O(s.validatingFields)}))},L=(e,t,r,s)=>{const n=p(a,e);if(n){const a=p(f,e,v(r)?p(o,e):r);v(a)||s&&s.defaultChecked||t?_(f,e,t?a:ye(n._f)):K(e,a),b.mount&&N()}},T=(e,t,r,n,i)=>{let l=!1,u=!1;const c={name:e},d=!(!p(a,e)||!p(a,e)._f.disabled);if(!r||n){V.isDirty&&(u=s.isDirty,s.isDirty=c.isDirty=z(),l=u!==c.isDirty);const r=d||ie(p(o,e),t);u=!(d||!p(s.dirtyFields,e)),r||d?se(s.dirtyFields,e):_(s.dirtyFields,e,!0),c.dirtyFields=s.dirtyFields,l=l||V.dirtyFields&&u!==!r}if(r){const t=p(s.touchedFields,e);t||(_(s.touchedFields,e,r),c.touchedFields=s.touchedFields,l=l||V.touchedFields&&t!==r)}return l&&i&&S.state.next(c),l?c:{}},U=(r,a,n,i)=>{const l=p(s.errors,r),o=V.isValid&&g(a)&&s.isValid!==a;var u;if(e.delayError&&n?(u=()=>((e,t)=>{_(s.errors,e,t),S.state.next({errors:s.errors})})(r,n),t=e=>{clearTimeout(E),E=setTimeout(u,e)},t(e.delayError)):(clearTimeout(E),t=null,n?_(s.errors,r,n):se(s.errors,r)),(n?!ie(l,n):l)||!O(i)||o){const e={...i,...o&&g(a)?{isValid:a}:{},errors:s.errors,name:r};s={...s,...e},S.state.next(e)}},G=async e=>{C(e,!0);const t=await r.resolver(f,r.context,ve(e||k.mount,a,r.criteriaMode,r.shouldUseNativeValidation));return C(e),t},Y=async(e,t,a={valid:!0})=>{for(const n in e){const i=e[n];if(i){const{_f:e,...l}=i;if(e){const l=k.array.has(e.name);C([n],!0);const o=await re(i,f,D,r.shouldUseNativeValidation&&!t,l);if(C([n]),o[e.name]&&(a.valid=!1,t))break;!t&&(p(o,e.name)?l?q(s.errors,o,e.name):_(s.errors,e.name,o[e.name]):se(s.errors,e.name))}l&&await Y(l,t,a)}}return a.valid},z=(e,t)=>(e&&t&&_(f,e,t),!ie(ce(),o)),J=(e,t,r)=>B(e,k,{...b.mount?f:v(t)?o:j(e)?{[e]:t}:t},r,t),K=(e,t,r={})=>{const s=p(a,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&_(f,e,he(t,r)),i=W(r.ref)&&l(t)?"":t,le(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?n(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):$(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||S.values.next({name:e,values:{...f}})))}(r.shouldDirty||r.shouldTouch)&&T(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&te(e)},Q=(e,t,r)=>{for(const s in t){const n=t[s],l=`${e}.${s}`,o=p(a,l);!k.array.has(e)&&ne(n)&&(!o||o._f)||i(n)?K(l,n,r):Q(l,n,r)}},X=(e,t,r={})=>{const n=p(a,e),i=k.array.has(e),u=h(t);_(f,e,u),i?(S.array.next({name:e,values:{...f}}),(V.isDirty||V.dirtyFields)&&r.shouldDirty&&S.state.next({name:e,dirtyFields:me(o,f),isDirty:z(e,u)})):!n||n._f||l(u)?K(e,u,r):Q(e,u,r),P(e,k)&&S.state.next({...s}),S.values.next({name:b.mount?e:void 0,values:{...f}})},Z=async e=>{b.mount=!0;const n=e.target;let i=n.name,l=!0;const o=p(a,i),u=e=>{l=Number.isNaN(e)||e===p(f,i,e)};if(o){let d,m;const h=n.type?ye(o._f):c(e),y=e.type===w.BLUR||e.type===w.FOCUS_OUT,v=!ge(o._f)&&!r.resolver&&!p(s.errors,i)&&!o._f.deps||ke(y,p(s.touchedFields,i),s.isSubmitted,x,F),g=P(i,k,y);_(f,i,h),y?(o._f.onBlur&&o._f.onBlur(e),t&&t(0)):o._f.onChange&&o._f.onChange(e);const b=T(i,h,y,!1),A=!O(b)||g;if(!y&&S.values.next({name:i,type:e.type,values:{...f}}),v)return V.isValid&&N(),A&&S.state.next({name:i,...g?{}:b});if(!y&&g&&S.state.next({...s}),r.resolver){const{errors:e}=await G([i]);if(u(h),l){const t=be(s.errors,a,i),r=be(e,a,t.name||i);d=r.error,i=r.name,m=O(e)}}else C([i],!0),d=(await re(o,f,D,r.shouldUseNativeValidation))[i],C([i]),u(h),l&&(d?m=!1:V.isValid&&(m=await Y(a,!0)));l&&(o._f.deps&&te(o._f.deps),U(i,m,d,b))}},ee=(e,t)=>{if(p(s.errors,t)&&e.focus)return e.focus(),1},te=async(e,t={})=>{let n,i;const l=M(e);if(r.resolver){const t=await(async e=>{const{errors:t}=await G(e);if(e)for(const r of e){const e=p(t,r);e?_(s.errors,r,e):se(s.errors,r)}else s.errors=t;return t})(v(e)?e:l);n=O(t),i=e?!l.some((e=>p(t,e))):n}else e?(i=(await Promise.all(l.map((async e=>{const t=p(a,e);return await Y(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||s.isValid)&&N()):i=n=await Y(a);return S.state.next({...!j(e)||V.isValid&&n!==s.isValid?{}:{name:e},...r.resolver||!e?{isValid:n}:{},errors:s.errors}),t.shouldFocus&&!i&&H(a,ee,e?l:k.mount),i},ce=e=>{const t={...b.mount?f:o};return v(e)?t:j(e)?p(t,e):e.map((e=>p(t,e)))},de=(e,t)=>({invalid:!!p((t||s).errors,e),isDirty:!!p((t||s).dirtyFields,e),isTouched:!!p((t||s).touchedFields,e),isValidating:!!p((t||s).validatingFields,e),error:p((t||s).errors,e)}),fe=(e,t,r)=>{const n=(p(a,e,{_f:{}})._f||{}).ref,i=p(s.errors,e)||{},{ref:l,message:o,type:u,...c}=i;_(s.errors,e,{...c,...t,ref:n}),S.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&n&&n.focus&&n.focus()},Ae=(e,t={})=>{for(const n of e?M(e):k.mount)k.mount.delete(n),k.array.delete(n),t.keepValue||(se(a,n),se(f,n)),!t.keepError&&se(s.errors,n),!t.keepDirty&&se(s.dirtyFields,n),!t.keepTouched&&se(s.touchedFields,n),!t.keepIsValidating&&se(s.validatingFields,n),!r.shouldUnregister&&!t.keepDefaultValue&&se(o,n);S.values.next({values:{...f}}),S.state.next({...s,...t.keepDirty?{isDirty:z()}:{}}),!t.keepIsValid&&N()},Ee=({disabled:e,name:t,field:r,fields:s,value:a})=>{if(g(e)&&b.mount||e){const n=e?void 0:v(a)?ye(r?r._f:p(s,t)._f):a;_(f,t,n),T(t,n,!1,!1,!0)}},Ve=(e,t={})=>{let s=p(a,e);const n=g(t.disabled);return _(a,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),k.mount.add(e),s?Ee({field:s,disabled:t.disabled,name:e,value:t.value}):L(e,!0,t.value),{...n?{disabled:t.disabled}:{},...r.progressive?{required:!!t.required,min:pe(t.min),max:pe(t.max),minLength:pe(t.minLength),maxLength:pe(t.maxLength),pattern:pe(t.pattern)}:{},name:e,onChange:Z,onBlur:Z,ref:n=>{if(n){Ve(e,t),s=p(a,e);const r=v(n.value)&&n.querySelectorAll&&n.querySelectorAll("input,select,textarea")[0]||n,i=oe(r),l=s._f.refs||[];if(i?l.find((e=>e===r)):r===s._f.ref)return;_(a,e,{_f:{...s._f,...i?{refs:[...l.filter(ue),r,...Array.isArray(p(o,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),L(e,!1,void 0,r)}else s=p(a,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!d(k.array,e)||!b.action)&&k.unMount.add(e)}}},Se=()=>r.shouldFocusError&&H(a,ee,k.mount),Fe=(e,t)=>async n=>{let i;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let l=h(f);if(S.state.next({isSubmitting:!0}),r.resolver){const{errors:e,values:t}=await G();s.errors=e,l=t}else await Y(a);if(se(s.errors,"root"),O(s.errors)){S.state.next({errors:{}});try{await e(l,n)}catch(o){i=o}}else t&&await t({...s.errors},n),Se(),setTimeout(Se);if(S.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(s.errors)&&!i,submitCount:s.submitCount+1,errors:s.errors}),i)throw i},xe=(t,r={})=>{const n=t?h(t):o,i=h(n),l=O(t),u=l?o:i;if(r.keepDefaultValues||(o=n),!r.keepValues){if(r.keepDirtyValues)for(const e of k.mount)p(s.dirtyFields,e)?_(u,e,p(f,e)):X(e,p(u,e));else{if(m&&v(t))for(const e of k.mount){const t=p(a,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(W(e)){const t=e.closest("form");if(t){t.reset();break}}}}a={}}f=e.shouldUnregister?r.keepDefaultValues?h(o):{}:h(u),S.array.next({values:{...u}}),S.values.next({values:{...u}})}k={mount:r.keepDirtyValues?k.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},b.mount=!V.isValid||!!r.keepIsValid||!!r.keepDirtyValues,b.watch=!!e.shouldUnregister,S.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:!l&&(r.keepDirty?s.isDirty:!(!r.keepDefaultValues||ie(t,o))),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:l?[]:r.keepDirtyValues?r.keepDefaultValues&&f?me(o,f):s.dirtyFields:r.keepDefaultValues&&t?me(o,t):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&s.isSubmitSuccessful,isSubmitting:!1})},De=(e,t)=>xe(I(e)?e(f):e,t);return{control:{register:Ve,unregister:Ae,getFieldState:de,handleSubmit:Fe,setError:fe,_executeSchema:G,_getWatch:J,_getDirty:z,_updateValid:N,_removeUnmounted:()=>{for(const e of k.unMount){const t=p(a,e);t&&(t._f.refs?t._f.refs.every((e=>!ue(e))):!ue(t._f.ref))&&Ae(e)}k.unMount=new Set},_updateFieldArray:(e,t=[],r,n,i=!0,l=!0)=>{if(n&&r){if(b.action=!0,l&&Array.isArray(p(a,e))){const t=r(p(a,e),n.argA,n.argB);i&&_(a,e,t)}if(l&&Array.isArray(p(s.errors,e))){const t=r(p(s.errors,e),n.argA,n.argB);i&&_(s.errors,e,t),_e(s.errors,e)}if(V.touchedFields&&l&&Array.isArray(p(s.touchedFields,e))){const t=r(p(s.touchedFields,e),n.argA,n.argB);i&&_(s.touchedFields,e,t)}V.dirtyFields&&(s.dirtyFields=me(o,f)),S.state.next({name:e,isDirty:z(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else _(f,e,t)},_updateDisabledField:Ee,_getFieldArray:t=>y(p(b.mount?f:o,t,e.shouldUnregister?p(o,t,[]):[])),_reset:xe,_resetDefaultValues:()=>I(r.defaultValues)&&r.defaultValues().then((e=>{De(e,r.resetOptions),S.state.next({isLoading:!1})})),_updateFormState:e=>{s={...s,...e}},_disableForm:e=>{g(e)&&(S.state.next({disabled:e}),H(a,((t,r)=>{const s=p(a,r);s&&(t.disabled=s._f.disabled||e,Array.isArray(s._f.refs)&&s._f.refs.forEach((t=>{t.disabled=s._f.disabled||e})))}),0,!1))},_subjects:S,_proxyFormState:V,_setErrors:e=>{s.errors=e,S.state.next({errors:s.errors,isValid:!1})},get _fields(){return a},get _formValues(){return f},get _state(){return b},set _state(e){b=e},get _defaultValues(){return o},get _names(){return k},set _names(e){k=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:te,register:Ve,handleSubmit:Fe,watch:(e,t)=>I(e)?S.values.subscribe({next:r=>e(J(void 0,t),r)}):J(e,t,!0),setValue:X,getValues:ce,reset:De,resetField:(e,t={})=>{p(a,e)&&(v(t.defaultValue)?X(e,h(p(o,e))):(X(e,t.defaultValue),_(o,e,h(t.defaultValue))),t.keepTouched||se(s.touchedFields,e),t.keepDirty||(se(s.dirtyFields,e),s.isDirty=t.defaultValue?z(e,h(p(o,e))):z()),t.keepError||(se(s.errors,e),V.isValid&&N()),S.state.next({...s}))},clearErrors:e=>{e&&M(e).forEach((e=>se(s.errors,e))),S.state.next({errors:e?s.errors:{}})},unregister:Ae,setError:fe,setFocus:(e,t={})=>{const r=p(a,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:de}}var Ee=r(510),Ve=r(6634);function Se(e){let{data:t}=e;const{register:r,watch:n}=function(e={}){const t=a.useRef(),r=a.useRef(),[s,n]=a.useState({isDirty:!1,isValidating:!1,isLoading:I(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:I(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Ae(e),formState:s});const i=t.current.control;return i._options=e,T({subject:i._subjects.state,next:e=>{L(e,i._proxyFormState,i._updateFormState,!0)&&n({...i._formState})}}),a.useEffect((()=>i._disableForm(e.disabled)),[i,e.disabled]),a.useEffect((()=>{if(i._proxyFormState.isDirty){const e=i._getDirty();e!==s.isDirty&&i._subjects.state.next({isDirty:e})}}),[i,s.isDirty]),a.useEffect((()=>{e.values&&!ie(e.values,r.current)?(i._reset(e.values,i._options.resetOptions),r.current=e.values,n((e=>({...e})))):i._resetDefaultValues()}),[e.values,i]),a.useEffect((()=>{e.errors&&i._setErrors(e.errors)}),[e.errors,i]),a.useEffect((()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()})),a.useEffect((()=>{e.shouldUnregister&&i._subjects.values.next({values:i._getWatch()})}),[e.shouldUnregister,i]),t.current.formState=C(s,i),t.current}();var i=[],l=0;for(let c=0;c<t.allMarkdownRemark.edges.length;c++){var o=t.allMarkdownRemark.edges[c].node.frontmatter.title.toLowerCase().split(" ");const e=t.allMarkdownRemark.edges[c].node.frontmatter.date.split("-");for(let t=0;t<e.length;t++)o.push(e[t]);o.push(t.allMarkdownRemark.edges[c].node.frontmatter.date);var u=!0;if(void 0!==n("search"))u=Fe(o,n("search").toLowerCase().split(" "));if(u?(i.push(a.createElement("div",{className:"blog-card",key:t.allMarkdownRemark.edges[c].node.frontmatter.title},a.createElement(s.N_,{to:t.allMarkdownRemark.edges[c].node.fields.slug},a.createElement("div",{className:"blog-container"},a.createElement("p",{className:"blog-title"},t.allMarkdownRemark.edges[c].node.frontmatter.title),a.createElement("div",{className:"blog-info"},a.createElement("p",null,t.allMarkdownRemark.edges[c].node.frontmatter.date),a.createElement("p",null,"Word Count: ",t.allMarkdownRemark.edges[c].node.wordCount.words)))))),l++):i.push(null),i.length>16)break}return a.createElement("div",null,a.createElement(Ve.A,null),a.createElement("main",{className:"blog-main"},a.createElement("h1",null,"Blog Posts"),a.createElement("form",null,a.createElement("input",Object.assign({},r,{name:"search",type:"text",defaultValue:"",className:"blog-search-bar",placeholder:"Search for Blog"}))),a.createElement("div",{className:"blog-link-container"},i),l<4?l<1?a.createElement("p",{style:{height:"200px",width:"300px",margin:"32px auto",display:"block"}},"Nothing was found..."):a.createElement("div",{style:{height:"120px",width:"100px"}}):null),a.createElement(Ee.A,null))}function Fe(e,t){for(let s=0;s<e.length;s++)for(let a=0;a<t.length;a++){var r=!0;for(let n=0;n<t[a].length;n++)t[a].charAt(n)!==e[s].charAt(n)&&(r=!1);if(r)return!0}return!1}}}]);
//# sourceMappingURL=component---src-pages-blog-js-65d68437e5be6c1e352f.js.map