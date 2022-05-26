"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[69988],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return l}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=i(t),l=a,f=m["".concat(c,".").concat(l)]||m[l]||u[l]||s;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function l(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var d={};for(var c in r)hasOwnProperty.call(r,c)&&(d[c]=r[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var i=2;i<s;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98328:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return u}});var n=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],d={id:"create-customer-address",title:"createCustomerAddress"},c=void 0,i={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-customer-address",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-customer-address",title:"createCustomerAddress",description:"Creates a new CustomerAddress",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-customer-address.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-customer-address",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-customer-address",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-customer-address.mdx",tags:[],version:"current",frontMatter:{id:"create-customer-address",title:"createCustomerAddress"},sidebar:"apisSidebar",previous:{title:"createCollection",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-collection"},next:{title:"createCustomer",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-customer"}},p={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>CustomerAddressCreateInput</code>)",id:"input-customeraddresscreateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>CustomerAddress</code>",id:"customeraddress",level:4}],m={toc:u};function l(e){var r=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Creates a new CustomerAddress"),(0,s.kt)("p",null,"Requires the customeraddress/write scope on the associated DemandHq."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"createCustomerAddress(\n  input: CustomerAddressCreateInput!\n): CustomerAddress\n\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"input-customeraddresscreateinput"},(0,s.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-address-create-input"},(0,s.kt)("inlineCode",{parentName:"a"},"CustomerAddressCreateInput")),")"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"customeraddress"},(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/customer-address"},(0,s.kt)("inlineCode",{parentName:"a"},"CustomerAddress"))),(0,s.kt)("p",null,"A customerAddress is an Address entity that is associated with a customer"))}l.isMDXComponent=!0}}]);