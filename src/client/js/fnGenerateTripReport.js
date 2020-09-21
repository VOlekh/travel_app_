// collect data from all apis and call function that update apis 
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Function called by event listener (named call back function)
async function generateTripReport(trip) {
    console.log("Hello");

const newToCity = document.getElementById("to_city").value
const newFromCity = document.getElementById("from_city").value
const newStartDate = document.getElementById("start_date").value
const newEndDate = document.getElementById("end_date").value

// object containing all trip data
trip= {
  to_city = document.getElementById("to_city").value,
  from_city = document.getElementById("from_city").value,
  sart_date = document.getElementById("start_date").value,
  end_date = document.getElementById("end_date").value,
}

// call func to get weather in target city
const weather = await get_weather("newToCity");
  
// call get latitude / longitude
const data = await getDataGeonames(baseURLGeonames, newToCity, apiGeonamesUsername); 


//call get picture url
const pictire = await getDataPixabay(baseURLPixabay, apiPixabayKey,to_city);

//call get flights data

// put all needed data into trip
trip.countryCode = data.countryCode; 
// etc

// show all trip data on UI
updateUI(trip)

export { generateTripReport }