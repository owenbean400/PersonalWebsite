(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3uoI":function(e,t,n){},"4dyN":function(e,t,n){e.exports=n.p+"static/travelwriterad2-603ee5be0f1ac7c532ed4de074635fae.jpg"},"6us9":function(e,t,n){"use strict";var i=n("JX7q"),a=n("dI71"),r=n("q1tI"),o=n.n(r),s=n("Wbzz"),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).showLinks=function(){n.setState((function(e){return{css:{height:64*n.props.links.length+"px"}}}))},n.hideLinks=function(){n.setState((function(e){return{css:{height:"64px"}}}))},n.state={css:{height:"64px"}},n.showLinks=n.showLinks.bind(Object(i.a)(n)),n.hideLinks=n.hideLinks.bind(Object(i.a)(n)),n}return Object(a.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement("ul",{onMouseOver:this.showLinks,onMouseLeave:this.hideLinks,style:this.state.css,className:"nav-links-container"},this.props.links.map((function(e){return o.a.createElement(s.a,{to:"/"+e.toLowerCase().replace(/\s/g,"")},o.a.createElement("li",null,e))})),";"))},t}(o.a.Component),l=function(e){return o.a.createElement("div",{className:"hamburger-container",onClick:e.clickMe},o.a.createElement("div",{className:"hamburger-bar"}),o.a.createElement("div",{className:"hamburger-bar"}),o.a.createElement("div",{className:"hamburger-bar"}))},u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.sidelinks.map((function(e){return o.a.createElement(s.a,{to:"/"+e.toLowerCase().replace(/\s/g,"")},o.a.createElement("li",{style:{color:"white"}},e.charAt(0).toUpperCase()+e.substring(1,e.length)))}));return o.a.createElement("div",{className:"sidebar-container",style:this.props.sidebarCss},o.a.createElement("div",{className:"sidebar-header-container"},o.a.createElement("h1",{onClick:this.props.clickHide},"Owen Bean"),o.a.createElement("div",{className:"spacer"}),o.a.createElement("div",{className:"x-container",onClick:this.props.clickHide},o.a.createElement("div",{className:"x-bar-left"}),o.a.createElement("div",{className:"x-bar-right"}))),o.a.createElement("ul",{className:"sidebar-links-container",onClick:this.props.clickHide},e))},t}(o.a.Component),h=(n("3uoI"),{portfolio:["Portfolio","Websites","Graphics"],explore:["Explore","Games","Blog","React UI"],me:["Me","About","Contact"]}),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).showSide=function(){n.setState((function(e){return{css:{top:0}}}))},n.hideSide=function(){n.setState((function(e){return{css:{top:"-100vh"}}}))},n.state={css:{top:"-100vh"}},n.showSide=n.showSide.bind(Object(i.a)(n)),n.hideSide=n.hideSide.bind(Object(i.a)(n)),n}return Object(a.a)(t,e),t.prototype.render=function(){for(var e=[],t=0;t<Object.keys(h).length;t++)e.push(o.a.createElement(c,{className:"nav-links-container",links:h[Object.keys(h)[t]]}));return o.a.createElement("div",null,o.a.createElement("nav",null,o.a.createElement("h1",null,o.a.createElement(s.a,{to:"/"},"Owen Bean")),o.a.createElement("div",{className:"spacer"}),e,o.a.createElement(l,{clickMe:this.showSide}),o.a.createElement(u,{sidelinks:Object.keys(h),sidebarCss:this.state.css,clickHide:this.hideSide})))},t}(o.a.Component);t.a=d},E6xs:function(e,t,n){"use strict";n.r(t);var i=n("JX7q"),a=n("dI71"),r=n("q1tI"),o=n.n(r),s=n("6us9"),c=n("fItr"),l=n("rxcZ"),u=n("cWx6"),h=n("Qb/A"),d=n("mb5L"),p=n.n(d),m=n("q+le"),f=n.n(m),b=n("pf5U"),g=n.n(b),v=n("RCqO"),E=n.n(v),w=n("wHmj"),k=n.n(w),x=n("ie5n"),y=n.n(x),O=n("4dyN"),j=n.n(O),C=n("dTs6"),S=n.n(C),z={main:{margin:"48px 0 64px 0"}},I=function(e){function t(){var t;return(t=e.call(this)||this).state={height:0},t.updatePortfolioContainer=t.updatePortfolioContainer.bind(Object(i.a)(t)),t}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.updatePortfolioContainer),this.updatePortfolioContainer()},n.updatePortfolioContainer=function(){"undefined"!=typeof window&&this.setState({height:window.innerWidth>1200?25:window.innerWidth>960?33.33:window.innerWidth>768?50:100})},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updatePortfolioContainer)},n.render=function(){var e={height:1*this.state.height+"vw",overflow:"hidden"};return o.a.createElement("div",null,o.a.createElement(s.a,null),o.a.createElement("main",{style:z.main},o.a.createElement(l.a,{header:"Website Portfolio",actionName:"More Websites",link:"/websites"},o.a.createElement(u.a,{css:e},o.a.createElement(h.a,{image:p.a,title:"Reliable Board Webpage"}),o.a.createElement(h.a,{image:f.a,title:"Here The Scoop Website"}),o.a.createElement(h.a,{image:g.a,title:"Bean Juice Website"}),o.a.createElement(h.a,{image:E.a,title:"My Portfolio"}))),o.a.createElement(l.a,{header:"Graphic Design Portfolio",actionName:"More Graphics",link:"/graphics"},o.a.createElement(u.a,{css:e},o.a.createElement(h.a,{image:k.a,title:"Conspiracy Cruises"}),o.a.createElement(h.a,{image:S.a,title:"Summer Water"}),o.a.createElement(h.a,{image:y.a,title:"Straw Buried"}),o.a.createElement(h.a,{image:j.a,title:"Travel Writers"})))),o.a.createElement(c.a,null))},t}(o.a.Component);t.default=I},JX7q:function(e,t,n){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return i}))},"Qb/A":function(e,t,n){"use strict";var i=n("JX7q"),a=n("dI71"),r=n("q1tI"),o=n.n(r),s=function(e){function t(){var t;return(t=e.call(this)||this).state={backgroundImageSize:0,opacity:0},t.changeSize=t.changeSize.bind(Object(i.a)(t)),t.toggleOn=t.toggleOn.bind(Object(i.a)(t)),t.toggleOff=t.toggleOff.bind(Object(i.a)(t)),t}Object(a.a)(t,e);var n=t.prototype;return n.changeSize=function(){this.setState({backgroundImageSize:window.innerWidth>1200?25:window.innerWidth>960?33.33:window.innerWidth>768?50:100})},n.toggleOn=function(){this.setState({opacity:.95})},n.toggleOff=function(){this.setState({opacity:0})},n.componentDidMount=function(){window.addEventListener("resize",this.changeSize),this.changeSize()},n.componentWillUnmount=function(){window.removeEventListener("resize",this.changeSize)},n.render=function(){var e={box1:{width:this.state.backgroundImageSize+"%",height:this.state.backgroundImageSize+"vw",margin:"0",backgroundImage:"url("+this.props.image+")",backgroundPosition:"center",backgroundSize:"102%",cursor:"pointer"},box2:{width:"100%",height:"100%",opacity:this.state.opacity,transition:"opacity 0.33s",backgroundColor:"#151035"},title:{textAlign:"center",margin:"0",color:"white",padding:"32px 0 0 0",fontSize:"24px"}};return o.a.createElement("div",{style:Object.assign({},e.box1),onMouseOver:this.toggleOn,onMouseLeave:this.toggleOff},o.a.createElement("div",{style:Object.assign({},e.box2)},o.a.createElement("h5",{style:Object.assign({},e.title)},this.props.title)))},t}(o.a.Component);t.a=s},RCqO:function(e,t,n){e.exports=n.p+"static/portfolio_display-b090b96971f8544ee193c4cb391da6b7.jpg"},cWx6:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("q1tI"),a=n.n(i);function r(e){var t={flex:{display:"flex",flexWrap:"wrap",justifyContent:void 0!==e.css&&e.css.justifyContent?e.css.justifyContent:"space-around"}};return a.a.createElement("div",{style:Object.assign({},e.css,t.flex)},e.children)}},dTs6:function(e,t,n){e.exports=n.p+"static/watermelon-c3e798636c7073593e9df4356d09c92c.jpg"},fItr:function(e,t,n){"use strict";var i=n("dI71"),a=n("q1tI"),r=n.n(a),o=n("Wbzz"),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.footerlinks.map((function(e){return r.a.createElement(o.a,{to:"/"+e.toLowerCase().replace(/\s/g,"")},r.a.createElement("li",{style:{color:"white"}},e))}));return r.a.createElement("div",null,r.a.createElement("ul",{className:"footer-links-container"},e))},t}(r.a.Component),c=(n("ky7P"),new Date),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement("footer",null,r.a.createElement("div",{className:"links-container"},r.a.createElement(s,{footerlinks:["Portfolio","Websites","Graphics"]}),r.a.createElement(s,{footerlinks:["Explore","Games","Blog","React UI"]}),r.a.createElement(s,{footerlinks:["Me","About","Contact"]})),r.a.createElement("p",null,"Copyright © ",c.getFullYear()," Owen Bean. All rights reserved.")))},t}(r.a.Component);t.a=l},ie5n:function(e,t,n){e.exports=n.p+"static/strawburiedad1-6a453664d5bb1968779b7be375089875.jpg"},ky7P:function(e,t,n){},mb5L:function(e,t,n){e.exports=n.p+"static/reliable_board_display-bc38208da7a77ffd72979d34d1b1fd4b.jpg"},pf5U:function(e,t,n){e.exports=n.p+"static/bean_juice_display-b7bff3cef1d20d4abaf4e972866fe1fe.jpg"},"q+le":function(e,t,n){e.exports=n.p+"static/here_the_scoop_display-123ab37966a094566b5e071a038b62cb.jpg"},rxcZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("q1tI"),a=n.n(i),r=n("JX7q"),o=n("dI71"),s=n("Wbzz"),c=function(e){function t(){var t;return(t=e.call(this)||this).state={hovering:!1,isPhone:!1},t.hover=t.hover.bind(Object(r.a)(t)),t.leave=t.leave.bind(Object(r.a)(t)),t.phoneCheck=t.phoneCheck.bind(Object(r.a)(t)),t}Object(o.a)(t,e);var n=t.prototype;return n.hover=function(){this.setState({hovering:!0})},n.leave=function(){this.setState({hovering:!1})},n.phoneCheck=function(){this.setState({isPhone:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)})},n.componentDidMount=function(){this.phoneCheck()},n.render=function(){var e={container:{width:"210px",height:"60px"},a:{width:"210px",height:"60px"},button:{width:"200px",height:"60px",backgroundColor:"rgba(0,0,0,0)",color:this.state.hovering||this.state.isPhone?"white":"#151035",border:"0",transition:"color 0.5s",cursor:"pointer",fontSize:"18px",fontFamily:'"Nunito", sans-serif'},circle:{width:this.state.hovering||this.state.isPhone?"230px":"60px",height:"60px",backgroundColor:"#20135c",borderRadius:"70px",position:"relative",bottom:"60px",left:"-30px",transition:"left 0.5s, width 0.5s",zIndex:"-1"}};return null!=this.props.title?a.a.createElement("div",{style:e.container},a.a.createElement(s.a,{style:e.a,to:this.props.link},a.a.createElement("button",{style:e.button,onMouseOver:this.hover,onMouseLeave:this.leave},this.props.title),a.a.createElement("div",{style:e.circle}))):a.a.createElement("div",null)},t}(a.a.Component),l={color:"#20135c",fontSize:"48px",textAlign:"center",margin:"0 0 12px 0",padding:"64px 0 0 0",letterSpacing:"2px",fontWeight:"700"};function u(e){return a.a.createElement("div",null,a.a.createElement("section",null,a.a.createElement("h4",{style:Object.assign({},l,e.css)},e.header),e.children,a.a.createElement(c,{title:e.actionName,link:e.link})))}},wHmj:function(e,t,n){e.exports=n.p+"static/conspiracy-0a71544fe521b5ce82ef7cbed64067f1.jpg"}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-ecc94fde98210648b444.js.map