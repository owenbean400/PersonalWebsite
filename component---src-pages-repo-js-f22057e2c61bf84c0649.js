(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{L9hT:function(e,t,n){},W8E7:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r=n.n(a);function i(e){return r.a.createElement("div",{class:"navbar-tool"},r.a.createElement("h5",null,e.title),r.a.createElement("div",{class:"circle-container"},r.a.createElement("div",{class:"circle green",onClick:function(){return e.setActive(!e.isActive)}}),r.a.createElement("div",{class:"circle yellow",onClick:function(){return e.setActive(!e.isActive)}}),r.a.createElement("div",{class:"circle red",onClick:function(){return e.setActive(!1)}})))}function o(e){var t=Object(a.useState)(!0),n=t[0],o=t[1],c=Object(a.useState)(!1),s=c[0],l=c[1];return Object(a.useEffect)((function(){return o(window.innerWidth<=960),window.addEventListener("resize",(function(){return o(window.innerWidth<=960)})),function(){return window.removeEventListener("resize",(function(){return o(window.innerWidth<960)}))}})),r.a.createElement("div",{className:"web-content",style:{gridColumnStart:n||e.reverse?"1":"2",gridRowStart:"1",position:s?"fixed":"inherit",top:"64px",left:0,maxWidth:s?"100vw":"500px",width:s?"100vw":"auto",height:s?"100vh":"auto",borderRadius:s?"0px":"",margin:e.isHTML||s?"0":"64px auto"}},r.a.createElement(i,{title:e.title,setActive:l,isActive:s}),r.a.createElement("div",{style:{padding:e.noPad?"0px":"16px"}},e.children))}},Zvzz:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TRakVQTuIOGSoThZEpThKFYtgobQVWnUwufQLmjQkKS6OgmvBwY/FqoOLs64OroIg+AHi5uak6CIl/i8ptIjx4Lgf7+497t4BQqPCVLNrElA1y0jFY2I2tyr2vKIPAQwiClFipp5IL2bgOb7u4ePrXYRneZ/7c/QreZMBPpF4jumGRbxBHN20dM77xCFWkhTic+IJgy5I/Mh12eU3zkWHBZ4ZMjKpeeIQsVjsYLmDWclQiWeIw4qqUb6QdVnhvMVZrdRY6578hcG8tpLmOs1RxLGEBJIQIaOGMiqwEKFVI8VEivZjHv4Rx58kl0yuMhg5FlCFCsnxg//B727NwvSUmxSMAd0vtv0xBvTsAs26bX8f23bzBPA/A1da219tALOfpNfbWvgIGNgGLq7bmrwHXO4Aw0+6ZEiO5KcpFArA+xl9Uw4YugUCa25vrX2cPgAZ6mr5Bjg4BMaLlL3u8e7ezt7+PdPq7wfFCHLIzPkyKwAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+ULChI4GIlholcAAAONSURBVGje7ZpfbFNVHMc/57Zrx8ZwpdUN2gFh2TJ1rq1oyEaMwxlgJjzxMlyiQUHQbYlRHxrfTEyY8YEAiYskpiaOoInxz6PRCAlZGw1QBpRmE/kjTi3Q2t12bdd2vb4YzejtNm1095L7fbu/+zv33s+553fO73fuFfwpjy/YD8qQgA5gBdpWBsQ4KEdCw10nAASA1xcYAQ6gRwllJHRwyyvC4wv2C5RR9K1nJQGD6F9DEijuewDELekgsJeiGol7RAaIAWKAGCAGiAFigBggBogBYoAYIMsl8z9xXmuz0mSvrvim312ZLu1RSfDohjoeb76P5oYaVtdWYa2SSGULyJkCt+U8oRsyZ36U+X0mXxlIr8fBwLZ1FYNsejOIovx93NNu59Vn1uO0WRds19fVSHQ6R+/w2cpA/gvtf7qJ/T0ufcdIV2s9Lz3l+v9jZCo+qzq+V1abeNi1cp5NzhSITM0seL29W10IMd82MzvH6OlfGJtMcCeZx2IWNNmr8W5YxfYOO2aTet8Lry+gVNob7vV1+A+0z7OdvSaz71i4bJsVFomxtzaX2Af8EYKTCfXhI6D7odV8G45rZ2g56iyq9tA1uWybooIqxLKC5ApFVfu+fxkzywZyS84RS5auB3u6nbzb38qaeqs+QBQFPv0+qnqup93Ol294OdjXQtvaWu1Pv/5TU1z4Kak+nZoE290Ojg92cOi5NlrX1GoXJFcoMuiPcOpyvKyPEPDkgzaODz7Ci1ud2k0aU9k5XvtogqEPI1yJpsv6mSTBwLZ1ZVMkzWS/YxMJ+g6P8/roBOcWmIJf6Haqxo2m0viiAifDcfYeCzPgj/BzLKs61HZuul8/9UhwMsGe9y8xFS+FaWnU0Bsxm8SiPrFkni/O3CqxW8xCOyBVJsHh59toXGTh2/hATYktOp3TVj3yRJuNzpZ6vrkU42Q4zsWbKeKpPFazhMtuZdfmBno9jtJ87LqsvcLKbBLscDvY4XYsyT+ZLfDVeEzfmw9zRYW3P7+qWrNLy/dQcP12Zsn+P/yW5uUPLvP1hVjZCjFDhd/aY6k8n92VAN64k100Pdl16DztTXU8tnEVzQ01OG1Wqi0SFpNEOjfHr4lZrkYzBCYTXLyZnLdhcZfSwusLBIBOnW9rBSTgqM4hEIgjUmi46wRCGdExxHvnhjs/+WuJ9PoCu4EhwIP2/09JA+dRlKOhd7Z8DPAHP7sdRft6WigAAAAASUVORK5CYII="},yykx:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a=n("q1tI"),r=n.n(a),i=n("fItr"),o=n("6us9"),c=(n("L9hT"),n("W8E7")),s=n("/8WL"),l=n("PJDU"),u=n("J+3W"),d=n.n(u),p=n("4Dxb"),m=n.n(p),A=n("v+jt"),g=n.n(A),v=n("Sib7"),f=n.n(v),w=n("fz2j"),h=n.n(w),E=n("Zvzz"),b=n.n(E);function y(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var x=new Map;function L(e){var t=Object(a.useState)([]),n=t[0],u=t[1];Object(a.useEffect)((function(){fetch("https://api.github.com/users/owenbean400/repos?sort=updated").then((function(e){return e.json()})).then((function(e){return u(e)}))}),[]);var d=n.length>0?n.map((function(e){return r.a.createElement(c.a,{title:S(e.name,!0),reverse:!1,noPad:!1,isHTML:!1},r.a.createElement("h4",null,S(e.name,!1)),r.a.createElement("div",{className:"repo-group"},r.a.createElement("div",{className:"repo-owner"},r.a.createElement("img",{src:e.owner.avatar_url,alt:"Owen Bean Github"}),r.a.createElement("h5",null,e.owner.login)),r.a.createElement("h6",{className:"repo-descript"},e.description)),r.a.createElement("div",{className:"repo-logo-group"},void 0!==x.get(e.language)?r.a.createElement("img",{className:"repo-logo-img",src:x.get(e.language),alt:e.language+" Logo"}):void 0,r.a.createElement("p",{className:"repo-logo-program"},e.language)),r.a.createElement("p",{className:"repo-date"},"Updated: ",I(e.updated_at)),r.a.createElement("p",{className:"repo-date"},"Created: ",I(e.created_at)),r.a.createElement(s.a,{css:{margin:"12px 0",borderRadius:"16px"},isNewTab:!0,title:"Link to Repo",link:e.html_url}))})):r.a.createElement("p",{className:"repo-load"},"Loading Repo API...");return r.a.createElement("div",null,r.a.createElement(l.a,{title:"Owen Bean - Repo",desc:"Owen Bean Github repositories and account. \r Owen has been coding some personal projects and playing with languages. \r He however can not upload code from work and school for private reasons."}),r.a.createElement(o.a,null),r.a.createElement("main",{className:"repo-main"},r.a.createElement("h1",null,"Owen Bean Github Repositories"),r.a.createElement("p",{className:"descrip"},"Owen Bean personal projects and testing out code languages. Code from school is private, so students can't get access. There no code from work because that is private."),r.a.createElement("div",{className:"repo-repos"},d)),r.a.createElement(i.a,null))}function I(e){var t=(e=new Date(e)).getDate()<10?"0"+e.getDate():e.getDate();return e.getMonth()+1+"/"+t+"/"+e.getFullYear()}function S(e,t){for(var n,a="",r=y(e.split(""));!(n=r()).done;){var i=n.value;0===a.length?a+=i.toUpperCase():"-"==i?a+=" ":i.toLowerCase()!==i?a+=" "+i:a+=i}return a.length>12&&t&&(a=(a=a.substring(0,12)).search(" ")>0?a.substring(0,a.lastIndexOf(" ")):a,a+="..."),a}x.set("JavaScript",g.a),x.set("Kotlin",h.a),x.set("HTML",d.a),x.set("CSS",m.a),x.set("Java",f.a),x.set("TypeScript",b.a)}}]);
//# sourceMappingURL=component---src-pages-repo-js-f22057e2c61bf84c0649.js.map