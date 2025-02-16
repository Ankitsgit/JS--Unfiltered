// String in js is immutable 
const name = "Ankit"
const repoCount = 50

// console.log(name + repoCount + " Value");//=> Ankit50 Value -not a good practice

// string interpolation- ${}
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// string declaration using new keyword
const gameName = new String('Ankit-hc-com')
 
// string is an object in js and it has its own properties and methods

// string have key value pair
// console.log(gameName[0]);

// console.log(gameName.__proto__);//=> it will show all the properties and methods of string


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)//=> -8 is from last and 4 is from start -- hc
console.log(anotherString);

const newStringOne = "   Ankit   " "
console.log(newStringOne);
console.log(newStringOne.trim());//=> remove extra spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//=> replace %20 with -

console.log(url.includes('sundar'))//=> false-- check if string contains a substring

console.log(gameName.split('-'));//=> ["Ankit", "hc", "com"] 