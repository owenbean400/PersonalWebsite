(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3uoI":function(e,t,n){},"6us9":function(e,t,n){"use strict";var a=n("JX7q"),r=n("dI71"),i=n("q1tI"),s=n.n(i),o=n("Wbzz"),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).showLinks=function(){n.setState((function(e){return{css:{height:64*n.props.links.length+"px"}}}))},n.hideLinks=function(){n.setState((function(e){return{css:{height:"64px"}}}))},n.state={css:{height:"64px"}},n.showLinks=n.showLinks.bind(Object(a.a)(n)),n.hideLinks=n.hideLinks.bind(Object(a.a)(n)),n}return Object(r.a)(t,e),t.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement("ul",{onMouseOver:this.showLinks,onMouseLeave:this.hideLinks,style:this.state.css,className:"nav-links-container"},this.props.links.map((function(e){return s.a.createElement(o.a,{to:"/"+e.toLowerCase().replace(/\s/g,"")},s.a.createElement("li",null,e))})),";"))},t}(s.a.Component),l=function(e){return s.a.createElement("div",{className:"hamburger-container",onClick:e.clickMe},s.a.createElement("div",{className:"hamburger-bar"}),s.a.createElement("div",{className:"hamburger-bar"}),s.a.createElement("div",{className:"hamburger-bar"}))},u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.sidelinks.map((function(e){return s.a.createElement(o.a,{to:"/"+e.toLowerCase().replace(/\s/g,"")},s.a.createElement("li",{style:{color:"white"}},e.charAt(0).toUpperCase()+e.substring(1,e.length)))}));return s.a.createElement("div",{className:"sidebar-container",style:this.props.sidebarCss},s.a.createElement("div",{className:"sidebar-header-container"},s.a.createElement("h1",{onClick:this.props.clickHide},"Owen Bean"),s.a.createElement("div",{className:"spacer"}),s.a.createElement("div",{className:"x-container",onClick:this.props.clickHide},s.a.createElement("div",{className:"x-bar-left"}),s.a.createElement("div",{className:"x-bar-right"}))),s.a.createElement("ul",{className:"sidebar-links-container",onClick:this.props.clickHide},e))},t}(s.a.Component),h=(n("3uoI"),{portfolio:["Portfolio","Websites","Graphics"],explore:["Explore","Games","Blog","React UI"],me:["Me","About","Contact"]}),p=function(e){function t(t){var n;return(n=e.call(this,t)||this).showSide=function(){n.setState((function(e){return{css:{top:0}}}))},n.hideSide=function(){n.setState((function(e){return{css:{top:"-100vh"}}}))},n.state={css:{top:"-100vh"}},n.showSide=n.showSide.bind(Object(a.a)(n)),n.hideSide=n.hideSide.bind(Object(a.a)(n)),n}return Object(r.a)(t,e),t.prototype.render=function(){for(var e=[],t=0;t<Object.keys(h).length;t++)e.push(s.a.createElement(c,{className:"nav-links-container",links:h[Object.keys(h)[t]]}));return s.a.createElement("div",null,s.a.createElement("nav",null,s.a.createElement("h1",null,s.a.createElement(o.a,{to:"/"},"Owen Bean")),s.a.createElement("div",{className:"spacer"}),e,s.a.createElement(l,{clickMe:this.showSide}),s.a.createElement(u,{sidelinks:Object.keys(h),sidebarCss:this.state.css,clickHide:this.hideSide})))},t}(s.a.Component);t.a=p},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},cWx6:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a);function i(e){var t={flex:{display:"flex",flexWrap:"wrap",justifyContent:void 0!==e.css&&e.css.justifyContent?e.css.justifyContent:"space-around"}};return r.a.createElement("div",{style:Object.assign({},e.css,t.flex)},e.children)}},f6x9:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),i=n.n(r),s=n("6us9"),o=n("fItr"),c=n("rxcZ"),l=n("cWx6"),u=n("y8tt"),h=n.n(u),p={main:{margin:"48px 0 64px 0"}},d=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(s.a,null),i.a.createElement("main",{style:p.main},i.a.createElement(c.a,{header:"JS Web Games",actionName:"Play Games",link:"/games"},i.a.createElement(l.a,null,i.a.createElement("img",{src:h.a,width:"320px"}))),i.a.createElement(c.a,{header:"Blog Posts",actionName:"More Blogs",link:"/blog"}),i.a.createElement(c.a,{header:"React Components",actionName:"View More",link:"/reactui"})),i.a.createElement(o.a,null))},t}(i.a.Component);t.default=d},fItr:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),i=n.n(r),s=n("Wbzz"),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.footerlinks.map((function(e){return i.a.createElement(s.a,{to:"/"+e.toLowerCase().replace(/\s/g,"")},i.a.createElement("li",{style:{color:"white"}},e))}));return i.a.createElement("div",null,i.a.createElement("ul",{className:"footer-links-container"},e))},t}(i.a.Component),c=(n("ky7P"),new Date),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement("footer",null,i.a.createElement("div",{className:"links-container"},i.a.createElement(o,{footerlinks:["Portfolio","Websites","Graphics"]}),i.a.createElement(o,{footerlinks:["Explore","Games","Blog","React UI"]}),i.a.createElement(o,{footerlinks:["Me","About","Contact"]})),i.a.createElement("p",null,"Copyright © ",c.getFullYear()," Owen Bean. All rights reserved.")))},t}(i.a.Component);t.a=l},ky7P:function(e,t,n){},rxcZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n.n(a),i=n("JX7q"),s=n("dI71"),o=n("Wbzz"),c=function(e){function t(){var t;return(t=e.call(this)||this).state={hovering:!1,isPhone:!1},t.hover=t.hover.bind(Object(i.a)(t)),t.leave=t.leave.bind(Object(i.a)(t)),t.phoneCheck=t.phoneCheck.bind(Object(i.a)(t)),t}Object(s.a)(t,e);var n=t.prototype;return n.hover=function(){this.setState({hovering:!0})},n.leave=function(){this.setState({hovering:!1})},n.phoneCheck=function(){this.setState({isPhone:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)})},n.componentDidMount=function(){this.phoneCheck()},n.render=function(){var e={container:{width:"210px",height:"60px"},a:{width:"210px",height:"60px"},button:{width:"200px",height:"60px",backgroundColor:"rgba(0,0,0,0)",color:this.state.hovering||this.state.isPhone?"white":"#151035",border:"0",transition:"color 0.5s",cursor:"pointer",fontSize:"18px",fontFamily:'"Nunito", sans-serif'},circle:{width:this.state.hovering||this.state.isPhone?"230px":"60px",height:"60px",backgroundColor:"#20135c",borderRadius:"70px",position:"relative",bottom:"60px",left:"-30px",transition:"left 0.5s, width 0.5s",zIndex:"-1"}};return null!=this.props.title?r.a.createElement("div",{style:e.container},r.a.createElement(o.a,{style:e.a,to:this.props.link},r.a.createElement("button",{style:e.button,onMouseOver:this.hover,onMouseLeave:this.leave},this.props.title),r.a.createElement("div",{style:e.circle}))):r.a.createElement("div",null)},t}(r.a.Component),l={color:"#20135c",fontSize:"48px",textAlign:"center",margin:"0 0 12px 0",padding:"64px 0 0 0",letterSpacing:"2px",fontWeight:"700"};function u(e){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("h4",{style:Object.assign({},l,e.css)},e.header),e.children,r.a.createElement(c,{title:e.actionName,link:e.link})))}},y8tt:function(e,t,n){e.exports=n.p+"static/bbGame-52aaa4005bc3963690249fc1d6c33e02.jpg"}}]);
//# sourceMappingURL=component---src-pages-explore-js-12d392fa0dd4d0d1025e.js.map