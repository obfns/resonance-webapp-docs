"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6080],{3905:function(e,r,p){p.d(r,{Zo:function(){return s},kt:function(){return k}});var i=p(7294);function n(e,r,p){return r in e?Object.defineProperty(e,r,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[r]=p,e}function t(e,r){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),p.push.apply(p,i)}return p}function l(e){for(var r=1;r<arguments.length;r++){var p=null!=arguments[r]?arguments[r]:{};r%2?t(Object(p),!0).forEach((function(r){n(e,r,p[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):t(Object(p)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(p,r))}))}return e}function a(e,r){if(null==e)return{};var p,i,n=function(e,r){if(null==e)return{};var p,i,n={},t=Object.keys(e);for(i=0;i<t.length;i++)p=t[i],r.indexOf(p)>=0||(n[p]=e[p]);return n}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)p=t[i],r.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(n[p]=e[p])}return n}var u=i.createContext({}),c=function(e){var r=i.useContext(u),p=r;return e&&(p="function"==typeof e?e(r):l(l({},r),e)),p},s=function(e){var r=c(e.components);return i.createElement(u.Provider,{value:r},e.children)},o={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},d=i.forwardRef((function(e,r){var p=e.components,n=e.mdxType,t=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(p),k=n,f=d["".concat(u,".").concat(k)]||d[k]||o[k]||t;return p?i.createElement(f,l(l({ref:r},s),{},{components:p})):i.createElement(f,l({ref:r},s))}));function k(e,r){var p=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var t=p.length,l=new Array(t);l[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var c=2;c<t;c++)l[c]=p[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,p)}d.displayName="MDXCreateElement"},9120:function(e,r,p){p.r(r),p.d(r,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var i=p(7462),n=p(3366),t=(p(7294),p(3905)),l=["components"],a={id:"supplier-quick-link-create-input",title:"SupplierQuickLinkCreateInput"},u=void 0,c={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-create-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-create-input",title:"SupplierQuickLinkCreateInput",description:"The required input fields to create a new SupplierQuickLink",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-create-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-create-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-quick-link-create-input",title:"SupplierQuickLinkCreateInput"},sidebar:"apisSidebar",previous:{title:"SupplierProductUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-update-input"},next:{title:"SupplierQuickLinkUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-update-input"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>appId</code> (ID)",id:"appid-id",children:[],level:4},{value:"<code>dynamicUrl</code> (String)",id:"dynamicurl-string",children:[],level:4},{value:"<code>label</code> (String)",id:"label-string",children:[],level:4},{value:"<code>quickLinkType</code> (SupplierQuickLinkType)",id:"quicklinktype-supplierquicklinktype",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4}],level:3}],o={toc:s};function d(e){var r=e.components,p=(0,n.Z)(e,l);return(0,t.kt)("wrapper",(0,i.Z)({},o,p,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"The required input fields to create a new SupplierQuickLink"),(0,t.kt)("p",null,"You must be calling from the pertaining app's AppClient"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierQuickLinkCreateInput {\n  appId: ID!\n  dynamicUrl: String!\n  label: String!\n  quickLinkType: SupplierQuickLinkType!\n  supplierId: ID!\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"appid-id"},(0,t.kt)("inlineCode",{parentName:"h4"},"appId")," (",(0,t.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,t.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,t.kt)("p",null,"The Id of the App this quicklink pertains to."),(0,t.kt)("h4",{id:"dynamicurl-string"},(0,t.kt)("inlineCode",{parentName:"h4"},"dynamicUrl")," (",(0,t.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,t.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,t.kt)("p",null,"This can have dynamic parts, using ","[supplierProductId]"," format. It represents where the link goes."),(0,t.kt)("h4",{id:"label-string"},(0,t.kt)("inlineCode",{parentName:"h4"},"label")," (",(0,t.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,t.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,t.kt)("p",null,"What the text for the link should be to the user."),(0,t.kt)("h4",{id:"quicklinktype-supplierquicklinktype"},(0,t.kt)("inlineCode",{parentName:"h4"},"quickLinkType")," (",(0,t.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-quick-link-type"},(0,t.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkType")),")"),(0,t.kt)("p",null,"Indicates which page the SupplierQuickLink would live on"),(0,t.kt)("h4",{id:"supplierid-id"},(0,t.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,t.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,t.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,t.kt)("p",null,"The Id of the Supplier this quicklink pertains to (the one that has installed your app)."))}d.isMDXComponent=!0}}]);