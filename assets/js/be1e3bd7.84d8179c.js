"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[19824],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var o=n.createContext({}),i=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=i(a),u=d,h=s["".concat(o,".").concat(u)]||s[u]||m[u]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var l=a.length,r=new Array(l);r[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:d,r[1]=p;for(var i=2;i<l;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},75425:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>p,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),d=a(67294),l=a(3905);const r={id:"demand-hq-supplier",title:"DemandHqSupplier",hide_table_of_contents:!1},p=void 0,o={unversionedId:"demand/api/graphql-admin/reference/objects/demand-hq-supplier",id:"demand/api/graphql-admin/reference/objects/demand-hq-supplier",title:"DemandHqSupplier",description:"A relationship between a Supplier and a DemandHQ.",source:"@site/docs/demand/api/graphql-admin/reference/objects/demand-hq-supplier.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/demand-hq-supplier.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-supplier",title:"DemandHqSupplier",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandHqSupplierEdge",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier-edge"},next:{title:"DemandHq",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqSupplier.<b>createdAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqsupplierbcreatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqSupplier.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqsupplierbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqSupplier.<b>publicSupplier</b></code><Bullet /><code>PublicSupplier</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-demandhqsupplierbpublicsupplierbcodepublicsupplier-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqSupplier.<b>status</b></code><Bullet /><code>DemandHqSupplierStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-demandhqsupplierbstatusbcodedemandhqsupplierstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqSupplier.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqsupplierbsupplieridbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqSupplier.<b>syncedAt</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqsupplierbsyncedatbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqSupplier.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqsupplierbupdatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqSupplier.<b>updatedBy</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqsupplierbupdatedbybcodeid--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],s=()=>(0,l.kt)(d.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(d.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(d.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),h={toc:c,Bullet:s,SpecifiedBy:m,Badge:u};function y(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A relationship between a Supplier and a DemandHQ."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type DemandHqSupplier {\n  createdAt: Date!\n  demandHqId: ID!\n  publicSupplier: PublicSupplier\n  status: DemandHqSupplierStatus!\n  supplierId: ID!\n  syncedAt: Date\n  updatedAt: Date!\n  updatedBy: ID!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-demandhqsupplierbcreatedatbcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DemandHqSupplier.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-demandhqsupplierbdemandhqidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DemandHqSupplier.",(0,l.kt)("b",null,"demandHqId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-demandhqsupplierbpublicsupplierbcodepublicsupplier-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DemandHqSupplier.",(0,l.kt)("b",null,"publicSupplier"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/public-supplier"},(0,l.kt)("inlineCode",{parentName:"a"},"PublicSupplier"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get the expanded PublicSupplier for this DemandHqSupplier")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-demandhqsupplierbstatusbcodedemandhqsupplierstatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DemandHqSupplier.",(0,l.kt)("b",null,"status"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/demand-hq-supplier-status"},(0,l.kt)("inlineCode",{parentName:"a"},"DemandHqSupplierStatus!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Indicates what status the current relationship between a Supplier and a DemandHQ is in.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-demandhqsupplierbsupplieridbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DemandHqSupplier.",(0,l.kt)("b",null,"supplierId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-demandhqsupplierbsyncedatbcodedate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DemandHqSupplier.",(0,l.kt)("b",null,"syncedAt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If populated, this means that the last update was from the associated DemandHQ (typically a REQUEST).")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-demandhqsupplierbupdatedatbcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DemandHqSupplier.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-demandhqsupplierbupdatedbybcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DemandHqSupplier.",(0,l.kt)("b",null,"updatedBy"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/demand-hq-supplier"},(0,l.kt)("inlineCode",{parentName:"a"},"demandHqSupplier")),"  ",(0,l.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/request-supplier-access"},(0,l.kt)("inlineCode",{parentName:"a"},"requestSupplierAccess")),"  ",(0,l.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq"},(0,l.kt)("inlineCode",{parentName:"a"},"DemandHq")),"  ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"DemandHqSupplierConnection")),"  ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"DemandHqSupplierEdge")),"  ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);