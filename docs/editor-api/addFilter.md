# addFilter

## `addFilter`

Adds filter to get or set data. Arguments: 1. filter key, 2. callback function with an argument of provided data for that filter, add key and value to object and return data if needed. Available filter points:
  - `saveRequestData` - will be called on saving the post/page, object data that will saved will be provided as an argument, any key with value can be added and returned to this object and will be saved in DB.
      To receive the passed key on PHP side there are events that are listening on editor loading ('vcv:dataAjax:getData') and saving ('vcv:dataAjax:setData'). On saving all passed values can be received through the request. To pass the values to the editor on load, they need to be added to the response array.

    Example:
    ```javascript
    window.vcwbEditorApi.addFilter('saveRequestData', (data) => {
      // Add custom key with any value
      data.exampleInsights = 'example insights value'
      // Return data
      return data
    })
    ```

  - `insightPanelsData` - will be called on insights panel opening, object data with information about insight panels will be provided, to insert custom panel add key and value to object and return it.

    Example:
    ```javascript
    window.vcwbEditorApi.addFilter('insightPanelsData', (data) => {
      data['third-party'] = {
        index: 1,
        type: 'third-party',
        title: 'Example Panel'
      }
      return data
    })
    ```