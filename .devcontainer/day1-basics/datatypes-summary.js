// primitive and non-primitive data ( how is data stored in memory and used to acess )

// // Primitive data 
// // 7 Types:
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

// const username = "Lavish"
// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId)

//  const bigNumber = 3456789875658944748598n 
// console.log(typeof bigNumber);

// // // Non-primitive or Reference type
// // Array
// // Objects
// // Functions

// const heros = ["shaktiman", "naagraj", "doga"]
// console.log(heros, typeof heros);

// let myObj = {
//     name: "lavish",
//     age: 22
// }
// console.log(typeof myObj)

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof myFunction)

// *************************************************************************************

// Memory is stored in two ways- Stack and Heap 

// Stack is used for Primitive Datatype (You get a copy when you store here)
// Heap is used for Non-primitive Datatype ( You get a reference when you store here)

let myYoutubename = "lavishk"
let anotherName = myYoutubename
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@hotmail.com"

console.log(userOne.email);
console.log(userTwo.email);

