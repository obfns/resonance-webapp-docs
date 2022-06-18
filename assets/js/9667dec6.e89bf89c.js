"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[68170],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=s(n),f=i,m=l["".concat(p,".").concat(f)]||l[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=l;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},97080:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],d={id:"storefront-create-input",title:"StorefrontCreateInput"},p=void 0,s={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-create-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-create-input",title:"StorefrontCreateInput",description:"Necessary fields to create a storefront.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-create-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-create-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-create-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-create-input.mdx",tags:[],version:"current",frontMatter:{id:"storefront-create-input",title:"StorefrontCreateInput"},sidebar:"apisSidebar",previous:{title:"StorefrontAuthenticationSettingsInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-authentication-settings-input"},next:{title:"StorefrontIdentityInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-identity-input"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>authenticationSettings</code> (<code>StorefrontAuthenticationSettingsInput</code>)",id:"authenticationsettings-storefrontauthenticationsettingsinput",level:4},{value:"<code>authenticationType</code> (<code>StorefrontAuthenticationType</code>)",id:"authenticationtype-storefrontauthenticationtype",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>storefrontIdentities</code> (<code>StorefrontIdentityInput</code>)",id:"storefrontidentities-storefrontidentityinput",level:4},{value:"<code>urlDomain</code> (<code>String</code>)",id:"urldomain-string",level:4}],l={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Necessary fields to create a storefront."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input StorefrontCreateInput {\n  authenticationSettings: StorefrontAuthenticationSettingsInput\n  authenticationType: StorefrontAuthenticationType\n  demandHqId: ID!\n  description: String\n  name: String!\n  storefrontIdentities: [StorefrontIdentityInput!]\n  urlDomain: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"authenticationsettings-storefrontauthenticationsettingsinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"authenticationSettings")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-authentication-settings-input"},(0,a.kt)("inlineCode",{parentName:"a"},"StorefrontAuthenticationSettingsInput")),")"),(0,a.kt)("h4",{id:"authenticationtype-storefrontauthenticationtype"},(0,a.kt)("inlineCode",{parentName:"h4"},"authenticationType")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/storefront-authentication-type"},(0,a.kt)("inlineCode",{parentName:"a"},"StorefrontAuthenticationType")),")"),(0,a.kt)("h4",{id:"demandhqid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"storefrontidentities-storefrontidentityinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"storefrontIdentities")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-identity-input"},(0,a.kt)("inlineCode",{parentName:"a"},"StorefrontIdentityInput")),")"),(0,a.kt)("h4",{id:"urldomain-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"urlDomain")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);