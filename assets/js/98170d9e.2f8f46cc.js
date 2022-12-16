"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[88949],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),o=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=o(e.components);return a.createElement(s.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=o(t),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(f,p(p({ref:r},u),{},{components:t})):a.createElement(f,p({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:n,p[1]=l;for(var o=2;o<i;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46776:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>d,assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var a=t(87462),n=t(67294),i=t(3905);const p={id:"supplier-variant",title:"supplierVariant",hide_table_of_contents:!1},l=void 0,s={unversionedId:"supply/api/graphql-admin/reference/queries/supplier-variant",id:"supply/api/graphql-admin/reference/queries/supplier-variant",title:"supplierVariant",description:"Get a single supplierVariant by SupplierVariantId",source:"@site/docs/supply/api/graphql-admin/reference/queries/supplier-variant.mdx",sourceDirName:"supply/api/graphql-admin/reference/queries",slug:"/supply/api/graphql-admin/reference/queries/supplier-variant",permalink:"/supply/api/graphql-admin/reference/queries/supplier-variant",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/queries/supplier-variant.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant",title:"supplierVariant",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"supplierQuickLinks",permalink:"/supply/api/graphql-admin/reference/queries/supplier-quick-links"},next:{title:"supplierVariants",permalink:"/supply/api/graphql-admin/reference/queries/supplier-variants"}},o={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>supplierVariant.<b>supplierVariantId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-suppliervariantbsuppliervariantidbcodeid-",level:4},{value:"Type",id:"type",level:3},{value:'<code>SupplierVariant</code> <Badge class="secondary" text="object"/>',id:"suppliervariant-",level:4}],c=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:c,SpecifiedBy:d,Badge:m};function y(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Get a single supplierVariant by SupplierVariantId"),(0,i.kt)("p",null,"Requires suppliervariant/read permission on the requesting identity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"supplierVariant(\n  supplierVariantId: ID\n): SupplierVariant\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-suppliervariantbsuppliervariantidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"supplierVariant.",(0,i.kt)("b",null,"supplierVariantId"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"suppliervariant-"},(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-variant"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariant"))," ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The main item of the Supplier Domain, represents a single SKU of a product\nOnly the variant level exists, there is no parent product.")))}y.isMDXComponent=!0}}]);