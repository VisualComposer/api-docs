# Element Hook

Inside plugin’s `index.php` file use `vcv:api` hook for any API call. To add an element you need to pass a path to `manifest.json` file and URL to the base directory of your element (see [WordPress plugin example](https://github.com/wpbakery/vcwb-demo-element-example-plugin).)

`index.php` file with hook example with a single element:
`index.php` file with hook example with a single element:

```php
<?php
add_action(
    'vcv:api',
    function ($api) {
        $api->elements->add(
            '/var/www/absolute/path/to/element/myelement/manifest.json',
            'http://mywordpress/url/to/element/basedirectory'
        );
    }
);
```

`index.php` file with hook with 3 elements:

```php
<?php
add_action(
/**
 * @param $api \VisualComposer\Modules\Api\Factory
 */
    'vcv:api',
    function ($api) {
        $elementsToRegister = [
            'logoSuperTest',
            'textTest',
            'imageGalleryWithTestZoom',
        ];
        $pluginBaseUrl = rtrim(plugins_url(basename(__DIR__)), '\\/');
        /** @var \VisualComposer\Modules\Elements\ApiController $elementsApi */
        $elementsApi = $api->elements;
        foreach ($elementsToRegister as $tag) {
            $manifestPath = __DIR__ . '/elements/' . $tag . '/manifest.json';
            $elementBaseUrl = $pluginBaseUrl . '/elements/' . $tag;
            $elementsApi->add($manifestPath, $elementBaseUrl);
        }
    }
);
```

`manifest.json` file example:

```json
{
  "elements": {
    "imageGalleryWithTestZoom": {
      "settings": {
        "name": "Image Gallery With Test Zoom",
        "metaThumbnailUrl": "[publicPath]/image-gallery-with-zoom-thumbnail.png",
        "metaPreviewUrl": "[publicPath]/image-gallery-with-zoom-preview.png",
        "metaDescription": "A grid type image gallery with a test zoom effect upon hover to catch visitors' attention."
      }
    }
  },
  "categories": {
    "Image gallery": {
      "elements": [
        "imageGalleryWithTestZoom"
      ]
    }
  }
}
```
