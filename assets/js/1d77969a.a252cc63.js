"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[1451],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,h=l["".concat(p,".").concat(f)]||l[f]||d[f]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5667:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"user-notification-update-status-input",title:"UserNotificationUpdateStatusInput"},p=void 0,u={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-notification-update-status-input",id:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-notification-update-status-input",title:"UserNotificationUpdateStatusInput",description:"Input to change the status of a UserNotification",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-notification-update-status-input.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/inputs",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-notification-update-status-input",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-notification-update-status-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-notification-update-status-input.mdx",tags:[],version:"current",frontMatter:{id:"user-notification-update-status-input",title:"UserNotificationUpdateStatusInput"},sidebar:"apisSidebar",previous:{title:"PartnerUpdateInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-update-input"},next:{title:"UserUpdateInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>status</code> (NotificationStatus)",id:"status-notificationstatus",children:[],level:4},{value:"<code>userNotificationId</code> (ID)",id:"usernotificationid-id",children:[],level:4}],level:3}],d={toc:c};function l(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Input to change the status of a UserNotification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserNotificationUpdateStatusInput {\n  status: NotificationStatus!\n  userNotificationId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"status-notificationstatus"},(0,a.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/notification-status"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationStatus")),")"),(0,a.kt)("p",null,"Denotes how urgent and whether the Notification is archived"),(0,a.kt)("h4",{id:"usernotificationid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"userNotificationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("p",null,"The ID of this userNotification"))}l.isMDXComponent=!0}}]);