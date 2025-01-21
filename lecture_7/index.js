// Event Listeners

const myButton = document.getElementById("btn")

const clickButton = () => {
	alert("The button has been clicked!")
	// myButton.removeEventListener("click", clickButton) // removing the event listener
}

// click event
myButton.addEventListener("click", clickButton)

// one way of targeting the title
// const funnyTitle = document.getElementsByTagName("h1")[0]

const funnyTitle = document.querySelector("h1")

funnyTitle.addEventListener("mouseenter", () => {
	funnyTitle.style.fontSize = "50px"
	funnyTitle.style.transition = "font-size 0.3s ease-in-out"
})

funnyTitle.addEventListener("mouseleave", () =>[
	funnyTitle.style.fontSize = "25px"
])

const googleLink = document.querySelector("a")

googleLink.addEventListener("click", (event) => {
	event.preventDefault() // prevents the default behaviour of the element
	googleLink.style.color = "green"
})

const parentElement = document.getElementsByClassName("parent-element")[0]
const childElement = document.getElementsByClassName("child-element")[0]

parentElement.addEventListener("click", () => {
	console.log("PARENT element clicked!")
})

childElement.addEventListener("click", (event) => {
	event.stopPropagation() // prevents the trigger of the parent event listener
	console.log("CHILD element clicked!")
})

const submitBtn = document.getElementById("submitButton")

submitBtn.addEventListener("click", () => {
	const inputElement = document.getElementById("myInput")
	alert(`Hello ${inputElement.value}`)
})

// keyboard events
const bodyElement = document.body

function changeBodyColor(e){
	if(e.key === "y"){
		bodyElement.style.backgroundColor = "yellow"
	} else if(e.key === "r"){
		bodyElement.style.backgroundColor = "red"
	}
}

bodyElement.addEventListener("keydown", changeBodyColor)


