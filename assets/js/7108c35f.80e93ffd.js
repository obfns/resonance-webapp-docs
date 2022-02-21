"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6163],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=p,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:p,s[1]=i;for(var o=2;o<a;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9973:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var n=r(7462),p=r(3366),a=(r(7294),r(3905)),s=["components"],i={id:"supply-event",title:"SupplyEvent"},l=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supply-event",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supply-event",title:"SupplyEvent",description:"Contains before and after snapshots for every event that occurs within the Supply domain",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event.mdx",tags:[],version:"current",frontMatter:{id:"supply-event",title:"SupplyEvent"},sidebar:"apisSidebar",previous:{title:"SupplyEventSubscription",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-subscription"},next:{title:"_empty",permalink:"/developers/supplier-apis/supply-api/graphql/reference/queries/empty"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>message</code> (SupplyEventMessage)",id:"message-supplyeventmessage",children:[],level:4},{value:"<code>messageId</code> (String)",id:"messageid-string",children:[],level:4},{value:"<code>subject</code> (String)",id:"subject-string",children:[],level:4},{value:"<code>timestamp</code> (Date)",id:"timestamp-date",children:[],level:4}],level:3}],c={toc:u};function d(e){var t=e.components,r=(0,p.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains before and after snapshots for every event that occurs within the Supply domain"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplyEvent {\n  message: SupplyEventMessage\n  messageId: String!\n  subject: String\n  timestamp: Date!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"message-supplyeventmessage"},(0,a.kt)("inlineCode",{parentName:"h4"},"message")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-message"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplyEventMessage")),")"),(0,a.kt)("p",null,"This is the event data and metadata.\nThe data is variable, but most typically contains a newItem and oldItem."),(0,a.kt)("h4",{id:"messageid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"messageId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"UUID"),(0,a.kt)("h4",{id:"subject-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"subject")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A human-friendly string summarizing the event"),(0,a.kt)("h4",{id:"timestamp-date"},(0,a.kt)("inlineCode",{parentName:"h4"},"timestamp")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/date"},(0,a.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,a.kt)("p",null,"ISO Date that the event occurred"))}d.isMDXComponent=!0}}]);