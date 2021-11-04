"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[4160],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=p,y=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5648:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(3117),p=t(102),i=(t(7294),t(3905)),o=["components"],l={id:"supplier-identity-connection",title:"SupplierIdentityConnection"},a=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-connection",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-connection",isDocsHomePage:!1,title:"SupplierIdentityConnection",description:"Paginate through SupplierIdentities",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-connection.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-connection",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-connection",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-connection.mdx",tags:[],version:"current",frontMatter:{id:"supplier-identity-connection",title:"SupplierIdentityConnection"},sidebar:"apisSidebar",previous:{title:"SupplierIdentity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity"},next:{title:"SupplierIdentityDeleteOutput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-delete-output"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>edges</code> ([SupplierIdentityEdge]!)",id:"edges-supplieridentityedge",children:[],level:4},{value:"<code>nodes</code> ([SupplierIdentity]!)",id:"nodes-supplieridentity",children:[],level:4},{value:"<code>pageInfo</code> (PageInfo!)",id:"pageinfo-pageinfo",children:[],level:4}],level:3}],u={toc:c};function d(e){var n=e.components,t=(0,p.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Paginate through SupplierIdentities"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierIdentityConnection {\n  edges: [SupplierIdentityEdge]!\n  nodes: [SupplierIdentity]!\n  pageInfo: PageInfo!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"edges-supplieridentityedge"},(0,i.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"[SupplierIdentityEdge]!")),")"),(0,i.kt)("h4",{id:"nodes-supplieridentity"},(0,i.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity"},(0,i.kt)("inlineCode",{parentName:"a"},"[SupplierIdentity]!")),")"),(0,i.kt)("h4",{id:"pageinfo-pageinfo"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"))}d.isMDXComponent=!0}}]);