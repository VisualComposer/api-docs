# Attributes Options

Each attribute has a type and options. Options property is an object that may contain multiple properties which can extend an attribute.

## Common options

:::info
Following attributes options are common for all attributes.
:::

### label

A label which will be displayed in the Edit Form right before the attribute field.

`label` option *settings.json* example:

```json
{
  "text": {
    "type": "textarea",
    "access": "public",
    "value": "Lorem ipsum dolor sit amet...",
    "options": {
      "label": "Text"
    }
  }
}
```

### description

A description which will be displayed in the Edit Form right after the attribute field.

`description` option *settings.json* example:

```json
{
  "width": {
    "type": "number",
    "access": "public",
    "value": "",
    "options": {
      "label": "Width",
      "description": "Set the width of a button in pixels."
    }
  }
}
```

### descriptionHTML

A description which will be displayed in the Edit Form right after the attribute field and allows HTML tags.

`descriptionHTML` option *settings.json* example:

```json
{
  "width": {
    "type": "number",
    "access": "public",
    "value": "",
    "options": {
      "label": "Width",
      "descriptionHTML": "<p class='description'>Set the <b>width</b> of a button in pixels.</p>"
    }
  }
}
```

### values

An array of objects. Usually, each object consists of `label` and `value` properties. This property is used for attributes that have multiple values like `buttonGroup` or `dropdown`.

`values` option *settings.json* example:

```json
{
  "verticalAlignment": {
    "type": "dropdown",
    "access": "public",
    "value": "top",
    "options": {
      "label": "Vertical alignment",
      "values": [
        {
          "label": "Top",
          "value": "top",
        },
        {
          "label": "Middle",
          "value": "middle",
        },
        {
          "label": "Bottom",
          "value": "bottom",
        }
      ]
    }
  }
}
```

### cssMixins

Defines which POST CSS mixin to use, mixin variable and pattern. `cssMixin` property is an object that has several properties:

* `mixin` defines the name of POST CSS file with the mixin;
* `property` defines the name of the property inside POST CSS file;
* `namePattern` defines the pattern of how input data will be verified via RegExp.

`cssMixins` option *settings.json* example:

```json
{
  "color": {
    "type": "color",
    "access": "public",
    "value": "#fff",
    "options": {
      "label": "Title color",
      "cssMixin": {
        "mixin": "titleColor",
        "property": "color",
        "namePattern": "[\\da-f]+"
      }
    }
  }
}
```

### onChange

Defines how to react to another attribute value change. It is defined as an object inside an attribute `options` property and must hold `rules` and `actions` properties. Learn more about rules and actions.

`onChange` option *settings.json* example:

```json
{
  "title": {
    "type": "string",
    "access": "public",
    "value": "Hello World",
    "options": {
      "label": "Title",
      "onChange": {
        "rules": {
          "titleType": {
            "rule": "value",
            "options": {
              "value": "custom"
            }
          }
        },
        "actions": [
          {
            "action": "toggleVisibility"
          }
        ]
      }
    }
  },
  "titleType": {
    "type": "dropdown",
    "access": "public",
    "value": "default",
    "options": {
      "label": "Title type",
      "values": [
        {
          "label": "Default title",
          "value": "default"
        },
        {
          "label": "Custom title",
          "value": "custom"
        }
      ]
    }
  }
}
```

## Custom options

:::info
Following attributes options are custom and each is used in a specific attribute.
:::

### multiple

Used in the `attachimage` and `attachvideo` attributes. Has a boolean value type and defines the ability to select multiple images.

`multiple` option *settings.json* example:

```json
{
  "image": {
    "type": "attachimage",
    "access": "public",
    "value": "sample-background.png",
    "options": {
      "label": "Background image",
      "multiple": false
    }
  }
}
```

### defaultValue

Used in the `attachimage` attribute. Has a string value type and defines the image set by default. Images for this property should be located in the *elementName/elementName/public* folder.

`defaultValue` option *settings.json* example:

```json
{
  "image": {
    "type": "attachimage",
    "access": "public",
    "value": "sample-background.png",
    "options": {
      "label": "Background image",
      "defaultValue": "sample-background.png"
    }
  }
}
```

### imageFilter

Used in the `attachimage` attribute. Has a boolean value type and defines whether Instagram like filters should be enabled for the image.

`imageFilter` option *settings.json* example:

```json
{
  "image": {
    "type": "attachimage",
    "access": "public",
    "value": "sample-background.png",
    "options": {
      "label": "Background image",
      "imageFilter": true
    }
  }
}
```

### url

Used in the `attachimage` attribute. Has a boolean value type and defines whether link selector should be enabled.

`url` option *settings.json* example:

```json
{
  "image": {
    "type": "attachimage",
    "access": "public",
    "value": "sample-background.png",
    "options": {
      "label": "Background image",
      "url": false
    }
  }
}
```

### action

Used in the `autocomplete` attribute. Has a string value type and defines the action for AJAX request.

`action` option *settings.json* example:

```json
{
  "atts_category": {
    "type": "autocomplete",
    "access": "public",
    "value": [],
    "options": {
      "action": "woocommerceCategory",
      "label": "Category ID or Slug",
    }
  }
}
```

### labelAction

Used in the `autocomplete` attribute. Has a string value type and defines the label action for AJAX request.

`labelAction` option *settings.json* example:

```json
{
  "atts_category": {
    "type": "autocomplete",
    "access": "public",
    "value": [],
    "options": {
      "action": "woocommerceCategory",
      "labelAction": "product_cat",
      "label": "Category ID or Slug"
    }
  }
}
```

### returnValue

Used in the `autocomplete` attribute. Has a string value type and defines the return value for AJAX request.

`returnValue` option *settings.json* example:

```json
{
  "atts_category": {
    "type": "autocomplete",
    "access": "public",
    "value": "",
    "options": {
      "action": "woocommerceCategory",
      "labelAction": "product_cat",
      "returnValue": "slug",
      "label": "Category ID or Slug",
    }
  }
}
```

### validation

Used in the `autocomplete` attribute. Has a boolean value type and defines whether validation should be enabled for the `autocomplete` field.

`validation` option *settings.json* example:

```json
{
  "atts_category": {
    "type": "autocomplete",
    "access": "public",
    "value": "",
    "options": {
      "action": "woocommerceCategory",
      "labelAction": "product_cat",
      "returnValue": "slug",
      "validation": true,
      "label": "Category ID or Slug",
    }
  }
}
```

### single

Used in the `autocomplete` attribute. Has a boolean value type and defines whether a single available options should be enabled.

`single` option *settings.json* example:

```json
{
  "atts_category": {
    "type": "autocomplete",
    "access": "public",
    "value": "",
    "options": {
      "action": "woocommerceCategory",
      "labelAction": "product_cat",
      "returnValue": "slug",
      "validation": true,
      "label": "Category ID or Slug",
      "single": true
    }
  }
}
```

### global

Used in the `dropdown`, `checkbox`, `radio`, `buttonGroup` attributes, usually in conjunction with WordPress plugins. Has a string value type and represents a JavaScript global variable.

`global` option *settings.json* example:

```json
{
  "source": {
    "type": "dropdown",
    "access": "public",
    "value": "",
    "options": {
      "label": "Envira Gallery source",
      "global": "vcvWpEnviraGallery"
    }
  }
}
```

### category

Used in the `element` attribute. Has a string value type and is used to define child element category.

`category` option *settings.json* example:

```json
{
  "button": {
    "type": "element",
    "access": "public",
    "value": {
      "tag": "basicButton"
    },
    "options": {
      "category": "Button"
    }
  }
}
```

### tabLabel

Used in the `element` attribute. Has a string value type and is used to define child element section label in the Edit Form.

`tabLabel` option *settings.json* example:

```json
{
  "button": {
    "type": "element",
    "access": "public",
    "value": {
      "tag": "basicButton"
    },
    "options": {
      "category": "Button",
      "tabLabel": "Button"
    }
  }
}
```

### merge

Used in the `element` attribute. Has an object value type and is used to define which element attributes should be merged on element replace. It has attributes property which itself is an array.

`merge` option *settings.json* example:

```json
{
  "button": {
    "type": "element",
    "access": "public",
    "value": {
      "tag": "basicButton"
    },
    "options": {
      "category": "Button",
      "tabLabel": "Button",
      "merge": {
        "attributes": [
          {
            "key": "alignment",
            "type": "string"
          },
          {
            "key": "buttonText",
            "type": "string"
          },
          {
            "key": "buttonUrl",
            "type": "object"
          }
        ]
      }
    }
  }
}
```

### exclude

Used in the `element` attribute. Has an array value type and is used to define which attributes should be excluded for child element.

`exclude` option *settings.json* example:

```json
{
  "icon": {
    "type": "element",
    "access": "public",
    "value": {
      "tag": "icon"
    },
    "options": {
      "category": "Icon",
      "tabLabel": "Image view icon",
      "exclude": [
        "iconUrl"
      ]
    }
  }
}
```

### listView

Used in the `radio` and `checkbox` attributes. Has a boolean value type, and is used to define whether radios or checkboxes should be displayed inline or as a list. If the property is not defined radios and checkboxes will be displayed as inline.

`listView` option *settings.json* example:

```json
{
  "devices": {
    "type": "checkbox",
    "access": "public",
    "value": [],
    "options": {
      "label": "Devices",
      "listView": true,
      "values": [ 
        {
          "label": "Desktop",
          "value": "xl"
        },
        {
          "label": "Mobile",
          "value": "xs"
        }
      ]
    }
  }
}
```

### inline

Used in the `htmleditor` and `string` attributes. Has a boolean value type and is used to define whether inline editing should be enabled for the attribute.

`inline` option *settings.json* example:

```json
{
  "description": {
    "type": "htmleditor",
    "access": "public",
    "value": "Lorem ipsum dolor sit amet...",
    "options": {
      "label": "Description",
      "inline": true
    }
  }
}
```

### inlineMode

Used in the `string` attribute. Has a string value type and is used to handle inline editing in regular `string` type attributes.

**Currently only available value is `text`.**

`inlineMode` option *settings.json* example:

```json
{
  "title": {
    "type": "string",
    "access": "public",
    "value": "Lorem ipsum",
    "options": {
      "label": "Title",
      "inline": true,
      "inlineMode": "text"
    }
  }
}
```

### skinToggle

Used in the `htmleditor` attribute. Has a string value type and is used in conjunction with `toggleSmall` attribute to switch tinyMCE editor to a dark theme.

`skinToggle` option *settings.json* example:

```json
{
  "description": {
    "type": "htmleditor",
    "access": "public",
    "value": "Lorem ipsum dolor sit amet...",
    "options": {
      "label": "Description",
      "skinToggle": "darkTextSkin"
    }
  }
}
```

### inputClasses

Used in the `inputIcon` attribute. Has a string value type and is used to define classes for an icon.

`inputClasses` option *settings.json* example:

```json
{
  "heightxl": {
    "type": "inputIcon",
    "access": "public",
    "value": "400",
    "options": {
      "label": "Height on desktop (px)",
      "iconClasses": "vcv-ui-icon vcv-ui-icon-desktop"
  },
}
```

### inputType

Used in the `inputIcon` attribute. Has a string value type and is used to define the input type.

`inputType` option *settings.json* example:

```json
{
  "heightxl": {
    "type": "inputIcon",
    "access": "public",
    "value": "400",
    "options": {
      "label": "Height on desktop (px)",
      "iconClasses": "vcv-ui-icon vcv-ui-icon-desktop",
      "inputType": "number",
  },
}
```

### type

Used in the `inputSelect` attribute. Has a string value type and is used to define the type. 

**Currently, only `currency` type is available.**

`type` option *settings.json* example:

```json
{
  "price": {
    "type": "inputSelect",
    "access": "public",
    "value": {
      "input": "89,00",
      "select": "$_"
    },
    "options": {
      "type": "currency",
      "label": "Price",
      "values": []
    }
  }
}
```

### min

Used in the `number` and `range` attributes. Has a number value type and is used to define the minimum input value.

`min` option *settings.json* example:

```json
{
  "autoPlayDelay": {
    "type": "number",
    "access": "public",
    "value": "1",
    "options": {
      "label": "Autoplay delay",
      "min": 1
    }
  }
}
```

### max

Used in the `number` and `range` attributes. Has a number value type and is used to define the maximum input value.

`max` option *settings.json* example:

```json
{
  "autoPlayDelay": {
    "type": "number",
    "access": "public",
    "value": "1",
    "options": {
      "label": "Autoplay delay",
      "max": 100
    }
  }
}
```

### measurement

Used in the `range` attribute. Has a string value type and is used to define measurement units for the `range` attribute field.

`measurement` option *settings.json* example:

```json
{
  "width": {
    "type": "range",
    "access": "public",
    "value": "60",
    "options": {
      "label": "Width",
      "description": "Enter width in percents (Example: 60).",
      "measurement": "%"
    }
  }
}
```

### mode

Used in the `rawCode` attribute. Has a string value type and is used to define code editor’s mode. 

**Currently, only `html` and `javascript` are available.**

`mode` option *settings.json* example:

```json
{
  "rawHtml": {
    "type": "rawCode",
    "access": "public",
    "value": "<p>Lorem ipsum dolor sit amet...</p>",
    "options": {
      "label": "HTML",
      "mode": "html"
    }
  }
}
```

### height

Used in the `rawCode` attribute. Has a string value type and is used to define code editor’s height.

`height` option *settings.json* example:

```json
{
  "rawHtml": {
    "type": "rawCode",
    "access": "public",
    "value": "<p>Lorem ipsum dolor sit amet...</p>",
    "options": {
      "label": "HTML",
      "mode": "html",
      "height": "30vh",
    }
  }
}
```

### time

Used in the `calendar` attribute. Has a boolean value type and is used to enable time selection.

`time` option *settings.json* example:

```json
{
  "datepicker": {
    "type": "calendar",
    "access": "public",
    "value": "",
    "options": {
      "label": "Date",
      "time": true,
      "timeIntervals": 15
    }
  }
}
```

### timeIntervals

Used in the `calendar` attribute. Has a number value type and is used to define time interval. If this option is not specified, the default time interval will be set to `10`.

`timeIntervals` option *settings.json* example:

```json
{
  "datepicker": {
    "type": "calendar",
    "access": "public",
    "value": "",
    "options": {
      "label": "Date",
      "time": true,
      "timeIntervals": 15
    }
  }
}
```


### dynamicField

Used in the `string`, `htmleditor`, and `attachimage` attributes. Can have a boolean or object value type.

The boolean value type will add an option to change Edit Form field to dynamic content. And by default, it will render any type of content whether it's string or HTML.

`dynamicField` option *settings.json* example:

```json
{
  "title": {
    "type": "string",
    "access": "public",
    "value": "Hello World!",
    "options": {
      "label": "Title",
      "dynamicField": true
    }
  }
}
```

### tooltip

This option will work only for a grouped attribute. It will be displayed as a question icon in the section's header right side.

`tooltip` option *settings.json* example:

```json
{
  "boxShadow": {
    "type": "boxShadow",
    "access": "public",
    "value": {},
    "options": {
      "label": "Box Shadow",
      "tooltip": "Add outlined shades to an element."
    }
  }
}
```