// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myNewDate = new Date(2023, 0, 21, 5, 3, 1)
// let myNewDate = new Date("2023-01-24");
 let myNewDate = new Date("01-17-2023");

// console.log(myNewDate.toString());
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()} and the time is ` 

newDate.toLocaleString('default', {
    weekday: "long"
})