"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[3819],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||l[f]||o;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9560:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],p={id:"deprecated",title:"deprecated"},s=void 0,c={unversionedId:"developers/shared-apis/events-api/graphql/reference/directives/deprecated",id:"developers/shared-apis/events-api/graphql/reference/directives/deprecated",isDocsHomePage:!1,title:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",source:"@site/docs/developers/shared-apis/events-api/graphql/reference/directives/deprecated.mdx",sourceDirName:"developers/shared-apis/events-api/graphql/reference/directives",slug:"/developers/shared-apis/events-api/graphql/reference/directives/deprecated",permalink:"/developers/shared-apis/events-api/graphql/reference/directives/deprecated",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/events-api/graphql/reference/directives/deprecated.mdx",version:"current",frontMatter:{id:"deprecated",title:"deprecated"},sidebar:"apisSidebar",previous:{title:"_makeEmpty",permalink:"/developers/shared-apis/events-api/graphql/reference/mutations/make-empty"},next:{title:"include",permalink:"/developers/shared-apis/events-api/graphql/reference/directives/include"}},d=[{value:"Arguments",id:"arguments",children:[]}],l={toc:d};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Marks an element of a GraphQL schema as no longer supported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'directive @deprecated(\n  reason: String = "No longer supported"\n)\n')),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"reason-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"reason")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/shared-apis/events-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by ",(0,o.kt)("a",{parentName:"p",href:"https://commonmark.org/"},"CommonMark"),"."))}u.isMDXComponent=!0}}]);