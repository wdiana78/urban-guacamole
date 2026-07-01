// global scope

const pi = 3.142; // global scope

function areaCircle(r) {
  // function scope
  const pi = 3.1423;

  return pi * r * r;
}

function perimeterCircle(r) {
  return 2 * pi * r;
}

function circle(r) {
  // function scope
  const area = areaCircle(r); // function call
  const perimeter = perimeterCircle(r); // function call

  console.log(`For a circle of r ${r} area ${area} perimeter ${perimeter}`);
}

function testM() {
  let m = "hello world";
  console.log(m); // hello world

  if (true) {
    let m = 123;
    console.log(m); // 123
  }
}

let clicked = 0; // global scope

function increment() {
  clicked = clicked + 1;
  console.log("clicked value is ", clicked);

  updateClickValue();
}

function decrement() {
  clicked = clicked - 1;
  console.log("clicked value is ", clicked);

  updateClickValue();
}

function updateClickValue() {
  document.getElementById("click_value").innerText = clicked;
}

/*
{
   block code
}

-> contains if () {}, function {}, while {}, for {}

Remember:
- JavaScript checks the current scope first.
- If not found, it searches outward.
- You cannot declare the same variable twice in the same scope.
*/

let name = "Joann";

function sayMyName() {
  let name = "Samson"; // function-scoped name, shadows outer "Joann"

  if (true) {
    let name = "Kimmi"; // block-scoped name, shadows "Samson"

    if (true) {
      console.log(name); // Kimmi
    }
  }
}

/*
1. declare variable name in the global scope.
2. create function call sayMyName
   console.log("the name and line number")
   -remember to call the function
3. declare variable name inside the function.
   at the start
   assign it a different name. print out the name
   and line number
4. create an if statement inside the function.
5. inside the first if statement declare another name.
6. after leaving the if block print the function name again.
7. try declaring the same variable twice in one scope.
*/

let name = "Joann"; // Scenario 1

function sayMyName() {
  // Scenario 2

  let name = "Samson"; // Scenario 3
  console.log(`name ${name} line ${6}`);

  /* Scenario 4 */
  if (true) {
    let name = "Kimmi"; // Scenario 5
    console.log(`name ${name} line ${11}`);
  }

  console.log(`name ${name} line ${14}`); // Scenario 6
}

sayMyName();

/* Scenario 7 */

function test() {
  let name = "Samson";
  let name = "Alex"; // throws a SyntaxError, cannot declare a variable with the same name inside the same scope
}
