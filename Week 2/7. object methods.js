// Objects can also have methods

var car = {
	mileage: 98765,
	color: "red",

	turnTheKey() {
		console.log("The engine is running");
	}
}

// Methods can also be added to objects by using dot notation

car.lightsOn = function() {
    console.log("The lights are on.");
}

// Access the object's method

car.turnTheKey();
car.lightsOn();

