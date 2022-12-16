"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[32256],{3905:(e,t,l)=>{l.d(t,{Zo:()=>i,kt:()=>y});var a=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},i=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=d(l),m=r,y=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return l?a.createElement(y,n(n({ref:t},i),{},{components:l})):a.createElement(y,n({ref:t},i))}));function y(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=l.length,n=new Array(o);n[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:r,n[1]=c;for(var d=2;d<o;d++)n[d]=l[d];return a.createElement.apply(null,n)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},17782:(e,t,l)=>{l.r(t),l.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>n,metadata:()=>p,toc:()=>i});var a=l(87462),r=l(67294),o=l(3905);const n={id:"supplier-product-locale",title:"SupplierProductLocale",hide_table_of_contents:!1},c=void 0,p={unversionedId:"supply/api/graphql-admin/reference/objects/supplier-product-locale",id:"supply/api/graphql-admin/reference/objects/supplier-product-locale",title:"SupplierProductLocale",description:"This has a many to one relationship with SupplierProduct, and provides localized language data for the appropriate fields.",source:"@site/docs/supply/api/graphql-admin/reference/objects/supplier-product-locale.mdx",sourceDirName:"supply/api/graphql-admin/reference/objects",slug:"/supply/api/graphql-admin/reference/objects/supplier-product-locale",permalink:"/supply/api/graphql-admin/reference/objects/supplier-product-locale",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/objects/supplier-product-locale.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-locale",title:"SupplierProductLocale",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierProductImagesFromFilesError",permalink:"/supply/api/graphql-admin/reference/objects/supplier-product-images-from-files-error"},next:{title:"SupplierProductTags",permalink:"/supply/api/graphql-admin/reference/objects/supplier-product-tags"}},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductLocale.<b>createdAt</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductlocalebcreatedatbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductLocale.<b>description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductlocalebdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductLocale.<b>featureBullets</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductlocalebfeaturebulletsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductLocale.<b>localeType</b></code><Bullet /><code>ResonanceLocaleType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplierproductlocaleblocaletypebcoderesonancelocaletype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductLocale.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductlocalebsupplieridbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductLocale.<b>supplierProductId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductlocalebsupplierproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductLocale.<b>updatedAt</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductlocalebupdatedatbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductLocale.<b>updatedBy</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductlocalebupdatedbybcodestring--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:s,SpecifiedBy:u,Badge:m};function g(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This has a many to one relationship with SupplierProduct, and provides localized language data for the appropriate fields.\nThere will often only be one of these, and it should be the one set in defaultLocale for the supplier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierProductLocale {\n  createdAt: String!\n  description: String\n  featureBullets: [String]\n  localeType: ResonanceLocaleType!\n  supplierId: ID!\n  supplierProductId: ID!\n  updatedAt: String!\n  updatedBy: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierproductlocalebcreatedatbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductLocale.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierproductlocalebdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductLocale.",(0,o.kt)("b",null,"description"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierproductlocalebfeaturebulletsbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductLocale.",(0,o.kt)("b",null,"featureBullets"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Limited to 5 bullets")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierproductlocaleblocaletypebcoderesonancelocaletype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductLocale.",(0,o.kt)("b",null,"localeType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/resonance-locale-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierproductlocalebsupplieridbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductLocale.",(0,o.kt)("b",null,"supplierId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierproductlocalebsupplierproductidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductLocale.",(0,o.kt)("b",null,"supplierProductId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierproductlocalebupdatedatbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductLocale.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierproductlocalebupdatedbybcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductLocale.",(0,o.kt)("b",null,"updatedBy"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/create-supplier-product-locale"},(0,o.kt)("inlineCode",{parentName:"a"},"createSupplierProductLocale")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/update-supplier-product-locale"},(0,o.kt)("inlineCode",{parentName:"a"},"updateSupplierProductLocale")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-product"},(0,o.kt)("inlineCode",{parentName:"a"},"SupplierProduct")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);