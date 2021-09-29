
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','d7d'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags','d7a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','906'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','96c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/assets/assets-management',
        component: ComponentCreator('/assets/assets-management','104'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-mixins/element-css-mixins',
        component: ComponentCreator('/css-mixins/element-css-mixins','46f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/dynamic-content/dynamic-content',
        component: ComponentCreator('/dynamic-content/dynamic-content','193'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/element-attributes/attributes-onchange',
        component: ComponentCreator('/element-attributes/attributes-onchange','edd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/element-attributes/attributes-options',
        component: ComponentCreator('/element-attributes/attributes-options','585'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/element-attributes/element-attributes',
        component: ComponentCreator('/element-attributes/element-attributes','49e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/element-attributes/meta-attributes',
        component: ComponentCreator('/element-attributes/meta-attributes','5e7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/element-component/element-component-methods',
        component: ComponentCreator('/element-component/element-component-methods','cfa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/element-component/render-custom-content',
        component: ComponentCreator('/element-component/render-custom-content','c05'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/element-hook/element-hook',
        component: ComponentCreator('/element-hook/element-hook','c32'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/element-structure/element-structure',
        component: ComponentCreator('/element-structure/element-structure','d14'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/inner-elements/inner-elements',
        component: ComponentCreator('/inner-elements/inner-elements','02d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
