"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5019],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||p;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6623:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),p=(r(7294),r(3905)),i=["components"],o={id:"create-app",title:"createApp"},c=void 0,s={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/mutations/create-app",id:"developers/shared-apis/adminidentity-api/graphql/reference/mutations/create-app",title:"createApp",description:"Create a new App",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/mutations/create-app.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/mutations",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/mutations/create-app",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/mutations/create-app",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/mutations/create-app.mdx",tags:[],version:"current",frontMatter:{id:"create-app",title:"createApp"},sidebar:"apisSidebar",previous:{title:"UserUpdateInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input"},next:{title:"createPartnerIdentity",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/mutations/create-partner-identity"}},l=[{value:"Arguments",id:"arguments",children:[{value:"<code>input</code> (AppCreateInput)",id:"input-appcreateinput",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"AppCreateResponse",id:"appcreateresponse",children:[],level:4}],level:3}],u={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Create a new App"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"createApp(\n  input: AppCreateInput!\n): AppCreateResponse!\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"input-appcreateinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-create-input"},(0,p.kt)("inlineCode",{parentName:"a"},"AppCreateInput")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"appcreateresponse"},(0,p.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/app-create-response"},(0,p.kt)("inlineCode",{parentName:"a"},"AppCreateResponse"))),(0,p.kt)("p",null,"The output when creating an App"))}d.isMDXComponent=!0}}]);