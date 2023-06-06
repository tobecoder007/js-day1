// for of - works for Array & Maps

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

// Object cannot be iterated

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, '-', value);
}
