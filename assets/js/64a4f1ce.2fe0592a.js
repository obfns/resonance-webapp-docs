"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[51201],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},o=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(t),k=r,s=m["".concat(c,".").concat(k)]||m[k]||u[k]||i;return t?a.createElement(s,d(d({ref:n},o),{},{components:t})):a.createElement(s,d({ref:n},o))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,d=new Array(i);d[0]=k;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:r,d[1]=l;for(var p=2;p<i;p++)d[p]=t[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4192:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>k,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var a=t(87462),r=t(67294),i=t(3905);const d={id:"demand-hq-quick-link-type",title:"DemandHqQuickLinkType",hide_table_of_contents:!1},l=void 0,c={unversionedId:"demand/api/graphql-admin/reference/enums/demand-hq-quick-link-type",id:"demand/api/graphql-admin/reference/enums/demand-hq-quick-link-type",title:"DemandHqQuickLinkType",description:"Indicates which page the DemandHqQuickLink would live on",source:"@site/docs/demand/api/graphql-admin/reference/enums/demand-hq-quick-link-type.mdx",sourceDirName:"demand/api/graphql-admin/reference/enums",slug:"/demand/api/graphql-admin/reference/enums/demand-hq-quick-link-type",permalink:"/demand/api/graphql-admin/reference/enums/demand-hq-quick-link-type",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/enums/demand-hq-quick-link-type.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-quick-link-type",title:"DemandHqQuickLinkType",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandHqIdentityType",permalink:"/demand/api/graphql-admin/reference/enums/demand-hq-identity-type"},next:{title:"DemandHqStatus",permalink:"/demand/api/graphql-admin/reference/enums/demand-hq-status"}},p={},o=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>DemandHqQuickLinkType.<b>PRODUCT</b></code>",id:"code-style-fontweight-normal-demandhqquicklinktypebproductbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DemandHqQuickLinkType.<b>VARIANT</b></code>",id:"code-style-fontweight-normal-demandhqquicklinktypebvariantbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),s={toc:o,Bullet:m,SpecifiedBy:u,Badge:k};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Indicates which page the DemandHqQuickLink would live on"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum DemandHqQuickLinkType {\n  PRODUCT\n  VARIANT\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqquicklinktypebproductbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DemandHqQuickLinkType.",(0,i.kt)("b",null,"PRODUCT")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqquicklinktypebvariantbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DemandHqQuickLinkType.",(0,i.kt)("b",null,"VARIANT")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/delete-demand-hq-quick-link"},(0,i.kt)("inlineCode",{parentName:"a"},"deleteDemandHqQuickLink")),"  ",(0,i.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq-quick-link"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqQuickLink")),"  ",(0,i.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/inputs/demand-hq-quick-link-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqQuickLinkCreateInput")),"  ",(0,i.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq-quick-link-deleted-id"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqQuickLinkDeletedId")),"  ",(0,i.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/demand-hq-quick-links"},(0,i.kt)("inlineCode",{parentName:"a"},"demandHqQuickLinks")),"  ",(0,i.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/inputs/demand-hq-quick-link-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqQuickLinkUpdateInput")),"  ",(0,i.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);