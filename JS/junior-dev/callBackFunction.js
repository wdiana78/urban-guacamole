/* Name Function - Most importan
Anonymous- > sem important to understand
Arrow functiona-syntantical sugars
Call back functions
*/
/*
callback Function-> <please call me.>
-> call back-> function please call me ->call the function
->A function that takes one or more parameters as function
  *one of or more of the parameters are functions
*/

/*
->we will observe existing call back function
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
  console.log(`currentTime is ${CurrentTime}`);
}, 5000);

/*
->pass all function by reference<statement>
-> if you use an expression you wrong
*/

//=> call it to execute all the variables executes a fress
//1 -> 3000
let k = 0;
let invT = setInterval(() => {
  //
  if (k >= 5) {
    clearInterval(invT);
    return;
  }
  const currentTime = new Date();
  console.log(`current time is ${currentTime}`);
  k = k + 1;
  console.log("k is", k);
}, 2000); //js function

function remindCreateAccount() {
  alert("You like our site please create an account");
}
