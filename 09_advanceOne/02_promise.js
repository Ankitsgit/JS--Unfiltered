/* 
promise - is always future me  hoti hai
note :
1-A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation.
2-When working with asynchronous tasks (e.g., fetching data, reading files, making API calls), 
   we use promises to handle them without blocking the execution of other code.
3-Promises provide a better way to handle asynchronous code 
  compared to callbacks (which can lead to "callback hell" 🤯).




*/   
// 1- ------------------Creating a Promise----------------
// To create a new promise, we use the Promise constructor.
// The Promise constructor takes a function as an argument, which has two parameters: resolve and reject.

let promiseOne = new Promise(function(resolve, reject) {
    // This is the executor function.
    // do an asyn task
     //db call, file read, api call,crypto,network 
     setTimeout(function(){
        console.log("Async task has completed");
    },1000);
    resolve();//if we do not call resolve or reject, the promise will be in pending state.

});


/* NOTE2------- Consuming a Promise--------------

// To consume a promise, we use the then() method.
// The then() method takes two functions as arguments: onFulfilled and onRejected.
// The onFulfilled function is called when the promise is resolved.
// The onRejected function is called when the promise is rejected.
*/
promiseOne.then(function(){
    console.log("Promise has been consumed");
});
// Output;  Async task has completed because  


// we didn't call the resolve() or reject() function inside the executor function.
// So, the promise is neither resolved nor rejected.
// As a result, the then() method is not called.
   // to consume the promise, we need to connect then() method to the  the resolve() function.
// 

// 1.1- ------------------Creating a Promise in a new way----------------

new Promise(function(resolve, reject) {
    // do an asyn task
    setTimeout(function(){
        console.log("Async task has completed");
        resolve();
    },1000);
}).then(function(){
    console.log("Promise has been consumed");
});
// Output: Async task has completed
//         Promise has been consumed


///1.3 ------------------Creating a Promise----------------  
//  -------------------Resolving with Data----------------
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})//resolve with an object- as a user- a data
    }, 1000)
})

promiseThree.then(function(user){//user is the data that we resolved with
    console.log(user);
})

// Output: { username: 'Chai', email: '

// 1.4 ------------------Creating a Promise----------------
//  -------------------Rejecting with an Error----------------
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username: "Chai", email:"@123 "})
        }else{
            reject("Error: Something went wrong")
        }

    }, 1000)

})

//1.4.1--------------------chaining the promise----------------
/*
---------------------this is not working----------------
const username = promiseFour
.then((user) => {
   console.log(user);
   return user.username//
})
   consle.log(username)

*/ 

//or we can chain the promise like this

promiseFour
.then((user) => {
   console.log(user);
   return user.username//
}).then((username) => {
   console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

//------------------promise using async await----------------
// 1.5 ------------------Creating a Promise----------------
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
/*
async function consumePromiseFive(){
    const response = await promiseFive;
    console.log(response);
}
consumePromiseFive();// async wait can't handle the error  so we need to use " try catch block"  to handle the error
*/
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();// Output: ERROR: JS went wrong

// 1.6 ------------------using fetch()----------------
// The fetch() method is used to make network requests to a server.
// It returns a promise that resolves to the Response to that request, whether it is successful or not.
// We can use the then() method to consume the promise returned by fetch().

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()//json() is a method that returns a promise that resolves to the JSON object
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.