"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[72296],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),s=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(o.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=n,h=u["".concat(o,".").concat(f)]||u[f]||d[f]||p;return t?a.createElement(h,i(i({ref:r},c),{},{components:t})):a.createElement(h,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=u;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<p;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},46850:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=t(87462),n=t(63366),p=(t(67294),t(3905)),i=["components"],l={id:"supplier-variant-locale",title:"SupplierVariantLocale"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-locale",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-locale",title:"SupplierVariantLocale",description:"This has a many to one relationship with SupplierVariant, and provides localized language data for the appropriate fields.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-locale.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-locale",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-locale",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-locale.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-locale",title:"SupplierVariantLocale"},sidebar:"apisSidebar",previous:{title:"SupplierVariantImageFromFileResponse",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-image-from-file-response"},next:{title:"SupplierVariantOption",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-option"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>createdAt</code> (<code>String</code>)",id:"createdat-string",level:4},{value:"<code>featureBullets</code> (<code>String</code>)",id:"featurebullets-string",level:4},{value:"<code>isDefault</code> (<code>Boolean</code>)",id:"isdefault-boolean",level:4},{value:"<code>localeType</code> (<code>ResonanceLocaleType</code>)",id:"localetype-resonancelocaletype",level:4},{value:"<code>productDescription</code> (<code>String</code>)",id:"productdescription-string",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4},{value:"<code>supplierVariantId</code> (<code>ID</code>)",id:"suppliervariantid-id",level:4},{value:"<code>updatedAt</code> (<code>String</code>)",id:"updatedat-string",level:4},{value:"<code>updatedBy</code> (<code>String</code>)",id:"updatedby-string",level:4}],u={toc:d};function f(e){var r=e.components,t=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"This has a many to one relationship with SupplierVariant, and provides localized language data for the appropriate fields.\nThere will often only be one of these, and it should be the one set in defaultLocale for the supplier."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantLocale {\n  createdAt: String!\n  featureBullets: [String]\n  isDefault: Boolean!\n  localeType: ResonanceLocaleType!\n  productDescription: String\n  supplierId: ID!\n  supplierVariantId: ID!\n  updatedAt: String!\n  updatedBy: String!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"createdat-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"featurebullets-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"featureBullets")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("p",null,"Limited to 5 bullets"),(0,p.kt)("h4",{id:"isdefault-boolean"},(0,p.kt)("inlineCode",{parentName:"h4"},"isDefault")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/boolean"},(0,p.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,p.kt)("h4",{id:"localetype-resonancelocaletype"},(0,p.kt)("inlineCode",{parentName:"h4"},"localeType")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale-type"},(0,p.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType")),")"),(0,p.kt)("h4",{id:"productdescription-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"productDescription")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"supplierid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"suppliervariantid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierVariantId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"updatedat-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"updatedby-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);