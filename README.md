# Welcome

This project is meant to serve as a starting point for exploring [Angular](https://angular.io) using [Docker](https://www.docker.com).

## Initial setup

### Docker

The easiest way to use this repo is to have [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and configured on your development machine.

### Angular CLI

Once you have Docker installed, you will need to have the latest version of the Angular CLI installed on your development machine per the [guide](https://angular.io/guide/setup-local) available on the [Angular](https://angular.io) site:

```sh
# Verify that you have Node.js v10.9.0 or later installed (https://nodejs.org)
$ node -v
v12.13.1

# Verify that the npm package manager has been installed
$ npm -v
6.13.3

# Install the Angular CLI globally **OR** use npx to run the latest Angular CLI
## Install globally on your local development environment
$ npm install -g @angular/cli
## Install using npx to run the latest Angular CLI
$ npx -p @angular/cli ng new my-app
$ cd my-app
$ npx ng g c my-first-component

```

## Getting started

Once you have configured your development environment - including installing Angular globally - you can generate a new workspace and example Angular app:

```sh
# Navigate to the examples folder to create your app
$ cd examples

# Use the Angular CLI to generate a new app
$ ng new myapp
```

Once you have created your app - `myapp` in the above example - all that is left to do is:

+ Create `./path/to/myapp/Dockerfile` - feel free to copy `examples/app/Dockerfile` as an example
+ Create a `./docker-compose.myapp.yml` - feel free to copy `./docker-compose.yml` as an example
+ [OPTIONAL] Add the following scripts to `./package.json`
  + "docker:myapp:up": "docker-compose -f docker-compose.myapp.yml up",
  + "docker:myapp:up:clean": "docker-compose -f docker-compose.myapp.yml up --remove-orphans --build",
  + "docker:myapp:down": "docker-compose -f docker-compose.myapp.yml down"

## Examples

Please see the `README` contained in each folder under `examples` for details on what each example offers.
