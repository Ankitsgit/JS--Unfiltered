/*  
------------------JavaScript and Classes------------
Do classes exist in JavaScript?
Before ES6, JavaScript did not have class syntax.
ES6 introduced classes, but they are just syntactic sugar over prototypes.
JavaScript remains fundamentally prototype-based.
*/



/*
-------------------Key components of OOP in JavaScript:--

Object literals: Simple key-value objects.
Constructor functions: Functions that create objects.
Prototypes: The foundation of JavaScript’s object system.

*/

// example of object literals- collection of properties and methods
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);//-> refers to the object user

//---------------------------this keyword in function context or execution context ---------------------------    
        // this keyword is used to refer to the object that is executing the current function        
        // this refer the object in the current context
    }

}



//console.log(user.username)// hitesh
//console.log(user.getUserDetails());// Got user details from database

// --------------------this in global context----------------

// console.log(this);//-> refers to the global object in nodejs-{}
//console.log(this);//-> refers to the window object in browser

 

/*
-------------------Constructor functions----------------
e.g -const promise = new Promise(function(resolve, reject) { });
    -const date = new Date();

Constructor functions are used to create multiple objects with the same structure or object literals.
 Constructor functions are like classes in JavaScript.

*/
function User(username, loginCount, isLoggedIn){//
    this.username = username;//
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this// this is optional- if we don't return anything then it will return the object by default because 
}
/*
--------------------understanding need of new keyword----------------

const userOne =  User("hitesh", 12, true)
console.log(userOne);// - username: 'hitesh', loginCount: 12, isLoggedIn: true, greeting: [Function]
const userTwo = User("ChaiaurCode", 11, false)
console.log(userOne);// - username: 'ChaiaurCode', loginCount: 11, isLoggedIn: false, greeting: [Function]

// here user two is overriding the userOne object
// to avoid this we use new keyword
// new keyword creates a new object and binds it to the this keyword 

*/
/*
// -------------------new keyword----------------
 1.new - it creates a empty object called instance of the object literal
2.constructor function is called and
3. the this keyword is bound to the new object
4. the new object is returned from the constructor function
*/
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);//[Function: User]  - constructor property is used to get the constructor function 
//console.log(userTwo);

///method -instanceof - it is used to check the object is created from the constructor function or not
console.log(userOne instanceof User);//true
console.log(userTwo instanceof User);//true