"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[41081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},i="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=d(a),m=n,f=i["".concat(c,".").concat(m)]||i[m]||g[m]||o;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[i]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},16955:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>i,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(87462),n=a(67294),o=a(3905);const l={id:"parsed-tag",title:"ParsedTag",hide_table_of_contents:!1},s=void 0,c={unversionedId:"demand/api/graphql-storefront/reference/objects/parsed-tag",id:"demand/api/graphql-storefront/reference/objects/parsed-tag",title:"ParsedTag",description:"An up to 3-part tag, comma-separated, that has been parsed",source:"@site/docs/demand/api/graphql-storefront/reference/objects/parsed-tag.mdx",sourceDirName:"demand/api/graphql-storefront/reference/objects",slug:"/demand/api/graphql-storefront/reference/objects/parsed-tag",permalink:"/demand/api/graphql-storefront/reference/objects/parsed-tag",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/objects/parsed-tag.mdx",tags:[],version:"current",frontMatter:{id:"parsed-tag",title:"ParsedTag",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"PageTypeContentTags",permalink:"/demand/api/graphql-storefront/reference/objects/page-type-content-tags"},next:{title:"ProductContentItemConnection",permalink:"/demand/api/graphql-storefront/reference/objects/product-content-item-connection"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ParsedTag.<b>category</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-parsedtagbcategorybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ParsedTag.<b>key</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-parsedtagbkeybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ParsedTag.<b>value</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-parsedtagbvaluebcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:i,SpecifiedBy:g,Badge:m};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An up to 3-part tag, comma-separated, that has been parsed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ParsedTag {\n  category: String\n  key: String\n  value: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-parsedtagbcategorybcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ParsedTag.",(0,o.kt)("b",null,"category"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The category of the tag")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-parsedtagbkeybcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ParsedTag.",(0,o.kt)("b",null,"key"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The key of the tag")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-parsedtagbvaluebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ParsedTag.",(0,o.kt)("b",null,"value"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The value of the tag")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/collection-tags"},(0,o.kt)("inlineCode",{parentName:"a"},"CollectionTags")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/collection-type-content-tags"},(0,o.kt)("inlineCode",{parentName:"a"},"CollectionTypeContentTags")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/customer-tags"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomerTags")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/order-tags"},(0,o.kt)("inlineCode",{parentName:"a"},"OrderTags")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/page-tags"},(0,o.kt)("inlineCode",{parentName:"a"},"PageTags")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/page-type-content-tags"},(0,o.kt)("inlineCode",{parentName:"a"},"PageTypeContentTags")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/product-tags"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductTags")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);