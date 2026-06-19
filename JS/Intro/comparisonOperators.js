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