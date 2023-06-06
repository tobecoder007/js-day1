// for in

const myObject = {
    js: 'javascript',
    rb: 'ruby',
    cpp: 'C++'
}

// for (const key in myObject) {
//     console.log(`${key} shortcut stands for ${myObject[key]}`);
// } 

for (const key in myObject) {
 console.log(key);
}

for (const key in myObject) {
console.log(myObject[key]);
}

for (const key in myObject) {
console.log(`${key} stands for ${myObject[key]}`);
}

// For in loop for Array

const progamming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in progamming) {
console.log(progamming[key]);
}

// For in loop for maps ( cannot be iterated )

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('FR', "France")

for (const key in map) {
  console.log(key);
}