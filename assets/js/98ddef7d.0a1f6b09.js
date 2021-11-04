"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9123],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=i,m=l["".concat(p,".").concat(f)]||l[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},9577:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],s={id:"update-user-notification-status",title:"updateUserNotificationStatus"},p=void 0,u={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/mutations/update-user-notification-status",id:"developers/shared-apis/adminidentity-api/graphql/reference/mutations/update-user-notification-status",isDocsHomePage:!1,title:"updateUserNotificationStatus",description:"Update the status of a UserNotification",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/mutations/update-user-notification-status.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/mutations",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/mutations/update-user-notification-status",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/mutations/update-user-notification-status",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/mutations/update-user-notification-status.mdx",tags:[],version:"current",frontMatter:{id:"update-user-notification-status",title:"updateUserNotificationStatus"},sidebar:"apisSidebar",previous:{title:"updateUser",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/mutations/update-user"},next:{title:"deprecated",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/directives/deprecated"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>input</code> (UserNotificationUpdateStatusInput!)",id:"input-usernotificationupdatestatusinput",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"UserNotification",id:"usernotification",children:[],level:4}],level:3}],d={toc:c};function l(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Update the status of a UserNotification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"updateUserNotificationStatus(\n  input: UserNotificationUpdateStatusInput!\n): UserNotification!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-usernotificationupdatestatusinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-notification-update-status-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UserNotificationUpdateStatusInput!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"usernotification"},(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification"},(0,a.kt)("inlineCode",{parentName:"a"},"UserNotification"))),(0,a.kt)("p",null,"Represents a notification specific to a User"))}l.isMDXComponent=!0}}]);