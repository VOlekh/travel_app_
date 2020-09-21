//Function to get Pictures works with Pixabay api
const baseURLPixabay = "https://pixabay.com/api/?";
const apiPixabayKey = "18393364-b93a8cbe009d33fa4364578e1";
const getDataPixabay = async (baseURLPixabay, apiPixabayKey,to_city) => {
    //Build url
    const requestUriWPixabay = `${baseURLWeatherbit}key=${apiPixabayKey},&q=${to_city}&image_type=photo`;
    console.log(requestUriWPixabay);
   const response = await fetch(requestUriWeatherbit);
   try {
     const data = await response.json();
     data = data.geonames[0];
     console.log(data);
     return{
      pageURL:  data.pageURL,
     }
   } catch (error) {
     console.log("error", error);
   }
   
 };

