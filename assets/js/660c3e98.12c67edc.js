"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5677],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return m}});var p=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,p)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,p,n=function(e,t){if(null==e)return{};var r,p,n={},i=Object.keys(e);for(p=0;p<i.length;p++)r=i[p],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)r=i[p],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=p.createContext({}),s=function(e){var t=p.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=s(e.components);return p.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},c=p.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,y=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return r?p.createElement(y,l(l({ref:t},o),{},{components:r})):p.createElement(y,l({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return p.createElement.apply(null,l)}return p.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4131:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return o},default:function(){return c}});var p=r(3117),n=r(102),i=(r(7294),r(3905)),l=["components"],a={id:"delete-supplier-identity",title:"deleteSupplierIdentity"},u=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity",isDocsHomePage:!1,title:"deleteSupplierIdentity",description:"Remove a SupplierIdentity from a Supplier (remove user permissions)",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity.mdx",tags:[],version:"current",frontMatter:{id:"delete-supplier-identity",title:"deleteSupplierIdentity"},sidebar:"apisSidebar",previous:{title:"createSupplierVariantSupplement",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-supplement"},next:{title:"_makeEmpty",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/make-empty"}},o=[{value:"Arguments",id:"arguments",children:[{value:"<code>supplierId</code> (ID!)",id:"supplierid-id",children:[],level:4},{value:"<code>userName</code> (ID!)",id:"username-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SupplierIdentityDeleteOutput",id:"supplieridentitydeleteoutput",children:[],level:4}],level:3}],d={toc:o};function c(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,p.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Remove a SupplierIdentity from a Supplier (remove user permissions)"),(0,i.kt)("p",null,"Requires the supplieridentity/write permission on the given Supplier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteSupplierIdentity(\n  supplierId: ID!\n  userName: ID!\n): SupplierIdentityDeleteOutput\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"username-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"userName")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplieridentitydeleteoutput"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-delete-output"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierIdentityDeleteOutput"))),(0,i.kt)("p",null,"Returned object from deleteSupplierIdentity"))}c.isMDXComponent=!0}}]);