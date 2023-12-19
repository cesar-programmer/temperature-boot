/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
// const yourName = 'cesar'

// if (confirm('Are you ' + yourName + '?')) {
//   console.log('Hello ' + yourName)
// } else {
//   console.log('Then what is your name?')
// }

// console.log('1' == 1) // true
// console.log('1' === 1) // false

// const num1 = 1
// const num2 = 2

// if (num1 < num2) {
//   console.log('num1 is smaller than num2')
// } else {
//   console.log('num2 is smaller than num1')
// }

function login () {
  console.log('HI')

  const userDB = 'cesar@sgku.edu'
  const passDB = 'test12345'

  const user = document.getElementById('txtUserName').value
  const password = document.getElementById('txtUserPassword').value

  console.log(user, password)

  if (user === userDB && password === passDB) {
    document.getElementById('notifications').innerHTML = `Welcome to the system ${user}`
  } else {
    document.getElementById('notifications').innerHTML = 'invalid credentials!'
  }
}

function addName () {
  const names = document.getElementById('names').value
  document.getElementById('show').innerHTML += `<li>${names}</li>`
}
