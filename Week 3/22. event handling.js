// get elements by using DOM selector
let target = document.querySelector('body');

// add event listener to target
target.addEventListener('click', function() {

});

// arrow functions can also be used
target.addEventListener('click', () => {

});

// alternatively 
target.addEventListener('click', handleClick);