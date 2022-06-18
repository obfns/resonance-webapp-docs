"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[14236],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},i=Object.keys(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=p.createContext({}),u=function(e){var r=p.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return p.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),f=n,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return t?p.createElement(m,a(a({ref:r},s),{},{components:t})):p.createElement(m,a({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return p.createElement.apply(null,a)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59490:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var p=t(87462),n=t(63366),i=(t(67294),t(3905)),a=["components"],o={id:"supplier-product-image-from-url-input",title:"SupplierProductImageFromUrlInput"},l=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-url-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-url-input",title:"SupplierProductImageFromUrlInput",description:"Input object for creating an Image SupplierProductContentItem from a URL",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-url-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-url-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-url-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-url-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-image-from-url-input",title:"SupplierProductImageFromUrlInput"},sidebar:"apisSidebar",previous:{title:"SupplierProductImageFromFileInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-file-input"},next:{title:"SupplierProductInventoryPolicyFilterInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-inventory-policy-filter-input"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>alt</code> (<code>String</code>)",id:"alt-string",level:4},{value:"<code>category</code> (<code>String</code>)",id:"category-string",level:4},{value:"<code>position</code> (<code>Int</code>)",id:"position-int",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4},{value:"<code>supplierProductId</code> (<code>ID</code>)",id:"supplierproductid-id",level:4},{value:"<code>url</code> (<code>String</code>)",id:"url-string",level:4}],d={toc:c};function f(e){var r=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,p.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input object for creating an Image SupplierProductContentItem from a URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierProductImageFromUrlInput {\n  alt: String!\n  category: String\n  position: Int\n  supplierId: ID!\n  supplierProductId: ID!\n  url: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"alt-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"category-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"category")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"position-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"position")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Used to determine what order the content comes out in.\nPositive Integers are allowed, up to 9,999,999,999, and it does not have to be unique or sequential."),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"supplierproductid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierProductId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"url-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"url")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);