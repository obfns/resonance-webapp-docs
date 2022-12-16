"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[75002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38296:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(87462),r=n(67294),i=n(3905);const l={id:"variant-delivery-method",title:"VariantDeliveryMethod",hide_table_of_contents:!1},o=void 0,d={unversionedId:"demand/api/graphql-admin/reference/enums/variant-delivery-method",id:"demand/api/graphql-admin/reference/enums/variant-delivery-method",title:"VariantDeliveryMethod",description:"How this variant gets delivered. Defaults to SHIPPING.",source:"@site/docs/demand/api/graphql-admin/reference/enums/variant-delivery-method.mdx",sourceDirName:"demand/api/graphql-admin/reference/enums",slug:"/demand/api/graphql-admin/reference/enums/variant-delivery-method",permalink:"/demand/api/graphql-admin/reference/enums/variant-delivery-method",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/enums/variant-delivery-method.mdx",tags:[],version:"current",frontMatter:{id:"variant-delivery-method",title:"VariantDeliveryMethod",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"SupplierVariantHandlingCostUnit",permalink:"/demand/api/graphql-admin/reference/enums/supplier-variant-handling-cost-unit"},next:{title:"VariantHandlingCost",permalink:"/demand/api/graphql-admin/reference/enums/variant-handling-cost"}},p={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>VariantDeliveryMethod.<b>EMAIL</b></code>",id:"code-style-fontweight-normal-variantdeliverymethodbemailbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>VariantDeliveryMethod.<b>SHIPPING</b></code>",id:"code-style-fontweight-normal-variantdeliverymethodbshippingbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:m,SpecifiedBy:s,Badge:u};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How this variant gets delivered. Defaults to SHIPPING."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum VariantDeliveryMethod {\n  EMAIL\n  SHIPPING\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantdeliverymethodbemailbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantDeliveryMethod.",(0,i.kt)("b",null,"EMAIL")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantdeliverymethodbshippingbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantDeliveryMethod.",(0,i.kt)("b",null,"SHIPPING")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/order-item"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderItem")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/inputs/order-item-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderItemCreateInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/variant"},(0,i.kt)("inlineCode",{parentName:"a"},"Variant")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/inputs/variant-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantCreateInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/inputs/variant-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantUpdateInput")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);