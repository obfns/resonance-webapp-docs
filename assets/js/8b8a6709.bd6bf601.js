"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[54963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||a;return n?r.createElement(f,d(d({ref:t},p),{},{components:n})):r.createElement(f,d({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,d=new Array(a);d[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,d[1]=l;for(var i=2;i<a;i++)d[i]=n[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83255:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var r=n(87462),o=n(67294),a=n(3905);const d={id:"delete-product-content-item",title:"deleteProductContentItem",hide_table_of_contents:!1},l=void 0,c={unversionedId:"demand/api/graphql-admin/reference/mutations/delete-product-content-item",id:"demand/api/graphql-admin/reference/mutations/delete-product-content-item",title:"deleteProductContentItem",description:"Delete an existing ProductContentItem",source:"@site/docs/demand/api/graphql-admin/reference/mutations/delete-product-content-item.mdx",sourceDirName:"demand/api/graphql-admin/reference/mutations",slug:"/demand/api/graphql-admin/reference/mutations/delete-product-content-item",permalink:"/demand/api/graphql-admin/reference/mutations/delete-product-content-item",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/mutations/delete-product-content-item.mdx",tags:[],version:"current",frontMatter:{id:"delete-product-content-item",title:"deleteProductContentItem",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"deletePage",permalink:"/demand/api/graphql-admin/reference/mutations/delete-page"},next:{title:"deleteProduct",permalink:"/demand/api/graphql-admin/reference/mutations/delete-product"}},i={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteProductContentItem.<b>contentItemId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deleteproductcontentitembcontentitemidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>deleteProductContentItem.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deleteproductcontentitembproductidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ProductContentItemDeleteResponse</code> <Badge class="secondary" text="object"/>',id:"productcontentitemdeleteresponse-",level:4}],m=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:m,SpecifiedBy:s,Badge:u};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Delete an existing ProductContentItem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteProductContentItem(\n  contentItemId: ID!\n  productId: ID!\n): ProductContentItemDeleteResponse!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-deleteproductcontentitembcontentitemidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"deleteProductContentItem.",(0,a.kt)("b",null,"contentItemId"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-deleteproductcontentitembproductidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"deleteProductContentItem.",(0,a.kt)("b",null,"productId"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"productcontentitemdeleteresponse-"},(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/product-content-item-delete-response"},(0,a.kt)("inlineCode",{parentName:"a"},"ProductContentItemDeleteResponse"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The response type from a ProductContentItem delete mutation")))}g.isMDXComponent=!0}}]);