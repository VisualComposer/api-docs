# Public events API

Public events are a part of a Public API. You can use Public events API to listen for specific changes whithin your custom elements. It is useful for reacting to events both in **Editor** and on **View Page.**

All methods are available via `window.vcv` global object.

## Event Registration

`on(event, callback)`

Adds a listener to the specified event.

* `event` (string): The name of the event to listen to.
* `callback` (function): The function to be called when the event is triggered.

```javascript
window.vcv.on(event, callback)
```

`once(event, callback)`

Adds a one-time listener to the specified event. The listener will be automatically removed after being called once.

* `event` (string): The name of the event to listen to.
* `callback` (function): The function to be called when the event is triggered.

```javascript
window.vcv.once(event, callback)
```

## Event Deregistration

`off(event, callback)`

Removes a listener from the specified event.

* `event` (string): The name of the event to remove the listener from.
* `callback` (function): The listener function to be removed.

```javascript
window.vcv.off(event, callback)
```

## Event Triggering

`trigger(event, [args...])`

Triggers the specified event, calling all registered listeners.

* `event` (string): The name of the event to trigger.
* `args` (any): Optional arguments to pass to the event listeners.

```javascript
window.vcv.trigger(event, [args...])
```

## Ready Event

`ready(callback)`

Registers a one-time listener for the `ready` event. The listener will be automatically removed after being called once.

* `callback` (function): The function to be called when the "ready" event is triggered.

```javascript
window.vcv.ready(callback)
```

## Usage example

The common way to use Public events is to listen for the `ready` event inside the public JavaScript file of your custom element.

### `ready` event

The `ready` event is triggered when the document is ready (the same way as the [jQuery `.ready()`](https://api.jquery.com/ready/)) 

:::note
`ready` event is triggered each time element is added to the page or gets edited (in VC editor). On the View Page it is triggered only once.
:::

**Example:**

```javascript
function initialize () {
  // do stuff for your custom element
}

window.vcv.on('ready', () => {
  initialize()
})
```

The `callback` have multiple arguments `action`, `id`, `options`. You can specify them to make conditional decisions.

* `action` (string): Actions like `add` one element add, `update` on element edit.
* `id` (string): Id of the element
* `options` (object): Optional argument, usually is present on `update` event, that contains properties related to modified attribute:
  * `changedAttribute` (string)
  * `changedAttributeType` (object)
  * `disableUpdateAssets` (boolean)
  * `disableUpdateComponent` (boolean)

```javascript
function initialize () {
  // do stuff for your custom element
}

function update () {
  // do stuff for your custom element
}

window.vcv.on('ready', (action, id, options) => {
  if (action === 'add') {
    initialize()
  } else if (action === 'update') {
    update()
  }
})
```

### `reInit` event

The `reInit` event is triggered when an element is re-rendered inside another *dynamic* element, like Accordion. 

You can call your functions on `reInit` event to recalculate or re-instantiate your scripts. It is needed to properly display *dynamic* elements when they are hidden and re-appeared again ofter a specific action (e.g. after Accordion secion is closed and opened again).

The `callback` have two arguments `action` and `id`. You can specify them to make conditional decisions.

* `action` (string): Action is always `reInit`.
* `id` (string): Id of the element

```javascript
function initialize (element) {
  // do stuff for your custom element
}

window.vcv.on('reInit', (action, id) => {
  const element = document.getElementById(`el-${id}`)

  initialize(element)
})
```

:::info
You can view ready to use example of `ready` and `reInit` events for the Image Slider element in our [example plugin](https://github.com/VisualComposer/vcwb-demo-element-example-plugin/blob/master/elements/imageSlider/imageSlider/public/js/imageSlider.js) on GitHub.
:::

