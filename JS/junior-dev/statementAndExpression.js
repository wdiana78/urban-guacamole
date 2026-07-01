/*
Expression:
 A piece of code that produces a value.
 x>5 => is expresion true or false
 10+11=>21 value, that is an expression
 circleArea(5)=> expression as it is a function call- it gives you some results
 reference value->n1
*/

let n1 = 23; // statement declare a variable
function sayMyName() {
  console.log("Alexander Grey");
}

console.log(n1); // you get the value 23, not n1=23 //
console.log(10 + 12); //prints 22 and not 10+12
console.log(n1 > 10); // prints true and not n1>10
console.log(sayMyName()); //function call=> undefined, a function call is an expression

sayMyName(); //this s an expression, it yields a result

/*
Example 1: Statement vs Expression
*/
let price = 50; // statement - declares a variable
price * 2; // expression - produces a value (100), but does nothing with it
console.log(price * 2); // statement that uses an expression inside it

/*
Example 2: Statement vs Expression
*/
let isAdult; // statement - declares a variable
let age = 18; // statement - declares and assigns
age >= 18; // expression - produces true or false
isAdult = age >= 18; // statement that stores the expression's value
console.log(isAdult); // true

/*
Example 3: Statement vs Expression
*/
function areaOfRectangle(length, width) {
  // statement - function declaration
  return length * width; // expression - produces a value, returned by the statement
}

let result = areaOfRectangle(4); // statement - calls the function, stores value
console.log(result); // 16

//examples
let n2 = 34; //stament which action:-> create and store it memory
//block code->{} statement. //statement{} ,if,function,loops

//  function name usage
console.log(sayMyName); //reference the function// its a statement,, note the diffence with when we console logged the function call

/*
1. Create a function of your choice. Use named function: test
2. Assign that function a variable: test
3. Directly create/equate your variable to the function definition: test
4. Remove the original function: test
5. Try calling the variable and try calling the original
   function. <Make an observation>: test
6. Remove the name of the function, since it's useless: test
7. Anonymous function <function without a name>: test
*/

/*
Exercise 1
Create a function of your choice.
Use a named function.
*/

function rectangleArea(length, width) {
  return length * width;
}

/*
Exercise 2
Assign that function to a variable called test.
*/

let test = rectangleArea;

/*
Both "rectangleArea" and "test"
now point to the same function.
*/

/*
Exercise 3
Call both the variable and
the original function.
*/

console.log(test(5, 4));
console.log(rectangleArea(5, 4));

/*
Output:
20
20

Observation:
Both work because both names
point to the same function.
*/

/*
Exercise 4
Remove the original function.

Instead of creating the function first
and then assigning it to "test",
create it directly inside "test".
*/

test = function rectangleArea(length, width) {
  return length * width;
};

/*
Exercise 5
Call the variable.
*/

console.log(test(6, 3));

/*
Output:
18

Observation:
The variable "test" stores
the function, so it works.
*/

/*
Exercise 6
Try calling the original function.
*/

console.log(rectangleArea(6, 3));

/*
Result:

ReferenceError:
rectangleArea is not defined

Observation:
The function can only be
accessed through "test".
*/

/*
Exercise 7
Remove the function name,
since it is no longer needed.

This creates an anonymous function.
*/

test = function (length, width) {
  return length * width;
};

console.log(test(7, 2));

/*
Output:
14

Observation:
The function still works exactly
the same.

The only difference is that it
no longer has a name.

A function without a name is
called an anonymous function.
*/
