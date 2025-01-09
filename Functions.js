//let score="34abc"
//let score=null
//let score=undefined
//let score=true;
let score=1
console.log(typeof score); 
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber);
//1 => true
//0 =>false
//""=>false
//"Rohit"=>true

let num=23
let stringNum=String(num)
console.log(stringNum);
console.log(typeof stringNum);


const a = "Hello learners"
console.log(a);

const b = 400;
console.log(b);
const c = "12";
console.log(c);
// Can not change a value for a constant
//c = "new"
console.log(c)


var A = "Hello Geeks";
var B = 10;
var C = 12;
var D = b + c;

console.log(A);
console.log(B);
console.log(C);
console.log(D);


/*  const keyword is used when we assign a value 
permanently to a variable. So when we try to change the value of 
a variable declared with the const keyword it will throw an error.
 The variables declared with var and let are mutable that is their value 
 can be changed but variables declared using const are immutable. */


 function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
 }

 sayMyName()


 function addNum(num1,num2){
    if(typeof num1=='number'&& typeof num2=='number'){
        return num1+num2;
    }else{
        return false;
    }
 }

 console.log(addNum(10,7))
 console.log(addNum(10,"n"))

 const res=addNum(8,9)
 console.log("result is ",res)