// Manipulating Arrays and ES6 Features

// Built-in high order functions

// callback function
function myNameIs() {
  console.log("My name is Hristijan!")
}

// high order function
function printMyName(func) {
  return func()
}

// printMyName(myNameIs)

// forEach
let fruits = ["apple", "banana", "cherry", "mango", "lemon"]

// callback function
// const fruitsWithCharsBiggerThanFive = (fruit) => {
//   if (fruit.length > 5) {
//     console.log(fruit)
//   }
// }

// built-in high order function(HOF)
// fruits.forEach(fruitsWithCharsBiggerThanFive)

// map()
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newNumbersArray = numbersArray.map((number) => number + 1)
// console.log(numbersArray)
// console.log(newNumbersArray)

// sort()
let randomChars = ["d", "c", "m", "a", "y", "k", "z"]
let sortedChars = randomChars.sort()
// console.log(sortedChars)

let randomNumbersArr = [32, 10, 92, 0, 1, 17, 5]
let sortedArryNumbers = randomNumbersArr.sort((a, b) => a - b)
// console.log(sortedArryNumbers)

// reduce()
let sumOfRandomNumbers = randomNumbersArr.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber,
  0
)

// console.log(sumOfRandomNumbers)

// Exercise 1: find the maximum value in this array
const nums = [5, 13, 22, 300, 96, 0]

const maxElement = nums.sort((a, b) => a - b)
// console.log(maxElement[maxElement.length - 1]) // solution 1

const maxElementNum = nums.sort((a, b) => b - a)
// console.log(maxElementNum[0]) // solution 2

// filter()
let oddNumbersArr = [1, 3, 5, 7, 9, 13, 11, 17, 21, 27]
let numbersBiggerThenTen = oddNumbersArr.filter((number) => number > 10)
// console.log(numbersBiggerThenTen)

// find()
let evenNumbers = [10, 20, 140, 30, 40, 110, 50, 60, 70, 80, 90, 100]
let firstNumberBiggerThanHundred = evenNumbers.find((num) => num > 100)
// console.log(firstNumberBiggerThanHundred)

// some()
let numArray = [11, 1, 3, 21, 60, 13, 55, 91, 7]
let numArrayHasEvenNumber = numArray.some((number) => number % 2 === 0)
// console.log(numArrayHasEvenNumber)

// chaning high-order functions
let isEveryNumberEven = randomNumbersArr
  .filter((num) => num >= 20)
  .every((number) => number % 2 === 0)

// console.log(isEveryNumberEven)

// Spread operator, Ternary operator, Destructuring
let animals = ["cat", "horse", "donkey", "puma"]
let copyAnimalsArray = [...animals]
// console.log(copyAnimalsArray)

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let combineArrays = arr1.concat(arr2) // one way
// console.log(combineArrays)

let combineArray2 = [...arr1, ...arr2, 10, true, {}, [10, 20]]
// console.log(combineArray2)

// Ternary operator
const checkNumber = (num) => {
  num % 2 === 0
    ? console.log("This number is even")
    : console.log("This number is odd")

  // this is the same
  //   if (num % 2 === 0) {
  //     console.log("This number is even")
  //   } else {
  //     console.log("This number is odd")
  //   }
}

checkNumber(10)

// array destructuring
let [firstNumber, secondNumber, , forthNumber, , , , , , randomNumber] = [
  1, 2, 3, 4, 5,
]
// console.log(firstNumber, secondNumber, forthNumber, randomNumber)

// object destructuring
const randomPerson = {
  firstName: "Marko",
  lastName: "Markovski",
  age: 20,
}
console.log(randomPerson.firstName)

const { firstName: fn } = randomPerson
// console.log(fn)

let nestedArray = [12, 11, 3, 90, 87, [1, 0, 91, 202, 4], 3]

// exercise 2:

// solution 1
// nestedArray.forEach((number) => {
//   if (number % 2 === 0) {
//     console.log(number)
//   } else if (typeof number === "object") {
//     number.forEach((innerNumber) => {
//       if (innerNumber % 2 === 0) {
//         console.log(innerNumber)
//       }
//     })
//   }
// })

// solution 2
let evenNumsArr = nestedArray.flat().filter((number) => number % 2 === 0)
console.log(evenNumsArr)
