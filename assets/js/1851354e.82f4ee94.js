"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6070],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(i),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},72073:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const a={title:"Rate Limiting",sidebar_position:3},o="Rate Limiting",s={unversionedId:"concepts/api/rate-limiting",id:"concepts/api/rate-limiting",title:"Rate Limiting",description:"All APIs are rate limited. Any information on this page will be true for every request unless the individual route specifies otherwise.",source:"@site/docs/concepts/api/rate-limiting.md",sourceDirName:"concepts/api",slug:"/concepts/api/rate-limiting",permalink:"/concepts/api/rate-limiting",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/api/rate-limiting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Rate Limiting",sidebar_position:3},sidebar:"conceptsSidebar",previous:{title:"Authentication",permalink:"/concepts/api/authentication"},next:{title:"Errors",permalink:"/concepts/api/errors"}},l={},c=[{value:"Fixed-Window",id:"fixed-window",level:2},{value:"Admin APIs (Demand, Supply)",id:"admin-apis-demand-supply",level:2},{value:"Storefront API",id:"storefront-api",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rate-limiting"},"Rate Limiting"),(0,r.kt)("p",null,"All APIs are rate limited. Any information on this page will be true for every request unless the individual route specifies otherwise."),(0,r.kt)("h2",{id:"fixed-window"},"Fixed-Window"),(0,r.kt)("p",null,"We utilize fixed-window rate limiting. In layman's terms, this means that it is based on a clock, not when the user or app takes action. As in, a minute starts at :00 seconds and ends at :59 seconds. This is a simple method of rate limiting that decreases overhead, but does allow for large bursts of API calls if they occur at the end and beginning of a minute. To counteract this, we keep the time period the window lasts short (1 minute). To make it easy on our developers, the limits are quite generous."),(0,r.kt)("h2",{id:"admin-apis-demand-supply"},"Admin APIs (Demand, Supply)"),(0,r.kt)("p",null,"The rate limit is applied per identity (app client ID), and is set at 1000 calls/min."),(0,r.kt)("p",null,"Because we have high limits, we reserve the right to contact and potentially throttle apps that are consistently using the entire limit, but 99.99% of use cases should never get close. If you feel your app is particularly chatty, please contact us for ideas and reassurances that this will not occur."),(0,r.kt)("h2",{id:"storefront-api"},"Storefront API"),(0,r.kt)("p",null,"The Storefront API has extremely high limits, but is subject to fair use. Please ensure you are using it responsibly (caching and bot control where possible), as we reserve the right to the right to impose smaller limits on extreme use."))}u.isMDXComponent=!0}}]);