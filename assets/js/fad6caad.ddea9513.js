"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[20881],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=o,k=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(k,d(d({ref:t},i),{},{components:a})):n.createElement(k,d({ref:t},i))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,d=new Array(r);d[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,d[1]=l;for(var s=2;s<r;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69181:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>i});var n=a(87462),o=a(67294),r=a(3905);const d={id:"product",title:"Product",hide_table_of_contents:!1},l=void 0,c={unversionedId:"demand/api/graphql-admin/reference/objects/product",id:"demand/api/graphql-admin/reference/objects/product",title:"Product",description:"A Product is a part of the Demand Domain and represents a the basic information of a product.",source:"@site/docs/demand/api/graphql-admin/reference/objects/product.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/product",permalink:"/demand/api/graphql-admin/reference/objects/product",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/product.mdx",tags:[],version:"current",frontMatter:{id:"product",title:"Product",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"ProductTermAggregations",permalink:"/demand/api/graphql-admin/reference/objects/product-term-aggregations"},next:{title:"PublicApp",permalink:"/demand/api/graphql-admin/reference/objects/public-app"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>contentItem</b></code><Bullet /><code>ProductContentItem</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-productbcontentitembcodeproductcontentitem-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>contentItems</b></code><Bullet /><code>ProductContentItemConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-productbcontentitemsbcodeproductcontentitemconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.contentItems.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productcontentitemsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Product.contentItems.<b>contentType</b></code><Bullet /><code>ProductContentType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-productcontentitemsbcontenttypebcodeproductcontenttype-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Product.contentItems.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productcontentitemsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Product.contentItems.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productcontentitemsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>createdAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productbcreatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>locale</b></code><Bullet /><code>ProductLocale</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-productblocalebcodeproductlocale-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>optionLabels</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productboptionlabelsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productbproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>productMetrics</b></code><Bullet /><code>ProductMetrics</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-productbproductmetricsbcodeproductmetrics-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>publishedAt</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productbpublishedatbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>seoTitle</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productbseotitlebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>slug</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productbslugbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>status</b></code><Bullet /><code>DemandEntityStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-productbstatusbcodedemandentitystatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>storefrontIds</b></code><Bullet /><code>[ID]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productbstorefrontidsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>tags</b></code><Bullet /><code>ProductTags</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-productbtagsbcodeproducttags-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>title</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productbtitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productbupdatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>updatedBy</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productbupdatedbybcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>variant</b></code><Bullet /><code>Variant</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-productbvariantbcodevariant-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>variants</b></code><Bullet /><code>VariantConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-productbvariantsbcodevariantconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Product.variants.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productvariantsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Product.variants.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productvariantsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Product.variants.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productvariantsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Product.<b>vendor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productbvendorbcodestring--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:i,Bullet:p,SpecifiedBy:m,Badge:u};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Product is a part of the Demand Domain and represents a the basic information of a product.\nProducts have many support entities, including variants, which represent SKUs of the product."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n  contentItem(\n  contentItemId: ID!\n): ProductContentItem\n  contentItems(\n  after: String\n  before: String\n  contentType: ProductContentType\n  first: Int\n  last: Int\n): ProductContentItemConnection\n  createdAt: Date!\n  demandHqId: ID!\n  locale(\n  localeType: ResonanceLocaleType!\n): ProductLocale\n  optionLabels: [String!]!\n  productId: ID!\n  productMetrics: ProductMetrics\n  publishedAt: Date\n  seoTitle: String\n  slug: String!\n  status: DemandEntityStatus!\n  storefrontIds: [ID]\n  tags: ProductTags\n  title: String!\n  updatedAt: Date!\n  updatedBy: ID!\n  variant(\n  variantId: ID\n): Variant\n  variants(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): VariantConnection!\n  vendor: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbcontentitembcodeproductcontentitem-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"contentItem"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/product-content-item"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductContentItem"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Get a productContentItem for a product")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Requires productcontentitem/read permission on the requesting identity\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-productcontentitembcontentitemidbcodeid--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.contentItem.",(0,r.kt)("b",null,"contentItemId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbcontentitemsbcodeproductcontentitemconnection-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"contentItems"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/product-content-item-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductContentItemConnection"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Get a list of productContentItems")),(0,r.kt)("p",null,"Requires productcontentitem/read permission on the DemandHq for the requesting identity"),(0,r.kt)("p",null,'Sorting works differently depending on which filters are used.\nWithout any filters, the sort order is by createdAt.\nWith a contentType filter, the sort order is by position.\nThis means "featuredImage" can be retrieved by using contentType: IMAGE and first: 1.'),(0,r.kt)("blockquote",null,(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-productcontentitemsbafterbcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.contentItems.",(0,r.kt)("b",null,"after"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-productcontentitemsbbeforebcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.contentItems.",(0,r.kt)("b",null,"before"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-productcontentitemsbcontenttypebcodeproductcontenttype-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.contentItems.",(0,r.kt)("b",null,"contentType"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/enums/product-content-type"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductContentType"))," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h5",{id:"code-style-fontweight-normal-productcontentitemsbfirstbcodeint-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.contentItems.",(0,r.kt)("b",null,"first"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-productcontentitemsblastbcodeint-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.contentItems.",(0,r.kt)("b",null,"last"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbcreatedatbcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbdemandhqidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"demandHqId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productblocalebcodeproductlocale-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"locale"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/product-locale"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductLocale"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Get a single productLocale by ResonanceLocaleType")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Requires productlocale/read permission on the requesting identity\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-productlocaleblocaletypebcoderesonancelocaletype--"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.locale.",(0,r.kt)("b",null,"localeType"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/enums/resonance-locale-type"},(0,r.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productboptionlabelsbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"optionLabels"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The labels for the possible option groups for this product, i.e. "Color", "Size", "Material", etc.\nThese will match with labelOptions in Variants.')),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbproductidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"productId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbproductmetricsbcodeproductmetrics-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"productMetrics"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/product-metrics"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductMetrics"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Get productMetrics for a Product")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Requires product/read permission\n")),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbpublishedatbcodedate-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"publishedAt"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ISO format date when the product was published. Note that ensuing updates with\nstatus set to PUBLISHED will republish and re-set this date.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbseotitlebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"seoTitle"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Title specific for SEO purposes, limit 256 characters.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbslugbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"slug"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Slug for the URL for this product. Limit 128 characters.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbstatusbcodedemandentitystatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"status"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/demand-entity-status"},(0,r.kt)("inlineCode",{parentName:"a"},"DemandEntityStatus!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The status of the product, can be DRAFT or PUBLISHED.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbstorefrontidsbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"storefrontIds"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ID]"))," ",(0,r.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Which storefronts should have access to this product?")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbtagsbcodeproducttags-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"tags"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/product-tags"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductTags"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Get the tags for this product")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbtitlebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"title"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The title of the product, limit 256 characters.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbupdatedatbcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbupdatedbybcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"updatedBy"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbvariantbcodevariant-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"variant"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/variant"},(0,r.kt)("inlineCode",{parentName:"a"},"Variant"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Get a single variant by VariantId")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Requires demandHqvariant/read permission on the requesting identity\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-productvariantbvariantidbcodeid-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.variant.",(0,r.kt)("b",null,"variantId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbvariantsbcodevariantconnection--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"variants"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/variant-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"VariantConnection!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Get a list of variants")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Requires demandHqvariant/read permission on the demandHq for the requesting identity\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-productvariantsbafterbcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.variants.",(0,r.kt)("b",null,"after"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-productvariantsbbeforebcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.variants.",(0,r.kt)("b",null,"before"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-productvariantsbfirstbcodeint-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.variants.",(0,r.kt)("b",null,"first"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-productvariantsblastbcodeint-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.variants.",(0,r.kt)("b",null,"last"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-productbvendorbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Product.",(0,r.kt)("b",null,"vendor"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"AKA Brand. Limit 256 characters.")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/create-product"},(0,r.kt)("inlineCode",{parentName:"a"},"createProduct")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/product"},(0,r.kt)("inlineCode",{parentName:"a"},"product")),"  ",(0,r.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-product"},(0,r.kt)("inlineCode",{parentName:"a"},"updateProduct")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq"},(0,r.kt)("inlineCode",{parentName:"a"},"DemandHq")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/product-connection-with-search"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductConnectionWithSearch")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/product-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductEdge")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/variant"},(0,r.kt)("inlineCode",{parentName:"a"},"Variant")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);