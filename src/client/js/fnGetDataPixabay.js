//Function to get Pictures works with Pixabay api
const baseURLPixabay = "http://pixabay.com/api/?";
const proxyURLCors = "https://cors-anywhere.herokuapp.com/";
const apiPixabayKey = "18393364-b93a8cbe009d33fa4364578e1";

async function getDataPixabay(to_city) {
   const requestUriPixabay = `${baseURLPixabay}key=${apiPixabayKey},&q=${to_city}&image_type=photo`;
   console.log(requestUriPixabay);
   const response = await fetch(requestUriPixabay);
   try {
     const data = await response.json();
     const entry = data.pixabay[0];
     console.log(entry);
     return{
      pageURL:  entry.pageURL,
     }
   } catch (error) {
     console.log("error", error);
   }
   
};

export {getDataPixabay};