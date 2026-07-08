/*
---> for loop-> mostly ment for numbers
-- combination of using while for number
loops: 1:start point, 2:condition , 3:after each itteration
combines it into one stament
for(startpoint;condition;each-itteration){

}

*/

//use this while loop to make a for loop

let k = 0; //starting point

//condition:k<20
while (k < 20) {
  console.log("k", k);
  k = k + 1; //after each itteration
}

for (let k = 0; k < 20; k = k + 1) {
  console.log("k", k);
}

/*create a function @function1<give it any name>.
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
    3*2=
    3*1=
-------
    2*5=
    2*4=
    2*3=
    2*1=
-------
    1*5=
    1*4=
    1*3=
    1*2=

*/
//method 1

function function1() {
  let number1 = Number(prompt("Enter the first number:"));

  while (isNaN(number1) || number1 <= 1) {
    number1 = Number(prompt("Invalid! Enter a number greater than 1:"));
  }

  let number2 = Number(prompt("Enter the second number:"));

  while (isNaN(number2) || number2 <= 1) {
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

//method 2 - by tedd
function mathTable(num1, num2) {
  if (!num1 || num1 < 0 || !num2 || num2 < 0) {
    console.error("Ensure number1 or number2 are numbers greater than 0");
    return;
  }

  let outerLoop = num1; //2

  //i--
  for (let i = num1; i >= 1; i--) {
    let innerLoop = num2;

    while (innerLoop > 0) {
      console.log(`outerLoop=${outerLoop} innerLoop=${innerLoop}`);
      console.log(`${outerLoop}*${innerLoop}=${outerLoop * innerLoop}`);
      innerLoop = innerLoop - 1;
    }

    outerLoop = outerLoop - 1;
  }
}
