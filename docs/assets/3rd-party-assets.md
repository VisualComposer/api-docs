# 3rd party assets

Visual Composer API allows you to use 3rd party assets (such as JavaScript libraries) in your elements.

:::info
You can view ready to use example of a 3rd party library in the element in our [example plugin](https://github.com/VisualComposer/vcwb-demo-element-example-plugin/tree/master/elements/imageSlider/imageSlider) on GitHub.
:::

## Add files to the elements

All 3rd party related files or your own custom JavaScript should be located under `public/js` folder in the [element structure](/element-structure/element-structure).

<img width="50%" src="/img/docs/public-javascript-files.png" alt="Public JavaScript file structure" /> 

### Custom JavaScript

To create and build your own custom JavaScript files you'll have to add a `webpack.config.js` file inside the `public` folder.

Inside this file you'll have to specify entry files and output file name. The property of the `entry` object should correspond to the file name. E.g. if your custom JavaScript file nale is imageSlider.js then the property inside `entry` object should be equal to `imageSlider`, see the following example:

```js
module.exports = {
  entry: {
    imageSlider: ['./js/imageSlider.js']
  },
  output: {
    filename: '[name].min.js'
  }
}
```

To build your custom JavaScript you'll need to change directory to `public` and run a build command:

```sh
$ cd elements/{elementDirectory}/{elementDirectory}/public
# build
$ ../../../../node_modules/.bin/webpack --config=webpack.config.js
# watch
$ ../../../../node_modules/.bin/webpack --config=webpack.config.js --watch
```


## Include assets via settings.json

To specify a 3rd party library in your custom element you have to include a [`metaPublicJs`](/element-attributes/meta-attributes#metapublicjs) attribute to elements' `settings.json` file as follows:

```json
"metaPublicJs": {
  "access": "protected",
  "type": "string",
  "value": {
    "libraries": [
      {
        "libPaths": [
          "public/dist/customSlider.min.js",
          "public/dist/customGallery.min.js"
        ]
      }
    ]
  }
}
```

The `libPaths` property is an array which can hold multiple entries, thus you can specify all of your 3rd party assets. Each entry is a relative path to a file located inside `public/dist` folder.

If you want to include a library conditionally you'll have utilize the [`onChange` behaviour](/element-attributes/attributes-onchange) by adding a `rules` property:

```json
"metaPublicJs": {
  "access": "protected",
  "type": "string",
  "value": {
    "libraries": [
      {
        "rules": {
          "toggleResponsiveMode": {
            "rule": "toggle"
          }
        },
        "libPaths": "public/dist/responsive.min.js"
      }
    ]
  }
}
```