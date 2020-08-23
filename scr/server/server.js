// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
//The project file server.js should require express()
const express = require("express");

// Start up an instance of app
//The project file server.js should create an instance of their app using express.
const app = express();

//NOT DEFINED The Express app instance should be pointed to the project folder with .html, .css, and .js files.

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
app.use(express.static("website"));

// Spin up the server
//Local server should be running and producing feedback to the Command Line

const port = 8000;
const server = app.listen(port, listening);
function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}
// After that test your server by typing in terminal node starter.js

// Callback to debug

// Post method Route
// app.post('/', function (request, response) {
//     res.send('POST received')
//   });
//Add a POST route for adding a weather via the path ’/weather’ to an array named data. Create the array as well.
const data = [];
app.post("/weather", function (request, response) {
  console.log(request.body);
  projectData = request.body;
  response.send("POST received");
});

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get("/all", sendData);

function sendData(request, response) {
  response.send(projectData);
}
