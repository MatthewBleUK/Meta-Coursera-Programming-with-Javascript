var greet = 'Hello ',
	user = 'Lisa';

console.log(greet + user)			// Hello Lisa

console.log(greet.concat(user));	// Hello Lisa



// Strings act similar to an array - you can loop through it

var string = 'hello world';

for(var i = 0; i < string.length; i++) {
	console.log(string[i]);	
} 	


// String cheat sheat

string.length;		// returns the length
string.charAt(0);	// returns chat at position 0 in the string

// concats strings together
"Wo".concat("rl").concat("d"); // 'World'

// returns the location of the first position it is found at
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

// returns the location of the last position it is found at
"ho-ho-ho".lastIndexOf('o'); // 7

// splits the string into an array from the '-' position
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

string.toUpperCase(); // "HELLO WORLD"
string.toLowerCase(); // "hello world"

// splits the string into an array
string.split();