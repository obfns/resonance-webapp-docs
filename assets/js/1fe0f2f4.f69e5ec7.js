"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[75313],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_position:2},l="DemandHq Permissions (DemandHqIdentity)",d={unversionedId:"concepts/demand-hqs/permissions",id:"concepts/demand-hqs/permissions",title:"DemandHq Permissions (DemandHqIdentity)",description:"DemandHqs wouldn't be very valuable unless you could view and modify them. But, we also don't want just anyone to be able to do anything. Thus, DemandHqIdentities help dictate who (Identity) can do what (to the DemandHq).",source:"@site/docs/concepts/demand-hqs/permissions.md",sourceDirName:"concepts/demand-hqs",slug:"/concepts/demand-hqs/permissions",permalink:"/concepts/demand-hqs/permissions",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/demand-hqs/permissions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"conceptsSidebar",previous:{title:"DemandHQ Concepts",permalink:"/concepts/demand-hqs/demand-hq-concepts"},next:{title:"Cart",permalink:"/concepts/demand-hqs/entities/Cart"}},c={},p=[{value:"Scopes",id:"scopes",level:2},{value:"DemandHq",id:"demandhq",level:3},{value:"DemandHqIdentity",id:"demandhqidentity",level:3},{value:"Collection, Customer, CustomerAddress, Nav, Page, PageContent, Product, ProductContentItem, ProductCustomData, ProductLocale, Redirect, Storefront, StorefrontNavSettings, Variant, VariantCustomData",id:"collection-customer-customeraddress-nav-page-pagecontent-product-productcontentitem-productcustomdata-productlocale-redirect-storefront-storefrontnavsettings-variant-variantcustomdata",level:3},{value:"Roles",id:"roles",level:2},{value:"Admin",id:"admin",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"demandhq-permissions-demandhqidentity"},"DemandHq Permissions (DemandHqIdentity)"),(0,o.kt)("p",null,"DemandHqs wouldn't be very valuable unless you could view and modify them. But, we also don't want just anyone to be able to do anything. Thus, DemandHqIdentities help dictate who (Identity) can do what (to the DemandHq)."),(0,o.kt)("p",null,"Identity can either be a User or an AppClient (these are what Apps use to make changes)."),(0,o.kt)("h2",{id:"scopes"},"Scopes"),(0,o.kt)("p",null,"Scopes are individual permissions given to an entity. Scopes can be either read or write. Read access gives only the ability to VIEW an entity, while write access gives everything read access gives, plus the ability to alter an entity (create, update, delete). Each will be summarized below for both types of access. Scopes are all lowercase and include a slash, after which there is the type of access (",(0,o.kt)("inlineCode",{parentName:"p"},"demandhq/read"),")."),(0,o.kt)("h3",{id:"demandhq"},"DemandHq"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read: allows an identity to see all associated data for the demandHq itself, things like who owns it, the name, who last updated it, etc. This does not given access to see any child entities, only the demandHq itself."),(0,o.kt)("li",{parentName:"ul"},"Write: allows an identity to update certain fields of a demandHq. Anyone can create a demandHq, and demandHqs cannot be deleted.")),(0,o.kt)("h3",{id:"demandhqidentity"},"DemandHqIdentity"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read: allows an identity to see all other identities for a demandHq, and what permissions each has."),(0,o.kt)("li",{parentName:"ul"},"Write: allows an identity to give and change access for other identities on the demandHq. This includes installing, updating, or removing apps, as well as user management.")),(0,o.kt)("h3",{id:"collection-customer-customeraddress-nav-page-pagecontent-product-productcontentitem-productcustomdata-productlocale-redirect-storefront-storefrontnavsettings-variant-variantcustomdata"},"Collection, Customer, CustomerAddress, Nav, Page, PageContent, Product, ProductContentItem, ProductCustomData, ProductLocale, Redirect, Storefront, StorefrontNavSettings, Variant, VariantCustomData"),(0,o.kt)("p",null,"These entities are a bit more straightforward, so we will define them as a group, but first lets talk a little about what each is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Collection: A Collection is a group of products, what may often be referred to as a "Category Page" of some variety. In reality, a collection is far more flexible and can be used to represent any product grouping, and the collectionType can help differentiate between them.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Customer: A Customer is a shopper on a Storefront, who's primary purpose is to create Orders.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CustomerAddress: An address for a Customer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nav: Nav is an item within a navigational hierarchy of some kind, most often viewed as a menu.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Page: A Page is a part of the Demand Domain and represents a page with textual and image content on it, that has nothing to do with products. This can range from "About Us" pages to Blog articles. Use the "pageType" field to differentiate. Pages do not have locales specified, but since everything would be different anyway, "pageType" can be a composite key with locale in it.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"PageContent: The actual content itself, a child object of the Page with a 1-1 relationship.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Product: This is the main entity of the Demand domain, and is used to represent a product, which is a group of SKUs. SKUs are represented by Variants, a child of this entity. This entity is less frequently updated, it is more likely that Variant will be updated frequently.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ProductContentItem: Information about the product item such as images, video, files, etc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ProductCustomData: Data that doesn't fit in the provided fields needs to live here. At current moment, both arrays and nested objects are fine as values.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ProductLocale: This has a many to one relationship with Product, and provides localized language data for the appropriate fields. There will often only be one of these, and it should be the one set in defaultLocale for the demandHq.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Redirect: (TODO: need input here)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Storefront: A Storefront is an application of some variety that presents an e-commerce experience directly to customers and facilitates the browsing, shopping, and ordering of Product Variants.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"StorefrontNavSettings: The settings for a storefront's nav.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Variant: This is the child entity to a Product, and is a variation, such as a color, size, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Read: allows an identity to see the data for these entities.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Write: allows an identity to create and alter the data for these entities. Deleting is possible in certain circumstances, but otherwise archiving is in play."))),(0,o.kt)("h2",{id:"roles"},"Roles"),(0,o.kt)("p",null,"Roles, or DemandHqRoles are groups of scopes."),(0,o.kt)("h3",{id:"admin"},"Admin"),(0,o.kt)("p",null,"This role gives write access to all entities of a DemandHq (including future ones)."))}m.isMDXComponent=!0}}]);