"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[40051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,y=c["".concat(o,".").concat(u)]||c[u]||s[u]||d;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,i=new Array(d);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<d;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46396:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(87462),r=n(67294),d=n(3905);const i={id:"demand-hq-identity-type",title:"DemandHqIdentityType",hide_table_of_contents:!1},l=void 0,o={unversionedId:"demand/api/graphql-admin/reference/enums/demand-hq-identity-type",id:"demand/api/graphql-admin/reference/enums/demand-hq-identity-type",title:"DemandHqIdentityType",description:"Indicates whether the user type is an app or human user",source:"@site/docs/demand/api/graphql-admin/reference/enums/demand-hq-identity-type.mdx",sourceDirName:"demand/api/graphql-admin/reference/enums",slug:"/demand/api/graphql-admin/reference/enums/demand-hq-identity-type",permalink:"/demand/api/graphql-admin/reference/enums/demand-hq-identity-type",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/enums/demand-hq-identity-type.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-identity-type",title:"DemandHqIdentityType",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandEntityStatus",permalink:"/demand/api/graphql-admin/reference/enums/demand-entity-status"},next:{title:"DemandHqStatus",permalink:"/demand/api/graphql-admin/reference/enums/demand-hq-status"}},p={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>DemandHqIdentityType.<b>APPCLIENT</b></code>",id:"code-style-fontweight-normal-demandhqidentitytypebappclientbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DemandHqIdentityType.<b>USER</b></code>",id:"code-style-fontweight-normal-demandhqidentitytypebuserbcode",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:m,Bullet:c,SpecifiedBy:s,Badge:u};function f(e){let{components:t,...n}=e;return(0,d.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Indicates whether the user type is an app or human user"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"enum DemandHqIdentityType {\n  APPCLIENT\n  USER\n}\n")),(0,d.kt)("h3",{id:"values"},"Values"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitytypebappclientbcode"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"DemandHqIdentityType.",(0,d.kt)("b",null,"APPCLIENT")))),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitytypebuserbcode"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"DemandHqIdentityType.",(0,d.kt)("b",null,"USER")))),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/demand-hq-identities"},(0,d.kt)("inlineCode",{parentName:"a"},"demandHqIdentities")),"  ",(0,d.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq-identity"},(0,d.kt)("inlineCode",{parentName:"a"},"DemandHqIdentity")),"  ",(0,d.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/inputs/demand-hq-identity-create-input"},(0,d.kt)("inlineCode",{parentName:"a"},"DemandHqIdentityCreateInput")),"  ",(0,d.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);