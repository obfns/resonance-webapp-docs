"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5652],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),u=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(o.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=n,m=f["".concat(o,".").concat(d)]||f[d]||s[d]||p;return t?a.createElement(m,i(i({ref:r},c),{},{components:t})):a.createElement(m,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=f;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<p;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9209:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var a=t(3117),n=t(102),p=(t(7294),t(3905)),i=["components"],l={id:"create-supplier-variant-locale",title:"createSupplierVariantLocale"},o=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-locale",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-locale",isDocsHomePage:!1,title:"createSupplierVariantLocale",description:"Create a new supplierVariantLocale",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-locale.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-locale",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-locale",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-locale.mdx",tags:[],version:"current",frontMatter:{id:"create-supplier-variant-locale",title:"createSupplierVariantLocale"},sidebar:"apisSidebar",previous:{title:"createSupplierVariantImageFromUrl",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-image-from-url"},next:{title:"createSupplierVariantSupplement",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-supplement"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>input</code> (SupplierVariantLocaleCreateInput!)",id:"input-suppliervariantlocalecreateinput",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"SupplierVariantLocale",id:"suppliervariantlocale",children:[],level:4}],level:3}],s={toc:c};function f(e){var r=e.components,t=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Create a new supplierVariantLocale"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"createSupplierVariantLocale(\n  input: SupplierVariantLocaleCreateInput!\n): SupplierVariantLocale\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"input-suppliervariantlocalecreateinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierVariantLocaleCreateInput!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"suppliervariantlocale"},(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-locale"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierVariantLocale"))),(0,p.kt)("p",null,"This has a many to one relationship with SupplierVariant, and provides localized language data for the appropriate fields.\nThere will often only be one of these, and it should be the one set in defaultLocale for the supplier."))}f.isMDXComponent=!0}}]);