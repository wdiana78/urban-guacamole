/*
-> Our own callback function
-> Doing shape stuff
-----> Shapes

circle
rectangle
triangle

/* TASK

1. For each of the shapes,
   create a function (arrow, named)
   to calculate the area. Ensure
   the function takes the required parameters.
   Test the function.

2. We are creating a super function called shape.
   It's going to take the following params:

   @param1 => function <correct shape> required
   @param2 => shape name <string>
   @param3 => s1 <required>
   @param4 => s2 <optional>
   @param5 => s3 <optional>

3. Inside your shape function, create a result variable.

   Example:
   result = param1(param3, param4, param5)

4. Console.log the shape name and the result.

   Example:
   console.log(`For shape ${param2} area is ${result}`)
*/

/* Inside the shape function:
1. Console.log each parameter and its type.
2. Call the function passed in and print the calculated area.

Example:
   - shape(areaCircle, "Circle", 10)
   - shape(areaRectangle, "Rectangle", 10, 5)
*/

//step 1
function areaCircle(radius) {
  return Math.PI * radius * radius;
}

console.log(`Circle Area: ${areaCircle(7)}`);

/* Rectangle Area Function (Arrow Function)
   This function calculates the area of a rectangle.
   It takes the length and width as input and returns the area.

   Formula: length × width
*/

const areaRectangle = (length, width) => {
  return length * width;
};

console.log(`Rectangle Area: ${areaRectangle(10, 5)}`);

/* Triangle Area Function (Named Function)
   This function calculates the area of a triangle.
   It takes the base and height as input and returns the area.

   Formula: 0.5 × base × height
*/

function areaTriangle(base, height) {
  return 0.5 * base * height;
}

console.log(`Triangle Area: ${areaTriangle(8, 6)}`);

//NB
// if you have one line of code you can write arrow functions this way
//  //nb no need to include return statement here

const areaCircle = (radius) => 3.142 * radius * radius;
const areaRectangle = (length, width) => length * width;
const areaTriangle = (base, height) => 0.5 * base * height;

//step 2
function shape(shapeFunction, shapeName, side1, side2, side3) {
  console.log(`shapeFunction ${shapeFunction} is a ${typeof shapeFunction}`);
  console.log(`shapeName ${shapeName} is a ${typeof shapeName}`);
  console.log(`side1 ${side1} is a ${typeof side1}`);
  console.log(`side2 ${side2} is a ${typeof side2}`);
  console.log(`side3 ${side3} is a ${typeof side3}`);
}

/* For Circle */
shape(areaCircle, "Circle", 10);

// Make observations

// Answer

/* Circle Area Function (Arrow Function) */
const areaCircle = (radius) => {
  return 3.142 * radius * radius;
};

/* Rectangle Area Function (Named Function) */
function areaRectangle(length, width) {
  return length * width;
}

/* Triangle Area Function (Arrow Function) */
const areaTriangle = (base, height) => {
  return 0.5 * base * height;
};

/* Super Function */
function shape(shapeFunction, shapeName, s1, s2, s3) {
  console.log(`shapeFunction ${shapeFunction} is a ${typeof shapeFunction}`);
  console.log(`shapeName ${shapeName} is a ${typeof shapeName}`);
  console.log(`s1 ${s1} is a ${typeof s1}`);
  console.log(`s2 ${s2} is a ${typeof s2}`);
  console.log(`s3 ${s3} is a ${typeof s3}`);

  /* Step 3 */
  const result = shapeFunction(s1, s2, s3);

  /* Step 4 */
  console.log(`For shape ${shapeName} area is ${result}`);

  console.log("-------------------------------------");
}

/* Testing Circle */
shape(areaCircle, "Circle", 10);

/* Testing Rectangle */
shape(areaRectangle, "Rectangle", 10, 5);

/* Testing Triangle */
shape(areaTriangle, "Triangle", 8, 6);
