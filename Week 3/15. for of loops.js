// Arrays properties can be looped over

const colors = ['red','orange','yellow'];

for (var color of colors) {
    console.log(color);		// red orange yellow 
}


// Howver this doesn't work on objects.
// You can extract object's keys, values, or both, using the Object.keys(), Object.values() and Object.entries()


// Object.keys() -> loops over the objects keys

const car2 = {
    speed: 200,
    color: "red"
}

console.log(Object.keys(car2)); // ['speed','color']

for(keys of Object.entries(car2)) {
	console.log(keys);
}



// Object.values() -> loops over the objects values

const car3 = {
    speed: 300,
    color: "yellow"
}

console.log(Object.values(car3)); // [300, 'yellow']

for(values of Object.values(car3)) {
	console.log(values);
}



// Object.entries() -> returns an array listing both the keys and values
const car4 = {
    speed: 400,
    color: 'magenta'
}

// will return a 2-member array (array of an arrays)

console.log(Object.entries(car4));	// [ [ 'speed', 400 ], [ 'color', 'magenta' ] ]


for(entries of Object.entries(car4)) {
	console.log(entries);
}




// for in loops will illiterate over the properties of the object AND its prototype
// whereas for of loops will illiterate over the objects properties