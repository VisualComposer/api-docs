# Element Component Methods

Each custom element extends a Visual Composer `elementComponent` class which itself is a <a href="https://reactjs.org/docs/react-component.html" target="_blank">React component</a>. There is default <a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank">React lifecycle methods</a> that can be used to render and update the `elementComponent`.

However, the `elementComponent` has some additional methods available, to ease the development process and provide additional functionality. Each of these methods can be overridden if necessary.

These methods can be called within an `elementComponet` class by using `this` keyword, e.g.: `this.applyDO('all')`.

:::info
Note: Some of these methods accept a `ref` as an argument, this `ref` usually is a [React ref](https://reactjs.org/docs/refs-and-the-dom.html) of an HTML tag.
::: 

## Component methods

### spinnerHTML

**Description**: Creates a loading spinner which can be used when loading content like shortcode.

**Arguments**: No.

**Returns**: An HTML of a spinner.

**Usage**: 
```javascript
componentDidMount () {
  if (loading) {
    this.elementRef.current = this.spinnerHTML()
  }
}
```


### getShortcodesRegexp

**Description**: Gets the Regular Expression of a shortcode, can be used to match a shortcode.

**Arguments**: No.

**Returns**: Regular expression.

**Usage**:
```javascript
this.getShortcodesRegexp()
```


### updateShortcodeToHtml

**Description**: Updates the shortcode to HTML code.

**Arguments**:

* `content`: shortcode;
* `ref`: a reference to an HTML tag;
* `callback`: callback function.

**Returns**: -.

**Usage**: 
```javascript
this.updateShortcodeToHtml(`[contact-form-7 id='${formId}']`, this.ref)
```


### updateInlineHtml

**Description**: Updates the HTML code inside a tag.

**Arguments**:

* `ref`: a reference to an HTML tag;
* `html`: raw HTML code;
* `string`: a string of HTML code, thats is stored in a data attribute.

**Returns**: -.

**Usage**: 
```javascript
const htmlCode = `<b>Hello World!</b>`
this.updateInlineHtml(this.ref, htmlCode)
```


### updateInlineScript

**Description**: Updates the JavaScript code inside a tag.

**Arguments**:

* `ref`: a reference to an HTML tag;
* `js`: raw JavaScript code.

**Returns**: -.

**Usage**: 
```javascript
const jsCode = `console.log(Date())`
this.updateInlineScript(this.ref, jsCode)
```


### getDomNode

**Description**: Uses ReactDOM to get current element's DOM node.

**Arguments**: No

**Returns**: A DOM node.

**Usage**: 
```javascript
this.getDomNode()
```


### getBackgroundClass

**Description**: Gets the background class `vce-element–has-background` of an element, if no background color or background image is selected.

**Arguments**:

* `designOption`: Design Options object that can be accessed from the this.props.atts

**Returns**: A string containing background class or empty string.

**Usage**:
```javascript
this.getBackgroundClass(this.props.atts.designOptions)
```


### applyDO

**Description**: Get the Design Options styles.

**Arguments**:

* `prop`: a string that represents one or multiple options from Design Options.

**Returns**: An object of Design Option props.

**Usage**:

```javascript
// get all Design Options
this.applyDO('all')
```

```javascript
// get just the margin
this.applyDO('margin')
```

```javascript
// get multiple options (in this example all available options are listed)
this.applyDO('margin border padding background animation')
```


### getAnimationData

**Description**: Get animation classes as a string.

**Arguments**: No

**Returns**: a string of applied animation classes.

**Usage**:
```javascript
this.getAnimationData()
```


### getMixinData

**Description**: Get mixin data.

**Arguments**:

* `mixinName`: a string with a name of the mixin.

**Returns**: an object with mixin value and selector.

**Usage**:
```javascript
this.getMixinData('color')
```


### getImageUrl

**Description**: Get the URL of the image.

**Arguments**:

* `image`: an object that contains the image URL.
* `size`: a string with the image size.

**Returns**: a string with a path to an image.

**Usage**:
```javascript
this.getImageUrl(this.props.atts.imageSrc, 'large')
```


### getPublicImage

**Description**: Get the public path of the image.

**Arguments**:

* `filename`: a string containing an image path.

**Returns**: a string with a path to an image.

**Usage**:
```javascript
this.getPublicImage('my-image.png')
```


## Container specific methods

The below methods are specific to a container type elements like row, column, section and such:

### getContainerDivider

**Description**: Get the divider container depending on the selected divider in Design Options.

**Arguments**: No.

**Returns**: a JSX markup.

**Usage**:
```javascript
this.getContainerDivider()
```


### getStickyAttributes

**Description**: Get the sticky attributes of an element (currently available only for container type elements).

**Arguments**:

* `sticky`: an object containing device list.

**Returns**: an object containing element sticky attributes.

**Usage**:
```javascript
this.getStickyAttributes(this.props.atts.sticky)
```


### getBackgroundTypeContent

**Description**: Get the background container depending on the selected background in Design Options.

**Arguments**: No.

**Returns**: a JSX markup.

**Usage**:
```javascript
this.getBackgroundTypeContent()
```