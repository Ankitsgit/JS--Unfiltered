// -----------------change the value of Math.PI------------------

//getOwnPropertyDescriptor() method returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");


// console.log(descripter);//output- { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }
// writable: false means we can't change the value of PI
// enumerable: false means we can't loop over PI
// configurable: false means we can't delete PI
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//--------------------------------we can also define property descriptor----------------
// Object.defineProperty(chai, 'name', {})
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}