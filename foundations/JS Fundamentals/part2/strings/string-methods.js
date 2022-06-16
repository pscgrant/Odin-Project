// coding alone with https://www.w3schools.com/js/js_string_methods.asp

// Length property returns the length of a string
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let length = txt.length; // 26

// Extracting String Parts
/* 3 methods for extracting a part of a string
slice(start, end)
substring(start, end)
substr(start, length)
*/

// Slice(): extracts a part of a string and returns the extracted part in a new string
// The method takes 2 parameters: the start position, and the end position (end not included).
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13); // Banana

// If a parameter is negative, the position is counted from the end of the string.
let str2 = "Apple, Banana, Kiwi";
let part2 = str2.slice(-12, -6); // Banana

// If you omit the second parameter, the method will slice out the rest of the string
let str3 = "Apple, Banana, Kiwi";
let part3 = str3.slice(7); // Banana, Kiwi

let str4 = "Apple, Banana, Kiwi";
let part4 = str4.slice(-12); // Banana, Kiwi


// substr(): is similar to slice(). Difference is that the second parameter specifies the length of the extracted part. 
let str5 = "Apple, Banana, Kiwi";
let cut = str5.substr(7,6); 

// replace(): method replaces a specified value with another value in a string. This method is also case sensitive. 
// To replace case insensitive, use a regular expression with an /i flag. /MICROSOFT/i
// To replace all matches, use a regular expression with a /g flag (global match) /Microsoft/g
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3schools")
// "Please visit "W3schools"


// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase()
// A string is converted to lower case with toLowerCase()
let text1 = "Hello World!";
let text2 = text1.toUpperCase(); // HELLO WORLD!


// String concat()
// concat() joins two or more strings
let text3 = "Hello";
let text4 = "World";
let text5 = text3.concat(" ", text4);// "Hello World"

// String trim()
// the trim method removes whitespace from both sides of a string
let text6 = "      Hello World!       ";
let text7 = text6.trim();



// String padStart()
// padStart() method pads a string with another string:
// Note: the padStart() method is a string method. To pad a number, convert the number to a string first. 
let text8 = "5";
let padded = text8.padStart(4,"x"); // xxx5

let text9 = "5";
let padded2 = text9.padStart(4, "0"); // 0005

// padEnd() method pads a string with another string
let text10 = "5";
let padded3 = text10.padEnd(4, "x"); // 5xxx



// String charAt(): method returns the character at a specified index (position) in a string
let text11 = "HELLO WORLD";
let char = text11.charAt(0); // H


