//Function to get country info, works with restcountries api
const baseURLRestcountries = "https://restcountries.eu/rest/v2/name/";

const getDataPixabay = async (to_city) => {
   const requestUriRestcountries = `${baseURLRestcountries}${to_city}`;
   const response = await fetch(requestUriRestcountries);
   try {
     const data = await response.json();
     data = data.geonames[0];
     console.log(data);
     return{
      name: data.country,
      region: data.region,
      subregion: data.subregion,
      population: data.population,
      currencies: data.currencies,
      flag: data.flag_url,      
     }
   } catch (error) {
     console.log("error", error);
   }
   
 };

