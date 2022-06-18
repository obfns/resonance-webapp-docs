"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6797],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,p=new Array(o);p[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22615:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),p=["components"],a={},u="SupplierProduct",s={unversionedId:"concepts/suppliers/entities/SupplierProduct",id:"concepts/suppliers/entities/SupplierProduct",title:"SupplierProduct",description:"This is the main entity of the Supplier domain, and is used to represent a product, which is a group of SKUs. SKUs are represented by SupplierVariants, a child of this entity. These generally represent some Size/Color combination or similar of the product. For instance, a Sweater is a product, and the Gray / Medium version is a variant.",source:"@site/docs/concepts/suppliers/entities/SupplierProduct.md",sourceDirName:"concepts/suppliers/entities",slug:"/concepts/suppliers/entities/SupplierProduct",permalink:"/concepts/suppliers/entities/SupplierProduct",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/suppliers/entities/SupplierProduct.md",tags:[],version:"current",frontMatter:{},sidebar:"conceptsSidebar",previous:{title:"PurchaseOrderItem",permalink:"/concepts/suppliers/entities/PurchaseOrderItem"},next:{title:"SupplierVariant",permalink:"/concepts/suppliers/entities/SupplierVariant"}},c={},l=[{value:"SupplierProductCustomData",id:"supplierproductcustomdata",level:2},{value:"SupplierProductContentItem",id:"supplierproductcontentitem",level:2},{value:"SupplierProductLocale",id:"supplierproductlocale",level:2}],d={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supplierproduct"},"SupplierProduct"),(0,o.kt)("p",null,"This is the main entity of the Supplier domain, and is used to represent a product, which is a group of SKUs. SKUs are represented by SupplierVariants, a child of this entity. These generally represent some Size/Color combination or similar of the product. For instance, a Sweater is a product, and the Gray / Medium version is a variant."),(0,o.kt)("p",null,"This entity is less frequently updated, it is more likely that SupplierVariant will be updated frequently."),(0,o.kt)("p",null,"SupplierProducts have many related entities, including SupplierProductLocales, SupplierProductContentItems, ",(0,o.kt)("a",{parentName:"p",href:"SupplierVariant"},"SupplierVariants"),", and SupplierVariantSupplements."),(0,o.kt)("p",null,"This entity matches with ",(0,o.kt)("a",{parentName:"p",href:"../../demand-hqs/entities/Product"},"Product")," in the Demand domain, and the properties between the two are very similar."),(0,o.kt)("h2",{id:"supplierproductcustomdata"},"SupplierProductCustomData"),(0,o.kt)("p",null,"This entity is a 1:1 relationship with SupplierProduct and holds data that doesn't fit anywhere else."),(0,o.kt)("h2",{id:"supplierproductcontentitem"},"SupplierProductContentItem"),(0,o.kt)("p",null,"This entity holds a relationship between a SupplierProduct and an image, video, or file and is a child entity of SupplierProduct."),(0,o.kt)("h2",{id:"supplierproductlocale"},"SupplierProductLocale"),(0,o.kt)("p",null,"This entity is a child entity of SupplierProduct, and contains the description and feature bullets in various languages."))}f.isMDXComponent=!0}}]);