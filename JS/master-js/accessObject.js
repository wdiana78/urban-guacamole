/*
data types<object>
1.confirm that you are able to print the object
and also its type
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
data types<object>
1.confirm that you are able to print the object
and also its type
*/

// console.log(`Car datatype ${typeof car}`);
// console.log(car);
// console.log("---using console.log(table)---");
// console.table(car); // try this

/*
access individual parts of your object.

2 ways of accessing object properties

1. Dot notation
   - does not work for everything but looks good
   - does not work for properties which are:
     - numbers
     - strings with spaces, starting with a number, or special symbols
     - can only access properties that follow variable naming rules

2. Bracket notation
   - works for everything
   - accesses properties using variables

For each property of your object, including nested ones,
access it using both
dot notation and bracket notation.
Print the value and also print its type.

Hint for nested properties use example:
car.manufacture.name
or
car["manufacture"]["name"]
*/

// car and its name using dot notation
console.log(`Name is ${car.name} its type is ${typeof car.name}`);

// bracket notation
console.log(`Name is ${car["name"]} its type is ${typeof car["name"]}`);

// car model
console.log(`Model is ${car.model} its type is ${typeof car.model}`);

// bracket notation
let v1 = "model";
console.log(`Model is ${car[v1]} its type is ${typeof car[v1]}`);

/*
Access individual parts of your object.

2 ways of accessing object properties:
1. Dot notation
2. Bracket notation

For each property, print the value and its type.
*/

// name

console.log(`Name is ${car.name} its type is ${typeof car.name}`);
console.log(`Name is ${car["name"]} its type is ${typeof car["name"]}`);

// model

console.log(`Model is ${car.model} its type is ${typeof car.model}`);

v1 = "model";
console.log(`Model is ${car[v1]} its type is ${typeof car[v1]}`);

// color

console.log(`Color is ${car.color} its type is ${typeof car.color}`);

let v2 = "color";
console.log(`Color is ${car[v2]} its type is ${typeof car[v2]}`);

// top_speed

console.log(
  `Top speed is ${car.top_speed} its type is ${typeof car.top_speed}`,
);

let v3 = "top_speed";
console.log(`Top speed is ${car[v3]} its type is ${typeof car[v3]}`);

// fuel_type

console.log(
  `Fuel type is ${car.fuel_type} its type is ${typeof car.fuel_type}`,
);

let v4 = "fuel_type";
console.log(`Fuel type is ${car[v4]} its type is ${typeof car[v4]}`);

// transmission

console.log(
  `Transmission is ${car.transmission} its type is ${typeof car.transmission}`,
);

let v5 = "transmission";
console.log(`Transmission is ${car[v5]} its type is ${typeof car[v5]}`);

// engine_information (object)

console.log(
  `Engine information is`,
  car.engine_information,
  `its type is ${typeof car.engine_information}`,
);

let v6 = "engine_information";
console.log(`Engine information is`, car[v6], `its type is ${typeof car[v6]}`);

// engine_information.cylinders

console.log(
  `Cylinders are ${car.engine_information.cylinders} its type is ${typeof car.engine_information.cylinders}`,
);

console.log(
  `Cylinders are ${car["engine_information"]["cylinders"]} its type is ${typeof car["engine_information"]["cylinders"]}`,
);

// engine_information.engine_capacity

console.log(
  `Engine capacity is ${car.engine_information.engine_capacity} its type is ${typeof car.engine_information.engine_capacity}`,
);

console.log(
  `Engine capacity is ${car["engine_information"]["engine_capacity"]} its type is ${typeof car["engine_information"]["engine_capacity"]}`,
);

// manufacture (object)

console.log(
  `Manufacture is`,
  car.manufacture,
  `its type is ${typeof car.manufacture}`,
);

let v7 = "manufacture";
console.log(`Manufacture is`, car[v7], `its type is ${typeof car[v7]}`);

// manufacture.name

console.log(
  `Manufacturer name is ${car.manufacture.name} its type is ${typeof car.manufacture.name}`,
);

console.log(
  `Manufacturer name is ${car["manufacture"]["name"]} its type is ${typeof car["manufacture"]["name"]}`,
);

// manufacture.aka

console.log(
  `AKA is ${car.manufacture.aka} its type is ${typeof car.manufacture.aka}`,
);

console.log(
  `AKA is ${car["manufacture"]["aka"]} its type is ${typeof car["manufacture"]["aka"]}`,
);

// manufacture.country

console.log(
  `Country is ${car.manufacture.country} its type is ${typeof car.manufacture.country}`,
);

console.log(
  `Country is ${car["manufacture"]["country"]} its type is ${typeof car["manufacture"]["country"]}`,
);

// Property named 2024

// Dot notation DOES NOT WORK
console.log(`2024 value is ${car["2024"]} its type is ${typeof car["2024"]}`);

// alert_info (function)

console.log(
  `alert_info is`,
  car.alert_info,
  `its type is ${typeof car.alert_info}`,
);

let v8 = "alert_info";
console.log(`alert_info is`, car[v8], `its type is ${typeof car[v8]}`);

// fun fact

// Dot notation DOES NOT WORK because of the space
console.log(
  `Fun fact is ${car["fun fact"]} its type is ${typeof car["fun fact"]}`,
);

// is_it_a_classic

console.log(
  `Is it a classic? ${car.is_it_a_classic} its type is ${typeof car.is_it_a_classic}`,
);

let v9 = "is_it_a_classic";
console.log(`Is it a classic? ${car[v9]} its type is ${typeof car[v9]}`);
//method 2 using loop
let car2 = {
  brand: "Aston Martin",
  model: "1998 Aston Martin V8 Vantage (V550)",
  color: "Blue",
  top_speed: "83m/s",

  engine_info: {
    cylinder_number: 8,
  },

  manufacturer: {
    year: null,
    country: "England",
    aka: "Aston Martin V8 Vantage",
  },

  alert_info: function () {
    window.alert(`Car: ${car2.brand}
${car2.model}
${car2.fun_fact}`);
  },

  fun_fact:
    "The 1998 Aston Martin V8 Vantage (V550) was one of the fastest production cars of its time. Its twin-supercharged 5.3L V8 produced about 550 horsepower and could accelerate from 0–60 mph in around 4.6 seconds.",
};

console.log(typeof car2);
console.table(car2);

function PrintObjectValues(obj) {
  for (const key of Object.keys(obj)) {
    console.log(`${key}: contains data of the type ${typeof obj[key]}`);

    //for some reason null is an object????
    if (obj[key] != null && typeof obj[key] == "object") {
      PrintObjectValues(obj[key]);
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

PrintObjectValues(car2);
