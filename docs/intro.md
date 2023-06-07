---
sidebar_position: 1
slug: /
---

# Introduction

Visual Composer API allows you to develop your own custom elements for the website builder. With custom elements, you are in charge of your element design and functionality which is crucial for advanced projects and allows perfectly aligned element choice to your brand.

This section contains all the information you need to develop custom elements, it will guide you on how to get started, provide information about hooks, attributes, and offer examples.

## What is Visual Composer Website Builder Editor?
To get started, you need to understand how the Visual Composer Website Builder Editor works. The Editor is WYSIWYG module based editor which has inner and public API to manage elements and components.

The editor works with elements as React components. These components must be built with Webpack and enqueued via API hooks (WordPress actions). Every element consists of few parts:

- Thumbnail Image – a small image (100×100 pixels) that will represent an element in the ‘Add Element’ window;
- Preview Image – a large image (520×240 pixels) visible on Thumbnail hover;
- Description – a description that appears on hover together with the Preview image;
- Category – element category;
- React-based component.

## What is Visual Composer Element?
The element is an independent component of the system which represents HTML based block with the ability to output media and dynamic content.

Visual Composer offers a wide range of pre-defined content elements which can be downloaded from the <a href="https://visualcomposer.com/help/visual-composer-hub/" target="_blank">Visual Composer Hub</a>.

Visual Composer API allows extending the list with your own elements – these elements will not be available in the Hub but will be instantly displayed in the [Add Element](https://help.visualcomposer.com/docs/getting-started/interface/) window.

## How to Start Development?
There are 4 steps to start developing elements for the Visual Composer:

- Follow the requirements ([see below](#requirements));
- <a href="https://visualcomposer.com/download/" target="_blank">Download</a> and <a href="https://visualcomposer.com/help/installation/" target="_blank">install</a> the plugin;
- <a href="https://visualcomposer.com/help/activation/" target="_blank">Activate</a> the plugin with Premium/Free license;
- Use [API hooks](/element-hook/element-hook) and [element boilerplates](https://github.com/VisualComposer/elementBoilerplate) to add elements to your plugin or theme.

## Requirements
To develop Visual Composer element there are following technical requirements:

* [PHP](https://www.php.net/) >= 5.4 ([PHP installation](https://www.php.net/manual/en/install.php))
* [WordPress](https://wordpress.org/) >= 4.6 ([WordPress installation](https://wordpress.org/documentation/category/installation/))
* [PHP gd2/imagick](https://www.php.net/manual/en/book.image.php) and [php-zip](https://www.php.net/manual/en/book.zip.php) extensions to be loaded
* [Node](https://nodejs.org/en) >=8.0 ([Node installation](https://nodejs.org/en/download))
* [yarn](https://yarnpkg.com/) ([Yarn installation](https://yarnpkg.com/getting-started/install))
* Local server ([How to setup local a server](https://www.maketecheasier.com/setup-local-web-server-all-platforms/))

## Useful Links

* Visual Composer Website Builder repository: <a href="https://github.com/VisualComposer/builder" target="_blank">https://github.com/VisualComposer/builder</a>

* Element boilerplate repository: <a href="https://github.com/VisualComposer/elementBoilerplate" target="_blank">https://github.com/VisualComposer/elementBoilerplate</a>

* WordPress Demo plugin with elements: <a href="https://github.com/VisualComposer/vcwb-demo-element-example-plugin" target="_blank">https://github.com/VisualComposer/vcwb-demo-element-example-plugin</a>

