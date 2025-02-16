// Variable declaration and assignment
var name = "John";// name is a variable
let age = 30;// age is a variable
const isStudent = true;// isStudent is a constant variable
/*
prefer let over var because let is block scoped and var is function scoped
*/
// Basic operations
let sum = 10 + 5;
let product = 10 * 5;
let difference = 10 - 5;
let quotient = 10 / 5;

// Logging variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);
console.log("Sum:", sum);
console.log("Product:", product);
console.log("Difference:", difference);
console.log("Quotient:", quotient); 

// Logging variables to the console in a table format- console.table()

console.table({name, age, isStudent, sum, product, difference, quotient});