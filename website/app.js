/* Global Variables */

const baseURL = "http://api.openweathermap.org/data/2.5/weather?";

// Personal API Key for OpenWeatherMap API
const apiKey = "26a266564be9e4c420e48fc2a76ce2ec&units=imperial";

// Create a new date instance dynamically with JS

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener("click", performAction);

// Function called by event listener (named call back function)
async function performAction(e) {
  const newZip = document.getElementById("zip").value;
  const countryCode = "de";

  /* Function to GET Web API Data*/
  const data = await getData(baseURL, newZip, countryCode, apiKey);

  console.log(data);

  const temp = data["main"]["temp"];
  let d = new Date();
  let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
  const feelings = document.getElementById("feelings").value;

  await postData("http://localhost:8000/weather", {
    temperature: temp,
    date: newDate,
    feelings: feelings,
  });
  await updateUI();
}
//Function to get Data from the server
const getData = async (baseURL, newZip, countryCode, apiKey) => {
  //Build url according to API call
  const requestUri = `${baseURL}zip=${newZip},${countryCode}&appid=${apiKey}`;
  console.log(requestUri);

  //Receive response from API
  const response = await fetch(requestUri);
  try {
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// Function to POST data to the server
const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  console.log(response);
};

// Get all data from server
const retrieveData = async (url = "") => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const allData = await request.json();
    return allData;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// A function that puts new info on to the page

const updateUI = async () => {
  const request = await fetch("http://localhost:8000/all");
  try {
    const allData = await request.json();
    console.log(allData);
    document.getElementById("date").innerHTML = allData.date;
    document.getElementById("temp").innerHTML = allData.temperature;
    document.getElementById("content").innerHTML = allData.feelings;
  } catch (error) {
    console.log("error", error);
  }
};
