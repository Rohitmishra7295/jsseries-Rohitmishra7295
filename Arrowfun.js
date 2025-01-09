const user={
    username:"raj",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this) //This is talking about current context
    }
}
// user.welcomemessage()
// user.username="rohit"
// user.welcomemessage()

// console.log(this) //it will give empty pranthesis

// function code(){
//     let user="hitesh"
//     console.log(this.user)
// }


//arrow function
const code = () => {
    let user="hitesh"
    console.log(this);
}
code()


// const addTwo =(num1 ,num2) => {
//     return num1+num2                     //arrow function
// }
// console.log(addTwo(3,4))


//**********implict return***********

// const addTwo =(num1 ,num2) =>   num1+num2

// const addTwo =(num1 ,num2) =>  ( num1+num2 )

const addTwo =(num1 ,num2) => ({username:"rohit"})

console.log(addTwo(3,4))