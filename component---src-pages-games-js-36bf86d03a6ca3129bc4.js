(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4Og5":function(e,t,n){"use strict";n.r(t);var i=n("dI71"),a=n("q1tI"),o=n.n(a),r=n("fItr"),c=n("6us9"),s=n("rxcZ"),l=n("cWx6"),h=n("Qb/A"),u=n("7znz"),d=n("/8WL"),p=n("y8tt"),g=n.n(p),b=n("PJDU"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(c.a,null),o.a.createElement(b.a,{title:"Games",desc:"Play Owen Bean Games that he created and built with Javascript"}),o.a.createElement("main",null,o.a.createElement(s.a,{header:"Games"},o.a.createElement(l.a,null,o.a.createElement(h.a,{image:g.a},o.a.createElement(u.a,null,o.a.createElement(d.a,{title:"Play",link:"https://owenbean400.github.io/3dworld/",isNewTab:!0}),o.a.createElement(d.a,{title:"Github Code",link:"https://github.com/owenbean400/3dworld",isNewTab:!0})))))),o.a.createElement(r.a,null))},t}(o.a.Component);t.default=m},"7znz":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("q1tI"),a=n.n(i),o=(n("/8WL"),{container:{display:"grid",gridTemplateColumns:"auto",gridGap:"12px",justifyContent:"center",margin:"24px"}});function r(e){return a.a.createElement("div",{style:o.container},e.children)}},"Qb/A":function(e,t,n){"use strict";var i=n("JX7q"),a=n("dI71"),o=n("q1tI"),r=n.n(o),c=function(e){function t(){var t;return(t=e.call(this)||this).state={backgroundImageSize:0,opacity:0},t.changeSize=t.changeSize.bind(Object(i.a)(t)),t.toggleOn=t.toggleOn.bind(Object(i.a)(t)),t.toggleOff=t.toggleOff.bind(Object(i.a)(t)),t}Object(a.a)(t,e);var n=t.prototype;return n.changeSize=function(){this.setState({backgroundImageSize:window.innerWidth>1200?25:window.innerWidth>960?33.33:window.innerWidth>500?50:100})},n.toggleOn=function(){this.setState({opacity:.97})},n.toggleOff=function(){this.setState({opacity:0})},n.componentDidMount=function(){window.addEventListener("resize",this.changeSize),this.changeSize()},n.componentWillUnmount=function(){window.removeEventListener("resize",this.changeSize)},n.render=function(){var e={box1:{width:this.state.backgroundImageSize+"%",height:this.state.backgroundImageSize+"vw",margin:"0",backgroundImage:"url("+this.props.image+")",backgroundPosition:"center",backgroundSize:"102%",cursor:"pointer"},box2:{width:"100%",height:"100%",opacity:this.state.opacity,transition:"opacity 0.33s",backgroundColor:"#151035"},title:{textAlign:"center",margin:"0",color:"white",padding:"32px 0 0 0",fontSize:"24px"}};return r.a.createElement("div",{style:Object.assign({},e.box1),onMouseOver:this.toggleOn,onMouseLeave:this.toggleOff},r.a.createElement("div",{style:Object.assign({},e.box2)},r.a.createElement("h5",{style:Object.assign({},e.title)},this.props.title),this.props.children))},t}(r.a.Component);t.a=c},cWx6:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("q1tI"),a=n.n(i);function o(e){var t={flex:{display:"flex",flexWrap:"wrap",justifyContent:void 0!==e.css&&e.css.justifyContent?e.css.justifyContent:"space-around"}};return a.a.createElement("div",{style:Object.assign({},e.css,t.flex)},e.children)}},rxcZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("q1tI"),a=n.n(i),o=n("JX7q"),r=n("dI71"),c=n("Wbzz"),s=function(e){function t(){var t;return(t=e.call(this)||this).state={hovering:!1,isPhone:!1},t.hover=t.hover.bind(Object(o.a)(t)),t.leave=t.leave.bind(Object(o.a)(t)),t.phoneCheck=t.phoneCheck.bind(Object(o.a)(t)),t}Object(r.a)(t,e);var n=t.prototype;return n.hover=function(){this.setState({hovering:!0})},n.leave=function(){this.setState({hovering:!1})},n.phoneCheck=function(){this.setState({isPhone:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)})},n.componentDidMount=function(){this.phoneCheck()},n.render=function(){var e={container:{width:"210px",height:"60px"},a:{width:"210px",height:"60px"},button:{width:"200px",height:"60px",backgroundColor:"rgba(0,0,0,0)",color:this.state.hovering||this.state.isPhone?"white":"#151035",border:"0",transition:"color 0.5s",cursor:"pointer",fontSize:"18px",fontFamily:'"Nunito", sans-serif'},circle:{width:this.state.hovering||this.state.isPhone?"230px":"60px",height:"60px",backgroundColor:"#20135c",borderRadius:"70px",position:"relative",bottom:"60px",left:"-30px",transition:"left 0.5s, width 0.5s",zIndex:"-1"}};return null!=this.props.title?a.a.createElement("div",{style:e.container},a.a.createElement(c.a,{style:e.a,to:this.props.link},a.a.createElement("button",{style:e.button,onMouseOver:this.hover,onMouseLeave:this.leave},this.props.title),a.a.createElement("div",{style:e.circle}))):a.a.createElement("div",null)},t}(a.a.Component),l={color:"#20135c",fontSize:"48px",textAlign:"center",margin:"0 0 24px 0",padding:"32px 0 0 0",letterSpacing:"2px",fontWeight:"700"},h={margin:"24px 0 0 0"};function u(e){var t=0;return void 0!==e.actionName&&""!=e.actionName&&(t="64px"),a.a.createElement("div",null,a.a.createElement("section",{style:Object.assign({},h,e.cssContainer,{marginBottom:t})},a.a.createElement("h4",{style:Object.assign({},l,e.css)},e.header),e.children,a.a.createElement(s,{title:e.actionName,link:e.link})))}},y8tt:function(e,t,n){e.exports=n.p+"static/bbGame-52aaa4005bc3963690249fc1d6c33e02.jpg"}}]);
//# sourceMappingURL=component---src-pages-games-js-36bf86d03a6ca3129bc4.js.map