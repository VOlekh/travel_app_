/* Global Variables */

const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
const baseURLGeonames = "http://api.geonames.org/search?";


// Personal API Key for OpenWeatherMap API, Username foe Geonames API
const apiKey = "26a266564be9e4c420e48fc2a76ce2ec&units=imperial";
const apiGeonamesUsername = "volekh";

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", performAction);
alert("I EXIST")

//Import functions for OpenWeatherMap API
//import { performAction } from './js/fnPerformAction'
//import { getData } from './js/fnGetData'
//Import functions for Geonames API
import { performActionGeonames } from './js/fnPerformActionGeonames'
import { getDataGeonames } from './js/fnGetDataGeonames'

import { postData } from './js/fnPostData'
import { retrieveData } from './js/fnRetrieveData'
import { updateUI } from './js/fnUpdateUI'
import './styles/style.scss'



console.log(performAction);
console.log(getData);
console.log(postData);
console.log(retrieveData);
console.log(updateUI);

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
