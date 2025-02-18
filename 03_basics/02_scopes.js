var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    let c = 30
    // console.log("INNER: ", a);//=> 10 - it will print the value of a because a is block scope
    
}



// console.log(a); //=> 300- it will print the value of a because a is global scope 
// console.log(b); //=> b is not defined - it will throw an error-because b is block scope

// if we use var in function  then it will print the value of c-30
// if we use let then it will throw an error because c is block scope
// console.log(c); //=> 30- it will print the value of c because c is function scope



// ################################### nested scope ########################################
//
// closuer - it is a function inside a function and it has access to the outer function variables


function one(){
    const username = "Ankit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //=> website is not defined - it will throw an error-because website is block scope

     two() //- it will print the username but upon calling the one() function

}

// one() //- it will print the username only upon calling two() function inside the one() function

if (true) {
    const username = "Ankit"
    if (username === "Ankit") {
        const website = " youtube"
        // console.log(username + website);//=> Ankit youtube
    }
    // console.log(website);//=> website is not defined - it will throw an error-because website is block scope
}

// console.log(username);//=> username is not defined - it will throw an error-because username is block scope


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))//=> it will print 6 but it should throw error  cannot access 'addone' before initialization

function addone(num){
    return num + 1
}



// addTwo(5)//=> it will throw an error because cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))//=> it will print 7 because addTwo is defined after the function call