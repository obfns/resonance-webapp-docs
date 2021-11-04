"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[8990],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return m}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),u=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d=function(e){var r=u(e.components);return t.createElement(o.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(o,".").concat(m)]||c[m]||l[m]||a;return n?t.createElement(f,s(s({ref:r},d),{},{components:n})):t.createElement(f,s({ref:r},d))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=c;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,s[1]=p;for(var u=2;u<a;u++)s[u]=n[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4070:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var t=n(3117),i=n(102),a=(n(7294),n(3905)),s=["components"],p={id:"partner-user-permission-update-input",title:"PartnerUserPermissionUpdateInput"},o=void 0,u={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-user-permission-update-input",id:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-user-permission-update-input",isDocsHomePage:!1,title:"PartnerUserPermissionUpdateInput",description:"Input object to update a PartnerUserPermission, the permissions given to a User for a Partner",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-user-permission-update-input.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/inputs",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-user-permission-update-input",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-user-permission-update-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-user-permission-update-input.mdx",tags:[],version:"current",frontMatter:{id:"partner-user-permission-update-input",title:"PartnerUserPermissionUpdateInput"},sidebar:"apisSidebar",previous:{title:"PartnerUserPermissionPermissionsInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-user-permission-permissions-input"},next:{title:"UserNotificationUpdateStatusInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-notification-update-status-input"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>partnerId</code> (ID!)",id:"partnerid-id",children:[],level:4},{value:"<code>permissions</code> (PartnerUserPermissionPermissionsInput)",id:"permissions-partneruserpermissionpermissionsinput",children:[],level:4},{value:"<code>userName</code> (ID!)",id:"username-id",children:[],level:4}],level:3}],l={toc:d};function c(e){var r=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Input object to update a PartnerUserPermission, the permissions given to a User for a Partner"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type PartnerUserPermissionUpdateInput {\n  partnerId: ID!\n  permissions: PartnerUserPermissionPermissionsInput\n  userName: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"partnerid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"partnerId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("p",null,"The ID of the Partner this permission pertains to"),(0,a.kt)("h4",{id:"permissions-partneruserpermissionpermissionsinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-user-permission-permissions-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PartnerUserPermissionPermissionsInput")),")"),(0,a.kt)("p",null,"Object representing exactly what permissions are given"),(0,a.kt)("h4",{id:"username-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"userName")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("p",null,"The user these permissions pertain to"))}c.isMDXComponent=!0}}]);