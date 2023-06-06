# Events

## Subscribe

To subscribe to an event use the `.subscribe()` method which accepts two arguments. 

1. `eventName` (string)
2. `callback` (function) with an argument of provided data (if there is).

Available event names:
* `layoutChange` - will be called on layout change (Default, Blank, Header and Footer), `data` of the layout will be provided as an argument of the callback function.

**Example:**
```javascript
window.vcwbEditorApi.subscribe('layoutChange', (data) => {
  console.log('layout has changed', data)
})
```

- `elementUpdate` - will be called on existing element update, `id` and `element` provided as an argument of the callback function.

**Example:**
```javascript
window.vcwbEditorApi.subscribe('elementUpdate', (id, element) => {
  console.log('element has updated', id, element)
})
```

- `savedDataLoad` - will be called on post/page load after data is received, `data` object that was saved will be provided as an argument of the callback function.

**Example:**
```javascript
const handleSavedDataLoad = (data) => {
  if (data.exampleInsights) {
    console.log(data.exampleInsights)
  }
}

window.vcwbEditorApi.subscribe('savedDataLoad', handleSavedDataLoad)
```

## Unsubscribe

To unsubscribe from an event use the `.unsubscribe()` method which accepts two arguments.

Arguments:
1. `eventName` (string)
2. `callback` (function) that was previously subscribed.

**Example:**
```javascript
const handleSavedDataLoad = (data) => {
  if (data.exampleInsights) {
    console.log(data.exampleInsights)
  }
}

window.vcwbEditorApi.unsubscribe('savedDataLoad', handleSavedDataLoad)
```
