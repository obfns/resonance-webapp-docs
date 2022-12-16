"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[83167],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58590:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={title:"Errors",sidebar_position:10},i="Errors",c={unversionedId:"concepts/api/errors",id:"concepts/api/errors",title:"Errors",description:"API Error Codes",source:"@site/docs/concepts/api/errors.md",sourceDirName:"concepts/api",slug:"/concepts/api/errors",permalink:"/concepts/api/errors",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/api/errors.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Errors",sidebar_position:10},sidebar:"conceptsSidebar",previous:{title:"Rate Limiting",permalink:"/concepts/api/rate-limiting"}},p={},s=[{value:"API Error Codes",id:"api-error-codes",level:2}],l={toc:s};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"errors"},"Errors"),(0,o.kt)("h2",{id:"api-error-codes"},"API Error Codes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'enum GraphQLErrorCode {\n    BadGateway = "BAD_GATEWAY",\n    BadUserInput = "USER_INPUT_ERROR",\n    Conflict = "CONFLICT",\n    Forbidden = "FORBIDDEN",\n    InternalServerError = "INTERNAL_SERVER_ERROR",\n    NotFound = "NOT_FOUND",\n    NotImplemented = "NOT_IMPLEMENTED",\n    TooManyRequests = "TOO_MANY_REQUESTS",\n    Unauthorized = "UNAUTHORIZED",\n    UnsupportedMediaType = "UNSUPPORTED_MEDIA_TYPE",\n}\n')))}u.isMDXComponent=!0}}]);