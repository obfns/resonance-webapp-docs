"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[17943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(a),p=o,k=m["".concat(d,".").concat(p)]||m[p]||u[p]||r;return a?n.createElement(k,c(c({ref:t},s),{},{components:a})):n.createElement(k,c({ref:t},s))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<r;i++)c[i]=a[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},84920:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>s});var n=a(87462),o=a(67294),r=a(3905);const c={id:"product-metrics",title:"ProductMetrics",hide_table_of_contents:!1},l=void 0,d={unversionedId:"demand/api/graphql-admin/reference/objects/product-metrics",id:"demand/api/graphql-admin/reference/objects/product-metrics",title:"ProductMetrics",description:"Metrics for a product including msrp min/max, price min/max, and discount metrics",source:"@site/docs/demand/api/graphql-admin/reference/objects/product-metrics.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/product-metrics",permalink:"/demand/api/graphql-admin/reference/objects/product-metrics",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/product-metrics.mdx",tags:[],version:"current",frontMatter:{id:"product-metrics",title:"ProductMetrics",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"ProductLocale",permalink:"/demand/api/graphql-admin/reference/objects/product-locale"},next:{title:"ProductTags",permalink:"/demand/api/graphql-admin/reference/objects/product-tags"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>countOfVariants</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbcountofvariantsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>discountMaximum</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbdiscountmaximumbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>discountMaximumInStock</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbdiscountmaximuminstockbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>discountMinimum</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbdiscountminimumbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>discountMinimumInStock</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbdiscountminimuminstockbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>discountPercentageMaximum</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbdiscountpercentagemaximumbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>discountPercentageMaximumInStock</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbdiscountpercentagemaximuminstockbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>discountPercentageMinimum</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbdiscountpercentageminimumbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>discountPercentageMinimumInStock</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbdiscountpercentageminimuminstockbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>inventoryStatus</b></code><Bullet /><code>InventoryStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-productmetricsbinventorystatusbcodeinventorystatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>msrpMaximum</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbmsrpmaximumbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>msrpMaximumInStock</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbmsrpmaximuminstockbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>msrpMinimum</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbmsrpminimumbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>msrpMinimumInStock</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbmsrpminimuminstockbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>priceMaximum</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbpricemaximumbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>priceMaximumInStock</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbpricemaximuminstockbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>priceMinimum</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbpriceminimumbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>priceMinimumInStock</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbpriceminimuminstockbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductMetrics.<b>updatedAt</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productmetricsbupdatedatbcodestring--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:s,Bullet:m,SpecifiedBy:u,Badge:p};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Metrics for a product including msrp min/max, price min/max, and discount metrics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProductMetrics {\n  countOfVariants: Int!\n  demandHqId: ID!\n  discountMaximum: Float!\n  discountMaximumInStock: Float\n  discountMinimum: Float!\n  discountMinimumInStock: Float\n  discountPercentageMaximum: Float!\n  discountPercentageMaximumInStock: Float\n  discountPercentageMinimum: Float!\n  discountPercentageMinimumInStock: Float\n  inventoryStatus: InventoryStatus!\n  msrpMaximum: Float!\n  msrpMaximumInStock: Float\n  msrpMinimum: Float!\n  msrpMinimumInStock: Float\n  priceMaximum: Float!\n  priceMaximumInStock: Float\n  priceMinimum: Float!\n  priceMinimumInStock: Float\n  productId: ID!\n  updatedAt: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbcountofvariantsbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"countOfVariants"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This number is mostly useful in tallying other numbers, averages, etc.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbdemandhqidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"demandHqId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbdiscountmaximumbcodefloat--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"discountMaximum"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The maximum discount for all of the variants")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbdiscountmaximuminstockbcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"discountMaximumInStock"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The maximum discount for all in stock variants (null if no variants are in stock)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbdiscountminimumbcodefloat--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"discountMinimum"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The minimum discount for all of the variants")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbdiscountminimuminstockbcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"discountMinimumInStock"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The minimum discount for all in stock variants (null if no variants are in stock)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbdiscountpercentagemaximumbcodefloat--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"discountPercentageMaximum"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The maximum discount percentage for all of the variants")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbdiscountpercentagemaximuminstockbcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"discountPercentageMaximumInStock"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The maximum discount percentage for all in stock variants (null if no variants are in stock)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbdiscountpercentageminimumbcodefloat--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"discountPercentageMinimum"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The minimum discount percentage for all of the variants")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbdiscountpercentageminimuminstockbcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"discountPercentageMinimumInStock"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The minimum discount percentage for all in stock variants (null if no variants are in stock)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbinventorystatusbcodeinventorystatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"inventoryStatus"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/inventory-status"},(0,r.kt)("inlineCode",{parentName:"a"},"InventoryStatus!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In Stock if any Variant inventoryStatus is In Stock")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbmsrpmaximumbcodefloat--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"msrpMaximum"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The maximum MSRP from all of the variants")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbmsrpmaximuminstockbcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"msrpMaximumInStock"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The maximum MSRP from all in stock variants (null if no variants are in stock)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbmsrpminimumbcodefloat--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"msrpMinimum"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The minimum MSRP from all of the variants")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbmsrpminimuminstockbcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"msrpMinimumInStock"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The minimum MSRP from all in stock variants (null if no variants are in stock)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbpricemaximumbcodefloat--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"priceMaximum"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The maximum price from all of the variants")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbpricemaximuminstockbcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"priceMaximumInStock"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The maximum price from all in stock variants (null if no variants are in stock)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbpriceminimumbcodefloat--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"priceMinimum"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The minimum price from all of the variants")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbpriceminimuminstockbcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"priceMinimumInStock"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The minimum price from all in stock variants (null if no variants are in stock)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbproductidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"productId"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Id of the associated Product")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productmetricsbupdatedatbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ProductMetrics.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/product-metrics"},(0,r.kt)("inlineCode",{parentName:"a"},"productMetrics")),"  ",(0,r.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/product-metricses"},(0,r.kt)("inlineCode",{parentName:"a"},"productMetricses")),"  ",(0,r.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/product"},(0,r.kt)("inlineCode",{parentName:"a"},"Product")),"  ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);