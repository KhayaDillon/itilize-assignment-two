
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


/* 
Exercise Two 
 
Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will
check if the current number is odd or even, and display a message to the screen.

Sample Output :
"0 is even"
"1 is odd"
"2 is even"
... 
*/

for (var i = 0; i <= 15; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`)
	} else {
		console.log(`${i} is odd`)
	}
}


/*
Exercise Three

Create a function sum() that accepts any number of parameters and adds them
together by iterating over the values in arguments with a while loop. 
*/

function sum() {
	let i = 0
	let total = 0
	
	while (i < arguments.length) {
		total += arguments[i]
		i++
	}
	return total
}


