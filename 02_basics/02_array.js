const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//=> it will add the dc_heros array as a single element in the marvel_heros array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//=> f- it will return the 2nd character of the 4th element

// const allHeros = marvel_heros.concat(dc_heros)//=> it will merge the two arrays
// console.log(allHeros);//=> ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros]//=> it will merge the two arrays

// console.log(all_new_heros);//=> ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//=> it will flatten the array
console.log(real_another_array);//=> [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Ankit"));//=> false means it is not an array
console.log(Array.from("Ankit"));//=> ["A", "n", "k", "i", "t"] - it will convert the string to array
console.log(Array.from({name: "Ankit"})) // => []- it will return an empty array because it is an object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//=> [100, 200, 300]