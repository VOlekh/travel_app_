// collect data from all apis and call function that update apis 
const { getDataWeatherbit } = require("./fnGetDataWeatherbit");

// Function called by event listener (named call back function)
async function generateTripReport(event) {
    console.log("Hello");
    // object containing all trip data
    let trip = {
        to_city: document.getElementById("to_city").value,
        from_city: document.getElementById("from_city").value,
        start_date: document.getElementById("start_date").value,
        end_date: document.getElementById("end_date").value
    };

    console.log(trip.end_date);
      
    // call get latitude / longitude
    const geo = await getDataGeonames(trip.to_city);
    console.log(geo);
    // the rest comment and check that ge is written in console log

    // call func to get weather in target city
    // const weather = await getDataWeatherbit(geo.latitude, geo.longitude, trip.start_date, trip.end_date);
    // trip.max_temp = weather.max_temp;
    // trip.min_temp = weather.min_temp;

    //call get picture url
    // const pictire = await getDataPixabay(baseURLPixabay, apiPixabayKey,to_city);

    //call get flights data

    // put all needed data into trip
    // etc

    // show all trip data on UI
    // updateUI(trip);
}

export {generateTripReport}
