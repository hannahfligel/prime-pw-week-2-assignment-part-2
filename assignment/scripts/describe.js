// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it's value as 'Dane'.
// if the value of name is equal to Mary than the console log will display "Hi, Mary!"
// if the value of name is not 'mary', than the console log will display "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret, and we don't assign it a value
// We make a variable of code and set it's value to the number 123
// If the value of code is equal to 123, then we assign super as the value of secret 
// If the value of code is equal to 123, then the value of code doubles
// If the value of code is greater than 250, then the value of secret gets set to 'duper'
// We console.log the value of secret.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent, and assign it's value to true 
// We make a variable called age, and assign it's value to the number 34
// We make a variable called zip, and assign it's value to the number 55407
// If the value of isStudent is equal to true and zip is greater than 80000
// Then we console.log 'You're a student on the West Coast!'
// If the value of isStudent is equal to false or age is less than the number 30. 
// Then we console.log 'What are your hobbies?'
// If the value of isStudent is equal to true 
// Then console.log 'Welcome to Prime!'
// Otherwise, console.log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'


// /*
// let colorOne = 'blue';
// FIX - colorTwo is red set to blue, but the instructions ask to set it to red. 
// let colorTwo = 'blue';
// let mix = true;

// if (mix === true) {
//   colorOne = 'purple';
// FIX - colorTwo should also be set to purple if the mix is true. 
// }
// */

// SOLUTION: 
let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
}




//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX - time is a variable as instructed, not a constant 
const time = 4;
// FIX - instead of or (||), there needs to be and (&&) between time and temp.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

// SOLUTION: 

let temp = 40;
let time = 4;

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}


//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// FIX - minAge is set as constant, but instruction says to set it as a variable 
const minAge = 21;

if(minAge <= age) {
// FIX - first console log in the if statment should says 'enter', second console log should say 'no entry'
  console.log('no entry');
} else {
  console.log('enter');
}
*/


// SOLUTION:

let age = 21;
let minAge = 21;

if(minAge <= age) {
  console.log('enter');
} else {
  console.log('no entry');
}


