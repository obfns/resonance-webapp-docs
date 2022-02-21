"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9232],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),y=i,m=d["".concat(o,".").concat(y)]||d[y]||s[y]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6213:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],p={id:"query-public-identity-by-email",title:"queryPublicIdentityByEmail"},o=void 0,c={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/queries/query-public-identity-by-email",id:"developers/shared-apis/adminidentity-api/graphql/reference/queries/query-public-identity-by-email",title:"queryPublicIdentityByEmail",description:"Given an email, returns PublicUser if the user exists. Exact match.",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/query-public-identity-by-email.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/queries",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/query-public-identity-by-email",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/query-public-identity-by-email",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/query-public-identity-by-email.mdx",tags:[],version:"current",frontMatter:{id:"query-public-identity-by-email",title:"queryPublicIdentityByEmail"},sidebar:"apisSidebar",previous:{title:"publicIdentity",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identity"},next:{title:"Boolean",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/boolean"}},u=[{value:"Arguments",id:"arguments",children:[{value:"<code>email</code> (String)",id:"email-string",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"PublicIdentity",id:"publicidentity",children:[],level:4}],level:3}],s={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Given an email, returns PublicUser if the user exists. Exact match."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"queryPublicIdentityByEmail(\n  email: String!\n): PublicIdentity\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"email-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"publicidentity"},(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicIdentity"))),(0,a.kt)("p",null,"This type is returned on routes with no permissions attached to protect\nPersonally Identifiable Information, but still provide minimal data.\nCan be a User or Identity."))}d.isMDXComponent=!0}}]);