//dates

let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.getTime())
console.log(myDate.getFullYear())
console.log(myDate.getTimezoneOffset())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

let myCreatedDate=new Date(2024, 0, 24) //month starts with 0 
console.log(myCreatedDate.toDateString())

let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

 