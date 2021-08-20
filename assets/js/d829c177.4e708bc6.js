"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[2252],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,v=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(v,o(o({ref:n},l),{},{components:t})):r.createElement(v,o({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7207:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],s={id:"resonance-event",title:"ResonanceEvent"},p=void 0,c={unversionedId:"developers/shared-apis/events-api/graphql/reference/objects/resonance-event",id:"developers/shared-apis/events-api/graphql/reference/objects/resonance-event",isDocsHomePage:!1,title:"ResonanceEvent",description:"Main object for the Events domain, captures a single event anywhere in Resonance",source:"@site/docs/developers/shared-apis/events-api/graphql/reference/objects/resonance-event.mdx",sourceDirName:"developers/shared-apis/events-api/graphql/reference/objects",slug:"/developers/shared-apis/events-api/graphql/reference/objects/resonance-event",permalink:"/developers/shared-apis/events-api/graphql/reference/objects/resonance-event",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/events-api/graphql/reference/objects/resonance-event.mdx",version:"current",frontMatter:{id:"resonance-event",title:"ResonanceEvent"},sidebar:"apisSidebar",previous:{title:"PageInfo",permalink:"/developers/shared-apis/events-api/graphql/reference/objects/page-info"},next:{title:"ResonanceEventConnection",permalink:"/developers/shared-apis/events-api/graphql/reference/objects/resonance-event-connection"}},l=[{value:"Fields",id:"fields",children:[]}],d={toc:l};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Main object for the Events domain, captures a single event anywhere in Resonance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ResonanceEvent {\n  account: String\n  detail: ResonanceEventDetail!\n  detailType: String!\n  id: ID!\n  region: String\n  time: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"account-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"account")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/events-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Meaningless"),(0,i.kt)("h4",{id:"detail-resonanceeventdetail"},(0,i.kt)("inlineCode",{parentName:"h4"},"detail")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/events-api/graphql/reference/objects/resonance-event-detail"},(0,i.kt)("inlineCode",{parentName:"a"},"ResonanceEventDetail!")),")"),(0,i.kt)("p",null,"Main object containing the event information"),(0,i.kt)("h4",{id:"detailtype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"detailType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/events-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("p",null,"This is the scope of the event, i.e. suppliervariant/created"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/events-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("p",null,"Not a proper Resonance ID, just a UUID"),(0,i.kt)("h4",{id:"region-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"region")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/events-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Meaningless"),(0,i.kt)("h4",{id:"time-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"time")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/events-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("p",null,"The timestamp for the event, ISO UTC"))}u.isMDXComponent=!0}}]);