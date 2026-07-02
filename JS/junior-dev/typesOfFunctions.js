/*
Types of Functions

- Named Function
- Anonymous Function
- Arrow Function
- Higher Order Function
- Recursive Function
- Callback Function
*/

/*

Named Function


A named function has an identifier after the
'function' keyword, allowing it to be called by name.
*/

function rectangleArea(l, w) {
  return l * w;
}

/*

Functions are Values


In JavaScript, a function is a value.

That means it can be:
- stored inside a variable,
- passed as an argument to another function, or
- returned from another function.
*/

function areaCircle(r) {
  return 3.142 * r * r;
}

let ac = areaCircle;

/*
What is the value of ac, and what is its type?
Hint: use typeof
*/

console.log(ac);
// The function itself is printed because it isn't being called.

console.log(typeof ac);
// "function"

console.log(ac(5));
// 78.55

/*
These produce the same result:

areaCircle(10);
ac(10);

Both references point to the same function.

Difference:

let result = areaCircle(5); // Stores the returned value.
let ref = areaCircle;       // Stores a reference to the function.
*/

/*

Anonymous Function


An anonymous function has no name.

Since it has no name, it is usually
referenced through the variable
it is assigned to.
*/

let rA = function (l, w) {
  return l * w;
};

// EXERCISE

/*
1. Create a function of your choice. Use a named function.
2. Assign that function to a variable.
3. Directly assign the variable to the function definition.
4. Remove the original function.
5. Try calling the variable and the original function.
   Make an observation.
6. Remove the function name since it's unnecessary.
7. Convert it into an arrow function.
*/

/*

Arrow Function


Arrow functions are a shorter syntax
(syntactic sugar) for writing function expressions.

"Syntactic sugar" means the syntax is shorter
and often easier to read, but it doesn't
change what the code does.
*/

const rA2 = (l, w) => {
  return l * w;
};
// STEP 1: Create a named function.

function rectangleArea(l, w) {
  return l * w;
}

console.log(rectangleArea(10, 5)); // 50

// STEP 2: Assign the function to a variable.

let area = rectangleArea;

console.log(area(10, 5)); // 50
console.log(rectangleArea(10, 5)); // 50

/*
Observation:
Both names reference the same function.
*/

// STEP 3: Directly assign the variable to the function definition.

/*
function rectangleArea(l, w) {
  return l * w;
}
*/

area = function rectangleArea(l, w) {
  return l * w;
};

console.log(area(8, 4)); // 32

// STEP 4: Remove the original function.

/*
If the original function declaration were removed,

function rectangleArea(l, w) {
  return l * w;
}

only this function expression would remain.
*/

area = function rectangleArea(l, w) {
  return l * w;
};

console.log(area(8, 4)); // 32

// STEP 5: Try calling the variable and the original function.

/*
The variable still works because it references the function.

If the original function declaration were removed,
calling rectangleArea() would cause a ReferenceError.
*/

console.log(area(7, 3)); // 21

// console.log(rectangleArea(7, 3));
// ReferenceError: rectangleArea is not defined
// (Only if the original function declaration is removed.)

/*
Observation:
The variable can still be used to call the function
because it stores a reference to it.
*/

// STEP 6: Remove the function name since it's unnecessary.

/*
Before:

area = function rectangleArea(l, w) {
  return l * w;
}

Now remove the function name:
*/

area = function (l, w) {
  return l * w;
};

console.log(area(9, 2)); // 18

/*
Observation:
The function still works because the variable
'area' already references it.

The name 'rectangleArea' is no longer needed.
*/

// STEP 7: Anonymous Function

/*
The function below is anonymous because
it has no name after the 'function' keyword.
*/

area = function (l, w) {
  return l * w;
};

console.log(area(12, 4)); // 48

/*
Observation:
This is an anonymous function.

It is called using the variable 'area',
not a function name.
*/

//PERSONAL PRACTTICES
// named function

function greet(name) {
  return `hello ${hello}`; //named function
}

//anonymous function doesnt have a name sso you store it inside a variable
// the name greet is misisg below
const greet = function (name) {
  return `hello ${name}`;
};

//example
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 3));
