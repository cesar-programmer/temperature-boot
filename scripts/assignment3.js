/* eslint-disable no-unused-vars */
function convertTemperature () {
  const temperature = Number(document.getElementById('temperatureInput').value)
  const temperatureScale = document.getElementById('temperatureScale').value

  if (temperatureScale === 'c') {
    const fahrenheit = (temperature * 9 / 5) + 32
    document.getElementById('result').innerHTML = `<p>The conversion of Celsius ${temperature}° to Fahrenheit is ${fahrenheit.toFixed(2)}°</p>`
  } else {
    const celsius = (temperature - 32) * 5 / 9
    document.getElementById('result').innerHTML = `<p>The conversion of Fahrenheit ${temperature}° to Celsius is ${celsius.toFixed(2)}°</p>`
  }

  const temperatureLevel = document.getElementById('temperatureLevel')

  const coldF = 32
  const warmF = 80
  const hotF = 200

  let tempFahrenheit = temperature

  // If the scale is Celsius, convert to Fahrenheit for color logic.
  if (temperatureScale === 'c') {
    tempFahrenheit = (temperature * 9 / 5) + 32
  }

  // Calculate the percentage of the temperature in the total range.
  let heightPercent = (tempFahrenheit / hotF) * 100
  heightPercent = Math.min(Math.max(heightPercent, 5), 100) // Limits between 5 and 100 to avoid overflow.

  // Applies the percentage to the thermometer
  temperatureLevel.style.height = `${heightPercent}%`

  // Assigns a color based on the temperature.
  if (tempFahrenheit < coldF) {
    temperatureLevel.style.backgroundColor = 'blue'
  } else if (tempFahrenheit < warmF) {
    temperatureLevel.style.backgroundColor = 'green'
  } else if (tempFahrenheit < hotF) {
    temperatureLevel.style.backgroundColor = 'yellow'
  } else {
    temperatureLevel.style.backgroundColor = 'red'
  }
}

const temperatureScaleSelect = document.getElementById('temperatureScale')
const temperatureInput = document.getElementById('temperatureInput')

temperatureScaleSelect.addEventListener('change', function () {
  if (this.value === 'c') {
    temperatureInput.placeholder = 'Celsius to Fahrenheit'
  } else if (this.value === 'f') {
    temperatureInput.placeholder = 'Fahrenheit to Celsius'
  }
})
