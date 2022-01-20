# Element CSS Variables

To style your custom elements you can use [CSS variables (custom properties)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

By using CSS variables you can set dynamic values to your CSS rules. Unlike [PCSS mixins](/css-mixins/element-css-mixins) which takes time to build, they will be set instantly thus making your component render faster, and your CSS code cleaner.

## CSS

Inside your CSS file define your variables with some default values (usually the same as specified in `settings.json` file):

```css
.vce-css-var-btn-container {
  --background-color: #557cbf;
  --text-align: left;
  --border-radius: 0px;
  --color: #fff;
  --hover-color: #fff;
  text-align: var(--text-align);
}
```

Set these variables for your selectors:

```css
.vce-css-var-btn {
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  color: var(--color);
}

.vce-css-var-btn:hover {
  color: var(--hover-color);
}
```

## JSX

Inside the element `component.js` file `render` method you'll need to define a variable and set it equal to an empty object.
This object will hold properties that will be equal to attribute values:

```js
const stylesVariables = {}
```

Next to set the object propery value use the [bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation):

```js
stylesVariables['--border-radius'] = shape
```

Finally, assign all of the properties to the container by setting a style attribute equal to the object `stylesVariables`.

By doing so, you'll override the CSS varibles that are defined in the styles.css file, and they'll be scoped to that particular element.

```js
return (
      <div className={containerClasses} {...editor} style={stylesVariables}>
        <span className={wrapperClasses} id={'el-' + id} {...doMargin}>
          <CustomTag className={classes} {...customProps} {...doRest}>
            {buttonText}
          </CustomTag>
        </span>
      </div>
    )
```

You can find a [button element](https://github.com/VisualComposer/vcwb-demo-element-example-plugin/tree/master/elements/cssVariablesButton/cssVariablesButton) made solely with CSS variables in our [Example Plugin](https://github.com/VisualComposer/vcwb-demo-element-example-plugin).