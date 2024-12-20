// Complex Data Types and Loops

// Arrays[]
let fruits = ["apple", "banana", "cherry", "lemon"]
// apple - index 0
// banana - index 1
// cherry - index 2

// console.log(fruits[0])
// console.log(fruits[3])
// console.log("This array has length of: ", fruits.length)

// modifying elements in array
fruits[2] = "grape"
// console.log(fruits)

// adding elements:
fruits.push("orange")
// console.log(fruits)

// remove the last element
let removedLastElement = fruits.pop()
// console.log(removedLastElement)

let secondElementFromTheFruitsArray = fruits[1]
// console.log(secondElementFromTheFruitsArray)

// remove the first element
let removeFirstElement = fruits.shift()
// console.log(removeFirstElement)
// console.log(fruits)

// unshift
let animals = ["dog", "horse", "cat"]
// console.log(animals[0])
animals.unshift("donkey")
// console.log(animals)

// concat
let musicGenre1 = ["rap", "rock"]
let musicGenre2 = ["metal", "pop"]
let allMusicGenres = musicGenre1.concat(musicGenre2)
// console.log(allMusicGenres)

// reverse
let numbers = [10, 20, 30, 40, 50]
// console.log(numbers.reverse())

// Objects
let person = {
  name: "Marko",
  age: 35,
  isStudent: false,
}

// accessing properties
// console.log(person.name, person.age)

// modifying properties
person.name = "Petar"
// console.log(person)

// adding new properties
person.email = "petar@gmail.com"
// console.log(person)

// deliting properties
delete person.isStudent
// console.log(person)

let student = {
  name: "Sonja",
  grades: [78, 83, 100, 100],
  address: {
    city: "Skopje",
    zipCode: "1000",
  },
}

// accessing properties using 'dot' notation
// console.log(student.address.city)
// console.log(student.grades[1]) // dot notation

// accessing properties using 'bracket' notation
// console.log(student["grades"][1])

// Different types of loops

// normal for loop
// for (let i = 0; i <= 5; i++) {
//   console.log(i)
// }

// 0
// 1
// 2
// 3
// 4
// 5

// example 1
let cars = [
  "Ford",
  "Mercedes",
  "Ferrari",
  "Fiat",
  "BMW",
  "Toyota",
  "Audi",
  "Mazda",
  "Golf",
]

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }

// for-in loop
let person2 = {
  name: "John",
  surname: "Doe",
  age: 25,
  email: "John.doe@gmail.com",
}

// example
// for (let key in person2) {
//   console.log(key, "-", person2[key])
// }

// for-of loop
let colors = ["red", "green", "blue", "yellow", "purple"]

// example
// for (let color of colors) {
//   console.log(color)
// }

// While Loop:
let count = 0

// while (count < 10) {
//   console.log("Hello World!!!")
//   count++
// }

// infinite loop
// while (count < 10) {
//   console.log("Hello World!!!")
// }

// while (count <= 5) {
//   if (count % 2 === 0) {
//     console.log("This is even number", count)
//   } else {
//     console.log("This is odd number", count)
//   }
//   count++
// }

// do/while loop
let randomNumber = 1
let sum = 0

do {
  sum += randomNumber // sum = sum + randomNumber
  randomNumber++
} while (randomNumber <= 6)

console.log("Total sum:", sum)

// iteration 1: sum = 0 + 1 = 1
// iteration 2: sum = 1 + 2 = 3
// iteration 3: sum = 3 + 3 = 6
// iteration 4: sum = 6 + 4 = 10
// iteration 5: sum = 10 + 5 = 15
// iteration 6: sum = 15 + 6 = 21
