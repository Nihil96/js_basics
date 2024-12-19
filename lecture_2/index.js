// ======== Conditions and Function ==========

// if statements
let globalVariable = 100

if (false) {
  // this is a block
  console.log("Hello World!")
}

// console.log("Outside of the if statement!")

// else
let num = 30

// if (num > 35) {
//   console.log("The number is greater than 35")
// } else {
//   console.log("The number is smaller than 35")
// }

// else-if
let randomNum = 5

if (randomNum > 15) {
  console.log("The number is greater than 15")
} else if (randomNum === 15) {
  console.log("The number is equal to 15")
} else {
  console.log("The number is less than 15")
}

// Switch Statement
let day = "Thursday"

switch (day) {
  case "Monday":
    console.log("It's the start of the week!")
    break
  case "Friday":
    console.log("It's almost the weekend!")
    break
  default:
    console.log("It's another day of the week!")
}

// console.log("Outside of the switch")

// Functions
let result = 90 + 10
let result2 = 10 + 40
let result3 = 80 + 85

// definition or declaration of a function
function addTwoNumber(num1, num2) {
  let sum = num1 + num2
  return sum
}

// invoking the functions
console.log(addTwoNumber(10, 20))
console.log(addTwoNumber(40, 20))
console.log(addTwoNumber(90, 45))

function printMyName() {
  console.log("My name is Hristijan!")
}

// printMyName()

// more specific function
function printMyNumber(number) {
  if (typeof number === "number") {
    if (number > 100) {
      console.log(`This ${number} is greater than 100`)
    } else if (number === 100) {
      console.log("This number", number, "is equal to 100")
    } else {
      console.log("This number" + number + " is less than 100")
    }
  } else {
    console.log("This is not a number it's", typeof number)
  }
}

printMyNumber(10)

// arrow function
const greet = () => {
  return "Hello there!"
}
// console.log(greet())

// one liner
const printRandomNumber = () => console.log(721)
printRandomNumber()

console.log(printRandomNumber())

// function expresion
let mult = function (x, y, z) {
  return x * y * z
}

// console.log(mult(10, 20, 30))

// High-order function
function applyOperation(a, b, func) {
  return func(a, b)
}

let sub = applyOperation(20, 50, function (x, y) {
  return x - y
})

let division = applyOperation(30, 12, function (x, y) {
  return x / y
})

// console.log(sub)
// console.log(division)
