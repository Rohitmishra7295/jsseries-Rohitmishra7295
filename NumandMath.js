//numbers

// const score=400
// console.log(score)
// console.log(score.toString()) //number 400 changed in string
// //can apply string methods on 400
// console.log(score.toString().length)
// console.log(score.toFixed(3)) //to fixed exponential values
// const balance=new Number(100)
// console.log(balance);

// const othernum=2334.34567
// console.log(othernum.toPrecision(4));

// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'))


//maths

console.log(Math)

console.log(Math.abs(-4));//it only changes negative value to positive

console.log(Math.round(4.3)); //roundoff to its nearest precission
console.log(Math.floor(4.5)); //lower roundoff values
console.log(Math.ceil(4.5)); //upper roundoff values

console.log(Math.exp(1));

//Math.pow(base, exponent)
console.log(Math.pow(2,5));
console.log(Math.pow(-7, 2));
console.log(Math.pow(-7,1/3));
console.log(Math.pow(-7, 0.5)); // NaN (negative numbers don't have a real square root)
// Due to "even" and "odd" roots laying close to each other,
// and limits in the floating number precision,
// negative bases with fractional exponents always return NaN,
// even when the mathematical result is real

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));