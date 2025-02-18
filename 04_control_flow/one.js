// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 100

// // if (balance > 500) console.log("test"),console.log("test2");//not a good practice

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {// agar ye condition true hogi to ye wala block chalega aur baki nahi chalega
//     // agar ye condition false hogi to ye wala block nahi chalega aur next wala check karega 
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
// &&- and operator- all the conditions should be true
// ||- or operator- any one condition should be true
// !- not operator- it will return the opposite value
//AND- &&, OR- ||, NOT- !

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}