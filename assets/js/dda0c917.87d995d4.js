"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[133],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):d(d({},n),e)),a},s=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return a?t.createElement(h,d(d({ref:n},s),{},{components:a})):t.createElement(h,d({ref:n},s))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,d=new Array(i);d[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var l=2;l<i;l++)d[l]=a[l];return t.createElement.apply(null,d)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8886:function(e,n,a){a.r(n),a.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),d=["components"],o={id:"variant-create-input",title:"VariantCreateInput"},p=void 0,l={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/variant-create-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/variant-create-input",title:"VariantCreateInput",description:"The necessary fields in order to create a new variant",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/variant-create-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/variant-create-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/variant-create-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/variant-create-input.mdx",tags:[],version:"current",frontMatter:{id:"variant-create-input",title:"VariantCreateInput"},sidebar:"apisSidebar",previous:{title:"StringFilterInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/string-filter-input"},next:{title:"VariantShippingDimensionsInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/variant-shipping-dimensions-input"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>barcode</code> (<code>String</code>)",id:"barcode-string",level:4},{value:"<code>casePack</code> (<code>Int</code>)",id:"casepack-int",level:4},{value:"<code>contentItemIds</code> (<code>ID</code>)",id:"contentitemids-id",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>isTaxable</code> (<code>Boolean</code>)",id:"istaxable-boolean",level:4},{value:"<code>manufacturer</code> (<code>String</code>)",id:"manufacturer-string",level:4},{value:"<code>mapPrice</code> (<code>Float</code>)",id:"mapprice-float",level:4},{value:"<code>mpn</code> (<code>String</code>)",id:"mpn-string",level:4},{value:"<code>msrp</code> (<code>Float</code>)",id:"msrp-float",level:4},{value:"<code>optionValues</code> (<code>String</code>)",id:"optionvalues-string",level:4},{value:"<code>position</code> (<code>Int</code>)",id:"position-int",level:4},{value:"<code>price</code> (<code>Float</code>)",id:"price-float",level:4},{value:"<code>productId</code> (<code>ID</code>)",id:"productid-id",level:4},{value:"<code>shippingDimensions</code> (<code>VariantShippingDimensionsInput</code>)",id:"shippingdimensions-variantshippingdimensionsinput",level:4},{value:"<code>sku</code> (<code>String</code>)",id:"sku-string",level:4},{value:"<code>standardizedColor</code> (<code>VariantStandardizedColor</code>)",id:"standardizedcolor-variantstandardizedcolor",level:4},{value:"<code>weight</code> (<code>VariantWeightInput</code>)",id:"weight-variantweightinput",level:4}],u={toc:c};function m(e){var n=e.components,a=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The necessary fields in order to create a new variant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input VariantCreateInput {\n  barcode: String!\n  casePack: Int\n  contentItemIds: [ID]\n  demandHqId: ID!\n  isTaxable: Boolean\n  manufacturer: String\n  mapPrice: Float\n  mpn: String\n  msrp: Float\n  optionValues: [String!]!\n  position: Int\n  price: Float!\n  productId: ID!\n  shippingDimensions: VariantShippingDimensionsInput\n  sku: String\n  standardizedColor: VariantStandardizedColor\n  weight: VariantWeightInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"barcode-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"barcode")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"UPC, ISBN, GTIN, etc."),(0,i.kt)("h4",{id:"casepack-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"casePack")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Quantity in one variant (i.e. 12-pack). Must be a positive integer."),(0,i.kt)("h4",{id:"contentitemids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentItemIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"Associates contentItems with this variant"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"istaxable-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isTaxable")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"manufacturer-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"manufacturer")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Often same as vendor, but not always."),(0,i.kt)("h4",{id:"mapprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"mapPrice")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Minimum Advertised Price. Must be a positive number."),(0,i.kt)("h4",{id:"mpn-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"mpn")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Manufacturer Part Number"),(0,i.kt)("h4",{id:"msrp-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"msrp")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Manufacturer's Suggested Retail Price. Must be a positive number."),(0,i.kt)("h4",{id:"optionvalues-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"optionValues")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"An array of the option values that make up this variant.\nFor example, a product with a color and size option would have two option values,\none for each of the color and size options, i.e. ",'["Red", "Small"]','\nMust have 1-3, and it should match the number of options in the product, but there is no validation to do so.\nSet this to "No Option" if you don\'t want to use options for this product and this is the only variant.\nSee ',(0,i.kt)("a",{parentName:"p",href:"https://docs.buildresonance.com/concepts/products/#no-option-products"},"https://docs.buildresonance.com/concepts/products/#no-option-products")," for more info."),(0,i.kt)("h4",{id:"position-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"position")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Used to determine what order the content comes out in.\nPositive Integers are allowed, up to 9,999,999,999, and it does not have to be unique or sequential."),(0,i.kt)("h4",{id:"price-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"price")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Price for the defaultCurrency, can be any positive float number value."),(0,i.kt)("h4",{id:"productid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"productId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"shippingdimensions-variantshippingdimensionsinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"shippingDimensions")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/variant-shipping-dimensions-input"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantShippingDimensionsInput")),")"),(0,i.kt)("h4",{id:"sku-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"sku")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Stock Keeping Unit"),(0,i.kt)("h4",{id:"standardizedcolor-variantstandardizedcolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"standardizedColor")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/variant-standardized-color"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantStandardizedColor")),")"),(0,i.kt)("h4",{id:"weight-variantweightinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"weight")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/variant-weight-input"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantWeightInput")),")"))}m.isMDXComponent=!0}}]);