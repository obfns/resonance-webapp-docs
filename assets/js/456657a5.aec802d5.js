"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[3885],{3905:function(e,n,r){r.d(n,{Zo:function(){return o},kt:function(){return g}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},o=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),h=p(r),g=i,m=h["".concat(l,".").concat(g)]||h[g]||c[g]||a;return r?t.createElement(m,d(d({ref:n},o),{},{components:r})):t.createElement(m,d({ref:n},o))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,d=new Array(a);d[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,d[1]=s;for(var p=2;p<a;p++)d[p]=r[p];return t.createElement.apply(null,d)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},665:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return h}});var t=r(3117),i=r(102),a=(r(7294),r(3905)),d=["components"],s={id:"user-update-input",title:"UserUpdateInput"},l=void 0,p={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input",id:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input",isDocsHomePage:!1,title:"UserUpdateInput",description:"Input object to update a User.",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/inputs",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input.mdx",tags:[],version:"current",frontMatter:{id:"user-update-input",title:"UserUpdateInput"},sidebar:"apisSidebar",previous:{title:"UserNotificationUpdateStatusInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-notification-update-status-input"},next:{title:"Boolean",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/boolean"}},o=[{value:"Fields",id:"fields",children:[{value:"<code>address</code> (String)",id:"address-string",children:[],level:4},{value:"<code>birthdate</code> (String)",id:"birthdate-string",children:[],level:4},{value:"<code>createdAt</code> (String)",id:"createdat-string",children:[],level:4},{value:"<code>email</code> (String)",id:"email-string",children:[],level:4},{value:"<code>emailVerified</code> (String)",id:"emailverified-string",children:[],level:4},{value:"<code>familyName</code> (String)",id:"familyname-string",children:[],level:4},{value:"<code>gender</code> (String)",id:"gender-string",children:[],level:4},{value:"<code>givenName</code> (String)",id:"givenname-string",children:[],level:4},{value:"<code>locale</code> (String)",id:"locale-string",children:[],level:4},{value:"<code>nickname</code> (String)",id:"nickname-string",children:[],level:4},{value:"<code>phone</code> (String)",id:"phone-string",children:[],level:4},{value:"<code>phoneNumberVerified</code> (String)",id:"phonenumberverified-string",children:[],level:4},{value:"<code>picture</code> (String)",id:"picture-string",children:[],level:4},{value:"<code>profile</code> (String)",id:"profile-string",children:[],level:4},{value:"<code>updatedAt</code> (String)",id:"updatedat-string",children:[],level:4},{value:"<code>userName</code> (ID!)",id:"username-id",children:[],level:4},{value:"<code>website</code> (String)",id:"website-string",children:[],level:4},{value:"<code>zoneinfo</code> (String)",id:"zoneinfo-string",children:[],level:4}],level:3}],c={toc:o};function h(e){var n=e.components,r=(0,i.Z)(e,d);return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Input object to update a User.\nVery similiar to User, but does not include sub and email is not required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserUpdateInput {\n  address: String\n  birthdate: String\n  createdAt: String\n  email: String\n  emailVerified: String\n  familyName: String\n  gender: String\n  givenName: String\n  locale: String\n  nickname: String\n  phone: String\n  phoneNumberVerified: String\n  picture: String\n  profile: String\n  updatedAt: String\n  userName: ID!\n  website: String\n  zoneinfo: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"address-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"address")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"birthdate-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"birthdate")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"End-User's birthday, represented as an ISO 8601:2004 YYYY-MM-DD format. The\nyear MAY be 0000, indicating that it is omitted. To represent only the year,\nYYYY format is allowed. Note that depending on the underlying platform's date\nrelated function, providing just year can result in varying month and day, so\nthe implementers need to take this factor into account to correctly process the dates."),(0,a.kt)("h4",{id:"createdat-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"email-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"emailverified-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"emailVerified")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"string of true or false"),(0,a.kt)("h4",{id:"familyname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"familyName")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"gender-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"gender")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"givenname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"givenName")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"locale-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"locale")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"String representing the User's locale, i.e. 'en-us'"),(0,a.kt)("h4",{id:"nickname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"nickname")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The display name for the User"),(0,a.kt)("h4",{id:"phone-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"phone")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"End-User's preferred telephone number. E.164 ","[E.164]"," is RECOMMENDED as the\nformat of this Claim, for example, +1 (425) 555-1212 or +56 (2) 687 2400. If\nthe phone number contains an extension, it is RECOMMENDED that the extension\nbe represented using the RFC 3966 ","[RFC3966]"," extension syntax, for example, +1\n(604) 555-1234;ext=5678."),(0,a.kt)("h4",{id:"phonenumberverified-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"phoneNumberVerified")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"string of true or false"),(0,a.kt)("h4",{id:"picture-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"picture")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"URL of the End-User's profile picture. This URL MUST refer to an image file\n(for example, a PNG, JPEG, or GIF image file), rather than to a Web page\ncontaining an image. Note that this URL SHOULD specifically reference a\nprofile photo of the End-User suitable for displaying when describing the\nEnd-User, rather than an arbitrary photo taken by the End-User."),(0,a.kt)("h4",{id:"profile-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"profile")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"URL of the End-User's profile page. The contents of this Web page SHOULD be about the End-User."),(0,a.kt)("h4",{id:"updatedat-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"username-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"userName")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h4",{id:"website-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"website")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"URL of the End-User's Web page or blog. This Web page SHOULD contain\ninformation published by the End-User or an organization that the End-User is\naffiliated with."),(0,a.kt)("h4",{id:"zoneinfo-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"zoneinfo")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Timezone - String from zoneinfo time zone database representing the End-User's\ntime zone. For example, Europe/Paris or America/Los_Angeles."))}h.isMDXComponent=!0}}]);