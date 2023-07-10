"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[69419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),s=o,f=u["".concat(i,".").concat(s)]||u[s]||m[s]||a;return n?r.createElement(f,d(d({ref:t},p),{},{components:n})):r.createElement(f,d({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,d=new Array(a);d[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,d[1]=c;for(var l=2;l<a;l++)d[l]=n[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},48809:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>i,toc:()=>p});var r=n(87462),o=n(67294),a=n(3905);const d={id:"product-content-item-delete-input",title:"ProductContentItemDeleteInput",hide_table_of_contents:!1},c=void 0,i={unversionedId:"demand/api/graphql-admin/reference/inputs/product-content-item-delete-input",id:"demand/api/graphql-admin/reference/inputs/product-content-item-delete-input",title:"ProductContentItemDeleteInput",description:"Input object for deleting a ProductContentItem",source:"@site/docs/demand/api/graphql-admin/reference/inputs/product-content-item-delete-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/product-content-item-delete-input",permalink:"/demand/api/graphql-admin/reference/inputs/product-content-item-delete-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/product-content-item-delete-input.mdx",tags:[],version:"current",frontMatter:{id:"product-content-item-delete-input",title:"ProductContentItemDeleteInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"ProductContentItemAssociationInCompositeCreateInput",permalink:"/demand/api/graphql-admin/reference/inputs/product-content-item-association-in-composite-create-input"},next:{title:"ProductContentItemUpdateInput",permalink:"/demand/api/graphql-admin/reference/inputs/product-content-item-update-input"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProductContentItemDeleteInput.<b>contentItemId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productcontentitemdeleteinputbcontentitemidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductContentItemDeleteInput.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productcontentitemdeleteinputbproductidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:m,Badge:s};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Input object for deleting a ProductContentItem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input ProductContentItemDeleteInput {\n  contentItemId: ID!\n  productId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productcontentitemdeleteinputbcontentitemidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProductContentItemDeleteInput.",(0,a.kt)("b",null,"contentItemId"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productcontentitemdeleteinputbproductidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProductContentItemDeleteInput.",(0,a.kt)("b",null,"productId"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/delete-product-content-items"},(0,a.kt)("inlineCode",{parentName:"a"},"deleteProductContentItems")),"  ",(0,a.kt)(s,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);