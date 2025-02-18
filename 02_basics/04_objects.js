// const tinderUser = new Object()  //singleton object
const tinderUser = {} /// non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nested object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ankit",
            lastname: "shukla"
        }
    }
}

// ####################How to acess nested object####################

// console.log(regularUser.fullname.userfullname.firstname);


// ############################How to merge an object#################### 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }- it will not merge the object
// const obj3 = Object.assign({}, obj1, obj2, obj4)   //- it will merge the object  


// target object -{}, source object- obj1, obj2, obj4
// ye target object me obj1, obj2, obj4 ke key value pair add kar dega
// agar target object nahi pass karenge to ye source object me hi add kar dega
 
const obj3 = {...obj1, ...obj2}//- it will merge the object  
// console.log(obj3);
 
// ################################# object in array####################################
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));// it will return the keys of the object -in array format-["id", "name", "isLoggedIn"]
// console.log(Object.values(tinderUser));// it will return the values of the object -in array format-["123abc", "Sammy", false]
// console.log(Object.entries(tinderUser));// it will return the key value pair of the object -in array format- [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// it will return true or false- true


// ############################################# Destructuring #############################################

// it is a way to extract multiple properties from an object or multiple elements from an array and store them in variables

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ankit"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
  

// ############################################# JSON #############################################
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
