/*
the typeof is just to tell the variable type
number
string
boolean
null
undefined
*/
let numb1 = 6443;
console.log("numb1", numb1, "Its type is", typeof numb1);
let strNumb = "585";
console.log("strNum", strNumb, "Its type is", typeof strNumb);
let myName = "Diana";
console.log("My name is", myName, "Its type is ", typeof myName);
let isMarried = true;
console.log("isMarried", isMarried, "Its type is", typeof isMarried);
let nullVal = null; // typeof null returns "object" because of a historical JS bug
console.log("nullVal", nullVal, "Its type is", typeof nullVal);
let unValue;
console.log("unValue", unValue, "Its type is", typeof unValue);

// const bonus="200" //introduces a bug since 200 here is a string
// console.log("Bonus is", bonus)
// const salary=50000
// console.log("Salary is", salary)

// const salaryGross=bonus+salary //instruction
// //console.log(salaryGross) ! -> more information

// console.log("Gross salary is", salaryGross, "Its type is", typeof salaryGross ) //->more helpful

// //Tax calculations
// const paye=salaryGross*0.16
// console.log("For Gross salary of", salaryGross,"Paye is", paye)
// //->
// const nhif=2500
// console.log("Nhif Deduction is", nhif)
// const sha=2500
// console.log("SHA is", sha)
// const totalDeductions=paye+nhif+sha
// console.log("Total deductions are", totalDeductions)
// const netsalary=salaryGross-totalDeductions
// console.log("Your net salary is", netsalary)
