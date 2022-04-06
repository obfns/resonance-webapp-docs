"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[4248],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return d}});var p=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=p.createContext({}),l=function(e){var t=p.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},o=function(e){var t=l(e.components);return p.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},m=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return r?p.createElement(f,i(i({ref:t},o),{},{components:r})):p.createElement(f,i({ref:t},o))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return p.createElement.apply(null,i)}return p.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72789:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return o},toc:function(){return c},default:function(){return d}});var p=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],u={id:"upsert-supplier-variant-supplements",title:"upsertSupplierVariantSupplements"},s=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/upsert-supplier-variant-supplements",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/upsert-supplier-variant-supplements",title:"upsertSupplierVariantSupplements",description:"Bulk upsert supplierVariantSupplements.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/upsert-supplier-variant-supplements.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/upsert-supplier-variant-supplements",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/upsert-supplier-variant-supplements",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/upsert-supplier-variant-supplements.mdx",tags:[],version:"current",frontMatter:{id:"upsert-supplier-variant-supplements",title:"upsertSupplierVariantSupplements"},sidebar:"apisSidebar",previous:{title:"upsertSupplierVariantCustomData",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/upsert-supplier-variant-custom-data"},next:{title:"AppInstallationOutput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/app-installation-output"}},o={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>inputs</code> (<code>SupplierVariantSupplementUpdateInput</code>)",id:"inputs-suppliervariantsupplementupdateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierVariantSupplement</code>",id:"suppliervariantsupplement",level:4}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,p.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bulk upsert supplierVariantSupplements.\nIf you are creating supplierVariantSupplements, you must provide\nSupplierVariantSupplementCreateInput instead of\nSupplierVariantSupplementUpdateInput.\n(These are similar, but more fields are required)"),(0,a.kt)("p",null,"Requires suppliervariantsupplement/write permission on the requesting identity\nNote that if there are Permission or UserInput Errors, the entire group will fail, not partially succeed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"upsertSupplierVariantSupplements(\n  inputs: [SupplierVariantSupplementUpdateInput!]\n): [SupplierVariantSupplement!]\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"inputs-suppliervariantsupplementupdateinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"inputs")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-supplement-update-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplementUpdateInput")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"suppliervariantsupplement"},(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-supplement"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplement"))),(0,a.kt)("p",null,"This has a one to one relationship with SupplierVariant, and provides supplemental data for the SupplierVariant.\nThese items get updated at a lower frequency, and are therefore separate."))}d.isMDXComponent=!0}}]);