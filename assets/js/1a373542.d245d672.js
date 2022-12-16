"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[63168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(i,".").concat(p)]||m[p]||u[p]||d;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,o=new Array(d);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<d;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10821:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=n(67294),d=n(3905);const o={id:"demand-hq-status",title:"DemandHqStatus",hide_table_of_contents:!1},l=void 0,i={unversionedId:"demand/api/graphql-admin/reference/enums/demand-hq-status",id:"demand/api/graphql-admin/reference/enums/demand-hq-status",title:"DemandHqStatus",description:"Indicates the status of a DemandHq",source:"@site/docs/demand/api/graphql-admin/reference/enums/demand-hq-status.mdx",sourceDirName:"demand/api/graphql-admin/reference/enums",slug:"/demand/api/graphql-admin/reference/enums/demand-hq-status",permalink:"/demand/api/graphql-admin/reference/enums/demand-hq-status",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/enums/demand-hq-status.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-status",title:"DemandHqStatus",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandHqIdentityType",permalink:"/demand/api/graphql-admin/reference/enums/demand-hq-identity-type"},next:{title:"DemandHqSupplierStatus",permalink:"/demand/api/graphql-admin/reference/enums/demand-hq-supplier-status"}},s={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>DemandHqStatus.<b>ARCHIVED</b></code>",id:"code-style-fontweight-normal-demandhqstatusbarchivedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DemandHqStatus.<b>PUBLISHED</b></code>",id:"code-style-fontweight-normal-demandhqstatusbpublishedbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:m,SpecifiedBy:u,Badge:p};function h(e){let{components:t,...n}=e;return(0,d.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Indicates the status of a DemandHq"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"enum DemandHqStatus {\n  ARCHIVED\n  PUBLISHED\n}\n")),(0,d.kt)("h3",{id:"values"},"Values"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-demandhqstatusbarchivedbcode"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"DemandHqStatus.",(0,d.kt)("b",null,"ARCHIVED")))),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-demandhqstatusbpublishedbcode"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"DemandHqStatus.",(0,d.kt)("b",null,"PUBLISHED")))),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq"},(0,d.kt)("inlineCode",{parentName:"a"},"DemandHq")),"  ",(0,d.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);