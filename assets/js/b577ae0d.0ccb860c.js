"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[1788],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return l}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(t),l=a,f=u["".concat(p,".").concat(l)]||u[l]||s[l]||i;return t?r.createElement(f,d(d({ref:n},m),{},{components:t})):r.createElement(f,d({ref:n},m))}));function l(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,d=new Array(i);d[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,d[1]=o;for(var c=2;c<i;c++)d[c]=t[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48989:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return m},toc:function(){return s},default:function(){return l}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),d=["components"],o={id:"create-demand-hq-identity",title:"createDemandHqIdentity"},p=void 0,c={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-demand-hq-identity",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-demand-hq-identity",title:"createDemandHqIdentity",description:"Add a new DemandHqIdentity to a DemandHq (give a user permissions)",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-demand-hq-identity.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-demand-hq-identity",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-demand-hq-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-demand-hq-identity.mdx",tags:[],version:"current",frontMatter:{id:"create-demand-hq-identity",title:"createDemandHqIdentity"},sidebar:"apisSidebar",previous:{title:"StorefrontUpdateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-update-input"},next:{title:"createDemandHq",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-demand-hq"}},m={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>DemandHqIdentityCreateInput</code>)",id:"input-demandhqidentitycreateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>DemandHqIdentity</code>",id:"demandhqidentity",level:4}],u={toc:s};function l(e){var n=e.components,t=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Add a new DemandHqIdentity to a DemandHq (give a user permissions)"),(0,i.kt)("p",null,"Requires the demandHqidentity/write permission on the given DemandHq"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"createDemandHqIdentity(\n  input: DemandHqIdentityCreateInput!\n): DemandHqIdentity!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-demandhqidentitycreateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/demand-hq-identity-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqIdentityCreateInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"demandhqidentity"},(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqIdentity"))),(0,i.kt)("p",null,"Indicates a User or App has permissions on a DemandHq"))}l.isMDXComponent=!0}}]);