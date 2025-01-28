// Browser APIs and Modules
import { add, PI } from "./math.js"
import calculator from "./calculator.js"

// Examples of localStorage and sessionStorage

// localStorage
localStorage.setItem("username", "stefan_stefanovski")
console.log(localStorage.getItem("username"))

// sessionStorage
sessionStorage.setItem("tempData", "temp_value")
console.log(sessionStorage.getItem("tempData"))

// Quick Exercise
const themeButton = document.querySelector("button")
const bodyElement = document.body
localStorage.setItem("theme", "light")

themeButton.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "light") {
        bodyElement.style.backgroundColor = "black"
        localStorage.setItem("theme", "dark")
    } else {
        bodyElement.style.backgroundColor = "white"
        localStorage.setItem("theme", "light")
    }
})

console.log(add(10, 10))
console.log(PI)
console.log(calculator.exponent(3, 3))
