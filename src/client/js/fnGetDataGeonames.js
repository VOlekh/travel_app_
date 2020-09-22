//Function to get longitude and latitude
const baseURLGeonames = "http://api.geonames.org/searchJSON?";
const apiGeonamesUsername = "volekh";

async function getDataGeonames(to_city) {
    //Build url according to API call
    const requestUriGeonames = `${baseURLGeonames}&q=${to_city}&username=${apiGeonamesUsername}`;
    console.log(requestUriGeonames);
   //Receive response from Geomames API
   const response = await fetch(requestUriGeonames);
   try 
   {
      const data = await response.json();
      const first_entry = data.geonames[0];
      console.log(first_entry);
      return {
        latitude: first_entry.lat.slice(0,10),
        longitude: first_entry.lng.slice(0,10),
      }
   } 
   catch (error) 
   {
     console.log("error", error);
   }
   
 };

 export { getDataGeonames }

