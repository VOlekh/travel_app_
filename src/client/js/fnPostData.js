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
