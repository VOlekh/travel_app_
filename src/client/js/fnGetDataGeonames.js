//Function to get Data from the server. Works with Geomames api
const baseURLGeonames = "http://api.geonames.org/search?";
const apiGeonamesUsername = "volekh";
const getDataGeonames = async (baseURLGeonames, countryCode, newToCity, apiGeonamesUsername) => {
    //Build url according to API call
    const requestUriGeonames = `${baseURLGeonames}&q=${newToCity}&username=${apiGeonamesUsername}`;
    console.log(requestUriGeonames);
   //Receive response from Geomames API
   const response = await fetch(requestUriGeonames);
   try {
     const data = await response.json();
     data = data.geonames[0];
     console.log(data);
     return{
       city:data.name,
       latitude: data.lat.sliice (0,10),
       longitude: data.lng.sliice(0,10),
       countryCode: data.countryCode,
     }
   } catch (error) {
     console.log("error", error);
   }
   
 };

