"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[293],{2368:function(e,t,n){n.d(t,{A:function(){return i}});var a=n(6540);function l(e){return a.createElement("div",{class:"navbar-tool"},a.createElement("h5",null,e.title),a.createElement("div",{class:"circle-container"},a.createElement("div",{class:"circle green",onClick:()=>e.setActive(!e.isActive)}),a.createElement("div",{class:"circle yellow",onClick:()=>e.setActive(!e.isActive)}),a.createElement("div",{class:"circle red",onClick:()=>e.setActive(!1)})))}function i(e){const{0:t,1:n}=(0,a.useState)(!0),{0:i,1:r}=(0,a.useState)(!1);return(0,a.useEffect)((()=>(n(window.innerWidth<=960),window.addEventListener("resize",(()=>n(window.innerWidth<=960))),()=>window.removeEventListener("resize",(()=>n(window.innerWidth<960)))))),a.createElement("div",{className:"web-content",style:{gridColumnStart:t||e.reverse?"1":"2",gridRowStart:"1",position:i?"fixed":"inherit",top:"64px",left:0,maxWidth:i?"100vw":"500px",width:i?"100vw":"auto",height:i?"100vh":"auto",borderRadius:i?"0px":"",margin:e.isHTML||i?"0":"64px auto"}},a.createElement(l,{title:e.title,setActive:r,isActive:i}),a.createElement("div",{style:{padding:e.noPad?"0px":"16px"}},e.children))}},5580:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var a=n(6540),l=n(2797),i=n(6634),r=n(510),o=n(2368);function s(e){const{0:t,1:n}=(0,a.useState)(!0);(0,a.useEffect)((()=>(n(window.innerWidth<=960),window.addEventListener("resize",(()=>n(window.innerWidth<=960))),()=>window.removeEventListener("resize",(()=>n(window.innerWidth<960))))));let l=[],i=e.html;if("string"==typeof i)for(;0!==i.trim().length;)0===i.search("<")?(l.push(i.substring(0,i.search(">")+1)),i=i.substring(i.search(">")+1,i.length)):(l.push(i.substring(0,i.search("<"))),i=i.substring(i.search("<"),i.length));return l=l.map((e=>0===e.search("<")?-1!==e.search("/")?a.createElement("span",{class:"tag",key:e},e," ",a.createElement("br",null)):a.createElement("span",{class:"tag",key:e},"  ",e):a.createElement("span",{class:"word",key:e},e))),a.createElement("div",{class:"html-container",style:t?{display:"none"}:e.reverse?{borderRadius:"0 32px 32px 0"}:{borderRadius:"32px 0 0 32px"}},a.createElement("span",{class:"tag"},"<html>"),a.createElement("br",null),a.createElement("span",{class:"tag"}," ","<head>"),a.createElement("br",null),a.createElement("span",{class:"tag"},"  ","<title>"),a.createElement("span",{class:"word"},e.title),a.createElement("span",{class:"tag"},"</title>"),a.createElement("br",null),a.createElement("span",{class:"tag"}," ","</head>"),a.createElement("br",null),a.createElement("span",{class:"tag"}," ","<body>"),a.createElement("br",null),a.createElement("span",{class:"word"},l),a.createElement("span",{class:"tag"}," ","</body>"),a.createElement("br",null),a.createElement("span",{class:"tag"},"</html>"))}function c(e){return a.createElement("div",{class:"display-content"},a.createElement(s,{title:e.title,html:e.html,reverse:e.reverse}),a.createElement(o.A,{title:e.title,reverse:e.reverse,noPad:e.noPad,isHTML:!0},e.children))}var m=n(4810),d=n(4333);const p={display:"block",margin:"0"};var g=(e,t)=>{let{data:n}=e;return a.createElement("div",null,a.createElement(m.de,{query:"4161343547",render:e=>a.createElement(d.A,{fixed:e.image.childImageSharp.fixed,style:p,draggable:!1,alt:"Owen G. Bean Front End Developer out of Laptop",durationFadeIn:500})}))},u=n(9075),E=n(9551),h=n(9640),w=n(3014),b=n(4972),v=n(1460),f=n(2322),A=n(798),k=n(7628),y=n(9043),L=n(830),x=n(5646);function O(){return a.createElement("div",null,a.createElement(i.A,null),a.createElement(x.A,{desc:"Owen Guaraldo Bean is a DevOps Engineer from Maine. \r Owen loves to develop pipelines!"}),a.createElement("div",{style:{marginTop:"100px"}}),a.createElement(c,{title:"Owen Website",html:"\r <h1>\r Owen G. Bean\r <br />\r DevOps Engineer\r </h1>\r <button>Repo</button>\r <button>Contact</button>\r <img src='OwenBeanLaptop.png' />",reverse:!0},a.createElement("h1",null,"Owen G. Bean",a.createElement("br",null),"DevOps Engineer"),a.createElement("div",{class:"portfolio-grid"},a.createElement("div",{class:"button-flow"},a.createElement(l.A,{css:{marginTop:"20px"},title:"Repo",link:"/repo"}),a.createElement(l.A,{css:{marginTop:"20px"},title:"Contact",link:"/contact"})),a.createElement(g,null))),a.createElement(c,{title:"About Owen",html:"\r <p> {{aboutMe.desc}} </p>\r <button>About Me</button>\r "},a.createElement("p",null,"DevOps engineer after transition from doing software development work. I've originally done a bunch of different software development work of full stack sites and mobile apps. Transitioned into DevOps work starting with mobile apps as I got into fastlane library script for deploying apps. That is where I was doing mobile DevOps works. From there, I transitioned doing DevOps work for full stack web application."),a.createElement(l.A,{css:{margin:"16px auto",display:"block"},title:"About Me",link:"/about"})),a.createElement(c,{title:"Owen Skills",html:'\r <img src="logo.png"></img>\r <p>DevOps Toolings</p>\r <p>Various Scripting and Programming Languages</p>\r ',reverse:!0},a.createElement(I,null),a.createElement(l.A,{css:{margin:"16px auto",display:"block"},title:"Skills",link:"/about"})),a.createElement(c,{title:"Owen Contact",html:'\r <a href="mailto:owenbean400@gmail.com"></a>\r <a href="www.linkedin.com"></a>\r <a href="www.github.com"></a>\r ',reverse:!1},a.createElement(C,null),a.createElement(l.A,{css:{margin:"16px auto",display:"block"},title:"Contact",link:"/contact"})),a.createElement(r.A,null))}function I(){let e={container:{display:"flex",flexWrap:"wrap"},item:{margin:"16px"}};return a.createElement("div",{style:e.container},a.createElement(u.A,{style:e.item,image:b.A,altImg:"Gitlab Logo",name:"Gitlab",iconLink:"https://docs.gitlab.com/ee/ci/"}),a.createElement(u.A,{style:e.item,image:v.A,altImg:"Github Logo",name:"Github",iconLink:"https://docs.github.com/en/actions"}),a.createElement(u.A,{style:e.item,image:L.A,altImg:"Fastlane Logo",name:"Fastlane",iconLink:"https://docs.fastlane.tools/"}),a.createElement(u.A,{style:e.item,image:f.A,altImg:"Google Cloud Logo",name:"Google Cloud",iconLink:"https://cloud.google.com/docs"}),a.createElement(u.A,{style:e.item,image:A.A,altImg:"Xcode Logo",name:"Xcode",iconLink:"https://developer.apple.com/documentation/xcode"}),a.createElement(u.A,{style:e.item,image:k.A,altImg:"Android Logo",name:"Android",iconLink:"https://developer.android.com/"}),a.createElement(u.A,{style:e.item,image:w.A,altImg:"Firebase Logo",name:"Firebase",iconLink:"https://firebase.google.com/docs"}),a.createElement(u.A,{style:e.item,image:y.A,altImg:"Ansible Logo",name:"Ansible",iconLink:"https://docs.ansible.com/"}))}function C(){let e={container:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},item:{margin:"16px"}};return a.createElement("div",{style:e.container},a.createElement(u.A,{style:e.item,image:E.A,altImg:"Owen Bean Email Logo",name:"Email",iconLink:"mailto: owenbean400@gmail.com"}),a.createElement(u.A,{style:e.item,image:h.A,altImg:"Owen Bean Linkedin Logo",name:"LinkedIn",iconLink:"https://www.linkedin.com/in/owen-bean/"}),a.createElement(u.A,{style:e.item,image:v.A,altImg:"Owen Bean Github Logo",name:"GitHub",iconLink:"https://github.com/owenbean400"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-97fcf2c12e4e70dc41a8.js.map