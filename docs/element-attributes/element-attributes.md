---
sidebar_position: 1
---

# Attributes

## ajaxForm

Requests a form via an AJAX call. A form is constructed in the PHP controller file.

`value` property is an `object` type.

`ajaxForm` attribute *settings.json* file example:

```json
"widget": {
  "type": "ajaxForm",
  "access": "public",
  "value": {
    "key": "",
    "value": ""
  },
  "options": {
    "label": "",
    "action": "vcv:wpWidgets:form"
  }
}
```

## animateDropdown

Although animation list is already available for each element in Design Options, this attribute allows adding an additional drop-down with a list of animation classes (e.g. animation for the nested element).

`value` property is a `string` type.

`animateDropdown` attribute *settings.json* file example:

```json
"buttonAnimation": {
  "type": "animateDropdown",
  "access": "public",
  "value": "fadeInLeft",
  "options": {
    "label": "Animate button"
  }
}
```

## attachimage

Allows adding an image from Media Library. The initial/default value is a file name which is located inside element's `public` folder.

`value` property is a `string` type.

`attachimage` attribute *settings.json* file example:

```json
"image": {
  "type": "attachimage",
  "access": "public",
  "value": "image.jpg",
  "options": {
    "label": "Image",
    "defaultValue": "image.jpg"
  }
}
```

## attachvideo

Allows adding a video from Media Library.

`value` property is a `string` type.

`attachvideo` attribute *settings.json* file example:

```json
"video": {
  "type": "attachvideo",
  "access": "public",
  "value": "",
  "options": {
    "label": "Video"
  }
}
```

## autocomplete

Allows searching for value through the list. Usually, this attribute is used in shortcode based elements.

`value` property is a `string` type.

`autocomplete` attribute *settings.json* file example:

```json
"source": {
  "type": "autocomplete",
  "access": "public",
  "value": "",
  "options": {
    "action": "actionName",
    "validation": true,
    "label": "Search items",
    "single": true
  }
}
```

## boxShadow

Box shadow is used to add outlined shades to an element.

`value` property is an `object` type.

`boxShadow` attribute *settings.json* file example:

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
  },
}
```

:::info
Notice boxShadowAttributes can be applied to any of nodes inside the component.
::: 

`boxShadow` attribute *component.js* file example:

```javascript
render () {
  // ...
  const { boxShadow } = this.props.atts
  let boxShadowAttributes = {}
  if (boxShadow && boxShadow.device) {
    boxShadowAttributes = this.getBoxShadowAttributes(boxShadow, id)
  }
  // ...
  return (
    <div className={elementBoilerplateClasses} {...editor} {...boxShadowAttributes} {...customProps}>
      <div className={wrapperClasses} id={'el-' + id} {...doAll}>
        {output}
      </div>
    </div>
  )
}
```


## buttonGroup

A set of buttons allowing to select one value out of multiple. Buttons may contain an icon or text. To set the desired view of a button just define icon or text property in the value object.

`value` property is a `string` type.

`buttonGroup` attribute *settings.json* file example:

```json
"alignment": {
  "type": "buttonGroup",
  "access": "public",
  "value": "left",
  "options": {
    "label": "Alignment",
    "values": [
      {
        "label": "Left",
        "value": "left",
        "icon": "vcv-ui-icon-attribute-alignment-left"
      },
      {
        "label": "Center",
        "value": "center",
        "icon": "vcv-ui-icon-attribute-alignment-center"
      },
      {
        "label": "Right",
        "value": "right",
        "icon": "vcv-ui-icon-attribute-alignment-right"
      }
    ]
  }
}
```
or

```json
"size": {
  "type": "buttonGroup",
  "access": "public",
  "value": "large",
  "options": {
    "label": "Size",
    "values": [
      {
        "label": "Small",
        "value": "small",
        "text": "S"
      },
      {
        "label": "Medium",
        "value": "medium",
        "text": "M"
      },
      {
        "label": "Large",
        "value": "large",
        "text": "L"
      },
    ]
  }
}
```

List of default Visual Composer icon classes for `buttonGroup` attribute, class names are self-explanatory:

* vcv-ui-icon-attribute-vertical-alignment-top
* vcv-ui-icon-attribute-vertical-alignment-middle
* vcv-ui-icon-attribute-vertical-alignment-bottom
* vcv-ui-icon-attribute-alignment-left
* vcv-ui-icon-attribute-alignment-right
* vcv-ui-icon-attribute-alignment-center
* vcv-ui-icon-attribute-shape-square
* vcv-ui-icon-attribute-shape-rounded
* vcv-ui-icon-attribute-shape-round
* vcv-ui-icon-attribute-row-width-boxed
* vcv-ui-icon-attribute-row-width-stretched
* vcv-ui-icon-attribute-row-width-stretched-content
* vcv-ui-icon-attribute-background-position-left-top
* vcv-ui-icon-attribute-background-position-center-top
* vcv-ui-icon-attribute-background-position-right-top
* vcv-ui-icon-attribute-background-position-left-center
* vcv-ui-icon-attribute-background-position-center-center
* vcv-ui-icon-attribute-background-position-right-center
* vcv-ui-icon-attribute-background-position-left-bottom
* vcv-ui-icon-attribute-background-position-center-bottom
* vcv-ui-icon-attribute-background-position-right-bottom


## calendar

An attribute that allows selecting date and time. Attribute returns selected date as a `Date` object. The default value is an empty `string`. The attribute sets the field value to the current date.

`value` property is a `Date` object type.

`calendar` attribute *component.js* file example:

```javascript
render () {
  // ...
  const { datepicker } = this.props.atts
  datepicker = datepicker || new Date()
  // ...
}
```

`calendar` attribute *settings.json* file example:

```json
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
```

## checkbox

A simple checkbox input.

`value` property is an `array` of `string`s.

`checkbox` attribute *settings.json* file example:

```json
"devices": {
  "type": "checkbox",
  "access": "public",
  "value": [],
  "options": {
    "label": "Devices",
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
```

## color

Displays a custom colorpicker. Usually, `cssMixin` property must be listed inside `options` property.

`value` property is a `string` type.

`color` attribute *settings.json* file example:

```json
"backgroundColor": {
  "type": "color",
  "access": "public",
  "value": "#b3a694",
  "options": {
    "label": "Background color",
    "cssMixin": {
      "mixin": "backgroundColor",
      "property": "backgroundColor",
      "namePattern": "[\\da-f]+"
    }
  }
}
```

## customId

String field used to add a custom id to the element.

`value` property is a `string` type.

`customId` attribute *settings.json* file example:

```json
"metaCustomId": {
  "type": "customId",
  "access": "public",
  "value": "",
  "options": {
    "label": "Element ID",
    "description": "Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."
  }
}
```

## datalist

A datalist with pre-defined options (connected to an `input` element). Used to provide an `autocomplete` attribute with `input` elements. Users will see a drop-down list of pre-defined options as they input data.

`value` property is a `string` type.

`datalist` attribute *settings.json* file example:

```json
{
  "borderStyle": {
    "type": "datalist",
    "access": "public",
    "value": "solid",
    "options": {
      "label": "Border style",
      "values": [
        {
          "label": "Solid",
          "value": "solid"
        },
        {
          "label": "Dashed",
          "value": "dashed"
        },
        {
          "label": "Dotted",
          "value": "dotted"
        }
      ]
    }
  },
}
```

## description

Description is used to describe the element itself inside Edit Form.

`value` property is a `string` type.

`description` attribute *settings.json* file example:

```json
{
  "description": {
    "type": "description",
    "access": "public",
    "value": "Insert GIF animations to your site from the Giphy service. You can access Giphy via Media Library."
  },
}
```

## designOptions

Design options to set up margins, paddings, border, background color etc.
The `value` property is of type object. 
It can be left as an empty object if there are no default values to be set.
Alternatively, default values can be defined within the `value` object. 
It is possible to assign different default values for each screen size 
by creating an object within the `device` object with the corresponding device name.
In cases where the default values are the same across all screen sizes, 
an object with the key `all` can be used.

`designOptions` attribute *settings.json* file example:

```json
"designOptions": {
    "type": "designOptions",
    "access": "public",
    "value": {
        "device": {
            "all": {
                "backgroundColor": "#e7b460",
                "image": ["https://cdn.hub.visualcomposer.com/plugin-assets/core-elements/heroSection/hero-section-background.jpg"]
            }
        }
    },
    "options": {
        "label": "Design Options"
    }
},
```

## dropdown

List of values in a select tag

`value` property is a `string` type.

`dropdown` attribute *settings.json* file example:

```json
"videoSource": {
  "type": "dropdown",
  "access": "public",
  "value": "youtube",
  "options": {
    "label": "Video source",
    "values": [
      {
        "label": "Youtube",
        "value": "youtube"
      },
      {
        "label": "Vimeo",
        "value": "vimeo"
      }
    ]
  }
}
```

## element

Allows inserting another element. The inserted element will be displayed as a separate section in the Edit Form, thus the attribute must be listed in the `metaEditFormTabs` attribute.

`value` property is an `object` type.

`element` attribute *settings.json* file example:

```json
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
},
"metaEditFormTabs": {
  "type": "group",
  "access": "protected",
  "value": [
    "editFormTab1",
    "button",
    "designOptions"
  ]
}
```

## googleFonts

List of available google fonts with weight.

`value` property is an `object` type.

`googleFonts` attribute *settings.json* file example:

```json
"font": {
  "type": "googleFonts",
  "access": "public",
  "value": {
    "fontFamily": "Lato",
    "fontStyle": {
      "weight": "400",
      "style": "regular"
    },
    "status": "active",
    "fontText": "The sky was cloudless and of a deep dark blue."
  },
  "options": {
    "label": "Font"
  }
}
```

## group

List of data values. Used to group edit form attributes in the Edit Form.

`value` property is an `array` of `strings`.

`group` attribute *settings.json* file example:

```json
"editFormTab1": {
  "type": "group",
  "access": "protected",
  "value": [
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

## hidden

Used to indicate whether the element is hidden or visible. This attribute is used set the initial visibility state.
Users can toggle between hidden and visible state of the elemnt via Tree View or Edit Form.

`value` property is a `boolean` type.

`hidden` attribute *settings.json* file example:

```json
"hidden": {
  "type": "string",
  "access": "public",
  "value": false
}
```

## htmleditor

WordPress Classic TinyMCE editor.

`value` property is a `string` type.

`htmleditor` attribute *settings.json* file example:

```json
"output": {
  "type": "htmleditor",
  "access": "public",
  "value": "<h2>Hello there!</h2>\n<p>This is just some text.</p>",
  "options": {
    "label": "Content"
  }
}
```

## iconpicker

Icon picker allows selecting an icon from predefined libraries.

`value` property is an `object` type.

:::note
Free version has only FontAwesome icon set.
:::

`iconpicker` attribute *settings.json* file example:

```json
"iconPicker": {
  "type": "iconpicker",
  "access": "public",
  "value": {
    "icon": "vcv-ui-icon-material vcv-ui-icon-material-mode_edit",
    "iconSet": "material"
  },
  "options": {
    "label": "Icon"
  }
}
```

## inputIcon

An input with an icon on the side. `inputType` property can be changed to `number` or `string` value.

`value` property is a `string` type.

`inputIcon` attribute *settings.json* file example:

```json
"desktopWidth": {
  "type": "inputIcon",
  "access": "public",
  "value": "600",
  "options": {
    "min": "1",
    "label": "Width on a desktop",
    "iconClasses": "vcv-ui-icon vcv-ui-icon-desktop",
    "inputType": "number"
  }
},
"mobileWidth": {
  "type": "inputIcon",
  "access": "public",
  "value": "200",
  "options": {
    "min": "1",
    "label": "Width on a mobile",
    "iconClasses": "vcv-ui-icon vcv-ui-icon-mobile-portrait",
    "inputType": "number"
  }
}
```

## inputSelect

Selector with a search to browse multi-data. Currently, only `currency` type value is available.

`value` property is an `object` type.

`inputSelect` attribute *settings.json* file example:

```json
"price": {
  "type": "inputSelect",
  "access": "public",
  "value": {
    "input": "19,95",
    "select": "$_"
  },
  "options": {
    "type": "currency",
    "label": "Price",
    "values": []
  }
}
```

## multipleDropdown

It specifies that multiple options can be selected at once. Selecting multiple options vary in different operating systems and browsers.

* For Windows - hold down the control (ctrl) button to select multiple options.
* For Mac - hold down the command button to select multiple options.

Because of the different ways of doing this, and because you have to inform the user that multiple selection is available, it is more user-friendly to use checkboxes instead.

`value` property is an `array` of `string`s.

`multipleDropdown` attribute *settings.json* file example:

```json
{
  "borderStyle": {
    "type": "multipleDropdown",
    "access": "public",
    "value": ["solid"],
    "options": {
      "label": "Border style",
      "values": [
        {
          "label": "Line",
          "value": "solid"
        },
        {
          "label": "Dashed",
          "value": "dashed"
        },
        {
          "label": "Dotted",
          "value": "dotted"
        },
        {
          "label": "Double",
          "value": "double"
        },
        {
          "label": "Shadow",
          "value": "shadow"
        }
      ]
    }
  },
}
```

## number

Input field with number type. Can take `min` and `max` properties inside `options` property.

`value` property is a `string` type.

`number` attribute *settings.json* file example:

```json
"width": {
  "type": "number",
  "access": "public",
  "value": "150",
  "options": {
    "label": "Width",
    "min": 1,
    "max": 300
  }
}
```

## paramsGroup

This attribute allows to contain and operate a certain set of attributes within a separate group. A group can be added, edited, removed, cloned and moved (relative to each other, up and down).

Initial groups are set within a *settings.json* file. Inside elements Edit Form `paramsGroup` attribute is displayed similar to Tree View, once clicked on edit, Edit Form will re-render with attributes bound to this group.

The `options` values within each group will affect the corresponding child element of the initial parent element (e.g. Bar in Progress Bars element.)

The code examples shows how Progress Bars element is built.

`value` property is an `object` type.

`paramsGroup` attribute *settings.json* file example:

```json
"bars": {
    "type": "paramsGroup",
    "access": "public",
    "value": {
      "value": [
        {
          "title": "Web Design",
          "value": 80,
          "color": "#50E3C2"
        },
        {
          "title": "Marketing",
          "value": 50,
          "color": "#50E3C2"
        }, 
        {
          "title": "Social Media",
          "value": 60,
          "color": "#50E3C2"
        }
      ]
    },
    "options": {
      "label": "General",
      "title": "Progress bar",
      "groupDefaultTile": "Progress bar",
      "settings": {
        "title": {
          "type": "string",
          "access": "public",
          "value": "Progress bar",
          "options": {
            "label": "Title"
          }
        },
        "value": {
          "type": "range",
          "access": "public",
          "value": "70",
          "options": {
            "label": "Value",
            "cssMixin": {
              "mixin": "barValue",
              "property": "value",
              "namePattern": "[\\da-f]+"
            }
          }
        },
        "color": {
          "type": "color",
          "access": "public",
          "value": "#50E3C2",
          "options": {
            "label": "Bar color",
            "cssMixin": {
              "mixin": "barColor",
              "property": "color",
              "namePattern": "[\\da-f]+"
            }
          }
        },
        "_paramGroupEditFormTab1": {
          "type": "group",
          "access": "protected",
          "value": [
            "title",
            "value",
            "color"
          ],
          "options": {
            "label": "General"
          }
        },
        "metaEditFormTabs": {
          "type": "group",
          "access": "protected",
          "value": [
            "_paramGroupEditFormTab1"
          ]
        }
      }
    }
  }
  ```

`paramsGroup` attribute *component.js* file example:

```javascript
import React from 'react'
import vcCake from 'vc-cake'
import classNames from 'classnames'
import ProgressBar from './progressBar'
const vcvAPI = vcCake.getService('api')
export default class ProgressBars extends vcvAPI.elementComponent {
  /**
   * getMixin method returns a PCSS mixin specific to the child element,
   * it uses VC native method getMixinData to get PCSS mixin.
   */
  getMixin (mixinName, i) {
    const elementMixins = this.getMixinData()
    return elementMixins['bars'][i][mixinName]
  }
  /**
   * getContent method returns an array of child elements,
   * from <ProgressBar /> component.
   * Proper attributes must be passed
   */
  getContent () {
    const { bars } = this.props.atts
    // All the necessary code for elements' child components
    ...
    const items = bars.value ? bars.value : bars
    return items.map((item, i) => {
      let key = `progressBar-${this.props.id}-${i}`
      let attributes = item.progressBar || item
      attributes.atts = {}
      // tag property is a must have, the system will recognize to which element it belongs
      attributes.atts.tag = this.props.atts.tag
      attributes.atts.title = item.title
      attributes.atts.value = item.value
      attributes.itemIndex = i
      attributes.getMixin = this.getMixin.bind(this)
      return <ProgressBar {...attributes} key={key} />
    })
  }
  render () {
    const { id, atts, editor } = this.props
    // All the necessary code to render element component
    ...
  
    return (
      <div {...editor} id={`el-${id}`} className={containerClasses} {...doAll}>
        <div className='vce-progress-bars' {...customProps}>
          {this.getContent()}
        </div>
      </div>
    )
  }
}
```

`paramsGroup` attribute *childComponent.js* file example:

```javascript
import React from 'react'
import vcCake from 'vc-cake'
import classNames from 'classnames'
const vcvAPI = vcCake.getService('api')
export default class ProgressBar extends vcvAPI.elementComponent {
  render () {
    const { getMixin, itemIndex } = this.props
    const { title, value } = this.props.atts
    let containerClasses = [ 'vce-progress-bar-container' ]
    let mixin = getMixin('barValue', itemIndex)
    if (mixin) {
      containerClasses.push(`vce-progress-bar--value-${mixin.selector}`)
    }
    mixin = getMixin('barColor', itemIndex)
    if (mixin) {
      let colorClass = `vce-progress-bar--${colorType}-${mixin.selector}`
      containerClasses.push(colorClass)
    }
    containerClasses = classNames(containerClasses)
    // All the necessary code to render child element component
    ...
    return <div className={containerClasses}>
      <div className='vce-progress-bar-text'>
        <div className='vce-progress-bar-title'>{title}</div>
        <div className='vce-progress-bar-value' />
      </div>
      <div className='vce-progress-bar-wrapper'>
        <progress className='vce-progress-bar' value={value} max='100'>{value} %</progress>
      </div>
    </div>
  }
}
```

## radio

Input field with radio type.

`value` property is a `string` type.

`radio` attribute *settings.json* file example:

```json
"device": {
  "type": "radio",
  "access": "public",
  "value": "xs",
  "options": {
    "label": "Device",
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
```

## range

Slider with a range of values.

`value` property is a `string` type.

`range` attribute *settings.json* file example:

```json
"width": {
  "type": "range",
  "access": "public",
  "value": "60",
  "options": {
    "label": "Width",
    "min": 1,
    "max": 100
  }
}
```

## rawCode

Raw code editor, `mode` property can be set to `html` or `javascript`.

`value` property is a `string` type.

`rawCode` attribute *settings.json* file example:

```json
"rawHtml": {
  "type": "rawCode",
  "access": "public",
  "value": "<p><strong>HyperText Markup Language (HTML)</strong> is the standard markup language for creating web pages and web applications.</p>",
  "options": {
    "label": "Raw HTML",
    "mode": "html"
  }
}
```

## string

Input field with text type.

`value` property is a `string` type.

`string` attribute *settings.json* file example:

```json
"title": {
  "type": "string",
  "access": "public",
  "value": "Hello World!",
  "options": {
    "label": "Title"
  }
}
```

## sticky

The sticky option makes the container and its content fixed at the top of the page.

`value` property is an `object` type.

`sticky` attribute  *settings.json* file example:

```json
{
  "sticky": {
    "type": "sticky",
    "access": "public",
    "value": {},
    "options": {
      "label": "Sticky",
      "tooltip": "The sticky option makes the container and its content fixed at the top of the page.",
    }
  },
}
```

:::info
Notice stickyAttributes can be applied to any of nodes inside the component.
:::

`sticky` attribute *component.js* file example:

```javascript
render () {
  ...
  const { sticky } = this.props.atts
  let stickyAttributes = {}
  if (sticky && sticky.device) {
    stickyAttributes = this.getStickyAttributes(sticky)
  }
  ...
  return (
    <div className={elementBoilerplateClasses} {...editor} {...customProps} {...stickyAttributes}>
      <div className={wrapperClasses} id={'el-' + id} {...doAll}>
        {output}
      </div>
    </div>
  )
}
```

## textarea

A simple Textarea input type.

`value` property is a `string` type.

`textarea` attribute *settings.json* file example:

```json
"text": {
  "type": "textarea",
  "access": "public",
  "value": "Lorem ipsum dolor sit amet...",
  "options": {
    "label": "Text"
  }
}
```

## toggle

Toggle switcher control.

`value` property is a `boolean` type.

`toggle` attribute *settings.json* file example:

```json
"toggleTitle": {
  "type": "toggle",
  "access": "public",
  "value": true,
  "options": {
    "label": "Toggle title"
  }
}
```

## toggleSmall

A small version of `toggle` attribute is used to toggle skin color of a tinyMCE editor.

`value` property is a `boolean` type.

`toggleSmall` attribute *settings.json* file example:

```json
"darkTextSkin": {
  "type": "toggleSmall",
  "access": "public",
  "value": true
},
"description": {
  "type": "htmleditor",
  "access": "public",
  "value": "Lorem ipsum dolor sit amet...",
  "options": {
    "label": "Description",
    "skinToggle": "darkTextSkin"
  }
}
```

## treeView

Displays child elements as a Tree View in Edit Form.

`value` property is an `object` type.

By default, the treeView will include all available controls. However, by using the `controls` option, only the controls listed can be permitted.
Here is the list of all available controls:
- addChild
- lock
- edit
- remove
- clone
- visibility
- copy
- paste

`treeView` attribute *settings.json* file example:

```json
"buttons": {
  "type": "treeView",
  "access": "public",
  "value": {},
  "options": {
    "label": "Buttons"
  }
}
```

`treeView` attribute *settings.json* file example where only three controls are permitted:
```json
"buttons": {
  "type": "treeView",
  "access": "public",
  "value": {},
  "options": {
    "label": "Buttons",
    "controls": ["lock", "edit", "visibility"]
  }
}
```

## url

Link field which works via Link editor for WordPress.

`value` property is an `object` type.

`url` attribute *settings.json* file example:

```json
"buttonUrl": {
  "type": "url",
  "access": "public",
  "value": {
    "url": "",
    "title": "",
    "targetBlank": false,
    "relNofollow": false
  },
  "options": {
    "label": "Link selection"
  }
}
```
