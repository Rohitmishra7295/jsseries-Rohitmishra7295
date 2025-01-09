//imediate invoked function expression 
//Creating private scopes to protect variables or methods from being accessed 
//Preventing variables from polluting the global scope 
//Supporting modular programming

(function code(){  //named iife name is code
    console.log(`db connected`);
}) (); //semi colon is mandatory here to stop the previous code to start new code


( function code2 () {
    console.log(`db connected 2nd`);
}) ();


( (name) => {  //unnamed iife
    console.log(`db connected 3rd ${name}`);
}) ('rohit')