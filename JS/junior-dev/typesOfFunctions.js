/*
Types of functions

- Named function
- Anonymous Function
- Arrow function
- Higher Order
- Recursive Function
- Callback

Named Function: A function with a name.
Anonymous Function: A function without a name.

-> A function can be assigned to a variable.
-> A variable can be referenced by a variable.
*/

function areaCircle(r) {
  return 3.142 * r * r; // Area of a circle
} // Named function

let age = 23;

let samsAge = age; // Copying a value

let ac = areaCircle;

/*
What is the value of ac and what is it?
-> Hint: use typeof
*/

console.log(ac);
// The function itself is printed because it is not being called.

console.log(typeof ac);
// "function"

console.log(ac(5));
// 78.55

/*
These function calls produce the same result:

areaCircle(10);
ac(10);

Both variables reference the same function.
*/

/*
Understand the difference:

let result = areaCircle(5); // Stores the returned value.
let ref = areaCircle;       // Stores a reference to the function.
*/

// =====================================================
// EXERCISE
// =====================================================

/*
1. Create a function of your choice. Use a named function.
2. Assign that function to a variable.
3. Directly assign the variable to the function definition.
4. Remove the original function.
5. Try calling the variable and the original function.
   Make an observation.
6. Remove the function name since it's unnecessary.
7. Anonymous function.
*/

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
