"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[8283],{3905:function(e,p,r){r.d(p,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function t(e,p,r){return p in e?Object.defineProperty(e,p,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[p]=r,e}function i(e,p){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);p&&(n=n.filter((function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var p=1;p<arguments.length;p++){var r=null!=arguments[p]?arguments[p]:{};p%2?i(Object(r),!0).forEach((function(p){t(e,p,r[p])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(p){Object.defineProperty(e,p,Object.getOwnPropertyDescriptor(r,p))}))}return e}function s(e,p){if(null==e)return{};var r,n,t=function(e,p){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],p.indexOf(r)>=0||(t[r]=e[r]);return t}(e,p);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],p.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var o=n.createContext({}),l=function(e){var p=n.useContext(o),r=p;return e&&(r="function"==typeof e?e(p):a(a({},p),e)),r},u=function(e){var p=l(e.components);return n.createElement(o.Provider,{value:p},e.children)},c={inlineCode:"code",wrapper:function(e){var p=e.children;return n.createElement(n.Fragment,{},p)}},d=n.forwardRef((function(e,p){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=t,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:p},u),{},{components:r})):n.createElement(f,a({ref:p},u))}));function m(e,p){var r=arguments,t=p&&p.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var o in p)hasOwnProperty.call(p,o)&&(s[o]=p[o]);s.originalType=e,s.mdxType="string"==typeof e?e:t,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3403:function(e,p,r){r.r(p),r.d(p,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),t=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:"update-app-permissions",title:"updateAppPermissions"},o=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-app-permissions",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-app-permissions",title:"updateAppPermissions",description:"Update an app's permissions on a Supplier. This is a no-op if the app's",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-app-permissions.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-app-permissions",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-app-permissions",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-app-permissions.mdx",tags:[],version:"current",frontMatter:{id:"update-app-permissions",title:"updateAppPermissions"},sidebar:"apisSidebar",previous:{title:"_makeEmpty",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/make-empty"},next:{title:"updateSupplierIdentity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-identity"}},u=[{value:"Arguments",id:"arguments",children:[{value:"<code>appId</code> (ID)",id:"appid-id",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"AppInstallationResponse",id:"appinstallationresponse",children:[],level:4}],level:3}],c={toc:u};function d(e){var p=e.components,r=(0,t.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:p,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Update an app's permissions on a Supplier. This is a no-op if the app's\nrequested permissions are the same as the current permissions."),(0,i.kt)("p",null,"Requires the supplieridentity/write permission on the given Supplier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"updateAppPermissions(\n  appId: ID!\n  supplierId: ID!\n): AppInstallationResponse!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"appid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"appId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"appinstallationresponse"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/app-installation-response"},(0,i.kt)("inlineCode",{parentName:"a"},"AppInstallationResponse"))),(0,i.kt)("p",null,"The response recieved when an app is installed or the permissions are updated"))}d.isMDXComponent=!0}}]);