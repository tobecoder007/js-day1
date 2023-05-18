const accountId = 144553 // Declaring const by using const command only 
let accountEmail = "lavish@gmail.com" // Declaring variable by using let and var. Using let is more common practise 
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 
console.log(accountId);

accountEmail = "lk@gmail.com"
accountPassword = "212121"
accountCity = "Dubai"

console.table([accountEmail, accountPassword, accountCity, accountId, accountState])

// Prefer not to use var because of issue in block scope and functional scope
// If you do not define value for variable the result will be undefined 