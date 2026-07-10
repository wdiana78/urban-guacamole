/*
Objects are a complex datatype.
It's a datatype that houses other datatypes.

In real life you cannot really express
complex data using a single variable.

{
  key: value,
  key: value,
  key: value
}

key (property) => <number or string> <unique>

value => any other datatype
boolean, string, number, null, object

if value is a function => method
*/

/*
Object-Oriented Programming
Functional Programming

Why objects are useful.

1. If you want to represent a complex datatype.
*/

/*
This will take you a lot of time.
You will have multiple variables that represent the same entity.
*/

// bad design // code smart // lazy

const student_name = "Samson";
const student_age = 24;
const student_phone = "254732342342";

// parent
const parent_name = "Maggy";
const parent_email = "maggy@gmail.com";

/*
You have one variable that represents the whole thing.
*/

const student = {
  name: "John Mwangi",
  age: 34,

  "favourite quote": "Backwards Never, Forward Ever",

  parent: {
    name: "Maggnus",
    phone: "2547324324",
  },

  pet: {},

  34: "Favorite number",

  sayMyName: function () {
    console.log("John Mwangi");
  },

  announce: function () {
    alert("John Mwangi gracing you with his/her presence");
  },
};

/*
Create an object called car.

properties:
name
model
top_speed

engine_information: <object>
how many cylinders
engine number

manufacture: <object>
name
aka
country

<number as property (key)>: any number

alert_info: function that when called prints information
of the car as an alert

fun_fact

is_it_a_classic <property: value<boolean>>

=> JSON (JavaScript Object Notation)
*/

// dream car

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
      `Car: ${car.name}
Model: ${car.model}
Color: ${car.color}
Top Speed: ${car.top_speed}
Fuel Type: ${car.fuel_type}
Transmission: ${car.transmission}
Engine: ${car.engine_information.engine_capacity}
Cylinders: ${car.engine_information.cylinders}
Manufacturer: ${car.manufacture.name}
Country: ${car.manufacture.country}
Fun Fact: ${car.fun_fact}`,
    );
  },

  fun_fact: "The BMW X7 is BMW's largest and most luxurious SUV.",

  is_it_a_classic: false,
};

//exmaple 2
const car = {
  name: "Peugeot 504",
  model: "504 L saloon",
  color: "Jungle Green",
  top_speed: "160km/h",
  504: "Lion of Africa",
  engine_information: {
    name: " 1.8L inline-4 (XC5) ",
    cylinder: 4,
  },
  manufacture: {
    name: "Peugeot",
    aka: "Pegot",
    country: "France",
  },
  alert_info: function () {
    alert(`Car:${car.name}
            model:${car.model}
            color:${car.color}
            top_speed:${car.top_speed}
            `);
  },
  fun_fact: `
    First car to cross the sahara desert.
    no reverse parking near banks.
    No air bags you die like real men.
    `,
};
