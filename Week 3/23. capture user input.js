// To capture user input, you can use the built-in prompt() method, like this:
let answer = prompt('What is your name?');


// For example, you can output the typed-in information on the screen, as an <h1> HTML element.
if (typeof(answer) === 'string') {

    var h1 = document.createElement('h1')

    h1.innerText = answer;

    document.body.innerText = '';

    document.body.appendChild(h1);

}


// although you can use prompt it is not the most efficient approach
// You can code a script which will take an input from an HTML form and display the text that a user types in on the screen.

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);