"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[14831],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91032:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(67294),o=r(3905);const i={id:"cart-remove-items-input",title:"CartRemoveItemsInput",hide_table_of_contents:!1},s=void 0,c={unversionedId:"demand/api/graphql-storefront/reference/inputs/cart-remove-items-input",id:"demand/api/graphql-storefront/reference/inputs/cart-remove-items-input",title:"CartRemoveItemsInput",description:"Input for removing items from a cart or savedForLater",source:"@site/docs/demand/api/graphql-storefront/reference/inputs/cart-remove-items-input.mdx",sourceDirName:"demand/api/graphql-storefront/reference/inputs",slug:"/demand/api/graphql-storefront/reference/inputs/cart-remove-items-input",permalink:"/demand/api/graphql-storefront/reference/inputs/cart-remove-items-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/inputs/cart-remove-items-input.mdx",tags:[],version:"current",frontMatter:{id:"cart-remove-items-input",title:"CartRemoveItemsInput",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"CartItemInput",permalink:"/demand/api/graphql-storefront/reference/inputs/cart-item-input"},next:{title:"CheckoutOrderInput",permalink:"/demand/api/graphql-storefront/reference/inputs/checkout-order-input"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CartRemoveItemsInput.<b>cartItems</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartremoveitemsinputbcartitemsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CartRemoveItemsInput.<b>savedForLaterItems</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cartremoveitemsinputbsavedforlateritemsbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:d,SpecifiedBy:m,Badge:u};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input for removing items from a cart or savedForLater\nCan be used in combination with CartAddOrUpdateItemsInput to move items between cartItems and savedForLaterItems."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input CartRemoveItemsInput {\n  cartItems: [ID!]\n  savedForLaterItems: [ID!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cartremoveitemsinputbcartitemsbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CartRemoveItemsInput.",(0,o.kt)("b",null,"cartItems"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-cartremoveitemsinputbsavedforlateritemsbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CartRemoveItemsInput.",(0,o.kt)("b",null,"savedForLaterItems"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/mutations/change-customer-cart"},(0,o.kt)("inlineCode",{parentName:"a"},"changeCustomerCart")),"  ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/mutations/change-device-cart"},(0,o.kt)("inlineCode",{parentName:"a"},"changeDeviceCart")),"  ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);