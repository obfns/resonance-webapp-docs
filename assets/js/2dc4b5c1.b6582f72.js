"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[23008],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||l[f]||p;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<p;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56576:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return l}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),i=["components"],o={id:"app-create-input",title:"AppCreateInput"},s=void 0,d={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-create-input",id:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-create-input",title:"AppCreateInput",description:"The necessary fields in order to create a new app",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-create-input.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/inputs",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-create-input",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-create-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-create-input.mdx",tags:[],version:"current",frontMatter:{id:"app-create-input",title:"AppCreateInput"},sidebar:"apisSidebar",previous:{title:"UserNotificationCategory",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/user-notification-category"},next:{title:"AppUpdateInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-update-input"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>appType</code> (<code>AppType</code>)",id:"apptype-apptype",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>partnerId</code> (<code>ID</code>)",id:"partnerid-id",level:4},{value:"<code>requestedScopes</code> (<code>String</code>)",id:"requestedscopes-string",level:4},{value:"<code>status</code> (<code>AppStatus</code>)",id:"status-appstatus",level:4}],u={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The necessary fields in order to create a new app"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input AppCreateInput {\n  appType: AppType!\n  description: String\n  name: String!\n  partnerId: ID!\n  requestedScopes: [String]\n  status: AppStatus!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"apptype-apptype"},(0,p.kt)("inlineCode",{parentName:"h4"},"appType")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/app-type"},(0,p.kt)("inlineCode",{parentName:"a"},"AppType")),")"),(0,p.kt)("h4",{id:"description-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("p",null,"Short description of the app\nLimited to 8000 characters"),(0,p.kt)("h4",{id:"name-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("p",null,"The name of the app\nLimited to 128 characters"),(0,p.kt)("h4",{id:"partnerid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"partnerId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"requestedscopes-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"requestedScopes")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"status-appstatus"},(0,p.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/app-status"},(0,p.kt)("inlineCode",{parentName:"a"},"AppStatus")),")"))}f.isMDXComponent=!0}}]);