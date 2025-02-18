// THIS KEYWORD IN JAVASCRIPT
// The `this` keyword refers to the context in which a function is executed.
// Its value depends on how and where the function is called.

// 1. THIS IN GLOBAL SCOPE
// In the global execution context, `this` refers to the global object (`window` in browsers, `global` in Node.js).
console.log(this); // In browsers, this will log the `window` object

// 2. THIS INSIDE AN OBJECT METHOD
// When a function is called as an object's method, `this` refers to that object.
const person = {
    name: "John",
    greet: function() {
        console.log(this.name); // `this` refers to `person` object
    }
};
person.greet(); // Output: John

// 3. THIS IN A REGULAR FUNCTION
// In a normal function, `this` behaves differently based on strict mode.
function show() {
    console.log(this); //
}
show(); // In browsers, `this` will be `window` (or `undefined` in strict mode)

// 4. THIS IN AN ARROW FUNCTION
// Arrow functions do not have their own `this`. Instead, they inherit `this` from their parent scope.
const person2 = {
    name: "Alice",
    greet: function() {
        const arrowFunction = () => {
            console.log(this.name); // Inherits `this` from `greet()`
        };
        arrowFunction();
    }
};
person2.greet(); // Output: Alice

// 5. THIS IN EVENT LISTENERS
// In event listeners, `this` refers to the element that triggered the event.
document.getElementById("btn").addEventListener("click", function() {
    console.log(this); // Refers to the button element
});

// 6. THIS IN CONSTRUCTOR FUNCTIONS
// When using a constructor function, `this` refers to the newly created object.
function Person(name) {
    this.name = name;
}
const john = new Person("John");
console.log(john.name); // Output: John

// 7. THIS IN CLASSES
// In JavaScript classes, `this` works similarly to constructor functions.
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    show() {
        console.log(this.brand);
    }
}
const myCar = new Car("Toyota");
myCar.show(); // Output: Toyota

// 8. THIS WITH CALL(), APPLY(), AND BIND()
// You can explicitly set `this` using `call()`, `apply()`, or `bind()`.
const user = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
const user2 = { name: "Bob" };
user.greet.call(user2); // Output: Hello, Bob

// Example: `bind()`
const obj = { num: 10 };
function showNum() {
    console.log(this.num);
}
const boundFunc = showNum.bind(obj);
boundFunc(); // Output: 10

