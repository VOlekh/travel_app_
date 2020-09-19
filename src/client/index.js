/* Global Variables */
const fetch = require('node-fetch');
const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
const baseURLGeonames = "http://api.geonames.org/search?";
const baseURLWeatherbit = "http://api.weatherbit.io/v2.0/current?";

// Personal API Key for OpenWeatherMap API, Username for Geonames API, Key for Weatherbit
const apiKey = "26a266564be9e4c420e48fc2a76ce2ec&units=imperial";
const apiGeonamesUsername = "volekh";
const apiWeatherbitKey = "fbfa2496a431462c93000bf275d3ca52";

//Import functions for OpenWeatherMap API
//import { performAction } from './js/fnPerformAction'
//import { getData } from './js/fnGetData'
//Import functions for Geonames API
import { performActionGeonames } from './js/fnPerformActionGeonames.js'
import { getDataGeonames } from './js/fnGetDataGeonames.js'
import { postData } from './js/fnPostData.js'
import { retrieveData } from './js/fnRetrieveData.js'
import { updateUI } from './js/fnUpdateUI'

import './styles/style.scss'

// Event listener to add function to existing HTML DOM element
//document.getElementById("generate").addEventListener("click", performAction);
// Event listener to add function to existing HTML DOM element for Geonames
document.getElementById("generate").addEventListener("click", performActionGeonames);
alert("I EXIST")

//console.log(performAction);
//console.log(getData);
//Consolelog functions for Geonames API
// console.log(performActionGeonames);
// console.log(getDataGeonames);
// console.log(postData);
// console.log(retrieveData);
// console.log(updateUI);

console.log("CHANGE!!");


//Export functions for OpenWeatherMap API
export {
    //performAction,
    //getData,
//Export functions for Geonames API
    performActionGeonames,
    getDataGeonames,
    postData,
    retrieveData,
    updateUI,
   }
