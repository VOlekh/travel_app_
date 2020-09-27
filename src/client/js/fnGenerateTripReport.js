// collect data from all apis and call function that update apis
const { getDataWeatherbit } = require("./fnGetDataWeatherbit");
import { getDataGeonames } from "./fnGetDataGeonames";
import { getPictureFromLocalServer } from "./fnGetDataPixabay";
import { getCountryInfo } from "./fnGetCountryInfo";
import { updateUI } from "./fnUpdateUI";

// Function called by event listener (named call back function)
async function generateTripReport(event) {
  // object containing all trip data
  let trip = {
    to_city: document.getElementById("to_city").value,
    from_city: document.getElementById("from_city").value,
    start_date: new Date(document.getElementById("start_date").value),
    end_date: new Date(document.getElementById("end_date").value),
  };

  // call get latitude / longitude
  const geo = await getDataGeonames(trip.to_city);
  // console.log(geo);

  // call func to get weather in target city
  const weather = await getDataWeatherbit(
    geo.latitude,
    geo.longitude,
    trip.start_date,
    trip.end_date
  );
  // console.log(weather);

  //call get picture url
  const picture_data = await getPictureFromLocalServer(trip.to_city);
  console.log(picture_data.imageURL);
  const pictureUrl = picture_data.imageURL;

  //call get country info function
  const country_info = await getCountryInfo(geo.countryName);
  console.log(country_info);

  // call get flights data

  // show all trip data on UI
  updateUI(trip, weather, pictureUrl, country_info);
}

export { generateTripReport };
