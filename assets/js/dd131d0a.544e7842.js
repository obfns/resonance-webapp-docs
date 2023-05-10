"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[48231],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return t?n.createElement(f,c(c({ref:r},d),{},{components:t})):n.createElement(f,c({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61958:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=t(87462),a=t(67294),o=t(3905);const c={id:"purchase-order-item-edge",title:"PurchaseOrderItemEdge",hide_table_of_contents:!1},i=void 0,l={unversionedId:"supply/api/graphql-admin/reference/objects/purchase-order-item-edge",id:"supply/api/graphql-admin/reference/objects/purchase-order-item-edge",title:"PurchaseOrderItemEdge",description:"One edge producing one PurchaseOrderItem node",source:"@site/docs/supply/api/graphql-admin/reference/objects/purchase-order-item-edge.mdx",sourceDirName:"supply/api/graphql-admin/reference/objects",slug:"/supply/api/graphql-admin/reference/objects/purchase-order-item-edge",permalink:"/supply/api/graphql-admin/reference/objects/purchase-order-item-edge",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/objects/purchase-order-item-edge.mdx",tags:[],version:"current",frontMatter:{id:"purchase-order-item-edge",title:"PurchaseOrderItemEdge",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"PurchaseOrderItemConnection",permalink:"/supply/api/graphql-admin/reference/objects/purchase-order-item-connection"},next:{title:"PurchaseOrderItemFulfillment",permalink:"/supply/api/graphql-admin/reference/objects/purchase-order-item-fulfillment"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PurchaseOrderItemEdge.<b>node</b></code><Bullet /><code>PurchaseOrderItem</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-purchaseorderitemedgebnodebcodepurchaseorderitem-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:s,SpecifiedBy:u,Badge:m};function g(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One edge producing one PurchaseOrderItem node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PurchaseOrderItemEdge {\n  node: PurchaseOrderItem\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-purchaseorderitemedgebnodebcodepurchaseorderitem-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PurchaseOrderItemEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/purchase-order-item"},(0,o.kt)("inlineCode",{parentName:"a"},"PurchaseOrderItem"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/purchase-order-item-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PurchaseOrderItemConnection")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);