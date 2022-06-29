"use strict";(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7133:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const s={},l="Element CSS Variables",o={unversionedId:"css-mixins/element-css-variables",id:"css-mixins/element-css-variables",isDocsHomePage:!1,title:"Element CSS Variables",description:"To style your custom elements you can use CSS variables (custom properties).",source:"@site/docs/css-mixins/element-css-variables.md",sourceDirName:"css-mixins",slug:"/css-mixins/element-css-variables",permalink:"/css-mixins/element-css-variables",editUrl:"https://github.com/VisualComposer/api-docs/edit/main/docs/css-mixins/element-css-variables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Element PCSS Mixins",permalink:"/css-mixins/element-css-mixins"},next:{title:"Inner Elements",permalink:"/inner-elements/inner-elements"}},i=[{value:"CSS",id:"css",children:[]},{value:"JSX",id:"jsx",children:[]}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"element-css-variables"},"Element CSS Variables"),(0,a.kt)("p",null,"To style your custom elements you can use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables (custom properties)"),"."),(0,a.kt)("p",null,"By using CSS variables you can set dynamic values to your CSS rules. Unlike ",(0,a.kt)("a",{parentName:"p",href:"/css-mixins/element-css-mixins"},"PCSS mixins")," which takes time to build, they will be set instantly thus making your component render faster, and your CSS code cleaner."),(0,a.kt)("h2",{id:"css"},"CSS"),(0,a.kt)("p",null,"Inside your CSS file define your variables with some default values (usually the same as specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json")," file):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".vce-css-var-btn-container {\n  --background-color: #557cbf;\n  --text-align: left;\n  --border-radius: 0px;\n  --color: #fff;\n  --hover-color: #fff;\n  text-align: var(--text-align);\n}\n")),(0,a.kt)("p",null,"Set these variables for your selectors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".vce-css-var-btn {\n  background-color: var(--background-color);\n  border-radius: var(--border-radius);\n  color: var(--color);\n}\n\n.vce-css-var-btn:hover {\n  color: var(--hover-color);\n}\n")),(0,a.kt)("h2",{id:"jsx"},"JSX"),(0,a.kt)("p",null,"Inside the element ",(0,a.kt)("inlineCode",{parentName:"p"},"component.js")," file ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," method you'll need to define a variable and set it equal to an empty object.\nThis object will hold properties that will be equal to attribute values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const stylesVariables = {}\n")),(0,a.kt)("p",null,"Next to set the object propery value use the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation"},"bracket notation"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"stylesVariables['--border-radius'] = shape\n")),(0,a.kt)("p",null,"Finally, assign all of the properties to the container by setting a style attribute equal to the object ",(0,a.kt)("inlineCode",{parentName:"p"},"stylesVariables"),"."),(0,a.kt)("p",null,"By doing so, you'll override the CSS varibles that are defined in the styles.css file, and they'll be scoped to that particular element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"return (\n      <div className={containerClasses} {...editor} style={stylesVariables}>\n        <span className={wrapperClasses} id={'el-' + id} {...doMargin}>\n          <CustomTag className={classes} {...customProps} {...doRest}>\n            {buttonText}\n          </CustomTag>\n        </span>\n      </div>\n    )\n")),(0,a.kt)("p",null,"You can find a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/VisualComposer/vcwb-demo-element-example-plugin/tree/master/elements/cssVariablesButton/cssVariablesButton"},"button element")," made solely with CSS variables in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/VisualComposer/vcwb-demo-element-example-plugin"},"Example Plugin"),"."))}p.isMDXComponent=!0}}]);