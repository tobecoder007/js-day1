let userInput = 30;
// let result

// result = 18 + userInput

// result = result - 18
// result = result * 2
// result = result / 10

// alert(result)
// console.log(result);
// alert(userInput) 

// function substract(a, b){
//     const result = a - b;
//     console.log(result);
//    return result;
// }
// result = substract(5,3)


// function stringify(num){
//   return `result: ${num}`
// }

// result = stringify(10)
// console.log(result, typeof result);

// let userName = 'Max';
// userName = 'Manu';

// function greetUser(name) {
//   let userName = name;
//   console.log(userName);
// }

// greetUser('Max');


var double = function doubleFunction(aNumber) {
  return aNumber * 2

}

console.log(double(2));


var transform = function transform(num, fn){
  return fn(num)
}

console.log(transform(10,double)) 

let numbers = [10, 3, -1];

function solve() {
    // Todo: Your solution goes here
    // Important: It must be put into this function!
    numbers.push(8, 2)
    
}

solve()

console.log(numbers);