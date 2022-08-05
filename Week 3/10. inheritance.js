// Example of inheritance. A new object is inheriting the prototypes (properties and methods) of an object
// inheritance in JavaScript is based around the prototype object.

var bird = {
	hasWings: true,
	canFly: true,
	hasFeathers: true
}

var penguin = Object.create(bird);

// this new penguin object can inherit the properties of the bird object

console.log(penguin.hasWings);	// true

// properties can also be changed

penguin.canFly = false;
console.log(penguin.canFly);