"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[55214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||f[u]||l;return n?o.createElement(m,c(c({ref:t},p),{},{components:n})):o.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[d]="string"==typeof e?e:r,c[1]=a;for(var s=2;s<l;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27218:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var o=n(87462),r=n(67294),l=n(3905);const c={id:"collection-type-contents",title:"collectionTypeContents",hide_table_of_contents:!1},a=void 0,i={unversionedId:"demand/api/graphql-storefront/reference/queries/collection-type-contents",id:"demand/api/graphql-storefront/reference/queries/collection-type-contents",title:"collectionTypeContents",description:"Get all collectionTypeContents for a storefront.",source:"@site/docs/demand/api/graphql-storefront/reference/queries/collection-type-contents.mdx",sourceDirName:"demand/api/graphql-storefront/reference/queries",slug:"/demand/api/graphql-storefront/reference/queries/collection-type-contents",permalink:"/demand/api/graphql-storefront/reference/queries/collection-type-contents",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/queries/collection-type-contents.mdx",tags:[],version:"current",frontMatter:{id:"collection-type-contents",title:"collectionTypeContents",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"collectionTypeContent",permalink:"/demand/api/graphql-storefront/reference/queries/collection-type-content"},next:{title:"collection",permalink:"/demand/api/graphql-storefront/reference/queries/collection"}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>collectionTypeContents.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-collectiontypecontentsbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collectionTypeContents.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-collectiontypecontentsbbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collectionTypeContents.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-collectiontypecontentsbfirstbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collectionTypeContents.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-collectiontypecontentsblastbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>PublicCollectionTypeContentConnection</code> <Badge class="secondary" text="object"/>',id:"publiccollectiontypecontentconnection-",level:4}],d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:f,Badge:u};function y(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Get all collectionTypeContents for a storefront."),(0,l.kt)("p",null,"Requires the collectiontypecontent/read scope on the associated DemandHq"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"collectionTypeContents(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): PublicCollectionTypeContentConnection!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-collectiontypecontentsbafterbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"collectionTypeContents.",(0,l.kt)("b",null,"after"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-collectiontypecontentsbbeforebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"collectionTypeContents.",(0,l.kt)("b",null,"before"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-collectiontypecontentsbfirstbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"collectionTypeContents.",(0,l.kt)("b",null,"first"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-collectiontypecontentsblastbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"collectionTypeContents.",(0,l.kt)("b",null,"last"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"publiccollectiontypecontentconnection-"},(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/public-collection-type-content-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"PublicCollectionTypeContentConnection"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Pagination object for PublicCollectionTypeContent.")))}y.isMDXComponent=!0}}]);