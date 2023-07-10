"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[95452],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>h});var r=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,d=function(e,t){if(null==e)return{};var a,r,d={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,d=e.mdxType,n=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=d,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||n;return a?r.createElement(h,o(o({ref:t},i),{},{components:a})):r.createElement(h,o({ref:t},i))}));function h(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var n=a.length,o=new Array(n);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:d,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93601:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=a(87462),d=a(67294),n=a(3905);const o={id:"order-item",title:"OrderItem",hide_table_of_contents:!1},l=void 0,c={unversionedId:"demand/api/graphql-admin/reference/objects/order-item",id:"demand/api/graphql-admin/reference/objects/order-item",title:"OrderItem",description:"An item in an Order.",source:"@site/docs/demand/api/graphql-admin/reference/objects/order-item.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/order-item",permalink:"/demand/api/graphql-admin/reference/objects/order-item",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/order-item.mdx",tags:[],version:"current",frontMatter:{id:"order-item",title:"OrderItem",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"OrderItemTax",permalink:"/demand/api/graphql-admin/reference/objects/order-item-tax"},next:{title:"OrderShippingCharge",permalink:"/demand/api/graphql-admin/reference/objects/order-shipping-charge"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>adjustedPrice</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembadjustedpricebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>adjustedQuantity</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembadjustedquantitybcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>adjustments</b></code><Bullet /><code>[OrderItemAdjustment]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderitembadjustmentsbcodeorderitemadjustment--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>assignedQuantity</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembassignedquantitybcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>barcode</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembbarcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>createdAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembcreatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>currency</b></code><Bullet /><code>ResonanceCurrency!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-orderitembcurrencybcoderesonancecurrency--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>customProperties</b></code><Bullet /><code>JSON</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembcustompropertiesbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>deliveryMethod</b></code><Bullet /><code>VariantDeliveryMethod!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-orderitembdeliverymethodbcodevariantdeliverymethod--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>discountTotal</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembdiscounttotalbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>discounts</b></code><Bullet /><code>[OrderItemDiscount]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderitembdiscountsbcodeorderitemdiscount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>fulfilledQuantity</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembfulfilledquantitybcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>grandTotal</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembgrandtotalbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>note</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembnotebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>order</b></code><Bullet /><code>Order</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderitemborderbcodeorder-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>orderId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemborderidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>orderItemId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemborderitemidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>productTitle</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembproducttitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>purchaseOrderItems</b></code><Bullet /><code>[OrderItemPurchaseOrderItem]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderitembpurchaseorderitemsbcodeorderitempurchaseorderitem--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>quantity</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembquantitybcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>shippingCharges</b></code><Bullet /><code>[OrderShippingCharge]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderitembshippingchargesbcodeordershippingcharge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>shippingChargesTotal</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembshippingchargestotalbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>shippingMethod</b></code><Bullet /><code>ShippingMethod</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-orderitembshippingmethodbcodeshippingmethod-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>sku</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembskubcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>status</b></code><Bullet /><code>OrderItemStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-orderitembstatusbcodeorderitemstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>taxTotal</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembtaxtotalbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>taxes</b></code><Bullet /><code>[OrderItemTax]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderitembtaxesbcodeorderitemtax--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>unitPrice</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembunitpricebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembupdatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>updatedBy</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembupdatedbybcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>variantId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembvariantidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>variantTitle</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembvarianttitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItem.<b>vendor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitembvendorbcodestring--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,n.kt)(d.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(d.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(d.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:i,Bullet:m,SpecifiedBy:p,Badge:u};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An item in an Order."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type OrderItem {\n  adjustedPrice: Float!\n  adjustedQuantity: Int!\n  adjustments: [OrderItemAdjustment]\n  assignedQuantity: Int!\n  barcode: String\n  createdAt: Date!\n  currency: ResonanceCurrency!\n  customProperties: JSON\n  deliveryMethod: VariantDeliveryMethod!\n  demandHqId: ID!\n  discountTotal: Float!\n  discounts: [OrderItemDiscount]\n  fulfilledQuantity: Int!\n  grandTotal: Float!\n  note: String\n  order: Order\n  orderId: ID!\n  orderItemId: ID!\n  productId: ID!\n  productTitle: String!\n  purchaseOrderItems: [OrderItemPurchaseOrderItem]\n  quantity: Int!\n  shippingCharges: [OrderShippingCharge]\n  shippingChargesTotal: Float!\n  shippingMethod: ShippingMethod\n  sku: String\n  status: OrderItemStatus!\n  taxTotal: Float!\n  taxes: [OrderItemTax]\n  unitPrice: Float!\n  updatedAt: Date!\n  updatedBy: ID!\n  variantId: ID!\n  variantTitle: String!\n  vendor: String!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembadjustedpricebcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"adjustedPrice"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The price of the OrderItem after adjustments.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembadjustedquantitybcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"adjustedQuantity"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The quantity of the OrderItem after adjustments.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembadjustmentsbcodeorderitemadjustment--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"adjustments"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order-item-adjustment"},(0,n.kt)("inlineCode",{parentName:"a"},"[OrderItemAdjustment]"))," ",(0,n.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembassignedquantitybcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"assignedQuantity"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The quantity of the OrderItem that has been assigned to a PurchaseOrderItem.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembbarcodebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"barcode"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembcreatedatbcodedate--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,n.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembcurrencybcoderesonancecurrency--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"currency"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/resonance-currency"},(0,n.kt)("inlineCode",{parentName:"a"},"ResonanceCurrency!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembcustompropertiesbcodejson-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"customProperties"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/json"},(0,n.kt)("inlineCode",{parentName:"a"},"JSON"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembdeliverymethodbcodevariantdeliverymethod--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"deliveryMethod"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/variant-delivery-method"},(0,n.kt)("inlineCode",{parentName:"a"},"VariantDeliveryMethod!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembdemandhqidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"demandHqId"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembdiscounttotalbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"discountTotal"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The aggregate amount of all discounts applied to the OrderItem, can be subtracted from the subtotal directly.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembdiscountsbcodeorderitemdiscount--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"discounts"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order-item-discount"},(0,n.kt)("inlineCode",{parentName:"a"},"[OrderItemDiscount]"))," ",(0,n.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembfulfilledquantitybcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"fulfilledQuantity"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The quantity of the OrderItem that has been fulfilled.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembgrandtotalbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"grandTotal"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The aggregate amount the consumer must pay for the item including price,\nquantity, adjustments, discounts, shippingCharges, and taxes.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembnotebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"note"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitemborderbcodeorder-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"order"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order"},(0,n.kt)("inlineCode",{parentName:"a"},"Order"))," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Get the order for an orderItem.")),(0,n.kt)("p",null,"Requires the order/read scope on the associated DemandHq."),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitemborderidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"orderId"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitemborderitemidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"orderItemId"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembproductidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"productId"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembproducttitlebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"productTitle"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembpurchaseorderitemsbcodeorderitempurchaseorderitem--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"purchaseOrderItems"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order-item-purchase-order-item"},(0,n.kt)("inlineCode",{parentName:"a"},"[OrderItemPurchaseOrderItem]"))," ",(0,n.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembquantitybcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"quantity"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembshippingchargesbcodeordershippingcharge--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"shippingCharges"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order-shipping-charge"},(0,n.kt)("inlineCode",{parentName:"a"},"[OrderShippingCharge]"))," ",(0,n.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembshippingchargestotalbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"shippingChargesTotal"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The aggregate amount of all shipping charges applied to the OrderItem, can be added to the subtotal directly.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembshippingmethodbcodeshippingmethod-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"shippingMethod"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/shipping-method"},(0,n.kt)("inlineCode",{parentName:"a"},"ShippingMethod"))," ",(0,n.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembskubcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"sku"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembstatusbcodeorderitemstatus--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"status"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/order-item-status"},(0,n.kt)("inlineCode",{parentName:"a"},"OrderItemStatus!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembtaxtotalbcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"taxTotal"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The aggregate amount of all taxes applied to the OrderItem, can be added to the subtotal directly.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembtaxesbcodeorderitemtax--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"taxes"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order-item-tax"},(0,n.kt)("inlineCode",{parentName:"a"},"[OrderItemTax]"))," ",(0,n.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembunitpricebcodefloat--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"unitPrice"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Price per item, can be multiplied by quantity for total price")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembupdatedatbcodedate--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"updatedAt"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,n.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembupdatedbybcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"updatedBy"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembvariantidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"variantId"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembvarianttitlebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"variantTitle"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderitembvendorbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"OrderItem.",(0,n.kt)("b",null,"vendor"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/create-order-item"},(0,n.kt)("inlineCode",{parentName:"a"},"createOrderItem")),"  ",(0,n.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/order-item"},(0,n.kt)("inlineCode",{parentName:"a"},"orderItem")),"  ",(0,n.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-order-item"},(0,n.kt)("inlineCode",{parentName:"a"},"updateOrderItem")),"  ",(0,n.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-order-items"},(0,n.kt)("inlineCode",{parentName:"a"},"updateOrderItems")),"  ",(0,n.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/order"},(0,n.kt)("inlineCode",{parentName:"a"},"Order")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/order-item-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"OrderItemConnection")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/order-item-edge"},(0,n.kt)("inlineCode",{parentName:"a"},"OrderItemEdge")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);