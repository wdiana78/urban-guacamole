
//truthy and falsy
/*
Truthy or falsy
->If you know something is not falsy
then it is truthy.
falsy
1.false
2.0
3.-0
4.null
5.undefined
6.''->empty string 
  nb a zero or a space inside a string is truthy, the only falsy is an empty string
7.NaN->not a number

Anything that is not falsy is considered truthy
truthy|| falsy -> truthy
*/

let userName1="John Mwangi" //truthy
let userName2=0//falsy

let activeUserName=userName2 || userName1
//activeUserName=>
//
console.log(activeUserName)

let bothUserNameOk=userName1&&userName2
console.log(bothUserNameOk)//truthy or falsy

/*
NB:
- || returns the first truthy value it finds,
  if none are truthy it returns the last value
- && returns the first falsy value it finds,
  if none are falsy it returns the last value
- this is why activeUserName ends up as "John Mwangi"
  userName2 is 0 (falsy) so || moves to userName1 which is truthy
- and bothUserNameOk ends up as 0
  userName1 is truthy so && moves to userName2 which is 0 (falsy) and stops there
*/


let y=true||false||true||false
//y=true

let z=124||0||50||null
//truthy||falsy||truthy||falsy

//the first truthy value will be returned
//if no truthy value, the 
console.log(z) //124
console.log("z is" , z)

let k ="" ||-0||null|| undefined
//k will be the last falsy value
console.log(k) // undefined