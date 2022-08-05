// let and const become scoped to the block of code they were created in
// and can only be accessed within that scope

if(true) {
	let variable1 = 'local or block scope';
	const variable2 = 'local or block scope';	// cannot change
}

console.log(variable1);		// variable1 is not defined



// let and const can't be used before it is declared, cannot be re-declared and
// it is scoped to the block even within if statements or loops

if(true) {

	for(var i = 0;i <= 6;i++) {
		let variable3 = i;		// can only be used within this scope (block of code)
	}

	console.log(variable3);	// variable3 is not defined
}



// var is a little different and has a function or global scope, for example...

function example() {
	if(true) {

		for(var i = 0;i <= 6;i++) {
			var variable4 = i;		// can be used outside this loop, within the function 
		}

		console.log(variable4);		// 6
	}
}

console.log(variable4);		// variable4 is not defined. 
							// Cannot be used outside the function scope unless declared globally

// var can be used before it is declared, same variable can be re-declared and 
// can be scoped to a function, or globally