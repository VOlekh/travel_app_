// Function called by event listener (named call back function)
async function performActionGeonames(e) {
    const newZip = document.getElementById("city").value;
    const countryCode = "de";
  
    /* Function to GET Web API Data*/
    const data = await getDataGeonames(baseURLGeonames, countryCode, newCity, apiGeonamesUsername);
  
    console.log(data);
  
    const temp = data["main"]["temp"];
    let d = new Date();
    let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
    const feelings = document.getElementById("feelings").value;
  
    await postDataGeonames("http://localhost:8000/weather", {
      temperature: temp,
      date: newDate,
      feelings: feelings,
    });
    await updateUI();
  }

  async function performActionGeonames(e) {
    const newCity = document.getElementById("city").value;
    const countryCode = "de";
  
    /* Function to GET Web API Data*/
    const data = await getDataGeonames(baseURLGeonames, countryCode, newCity, apiGeonamesUsername);
  
    console.log(data);
  
    const temp = data["main"]["temp"];
    let d = new Date();
    let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
    const feelings = document.getElementById("feelings").value;
  
    await postDataGeonames("http://localhost:8000/weather", {
      temperature: temp,
      date: newDate,
      feelings: feelings,
    });
    await updateUI();
  }