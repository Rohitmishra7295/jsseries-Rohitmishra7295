//syntax:array.reduce(callback, initialValue)


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);  // 0 is the initial value for accumulator

console.log(sum);  // Output: 15


//Flattening an array of arrays
const arrays = [[1, 2], [3, 4], [5, 6]];

const flattened = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);  // [] is the initial value, an empty array

console.log(flattened);  // Output: [1, 2, 3, 4, 5, 6]
