const User = {
    _email: 'h@hc.com',
    _password: "abc",//_ is used to make the variable private



    get email(){//get email means -ki main email ko get kar raha hoon
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);