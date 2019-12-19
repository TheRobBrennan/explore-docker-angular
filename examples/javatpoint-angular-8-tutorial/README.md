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

# Install rxjs-compat
$ npm install rxjs-compat --save

# Import the SlimLoadingBarModule inside an app.module.ts
# Import the styling for the loading bar in examples/javatpoint-angular-8-tutorial/app/src/styles.css
@import "../node_modules/ng2-slim-loading-bar/style.css";

# Add router events to examples/javatpoint-angular-8-tutorial/app/src/app/app.component.ts
# Add the ng2-slim-loading-bar directive inside examples/javatpoint-angular-8-tutorial/app/src/app/app.component.html

# Add a bootstrap form to examples/javatpoint-angular-8-tutorial/app/src/app/product-add/product-add.component.html

# Add Angular 8 Form Validation
# Import the ReactiveFormsModule inside app.module.ts
# Import the FormGroup, FormBuilder, Validators modules from @angular/forms and create a constructor and instantiate the FormBuilder in examples/javatpoint-angular-8-tutorial/app/src/app/product-add/product-add.component.ts
# Modify examples/javatpoint-angular-8-tutorial/app/src/app/product-add/product-add.component.html to have form validation rules

# Configure the HttpClientModule so our front end can make HTTP requests
# Import the HttpClientModule inside app.module.ts

# Create a model file - examples/javatpoint-angular-8-tutorial/app/src/app/product.ts
# Create a service file
$ ng g service products --skipTests=true
# Import the products service inside app.module.ts

# Modify the products service to submit data to a TBD back-end server
# Add the click event to examples/javatpoint-angular-8-tutorial/app/src/app/product-add/product-add.component.html
# Add the addProduct method to examples/javatpoint-angular-8-tutorial/app/src/app/product-add/product-add.component.ts

```

### Node.js back-end

```sh
# Navigate to our directory
$ cd examples/javatpoint-angular-8-tutorial

# Create a directory for our back-end server
$ mkdir api

# Navigate to the new directory
$ cd api
# Initialize our project
$ npm init
# Install modules
$ npm install express body-parser cors mongoose --save
$ npm install nodemon --save-dev
# Create a src directory for the initial implementation of our server
$ mkdir src
$ cd src

# Create examples/javatpoint-angular-8-tutorial/api/src/server.js

# Create a models directory
$ mkdir models
# Create a model for our Product class - examples/javatpoint-angular-8-tutorial/api/src/models/product.js

# Create a routes directory
$ mkdir routes
# Create routes for our product CRUD - 

```
