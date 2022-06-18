"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[37560],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=s(a),m=r,g=h["".concat(p,".").concat(m)]||h[m]||c[m]||i;return a?n.createElement(g,d(d({ref:t},l),{},{components:a})):n.createElement(g,d({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,d=new Array(i);d[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var s=2;s<i;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},17812:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),d=["components"],o={id:"page",title:"Page"},p=void 0,s={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/page",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/page",title:"Page",description:"A Page is a part of the Demand Domain and represents a page with textual and",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/page.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/page.mdx",tags:[],version:"current",frontMatter:{id:"page",title:"Page"},sidebar:"apisSidebar",previous:{title:"PageTypeContent",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-type-content"},next:{title:"ParsedTag",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/parsed-tag"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>author</code> (<code>String</code>)",id:"author-string",level:4},{value:"<code>content</code> (<code>PageContent</code>)",id:"content-pagecontent",level:4},{value:"<code>contentItemIds</code> (<code>ID</code>)",id:"contentitemids-id",level:4},{value:"<code>contentItems</code> (<code>PageContentItem</code>)",id:"contentitems-pagecontentitem",level:4},{value:"<code>createdAt</code> (<code>Date</code>)",id:"createdat-date",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>descriptionOrExcerpt</code> (<code>String</code>)",id:"descriptionorexcerpt-string",level:4},{value:"<code>pageId</code> (<code>ID</code>)",id:"pageid-id",level:4},{value:"<code>pageType</code> (<code>String</code>)",id:"pagetype-string",level:4},{value:"<code>primaryImageUrl</code> (<code>String</code>)",id:"primaryimageurl-string",level:4},{value:"<code>publishedAt</code> (<code>Date</code>)",id:"publishedat-date",level:4},{value:"<code>seoDescription</code> (<code>String</code>)",id:"seodescription-string",level:4},{value:"<code>seoTitle</code> (<code>String</code>)",id:"seotitle-string",level:4},{value:"<code>slug</code> (<code>String</code>)",id:"slug-string",level:4},{value:"<code>status</code> (<code>PageStatus</code>)",id:"status-pagestatus",level:4},{value:"<code>storefrontIds</code> (<code>ID</code>)",id:"storefrontids-id",level:4},{value:"<code>subtitle</code> (<code>String</code>)",id:"subtitle-string",level:4},{value:"<code>tags</code> (<code>PageTags</code>)",id:"tags-pagetags",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4},{value:"<code>updatedAt</code> (<code>Date</code>)",id:"updatedat-date",level:4},{value:"<code>updatedBy</code> (<code>ID</code>)",id:"updatedby-id",level:4}],h={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'A Page is a part of the Demand Domain and represents a page with textual and\nimage content on it, that has nothing to do with products.\nThis can range from "About Us" pages to Blog articles. Use the "pageType" field to differentiate.\nPages do not have locales specified, but since everything would be different\nanyway, "pageType" can be a composite key with locale in it.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Page {\n  author: String\n  content: PageContent\n  contentItemIds: [ID!]\n  contentItems: [PageContentItem]\n  createdAt: Date!\n  demandHqId: ID!\n  description: String\n  descriptionOrExcerpt(\n  numberOfCharacters: Int\n): String\n  pageId: ID!\n  pageType: String!\n  primaryImageUrl: String\n  publishedAt: Date\n  seoDescription: String\n  seoTitle: String\n  slug: String!\n  status: PageStatus!\n  storefrontIds: [ID]\n  subtitle: String\n  tags: PageTags\n  title: String!\n  updatedAt: Date!\n  updatedBy: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"author-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"author")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The author of the page, limit 256 characters."),(0,i.kt)("h4",{id:"content-pagecontent"},(0,i.kt)("inlineCode",{parentName:"h4"},"content")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-content"},(0,i.kt)("inlineCode",{parentName:"a"},"PageContent")),")"),(0,i.kt)("p",null,"Get the content of the page."),(0,i.kt)("h4",{id:"contentitemids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentItemIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"The ContentItemIds of the Content Items that are associated with this page."),(0,i.kt)("h4",{id:"contentitems-pagecontentitem"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentItems")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-content-item"},(0,i.kt)("inlineCode",{parentName:"a"},"PageContentItem")),")"),(0,i.kt)("p",null,"Get the content items of the page."),(0,i.kt)("h4",{id:"createdat-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A short description of the page, limit 1000 characters."),(0,i.kt)("h4",{id:"descriptionorexcerpt-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"descriptionOrExcerpt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Get the description if it exists, or fallback to the excerpt of content for the page."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"numberofcharacters-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"numberOfCharacters")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"The number of characters to return, defaults to 200."),(0,i.kt)("h4",{id:"pageid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"pagetype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Any string to declare a category of this page, can be used to filter pages, limit 128 characters."),(0,i.kt)("h4",{id:"primaryimageurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"primaryImageUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A primary image url for this page, can be generated from a Page ContentItem."),(0,i.kt)("h4",{id:"publishedat-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"publishedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("p",null,"ISO format date when the page was published. Note that ensuing updates with\nstatus set to PUBLISHED will republish and re-set this date."),(0,i.kt)("h4",{id:"seodescription-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"seoDescription")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Description specific for SEO purposes, limit 170 characters."),(0,i.kt)("h4",{id:"seotitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"seoTitle")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Title specific for SEO purposes, limit 256 characters."),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Slug for the URL for this page. Limit 128 characters."),(0,i.kt)("h4",{id:"status-pagestatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/page-status"},(0,i.kt)("inlineCode",{parentName:"a"},"PageStatus")),")"),(0,i.kt)("p",null,"The status of the page, can be DRAFT or PUBLISHED."),(0,i.kt)("h4",{id:"storefrontids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"storefrontIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"Which storefronts should have access to this page?"),(0,i.kt)("h4",{id:"subtitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"subtitle")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The subtitle of the page, limit 256 characters."),(0,i.kt)("h4",{id:"tags-pagetags"},(0,i.kt)("inlineCode",{parentName:"h4"},"tags")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-tags"},(0,i.kt)("inlineCode",{parentName:"a"},"PageTags")),")"),(0,i.kt)("p",null,"Get the tags of the page."),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The title of the page, limit 256 characters."),(0,i.kt)("h4",{id:"updatedat-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"updatedby-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}m.isMDXComponent=!0}}]);