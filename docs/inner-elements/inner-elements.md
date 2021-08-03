# Inner Elements

For advanced custom elements, Visual Composer allows you to integrate elements within other elements. Such an approach allows you to create a more flexible element with better structure and keep components less dependent.

Visual Composer API allows defining inner elements as child elements or nested elements.

## Child Elements

A child element is a part of a parent element it can be replaced by another element of its category. It cannot be moved or removed, however, it can be hidden if such option exists in the parent element.

A child element can be edited and has its own section with attribute fields in the Edit Form. To include a child element inside the parent, an `element` attribute should be used.

In the example, the Basic Button element is included as a child element. The value of element attribute must contain the tag of the child element. Optional properties:

* `category` to which element belongs (can be replaced by the elements of the same category);
* `tabLabel` title of the Edit Form section;
* `merge` a set of attributes values that are merged upon element replace;
* `onChange` will react to `addButton` attribute change by showing/hiding child element section in the Edit Form and inside the element.
The button property must be then listed in the `metaEditFormTabs` attribute property to display in the Edit Form.

Inside the *component.js* file import Cook service, use it to get and render an element like in the example below.

Child Element *settings.json* example:

```json
{
  "button": {
    "type": "element",
    "access": "public",
    "value": {
      "tag": "basicButton",
      "alignment": "center"
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
      },
      "onChange": {
        "rules": {
          "addButton": {
            "rule": "toggle"
          }
        },
        "actions": [
          {
            "action": "toggleSectionVisibility"
          }
        ]
      }
    }
  },
  "addButton": {
    "type": "toggle",
    "access": "public",
    "value": true,
    "options": {
      "label": "Add button"
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
}
```

Child Element *component.js* example:

```javascript
import React from 'react'
import vcCake from 'vc-cake'

const Cook = vcCake.getService('cook')
const vcvAPI = vcCake.getService('api')

export default class SectionElement extends vcvAPI.elementComponent {
  render () {
    const { id, atts, editor } = this.props
    const { addButton, button } = atts
    ...
    let buttonOutput = ''
    if (addButton) {
      let Button = Cook.get(button)
      buttonOutput = Button ? Button.render(null, false) : null
    }
    return <div className='vce-section-container' id={'el-' + id} {...editor}>
      {buttonOutput}
    </div>
  }
}
```

## Nested Elements

A nested element is an independent element which can be instantiated inside the parent element. This element can be removed, cloned, moved outside the parent element (via the *Drag and Drop*). Other elements of the same category can be added to the parent element. Nested elements are displayed as Tree View inside Edit Form. To include nested element `initChildren` attribute must be used.

In the example below, Icon elements are included as nested elements. The value of an `initChildren` attribute is an array with the corresponding number of nested element objects, each element must contain a tag property. Other properties corresponding to nested element *settings.json* properties may be passed. Optional properties:

* `iconPicker` is icon element’s property with `iconPicker` attribute type.
Properties like icons with attribute type `treeView` and meta attribute `containerFor` must also be set.

Nested elements will be available in element component’s `this.props` object under `children` property as an array of elements.

Nested Element *settings.json* example:

```json
{
  "icons": {
    "type": "treeView",
    "access": "public",
    "value": {},
    "options": {
      "label": "Icons"
    }
  },
  "containerFor": {
    "type": "group",
    "access": "protected",
    "value": [
      "Icon"
    ]
  },
  "initChildren": {
    "access": "protected",
    "type": "object",
    "value": [
      {
        "tag": "icon",
        "iconPicker": {
          "icon": "vcv-ui-icon-feather vcv-ui-icon-feather-clipboard",
          "iconSet": "feather"
        }
      },
      {
        "tag": "icon",
        "iconPicker": {
          "icon": "vcv-ui-icon-feather vcv-ui-icon-feather-cog",
          "iconSet": "feather"
        }
      },
      {
        "tag": "icon",
        "iconPicker": {
          "icon": "vcv-ui-icon-feather vcv-ui-icon-feather-home",
          "iconSet": "feather"
        }
      }
    ]
  },
  "editFormTab1": {
    "type": "group",
    "access": "protected",
    "value": [
      "gap",
      "alignment",
      "verticalAlignment",
      "icons",
      "metaCustomId",
      "customClass"
    ],
    "options": {
      "label": "General"
    }
  }
}
```

Nested Element *component.js* example:

```javascript
import React from 'react'
import vcCake from 'vc-cake'
const vcvAPI = vcCake.getService('api')
export default class IconGroup extends vcvAPI.elementComponent {
  render () {
    const { id, editor, children } = this.props
    
    // Your code goes here ...
    return <div className='vce-icon-group-container' id={'el-' + id} {...editor}>
      <div className='vce-icon-group'>
        {children}
      </div>
    </div>
  }
}
```
