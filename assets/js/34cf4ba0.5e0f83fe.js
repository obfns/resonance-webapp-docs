"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[3699],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},i=Object.keys(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=p.createContext({}),l=function(e){var r=p.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return p.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||i;return t?p.createElement(m,a(a({ref:r},u),{},{components:t})):p.createElement(m,a({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return p.createElement.apply(null,a)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21465:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},assets:function(){return u},toc:function(){return c},default:function(){return f}});var p=t(87462),n=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"supplier-update-input",title:"SupplierUpdateInput"},o=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input",title:"SupplierUpdateInput",description:"The possible fields in order to update a supplier.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-update-input",title:"SupplierUpdateInput"},sidebar:"apisSidebar",previous:{title:"SupplierQuickLinkUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-update-input"},next:{title:"SupplierVariantCompositeCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-composite-create-input"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>category</code> (<code>SupplierCategory</code>)",id:"category-suppliercategory",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>inStockProducts</code> (<code>Int</code>)",id:"instockproducts-int",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>notificationUserNames</code> (<code>SupplierNotificationUserNamesInput</code>)",id:"notificationusernames-suppliernotificationusernamesinput",level:4},{value:"<code>ownerUserName</code> (<code>String</code>)",id:"ownerusername-string",level:4},{value:"<code>status</code> (<code>SupplierStatus</code>)",id:"status-supplierstatus",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4},{value:"<code>topVendors</code> (<code>String</code>)",id:"topvendors-string",level:4}],d={toc:c};function f(e){var r=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,p.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The possible fields in order to update a supplier."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierUpdateInput {\n  category: SupplierCategory\n  description: String\n  inStockProducts: Int\n  name: String\n  notificationUserNames: SupplierNotificationUserNamesInput\n  ownerUserName: String\n  status: SupplierStatus\n  supplierId: ID!\n  topVendors: [String!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"category-suppliercategory"},(0,i.kt)("inlineCode",{parentName:"h4"},"category")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-category"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierCategory")),")"),(0,i.kt)("p",null,"Indicates the vertical the majority of a Supplier's goods are in."),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"instockproducts-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"inStockProducts")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The approximate number of in stock products this Supplier has on a typical basis."),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"notificationusernames-suppliernotificationusernamesinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"notificationUserNames")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-notification-user-names-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierNotificationUserNamesInput")),")"),(0,i.kt)("p",null,"These users will get notified if something requires attention for this Supplier.\nIf none are provided, ownerUserName will be notified."),(0,i.kt)("h4",{id:"ownerusername-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"ownerUserName")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"status-supplierstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-status"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierStatus")),")"),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"topvendors-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"topVendors")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The top Brands or Vendors this Supplier carries, limit 5 and 256 characters each."))}f.isMDXComponent=!0}}]);