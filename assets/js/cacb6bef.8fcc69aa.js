"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[59888],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=p,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:p,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44916:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>c,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),p=r(67294),a=r(3905);const i={id:"supplier-variant-composite-create-input",title:"SupplierVariantCompositeCreateInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"supply/api/graphql-admin/reference/inputs/supplier-variant-composite-create-input",id:"supply/api/graphql-admin/reference/inputs/supplier-variant-composite-create-input",title:"SupplierVariantCompositeCreateInput",description:"The necessary fields in order to create a new supplierVariant and supplierVariantSupplement.",source:"@site/docs/supply/api/graphql-admin/reference/inputs/supplier-variant-composite-create-input.mdx",sourceDirName:"supply/api/graphql-admin/reference/inputs",slug:"/supply/api/graphql-admin/reference/inputs/supplier-variant-composite-create-input",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-variant-composite-create-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/inputs/supplier-variant-composite-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-composite-create-input",title:"SupplierVariantCompositeCreateInput",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierUpdateInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-update-input"},next:{title:"SupplierVariantCompositeInCompositeCreateInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-variant-composite-in-composite-create-input"}},u={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierVariantCompositeCreateInput.<b>supplierVariantInput</b></code><Bullet /><code>SupplierVariantCreateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-suppliervariantcompositecreateinputbsuppliervariantinputbcodesuppliervariantcreateinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierVariantCompositeCreateInput.<b>supplierVariantSupplementInput</b></code><Bullet /><code>SupplierVariantSupplementInCompositeCreateInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-suppliervariantcompositecreateinputbsuppliervariantsupplementinputbcodesuppliervariantsupplementincompositecreateinput-",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,a.kt)(p.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(p.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(p.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:c,SpecifiedBy:m,Badge:d};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The necessary fields in order to create a new supplierVariant and supplierVariantSupplement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierVariantCompositeCreateInput {\n  supplierVariantInput: SupplierVariantCreateInput!\n  supplierVariantSupplementInput: SupplierVariantSupplementInCompositeCreateInput\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-suppliervariantcompositecreateinputbsuppliervariantinputbcodesuppliervariantcreateinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplierVariantCompositeCreateInput.",(0,a.kt)("b",null,"supplierVariantInput"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-create-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierVariantCreateInput!"))," ",(0,a.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-suppliervariantcompositecreateinputbsuppliervariantsupplementinputbcodesuppliervariantsupplementincompositecreateinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplierVariantCompositeCreateInput.",(0,a.kt)("b",null,"supplierVariantSupplementInput"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-supplement-in-composite-create-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplementInCompositeCreateInput"))," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/create-supplier-variant-composite"},(0,a.kt)("inlineCode",{parentName:"a"},"createSupplierVariantComposite")),"  ",(0,a.kt)(d,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);