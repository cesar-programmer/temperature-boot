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

const listNuumbers = document.getElementById('list-numbers')
for (let i = 0; i <= 10; i++) {
  listNuumbers.innerHTML += `<li>${i}</li>`
}

const numes2 = document.getElementById('list-numbers-reverse')
for (let i = 10; i >= 0; i--) {
  numes2.innerHTML += `<li>${i}</li>`
}

const numes3 = document.getElementById('evenNumbers')
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    numes3.innerHTML += `<li>${i}</li>`
  }
}

const numes4 = document.getElementById('multipliTable')
for (let i = 1; i <= 100; i++) {
  numes4.innerHTML += `<li>${i} = ${i * 5}</li>`
}
