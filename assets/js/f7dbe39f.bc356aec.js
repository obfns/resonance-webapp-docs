"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[39514],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(t),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41467:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],p={id:"string-filter-input",title:"StringFilterInput"},l=void 0,s={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input",id:"developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input",title:"StringFilterInput",description:"Filter using a combination of operator and an array of string values",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"string-filter-input",title:"StringFilterInput"},sidebar:"apisSidebar",previous:{title:"SavedForLaterItemInput",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/saved-for-later-item-input"},next:{title:"changeCustomerCart",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/mutations/change-customer-cart"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>operator</code> (<code>FilterOperator</code>)",id:"operator-filteroperator",level:4},{value:"<code>values</code> (<code>String</code>)",id:"values-string",level:4}],f={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filter using a combination of operator and an array of string values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input StringFilterInput {\n  operator: FilterOperator\n  values: [String!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"operator-filteroperator"},(0,i.kt)("inlineCode",{parentName:"h4"},"operator")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/enums/filter-operator"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterOperator")),")"),(0,i.kt)("h4",{id:"values-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"values")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}d.isMDXComponent=!0}}]);