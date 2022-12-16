"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[77041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=a(r),b=p,m=u["".concat(l,".").concat(b)]||u[b]||s[b]||o;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:p,c[1]=i;for(var a=2;a<o;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},89253:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(87462),p=r(67294),o=r(3905);const c={id:"public-supplier-product-edge",title:"PublicSupplierProductEdge",hide_table_of_contents:!1},i=void 0,l={unversionedId:"demand/api/graphql-admin/reference/objects/public-supplier-product-edge",id:"demand/api/graphql-admin/reference/objects/public-supplier-product-edge",title:"PublicSupplierProductEdge",description:"One edge producing one SupplierProduct Node",source:"@site/docs/demand/api/graphql-admin/reference/objects/public-supplier-product-edge.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/public-supplier-product-edge",permalink:"/demand/api/graphql-admin/reference/objects/public-supplier-product-edge",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/public-supplier-product-edge.mdx",tags:[],version:"current",frontMatter:{id:"public-supplier-product-edge",title:"PublicSupplierProductEdge",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"PublicSupplierProductContentItem",permalink:"/demand/api/graphql-admin/reference/objects/public-supplier-product-content-item"},next:{title:"PublicSupplierProductTags",permalink:"/demand/api/graphql-admin/reference/objects/public-supplier-product-tags"}},a={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierProductEdge.<b>node</b></code><Bullet /><code>PublicSupplierProduct</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicsupplierproductedgebnodebcodepublicsupplierproduct-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(p.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(p.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(p.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:s,Badge:b};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One edge producing one SupplierProduct Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicSupplierProductEdge {\n  node: PublicSupplierProduct\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierproductedgebnodebcodepublicsupplierproduct-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierProductEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/public-supplier-product"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicSupplierProduct"))," ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/public-supplier-product-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicSupplierProductConnectionWithSearch")),"  ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);