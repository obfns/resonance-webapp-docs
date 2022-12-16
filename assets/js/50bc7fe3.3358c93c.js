"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[92283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=p,m=u["".concat(o,".").concat(d)]||u[d]||y[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:p,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15060:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>y,assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),p=n(67294),a=n(3905);const i={id:"create-supply-event-subscription",title:"createSupplyEventSubscription",hide_table_of_contents:!1},l=void 0,o={unversionedId:"supply/api/graphql-admin/reference/mutations/create-supply-event-subscription",id:"supply/api/graphql-admin/reference/mutations/create-supply-event-subscription",title:"createSupplyEventSubscription",description:"Create a subscription for a type of supply event.",source:"@site/docs/supply/api/graphql-admin/reference/mutations/create-supply-event-subscription.mdx",sourceDirName:"supply/api/graphql-admin/reference/mutations",slug:"/supply/api/graphql-admin/reference/mutations/create-supply-event-subscription",permalink:"/supply/api/graphql-admin/reference/mutations/create-supply-event-subscription",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/mutations/create-supply-event-subscription.mdx",tags:[],version:"current",frontMatter:{id:"create-supply-event-subscription",title:"createSupplyEventSubscription",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"createSupplier",permalink:"/supply/api/graphql-admin/reference/mutations/create-supplier"},next:{title:"deleteSupplierIdentity",permalink:"/supply/api/graphql-admin/reference/mutations/delete-supplier-identity"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createSupplyEventSubscription.<b>input</b></code><Bullet /><code>SupplyEventSubscriptionCreateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createsupplyeventsubscriptionbinputbcodesupplyeventsubscriptioncreateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>SupplyEventSubscription</code> <Badge class="secondary" text="object"/>',id:"supplyeventsubscription-",level:4}],u=()=>(0,a.kt)(p.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,a.kt)(p.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(p.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:u,SpecifiedBy:y,Badge:d};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a subscription for a type of supply event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"createSupplyEventSubscription(\n  input: SupplyEventSubscriptionCreateInput!\n): SupplyEventSubscription!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-createsupplyeventsubscriptionbinputbcodesupplyeventsubscriptioncreateinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"createSupplyEventSubscription.",(0,a.kt)("b",null,"input"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/inputs/supply-event-subscription-create-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscriptionCreateInput!"))," ",(0,a.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"supplyeventsubscription-"},(0,a.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supply-event-subscription"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscription"))," ",(0,a.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Entity representing a subscription to supply events.")))}b.isMDXComponent=!0}}]);