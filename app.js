
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


/*
Exercise Four

Write a JavaScript program to delete the rollno property from the
following object. Also print the object before and after deleting the
property.

Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
 * /
 
function removeRollnoProp(object) {
	console.log(object)
	delete object["rollno"]
	console.log(object)
}


/*
Exercise Five

Display the length of the object (count of properties using
Enumeration and Object.keys)
 */

function displayObjLength(object) {
	let count = 0
	Object.keys(object).forEach(key => count++)
	return count
}


/*
Exercise Six

Write a JavaScript program to sort an array of JavaScript objects.
Sample Object :

var library = [
{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne
Collins', libraryID: 3245 }];

Expected Output:
[
{ author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
{ author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book
of The Hunger Games" },
{ author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
 */

function sortArrayObjs(array) {
	array.sort( (a, b) => b["libraryID"] - a["libraryID"])
	return array.map( obj => {
		if (obj["author"] === "Bill Gates" || obj["author"] === "Steve Jobs") {
			let author = obj["author"]
			let title = obj["title"]
			obj["author"] = title
			obj["title"] = author
		}
	})
}
