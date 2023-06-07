"use strict";(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[579],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(i),d=a,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return i?n.createElement(h,l(l({ref:t},p),{},{components:i})):n.createElement(h,l({ref:t},p))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},1470:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=i(7462),a=(i(7294),i(3905));const r={},l="Services",s={unversionedId:"public-api/services",id:"public-api/services",isDocsHomePage:!1,title:"Services",description:"With the help of vcCake library, Visual Composer utilizes multiple services that help perform specific actions like requests, getting and setting data, and more.",source:"@site/docs/public-api/services.md",sourceDirName:"public-api",slug:"/public-api/services",permalink:"/public-api/services",editUrl:"https://github.com/VisualComposer/api-docs/edit/main/docs/public-api/services.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Public events API",permalink:"/public-api/public-events"},next:{title:"Stores",permalink:"/public-api/stores"}},o=[{value:"vcCake library",id:"vccake-library",children:[]},{value:"Usage",id:"usage",children:[{value:"Get existing service",id:"get-existing-service",children:[]},{value:"Services API",id:"services-api",children:[]}]},{value:"Services list",id:"services-list",children:[]}],c={toc:o},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"services"},"Services"),(0,a.kt)("p",null,"With the help of vcCake library, Visual Composer utilizes multiple ",(0,a.kt)("strong",{parentName:"p"},"services")," that help perform specific actions like requests, getting and setting data, and more."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Service")," is a globally accessible object that can be used by all modules in all scopes."),(0,a.kt)("h2",{id:"vccake-library"},"vcCake library"),(0,a.kt)("p",null,"Visual Composer uses a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wpbakery/vc-cake"},"vcCake")," library which "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"allows to communicate modules with each other or even group objects in one scope without tight coupling.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"get-existing-service"},"Get existing service"),(0,a.kt)("p",null,"Editor services are objects that can be used everywhere in our system including external files that are outside mount point of ",(0,a.kt)("inlineCode",{parentName:"p"},"editor.js"),". Service can be accessed via the ",(0,a.kt)("inlineCode",{parentName:"p"},"getService")," method of ",(0,a.kt)("inlineCode",{parentName:"p"},"vc-cake")," package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getService } from 'vc-cake'\nconst documentData = getService('document')\n\nconst parentID = '2afd34c'\nconst elementChildren = documentData.children(parentID)\n")),(0,a.kt)("h3",{id:"services-api"},"Services API"),(0,a.kt)("p",null,"Each ",(0,a.kt)("strong",{parentName:"p"},"service")," is a unique object with its own custom methods that do specific things."),(0,a.kt)("p",null,"To use each service you'll have to get familiar with its particular available methods."),(0,a.kt)("h2",{id:"services-list"},"Services list"),(0,a.kt)("p",null,"The services are located inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"public/editor/services")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/VisualComposer/builder/tree/master/public/editor/services"},"folder"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"actionsManager")," - manage actions for elements like setup visibility property, attach image URLs and update dependency classes for parent and children"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api")," - API for elements and public events. Used by elements to get superclass for element's component. Public ",(0,a.kt)("inlineCode",{parentName:"li"},"vc")," events like ",(0,a.kt)("inlineCode",{parentName:"li"},"ready")," and others that are used by elements for public js"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cook")," - service which helps to work with element components and attributes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dataProcessor")," - sends ajax request to the server with pre-configured attributes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"document")," - service which stores data about current layout and its elements. Can be used with ",(0,a.kt)("inlineCode",{parentName:"li"},"cook")," service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elementsAccessPoint")," - single access point for element data. This service is used by edit form panel component."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"elementAssetsLibrary")," - service which manages elements specific assets libraries"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hubAddons")," - helps to manage HUB addons list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hubCategories")," - helps to manage HUB elements categories"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hubElements")," - helps to manage HUB elements list"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hubGroups")," helps to manage HUB groups of elements"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"modernAssetsStorage")," - manages building of element PostCSS mixins"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"renderProcessor")," - supporting service to help manage data flow with promises"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rulesManager")," - service helps to check data value with some comparison rules like: ",(0,a.kt)("inlineCode",{parentName:"li"},"maxlength"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"minlength"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"toggle"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"range")," and etc. Possible to use async and sync methods"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sharedAssetsLibrary")," - shared assets are libraries that are implemented in the editor and can be used in a specific moment. This service helps to manage it"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stylesManager")," - service helps to compile Post CSS to CSS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"utils")," - different utilities"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wordpress-post-data")," - service to work with global data for current WordPress post/page in the editor"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wpMyTemplates")," - helps to manage my templates in the Template panel.")))}u.isMDXComponent=!0}}]);