"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[3236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,h=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Authentication",sidebar_position:2},o="Authentication",c={unversionedId:"concepts/api/authentication",id:"concepts/api/authentication",title:"Authentication",description:"Apps authenticate using an app client ID and a secret. These can be handed to the /token route in the Admin Identity REST API. A JSON Web Token (JWT) will be returned with a validity of 6 hours. This token can be used to call APIs that the app has access to.",source:"@site/docs/concepts/api/authentication.md",sourceDirName:"concepts/api",slug:"/concepts/api/authentication",permalink:"/concepts/api/authentication",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/api/authentication.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Authentication",sidebar_position:2},sidebar:"conceptsSidebar",previous:{title:"Overall API Concepts",permalink:"/concepts/api/overall-concepts"},next:{title:"Rate Limiting",permalink:"/concepts/api/rate-limiting"}},p={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Apps authenticate using an app client ID and a secret. These can be handed to the ",(0,a.kt)("a",{parentName:"p",href:"adminidentity/api/rest-admin/reference#tag/Token/paths/~1token/post"},"/token route")," in the ",(0,a.kt)("a",{parentName:"p",href:"adminidentity/api/rest-admin/reference"},"Admin Identity REST API"),". A JSON Web Token (JWT) will be returned with a validity of 6 hours. This token can be used to call APIs that the app has access to."))}u.isMDXComponent=!0}}]);