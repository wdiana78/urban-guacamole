/*
 lets start with if.
 its special.
 you can use it on its own.
 one if statement does not depend on another.
*/

// nb: an if statement is independent!
/* the code below is for example purposes only to demonstrate independence.
   in a real scenario this would not make sense because there should be a limit,
   that is where else comes in. you can also use a while loop to force the user
   to enter a valid value.
*/

let age=prompt("Enter your age")
alert(`You entered ${age}`)

// age=27
// 27>10:true
if (age>10){
    alert("You are a baby")
}
// 27>13=true
if (age>13){
    alert("You are a teen")
}
// 27>18=true
if (age>18){
    alert("You can legally drink and smoke")
    alert("But should you?")

}
// 27>27=false
if (age>27){
    alert("Best age for marriage")
   
}
// 27>45=false
if (age>45){
    alert("Best age for retirement")
    alert("Get second wife")
}
// 27>50=false
if (age>50){
    alert("You are expired")
    alert("You are an ancestor")
}

