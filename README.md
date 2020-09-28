# Travel App Project

## Project Description
Capstone Project.
A custom travel app requires to create an asynchronous web app that uses Web API and user data to dynamically update the UI. The project is JavaScript heavy and requires clean and appealing HTML/CSS, targeting the DOM, working with objects, and retrieving data from 3 APIs in which one of those is reliant on another to work. Finally, tall the above done in a Webpack environment, using an express server, and wrapped up with service workers.

## Table of Contents
* [Project Description](#project_description)
* [How to Run](#how_to_run)
* [APIs Required](#APIs_required)
* [Langauges, tools, frameworks used](#langauges_tools_frameworks_used)
* [Design](#design)



## How to Run
- Run ```npm install```
- Start the node server ```npm run start```
- Run the application in development mode ```npm run dev```
- Run testing```npm run test``` 


## APIs Required
- Geonames API getting longitude and latitude of searched location, entered by a user.
    - http://api.geonames.org/searchJSON?formatted=true&q=CITY&username=USERNAME&style=full

- Weatherbit API used for Historical Weather Forecasts.
uses latitude and longitude information from previous API
    - https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY

- Pixabay API returns pictures for searched location.
    - https://pixabay.com/api/?key=API_KEY&q=PLACE&image_type=photo

- Rest Countries sends back Country Information.
    - https://restcountries.eu/rest/v2/name/{name}


## Langauges, frameworks and tools used:
- JavaScript
- HTML
- CSS(SASS)
- Webpack
- Node.js(Express)
- Jest
- Babel


## Design
![image](img/Travel_app.gif)
