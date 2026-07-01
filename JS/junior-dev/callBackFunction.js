// return 1 * w;
// };
//simply function creation. some properties <classes>
/*
1.create an anonymous function
2.remove the function keyword
3.between () <>{} put an arrow. =>
4.good practice to have the variable as a const
*/
// let rA2 = (1, w) => {
//   return 1 * w;
// };

/* Name Function - Most importan
Anonymous- > sem important to understand
Arrow functiona-syntantical sugars
Call back functions
*/

/* Task

- Create a function that prints an alert for the current time.
- Does not take any parameters.
- Prints an alert or console.log current timestamp.
- Test your function by calling it.

*/

function showCurrentTime() {
  const currentTime = new Date();
  console.log(`current time is ${currentTime}`);
}

// 1 -> 3000
setInterval(showCurrentTime, 3000);
// 3 seconds function showCurrentTime =>

// callback function ->
/*
1. use the setInterval with a named function
*/

// inbuilt function call setInterval

/*
setInterval(param1, param2)

param1 is a function ->
param2 is time in milliseconds
*/

/*
1. Named function
2. Anonomous Function: <remove the named function>
3. Arrow function<>
*/

// 2. Anonymous function
setInterval(function () {
  const currentTime = new Date();
  console.log(`current time is ${currentTime}`);
}, 5000);

// 3. Arrow function
setInterval(() => {
  const currentTime = new Date();
  console.log(`current time is ${currentTime}`);
}, 5000);

//

function showCurrentTime() {
  const currentTime = new Date();
  console.log(`current time is ${currentTime}`);
}

setInterval(showCurrentTime, 3000);

setInterval(function () {
  const CurrentTime = new Date();
  console.log(`currentTime is ${currentTime}`);
}, 5000);
