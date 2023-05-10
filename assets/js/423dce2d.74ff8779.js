"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[95046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,f=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3513:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=r(67294),l=r(3905);const o={id:"purchase-order-item-update-input",title:"PurchaseOrderItemUpdateInput",hide_table_of_contents:!1},p=void 0,i={unversionedId:"supply/api/graphql-admin/reference/inputs/purchase-order-item-update-input",id:"supply/api/graphql-admin/reference/inputs/purchase-order-item-update-input",title:"PurchaseOrderItemUpdateInput",description:"Input for updating a PurchaseOrderItem",source:"@site/docs/supply/api/graphql-admin/reference/inputs/purchase-order-item-update-input.mdx",sourceDirName:"supply/api/graphql-admin/reference/inputs",slug:"/supply/api/graphql-admin/reference/inputs/purchase-order-item-update-input",permalink:"/supply/api/graphql-admin/reference/inputs/purchase-order-item-update-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/inputs/purchase-order-item-update-input.mdx",tags:[],version:"current",frontMatter:{id:"purchase-order-item-update-input",title:"PurchaseOrderItemUpdateInput",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"PurchaseOrderItemFulfillmentInput",permalink:"/supply/api/graphql-admin/reference/inputs/purchase-order-item-fulfillment-input"},next:{title:"StringFilterInput",permalink:"/supply/api/graphql-admin/reference/inputs/string-filter-input"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PurchaseOrderItemUpdateInput.<b>fulfillments</b></code><Bullet /><code>[PurchaseOrderItemFulfillmentInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-purchaseorderitemupdateinputbfulfillmentsbcodepurchaseorderitemfulfillmentinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PurchaseOrderItemUpdateInput.<b>isCancelled</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-purchaseorderitemupdateinputbiscancelledbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PurchaseOrderItemUpdateInput.<b>isDraft</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-purchaseorderitemupdateinputbisdraftbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PurchaseOrderItemUpdateInput.<b>isProcessing</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-purchaseorderitemupdateinputbisprocessingbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PurchaseOrderItemUpdateInput.<b>purchaseOrderItemId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-purchaseorderitemupdateinputbpurchaseorderitemidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:c,SpecifiedBy:u,Badge:m};function h(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Input for updating a PurchaseOrderItem"),(0,l.kt)("p",null,"Requires purchaseorderitem/write permissions on the Supplier"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input PurchaseOrderItemUpdateInput {\n  fulfillments: [PurchaseOrderItemFulfillmentInput]\n  isCancelled: Boolean\n  isDraft: Boolean\n  isProcessing: Boolean\n  purchaseOrderItemId: ID!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-purchaseorderitemupdateinputbfulfillmentsbcodepurchaseorderitemfulfillmentinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PurchaseOrderItemUpdateInput.",(0,l.kt)("b",null,"fulfillments"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/inputs/purchase-order-item-fulfillment-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[PurchaseOrderItemFulfillmentInput]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Packages of items being shipped.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-purchaseorderitemupdateinputbiscancelledbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PurchaseOrderItemUpdateInput.",(0,l.kt)("b",null,"isCancelled"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When is cancelled, cannot be processed.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-purchaseorderitemupdateinputbisdraftbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PurchaseOrderItemUpdateInput.",(0,l.kt)("b",null,"isDraft"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When is a draft, cannot be processed.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-purchaseorderitemupdateinputbisprocessingbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PurchaseOrderItemUpdateInput.",(0,l.kt)("b",null,"isProcessing"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Once in processing, can no longer be draft or cancelled.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-purchaseorderitemupdateinputbpurchaseorderitemidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PurchaseOrderItemUpdateInput.",(0,l.kt)("b",null,"purchaseOrderItemId"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/update-purchase-order-item"},(0,l.kt)("inlineCode",{parentName:"a"},"updatePurchaseOrderItem")),"  ",(0,l.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);