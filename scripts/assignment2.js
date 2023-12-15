/* eslint-disable no-unused-vars */
function convertToFahrenheit () {
  const temperature = Number(prompt('Enter temperature in Celsius:'))

  const fahrenheit = (temperature * 9 / 5) + 32

  document.getElementById('result').innerHTML = `<p>The conversion of Celsius ${temperature}° to Fahrenheit is ${fahrenheit}°</p>`
}
