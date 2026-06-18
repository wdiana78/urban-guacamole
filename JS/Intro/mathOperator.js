/*Assignment=

Addition + -> used to add two or more numbers
Multiplication * -> used to multiply 2 or more numbers
-->powers
*/

let numb1=23; //Decalred and assigned the variable
console.log(`numb 1 is ${numb1} its type is ${typeof numb1}`)

numb1=40; //Assignement only so drop the let as it has already been declared, you just want to change the value
console.log(`numb1 is ${numb1} its type is ${typeof numb1}`)

let numb2=60
console.log( `numb2 is ${numb2} its type is ${typeof numb2}`)

let numb3=numb1+numb2+10 //40+60+10 => 110
console.log(`numb3 is ${numb3} its type is ${typeof numb3}`)

let numb4=numb1*numb2
console.log(`numb4 is ${numb4} its type is ${typeof numb4}`)

let numb5=2**3 //when you use two astericks, it mean power
console.log(`numb5 is ${numb5} its type is ${typeof numb5}`)

let numb6=Math.pow(10,3)  //for other complex math
console.log(`numb6 is ${numb6} its type is ${typeof numb6}`)
//cos , tan, log, pow

//Division
let numb7=30
let numb8=10
let divNumb=numb7/numb8
console.log(`divNumb is ${divNumb} its type is ${typeof divNumb}`)

//Modulus
//divide 2 numbers leaving a remainder
let numb9=23
let numb10=12
let modNu=numb9%numb10
console.log(`modNu is ${modNu} its type is ${typeof modNu}`)



//more examples
//Modulus deeper examples
let numb11=73
let numb12=12
let modNu2=numb11%numb12
console.log(`modNu2 is ${modNu2}`) //73/12 = 6 remainder 1, so 1

let numb13=12
let numb14=73
let modNu3=numb13%numb14
console.log(`modNu3 is ${modNu3}`) //12 is smaller than 73, whole 12 becomes remainder

let numb15=72
let numb16=12
let modNu4=numb15%numb16
console.log(`modNu4 is ${modNu4}`) //72 divides evenly by 12, remainder is 0