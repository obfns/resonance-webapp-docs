"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[55307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,d=function(e,t){if(null==e)return{};var n,a,d={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,d=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=d,y=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(y,r(r({ref:t},s),{},{components:n})):a.createElement(y,r({ref:t},s))}));function y(e,t){var n=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:d,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28433:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>c,assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),d=n(67294),i=n(3905);const r={id:"demand-hq-identity-update-input",title:"DemandHqIdentityUpdateInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"demand/api/graphql-admin/reference/inputs/demand-hq-identity-update-input",id:"demand/api/graphql-admin/reference/inputs/demand-hq-identity-update-input",title:"DemandHqIdentityUpdateInput",description:"ID Fields are required, but all other fields are optional, only included fields will be updated.",source:"@site/docs/demand/api/graphql-admin/reference/inputs/demand-hq-identity-update-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/demand-hq-identity-update-input",permalink:"/demand/api/graphql-admin/reference/inputs/demand-hq-identity-update-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/demand-hq-identity-update-input.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-identity-update-input",title:"DemandHqIdentityUpdateInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandHqIdentityPermissionsInput",permalink:"/demand/api/graphql-admin/reference/inputs/demand-hq-identity-permissions-input"},next:{title:"DemandHqNotificationUserNamesInput",permalink:"/demand/api/graphql-admin/reference/inputs/demand-hq-notification-user-names-input"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqIdentityUpdateInput.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqidentityupdateinputbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqIdentityUpdateInput.<b>identityId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqidentityupdateinputbidentityidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqIdentityUpdateInput.<b>permissions</b></code><Bullet /><code>DemandHqIdentityPermissionsInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-demandhqidentityupdateinputbpermissionsbcodedemandhqidentitypermissionsinput-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,i.kt)(d.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,i.kt)(d.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(d.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:m,SpecifiedBy:c,Badge:u};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ID Fields are required, but all other fields are optional, only included fields will be updated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input DemandHqIdentityUpdateInput {\n  demandHqId: ID!\n  identityId: ID!\n  permissions: DemandHqIdentityPermissionsInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentityupdateinputbdemandhqidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DemandHqIdentityUpdateInput.",(0,i.kt)("b",null,"demandHqId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentityupdateinputbidentityidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DemandHqIdentityUpdateInput.",(0,i.kt)("b",null,"identityId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Could be a userName or an appClientId")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentityupdateinputbpermissionsbcodedemandhqidentitypermissionsinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DemandHqIdentityUpdateInput.",(0,i.kt)("b",null,"permissions"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/demand-hq-identity-permissions-input"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqIdentityPermissionsInput"))," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-demand-hq-identity"},(0,i.kt)("inlineCode",{parentName:"a"},"updateDemandHqIdentity")),"  ",(0,i.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);