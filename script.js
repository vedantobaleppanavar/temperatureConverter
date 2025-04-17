const tempInput = document.getElementById("temp-imput");
const toFarenheit = document.getElementById("to-farenheit");
console.log(toFarenheit.checked);
const toCelcius = document.getElementById("to-celcius");
const result = document.getElementById("result");
let temp;
function convertTemp() {
  if (toFarenheit.checked) {
    temp = (tempInput.value * 9) / 5 + 32;
    result.textContent = `${temp.toFixed(1)}°F`;
  } else if (toCelcius.checked) {
    temp = ((tempInput.value - 32) * 5) / 9;

    result.textContent = `${temp.toFixed(1)}°C`;
  } else {
    result.textContent = "Select something to Convert";
  }
}
tempInput.addEventListener("input", convertTemp);
toFarenheit.addEventListener("change", convertTemp);
toCelcius.addEventListener("change", convertTemp);
