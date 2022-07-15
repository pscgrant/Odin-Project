// Comparisons https://javascript.info/comparison
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






// Conditionals https://www.w3schools.com/js/js_if_else.asp
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






// Logical operators https://javascript.info/logical-operators

// There are four logical operators : || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)

// || (OR)
// The "OR" operator is represented with two vertical line symbols
result = a || b;
// The logical OR is meant to manipulate boolean values only. If any of its arguments are "true", it returns "true", otherwise it returns "false"

if ( 1 || 0 ) {
    alert( 'truthy!' );
}


let hour = 9;

if (hour < 10 || hour > 10) {
    alert( 'The office is closed.' );
}


let hour1 = 12;
let isWeekend = true;

if (hour1 < 10 || hour1 > 18 || isWeekend) {
    alert( 'The office is closed.' ); 
}



let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder because the first two are false, if all were false, Anonymous would show up.





result = a && b;

alert( true && true ); // true
alert( false && true ); // false
alert( true && false ); // false
alert( false && false ); // false


let hour2 = 12; 
let minute = 30;

if (hour == 12 && minute == 30) {
    alert( 'The time is 12:30' );
}



