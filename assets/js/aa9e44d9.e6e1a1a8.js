"use strict";(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[429],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6723:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={},s="Element CSS Mixins",p={unversionedId:"css-mixins/element-css-mixins",id:"css-mixins/element-css-mixins",isDocsHomePage:!1,title:"Element CSS Mixins",description:"CSS Mixins",source:"@site/docs/css-mixins/element-css-mixins.md",sourceDirName:"css-mixins",slug:"/css-mixins/element-css-mixins",permalink:"/api-docs/css-mixins/element-css-mixins",editUrl:"https://github.com/VisualComposer/docs/css-mixins/element-css-mixins.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Meta Attributes",permalink:"/api-docs/element-attributes/meta-attributes"},next:{title:"Inner Elements",permalink:"/api-docs/inner-elements/inner-elements"}},c=[{value:"CSS Mixins",id:"css-mixins",children:[]},{value:"PostCSS",id:"postcss",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"element-css-mixins"},"Element CSS Mixins"),(0,r.kt)("h2",{id:"css-mixins"},"CSS Mixins"),(0,r.kt)("p",null,"There is an option to use mixins for generated styles such as ",(0,r.kt)("em",{parentName:"p"},"color")," or ",(0,r.kt)("em",{parentName:"p"},"size"),". Mixins are a prepared and formatted CSS code, designed to generate unique style for an element."),(0,r.kt)("p",null,"In the example shown below a mixin changes the color of the button. It is created by the setting named ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," with an option field named ",(0,r.kt)("inlineCode",{parentName:"p"},"cssMixin"),". This object has some properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mixin")," to give file name where mixin is stored - ",(0,r.kt)("inlineCode",{parentName:"li"},"basicColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"property")," to name variable to store attribute value ",(0,r.kt)("inlineCode",{parentName:"li"},"color")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namePattern")," is optional, to let know the mixin how to resolve color values (hex, rbg)")),(0,r.kt)("p",null,"CSS Mixins ",(0,r.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "color": {\n   "type": "color",\n   "access": "public",\n   "value": "#fff",\n   "options": {\n     "label": "Title color",\n     "cssMixin": {\n       "mixin": "basicColor",\n       "property": "color",\n       "namePattern": "[\\\\da-f]+"\n     }\n   }\n }\n}\n')),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("em",{parentName:"p"},"basicColor.pcss")," file there are two variables available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$selector")," is an auto-generated variable with unique mixin selector"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$color")," is a variable where the attribute value is stored. Its name matches with ",(0,r.kt)("inlineCode",{parentName:"li"},"options.cssMixin.property")," value.")),(0,r.kt)("p",null,"CSS Mixins ",(0,r.kt)("em",{parentName:"p"},"componentName/cssMixins/basicColor.pcss")," example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".vce-button--color-$selector {\n  color: $color;\n  &:hover {\n    color: color($color shade(10%));\n  }\n}\n")),(0,r.kt)("p",null,"PostCSS file must be included in the ",(0,r.kt)("em",{parentName:"p"},"index.js")," file."),(0,r.kt)("p",null,"CSS Mixins ",(0,r.kt)("em",{parentName:"p"},"index.js")," example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// ...\nmixins: {\n  basicColor: {\n    mixin: require('raw-loader!./cssMixins/basicColor.pcss')\n  }\n}\n// ...\n")),(0,r.kt)("p",null,"To get mixin data in ",(0,r.kt)("em",{parentName:"p"},"component.js")," file by using a helper ",(0,r.kt)("inlineCode",{parentName:"p"},"getMixinData()"),"."),(0,r.kt)("p",null,"CSS Mixins ",(0,r.kt)("em",{parentName:"p"},"component.js")," example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// This code goes inside render() method\n// to get mixins data\nlet mixinData = this.getMixinData('basicColor')\nif (mixinData) {\n  classes += ` vce-button--color-${mixinData.selector}`\n}\n")),(0,r.kt)("h2",{id:"postcss"},"PostCSS"),(0,r.kt)("p",null,"PostCSS ",(0,r.kt)("em",{parentName:"p"},"styles.scss")," example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"$bodyColor: #fff;\n@media (--md-only) {\n  body {\n    background: $bodyColor;\n  }\n}\n")),(0,r.kt)("p",null,"It is possible to use some PostCSS features in CSS mixins and ",(0,r.kt)("em",{parentName:"p"},"styles.css")," file"),(0,r.kt)("p",null,"A complete list of PostCSS plugins what are in use is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/postcss-advanced-variables",target:"_blank"},"postcss-advanced-variables"),": PostCSS plugin to convert Sass-like variables and conditionals into CSS;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/postcss-custom-properties",target:"_blank"},"postcss-custom-properties"),": PostCSS plugin to transform W3C CSS Custom Properties for cascading variables syntax to more compatible CSS;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/postcss-color-function",target:"_blank"},"postcss-color-function"),": PostCSS plugin to transform W3C CSS color function to more compatible CSS;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/postcss-nested",target:"_blank"},"postcss-nested"),": PostCSS plugin to unwrap nested rules like how Sass does it;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://www.npmjs.com/package/postcss-custom-media",target:"_blank"},"postcss-custom-media"),": PostCSS plugin to transform W3C CSS Custom Media Queries syntax to more compatible CSS.")),(0,r.kt)("p",null,"Complete list of custom media queries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all, all-only: all available devices;"),(0,r.kt)("li",{parentName:"ul"},"xs, mobile-portrait: mobile portrait and above;"),(0,r.kt)("li",{parentName:"ul"},"xs-only, mobile-portrait-only: mobile portrait only;"),(0,r.kt)("li",{parentName:"ul"},"sm, mobile-landscape: mobile landscape and above;"),(0,r.kt)("li",{parentName:"ul"},"sm-only, mobile-landscape-only: mobile landscape only;"),(0,r.kt)("li",{parentName:"ul"},"md, tablet-portrait: tablet portrait and above;"),(0,r.kt)("li",{parentName:"ul"},"md-only, tablet-portrait-only: tablet portrait only;"),(0,r.kt)("li",{parentName:"ul"},"lg, tablet-landscape: tablet landscape and above;"),(0,r.kt)("li",{parentName:"ul"},"lg-only, tablet-landscape-only: tablet landscape only;"),(0,r.kt)("li",{parentName:"ul"},"xl, desktop: desktop and above;"),(0,r.kt)("li",{parentName:"ul"},"xl-only, desktop-only: desktop only.")))}u.isMDXComponent=!0}}]);