"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[42394],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var l=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=l.createContext({}),s=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),i=s(r),m=a,k=i["".concat(c,".").concat(m)]||i[m]||u[m]||n;return r?l.createElement(k,o(o({ref:t},d),{},{components:r})):l.createElement(k,o({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[i]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<n;s++)o[s]=r[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3776:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>i,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var l=r(87462),a=r(67294),n=r(3905);const o={id:"supplier-product",title:"SupplierProduct",hide_table_of_contents:!1},p=void 0,c={unversionedId:"supply/api/graphql-admin/reference/objects/supplier-product",id:"supply/api/graphql-admin/reference/objects/supplier-product",title:"SupplierProduct",description:"This is the main entity of the Supplier domain, and is used to represent a product, which is a group of SKUs.",source:"@site/docs/supply/api/graphql-admin/reference/objects/supplier-product.mdx",sourceDirName:"supply/api/graphql-admin/reference/objects",slug:"/supply/api/graphql-admin/reference/objects/supplier-product",permalink:"/supply/api/graphql-admin/reference/objects/supplier-product",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/objects/supplier-product.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product",title:"SupplierProduct",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierProductTermAggregations",permalink:"/supply/api/graphql-admin/reference/objects/supplier-product-term-aggregations"},next:{title:"SupplierProductsDeleteResponse",permalink:"/supply/api/graphql-admin/reference/objects/supplier-products-delete-response"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>contentItem</b></code><Bullet /><code>SupplierProductContentItem</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplierproductbcontentitembcodesupplierproductcontentitem-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>contentItems</b></code><Bullet /><code>SupplierProductContentItemConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplierproductbcontentitemsbcodesupplierproductcontentitemconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.contentItems.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductcontentitemsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.contentItems.<b>contentType</b></code><Bullet /><code>SupplierProductContentType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplierproductcontentitemsbcontenttypebcodesupplierproductcontenttype-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.contentItems.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductcontentitemsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.contentItems.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductcontentitemsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>createdAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductbcreatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>externalProductId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductbexternalproductidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>featuredImage</b></code><Bullet /><code>SupplierProductContentItem</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplierproductbfeaturedimagebcodesupplierproductcontentitem-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>locale</b></code><Bullet /><code>SupplierProductLocale</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplierproductblocalebcodesupplierproductlocale-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>locales</b></code><Bullet /><code>SupplierProductLocaleConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplierproductblocalesbcodesupplierproductlocaleconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.locales.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductlocalesbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.locales.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductlocalesbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.locales.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductlocalesblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>optionLabels</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductboptionlabelsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>status</b></code><Bullet /><code>SupplyEntityStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplierproductbstatusbcodesupplyentitystatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductbsupplieridbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>supplierProductId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductbsupplierproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>supplierVariant</b></code><Bullet /><code>SupplierVariant</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplierproductbsuppliervariantbcodesuppliervariant-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>supplierVariants</b></code><Bullet /><code>SupplierVariantConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplierproductbsuppliervariantsbcodesuppliervariantconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.supplierVariants.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductsuppliervariantsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.supplierVariants.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductsuppliervariantsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.supplierVariants.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductsuppliervariantsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>tags</b></code><Bullet /><code>SupplierProductTags</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplierproductbtagsbcodesupplierproducttags-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>title</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductbtitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductbupdatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>updatedBy</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductbupdatedbybcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProduct.<b>vendor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductbvendorbcodestring--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],i=()=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(a.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:d,Bullet:i,SpecifiedBy:u,Badge:m};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is the main entity of the Supplier domain, and is used to represent a product, which is a group of SKUs.\nSKUs are represented by SupplierVariants, a child of this entity.\nThis entity is less frequently updated, it is more likely that SupplyVariant will be updated frequently."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierProduct {\n  contentItem(\n  contentItemId: ID!\n): SupplierProductContentItem\n  contentItems(\n  after: String\n  before: String\n  contentType: SupplierProductContentType\n  first: Int\n  last: Int\n): SupplierProductContentItemConnection\n  createdAt: Date!\n  externalProductId: String!\n  featuredImage: SupplierProductContentItem\n  locale(\n  localeType: ResonanceLocaleType!\n): SupplierProductLocale\n  locales(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): SupplierProductLocaleConnection!\n  optionLabels: [String!]!\n  status: SupplyEntityStatus!\n  supplierId: ID!\n  supplierProductId: ID!\n  supplierVariant(\n  supplierVariantId: ID\n): SupplierVariant\n  supplierVariants(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): SupplierVariantConnection!\n  tags: SupplierProductTags\n  title: String!\n  updatedAt: Date!\n  updatedBy: ID!\n  vendor: String!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbcontentitembcodesupplierproductcontentitem-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"contentItem"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-product-content-item"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItem"))," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get a supplierProductContentItem for a supplierProduct")),(0,n.kt)("p",null,"Requires supplierproductcontentitem/read permission on the requesting identity"),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplierproductcontentitembcontentitemidbcodeid--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.contentItem.",(0,n.kt)("b",null,"contentItemId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbcontentitemsbcodesupplierproductcontentitemconnection-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"contentItems"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-product-content-item-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItemConnection"))," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get a list of supplierProductContentItems")),(0,n.kt)("p",null,"Requires supplierproductcontentitem/read permission on the supplier for the requesting identity"),(0,n.kt)("p",null,'Sorts by position.\nThis means "featuredImage" can be retrieved by using contentType: IMAGE and first: 1.'),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplierproductcontentitemsbafterbcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.contentItems.",(0,n.kt)("b",null,"after"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-supplierproductcontentitemsbbeforebcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.contentItems.",(0,n.kt)("b",null,"before"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-supplierproductcontentitemsbcontenttypebcodesupplierproductcontenttype-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.contentItems.",(0,n.kt)("b",null,"contentType"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/enums/supplier-product-content-type"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductContentType"))," ",(0,n.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h5",{id:"code-style-fontweight-normal-supplierproductcontentitemsbfirstbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.contentItems.",(0,n.kt)("b",null,"first"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-supplierproductcontentitemsblastbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.contentItems.",(0,n.kt)("b",null,"last"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbcreatedatbcodedate--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/date"},(0,n.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbexternalproductidbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"externalProductId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Passed along in PurchaseOrders so the Supplier can identify items in their warehouse.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbfeaturedimagebcodesupplierproductcontentitem-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"featuredImage"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-product-content-item"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItem"))," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get the featured image for a supplierProduct")),(0,n.kt)("p",null,"Requires the supplierproductcontentitem/read permission on the associated Supplier."),(0,n.kt)("p",null,"This is a convenience field that is equivalent to contentItems(contentType: IMAGE, first: 1)"),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductblocalebcodesupplierproductlocale-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"locale"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-product-locale"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductLocale"))," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get a single supplierProductLocale by ResonanceLocaleType")),(0,n.kt)("p",null,"Requires supplierproductlocale/read permission on the requesting identity"),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplierproductlocaleblocaletypebcoderesonancelocaletype--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.locale.",(0,n.kt)("b",null,"localeType"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/enums/resonance-locale-type"},(0,n.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductblocalesbcodesupplierproductlocaleconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"locales"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-product-locale-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductLocaleConnection!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"List supplierProductLocales.")),(0,n.kt)("p",null,"Requires supplierproductlocale/read permission on the requesting identity"),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplierproductlocalesbafterbcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.locales.",(0,n.kt)("b",null,"after"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-supplierproductlocalesbbeforebcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.locales.",(0,n.kt)("b",null,"before"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-supplierproductlocalesbfirstbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.locales.",(0,n.kt)("b",null,"first"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-supplierproductlocalesblastbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.locales.",(0,n.kt)("b",null,"last"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductboptionlabelsbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"optionLabels"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The labels for the options of this product, i.e. ",'["Color", "Size"]','\nThese will match with the order of the optionValues on the SupplierVariants.\nMust have 1-3, and it should match the number of options in the variants, but there is no validation to do so.\nSet the first optionLabel to "No Option" if you don\'t want to use options for this product.\nSee ',(0,n.kt)("a",{parentName:"p",href:"https://docs.buildresonance.com/concepts/products/#no-option-products"},"https://docs.buildresonance.com/concepts/products/#no-option-products")," for more info.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbstatusbcodesupplyentitystatus--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"status"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/supply-entity-status"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplyEntityStatus!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Indicates whether a product is live and able to be ordered.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbsupplieridbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"supplierId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Reference to the Supplier that owns this product.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbsupplierproductidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"supplierProductId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbsuppliervariantbcodesuppliervariant-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"supplierVariant"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-variant"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariant"))," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get a single supplierVariant by SupplierVariantId")),(0,n.kt)("p",null,"Requires suppliervariant/read permission on the requesting identity"),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplierproductsuppliervariantbsuppliervariantidbcodeid-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.supplierVariant.",(0,n.kt)("b",null,"supplierVariantId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbsuppliervariantsbcodesuppliervariantconnection--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"supplierVariants"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-variant-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariantConnection!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get a list of supplierVariants")),(0,n.kt)("p",null,"Requires suppliervariant/read permission on the supplier for the requesting identity"),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-supplierproductsuppliervariantsbafterbcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.supplierVariants.",(0,n.kt)("b",null,"after"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-supplierproductsuppliervariantsbbeforebcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.supplierVariants.",(0,n.kt)("b",null,"before"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-supplierproductsuppliervariantsbfirstbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.supplierVariants.",(0,n.kt)("b",null,"first"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-supplierproductsuppliervariantsblastbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.supplierVariants.",(0,n.kt)("b",null,"last"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/supply/api/graphql-admin/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbtagsbcodesupplierproducttags-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"tags"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-product-tags"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductTags"))," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get tags for a SupplierProduct.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbtitlebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"title"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The title of the product.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbupdatedatbcodedate--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"updatedAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/date"},(0,n.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbupdatedbybcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"updatedBy"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductbvendorbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProduct.",(0,n.kt)("b",null,"vendor"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The brand or manufacturer of the product.")),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/create-supplier-product"},(0,n.kt)("inlineCode",{parentName:"a"},"createSupplierProduct")),"  ",(0,n.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/create-supplier-product-composite"},(0,n.kt)("inlineCode",{parentName:"a"},"createSupplierProductComposite")),"  ",(0,n.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supplier-product"},(0,n.kt)("inlineCode",{parentName:"a"},"supplierProduct")),"  ",(0,n.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/update-supplier-product"},(0,n.kt)("inlineCode",{parentName:"a"},"updateSupplierProduct")),"  ",(0,n.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/update-supplier-products"},(0,n.kt)("inlineCode",{parentName:"a"},"updateSupplierProducts")),"  ",(0,n.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier"},(0,n.kt)("inlineCode",{parentName:"a"},"Supplier")),"  ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-product-connection-with-search"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductConnectionWithSearch")),"  ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-product-edge"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductEdge")),"  ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);