/*
comparison operators evaluate to only true or false
Equality ==
Strict Equality ===
Inequality !=
Strict Inequality !==
--JS--
*/

//Example 1
let numb1="23";
let numb2=23;

// string===number => false
// numb1==numb2 -> type conversion

let strictEqual=numb1===numb2; //Boolean
console.log(`numb1=${numb1}===numb2=${numb2}
    Ans ${strictEqual} its type is ${typeof strictEqual}`);

let nonStrictEquality=numb1==numb2; //Boolean
console.log(`numb1=${numb1}==numb2=${numb2}
    Ans ${nonStrictEquality} its type is ${typeof nonStrictEquality}`);

let strictInequality=numb1!==numb2; //Boolean
console.log(`numb1=${numb1}!==numb2=${numb2}
    Ans ${strictInequality} its type is ${typeof strictInequality}`);

let Inequality=numb1!=numb2; //Boolean
console.log(`numb1=${numb1}!=numb2=${numb2}
    Ans ${Inequality} its type is ${typeof Inequality}`);


//Example 2
let age1="18";
let age2=18;

let strictAge=age1===age2; //Boolean
console.log(`age1=${age1}===age2=${age2}
    Ans ${strictAge} its type is ${typeof strictAge}`);

let nonStrictAge=age1==age2; //Boolean
console.log(`age1=${age1}==age2=${age2}
    Ans ${nonStrictAge} its type is ${typeof nonStrictAge}`);

let strictInequalityAge=age1!==age2; //Boolean
console.log(`age1=${age1}!==age2=${age2}
    Ans ${strictInequalityAge} its type is ${typeof strictInequalityAge}`);

let InequalityAge=age1!=age2; //Boolean
console.log(`age1=${age1}!=age2=${age2}
    Ans ${InequalityAge} its type is ${typeof InequalityAge}`);


//Example 3
let score1="50";
let score2=60;

let strictScore=score1===score2; //Boolean
console.log(`score1=${score1}===score2=${score2}
    Ans ${strictScore} its type is ${typeof strictScore}`);

let nonStrictScore=score1==score2; //Boolean
console.log(`score1=${score1}==score2=${score2}
    Ans ${nonStrictScore} its type is ${typeof nonStrictScore}`);

let strictInequalityScore=score1!==score2; //Boolean
console.log(`score1=${score1}!==score2=${score2}
    Ans ${strictInequalityScore} its type is ${typeof strictInequalityScore}`);

let InequalityScore=score1!=score2; //Boolean
console.log(`score1=${score1}!=score2=${score2}
    Ans ${InequalityScore} its type is ${typeof InequalityScore}`);


//greater than

let numb3=20;
let numb4=10

let str1="a"
let str2="b"

console.log(`num3=${numb3} and numb4=${numb4}`)
console.log(`str1=${str1} and str2=${str2}`) //check the unicode table for values of 'a' and 'b'
console.log(`numb3>numb4 ${numb3>numb4}`)
console.log(`str2>str1 ${str1>str2}`)

console.log(`numb3>=numb4 ${numb3>=numb4}`) 
console.log(`str2>=str1 ${str1>=str2}`) //check the unicode table for values of 'a' and 'b'

console.log(`numb3<numb4 ${numb4<numb3}`)
console.log(`str2<str1 ${str1<str2}`)

console.log(`numb3<=numb4 ${numb3<=numb4}`)
console.log(`str2<=str1 ${str1<=str2}`)




/*
comparison operators.
comparison operators evaluate to only true or false.
*/

/*
And -> &&
truth table -> all posible combinations
val1 and val2
combinations are
val1 && val2
val2 && val1

-> for and all statments have to be true for
it to be true.
*/
//TRUTH TABLE  
let val1=true
let val2=true
let result1=val1&&val2

console.log(`val1=${val1} val2=${val2} val1&&val2=${val1&&val2}`)

let mercy_age=15
let mercy_balance=50000

//if mercy is age is greter than 18 and has more thna 20k in  her account
let is_greater_than_18=mercy_age>18 //true or false
console.log(`Is mercy age greater than 18 ${is_greater_than_18}`)
let has_more_than_20k=mercy_balance>20000
console.log(`Mercy has more than 20k ${has_more_than_20k}`)
console.log(`Mercy's age is greater than 18
    and has more than 20k in  her account
    ${is_greater_than_18&&has_more_than_20k}
    `)
//mercy_age>18&&mercy_balance>20000
let simplified=mercy_age>18&&mercy_balance>20000
console.log(`simplified ${simplified}`)
console.log(`further simplification is ${mercy_age>18&&mercy_balance>20000}`)



//Example
// BANK LOAN APPLICATION
// John qualifies only if he meets ALL three conditions:
// - He must be 25 or older
// - His salary must be more than 30,000
// - His credit score must be above 600

let john_age = 24
let john_salary = 45000
let john_credit_score = 650

// step 1 - check each condition separately

// step 2 - print each check

// step 3 - show the working then the conclusion

// step 4 - simplified into one variable

// step 5 - further simplification, no variable at all




//ANSWER
let john_age = 24
let john_salary = 45000
let john_credit_score = 650

// step 1 - check each condition separately
let is_old_enough = john_age >= 25
let has_good_salary = john_salary > 30000
let has_good_credit = john_credit_score > 600

// step 2 - print each check
console.log(`Is John 25 or older: ${is_old_enough}`)
console.log(`Does John earn more than 30k: ${has_good_salary}`)
console.log(`Does John have a good credit score: ${has_good_credit}`)

// step 3 - show the working then the conclusion
console.log(`Is John old enough: ${is_old_enough}`)
console.log(`Does John have good salary: ${has_good_salary}`)
console.log(`Does John have good credit: ${has_good_credit}`)
console.log(`Does John qualify for the loan: ${is_old_enough&&has_good_salary&&has_good_credit}`)

// step 4 - simplified into one variable
let simplified = john_age>=25&&john_salary>30000&&john_credit_score>600
console.log(`simplified: ${simplified}`)

// step 5 - further simplification, no variable at all
console.log(`Further simplification: ${john_age>=25&&john_salary>30000&&john_credit_score>600}`)

/*
TRUTH TABLE for &&
val1    val2    result
true    true    true
true    false   false
false   true    false
false   false   false

-> ALL conditions must be true for the final result to be true
-> ONE false kills everything
*/


/*or operater 
if at least one stayement has to be true for the whole statement to be true


let mercy_age = 15
let mercy_balance = 50000

let is_greater_than_18 = mercy_age > 18       // false
let has_more_than_20k = mercy_balance > 20000  // true

console.log(`Is mercy age greater than 18: ${is_greater_than_18}`)
console.log(`Mercy has more than 20k: ${has_more_than_20k}`)

console.log(`Mercy's age is greater than 18
    or she has more than 20k in her account
    ${is_greater_than_18||has_more_than_20k}
    `)

/*
OR -> ||
At least one statement has to be true for the whole statement to be true

TRUTH TABLE for ||
val1    val2    result
true    true    true
true    false   true
false   true    true
false   false   false
*/

/*
NOT -> !
Flips the value to the opposite
true  becomes false
false becomes true
*/

console.log(`This is not true = ${!true}`)
console.log(`This is not false = ${!false}`)


























 //further reading 
// //relational Comparisons

// //greater than
// // let x=5
// // x>3 //the result is true
// // x>5 //false 
// // x>6 //false

// // //less than 
// // let x=5
// // x<3 //false
// // x<5 //false
// // x<6 //true, 5 is less than 6


// // //greater than or equal to  >=
// // let x=5
// // x>=3   //returns true
// // x>=5 //true
// // x>=6 //false

// // //less than or equal to
// // let x=5
// // x<=3  //false
// // x<=5 //true
// // x<=6 //true


// //practice examples
// let x=1;

// console.log(x>0);
// console.log(x>=0);
// console.log(x<1);
// console.log(x<=1);

// //Equality Comparisons
// //nb a single= is the assign operators

// //1.loose equlity (==) -->checks if two values are eqaul and ignores type
// let y=5;
// y=="5"
// console.log(y=="5");
// console.log(y=="4");

// //2. Strict Equality (===) --> checks if two values are equal and type is the same
// y==="5"
// console.log(y==="5") //returns false as we said let y=5
 
// console.log(y===5) //true
// console.log(y===4) //false

// //loose inequality (!= ) --> checks if 2 values are not equal and ignores type
// 5!="5" 
// console   //expect false




 
