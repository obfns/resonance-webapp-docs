"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9082],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=p,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,u=new Array(i);u[0]=d;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:p,u[1]=o;for(var l=2;l<i;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6967:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(7462),p=r(3366),i=(r(7294),r(3905)),u=["components"],o={id:"update-supplier-product-content-item",title:"updateSupplierProductContentItem"},a=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-product-content-item",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-product-content-item",title:"updateSupplierProductContentItem",description:"Update an existing SupplierProductContentItem",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-product-content-item.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-product-content-item",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-product-content-item",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-product-content-item.mdx",tags:[],version:"current",frontMatter:{id:"update-supplier-product-content-item",title:"updateSupplierProductContentItem"},sidebar:"apisSidebar",previous:{title:"updateSupplierIdentity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-identity"},next:{title:"updateSupplierProductLocale",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-product-locale"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>input</code> (SupplierProductContentItemUpdateInput)",id:"input-supplierproductcontentitemupdateinput",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SupplierProductContentItem",id:"supplierproductcontentitem",children:[],level:4}],level:3}],s={toc:c};function d(e){var t=e.components,r=(0,p.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Update an existing SupplierProductContentItem"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSupplierProductContentItem(\n  input: SupplierProductContentItemUpdateInput!\n): SupplierProductContentItem!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-supplierproductcontentitemupdateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-content-item-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItemUpdateInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplierproductcontentitem"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItem"))),(0,i.kt)("p",null,"This has a many to one relationship with SupplierProduct, and provides a connection to the CDN items."))}d.isMDXComponent=!0}}]);