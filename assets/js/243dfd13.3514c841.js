"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[67392],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),i=s(a),m=l,y=i["".concat(d,".").concat(m)]||i[m]||u[m]||o;return a?n.createElement(y,r(r({ref:t},c),{},{components:a})):n.createElement(y,r({ref:t},c))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[i]="string"==typeof e?e:l,r[1]=p;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73124:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>i,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=a(87462),l=a(67294),o=a(3905);const r={id:"supply-export-metadata",title:"SupplyExportMetadata",hide_table_of_contents:!1},p=void 0,d={unversionedId:"supply/api/graphql-admin/reference/objects/supply-export-metadata",id:"supply/api/graphql-admin/reference/objects/supply-export-metadata",title:"SupplyExportMetadata",description:"The metadata for a bulk action export.",source:"@site/docs/supply/api/graphql-admin/reference/objects/supply-export-metadata.mdx",sourceDirName:"supply/api/graphql-admin/reference/objects",slug:"/supply/api/graphql-admin/reference/objects/supply-export-metadata",permalink:"/supply/api/graphql-admin/reference/objects/supply-export-metadata",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/objects/supply-export-metadata.mdx",tags:[],version:"current",frontMatter:{id:"supply-export-metadata",title:"SupplyExportMetadata",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplyExportEdge",permalink:"/supply/api/graphql-admin/reference/objects/supply-export-edge"},next:{title:"SupplyExport",permalink:"/supply/api/graphql-admin/reference/objects/supply-export"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyExportMetadata.<b>createdAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyexportmetadatabcreatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyExportMetadata.<b>domainEntityId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyexportmetadatabdomainentityidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyExportMetadata.<b>exportStatus</b></code><Bullet /><code>BulkActionStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplyexportmetadatabexportstatusbcodebulkactionstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyExportMetadata.<b>exportType</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyexportmetadatabexporttypebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyExportMetadata.<b>fileExtension</b></code><Bullet /><code>ExportFileExtension!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplyexportmetadatabfileextensionbcodeexportfileextension--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyExportMetadata.<b>identityId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyexportmetadatabidentityidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyExportMetadata.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyexportmetadatabnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyExportMetadata.<b>ticksTillTheEndOfTime</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyexportmetadatabtickstilltheendoftimebcodefloat--",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:i,SpecifiedBy:u,Badge:m};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The metadata for a bulk action export."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplyExportMetadata {\n  createdAt: Date!\n  domainEntityId: ID!\n  exportStatus: BulkActionStatus!\n  exportType: String!\n  fileExtension: ExportFileExtension!\n  identityId: ID!\n  name: String!\n  ticksTillTheEndOfTime: Float!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplyexportmetadatabcreatedatbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplyExportMetadata.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The date and time the export was created.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplyexportmetadatabdomainentityidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplyExportMetadata.",(0,o.kt)("b",null,"domainEntityId"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The SupplierId of the supplier that the export belongs to.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplyexportmetadatabexportstatusbcodebulkactionstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplyExportMetadata.",(0,o.kt)("b",null,"exportStatus"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/bulk-action-status"},(0,o.kt)("inlineCode",{parentName:"a"},"BulkActionStatus!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The status of the export.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplyexportmetadatabexporttypebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplyExportMetadata.",(0,o.kt)("b",null,"exportType"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of export requested.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplyexportmetadatabfileextensionbcodeexportfileextension--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplyExportMetadata.",(0,o.kt)("b",null,"fileExtension"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/export-file-extension"},(0,o.kt)("inlineCode",{parentName:"a"},"ExportFileExtension!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Indicates the format of the underlying data.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplyexportmetadatabidentityidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplyExportMetadata.",(0,o.kt)("b",null,"identityId"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The requesting identityId (username).")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplyexportmetadatabnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplyExportMetadata.",(0,o.kt)("b",null,"name"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The name of the export, something to remember it by.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplyexportmetadatabtickstilltheendoftimebcodefloat--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplyExportMetadata.",(0,o.kt)("b",null,"ticksTillTheEndOfTime"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The number of ticks until the end of time (figuratively). Used to sort filenames in descending order of requestedAt.\nNote that this number is actually an Int, it is just too large to fit in 32 bits.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supply-export"},(0,o.kt)("inlineCode",{parentName:"a"},"SupplyExport")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);