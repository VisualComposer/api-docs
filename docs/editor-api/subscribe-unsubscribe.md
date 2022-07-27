# subscribe / unsubscribe

## `subscribe`

Subscribe to events. Arguments: 1. event key, 2. callback function with an argument of provided data (if there is). Available events:
  - `layoutChange` - will be called on layout change, data of the layout will be provided as an argument.

    Example:
    ```javascript
    window.vcwbEditorApi.subscribe('layoutChange', (data) => {
      console.log('layout has changed', data)
    })
    ```

  - `elementUpdate` - will be called on existing element update, id and element provided as an argument.

    Example:
    ```javascript
    window.vcwbEditorApi.subscribe('elementUpdate', (id, element) => {
      console.log('element has updated', id, element)
    })
    ```

  - `savedDataLoad` - will be called on post/page load after data is received, object data that was saved will be provided as an argument.

    Example:
    ```javascript
    const handleSavedDataLoad = (data) => {
      if (data.exampleInsights) {
        console.log(data.exampleInsights)
      }
    }
    window.vcwbEditorApi.subscribe('savedDataLoad', handleSavedDataLoad)
    ```


## `unsubscribe`

Unsubscribe from events. Arguments: 1. event key, 2. callback function that was previously subscribed.

Example:

```javascript
window.vcwbEditorApi.unsubscribe('savedDataLoad', handleSavedDataLoad)
```
