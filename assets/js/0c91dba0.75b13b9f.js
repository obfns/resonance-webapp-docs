"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[33929],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13899:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={id:"collection-update-input",title:"CollectionUpdateInput"},d=void 0,c={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-update-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-update-input",title:"CollectionUpdateInput",description:"ID Fields are required, but all other fields are optional, only included fields will be updated.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-update-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-update-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-update-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-update-input.mdx",tags:[],version:"current",frontMatter:{id:"collection-update-input",title:"CollectionUpdateInput"},sidebar:"apisSidebar",previous:{title:"CollectionRulesInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rules-input"},next:{title:"CustomerAddressCreateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-address-create-input"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>collectionId</code> (<code>ID</code>)",id:"collectionid-id",level:4},{value:"<code>collectionType</code> (<code>String</code>)",id:"collectiontype-string",level:4},{value:"<code>contentItemIds</code> (<code>ID</code>)",id:"contentitemids-id",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>primaryImageUrl</code> (<code>String</code>)",id:"primaryimageurl-string",level:4},{value:"<code>publishedAt</code> (<code>Date</code>)",id:"publishedat-date",level:4},{value:"<code>rules</code> (<code>CollectionRulesInput</code>)",id:"rules-collectionrulesinput",level:4},{value:"<code>seoDescription</code> (<code>String</code>)",id:"seodescription-string",level:4},{value:"<code>seoTitle</code> (<code>String</code>)",id:"seotitle-string",level:4},{value:"<code>slug</code> (<code>String</code>)",id:"slug-string",level:4},{value:"<code>status</code> (<code>CollectionStatus</code>)",id:"status-collectionstatus",level:4},{value:"<code>storefrontIds</code> (<code>ID</code>)",id:"storefrontids-id",level:4},{value:"<code>subtitle</code> (<code>String</code>)",id:"subtitle-string",level:4},{value:"<code>tags</code> (<code>String</code>)",id:"tags-string",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4}],u={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ID Fields are required, but all other fields are optional, only included fields will be updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input CollectionUpdateInput {\n  collectionId: ID!\n  collectionType: String\n  contentItemIds: [ID!]\n  description: String\n  primaryImageUrl: String\n  publishedAt: Date\n  rules: CollectionRulesInput\n  seoDescription: String\n  seoTitle: String\n  slug: String\n  status: CollectionStatus\n  storefrontIds: [ID]\n  subtitle: String\n  tags: [String]\n  title: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"collectionid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"collectionId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"collectiontype-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"collectionType")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Any string to declare a category of this collection, can be used to filter collections, limit 128 characters."),(0,a.kt)("h4",{id:"contentitemids-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"contentItemIds")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("p",null,"The ContentItemIds of the Content Items that are associated with this collection."),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A short description of the collection, limit 1000 characters."),(0,a.kt)("h4",{id:"primaryimageurl-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"primaryImageUrl")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A primary image url for this collection, can be generated from a Collection ContentItem."),(0,a.kt)("h4",{id:"publishedat-date"},(0,a.kt)("inlineCode",{parentName:"h4"},"publishedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,a.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,a.kt)("p",null,"ISO format date when the collection was published. Note that ensuing updates\nwith status set to PUBLISHED will republish and re-set this date."),(0,a.kt)("h4",{id:"rules-collectionrulesinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"rules")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rules-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CollectionRulesInput")),")"),(0,a.kt)("p",null,"A map of rules to determine whether a Product should be part of this Collection."),(0,a.kt)("h4",{id:"seodescription-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"seoDescription")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Description specific for SEO purposes, limit 170 characters."),(0,a.kt)("h4",{id:"seotitle-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"seoTitle")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Title specific for SEO purposes, limit 256 characters."),(0,a.kt)("h4",{id:"slug-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Slug for the URL for this collection. Limit 128 characters."),(0,a.kt)("h4",{id:"status-collectionstatus"},(0,a.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/collection-status"},(0,a.kt)("inlineCode",{parentName:"a"},"CollectionStatus")),")"),(0,a.kt)("p",null,"The status of the collection, can be DRAFT or PUBLISHED."),(0,a.kt)("h4",{id:"storefrontids-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"storefrontIds")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("p",null,"Which storefronts should have access to this collection?"),(0,a.kt)("h4",{id:"subtitle-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"subtitle")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The subtitle of the collection, limit 256 characters."),(0,a.kt)("h4",{id:"tags-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"tags")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"title-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The title of the collection, limit 256 characters."))}h.isMDXComponent=!0}}]);