/*
"use strict";--"use strict" is a directive in JavaScript that enforces stricter parsing and error handling.
Why Use "use strict"?
✅ Prevents accidental global variables
    Without "use strict", JavaScript automatically creates a global variable when one is used without var, let, or const.

✅ Throws errors for unsafe operations

    // Without "use strict"
    function sum(a, a) {
       return a + a; // No error, but logic is broken
       }
       console.log(sum(2, 3)); // Output: 6 (unexpected behavior)
    

✅ Disallows duplicate parameter names
✅ Blocks this from referring to window in functions

*/

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object