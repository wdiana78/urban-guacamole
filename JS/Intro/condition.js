/*
condition operators
if, if else, else





syntax
if you want to use if

if (condition goes>){}
Golden rule if the condition is truthy 
then it will be executed

if the condition is falsy, 
the code will not be excecuted
*/

/*
senario 1:
  1. declare a variable of your choice, assign a truthy value
     create an if statement and put the variable
     inside the if statement condition(<variable>). inside the if
     console.log("Senario 1 it run")

senario 2:
  1. declare a variable of your choice, assign a falsy value
     create an if statement and put the variable
     inside the if statement. inside the if
     console.log("Senario 2 it run")

senario 3:
  1. create an if statement inside the if statement condition
     part. have true.
     inside the block({}) console.log("Senario 3 it run")

senario 4:
  1. create an if statement inside the if statement condition
     part. have false.
     inside the block({}) console.log("Senario 4 it run")

senario 5:
  1. create an if statement inside the if statement condition
     part. 10>20
     inside the block({}) console.log("Senario 5 it run")

senario 6:
  1. create an if statement inside the if statement condition
     part. have 20>10.
     inside the block({}) console.log("Senario 6 it run")
*/





/*
senario 1:
  1. declare a variable of your choice, assign a truthy value
     create an if statement and put the variable
     inside the if statement condition(<variable>). inside the if
     console.log("Senario 1 it run")
*/



// scenario 1 - isHot is truthy, will print
let isHot = true;
if (isHot){
    console.log("Heat detected, AC has been switched on automatically")
}

// scenario 2 - isRaining is falsy, will not print
let isRaining= false
if (isRaining){
    console.log("Rain detected, close the windows")
}

// scenario 3 - condition is true, will print
if (true){
    console.log("Storm ALERT!, all flights have been grounded")
}

// scenario 4 - condition is false, will not print
if (false){
    console.log("Flood warning issued, evacuate the ground floor")
}

// scenario 5 - 10 is not greater than 20, will not print
let currentTemp = 10;
if (currentTemp>20){
    console.log("Temperatures are high, cooling system activated")
}

// scenario 6 - 20 is greater than 10, will print
let dangerTemp =20;
if (dangerTemp>10){
    console.log("Critical temperature reached, emergency cooling system engaged")
}