let score = "Ankit"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Ankit"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Ankit" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);=> 0.6666666666666666
// console.log(2%3);=> 2

let str1 = "hello"
let str2 = " Ankit"

let str3 = str1 + str2
// console.log(str3);

// string ke baad hai toh baaki sab string hi hoga
// console.log("1" + 2);=> "12"
// console.log(1 + "2");=> "12"
// console.log("1" + 2 + 2);=> "122"
// console.log(1 + 2 + "2");=> "32"

// console.log( (3 + 4) * 5 % 3); 

// console.log(+true);=> 1 because true is 1
// console.log(+"");//=> 0 because "" is false 
// console.log(+"Ankit");//=> NaN because hitesh is not a number

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // not recommended

let gameCounter = 100
// ++gameCounter;=> 101// pre-increment--pehle increment fir return
// gameCounter++;=> 100// post-increment --pahele return fir increment
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion