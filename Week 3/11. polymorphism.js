// polymorphism example

// start with a class called Train
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

// another class called HighSpeedTrain was created that extends Train
// It uses the super() method inside the constructure to inherit the color and lightson properties
// this new class automatically inherits all the methods of the trains prototype
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }

    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }

	// methods can so be overwritten from the super class
	toggleLights() {

		// by using super here it will use the methods from the super class 
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

let speedy = new HighSpeedTrain();

speedy.toggleLights();