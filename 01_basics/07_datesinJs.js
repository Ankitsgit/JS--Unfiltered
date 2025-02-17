// Dates

let myDate = new Date()// current date and time
// console.log(myDate.toString());//=> example - Sat Jan 14 2023 00:00:00 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//=>example - Sat Jan 14 2023
// console.log(myDate.toLocaleString());=> example - 1/14/2023, 12:00:00 AM
// console.log(typeof myDate);=//=> example - object

//*********************To declare a specific date**********************

// let myCreatedDate = new Date(2023, 0, 23)//=> example - Sun Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)//=> example - Sun Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)
// let myCreatedDate = new Date("2023-01-14")//=> example -01/14/2023, 12:00:00 AM
let myCreatedDate = new Date("01-14-2023")//=> example -01/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());//=> example - 1/14/2023, 12:00:00 AM

//*********************To get the current date and time**********************
let myTimeStamp = Date.now()

// console.log(myTimeStamp);//=> example - 1642093200000- it will return the timestamp
// console.log(myCreatedDate.getTime());//=> example - 1642093200000- it will return the timestamp
// console.log(Math.floor(Date.now()/1000));//=> example - 1642093200- it will return the timestamp in seconds  

let newDate = new Date()
console.log(newDate);//=> example - Sat Jan 14 2023 00:00:00 GMT+0530 (India Standard Time)
console.log(newDate.getMonth() + 1);//=> example - 1- it will return the month
console.log(newDate.getDay());// => example - 6- it will return the day  

// `${newDate.getDay()} and the time `  

newDate.toLocaleString('default', {
    weekday: "long",
    
})
