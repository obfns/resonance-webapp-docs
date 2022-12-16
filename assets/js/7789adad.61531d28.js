"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[42907],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13485:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),a=r(67294),l=r(3905);const i={id:"supplier-status",title:"SupplierStatus",hide_table_of_contents:!1},o=void 0,p={unversionedId:"demand/api/graphql-admin/reference/enums/supplier-status",id:"demand/api/graphql-admin/reference/enums/supplier-status",title:"SupplierStatus",description:"Indication of whether the Supplier is live and accepting orders",source:"@site/docs/demand/api/graphql-admin/reference/enums/supplier-status.mdx",sourceDirName:"demand/api/graphql-admin/reference/enums",slug:"/demand/api/graphql-admin/reference/enums/supplier-status",permalink:"/demand/api/graphql-admin/reference/enums/supplier-status",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/enums/supplier-status.mdx",tags:[],version:"current",frontMatter:{id:"supplier-status",title:"SupplierStatus",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"SupplierProductContentType",permalink:"/demand/api/graphql-admin/reference/enums/supplier-product-content-type"},next:{title:"SupplierVariantHandlingCostUnit",permalink:"/demand/api/graphql-admin/reference/enums/supplier-variant-handling-cost-unit"}},u={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SupplierStatus.<b>ARCHIVED</b></code>",id:"code-style-fontweight-normal-supplierstatusbarchivedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupplierStatus.<b>DRAFT</b></code>",id:"code-style-fontweight-normal-supplierstatusbdraftbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupplierStatus.<b>PRIVATE</b></code>",id:"code-style-fontweight-normal-supplierstatusbprivatebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupplierStatus.<b>PUBLIC</b></code>",id:"code-style-fontweight-normal-supplierstatusbpublicbcode",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:c,SpecifiedBy:d,Badge:m};function b(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Indication of whether the Supplier is live and accepting orders"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SupplierStatus {\n  ARCHIVED\n  DRAFT\n  PRIVATE\n  PUBLIC\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplierstatusbarchivedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierStatus.",(0,l.kt)("b",null,"ARCHIVED")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates a Supplier's goods are no longer available for retailing.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplierstatusbdraftbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierStatus.",(0,l.kt)("b",null,"DRAFT")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates that a Supplier's goods are not yet available for retailing. Functionally identical to ARCHIVED.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplierstatusbprivatebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierStatus.",(0,l.kt)("b",null,"PRIVATE")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates that a Supplier is activated and available, but not in the public Supplier Marketplace.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplierstatusbpublicbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplierStatus.",(0,l.kt)("b",null,"PUBLIC")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates that a Supplier is not only activated, but available in the public Supplier Marketplace.")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/public-supplier"},(0,l.kt)("inlineCode",{parentName:"a"},"PublicSupplier")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);