"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[8817],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),i=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=i(r),h=n,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||a;return r?o.createElement(u,c(c({ref:t},s),{},{components:r})):o.createElement(u,c({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:n,c[1]=d;for(var i=2;i<a;i++)c[i]=r[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88970:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>h,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var o=r(87462),n=r(67294),a=r(3905);const c={id:"checkout-order-item",title:"CheckoutOrderItem",hide_table_of_contents:!1},d=void 0,l={unversionedId:"demand/api/graphql-storefront/reference/objects/checkout-order-item",id:"demand/api/graphql-storefront/reference/objects/checkout-order-item",title:"CheckoutOrderItem",description:"This is an orderItem in the checkout process, pending order creation.",source:"@site/docs/demand/api/graphql-storefront/reference/objects/checkout-order-item.mdx",sourceDirName:"demand/api/graphql-storefront/reference/objects",slug:"/demand/api/graphql-storefront/reference/objects/checkout-order-item",permalink:"/demand/api/graphql-storefront/reference/objects/checkout-order-item",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/objects/checkout-order-item.mdx",tags:[],version:"current",frontMatter:{id:"checkout-order-item",title:"CheckoutOrderItem",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"CheckoutError",permalink:"/demand/api/graphql-storefront/reference/objects/checkout-error"},next:{title:"CheckoutOrder",permalink:"/demand/api/graphql-storefront/reference/objects/checkout-order"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderItem.<b>customProperties</b></code><Bullet /><code>JSON</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutorderitembcustompropertiesbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderItem.<b>discounts</b></code><Bullet /><code>[OrderItemDiscount]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-checkoutorderitembdiscountsbcodeorderitemdiscount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderItem.<b>note</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutorderitembnotebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderItem.<b>quantity</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutorderitembquantitybcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderItem.<b>shippingCharges</b></code><Bullet /><code>[OrderItemShippingCharge]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-checkoutorderitembshippingchargesbcodeorderitemshippingcharge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderItem.<b>shippingMethod</b></code><Bullet /><code>ShippingMethod</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-checkoutorderitembshippingmethodbcodeshippingmethod-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderItem.<b>taxes</b></code><Bullet /><code>[OrderItemTax]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-checkoutorderitembtaxesbcodeorderitemtax--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderItem.<b>unitPrice</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutorderitembunitpricebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderItem.<b>variantId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutorderitembvariantidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(n.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:m,SpecifiedBy:p,Badge:h};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is an orderItem in the checkout process, pending order creation.\nNearly all fields are optional, but their existence is still required by the end\nof the checkout process if they are required for OrderItems."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CheckoutOrderItem {\n  customProperties: JSON\n  discounts: [OrderItemDiscount]\n  note: String\n  quantity: Int\n  shippingCharges: [OrderItemShippingCharge]\n  shippingMethod: ShippingMethod\n  taxes: [OrderItemTax]\n  unitPrice: Float\n  variantId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderitembcustompropertiesbcodejson-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderItem.",(0,a.kt)("b",null,"customProperties"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/json"},(0,a.kt)("inlineCode",{parentName:"a"},"JSON"))," ",(0,a.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderitembdiscountsbcodeorderitemdiscount--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderItem.",(0,a.kt)("b",null,"discounts"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/order-item-discount"},(0,a.kt)("inlineCode",{parentName:"a"},"[OrderItemDiscount]"))," ",(0,a.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderitembnotebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderItem.",(0,a.kt)("b",null,"note"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderitembquantitybcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderItem.",(0,a.kt)("b",null,"quantity"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderitembshippingchargesbcodeorderitemshippingcharge--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderItem.",(0,a.kt)("b",null,"shippingCharges"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/order-item-shipping-charge"},(0,a.kt)("inlineCode",{parentName:"a"},"[OrderItemShippingCharge]"))," ",(0,a.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderitembshippingmethodbcodeshippingmethod-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderItem.",(0,a.kt)("b",null,"shippingMethod"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/enums/shipping-method"},(0,a.kt)("inlineCode",{parentName:"a"},"ShippingMethod"))," ",(0,a.kt)(h,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderitembtaxesbcodeorderitemtax--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderItem.",(0,a.kt)("b",null,"taxes"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/order-item-tax"},(0,a.kt)("inlineCode",{parentName:"a"},"[OrderItemTax]"))," ",(0,a.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderitembunitpricebcodefloat-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderItem.",(0,a.kt)("b",null,"unitPrice"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,a.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Price per item, can be multiplied by quantity for total price")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderitembvariantidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderItem.",(0,a.kt)("b",null,"variantId"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/checkout"},(0,a.kt)("inlineCode",{parentName:"a"},"Checkout")),"  ",(0,a.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);