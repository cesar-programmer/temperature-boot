/* eslint-disable no-unused-vars */
function sum () {
  const num1 = Number(prompt('enter a number'))
  const num2 = Number(prompt('enter a number'))
  const sum = num1 + num2
  document.getElementById('result').innerHTML = `<p>${sum}</p>`
}

function sub () {
  const num1 = Number(prompt('enter a number'))
  const num2 = Number(prompt('enter a number'))
  const sub = num1 - num2
  document.getElementById('result').innerHTML = `<p>${sub}</p>`
}
