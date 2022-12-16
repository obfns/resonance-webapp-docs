"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[25973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=p(n),y=a,m=s["".concat(c,".").concat(y)]||s[y]||u[y]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:a,o[1]=d;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},28198:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=n(67294),i=n(3905);const o={id:"create-partner-identity",title:"createPartnerIdentity",hide_table_of_contents:!1},d=void 0,c={unversionedId:"adminidentity/api/graphql-admin/reference/mutations/create-partner-identity",id:"adminidentity/api/graphql-admin/reference/mutations/create-partner-identity",title:"createPartnerIdentity",description:"Create a new PartnerIdentity (give an Identity permission to a Partner)",source:"@site/docs/adminidentity/api/graphql-admin/reference/mutations/create-partner-identity.mdx",sourceDirName:"adminidentity/api/graphql-admin/reference/mutations",slug:"/adminidentity/api/graphql-admin/reference/mutations/create-partner-identity",permalink:"/adminidentity/api/graphql-admin/reference/mutations/create-partner-identity",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/adminidentity/api/graphql-admin/reference/mutations/create-partner-identity.mdx",tags:[],version:"current",frontMatter:{id:"create-partner-identity",title:"createPartnerIdentity",hide_table_of_contents:!1},sidebar:"adminIdentityApiAdminSidebar",previous:{title:"createApp",permalink:"/adminidentity/api/graphql-admin/reference/mutations/create-app"},next:{title:"createPartner",permalink:"/adminidentity/api/graphql-admin/reference/mutations/create-partner"}},p={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createPartnerIdentity.<b>input</b></code><Bullet /><code>PartnerIdentityCreateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createpartneridentitybinputbcodepartneridentitycreateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>PartnerIdentity</code> <Badge class="secondary" text="object"/>',id:"partneridentity-",level:4}],s=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:s,SpecifiedBy:u,Badge:y};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create a new PartnerIdentity (give an Identity permission to a Partner)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"createPartnerIdentity(\n  input: PartnerIdentityCreateInput!\n): PartnerIdentity!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-createpartneridentitybinputbcodepartneridentitycreateinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"createPartnerIdentity.",(0,i.kt)("b",null,"input"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/adminidentity/api/graphql-admin/reference/inputs/partner-identity-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerIdentityCreateInput!"))," ",(0,i.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"partneridentity-"},(0,i.kt)("a",{parentName:"h4",href:"/adminidentity/api/graphql-admin/reference/objects/partner-identity"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerIdentity"))," ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Type representing a PartnerIdentity, the permissions given to a User for a Partner")))}f.isMDXComponent=!0}}]);