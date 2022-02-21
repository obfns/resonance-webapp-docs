"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[3074],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var a=n.createContext({}),o=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=o(e.components);return n.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=o(r),f=p,v=y["".concat(a,".").concat(f)]||y[f]||c[f]||i;return r?n.createElement(v,u(u({ref:t},l),{},{components:r})):n.createElement(v,u({ref:t},l))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,u=new Array(i);u[0]=y;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:p,u[1]=s;for(var o=2;o<i;o++)u[o]=r[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8152:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return o},toc:function(){return l},default:function(){return y}});var n=r(7462),p=r(3366),i=(r(7294),r(3905)),u=["components"],s={id:"create-supply-event-subscription",title:"createSupplyEventSubscription"},a=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supply-event-subscription",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supply-event-subscription",title:"createSupplyEventSubscription",description:"Create a subscription for a type of supply event.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supply-event-subscription.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supply-event-subscription",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supply-event-subscription",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supply-event-subscription.mdx",tags:[],version:"current",frontMatter:{id:"create-supply-event-subscription",title:"createSupplyEventSubscription"},sidebar:"apisSidebar",previous:{title:"createSupplier",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier"},next:{title:"deleteSupplierIdentity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity"}},l=[{value:"Arguments",id:"arguments",children:[{value:"<code>input</code> (SupplyEventSubscriptionCreateInput)",id:"input-supplyeventsubscriptioncreateinput",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SupplyEventSubscription",id:"supplyeventsubscription",children:[],level:4}],level:3}],c={toc:l};function y(e){var t=e.components,r=(0,p.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create a subscription for a type of supply event."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"createSupplyEventSubscription(\n  input: SupplyEventSubscriptionCreateInput!\n): SupplyEventSubscription!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-supplyeventsubscriptioncreateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supply-event-subscription-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscriptionCreateInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplyeventsubscription"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-subscription"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscription"))),(0,i.kt)("p",null,"Entity representing a subscription to supply events."))}y.isMDXComponent=!0}}]);