"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[25526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,d=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,k=m["".concat(s,".").concat(h)]||m[h]||p[h]||d;return a?r.createElement(k,o(o({ref:t},i),{},{components:a})):r.createElement(k,o({ref:t},i))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=a.length,o=new Array(d);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<d;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},77428:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=a(87462),n=a(67294),d=a(3905);const o={id:"order",title:"Order",hide_table_of_contents:!1},l=void 0,s={unversionedId:"demand/api/graphql-admin/reference/objects/order",id:"demand/api/graphql-admin/reference/objects/order",title:"Order",description:"An order is a collection of items that a customer has purchased.",source:"@site/docs/demand/api/graphql-admin/reference/objects/order.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/order",permalink:"/demand/api/graphql-admin/reference/objects/order",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/order.mdx",tags:[],version:"current",frontMatter:{id:"order",title:"Order",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"OrderTransaction",permalink:"/demand/api/graphql-admin/reference/objects/order-transaction"},next:{title:"PageConnectionWithSearch",permalink:"/demand/api/graphql-admin/reference/objects/page-connection-with-search"}},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>billingAddress</b></code><Bullet /><code>Address!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderbbillingaddressbcodeaddress--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>createdAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbcreatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>customerId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbcustomeridbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>customerNote</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbcustomernotebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>emailAddress</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbemailaddressbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>item</b></code><Bullet /><code>OrderItem!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderbitembcodeorderitem--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>items</b></code><Bullet /><code>OrderItemConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderbitemsbcodeorderitemconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.items.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Order.items.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Order.items.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>note</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbnotebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>orderId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderborderidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>paymentId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbpaymentidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>phoneNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbphonenumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>placedAt</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbplacedatbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>shippingAddress</b></code><Bullet /><code>Address!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderbshippingaddressbcodeaddress--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>status</b></code><Bullet /><code>OrderStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-orderbstatusbcodeorderstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>storefrontId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbstorefrontidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>tags</b></code><Bullet /><code>OrderTags</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderbtagsbcodeordertags-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>transactions</b></code><Bullet /><code>OrderTransactionConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderbtransactionsbcodeordertransactionconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.transactions.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ordertransactionsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Order.transactions.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ordertransactionsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Order.transactions.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ordertransactionsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbupdatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>updatedBy</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbupdatedbybcodeid--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:i,Bullet:m,SpecifiedBy:p,Badge:h};function u(e){let{components:t,...a}=e;return(0,d.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"An order is a collection of items that a customer has purchased.\nAs an order accrues transactions, it changes status until it is eventually complete.\nOrders rely on Suppliers to fulfill the OrderItems by creating PurchaseOrderItems (which are then fulfilled)."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type Order {\n  billingAddress: Address!\n  createdAt: Date!\n  customerId: ID\n  customerNote: String\n  demandHqId: ID!\n  emailAddress: String!\n  item(\n  orderItemId: ID!\n): OrderItem!\n  items(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): OrderItemConnection!\n  note: String\n  orderId: ID!\n  paymentId: ID\n  phoneNumber: String\n  placedAt: Date\n  shippingAddress: Address!\n  status: OrderStatus!\n  storefrontId: ID\n  tags: OrderTags\n  transactions(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): OrderTransactionConnection!\n  updatedAt: Date!\n  updatedBy: ID!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbbillingaddressbcodeaddress--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"billingAddress"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/address"},(0,d.kt)("inlineCode",{parentName:"a"},"Address!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbcreatedatbcodedate--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"createdAt"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbcustomeridbcodeid-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"customerId"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbcustomernotebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"customerNote"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"A note provided by the customer at time of order")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbdemandhqidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"demandHqId"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbemailaddressbcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"emailAddress"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbitembcodeorderitem--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"item"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order-item"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderItem!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Get a single OrderItem by ID.")),(0,d.kt)("p",null,"Requires the orderitem/read permission on the associated DemandHq."),(0,d.kt)("blockquote",null,(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-orderitemborderitemidbcodeid--"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.item.",(0,d.kt)("b",null,"orderItemId"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbitemsbcodeorderitemconnection--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"items"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order-item-connection"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderItemConnection!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"List the items in an order.")),(0,d.kt)("p",null,"Requires the orderitem/read permission on the associated DemandHq."),(0,d.kt)("blockquote",null,(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-orderitemsbafterbcodestring-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.items.",(0,d.kt)("b",null,"after"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-orderitemsbbeforebcodestring-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.items.",(0,d.kt)("b",null,"before"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-orderitemsbfirstbcodeint-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.items.",(0,d.kt)("b",null,"first"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-orderitemsblastbcodeint-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.items.",(0,d.kt)("b",null,"last"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbnotebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"note"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderborderidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"orderId"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbpaymentidbcodeid-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"paymentId"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"A reference to an outside payment gateway, used for tracking transactions. May be an orderID, or a paymentID.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbphonenumberbcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"phoneNumber"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbplacedatbcodedate-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"placedAt"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"ISO Date indicated when an order should be considered complete, closed for some changes, and started to process.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbshippingaddressbcodeaddress--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"shippingAddress"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/address"},(0,d.kt)("inlineCode",{parentName:"a"},"Address!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbstatusbcodeorderstatus--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"status"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/order-status"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderStatus!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The status of the order currently, this field is read-only and can change many times over the course of the order")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbstorefrontidbcodeid-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"storefrontId"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbtagsbcodeordertags-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"tags"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order-tags"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderTags"))," ",(0,d.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Get the tags for an order.")),(0,d.kt)("p",null,"Requires the order/read scope on the associated DemandHq."),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbtransactionsbcodeordertransactionconnection--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"transactions"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/order-transaction-connection"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderTransactionConnection!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"List the transactions in an order.")),(0,d.kt)("p",null,"Requires the ordertransaction/read permission on the associated DemandHq."),(0,d.kt)("blockquote",null,(0,d.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-ordertransactionsbafterbcodestring-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.transactions.",(0,d.kt)("b",null,"after"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-ordertransactionsbbeforebcodestring-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.transactions.",(0,d.kt)("b",null,"before"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-ordertransactionsbfirstbcodeint-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.transactions.",(0,d.kt)("b",null,"first"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,d.kt)("h5",{id:"code-style-fontweight-normal-ordertransactionsblastbcodeint-"},(0,d.kt)("a",{parentName:"h5",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.transactions.",(0,d.kt)("b",null,"last"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbupdatedatbcodedate--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"updatedAt"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderbupdatedbybcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,d.kt)("b",null,"updatedBy"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"returned-by"},"Returned by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/create-order"},(0,d.kt)("inlineCode",{parentName:"a"},"createOrder")),"  ",(0,d.kt)(h,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/order"},(0,d.kt)("inlineCode",{parentName:"a"},"order")),"  ",(0,d.kt)(h,{class:"secondary",text:"query",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/place-order"},(0,d.kt)("inlineCode",{parentName:"a"},"placeOrder")),"  ",(0,d.kt)(h,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-order"},(0,d.kt)("inlineCode",{parentName:"a"},"updateOrder")),"  ",(0,d.kt)(h,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq"},(0,d.kt)("inlineCode",{parentName:"a"},"DemandHq")),"  ",(0,d.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/order-connection"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderConnection")),"  ",(0,d.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/order-edge"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderEdge")),"  ",(0,d.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"}),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/order-item"},(0,d.kt)("inlineCode",{parentName:"a"},"OrderItem")),"  ",(0,d.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);