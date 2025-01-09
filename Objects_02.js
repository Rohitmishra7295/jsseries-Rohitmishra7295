const tinderUser={}

tinderUser.id="1234abc",
tinderUser.name="rani",
console.log(tinderUser)

console.log(Object.keys(tinderUser))   //data type is array
console.log(Object.values(tinderUser))  
console.log(Object.entries(tinderUser))  
 

const regularUser={
    email:"w@gmail.com",
    fullname:{
        userfullname:{
            first_name:"Rohit",
            middle_name:"Kumar",
            last_name:"Mishra"
        }
    }
}
//console.log(regularUser);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"a",5:"b",6:"c"}

//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)

 //const obj=Object.assign(target,source)

//const obj3=Object.assign({},obj1,obj2) //better way for exact value and also missing arrays

const obj3={...obj1,...obj2}

console.log(obj3)