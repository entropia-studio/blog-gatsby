(self.webpackChunkgatsbyjs_com=self.webpackChunkgatsbyjs_com||[]).push([[7374],{80054:function(t,e,r){"use strict";r.d(e,{es:function(){return I},ZP:function(){return T}});var n=r(87329),o=r(139),i=r(67294),a=r(1597),l=r(42775),u=r(72045);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var f=function(t,e,r){var n,o=(n=t.pathname).endsWith("/")?n:n+"/",i=e.link===o,a=e.link.replace(/#.*/,"")===o,l=!r||"NONE"===r;if(r){if("NONE"===r&&a)return e;if(e.link===o+"#"+r)return e}return i&&l?e:e.link!==""+o+t.hash||r?!(!i||t.hash||r)&&e:e},d=function t(e,r,n){for(var o,i=c(e);!(o=i()).done;){var a=o.value;if(a.link&&f(r,a,n))return a;if(a.items){var l=t(a.items,r,n);if(l)return l}}return!1};function p(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=function t(e,r){for(var n,o=p(e);!(n=o()).done;){var i=n.value;if(i.title===r)return i;if(i.items)for(var a,l=p(i.items);!(a=l()).done;){var u=t([a.value],r);if(u)return u}}return!1},v=function t(e,r,n){if(void 0===n&&(n=[]),r.parentTitle){var o=b(e,r.parentTitle);return n.push(o),t(e,o,n)}return n},y=r(82688),h=r(96156),g=r(7701),Z=r(64023),k=function(t){var e=t.structuredData;return(0,Z.tZ)(g.ZP,null,(0,Z.tZ)("script",{type:"application/ld+json"},JSON.stringify(e)))};function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var w=function(t){var e=t.listName,r=t.itemList;return(0,Z.tZ)(k,{structuredData:{"@context":"https://schema.org","@type":"BreadcrumbList",name:e,itemListElement:r.map((function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){(0,h.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({"@type":"ListItem",position:e+1},t)}))}})};function O(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var A=function(t){var e=t.character,r=void 0===e?(0,o.tZ)(l.FNi,null):e;return(0,o.tZ)("span",{sx:{my:0,mx:2,verticalAlign:"middle",color:"grey.40"},role:"presentation"},r)},x=function(t){var e=t.children,r=t.mobile,n=void 0!==r&&r;return(0,o.tZ)("nav",{"aria-label":"breadcrumb",sx:{color:"text.secondary",display:[n?"inherit":"none",null,n?"none":"inherit"],fontSize:1,mb:[7,null,9]}},e)},L=function(t){return{color:t.colors.grey[60],textDecoration:"none","&:hover":{color:t.colors.purple[50],borderBottomWidth:1,borderBottomColor:t.colors.purple[50],borderBottomStyle:"solid"}}},D=function t(e,r){if(e.to===r)return[e];for(var o,i=O(e.subItems||[]);!(o=i()).done;){var a=t(o.value,r);if(a.length)return[e].concat((0,n.Z)(a))}return[]},I=function(t){var e=t.location,r=t.title,n=D(y[0],e.pathname);0===n.length&&n.push({label:r,to:e.pathname.replace(/^\//,"")});var u=function(t){return t.to||t.subItems&&t.subItems[0].to};return(0,o.tZ)(i.Fragment,null,(0,o.tZ)(w,{listName:"Gatsby Docs",itemList:n.map((function(t){return{name:t.label,item:"https://www.gatsbyjs.com/"+u(t)}}))}),(0,o.tZ)(x,null,n.map((function(t,e){var r=t.title||t.label;return e<n.length-1?(0,o.tZ)(i.Fragment,{key:r},(0,o.tZ)("span",null,(0,o.tZ)(a.Link,{to:u(t),css:function(t){return L(t)}},r)),(0,o.tZ)(A,{character:e===n.length-2?(0,o.tZ)(l.FNi,null):void 0})):null}))),n.length>1&&(0,o.tZ)(x,{mobile:!0},(0,o.tZ)(A,{character:(0,o.tZ)(l.G1X,null)}),(0,o.tZ)(a.Link,{to:"/docs/",css:function(t){return L(t)}},"Docs")))},T=function(t){var e=t.location,r=(0,u.mC)(e.pathname);if(void 0===r)return null;var n=d(r.items,e),c=v(r.items,n),s=r.key,f=r.breadcrumbTitle||r.title;return"Introduction"===n.title?(0,o.tZ)(i.Fragment,null,(0,o.tZ)(x,null,(0,o.tZ)(a.Link,{to:"/"},"Home"),(0,o.tZ)(A,null),f),(0,o.tZ)(x,{mobile:!0},(0,o.tZ)(A,{character:(0,o.tZ)(l.G1X,null)}),(0,o.tZ)(a.Link,{to:"/"},"Home"))):(0,o.tZ)(i.Fragment,null,(0,o.tZ)(x,null,(0,o.tZ)(a.Link,{to:"/"},"Home"),(0,o.tZ)(A,null),(0,o.tZ)(a.Link,{to:"/"+s+"/"},f),(0,o.tZ)(A,null),c.reverse().map((function(t){var e=t.breadcrumbTitle||t.title;return(0,o.tZ)(i.Fragment,{key:e},(0,o.tZ)("span",null,(0,o.tZ)(a.Link,{to:t.link},e)),(0,o.tZ)(A,null))})),(0,o.tZ)("span",{"aria-current":"page"},n.breadcrumbTitle||n.title)),c&&(0,o.tZ)(x,{mobile:!0},(0,o.tZ)(A,{character:(0,o.tZ)(l.G1X,null)}),(0,o.tZ)(a.Link,{to:c[c.length-1]?c[c.length-1].link:"/"+s+"/"},c[c.length-1]?c[c.length-1].breadcrumbTitle||c[c.length-1].title:f)))}},93510:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(67294),o=r(42775),i=r(64023);var a=[{text:"v3 Docs",url:"https://v3.gatsbyjs.com/docs/"},{text:"v2 Docs",url:"https://v2.gatsbyjs.com/docs/"},{text:"v1 Docs",url:"https://v1.gatsbyjs.org/docs/"}],l={name:"79elbk",styles:"position:relative;"};var u={title:"Documentation",rootPath:"/docs",searchType:"docs",links:[{name:"Tutorial",to:"/docs/tutorial"},{name:"How-To Guides",to:"/docs/how-to"},{name:"Reference",to:"/docs/reference"},{name:"Conceptual Guides",to:"/docs/conceptual"}],rightElement:(0,i.tZ)((function(){var t=n.useState(!1),e=t[0],r=t[1],u=n.useRef(null),c=function(t){null!=u&&u.current.contains(t.target)||r(!1)};return n.useEffect((function(){return document.body.addEventListener("click",c),function(){document.body.removeEventListener("click",c)}}),[]),(0,i.tZ)("div",{ref:u,css:l},(0,i.tZ)("button",{onClick:function(){r(!e)},css:function(t){var e;return(e={display:"none"})[t.mediaQueries.desktop]={appearance:"none",display:"flex",alignItems:"center",fontFamily:"inherit",fontSize:t.fontSizes[1],color:"inherit",backgroundColor:"transparent",border:0,margin:0,paddingTop:t.space[3],paddingBottom:t.space[3],paddingLeft:t.space[4],paddingRight:t.space[4],cursor:"pointer","&:hover, &:focus":{backgroundColor:t.colors.purple[1]}},e}},"v4",(0,i.tZ)(o.Yc6,null)),(0,i.tZ)("hr",{css:function(t){var e;return(e={marginBottom:t.space[2]})[t.mediaQueries.desktop]={display:"none"},e}}),(0,i.tZ)("div",{css:function(t){var r;return(r={display:"block"})[t.mediaQueries.desktop]={position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",display:e?"block":"none",paddingTop:t.space[3],paddingBottom:t.space[3],backgroundColor:t.colors.white,borderRadius:t.radii[3],boxShadow:t.shadows.dialog,overflow:"hidden"},r}},a.map((function(t){return(0,i.tZ)("a",{key:t.url,target:"_blank",href:t.url,css:function(t){var e;return(e={display:"block",fontSize:t.fontSizes[1],paddingTop:t.space[2],paddingBottom:t.space[2],paddingLeft:t.space[3],paddingRight:t.space[3],color:"inherit",textDecoration:"none","&:hover, &:focus":{textDecoration:"underline"}})[t.mediaQueries.desktop]={minWidth:96,textAlign:"center"},e},rel:"noreferrer"},t.text)}))))}),null)}}}]);
//# sourceMappingURL=8fb5f7d5a1719faaf53b9ecbc048b5ad49ffa1c7-4b1ca96f641c66a5f5dc.js.map