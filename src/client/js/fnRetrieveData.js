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
