"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[709],{3905:function(e,i,t){t.d(i,{Zo:function(){return o},kt:function(){return y}});var n=t(7294);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function p(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?p(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function a(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):l(l({},i),e)),t},o=function(e){var i=d(e.components);return n.createElement(s.Provider,{value:i},e.children)},u={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},c=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),c=d(t),y=r,f=c["".concat(s,".").concat(y)]||c[y]||u[y]||p;return t?n.createElement(f,l(l({ref:i},o),{},{components:t})):n.createElement(f,l({ref:i},o))}));function y(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var p=t.length,l=new Array(p);l[0]=c;var a={};for(var s in i)hasOwnProperty.call(i,s)&&(a[s]=i[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var d=2;d<p;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3074:function(e,i,t){t.r(i),t.d(i,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return o},default:function(){return c}});var n=t(7462),r=t(3366),p=(t(7294),t(3905)),l=["components"],a={id:"supplier-identity",title:"SupplierIdentity"},s=void 0,d={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity",title:"SupplierIdentity",description:"Indicates a User or App has permissions on a Supplier",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity.mdx",tags:[],version:"current",frontMatter:{id:"supplier-identity",title:"SupplierIdentity"},sidebar:"apisSidebar",previous:{title:"SupplierIdentityPermissions",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-permissions"},next:{title:"SupplierNotificationUserNames",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-notification-user-names"}},o=[{value:"Fields",id:"fields",children:[{value:"<code>identityId</code> (ID)",id:"identityid-id",children:[],level:4},{value:"<code>identityParentEntityId</code> (ID)",id:"identityparententityid-id",children:[],level:4},{value:"<code>identityType</code> (SupplierIdentityType)",id:"identitytype-supplieridentitytype",children:[],level:4},{value:"<code>permissions</code> (SupplierIdentityPermissions)",id:"permissions-supplieridentitypermissions",children:[],level:4},{value:"<code>publicIdentity</code> (PublicIdentity)",id:"publicidentity-publicidentity",children:[],level:4},{value:"<code>publicIdentityParent</code> (PublicIdentityParent)",id:"publicidentityparent-publicidentityparent",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4},{value:"<code>updatedBy</code> (String)",id:"updatedby-string",children:[],level:4}],level:3}],u={toc:o};function c(e){var i=e.components,t=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Indicates a User or App has permissions on a Supplier"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierIdentity {\n  identityId: ID!\n  identityParentEntityId: ID\n  identityType: SupplierIdentityType!\n  permissions: SupplierIdentityPermissions!\n  publicIdentity: PublicIdentity\n  publicIdentityParent: PublicIdentityParent\n  supplierId: ID!\n  updatedBy: String!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"identityid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("p",null,"Could be a userName or an appClientId"),(0,p.kt)("h4",{id:"identityparententityid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"identityParentEntityId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"identitytype-supplieridentitytype"},(0,p.kt)("inlineCode",{parentName:"h4"},"identityType")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-identity-type"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentityType")),")"),(0,p.kt)("h4",{id:"permissions-supplieridentitypermissions"},(0,p.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-permissions"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentityPermissions")),")"),(0,p.kt)("h4",{id:"publicidentity-publicidentity"},(0,p.kt)("inlineCode",{parentName:"h4"},"publicIdentity")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-identity"},(0,p.kt)("inlineCode",{parentName:"a"},"PublicIdentity")),")"),(0,p.kt)("p",null,"Get a public identity by id"),(0,p.kt)("h4",{id:"publicidentityparent-publicidentityparent"},(0,p.kt)("inlineCode",{parentName:"h4"},"publicIdentityParent")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/unions/public-identity-parent"},(0,p.kt)("inlineCode",{parentName:"a"},"PublicIdentityParent")),")"),(0,p.kt)("p",null,"Get the expanded publicIdentityParent for this SupplierIdentity"),(0,p.kt)("h4",{id:"supplierid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"updatedby-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))}c.isMDXComponent=!0}}]);