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
