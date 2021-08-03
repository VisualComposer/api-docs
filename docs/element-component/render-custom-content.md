# Render Custom Content

## Overview

To render a custom content in the editor like the shortcode, a helper element is used with a class of `vcvhelper`.

**Example**:
```javascript
<div className='vcvhelper' ref={this.ref} data-vcvs-html={shortcode} />
```

This helper element is used to display the original element in the editor while storing the raw content, both shortcode and HTML string in the `data` attribute. The content inside the `data` attribute is then compiled by the editor to display it properly in the View Page.

This element comes in handy when the content is changed dynamically and the JavaScript is dependant on the markup. The example could be a shortcode or a complex element like the Accordion which utilizes the same JavaScript both in the editor and public view.

* `vcvhelper` – a reserved class name in the editor by which it is recognized;
* `ref` – a [React reference](https://reactjs.org/docs/refs-and-the-dom.html) to the DOM element;
* `data-vcvs-html` – an attribute which shortcode or HTML string.

:::caution
Note: `vcvhelper` element is used only in the editor. On public view, it will be stripped.
:::

## Rendering HTML

This approach will render the markup the regular React way as well as save raw HTML string in the `data` attribute.

Inside component’s `render` method define a markup you’re willing to render.

It then needs to be converted to a string, so it can be stored in the `data` attribute. A React’s `renderToString` method can be used. Import it at the top of the file, right after React import.

Inside the component’s `render` method define a variable to store the HTML string, and assign it to data attribute.

Rendering HTML *component.js* example:

```javascript
import React from 'react'
import { renderToString } from 'react-dom/server'
import vcCake from 'vc-cake'

const vcvAPI = vcCake.getService('api')

export default class CustomElement extends vcvAPI.elementComponent {
  render () {
    // ...
    const listHTML = (
      <ul className='list'>
        <li className='list-item'>Pen</li>
        <li className='list-item'>Pineapple</li>
        <li className='list-item'>Apple</li>
        <li className='list-item'>Pen</li>
      </ul>
    )

    const htmlString = renderToString(listHTML)
    
    return (
      <div className='container'>
        <div className='vcvhelper' data-vcvs-html={htmlString}>
          {listHTML}
        </div>
      </div>
    )
  }
}
```

## Rendering shortcode

This approach will convert a shortcode to HTML and insert it to a referenced HTML tag.

### Static shortcode

Inside the component’s `render` method add the helper element. The shortcode content will be stored in one of the properties inside the *settings.json* file and can be accessed via `atts` property inside `this.props` object:

The shortcode property will be defined inside *settings.json* file.

Static shortcode *settings.json* example:

```json
{
  "shortcode": {
    "type": "string",
    "access": "public",
    "value": "[myshortcode]",
    "options": {
      "label": "Shortcode"
    }
  }
}
```

Static shortcode *component.js* example:

```javascript
import React from 'react'
import vcCake from 'vc-cake'

const vcvAPI = vcCake.getService('api')

export default class CustomElement extends vcvAPI.elementComponent {
  constructor(props) {
    super(props)

    this.vchelper = React.createRef()
  }

  render () {
    const { id, atts, editor } = this.props
    const { shortcode } = atts
    
    // ...

    return <div className='container'>
      <div className='vcvhelper' ref={this.vcvhelper} data-vcvs-html={shortcode} />
    </div>
  }
}
```

### Dynamic shortcode

But for the most part, the shortcode property will be dynamic and will need to have an option to select one of many. The example will show how to create a shortcode element based on a Contact Form 7 plugin.

For this element, a PHP controller needs to be created to access the possible shortcodes via a global variable.
Inside the `__construct` method, a `VCV_WP_CF7_CONTROLLER` is defined, it has a:

* `getVariables` method which returns a global variable, which in turn is an array of objects containing form labels and ids;
* `checkPlugins` method which checks if the plugin is activated and as a fallback returns a notice.

:::note
PHP controller needs to be included inside the *manifest.json* file.
:::

Inside *settings.json* file define a `source` property, with a type of `dropdown`. Inside `options` object add a `global` property, which will be assigned a global variable, that is defined in the PHP controller file.

Inside *component.js* file in the `render` method use helper element. Add check if shortcode exists, otherwise, return a notice.

Once the shortcode dropdown value is changed, the shortcode needs to be re-rendered. For this, React lifecycle methods are used. To re-render the shortcode an `updateShortcodeToHtml` element component method is used.

Dynamic shortcode *settings.json* example:

```json
{
  "source": {
    "type": "dropdown",
    "access": "public",
    "value": "",
    "options": {
      "label": "Contact Form 7 source",
      "global": "vcvWpCf7Forms"
    }
  }
}
```

Dynamic shortcode *manifest.json* example:

```json
{
  "elements": {
    "contactForm7": {
      "settings": {
        "name": "Contact Form 7",
        "metaThumbnailUrl": "[publicPath]/contact-form-7-thumbnail.png",
        "metaPreviewUrl": "[publicPath]/contact-form-7-preview.png",
        "metaDescription": "Add Contact Form 7 form to your layout (Note: Contact Form 7 plugin must be installed on your WordPress site)."
      },
      "phpFiles": [
        "ContactForm7Controller.php"
      ]
    }
  },
  "categories": {
    "WordPress": {
      "elements": [
        "contactForm7"
      ]
    }
  }
}
```

Dynamic shortcode PHP controller example:

```php
<?php
namespace contactForm7\contactForm7;
if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}
use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;
class ContactForm7Controller extends Container implements Module
{
    use EventsFilters;
    use WpFiltersActions;
    public function __construct()
    {
        if (!defined('VCV_WP_CF7_CONTROLLER')) {
            $this->addFilter(
                'vcv:editor:variables vcv:editor:variables/contactForm7',
                'getVariables'
            );
            $this->wpAddAction(
                'template_redirect',
                'checkPlugin'
            );
            define('VCV_WP_CF7_CONTROLLER', true);
        }
    }
    /**
     * @param $variables
     * @param $payload
     *
     * @return array
     */
    protected function getVariables($variables, $payload)
    {
        $cf7 = get_posts('post_type=wpcf7_contact_form&numberposts=-1');
        $contactForms = [];
        $contactForms[] = ['label' => __('Select source', 'vcwb'), 'value' => 0];
        if ($cf7) {
            foreach ($cf7 as $cform) {
                $contactForms[] = [
                    'label' => $cform->post_title . '(' . $cform->ID . ')',
                    'value' => $cform->ID,
                ];
            }
        } else {
            $contactForms = [
                ['label' => __('No contact forms found', 'vcwb'), 'value' => 0],
            ];
        }
        $variables[] = [
            'key' => 'vcvWpCf7Forms',
            'value' => $contactForms,
        ];
        return $variables;
    }
    protected function checkPlugin()
    {
        if (!defined('WPCF7_VERSION')) {
            add_shortcode(
                'contact-form-7',
                function () {
                    return __('The Contact Form 7 plugin is not activated', 'vcwb');
                }
            );
        }
    }
}
```

Dynamic shortcode *component.js* example:

```javascript
import React from 'react'
import vcCake from 'vc-cake'

const vcvAPI = vcCake.getService('api')

export default class CustomElement extends vcvAPI.elementComponent {
  constructor(props) {
    super(props)
    this.vchelper = React.createRef()
  }

  componentDidMount () {
    const { source } = this.props.atts
    if (source && source !== '0') {
      super.updateShortcodeToHtml(`[contact-form-7 id='${source}']`, this.ref)
    }
  }
  
  componentDidUpdate (prevProps) {
    const { source } = this.props.atts
    if (source && source !== '0' && source !== prevProps.atts.source) {
      super.updateShortcodeToHtml(`[contact-form-7 id='${source}']`, this.ref)
    }
  }

  render () {
    const { source } = this.props.atts
    // ...
    if (source && source !== '0') {
      return <div className='vcvhelper' ref={this.vchelper} data-vcvs-html={`[contact-form-7 id='${source}']`} />
    } else {
      return <div className='vcvhelper'>Select Contact Form 7 source</div>
    }
  }
}
```

## Rendering content with dynamic properties

This approach will render the desired content like the above approaches, except you can request dynamic properties from the server. Requested properties will be rendered as additional fields in the Edit Form.

To request display dynamic fields in the Edit Form inside *settings.json* file define an attribute with an `ajaxForm` type. To make the `ajaxForm` attribute react to changes an `onChange` property with a `fieldMethod` action has to be added.

Inside your PHP controller create a method that will render form fields.

Inside *component.js* file the values of the `ajaxForm` attribute will be accessible in the `render` method via `this.props.atts.widget` property.

Content with dynamic properties *settings.json* example:

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

Content with dynamic properties PHP controller example:

```php
<?php
// Your code goes here ...
class CustomController extends Container implements Module
{
  // Your code goes here ...
  public function __construct()
  {
      // Your code goes here ...
      $this->addFilter('vcv:ajaxForm:render:response', 'renderForm');
      // Your code goes here ...
  }
  // Your code goes here ...
  protected function renderForm($response, $payload, WpWidgets $widgets)
  {
      if ($payload['action'] === 'vcv:wpWidgets:form') {
          $element = $payload['element'];
          $widgetKey = $element['widgetKey'];
          $tag = $element['tag'];
          $instance = $payload['value'];
          if (isset($instance['widget-form'])) {
              $instance = $instance['widget-form'][1];
          }
          if (!$widgetKey) {
              $widgetKey = $widgets->defaultKey($tag);
          }
          if (!$widgetKey) {
              return $response;
          }
          $form = $widgets->form($widgetKey, $instance);
          // Remove last col from labels
          $form = preg_replace('/(\:)\s*(<\/label>|<input)/', '$2', $form);
          $response['html'] = $form;
      }
      return $response;
  }
}
```

Content with dynamic properties *component.js* example:

```javascript
import React from 'react'
import vcCake from 'vc-cake'

const vcvAPI = vcCake.getService('api')

export default class CustomElement extends vcvAPI.elementComponent {
  constructor(props) {
    super(props)
    this.vchelper = React.createRef()
  }

  render () {
    const { source, widget } = this.props.atts
    const { myCustomProperty } = widget
    
    // ...

    if (source && source !== '0') {
      return <div className='vcvhelper' ref={this.vchelper} data-vcvs-html={`[widget-shortcode id='${source}' custom-property='${myCustomProperty}']`} />
    } else {
      return <div className='vcvhelper'>Select source</div>
    }
  }
}
```
