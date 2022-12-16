"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[46079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=d(n),y=i,f=s["".concat(o,".").concat(y)]||s[y]||u[y]||p;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,l=new Array(p);l[0]=y;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[s]="string"==typeof e?e:i,l[1]=a;for(var d=2;d<p;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},16145:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),i=n(67294),p=n(3905);const l={id:"supplier-identity-edge",title:"SupplierIdentityEdge",hide_table_of_contents:!1},a=void 0,o={unversionedId:"supply/api/graphql-admin/reference/objects/supplier-identity-edge",id:"supply/api/graphql-admin/reference/objects/supplier-identity-edge",title:"SupplierIdentityEdge",description:"One edge producing one SupplierIdentity Node",source:"@site/docs/supply/api/graphql-admin/reference/objects/supplier-identity-edge.mdx",sourceDirName:"supply/api/graphql-admin/reference/objects",slug:"/supply/api/graphql-admin/reference/objects/supplier-identity-edge",permalink:"/supply/api/graphql-admin/reference/objects/supplier-identity-edge",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/objects/supplier-identity-edge.mdx",tags:[],version:"current",frontMatter:{id:"supplier-identity-edge",title:"SupplierIdentityEdge",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierIdentityDeletedId",permalink:"/supply/api/graphql-admin/reference/objects/supplier-identity-deleted-id"},next:{title:"SupplierIdentityPermissions",permalink:"/supply/api/graphql-admin/reference/objects/supplier-identity-permissions"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierIdentityEdge.<b>node</b></code><Bullet /><code>SupplierIdentity</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplieridentityedgebnodebcodesupplieridentity-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,p.kt)(i.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,p.kt)(i.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,p.kt)(i.Fragment,null,(0,p.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:s,SpecifiedBy:u,Badge:y};function m(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"One edge producing one SupplierIdentity Node"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierIdentityEdge {\n  node: SupplierIdentity\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-supplieridentityedgebnodebcodesupplieridentity-"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"SupplierIdentityEdge.",(0,p.kt)("b",null,"node"))),(0,p.kt)(s,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-identity"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentity"))," ",(0,p.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-identity-connection"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentityConnection")),"  ",(0,p.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);