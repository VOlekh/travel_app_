//Function to get Historical weather from the server. Works with Weatherbit api
const baseURLWeatherbit = "http://api.weatherbit.io/v2.0/history/daily";
const apiWeatherbitKey = "fbfa2496a431462c93000bf275d3ca52";
const getDataWeatherbit = async (latitude, longitude, start_date, end_date) => {
    const requestUriWeatherbit = `${baseURLWeatherbit}&lat=${latitude}&lon=${longitude}&start_date=${start_date}&start_date=${end_date}&key=${apiWeatherbitKey}`;
    console.log(requestUriWeatherbit);
   const response = await fetch(requestUriWeatherbit);
   try {
     const data = await response.json();
     data = data.geonames[0];
     console.log(data);
     return{
       max_temp: data.max_temp_ts.sliice(2,1),
       min_temp: data.min_temp_ts.sliice(2,1),
     }
   } catch (error) {
     console.log("error", error);
   }
 };

 export { getDataWeatherbit }
