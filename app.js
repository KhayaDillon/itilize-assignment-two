
// Exercise One

alert("Welcome")
const nameInput = prompt("Please enter your name below")
const likesSoccerBoolean = confirm("Should I say that you like soccer?")

console.log(nameInput)
console.log(likesSoccerBoolean)

const nameDiv = document.querySelector("#name-div")
const soccerDiv = document.querySelector("#soccer-div")

const nameResponseP = document.createElement("p")
nameResponseP.appendChild(document.createTextNode(nameInput))
nameDiv.append(nameResponseP)

const soccerResponseP = document.createElement("p")
soccerResponseP.appendChild(document.createTextNode(likesSoccerBoolean))
soccerDiv.append(soccerResponseP)

