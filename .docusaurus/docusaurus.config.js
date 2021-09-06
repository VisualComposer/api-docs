export default {
  "title": "Visual Composer",
  "tagline": "Visual Composer Website Builder API",
  "url": "https://dev.visualcomposer.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/cropped-vcwb-favico-32x32.png",
  "organizationName": "VisualComposer",
  "projectName": "api-docs",
  "trailingSlash": false,
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "Visual Composer",
        "src": "img/VC_horizontal.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "API Documentation",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "href": "https://github.com/VisualComposer/builder",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "API Documentation",
              "to": "/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "YouTube",
              "href": "https://www.youtube.com/c/visualcomposer"
            },
            {
              "label": "Facebook",
              "href": "https://www.facebook.com/VisualComposerWebsiteBuilder"
            },
            {
              "label": "Instagram",
              "href": "https://www.instagram.com/VisualComposer/"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/VisualComposers"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Homepage",
              "to": "https://visualcomposer.com/"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/VisualComposer"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Visual Composer. Built with <a href=\"https://docusaurus.io/\" target=\"_blank\" rel=\"noreferrer noopener\">Docusaurus</a>."
    },
    "algolia": {
      "apiKey": "YOUR_API_KEY",
      "indexName": "YOUR_INDEX_NAME",
      "contextualSearch": true,
      "appId": "YOUR_APP_ID",
      "searchParameters": {}
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/nikitahlopovs/Documents/Sites/api-docs/sidebars.js",
          "routeBasePath": "/",
          "editUrl": "https://github.com/VisualComposer"
        },
        "theme": {
          "customCss": "/Users/nikitahlopovs/Documents/Sites/api-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};