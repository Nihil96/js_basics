// Object-oriented programming(OOP) in JavaScript

// Function Constructor
// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// Person.prototype.greet = function () {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
// }

// Making instance of Person
// const marko = new Person("Marko", 23)
// const jana = new Person("Jana", 32)

// console.log(marko)
// console.log(jana)

// marko.greet()
// jana.greet()

class Person2 {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
    }

    greet() {
        console.log(
            `Hello, my name is ${this.name} and I'm ${this.age} years old.`
        )
    }

    printSurname() {
        console.log(`My surname is ${this.surname}`)
    }
}

const sanja = new Person2("Sanja", "Petkovska", 36)
const mirko = new Person2("Mirko", "Mirkovski", 20)

// console.log(sanja)
// sanja.printSurname()
// mirko.greet()

// Inheritance
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(
            `Hello, my name is ${this.name} and I'm ${this.age} years old.`
        )
    }
}

class Professor extends Person {
    constructor(name, age, subject) {
        super(name, age)
        this.subject = subject
    }

    teach() {
        console.log("I teach", this.subject)
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }

    study() {
        console.log(`I am styding ${this.major}`)
    }
}

class Trainer extends Person {
    constructor(name, age, sport) {
        super(name, age)
        this.sport = sport
    }

    coach() {
        console.log(`I can make you fit by teaching you ${this.sport}`)
    }
}

const professor = new Professor("Petar", 43, "Computer Science")
const student = new Student("Hristijan", 22, "Backend Development")
const trainer = new Trainer("Ljuben", 35, "Crossfit")

professor.introduce()
professor.teach()

student.introduce()
student.study()

trainer.introduce()
trainer.coach()

// Static members, setters, getters and private variables
class Circle {
    static PI = 3.14

    // private variable
    #radius

    constructor(radius) {
        this.#radius = radius
    }

    get getRadius() {
        return this.#radius
    }

    set setRadius(newRadius) {
        if (newRadius > 0) {
            this.#radius = newRadius
        } else {
            console.log("The radius must be a positive number")
        }
    }

    calculateArea() {
        return Circle.PI * this.#radius ** 2
    }
}

const circleOne = new Circle(30)
console.log(circleOne.getRadius)
console.log(Circle.PI) // accessing static property

circleOne.setRadius = 25 // changing the value of the radius
console.log(circleOne.getRadius)

console.log(circleOne.calculateArea())
