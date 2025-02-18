const user = {
    username: "Ankit",
    price: 999,

    // this keyword is used to access the current object properties
    //
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);// it will print the current object
    }

}

// user.welcomeMessage()//- it will print Ankit , welcome to website-
// user.username = "sam"
// user.welcomeMessage()//- it will print sam , welcome to website


// console.log(this);// it will print  global object
                  // it will print the empty object- because we are in node environment
                  // but in browser it will print the window object- because we are in browser environment

// function chai(){
//     let username = "hitesh" 
//     console.log(this.username);// it will print undefined
// }

// chai()// it will print the global object- because we are in node environment


/*  

function chai(){
    console.log(this);
}

chai()

output:
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()// it will print undefined 

// ###################################arrow function####################################

const chai =  () => {
    let username = "hitesh"
    // console.log(this);
    console.log(this.username);
}


// chai()  // it will print the empty object- because we are in node environment when console.log(this) is used
        // it will print undefined- because we are in node environment when console.log(this.username) is used

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // under curly braces we have to use return keyword

// #############################implicit return####################################	- when we have only one line of code then we can remove the curly braces and return keyword

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"}) // it will return the object    


// console.log(addTwo(3, 4)


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()