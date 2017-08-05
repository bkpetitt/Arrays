/*
  Under each of these prompts, write the line (or lines) of code that will execute the instructions
*/
// Student: Brian Petitt

// Create a variable called `name`, and set its value to your full name (first and last)
var name="Brian Petitt";

// Print your name to the console, so it says "My name is (your name)"
console.log(name);

// Use a method to calculate the number of characters in your name, and put that number inside a variable called `charCount`
var charCount=name.length;

// Print the number of characters in your name to the console, so it says "My name has (charCount) letters in it"
console.log("My name has "+charCount+" letters in it");

// Use a method to get only the first 3 letters of your name, and save it to a variabled called `first3`
var first3 = name.slice(0,3);

// Create another variable with only the last 3 letters of your name, called `last 3`
var last3 = name.slice(-3);

// Combine the first3 and last3 into a new variable called `nickName`
var nickName = first3 + last3

// Print your nickname to the console, so it says "My nickname is (nickName)"
console.log("My nickname is "+nickName)

// Create a variable called `weirdName` that replaces all instances of one letter in your name with a Z
var weirdName= name.replace(name.slice(0,1), "Z");

// Print your weirdName to the console, so it says "My weirdName is (weirdName)"
console.log ("My weirdName is "+ weirdName);

///////////
// BONUS //
///////////

// Try to create the Pig Latin version of your name and print it to the console.
// As a reminder, pig latin takes any consonants at the beginning of your name, and moves them to the end
// of your name, with "-ay" at the end. So my Pig Latin name would be "Eansay"
var firstName = "Brian";
// Determine length of first name
var charCountFirst=firstName.length;
// Grab first letter of first name
var stepOne = firstName.slice(0,1);
// Grab name minus first letter
var stepTwo = firstName.slice(1,charCountFirst);
// Merge first letter and "ay" to end of name
var pigLatin = stepTwo+stepOne+"ay";
// Convert piglatin name to lowercase
var pigLower = pigLatin.toLowerCase();
// Grab first letter of piglatin name
var pigFirst = pigLatin.substr(0,1);
// Removing duplicate first letter of piglatin name
var pigLast = pigLower.substring(1);
// Convert first letter to uppercase
var pigFirstCap = pigFirst.toUpperCase();
// Merging uppercase letter to piglatin name
var pigFinal = pigFirstCap+pigLast;
// Displaying final result
console.log("**------ BONUS ------**");
console.log("My Pig Latin name is "+pigFinal);
// Not very elegant and a little to linear, but got the job done.
