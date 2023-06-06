# Services

With the help of vcCake library, Visual Composer utilizes multiple **services** that help perform specific actions like requests, getting and setting data, and more.

**Service** is a globally accessible object that can be used by all modules in all scopes.

## vcCake library

Visual Composer uses a [vcCake](https://github.com/wpbakery/vc-cake) library which 

> allows to communicate modules with each other or even group objects in one scope without tight coupling.

## Usage

### Get existing service

Editor services are objects that can be used everywhere in our system including external files that are outside mount point of `editor.js`. Service can be accessed via the `getService` method of `vc-cake` package.

```javascript
import { getService } from 'vc-cake'
const documentData = getService('document')

const parentID = '2afd34c'
const elementChildren = documentData.children(parentID)
```

### Services API

Each **service** is a unique object with its own custom methods that do specific things.

To use each service you'll have to get familiar with its particular available methods.

## Services list

The services are located inside the `public/editor/services` [folder](https://github.com/VisualComposer/builder/tree/master/public/editor/services).

- `actionsManager` - manage actions for elements like setup visibility property, attach image URLs and update dependency classes for parent and children
- `api` - API for elements and public events. Used by elements to get superclass for element's component. Public `vc` events like `ready` and others that are used by elements for public js
- `cook` - service which helps to work with element components and attributes
- `dataProcessor` - sends ajax request to the server with pre-configured attributes
- `document` - service which stores data about current layout and its elements. Can be used with `cook` service
- `elementsAccessPoint` - single access point for element data. This service is used by edit form panel component.
- `elementAssetsLibrary` - service which manages elements specific assets libraries
- `hubAddons` - helps to manage HUB addons list
- `hubCategories` - helps to manage HUB elements categories
- `hubElements` - helps to manage HUB elements list
- `hubGroups` helps to manage HUB groups of elements
- `modernAssetsStorage` - manages building of element PostCSS mixins
- `renderProcessor` - supporting service to help manage data flow with promises
- `rulesManager` - service helps to check data value with some comparison rules like: `maxlength`, `minlength`, `toggle`, `range` and etc. Possible to use async and sync methods
- `sharedAssetsLibrary` - shared assets are libraries that are implemented in the editor and can be used in a specific moment. This service helps to manage it
- `stylesManager` - service helps to compile Post CSS to CSS
- `utils` - different utilities
- `wordpress-post-data` - service to work with global data for current WordPress post/page in the editor
- `wpMyTemplates` - helps to manage my templates in the Template panel.
