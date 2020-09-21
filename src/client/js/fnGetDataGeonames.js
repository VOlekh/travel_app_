//Function to get longitude and latitude
const baseURLGeonames = "http://api.geonames.org/search?";
const apiGeonamesUsername = "volekh";
const getDataGeonames = async (to_city) => {
    //Build url according to API call
    const requestUriGeonames = `${baseURLGeonames}&q=${to_city}&username=${apiGeonamesUsername}`;
    console.log(requestUriGeonames);
   //Receive response from Geomames API
   const response = await fetch(requestUriGeonames);
   try {
     const data = await response.json();
     data = data.geonames[0];
     console.log(data);
     return{
       latitude: data.lat.sliice(0,10),
       longitude: data.lng.sliice(0,10),
     }
   } catch (error) {
     console.log("error", error);
   }
   
 };

