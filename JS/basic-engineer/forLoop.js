/*
---> For loop -> mostly meant for numbers.

---> A combination of using a while loop for numbers.

Every loop has:
1. Starting point
2. Condition
3. What happens after each iteration

A for loop combines all three into one statement.

for (startingPoint; condition; afterEachIteration) {

}
*/

// Use this while loop to make a for loop.

let k = 0; // Starting point

// Condition: k < 20
while (k < 20) {
  console.log("k", k);
  k = k + 1; // After each iteration
}

for (let k = 0; k < 20; k = k + 1) {
  console.log("k", k);
}

/*
Create a function @function1 (give it any name).

It does not take any parameters.

This function should:

1. Prompt the user for the first number.
   Check that it is a valid number greater than 1.

2. Prompt the user for the second number.
   Check that it is a valid number greater than 1.

Use recursion or a for/while loop to ensure the user enters
a correct value for both number1 and number2.

After both numbers are entered, call @function2
and pass the numbers as parameters.

Example:
function2(number1, number2)

------------------------------------------------

Create a function @function2 (give it any name).

This function takes the following parameters:

@param1 - a number greater than 1
@param2 - a number greater than 1

Check that both parameters are valid numbers greater than 1.

Example:

function2(3, 5)

Create and display the multiplication table.

Console output:

-----
3 * 5 =
3 * 4 =
3 * 3 =
3 * 2 =
3 * 1 =
-----
2 * 5 =
2 * 4 =
2 * 3 =
2 * 2 =
2 * 1 =
-----
1 * 5 =
1 * 4 =
1 * 3 =
1 * 2 =
1 * 1 =
*/

// Method 1

function function1() {
  let number1 = Number(prompt("Enter the first number:"));

  for (; isNaN(number1) || number1 <= 1; ) {
    number1 = Number(prompt("Invalid! Enter a number greater than 1:"));
  }

  let number2 = Number(prompt("Enter the second number:"));

  for (; isNaN(number2) || number2 <= 1; ) {
    number2 = Number(prompt("Invalid! Enter a number greater than 1:"));
  }

  function2(number1, number2);
}

function function2(param1, param2) {
  if (isNaN(param1) || param1 <= 1 || isNaN(param2) || param2 <= 1) {
    console.log("Invalid numbers.");
    return;
  }

  for (let i = param1; i >= 1; i--) {
    for (let j = param2; j >= 1; j--) {
      console.log(i + " * " + j + " = " + i * j);
    }

    console.log("-------");
  }
}

function1();

// Method 2 - By Tedd

function mathTable(num1, num2) {
  if (!num1 || num1 < 0 || !num2 || num2 < 0) {
    console.error("Ensure number1 and number2 are numbers greater than 0.");
    return;
  }

  let outerLoop = num1;

  for (let i = num1; i >= 1; i--) {
    for (let innerLoop = num2; innerLoop > 0; innerLoop--) {
      console.log(`outerLoop=${outerLoop} innerLoop=${innerLoop}`);
      console.log(`${outerLoop} * ${innerLoop} = ${outerLoop * innerLoop}`);
    }

    outerLoop = outerLoop - 1;
  }
}
