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
//   alert ('ERROR: Date must not be in past');
    if (start_date.getTime() >= current_date.getTime()) 
    {
       return true;
    } else {
        return false;
    }
}


// Validate input
function isInputValid()
{
    const from_city_is_set = isTextElementValueSet("from_city")
    const to_city_is_set = isTextElementValueSet("to_city")
    const start_date_is_set = isTextElementValueSet("start_date")
   // call is start date in future function
    // change string in to date
    const start_date_str = document.getElementById("start_date").value;
    const start_date_td = new Date(start_date_str)
    // console.log(start_date_td)
    //use as parameter date = type date
    const start_date_in_future = isStartDateInFutureOrNow(start_date_td);
   // collect all check parameters with and
    const all_elements_are_set = from_city_is_set && to_city_is_set && start_date_is_set && start_date_in_future;
    return all_elements_are_set
}

function enableGenerateTripReportButton()
{
    const generate_report_button = document.getElementById("generate");
    generate_report_button.disabled = (!isInputValid());
}

// function testUIGeneration()
// {
//     var output = document.getElementsByClassName("output")[0];
//     console.log(output);

//     var new_h2 = document.createElement("h2"); //create h2
//     new_h2.id = "my_trip"; //add an id
//     new_h2.textContent = 'My trip';
//     //document.getElementById("my_trip").innerHTML = "My trip";
//     output.appendChild(new_h2); //append to the doc.body
//     //output.insertBefore(new_h2, output.firstChild); //OR insert it
    
//     var new_p = document.createElement("p"); //create p
//     new_p.classList.add("from_to_city"); //add class
//     new_p.textContent = `From:  ${from_city} to: ${to_city}`;
//     output.appendChild(new_p);

//     var new_p2 = document.createElement("p");
//     var trip_days = "3";
//     var trip_countdown = "5";
//     new_p2.classList.add("countdown_and_trip_length_class"); 
//     new_p2.textContent = `my ${trip_days} days trip starts in ${trip_countdown} days`;
//     output.appendChild(new_p2);

//     var start_day = "24-06-2021";
//     var new_h3 = document.createElement("h3");
//     new_h3.textContent = `Departing: ${start_day}`;
//     output.appendChild(new_h3);

//     var new_p3 = document.createElement("p");
//     var temp_min = "3";
//     var temp_max = "5";
//     new_p3.textContent = `Typical historical weather for that day is: ${temp_min} C, ${temp_max} C`;
//     output.appendChild(new_p3);

//     var new_h4 = document.createElement("h3");
//     new_h4.textContent = `Information abot the country:`;
//     output.appendChild(new_h4);

//     var new_p4 = document.createElement("p");
//     var country = "Germany";
//     new_p4.textContent = `Country: ${country}`;
//     output.appendChild(new_p3);

//     var new_p5 = document.createElement("p");
//     var capital = "Amagama";
//     new_p5.textContent = `Capital: ${capital}`;
//     output.appendChild(new_p5);

//     var new_p6 = document.createElement("p");
//     var population = "12314324";
//     new_p6.textContent = `Population: ${population}`;
//     output.appendChild(new_p6);

//     var new_p7 = document.createElement("p");
//     var currency = "eu";
//     new_p7.textContent = `Currency: ${currency}`;
//     output.appendChild(new_p7);

//     var new_div = document.createElement("div");
//     new_div.classList.add("flag_image_div"); 
//     output.appendChild(new_div);

//     var new_img = document.createElement("img");
//     new_img.classList.add("flag_image");
//     var FlagPictureUrl = "https://img.fcbayern.com/image/upload/f_auto,q_auto/t_product-superzoom/eCommerce/produkte/11851/fahne-logo-90x60-cm.jpg";
//     new_img.src = FlagPictureUrl;
//     new_img.alt = "flag image";
//     new_div.appendChild(new_img);

// }

// Generate button event listener 
const generate_report_button = document.getElementById("generate")
generate_report_button.addEventListener("click", generateTripReport);
//generate_report_button.addEventListener("click", testUIGeneration);

generate_report_button.disabled = true

document.getElementById("from_city").addEventListener('change', enableGenerateTripReportButton)
document.getElementById("to_city").addEventListener('change', enableGenerateTripReportButton)
document.getElementById("start_date").addEventListener('change', enableGenerateTripReportButton)
document.getElementById("end_date").addEventListener('change', enableGenerateTripReportButton)



//Export functions
export 
{
    generateTripReport,
    enableGenerateTripReportButton,
}
