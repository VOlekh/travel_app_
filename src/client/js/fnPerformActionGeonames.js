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

  
    await postData("http://localhost:8000/weather", {
      temperature: temp,
      date: newDate,
     
    });
    await updateUI();
  }