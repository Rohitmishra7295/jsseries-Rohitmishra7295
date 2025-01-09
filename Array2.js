const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) //prints array inside array

const allHeros=marvel_heros.concat(dc_heros)  //returns new array
console.log(allHeros)

//other method to concate can concate more than two arrays
const all_heros=[...marvel_heros,...dc_heros]
console.log(all_heros)


//to sprade arrays in side array in one array
const arr=[1,2,3,[,4,5,6,[,7,8,9],[10,11,12]],[13,14,15,16]]
const oneArr=arr.flat(Infinity)
console.log(oneArr)

console.log(Array.isArray({a:"rohitkumar"}))
console.log(Array.from("rohitkumar"))
console.log(Array.from({name:"rohitkumar"}))

