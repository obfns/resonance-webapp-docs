"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[7117],{3905:function(e,r,t){t.d(r,{Zo:function(){return o},kt:function(){return f}});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},o=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),k=c(t),f=p,d=k["".concat(l,".").concat(f)]||k[f]||s[f]||i;return t?n.createElement(d,u(u({ref:r},o),{},{components:t})):n.createElement(d,u({ref:r},o))}));function f(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var i=t.length,u=new Array(i);u[0]=k;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:p,u[1]=a;for(var c=2;c<i;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},75335:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return o},toc:function(){return s},default:function(){return f}});var n=t(87462),p=t(63366),i=(t(67294),t(3905)),u=["components"],a={id:"create-supplier-quick-link",title:"createSupplierQuickLink"},l=void 0,c={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-quick-link",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-quick-link",title:"createSupplierQuickLink",description:"Create a new SupplierQuickLink",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-quick-link.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-quick-link",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-quick-link",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-quick-link.mdx",tags:[],version:"current",frontMatter:{id:"create-supplier-quick-link",title:"createSupplierQuickLink"},sidebar:"apisSidebar",previous:{title:"createSupplierProduct",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product"},next:{title:"createSupplierVariantComposite",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-composite"}},o={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierQuickLinkCreateInput</code>)",id:"input-supplierquicklinkcreateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierQuickLink</code>",id:"supplierquicklink",level:4}],k={toc:s};function f(e){var r=e.components,t=(0,p.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},k,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create a new SupplierQuickLink"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"createSupplierQuickLink(\n  input: SupplierQuickLinkCreateInput!\n): SupplierQuickLink!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-supplierquicklinkcreateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkCreateInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplierquicklink"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-quick-link"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierQuickLink"))),(0,i.kt)("p",null,"Represents a link to your app from inside the Resonance Supply Portal"))}f.isMDXComponent=!0}}]);