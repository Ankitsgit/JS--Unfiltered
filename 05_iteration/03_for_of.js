// for of

// ["", "", ""]//- Array of strings
// [{}, {}, {}]//- Array of objects 

const arr = [1, 2, 3, 4, 5]

// isko sab pata hai  ki kab tak chalana hai
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps-it is an object which stores key-value pairs
// remeber original insertion order of the keys
// keys can be of any type and unique value  

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);// - Map { 'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France' }

for (const [key, value] of map) {
    // console.log(key, ':-', value);//- IN :- India, USA :- United States of America, Fr :- France
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);// - TypeError: myObject is not iterable
    
// }