"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[73788],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60185:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],p={id:"storefront-nav-settings-upsert-input",title:"StorefrontNavSettingsUpsertInput"},s=void 0,d={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-nav-settings-upsert-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-nav-settings-upsert-input",title:"StorefrontNavSettingsUpsertInput",description:"The input for upserting a StorefrontNavSettings",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-nav-settings-upsert-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-nav-settings-upsert-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-nav-settings-upsert-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-nav-settings-upsert-input.mdx",tags:[],version:"current",frontMatter:{id:"storefront-nav-settings-upsert-input",title:"StorefrontNavSettingsUpsertInput"},sidebar:"apisSidebar",previous:{title:"StorefrontIdentityInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-identity-input"},next:{title:"StorefrontPermissionsInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-permissions-input"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>linkTypes</code> (<code>String</code>)",id:"linktypes-string",level:4},{value:"<code>storefrontId</code> (<code>ID</code>)",id:"storefrontid-id",level:4}],c={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The input for upserting a StorefrontNavSettings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input StorefrontNavSettingsUpsertInput {\n  demandHqId: ID!\n  linkTypes: [String]\n  storefrontId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"linktypes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"linkTypes")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"This sets what linkTypes are allowed for Navs in this storefront. Helps correct human error.\nMaximum of 50 types."),(0,i.kt)("h4",{id:"storefrontid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"storefrontId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}f.isMDXComponent=!0}}]);