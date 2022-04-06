"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[911],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=p,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||i;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function f(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87599:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return f}});var r=t(87462),p=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"supplier-variant-handling-cost-input",title:"SupplierVariantHandlingCostInput"},o=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-handling-cost-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-handling-cost-input",title:"SupplierVariantHandlingCostInput",description:"Input object to indicate both amount and unit of handling cost.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-handling-cost-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-handling-cost-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-handling-cost-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-handling-cost-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-handling-cost-input",title:"SupplierVariantHandlingCostInput"},sidebar:"apisSidebar",previous:{title:"SupplierVariantCustomDataUpsertInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-custom-data-upsert-input"},next:{title:"SupplierVariantImageFromFileInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-image-from-file-input"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>amount</code> (<code>Float</code>)",id:"amount-float",level:4},{value:"<code>unit</code> (<code>SupplierVariantHandlingCostUnit</code>)",id:"unit-suppliervarianthandlingcostunit",level:4}],d={toc:c};function f(e){var n=e.components,t=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input object to indicate both amount and unit of handling cost."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantHandlingCostInput {\n  amount: Float!\n  unit: SupplierVariantHandlingCostUnit!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"amount-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"amount")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"unit-suppliervarianthandlingcostunit"},(0,i.kt)("inlineCode",{parentName:"h4"},"unit")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-handling-cost-unit"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantHandlingCostUnit")),")"))}f.isMDXComponent=!0}}]);