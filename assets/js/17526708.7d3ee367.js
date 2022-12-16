"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[24376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,g=s["".concat(d,".").concat(u)]||s[u]||m[u]||o;return n?a.createElement(g,l(l({ref:t},i),{},{components:n})):a.createElement(g,l({ref:t},i))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[s]="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23545:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var a=n(87462),r=n(67294),o=n(3905);const l={id:"delete-page-type-content",title:"deletePageTypeContent",hide_table_of_contents:!1},p=void 0,d={unversionedId:"demand/api/graphql-admin/reference/mutations/delete-page-type-content",id:"demand/api/graphql-admin/reference/mutations/delete-page-type-content",title:"deletePageTypeContent",description:"Delete a PageTypeContent.",source:"@site/docs/demand/api/graphql-admin/reference/mutations/delete-page-type-content.mdx",sourceDirName:"demand/api/graphql-admin/reference/mutations",slug:"/demand/api/graphql-admin/reference/mutations/delete-page-type-content",permalink:"/demand/api/graphql-admin/reference/mutations/delete-page-type-content",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/mutations/delete-page-type-content.mdx",tags:[],version:"current",frontMatter:{id:"delete-page-type-content",title:"deletePageTypeContent",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"deletePageContentItem",permalink:"/demand/api/graphql-admin/reference/mutations/delete-page-content-item"},next:{title:"deletePage",permalink:"/demand/api/graphql-admin/reference/mutations/delete-page"}},c={},i=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deletePageTypeContent.<b>pageTypeContentId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletepagetypecontentbpagetypecontentidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>PageTypeContentDeletedResponse</code> <Badge class="secondary" text="object"/>',id:"pagetypecontentdeletedresponse-",level:4}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:i,Bullet:s,SpecifiedBy:m,Badge:u};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Delete a PageTypeContent."),(0,o.kt)("p",null,"Requires the pagetypecontent/write scope on the associated DemandHq."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"deletePageTypeContent(\n  pageTypeContentId: ID!\n): PageTypeContentDeletedResponse!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-deletepagetypecontentbpagetypecontentidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"deletePageTypeContent.",(0,o.kt)("b",null,"pageTypeContentId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"pagetypecontentdeletedresponse-"},(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/page-type-content-deleted-response"},(0,o.kt)("inlineCode",{parentName:"a"},"PageTypeContentDeletedResponse"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is the response from a deletePageTypeContent mutation.")))}y.isMDXComponent=!0}}]);