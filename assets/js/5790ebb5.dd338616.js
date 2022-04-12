"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[3990],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=p,h=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:p,a[1]=o;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90301:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(87462),p=r(63366),i=(r(67294),r(3905)),a=["components"],o={id:"supplier-product-create-input",title:"SupplierProductCreateInput"},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-create-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-create-input",title:"SupplierProductCreateInput",description:"The necessary fields to create a new SupplierProduct.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-create-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-create-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-create-input",title:"SupplierProductCreateInput"},sidebar:"apisSidebar",previous:{title:"SupplierProductContentItemUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-content-item-update-input"},next:{title:"SupplierProductCustomDataUpsertInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-custom-data-upsert-input"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>externalProductId</code> (<code>String</code>)",id:"externalproductid-string",level:4},{value:"<code>optionLabels</code> (<code>String</code>)",id:"optionlabels-string",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4},{value:"<code>tags</code> (<code>String</code>)",id:"tags-string",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4},{value:"<code>vendor</code> (<code>String</code>)",id:"vendor-string",level:4}],d={toc:c};function f(e){var t=e.components,r=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The necessary fields to create a new SupplierProduct.\nstatus will be initially set to DRAFT"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierProductCreateInput {\n  externalProductId: String!\n  optionLabels: [String!]!\n  supplierId: ID!\n  tags: [String!]\n  title: String!\n  vendor: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"externalproductid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"externalProductId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Passed along in PurchaseOrders so the Supplier can identify items in their warehouse."),(0,i.kt)("h4",{id:"optionlabels-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"optionLabels")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The labels for the options of this product, i.e. ",'["Color", "Size"]',"\nThese will match with the order of the optionValues on the SupplierVariants."),(0,i.kt)("p",null,'Must have 1-3, and it should match the number of options in the variants, but there is no validation to do so.\nSet the first optionLabel to "No Option" if you don\'t want to use options for this product.\nSee ',(0,i.kt)("a",{parentName:"p",href:"https://docs.buildresonance.com/concepts/products/#no-option-products"},"https://docs.buildresonance.com/concepts/products/#no-option-products")," for more info."),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"Reference to the Supplier that owns this product."),(0,i.kt)("h4",{id:"tags-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"tags")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The title of the product."),(0,i.kt)("h4",{id:"vendor-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"vendor")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The brand or manufacturer of the product."))}f.isMDXComponent=!0}}]);