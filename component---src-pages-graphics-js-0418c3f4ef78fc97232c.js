"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[62],{2935:function(e,t,n){n.d(t,{A:function(){return o}});var i=n(6540);function o(e){const t={display:"flex",flexWrap:"wrap",justifyContent:void 0!==e.css&&e.css.justifyContent?e.css.justifyContent:"space-around"};return i.createElement("div",{style:{...e.css,...t}},e.children)}},5699:function(e,t,n){var i=n(5540),o=n(6540);let a=function(e){function t(){var t;return(t=e.call(this)||this).state={backgroundImageSize:0,opacity:0},t.changeSize=t.changeSize.bind(t),t.toggleOn=t.toggleOn.bind(t),t.toggleOff=t.toggleOff.bind(t),t}(0,i.A)(t,e);var n=t.prototype;return n.changeSize=function(){this.setState({backgroundImageSize:window.innerWidth>1200?25:window.innerWidth>960?33.33:window.innerWidth>500?50:100})},n.toggleOn=function(){this.setState({opacity:.97})},n.toggleOff=function(){this.setState({opacity:0})},n.componentDidMount=function(){window.addEventListener("resize",this.changeSize),this.changeSize()},n.componentWillUnmount=function(){window.removeEventListener("resize",this.changeSize)},n.render=function(){const e={width:this.state.backgroundImageSize+"%",height:this.state.backgroundImageSize+"vw",margin:"0",backgroundImage:"url("+this.props.image+")",backgroundPosition:"center",backgroundSize:"102%",cursor:"pointer"},t={width:"100%",height:"100%",opacity:this.state.opacity,transition:"opacity 0.33s",backgroundColor:"#151035"},n={textAlign:"center",margin:"0",color:"white",padding:"32px 0 0 0",fontSize:"24px"};return o.createElement("div",{style:{...e},onMouseOver:this.toggleOn,onFocus:this.toggleOn,onMouseLeave:this.toggleOff},o.createElement("div",{style:{...t}},o.createElement("h5",{style:{...n}},this.props.title),this.props.children))},t}(o.Component);t.A=a},7904:function(e,t,n){n.d(t,{A:function(){return l}});var i=n(6540),o=n(5540),a=n(4810);let r=function(e){function t(){var t;return(t=e.call(this)||this).state={hovering:!1,isPhone:!1},t.hover=t.hover.bind(t),t.leave=t.leave.bind(t),t.phoneCheck=t.phoneCheck.bind(t),t}(0,o.A)(t,e);var n=t.prototype;return n.hover=function(){this.setState({hovering:!0})},n.leave=function(){this.setState({hovering:!1})},n.phoneCheck=function(){this.setState({isPhone:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)})},n.componentDidMount=function(){this.phoneCheck()},n.render=function(){const e={container:{width:"210px",height:"60px"},a:{width:"210px",height:"60px"},button:{width:"200px",height:"60px",backgroundColor:"rgba(0,0,0,0)",color:this.state.hovering||this.state.isPhone?"white":"#151035",border:"0",transition:"color 0.5s",cursor:"pointer",fontSize:"18px",fontFamily:'"Nunito", sans-serif'},circle:{width:this.state.hovering||this.state.isPhone?"230px":"60px",height:"60px",backgroundColor:"#20135c",borderRadius:"70px",position:"relative",bottom:"60px",left:"-30px",transition:"left 0.5s, width 0.5s",zIndex:"-1"}};return null!=this.props.title?i.createElement("div",{style:e.container},i.createElement(a.N_,{style:e.a,to:this.props.link},i.createElement("button",{style:e.button,onMouseOver:this.hover,onMouseLeave:this.leave},this.props.title),i.createElement("div",{style:e.circle}))):i.createElement("div",null)},t}(i.Component);var c=r;const s={header:{color:"#20135c",fontSize:"48px",textAlign:"center",margin:"0 0 24px 0",padding:"32px 0 0 0",letterSpacing:"2px",fontWeight:"700"},section:{margin:"24px 0 0 0"}};function l(e){var t=0;return void 0!==e.actionName&&""!==e.actionName&&(t="64px"),i.createElement("div",null,i.createElement("section",{style:{...s.section,...e.cssContainer,marginBottom:t}},i.createElement("h4",{style:{...s.header,...e.css}},e.header),e.children,i.createElement(c,{title:e.actionName,link:e.link})))}},4224:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var i=n(5540),o=n(6540),a=n(6634),r=n(510),c=n(5646),s=n(7904),l=n(2935),d=n(5699),h=n.p+"static/conspiracy-dabc10fa127b5e7b0cb5020d89eff97c.jpg",p=n.p+"static/strawburiedad1-4086b5259955788dc70b99e4b47500bf.jpg",g=n.p+"static/travelwriterad2-074f078d396bec68168092f8e54cbd85.jpg",u=n.p+"static/watermelon-b2b6f62c0a72fef04010c5883d9ebdbb.jpg",f=n.p+"static/beancan-d5b074d3f1c57402040f4b856f6bcd93.jpg",m=n.p+"static/beanjuice-20c5778a2e34bb3079e81fe4982b8493.jpg",b=n.p+"static/bulldog_logo-90f90826d5c5d1e11d8a8a478af37275.jpg",v=n.p+"static/firefly-7597ab5e371d93b2dc71eae8683c8ae2.jpg",w=n.p+"static/myPlane_logo-b9abeed1cf4ab19d56fd778989d7cc84.jpg",y=n.p+"static/pineapple-3a9779d7c47ca290c96dd375d60c6f42.jpg",E=n.p+"static/rolatydog-b59118510ae35a4e9c4e157cbd7c9232.jpg",C=n.p+"static/travel_logo-8c0217e3568900138b6c58a52ef53845.jpg";const x={main:{margin:"48px 0 0 0"}};var A=function(e){function t(){var t;return(t=e.call(this)||this).state={height:0},t.updatePortfolioContainer=t.updatePortfolioContainer.bind(t),t}(0,i.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.updatePortfolioContainer),this.updatePortfolioContainer()},n.updatePortfolioContainer=function(){"undefined"!=typeof window&&this.setState({height:window.innerWidth>1200?25:window.innerWidth>960?33.33:window.innerWidth>500?50:100})},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updatePortfolioContainer)},n.render=function(){var e={height:3*this.state.height+"vw",overflow:"hidden"};return o.createElement("div",null,o.createElement(c.A,{title:"Graphic Design Portfolio",desc:"Owen G. Bean knows how to use Photoshop CC and Illustrator CC from my graphic design"}),o.createElement(a.A,null),o.createElement("main",{style:x.main},o.createElement(s.A,{header:"Graphic Design Portfolio"},o.createElement(l.A,{css:e},o.createElement(d.A,{image:h,title:"Conspiracy Cruises"}),o.createElement(d.A,{image:u,title:"Summer Water"}),o.createElement(d.A,{image:p,title:"Straw Buried"}),o.createElement(d.A,{image:g,title:"Travel Writers"}),o.createElement(d.A,{image:w,title:"My Planes Logo"}),o.createElement(d.A,{image:m,title:"Bean Juice"}),o.createElement(d.A,{image:y,title:"Summer Pineapple"}),o.createElement(d.A,{image:b,title:"Hall-Dale Bulldog"}),o.createElement(d.A,{image:v,title:"Firefly Festival"}),o.createElement(d.A,{image:C,title:"Travel Writers"}),o.createElement(d.A,{image:f,title:"Bean Can"}),o.createElement(d.A,{image:E,title:"Royal Labrendar"})))),o.createElement(r.A,null))},t}(o.Component)}}]);
//# sourceMappingURL=component---src-pages-graphics-js-0418c3f4ef78fc97232c.js.map