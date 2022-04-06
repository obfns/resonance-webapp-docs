"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[1e3],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return y}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)i=p[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)i=p[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=o(i),y=n,f=c["".concat(s,".").concat(y)]||c[y]||d[y]||p;return i?r.createElement(f,l(l({ref:t},u),{},{components:i})):r.createElement(f,l({ref:t},u))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=i.length,l=new Array(p);l[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var o=2;o<p;o++)l[o]=i[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},55015:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return o},assets:function(){return u},toc:function(){return d},default:function(){return y}});var r=i(87462),n=i(63366),p=(i(67294),i(3905)),l=["components"],a={id:"supplier-identities",title:"supplierIdentities"},s=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identities",id:"developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identities",title:"supplierIdentities",description:"Get a filtered list of SupplierIdentities",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identities.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/queries",slug:"/developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identities",permalink:"/developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identities",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identities.mdx",tags:[],version:"current",frontMatter:{id:"supplier-identities",title:"supplierIdentities"},sidebar:"apisSidebar",previous:{title:"publicSuppliers",permalink:"/developers/supplier-apis/supply-api/graphql/reference/queries/public-suppliers"},next:{title:"supplierIdentity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/queries/supplier-identity"}},u={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>after</code> (<code>String</code>)",id:"after-string",level:4},{value:"<code>before</code> (<code>String</code>)",id:"before-string",level:4},{value:"<code>first</code> (<code>Int</code>)",id:"first-int",level:4},{value:"<code>identityId</code> (<code>ID</code>)",id:"identityid-id",level:4},{value:"<code>identityParentEntityId</code> (<code>ID</code>)",id:"identityparententityid-id",level:4},{value:"<code>identityType</code> (<code>SupplierIdentityType</code>)",id:"identitytype-supplieridentitytype",level:4},{value:"<code>last</code> (<code>Int</code>)",id:"last-int",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierIdentityConnection</code>",id:"supplieridentityconnection",level:4}],c={toc:d};function y(e){var t=e.components,i=(0,n.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Get a filtered list of SupplierIdentities"),(0,p.kt)("p",null,"All of the filters are optional, but you must include at least one.\nYou may receive less supplierIdentities than you indicate if you do not have\npermission to read part of the result set."),(0,p.kt)("p",null,"Not all filter combinations are valid, for example you cannot filter by"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"identityId + identityParentEntityId (requires supplierId)"),(0,p.kt)("li",{parentName:"ul"},"identityType only (requires supplierId)")),(0,p.kt)("p",null,"Requires supplieridentity/read permission on the requesting identity for each supplier requested,\nor you can request your own identities."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"supplierIdentities(\n  after: String\n  before: String\n  first: Int\n  identityId: ID\n  identityParentEntityId: ID\n  identityType: SupplierIdentityType\n  last: Int\n  supplierId: ID\n): SupplierIdentityConnection!\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"after-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,p.kt)("h4",{id:"before-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"before")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,p.kt)("h4",{id:"first-int"},(0,p.kt)("inlineCode",{parentName:"h4"},"first")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,p.kt)("p",null,"Returns the first n elements from the list."),(0,p.kt)("h4",{id:"identityid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("p",null,'Filter the results to a specific identityId.\nUse this with your own userName or appClientId in order to see "My SupplierIdentities".\nYou automatically have access to your own SupplierIdentities.'),(0,p.kt)("h4",{id:"identityparententityid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"identityParentEntityId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("p",null,"Filter the results to a specific identityParentEntityId (optional)"),(0,p.kt)("h4",{id:"identitytype-supplieridentitytype"},(0,p.kt)("inlineCode",{parentName:"h4"},"identityType")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-identity-type"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentityType")),")"),(0,p.kt)("p",null,"Filter the results to a specific identity type (optional)"),(0,p.kt)("h4",{id:"last-int"},(0,p.kt)("inlineCode",{parentName:"h4"},"last")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,p.kt)("p",null,"Returns the last n elements from the list."),(0,p.kt)("h4",{id:"supplierid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("p",null,"Filter the results to a specific supplierId. (optional)"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"supplieridentityconnection"},(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-connection"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentityConnection"))),(0,p.kt)("p",null,"Paginate through SupplierIdentities"))}y.isMDXComponent=!0}}]);