function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  
// -------------------  //SetUsername(username)-------------
     //actually it is called but after completion of this function
    // this will removed from call stack and refence is lost
   //so this.username is not set 

// ---------------------to hold the reference of this we use call method----------------
 SetUsername.call(this, username)// so now i wiill use your this reference not mine  and set the username
                                // because mine is already removed from call stack

   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);