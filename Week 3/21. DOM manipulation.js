/* 	
	The Document Object Model (DOM) is an application programming interface (API) used for manipulating html elements. 
	The DOM is represented as a tree structure with each element being a new node.
	The DOM object is stored inside the document object. Using this object you can manipulate elements on the page. 
*/

const h2 = document.createElement('h2');

// adds innerText
h2.innerText = 'This is a h2 element';

// sets attributes
h2.setAttribute('id', 'sub-heading');
h2.setAttribute('class', 'secondary');

// adds it to the dom
document.body.appendChild(h2);



// Javascript selector - selects DOM elements

let firstParagraph = document.querySelector('p');	// gets the first p element

let allParagraphs = document.querySelectorAll('p');		// returns a node list of all the elements

let title = document.getElementById('title'); 	// gets an element by ID

let txt = document.getElementsByClassName('txt');	// returns a html collection of all the elements with a specific class name