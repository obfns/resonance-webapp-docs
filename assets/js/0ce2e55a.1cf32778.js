"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6440],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=p(n),u=o,h=f["".concat(l,".").concat(u)]||f[u]||s[u]||i;return n?r.createElement(h,a(a({ref:t},d),{},{components:n})):r.createElement(h,a({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25333:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"public-collection-type-content",title:"PublicCollectionTypeContent"},l=void 0,p={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection-type-content",id:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection-type-content",title:"PublicCollectionTypeContent",description:"This holds content specific to a collectionType. This is generally used on a",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection-type-content.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/objects",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection-type-content",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection-type-content",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection-type-content.mdx",tags:[],version:"current",frontMatter:{id:"public-collection-type-content",title:"PublicCollectionTypeContent"},sidebar:"apisSidebar",previous:{title:"PublicCollectionTypeContentEdge",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection-type-content-edge"},next:{title:"PublicCollection",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>collectionType</code> (<code>String</code>)",id:"collectiontype-string",level:4},{value:"<code>collectionTypeContentId</code> (<code>ID</code>)",id:"collectiontypecontentid-id",level:4},{value:"<code>contentAsString</code> (<code>String</code>)",id:"contentasstring-string",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>secondaryContentAsString</code> (<code>String</code>)",id:"secondarycontentasstring-string",level:4},{value:"<code>storefrontId</code> (<code>ID</code>)",id:"storefrontid-id",level:4},{value:"<code>subtitle</code> (<code>String</code>)",id:"subtitle-string",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4}],f={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This holds content specific to a collectionType. This is generally used on a\npage that lists all collections for a collectionType."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicCollectionTypeContent {\n  collectionType: String!\n  collectionTypeContentId: ID!\n  contentAsString: String\n  demandHqId: ID!\n  secondaryContentAsString: String\n  storefrontId: ID!\n  subtitle: String\n  title: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"collectiontype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"collectionType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"collectiontypecontentid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"collectionTypeContentId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"contentasstring-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentAsString")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"secondarycontentasstring-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"secondaryContentAsString")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"storefrontid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"storefrontId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"subtitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"subtitle")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);