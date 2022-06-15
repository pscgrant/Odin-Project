
// Strings
let name = "John";
// can embed a variable
alert(`Hello, ${name}!`);// Hello, John!
//embed an expression
alert(`the result is ${1+2}`); //the result is 3


//Boolean(logical type)
// used to store yes/no values. True means "yes, correct", and false means "no, incorrect".
let nameFieldChecked = true; //yes, name field is checked.
let ageFieldChecked = false; // no, age field is not checked. 

let isGreater = 4 > 1;
alert( isGreater ); // true



//Objects and Symbols
/* The object type is special.
All other types are "primitive" because their values can contain only a single thing a string or a number. 
Objects can store collections of data and more complex entities. */

// typeof operator
// This operator returns the type of argument. It's useful when we want to process values of different types differently or just want to do a check.
// A call to typeof x returns a string with the type name.

typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"


// The 8 basic data types in JS
/* 
number: for numbers of any kind: integer or floating-point
bigint: is for integer numbers of arbitary length
string: for strings. A string may have zero or more characters, there's no separate single-character type
boolean: for true/false
null: for unknown values-a standalone type that has a single value null
undefined: for unassigned values
object: for more complex data structures
symbol: for unique identifiers
*/
