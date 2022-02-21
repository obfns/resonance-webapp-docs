"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5013],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var p=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)r=a[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=p.createContext({}),u=function(e){var t=p.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return p.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},d=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?p.createElement(f,i(i({ref:t},s),{},{components:r})):p.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return p.createElement.apply(null,i)}return p.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5890:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var p=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],o={id:"delete-supplier-product-custom-data",title:"deleteSupplierProductCustomData"},l=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-custom-data",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-custom-data",title:"deleteSupplierProductCustomData",description:"Delete specified keys from the SupplierProductCustomData",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-custom-data.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-custom-data",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-custom-data",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-custom-data.mdx",tags:[],version:"current",frontMatter:{id:"delete-supplier-product-custom-data",title:"deleteSupplierProductCustomData"},sidebar:"apisSidebar",previous:{title:"deleteSupplierProductContentItem",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item"},next:{title:"deleteSupplierProduct",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product"}},s=[{value:"Arguments",id:"arguments",children:[{value:"<code>keysToDelete</code> (String)",id:"keystodelete-string",children:[],level:4},{value:"<code>supplierProductId</code> (ID)",id:"supplierproductid-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SupplierProductCustomData",id:"supplierproductcustomdata",children:[],level:4}],level:3}],c={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,p.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Delete specified keys from the SupplierProductCustomData"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteSupplierProductCustomData(\n  keysToDelete: [String!]!\n  supplierProductId: ID!\n): SupplierProductCustomData!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"keystodelete-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"keysToDelete")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"supplierproductid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierProductId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"supplierproductcustomdata"},(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierProductCustomData"))),(0,a.kt)("p",null,"Data that doesn't fit in the provided SupplierProduct fields needs to live here."))}d.isMDXComponent=!0}}]);