// Immediately Invoked Function Expressions (IIFE)
// javascript function that runs as soon as it is defined
// speciallly hm ek file likhte hai jisme kewal database connection hai to hm usko IIFE se wrap kar dete hai
// global scope ke pollution se bachne ke liye IIFE ka use hota hai

//iife-(function(){})();- it is a function that runs as soon as it is defined

(function chai(){
    // named IIFE-it has name and it is not a good practice
    console.log(`DB CONNECTED`);
})();
//;to stop the execution of the code and move to the next line

( (name) => {
    // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
