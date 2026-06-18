/*
is a way to combine data and strinf for output*/

let firstName="Samuel"
let secondName="Jane"
let age="20"
let address="Juja County"

//Execrsice


//Normal String concatenation
let userDetails=firstName +" " + 
secondName+ " is " +age+" years old"+
" he stays at " + address
console.log(userDetails)
console.log("User details is", typeof userDetails)

//Template string use back ticks
let userDetails2=
`${firstName} ${secondName} is ${age} years old and he stays at ${address}`;
console.log(userDetails2)
console.log(`${typeof userDetails2} ${34+50}`)
/*or you can console.log the whole sting*/ 
console.log(`${firstName} ${secondName} is ${age} years old and he stays at ${address}`)
