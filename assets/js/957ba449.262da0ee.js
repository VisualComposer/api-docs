"use strict";(self.webpackChunktest_docs=self.webpackChunktest_docs||[]).push([[508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),k=r,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},788:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="Filters and actions hooks",o={unversionedId:"editor-api/addFilter",id:"editor-api/addFilter",isDocsHomePage:!1,title:"Filters and actions hooks",description:"PHP hooks and actions",source:"@site/docs/editor-api/addFilter.md",sourceDirName:"editor-api",slug:"/editor-api/addFilter",permalink:"/editor-api/addFilter",editUrl:"https://github.com/VisualComposer/api-docs/edit/main/docs/editor-api/addFilter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Setup",permalink:"/editor-api/api-setup"},next:{title:"Events",permalink:"/editor-api/events"}},p=[{value:"PHP hooks and actions",id:"php-hooks-and-actions",children:[{value:"vcfilter",id:"vcfilter",children:[]},{value:"EventsFilters::addFilter()",id:"eventsfiltersaddfilter",children:[]},{value:"vcevent",id:"vcevent",children:[]},{value:"EventsFilters::addEvent()",id:"eventsfiltersaddevent",children:[]}]},{value:"JS hooks and actions",id:"js-hooks-and-actions",children:[]}],d={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"filters-and-actions-hooks"},"Filters and actions hooks"),(0,r.kt)("h2",{id:"php-hooks-and-actions"},"PHP hooks and actions"),(0,r.kt)("p",null,"In plugin core we have a filters and actions hooks that are analogs of wordpress filters and actions with some improverments and advantages in use for PHP code."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Wordpress Function"),(0,r.kt)("th",null,"Visualcomposer Analog")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://developer.wordpress.org/reference/functions/apply_filters/",target:"_blank"},"apply_filters")),(0,r.kt)("td",null,"vcfilter")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://developer.wordpress.org/reference/functions/do_action/",target:"_blank"},"do_action")),(0,r.kt)("td",null,"vcevent")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://developer.wordpress.org/reference/functions/add_filter/",target:"_blank"},"add_filter")),(0,r.kt)("td",null,"EventsFilters::addFilter()")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://developer.wordpress.org/reference/functions/add_action/",target:"_blank"},"add_action")),(0,r.kt)("td",null,"EventsFilters::addEvent()"))),(0,r.kt)("h3",{id:"vcfilter"},"vcfilter"),(0,r.kt)("p",null,"This function invokes all functions attached to filter hook ",(0,r.kt)("inlineCode",{parentName:"p"},"$filter"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"vcfilter( string $filter, mixin $body = '', mixin $payload = [], bool $haltable = false)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$filter")," (string) Required - The name of the filter hook."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$body")," (mixed) Optional - The value to filter."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$payload")," (mixed) Optional - Additional parameters to pass to the callback functions."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$haltable")," (bool) Optional - If true, then we can't override this filter."),(0,r.kt)("p",null,"Example in Visual Composer core."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$post = get_post();\n$link = get_edit_post_link($post, 'url');\n$query = [\n    'vcv-action' => 'frontend',\n    'vcv-source-id' => $post->ID,\n];\n$frontendUrl = $link . http_build_query($query, '', '&');\n\nvcfilter('vcv:frontend:url', $frontendUrl, ['sourceId' => $sourceId, 'query' => $query])\n")),(0,r.kt)("h3",{id:"eventsfiltersaddfilter"},"EventsFilters::addFilter()"),(0,r.kt)("p",null,"Adds a callback function to a filter hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"addFilter(string $filterName, string $methodCallback, int $weight = 0)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$filterName")," (string) Required - The name of the filter to add the callback to."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$methodCallback")," (string) Required - The callback to be run when the filter is applied."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$weight")," (int) Optional - Used to specify the order in which the functions associated with a particular filter are executed."),(0,r.kt)("p",null,"Example can be implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"functions.php")," theme file or any plugin file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"add_action('vcv:api', function() {\n  vchelper('Filters')->listen('vcv:frontend:url', 'actionHookExample');\n\n    function actionHookExample($url, $payload) {\n\n        if (empty($payload['sourceId']) || empty($payload['sourceId'])) {\n            return $url;\n        }\n    \n        $url = 'https://example.com';\n    \n        return $url;\n    }\n});\n")),(0,r.kt)("h3",{id:"vcevent"},"vcevent"),(0,r.kt)("p",null,"Calls the callback functions that have been added to an action hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"vcevent(string $event, mixin $payload = [])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$event")," (string) Required - The name of the action to be executed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$payload")," (mixed) Optional - Additional parameters to pass to the callback functions."),(0,r.kt)("p",null,"Example in Visual Composer core."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"global $post;\n\nvcevent(\n  'vcv:api:postSaved',\n  ['post' => $post]\n);\n")),(0,r.kt)("h3",{id:"eventsfiltersaddevent"},"EventsFilters::addEvent()"),(0,r.kt)("p",null,"Adds a callback function to an action hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"addEvent(string $eventName, string $methodCallback, int $weight = 0)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$eventName")," (string) Required - The name of the action to add the callback to."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$methodCallback")," (string) Required - The callback to be run when the action is called."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$weight")," (int) Optional - Used to specify the order in which the functions associated with a particular action are executed."),(0,r.kt)("p",null,"Example can be inplemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"functions.php")," theme file or any plugin file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use VisualComposer\\Framework\\Container;\nuse VisualComposer\\Framework\\Illuminate\\Support\\Module;\nuse VisualComposer\\Helpers\\Traits\\EventsFilters;\n\nclass Extender extends Container implements Module\n{\n    use EventsFilters;\n\n    public function __construct()\n    {\n        $this->addEvent(\n            'vcv:api:postSaved',\n            'initialize'\n        );\n    }\n\n    public function initialize($payload)\n    {\n        if (get_post_type($payload['post']->ID) !== 'post') {\n            return;\n        }\n\n        // do some stuff here\n    }\n}\n\nnew Extender();\n\n")),(0,r.kt)("h2",{id:"js-hooks-and-actions"},"JS hooks and actions"),(0,r.kt)("p",null,"Adds filter to get or set data. Arguments:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"filter key"),(0,r.kt)("li",{parentName:"ol"},"callback function with an argument of provided data for that filter, add key and value to object and return data if needed.")),(0,r.kt)("p",null,"Available filter points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"saveRequestData")," - will be called on saving the post/page, object data that will saved will be provided as an argument, any key with value can be added and returned to this object and will be saved in DB. To receive the passed key on PHP side there are events that are listening on editor loading ",(0,r.kt)("inlineCode",{parentName:"li"},"('vcv:dataAjax:getData')")," and saving ",(0,r.kt)("inlineCode",{parentName:"li"},"('vcv:dataAjax:setData')"),". On saving all passed values can be received through the request. To pass the values to the editor on load, they need to be added to the response array.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"window.vcwbEditorApi.addFilter('saveRequestData', (data) => {\n  // Add custom key with any value\n  data.exampleInsights = 'example insights value'\n  // Return data\n  return data\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"insightPanelsData")," - will be called on insights panel opening, object data with information about insight panels will be provided, to insert custom panel add key and value to object and return it.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"window.vcwbEditorApi.addFilter('insightPanelsData', (data) => {\n  data['third-party'] = {\n    index: 1,\n    type: 'third-party',\n    title: 'Example Panel',\n    icon: 'cog' // icon list is predefined in plugin core\n  }\n  return data\n})\n")))}c.isMDXComponent=!0}}]);