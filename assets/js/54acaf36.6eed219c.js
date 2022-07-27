"use strict";(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[57],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7021:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="mount",p={unversionedId:"editor-api/mount",id:"editor-api/mount",isDocsHomePage:!1,title:"mount",description:"mount",source:"@site/docs/editor-api/mount.md",sourceDirName:"editor-api",slug:"/editor-api/mount",permalink:"/editor-api/mount",editUrl:"https://github.com/VisualComposer/api-docs/edit/main/docs/editor-api/mount.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"addFilter",permalink:"/editor-api/addFilter"},next:{title:"subscribe / unsubscribe",permalink:"/editor-api/subscribe-unsubscribe"}},c=[{value:"<code>mount</code>",id:"mount-1",children:[]}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mount"},"mount"),(0,o.kt)("h2",{id:"mount-1"},(0,o.kt)("inlineCode",{parentName:"h2"},"mount")),(0,o.kt)("p",null,"Render React component in places that are allowed by Visual Composer. Arguments: 1. mount key, 2. callback function that returns React component. Allowed mount keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"panelMessages:third-party")," - this will render panel inside 'messages' window in VC editor. "),(0,o.kt)("p",{parentName:"li"},"Example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"window.vcwbEditorApi.mount('panelInsights:third-party', () => {\n  return <ExampleInsightsPanel />\n})\n")))))}u.isMDXComponent=!0}}]);