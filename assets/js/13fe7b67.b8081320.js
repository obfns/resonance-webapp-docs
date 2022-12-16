"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[39442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(i,".").concat(m)]||c[m]||u[m]||d;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,o=new Array(d);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<d;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2609:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=n(67294),d=n(3905);const o={id:"order-update-input",title:"OrderUpdateInput",hide_table_of_contents:!1},l=void 0,i={unversionedId:"demand/api/graphql-admin/reference/inputs/order-update-input",id:"demand/api/graphql-admin/reference/inputs/order-update-input",title:"OrderUpdateInput",description:"Input for updating an Order",source:"@site/docs/demand/api/graphql-admin/reference/inputs/order-update-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/order-update-input",permalink:"/demand/api/graphql-admin/reference/inputs/order-update-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/order-update-input.mdx",tags:[],version:"current",frontMatter:{id:"order-update-input",title:"OrderUpdateInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"OrderTransactionCurrencyExchangeAdjustmentInput",permalink:"/demand/api/graphql-admin/reference/inputs/order-transaction-currency-exchange-adjustment-input"},next:{title:"PageContentUpsertInput",permalink:"/demand/api/graphql-admin/reference/inputs/page-content-upsert-input"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrderUpdateInput.<b>billingAddress</b></code><Bullet /><code>AddressInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-orderupdateinputbbillingaddressbcodeaddressinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderUpdateInput.<b>customerNote</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderupdateinputbcustomernotebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderUpdateInput.<b>emailAddress</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderupdateinputbemailaddressbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderUpdateInput.<b>note</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderupdateinputbnotebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderUpdateInput.<b>orderId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderupdateinputborderidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderUpdateInput.<b>paymentId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderupdateinputbpaymentidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderUpdateInput.<b>phoneNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderupdateinputbphonenumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderUpdateInput.<b>shippingAddress</b></code><Bullet /><code>AddressInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-orderupdateinputbshippingaddressbcodeaddressinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderUpdateInput.<b>tags</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderupdateinputbtagsbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(a.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:c,SpecifiedBy:u,Badge:m};function f(e){let{components:t,...n}=e;return(0,d.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Input for updating an Order"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input OrderUpdateInput {\n  billingAddress: AddressInput\n  customerNote: String\n  emailAddress: String\n  note: String\n  orderId: ID!\n  paymentId: ID\n  phoneNumber: String\n  shippingAddress: AddressInput\n  tags: [String]\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderupdateinputbbillingaddressbcodeaddressinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderUpdateInput.",(0,d.kt)("b",null,"billingAddress"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/address-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddressInput"))," ",(0,d.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderupdateinputbcustomernotebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderUpdateInput.",(0,d.kt)("b",null,"customerNote"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"A note provided by the customer at time of order")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderupdateinputbemailaddressbcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderUpdateInput.",(0,d.kt)("b",null,"emailAddress"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderupdateinputbnotebcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderUpdateInput.",(0,d.kt)("b",null,"note"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderupdateinputborderidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderUpdateInput.",(0,d.kt)("b",null,"orderId"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderupdateinputbpaymentidbcodeid-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderUpdateInput.",(0,d.kt)("b",null,"paymentId"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,d.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"A reference to an outside payment gateway, used for tracking transactions. May be an orderID, or a paymentID.")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderupdateinputbphonenumberbcodestring-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderUpdateInput.",(0,d.kt)("b",null,"phoneNumber"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,d.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderupdateinputbshippingaddressbcodeaddressinput-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderUpdateInput.",(0,d.kt)("b",null,"shippingAddress"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/address-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddressInput"))," ",(0,d.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h4",{id:"code-style-fontweight-normal-orderupdateinputbtagsbcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"OrderUpdateInput.",(0,d.kt)("b",null,"tags"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,d.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-order"},(0,d.kt)("inlineCode",{parentName:"a"},"updateOrder")),"  ",(0,d.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);