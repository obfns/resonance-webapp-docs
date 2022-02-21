"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[1033],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),h=p,m=u["".concat(l,".").concat(h)]||u[h]||s[h]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function h(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,a=new Array(i);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,a[1]=o;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2896:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=r(7462),p=r(3366),i=(r(7294),r(3905)),a=["components"],o={id:"supplier-product-content-item",title:"SupplierProductContentItem"},l=void 0,d={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item",title:"SupplierProductContentItem",description:"This has a many to one relationship with SupplierProduct, and provides a connection to the CDN items.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-content-item",title:"SupplierProductContentItem"},sidebar:"apisSidebar",previous:{title:"SupplierProductContentItemEdge",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item-edge"},next:{title:"SupplierProductCustomData",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-custom-data"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>alt</code> (String)",id:"alt-string",children:[],level:4},{value:"<code>category</code> (String)",id:"category-string",children:[],level:4},{value:"<code>contentItemId</code> (ID)",id:"contentitemid-id",children:[],level:4},{value:"<code>contentKey</code> (String)",id:"contentkey-string",children:[],level:4},{value:"<code>contentType</code> (SupplierProductContentType)",id:"contenttype-supplierproductcontenttype",children:[],level:4},{value:"<code>createdAt</code> (Date)",id:"createdat-date",children:[],level:4},{value:"<code>position</code> (Int)",id:"position-int",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4},{value:"<code>supplierProductId</code> (ID)",id:"supplierproductid-id",children:[],level:4},{value:"<code>updatedAt</code> (Date)",id:"updatedat-date",children:[],level:4},{value:"<code>updatedBy</code> (String)",id:"updatedby-string",children:[],level:4}],level:3}],s={toc:c};function u(e){var t=e.components,r=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This has a many to one relationship with SupplierProduct, and provides a connection to the CDN items."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierProductContentItem {\n  alt: String!\n  category: String\n  contentItemId: ID!\n  contentKey: String!\n  contentType: SupplierProductContentType!\n  createdAt: Date!\n  position: Int\n  supplierId: ID!\n  supplierProductId: ID!\n  updatedAt: Date!\n  updatedBy: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"alt-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"category-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"category")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"contentitemid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentItemId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"contentkey-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentKey")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The key to the file in the CDN"),(0,i.kt)("h4",{id:"contenttype-supplierproductcontenttype"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-product-content-type"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierProductContentType")),")"),(0,i.kt)("h4",{id:"createdat-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"position-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"position")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Used to determine what order the content comes out in.\nPositive Integers are allowed, up to 9,999,999,999, and it does not have to be unique or sequential."),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"supplierproductid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierProductId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"updatedat-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"updatedby-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);