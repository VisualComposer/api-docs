# Attributes onChange

## onChange option

`onChange` property tells attribute how to react to another attribute value change. It is defined as an `object` inside an attribute `options` property and must hold `rules` and `actions` properties.

`rules` property is an object holding properties that are also objects corresponding to attribute names. Each `rules` object has a `rule` property that holds rule type and an `options` property that holds value(s) for the rule. `options` property is optional.

`actions` property is an array that holds objects each with its own action, an object can also have an `options` property.

`onChange`option *settings.json* example:

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

## Rules

### true

Reacts to any change of an attribute. Doesn't have any additional options.

:::info
The example for `true` rule will always hide the `title` attribute, as the rule will always return `true`. This particular rule is meant for sending requests.  
:::

`true` rule property *settings.json* example:

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

### toggle

Reacts to `toggle` type attribute value change. Rule value can also be `!toggle` – which is reverse to `toggle`. Doesn't have any additional options.

`toggle` rule property *settings.json* example:

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

### minlength

Reacts to `value` change, checks for a min number of character in a string or min number of items in an array. Additionally, a key can be specified with path to value for values in object type. More information about path [here](https://lodash.com/docs/#get)

`minlength` rule property *settings.json* example (String value):

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
              "length": "10"
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
`minlength` rule property *settings.json* example (Object value):

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
          "buttonUrl": {
            "rule": "minlength",
            "options": {
              "length": "10",
              "key": "url"
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
  "buttonUrl": {
    "type": "url",
    "access": "public",
    "value": {
      "url": "",
      "title": "",
      "targetBlank": false,
      "relNofollow": false
    }
  }
}


```
### maxlength

Reacts to value change, checks for a max number of character in a string or max number of items in an array. Additionally, a key can be specified with path to value for values in object type. More information about path [here](https://lodash.com/docs/#get)

`maxlength` rule property *settings.json* example (String value):

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
              "length": "10"
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

`maxlength` rule property *settings.json* example (Object value):

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
          "buttonUrl": {
            "rule": "maxlength",
            "options": {
              "length": "10",
              "key": "url"
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
  "buttonUrl": {
    "type": "url",
    "access": "public",
    "value": {
      "url": "",
      "title": "",
      "targetBlank": false,
      "relNofollow": false
    }
  }
}


```

### range

Reacts to value change, checks for a value in the range of min and max character numbers. Additional options could be an `object` with `min` and `max` properties (`number`).

`range` rule property *settings.json* example:

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

### minvalue

Reacts to value change, checks for min value (`number`). Additional options could be `object` with `min` property (`number`).

`minvalue` rule property *settings.json* example:

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

### maxvalue

Reacts to value change, checks for a value in the range of min and max character numbers. Additional options could be an `object` with `max` property (`number`).

`maxvalue` rule property *settings.json* example:

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

### between

Reacts to value change, checks for a value between min and max number values. Additional options could be an `object` with `min` and `max` properties (`number`).

`between` rule property *settings.json*  example:

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

### value

Reacts to value change, checks for the defined value. This rule can also be defined with not operator (e.g. `“rule”: “!value”`). Additional options could be an `object` with a `value` property (`string`)

`value` rule property *settings.json* example:

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

### valueIn

Reacts to value change, checks for a value in the defined `values` array. Additional options could be an `object` with a `values` property (`array`)

`valueIn` rule property *settings.json* example:

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

### valueContains

Reacts to value change, checks for a value in the defined value string. Additional options could be an `object` with a `value` property (`string`).

`valueContains` rule property *settings.json* example:

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

### required

Reacts to value change, checks for an empty value. Doesn't have any additional options.

`required` rule property *settings.json* example:

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

## Actions

### toggleVisibility

Toggles visibility of the attribute. Doesn't have any additional options.

`toggleVisibility` action property *settings.json* example:

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

### toggleSectionVisibility

Toggles visibility of the section in Edit Form (e.g. Button element section). Doesn't have any additional options.

`toggleSectionVisibility` action property *settings.json* example:

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

### attachImageUrls

Toggles visibility of Link Selector for `attachimage` attribute. Doesn't have any additional options.

`attachImageUrls` action property *settings.json* example:

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

### fieldMethod

Executes the method of the attribute. Specify which method to execute in the options property. Currently available `requestToServer` method.

`fieldMethod` action property *settings.json* example:

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
