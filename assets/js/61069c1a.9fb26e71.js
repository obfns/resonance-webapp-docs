"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[46870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||f[g]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9243:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=n(67294),o=n(3905);const l={id:"page-info",title:"PageInfo",hide_table_of_contents:!1},c=void 0,s={unversionedId:"demand/api/graphql-storefront/reference/objects/page-info",id:"demand/api/graphql-storefront/reference/objects/page-info",title:"PageInfo",description:"Information on Pagination",source:"@site/docs/demand/api/graphql-storefront/reference/objects/page-info.mdx",sourceDirName:"demand/api/graphql-storefront/reference/objects",slug:"/demand/api/graphql-storefront/reference/objects/page-info",permalink:"/demand/api/graphql-storefront/reference/objects/page-info",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/objects/page-info.mdx",tags:[],version:"current",frontMatter:{id:"page-info",title:"PageInfo",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"PageContent",permalink:"/demand/api/graphql-storefront/reference/objects/page-content"},next:{title:"PageTags",permalink:"/demand/api/graphql-storefront/reference/objects/page-tags"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>endCursor</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobendcursorbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>hasNextPage</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobhasnextpagebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>hasPreviousPage</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobhaspreviouspagebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageInfo.<b>startCursor</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageinfobstartcursorbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:f,Badge:g};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Information on Pagination"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageInfo {\n  endCursor: String\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pageinfobendcursorbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,o.kt)("b",null,"endCursor"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The cursor to use when paginating forwards (using first/after). Will always be\npopulated regardless of if a next page exists.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pageinfobhasnextpagebcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,o.kt)("b",null,"hasNextPage"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Whether or not using the endCursor will result in more results. Always\npopulated, but will always be false when paginating using last/before.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pageinfobhaspreviouspagebcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,o.kt)("b",null,"hasPreviousPage"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Whether or not using the startCursor will result in more results. Always\npopulated, but will always be false when paginating using first/after.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pageinfobstartcursorbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageInfo.",(0,o.kt)("b",null,"startCursor"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The cursor to use when paginating backwards (using last/before). Will always\nbe populated regardless of if a previous page exists")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/customer-address-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomerAddressConnection")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/product-content-item-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductContentItemConnection")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-collection-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicCollectionConnectionWithSearch")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-collection-type-content-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicCollectionTypeContentConnection")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-nav-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicNavConnection")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-order-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicOrderConnectionWithSearch")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-order-item-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicOrderItemConnection")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-order-transaction-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicOrderTransactionConnection")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-page-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicPageConnectionWithSearch")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-page-type-content-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicPageTypeContentConnection")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-product-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicProductConnectionWithSearch")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-variant-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicVariantConnection")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);