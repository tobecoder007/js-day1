const userEmail = []

if (userEmail) {
    console.log("YES");
} else {
    console.log("NO");
}


// falsy values - false, 0, -0, bigInt 0n, "", null, undefined, NaN
// truthy values - "0", 'false', " " (Space is added), [], {}, function(){}

if (userEmail.length === 0) {
    console.log("empty");
}

const emptyObj = {}

if (Object.keys(emptyObj.length === 0)) {
    console.log("empty obj");
}

// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10 ?? 20
val1 = null ?? 5 ?? 10

console.log(val1);

// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 1000

iceTeaPrice <= 800 ? console.log("less than 800") : console.log("more than 800")