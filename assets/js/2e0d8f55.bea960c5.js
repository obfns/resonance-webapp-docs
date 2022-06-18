"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[59457],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=s(t),u=a,m=h["".concat(p,".").concat(u)]||h[u]||c[u]||i;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},82420:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={id:"public-nav",title:"PublicNav"},p=void 0,s={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-nav",id:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-nav",title:"PublicNav",description:"Nav is an item within a navigational heirarchy of some kind, most often viewed as a menu.",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-nav.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/objects",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-nav",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-nav",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-nav.mdx",tags:[],version:"current",frontMatter:{id:"public-nav",title:"PublicNav"},sidebar:"apisSidebar",previous:{title:"PublicNavEdge",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-nav-edge"},next:{title:"PublicPageConnectionWithSearch",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-page-connection-with-search"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>href</code> (<code>String</code>)",id:"href-string",level:4},{value:"<code>label</code> (<code>String</code>)",id:"label-string",level:4},{value:"<code>linkSlug</code> (<code>String</code>)",id:"linkslug-string",level:4},{value:"<code>linkType</code> (<code>String</code>)",id:"linktype-string",level:4},{value:"<code>navId</code> (<code>ID</code>)",id:"navid-id",level:4},{value:"<code>navLevel</code> (<code>Int</code>)",id:"navlevel-int",level:4},{value:"<code>navType</code> (<code>String</code>)",id:"navtype-string",level:4},{value:"<code>navs</code> (<code>PublicNavConnection</code>)",id:"navs-publicnavconnection",level:4},{value:"<code>parentNavId</code> (<code>ID</code>)",id:"parentnavid-id",level:4},{value:"<code>position</code> (<code>Int</code>)",id:"position-int",level:4},{value:"<code>storefrontId</code> (<code>ID</code>)",id:"storefrontid-id",level:4}],h={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nav is an item within a navigational heirarchy of some kind, most often viewed as a menu."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicNav {\n  demandHqId: ID!\n  href: String!\n  label: String!\n  linkSlug: String!\n  linkType: String!\n  navId: ID!\n  navLevel: Int!\n  navType: String!\n  navs(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): PublicNavConnection!\n  parentNavId: ID\n  position: Int\n  storefrontId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"href-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"href")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Where this Nav link should lead to. Can be an absolute or relative url. 768 character limit."),(0,i.kt)("h4",{id:"label-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"label")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The label for this Nav, limit 64 characters."),(0,i.kt)("h4",{id:"linkslug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"linkSlug")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,'This has two primary purposes:\nTo make this Nav "lookupable" in combination with linkType.\nTo make entities aware they are being referenced. This is done with the\nreserved system linkTypes in combination with entitySlugs (i.e. Collection and\na collection slug).'),(0,i.kt)("h4",{id:"linktype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"linkType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,'This can be any string, but certain values have special meaning (like "collection").\nThese are restricted to the specified values in NavSettings.'),(0,i.kt)("h4",{id:"navid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"navId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"navlevel-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"navLevel")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"A number, representing where this Nav resides in the heirarchy. Immutable, and\nlimited to 0 through 6. 0 is the top level, 1 is the second level, etc."),(0,i.kt)("h4",{id:"navtype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"navType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A string indicating the purpose of this Nav hierarchy, must match parentNav if applicable. Limit 128 characters."),(0,i.kt)("h4",{id:"navs-publicnavconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"navs")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-nav-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicNavConnection")),")"),(0,i.kt)("p",null,"List Child Navs for a Nav."),(0,i.kt)("p",null,"Requires the publicnav/read permission."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("h4",{id:"parentnavid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"parentNavId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"All Navs besides the root (Level 0) have a parentNavId. Immutable."),(0,i.kt)("h4",{id:"position-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"position")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Where this Nav should be located with respect to other Navs. Need not be sequential or unique."),(0,i.kt)("h4",{id:"storefrontid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"storefrontId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}u.isMDXComponent=!0}}]);