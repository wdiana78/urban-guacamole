/*
Functions allow you to write reusable bits of code.
They help you follow the DRY principle (Don't Repeat Yourself)
by reusing the same code block whenever needed.

Syntax:
function <functionName>(<parameters>) {
  // code block
}

// Important rule:
// A function executes only when it is called.
// Calling a function tells the function to do its work.
*/

/*
Create a simple function that,
when called, alerts the current time.
*/

function timeAlert() {
  const date = new Date();

  alert(
    `Time stamp: ${date.toLocaleString("en-KE", {
      timeZone: "Africa/Nairobi",
    })}`,
  );
}

/*
Call a function using its name followed by ().
*/
timeAlert();

/*
Area of a triangle
*/

function areaOfTriangle(base, height) {
  console.log(`base is ${base} its type is ${typeof base}`);
  console.log(`height is ${height} its type is ${typeof height}`);

  const area = 0.5 * base * height;

  console.log(
    `For triangle with base ${base} and height ${height}, area is ${area}`,
  );
}

/*
Scenario 1:
Call the areaOfTriangle function without passing any arguments.

areaOfTriangle();
*/
areaOfTriangle();

/*
Scenario 2:
Call the function, passing a base of 20 and no height.

areaOfTriangle(20);
*/
areaOfTriangle(20);

/*
Scenario 3:
Call the function, passing a base of 20 and a height of 30.

areaOfTriangle(20, 30);
*/
areaOfTriangle(20, 30);

/*
Scenario 4:
Create variables base1 = 50 and height1 = 60,
then call:

areaOfTriangle(base1, height1);
*/
let base1 = 50;
let height1 = 60;

areaOfTriangle(base1, height1);

/*
Scenario 5:
Create variables base2 = "hello" and height2 = true,
then call:

areaOfTriangle(base2, height2);
*/
let base2 = "hello";
let height2 = true;

areaOfTriangle(base2, height2);
