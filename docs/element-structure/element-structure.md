---
sidebar_position: 1
---

# Element Structure

Every element is represented with settings files and JS/PHP files. The best way to understand element structure is to clone our <a href="https://github.com/VisualComposer/elementBoilerplate" target="_blank" rel="noopener noreferrer">boilerplate repository on GitHub</a>.

There are certain files required to build element:

* **manifest.json** – describes element data, preview, thumbnail, description, category and PHP files;
* **package.json** – npm install/update files for required node modules;
* **webpack.config** – files to build a component with Webpack;
* **Directory {tag}:**
* **cssMixins directory** – [cssMixin.pcss](#element-css-mixins): POSTCSS file that holds mixin for custom generated style;
* **public directory** – may contain custom CSS, JS, and images for public view
* **index.js** – the main file, build with Webpack;
* **component.js** – ReactJs component contains VCWB editor component. This component is used only in the editor and contains [element built-in methods](#element-component-methods) that provide additional functionality.
* **settings.json** – describes element attributes;
* **.php files** – required PHP files (*must be described in ../manifest.json*);
* **editor.css** – CSS files which will be used only in the editor;
* **style.css** – CSS files which will be used on the frontend to display content.

## Settings File

> *settings.json* file example:

```json
{
  "output": {
    "type": "htmleditor",
    "access": "public",
    "value": "<p>ElementBoilerplate API. HTML editor also the part of the editor</p>"
  },
  "designOptions": {
    "type": "designOptions",
    "access": "public",
    "value": {},
    "options": {
      "label": "Design Options"
    }
  },
  "editFormTab1": {
    "type": "group",
    "access": "protected",
    "value": [
      "output"
    ],
    "options": {
      "label": "General"
    }
  },
  "metaEditFormTabs": {
    "type": "group",
    "access": "protected",
    "value": [
      "editFormTab1",
      "designOptions"
    ]
  },
  "relatedTo": {
    "type": "group",
    "access": "protected",
    "value": [
      "General"
    ]
  },
  "tag": {
    "access": "protected",
    "type": "string",
    "value": "elementBoilerplate"
  }
}
```

File *settings.json* stores description of attributes and element dependencies. An attribute is an object with a unique key. Attributes have a `type`, `access`, `value` and `options` (*optional*) properties. `access` represents an ability to change a value of the attribute from the inner part of the system. `options` can differ for different attributes.

### Attributes

There are two types of access of attributes:

* Edit form attribute;
* Meta attribute.

Edit form attributes are those attributes that represent any settings in editForm for a user. The editor has public access to attributes. Each attribute is displayed element form control which can be easily managed by customers with programming knowledge. **Public** attribute values can be accessed in the *component.js* file via `this.props.atts`. Each attribute has a type and options. Type is how this attributes will be displayed in editForm and how it will be saved in data storage of edited document. Options property is an object that may contain multiple properties which can extend an attribute.

Meta attributes are system attributes with protected access. Meaning that these attributes can’t be edited and are used by the editor. There are following meta attribute keys available:

Attributes may react to self or other attributes value change. The change is defined by the rules set and the action applied when the rule is matched (e.g. toggle attribute may show/hide another attribute field.) Rules and actions are defined under the onChange property within an attribute options property. An attribute may have multiple rules. A rule may have additional options.


## Manifest File

> *manifest.json* file example:

```json
{
  "elements": {
    "imageGalleryWithTestZoom": {
      "settings": {
        "name": "Image Gallery With Test Zoom",
        "metaThumbnailUrl": "[publicPath]/image-gallery-with-zoom-thumbnail.png",
        "metaPreviewUrl": "[publicPath]/image-gallery-with-zoom-preview.png",
        "metaDescription": "A grid type image gallery with a test zoom effect upon hover to catch visitors' attention."
      }
    }
  },
  "categories": {
    "Image gallery": {
      "elements": [
        "imageGalleryWithTestZoom"
      ]
    }
  }
}
```

File *manifest.json* stores main meta information about the element:

* Tag;
* Name;
* Description;
* Thumbnail/Preview images URLs;
* The category where the element should be available;
* phpFiles list of PHP files to be autoloaded on WordPress init.

<aside class="notice">
Note: The placeholder <b>[publicPath]</b> is required for the Visual Composer modules to automatically replace URL to element (<em>relative to absolute</em>).
</aside>

## Element categories

Element category specifies to which category the element belongs. Depending on a category a corresponding icon will be displayed in the Tree View panel and in the element controls when you hover over the element.

Element category is specified in the *manifest.json* file and should always start with a capital letter. Below is the list of all available categories and how they should be defined, copy and paste to your project:

* Row
* Column
* Tabs
* Tab
* Button
* Header & Footer
* Feature
* Feature section
* Section
* Hero section
* Icon
* Image Slider
* Single image
* Image gallery
* Text block
* Misc
* Pricing table
* Social
* Videos
* WooCommerce
* Separators
* Maps
* Grids
* _postsGridSources
* _postsGridItems
* Toggle
* Message Box
* Hover Box
* WordPress
* Feature Description
* Call To Action
* Empty Space
* Testimonial
* Accordions
* Accordion Section
* Charts

## Webpack Configs and Build

When all settings and components are done need to build element with a help of Webpack. Just use `yarn install && yarn build`.

`yarn install // Install all the element dependencies (must be same as visualcomposer)`

`yarn build // Build development build`

`yarn watch // Builds & watches development version on file modification`

`yarn build-production // Builds the minified build`