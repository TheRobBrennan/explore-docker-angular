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
v12.13.0

# Verify that the npm package manager has been installed
$ npm -v
6.12.0

# Install the Angular CLI globally
$ npm install -g @angular/cli
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

### Default app generated by ng new

The simplest example is the default app generated by `ng new app` - available in this project at `./examples/app`

Assuming you have followed the "Initial Setup" guide above, you should be able to start this example with:

```sh
$ npm start
```

Your application should be available at [http://localhost:4200](http://localhost:4200):

![examples/app/screenshots/01-example-app.png](examples/app/screenshots/01-example-app.png)

To verify this is working properly, make a minor modification to `examples/app/src/app/app.component.html` and verify that the page has automatically refreshed with your changes.

This app has also been enhanced to allow testing using Chrome on the local computer as well as headless Chrome within the Docker container itself by running `npm test` or `ng test`:

![examples/app/screenshots/02-example-app-e2e-tests.png](examples/app/screenshots/02-example-app-e2e-tests.png)

![examples/app/screenshots/03-example-app-docker-tests.png](examples/app/screenshots/03-example-app-docker-tests.png)

For [VS Code](https://code.visualstudio.com) users, this example also includes a launch configuration to debug the app natively within the IDE:

![examples/app/screenshots/04-example-app-vscode-config.png](examples/app/screenshots/04-example-app-vscode-config.png)

![examples/app/screenshots/05-example-app-vscode-debug.png](examples/app/screenshots/05-example-app-vscode-debug.png)

This example also includes a launch configuration to debug the unit tests of the app natively within the IDE:

![examples/app/screenshots/08-example-app-vscode-debug-karma-unit-tests.png](examples/app/screenshots/08-example-app-vscode-debug-karma-unit-tests.png)

If you would like to generate a code coverage report for your test suite, you can run `$ npm run test:local:coverage` to generate a command line report of your code coverage as well as an interactive web page:

![examples/app/screenshots/06-example-app-code-coverage-html.png](examples/app/screenshots/06-example-app-code-coverage-html.png)

![examples/app/screenshots/07-example-app-code-coverage-cli.png](examples/app/screenshots/07-example-app-code-coverage-cli.png)

When you are finished, simply press CTRL+C to spin down the app:

```sh
^CGracefully stopping... (press Ctrl+C again to force)
Stopping explore-angular-app ... done
```

### Tour of Heroes

This example is based off the original [Tour of Heroes](https://angular.io/tutorial) tutorial on the official [Angular](https://angular.io) web site.

You should be able to start this example with:

```sh
$ npm run toh:start
```

Your application should be available at [http://localhost:4200](http://localhost:4200):

![examples/angular-tour-of-heroes/screenshots/01-example-dashboard-with-search.png](examples/angular-tour-of-heroes/screenshots/01-example-dashboard-with-search.png)

![examples/angular-tour-of-heroes/screenshots/02-example-heroes-with-input.png](examples/angular-tour-of-heroes/screenshots/02-example-heroes-with-input.png)

To verify this is working properly, make a minor modification to `examples/app/src/app/app.component.html` and verify that the page has automatically refreshed with your changes.

This app has also been enhanced to allow testing using Chrome on the local computer as well as headless Chrome within the Docker container itself by running `npm test` or `ng test`

![examples/angular-tour-of-heroes/screenshots/03-example-e2e-tests.png](examples/angular-tour-of-heroes/screenshots/03-example-e2e-tests.png)

![examples/angular-tour-of-heroes/screenshots/04-example-docker-tests.png](examples/angular-tour-of-heroes/screenshots/04-example-docker-tests.png)

For [VS Code](https://code.visualstudio.com) users, this example also includes a launch configuration to debug the app natively within the IDE.

![examples/angular-tour-of-heroes/screenshots/05-example-vscode-config.png](examples/angular-tour-of-heroes/screenshots/05-example-vscode-config.png)

![examples/angular-tour-of-heroes/screenshots/06-example-vscode-debug.png](examples/angular-tour-of-heroes/screenshots/06-example-vscode-debug.png)

This example also includes a launch configuration to debug the unit tests of the app natively within the IDE:

![examples/angular-tour-of-heroes/screenshots/09-example-vscode-debug-karma-unit-tests.png](examples/angular-tour-of-heroes/screenshots/09-example-vscode-debug-karma-unit-tests.png)

If you would like to generate a code coverage report for your test suite, you can run `$ npm run test:local:coverage` to generate a command line report of your code coverage as well as an interactive web page:

![examples/angular-tour-of-heroes/screenshots/07-example-code-coverage-html.png](examples/angular-tour-of-heroes/screenshots/07-example-code-coverage-html.png)

![examples/angular-tour-of-heroes/screenshots/08-example-code-coverage-cli.png](examples/angular-tour-of-heroes/screenshots/08-example-code-coverage-cli.png)

When you are finished, simply press CTRL+C to spin down the app:

```sh
^CGracefully stopping... (press Ctrl+C again to force)
Stopping explore-angular-tour-of-heroes ... done
```
