"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[52793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=d(n),h=o,m=g["".concat(l,".").concat(h)]||g[h]||p[h]||r;return n?a.createElement(m,c(c({ref:t},s),{},{components:n})):a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:o,c[1]=i;for(var d=2;d<r;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77232:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>g,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var a=n(87462),o=n(67294),r=n(3905);const c={id:"page-connection-with-search",title:"PageConnectionWithSearch",hide_table_of_contents:!1},i=void 0,l={unversionedId:"demand/api/graphql-admin/reference/objects/page-connection-with-search",id:"demand/api/graphql-admin/reference/objects/page-connection-with-search",title:"PageConnectionWithSearch",description:"Paginate through Pages",source:"@site/docs/demand/api/graphql-admin/reference/objects/page-connection-with-search.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/page-connection-with-search",permalink:"/demand/api/graphql-admin/reference/objects/page-connection-with-search",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/page-connection-with-search.mdx",tags:[],version:"current",frontMatter:{id:"page-connection-with-search",title:"PageConnectionWithSearch",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"Order",permalink:"/demand/api/graphql-admin/reference/objects/order"},next:{title:"PageContentItem",permalink:"/demand/api/graphql-admin/reference/objects/page-content-item"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PageConnectionWithSearch.<b>edges</b></code><Bullet /><code>[PageEdge]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-pageconnectionwithsearchbedgesbcodepageedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageConnectionWithSearch.<b>nodes</b></code><Bullet /><code>[Page]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-pageconnectionwithsearchbnodesbcodepage--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageConnectionWithSearch.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-pageconnectionwithsearchbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageConnectionWithSearch.<b>querySuggestions</b></code><Bullet /><code>JSON</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pageconnectionwithsearchbquerysuggestionsbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageConnectionWithSearch.<b>termAggregations</b></code><Bullet /><code>PageTermAggregations</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-pageconnectionwithsearchbtermaggregationsbcodepagetermaggregations-",level:4},{value:"Member of",id:"member-of",level:3}],g=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:g,SpecifiedBy:p,Badge:h};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Paginate through Pages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageConnectionWithSearch {\n  edges: [PageEdge]!\n  nodes: [Page]!\n  pageInfo: PageInfo!\n  querySuggestions: JSON\n  termAggregations: PageTermAggregations\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pageconnectionwithsearchbedgesbcodepageedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PageConnectionWithSearch.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/page-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[PageEdge]!"))," ",(0,r.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pageconnectionwithsearchbnodesbcodepage--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PageConnectionWithSearch.",(0,r.kt)("b",null,"nodes"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/page"},(0,r.kt)("inlineCode",{parentName:"a"},"[Page]!"))," ",(0,r.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pageconnectionwithsearchbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PageConnectionWithSearch.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pageconnectionwithsearchbquerysuggestionsbcodejson-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PageConnectionWithSearch.",(0,r.kt)("b",null,"querySuggestions"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/json"},(0,r.kt)("inlineCode",{parentName:"a"},"JSON"))," ",(0,r.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is an object with terms in the query as keys, and a suggestion for that\nterm as the value. This is often referred to as 'Did you mean?'")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pageconnectionwithsearchbtermaggregationsbcodepagetermaggregations-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PageConnectionWithSearch.",(0,r.kt)("b",null,"termAggregations"))),(0,r.kt)(g,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/page-term-aggregations"},(0,r.kt)("inlineCode",{parentName:"a"},"PageTermAggregations"))," ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Values and the number of times they occur for the results of the query. These\nwill be the same for every page of a query, and should only be fetched on the first page.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq"},(0,r.kt)("inlineCode",{parentName:"a"},"DemandHq")),"  ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);