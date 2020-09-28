
function isTextElementValueSet(elementId) {
    return document.getElementById(elementId).value != "";
  }
  
  // The start date is in future or today?
  function isStartDateInFutureOrNow(start_date) {
    var current_date = new Date();
    if (start_date.getTime() >= current_date.getTime()) {
      return true;
    } else {
      return false;
    }
  }
  
  // Validate input
  function isInputValid() {
    const from_city_is_set = isTextElementValueSet("from_city");
    const to_city_is_set = isTextElementValueSet("to_city");
    const start_date_is_set = isTextElementValueSet("start_date");
    // call is start date in future function
    // change string in to date
    const start_date_str = document.getElementById("start_date").value;
    const start_date_td = new Date(start_date_str);
    // console.log(start_date_td)
    // use as parameter date = type date
    const start_date_in_future = isStartDateInFutureOrNow(start_date_td);
    // collect all check parameters with and
    const all_elements_are_set =
      from_city_is_set &&
      to_city_is_set &&
      start_date_is_set &&
      start_date_in_future;
    return all_elements_are_set;
  }

  export {isInputValid, isStartDateInFutureOrNow, isTextElementValueSet}