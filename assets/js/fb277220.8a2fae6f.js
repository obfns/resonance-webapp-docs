"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),i=m(n),p=a,f=i["".concat(s,".").concat(p)]||i[p]||u[p]||d;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,o=new Array(d);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<d;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20330:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>i,SpecifiedBy:()=>u,assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=n(67294),d=n(3905);const o={id:"order-item-adjustment",title:"OrderItemAdjustment",hide_table_of_contents:!1},l=void 0,s={unversionedId:"demand/api/graphql-admin/reference/objects/order-item-adjustment",id:"demand/api/graphql-admin/reference/objects/order-item-adjustment",title:"OrderItemAdjustment",description:"An adjustment to an OrderItem. Adjustments to orders occur for a variety of",source:"@site/docs/demand/api/graphql-admin/reference/objects/order-item-adjustment.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/order-item-adjustment",permalink:"/demand/api/graphql-admin/reference/objects/order-item-adjustment",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/order-item-adjustment.mdx",tags:[],version:"current",frontMatter:{id:"order-item-adjustment",title:"OrderItemAdjustment",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"OrderEdge",permalink:"/demand/api/graphql-admin/reference/objects/order-edge"},next:{title:"OrderItemConnection",permalink:"/demand/api/graphql-admin/reference/objects/order-item-connection"}},m={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItemAdjustment.<b>adjustedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemadjustmentbadjustedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItemAdjustment.<b>adjustmentAmount</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemadjustmentbadjustmentamountbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItemAdjustment.<b>adjustmentReason</b></code><Bullet /><code>OrderItemAdjustmentReason!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-orderitemadjustmentbadjustmentreasonbcodeorderitemadjustmentreason--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItemAdjustment.<b>adjustmentType</b></code><Bullet /><code>OrderItemAdjustmentType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-orderitemadjustmentbadjustmenttypebcodeorderitemadjustmenttype--",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(a.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:i,SpecifiedBy:u,Badge:p};function y(e){let{components:t,...n}=e;return(0,d.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"An adjustment to an OrderItem. Adjustments to orders occur for a variety of\nreasons, and are only allowed at certain stages of the order process."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type OrderItemAdjustment {\n  adjustedAt: Date!\n  adjustmentAmount: Float!\n  adjustmentReason: OrderItemAdjustmentReason!\n  adjustmentType: OrderItemAdjustmentType!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderitemadjustmentbadjustedatbcodedate--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderItemAdjustment.",(0,d.kt)("b",null,"adjustedAt"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,d.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderitemadjustmentbadjustmentamountbcodefloat--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderItemAdjustment.",(0,d.kt)("b",null,"adjustmentAmount"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,d.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,d.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The amount of the adjustment.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderitemadjustmentbadjustmentreasonbcodeorderitemadjustmentreason--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderItemAdjustment.",(0,d.kt)("b",null,"adjustmentReason"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/order-item-adjustment-reason"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderItemAdjustmentReason!"))," ",(0,d.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The reason for the adjustment.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderitemadjustmentbadjustmenttypebcodeorderitemadjustmenttype--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderItemAdjustment.",(0,d.kt)("b",null,"adjustmentType"))),(0,d.kt)(i,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/order-item-adjustment-type"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderItemAdjustmentType!"))," ",(0,d.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The type of adjustment.")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/order-item"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderItem")),"  ",(0,d.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);