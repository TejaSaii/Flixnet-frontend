# Flixnet - an OTT platform clone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

## Key Features
* A SignUp page for new users to register into the application using Email, Password and Age
* A Login page for users to login into the application using Email and Password
* A Dashboard which shows the list of all the Movies and TV Shows present in the DB
* Filtering - Users can filter the list by selecting Movies / TV Shows option from the Navbar
* Searching - Users can search using the searchbar which gets the list based on Media Title and Cast name
* Restriction on 'R' rated content for users who are less than 18 years of age
* Searching and filtering also works when used at once, For Ex: Selecting Movies from navbar and then Searching 'monkey' will give a list of Movies with Title / Cast including 'monkey' word.
* Pagination - Only 15 items are displayed per page, and user can move to next and previous pages and it also works when using with filtering and searching.
* Display page - When a Media is selected, details related to the Media are being displayed.

## Tech Stack


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).