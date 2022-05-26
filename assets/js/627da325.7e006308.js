"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[77462],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87850:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"customer-marketing-consent-input",title:"CustomerMarketingConsentInput"},c=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-marketing-consent-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-marketing-consent-input",title:"CustomerMarketingConsentInput",description:"Input for updating a Customer's marketing consent",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-marketing-consent-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-marketing-consent-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-marketing-consent-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-marketing-consent-input.mdx",tags:[],version:"current",frontMatter:{id:"customer-marketing-consent-input",title:"CustomerMarketingConsentInput"},sidebar:"apisSidebar",previous:{title:"CustomerCreateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-create-input"},next:{title:"CustomerUpdateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/customer-update-input"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>consentLevel</code> (<code>CustomerMarketingConsentLevel</code>)",id:"consentlevel-customermarketingconsentlevel",level:4},{value:"<code>consentedAt</code> (<code>Date</code>)",id:"consentedat-date",level:4},{value:"<code>hasConsented</code> (<code>Boolean</code>)",id:"hasconsented-boolean",level:4},{value:"<code>source</code> (<code>String</code>)",id:"source-string",level:4}],u={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input for updating a Customer's marketing consent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input CustomerMarketingConsentInput {\n  consentLevel: CustomerMarketingConsentLevel!\n  consentedAt: Date!\n  hasConsented: Boolean!\n  source: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"consentlevel-customermarketingconsentlevel"},(0,o.kt)("inlineCode",{parentName:"h4"},"consentLevel")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/customer-marketing-consent-level"},(0,o.kt)("inlineCode",{parentName:"a"},"CustomerMarketingConsentLevel")),")"),(0,o.kt)("p",null,"The level at which the Customer has consented to marketing"),(0,o.kt)("h4",{id:"consentedat-date"},(0,o.kt)("inlineCode",{parentName:"h4"},"consentedAt")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,o.kt)("p",null,"The date the associated Customer agreed to the marketing consent"),(0,o.kt)("h4",{id:"hasconsented-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"hasConsented")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"source-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"source")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Optional field to store where consent was sourced from"))}m.isMDXComponent=!0}}]);