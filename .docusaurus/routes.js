
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/api-docs/__docusaurus/debug',
  component: ComponentCreator('/api-docs/__docusaurus/debug','515'),
  exact: true,
},
{
  path: '/api-docs/__docusaurus/debug/config',
  component: ComponentCreator('/api-docs/__docusaurus/debug/config','2b7'),
  exact: true,
},
{
  path: '/api-docs/__docusaurus/debug/content',
  component: ComponentCreator('/api-docs/__docusaurus/debug/content','447'),
  exact: true,
},
{
  path: '/api-docs/__docusaurus/debug/globalData',
  component: ComponentCreator('/api-docs/__docusaurus/debug/globalData','440'),
  exact: true,
},
{
  path: '/api-docs/__docusaurus/debug/metadata',
  component: ComponentCreator('/api-docs/__docusaurus/debug/metadata','ef8'),
  exact: true,
},
{
  path: '/api-docs/__docusaurus/debug/registry',
  component: ComponentCreator('/api-docs/__docusaurus/debug/registry','237'),
  exact: true,
},
{
  path: '/api-docs/__docusaurus/debug/routes',
  component: ComponentCreator('/api-docs/__docusaurus/debug/routes','d7e'),
  exact: true,
},
{
  path: '/api-docs/',
  component: ComponentCreator('/api-docs/','6b5'),
  
  routes: [
{
  path: '/api-docs/',
  component: ComponentCreator('/api-docs/','2af'),
  exact: true,
},
{
  path: '/api-docs/element-attributes/attributes-options',
  component: ComponentCreator('/api-docs/element-attributes/attributes-options','fa4'),
  exact: true,
},
{
  path: '/api-docs/element-attributes/element-attributes',
  component: ComponentCreator('/api-docs/element-attributes/element-attributes','dbc'),
  exact: true,
},
{
  path: '/api-docs/element-attributes/meta-attributes',
  component: ComponentCreator('/api-docs/element-attributes/meta-attributes','163'),
  exact: true,
},
{
  path: '/api-docs/element-hook/element-hook',
  component: ComponentCreator('/api-docs/element-hook/element-hook','473'),
  exact: true,
},
{
  path: '/api-docs/element-structure/element-structure',
  component: ComponentCreator('/api-docs/element-structure/element-structure','588'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
