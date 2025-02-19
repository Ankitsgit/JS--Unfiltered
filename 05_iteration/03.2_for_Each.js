const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){// funnction(val) is a higher order function
//     console.log(val);//- js ruby java python cpp
// } )

// ------------------------------------using arrow function----------------

// coding.forEach( (item) => {
//     console.log(item);
// } )

// ----------------------------------------another way ------------------------------

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)//only function name is passed as argument

// ------------------------------------using index----------------

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// ------------------------------------ array of object----------------

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach( (item) => {// item is object
    
//     console.log(item.languageName);
// } )