"use strict";(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[196],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||a;return o?n.createElement(d,i(i({ref:t},p),{},{components:o})):n.createElement(d,i({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},7036:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={},i="How to Integrate Visual Composer in ThemeForest Theme at Envato",s={unversionedId:"tutorials/how-to-integrate-visual-composer-in-envato-product",id:"tutorials/how-to-integrate-visual-composer-in-envato-product",isDocsHomePage:!1,title:"How to Integrate Visual Composer in ThemeForest Theme at Envato",description:"You can bundle Visual Composer plugin with your ThemeForest Theme at Envato, by purchasing the Theme Integration License.",source:"@site/docs/tutorials/how-to-integrate-visual-composer-in-envato-product.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-integrate-visual-composer-in-envato-product",permalink:"/tutorials/how-to-integrate-visual-composer-in-envato-product",editUrl:"https://github.com/VisualComposer/api-docs/edit/main/docs/tutorials/how-to-integrate-visual-composer-in-envato-product.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Integrate Visual Composer in a WordPress Theme",permalink:"/tutorials/how-to-integrate-visual-composer-in-a-wp-theme"},next:{title:"How to Submit Your Element to the Visual Composer Hub",permalink:"/tutorials/how-to-submit-your-elment-to-the-visual-composer-hub"}},l=[{value:"Implementation",id:"implementation",children:[]},{value:"There you will see the license that consists of:",id:"there-you-will-see-the-license-that-consists-of",children:[]}],c={toc:l},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-integrate-visual-composer-in-themeforest-theme-at-envato"},"How to Integrate Visual Composer in ThemeForest Theme at Envato"),(0,r.kt)("p",null,"You can bundle Visual Composer plugin with your ThemeForest Theme at Envato, by purchasing the ",(0,r.kt)("a",{parentName:"p",href:"https://visualcomposer.com/theme-integration/"},"Theme Integration License"),". "),(0,r.kt)("p",null,"After that you will receive a specific licence that will allow you to activate Visual Composer premium version for a single site for you as a developer, and additionally to that depending on the license type a specific count of your Theme customers will be able to activate Visual Composer premium by using the Envato items purchase code. "),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"After purchase go to the ",(0,r.kt)("a",{parentName:"p",href:"https://my.visualcomposer.com/theme-integration/"},"Theme Integration")," section in ",(0,r.kt)("a",{parentName:"p",href:"https://my.visualcomposer.com/"},"my.visualcomposer.com")),(0,r.kt)("img",{src:"/img/docs/theme-integration-section.png",alt:"Theme Integration"}),(0,r.kt)("p",null,"Before getting access to the license you will need to create an ",(0,r.kt)("a",{parentName:"p",href:"https://build.envato.com/create-token/"},"Envato API token"),". "),(0,r.kt)("img",{width:"50%",src:"/img/docs/theme-integration-api-key-create.png",alt:"Theme Integration API key create"}),(0,r.kt)("p",null,"Make sure that you select ",(0,r.kt)("strong",{parentName:"p"},"Verify purchases of the user's items")," permission for the token."),(0,r.kt)("img",{width:"50%",src:"/img/docs/theme-integration-api-key-create-2.png",alt:"Theme Integration API key create"}),(0,r.kt)("p",null,"When the token is created copy it and paste it in ",(0,r.kt)("a",{parentName:"p",href:"https://my.visualcomposer.com/theme-integration/"},"My Visual Composer Theme Integration section"),", by clicking on the button - ",(0,r.kt)("strong",{parentName:"p"},"Validate Envato API Key")),(0,r.kt)("img",{width:"50%",src:"/img/docs/theme-integration-api-key-validate.png",alt:"Theme Integration API key validate"}),(0,r.kt)("h3",{id:"there-you-will-see-the-license-that-consists-of"},"There you will see the license that consists of:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Visual Composer License")," is the personal license key for you as a developer to use our premium version, don't distribute this key to anyone."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"API Token")," this is your public token that needs to be defined inside your Theme function.php like")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"define('VCV_AUTHOR_API_KEY','vcwb-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Status")," Shows if the personal license key is activated or not."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Expiration Date")," license expiration date, if the license expires you and your ThemeForest customers won't be able to download any new elements or templates from the cloud. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Author Activations")," your personal licence activation limits, usually max activation count is 1 as this license shouldn't be distributed. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"User Activations")," your ThemeForest customer activations, here you can follow how many users that have purchased your Theme at Envato have activated Visual Composer."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Sites")," here you can see all the sites that have activated Visual Composer with your Envato purchase key, also if needed, you can deactivate it for a specific site."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Upgrades")," if you see that soon you will reach the ",(0,r.kt)("strong",{parentName:"li"},"User Activations")," limit, this is the place where to look into to increase it.")))}u.isMDXComponent=!0}}]);