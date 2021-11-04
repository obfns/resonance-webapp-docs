"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[7511],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return f}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?t.createElement(m,p(p({ref:r},c),{},{components:n})):t.createElement(m,p({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9822:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var t=n(3117),a=n(102),i=(n(7294),n(3905)),p=["components"],o={id:"partner",title:"partner"},s=void 0,l={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/queries/partner",id:"developers/shared-apis/adminidentity-api/graphql/reference/queries/partner",isDocsHomePage:!1,title:"partner",description:"Get a single partner by PartnerId",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/partner.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/queries",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/partner",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/partner",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/partner.mdx",tags:[],version:"current",frontMatter:{id:"partner",title:"partner"},sidebar:"apisSidebar",previous:{title:"myNotifications",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/my-notifications"},next:{title:"partners",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/partners"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>partnerId</code> (ID!)",id:"partnerid-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"Partner",id:"partner",children:[],level:4}],level:3}],d={toc:c};function u(e){var r=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Get a single partner by PartnerId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"partner(\n  partnerId: ID!\n): Partner\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"partnerid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"partnerId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"partner"},(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/partner"},(0,i.kt)("inlineCode",{parentName:"a"},"Partner"))),(0,i.kt)("p",null,"Represents a Partner, the parent to an App, and the parent most component for Development"))}u.isMDXComponent=!0}}]);