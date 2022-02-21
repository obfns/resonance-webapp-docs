"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5677],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=o(r),y=p,f=c["".concat(s,".").concat(y)]||c[y]||d[y]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,l=new Array(i);l[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:p,l[1]=a;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4131:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var n=r(7462),p=r(3366),i=(r(7294),r(3905)),l=["components"],a={id:"delete-supplier-identity",title:"deleteSupplierIdentity"},s=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity",title:"deleteSupplierIdentity",description:"Delete a SupplierIdentity from a Supplier (remove a user's permissions)",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity.mdx",tags:[],version:"current",frontMatter:{id:"delete-supplier-identity",title:"deleteSupplierIdentity"},sidebar:"apisSidebar",previous:{title:"createSupplyEventSubscription",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supply-event-subscription"},next:{title:"deleteSupplierProductContentItem",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item"}},u=[{value:"Arguments",id:"arguments",children:[{value:"<code>identityId</code> (ID)",id:"identityid-id",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SupplierIdentityDeleteResponse",id:"supplieridentitydeleteresponse",children:[],level:4}],level:3}],d={toc:u};function c(e){var t=e.components,r=(0,p.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Delete a SupplierIdentity from a Supplier (remove a user's permissions)"),(0,i.kt)("p",null,"Requires the supplieridentity/write permission on the given Supplier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteSupplierIdentity(\n  identityId: ID!\n  supplierId: ID!\n): SupplierIdentityDeleteResponse\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"identityid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplieridentitydeleteresponse"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-delete-response"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierIdentityDeleteResponse"))),(0,i.kt)("p",null,"Returned object from deleteSupplierIdentity"))}c.isMDXComponent=!0}}]);