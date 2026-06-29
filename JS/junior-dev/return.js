/*
-when you create a function, the function must and will always return something
-with or without you explicitly telling to return something
-return statement: exit a function and return something from that function

1. used to exit code
2. return any required data.
*/

/*
NOTE ON EXIT KEYWORDS:
- return  -> exits a function (and optionally sends back a value)
- break   -> exits a loop (like for/while) - does NOT exit a function
*/

// Math built-in functions are a good example of return in action:
// Math.min() returns the smallest number from the arguments passed in
// Math.max() returns the largest number from the arguments passed in
// let y = Math.min();             // returns Infinity (no arguments / edge case)
// let z = Math.max(12, 234, 556); // returns 556 largest number
// console.log(z); // 556
// y and z store the returned values - same pattern as any function call

// function sayMyName() {
//   let first_name = "Samson"; //statement 1
//   console.log(`First Name ${first_name}`); //statement 2
//   let second_name = "Johnna"; //statement 3
//   console.log(`Second Name ${second_name}`); //statement 4
//   let full_name = `${first_name} ${second_name}`; //statement 5
//   console.log(`Names are ${full_name}`); //statement 6
// }

// let sayMyNameValue = sayMyName();
// console.log(`Function returned ${sayMyNameValue}`);

/*
scenario 1:
leave it as it is and look at the results.
-what happens > any function without a return statement returns undefined
*/

function sayMyName() {
  let first_name = "Samson";
  console.log(`First Name ${first_name}`);
  let second_name = "Johnna";
  console.log(`Second Name ${second_name}`);
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
}

let sayMyNameValue = sayMyName();
console.log(
  `Function returned ${sayMyNameValue} its type is ${typeof sayMyNameValue}`,
);
// output: Function returned undefined its type is undefined

/*
scenario 2: after the second statement inside the function
put a return.
-what happens (exits the function exactly where the return statement is)
-everything after return is unreachable / dead code
*/

function sayMyName() {
  let first_name = "Samson";
  console.log(`First Name ${first_name} its type is ${typeof first_name}`);
  return; // exits the function here - nothing below runs

  let second_name = "Johnna";
  console.log(`Second Name ${second_name}`);

  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name} `);
}

let sayMyNameValue = sayMyName();
console.log(
  `Function returned ${sayMyNameValue} its type is ${typeof sayMyNameValue}`,
);
// output: Function returned undefined its type is undefined

/*
scenario 3: after the fourth statement inside the function
put a return.
-what happens (exits the function exactly where the return statement is)
*/

function sayMyName() {
  let first_name = "Samson";
  console.log(`First Name ${first_name}`);
  let second_name = "Johnna";
  console.log(`Second Name ${second_name}`);
  return; // exits here - statements 5 and 6 never run

  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
}

let sayMyNameValue = sayMyName();
console.log(
  `Function returned ${sayMyNameValue} its type is ${typeof sayMyNameValue}`,
);

/*
scenario 4: put a return statement anywhere inside your function and return
a string of your choice
*/

function sayMyName() {
  let first_name = "Samson";
  console.log(`First Name ${first_name}`);
  let second_name = "Johnna";
  console.log(`Second Name ${second_name}`);

  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
  return full_name; // returns the string "Samson Johnna"
}

let sayMyNameValue = sayMyName();
console.log(
  `Function returned ${sayMyNameValue} its type is ${typeof sayMyNameValue}`,
);
// output: Function returned Samson Johnna its type is string

/* shorter version of the same idea below
 function sayMyName() {
 return "Hello World";
  }
   let sayMyNameValue = sayMyName();
   console.log(`Function returned ${sayMyNameValue}`);
*/

/*
scenario 5: put a return statement anywhere inside your function and return
a number of your choice
*/

function sayMyName() {
  return 45156;
}

let sayMyNameValue = sayMyName();
console.log(
  `Function returned ${sayMyNameValue} its type is ${typeof sayMyNameValue}`,
);
// output: Function returned 45156 its type is number

/*
scenario 6: put a return statement anywhere inside your function and return
a boolean of your choice
*/

function sayMyName() {
  return true;
}

let sayMyNameValue = sayMyName();
console.log(
  `Function returned ${sayMyNameValue} its type is ${typeof sayMyNameValue}`,
);
// output: Function returned true its type is boolean

/*
areaOfTriangle:
- return can also be used as a guard at the top of a function
- if wrong types are passed in, return exits before any calculation runs
- validate inputs at the top, exit early if invalid
*/

/*
Area of a triangle
formula: 0.5 * base * height
base=undefined, height=undefined by default until values are passed in
parameters
*/

function areaOfTriangle(base, height) {
  // if base is not a number, warn and exit immediately
  if (typeof base !== "number") {
    console.warn("please enter a number for base");
    return; // exits here - nothing below runs
  }

  // if height is not a number, warn and exit immediately
  if (typeof height !== "number") {
    console.warn("please enter a number for height");
    return; // exits here - nothing below runs
  }

  // only reaches here if both inputs are valid numbers
  console.log(`base, height is ${base} its type ${typeof base}`);
  console.log(`height is ${height} its type ${typeof height}`);
  const area = 0.5 * base * height;
  console.log(
    `For triangle with base ${base} and height ${height} area is ${area}`,
  );
  return area;
}
