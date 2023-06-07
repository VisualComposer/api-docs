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

:::caution
The `editFormTab1` attribute is deprecated as of version 45.2. Consider using one of the following tabs: `contentTab`, `designTab`, `advancedTab`, `layoutTab`.

If you still have the `editFormTab1` specified in your *settings.json* file, the attributes will be displayed under General tab as a part of Backwards Compatibility. 
:::

List of Edit Form attributes in the General section of the Edit Form.

`value` property is an `array` of strings.

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

## contentTab

The Content tab is used to display content like attributes like TinyMCE, input fields, text areas, images to output the content of the element.

The value of the `contentTab` is a list of Edit Form sections with attributes inside the Content tab of the Edit Form. The `contentSection` attribute is used to represent a single section inside the Content tab. The `contentSection` holds an array value of standalone attributes. 

`value` property is an `array` of strings.

`contentTab` attribute *settings.json* file example:

```json
"contentSection": {
  "type": "group",
  "access": "protected",
  "options": {
    "label": "Content"
  },
  "value": [
    "description",
    "buttonElement"
  ]
},
"contentTab": {
  "type": "group",
  "access": "protected",
  "options": {
    "label": "Content",
    "isSections": true
  },
  "value": [
    "contentSection"
  ]
},
```

## designTab

The Design tab is used to display design like attributes color, alignment, shape, etc. to output the styles of the element.

The value of the `designTab` is a list of Edit Form sections with attributes inside the Design tab of the Edit Form. The `styleSection` and [`designOptions`](/element-attributes/element-attributes#designoptions) attributes are used to represent sections inside the Design tab. The `styleSection` holds an array value of standalone attributes.

`value` property is an `array` of strings.

`designTab` attribute *settings.json* file example:

```json
"designOptions": {
  "type": "designOptions",
  "access": "public",
  "value": [],
  "options": {
    "label": "Design Options"
  }
},
"styleSection": {
  "type": "group",
  "access": "protected",
  "options": {
    "label": "Style"
  },
  "value": [
    "outlineColor",
    "outlineWidth",
    "shape"
  ]
},
"designTab": {
  "type": "group",
  "access": "protected",
  "options": {
    "label": "Design",
    "isSections": true
  }, 
  "value": [
    "styleSection",
    "designOptions"
  ]
},
```

## advancedTab

The Advanced tab is used to display additional attributes Custom class name, Custom ID, Custom CSS.

The value of the `advancedTab` is a list of Edit Form sections with attributes inside the Advanced tab of the Edit Form. Each section holds an array of standalone attributes.

`value` property is an `array` of strings.

`advancedTab` attribute *settings.json* file example:

```json
"customAttributes": {
  "type": "group",
  "access": "public",
  "value": [
    "extraDataAttributes"
  ],
  "options": {
    "label": "Custom Attributes"
  }
},
"htmlAttributes": {
  "type": "group",
  "access": "public",
  "value": [
    "metaCustomId",
    "customClass"
  ],
  "options": {
    "label": "HTML Attributes"
  }
},
"customCSS": {
  "type": "group",
  "access": "public",
  "value": [
    "styleEditor"
  ],
  "options": {
    "label": "Custom CSS",
    "tooltip": "Add custom CSS to the element using the [element-id] placeholder."
  }
},
"advancedTab": {
  "type": "group",
  "access": "protected",
  "value": [
    "htmlAttributes",
    "customAttributes",
    "customCSS"
  ],
  "options": {
    "label": "Advanced",
    "isSections": true
  }
},
```

## layoutTab

The Layout tab is used to display layout related attributes, currently only used in the Row element.

The value of the `layoutTab` is a list of Edit Form sections with attributes inside the Layout tab of the Edit Form. Each section holds an array of standalone attributes.

`value` property is an `array` of strings.

`layoutTab` attribute *settings.json* file example:

```json
"layoutTab": {
  "type": "group",
  "access": "protected",
  "options": {
    "label": "Layout",
    "isSections": true
  },
  "value": [
    "rowOptions"
  ]
}
```

## metaEditFormTabs

~~List of sections in the Edit Form. A section can be a group like `"editFormTab1"` or attribute like `"designOptions"`.~~

As of version 45.2 the `metaEditFormTabs` is used to specify Edit Form tabs.

Possible tab values:

* `contentTab`
* `designTab`
* `advancedTab`
* `layoutTab` - Currently used only for Row element

`value` property is an `array` of strings.

`metaEditFormTabs` attribute *settings.json* file example:

```json
"metaEditFormTabs": {
  "type": "group",
  "access": "protected",
  "value": [
    "contentTab",
    "designTab"
    "advancedTab"
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

## metaDisableInteractionInEditor

Prevents user interaction inside the Visual Composer editor. Useful for interactive elements, to prevent unwanted behaviour on various events like `click`, `mousedown`, `mousemove`, etc.

`value` property is an `boolean` type should be set to `true`.

`metaDisableInteractionInEditor` attribute *settings.json* file example:

```json
{
  "metaDisableInteractionInEditor": {
    "type": "toggle",
    "access": "protected",
    "value": true
  }
}
```

## parentWrapper

Explicitly specifies the parent element. Used by the plugin to identify relation between parent - child elements.

`value` property is a `string` type.

`parentWrapper` attribute *settings.json* file example:

```json
"parentWrapper": {
  "type": "string",
  "access": "protected",
  "value": "classicTabs"
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
