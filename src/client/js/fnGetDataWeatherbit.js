import { call } from "file-loader";

//Function to get Historical weather from the server. Works with Weatherbit api
const baseURLWeatherbit = "http://api.weatherbit.io/v2.0/history/daily";
const proxyURLCors = "https://cors-anywhere.herokuapp.com/";
const apiWeatherbitKey = "fbfa2496a431462c93000bf275d3ca52";

// Format date in to YYYY-MM-DD
// from https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
function formatDate(d) {
  var month = '' + (d.getMonth() + 1);
  var day = '' + d.getDate();
  var year = '' + d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
};

async function getDataWeatherbit(latitude, longitude, start_date) {
  var plus_one_day = new Date(start_date);
  plus_one_day.setDate(plus_one_day.getDate() + 1);

  //call Format date function
  const start_date_formatted = formatDate(start_date);
  const plus_one_day_formatted = formatDate(plus_one_day)

  const requestUriWeatherbit = `${proxyURLCors}${baseURLWeatherbit}?lat=${latitude}&lon=${longitude}&start_date=${start_date_formatted}&end_date=${plus_one_day_formatted}&key=${apiWeatherbitKey}`;
  console.log(requestUriWeatherbit);
   const response = await fetch(requestUriWeatherbit);
   try{
     const result = await response.json();
     console.log(result)
     if (Object.keys(result.data).length == 0)
     {
        return{
          max_temp: "No data",
          min_temp: "No data",
        }
     }
     const weather_data = result.data[0];
     return{
       max_temp: weather_data.max_temp,
       min_temp: weather_data.min_temp,
     }
   } catch (error) {
     console.log("error", error);
   }
 };

 export {getDataWeatherbit}

