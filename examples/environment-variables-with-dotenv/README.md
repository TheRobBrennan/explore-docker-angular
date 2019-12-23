# Welcome

This example was inspired by [Configure Frontend Projects With Dotenv](https://codingsans.com/blog/configure-frontend-projects-with-dotenv).

## Getting started

Let's generate a new app using `npx` and the [Angular CLI](https://cli.angular.io) using CSS as our stylesheet format and **NOT** using Angular routing:

```sh
$ npx @angular/cli new app --style=css --routing=false
```

## The challenge

If you have experience working with back-end server code, chances are you may have encountered the use of [dotenv](https://www.npmjs.com/package/dotenv) - a popular package for bring environment variables from a `.env` file into a project.

On the front-end, though, we cannot simply drop this in. Why? `dotenv` and similar libraries reach the file system to read `.env` files - something that cannot be done with the browser.

To solve this, we will create a configuration loader using `val-loader` to work with `dotenv` and `convict` to import our configuration from an `.env` file and build the configuration object our front-end code will need.

## Install dependencies

```sh
# Navigate to our app directory
$ cd examples/environment-variables-with-dotenv/app

# Install dotenv and convict as a development dependency
$ npm install dotenv @types/dotenv convict @types/convict --save-dev

# Install val-loader as a development dependency
$ npm install val-loader --save-dev
```

## Create the config service

Let's generate a new service using `npx` and the [Angular CLI](https://cli.angular.io):

```sh
# Navigate to our app directory
$ cd examples/environment-variables-with-dotenv/app

# Generate a new service
$ npx @angular/cli g s services/config
```
