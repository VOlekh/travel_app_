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
