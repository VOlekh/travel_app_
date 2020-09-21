// A function that puts trip info on to the page
function updateUI(trip)
{
  document.getElementById("latitude").innerHTML = trip.latitude;
  document.getElementById("pageURL").innerHTML = trip.pageURL;
  document.getElementById("max_temp_ts").innerHTML = trip.max_temp_ts;
  document.getElementById("min_temp_ts").innerHTML = trip.max_temp_ts;

}