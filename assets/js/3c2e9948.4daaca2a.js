"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[96100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97485:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>l,assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(87462),i=n(67294),r=n(3905);const o={id:"update-user-notification-status",title:"updateUserNotificationStatus",hide_table_of_contents:!1},s=void 0,u={unversionedId:"adminidentity/api/graphql-admin/reference/mutations/update-user-notification-status",id:"adminidentity/api/graphql-admin/reference/mutations/update-user-notification-status",title:"updateUserNotificationStatus",description:"Update the status of a UserNotification",source:"@site/docs/adminidentity/api/graphql-admin/reference/mutations/update-user-notification-status.mdx",sourceDirName:"adminidentity/api/graphql-admin/reference/mutations",slug:"/adminidentity/api/graphql-admin/reference/mutations/update-user-notification-status",permalink:"/adminidentity/api/graphql-admin/reference/mutations/update-user-notification-status",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/adminidentity/api/graphql-admin/reference/mutations/update-user-notification-status.mdx",tags:[],version:"current",frontMatter:{id:"update-user-notification-status",title:"updateUserNotificationStatus",hide_table_of_contents:!1},sidebar:"adminIdentityApiAdminSidebar",previous:{title:"updatePartner",permalink:"/adminidentity/api/graphql-admin/reference/mutations/update-partner"},next:{title:"updateUser",permalink:"/adminidentity/api/graphql-admin/reference/mutations/update-user"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateUserNotificationStatus.<b>input</b></code><Bullet /><code>UserNotificationUpdateStatusInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateusernotificationstatusbinputbcodeusernotificationupdatestatusinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UserNotification</code> <Badge class="secondary" text="object"/>',id:"usernotification-",level:4}],d=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),l=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:l,Badge:f};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Update the status of a UserNotification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"updateUserNotificationStatus(\n  input: UserNotificationUpdateStatusInput!\n): UserNotification!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateusernotificationstatusbinputbcodeusernotificationupdatestatusinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"updateUserNotificationStatus.",(0,r.kt)("b",null,"input"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/adminidentity/api/graphql-admin/reference/inputs/user-notification-update-status-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UserNotificationUpdateStatusInput!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"usernotification-"},(0,r.kt)("a",{parentName:"h4",href:"/adminidentity/api/graphql-admin/reference/objects/user-notification"},(0,r.kt)("inlineCode",{parentName:"a"},"UserNotification"))," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Represents a notification specific to a User")))}y.isMDXComponent=!0}}]);