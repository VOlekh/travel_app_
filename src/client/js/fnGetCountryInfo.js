//Function to get country info, works with restcountries api
const baseURLRestcountries = "https://restcountries.eu/rest/v2/name/";

async function getCountryInfo(countryName) {
  const requestUriRestcountries = `${baseURLRestcountries}${countryName}`;
  console.log(requestUriRestcountries);
  const response = await fetch(requestUriRestcountries);
  try {
    const data = await response.json();
    const info = data[0];
    console.log(info);
    return {
      country: info.name,
      capital: info.capital,
      region: info.region,
      subregion: info.subregion,
      population: info.population,
      currencies: info.currencies,
      flag: info.flag,
    };
  } catch (error) {
    console.log("error", error);
  }
}

export { getCountryInfo };
