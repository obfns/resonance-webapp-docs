"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6055],{3905:function(e,r,p){p.d(r,{Zo:function(){return u},kt:function(){return m}});var t=p(67294);function o(e,r,p){return r in e?Object.defineProperty(e,r,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[r]=p,e}function i(e,r){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),p.push.apply(p,t)}return p}function n(e){for(var r=1;r<arguments.length;r++){var p=null!=arguments[r]?arguments[r]:{};r%2?i(Object(p),!0).forEach((function(r){o(e,r,p[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):i(Object(p)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(p,r))}))}return e}function l(e,r){if(null==e)return{};var p,t,o=function(e,r){if(null==e)return{};var p,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)p=i[t],r.indexOf(p)>=0||(o[p]=e[p]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)p=i[t],r.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(o[p]=e[p])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),p=r;return e&&(p="function"==typeof e?e(r):n(n({},r),e)),p},u=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},a={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var p=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(p),m=o,f=d["".concat(c,".").concat(m)]||d[m]||a[m]||i;return p?t.createElement(f,n(n({ref:r},u),{},{components:p})):t.createElement(f,n({ref:r},u))}));function m(e,r){var p=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=p.length,n=new Array(i);n[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var s=2;s<i;s++)n[s]=p[s];return t.createElement.apply(null,n)}return t.createElement.apply(null,p)}d.displayName="MDXCreateElement"},29764:function(e,r,p){p.r(r),p.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return a},default:function(){return m}});var t=p(87462),o=p(63366),i=(p(67294),p(3905)),n=["components"],l={id:"supplier-product-composite",title:"SupplierProductComposite"},c=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-composite",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-composite",title:"SupplierProductComposite",description:"Response for creating a SupplierProductComposite",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-composite.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-composite",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-composite",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-composite.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-composite",title:"SupplierProductComposite"},sidebar:"apisSidebar",previous:{title:"SupplierProductCompositeCreateResponse",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-composite-create-response"},next:{title:"SupplierProductConnectionWithSearch",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-connection-with-search"}},u={},a=[{value:"Fields",id:"fields",level:3},{value:"<code>supplierProduct</code> (<code>SupplierProduct</code>)",id:"supplierproduct-supplierproduct",level:4},{value:"<code>supplierProductContentItems</code> (<code>SupplierProductContentItem</code>)",id:"supplierproductcontentitems-supplierproductcontentitem",level:4},{value:"<code>supplierProductLocales</code> (<code>SupplierProductLocale</code>)",id:"supplierproductlocales-supplierproductlocale",level:4},{value:"<code>supplierVariantComposites</code> (<code>SupplierVariantComposite</code>)",id:"suppliervariantcomposites-suppliervariantcomposite",level:4}],d={toc:a};function m(e){var r=e.components,p=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,t.Z)({},d,p,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Response for creating a SupplierProductComposite"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierProductComposite {\n  supplierProduct: SupplierProduct!\n  supplierProductContentItems: [SupplierProductContentItem]\n  supplierProductLocales: [SupplierProductLocale]\n  supplierVariantComposites: [SupplierVariantComposite]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"supplierproduct-supplierproduct"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierProduct")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierProduct")),")"),(0,i.kt)("h4",{id:"supplierproductcontentitems-supplierproductcontentitem"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierProductContentItems")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItem")),")"),(0,i.kt)("h4",{id:"supplierproductlocales-supplierproductlocale"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierProductLocales")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-locale"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierProductLocale")),")"),(0,i.kt)("h4",{id:"suppliervariantcomposites-suppliervariantcomposite"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierVariantComposites")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-composite"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantComposite")),")"))}m.isMDXComponent=!0}}]);