"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[76810],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51537:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"customer",title:"customer"},c=void 0,u={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/queries/customer",id:"developers/demandhq-apis/storefront-api/graphql/reference/queries/customer",title:"customer",description:"Get a Customer for a customer authentication token.",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/customer.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/queries",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/customer",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/customer",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/customer.mdx",tags:[],version:"current",frontMatter:{id:"customer",title:"customer"},sidebar:"apisSidebar",previous:{title:"customerCart",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/customer-cart"},next:{title:"deviceCart",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/device-cart"}},p={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>customerToken</code> (<code>String</code>)",id:"customertoken-string",level:4},{value:"Type",id:"type",level:3},{value:"<code>Customer</code>",id:"customer",level:4}],d={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get a Customer for a customer authentication token."),(0,a.kt)("p",null,"Requires the publiccustomer/read scope and a valid customer authentication token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"customer(\n  customerToken: String!\n): Customer\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"customertoken-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"customerToken")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"customer"},(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/customer"},(0,a.kt)("inlineCode",{parentName:"a"},"Customer"))),(0,a.kt)("p",null,"A customer of a given Storefront is a user who places orders on the Storefront"))}m.isMDXComponent=!0}}]);