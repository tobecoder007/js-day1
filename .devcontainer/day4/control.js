// if

const isLoggedIn = true

// if (2 === "2" ) {
//     console.log("executed");
// }
// else{
//     console.log("deny")
// }

// <, >, <=, >=, ==, !=, ===, !==

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = false
const loggedInFromGoogle = 1


// if (userLoggedIn && debitCard && 2 == "2") {
//     console.log("Accepted");
// }

if (loggedInFromEmail || loggedInFromGoogle ) {
    console.log("Accepted");
}