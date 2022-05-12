// grabs html file at meter ID
let meterEl = document.getElementById("meter");
// grabs html file at liter ID
let literEl = document.getElementById("liter");
// grabs html file at kilo ID
let kiloEl = document.getElementById("kilo");
// grabs the value of the number input
let values = document.getElementById("number").value;

function updateValue() {
  values = document.getElementById("number").value;
  // Makes sure i don't get null values
  if (values === "" || values > 9999) {
    values = 0;
  }
  // Meter/feet text injection and conversion math
  meterEl.textContent = `${values} meter = ${(values * 3.281).toFixed(
    3
  )} feet | ${values} feet = ${(values / 3.281).toFixed(3)} meter`;
  // liter/gallon text injection and conversion math
  literEl.textContent = `${values} liter = ${(values * 0.264).toFixed(
    3
  )} gallon | ${values} gallon = ${(values / 0.264).toFixed(3)} liter`;
  // kilo/pound text injection and conversion math
  kiloEl.textContent = `${values} kilo = ${(values * 2.204).toFixed(
    3
  )} pounds | ${values} pounds = ${(values / 2.204).toFixed(3)} kilo`;
}
