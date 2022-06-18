"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5192],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,m=l["".concat(s,".").concat(f)]||l[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},69965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},s="Product",u={unversionedId:"concepts/demand-hqs/entities/Product",id:"concepts/demand-hqs/entities/Product",title:"Product",description:"This is the main entity of the Demand domain, and is used to represent a product, which is a group of SKUs. SKUs are represented by Variants, a child of this entity. SKUs are commonly Size/Color combinations for a Product, but a Product can also just have a single SKU.",source:"@site/docs/concepts/demand-hqs/entities/Product.md",sourceDirName:"concepts/demand-hqs/entities",slug:"/concepts/demand-hqs/entities/Product",permalink:"/concepts/demand-hqs/entities/Product",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/demand-hqs/entities/Product.md",tags:[],version:"current",frontMatter:{},sidebar:"conceptsSidebar",previous:{title:"Page",permalink:"/concepts/demand-hqs/entities/Page"},next:{title:"Storefront",permalink:"/concepts/demand-hqs/entities/Storefront"}},d={},p=[{value:"ProductCustomData",id:"productcustomdata",level:2},{value:"ProductContentItem",id:"productcontentitem",level:2},{value:"ProductLocale",id:"productlocale",level:2}],l={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"product"},"Product"),(0,a.kt)("p",null,"This is the main entity of the Demand domain, and is used to represent a product, which is a group of SKUs. SKUs are represented by ",(0,a.kt)("a",{parentName:"p",href:"Variant"},"Variants"),", a child of this entity. SKUs are commonly Size/Color combinations for a Product, but a Product can also just have a single SKU."),(0,a.kt)("p",null,"This entity matches with ",(0,a.kt)("a",{parentName:"p",href:"../../suppliers/entities/SupplierProduct"},"SupplierProduct")," in the Supply domain, and the properties between the two are very similar."),(0,a.kt)("h2",{id:"productcustomdata"},"ProductCustomData"),(0,a.kt)("p",null,"This entity is a 1:1 relationship with Product and holds data that doesn't fit anywhere else."),(0,a.kt)("h2",{id:"productcontentitem"},"ProductContentItem"),(0,a.kt)("p",null,"This entity holds a relationship between a Product and an image, video, or file and is a child entity of Product."),(0,a.kt)("h2",{id:"productlocale"},"ProductLocale"),(0,a.kt)("p",null,"This entity is a child entity of Product, and contains the description and feature bullets in various languages."))}f.isMDXComponent=!0}}]);