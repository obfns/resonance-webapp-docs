"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[79239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67515:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=n(67294),o=n(3905);const i={id:"associate-supplier-product-content-item",title:"associateSupplierProductContentItem",hide_table_of_contents:!1},p=void 0,c={unversionedId:"supply/api/graphql-admin/reference/mutations/associate-supplier-product-content-item",id:"supply/api/graphql-admin/reference/mutations/associate-supplier-product-content-item",title:"associateSupplierProductContentItem",description:"Associate an existing ContentItem with a new SupplierProduct",source:"@site/docs/supply/api/graphql-admin/reference/mutations/associate-supplier-product-content-item.mdx",sourceDirName:"supply/api/graphql-admin/reference/mutations",slug:"/supply/api/graphql-admin/reference/mutations/associate-supplier-product-content-item",permalink:"/supply/api/graphql-admin/reference/mutations/associate-supplier-product-content-item",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/mutations/associate-supplier-product-content-item.mdx",tags:[],version:"current",frontMatter:{id:"associate-supplier-product-content-item",title:"associateSupplierProductContentItem",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplyEventSubscriptionCreateInput",permalink:"/supply/api/graphql-admin/reference/inputs/supply-event-subscription-create-input"},next:{title:"createCsvImport",permalink:"/supply/api/graphql-admin/reference/mutations/create-csv-import"}},s={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>associateSupplierProductContentItem.<b>input</b></code><Bullet /><code>SupplierProductContentItemAssociationCreateInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-associatesupplierproductcontentitembinputbcodesupplierproductcontentitemassociationcreateinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>SupplierProductContentItem</code> <Badge class="secondary" text="object"/>',id:"supplierproductcontentitem-",level:4}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:u,SpecifiedBy:d,Badge:m};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Associate an existing ContentItem with a new SupplierProduct"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"associateSupplierProductContentItem(\n  input: SupplierProductContentItemAssociationCreateInput\n): SupplierProductContentItem\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-associatesupplierproductcontentitembinputbcodesupplierproductcontentitemassociationcreateinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"associateSupplierProductContentItem.",(0,o.kt)("b",null,"input"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-content-item-association-create-input"},(0,o.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItemAssociationCreateInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"supplierproductcontentitem-"},(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-product-content-item"},(0,o.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItem"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This has a many to one relationship with SupplierProduct, and provides a connection to the CDN items.")))}y.isMDXComponent=!0}}]);