// We have various methods to create objects...Objects are like structures and classes in C++ where we can create our own data-types

// 1) Object Literals : Multiple Instances
// 2) Constructor : Singleton Instance....object.create





// OBJECT LITERALS
const JSUser = {    // Creation
    name: "Devansh",
    age: 19,
    email: "devanshchhabra@google.com",
    location: "Sonipat",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Thursday","Friday"]
}
// Accessing the Object
console.log(JSUser) // all details
// particular details
console.log(JSUser.email)  
console.log(JSUser['name'])
console.log(JSUser["isLoggedIn"])



const user ={
    name: "Devansh",
    "fullName": "Devansh Chhabra",
    'age': 19
}
console.log(user)
console.log(user.age)
console.log(user.fullName)


let obj = {
    name: "Devansh",
    "full name": "Devansh Chhabra"
}
