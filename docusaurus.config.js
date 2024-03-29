/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Visual Composer',
  tagline: 'Visual Composer Website Builder API',
  url: 'https://dev.visualcomposer.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/cropped-vcwb-favico-32x32.png',
  organizationName: 'VisualComposer', // Usually your GitHub org/user name.
  projectName: 'api-docs', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    image: 'img/visual-composer-api-for-developers-1.png',
    navbar: {
      title: '',
      logo: {
        alt: 'Visual Composer',
        src: 'img/VC_horizontal.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'API Documentation',
        },
        {
          href: 'https://github.com/VisualComposer/builder',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API Documentation',
              to: '/',
            },
            {
              label: 'Help Center',
              href: 'https://help.visualcomposer.com/'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/c/visualcomposer/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/VisualComposerWebsiteBuilder/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/VisualComposer/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/VisualComposers/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Homepage',
              to: 'https://visualcomposer.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/VisualComposer/',
            },
            {
              label: 'CodePen',
              href: 'https://codepen.io/visualcomposer/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Visual Composer. Built with <a href="https://docusaurus.io/" target="_blank" rel="noreferrer noopener">Docusaurus</a>.`,
    },
    algolia: {
      apiKey: '9d6f4e128370d929a45637f04ab12747',
      indexName: 'visualcomposer'
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/VisualComposer/api-docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
