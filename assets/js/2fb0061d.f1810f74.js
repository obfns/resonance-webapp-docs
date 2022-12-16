"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[97325],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return a?n.createElement(f,o(o({ref:t},i),{},{components:a})):n.createElement(f,o({ref:t},i))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:r,o[1]=d;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28775:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>d,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=a(87462),r=a(67294),l=a(3905);const o={id:"product-locale-update-input",title:"ProductLocaleUpdateInput",hide_table_of_contents:!1},d=void 0,c={unversionedId:"demand/api/graphql-admin/reference/inputs/product-locale-update-input",id:"demand/api/graphql-admin/reference/inputs/product-locale-update-input",title:"ProductLocaleUpdateInput",description:"The necessary fields in order to update a productLocale.",source:"@site/docs/demand/api/graphql-admin/reference/inputs/product-locale-update-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/product-locale-update-input",permalink:"/demand/api/graphql-admin/reference/inputs/product-locale-update-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/product-locale-update-input.mdx",tags:[],version:"current",frontMatter:{id:"product-locale-update-input",title:"ProductLocaleUpdateInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"ProductLocaleCreateInput",permalink:"/demand/api/graphql-admin/reference/inputs/product-locale-create-input"},next:{title:"ProductNumberOfTermAggregations",permalink:"/demand/api/graphql-admin/reference/inputs/product-number-of-term-aggregations"}},p={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocaleUpdateInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productlocaleupdateinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocaleUpdateInput.<b>featureBullets</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productlocaleupdateinputbfeaturebulletsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocaleUpdateInput.<b>localeType</b></code><Bullet /><code>ResonanceLocaleType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-productlocaleupdateinputblocaletypebcoderesonancelocaletype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocaleUpdateInput.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productlocaleupdateinputbproductidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:u,SpecifiedBy:s,Badge:m};function y(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The necessary fields in order to update a productLocale.\nID fields are required, others are optional, only included fields will be updated."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input ProductLocaleUpdateInput {\n  description: String\n  featureBullets: [String]\n  localeType: ResonanceLocaleType!\n  productId: ID!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-productlocaleupdateinputbdescriptionbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProductLocaleUpdateInput.",(0,l.kt)("b",null,"description"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Can utilize Markdown")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-productlocaleupdateinputbfeaturebulletsbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProductLocaleUpdateInput.",(0,l.kt)("b",null,"featureBullets"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Limited to 5 bullets")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-productlocaleupdateinputblocaletypebcoderesonancelocaletype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProductLocaleUpdateInput.",(0,l.kt)("b",null,"localeType"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/resonance-locale-type"},(0,l.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-productlocaleupdateinputbproductidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ProductLocaleUpdateInput.",(0,l.kt)("b",null,"productId"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-product-locale"},(0,l.kt)("inlineCode",{parentName:"a"},"updateProductLocale")),"  ",(0,l.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);