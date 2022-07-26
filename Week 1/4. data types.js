/*

7 Primitive Data types:

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. BigInt
7. Symbol

*/


// String data type
var string = 'string';

console.log(typeof string);


// Number data type
var number = 375;

console.log(typeof number);


// Boolean data type
var booleanTrue = true;
var booleanFalse = true;

console.log(typeof booleanTrue);
console.log(typeof booleanFalse);


// Null - Repersents the absense of a value
var nullVar = null;

console.log(typeof nullVar);


// Undefined - Unassigned variable 
var undefined;

console.log(typeof undefined);


// BigInt - Released with ES6
const bigInt = BigInt("1234567890123456789012345678901234567890");

console.log(typeof bigInt);


// Symbol - Released with ES6
const sym = Symbol('foo');

console.log(typeof sym)