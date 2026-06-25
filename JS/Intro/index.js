// let x = 34;
// let y= 20;
// let z = x + y;
// console.log(z);

// myage=34
//my_age, $myage
//myagein20years
//myagein20years=34

//Myage=34
// Dont start with a number
// Dont use reserved words eg its incorrect to use let let=34
// i.e they are called reserved keywords, you must rename eg let_let is correct if you must use

//TAX CALCULATION

/* is NaN
 Number
 +<></>
 */

let grossMonthlySalary = null;
while (true) {
  let gross = prompt("Enter your gross salary");
  if (!isNaN(gross)) {
    gross = Number(gross);
    if (gross > 0) {
      grossMonthlySalary = gross;
      break;
    }
  }
  alert(`invalid amount entered. 
    Ensure you enter a number greater than zero`);
}

console.log(
  `Gross salary is ${grossMonthlySalary} typeof is ${typeof grossMonthlySalary}`,
);

//Calculator the paye
let paye = null;
let tier = null;

if (grossMonthlySalary >= 0 && grossMonthlySalary <= 24000) {
  paye = grossMonthlySalary * 0.1;
  tier = "0-24,000 KES";
}
if (grossMonthlySalary >= 24001 && grossMonthlySalary <= 32333) {
  paye = grossMonthlySalary * 0.25;
  tier = "24,001-32,333 KES";
}
if (grossMonthlySalary >= 32334 && grossMonthlySalary <= 500000) {
  paye = grossMonthlySalary * 0.3;
  tier = "32,334-500,000 KES";
}
if (grossMonthlySalary >= 500001 && grossMonthlySalary <= 800000) {
  paye = grossMonthlySalary * 0.325;
  tier = "500,001-800,000 KES";
}
if (grossMonthlySalary > 800000) {
  paye = grossMonthlySalary * 0.35;
  tier = "Above 800,000 KES";
}

console.log(`PAYE is KES ${paye}, tier is ${tier}`);

/*alternatively
let grossMonthlySalary = 700000;
let paye = null;
let tier = null;

if (grossMonthlySalary <= 24000) {
  paye = grossMonthlySalary * 0.10;
  tier = "0-24,000 KES";
} else if (grossMonthlySalary <= 32333) {
  paye = grossMonthlySalary * 0.25;
  tier = "24,001-32,333 KES";
} else if (grossMonthlySalary <= 500000) {
  paye = grossMonthlySalary * 0.30;
  tier = "32,334-500,000 KES";
} else if (grossMonthlySalary <= 800000) {
  paye = grossMonthlySalary * 0.325;
  tier = "500,001-800,000 KES";
} else {
  paye = grossMonthlySalary * 0.35;
  tier = "Above 800,000 KES";
}

console.log(`PAYE is KES ${paye}, tier is ${tier}`);
*/
