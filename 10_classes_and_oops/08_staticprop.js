class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
// static keyword is used to create static properties and methods- which are not available to instances
    static createId(){//  static method is called on class itself not on instance
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())//--error
console.log(User.createId());//123

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());//-error