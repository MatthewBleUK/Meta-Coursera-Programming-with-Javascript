// Common data structures in Javascript are Objects, Arrays, Maps and Sets

// Objects - unordered non-iterable collection of data with key value pairs
const car = {
	owner: 'John',
	color: 'red',

	engineOn: function() {
		console.log('Engine is on')
	}
}

// Datas inside objects can be converted into an array

const result = [];

const drone = {
    speed: 100,
    color: 'yellow'
}

const droneKeys = Object.keys(drone);

droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})

console.log(result)		// ['speed',100,'color','yellow']





// Arrays - Ordered iterable collect of values
let array = [1, 2, 3, 4];

// Arrays can be looped over by using a foreach method

const veggies = ['onion', 'garlic', 'potato'];

veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

// to improve readability, arrow functions can be used

veggies.forEach((veggie, index) => {
	console.log(`${index}. ${veggie}`);
})


// Another very useful method on the array is the filter() method. It filters your arrays based on a specific test.

const nums = [0,10,20,30,40,50];

nums.filter( function(num) {
    return num > 20; 	// [30,40,50]
})	


// The map() method is also very useful. This method is used to map each array item over to another array's item, 
// based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

nums.map( function(num) {
    return num / 10		// [0,1,2,3,4,5]
})






// Maps - Maps are made up of iterable key value pairs. A map can feel very similar to an object in JS. 
// However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

let bestBoxers = new Map();

bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);		// Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

// to get a specific map value
bestBoxers.get(1); // 'The Champion'





// Sets - Sets are ordered collections of unique items
// since they only accept unique items, it is possible to quickly filter an array for unique members

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];

const uniqueFruits = new Set(repetitiveFruits);

console.log(uniqueFruits);		// {'apple', 'pear', 'plum'}




/* 

Some more advanced data structures that have not been covered include:

1. Queues
2. Linked lists (singly-linked and doubly-linked)
3. Trees
4. Graphs

*/

