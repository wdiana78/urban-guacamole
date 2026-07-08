/*
Loops: run a block of code repeatedly.

Avoid infinite loops—they are bugs.
A loop must always have an exit condition.

Syntax:

while (condition) {
  // block of code
}

The loop continues while the condition is true.
The loop exits when the condition becomes false.
*/

// Counter from 0 to 2

let n = 0;
let condition = true;

while (condition) {
  console.log(`n is ${n}`);
  n = n + 1;

  if (n > 2) {
    condition = false; //means when n is less than 2, the code below if is skipped -> loop continues
    // You could also use "break" to exit the loop.
  }
}

/*
How each iteration works:

Initial values:
n = 0
condition = true

-----------------------------------
Iteration 1
-----------------------------------
condition is true, so the loop runs.

console.log(`n is ${n}`); // n is 0

n = n + 1; // n becomes 1

Is 1 > 2?
No.

condition stays true, so the loop continues.

-----------------------------------
Iteration 2
-----------------------------------
n = 1

console.log(`n is ${n}`); // n is 1

n = n + 1; // n becomes 2

Is 2 > 2?
No.

condition stays true, so the loop continues.

-----------------------------------
Iteration 3
-----------------------------------
n = 2

console.log(`n is ${n}`); // n is 2

n = n + 1; // n becomes 3

Is 3 > 2?
Yes.

condition = false;

-----------------------------------
Iteration 4
-----------------------------------
The loop checks:

while (condition)

which is now

while (false)

The loop exits, so Iteration 4 never happens.
*/

// Counter from 0 to 100
let n = 0;
let condition = true;

while (condition) {
  console.log("n is", n);
  n = n + 1;

  if (n > 100) {
    condition = false;
  }
}

/*
create a function <any name>
the function should take a parameter
@param is number greater than 0;
have a loop inside that counts down from this number
use while loop. it shoud print n:
*/

function age(x) {
  while (x > 0) {
    console.log(x);
    x = x - 1;
  }
}

age(20);
/*
create a function @function1<give it any name>.
    it does not take any parameters
    this function
    1.prompts a user for the first number
    check if number is a valid number greater than 1.
    2.prompts a user for the second number
    check if number is a valid number greater than 1.
    use recursion or a while loop to ensure
    user enters a correct number for number1 and number 2
    after the number is entered call @function2<>
    which takes the numbers as parameters.
    example-> @function2(number1,number2)

create a function @function2<give it any name>.
    this function takes in the following parameter
    @param1 number greater than 1.
    @param2 number greater than 1.
    check if @param1 is a number greater than 1.
    check if @param2 is a number greater than 1.
    example if @function2(3,5)
    create a maths table for it. upto
    ie console logs
    -----
    3*5=
    3*4=
    3*3
    3*2=
    3*1=
-------
    2*5=
    2*4=
    2*3=
    2*2
    2*1=
-------
    1*5=
    1*4=
    1*3=
    1*2=
    1*1

*/
//METHOD 1

function promptStudent() {
  let num1 = null;
  let num2 = null;
  while (true) {
    num1 = prompt("Enter the first number");
    if (isNaN(num1)) {
      continue; //restart the loop
    }
    num2 = prompt("Enter the second number");
    if (isNaN(num2)) {
      continue; //restart the loop from beginning
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num1 <= 0 || num2 <= 0) {
      continue; //
    }
    break;
  }
  console.log("Got valid number", num1, num2);
  mathTable(num1, num2);
}

function mathTable(num1, num2) {
  if (!num1 || num1 < 0 || !num2 || num2 < 0) {
    console.error("Ensure number1 or number2 are numbers greater than 0");
    return;
  }

  let outerLoop = num1; //2

  while (outerLoop > 0) {
    doInnerLoop(outerLoop, num2); //
    outerLoop = outerLoop - 1;
  }

  // }
}

//individual//test separate
function doInnerLoop(outerLoop, num2) {
  let innerLoop = num2;
  while (innerLoop > 0) {
    console.log(`outerLoop=${outerLoop} innerLoop=${innerLoop}`);
    console.log(`${outerLoop}*${innerLoop}=${outerLoop * innerLoop}`);
    innerLoop = innerLoop - 1;
  }
}

  //you can call the doInnerLoop function as above or you can keep the code directly as done below
  // while (outerLoop > 0) {
  //   let innerLoop = num2; //3 //3
  //   while (innerLoop > 0) {
  //     console.log(`outerLoop=${outerLoop} innerLoop=${innerLoop}`);
  //     console.log(`${outerLoop}*${innerLoop}=${outerLoop * innerLoop}`);
  //     innerLoop = innerLoop - 1;
  //   }
  //   outerLoop = outerLoop - 1;


//METHOD 2

// Function 1
function getNumbers() {
  let number1;
  let number2;

  // Prompt for first number
  while (true) {
    number1 = Number(prompt("Enter the first number greater than 1:"));

    if (!isNaN(number1) && number1 > 1) {
      break;
    }

    console.log("First number must be greater than 1.");
  }

  // Prompt for second number
  while (true) {
    number2 = Number(prompt("Enter the second number greater than 1:"));

    if (!isNaN(number2) && number2 > 1) {
      break;
    }

    console.log("Second number must be greater than 1.");
  }

  // Call Function 2
  multiplicationTable(number1, number2);
}

// Function 2
function multiplicationTable(number1, number2) {
  // Validate parameters
  if (isNaN(number1) || number1 <= 1) {
    console.log("First number must be greater than 1.");
    return;
  }

  if (isNaN(number2) || number2 <= 1) {
    console.log("Second number must be greater than 1.");
    return;
  }

  // Create multiplication table
  for (let i = number1; i >= 1; i--) {
    for (let j = number2; j >= 1; j--) {
      console.log(`${i} * ${j} = ${i * j}`);
    }

    console.log("----------------");
  }
}

// Start the program
getNumbers();
