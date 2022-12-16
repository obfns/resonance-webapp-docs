"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[55464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,f=m["".concat(i,".").concat(p)]||m[p]||u[p]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[m]="string"==typeof e?e:a,l[1]=d;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},79625:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=r(67294),o=r(3905);const l={id:"order-item-status",title:"OrderItemStatus",hide_table_of_contents:!1},d=void 0,i={unversionedId:"demand/api/graphql-admin/reference/enums/order-item-status",id:"demand/api/graphql-admin/reference/enums/order-item-status",title:"OrderItemStatus",description:"Indicates the status of an OrderItem.",source:"@site/docs/demand/api/graphql-admin/reference/enums/order-item-status.mdx",sourceDirName:"demand/api/graphql-admin/reference/enums",slug:"/demand/api/graphql-admin/reference/enums/order-item-status",permalink:"/demand/api/graphql-admin/reference/enums/order-item-status",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/enums/order-item-status.mdx",tags:[],version:"current",frontMatter:{id:"order-item-status",title:"OrderItemStatus",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"OrderItemDiscountType",permalink:"/demand/api/graphql-admin/reference/enums/order-item-discount-type"},next:{title:"OrderStatus",permalink:"/demand/api/graphql-admin/reference/enums/order-status"}},s={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>OrderItemStatus.<b>ASSIGNED</b></code>",id:"code-style-fontweight-normal-orderitemstatusbassignedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OrderItemStatus.<b>CANCELLED</b></code>",id:"code-style-fontweight-normal-orderitemstatusbcancelledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OrderItemStatus.<b>FULFILLED</b></code>",id:"code-style-fontweight-normal-orderitemstatusbfulfilledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OrderItemStatus.<b>INITIAL</b></code>",id:"code-style-fontweight-normal-orderitemstatusbinitialbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OrderItemStatus.<b>PARTIALLY_ASSIGNED</b></code>",id:"code-style-fontweight-normal-orderitemstatusbpartially_assignedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OrderItemStatus.<b>PARTIALLY_FULFILLED</b></code>",id:"code-style-fontweight-normal-orderitemstatusbpartially_fulfilledbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:m,SpecifiedBy:u,Badge:p};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Indicates the status of an OrderItem."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum OrderItemStatus {\n  ASSIGNED\n  CANCELLED\n  FULFILLED\n  INITIAL\n  PARTIALLY_ASSIGNED\n  PARTIALLY_FULFILLED\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-orderitemstatusbassignedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrderItemStatus.",(0,o.kt)("b",null,"ASSIGNED")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-orderitemstatusbcancelledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrderItemStatus.",(0,o.kt)("b",null,"CANCELLED")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates that the OrderItem was assigned, but is no longer needed to be fulfilled.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-orderitemstatusbfulfilledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrderItemStatus.",(0,o.kt)("b",null,"FULFILLED")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates that the OrderItem is fully fulfilled and is now complete.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-orderitemstatusbinitialbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrderItemStatus.",(0,o.kt)("b",null,"INITIAL")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates that the OrderItem is ready for processing, and data is complete.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-orderitemstatusbpartially_assignedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrderItemStatus.",(0,o.kt)("b",null,"PARTIALLY_ASSIGNED")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-orderitemstatusbpartially_fulfilledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrderItemStatus.",(0,o.kt)("b",null,"PARTIALLY_FULFILLED")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates that the OrderItem is in the process of being fulfilled.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/order-item"},(0,o.kt)("inlineCode",{parentName:"a"},"OrderItem")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);