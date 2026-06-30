// //global scope

// const pi = 3.142; // global scope

// function areaCirle(r) {
//   //global scope
//   const pi = 3.1423;
//   //
//   return pi * r * r;
// }

// function perimeterCircle(r) {
//   //
//   return 2 * pi * r;
// }

// function circle(r) {
//   //global scope
//   const area = areaCirle(r);
//   const perimter = perimeterCircle(r);
//   console.log(`For a circle of r ${r} are ${area} perimeter${perimter}`);
// }

// function testM() {
//   let m = "hello world";
//   console.log(m); // hello world
//   if (true) {
//     let m = 123;
//     console.log(m); //123
//   }
// }

// //
// //
// let clicked = 0; //global scope

// function increment() {
//   clicked = clicked + 1;
//   console.log("clicked value is ", clicked);
//   updateClickValue();
// }

// function decrement() {
//   clicked = clicked - 1;
//   console.log("clicked value is ", clicked);
//   updateClickValue();
// }

// function updateClickValue() {
//   document.getElementById("click_value").innerText = clicked;
// }

// /*
// {
//   //block code
// }
//   -> if (){} , function {} , while ,for
// check
//    // check the scope going out ward->
//    // you cannot use same variable name in same scope

// */

// let name = "Joann";

// function sayMyName() {
//   let name = "Samson"; // function-scoped name, shadows outer "Joann"
//   if (true) {
//     //
//     let name = "Kimmi"; // block-scoped name, shadows "Samson" inside this if-block
//     if (true) {
//       console.log(name); // prints "Kimmi" -> JS finds it in the nearest block first and stops looking outward
//     }
//   } //
// }

/*
1. declare variable name in the global scope.
2. create function call sayMyName
   console.log("the name and line number")
   -remember to call the function
3. declare variable name inside the function.
   at the start
   assign it a different name. print our the name
   and line number
4. create an if statement: inside the function
   so pass a truthy
   condition of your choice.
   inside the block console.log name
   and its line number
5. inside the first if statement at the start
   declare variable name give it a new name.
   console.log name and line number.
6. inside the function after the if block
   console.log name and line number.
7. Try declaring the same variable name
   in the same scope.
*/
// let name = "Samson";

// function sayMyName() {
//   let name = "Maggy";

//   console.log(`name ${name} line ${15}`);
//   if (true) {
//     let name = "Delilah";
//     console.log(`name ${name} line ${26}`);
//   }
//   let name = "Samson";
//   console.log(`name ${name} line ${32}`); //Maggy
// }
// sayMyName();

/*
SCOPE PRACTICE EXERCISE
Goal: Learn how JavaScript searches for variables in different scopes.
*/

// Step 1: declare global variable
let name = "Alex";

function sayMyName() {
  // Step 2: print name + line number
  console.log(`name ${name} line ${10}`);
}
sayMyName();

function sayMyNameStep3() {
  // Step 3: declare new variable at start of function
  let name = "Brian";
  console.log(`name ${name} line ${17}`);
}
sayMyNameStep3();
// Q: Which value is printed, "Alex" or "Brian"?
// A: "Brian" -the inner `let name` shadows the outer global one;
//    JS finds it in the current scope first.

function sayMyNameStep4() {
  let name = "Brian";
  console.log(`name ${name} line ${26}`);

  // Step 4: if statement, print name inside it
  if (true) {
    console.log(`name ${name} line ${30}`);
  }
}
sayMyNameStep4();
// Q: Which name is printed inside the if block?
// A: "Brian" -the if block doesn't redeclare name, so JS looks
//    one level up to the function scope and finds "Brian" there.

function sayMyNameStep5() {
  let name = "Brian";
  console.log(`name ${name} line ${40}`);

  if (true) {
    // Step 5: declare new name at top of if block
    let name = "Rick";
    console.log(`name ${name} line ${45}`);
  }
}
sayMyNameStep5();
// Q: Which name is printed now?
// A: "Rick" -let is block-scoped, this new name is found first
//    inside the block.

function sayMyNameStep6() {
  let name = "Brian";
  console.log(`name ${name} line ${55}`);

  if (true) {
    let name = "Rick";
    console.log(`name ${name} line ${59}`);
  }

  // Step 6: print name again after the if block
  console.log(`name ${name} line ${63}`);
}
sayMyNameStep6();
// Q: Which value is printed after the if block? Why isn't "Rick" available?
// A: "Brian" -"Rick" only existed inside the if block's { }.
//    Once that block ends, "Rick" is gone; we're back in
//    function scope where name is still "Brian".

// Step 7: declare the same variable twice in the same scope
let testName = "Daniel";
// let testName = "Edwin"; // uncomment this line to see the SyntaxError

// Q: What error does JavaScript give? Why?
// A: SyntaxError: Identifier 'testName' has already been declared
//    `let` doesn't allow two declarations of the same name
//    within the same scope.
