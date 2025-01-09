const name="rohit"
const repocount=50

//console.log(name +" "+ repocount+" projectname-Myfirstrepo")

//string interpoletion
console.log(`hello my name is ${name} and my repocount is ${repocount} `);

const gameName=new String('RohitKungfu')

console.log(gameName[0])
console.log(gameName.__proto__);

 console.log(gameName.length)
 console.log(gameName.toLowerCase())
 console.log(gameName.concat('romi'))
 console.log(gameName.toUpperCase())
 console.log(gameName.charAt(5))
 console.log(gameName.replace())
 console.log(gameName.split())
 console.log(gameName.indexOf('t'))

 const newStr=gameName.substring(0,4)  //excldes 4th position element
 console.log(newStr);
 console.log(gameName.slice(-8,6))

 const newName="              Rohit   "
 console.log(newName);
 console.log(newName.trim());

 const url="https://rohit.com/rohit%20mishra"
 console.log(url.replace('%20','-'))

 //split method

 let value="Rohit-kumar-mishra-is-brilliant-guy"
 console.log(value.split('-'))