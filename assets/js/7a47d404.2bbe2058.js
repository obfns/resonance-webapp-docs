"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[41434],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var p=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=p.createContext({}),u=function(e){var t=p.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return p.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},y=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(r),y=n,d=c["".concat(i,".").concat(y)]||c[y]||m[y]||a;return r?p.createElement(d,l(l({ref:t},s),{},{components:r})):p.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return p.createElement.apply(null,l)}return p.createElement.apply(null,r)}y.displayName="MDXCreateElement"},51446:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>c,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var p=r(87462),n=r(67294),a=r(3905);const l={id:"supply-import-type",title:"SupplyImportType",hide_table_of_contents:!1},o=void 0,i={unversionedId:"supply/api/graphql-admin/reference/enums/supply-import-type",id:"supply/api/graphql-admin/reference/enums/supply-import-type",title:"SupplyImportType",description:"The type of import requested.",source:"@site/docs/supply/api/graphql-admin/reference/enums/supply-import-type.mdx",sourceDirName:"supply/api/graphql-admin/reference/enums",slug:"/supply/api/graphql-admin/reference/enums/supply-import-type",permalink:"/supply/api/graphql-admin/reference/enums/supply-import-type",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/enums/supply-import-type.mdx",tags:[],version:"current",frontMatter:{id:"supply-import-type",title:"SupplyImportType",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplyEventSubscriptionEntityType",permalink:"/supply/api/graphql-admin/reference/enums/supply-event-subscription-entity-type"},next:{title:"VariantDeliveryMethod",permalink:"/supply/api/graphql-admin/reference/enums/variant-delivery-method"}},u={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SupplyImportType.<b>SUPPLIER_PRODUCT_UPDATE</b></code>",id:"code-style-fontweight-normal-supplyimporttypebsupplier_product_updatebcode",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(n.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),d={toc:s,Bullet:c,SpecifiedBy:m,Badge:y};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,p.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The type of import requested."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SupplyImportType {\n  SUPPLIER_PRODUCT_UPDATE\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supplyimporttypebsupplier_product_updatebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplyImportType.",(0,a.kt)("b",null,"SUPPLIER_PRODUCT_UPDATE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Update Supplier Products (and tags) and a single SupplierProductLocale per SupplierProduct.")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/create-csv-import"},(0,a.kt)("inlineCode",{parentName:"a"},"createCsvImport")),"  ",(0,a.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supply-import-metadata"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplyImportMetadata")),"  ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);