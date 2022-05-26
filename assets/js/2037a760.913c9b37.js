"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[73853],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,v=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(v,d(d({ref:n},s),{},{components:t})):r.createElement(v,d({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,d=new Array(o);d[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var l=2;l<o;l++)d[l]=t[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10675:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),d=["components"],i={id:"delete-nav",title:"deleteNav"},p=void 0,l={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-nav",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-nav",title:"deleteNav",description:"Delete a Nav.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-nav.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-nav",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-nav",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-nav.mdx",tags:[],version:"current",frontMatter:{id:"delete-nav",title:"deleteNav"},sidebar:"apisSidebar",previous:{title:"deleteDemandHqIdentity",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-demand-hq-identity"},next:{title:"deletePageContentItem",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-page-content-item"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>navId</code> (<code>ID</code>)",id:"navid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>DeleteNavResponse</code>",id:"deletenavresponse",level:4}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Delete a Nav."),(0,o.kt)("p",null,'Requires the "nav/write" permission on the associated DemandHq.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteNav(\n  navId: ID!\n): DeleteNavResponse!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"navid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"navId")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"deletenavresponse"},(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/delete-nav-response"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteNavResponse"))),(0,o.kt)("p",null,"The response from a delete request."))}m.isMDXComponent=!0}}]);