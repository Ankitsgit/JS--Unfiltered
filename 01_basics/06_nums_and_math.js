const score = 400
// console.log(score);

//explicit conversion 
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);//=> 3
// console.log(balance.toFixed(1));//=> 100.0 - upto 1 decimal point

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));//=> 123.9-it will return in string format
// console.log(otherNumbe.toPrecision(2));//=> 1.2e+2-it will round off upto 2 decimal points
//toPrecision() - it can range from 1 to 21 - it will round off the number to the given precision
// 
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//=> 10,00,000 - it will convert number to string and add commas
// en-IN => India
// en-US => United States

// Number.MAX_VALUE- it will return the maximum value that a number can hold- 1.7976931348623157e+308
// Number.MAX_SAFE_INTEGER- it will return the maximum safe integer- 9007199254740991
//and other properties are also there


// +++++++++++++ Maths +++++++++++++++++++++++++++++ it is a built in object

// console.log(Math);//=> it will show all the properties and methods of math object
// console.log(Math.abs(-4));//=> 4- it will return the absolute value
// console.log(Math.round(4.6));//=> 5- it will round off to the nearest number
// console.log(Math.ceil(4.2));//=> 5 - it will always round off to the next number
// console.log(Math.floor(4.9));//=> 4- it will always round off to the previous number
// console.log(Math.min(4, 3, 6, 8));//=> 3
// console.log(Math.max(4, 3, 6, 8));//=> 8

console.log(Math.random());//=> it will return a random number between 0 and 1
console.log((Math.random()*10) + 1);//=> it will return a random number between 1 and 10
console.log(Math.floor(Math.random()*10) + 1);//=> it will return a random number between 1 and 10

const min = 10//=> it will return a random number between 10 and 20
const max = 20//=> it will return a random number between 10 and 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //=> it will return a random number between 10 and 20