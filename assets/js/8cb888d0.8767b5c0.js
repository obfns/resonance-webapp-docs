"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[25250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,u=c["".concat(l,".").concat(m)]||c[m]||f[m]||s;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71360:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>f,assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=n(67294),s=n(3905);const a={id:"storefront-permissions-input",title:"StorefrontPermissionsInput",hide_table_of_contents:!1},i=void 0,l={unversionedId:"demand/api/graphql-admin/reference/inputs/storefront-permissions-input",id:"demand/api/graphql-admin/reference/inputs/storefront-permissions-input",title:"StorefrontPermissionsInput",description:"Necessary fields to set permissions for a Storefront Identity.",source:"@site/docs/demand/api/graphql-admin/reference/inputs/storefront-permissions-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/storefront-permissions-input",permalink:"/demand/api/graphql-admin/reference/inputs/storefront-permissions-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/storefront-permissions-input.mdx",tags:[],version:"current",frontMatter:{id:"storefront-permissions-input",title:"StorefrontPermissionsInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"StorefrontNavSettingsUpsertInput",permalink:"/demand/api/graphql-admin/reference/inputs/storefront-nav-settings-upsert-input"},next:{title:"StorefrontUpdateInput",permalink:"/demand/api/graphql-admin/reference/inputs/storefront-update-input"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StorefrontPermissionsInput.<b>roles</b></code><Bullet /><code>[StorefrontRole!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-storefrontpermissionsinputbrolesbcodestorefrontrole--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StorefrontPermissionsInput.<b>scopes</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-storefrontpermissionsinputbscopesbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:d,Bullet:c,SpecifiedBy:f,Badge:m};function g(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Necessary fields to set permissions for a Storefront Identity."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input StorefrontPermissionsInput {\n  roles: [StorefrontRole!]!\n  scopes: [String!]!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-storefrontpermissionsinputbrolesbcodestorefrontrole--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StorefrontPermissionsInput.",(0,s.kt)("b",null,"roles"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/storefront-role"},(0,s.kt)("inlineCode",{parentName:"a"},"[StorefrontRole!]!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-storefrontpermissionsinputbscopesbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StorefrontPermissionsInput.",(0,s.kt)("b",null,"scopes"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/inputs/storefront-identity-input"},(0,s.kt)("inlineCode",{parentName:"a"},"StorefrontIdentityInput")),"  ",(0,s.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);