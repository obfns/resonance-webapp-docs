"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[61170],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(f,g(g({ref:t},s),{},{components:a})):r.createElement(f,g({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,g=new Array(o);g[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,g[1]=i;for(var c=2;c<o;c++)g[c]=a[c];return r.createElement.apply(null,g)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17433:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>g,metadata:()=>l,toc:()=>s});var r=a(87462),n=a(67294),o=a(3905);const g={id:"page-term-aggregations",title:"PageTermAggregations",hide_table_of_contents:!1},i=void 0,l={unversionedId:"demand/api/graphql-admin/reference/objects/page-term-aggregations",id:"demand/api/graphql-admin/reference/objects/page-term-aggregations",title:"PageTermAggregations",description:"A Map of several fields of Page and term aggregations for each",source:"@site/docs/demand/api/graphql-admin/reference/objects/page-term-aggregations.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/page-term-aggregations",permalink:"/demand/api/graphql-admin/reference/objects/page-term-aggregations",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/page-term-aggregations.mdx",tags:[],version:"current",frontMatter:{id:"page-term-aggregations",title:"PageTermAggregations",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"PageTags",permalink:"/demand/api/graphql-admin/reference/objects/page-tags"},next:{title:"PageTypeContentConnection",permalink:"/demand/api/graphql-admin/reference/objects/page-type-content-connection"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PageTermAggregations.<b>authors</b></code><Bullet /><code>[TermAggregation!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-pagetermaggregationsbauthorsbcodetermaggregation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTermAggregations.<b>pageTypes</b></code><Bullet /><code>[TermAggregation!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-pagetermaggregationsbpagetypesbcodetermaggregation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTermAggregations.<b>tags</b></code><Bullet /><code>[TermAggregation!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-pagetermaggregationsbtagsbcodetermaggregation--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:d,SpecifiedBy:p,Badge:m};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Map of several fields of Page and term aggregations for each"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageTermAggregations {\n  authors: [TermAggregation!]\n  pageTypes: [TermAggregation!]\n  tags: [TermAggregation!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetermaggregationsbauthorsbcodetermaggregation--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTermAggregations.",(0,o.kt)("b",null,"authors"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"[TermAggregation!]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetermaggregationsbpagetypesbcodetermaggregation--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTermAggregations.",(0,o.kt)("b",null,"pageTypes"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"[TermAggregation!]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetermaggregationsbtagsbcodetermaggregation--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTermAggregations.",(0,o.kt)("b",null,"tags"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"[TermAggregation!]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq"},(0,o.kt)("inlineCode",{parentName:"a"},"DemandHq")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/page-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"PageConnectionWithSearch")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);