# Attributes onChange

## onChange option

> onChange property example:

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

`onChange` property tells attribute how to react to another attribute value change. It is defined as an `object` inside an attribute `options` property and must hold `rules` and `actions` properties.

`rules` property is an object holding properties that are also objects corresponding to attribute names. Each `rules` object has a `rule` property that holds rule type and an `options` property that holds value(s) for the rule. `options` property is optional.

`actions` property is an array that holds objects each with its own action, an object can also have an `options` property.


## Rules

### true

> `true` rule property example:

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
          "toggleTitle": {
            "rule": "true"
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
  "description": {
    "type": "string",
    "access": "public",
    "value": "",
    "options": {
      "label": "Description"
    }
  }
}
```

**Description**: Reacts to any change of an attribute.

**Options**: none

<aside class="notice">
<b>Note</b>: The example for <code>true</code> rule will always hide the <code>title</code> attribute, as the rule will always return <code>true</code>. This particular rule is meant for sending requests.  
</aside>


### toggle

> `toggle` rule property example:

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
          "toggleTitle": {
            "rule": "toggle"
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
  "toggleTitle": {
    "type": "toggle",
    "access": "public",
    "value": true,
    "options": {
      "label": "Show title"
    }
  }
}
```

**Description**: Reacts to `toggle` type attribute value change. Rule value can also be `!toggle` – which is reverse to `toggle`.

**Options**: none


### minlength

> `minlength` rule property example:

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
          "accessKey": {
            "rule": "minlength",
            "options": {
              "value": "1234admin"
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
  "accessKey": {
    "type": "string",
    "access": "public",
    "value": "",
    "options": {
      "label": "Access key"
    }
  }
}
```

**Description**: Reacts to `value` change, checks for a min number of character in a string or min number of items in an array

**Options**: an object with `value` property (`string` on an `array`)


### maxlength

> `maxlength` rule property example:

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
          "accessKey": {
            "rule": "maxlength",
            "options": {
              "value": "1234admin"
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
  "accessKey": {
    "type": "string",
    "access": "public",
    "value": "",
    "options": {
      "label": "Access key"
    }
  }
}
```

**Description**: Reacts to value change, checks for a max number of character in a string or max number of items in an array

**Options**: an `object` with `value` property (`string` on an `array`)


### range

> `range` rule property example:

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
          "itemName": {
            "rule": "range",
            "options": {
              "min": "5",
              "max": "15"
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
  "itemName": {
    "type": "string",
    "access": "public",
    "value": "Basic item",
    "options": {
      "label": "Item name"
    }
  }
}
```

**Description**: Reacts to value change, checks for a value in the range of min and max character numbers

**Options**: an `object` with `min` and `max` properties (`number`)


### minvalue

> `minvalue` rule property example:

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
          "titleHeight": {
            "rule": "minvalue",
            "options": {
              "min": "10"
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
  "titleHeight": {
    "type": "number",
    "access": "public",
    "value": "11",
    "options": {
      "label": "Title height"
    }
  }
}
```

**Description**: Reacts to value change, checks for min value (`number`)

**Options**: `object` with `min` property (`number`)



### maxvalue

> `maxvalue` rule property example:

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
          "titleHeight": {
            "rule": "maxvalue",
            "options": {
              "max": "10"
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
  "titleHeight": {
    "type": "number",
    "access": "public",
    "value": "9",
    "options": {
      "label": "Title height"
    }
  }
}
```

**Description**: Reacts to value change, checks for a value in the range of min and max character numbers

**Options**: an `object` with `max` property (`number`)


### between

> `between` rule property example:

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
          "titleHeight": {
            "rule": "between",
            "options": {
              "min": 8,
              "max": 15
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
  "titleHeight": {
    "type": "number",
    "access": "public",
    "value": "10",
    "options": {
      "label": "Title height"
    }
  }
}
```

**Description**: Reacts to value change, checks for a value between min and max number values

**Options**: `object` with `min` and `max` properties (`number`)


### value

> `value` rule property example:

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

**Description**: Reacts to value change, checks for the defined value. This rule can also be defined with not operator (e.g. `“rule”: “!value”`)

**Options**: `object` with a `value` property (`string`)


### valueIn

> `valueIn` rule property example:

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
            "rule": "valueIn",
            "options": {
              "values": [
                "default",
                "custom"
              ]
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
          "label": "None",
          "value": "none"
        },
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

**Description**: Reacts to value change, checks for a value in the defined `values` array

**Options**: `object` with a `values` property (`array`)


### valueContains

> `valueContains` rule property example:

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
            "rule": "valueContains",
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
    "type": "string",
    "access": "public",
    "value": "",
    "options": {
      "label": "Title type"
    }
  }
}
```

**Description**: Reacts to value change, checks for a value in the defined value string

**Options**: `object` with a `value` property (`string`)


### required

> `required` rule property example:

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
            "rule": "required"
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
    "type": "string",
    "access": "public",
    "value": "",
    "options": {
      "label": "Title type"
    }
  }
}
```

**Description**: Reacts to value change, checks for an empty value

**Options**: none


## Actions

### toggleVisibility

> `toggleVisibility` action property example:

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
          "toggleTitle": {
            "rule": "toggle"
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
  "toggleTitle": {
    "type": "toggle",
    "access": "public",
    "value": true,
    "options": {
      "label": "Show title"
    }
  }
}
```
**Description**: Toggles visibility of the attribute

**Options**: none


### toggleSectionVisibility

> `toggleSectionVisibility` action property example:

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

**Description**: Toggles visibility of the section in Edit Form (e.g. Button element section)

**Options**: none


### attachImageUrls

> `attachImageUrls` action property example:

```json
{
  "image": {
    "type": "attachimage",
    "access": "public",
    "value": "single-image.jpg",
    "options": {
      "label": "Image",
      "multiple": false,
      "defaultValue": "single-image.jpg",
      "onChange": {
        "rules": {
          "clickableOptions": {
            "rule": "value",
            "options": {
              "value": "url"
            }
          }
        },
        "actions": [
          {
            "action": "attachImageUrls"
          }
        ]
      },
      "url": false,
      "imageFilter": true
    }
  },
  "clickableOptions": {
    "type": "dropdown",
    "access": "public",
    "value": "",
    "options": {
      "label": "OnClick action",
      "values": [
        {
          "label": "Open Image in New Tab",
          "value": "imageNewTab"
        },
        {
          "label": "Link selector",
          "value": "url"
        }
      ]
    }
  }
}
```

**Description**: Toggles visibility of Link Selector for `attachimage` attribute

**Options**: none


### fieldMethod

> `fieldMethod` action property example:

```json
{
  "widget": {
    "type": "ajaxForm",
    "access": "public",
    "value": {
      "key": "",
      "value": ""
    },
    "options": {
      "label": "",
      "action": "vcv:wpWidgets:form",
      "onChange": {
        "rules": {
          "widgetKey": {
            "rule": "true"
          }
        },
        "actions": [
          {
            "action": "fieldMethod",
            "options": {
              "method": "requestToServer"
            }
          }
        ]
      }
    }
  }
}
```

**Description**: Executes the method of the attribute. Specify which method to execute in the options property.

**Options**: Currently available `requestToServer` method.
