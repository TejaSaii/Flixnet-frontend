# Flixnet - a minimal OTT platform clone
[Hosted here](https://lighthearted-churros-32fcbc.netlify.app/)

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

![localhost_4200_signup](https://github.com/TejaSaii/Flixnet-frontend/assets/116777552/6e55ae04-77ae-4123-98dc-dcf097c2a4b3)
![localhost_4200_signup (2)](https://github.com/TejaSaii/Flixnet-frontend/assets/116777552/62ab0677-06b7-47e3-adb0-73cd3665a804)
![localhost_4200_signup (3)](https://github.com/TejaSaii/Flixnet-frontend/assets/116777552/c1e7f07a-64c4-4680-ba5a-b3328c4a341d)


## Technologies Used

* JWT
* Angular & Angular CLI 17
* MongoDB 
* Express
* Node.js
* npm
* Typescript
* HTML/CSS
* Bootstrap

Note - This is the front-end part of the repo, for backend part [click here](https://github.com/TejaSaii/FlixNet)

## Build Process

* `npm i` to install all the dependencies.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
* Now the front-end part is live locally.
* For backend build process and source code [click here](https://github.com/TejaSaii/FlixNet)
* `ng build` to build the project which compiles TS files to JS under /dist folder
