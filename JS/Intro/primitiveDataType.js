/*
Numbers
floating point: numbers with decimal places
real numbers
positive
negative numbers
*/

let number1 = 67;       // whole number
console.log(number1)

let number2 = 84.34;    // floating point
console.log(number2)

let number3 = -34;      // negative number
console.log(number3)

let biggestnumber = 1.7976931348623157e+308   // Number.MAX_VALUE
console.log(biggestnumber)
// biggest number: 1.7976931348623157 × 10^308
// go beyond this and JS returns Infinity


/*
strings store sequence of characters
3 ways of creating a string:
1. Double quotes
2. Single quotes
3. Back ticks
*/

let str1 = "I am Diana"   // double quotes
console.log(str1)

let str2 = 'I am Diana'   // single quotes
console.log(str2)

let str3 = `I am Diana`   // back ticks
console.log(str3)

let str4 = "23"           // this is a string not a number
console.log(str4)

// why 3 options: so you can mix quotes without breaking the string
let str5 = 'Daniel said "23 is a number"'   // single outside, double inside
console.log(str5)

let str6 = "Hi, this is a long line"   // pressing enter inside double quotes gives an error, use back ticks instead
console.log(str6)


/*
special characters (escape sequences)
\n   new line
\t   tab
\'   single quote escape
\"   double quote escape
*/

let esc1 = "Hello\nWorld"       // \n moves to a new line
console.log(esc1)


let esc2 = "Name:\tDiana"       // \t adds a tab gap
console.log(esc2)


let esc3 = 'Diana\'s laptop'    // \' lets you use apostrophe inside single quotes
console.log(esc3)


let esc4 = "She said \"hello\"" // \" lets you use double quotes inside double quotes
console.log(esc4)



/*
back ticks enable:
multi line string
you can use both double and single quotes inside back ticks
*/

let str7 = `Hello
There
How are you?`
console.log(str7)


let str8 = `Diana's laptop said "hello"`    // both quotes work freely inside back ticks
console.log(str8)


/*Boolean represent true or false */
let johnIsMale = true   // true value
console.log(johnIsMale)

let johnIsMarried = false
console.log(johnIsMarried)


/*
Null   lack of a value
ie absence of a value
*/

let nullVal1 = null
console.log(nullVal1)  // output isnull


/*
Undefined   lack of a value ie absence of a value
what is the difference between undefined and null?

never explicitly set something to undefined
if you want to create a variable that does not have
a value never use undefined, use null
*/

let undefinedVal1 = undefined  // dont do this
console.log(undefinedVal1)  // output is undefined

let undefinedVal2;  // js engine sets it to undefined
console.log(undefinedVal2)  // output is undefined

//example
// null vs undefined
let customerAge = null
// calculate based on birth
// account for leap year

patientDetails = null
// connect to a server, SHA takes 4 seconds
// patientDetails null   waiting
// patientDetails   object: received the data
// patientDetails   undefined: JS code something went wrong