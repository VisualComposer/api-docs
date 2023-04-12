# Filters and actions hooks

## `PHP hooks and actions`

In plugin core we have a filters and actions hooks that are analogs of wordpress filters and actions with some improverments and advantages in use for php code.

<table>
  <tr>
    <th>Wordpress Function</th>
    <th>Visualcomposer Analog</th>
  </tr>
  <tr>
    <td><a href="https://developer.wordpress.org/reference/functions/apply_filters/" target="_blank">apply_filters</a></td>
    <td>vcfilter</td>
  </tr>
  <tr>
    <td><a href="https://developer.wordpress.org/reference/functions/do_action/" target="_blank">do_action</td>
    <td>vcevent</td>
  </tr>
  <tr>
    <td><a href="https://developer.wordpress.org/reference/functions/add_filter/" target="_blank">add_filter</td>
    <td>EventsFilters::addFilter()</td>
  </tr>
  <tr>
    <td><a href="https://developer.wordpress.org/reference/functions/add_action/" target="_blank">add_action</td>
    <td>EventsFilters::addEvent()</td>
  </tr>  
</table>

### `vcfilter`
This function invokes all functions attached to filter hook $filter.

vcfilter( string $filter, mixin $body = '', mixin $payload = [], bool $haltable = false)

Parameters

$filter string Required
  The name of the filter hook.

$body mixed Optional
  The value to filter.

$payload mixed Optional
  Additional parameters to pass to the callback functions.

$haltable bool Optional
  If true than we can't override this filter.

Exemple in Visualcomposer core.

    Example:
    ```php
        $post = get_post();
        $link = get_edit_post_link($post, 'url');
        $query = [
            'vcv-action' => 'frontend',
            'vcv-source-id' => $post->ID,
        ];
        $frontendUrl = $link . http_build_query($query, '', '&');
        
        vcfilter('vcv:frontend:url', $frontendUrl, ['sourceId' => $sourceId, 'query' => $query])
    ```
    
### `EventsFilters::addFilter()`

Adds a callback function to a filter hook.

addFilter(string $filterName, string $methodCallback, int $weight = 0)

Parameters

$filterName string Required
  The name of the filter to add the callback to.

$methodCallback string Required
  The callback to be run when the filter is applied.

$weight int Optional
  Used to specify the order in which the functions associated with a particular filter are executed.

Exemple can be inplemented in functioins.php theme file or any plugin file.

    Example:
    ```php
        add_action('vcv:api', function() {
          vchelper('Filters')->listen('vcv:frontend:url', 'actionHookExample');

            function actionHookExample($url, $payload) {

                if (empty($payload['sourceId']) || empty($payload['sourceId'])) {
                    return $url;
                }

                $url = 'https://example.com';

                return $url;
            }
        });
    ```

### `vcevent`
Calls the callback functions that have been added to an action hook.

vcevent(string $event, mixin $payload = [])

Parameters

$event string Required
  The name of the action to be executed.

$payload mixed Optional
  Additional parameters to pass to the callback functions.

Exemple in Visualcomposer core.

    Example:
    ```php
          global $post;
          
          vcevent(
              'vcv:api:postSaved',
              ['post' => $post]
          );
    ```

### `EventsFilters::addEvent()`

Adds a callback function to an action hook.

addEvent(string $eventName, string $methodCallback, int $weight = 0)

Parameters

$eventName string Required
  The name of the action to add the callback to.

$methodCallback string Required
  The callback to be run when the action is called.

$weight int Optional
  Used to specify the order in which the functions associated with a particular action are executed.

Exemple can be inplemented in functioins.php theme file or any plugin file.

    Example:
    ```php
        use VisualComposer\Framework\Container;
        use VisualComposer\Framework\Illuminate\Support\Module;
        use VisualComposer\Helpers\Traits\EventsFilters;

        class Extender extends Container implements Module
        {
            use EventsFilters;

            public function __construct()
            {
                $this->addEvent(
                    'vcv:api:postSaved',
                    'initialize'
                );
            }

            public function initialize($payload)
            {
                if (get_post_type($payload['post']->ID) !== 'post') {
                    return;
                }

                // do some stuff here
            }
        }

        new Extender();

    ```
## `JS hooks and actions`

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
        title: 'Example Panel',
        icon: 'cog' // icon list is predefined in plugin core
      }
      return data
    })
    ```
