/* 
	Common javascript errors are SyntaxError, ReferenceError, TypeError and RangeError
	Other javascript errors are AggregateError, Error, InternalError, URIError
	Bugs can also exist.
*/


// syntax error - javascript cannot read this syntax

// var word = 'word; 	



// reference error

console.log(c + d);		// ReferenceError: c is not defined. Javascript looks for the c variable but cannot find it
console.log('this line never runs');

// type error

"hello".pop() 			// Uncaught TypeError: "hello".pop is not a function




// This is a bug
function addNums(a, b) { 
	console.log(a + b); 
}  

addNums('1', 2); 		// due to javascript's coercion this will concatenate the string with the number resulting in 12




// RangeError

(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36

