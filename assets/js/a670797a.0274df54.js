"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[45671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||p;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15186:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=n(67294),p=n(3905);const o={id:"app-create-response",title:"AppCreateResponse",hide_table_of_contents:!1},i=void 0,l={unversionedId:"adminidentity/api/graphql-admin/reference/objects/app-create-response",id:"adminidentity/api/graphql-admin/reference/objects/app-create-response",title:"AppCreateResponse",description:"The output when creating an App",source:"@site/docs/adminidentity/api/graphql-admin/reference/objects/app-create-response.mdx",sourceDirName:"adminidentity/api/graphql-admin/reference/objects",slug:"/adminidentity/api/graphql-admin/reference/objects/app-create-response",permalink:"/adminidentity/api/graphql-admin/reference/objects/app-create-response",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/adminidentity/api/graphql-admin/reference/objects/app-create-response.mdx",tags:[],version:"current",frontMatter:{id:"app-create-response",title:"AppCreateResponse",hide_table_of_contents:!1},sidebar:"adminIdentityApiAdminSidebar",previous:{title:"AppConnection",permalink:"/adminidentity/api/graphql-admin/reference/objects/app-connection"},next:{title:"AppEdge",permalink:"/adminidentity/api/graphql-admin/reference/objects/app-edge"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AppCreateResponse.<b>app</b></code><Bullet /><code>App!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-appcreateresponsebappbcodeapp--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AppCreateResponse.<b>appClients</b></code><Bullet /><code>[AppClientResponse!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-appcreateresponsebappclientsbcodeappclientresponse--",level:4},{value:"Returned by",id:"returned-by",level:3}],d=()=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,p.kt)(r.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:d,SpecifiedBy:m,Badge:u};function y(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The output when creating an App"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type AppCreateResponse {\n  app: App!\n  appClients: [AppClientResponse!]!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-appcreateresponsebappbcodeapp--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"AppCreateResponse.",(0,p.kt)("b",null,"app"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/adminidentity/api/graphql-admin/reference/objects/app"},(0,p.kt)("inlineCode",{parentName:"a"},"App!"))," ",(0,p.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h4",{id:"code-style-fontweight-normal-appcreateresponsebappclientsbcodeappclientresponse--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"AppCreateResponse.",(0,p.kt)("b",null,"appClients"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/adminidentity/api/graphql-admin/reference/objects/app-client-response"},(0,p.kt)("inlineCode",{parentName:"a"},"[AppClientResponse!]!"))," ",(0,p.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"returned-by"},"Returned by"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/mutations/create-app"},(0,p.kt)("inlineCode",{parentName:"a"},"createApp")),"  ",(0,p.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);