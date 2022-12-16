"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[41508],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var p=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=p.createContext({}),o=function(e){var t=p.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=o(e.components);return p.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},m=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?p.createElement(f,u(u({ref:t},c),{},{components:r})):p.createElement(f,u({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,u=new Array(a);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,u[1]=i;for(var o=2;o<a;o++)u[o]=r[o];return p.createElement.apply(null,u)}return p.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97525:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>u,metadata:()=>l,toc:()=>c});var p=r(87462),n=r(67294),a=r(3905);const u={id:"update-supplier-product",title:"updateSupplierProduct",hide_table_of_contents:!1},i=void 0,l={unversionedId:"supply/api/graphql-admin/reference/mutations/update-supplier-product",id:"supply/api/graphql-admin/reference/mutations/update-supplier-product",title:"updateSupplierProduct",description:"Update an existing SupplierProduct",source:"@site/docs/supply/api/graphql-admin/reference/mutations/update-supplier-product.mdx",sourceDirName:"supply/api/graphql-admin/reference/mutations",slug:"/supply/api/graphql-admin/reference/mutations/update-supplier-product",permalink:"/supply/api/graphql-admin/reference/mutations/update-supplier-product",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/mutations/update-supplier-product.mdx",tags:[],version:"current",frontMatter:{id:"update-supplier-product",title:"updateSupplierProduct",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"updateSupplierProductLocale",permalink:"/supply/api/graphql-admin/reference/mutations/update-supplier-product-locale"},next:{title:"updateSupplierProducts",permalink:"/supply/api/graphql-admin/reference/mutations/update-supplier-products"}},o={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateSupplierProduct.<b>input</b></code><Bullet /><code>SupplierProductUpdateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatesupplierproductbinputbcodesupplierproductupdateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>SupplierProduct</code> <Badge class="secondary" text="object"/>',id:"supplierproduct-",level:4}],d=()=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(n.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:d,SpecifiedBy:s,Badge:m};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,p.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Update an existing SupplierProduct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSupplierProduct(\n  input: SupplierProductUpdateInput!\n): SupplierProduct!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updatesupplierproductbinputbcodesupplierproductupdateinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"updateSupplierProduct.",(0,a.kt)("b",null,"input"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-update-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierProductUpdateInput!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"supplierproduct-"},(0,a.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-product"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierProduct"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is the main entity of the Supplier domain, and is used to represent a product, which is a group of SKUs.\nSKUs are represented by SupplierVariants, a child of this entity.\nThis entity is less frequently updated, it is more likely that SupplyVariant will be updated frequently.")))}y.isMDXComponent=!0}}]);