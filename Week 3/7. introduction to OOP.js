// introduction to objects

var purchase1 = {
	shoes: 100,
	stateTax: 1.2,
	totalPrice: function() {
		calculation = this.shoes * this.stateTax;
		console.log('Total price:', calculation);
	}
}

purchase1.totalPrice();


var purchase2 = {
	shoes: 50,
	stateTax: 1.2,
	// this function repeats itself, which is why we use classes as a template
	totalPrice: function() {		
		calculation = this.shoes * this.stateTax;
		console.log('Total price:', calculation);
	}
}

purchase2.totalPrice();