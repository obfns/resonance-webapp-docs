"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[49224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,d=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||d;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=r.length,o=new Array(d);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<d;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72102:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=r(67294),d=r(3905);const o={id:"update-order",title:"updateOrder",hide_table_of_contents:!1},i=void 0,p={unversionedId:"demand/api/graphql-admin/reference/mutations/update-order",id:"demand/api/graphql-admin/reference/mutations/update-order",title:"updateOrder",description:"Update an Order.",source:"@site/docs/demand/api/graphql-admin/reference/mutations/update-order.mdx",sourceDirName:"demand/api/graphql-admin/reference/mutations",slug:"/demand/api/graphql-admin/reference/mutations/update-order",permalink:"/demand/api/graphql-admin/reference/mutations/update-order",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/mutations/update-order.mdx",tags:[],version:"current",frontMatter:{id:"update-order",title:"updateOrder",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"updateOrderItem",permalink:"/demand/api/graphql-admin/reference/mutations/update-order-item"},next:{title:"updatePageTypeContent",permalink:"/demand/api/graphql-admin/reference/mutations/update-page-type-content"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateOrder.<b>input</b></code><Bullet /><code>OrderUpdateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateorderbinputbcodeorderupdateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Order</code> <Badge class="secondary" text="object"/>',id:"order-",level:4}],u=()=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,d.kt)(a.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:u,SpecifiedBy:s,Badge:m};function g(e){let{components:t,...r}=e;return(0,d.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Update an Order."),(0,d.kt)("p",null,"Requires the order/write permission on the given DemandHq."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"updateOrder(\n  input: OrderUpdateInput!\n): Order!\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-updateorderbinputbcodeorderupdateinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"updateOrder.",(0,d.kt)("b",null,"input"))),(0,d.kt)(u,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/order-update-input"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderUpdateInput!"))," ",(0,d.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"order-"},(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order"},(0,d.kt)("inlineCode",{parentName:"a"},"Order"))," ",(0,d.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"An order is a collection of items that a customer has purchased.\nAs an order accrues transactions, it changes status until it is eventually complete.\nOrders rely on Suppliers to fulfill the OrderItems by creating PurchaseOrderItems (which are then fulfilled).")))}g.isMDXComponent=!0}}]);