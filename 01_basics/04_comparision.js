// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);=> false
// console.log(2 != 1);
// console.log(2 === 1);==> false
// === is strict equality operator and == is loose equality operator
// example of loose equality operator
// console.log(2 == "2");=> true
// console.log(2 === "2");=> false

// when data type is different, then js convert one data type to another data type

// console.log("2" > 1);==> true because "2" is converted to 2
// console.log("02" > 1);==> false because "02" is converted to 2

console.log(null > 0);// ==> false because null is converted to 0
console.log(null == 0);// ==> false because null is converted to 0
console.log(null >= 0);// ==> true because null is converted to 0 

console.log(undefined == 0);// ==> false because undefined is converted to NaN
console.log(undefined > 0);// ==> false
console.log(undefined < 0);// ==> false

// === 

console.log("2" === 2);// ==> false