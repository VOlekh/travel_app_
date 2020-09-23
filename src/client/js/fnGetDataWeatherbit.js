//Function to get Historical weather from the server. Works with Weatherbit api
const baseURLWeatherbit = "http://api.weatherbit.io/v2.0/history/daily";
const proxyURLCors = "https://cors-anywhere.herokuapp.com/";
const apiWeatherbitKey = "fbfa2496a431462c93000bf275d3ca52";

async function getDataWeatherbit(latitude, longitude, start_date, end_date) {
    const requestUriWeatherbit = `${proxyURLCors}${baseURLWeatherbit}?lat=${latitude}&lon=${longitude}&start_date=${start_date}&end_date=${end_date}&key=${apiWeatherbitKey}`;
    console.log(requestUriWeatherbit);
   const response = await fetch(requestUriWeatherbit);
   try{
     const result = await response.json();
    console.log(result)
     const weather_data = result.data[0];
    //  console.log(second_entry);
     return{
       max_temp: weather_data.max_temp,
       min_temp: weather_data.min_temp,
     }
   } catch (error) {
     console.log("error", error);
   }
 };

 export {getDataWeatherbit}

