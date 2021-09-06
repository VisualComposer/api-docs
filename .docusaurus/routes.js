
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/search',
  component: ComponentCreator('/search','daf'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','449'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','546'),
  exact: true,
},
{
  path: '/assets/assets-management',
  component: ComponentCreator('/assets/assets-management','d26'),
  exact: true,
},
{
  path: '/css-mixins/element-css-mixins',
  component: ComponentCreator('/css-mixins/element-css-mixins','838'),
  exact: true,
},
{
  path: '/dynamic-content/dynamic-content',
  component: ComponentCreator('/dynamic-content/dynamic-content','353'),
  exact: true,
},
{
  path: '/element-attributes/attributes-onchange',
  component: ComponentCreator('/element-attributes/attributes-onchange','a2d'),
  exact: true,
},
{
  path: '/element-attributes/attributes-options',
  component: ComponentCreator('/element-attributes/attributes-options','b9c'),
  exact: true,
},
{
  path: '/element-attributes/element-attributes',
  component: ComponentCreator('/element-attributes/element-attributes','f42'),
  exact: true,
},
{
  path: '/element-attributes/meta-attributes',
  component: ComponentCreator('/element-attributes/meta-attributes','034'),
  exact: true,
},
{
  path: '/element-component/element-component-methods',
  component: ComponentCreator('/element-component/element-component-methods','e5f'),
  exact: true,
},
{
  path: '/element-component/render-custom-content',
  component: ComponentCreator('/element-component/render-custom-content','3cc'),
  exact: true,
},
{
  path: '/element-hook/element-hook',
  component: ComponentCreator('/element-hook/element-hook','d70'),
  exact: true,
},
{
  path: '/element-structure/element-structure',
  component: ComponentCreator('/element-structure/element-structure','cf8'),
  exact: true,
},
{
  path: '/inner-elements/inner-elements',
  component: ComponentCreator('/inner-elements/inner-elements','2da'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
