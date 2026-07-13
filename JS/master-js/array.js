/*/*
Arrays are just objects.
-->specialized.<objects>
key<number,string,null,undefined,boolean>:
value:<Any data type>
an array and a normail object.
the keys are sequential.<0 upto n> based on
values


when accessing array element. use bracket notatio as the keys are numbers

use only bracket notation.
the keys are numbers

<[value,value2,xxxx]>

since the keys are numbers and are sequential
there are not provided.
*/

const car = {
  name: "BMW X7",
  model: "2024",
  color: "White",
  top_speed: "245 km/h",
  fuel_type: "Petrol",
  transmission: "Automatic",

  engine_information: {
    cylinders: 6,
    engine_capacity: "3.0L Turbocharged Inline-6",
  },

  manufacture: {
    name: "Bayerische Motoren Werke",
    aka: "BMW",
    country: "Germany",
  },

  2024: 375,

  alert_info: function () {
    alert(
      `Car: ${car.name} Model: ${car.model} Color: ${car.color} Top Speed: ${car.top_speed} Fuel Type: ${car.fuel_type} Transmission: ${car.transmission} Engine: ${car.engine_information.engine_capacity} Cylinders: ${car.engine_information.cylinders} Manufacturer: ${car.manufacture.name} Country: ${car.manufacture.country} Fun Fact: ${car["fun fact"]}`,
    );
  },

  "fun fact": "The BMW X7 is BMW's largest and most luxurious SUV.",

  is_it_a_classic: false,
};

console.log(`Car datatype ${typeof car}`);
console.log(car);
console.log("---using console.log(table)---");
console.table(car); //try this

/*
HAVE ALL YOUR CAR VALUES FROM CAR OBJECT INSIDE THE ARRAY.

-> add final element which is an array with your favourite numbers.
-> ACCESS USING THE ARRAY ALL ITEMS. <DONT USE LOOP>
-> use bracket notation
*/

let array1 = [
  car["name"],
  car["model"],
  car["color"],
  car["top_speed"],
  car["fuel_type"],
  car["transmission"],
  car["engine_information"],
  car["manufacture"],
  car["2024"],
  car["alert_info"],
  car["fun fact"],
  car["is_it_a_classic"],
  [7, 14, 21, 28, 35], // favourite numbers
];

// Access every item using bracket notation

console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);
console.log(array1[6]);
console.log(array1[7]);
console.log(array1[8]);
console.log(array1[9]);
console.log(array1[10]);
console.log(array1[11]);
console.log(array1[12]);

// Access nested object values

console.log(array1[6]["cylinders"]);
console.log(array1[6]["engine_capacity"]);

console.log(array1[7]["name"]);
console.log(array1[7]["aka"]);
console.log(array1[7]["country"]);

// Access favourite numbers

console.log(array1[12][0]);
console.log(array1[12][1]);
console.log(array1[12][2]);
console.log(array1[12][3]);
console.log(array1[12][4]);

//ACCESS USING THE ARRAY ALL ITEMS.<DONT USE LOOP>
//use bracket notation

//<array Lengthsize>
//array[0]
//loop to access all the elements.
// start an array starts at 0.
//end point ->any|

for (let i = 0; i < 20; i++) {
  //0 to 20
  console.log("i is", i);
  console.log(array1[i]);
}

/*Array methods
-push
-pop*/

let myArray = [2,3,4];
