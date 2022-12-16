"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[99946],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=m(a),y=r,u=c["".concat(l,".").concat(y)]||c[y]||o[y]||i;return a?n.createElement(u,p(p({ref:t},s),{},{components:a})):n.createElement(u,p({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=y;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:r,p[1]=d;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},76935:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>c,SpecifiedBy:()=>o,assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var n=a(87462),r=a(67294),i=a(3905);const p={id:"string",title:"String",hide_table_of_contents:!1},d=void 0,l={unversionedId:"adminidentity/api/graphql-admin/reference/scalars/string",id:"adminidentity/api/graphql-admin/reference/scalars/string",title:"String",description:"The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",source:"@site/docs/adminidentity/api/graphql-admin/reference/scalars/string.mdx",sourceDirName:"adminidentity/api/graphql-admin/reference/scalars",slug:"/adminidentity/api/graphql-admin/reference/scalars/string",permalink:"/adminidentity/api/graphql-admin/reference/scalars/string",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/adminidentity/api/graphql-admin/reference/scalars/string.mdx",tags:[],version:"current",frontMatter:{id:"string",title:"String",hide_table_of_contents:!1},sidebar:"adminIdentityApiAdminSidebar",previous:{title:"Int",permalink:"/adminidentity/api/graphql-admin/reference/scalars/int"}},m={},s=[{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],c=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),o=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:c,SpecifiedBy:o,Badge:y};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar String\n")),(0,i.kt)("h3",{id:"returned-by"},"Returned by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/queries/empty"},(0,i.kt)("inlineCode",{parentName:"a"},"_empty")),"  ",(0,i.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/mutations/make-empty"},(0,i.kt)("inlineCode",{parentName:"a"},"_makeEmpty")),"  ",(0,i.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/mutations/make-empty"},(0,i.kt)("inlineCode",{parentName:"a"},"_makeEmpty")),"  ",(0,i.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/app"},(0,i.kt)("inlineCode",{parentName:"a"},"App")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/app-client-response"},(0,i.kt)("inlineCode",{parentName:"a"},"AppClientResponse")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/inputs/app-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AppCreateInput")),"  ",(0,i.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/inputs/app-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AppUpdateInput")),"  ",(0,i.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/directives/deprecated"},(0,i.kt)("inlineCode",{parentName:"a"},"deprecated")),"  ",(0,i.kt)(y,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/mutations/invite-user"},(0,i.kt)("inlineCode",{parentName:"a"},"inviteUser")),"  ",(0,i.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/queries/my-notifications"},(0,i.kt)("inlineCode",{parentName:"a"},"myNotifications")),"  ",(0,i.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/partner"},(0,i.kt)("inlineCode",{parentName:"a"},"Partner")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/inputs/partner-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerCreateInput")),"  ",(0,i.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/partner-identity-permissions"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerIdentityPermissions")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/inputs/partner-identity-permissions-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerIdentityPermissionsInput")),"  ",(0,i.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/partner-notification-user-names"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerNotificationUserNames")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/inputs/partner-notification-user-names-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerNotificationUserNamesInput")),"  ",(0,i.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/queries/partners"},(0,i.kt)("inlineCode",{parentName:"a"},"partners")),"  ",(0,i.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/inputs/partner-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerUpdateInput")),"  ",(0,i.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/public-app"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicApp")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/queries/public-apps"},(0,i.kt)("inlineCode",{parentName:"a"},"publicApps")),"  ",(0,i.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/queries/public-identities"},(0,i.kt)("inlineCode",{parentName:"a"},"publicIdentities")),"  ",(0,i.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/public-identity"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicIdentity")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/queries/query-public-identity-by-email"},(0,i.kt)("inlineCode",{parentName:"a"},"queryPublicIdentityByEmail")),"  ",(0,i.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/directives/specified-by"},(0,i.kt)("inlineCode",{parentName:"a"},"specifiedBy")),"  ",(0,i.kt)(y,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/user-notification"},(0,i.kt)("inlineCode",{parentName:"a"},"UserNotification")),"  ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/inputs/user-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"UserUpdateInput")),"  ",(0,i.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);