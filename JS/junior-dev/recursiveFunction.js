/*
 A recursive function is a function that calls itself.
 -> since this creates an endless loop you need to find a way
 to terminate. That is using a return statement  and if <condition>
*/
/*stack overflow- endless loop
since this creates an endless loop, you have to use return statement and if <condition> to exit a function

*/
function salaryGrossPromptProcess() {
  let gross = prompt("Enter your gross salary");
  if (isNaN(gross) === false) {
    //meaning if its a number
    console.log(`You entered this amount ${gross} exiting`);
    return; // exit a function
  }
  alert(
    `Invalid gross salary entered. Enter a  number for gross salary Try again`,
  );
  salaryGrossPromptProcess();
}
salaryGrossPromptProcess(); //calls it the first time once to start the function
//TASK 1
/*remove the alert
initial prompt should be enter your gross salary
any prompt after that should be Invalid gross salary entered. enter a  number for gross salary.try again

*/

//Answers
// //method 1
function salaryGrossPromptProcess(
  attempt = 1,
  message = "Enter your gross salary",
) {
  console.log(`call, attempt = ${attempt}`);
  let gross = prompt(message);
  //condition to be met
  if (isNaN(gross) === false) {
    console.log(`You entered this amount: ${gross}. Exiting`);
    return; //exit function
  }
  //   alert(
  //     `Invalid gross salary entered. Enter a number for your gross salary. Try again`,
  //   );
  salaryGrossPromptProcess(
    attempt + 1,
    "Invalid gross salary entered. Enter a number for your gross salary. Try again",
  );
}
salaryGrossPromptProcess();

//method 2
function salaryGrossPromptProcess(message = "Enter your gross salary:") {
  let gross = prompt(message);

  if (!isNaN(gross)) {
    console.log(`You entered ${gross} exiting`);
    return gross;
  }

  return salaryGrossPromptProcess(
    "Invalid gross salary entered. Please enter a valid number for gross salary. Try again:",
  );
}

salaryGrossPromptProcess();

//method 3

function salaryGrossPromptProcess(attempt = 0) {
  let gross = null;
  if (attempt == 0) {
    gross = prompt("Enter your gross salary");
  } else {
    gross = prompt(
      `${attempt + 1} Invalid gross salary entered. enter a  number for gross salary. try again.`,
    );
  }
  if (isNaN(gross) === false) {
    //condition is met
    console.log(`You entered this amount ${gross} exiting`);
    return; // exit a function
  }
  salaryGrossPromptProcess(attempt + 1);
}
salaryGrossPromptProcess();


//TASK 2
/*
  create  a function to calculate the factorial of a number.
  the function takes a parameter
  -@param1 which is a number and returns the factorial of the number
  example. factorial(5) output 120
  // 5*4*3*2*1
  // check the number entered is greater 1->
  //hint use a recursive function->
*/
// TASK 2

function factorial(number) {
  if (number <= 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5)); // 120