// Important: Nested loops can degrade code performance 
// nested for loop - prints days of the weeks from monday to friday

for(var i = 1; i <= 2; i++) {

	for(var j = 1; j <= 5; j++) {
		console.log("week", i, "- day", j);
	}

	console.log(' ');
}
