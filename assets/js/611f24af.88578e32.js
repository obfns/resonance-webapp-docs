"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[78114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(a),m=n,f=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return a?r.createElement(f,p(p({ref:t},u),{},{components:a})):r.createElement(f,p({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:n,p[1]=l;for(var c=2;c<i;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28195:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var r=a(87462),n=a(67294),i=a(3905);const p={id:"create-variant-supplier-variant",title:"createVariantSupplierVariant",hide_table_of_contents:!1},l=void 0,o={unversionedId:"demand/api/graphql-admin/reference/mutations/create-variant-supplier-variant",id:"demand/api/graphql-admin/reference/mutations/create-variant-supplier-variant",title:"createVariantSupplierVariant",description:"Create a new VariantSupplierVariant",source:"@site/docs/demand/api/graphql-admin/reference/mutations/create-variant-supplier-variant.mdx",sourceDirName:"demand/api/graphql-admin/reference/mutations",slug:"/demand/api/graphql-admin/reference/mutations/create-variant-supplier-variant",permalink:"/demand/api/graphql-admin/reference/mutations/create-variant-supplier-variant",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/mutations/create-variant-supplier-variant.mdx",tags:[],version:"current",frontMatter:{id:"create-variant-supplier-variant",title:"createVariantSupplierVariant",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"createStorefront",permalink:"/demand/api/graphql-admin/reference/mutations/create-storefront"},next:{title:"createVariant",permalink:"/demand/api/graphql-admin/reference/mutations/create-variant"}},c={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createVariantSupplierVariant.<b>input</b></code><Bullet /><code>VariantSupplierVariantCreateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createvariantsuppliervariantbinputbcodevariantsuppliervariantcreateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>VariantSupplierVariant</code> <Badge class="secondary" text="object"/>',id:"variantsuppliervariant-",level:4}],s=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:s,SpecifiedBy:d,Badge:m};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create a new VariantSupplierVariant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"createVariantSupplierVariant(\n  input: VariantSupplierVariantCreateInput!\n): VariantSupplierVariant!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-createvariantsuppliervariantbinputbcodevariantsuppliervariantcreateinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"createVariantSupplierVariant.",(0,i.kt)("b",null,"input"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/variant-supplier-variant-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantSupplierVariantCreateInput!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"variantsuppliervariant-"},(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/variant-supplier-variant"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantSupplierVariant"))," ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A VariantSupplierVariant has a 1:1 relationship with a SupplierVariant.\nVariantSupplierVariants are the Demand window into the SupplierVariant and can\nbe used to determine inventory and cost as well as for assigning OrderItems.\nEach VariantSupplierVariant has a parent Variant,")))}v.isMDXComponent=!0}}]);