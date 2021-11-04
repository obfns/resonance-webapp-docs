"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5039],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var p=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=p.createContext({}),s=function(e){var r=p.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return p.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,v=d["".concat(o,".").concat(f)]||d[f]||c[f]||a;return t?p.createElement(v,i(i({ref:r},u),{},{components:t})):p.createElement(v,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return p.createElement.apply(null,i)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9967:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var p=t(3117),n=t(102),a=(t(7294),t(3905)),i=["components"],l={id:"supplier-variant-locale-update-input",title:"SupplierVariantLocaleUpdateInput"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input",isDocsHomePage:!1,title:"SupplierVariantLocaleUpdateInput",description:"The necessary fields in order to update a supplierVariantLocale.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-locale-update-input",title:"SupplierVariantLocaleUpdateInput"},sidebar:"apisSidebar",previous:{title:"SupplierVariantLocaleCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input"},next:{title:"SupplierVariantOptionInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-option-input"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>featureBullets</code> ([String])",id:"featurebullets-string",children:[],level:4},{value:"<code>isDefault</code> (Boolean)",id:"isdefault-boolean",children:[],level:4},{value:"<code>localeType</code> (ResonanceLocaleType!)",id:"localetype-resonancelocaletype",children:[],level:4},{value:"<code>productDescription</code> (String)",id:"productdescription-string",children:[],level:4},{value:"<code>supplierId</code> (ID!)",id:"supplierid-id",children:[],level:4},{value:"<code>supplierVariantId</code> (ID!)",id:"suppliervariantid-id",children:[],level:4}],level:3}],c={toc:u};function d(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,p.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The necessary fields in order to update a supplierVariantLocale.\nID fields are required, others are optional, only included fields will be updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantLocaleUpdateInput {\n  featureBullets: [String]\n  isDefault: Boolean\n  localeType: ResonanceLocaleType!\n  productDescription: String\n  supplierId: ID!\n  supplierVariantId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"featurebullets-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"featureBullets")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,a.kt)("p",null,"Limited to 5 bullets"),(0,a.kt)("h4",{id:"isdefault-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"isDefault")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"localetype-resonancelocaletype"},(0,a.kt)("inlineCode",{parentName:"h4"},"localeType")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType!")),")"),(0,a.kt)("h4",{id:"productdescription-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"productDescription")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"supplierid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h4",{id:"suppliervariantid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierVariantId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"))}d.isMDXComponent=!0}}]);