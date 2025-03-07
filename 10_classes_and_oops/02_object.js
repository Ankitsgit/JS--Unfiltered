/*
----------------everthing is object in js----------------
arraay-  has prototype  -> object but object has no  superprototype
function -> has prototype -> object but object has no superprototype
string -> has prototype -> object but object has no superprototype

--->bottom to top--> hierarchy--> follow karte hue prototype chain chalti hai
    --top ko access kar sakte hai but bottom ko access nahi kar sakte
    --prototype chain is used to access the properties of the object
*/

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));//25
console.log(multipleBy5.power);//2
console.log(multipleBy5.prototype);//undefined

// -------------------prototype----------------

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){//prototype is used to add a method to the object
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
//---------------new keyword ki mahima----------------


const chai = new createUser("chai", 25)// here we are using new keyword so it will create a new object
const tea = createUser("tea", 250)// here we are not using new keyword so it will not create a new object

chai.printMe()//price is 25
tea.printMe()// -error 


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/