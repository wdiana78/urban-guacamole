/*
-> Our Own Callback Function
-> Doing Shape Stuff
-> Shapes

Circle
Rectangle
Triangle
*/

/* TASK

1. For each of the shapes,
   create a function (arrow or named)
   to calculate the area. Ensure
   the function takes the required parameters.
   Test the function.

2. Create a super function called shape.
   It's going to take the following parameters:

   @param1 => function (correct shape) <required>
   @param2 => shape name <string>
   @param3 => s1 <required>
   @param4 => s2 <optional>
   @param5 => s3 <optional>

3. Inside your shape function,
   create a result variable.

   Example:

   result = param1(param3, param4, param5)

4. Console.log the shape name and the result.

   Example:

   console.log(`For shape ${param2} area is ${result}`)
*/

/* Inside the shape function:

1. Console.log each parameter and its type.

2. Call the function passed in and print the calculated area.

Examples:

shape(areaCircle, "Circle", 10)

shape(areaRectangle, "Rectangle", 10, 5)

shape(areaTriangle, "Triangle", 8, 6)

*/

// Step 1

/* Circle Area Function */
const areaCircle = (radius) => {
  return 3.142 * radius * radius;
};

/* Rectangle Area Function */
function areaRectangle(length, width) {
  return length * width;
}

/* Triangle Area Function */
const areaTriangle = (base, height) => {
  return 0.5 * base * height;
};

/*
NB

If you have one line of code, you can write
arrow functions like this.

No need to include the return statement.

const areaCircle = (radius) => 3.142 * radius * radius;
const areaRectangle = (length, width) => length * width;
const areaTriangle = (base, height) => 0.5 * base * height;
*/

// Step 2

/* Super Function */
function shape(shapeFunction, shapeName, s1, s2, s3) {
  console.log(`shapeFunction ${shapeFunction} is a ${typeof shapeFunction}`);
  console.log(`shapeName ${shapeName} is a ${typeof shapeName}`);
  console.log(`s1 ${s1} is a ${typeof s1}`);
  console.log(`s2 ${s2} is a ${typeof s2}`);
  console.log(`s3 ${s3} is a ${typeof s3}`);

  // Step 3
  // Create a result variable

  const result = shapeFunction(s1, s2, s3);

  // Step 4
  // Print the shape name and the result

  console.log(`For shape ${shapeName} area is ${result}`);

  console.log("-------------------------------------"); //to put a separattor in the code
}

/* Test Circle */
shape(areaCircle, "Circle", 10);

/* Test Rectangle */
shape(areaRectangle, "Rectangle", 10, 5);

/* Test Triangle */
shape(areaTriangle, "Triangle", 8, 6);


///
function shape(ShapeFunction, shapeNmae, s1, s2, s3){
  console.log(`shapeName is $(shapeName`)

}
shape(areaCircle, "Circle", 10);