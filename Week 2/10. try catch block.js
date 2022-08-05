// Try catch block can be used to handle errors. 
// This can prevent the code from running if an error occurs

try {

	console.log(a + b);

	// throw new ReferenceError();	// forces an error

} catch(err) {

	console.log('There was an error', err);

}

console.log('My program does not stop');