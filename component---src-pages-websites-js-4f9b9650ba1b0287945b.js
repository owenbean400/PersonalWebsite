(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"Qb/A":function(e,t,n){"use strict";var i=n("JX7q"),o=n("dI71"),a=n("q1tI"),r=n.n(a),s=function(e){function t(){var t;return(t=e.call(this)||this).state={backgroundImageSize:0,opacity:0},t.changeSize=t.changeSize.bind(Object(i.a)(t)),t.toggleOn=t.toggleOn.bind(Object(i.a)(t)),t.toggleOff=t.toggleOff.bind(Object(i.a)(t)),t}Object(o.a)(t,e);var n=t.prototype;return n.changeSize=function(){this.setState({backgroundImageSize:window.innerWidth>1200?25:window.innerWidth>960?33.33:window.innerWidth>500?50:100})},n.toggleOn=function(){this.setState({opacity:.97})},n.toggleOff=function(){this.setState({opacity:0})},n.componentDidMount=function(){window.addEventListener("resize",this.changeSize),this.changeSize()},n.componentWillUnmount=function(){window.removeEventListener("resize",this.changeSize)},n.render=function(){var e={box1:{width:this.state.backgroundImageSize+"%",height:this.state.backgroundImageSize+"vw",margin:"0",backgroundImage:"url("+this.props.image+")",backgroundPosition:"center",backgroundSize:"102%",cursor:"pointer"},box2:{width:"100%",height:"100%",opacity:this.state.opacity,transition:"opacity 0.33s",backgroundColor:"#151035"},title:{textAlign:"center",margin:"0",color:"white",padding:"32px 0 0 0",fontSize:"24px"}};return r.a.createElement("div",{style:Object.assign({},e.box1),onMouseOver:this.toggleOn,onMouseLeave:this.toggleOff},r.a.createElement("div",{style:Object.assign({},e.box2)},r.a.createElement("h5",{style:Object.assign({},e.title)},this.props.title),this.props.children))},t}(r.a.Component);t.a=s},RCqO:function(e,t,n){e.exports=n.p+"static/portfolio_display-70542f05fbfaf1c563d84a7cea8a7c3d.jpg"},cWx6:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("q1tI"),o=n.n(i);function a(e){var t={flex:{display:"flex",flexWrap:"wrap",justifyContent:void 0!==e.css&&e.css.justifyContent?e.css.justifyContent:"space-around"}};return o.a.createElement("div",{style:Object.assign({},e.css,t.flex)},e.children)}},glYJ:function(e,t,n){"use strict";n.r(t);var i=n("JX7q"),o=n("dI71"),a=n("q1tI"),r=n.n(a),s=n("6us9"),c=n("fItr"),l=n("PJDU"),d=n("rxcZ"),h=n("cWx6"),p=n("Qb/A"),u=n("mb5L"),g=n.n(u),f=n("q+le"),b=n.n(f),m=n("pf5U"),v=n.n(m),w=n("RCqO"),x=n.n(w),y={main:{margin:"48px 0 0 0"}},O=function(e){function t(){var t;return(t=e.call(this)||this).state={height:0},t.updatePortfolioContainer=t.updatePortfolioContainer.bind(Object(i.a)(t)),t}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.updatePortfolioContainer),this.updatePortfolioContainer()},n.updatePortfolioContainer=function(){"undefined"!=typeof window&&this.setState({height:window.innerWidth>1200?25:window.innerWidth>960?33.33:window.innerWidth>500?50:100})},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updatePortfolioContainer)},n.render=function(){var e={height:1*this.state.height+"vw",overflow:"hidden"};return r.a.createElement("div",null,r.a.createElement(l.a,{title:"Website Portfolio",desc:"Owen G. Bean Front End Development and UI Design portfolio"}),r.a.createElement(s.a,null),r.a.createElement("main",{style:y.main},r.a.createElement(d.a,{header:"Website Code Portfolio"},r.a.createElement(h.a,{css:e},r.a.createElement(p.a,{image:g.a,title:"Reliable Board Webpage"}),r.a.createElement(p.a,{image:b.a,title:"Here The Scoop Website"}),r.a.createElement(p.a,{image:v.a,title:"Bean Juice Website"}),r.a.createElement(p.a,{image:x.a,title:"My Portfolio"})))),r.a.createElement(c.a,null))},t}(r.a.Component);t.default=O},mb5L:function(e,t,n){e.exports=n.p+"static/reliable_board_display-54a4e47595571413a7854c4784eb03e8.jpg"},pf5U:function(e,t,n){e.exports=n.p+"static/bean_juice_display-d3cd3dd91dbb522005539428a2637670.jpg"},"q+le":function(e,t,n){e.exports=n.p+"static/here_the_scoop_display-d9d01ece482204a726fd42fc9eabf4cd.jpg"},rxcZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("q1tI"),o=n.n(i),a=n("JX7q"),r=n("dI71"),s=n("Wbzz"),c=function(e){function t(){var t;return(t=e.call(this)||this).state={hovering:!1,isPhone:!1},t.hover=t.hover.bind(Object(a.a)(t)),t.leave=t.leave.bind(Object(a.a)(t)),t.phoneCheck=t.phoneCheck.bind(Object(a.a)(t)),t}Object(r.a)(t,e);var n=t.prototype;return n.hover=function(){this.setState({hovering:!0})},n.leave=function(){this.setState({hovering:!1})},n.phoneCheck=function(){this.setState({isPhone:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)})},n.componentDidMount=function(){this.phoneCheck()},n.render=function(){var e={container:{width:"210px",height:"60px"},a:{width:"210px",height:"60px"},button:{width:"200px",height:"60px",backgroundColor:"rgba(0,0,0,0)",color:this.state.hovering||this.state.isPhone?"white":"#151035",border:"0",transition:"color 0.5s",cursor:"pointer",fontSize:"18px",fontFamily:'"Nunito", sans-serif'},circle:{width:this.state.hovering||this.state.isPhone?"230px":"60px",height:"60px",backgroundColor:"#20135c",borderRadius:"70px",position:"relative",bottom:"60px",left:"-30px",transition:"left 0.5s, width 0.5s",zIndex:"-1"}};return null!=this.props.title?o.a.createElement("div",{style:e.container},o.a.createElement(s.a,{style:e.a,to:this.props.link},o.a.createElement("button",{style:e.button,onMouseOver:this.hover,onMouseLeave:this.leave},this.props.title),o.a.createElement("div",{style:e.circle}))):o.a.createElement("div",null)},t}(o.a.Component),l={color:"#20135c",fontSize:"48px",textAlign:"center",margin:"0 0 24px 0",padding:"32px 0 0 0",letterSpacing:"2px",fontWeight:"700"},d={margin:"24px 0 0 0"};function h(e){var t=0;return void 0!==e.actionName&&""!==e.actionName&&(t="64px"),o.a.createElement("div",null,o.a.createElement("section",{style:Object.assign({},d,e.cssContainer,{marginBottom:t})},o.a.createElement("h4",{style:Object.assign({},l,e.css)},e.header),e.children,o.a.createElement(c,{title:e.actionName,link:e.link})))}}}]);
//# sourceMappingURL=component---src-pages-websites-js-4f9b9650ba1b0287945b.js.map