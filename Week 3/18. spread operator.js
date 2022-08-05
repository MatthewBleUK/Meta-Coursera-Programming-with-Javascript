// Spread operator is used to unpack an array

let top3 = [
	"The Colosseum", 
	"Trevi Fountain", 
	"The Vatican City",
];

function showItinerary(place1, place2, place3) {
	console.log(place1);
	console.log(place2);
	console.log(place3);
}

// this
showItinerary(top3[0], top3[1], top3[2]);

// is the same as this
showItinerary(...top3);


// Using the spread operator, it's easy to concatenate arrays:

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']

const fruitsAndBerries = [...fruits, ...berries] // concatenate

console.log(fruitsAndBerries); // outputs a single array -> ['apple', 'pear', 'plum', 'blueberry', 'strawberry']



// It's also easy to join objects:  

const flying = { wings: 2 }
const car = { wheels: 4 }

const flyingCar = {...flying, ...car}

console.log(flyingCar) // {wings: 2, wheels: 4}



// It can also be used to add more items to an array without using .push method

let veggies = ['onion', 'parsley'];

veggies = [...veggies, 'carrot', 'beetroot'];

console.log(veggies);



// and given a string, it's easy to spread it out into separate array items:

const greeting = "Hello";

const arrayOfChars = [...greeting];

console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']



// Copy either an object or an array into a separate one

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed) // 201 202


