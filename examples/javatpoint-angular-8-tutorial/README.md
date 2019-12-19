# Welcome

This example was inspired by the [Angular 8 Tutorial](https://www.javatpoint.com/angular-8).

The main goals of this example are to enable users:

+ To enter their ProductName, Product Description, and ProductPrice to a form and submit the form.
+ Validate the form against values. If values are incorrect, then it will be validated at the frontend and form will not be submitted.
+ If all values are correct, send the form to the Node.js backend API.
+ Store the values inside the MongoDB database.
+ Show the data on the frontend.
+ Facilitates users to edit and delete the data also.
+ Show the data on the MongoD CLI.
+ Show the data on MongoDB Compass Community (a GUI of MongoDB database.).

## Build the solution

### Angular 8 front-end

```sh
# Navigate to our directory
$ cd examples/javatpoint-angular-8-tutorial

# Generate a new Angular 8 app using the CLI
$ ng new app

# Navigate to our app
$ cd app

# Create components to create, read, and update data
$ ng g c product-add --skipTests=true
$ ng g c product-get --skipTests=true
$ ng g c product-edit --skipTests=true

# Update our app routing file - examples/javatpoint-angular-8-tutorial/app/src/app/app-routing.module.ts
# Create Angular navigation by updating examples/javatpoint-angular-8-tutorial/app/src/app/app.component.html

# Install the Angular routing progress indicator
$ npm install ng2-slim-loading-bar --save

```
