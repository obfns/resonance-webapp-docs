"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[84304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=l(n),y=a,f=m["".concat(o,".").concat(y)]||m[y]||p[y]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=y;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:a,s[1]=d;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},59029:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=n(67294),i=n(3905);const s={id:"demand-hq-identity-permissions",title:"DemandHqIdentityPermissions",hide_table_of_contents:!1},d=void 0,o={unversionedId:"demand/api/graphql-admin/reference/objects/demand-hq-identity-permissions",id:"demand/api/graphql-admin/reference/objects/demand-hq-identity-permissions",title:"DemandHqIdentityPermissions",description:"Indicates which permissions this Identity possesses on a given DemandHq",source:"@site/docs/demand/api/graphql-admin/reference/objects/demand-hq-identity-permissions.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/demand-hq-identity-permissions",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq-identity-permissions",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/demand-hq-identity-permissions.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-identity-permissions",title:"DemandHqIdentityPermissions",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandHqIdentityEdge",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq-identity-edge"},next:{title:"DemandHqIdentity",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq-identity"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqIdentityPermissions.<b>roles</b></code><Bullet /><code>[String]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqidentitypermissionsbrolesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqIdentityPermissions.<b>scopes</b></code><Bullet /><code>[String]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqidentitypermissionsbscopesbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:m,SpecifiedBy:p,Badge:y};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Indicates which permissions this Identity possesses on a given DemandHq"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type DemandHqIdentityPermissions {\n  roles: [String]!\n  scopes: [String]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitypermissionsbrolesbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DemandHqIdentityPermissions.",(0,i.kt)("b",null,"roles"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String]!"))," ",(0,i.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitypermissionsbscopesbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DemandHqIdentityPermissions.",(0,i.kt)("b",null,"scopes"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String]!"))," ",(0,i.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq-identity"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqIdentity")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);