"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[81074],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,m=p["".concat(l,".").concat(u)]||p[u]||f[u]||o;return r?n.createElement(m,c(c({ref:t},d),{},{components:r})):n.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74522:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(87462),a=r(67294),o=r(3905);const c={id:"order-transaction-gateway",title:"OrderTransactionGateway",hide_table_of_contents:!1},i=void 0,l={unversionedId:"demand/api/graphql-storefront/reference/enums/order-transaction-gateway",id:"demand/api/graphql-storefront/reference/enums/order-transaction-gateway",title:"OrderTransactionGateway",description:"Indicates which Payment Gateway was used for a Transaction.",source:"@site/docs/demand/api/graphql-storefront/reference/enums/order-transaction-gateway.mdx",sourceDirName:"demand/api/graphql-storefront/reference/enums",slug:"/demand/api/graphql-storefront/reference/enums/order-transaction-gateway",permalink:"/demand/api/graphql-storefront/reference/enums/order-transaction-gateway",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/enums/order-transaction-gateway.mdx",tags:[],version:"current",frontMatter:{id:"order-transaction-gateway",title:"OrderTransactionGateway",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"OrderStatus",permalink:"/demand/api/graphql-storefront/reference/enums/order-status"},next:{title:"OrderTransactionType",permalink:"/demand/api/graphql-storefront/reference/enums/order-transaction-type"}},s={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>OrderTransactionGateway.<b>TEST</b></code>",id:"code-style-fontweight-normal-ordertransactiongatewaybtestbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:f,Badge:u};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Indicates which Payment Gateway was used for a Transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum OrderTransactionGateway {\n  TEST\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ordertransactiongatewaybtestbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrderTransactionGateway.",(0,o.kt)("b",null,"TEST")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-order-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicOrderTransaction")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);