const name = "lavish"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(typeof name);
console.log(typeof repoCount);

const gameName = new String('lavish-k-com')

console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 3)
console.log(anotherString);

const newStringOne = "    lavish     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://lavish.com/lavish%20k"

console.log(url.replace('%20', '-'))

console.log(url.includes('lavish'))
console.log(url.includes('game'))

console.log(gameName.split('-'));