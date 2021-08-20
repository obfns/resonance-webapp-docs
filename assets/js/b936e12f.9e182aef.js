"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[8632],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6790:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),p=["components"],o={sidebar_position:1},s="Supply API Concepts",u={unversionedId:"developers/supplier-apis/supply-api/concepts",id:"developers/supplier-apis/supply-api/concepts",isDocsHomePage:!1,title:"Supply API Concepts",description:"The Supply API provides admin functionality for Suppliers. This functionality is separated into 3 smaller domain groups:",source:"@site/docs/developers/supplier-apis/supply-api/concepts.md",sourceDirName:"developers/supplier-apis/supply-api",slug:"/developers/supplier-apis/supply-api/concepts",permalink:"/developers/supplier-apis/supply-api/concepts",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/concepts.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisSidebar",previous:{title:"String",permalink:"/developers/shared-apis/events-api/graphql/reference/scalars/string"},next:{title:"Schema Documentation",permalink:"/developers/supplier-apis/supply-api/graphql/reference"}},l=[{value:"Metadata",id:"metadata",children:[]},{value:"Management",id:"management",children:[]},{value:"Distribution",id:"distribution",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supply-api-concepts"},"Supply API Concepts"),(0,a.kt)("p",null,"The Supply API provides admin functionality for Suppliers. This functionality is separated into 3 smaller domain groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Metadata"),(0,a.kt)("li",{parentName:"ul"},"Management"),(0,a.kt)("li",{parentName:"ul"},"Distribution")),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("p",null,"This contains the functionality surrounding the basics of the Supply domain. Suppliers themselves and permissions are the primary entities."),(0,a.kt)("h2",{id:"management"},"Management"),(0,a.kt)("p",null,"This contains the functionality surrounding inventory and product (variant) information. SupplierVariants and various supplements are the primary entities. This is the most interacted with domain group."),(0,a.kt)("h2",{id:"distribution"},"Distribution"),(0,a.kt)("p",null,"This contains the functionality surrounding purchase orders and fulfillment of those orders. PurchaseOrders are the primary entities."))}d.isMDXComponent=!0}}]);