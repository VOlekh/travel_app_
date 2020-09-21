/* Global Variables */
const fetch = require('node-fetch');
const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
const baseURLGeonames = "http://api.geonames.org/search?";
const baseURLWeatherbit = "http://api.weatherbit.io/v2.0/history/daily";

// Personal API Key for OpenWeatherMap API, Username for Geonames API, Key for Weatherbit
const apiKey = "26a266564be9e4c420e48fc2a76ce2ec&units=imperial";
const apiGeonamesUsername = "volekh";
const apiWeatherbitKey = "fbfa2496a431462c93000bf275d3ca52";

//Import functions for OpenWeatherMap API
//import { performAction } from './js/fnPerformAction'
//import { getData } from './js/fnGetData'
//Import functions for Geonames API
import { generateTripReport } from './js/fnGenerateTripReport.js'
import { getDataGeonames } from './js/fnGetDataGeonames.js'
import { updateUI } from './js/fnUpdateUI'

import './styles/style.scss'

function isTextElementValueSet(elementId)
{
    return document.getElementById(elementId).value != ""
}

function isInputValid()
{
    const from_city_is_set = isTextElementValueSet("from_city")
    const to_city_is_set = isTextElementValueSet("to_city")
    const departure_date_is_set = isTextElementValueSet("departure_date")

    const all_elements_are_set = from_city_is_set && to_city_is_set && departure_date_is_set;
    return all_elements_are_set
}

function enableGenerateTripReportButton()
{
    const generate_report_button = document.getElementById("generate");
    generate_report_button.disabled = (!isInputValid());
}

// Event listener to add function to existing HTML DOM element
//document.getElementById("generate").addEventListener("click", performAction);
// Event listener to add function to existing HTML DOM element for Geonames
const generate_report_button = document.getElementById("generate")
generate_report_button.addEventListener("click", generateTripReport);
generate_report_button.disabled = true

document.getElementById("from_city").addEventListener('change', enableGenerateTripReportButton)
document.getElementById("to_city").addEventListener('change', enableGenerateTripReportButton)
document.getElementById("start_date").addEventListener('change', enableGenerateTripReportButton)
document.getElementById("end_date").addEventListener('change', enableGenerateTripReportButton)


//console.log(performAction);

console.log("CHANGE!!");


//Export functions
export {
    generateTripReport,
    getDataGeonames,
    updateUI,
    enableGenerateTripReportButton,
   }
