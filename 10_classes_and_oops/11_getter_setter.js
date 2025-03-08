class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){//used to get the value from the class or memory location,on which it is called
        return this._email.toUpperCase()
    }
    set email(value){//used to set the value to the class or memory location,on which it is called
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);