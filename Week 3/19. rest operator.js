// The rest operator allows you to take an array and shorten it

const top7 = [
	"location 1",
	"location 2",
	"location 3",
	"location 4",
	"location 5",
	"location 6",
	"location 7"
]

// creates a seperate sub array
const [first, second, third, ...secondVisit] = top7;

console.log(secondVisit);
