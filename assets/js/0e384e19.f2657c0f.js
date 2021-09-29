"use strict";(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={sidebar_position:1,slug:"/"},s="Introduction",u={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"Visual Composer API allows you to develop your own custom elements for the website builder. With custom elements, you are in charge of your element design and functionality which is crucial for advanced projects and allows perfectly aligned element choice to your brand.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/VisualComposer/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Element Structure",permalink:"/element-structure/element-structure"}},p=[{value:"What is Visual Composer Website Builder Editor?",id:"what-is-visual-composer-website-builder-editor",children:[]},{value:"What is Visual Composer Element?",id:"what-is-visual-composer-element",children:[]},{value:"How to Start Development?",id:"how-to-start-development",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Useful Links",id:"useful-links",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Visual Composer API allows you to develop your own custom elements for the website builder. With custom elements, you are in charge of your element design and functionality which is crucial for advanced projects and allows perfectly aligned element choice to your brand."),(0,i.kt)("p",null,"This section contains all the information you need to develop custom elements, it will guide you on how to get started, provide information about hooks, attributes, and offer examples."),(0,i.kt)("h2",{id:"what-is-visual-composer-website-builder-editor"},"What is Visual Composer Website Builder Editor?"),(0,i.kt)("p",null,"To get started, you need to understand how the Visual Composer Website Builder Editor works. The Editor is WYSIWYG module based editor which has inner and public API to manage elements and components."),(0,i.kt)("p",null,"The editor works with elements as React components. These components must be built with Webpack and enqueued via API hooks (WordPress actions). Every element consists of few parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Thumbnail Image \u2013 a small image (100\xd7100 pixels) that will represent an element in the \u2018Add Element\u2019 window;"),(0,i.kt)("li",{parentName:"ul"},"Preview Image \u2013 a large image (520\xd7240 pixels) visible on Thumbnail hover;"),(0,i.kt)("li",{parentName:"ul"},"Description \u2013 a description that appears on hover together with the Preview image;"),(0,i.kt)("li",{parentName:"ul"},"Category \u2013 element category;"),(0,i.kt)("li",{parentName:"ul"},"React-based component.")),(0,i.kt)("h2",{id:"what-is-visual-composer-element"},"What is Visual Composer Element?"),(0,i.kt)("p",null,"The element is an independent component of the system which represents HTML based block with the ability to output media and dynamic content. Visual Composer offers a wide range of pre-defined content elements which can be downloaded from the ",(0,i.kt)("a",{href:"https://visualcomposer.com/help/visual-composer-hub/",target:"_blank"},"Visual Composer Hub"),". Visual Composer API allows extending the list with your own elements \u2013 these elements will not be available in the Hub but will be instantly displayed in the \u2018Add Element\u2019 window."),(0,i.kt)("h2",{id:"how-to-start-development"},"How to Start Development?"),(0,i.kt)("p",null,"There are 4 steps to start developing elements for the Visual Composer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow the requirements (see below);"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://visualcomposer.com/download/",target:"_blank"},"Download")," and ",(0,i.kt)("a",{href:"https://visualcomposer.com/help/installation/",target:"_blank"},"install")," the plugin;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://visualcomposer.com/help/activation/",target:"_blank"},"Activate")," the plugin with Premium/Free license;"),(0,i.kt)("li",{parentName:"ul"},"Use API hooks and element boilerplates to add elements to your plugin or theme.")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To develop Visual Composer element there are following technical requirements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PHP >= 5.4"),(0,i.kt)("li",{parentName:"ul"},"WordPress >= 4.6"),(0,i.kt)("li",{parentName:"ul"},"PHP gd2/imagick and php-zip extensions to be loaded"),(0,i.kt)("li",{parentName:"ul"},"Node >=8.0"),(0,i.kt)("li",{parentName:"ul"},"npm >=5.8"),(0,i.kt)("li",{parentName:"ul"},"yarn")),(0,i.kt)("h2",{id:"useful-links"},"Useful Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Visual Composer Website Builder repository: ",(0,i.kt)("a",{href:"https://github.com/VisualComposer/builder",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/VisualComposer/builder"},"https://github.com/VisualComposer/builder")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Element boilerplate repository: ",(0,i.kt)("a",{href:"https://github.com/VisualComposer/elementBoilerplate",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/VisualComposer/elementBoilerplate"},"https://github.com/VisualComposer/elementBoilerplate")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WordPress Demo plugin with elements: ",(0,i.kt)("a",{href:"https://github.com/VisualComposer/vcwb-demo-element-example-plugin",target:"_blank"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/VisualComposer/vcwb-demo-element-example-plugin"},"https://github.com/VisualComposer/vcwb-demo-element-example-plugin"))))))}c.isMDXComponent=!0}}]);