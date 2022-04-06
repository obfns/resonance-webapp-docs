"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6694],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=p.createContext({}),u=function(e){var r=p.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return p.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=n,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return t?p.createElement(m,o(o({ref:r},c),{},{components:t})):p.createElement(m,o({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return p.createElement.apply(null,o)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47083:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},assets:function(){return c},toc:function(){return s},default:function(){return f}});var p=t(87462),n=t(63366),a=(t(67294),t(3905)),o=["components"],l={id:"create-supplier-product-locale",title:"createSupplierProductLocale"},i=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product-locale",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product-locale",title:"createSupplierProductLocale",description:"Create a new supplierProductLocale.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product-locale.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product-locale",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product-locale",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product-locale.mdx",tags:[],version:"current",frontMatter:{id:"create-supplier-product-locale",title:"createSupplierProductLocale"},sidebar:"apisSidebar",previous:{title:"createSupplierProductImageFromUrl",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product-image-from-url"},next:{title:"createSupplierProduct",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierProductLocaleCreateInput</code>)",id:"input-supplierproductlocalecreateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierProductLocale</code>",id:"supplierproductlocale",level:4}],d={toc:s};function f(e){var r=e.components,t=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,p.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a new supplierProductLocale."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"createSupplierProductLocale(\n  input: SupplierProductLocaleCreateInput!\n): SupplierProductLocale!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-supplierproductlocalecreateinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-create-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierProductLocaleCreateInput")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"supplierproductlocale"},(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-locale"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierProductLocale"))),(0,a.kt)("p",null,"This has a many to one relationship with SupplierProduct, and provides localized language data for the appropriate fields.\nThere will often only be one of these, and it should be the one set in defaultLocale for the supplier."))}f.isMDXComponent=!0}}]);