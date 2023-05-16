"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[25099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const r={sidebar_position:5},a="Notifications",c={unversionedId:"concepts/notifications",id:"concepts/notifications",title:"Notifications",description:"Notifications exist to automate workflows throughout Resonance. You can find them in Demand and Supply.",source:"@site/docs/concepts/notifications.md",sourceDirName:"concepts",slug:"/concepts/notifications",permalink:"/concepts/notifications",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/notifications.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"conceptsSidebar",previous:{title:"Variant",permalink:"/concepts/demand-hqs/entities/Variant"},next:{title:"Supplier Concepts",permalink:"/concepts/suppliers/supplier-concepts"}},s={},l=[{value:"Status",id:"status",level:2},{value:"Actions",id:"actions",level:3},{value:"Categories",id:"categories",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notifications"},"Notifications"),(0,i.kt)("p",null,"Notifications exist to automate workflows throughout Resonance. You can find them in Demand and Supply."),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Status can be one of 4 values:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"FRESH - This notification has not been touched by anyone."),(0,i.kt)("li",{parentName:"ol"},'ACKNOWLEDGED - This notification has been seen and claimed by someone, but not acted upon. This is similar to saying "I\'ll do it."'),(0,i.kt)("li",{parentName:"ol"},"RESOLVED - This notification has been acted upon and is now resolved."),(0,i.kt)("li",{parentName:"ol"},"IGNORED - This notification has been ignored and will not be acted upon.")),(0,i.kt)("h3",{id:"actions"},"Actions"),(0,i.kt)("p",null,"Some Notifications have actions associated with them. These actions can link to to an associated page or make changes on your behalf."),(0,i.kt)("p",null,"Examples of possible actions include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linking to the Edit Product page for an Alert that you have a published Product with no associated Storefronts."),(0,i.kt)("li",{parentName:"ul"},"Changing a Variant price for an Alert that your Product margin has fallen below a threshold.")),(0,i.kt)("h3",{id:"categories"},"Categories"),(0,i.kt)("p",null,"Notifications will be sorted into conceptual categories to help your sort out your workflow. You can also filter by these categories."))}u.isMDXComponent=!0}}]);