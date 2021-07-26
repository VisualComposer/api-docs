# Meta Attributes

Protected meta attributes of the Visual Composer available for use via the API.

## tag

The tag is a unique property which is used to identify and find element components and settings.

`value` property is a `string` type.

`tag` attribute *settings.json* file example:

```json
"tag": {
  "access": "protected",
  "type": "string",
  "value": "basicButton"
}
```

## relatedTo

This attribute defines the relation to groups. uIt is sed for Drag'n'Drop functionality and Add Element panel. The default value is `"General"`.

`value` property is an `array` of `string`s.

`relatedTo` attribute *settings.json* file example:

```json
"relatedTo": {
  "type": "group",
  "access": "protected",
  "value": [
    "General",
    "Buttons"
  ]
}
```

## editFormTab1

List of Edit Form attributes in the General section of the Edit Form.

`value` property is an `array` of `string`s.

`editFormTab1` attribute *settings.json* file example:

```json
"editFormTab1": {
  "type": "group",
  "access": "protected",
  "value": [
    "title",
    "alignment",
    "color",
    "metaCustomId",
    "customClass"
  ],
  "options": {
    "label": "General"
  }
}
```

## metaEditFormTabs

List of sections in the Edit Form. A section can be a group like `"editFormTab1"` or attribute like `"designOptions"`.

`value` property is an `array` of `string`s.

`metaEditFormTabs` attribute *settings.json* file example:

```json
"metaEditFormTabs": {
  "type": "group",
  "access": "protected",
  "value": [
    "editFormTab1",
    "designOptions"
  ]
}
```

## containerFor

Defines what child elements can be inside the container element.

`value` property is an `array` of `string`s.

`containerFor` attribute *settings.json* file example:

```json
"containerFor": {
  "type": "group",
  "access": "protected",
  "value": [
    "Buttons"
  ]
}
```

or

```json
"containerFor": {
  "type": "group",
  "access": "protected",
  "value": [
    "Tab"
  ],
  "options": {
    "elementDependencies": {
      "tag": "tab"
    }
  }
}
```

## initChildren

Used to initiate child elements. Each child object must hold a tag attribute and optional attribute names with values for initialization.

`value` property is an `array` of `object`s.

`initChildren` attribute *settings.json* file example:

```json
"initChildren": {
  "access": "protected",
  "type": "object",
  "value": [
    {
      "tag": "outlineButton",
      "titleColor": "#fff"
    },
    {
      "tag": "basicButton",
      "titleColor": "#fff"
    }
  ]
}
```

## metaPublicJs

A list of custom JavaScript libraries which will be used by and related to a particular element. Libraries may be included on conditions, a `rule` property must be set in order to enqueue a library. `libPaths` property may contain a `string` or an `array` type value.

`value` property is an `object` type.

`metaPublicJs` attribute *settings.json* file example:

```json
"metaPublicJs": {
  "access": "protected",
  "type": "string",
  "value": {
    "libraries": [
      {
        "libPaths": [
          "public/dist/customSlider.min.js",
          "public/dist/customGallery.min.js"
        ]
      },
      {
        "rules": {
          "toggleResponsiveMode": {
            "rule": "toggle"
          }
        },
        "libPaths": "public/dist/responsive.min.js"
      }
    ]
  }
}
```

## sharedAssetsLibrary


A list of JavaScript libraries that are provided by the plugin which can be included by elements. Libraries may be included on conditions, a `rule` must be set in order to include a library. Learn how to include assets via the *manifest.json* file.

`value` property is an `object` type.

`sharedAssetsLibrary` attribute *settings.json* file example:

```json
"sharedAssetsLibrary": {
  "access": "protected",
  "type": "string",
  "value": {
    "libraries": [
      {
        "libsNames": [
          "slickSlider"
        ]
      },
      {
        "rules": {
          "clickableOptions": {
            "rule": "value",
            "options": {
              "value": "lightbox"
            }
          }
        },
        "libsNames": [
          "lightbox"
        ]
      },
    ]
  }
}
```

Available shared library list:

Library name | Description
------------ | -------
waypoints  | Uses <a href="http://imakewebthings.com/waypoints/" target="_blank" rel="noopener noreferrer">waypoints</a> library. Included in the Design Options attribute
animate    | Uses <a href="https://daneden.github.io/animate.css/" target="_blank" rel="noopener noreferrer">animate.css</a> library. Included in the Design Options attribute
iconpicker | Uses a set of multiple various icon sets. Typicons, Material, Font Awesome, Entypo, etc.
imageFilter| Uses <a href="https://una.im/CSSgram/" target="_blank" rel="noopener noreferrer">CSSgram</a> library.
lightbox	 | Uses <a href="https://lokeshdhakar.com/projects/lightbox2/" target="_blank" rel="noopener noreferrer">lightbox</a> library.
photoswipe | Uses <a href="http://photoswipe.com/" target="_blank" rel="noopener noreferrer">photoswipe</a> library.
slickSlider| Uses <a href="http://kenwheeler.github.io/slick/" target="_blank" rel="noopener noreferrer">slick slider</a> library.
zoom       | Uses <a href="http://www.jacklmoore.com/zoom/" target="_blank" rel="noopener noreferrer">jQuery zoom</a> library.

## groups

Used to assign an element to a group of elements. Can be used for replacing elements. Possible values: Content, Containers, Buttons, Separators.

`value` property is a `string` type.

`groups` attribute *settings.json* file example:

```json
"groups": {
  "type": "string",
  "access": "protected",
  "value": "Buttons"
}
```
