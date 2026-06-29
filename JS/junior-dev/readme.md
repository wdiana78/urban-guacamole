# Functions

## What is a function

A function is a reusable block of code that only runs when it is called.
Instead of writing the same logic multiple times across your code, you define it once
inside a function and call it whenever you need it.
This is the DRY principle - Don't Repeat Yourself.

## Syntax

function functionName(parameters) {
// code block
}

function -> keyword that declares a function
functionName -> the name you give it, used to call it later
parameters -> placeholders for values the function will work with
code block -> the instructions that run when the function is called

## Defining vs Calling

Defining a function just tells JavaScript what the function should do.
Nothing actually happens until you call it.
The function sits there waiting until something triggers it.

To call a function, write its name followed by parentheses:
timeAlert();

If the function has parameters, pass values inside the parentheses when calling:
areaOfTriangle(20, 30);

Those values you pass in are called arguments.

## Parameters and Arguments

Parameters are the variable names listed in the function definition.
Arguments are the actual values you pass in when calling the function.

function areaOfTriangle(base, height)
base and height here are parameters, they are just placeholders at this point.
They have no value until the function is called with arguments.

areaOfTriangle(20, 30)
20 and 30 here are arguments.
base gets 20, height gets 30, in order, left to right.

areaOfTriangle(base1, height1)
You can also pass variables as arguments.
Whatever value those variables hold at the time of the call is what gets passed in.

## What happens when arguments are missing

If you call areaOfTriangle() with no arguments, base and height are both undefined.
JavaScript does not throw an error for this, it just assigns undefined to the missing parameters.

If you call areaOfTriangle(20) with only one argument, base gets 20 and height is undefined.
Again no error, height is just undefined.

When the function then tries to do math with undefined, the result is NaN.
NaN stands for Not a Number.
It is what JavaScript produces when a math operation cannot return a valid number.
The code does not crash, it just outputs NaN and keeps going.

## What happens when wrong types are passed

If you pass the wrong types, like a string or a boolean, JavaScript still runs the function.
It does not enforce what type of value goes into a parameter, it just tries to execute.
When the math runs on values that are not valid numbers, the result is NaN.
This is where typeof checks become useful, so you can catch bad inputs before the calculation runs.

## typeof inside the function

The function logs the type of base and height using typeof before doing any math.
This is useful for debugging because you can see exactly what type came in
and understand why the result might be NaN.

console.log( base is ${base} its type is ${typeof base} )
console.log( height is ${height} its type is ${typeof height} )

If base is undefined, typeof base returns the string "undefined".
If base is "hello", typeof base returns the string "string".
If base is 20, typeof base returns the string "number".

## timeAlert function

timeAlert takes no parameters because it does not need any input to do its job.
It uses the built-in Date object to get the current date and time.
It then displays the result in an alert box formatted for the Africa/Nairobi timezone
using toLocaleString with the en-KE locale.

A new Date object created with no arguments always captures the current moment,
the exact time the line of code runs.

## areaOfTriangle function

areaOfTriangle takes two parameters, base and height.
It calculates the area of a triangle using the formula 0.5 multiplied by base multiplied by height.
Before the calculation it logs the base and height values along with their types.
After the calculation it logs the full result.

The function depends entirely on the caller passing in valid numbers.
If the wrong types or no arguments are passed, the math breaks and produces NaN.
The function itself does not guard against this, it just runs as instructed.
That type checking responsibility was added later in the return statements file
as a separate improvement to the same function.
