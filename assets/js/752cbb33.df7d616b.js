"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6153],{3905:function(e,p,r){r.d(p,{Zo:function(){return c},kt:function(){return f}});var t=r(67294);function n(e,p,r){return p in e?Object.defineProperty(e,p,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[p]=r,e}function a(e,p){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);p&&(t=t.filter((function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var p=1;p<arguments.length;p++){var r=null!=arguments[p]?arguments[p]:{};p%2?a(Object(r),!0).forEach((function(p){n(e,p,r[p])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(p){Object.defineProperty(e,p,Object.getOwnPropertyDescriptor(r,p))}))}return e}function s(e,p){if(null==e)return{};var r,t,n=function(e,p){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],p.indexOf(r)>=0||(n[r]=e[r]);return n}(e,p);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],p.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=t.createContext({}),l=function(e){var p=t.useContext(o),r=p;return e&&(r="function"==typeof e?e(p):i(i({},p),e)),r},c=function(e){var p=l(e.components);return t.createElement(o.Provider,{value:p},e.children)},d={inlineCode:"code",wrapper:function(e){var p=e.children;return t.createElement(t.Fragment,{},p)}},u=t.forwardRef((function(e,p){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||a;return r?t.createElement(m,i(i({ref:p},c),{},{components:r})):t.createElement(m,i({ref:p},c))}));function f(e,p){var r=arguments,n=p&&p.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var o in p)hasOwnProperty.call(p,o)&&(s[o]=p[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78541:function(e,p,r){r.r(p),r.d(p,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var t=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"public-app",title:"PublicApp"},o=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/public-app",id:"developers/supplier-apis/supply-api/graphql/reference/objects/public-app",title:"PublicApp",description:"This type is returned on routes with no permissions attached to protect",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/public-app.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-app",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-app",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/public-app.mdx",tags:[],version:"current",frontMatter:{id:"public-app",title:"PublicApp"},sidebar:"apisSidebar",previous:{title:"ParsedTag",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/parsed-tag"},next:{title:"PublicIdentity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-identity"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>appClientIds</code> (<code>ID</code>)",id:"appclientids-id",level:4},{value:"<code>appId</code> (<code>ID</code>)",id:"appid-id",level:4},{value:"<code>appType</code> (<code>AppType</code>)",id:"apptype-apptype",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>partnerId</code> (<code>ID</code>)",id:"partnerid-id",level:4},{value:"<code>requestedScopes</code> (<code>String</code>)",id:"requestedscopes-string",level:4},{value:"<code>status</code> (<code>AppStatus</code>)",id:"status-appstatus",level:4}],u={toc:d};function f(e){var p=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:p,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This type is returned on routes with no permissions attached to protect\nPersonally Identifiable Information, but still provide minimal data.\nProvides a subset of App from the Identity domain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicApp {\n  appClientIds: [ID!]!\n  appId: ID!\n  appType: AppType!\n  description: String\n  name: String!\n  partnerId: ID!\n  requestedScopes: [String]\n  status: AppStatus!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"appclientids-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"appClientIds")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"appid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"appId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"apptype-apptype"},(0,a.kt)("inlineCode",{parentName:"h4"},"appType")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/app-type"},(0,a.kt)("inlineCode",{parentName:"a"},"AppType")),")"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"partnerid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"partnerId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"requestedscopes-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"requestedScopes")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"status-appstatus"},(0,a.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/app-status"},(0,a.kt)("inlineCode",{parentName:"a"},"AppStatus")),")"))}f.isMDXComponent=!0}}]);