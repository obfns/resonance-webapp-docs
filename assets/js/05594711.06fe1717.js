"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[47667],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},d=Object.keys(e);for(t=0;t<d.length;t++)r=d[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)r=d[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(i,".").concat(u)]||m[u]||s[u]||d;return r?t.createElement(f,p(p({ref:n},c),{},{components:r})):t.createElement(f,p({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var d=r.length,p=new Array(d);p[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[m]="string"==typeof e?e:a,p[1]=o;for(var l=2;l<d;l++)p[l]=r[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93015:(e,n,r)=>{r.r(n),r.d(n,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var t=r(87462),a=r(67294),d=r(3905);const p={id:"demand-hq-supplier-edge",title:"DemandHqSupplierEdge",hide_table_of_contents:!1},o=void 0,i={unversionedId:"demand/api/graphql-admin/reference/objects/demand-hq-supplier-edge",id:"demand/api/graphql-admin/reference/objects/demand-hq-supplier-edge",title:"DemandHqSupplierEdge",description:"One edge producing one DemandHqSupplier Node",source:"@site/docs/demand/api/graphql-admin/reference/objects/demand-hq-supplier-edge.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier-edge",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier-edge",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/demand-hq-supplier-edge.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-supplier-edge",title:"DemandHqSupplierEdge",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandHqSupplierConnection",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier-connection"},next:{title:"DemandHqSupplier",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqSupplierEdge.<b>node</b></code><Bullet /><code>DemandHqSupplier</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-demandhqsupplieredgebnodebcodedemandhqsupplier-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,d.kt)(a.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:m,SpecifiedBy:s,Badge:u};function g(e){let{components:n,...r}=e;return(0,d.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"One edge producing one DemandHqSupplier Node"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type DemandHqSupplierEdge {\n  node: DemandHqSupplier\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-demandhqsupplieredgebnodebcodedemandhqsupplier-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"DemandHqSupplierEdge.",(0,d.kt)("b",null,"node"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier"},(0,d.kt)("inlineCode",{parentName:"a"},"DemandHqSupplier"))," ",(0,d.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier-connection"},(0,d.kt)("inlineCode",{parentName:"a"},"DemandHqSupplierConnection")),"  ",(0,d.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);