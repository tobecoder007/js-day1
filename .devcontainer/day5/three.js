// for of

// ["h", "i", "w", "o"]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = 'Hello world'
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")

for (const [key, value] of map) {
    console.log(key, '-', value);
}
