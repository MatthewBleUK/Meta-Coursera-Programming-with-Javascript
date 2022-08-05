// You can pass default parameters into a function

function doubleNumber(num = 10) {
	return num * 2;
}

console.log(doubleNumber());

// alternatively you can pass in your own number

console.log(doubleNumber(20));


// this can also be used within object constructors
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
    }
}

var better = new WithDefaultParams();
better.calculate(); // Result: 6

/* Additionally, this approach really shines when building inheritance hierarchies using classes, 
   as it makes it possible to provide only the custom properties in the sub-class, while still 
   accepting all the default parameters from the super-class constructor. */