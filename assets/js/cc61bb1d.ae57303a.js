"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[41926],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>y});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),p=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(d.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,y=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return t?n.createElement(y,i(i({ref:a},c),{},{components:t})):n.createElement(y,i({ref:a},c))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},14012:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=t(87462),r=t(67294),l=t(3905);const i={id:"variant-supplier-variant",title:"VariantSupplierVariant",hide_table_of_contents:!1},o=void 0,d={unversionedId:"demand/api/graphql-admin/reference/objects/variant-supplier-variant",id:"demand/api/graphql-admin/reference/objects/variant-supplier-variant",title:"VariantSupplierVariant",description:"A VariantSupplierVariant has a 1:1 relationship with a SupplierVariant.",source:"@site/docs/demand/api/graphql-admin/reference/objects/variant-supplier-variant.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/variant-supplier-variant",permalink:"/demand/api/graphql-admin/reference/objects/variant-supplier-variant",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/variant-supplier-variant.mdx",tags:[],version:"current",frontMatter:{id:"variant-supplier-variant",title:"VariantSupplierVariant",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"VariantSupplierVariantId",permalink:"/demand/api/graphql-admin/reference/objects/variant-supplier-variant-id"},next:{title:"VariantWeight",permalink:"/demand/api/graphql-admin/reference/objects/variant-weight"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>averageShippingCost</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbaverageshippingcostbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>cost</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbcostbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>createdAt</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbcreatedatbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>handlingCost</b></code><Bullet /><code>VariantSupplierVariantHandlingCost</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-variantsuppliervariantbhandlingcostbcodevariantsuppliervarianthandlingcost-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>inventoryPolicy</b></code><Bullet /><code>InventoryPolicy!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-variantsuppliervariantbinventorypolicybcodeinventorypolicy--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>inventoryQuantity</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbinventoryquantitybcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbsupplieridbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>supplierProductId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbsupplierproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>supplierVariantId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbsuppliervariantidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>updatedAt</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbupdatedatbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>updatedBy</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbupdatedbybcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariant.<b>variantId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantbvariantidbcodeid--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],s=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:s,SpecifiedBy:u,Badge:m};function h(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A VariantSupplierVariant has a 1:1 relationship with a SupplierVariant.\nVariantSupplierVariants are the Demand window into the SupplierVariant and can\nbe used to determine inventory and cost as well as for assigning OrderItems.\nEach VariantSupplierVariant has a parent Variant,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type VariantSupplierVariant {\n  averageShippingCost: Float\n  cost: Float!\n  createdAt: String!\n  demandHqId: ID!\n  handlingCost: VariantSupplierVariantHandlingCost\n  inventoryPolicy: InventoryPolicy!\n  inventoryQuantity: Int!\n  productId: ID!\n  supplierId: ID!\n  supplierProductId: ID!\n  supplierVariantId: ID!\n  updatedAt: String!\n  updatedBy: ID!\n  variantId: ID!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbaverageshippingcostbcodefloat-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"averageShippingCost"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A calculated metric for some kind of average for a common region. Uncommon.\nMust be a positive number.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbcostbcodefloat--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"cost"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"COGS, or Cost of Goods Sold for this VariantSupplierVariant\nMust be a positive number.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbcreatedatbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbdemandhqidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"demandHqId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbhandlingcostbcodevariantsuppliervarianthandlingcost-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"handlingCost"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/variant-supplier-variant-handling-cost"},(0,l.kt)("inlineCode",{parentName:"a"},"VariantSupplierVariantHandlingCost"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Additional warehouse handling charge, typically for larger items.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbinventorypolicybcodeinventorypolicy--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"inventoryPolicy"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/inventory-policy"},(0,l.kt)("inlineCode",{parentName:"a"},"InventoryPolicy!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbinventoryquantitybcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"inventoryQuantity"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbproductidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"productId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Id of the Product the parent Variant is associated with")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbsupplieridbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"supplierId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Id of the Supplier for the associated SupplierVariant")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbsupplierproductidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"supplierProductId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Id of the SupplierProduct for the associated SupplierVariant")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbsuppliervariantidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"supplierVariantId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Id of the SupplierVariant")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbupdatedatbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbupdatedbybcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"updatedBy"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantbvariantidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariant.",(0,l.kt)("b",null,"variantId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Id of the parent Variant")),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/create-variant-supplier-variant"},(0,l.kt)("inlineCode",{parentName:"a"},"createVariantSupplierVariant")),"  ",(0,l.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/variant-supplier-variant"},(0,l.kt)("inlineCode",{parentName:"a"},"variantSupplierVariant")),"  ",(0,l.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/variant"},(0,l.kt)("inlineCode",{parentName:"a"},"Variant")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/variant-supplier-variant-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"VariantSupplierVariantConnection")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/variant-supplier-variant-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"VariantSupplierVariantEdge")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);