// Comparisons
// Greater/less than: a > b, a < b
// Greater/less than or equals: a >= b, a <= b
// Equals: a == b, note the double equality sign == means the equality test, while a single on a = b means an assignment. 
// Not equals: a != b
// All comparison operators return a boolean value: true or false

alert( 2 > 1); // true
alert( 2 == 1); // false
alert( 2 != 1); // true

// A comparison result can be assigned to a variable, just like any value:
let result = 5 > 4; 
alert( result ); // true

// Conditionals 
// Use "if" to specify a block of code to be executed, if a specified condition is true
// Use "else" to specify a block of code to be executed, if the same condition is false
// use "else if" to specify a new condition to test, if the first condition is false
// use "switch" to specify many alternative blocks of code to be executed

// The if statement
// Syntax:
if (condition) {
    // block of code to be executed if the condition is true
};

if (hour < 18) {
    greeting = "Good day";
};
// Result = Good day

// The else statement
if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
};

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
};
// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening"

// else if statement
if (condition1) {
    // block of code to be executed if the condition1 is true
} else if (condition2) {
    // block of code to be executed if the condition1 is false and condition2 is true
} else {
    // block of code to be executed if the condition1 is false and condition2 is false
};

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20); {
    greeting = "Good day";
} else {
    greeting = "Good morning";
};