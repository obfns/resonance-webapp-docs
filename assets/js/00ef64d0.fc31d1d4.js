"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[3914],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),v=i,m=d["".concat(l,".").concat(v)]||d[v]||c[v]||p;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,a=new Array(p);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<p;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),p=(n(7294),n(3905)),a=["components"],o={id:"supplier-variant-in-composite-create-input",title:"SupplierVariantInCompositeCreateInput"},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-in-composite-create-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-in-composite-create-input",title:"SupplierVariantInCompositeCreateInput",description:"The necessary fields in order to create a new supplierVariant inside a SupplierProductCompositeCreateInput",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-in-composite-create-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-in-composite-create-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-in-composite-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-in-composite-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-in-composite-create-input",title:"SupplierVariantInCompositeCreateInput"},sidebar:"apisSidebar",previous:{title:"SupplierVariantImageFromUrlInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-image-from-url-input"},next:{title:"SupplierVariantLocaleCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>contentItemIds</code> (ID)",id:"contentitemids-id",children:[],level:4},{value:"<code>externalVariantId</code> (String)",id:"externalvariantid-string",children:[],level:4},{value:"<code>inventoryPolicy</code> (SupplierVariantInventoryPolicy)",id:"inventorypolicy-suppliervariantinventorypolicy",children:[],level:4},{value:"<code>inventoryQuantity</code> (Int)",id:"inventoryquantity-int",children:[],level:4},{value:"<code>optionValues</code> (String)",id:"optionvalues-string",children:[],level:4}],level:3}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The necessary fields in order to create a new supplierVariant inside a SupplierProductCompositeCreateInput"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantInCompositeCreateInput {\n  contentItemIds: [ID]\n  externalVariantId: String!\n  inventoryPolicy: SupplierVariantInventoryPolicy!\n  inventoryQuantity: Int!\n  optionValues: [String!]!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"contentitemids-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"contentItemIds")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("p",null,"Associates contentItems with this variant"),(0,p.kt)("h4",{id:"externalvariantid-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"externalVariantId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"inventorypolicy-suppliervariantinventorypolicy"},(0,p.kt)("inlineCode",{parentName:"h4"},"inventoryPolicy")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-inventory-policy"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierVariantInventoryPolicy")),")"),(0,p.kt)("h4",{id:"inventoryquantity-int"},(0,p.kt)("inlineCode",{parentName:"h4"},"inventoryQuantity")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,p.kt)("h4",{id:"optionvalues-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"optionValues")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("p",null,"An array of the option values that make up this variant.\nFor example, a product with a color and size option would have two option values,\none for each of the color and size options, i.e. ",'["Red", "Small"]'),(0,p.kt)("p",null,"Must have 1-3, and it should match the number of options in the product, but there is no validation to do so."),(0,p.kt)("p",null,'Set this to "No Option" if you don\'t want to use options for this product and this is the only variant.\nSee ',(0,p.kt)("a",{parentName:"p",href:"https://docs.buildresonance.com/concepts/products/#no-option-products"},"https://docs.buildresonance.com/concepts/products/#no-option-products")," for more info."))}d.isMDXComponent=!0}}]);