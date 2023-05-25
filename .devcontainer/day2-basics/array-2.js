const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allHeros = [...marvel_heros, ...dc_heros] // spread method 
console.log(allHeros); 

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_Array = anotherArray.flat(Infinity);
console.log(real_Array);

console.log(Array.isArray("Lavish"))
console.log(Array.from("Lavish")) 
console.log(Array.from({name: "lavish"})) // interesting case 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));