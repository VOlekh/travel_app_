// Import functions
import { generateTripReport } from "./js/fnGenerateTripReport.js";
import { isInputValid } from "./js/validation"

import "./styles/style.scss";

function enableGenerateTripReportButton() {
  const generate_report_button = document.getElementById("generate");
  generate_report_button.disabled = !isInputValid();
}

//Generate button event listener
const generate_report_button = document.getElementById("generate");
generate_report_button.addEventListener("click", generateTripReport);
generate_report_button.disabled = true;

document
  .getElementById("from_city")
  .addEventListener("change", enableGenerateTripReportButton);
document
  .getElementById("to_city")
  .addEventListener("change", enableGenerateTripReportButton);
document
  .getElementById("start_date")
  .addEventListener("change", enableGenerateTripReportButton);
document
  .getElementById("end_date")
  .addEventListener("change", enableGenerateTripReportButton);

//Export functions
export { generateTripReport, enableGenerateTripReportButton };