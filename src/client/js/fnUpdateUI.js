function calculateTripDays(start_date, end_date) {
  var days_difference =
    (end_date.getTime() - start_date.getTime()) / (1000 * 3600 * 24);
  return days_difference;
}

function calculateCountdown(start_date) {
  var current_date = new Date();
  var days_countdown =
    (start_date.getTime() - current_date.getTime()) / (1000 * 3600 * 24);
  return days_countdown;
}

//A function that puts trip info on to the page
function updateUI(trip, weather, pictureUrl, country_info) {
  console.log(trip);
  console.log(weather);
  console.log(pictureUrl);
  console.log(country_info);

  document.getElementById("trip_image").src = pictureUrl;

  //Call calculate trip days function
  const trip_days = calculateTripDays(trip.start_date, trip.end_date);
  console.log("Trip length:", trip_days);

  //Call calculate trip countdown
  const trip_countdown = calculateCountdown(trip.start_date);
  const trip_countdown_math = Math.floor(trip_countdown);
  console.log("Trip countdown:", trip_countdown_math);
  //document.getElementById("countdown").innerHTML = Math.floor(trip_countdown);

  //Generate Html
  var output = document.getElementsByClassName("output")[0];
  console.log(output);

  var elem = document.getElementById("trip_initial_text");
  console.log(elem);
  elem.parentNode.removeChild(elem);

  var new_h2 = document.createElement("h2"); //create h2
  new_h2.id = "my_trip"; //add an id
  new_h2.textContent = "My trip";
  output.appendChild(new_h2);

  var new_p = document.createElement("p"); //create p
  new_p.classList.add("from_to_city"); //add class
  new_p.textContent = `From:  ${trip.from_city} to: ${trip.to_city}`;
  output.appendChild(new_p);

  var new_p2 = document.createElement("p");
  new_p2.classList.add("countdown_and_trip_length_class");
  new_p2.textContent = `my ${trip_days} days trip starts in ${trip_countdown_math} days`;
  output.appendChild(new_p2);

  var new_h3 = document.createElement("h3");
  new_h3.textContent = `Departing: ${trip.start_date}`;
  output.appendChild(new_h3);

  var new_p3 = document.createElement("p");
  new_p3.textContent = `Typical historical weather for that day is: ${weather.min_temp} C, ${weather.max_temp} C`;
  output.appendChild(new_p3);

  var new_h4 = document.createElement("h3");
  new_h4.textContent = `Information abot the country:`;
  output.appendChild(new_h4);

  var new_p4 = document.createElement("p");
  new_p4.textContent = `Country: ${country_info.country}`;
  output.appendChild(new_p3);

  var new_p5 = document.createElement("p");
  new_p5.textContent = `Capital: ${country_info.capital}`;
  output.appendChild(new_p5);

  var new_p6 = document.createElement("p");
  new_p6.textContent = `Population: ${country_info.population}`;
  output.appendChild(new_p6);

  var new_p7 = document.createElement("p");
  new_p7.textContent = `Currency: ${country_info.currency.code}`;
  output.appendChild(new_p7);

  var new_div = document.createElement("div");
  new_div.classList.add("flag_image_div");
  output.appendChild(new_div);

  var new_img = document.createElement("img");
  new_img.classList.add("flag_image");
  //var FlagPictureUrl =
  //  "https://img.fcbayern.com/image/upload/f_auto,q_auto/t_product-superzoom/eCommerce/produkte/11851/fahne-logo-90x60-cm.jpg";
  new_img.src = country_info.flag;
  new_img.alt = "flag image";
  new_div.appendChild(new_img);
}

export { updateUI };
