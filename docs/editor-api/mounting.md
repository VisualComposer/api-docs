# Mounting

Use `mount` method to render React component in places that are allowed by Visual Composer.

Arguments:

1. `mountKey` (string)
2. `callback` (function) that returns React component.

Allowed `mountKey` names:
* `panelMessages:third-party` - this will render panel inside **messages** window in VC editor. 

**Example:**

```javascript
import ExampleInsightsPanel from './ExampleInsightsPanel'

window.vcwbEditorApi.mount('panelInsights:third-party', () => {
  return <ExampleInsightsPanel />
})
```
