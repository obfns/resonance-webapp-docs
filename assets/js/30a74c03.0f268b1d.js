"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9380],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return f}});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),p=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=t,g=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return r?a.createElement(g,i(i({ref:n},d),{},{components:r})):a.createElement(g,i({ref:n},d))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84809:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return d},toc:function(){return c},default:function(){return f}});var a=r(87462),t=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"page-info",title:"PageInfo"},l=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/page-info",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/page-info",title:"PageInfo",description:"Information on Pagination",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/page-info.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-info",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-info",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/page-info.mdx",tags:[],version:"current",frontMatter:{id:"page-info",title:"PageInfo"},sidebar:"apisSidebar",previous:{title:"PageImageFromFileResponse",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-image-from-file-response"},next:{title:"PageTags",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-tags"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>endCursor</code> (<code>String</code>)",id:"endcursor-string",level:4},{value:"<code>hasNextPage</code> (<code>Boolean</code>)",id:"hasnextpage-boolean",level:4},{value:"<code>hasPreviousPage</code> (<code>Boolean</code>)",id:"haspreviouspage-boolean",level:4},{value:"<code>startCursor</code> (<code>String</code>)",id:"startcursor-string",level:4}],u={toc:c};function f(e){var n=e.components,r=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Information on Pagination"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageInfo {\n  endCursor: String\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"endcursor-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"endCursor")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The cursor to use when paginating forwards (using first/after). Will always be\npopulated regardless of if a next page exists."),(0,o.kt)("h4",{id:"hasnextpage-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"hasNextPage")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"Whether or not using the endCursor will result in more results. Always\npopulated, but will always be false when paginating using last/before."),(0,o.kt)("h4",{id:"haspreviouspage-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"hasPreviousPage")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"Whether or not using the startCursor will result in more results. Always\npopulated, but will always be false when paginating using first/after."),(0,o.kt)("h4",{id:"startcursor-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"startCursor")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The cursor to use when paginating backwards (using last/before). Will always\nbe populated regardless of if a previous page exists"))}f.isMDXComponent=!0}}]);