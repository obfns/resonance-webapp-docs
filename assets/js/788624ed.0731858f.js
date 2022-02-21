"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[1231],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return m}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),l=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},d=function(e){var r=l(e.components);return t.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(o,".").concat(m)]||u[m]||c[m]||a;return n?t.createElement(f,p(p({ref:r},d),{},{components:n})):t.createElement(f,p({ref:r},d))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=u;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var l=2;l<a;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8105:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var t=n(7462),i=n(3366),a=(n(7294),n(3905)),p=["components"],s={id:"partner-identity-permissions-input",title:"PartnerIdentityPermissionsInput"},o=void 0,l={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-permissions-input",id:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-permissions-input",title:"PartnerIdentityPermissionsInput",description:"Input object representing exactly what permissions are given",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-permissions-input.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/inputs",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-permissions-input",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-permissions-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-permissions-input.mdx",tags:[],version:"current",frontMatter:{id:"partner-identity-permissions-input",title:"PartnerIdentityPermissionsInput"},sidebar:"apisSidebar",previous:{title:"PartnerIdentityCreateInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-create-input"},next:{title:"PartnerIdentityUpdateInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-update-input"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>roles</code> (PartnerRole)",id:"roles-partnerrole",children:[],level:4},{value:"<code>scopes</code> (String)",id:"scopes-string",children:[],level:4}],level:3}],c={toc:d};function u(e){var r=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Input object representing exactly what permissions are given"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type PartnerIdentityPermissionsInput {\n  roles: [PartnerRole]!\n  scopes: [String]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"roles-partnerrole"},(0,a.kt)("inlineCode",{parentName:"h4"},"roles")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/partner-role"},(0,a.kt)("inlineCode",{parentName:"a"},"PartnerRole")),")"),(0,a.kt)("p",null,"Roles are groups of permission scopes, for ease of assigning"),(0,a.kt)("h4",{id:"scopes-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"scopes")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Scopes are individual permissions representing a single item and action, in all lowercase, i.e. partneridentity/write"))}u.isMDXComponent=!0}}]);