(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3uoI":function(e,t,n){},"6us9":function(e,t,n){"use strict";var a=n("JX7q"),r=n("dI71"),i=n("q1tI"),s=n.n(i),c=n("Wbzz"),o=function(e){function t(t){var n;return(n=e.call(this,t)||this).showLinks=function(){n.setState((function(e){return{css:{height:64*n.props.links.length+"px"}}}))},n.hideLinks=function(){n.setState((function(e){return{css:{height:"64px"}}}))},n.state={css:{height:"64px"}},n.showLinks=n.showLinks.bind(Object(a.a)(n)),n.hideLinks=n.hideLinks.bind(Object(a.a)(n)),n}return Object(r.a)(t,e),t.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement("ul",{onMouseOver:this.showLinks,onMouseLeave:this.hideLinks,style:this.state.css,className:"nav-links-container"},this.props.links.map((function(e){return s.a.createElement(c.a,{to:"/"+e.toLowerCase().replace(/\s/g,"")},s.a.createElement("li",null,e))})),";"))},t}(s.a.Component),l=function(e){return s.a.createElement("div",{className:"hamburger-container",onClick:e.clickMe},s.a.createElement("div",{className:"hamburger-bar"}),s.a.createElement("div",{className:"hamburger-bar"}),s.a.createElement("div",{className:"hamburger-bar"}))},u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.sidelinks.map((function(e){return s.a.createElement("li",{style:{color:"white"}},e.charAt(0).toUpperCase()+e.substring(1,e.length))}));return s.a.createElement("div",{className:"sidebar-container",style:this.props.sidebarCss},s.a.createElement("div",{className:"sidebar-header-container"},s.a.createElement("h1",{onClick:this.props.clickHide},"Owen Bean"),s.a.createElement("div",{className:"spacer"}),s.a.createElement("div",{className:"x-container",onClick:this.props.clickHide},s.a.createElement("div",{className:"x-bar-left"}),s.a.createElement("div",{className:"x-bar-right"}))),s.a.createElement("ul",{className:"sidebar-links-container",onClick:this.props.clickHide},e))},t}(s.a.Component),h=(n("3uoI"),{portfolio:["Portfolio","Code","Graphics"],explore:["Explore","Games","Blog","React UI"],me:["Me","About","Contact"]}),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).showSide=function(){n.setState((function(e){return{css:{top:0}}}))},n.hideSide=function(){n.setState((function(e){return{css:{top:"-100vh"}}}))},n.state={css:{top:"-100vh"}},n.showSide=n.showSide.bind(Object(a.a)(n)),n.hideSide=n.hideSide.bind(Object(a.a)(n)),n}return Object(r.a)(t,e),t.prototype.render=function(){for(var e=[],t=0;t<Object.keys(h).length;t++)e.push(s.a.createElement(o,{className:"nav-links-container",links:h[Object.keys(h)[t]]}));return s.a.createElement("div",null,s.a.createElement("nav",null,s.a.createElement("h1",null,s.a.createElement(c.a,{to:"/"},"Owen Bean")),s.a.createElement("div",{className:"spacer"}),e,s.a.createElement(l,{clickMe:this.showSide}),s.a.createElement(u,{sidelinks:Object.keys(h),sidebarCss:this.state.css,clickHide:this.hideSide})))},t}(s.a.Component);t.a=m},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},fItr:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),i=n.n(r),s=n("Wbzz"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.footerlinks.map((function(e){return i.a.createElement(s.a,{to:"/"+e.toLowerCase().replace(/\s/g,"")},i.a.createElement("li",{style:{color:"white"}},e))}));return i.a.createElement("div",null,i.a.createElement("ul",{className:"footer-links-container"},e))},t}(i.a.Component),o=(n("ky7P"),new Date),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("footer",null,i.a.createElement("div",{className:"links-container"},i.a.createElement(c,{footerlinks:["Portfolio","Code"]}),i.a.createElement(c,{footerlinks:["Explore","Games","Blog","React UI"]}),i.a.createElement(c,{footerlinks:["Me","About","Contact"]})),i.a.createElement("p",null,"Copyright © ",o.getFullYear()," Owen Bean. All rights reserved.")))},t}(i.a.Component);t.a=l},ky7P:function(e,t,n){},w2l6:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),i=n.n(r),s=n("6us9"),c=n("fItr"),o={main:{marginTop:"100px",textAlign:"center",fontSize:"36px",height:"50vh"}},l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(s.a,null),i.a.createElement("main",{style:o.main},"Sorry this web page url doesn't work. ",i.a.createElement("br",null),"This webpage is under construction"),i.a.createElement(c.a,null))},t}(i.a.Component);t.default=l}}]);
//# sourceMappingURL=component---src-pages-404-js-c4d871ea55453820c4d4.js.map