/*
--->bottom to top-hierarchy--> follow karte hue prototype chain chalti hai
    --top ko access kar sakte hai but bottom ko access nahi kar sakte
    --prototype chain is used to access the properties of the object
*/

// -------challaenge 1----------------
/*
 ---------create a function that will take a string and return trueLength of the string---------
 example---
         // let myName = "hitesh     "
          // let mychannel = "chai     "

         // console.log(myName.trueLength);
 
*/
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//----------bottom to top  hierarchy----------------

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// --------------------prototype inheritance----------

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//this is the old  way to set prototype
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

//------------------cllange one solution----------------

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);// this refers to the string
    console.log(`True length is: ${this.trim().length}`);
}

// this refer-- karta hai jo ise bulata hai
 
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()