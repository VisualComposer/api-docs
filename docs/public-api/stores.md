# Stores

**Stores** are connectors between different parts of the editor. You can use a publish-subscribe pattern with the help of `trigger`, `on`, `once` methods of the storage. You can also save state and subscribe to state `onChange` method.

With the help of vcCake library you can utilize multiple **stores** that help storing states and trigger events.

## vcCake library

Visual Composer uses a [vcCake](https://github.com/wpbakery/vc-cake) library which

> allows to communicate modules with each other or even group objects in one scope without tight coupling.

## Usage

### Get existing store

To get existing storage `vc-cake` library must be imported at the top of the file. Call `getStorage` method with an argument of storage name (storage name is can be found in `addStorage` method). Example:

```javascript
import { getStorage } from 'vc-cake'
const exampleStorage = getStorage('example')
```

### Storage actions
| Action                    | Arguments (type)                                                                       |
|---------------------------|----------------------------------------------------------------------------------------|
| `on`                      | event (string), callback (function), options (object -> { debounce: 1000 } – optional) |
| `once`                    | event (string), callback (function)                                                    |
| `off`                     | event (string), callback (function), options (object -> { debounce: 1000 } – optional) |
| `offOnce`                 | event (string), callback (function)                                                    |
| `trigger`                 | event (string), any value to pass in the listener callback                             |
| `registerAction`          | action name (string), callback (function)                                              |
| `action`                  | action name (string)                                                                   |
| `state`| state name (string)                                                                    |

#### on, once
These are listeners for events which are triggered. For example, listening for event – `elementAdd`, once `elementAdd` event will be triggered from any place, callback in this listener will be called.

On – will be triggered every time the event is triggered.

Once – will be triggered only one time when the event is triggered.

It can be used to process the data passed within triggered event.

#### off, offOnce
Remove on, once listeners with off and offOnce.

#### trigger
Triggers any event, first argument is event name. Pass the data after the first argument to get it inside listeners callback.

Example for on, off, trigger events:

```javascript
import { getStorage } from 'vc-cake'
const exampleStorage = getStorage('example')

const eventCallback = (elementData) => {
  console.log(elementData) // { tag: 'basicButton', id: 'asd1231f' } -> data comes from the place where event was triggered
}
exampleStorage.on('elementAdd', eventCallback)
exampleStorage.trigger('elementAdd', { tag: 'basicButton', id: 'asd1231f' })
exampleStorage.off('elementAdd', eventCallback)
```

#### registerAction
Register an action with the first argument of action name and second – callback. In this callback it is possible to process the data from storage and return it to the place where action was called.

**Example:**

```javascript
import { getStorage } from 'vc-cake'
const exampleStorage = getStorage('example')

const elements = [
  {tag: 'basicButton', id: 'e13aad2'},
  {tag: 'shadowButton', id: 'f51aer1'},
  {tag: '3dButton', id: 'g54bcc3'}
]

exampleStorage.registerAction('getElementById', (id) => {
  return elements.find(item => item.id === id)
})
````

#### action
Trigger registered action with the first argument of registered action name. Next argument be anything, it will be passed inside registerAction callback.

The difference between trigger some action is that it can return the data. This is the point where storage start to work similar as a service.

**Example:**

```javascript
import { getStorage } from 'vc-cake'
const exampleStorage = getStorage('example')
const currentElement = exampleStorage.action('getElementById', 'f51aer1')
console.log(currentElement) // {tag: 'shadowButton', id: 'f51aer1'}
```

#### state
In the state you can set, get the data and listen for changes from any place.

For ‘state’ action there are multiple actions – set, get, onChange, ignoreChange.

**Example:**

```javascript
import { getStorage } from 'vc-cake'

const exampleStorage = getStorage('example')
const exampleElement = { tag: 'basicButton', id: 'asd123f1' }

exampleStorage.state('element').set(exampleElement)
const exampleElementFromStorageState = exampleStorage.state('element').get()
console.log(exampleElementFromStorageState) // { tag: 'basicButton', id: 'asd123f1' }

// Listen for a state change
const stateChangeCallback = (currentState) => {
console.log(currentState) // current state will be logged here
}

exampleStorage.state('element').onChange(stateChangeCallback) // listening for state change
exampleStorage.state('element').ignoreChange(stateChangeCallback) // removing listener for state change
```

### Real life example
Example of usage of elements and workspace storages:

```javascript
/**
 * components/panels/addElement/lib/categories.js
 */
import {getService, getStorage} from 'vc-cake'

const cook = getService('cook')
const workspaceStorage = getStorage('workspace')
const elementsStorage = getStorage('elements')
// ...
const workspace = workspaceStorage.state('settings').get() || false
const parentElementId = workspace && workspace.element ? workspace.element.id : false
const data = cook.get({ tag: tag, parent: parentElementId })
elementsStorage.trigger('add', data.toJS(), true)

/**
 * editor/stores/elements/elementsStorage.js
 */
import { addStorage, getService} from 'vc-cake'

const cook = getService('cook')

addStorage('elements', (storage) => {
  storage.on('add', (elementData, wrap = true, options = {}) => {
    const createdElements = []
    const cookElement = cook.get(elementData)
    if (!cookElement) {
      return
    }
    // ... here comes other code
  })
})
```

## Stores list

The services are located inside the `public/editor/stores` [folder](https://github.com/VisualComposer/builder/tree/master/public/editor/stores).

- `assets` - works with CSS/JS and other assets related things for elements
- `attributes` - inner API for elements attributes. Example: `iconpicker` icons management.
- `elements` - add, update, delete, clone or move elements. That where all activity with layout data happens.
- `elementsLoader` - manages the process of enqueueing elements javascript bundle files for post-update action.
- `events` - custom events storage
- `history` - undo/redo actions are managed in this storage
- `hub` - manage addons, elements, templates in HUB. Example: downloading new element from HUB
- `notifications` - manage notifications messages for the editor
- `sharedAssets` - add new shared assets. Shared assets are predefined assets that elements can use inside their components. Example: `waypoints.js`
- `shortcodesAssets` - deals with assets that were returned by the server after rendering shortcode string in an element
- `wordpressData` - is used to load initial data and save it after applying changes
- `cacheStorage.js` - small cache server for caching custom data
- `fieldOptionsStorage.js` - attributes API storage to customize an initial value of an element attribute
- `layout.js` - storage is used to manage pages layouts. Header, footer and sidebar settings
- `migrationStorage.js` - manage the migration process
- `settingsStorage.js` - manage settings for the current page. Settings like: layout, custom CSS/js, title and etc. Mostly works with data from the Settings panel
- `workspaceStorage.js` - editor's workspace responsible for connecting navbar events with other storages and services
