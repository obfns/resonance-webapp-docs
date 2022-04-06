"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[4996],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93986:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},assets:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),p=["components"],s={id:"app-status",title:"AppStatus"},o=void 0,l={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/enums/app-status",id:"developers/shared-apis/adminidentity-api/graphql/reference/enums/app-status",title:"AppStatus",description:"What stage and availability the app is in",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/enums/app-status.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/enums",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/app-status",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/app-status",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/enums/app-status.mdx",tags:[],version:"current",frontMatter:{id:"app-status",title:"AppStatus"},sidebar:"apisSidebar",previous:{title:"specifiedBy",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/directives/specified-by"},next:{title:"AppType",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/app-type"}},c={},u=[{value:"Values",id:"values",level:3},{value:"<code>DRAFT</code>",id:"draft",level:4},{value:"<code>PRIVATE</code>",id:"private",level:4},{value:"<code>PUBLIC</code>",id:"public",level:4}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"What stage and availability the app is in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AppStatus {\n  DRAFT\n  PRIVATE\n  PUBLIC\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"draft"},(0,i.kt)("inlineCode",{parentName:"h4"},"DRAFT")),(0,i.kt)("p",null,"The app is in the process of being created"),(0,i.kt)("h4",{id:"private"},(0,i.kt)("inlineCode",{parentName:"h4"},"PRIVATE")),(0,i.kt)("p",null,"The app is available to install, but only through shared links"),(0,i.kt)("h4",{id:"public"},(0,i.kt)("inlineCode",{parentName:"h4"},"PUBLIC")),(0,i.kt)("p",null,"The app is available to install, and is searchable/discoverable"))}f.isMDXComponent=!0}}]);