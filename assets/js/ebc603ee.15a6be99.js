"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[34466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,f=c["".concat(o,".").concat(k)]||c[k]||u[k]||i;return n?r.createElement(f,p(p({ref:t},d),{},{components:n})):r.createElement(f,p({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,p=new Array(i);p[0]=k;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[c]="string"==typeof e?e:l,p[1]=a;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2395:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>k,Bullet:()=>c,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var r=n(87462),l=n(67294),i=n(3905);const p={id:"supplier-quick-link-deleted-response",title:"SupplierQuickLinkDeletedResponse",hide_table_of_contents:!1},a=void 0,o={unversionedId:"supply/api/graphql-admin/reference/objects/supplier-quick-link-deleted-response",id:"supply/api/graphql-admin/reference/objects/supplier-quick-link-deleted-response",title:"SupplierQuickLinkDeletedResponse",description:"The response shape when a SupplierQuickLink is deleted",source:"@site/docs/supply/api/graphql-admin/reference/objects/supplier-quick-link-deleted-response.mdx",sourceDirName:"supply/api/graphql-admin/reference/objects",slug:"/supply/api/graphql-admin/reference/objects/supplier-quick-link-deleted-response",permalink:"/supply/api/graphql-admin/reference/objects/supplier-quick-link-deleted-response",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/objects/supplier-quick-link-deleted-response.mdx",tags:[],version:"current",frontMatter:{id:"supplier-quick-link-deleted-response",title:"SupplierQuickLinkDeletedResponse",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierQuickLinkDeletedId",permalink:"/supply/api/graphql-admin/reference/objects/supplier-quick-link-deleted-id"},next:{title:"SupplierQuickLinkEdge",permalink:"/supply/api/graphql-admin/reference/objects/supplier-quick-link-edge"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierQuickLinkDeletedResponse.<b>deletedId</b></code><Bullet /><code>SupplierQuickLinkDeletedId!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplierquicklinkdeletedresponsebdeletedidbcodesupplierquicklinkdeletedid--",level:4},{value:"Returned by",id:"returned-by",level:3}],c=()=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(l.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:c,SpecifiedBy:u,Badge:k};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The response shape when a SupplierQuickLink is deleted"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierQuickLinkDeletedResponse {\n  deletedId: SupplierQuickLinkDeletedId!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplierquicklinkdeletedresponsebdeletedidbcodesupplierquicklinkdeletedid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SupplierQuickLinkDeletedResponse.",(0,i.kt)("b",null,"deletedId"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-quick-link-deleted-id"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkDeletedId!"))," ",(0,i.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"returned-by"},"Returned by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/delete-supplier-quick-link"},(0,i.kt)("inlineCode",{parentName:"a"},"deleteSupplierQuickLink")),"  ",(0,i.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);