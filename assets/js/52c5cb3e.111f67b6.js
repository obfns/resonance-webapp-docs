"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9895],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=n.createContext({}),o=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=o(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=o(t),f=p,g=c["".concat(l,".").concat(f)]||c[f]||u[f]||i;return t?n.createElement(g,s(s({ref:r},d),{},{components:t})):n.createElement(g,s({ref:r},d))}));function f(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var i=t.length,s=new Array(i);s[0]=c;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:p,s[1]=a;for(var o=2;o<i;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},18833:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u}});var n=t(87462),p=t(63366),i=(t(67294),t(3905)),s=["components"],a={id:"address-input",title:"AddressInput"},l=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/address-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/address-input",title:"AddressInput",description:"The input type for an Address",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/address-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/address-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/address-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/address-input.mdx",tags:[],version:"current",frontMatter:{id:"address-input",title:"AddressInput"},sidebar:"apisSidebar",previous:{title:"SupplyEventSubscriptionEntityType",permalink:"/developers/supplier-apis/supply-api/graphql/reference/enums/supply-event-subscription-entity-type"},next:{title:"FloatRangeFilterInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/float-range-filter-input"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>city</code> (<code>String</code>)",id:"city-string",level:4},{value:"<code>country</code> (<code>String</code>)",id:"country-string",level:4},{value:"<code>phoneNumber</code> (<code>String</code>)",id:"phonenumber-string",level:4},{value:"<code>postalCode</code> (<code>String</code>)",id:"postalcode-string",level:4},{value:"<code>state</code> (<code>String</code>)",id:"state-string",level:4},{value:"<code>streetAddress1</code> (<code>String</code>)",id:"streetaddress1-string",level:4},{value:"<code>streetAddress2</code> (<code>String</code>)",id:"streetaddress2-string",level:4}],c={toc:u};function f(e){var r=e.components,t=(0,p.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The input type for an Address"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddressInput {\n  city: String!\n  country: String!\n  phoneNumber: String\n  postalCode: String!\n  state: String!\n  streetAddress1: String!\n  streetAddress2: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"city-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"city")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The city of the address"),(0,i.kt)("h4",{id:"country-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"country")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The country of the address"),(0,i.kt)("h4",{id:"phonenumber-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"phoneNumber")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The phone number of the address. Format +11231231234"),(0,i.kt)("h4",{id:"postalcode-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"postalCode")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The zip or postal code of the address"),(0,i.kt)("h4",{id:"state-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"state")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The state of the address"),(0,i.kt)("h4",{id:"streetaddress1-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"streetAddress1")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The first line of the street address"),(0,i.kt)("h4",{id:"streetaddress2-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"streetAddress2")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The second line of the street address"))}f.isMDXComponent=!0}}]);