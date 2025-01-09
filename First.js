const accountId=14434
let accountEmail="R@123gmail.com"
var accountPassword="12345"
accountCity="jaipur" //declaration of variable without keyword var is also allowed
let accountState; //o/p undfined due to undeclared value

//accountId=2  //const keyword's value is not allowed to change further

accountEmail="Rkm@123gmail.com"
accountPassword="12345678"
accountCity="jaunpur" 

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountPassword,accountState]);

/* --->prefer not to use var because of issue in block scope and fun scope
-->let keyword is used to declare variable
-->const keyword is used to declare constant in java script
 */ 