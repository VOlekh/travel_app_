//Function to get Data from the server. Works with Geomames api
const getDataGeonames = async (baseURLGeonames, countryCode, newCity, apiGeonamesUsername) => {
    //Build url according to API call
    const requestUriGeonames = `${baseURLGeonames}, country=${countryCode},&q=${newCity},&username=${apiGeonamesUsername}`;
   //Receive response from Geomames API
   const response = await fetch(requestUriGeonames);
   try {
     const data = await response.json();
     console.log(data);
     return data;
   } catch (error) {
     console.log("error", error);
   }
 };

