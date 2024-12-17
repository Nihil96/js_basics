// ====== Getting started with JavaScript ======

console.log("Hristijan")

// Data Types

// Primitive data types:
var myNumber = 100 // number
var myName = "Hristijan" // string
var myBool = true // boolean
var myUndefined = undefined // undefined
var myNullType = null // null

console.log(myNumber, myName)

// Reference data type:

// Object
var myObject = { car: "Mercedes", model: "Benz", year: 2015 }
console.log(myObject)

// Array
var myArray = [10, false, "random string", undefined, null, [], { a: 10 }]
console.log(myArray)

// var, let, const - three different ways to declare a variable
let age = 35
console.log(age)

age = 36
console.log(age)

const PI = 3.14
console.log(PI)
// PI = 3.16 - this will throw an error

// Mathematical operations

// Addition
let sum = 10 + 20 + 10 + 5
console.log(sum)

// Subtraction
let difference = 23 - 17
console.log(difference)

// Multiplication
let num1 = 30
let num2 = 3
console.log(num1 * num2)

// Division
let div = 10 / 5

// Modulus
let reminder = 15 % 4
console.log(reminder)

let complexOperation = (32 + 23) / 5 - 8 * 2
console.log(complexOperation)

// Boolean Algebra

// Logical Operators:

// && (Logical AND)
let x = true
let y = true
let z = false

let result = y && z && x
console.log(result) // this will return false because of 'z'

// || (Logical OR)
let a = true
let b = false
let c = false

let result2 = b || c
console.log(result2) // -> false || false -> false

// ! (Logical NOT)
let d = true
console.log(!d)

//
let test = (a && b) || (c && !d) // -> false || false => false

// Comparsion operators

// ==, ===, !=, !==
let number1 = 15
let number2 = 50
let number3 = "15"

console.log(number1 == number3) // true
console.log(number1 === number3) // false
console.log(number2 != number1) // true

// typeof operator

let randomNum = 87
let randomString = "Hello World!"
let randomBool = false

console.log(typeof randomNum, typeof randomString, typeof randomBool)
