"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6584],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,d=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,u=m["".concat(p,".").concat(f)]||m[f]||c[f]||d;return r?n.createElement(u,i(i({ref:t},l),{},{components:r})):n.createElement(u,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=r.length,i=new Array(d);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<d;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2992:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return l},toc:function(){return c},default:function(){return f}});var n=r(87462),a=r(63366),d=(r(67294),r(3905)),i=["components"],o={id:"storefront",title:"Storefront"},p=void 0,s={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/storefront",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/storefront",title:"Storefront",description:"A Storefront represents a customer facing ecommerce website that consumes Resonance Demand Entities",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront.mdx",tags:[],version:"current",frontMatter:{id:"storefront",title:"Storefront"},sidebar:"apisSidebar",previous:{title:"StorefrontPermissions",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-permissions"},next:{title:"demandHqIdentities",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/demand-hq-identities"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>apiKey</code> (<code>StorefrontApiKey</code>)",id:"apikey-storefrontapikey",level:4},{value:"<code>apiKeys</code> (<code>StorefrontApiKey</code>)",id:"apikeys-storefrontapikey",level:4},{value:"<code>createdAt</code> (<code>Date</code>)",id:"createdat-date",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>storefrontId</code> (<code>ID</code>)",id:"storefrontid-id",level:4},{value:"<code>storefrontIdentities</code> (<code>StorefrontIdentity</code>)",id:"storefrontidentities-storefrontidentity",level:4},{value:"<code>updatedAt</code> (<code>Date</code>)",id:"updatedat-date",level:4},{value:"<code>updatedBy</code> (<code>ID</code>)",id:"updatedby-id",level:4},{value:"<code>urlDomain</code> (<code>String</code>)",id:"urldomain-string",level:4}],m={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,d.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"A Storefront represents a customer facing ecommerce website that consumes Resonance Demand Entities"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type Storefront {\n  apiKey(\n  slug: String!\n): StorefrontApiKey\n  apiKeys: [StorefrontApiKey]!\n  createdAt: Date!\n  demandHqId: ID!\n  description: String\n  name: String!\n  storefrontId: ID!\n  storefrontIdentities: [StorefrontIdentity!]\n  updatedAt: Date!\n  updatedBy: ID!\n  urlDomain: String!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"apikey-storefrontapikey"},(0,d.kt)("inlineCode",{parentName:"h4"},"apiKey")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-api-key"},(0,d.kt)("inlineCode",{parentName:"a"},"StorefrontApiKey")),")"),(0,d.kt)("p",null,"Get an api key for this storefront by identitySlug."),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("h5",{parentName:"li",id:"slug-string"},(0,d.kt)("inlineCode",{parentName:"h5"},"slug")," (",(0,d.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,d.kt)("h4",{id:"apikeys-storefrontapikey"},(0,d.kt)("inlineCode",{parentName:"h4"},"apiKeys")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-api-key"},(0,d.kt)("inlineCode",{parentName:"a"},"StorefrontApiKey")),")"),(0,d.kt)("p",null,"Get all api keys for this storefront."),(0,d.kt)("h4",{id:"createdat-date"},(0,d.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,d.kt)("h4",{id:"demandhqid-id"},(0,d.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,d.kt)("h4",{id:"description-string"},(0,d.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,d.kt)("h4",{id:"name-string"},(0,d.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,d.kt)("h4",{id:"storefrontid-id"},(0,d.kt)("inlineCode",{parentName:"h4"},"storefrontId")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,d.kt)("h4",{id:"storefrontidentities-storefrontidentity"},(0,d.kt)("inlineCode",{parentName:"h4"},"storefrontIdentities")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-identity"},(0,d.kt)("inlineCode",{parentName:"a"},"StorefrontIdentity")),")"),(0,d.kt)("h4",{id:"updatedat-date"},(0,d.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,d.kt)("h4",{id:"updatedby-id"},(0,d.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,d.kt)("h4",{id:"urldomain-string"},(0,d.kt)("inlineCode",{parentName:"h4"},"urlDomain")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);