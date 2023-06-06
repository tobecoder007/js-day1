// For each loop

const coding = ['js', 'rb', 'java', 'python', 'cpp']

// Variation 1 using arrow function 

// coding.forEach( (items) => {
//     console.log(items);
// });

// Variation 2 using normal function 

// coding.forEach( function (item) {
//     console.log(item);
// } )

// Variation 3 using reference 

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)