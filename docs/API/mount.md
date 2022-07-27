# mount

## `mount`

Render React component in places that are allowed by Visual Composer. Arguments: 1. mount key, 2. callback function that returns React component. Allowed mount keys:
  - `panelMessages:third-party` - this will render panel inside 'messages' window in VC editor. 

    Example:
    ```
    window.vcwbEditorApi.mount('panelInsights:third-party', () => {
      return <ExampleInsightsPanel />
    })
    ```
