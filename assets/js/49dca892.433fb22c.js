"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[36857],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>p});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},i="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),i=s(t),y=o,p=i["".concat(d,".").concat(y)]||i[y]||h[y]||r;return t?n.createElement(p,l(l({ref:a},m),{},{components:t})):n.createElement(p,l({ref:a},m))}));function p(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=y;var c={};for(var d in a)hasOwnProperty.call(a,d)&&(c[d]=a[d]);c.originalType=e,c[i]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},25712:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>y,Bullet:()=>i,SpecifiedBy:()=>h,assets:()=>s,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=t(87462),o=t(67294),r=t(3905);const l={id:"taxonomy-branch",title:"TaxonomyBranch",hide_table_of_contents:!1},c=void 0,d={unversionedId:"demand/api/graphql-admin/reference/objects/taxonomy-branch",id:"demand/api/graphql-admin/reference/objects/taxonomy-branch",title:"TaxonomyBranch",description:"TaxonomyBranch is an item within a taxonomyTree that maps out a Product Taxonomy",source:"@site/docs/demand/api/graphql-admin/reference/objects/taxonomy-branch.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/taxonomy-branch",permalink:"/demand/api/graphql-admin/reference/objects/taxonomy-branch",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/taxonomy-branch.mdx",tags:[],version:"current",frontMatter:{id:"taxonomy-branch",title:"TaxonomyBranch",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"TaxonomyBranchEdge",permalink:"/demand/api/graphql-admin/reference/objects/taxonomy-branch-edge"},next:{title:"TermAggregation",permalink:"/demand/api/graphql-admin/reference/objects/term-aggregation"}},s={},m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>collectionId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchbcollectionidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>createdAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchbcreatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>parentTaxonomyBranchId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchbparenttaxonomybranchidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>productTag</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchbproducttagbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>storefrontIds</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchbstorefrontidsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>taxonomyBranchId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchbtaxonomybranchidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>taxonomyBranches</b></code><Bullet /><code>TaxonomyBranchConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-taxonomybranchbtaxonomybranchesbcodetaxonomybranchconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.taxonomyBranches.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchtaxonomybranchesbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.taxonomyBranches.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchtaxonomybranchesbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.taxonomyBranches.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchtaxonomybranchesblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>taxonomyLevel</b></code><Bullet /><code>TaxonomyLevel!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-taxonomybranchbtaxonomylevelbcodetaxonomylevel--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>taxonomyTree</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchbtaxonomytreebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>title</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchbtitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchbupdatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranch.<b>updatedBy</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchbupdatedbybcodeid--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],i=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:m,Bullet:i,SpecifiedBy:h,Badge:y};function x(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TaxonomyBranch is an item within a taxonomyTree that maps out a Product Taxonomy\nhierarchy using Product Tags and Collections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type TaxonomyBranch {\n  collectionId: ID\n  createdAt: Date!\n  demandHqId: ID!\n  parentTaxonomyBranchId: ID\n  productTag: String!\n  storefrontIds: [ID!]\n  taxonomyBranchId: ID!\n  taxonomyBranches(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): TaxonomyBranchConnection!\n  taxonomyLevel: TaxonomyLevel!\n  taxonomyTree: String!\n  title: String!\n  updatedAt: Date!\n  updatedBy: ID!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbcollectionidbcodeid-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"collectionId"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The collectionId associated with the TaxonomyBranch.\nNot required as a field, but is strongly suggested to be populated, and one is generally created with a TaxonomyBranch.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbcreatedatbcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbdemandhqidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"demandHqId"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbparenttaxonomybranchidbcodeid-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"parentTaxonomyBranchId"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All TaxonomyBranches besides the root have a parentTaxonomyBranchId. Immutable.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbproducttagbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"productTag"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The product tag associated with this TaxonomyBranch, used for filtering or display matching.")),(0,r.kt)("p",null,'On a Root TaxonomyBranch, this is generally a taxPrefix that is used in all child TaxonomyBranches,\ni.e. "Taxonomy" for child branch productTags like "Taxonomy,Category,T-Shirts"'),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbstorefrontidsbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"storefrontIds"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,r.kt)(y,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The storefronts this taxonomyTree is published to.\nThis is only present on the Root TaxonomyBranch of a taxonomyTree and applies to all child taxonomyBranches.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbtaxonomybranchidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"taxonomyBranchId"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbtaxonomybranchesbcodetaxonomybranchconnection--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"taxonomyBranches"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/taxonomy-branch-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"TaxonomyBranchConnection!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List Child TaxonomyBranches for a taxonomyBranch.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Requires the user to have the taxonomyBranch/read permission on the associated DemandHq.\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-taxonomybranchtaxonomybranchesbafterbcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.taxonomyBranches.",(0,r.kt)("b",null,"after"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-taxonomybranchtaxonomybranchesbbeforebcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.taxonomyBranches.",(0,r.kt)("b",null,"before"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-taxonomybranchtaxonomybranchesbfirstbcodeint-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.taxonomyBranches.",(0,r.kt)("b",null,"first"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-taxonomybranchtaxonomybranchesblastbcodeint-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.taxonomyBranches.",(0,r.kt)("b",null,"last"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbtaxonomylevelbcodetaxonomylevel--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"taxonomyLevel"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/taxonomy-level"},(0,r.kt)("inlineCode",{parentName:"a"},"TaxonomyLevel!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The level of the TaxonomyBranch in the hierarchy. Immutable.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbtaxonomytreebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"taxonomyTree"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The tree this taxonomyBranch lies within. This has slug formatting (Lowercase, no spaces). Immutable.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbtitlebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"title"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The name of the taxonomyBranch.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbupdatedatbcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"updatedAt"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchbupdatedbybcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranch.",(0,r.kt)("b",null,"updatedBy"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/create-taxonomy-branch"},(0,r.kt)("inlineCode",{parentName:"a"},"createTaxonomyBranch")),"  ",(0,r.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/taxonomy-branch"},(0,r.kt)("inlineCode",{parentName:"a"},"taxonomyBranch")),"  ",(0,r.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-taxonomy-branch"},(0,r.kt)("inlineCode",{parentName:"a"},"updateTaxonomyBranch")),"  ",(0,r.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/taxonomy-branch-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"TaxonomyBranchConnection")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/taxonomy-branch-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"TaxonomyBranchEdge")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}x.isMDXComponent=!0}}]);