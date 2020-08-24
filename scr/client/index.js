/* Global Variables */

const baseURL = "http://api.openweathermap.org/data/2.5/weather?";

// Personal API Key for OpenWeatherMap API
const apiKey = "26a266564be9e4c420e48fc2a76ce2ec&units=imperial";

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", performAction);
alert("I EXIST")

import { performAction } from './js/fnPerformAction'
import { getData } from './js/fnGetData'
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

export {
    performAction,
    getData,
    postData,
    retrieveData,
    updateUI,
   }
