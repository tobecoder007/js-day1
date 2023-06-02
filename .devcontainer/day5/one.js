// for ( Break & Continue )
// While 
// Do While

// for (let index = 0; index != 10; index++) {
//     const element = index
//     if (element == 5) {
//         console.log("5 is best");
//     }
//     console.log(element);
    
// }

// console.log(element) { Cannot access because element is defined in block scope }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value ${j} and inner loop `)
//     console.log(i + '*' + j + ' = ' + i*j );
        
//     }
    
    
// }

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue 

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`best number is ${index}`);
        // break
//     }
//     console.log(`value of is ${index}`);
// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`best number is ${index}`);
        continue
    }
    console.log(`value of is ${index}`);
}