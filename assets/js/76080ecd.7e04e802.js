"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[78745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=i(r),m=o,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:o,c[1]=d;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88322:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(87462),o=r(67294),a=r(3905);const c={id:"product-recommendation",title:"ProductRecommendation",hide_table_of_contents:!1},d=void 0,l={unversionedId:"demand/api/graphql-storefront/reference/objects/product-recommendation",id:"demand/api/graphql-storefront/reference/objects/product-recommendation",title:"ProductRecommendation",description:"A product that is being recommended for a requested reason.",source:"@site/docs/demand/api/graphql-storefront/reference/objects/product-recommendation.mdx",sourceDirName:"demand/api/graphql-storefront/reference/objects",slug:"/demand/api/graphql-storefront/reference/objects/product-recommendation",permalink:"/demand/api/graphql-storefront/reference/objects/product-recommendation",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/objects/product-recommendation.mdx",tags:[],version:"current",frontMatter:{id:"product-recommendation",title:"ProductRecommendation",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"ProductContentItemConnection",permalink:"/demand/api/graphql-storefront/reference/objects/product-content-item-connection"},next:{title:"ProductTags",permalink:"/demand/api/graphql-storefront/reference/objects/product-tags"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProductRecommendation.<b>product</b></code><Bullet /><code>PublicProduct</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-productrecommendationbproductbcodepublicproduct-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductRecommendation.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productrecommendationbproductidbcodeid--",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:s,SpecifiedBy:u,Badge:m};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A product that is being recommended for a requested reason."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProductRecommendation {\n  product: PublicProduct\n  productId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productrecommendationbproductbcodepublicproduct-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProductRecommendation.",(0,a.kt)("b",null,"product"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/public-product"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicProduct"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Get the product associated with the recommendation.")),(0,a.kt)("p",null,"Requires the publicproduct/read scope."),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productrecommendationbproductidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProductRecommendation.",(0,a.kt)("b",null,"productId"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/queries/recommend-like-recent-activity-products"},(0,a.kt)("inlineCode",{parentName:"a"},"recommendLikeRecentActivityProducts")),"  ",(0,a.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/queries/recommend-more-like-this-products"},(0,a.kt)("inlineCode",{parentName:"a"},"recommendMoreLikeThisProducts")),"  ",(0,a.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/queries/recommend-recently-viewed-products"},(0,a.kt)("inlineCode",{parentName:"a"},"recommendRecentlyViewedProducts")),"  ",(0,a.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);