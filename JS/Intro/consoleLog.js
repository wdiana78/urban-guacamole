/*
console.log -->debugging by printing out information on the screen
console.log->ensure you write your consoles in such a way that they help you figure out the issue.
->simple execise from a gross salary
*/
const salaryGross=50000;//instruction
//console.log(salaryGross) !->more information
console.log("Gross salary is", salaryGross) //->more helpful
//Tax calculations
const paye=salaryGross*0.16
console.log("For Gross salary of", salaryGross,"Paye is", paye)
//->
const nhif=2500
console.log("Nhif Deduction is", nhif)
const sha=2500
console.log("SHA is", sha)
const totalDeductions=paye+nhif+sha
console.log("Total deductions are", totalDeductions)
const netsalary=salaryGross-totalDeductions
console.log("Your net salary is", netsalary)
