// let yourName="Bharath";
// let yourAge=22;
// let yourCity="Hyderabad";
// console.log(`Hi,I'm ${yourName},${yourAge} years old ,from ${yourCity}`);

// let num1=10;
// let num2=15;
// console.log("Addition:",num1 + num2);
// console.log("Subtraction:",num1 - num2);
// console.log("Multiplication:",num1 * num2);
// console.log("Division:",num1 / num2);

// let firstName="Bharath";
// let lastName="Bommani";
// let fullName=firstName + " "+ lastName;
// console.log("Full Name:",fullName);
// console.log("Name length:",fullName.length);
// console.log("Uppercase:",fullName.toUpperCase());

// const firstName="Bharath";
// const lastName= "Bommani";
// let age=22;
// let city="Hyderabad";
// const country="IN";

// const fullName=firstName + " " + lastName;
// console.log(`Hello,I'm ${fullName}`);

// let cartItems=0;
// let cartTotal=0;
// const maxItems=10;

// cartItems=3;
// cartTotal=99.9;

// console.log(`Cart:${cartItems}/${maxItems} Items,Total: $${cartTotal}`);

// const userPreferences={
//     theme:"dark",
//     language:"en",
//     notifications:true
// };

// userPreferences.theme="light";
// userPreferences.fontsize="medium";
// console.log("User Preferences:", userPreferences);

// const celsius =27;
// let fahrenheit=(celsius * 9/5) + 32;
// let kelvin=celsius + 273.15;

// console.log(`${celsius}^C= ${fahrenheit}^F=${kelvin}K`);

//DataTypes
// Basic arithmetic
// let a = 10;
// let b = 3;

// console.log(a + b);  // 13 (addition)
// console.log(a - b);  // 7  (subtraction)
// console.log(a * b);  // 30 (multiplication)
// console.log(a / b);  // 3.333... (division)
// console.log(a % b);  // 1  (remainder/modulo)
// console.log(a ** b); // 1000 (exponentiation)
// console.log("---------");
// // Increment and decrement
// let counter = 5;
// counter++;        // 6 (post-increment)
// ++counter;        // 7 (pre-increment)
// counter--;        // 6 (post-decrement)
// --counter;        // 5 (pre-decrement)
// console.log(counter);
// console.log("------");
// // Number methods
// let num = 123.456;
// console.log(num.toFixed(2));      // "123.46"
// console.log(num.toPrecision(4));  // "123.5"
// console.log(parseInt("123.45"));  // 123
// console.log(parseFloat("123.45")); // 123.45
// console.log("-----");
// // Checking for valid numbers
// console.log(isNaN("hello"));      // true
// console.log(isFinite(100));       // true
// console.log(isFinite(Infinity));  // false


//strings
// let text = "JavaScript is awesome!";

// // Properties
// console.log(text.length);           // 21

// // Case methods
// console.log(text.toUpperCase());    // "JAVASCRIPT IS AWESOME!"
// console.log(text.toLowerCase());    // "javascript is awesome!"

// // Search methods
// console.log(text.indexOf("Script")); // 4
// console.log(text.includes("Java"));  // true
// console.log(text.startsWith("Java")); // true
// console.log(text.endsWith("some!"));  // true

// // Extraction methods
// console.log(text.substring(0, 10));  // "JavaScript"
// console.log(text.slice(0, 10));     // "JavaScript"
// console.log(text.slice(-8));        // "awesome!"

// // Replace methods
// console.log(text.replace("awesome", "amazing")); // "JavaScript is amazing!"

// // Split method
// let words = text.split(" ");
// console.log(words); // ["JavaScript", "is", "awesome!"]

// // Trim whitespace
// let messy = "  Hello World  ";
// console.log(messy.trim()); // "Hello World"

//String Concatenation
// let firstName = "John";
// let lastName = "Doe";

// // Method 1: + operator
// let fullName1 = firstName + " " + lastName;

// // Method 2: Template literals (recommended)
// let fullName2 = `${firstName} ${lastName}`;

// // Method 3: concat() method
// let fullName3 = firstName.concat(" ", lastName);

// // Complex template literals
// let user = {
//     name: "Alice",
//     age: 30,
//     city: "New York"
// };

// let userInfo = `
//     User Information:
//     Name: ${user.name}
//     Age: ${user.age}
//     City: ${user.city}
//     Status: ${user.age >= 18 ? "Adult" : "Minor"}
// `;

// Intentionally empty value
// let data = null;
// let selectedItem = null;
// let currentUser = null;

// console.log(typeof null);     // "object" (JavaScript quirk!)

// // Common usage patterns
// function findUser(id) {
//     // If user not found, return null
//     if (id === 999) {
//         return null;
//     }
//     return { id: id, name: "User " + id };
// }

// let user = findUser(999);
// if (user === null) {
//     console.log("User not found");
// }

// // Difference between null and undefined
// let undefinedVar;
// let nullVar = null;

// console.log(undefinedVar == null);   // true (loose equality)
// console.log(undefinedVar === null);  // false (strict equality)
// console.log(nullVar == undefined);   // true (loose equality)
// console.log(nullVar === undefined);  // false (strict equality)


//objects
// Object literal syntax
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     isEmployed: true,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         zipCode: "10001"
//     },
//     hobbies: ["reading", "swimming", "coding"]
// };

// // Accessing properties
// console.log(person.firstName);           // "John"
// console.log(person["lastName"]);         // "Doe"
// console.log(person.address.city);        // "New York"

// // Adding/modifying properties
// person.email = "john@example.com";
// person.age = 31;

// // Deleting properties
// delete person.isEmployed;

// console.log(typeof person);              // "object"

//Arrays
// Array literal syntax
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ["apple", "banana", "orange"];
// let mixed = [1, "hello", true, null, { name: "John" }];

// // Accessing elements
// console.log(fruits[0]);                  // "apple"
// console.log(fruits[fruits.length - 1]); // "orange" (last element)

// // Array properties and methods
// console.log(fruits.length);              // 3
// fruits.push("grape");                    // Add to end
// fruits.unshift("mango");                 // Add to beginning
// let lastFruit = fruits.pop();            // Remove from end
// let firstFruit = fruits.shift();         // Remove from beginning

// console.log(lastFruit);
// console.log(firstFruit);
// console.log(fruits);
// console.log(typeof fruits);              // "object"
// console.log(Array.isArray(fruits));     // true

//functions
// Function declaration
// function greet(name) {
//     return "Hello, " + name + "!";
// }

// // Function expression
// let sayGoodbye = function(name) {
//     return "Goodbye, " + name + "!";
// };

// // Arrow function
// let add = (a, b) => a + b;
// console.log(add(1,4));
// console.log(typeof greet);               // "function"
// console.log(greet("Bharath"));             // "Hello, Alice!"

// User data with different types
// let userData = {
//     // Strings
//     firstName: "Alice",
//     lastName: "Johnson",
//     email: "alice@example.com",
    
//     // Numbers
//     age: 29,
//     userId: 12345,
    
//     // Booleans
//     isActive: true,
//     hasVerifiedEmail: false,
//     isAdmin: false,
    
//     // Arrays
//     hobbies: ["reading", "hiking", "photography"],
//     languages: ["English", "Spanish", "French"],
    
//     // Objects
//     address: {
//         street: "456 Oak Ave",
//         city: "San Francisco",
//         state: "CA",
//         zipCode: "94102"
//     },
    
//     // Null (optional data)
//     phoneNumber: null,
//     profilePicture: null,
    
//     // Date (object)
//     registrationDate: new Date(),
//     lastLoginDate: undefined
// };

// // Type checking and validation
// function validateUser(user) {
//     let errors = [];
    
//     if (typeof user.firstName !== "string" || user.firstName.length === 0) {
//         errors.push("First name is required");
//     }
    
//     if (typeof user.age !== "number" || user.age < 13) {
//         errors.push("Age must be a number and at least 13");
//     }
    
//     if (typeof user.email !== "string" || !user.email.includes("@")) {
//         errors.push("Valid email is required");
//     }
    
//     return errors;
// }

// let validationErrors = validateUser(userData);
// console.log("Validation errors:", validationErrors);

// function identityType(value){
//     if(Array.isArray(value)){
//         return "Array";
//     }
//     else if (value===null){
//         return "null";
//     }
//     else{
//         return typeof value;

//     }
// }

// console.log(identityType(32));
// console.log(identityType("sh"));
// console.log(identityType("False"));
// console.log(identityType([]));
// console.log(identityType({}));
// console.log(identityType());
// console.log(identityType(null));

function validateproduct(product){
    let isValid=true;
    let errors=[];

    if (typeof product.name !== "string" || product.name.trim()===""){
        errors.push("product name is required");
        isValid=false;
    }
    if(typeof product.price!=="number"|| product.price <=0){
        errors.push("Price must be a positive number");
        isValid=false;
    }
    if(!Number.isInteger(product.quantity)||product.quantity <=0){
        errors.push("quantity must be a non-negative integer");
        isValid=false;
    }
    if(typeof product.inStock !== "boolean"){
        errors.push("in Stock must be a boolean");
        isValid=false;
    }
    return { isValid,errors }
}
let product1={
    name:"laptop",
    price:23.4,
    quantity:9,
    inStock:false
};
let product2={
    name:"tier",
    price:-22,
    quantity:23,
    inStock:true
};
console.log(validateproduct(product1));