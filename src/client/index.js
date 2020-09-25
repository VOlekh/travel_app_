/* Global Variables */
const fetch = require('node-fetch');
const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
const baseURLGeonames = "http://api.geonames.org/search?";
const baseURLWeatherbit = "http://api.weatherbit.io/v2.0/history/daily";

// Personal API Key for OpenWeatherMap API, Username for Geonames API, Key for Weatherbit
const apiKey = "26a266564be9e4c420e48fc2a76ce2ec&units=imperial";
const apiGeonamesUsername = "volekh";
const apiWeatherbitKey = "fbfa2496a431462c93000bf275d3ca52";


//Import functions
import { generateTripReport } from './js/fnGenerateTripReport.js'
import { getDataGeonames } from './js/fnGetDataGeonames.js'
import { getDataWeatherbit } from './js/fnGetDataWeatherbit.js'
import { getDataPixabay } from './js/fnGetDataPixabay'
import { updateUI } from './js/fnUpdateUI'

import './styles/style.scss'

function isTextElementValueSet(elementId)
{
    return document.getElementById(elementId).value != ""
}

// The start date is in future or today?
function isStartDateInFutureOrNow(start_date) 
{
  var current_date = new Date();
  var start_date  = new Date();
//   alert ('ERROR: Date must not be in past');
    if (start_date >= current_date ) 
    {
       return true;
    } else {
        return false;
    }
}

function calculateTripDays(start_date, end_date)
{
    var start_date = new Date();
    var end_date = new Date();
    var days_difference = (end_date.getTime() - start_date.getTime())/ (1000 * 3600 * 24);
    return days_difference;
}

function calculateCountdown(start_date)
{
    var start_date = new Date();
    var current_date = new Date();
    var days_countdown = (start_date.getTime() - current_date.getTime())/ (1000 * 3600 * 24);
    return days_countdown;

}

function isInputValid()
{
    const from_city_is_set = isTextElementValueSet("from_city")
    const to_city_is_set = isTextElementValueSet("to_city")
    const start_date_is_set = isTextElementValueSet("start_date")
   // call is start date in future function
  
    const start_date_in_future = isStartDateInFutureOrNow("start_date")
   // collect all check parameters with and
    const all_elements_are_set = from_city_is_set && to_city_is_set && start_date_is_set && start_date_in_future;
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


const trip_days= calculateTripDays("start_date", "end_date");
console.log(trip_days);

const trip_countdown = calculateCountdown("start_date");
console.log(trip_countdown);



//Export functions
export 
{
    generateTripReport,
    enableGenerateTripReportButton,
}
