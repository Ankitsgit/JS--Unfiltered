// object creation can be create in 3 ways
// 1. object literals - const obj = {}
// 2. new keyword - const obj = new Object()//
// 3. Object.create() - const obj = Object.create(null)//=> it will create an empty object
// when we create an object using constructor function then we can use new keyword-it is a single instance

// singleton(jab contructor se banate hai object )- it is a design pattern where we can create only one instance of the object

 // Object.create-constructor 

// object literals- se object create karna to ( singleton ) nahi hota

const mySym = Symbol("key1") // it is symbol data type


const JsUser = {
    name: "Ankit",//- key value pair - behind thee scenne name=> "name"
    "full name": "Ankit shukla",
    [mySym]: "mykey1",// how to create a key using symbol
    age: 18,
    location: "Jaipur",
    email: "Ankit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

// ####################How to acess object####################

// console.log(JsUser.email)//=>used to acces the value of the key
// console.log(JsUser["email"])  //
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ankit@chatgpt.com"
// Object.freeze(JsUser) // it will freeze the object and we can't change the value of the object
JsUser.email = "ankit@microsoft.com"
// console.log(JsUser);//

// ####################How to add a function ####################

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser.greeting);//output- undefined
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());