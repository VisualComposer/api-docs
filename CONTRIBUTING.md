# Contributing to Visual Composer Website Builder API Documentation

You can contribute and help make Visual Composer API Documentation better. Follow the guidelines:
 - [Code of Conduct](#code-of-conduct)
 - [Issue Templates](#issue-templates)
 - [Submission Guidelines](#submission-guidelines)
 - [Installation instruction](#installation-instruction)

## Code of Conduct
Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Issue Templates
If you plan to open a Pull Request, Issue, or Feature Request please get familiar and use one of our [Issue Templates](https://github.com/VisualComposer/api-docs/tree/main/.github/ISSUE_TEMPLATE).

## Submission Guidelines

### Forking workflow
Keep the `main` branch tests passing at all times.

If you open a Pull Request, please do it against the `main` branch.

1. Make a fork of API Docs repo in GitHub. 
2. Clone your fork repo:
```sh
$ git clone git@github.com:<Username>/api-docs.git
```
3. Set upstream branch:
```sh
$ cd api-docs
$ git remote add upstream git@github.com:VisualComposer/api-docs.git
$ git remote set-url --push upstream no_push
$ git remote -v
origin	git@github.com:<Username>/api-docs.git (fetch)
origin	git@github.com:<Username>/api-docs.git (push)
upstream	git@github.com:VisualComposer/api-docs.git (fetch)
upstream	no_push (push)
```

### Creating features
Use [Feature Branch workflow](https://es.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). If you want to send you data to upstream you need to [create pull request in GitHub](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork).

```sh
$ git checkout -b <feature-branch-in-kebab-case>
# Edit some code
$ git commit -m "Message for change"
$ git push -u origin <feature-branch-in-kebab-case>
```

### Bring API Docs up to date
```sh
$ git checkout master && git pull upstream master # checkout
$ git push
```

### Cleanup after pull request
```sh
$ git branch -d <branch name>
$ git push origin master
```

## Installation instruction
Visual Composer API is based on a popular API DOCS GENERATOR by [Docusaurus 2](https://docusaurus.io/).

### 1. Run project
Node.js version 16.14 or above required
```sh
$ yarn install
$ yarn start
```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.


### 2. Build project

```sh
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.



