"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[89963],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(a),b=l,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:l,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},24161:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),l=a(67294),r=a(3905);const o={id:"public-nav",title:"PublicNav",hide_table_of_contents:!1},c=void 0,i={unversionedId:"demand/api/graphql-storefront/reference/objects/public-nav",id:"demand/api/graphql-storefront/reference/objects/public-nav",title:"PublicNav",description:"Nav is an item within a navigational heirarchy of some kind, most often viewed as a menu.",source:"@site/docs/demand/api/graphql-storefront/reference/objects/public-nav.mdx",sourceDirName:"demand/api/graphql-storefront/reference/objects",slug:"/demand/api/graphql-storefront/reference/objects/public-nav",permalink:"/demand/api/graphql-storefront/reference/objects/public-nav",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/objects/public-nav.mdx",tags:[],version:"current",frontMatter:{id:"public-nav",title:"PublicNav",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"PublicNavEdge",permalink:"/demand/api/graphql-storefront/reference/objects/public-nav-edge"},next:{title:"PublicOrderConnectionWithSearch",permalink:"/demand/api/graphql-storefront/reference/objects/public-order-connection-with-search"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>href</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavbhrefbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>label</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavblabelbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>linkSlug</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavblinkslugbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>linkType</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavblinktypebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>navId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavbnavidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>navLevel</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavbnavlevelbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>navType</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavbnavtypebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>navs</b></code><Bullet /><code>PublicNavConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicnavbnavsbcodepublicnavconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.navs.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavnavsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.navs.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavnavsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.navs.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavnavsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>parentNavId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavbparentnavidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>position</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavbpositionbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicNav.<b>storefrontId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicnavbstorefrontidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:u,Badge:b};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nav is an item within a navigational heirarchy of some kind, most often viewed as a menu."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicNav {\n  demandHqId: ID!\n  href: String!\n  label: String!\n  linkSlug: String!\n  linkType: String!\n  navId: ID!\n  navLevel: Int!\n  navType: String!\n  navs(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): PublicNavConnection!\n  parentNavId: ID\n  position: Int\n  storefrontId: ID!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavbdemandhqidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"demandHqId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavbhrefbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"href"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Where this Nav link should lead to. Can be an absolute or relative url. 768 character limit.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavblabelbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"label"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The label for this Nav, limit 64 characters.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavblinkslugbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"linkSlug"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'This has two primary purposes:\nTo make this Nav "lookupable" in combination with linkType.\nTo make entities aware they are being referenced. This is done with the\nreserved system linkTypes in combination with entitySlugs (i.e. Collection and\na collection slug).')),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavblinktypebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"linkType"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'This can be any string, but certain values have special meaning (like "collection").\nThese are restricted to the specified values in NavSettings.')),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavbnavidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"navId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavbnavlevelbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"navLevel"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A number, representing where this Nav resides in the heirarchy. Immutable, and\nlimited to 0 through 6. 0 is the top level, 1 is the second level, etc.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavbnavtypebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"navType"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A string indicating the purpose of this Nav hierarchy, must match parentNav if applicable. Limit 128 characters.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavbnavsbcodepublicnavconnection--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"navs"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/public-nav-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicNavConnection!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List Child Navs for a Nav.")),(0,r.kt)("p",null,"Requires the publicnav/read permission."),(0,r.kt)("blockquote",null,(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-publicnavnavsbafterbcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.navs.",(0,r.kt)("b",null,"after"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-publicnavnavsbbeforebcodestring-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.navs.",(0,r.kt)("b",null,"before"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-publicnavnavsbfirstbcodeint-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.navs.",(0,r.kt)("b",null,"first"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,r.kt)("h5",{id:"code-style-fontweight-normal-publicnavnavsblastbcodeint-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.navs.",(0,r.kt)("b",null,"last"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavbparentnavidbcodeid-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"parentNavId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"All Navs besides the root (Level 0) have a parentNavId. Immutable.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavbpositionbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"position"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Where this Nav should be located with respect to other Navs. Need not be sequential or unique.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-publicnavbstorefrontidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PublicNav.",(0,r.kt)("b",null,"storefrontId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-nav-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicNavConnection")),"  ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-nav-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicNavEdge")),"  ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);