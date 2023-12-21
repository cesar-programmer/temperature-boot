/* eslint-disable no-unused-vars */
function convertTemperature () {
  const temperature = Number(document.getElementById('temperatureInput').value)
  const temperature2 = Number(document.getElementById('temperatureInput2').value)
  const temperatureScale = document.getElementById('temperatureScale').value

  if (temperatureScale === 'c') {
    let j = 0
    document.getElementById('result').innerHTML = ''
    for (let i = temperature; i <= temperature2; i++) {
      const fahrenheit = ((temperature + j) * 9 / 5) + 32
      document.getElementById('result').innerHTML += `<li>The conversion number ${j + 1} of Celsius ${i}° to Fahrenheit is ${fahrenheit.toFixed(2)}°</li>`
      j++
    }
  } else {
    let j = 0
    document.getElementById('result').innerHTML = ''
    for (let i = temperature; i <= temperature2; i++) {
      const celsius = ((temperature + j) - 32) * 5 / 9
      document.getElementById('result').innerHTML += `<li>The conversion number ${j + 1} of Fahrenheit ${i}° to Celsius is ${celsius.toFixed(2)}°</li>`
      j++
    }
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
const temperatureInput2 = document.getElementById('temperatureInput2')

temperatureScaleSelect.addEventListener('change', function () {
  if (this.value === 'c') {
    temperatureInput.placeholder = 'Celsius to Fahrenheit to start'
    temperatureInput2.placeholder = 'Celsius to Fahrenheit to end'
  } else if (this.value === 'f') {
    temperatureInput.placeholder = 'Fahrenheit to Celsius to start'
    temperatureInput2.placeholder = 'Fahrenheit to Celsius to end'
  }
})
