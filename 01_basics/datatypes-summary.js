//  Primitive-- call by value 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null// null is a standalone value and it is not an zero
let userEmail;// undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
//  https://262.ecma-international.org/5.1/#sec-11.4.3
/*
memory allocation-- stack and heap
stack-- primitive data types-- call by value- copy of value is passed not original value
heap-- reference data types -- call by reference--original value is passed
*/
//stack
let myYoutubename = "Ankit"
let anothername=myYoutubename
anothername = "ramu"
console.log(myYoutubename);//=> Ankit- no change in original value because it is a primitive data type
console.log(anothername);//=> ramu but myYoutubename is Ankit

//heap
let userOne = {
    userEmail: "user@google.com",
    upi:"user@okhdfcbank"
}
let userTwo = userOne

userTwo.userEmail = "user2@google.com"
console.log(userOne.userEmail);
console.log(userTwo.userEmail);
