(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[541],{4852:function(e){"use strict";e.exports=Object.assign},553:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),o=n(4160);function i(e){return void 0!==e.isNewTab&&e.isNewTab?r.createElement("div",null,r.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer"},r.createElement("button",{className:"stationary-button",style:e.css,type:void 0!==e.buttonType?e.buttonType:"button"},e.title))):r.createElement("div",null,r.createElement(o.rU,{to:e.link},r.createElement("button",{className:"stationary-button",style:e.css},e.title)))}},7907:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(1721),o=n(7294),i=n(4160);let a=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){const e=this.props.footerlinks.map((e=>o.createElement(i.rU,{className:"footer-link",style:{color:"white"},to:"/"+e.toLowerCase().replace(/\s/g,""),key:e},e)));return o.createElement("div",null,o.createElement("div",{className:"footer-links-container"},e))},t}(o.Component);var c=a,s=n(553);const u=new Date;let l=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return o.createElement("div",null,o.createElement("div",{className:"action-container"},o.createElement(s.Z,{title:"Repo",link:"/repo"}),o.createElement(s.Z,{title:"About",link:"/about"}),o.createElement(s.Z,{title:"Contact",link:"/contact"})),o.createElement("footer",null,o.createElement("div",{className:"links-container"},o.createElement(c,{footerlinks:["Repo","WearOS","Websites"]}),o.createElement(c,{footerlinks:["Blog","Games","Privacy Policy"]}),o.createElement(c,{footerlinks:["Contact","About"]})),o.createElement("p",null,"Copyright © ",u.getFullYear()," Owen Bean. All rights reserved.")))},t}(o.Component);var f=l},2505:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,o,i,a,c=n(1721),s=n(7294),u=n(5697),l=n.n(u),f=n(3524),p=n.n(f),d=n(9590),h=n.n(d),m=n(4852),y=n.n(m),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",C="href",k="http-equiv",O="innerHTML",A="itemprop",S="name",j="property",L="rel",N="src",P="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",R="encodeSpecialCharacters",_="onChangeClientState",B="titleTemplate",Z=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),H=[T.NOSCRIPT,T.SCRIPT,T.STYLE],U="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=J(e,T.TITLE),n=J(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,I);return t||r||void 0},K=function(e){return J(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===L&&"canonical"===e[n].toLowerCase()||s===L&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==O&&c!==E&&c!==A||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=y()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),X=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ce(T.BODY,r),ce(T.HTML,o),ae(f,p);var d={baseTag:se(T.BASE,n),linkTags:se(T.LINK,i),metaTags:se(T.META,a),noscriptTags:se(T.NOSCRIPT,c),scriptTags:se(T.SCRIPT,u),styleTags:se(T.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),s(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(T.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(U):n.getAttribute(U)!==a.join(",")&&n.setAttribute(U,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+U+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,o=le(n,r),[s.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=ie(t);return o?"<"+e+" "+U+'="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+" "+U+'="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return le(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===O||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+" "+U+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:fe(T.BASE,t,r),bodyAttributes:fe(b,n,r),htmlAttributes:fe(v,o,r),link:fe(T.LINK,i,r),meta:fe(T.META,a,r),noscript:fe(T.NOSCRIPT,c,r),script:fe(T.SCRIPT,s,r),style:fe(T.STYLE,u,r),title:fe(T.TITLE,{title:f,titleAttributes:p},r)}},de=p()((function(e){return{baseTag:V([C,P],e),bodyAttributes:G(b,e),defer:J(e,M),encode:J(e,R),htmlAttributes:G(v,e),linkTags:$(T.LINK,[L,C],e),metaTags:$(T.META,[S,w,k,j,A],e),noscriptTags:$(T.NOSCRIPT,[O],e),onChangeClientState:K(e),scriptTags:$(T.SCRIPT,[N,O],e),styleTags:$(T.STYLE,[E],e),title:z(e),titleAttributes:G(g,e)}}),(function(e){re&&te(re),e.defer?re=ee((function(){oe(e,(function(){re=null}))})):(oe(e),re=null)}),pe)((function(){return null})),he=(o=de,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return F({},o,((t={})[r.type]=a,t.titleAttributes=F({},i),t));case T.BODY:return F({},o,{bodyAttributes:F({},i)});case T.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(o,r)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var me=n.p+"static/favicon-071906ad5cebbc0ff82c1e2cacc68b3b.ico";let ye=function(e){function t(){return e.apply(this,arguments)||this}return(0,c.Z)(t,e),t.prototype.render=function(){const e=void 0!==this.props.title?this.props.title:"";return s.createElement("div",null,s.createElement(he,null,s.createElement("meta",{name:"author",content:"Owen G. Bean"}),s.createElement("meta",{name:"application-name",content:"Owen G. Bean Portfolio"}),s.createElement("meta",{name:"description",content:this.props.desc}),s.createElement("meta",{charset:"UTF-8"}),s.createElement("title",null,"Owen G. Bean "+e),s.createElement("link",{rel:"shortcut icon",href:me,type:"image/x-icon"})))},t}(s.Component);var be=ye},8067:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7326),o=n(1721),i=n(7294),a=n(4160);var c=function(e){function t(t){var n;return(n=e.call(this,t)||this).showLinks=()=>{n.setState((e=>({css:{height:64*n.props.links.length+"px"}})))},n.hideLinks=()=>{n.setState((e=>({css:{height:"64px"}})))},n.state={css:{height:"64px"}},n.showLinks=n.showLinks.bind((0,r.Z)(n)),n.hideLinks=n.hideLinks.bind((0,r.Z)(n)),n}return(0,o.Z)(t,e),t.prototype.render=function(){return i.createElement("div",null,i.createElement("div",{onMouseOver:this.showLinks,onMouseLeave:this.hideLinks,style:this.state.css,className:"nav-links-container"},this.props.links.map((e=>i.createElement(a.rU,{className:"nav-link",to:"/"+e.toLowerCase().replace(/\s/g,""),key:e},e))),";"))},t}(i.Component);var s=e=>i.createElement("div",{className:"hamburger-container",onClick:e.clickMe},i.createElement("div",{className:"hamburger-bar"}),i.createElement("div",{className:"hamburger-bar"}),i.createElement("div",{className:"hamburger-bar"}));let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){const e=this.props.sidelinks.map((e=>i.createElement(a.rU,{className:"nav-side-link",to:"/"+e.toLowerCase().replace(/\s/g,""),style:{color:"white"},key:e},e.charAt(0).toUpperCase()+e.substring(1,e.length))));return i.createElement("div",{className:"sidebar-container",style:this.props.sidebarCss},i.createElement("div",{className:"sidebar-header-container"},i.createElement("h1",{onClick:this.props.clickHide},"Owen Bean"),i.createElement("div",{className:"spacer"}),i.createElement("div",{className:"x-container",onClick:this.props.clickHide},i.createElement("div",{className:"x-bar-left"}),i.createElement("div",{className:"x-bar-right"}))),i.createElement("div",{className:"sidebar-links-container",onClick:this.props.clickHide},e))},t}(i.Component);var l=u;const f={repo:["Repo","WearOS","Websites"],blog:["Blog","Games"],about:["About","Contact"]};var p=function(e){function t(t){var n;return(n=e.call(this,t)||this).showSide=()=>{n.setState((e=>({css:{top:0}})))},n.hideSide=()=>{n.setState((e=>({css:{top:"-100vh"}})))},n.state={css:{top:"-100vh"}},n.showSide=n.showSide.bind((0,r.Z)(n)),n.hideSide=n.hideSide.bind((0,r.Z)(n)),n}return(0,o.Z)(t,e),t.prototype.render=function(){var e=[];for(let t=0;t<Object.keys(f).length;t++)e.push(i.createElement(c,{className:"nav-links-container",links:f[Object.keys(f)[t]],key:f[Object.keys(f)[t]]}));return i.createElement("div",null,i.createElement("nav",null,i.createElement("h1",null,i.createElement(a.rU,{to:"/"},"Owen Bean")),i.createElement("div",{className:"spacer"}),e,i.createElement(s,{clickMe:this.showSide}),i.createElement(l,{sidelinks:Object.keys(f),sidebarCss:this.state.css,clickHide:this.hideSide})))},t}(i.Component)},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!i(e[s],a[s]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!i(e[u[s]],a[u[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},7326:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=85b25caf33dea904830367fbc5c604ec35fece98-6e4301e4f8946a0f2d91.js.map