"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[87535],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(o,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(h,d(d({ref:t},l),{},{components:n})):r.createElement(h,d({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,d=new Array(i);d[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,d[1]=s;for(var p=2;p<i;p++)d[p]=n[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81747:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),d=["components"],s={id:"customer-create-input",title:"CustomerCreateInput"},o=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-create-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-create-input",title:"CustomerCreateInput",description:"Input for creating a Customer",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-create-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-create-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-create-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-create-input.mdx",tags:[],version:"current",frontMatter:{id:"customer-create-input",title:"CustomerCreateInput"},sidebar:"apisSidebar",previous:{title:"CustomerAddressUpdateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-address-update-input"},next:{title:"CustomerMarketingConsentInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-marketing-consent-input"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>defaultBillingAddressId</code> (<code>ID</code>)",id:"defaultbillingaddressid-id",level:4},{value:"<code>defaultShippingAddressId</code> (<code>ID</code>)",id:"defaultshippingaddressid-id",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>emailAddress</code> (<code>String</code>)",id:"emailaddress-string",level:4},{value:"<code>emailMarketingConsent</code> (<code>CustomerMarketingConsentInput</code>)",id:"emailmarketingconsent-customermarketingconsentinput",level:4},{value:"<code>externalCustomerId</code> (<code>ID</code>)",id:"externalcustomerid-id",level:4},{value:"<code>firstName</code> (<code>String</code>)",id:"firstname-string",level:4},{value:"<code>lastName</code> (<code>String</code>)",id:"lastname-string",level:4},{value:"<code>phoneNumber</code> (<code>String</code>)",id:"phonenumber-string",level:4},{value:"<code>smsMarketingConsent</code> (<code>CustomerMarketingConsentInput</code>)",id:"smsmarketingconsent-customermarketingconsentinput",level:4},{value:"<code>status</code> (<code>CustomerStatus</code>)",id:"status-customerstatus",level:4},{value:"<code>storefrontId</code> (<code>ID</code>)",id:"storefrontid-id",level:4},{value:"<code>tags</code> (<code>String</code>)",id:"tags-string",level:4}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input for creating a Customer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input CustomerCreateInput {\n  defaultBillingAddressId: ID\n  defaultShippingAddressId: ID\n  demandHqId: ID!\n  emailAddress: String!\n  emailMarketingConsent: CustomerMarketingConsentInput\n  externalCustomerId: ID\n  firstName: String\n  lastName: String\n  phoneNumber: String\n  smsMarketingConsent: CustomerMarketingConsentInput\n  status: CustomerStatus!\n  storefrontId: ID!\n  tags: [String]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"defaultbillingaddressid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"defaultBillingAddressId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"The CustomerAddressId for the default billing address for this Customer"),(0,i.kt)("h4",{id:"defaultshippingaddressid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"defaultShippingAddressId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"The CustomerAddressId for the default shipping address for this Customer"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"emailaddress-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"emailAddress")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The email address associated with the Customer, must be unique to the storefront, limit 256 characters"),(0,i.kt)("h4",{id:"emailmarketingconsent-customermarketingconsentinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"emailMarketingConsent")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-marketing-consent-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomerMarketingConsentInput")),")"),(0,i.kt)("h4",{id:"externalcustomerid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"externalCustomerId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"Reference to the storefront's customer authentication system. Limit 256 characters.\nThis field is required if this customer is going to access any authenticated data (like their orders)."),(0,i.kt)("h4",{id:"firstname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"firstName")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The first name of the Customer, limit 256 characters"),(0,i.kt)("h4",{id:"lastname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"lastName")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The last name of the Customer, limit 256 characters"),(0,i.kt)("h4",{id:"phonenumber-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"phoneNumber")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Must be unique to the Storefront. Limit 64 characters. Format +11231231234"),(0,i.kt)("h4",{id:"smsmarketingconsent-customermarketingconsentinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"smsMarketingConsent")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-marketing-consent-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomerMarketingConsentInput")),")"),(0,i.kt)("h4",{id:"status-customerstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/customer-status"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomerStatus")),")"),(0,i.kt)("h4",{id:"storefrontid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"storefrontId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"tags-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"tags")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);