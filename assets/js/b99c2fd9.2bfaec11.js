"use strict";(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[270],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=s(t),d=l,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[c]="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9131:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const i={},o="Attributes onChange",r={unversionedId:"element-attributes/attributes-onchange",id:"element-attributes/attributes-onchange",isDocsHomePage:!1,title:"Attributes onChange",description:"onChange option",source:"@site/docs/element-attributes/attributes-onchange.md",sourceDirName:"element-attributes",slug:"/element-attributes/attributes-onchange",permalink:"/element-attributes/attributes-onchange",editUrl:"https://github.com/VisualComposer/api-docs/edit/main/docs/element-attributes/attributes-onchange.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Element Hook",permalink:"/element-hook/element-hook"},next:{title:"Attributes Options",permalink:"/element-attributes/attributes-options"}},p=[{value:"onChange option",id:"onchange-option",children:[]},{value:"Rules",id:"rules",children:[{value:"true",id:"true",children:[]},{value:"toggle",id:"toggle",children:[]},{value:"minlength",id:"minlength",children:[]},{value:"maxlength",id:"maxlength",children:[]},{value:"range",id:"range",children:[]},{value:"minvalue",id:"minvalue",children:[]},{value:"maxvalue",id:"maxvalue",children:[]},{value:"between",id:"between",children:[]},{value:"value",id:"value",children:[]},{value:"valueIn",id:"valuein",children:[]},{value:"valueContains",id:"valuecontains",children:[]},{value:"required",id:"required",children:[]}]},{value:"Actions",id:"actions",children:[{value:"toggleVisibility",id:"togglevisibility",children:[]},{value:"toggleSectionVisibility",id:"togglesectionvisibility",children:[]},{value:"attachImageUrls",id:"attachimageurls",children:[]},{value:"fieldMethod",id:"fieldmethod",children:[]}]}],s={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"attributes-onchange"},"Attributes onChange"),(0,l.kt)("h2",{id:"onchange-option"},"onChange option"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"onChange")," property tells attribute how to react to another attribute value change. It is defined as an ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," inside an attribute ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," property and must hold ",(0,l.kt)("inlineCode",{parentName:"p"},"rules")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"actions")," properties."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rules")," property is an object holding properties that are also objects corresponding to attribute names. Each ",(0,l.kt)("inlineCode",{parentName:"p"},"rules")," object has a ",(0,l.kt)("inlineCode",{parentName:"p"},"rule")," property that holds rule type and an ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," property that holds value(s) for the rule. ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," property is optional."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"actions")," property is an array that holds objects each with its own action, an object can also have an ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," property."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"onChange"),"option ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "titleType": {\n            "rule": "value",\n            "options": {\n              "value": "custom"\n            }\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "titleType": {\n    "type": "dropdown",\n    "access": "public",\n    "value": "default",\n    "options": {\n      "label": "Title type",\n      "values": [\n        {\n          "label": "Default title",\n          "value": "default"\n        },\n        {\n          "label": "Custom title",\n          "value": "custom"\n        }\n      ]\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"rules"},"Rules"),(0,l.kt)("h3",{id:"true"},"true"),(0,l.kt)("p",null,"Reacts to any change of an attribute. Doesn't have any additional options."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The example for ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," rule will always hide the ",(0,l.kt)("inlineCode",{parentName:"p"},"title")," attribute, as the rule will always return ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),". This particular rule is meant for sending requests.  "))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "toggleTitle": {\n            "rule": "true"\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "description": {\n    "type": "string",\n    "access": "public",\n    "value": "",\n    "options": {\n      "label": "Description"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"toggle"},"toggle"),(0,l.kt)("p",null,"Reacts to ",(0,l.kt)("inlineCode",{parentName:"p"},"toggle")," type attribute value change. Rule value can also be ",(0,l.kt)("inlineCode",{parentName:"p"},"!toggle")," \u2013 which is reverse to ",(0,l.kt)("inlineCode",{parentName:"p"},"toggle"),". Doesn't have any additional options."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"toggle")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "toggleTitle": {\n            "rule": "toggle"\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "toggleTitle": {\n    "type": "toggle",\n    "access": "public",\n    "value": true,\n    "options": {\n      "label": "Show title"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"minlength"},"minlength"),(0,l.kt)("p",null,"Reacts to ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," change, checks for a min number of character in a string or min number of items in an array. Additional options could be an object with ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," property (",(0,l.kt)("inlineCode",{parentName:"p"},"string")," on an ",(0,l.kt)("inlineCode",{parentName:"p"},"array"),")."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"minlength")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "accessKey": {\n            "rule": "minlength",\n            "options": {\n              "value": "1234admin"\n            }\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "accessKey": {\n    "type": "string",\n    "access": "public",\n    "value": "",\n    "options": {\n      "label": "Access key"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"maxlength"},"maxlength"),(0,l.kt)("p",null,"Reacts to value change, checks for a max number of character in a string or max number of items in an array. Additional options could be an ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," property (",(0,l.kt)("inlineCode",{parentName:"p"},"string")," on an ",(0,l.kt)("inlineCode",{parentName:"p"},"array"),")"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"maxlength")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "accessKey": {\n            "rule": "maxlength",\n            "options": {\n              "value": "1234admin"\n            }\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "accessKey": {\n    "type": "string",\n    "access": "public",\n    "value": "",\n    "options": {\n      "label": "Access key"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"range"},"range"),(0,l.kt)("p",null,"Reacts to value change, checks for a value in the range of min and max character numbers. Additional options could be an ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," properties (",(0,l.kt)("inlineCode",{parentName:"p"},"number"),")."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"range")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "itemName": {\n            "rule": "range",\n            "options": {\n              "min": "5",\n              "max": "15"\n            }\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "itemName": {\n    "type": "string",\n    "access": "public",\n    "value": "Basic item",\n    "options": {\n      "label": "Item name"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"minvalue"},"minvalue"),(0,l.kt)("p",null,"Reacts to value change, checks for min value (",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"). Additional options could be ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"min")," property (",(0,l.kt)("inlineCode",{parentName:"p"},"number"),")."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"minvalue")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "titleHeight": {\n            "rule": "minvalue",\n            "options": {\n              "min": "10"\n            }\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "titleHeight": {\n    "type": "number",\n    "access": "public",\n    "value": "11",\n    "options": {\n      "label": "Title height"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"maxvalue"},"maxvalue"),(0,l.kt)("p",null,"Reacts to value change, checks for a value in the range of min and max character numbers. Additional options could be an ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," property (",(0,l.kt)("inlineCode",{parentName:"p"},"number"),")."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"maxvalue")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "titleHeight": {\n            "rule": "maxvalue",\n            "options": {\n              "max": "10"\n            }\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "titleHeight": {\n    "type": "number",\n    "access": "public",\n    "value": "9",\n    "options": {\n      "label": "Title height"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"between"},"between"),(0,l.kt)("p",null,"Reacts to value change, checks for a value between min and max number values. Additional options could be an ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," properties (",(0,l.kt)("inlineCode",{parentName:"p"},"number"),")."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"between")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json"),"  example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "titleHeight": {\n            "rule": "between",\n            "options": {\n              "min": 8,\n              "max": 15\n            }\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "titleHeight": {\n    "type": "number",\n    "access": "public",\n    "value": "10",\n    "options": {\n      "label": "Title height"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("p",null,"Reacts to value change, checks for the defined value. This rule can also be defined with not operator (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"\u201crule\u201d: \u201c!value\u201d"),"). Additional options could be an ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," with a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," property (",(0,l.kt)("inlineCode",{parentName:"p"},"string"),")"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"value")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "titleType": {\n            "rule": "value",\n            "options": {\n              "value": "custom"\n            }\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "titleType": {\n    "type": "dropdown",\n    "access": "public",\n    "value": "default",\n    "options": {\n      "label": "Title type",\n      "values": [\n        {\n          "label": "Default title",\n          "value": "default"\n        },\n        {\n          "label": "Custom title",\n          "value": "custom"\n        }\n      ]\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"valuein"},"valueIn"),(0,l.kt)("p",null,"Reacts to value change, checks for a value in the defined ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," array. Additional options could be an ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," with a ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," property (",(0,l.kt)("inlineCode",{parentName:"p"},"array"),")"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"valueIn")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "titleType": {\n            "rule": "valueIn",\n            "options": {\n              "values": [\n                "default",\n                "custom"\n              ]\n            }\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "titleType": {\n    "type": "dropdown",\n    "access": "public",\n    "value": "default",\n    "options": {\n      "label": "Title type",\n      "values": [\n        {\n          "label": "None",\n          "value": "none"\n        },\n        {\n          "label": "Default title",\n          "value": "default"\n        },\n        {\n          "label": "Custom title",\n          "value": "custom"\n        }\n      ]\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"valuecontains"},"valueContains"),(0,l.kt)("p",null,"Reacts to value change, checks for a value in the defined value string. Additional options could be an ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," with a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," property (",(0,l.kt)("inlineCode",{parentName:"p"},"string"),")."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"valueContains")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "titleType": {\n            "rule": "valueContains",\n            "options": {\n              "value": "custom"\n            }\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "titleType": {\n    "type": "string",\n    "access": "public",\n    "value": "",\n    "options": {\n      "label": "Title type"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"required"},"required"),(0,l.kt)("p",null,"Reacts to value change, checks for an empty value. Doesn't have any additional options."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"required")," rule property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "titleType": {\n            "rule": "required"\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "titleType": {\n    "type": "string",\n    "access": "public",\n    "value": "",\n    "options": {\n      "label": "Title type"\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"actions"},"Actions"),(0,l.kt)("h3",{id:"togglevisibility"},"toggleVisibility"),(0,l.kt)("p",null,"Toggles visibility of the attribute. Doesn't have any additional options."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"toggleVisibility")," action property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": {\n    "type": "string",\n    "access": "public",\n    "value": "Hello World",\n    "options": {\n      "label": "Title",\n      "onChange": {\n        "rules": {\n          "toggleTitle": {\n            "rule": "toggle"\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "toggleTitle": {\n    "type": "toggle",\n    "access": "public",\n    "value": true,\n    "options": {\n      "label": "Show title"\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"togglesectionvisibility"},"toggleSectionVisibility"),(0,l.kt)("p",null,"Toggles visibility of the section in Edit Form (e.g. Button element section). Doesn't have any additional options."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"toggleSectionVisibility")," action property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "button": {\n    "type": "element",\n    "access": "public",\n    "value": {\n      "tag": "basicButton"\n    },\n    "options": {\n      "category": "Button",\n      "tabLabel": "Button",\n      "onChange": {\n        "rules": {\n          "addButton": {\n            "rule": "toggle"\n          }\n        },\n        "actions": [\n          {\n            "action": "toggleSectionVisibility"\n          }\n        ]\n      }\n    }\n  },\n  "addButton": {\n    "type": "toggle",\n    "access": "public",\n    "value": true,\n    "options": {\n      "label": "Add button"\n    }\n  },\n  "metaEditFormTabs": {\n    "type": "group",\n    "access": "protected",\n    "value": [\n      "editFormTab1",\n      "button",\n      "designOptions"\n    ]\n  }\n}\n')),(0,l.kt)("h3",{id:"attachimageurls"},"attachImageUrls"),(0,l.kt)("p",null,"Toggles visibility of Link Selector for ",(0,l.kt)("inlineCode",{parentName:"p"},"attachimage")," attribute. Doesn't have any additional options."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"attachImageUrls")," action property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "image": {\n    "type": "attachimage",\n    "access": "public",\n    "value": "single-image.jpg",\n    "options": {\n      "label": "Image",\n      "multiple": false,\n      "defaultValue": "single-image.jpg",\n      "onChange": {\n        "rules": {\n          "clickableOptions": {\n            "rule": "value",\n            "options": {\n              "value": "url"\n            }\n          }\n        },\n        "actions": [\n          {\n            "action": "attachImageUrls"\n          }\n        ]\n      },\n      "url": false,\n      "imageFilter": true\n    }\n  },\n  "clickableOptions": {\n    "type": "dropdown",\n    "access": "public",\n    "value": "",\n    "options": {\n      "label": "OnClick action",\n      "values": [\n        {\n          "label": "Open Image in New Tab",\n          "value": "imageNewTab"\n        },\n        {\n          "label": "Link selector",\n          "value": "url"\n        }\n      ]\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"fieldmethod"},"fieldMethod"),(0,l.kt)("p",null,"Executes the method of the attribute. Specify which method to execute in the options property. Currently available ",(0,l.kt)("inlineCode",{parentName:"p"},"requestToServer")," method."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fieldMethod")," action property ",(0,l.kt)("em",{parentName:"p"},"settings.json")," example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "widget": {\n    "type": "ajaxForm",\n    "access": "public",\n    "value": {\n      "key": "",\n      "value": ""\n    },\n    "options": {\n      "label": "",\n      "action": "vcv:wpWidgets:form",\n      "onChange": {\n        "rules": {\n          "widgetKey": {\n            "rule": "true"\n          }\n        },\n        "actions": [\n          {\n            "action": "fieldMethod",\n            "options": {\n              "method": "requestToServer"\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n')))}c.isMDXComponent=!0}}]);