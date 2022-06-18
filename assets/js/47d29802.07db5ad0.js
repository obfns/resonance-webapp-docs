"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[10863],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2318:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={},c="Order",l={unversionedId:"concepts/demand-hqs/entities/Order",id:"concepts/demand-hqs/entities/Order",title:"Order",description:"An order is a collection of items that a Customer has purchased. As an order accrues transactions and fulfillments, it changes status until it is eventually complete and the Customer has all of their desired goods.",source:"@site/docs/concepts/demand-hqs/entities/Order.md",sourceDirName:"concepts/demand-hqs/entities",slug:"/concepts/demand-hqs/entities/Order",permalink:"/concepts/demand-hqs/entities/Order",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/demand-hqs/entities/Order.md",tags:[],version:"current",frontMatter:{},sidebar:"conceptsSidebar",previous:{title:"Nav",permalink:"/concepts/demand-hqs/entities/Nav"},next:{title:"Page",permalink:"/concepts/demand-hqs/entities/Page"}},d={},u=[{value:"OrderItem",id:"orderitem",level:2},{value:"OrderTransaction",id:"ordertransaction",level:2}],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"order"},"Order"),(0,a.kt)("p",null,"An order is a collection of items that a ",(0,a.kt)("a",{parentName:"p",href:"Customer"},"Customer")," has purchased. As an order accrues transactions and fulfillments, it changes status until it is eventually complete and the ",(0,a.kt)("a",{parentName:"p",href:"Customer"},"Customer")," has all of their desired goods."),(0,a.kt)("h2",{id:"orderitem"},"OrderItem"),(0,a.kt)("p",null,"OrderItems are individual items composing an Order, with a reference to a ",(0,a.kt)("a",{parentName:"p",href:"Variant"},"Variant"),". Orders rely on Suppliers to fulfill the OrderItems by creating a corresponding ",(0,a.kt)("a",{parentName:"p",href:"../../suppliers/entities/PurchaseOrderItem"},"PurchaseOrderItems")," (which are then fulfilled)."),(0,a.kt)("h2",{id:"ordertransaction"},"OrderTransaction"),(0,a.kt)("p",null,"An OrderTransaction is a financial interaction for an Order. All fields are immutable. Most commonly the flow is Authorization (on creation of order) -> Capture (on shipment of order). In refund scenarios, the flow may also include Refund or Void."))}f.isMDXComponent=!0}}]);