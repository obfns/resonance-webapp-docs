"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[52247],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||i;return r?t.createElement(f,d(d({ref:n},s),{},{components:r})):t.createElement(f,d({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,d[1]=o;for(var p=2;p<i;p++)d[p]=r[p];return t.createElement.apply(null,d)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33542:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),d=["components"],o={id:"demand-hq-create-input",title:"DemandHqCreateInput"},c=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/demand-hq-create-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/demand-hq-create-input",title:"DemandHqCreateInput",description:"The necessary fields in order to create a new demandHq",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/demand-hq-create-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/demand-hq-create-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/demand-hq-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/demand-hq-create-input.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-create-input",title:"DemandHqCreateInput"},sidebar:"apisSidebar",previous:{title:"CustomerUpdateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-update-input"},next:{title:"DemandHqIdentityCreateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/demand-hq-identity-create-input"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>defaultCurrency</code> (<code>ResonanceCurrency</code>)",id:"defaultcurrency-resonancecurrency",level:4},{value:"<code>defaultLocaleType</code> (<code>ResonanceLocaleType</code>)",id:"defaultlocaletype-resonancelocaletype",level:4},{value:"<code>demandSubscriptionCodes</code> (<code>DemandSubscriptionCode</code>)",id:"demandsubscriptioncodes-demandsubscriptioncode",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>notificationUserNames</code> (<code>DemandHqNotificationUserNamesInput</code>)",id:"notificationusernames-demandhqnotificationusernamesinput",level:4}],u={toc:l};function m(e){var n=e.components,r=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The necessary fields in order to create a new demandHq"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input DemandHqCreateInput {\n  defaultCurrency: ResonanceCurrency!\n  defaultLocaleType: ResonanceLocaleType!\n  demandSubscriptionCodes: [DemandSubscriptionCode!]\n  description: String\n  name: String!\n  notificationUserNames: DemandHqNotificationUserNamesInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"defaultcurrency-resonancecurrency"},(0,i.kt)("inlineCode",{parentName:"h4"},"defaultCurrency")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/resonance-currency"},(0,i.kt)("inlineCode",{parentName:"a"},"ResonanceCurrency")),")"),(0,i.kt)("h4",{id:"defaultlocaletype-resonancelocaletype"},(0,i.kt)("inlineCode",{parentName:"h4"},"defaultLocaleType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/resonance-locale-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType")),")"),(0,i.kt)("h4",{id:"demandsubscriptioncodes-demandsubscriptioncode"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandSubscriptionCodes")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/demand-subscription-code"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandSubscriptionCode")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"notificationusernames-demandhqnotificationusernamesinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"notificationUserNames")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/demand-hq-notification-user-names-input"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqNotificationUserNamesInput")),")"),(0,i.kt)("p",null,"These users will get notified if something requires attention for this DemandHq.\nIf none are provided, ownerUserName will be notified."))}m.isMDXComponent=!0}}]);