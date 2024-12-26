// Synchronous and Asynchronous execution of code in JS

// Synchronous code in JS
// console.log("Task 1")

// for (let i = 0; i < 1000; i++) {
//   console.log("Some other task", i)
// }

// console.log("Task 3")

// ======= Asynchronous code in JS ========= //

// setTimeout and setInterval

// Examples

// const printTask = () => console.log("Executing Task 4")

// setTimeout(printTask, 3000)
// console.log("Executing Task 1")

// setTimeout(() => console.log("Executing Task 2"), 2000)

// console.log("Executing Task 3")

// setInterval
let counter = 0

function incrementCounter() {
  counter++
  console.log(`Counter is: ${counter}`)
}

// setInterval(incrementCounter, 1000)

const timerId = setTimeout(
  () => console.log("This will never be printed!!!"),
  2000
)

clearTimeout(timerId)

// Promises

// pending - initial state, neither fulfield nor rejected
// fulfield - meaning the operation is successful
// rejected - meaning the operation failed

const myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Success!")
  } else {
    reject("Error!")
  }
})

// myPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))

// Chaning Promises
const promise1 = new Promise((resolve) => resolve(1))

// promise1
//   .then((number) => number + 10)
//   .then((prevNumber) => prevNumber + 89)
//   .then((result) => console.log(result))

// console.log("Some random task")

// Async Await

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { name: "Mirko", surname: "Petkovski", age: 32 }
      const isUserAvailable = false
      if (isUserAvailable) {
        resolve(userData)
      } else {
        reject("ERROR: This user is not found")
      }
    }, 2500)
  })
}

// one way of resolving the Promise
// getUserData()
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error))

// another way using async/await - unhandled exceptions
async function fetchUserData() {
  const user = await getUserData()
  console.log(user)
}

// fetchUserData()

// try/catch blocks - handling exceptions
async function fetchUsers() {
  try {
    const user = await getUserData()
    console.log(user)
  } catch (error) {
    console.log("Something went wrong!", error)
  }
}

// fetchUsers()

let p = new Promise((resolve) => resolve("resolve"))
p.then((result) => console.log(result))
console.log("simple log")
setTimeout(() => console.log("timeout"), 0)

// simple log
// resolve
// timeout
