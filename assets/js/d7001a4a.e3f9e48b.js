"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[39824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(n),y=p,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||l;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=n.length,a=new Array(l);a[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:p,a[1]=i;for(var o=2;o<l;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},29778:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),p=n(67294),l=n(3905);const a={id:"delete-supply-event-subscription",title:"deleteSupplyEventSubscription",hide_table_of_contents:!1},i=void 0,s={unversionedId:"supply/api/graphql-admin/reference/mutations/delete-supply-event-subscription",id:"supply/api/graphql-admin/reference/mutations/delete-supply-event-subscription",title:"deleteSupplyEventSubscription",description:"Delete a subscription for a type of supply event.",source:"@site/docs/supply/api/graphql-admin/reference/mutations/delete-supply-event-subscription.mdx",sourceDirName:"supply/api/graphql-admin/reference/mutations",slug:"/supply/api/graphql-admin/reference/mutations/delete-supply-event-subscription",permalink:"/supply/api/graphql-admin/reference/mutations/delete-supply-event-subscription",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/mutations/delete-supply-event-subscription.mdx",tags:[],version:"current",frontMatter:{id:"delete-supply-event-subscription",title:"deleteSupplyEventSubscription",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"deleteSupplierVariant",permalink:"/supply/api/graphql-admin/reference/mutations/delete-supplier-variant"},next:{title:"installApp",permalink:"/supply/api/graphql-admin/reference/mutations/install-app"}},o={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteSupplyEventSubscription.<b>eventSubscriptionId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletesupplyeventsubscriptionbeventsubscriptionidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>SupplyEventSubscriptionDeleteResponse</code> <Badge class="secondary" text="object"/>',id:"supplyeventsubscriptiondeleteresponse-",level:4}],u=()=>(0,l.kt)(p.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(p.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(p.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:u,SpecifiedBy:d,Badge:y};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Delete a subscription for a type of supply event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteSupplyEventSubscription(\n  eventSubscriptionId: ID!\n): SupplyEventSubscriptionDeleteResponse!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deletesupplyeventsubscriptionbeventsubscriptionidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"deleteSupplyEventSubscription.",(0,l.kt)("b",null,"eventSubscriptionId"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"supplyeventsubscriptiondeleteresponse-"},(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supply-event-subscription-delete-response"},(0,l.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscriptionDeleteResponse"))," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The response when the deleteSupplyEventSubscription mutation is called.")))}b.isMDXComponent=!0}}]);