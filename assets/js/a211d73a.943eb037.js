"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5057],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=p.createContext({}),s=function(e){var r=p.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return p.createElement(o.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},u=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,g=u["".concat(o,".").concat(f)]||u[f]||d[f]||a;return t?p.createElement(g,i(i({ref:r},c),{},{components:t})):p.createElement(g,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return p.createElement.apply(null,i)}return p.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9808:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return c},toc:function(){return d},default:function(){return f}});var p=t(87462),n=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"supplier-product-locale",title:"SupplierProductLocale"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-locale",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-locale",title:"SupplierProductLocale",description:"This has a many to one relationship with SupplierProduct, and provides localized language data for the appropriate fields.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-locale.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-locale",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-locale",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-locale.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-locale",title:"SupplierProductLocale"},sidebar:"apisSidebar",previous:{title:"SupplierProductImageFromFileResponse",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-image-from-file-response"},next:{title:"SupplierProductTermAggregations",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-term-aggregations"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>createdAt</code> (<code>String</code>)",id:"createdat-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>featureBullets</code> (<code>String</code>)",id:"featurebullets-string",level:4},{value:"<code>localeType</code> (<code>ResonanceLocaleType</code>)",id:"localetype-resonancelocaletype",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4},{value:"<code>supplierProductId</code> (<code>ID</code>)",id:"supplierproductid-id",level:4},{value:"<code>updatedAt</code> (<code>String</code>)",id:"updatedat-string",level:4},{value:"<code>updatedBy</code> (<code>String</code>)",id:"updatedby-string",level:4}],u={toc:d};function f(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,p.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This has a many to one relationship with SupplierProduct, and provides localized language data for the appropriate fields.\nThere will often only be one of these, and it should be the one set in defaultLocale for the supplier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierProductLocale {\n  createdAt: String!\n  description: String\n  featureBullets: [String]\n  localeType: ResonanceLocaleType!\n  supplierId: ID!\n  supplierProductId: ID!\n  updatedAt: String!\n  updatedBy: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"createdat-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"featurebullets-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"featureBullets")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Limited to 5 bullets"),(0,a.kt)("h4",{id:"localetype-resonancelocaletype"},(0,a.kt)("inlineCode",{parentName:"h4"},"localeType")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType")),")"),(0,a.kt)("h4",{id:"supplierid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"supplierproductid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierProductId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"updatedat-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"updatedby-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);