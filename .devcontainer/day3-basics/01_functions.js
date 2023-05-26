function myName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// myName()

// function addTwoNums(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNums(num1, num2){
    // One way

    // let result = num1 + num2
    // return result

    // Second way

    return num1 + num2
}

const result = addTwoNums(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage("Hitesh")) 
// console.log(loginUserMessage());


// 2nd way

function loginUserMessage1(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage("Hitesh")) 
// console.log(loginUserMessage1("Samagain"));


function calculateCartValue (val1, val2, ...num1){
    return num1
}

// console.log(calculateCartValue(200, 400, 500, 2000)) 


// Object check

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "adam",
    price: 399
})


// Array Check

const myNewarray = [200, 400, 100, 500]

function returnSecondvalue (getNewarray){
    return getNewarray[1]
}

// console.log(returnSecondvalue(myNewarray));
console.log(returnSecondvalue([200, 400, 500, 1000]));
