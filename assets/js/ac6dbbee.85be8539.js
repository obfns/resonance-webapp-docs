"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[92591],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>y});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=l(t),f=a,y=p["".concat(i,".").concat(f)]||p[f]||s[f]||o;return t?r.createElement(y,c(c({ref:n},m),{},{components:t})):r.createElement(y,c({ref:n},m))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[p]="string"==typeof e?e:a,c[1]=d;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41185:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var r=t(87462),a=t(67294),o=t(3905);const c={id:"taxonomy-branch-edge",title:"TaxonomyBranchEdge",hide_table_of_contents:!1},d=void 0,i={unversionedId:"demand/api/graphql-admin/reference/objects/taxonomy-branch-edge",id:"demand/api/graphql-admin/reference/objects/taxonomy-branch-edge",title:"TaxonomyBranchEdge",description:"One edge producing one TaxonomyBranch Node",source:"@site/docs/demand/api/graphql-admin/reference/objects/taxonomy-branch-edge.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/taxonomy-branch-edge",permalink:"/demand/api/graphql-admin/reference/objects/taxonomy-branch-edge",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/taxonomy-branch-edge.mdx",tags:[],version:"current",frontMatter:{id:"taxonomy-branch-edge",title:"TaxonomyBranchEdge",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"TaxonomyBranchConnection",permalink:"/demand/api/graphql-admin/reference/objects/taxonomy-branch-connection"},next:{title:"TaxonomyBranch",permalink:"/demand/api/graphql-admin/reference/objects/taxonomy-branch"}},l={},m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranchEdge.<b>node</b></code><Bullet /><code>TaxonomyBranch</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-taxonomybranchedgebnodebcodetaxonomybranch-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:m,Bullet:p,SpecifiedBy:s,Badge:f};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One edge producing one TaxonomyBranch Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TaxonomyBranchEdge {\n  node: TaxonomyBranch\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchedgebnodebcodetaxonomybranch-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranchEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/taxonomy-branch"},(0,o.kt)("inlineCode",{parentName:"a"},"TaxonomyBranch"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/taxonomy-branch-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"TaxonomyBranchConnection")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);