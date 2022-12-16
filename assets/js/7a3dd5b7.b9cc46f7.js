"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[43589],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>u});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,u=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return n?t.createElement(u,d(d({ref:r},s),{},{components:n})):t.createElement(u,d({ref:r},s))}));function u(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:a,d[1]=c;for(var l=2;l<o;l++)d[l]=n[l];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26283:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>i,toc:()=>s});var t=n(87462),a=n(67294),o=n(3905);const d={id:"order-transaction-edge",title:"OrderTransactionEdge",hide_table_of_contents:!1},c=void 0,i={unversionedId:"demand/api/graphql-admin/reference/objects/order-transaction-edge",id:"demand/api/graphql-admin/reference/objects/order-transaction-edge",title:"OrderTransactionEdge",description:"One edge producing one OrderTransaction Node",source:"@site/docs/demand/api/graphql-admin/reference/objects/order-transaction-edge.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/order-transaction-edge",permalink:"/demand/api/graphql-admin/reference/objects/order-transaction-edge",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/order-transaction-edge.mdx",tags:[],version:"current",frontMatter:{id:"order-transaction-edge",title:"OrderTransactionEdge",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"OrderTransactionCurrencyExchangeAdjustment",permalink:"/demand/api/graphql-admin/reference/objects/order-transaction-currency-exchange-adjustment"},next:{title:"OrderTransaction",permalink:"/demand/api/graphql-admin/reference/objects/order-transaction"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrderTransactionEdge.<b>node</b></code><Bullet /><code>OrderTransaction</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-ordertransactionedgebnodebcodeordertransaction-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:p,SpecifiedBy:m,Badge:f};function g(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One edge producing one OrderTransaction Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type OrderTransactionEdge {\n  node: OrderTransaction\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ordertransactionedgebnodebcodeordertransaction-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrderTransactionEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"OrderTransaction"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/order-transaction-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"OrderTransactionConnection")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);