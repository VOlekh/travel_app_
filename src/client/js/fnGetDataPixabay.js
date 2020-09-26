//Function to send  and receive picture from lockal server. Lockal server wirks with api
const baseURLLocalServer = "http://localhost:8000/picture";

async function getPictureFromLocalServer(to_city) {
   const requestUri = `${baseURLLocalServer}?city=${to_city}`;
   console.log(requestUri);
   const response = await fetch(requestUri);
   try {
     const data = await response.json();
     return data;
   } catch (error) {
     console.log("error", error);
   }
};

export { getPictureFromLocalServer };