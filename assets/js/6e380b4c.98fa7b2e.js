"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[62804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(n),u=o,f=s["".concat(l,".").concat(u)]||s[u]||m[u]||a;return n?r.createElement(f,d(d({ref:t},p),{},{components:n})):r.createElement(f,d({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,d=new Array(a);d[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,d[1]=c;for(var i=2;i<a;i++)d[i]=n[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28289:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var r=n(87462),o=n(67294),a=n(3905);const d={id:"product-content-item-delete-response",title:"ProductContentItemDeleteResponse",hide_table_of_contents:!1},c=void 0,l={unversionedId:"demand/api/graphql-admin/reference/objects/product-content-item-delete-response",id:"demand/api/graphql-admin/reference/objects/product-content-item-delete-response",title:"ProductContentItemDeleteResponse",description:"The response type from a ProductContentItem delete mutation",source:"@site/docs/demand/api/graphql-admin/reference/objects/product-content-item-delete-response.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/product-content-item-delete-response",permalink:"/demand/api/graphql-admin/reference/objects/product-content-item-delete-response",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/product-content-item-delete-response.mdx",tags:[],version:"current",frontMatter:{id:"product-content-item-delete-response",title:"ProductContentItemDeleteResponse",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"ProductContentItemDeleteId",permalink:"/demand/api/graphql-admin/reference/objects/product-content-item-delete-id"},next:{title:"ProductContentItemEdge",permalink:"/demand/api/graphql-admin/reference/objects/product-content-item-edge"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProductContentItemDeleteResponse.<b>deletedId</b></code><Bullet /><code>ProductContentItemDeleteId</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-productcontentitemdeleteresponsebdeletedidbcodeproductcontentitemdeleteid-",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:s,SpecifiedBy:m,Badge:u};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The response type from a ProductContentItem delete mutation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProductContentItemDeleteResponse {\n  deletedId: ProductContentItemDeleteId\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productcontentitemdeleteresponsebdeletedidbcodeproductcontentitemdeleteid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProductContentItemDeleteResponse.",(0,a.kt)("b",null,"deletedId"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/product-content-item-delete-id"},(0,a.kt)("inlineCode",{parentName:"a"},"ProductContentItemDeleteId"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/delete-product-content-item"},(0,a.kt)("inlineCode",{parentName:"a"},"deleteProductContentItem")),"  ",(0,a.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);