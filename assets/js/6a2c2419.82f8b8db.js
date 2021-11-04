"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5021],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),s=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,v=d["".concat(o,".").concat(f)]||d[f]||c[f]||p;return n?t.createElement(v,i(i({ref:r},u),{},{components:n})):t.createElement(v,i({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<p;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4700:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var t=n(3117),a=n(102),p=(n(7294),n(3905)),i=["components"],l={id:"supplier-variant-locale-create-input",title:"SupplierVariantLocaleCreateInput"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input",isDocsHomePage:!1,title:"SupplierVariantLocaleCreateInput",description:"The necessary fields in order to create a new supplierVariantLocale",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-locale-create-input",title:"SupplierVariantLocaleCreateInput"},sidebar:"apisSidebar",previous:{title:"SupplierVariantImageFromUrlInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-image-from-url-input"},next:{title:"SupplierVariantLocaleUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>featureBullets</code> ([String])",id:"featurebullets-string",children:[],level:4},{value:"<code>isDefault</code> (Boolean!)",id:"isdefault-boolean",children:[],level:4},{value:"<code>localeType</code> (ResonanceLocaleType!)",id:"localetype-resonancelocaletype",children:[],level:4},{value:"<code>productDescription</code> (String)",id:"productdescription-string",children:[],level:4},{value:"<code>supplierId</code> (ID!)",id:"supplierid-id",children:[],level:4},{value:"<code>supplierVariantId</code> (ID!)",id:"suppliervariantid-id",children:[],level:4}],level:3}],c={toc:u};function d(e){var r=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The necessary fields in order to create a new supplierVariantLocale"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantLocaleCreateInput {\n  featureBullets: [String]\n  isDefault: Boolean!\n  localeType: ResonanceLocaleType!\n  productDescription: String\n  supplierId: ID!\n  supplierVariantId: ID!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"featurebullets-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"featureBullets")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,p.kt)("h4",{id:"isdefault-boolean"},(0,p.kt)("inlineCode",{parentName:"h4"},"isDefault")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/boolean"},(0,p.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,p.kt)("h4",{id:"localetype-resonancelocaletype"},(0,p.kt)("inlineCode",{parentName:"h4"},"localeType")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale-type"},(0,p.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType!")),")"),(0,p.kt)("h4",{id:"productdescription-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"productDescription")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"supplierid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h4",{id:"suppliervariantid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierVariantId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"))}d.isMDXComponent=!0}}]);