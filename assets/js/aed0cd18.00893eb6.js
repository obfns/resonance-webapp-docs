"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9171],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),y=i,m=u["".concat(o,".").concat(y)]||u[y]||c[y]||p;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,a=new Array(p);a[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<p;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(7462),i=n(3366),p=(n(7294),n(3905)),a=["components"],l={id:"supply-event-metadata",title:"SupplyEventMetadata"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata",title:"SupplyEventMetadata",description:"Items consistent to every event",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-metadata.mdx",tags:[],version:"current",frontMatter:{id:"supply-event-metadata",title:"SupplyEventMetadata"},sidebar:"apisSidebar",previous:{title:"SupplyEventMessage",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-message"},next:{title:"SupplyEventSubscriptionConnection",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-subscription-connection"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>domain</code> (String)",id:"domain-string",children:[],level:4},{value:"<code>domainEntityId</code> (ID)",id:"domainentityid-id",children:[],level:4},{value:"<code>entityId</code> (ID)",id:"entityid-id",children:[],level:4},{value:"<code>identityId</code> (ID)",id:"identityid-id",children:[],level:4},{value:"<code>itemType</code> (String)",id:"itemtype-string",children:[],level:4},{value:"<code>mutationType</code> (String)",id:"mutationtype-string",children:[],level:4},{value:"<code>updatedBy</code> (String)",id:"updatedby-string",children:[],level:4}],level:3}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Items consistent to every event"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplyEventMetadata {\n  domain: String!\n  domainEntityId: ID!\n  entityId: ID\n  identityId: ID\n  itemType: String\n  mutationType: String\n  updatedBy: String\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"domain-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"domain")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"domainentityid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"domainEntityId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("p",null,"This is most typically domainHqId or supplierId"),(0,p.kt)("h4",{id:"entityid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"entityId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"identityid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"itemtype-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"itemType")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"mutationtype-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"mutationType")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"updatedby-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);