// Require Express to run server and routes
//The project file server.js should require express()
const express = require("express");
//NOT DEFINED The Express app instance should be pointed to the project folder with .html, .css, and .js files.

// Start up an instance of app
//The project file server.js should create an instance of their app using express.
//update your server js to access the dist folder
const app = express();
app.use(express.static("dist"));
console.log(__dirname);

/* Middleware*/
//The body-parser package should be installed and included in the project.
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
//The instance of the app should be setup to use cors()
const cors = require("cors");
app.use(cors());

//NOT AS IT IS NOW The Express app instance should be pointed to the project folder with .html, .css, and .js files.
// Initialize the main project folder
//app.use(express.static("website"));

// Spin up the server
//Local server should be running and producing feedback to the Command Line

const port = 8080;
const server = app.listen(port, listening);
function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}

const fetch = require("node-fetch");
const baseURLPixabay = "https://pixabay.com/api/?";
const apiPixabayKey = "18393364-b93a8cbe009d33fa4364578e1";

app.get("/picture", async (request, response) => {
  const requestUriPixabay = `${baseURLPixabay}key=${apiPixabayKey}&q=${request.query.city}&image_type=photo`;
  console.log(requestUriPixabay);
  try {
    const result = await fetch(requestUriPixabay);
    const data = await result.json();
    const entry = data.hits[0];
    console.log(entry);
    response.json({
      imageURL: entry.largeImageURL,
    });
  } catch (error) {
    console.log("error", error);
  }
});

// app.get("/", function (req, res) {
//   console.log("Hello!");
//   res.sendFile("dist/index.html");
// });

 //export{app}