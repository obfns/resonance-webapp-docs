"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[9104],{3905:function(e,r,p){p.d(r,{Zo:function(){return c},kt:function(){return k}});var t=p(67294);function n(e,r,p){return r in e?Object.defineProperty(e,r,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[r]=p,e}function i(e,r){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),p.push.apply(p,t)}return p}function u(e){for(var r=1;r<arguments.length;r++){var p=null!=arguments[r]?arguments[r]:{};r%2?i(Object(p),!0).forEach((function(r){n(e,r,p[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):i(Object(p)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(p,r))}))}return e}function a(e,r){if(null==e)return{};var p,t,n=function(e,r){if(null==e)return{};var p,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)p=i[t],r.indexOf(p)>=0||(n[p]=e[p]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)p=i[t],r.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(n[p]=e[p])}return n}var l=t.createContext({}),o=function(e){var r=t.useContext(l),p=r;return e&&(p="function"==typeof e?e(r):u(u({},r),e)),p},c=function(e){var r=o(e.components);return t.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var p=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=o(p),k=n,f=d["".concat(l,".").concat(k)]||d[k]||s[k]||i;return p?t.createElement(f,u(u({ref:r},c),{},{components:p})):t.createElement(f,u({ref:r},c))}));function k(e,r){var p=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=p.length,u=new Array(i);u[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,u[1]=a;for(var o=2;o<i;o++)u[o]=p[o];return t.createElement.apply(null,u)}return t.createElement.apply(null,p)}d.displayName="MDXCreateElement"},33066:function(e,r,p){p.r(r),p.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return o},assets:function(){return c},toc:function(){return s},default:function(){return k}});var t=p(87462),n=p(63366),i=(p(67294),p(3905)),u=["components"],a={id:"update-supplier-quick-link",title:"updateSupplierQuickLink"},l=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-quick-link",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-quick-link",title:"updateSupplierQuickLink",description:"Update a SupplierQuickLink",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-quick-link.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-quick-link",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-quick-link",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-quick-link.mdx",tags:[],version:"current",frontMatter:{id:"update-supplier-quick-link",title:"updateSupplierQuickLink"},sidebar:"apisSidebar",previous:{title:"updateSupplierProducts",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-products"},next:{title:"updateSupplierVariantContentItem",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-variant-content-item"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierQuickLinkUpdateInput</code>)",id:"input-supplierquicklinkupdateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierQuickLink</code>",id:"supplierquicklink",level:4}],d={toc:s};function k(e){var r=e.components,p=(0,n.Z)(e,u);return(0,i.kt)("wrapper",(0,t.Z)({},d,p,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Update a SupplierQuickLink"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSupplierQuickLink(\n  input: SupplierQuickLinkUpdateInput!\n): SupplierQuickLink!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-supplierquicklinkupdateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkUpdateInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplierquicklink"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-quick-link"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierQuickLink"))),(0,i.kt)("p",null,"Represents a link to your app from inside the Resonance Supply Portal"))}k.isMDXComponent=!0}}]);