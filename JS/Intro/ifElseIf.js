/*
if and else if -> chain
 ifElseIf exits when we reach the first truth, 
 cannnot exist without the last If


 else only means if everything fails, what do we execute
*/

let age = Number(prompt("Enter your age"));
console.log(`age is ${age} typeof ${typeof age}`);
alert(`You entered ${age}`);

if (age > 10) {
  alert("You are a baby");
} else if (age > 13) {
  alert("You are a teen");
} else if (age > 18) {
  alert("You can legally drink and smoke");
  alert("But should you?");
} else if (age > 27) {
  alert("Best age for marriage");
} else if (age > 45) {
  alert("Best age for retirement");
  alert("Get second wife");
} else if (age > 55) {
  alert("You are expired");
  alert("You are an ancestor");
} else {
  alert("You are too young, enter a valid age");
}

/*

 if (age < 10) {
   alert("You are a baby");
 } else if (age < 13) {
   alert("You are a teen");
 } else if (age < 18) {
   alert("You can legally drink and smoke");
 } else if (age < 27) {
   alert("Best age for marriage");
 } else if (age < 45) {
   alert("Best age for retirement");
 } else if (age < 55) {
   alert("You are an ancestor");
 } else {
   alert("You are too old, enter a valid age");
 }
*/
