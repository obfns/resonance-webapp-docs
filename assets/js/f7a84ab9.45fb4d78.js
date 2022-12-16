"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[57059],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),f=p,m=u["".concat(i,".").concat(f)]||u[f]||s[f]||o;return t?n.createElement(m,l(l({ref:r},d),{},{components:t})):n.createElement(m,l({ref:r},d))}));function m(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var o=t.length,l=new Array(o);l[0]=f;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a[u]="string"==typeof e?e:p,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},17530:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=t(87462),p=t(67294),o=t(3905);const l={id:"supplier-product-edge",title:"SupplierProductEdge",hide_table_of_contents:!1},a=void 0,i={unversionedId:"supply/api/graphql-admin/reference/objects/supplier-product-edge",id:"supply/api/graphql-admin/reference/objects/supplier-product-edge",title:"SupplierProductEdge",description:"One edge producing one SupplierProduct Node",source:"@site/docs/supply/api/graphql-admin/reference/objects/supplier-product-edge.mdx",sourceDirName:"supply/api/graphql-admin/reference/objects",slug:"/supply/api/graphql-admin/reference/objects/supplier-product-edge",permalink:"/supply/api/graphql-admin/reference/objects/supplier-product-edge",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/objects/supplier-product-edge.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-edge",title:"SupplierProductEdge",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierProductDeleteResponse",permalink:"/supply/api/graphql-admin/reference/objects/supplier-product-delete-response"},next:{title:"SupplierProductImageFromFileInputResponse",permalink:"/supply/api/graphql-admin/reference/objects/supplier-product-image-from-file-input-response"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductEdge.<b>node</b></code><Bullet /><code>SupplierProduct</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplierproductedgebnodebcodesupplierproduct-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(p.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(p.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(p.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:s,Badge:f};function g(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One edge producing one SupplierProduct Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierProductEdge {\n  node: SupplierProduct\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierproductedgebnodebcodesupplierproduct-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-product"},(0,o.kt)("inlineCode",{parentName:"a"},"SupplierProduct"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-product-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"SupplierProductConnectionWithSearch")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);