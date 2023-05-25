// singleton 
// Object.create


// object literals 

const mySym = Symbol("key1")


const jsUser = {
    name: "Lavish",
    age: 18,
    [mySym]: "myKey1",
    "full name": "LK",
    location: "Jaipur",
    email: "lk@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday", 17]
}


// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])


// console.log(jsUser[mySym]);
// console.log(jsUser)

jsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`);
}

jsUser.greetingTwo = function(){
    console.log("Hello JS User");
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());