"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[48152],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),i=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=i(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(t),f=o,g=p["".concat(d,".").concat(f)]||p[f]||m[f]||r;return t?a.createElement(g,c(c({ref:n},s),{},{components:t})):a.createElement(g,c({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<r;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6881:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>s});var a=t(87462),o=t(67294),r=t(3905);const c={id:"nav-connection",title:"NavConnection",hide_table_of_contents:!1},l=void 0,d={unversionedId:"demand/api/graphql-admin/reference/objects/nav-connection",id:"demand/api/graphql-admin/reference/objects/nav-connection",title:"NavConnection",description:"Paginate through Navs",source:"@site/docs/demand/api/graphql-admin/reference/objects/nav-connection.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/nav-connection",permalink:"/demand/api/graphql-admin/reference/objects/nav-connection",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/nav-connection.mdx",tags:[],version:"current",frontMatter:{id:"nav-connection",title:"NavConnection",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandHq",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq"},next:{title:"NavEdge",permalink:"/demand/api/graphql-admin/reference/objects/nav-edge"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>NavConnection.<b>edges</b></code><Bullet /><code>[NavEdge]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-navconnectionbedgesbcodenavedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NavConnection.<b>nodes</b></code><Bullet /><code>[Nav]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-navconnectionbnodesbcodenav--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NavConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-navconnectionbpageinfobcodepageinfo--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:p,SpecifiedBy:m,Badge:f};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Paginate through Navs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type NavConnection {\n  edges: [NavEdge]!\n  nodes: [Nav]!\n  pageInfo: PageInfo!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-navconnectionbedgesbcodenavedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"NavConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/nav-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[NavEdge]!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-navconnectionbnodesbcodenav--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"NavConnection.",(0,r.kt)("b",null,"nodes"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/nav"},(0,r.kt)("inlineCode",{parentName:"a"},"[Nav]!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-navconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"NavConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/nav"},(0,r.kt)("inlineCode",{parentName:"a"},"Nav")),"  ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/storefront"},(0,r.kt)("inlineCode",{parentName:"a"},"Storefront")),"  ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);