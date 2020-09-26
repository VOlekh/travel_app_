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

// A function that puts trip info on to the page
function updateUI(trip, weather, pictureUrl, country_info) {
  document.getElementById("trip_image").src = pictureUrl;

  // document.getElementById("max_temp").innerHTML = trip.max_temp;
  // document.getElementById("min_temp").innerHTML = trip.min_temp;

//Change date as string in to date as date  format
  const start_date_str = document.getElementById("start_date").value;
  const start_date_td = new Date(start_date_str);

  const end_date_str = document.getElementById("end_date").value;
  const end_date_td = new Date(end_date_str);

//Call calculate trip days function
  const trip_days = calculateTripDays(start_date_td, end_date_td);
  console.log("Trip length:", trip_days);

//Call calculate trip countdown
  const trip_countdown = calculateCountdown(start_date_td);
  console.log("Trip countdown:", Math.floor(trip_countdown));
  document.getElementById("countdown").innerHTML = Math.floor(trip_countdown);

  var output = document.getElementsByClassName("output")[0],
    newdiv = document.createElement("div"); //create a div
  newdiv.id = "newdiv"; //add an id
  output.appendChild(newdiv); //append to the doc.body
  output.insertBefore(newdiv, output.firstChild); //OR insert it
}

export { updateUI };
