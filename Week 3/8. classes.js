// classes are blue prints or templates to create new objects (instances from a new class)
// When you need to code more complex OOP relationships, you can use the class keyword and its easy-to-understand and easy-to-reason-about syntax.

class Car {
	constructor(color, speed) {
		this.color = color;
		this.speed = speed;
	}
	
	turboStart() {
		console.log('turbo is turned on!')
	}
}

let car1 = new Car('red', 120); 

// car1.turboStart();

console.log(typeof(Car));
