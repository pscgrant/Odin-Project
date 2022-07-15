// Coding along https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings
// Using same variables as the examples, ignore the errors

// creating a string
const string = ' The revolution will not be  televised.';

const badString = string;


// Concatenating strings

const name = 'Chris';
const greeting = `Hello, ${name}`; // Using back ticks allows us to combine strings together. ${} allows to grab a variable to insert into string.
console.log(greeting); // "Hello Chris"

// Can also combine two variables together.
const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one} + ${two}`;
console.log(joined); // "Hello, how are you?"

// Concatenation in context
const button = document.querySelector('button');

function greet() {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);
/* Here this is using the window.prompt() function, 
which asks the suer to answer a question via a popup dialog box then stores 
the text they enter inside a given variable-in this case 'name'. We then use the
window.alert() function to display another popup containing a string which inserts the name into 
a generic greeting message.*/

// Concatenation using "+"

const greeting2 = "Hello";
const name2 = "Chris";
console.log(greeting2 + ", " + name2); // "Hello, Chris"

// Template literals usually give more readable code:
const greeting3 = "Hello";
const name3 = "Chris";
console.log(`${greeting3}, ${name3}`); // "Hello, Chris"




// Numbers vs. strings
// combining a string and a number?
const name4 = "front ";
const number = 242;
console.log(`${name}${number}`); // "Front 242"
// The browser will convert the number into a string when combining a string and a number


// If there is a numeric variable that you want to convert to a string but nto change otherwise,
// or a string variable that you want to convert to a number but not change otherwise, you can use either the Number object or toString()

// Number object: converts anything passed to it into a number
const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);

// toString(): every number has a method called toString() that converts it to the equivalent string
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);

/* These constructs can be really useful in some situations.
Example: If a user enters a number into a form's text field, it's a string.
However, if you want to add this number to something, you'll need it to be a number,
so you could pass it through "Number()" to handle this.*/



// Including expressions in strings

const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output); // "I liked the song Fight the Youth. I gave it a score of 90%"

// Multiline strings
// Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this
const output2 = `I like the song.
I gave it a score of 90%`;
console.log(output2); // I like the song.
                      // I gave it a score of 90%; 

// To have the equivalent output using a normal string you'd have to include line break characters (\n) in the string.
const output3 = 'I like the song. \nI gave it a socre of 90%.';
console.log(output3); // I like the song.
                      // I gave it a score of 90%.
