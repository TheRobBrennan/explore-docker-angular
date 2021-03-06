# Welcome

This example was inspired by [Create a reusable confirmation dialog in Angular 7, using Angular Material](https://firstclassjs.com/create-a-reusable-confirmation-dialog-in-angular-7-using-angular-material/).

![app/screencasts/preview.gif](app/screencasts/preview.gif)

## Getting started

Let's generate a new app using `npx` and the [Angular CLI](https://cli.angular.io) using CSS as our stylesheet format and **NOT** using Angular routing:

```sh
$ npx @angular/cli new app --style=css --routing=false
```

### Install Angular Material

Let's install Angular Material, the Angular Component Development Kit (CDK), and Angular animation:

```sh
# Make sure you have navigated to the app directory
$ cd examples/reusable-confirmation-dialog-material-ui/app

# Install dependencies
$ npm install --save @angular/material @angular/cdk @angular/animations
```

### Create the reusable confirmation dialog component

Let's generate a shared `confirmation-dialog` component using the [Angular CLI](https://cli.angular.io):

```sh
$ npx @angular/cli g c components/shared/confirmation-dialog
```
