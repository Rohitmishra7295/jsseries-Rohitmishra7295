//singleton

//object literals

const mysym=Symbol("key1")

const jsUser={
    name:"rohit mishra" ,  //here name will treated as string
    age:20,
    [mysym]:"mykey1",
    collegeName:"MIT , meerut",
    email:"r123@gmail.com" ,
    "full name":"Rohit kumar mishra" ,//we cant access this type of objects by using dot operators
    location:"jaipur",
    isLoggedIn:false,
    lastLoginDay:["Mon" , "Sat"]
    
    
}
//to acces the objects
console.log(jsUser.email) //1st method
//console.log(jsUser.full name)
console.log(jsUser["full name"])
console.log(jsUser.age)
console.log(jsUser.collegeName)
console.log(jsUser[mysym])
console.log(jsUser.isLoggedIn)
console.log(jsUser.lastLoginDay)

//to change values
//jsUser.email="rajaram@gmail.com"

//users can't change existing values
//Object.freeze(jsUser)
//jsUser.email="rajuram@gmail.com"


//greeting
jsUser.greeting=function(){
    console.log("Hello users")
}
console.log(jsUser.greeting())


// Function declaration (Named function)
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Calling the function with an argument
greet("Rohit");  // Output: Hello, Rohit!



// Anonymous function assigned to a variable
const multiply = function(x, y) {
    return x * y;
};

// Calling the function
console.log(multiply(4, 3)); // Output: 12


// Arrow function (concise syntax)
const subtract = (a, b) => a - b;

// Calling the function
console.log(subtract(10, 4)); // Output: 6


// Function with a return value
function add(a, b) {
    return a + b;
}

// Calling the function and storing the result
const sum = add(5, 10);

console.log(sum); // Output: 15








/*// Singleton object with various types of properties including symbols and methods

// Define a symbol to use as a unique property key
const mysym = Symbol("key1");

// Create an object literal with a mix of string keys, symbols, and other types of properties
const jsUser = {
    name: "Rohit Mishra", // Regular string property
    age: 20, // Number property
    [mysym]: "mykey1", // Using a symbol as a unique property key
    collegeName: "MIT, Meerut", // String property
    email: "r123@gmail.com", // String property
    "full name": "Rohit Kumar Mishra", // String property with space, can't use dot notation for this
    location: "Jaipur", // String property
    isLoggedIn: false, // Boolean property
    lastLoginDay: ["Mon", "Sat"], // Array property
    
    // Adding a method to the object
    greeting: function() {
        console.log("Hello, users!");
    }
};

// Accessing properties of the object
console.log(jsUser.email); // Using dot notation to access 'email'
console.log(jsUser["full name"]); // Using bracket notation to access property with spaces
console.log(jsUser.age); // Accessing 'age' using dot notation
console.log(jsUser.collegeName); // Accessing 'collegeName' using dot notation
console.log(jsUser[mysym]); // Accessing the symbol property using the symbol itself
console.log(jsUser.isLoggedIn); // Accessing 'isLoggedIn' using dot notation
console.log(jsUser.lastLoginDay); // Accessing 'lastLoginDay' using dot notation

// Trying to change values (Uncomment to test)

// jsUser.email = "rajaram@gmail.com"; // This would work normally, but check further for Object.freeze

// Freezing the object to prevent any changes to existing properties
// Object.freeze(jsUser);

// Now attempting to change a property after freezing the object
// jsUser.email = "rajuram@gmail.com"; // This won't work because the object is frozen

// Print out the email after trying to change it
console.log(jsUser.email); // The email will not change if the object is frozen

// Call the greeting method on the jsUser object
console.log(jsUser.greeting()); // This will invoke the greeting method and output "Hello, users!"



console.log("********second example********");

// Define a symbol to use as a unique property key
const mysym1 = Symbol("key1");

// Create an object literal with a mix of string keys, symbols, and other types of properties
const jsUser1 = {
    name: "Rohit Mishra",
    age: 20,
    [mysym]: "mykey1",
    collegeName: "MIT, Meerut",
    email: "r123@gmail.com",
    "full name": "Rohit Kumar Mishra",
    location: "Jaipur",
    isLoggedIn: false,
    lastLoginDay: ["Mon", "Sat"],

    // Adding a method to the object
    greeting: function() {
        console.log("Hello, users!");
    }
};

// Change the email property **before** freezing the object
jsUser1.email = "newemail@example.com"; // This works because Object.freeze() has not been applied yet

console.log(jsUser1.email); // This will output "newemail@example.com"

// Freeze the object now
Object.freeze(jsUser1);

// Now, try to change the email again **after** freezing the object
jsUser1.email = "attemptedchange@example.com"; // This will not work due to Object.freeze()

console.log(jsUser1.email); // This will still output "newemail@example.com", the previous change that was done before freezing
 */