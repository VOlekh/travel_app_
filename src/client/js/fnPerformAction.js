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
    // const feelings = document.getElementById("feelings").value;
  
    await postData("http://localhost:8000/weather", {
      temperature: temp,
      date: newDate,
    //  feelings: feelings,
    });
    await updateUI();
  }

  async function performAction(e) {
    const newZip = document.getElementById("zip").value;
    const countryCode = "de";
  }