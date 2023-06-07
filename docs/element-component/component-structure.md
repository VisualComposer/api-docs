# Component Structure

The element component consists of is a [React class component](https://react.dev/reference/react/Component#defining-a-class-component) that extends the Visual Composer element's class: `vcvAPI.elementComponent`.

This component is used only in the editor and contains element [built-in methods](/element-component/element-component-methods) that provide additional functionality.

:::note
**On the View Page there are no React component, only compiled HTML structure is displayed.**
:::

## Imports

At the top of the file you have to import [React](https://react.dev/) library and [vcCake](https://github.com/wpbakery/vc-cake) library to use the `api` [service](/public-api/services).

```javascript
import React from 'react'
import vcCake from 'vc-cake'

const vcvAPI = vcCake.getService('api')
```

## Define component class

You'll need to create your custom element class by extending the `vcvAPI.elementComponent`. It will contain a lot of custom code, mostly related to rendering content in the editor.

```javascript
export default class CustomElement extends vcvAPI.elementComponent {
  // code for your component goes here
}
```

## Render method

The `render` is the method of a React class component where you'll be writing most of your code. If you’re not familiar with React, this method will return a markup for the element. Here we can get the values of the element attributes, make decisions based on conditions, define CSS classes and write markup in [JSX](https://react.dev/learn/writing-markup-with-jsx).

The first thing you need to do inside the `render` method is to destruct `this.props` object to get the `id`, `atts` and `editor` variables.

* `id` is the unique ID of the element and is used to recognize the element by the editor;
* `atts` is the attributes of the element, the ones that are set inside the *settings.json* file;
* `editor` object holds data attributes necessary for the editor (for drag and drop).

```javascript
render () {
  const { id, atts, editor } = this.props
  // We also destruct the atts prop to get the attribute values.
  const { output, customClass, metaCustomId, extraDataAttributes } = atts
}
```

### CSS classes

To handle CSS classes you can define variables, assign them to a string and later concatenate strings or use the [`classNames` package](https://www.npmjs.com/package/classnames).

You also need to specify a `vce` class. This class will add a default `margin-bottom: 30px` for the Design Options. It will ensure there is a space between the current and next element.

:::note
Make sure that the `vce` class name is set to the same HTML tag which will contain Design Options object.
:::

```javascript
render () {
  const { id, atts, editor } = this.props
  // We also destruct the atts prop to get the attribute values.
  const { output, customClass, metaCustomId, extraDataAttributes } = atts

  let textBlockClasses = 'vce-text-block'
  const wrapperClasses = 'vce-text-block-wrapper vce'

  // check if custom class value exists and add it to textBlockClasses variable
  if (typeof customClass === 'string' && customClass) {
    textBlockClasses = textBlockClasses.concat(' ' + customClass)
  }
}
```

### HTML Attributes

To assign HTML attributes like Custom Element ID and Extra Data Attributes, you'll need to create a `customProps` variable (object) and assign it to [`this.getExtraDataAttributes()` method](/element-component/element-component-methods#getextradataattributes) which will take the `extraDataAttributes` attribute variable to get its values and set properties for the object.

```javascript
render () {
  const { id, atts, editor } = this.props
  // We also destruct the atts prop to get the attribute values.
  const { output, customClass, metaCustomId, extraDataAttributes } = atts

  let textBlockClasses = 'vce-text-block'
  const wrapperClasses = 'vce-text-block-wrapper vce'

  // check if Custom Class value exists and add it to textBlockClasses variable
  if (typeof customClass === 'string' && customClass) {
    textBlockClasses = textBlockClasses.concat(' ' + customClass)
  }

  const customProps = this.getExtraDataAttributes(extraDataAttributes)

  // check if custom Custom Element ID value exists and create a property in the customProps object
  if (metaCustomId) {
    customProps.id = metaCustomId
  }
}
```

### Handle Design Options

To get the Design Options we use another element [build-in method](/element-component/element-component-methods#applydo) `this.applyDO('all')`. It accepts a string argument which may contain different data. We will store in a variable and use the `all` argument to get all of the Design Options attributes.

```javascript
render () {
  const { id, atts, editor } = this.props
  // We also destruct the atts prop to get the attribute values.
  const { output, customClass, metaCustomId, extraDataAttributes } = atts

  let textBlockClasses = 'vce-text-block'
  const wrapperClasses = 'vce-text-block-wrapper vce'

  // check if Custom Class value exists and add it to textBlockClasses variable
  if (typeof customClass === 'string' && customClass) {
    textBlockClasses = textBlockClasses.concat(' ' + customClass)
  }

  const customProps = this.getExtraDataAttributes(extraDataAttributes)

  // check if custom Custom Element ID value exists and create a property in the customProps object
  if (metaCustomId) {
    customProps.id = metaCustomId
  }

  // doAll variable contains all the Design Options values
  const doAll = this.applyDO('all')
}
```

### Return value

Inside the `return` statement you need to write the JSX markup of your element.

It is important to understand that the `editor` property (that we assigned to a variable above) should be set on the elements outermost container. We do it by using the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

It is recommended to set the `id` attribute with the `id` property on the outermost container as well, however, that not always mandatory. **Please note that the `id` attribute cannot be set to the same element as the `customProps` variable, as there will be a conflict of `id` values.**

The `doAll` variable is an object with Design Options values, and it needs to be set via the spread operator for the same element that has a `vce` class name.

See full element example below.

## Example

The example below is the simple Text Block element.

```javascript
import React from 'react'
import vcCake from 'vc-cake'

const vcvAPI = vcCake.getService('api')

export default class TextBlockElement extends vcvAPI.elementComponent {
  render () {
    const { id, atts, editor } = this.props
    // destructuring assignment for attributes from settings.json with public access
    const { output, customClass, metaCustomId, extraDataAttributes } = atts
    let textBlockClasses = 'vce-text-block'
    const wrapperClasses = 'vce-text-block-wrapper vce'
    const customProps = this.getExtraDataAttributes(extraDataAttributes)

    if (typeof customClass === 'string' && customClass) {
      textBlockClasses = textBlockClasses.concat(' ' + customClass)
    }

    if (metaCustomId) {
      customProps.id = metaCustomId
    }

    const doAll = this.applyDO('all')

    return (
      <div className={textBlockClasses} {...editor} {...customProps}>
        <div className={wrapperClasses} id={'el-' + id} {...doAll}>
          {output}
        </div>
      </div>
    )
  }
}
```
