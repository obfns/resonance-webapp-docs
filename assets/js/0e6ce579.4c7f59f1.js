"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[7233],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=p,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33081:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(87462),p=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"delete-supplier-variant-content-item",title:"deleteSupplierVariantContentItem"},o=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-content-item",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-content-item",title:"deleteSupplierVariantContentItem",description:"Delete an existing SupplierVariantContentItem",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-content-item.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-content-item",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-content-item",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-content-item.mdx",tags:[],version:"current",frontMatter:{id:"delete-supplier-variant-content-item",title:"deleteSupplierVariantContentItem"},sidebar:"apisSidebar",previous:{title:"deleteSupplierQuickLink",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-quick-link"},next:{title:"deleteSupplierVariantCustomData",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-variant-custom-data"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierVariantContentItemDeleteInput</code>)",id:"input-suppliervariantcontentitemdeleteinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierVariantContentItemDeleteResponse</code>",id:"suppliervariantcontentitemdeleteresponse",level:4}],d={toc:c};function m(e){var t=e.components,n=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Delete an existing SupplierVariantContentItem"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteSupplierVariantContentItem(\n  input: SupplierVariantContentItemDeleteInput\n): SupplierVariantContentItemDeleteResponse!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-suppliervariantcontentitemdeleteinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-content-item-delete-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantContentItemDeleteInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"suppliervariantcontentitemdeleteresponse"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-content-item-delete-response"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantContentItemDeleteResponse"))),(0,i.kt)("p",null,"The response type for deleteSupplierVariantContentItem"))}m.isMDXComponent=!0}}]);