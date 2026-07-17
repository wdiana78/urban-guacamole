/*fetch> inbuilt js library for handling http requests

fetch(@param1, param2) => the response is an object with a function then()
                        => response.catch


@param1= url:<>                       
@param2 => configuration object <headers, methods body- for post request>


*/

// const requestOptions = {
//   method: "GET",
//   // redirect: "follow",   if redirecting
// };

// fetch("https://api.github.com/users", requestOptions)
//   .then((response) => response.json())
//   .then((result) => {
//     console.log("type of result", typeof result);
//     console.log(result);
//   })
//   .catch((error) => console.error(error));

/*to convert to json   
  const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())    //replaced text with jason 
  .then((result) => {
    console.log("type of result", typeof result);
    console.log(result);
  })
  .catch((error) => console.error(error));*/

/**/

/*
code without a promise.
/*
1. create a variable <any name> global variable
2. console.log the value of the variable.
3. create and call a function that modifies this variable
4. console.log( ) the value of the variable
*/

//code with a promise.
const requestOptions = {
  method: "GET",
  // redirect: "follow",   if redirecting
};

let flow = "This flow";
console.log("58:", flow);
fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log("line 62");
    flow = "Updated Flow";
    console.log("type of result", typeof result);
    console.log(result);
  });
console.log("67:", flow);

/*assigning fetch a variable


let result = fetch("https://apfdfi.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    // console.log("Line 34");
    // flow = "Updated Flow";
    // console.log("type of result", typeof result);
    // console.log(result);
  });

console.log(result);


JS has change how we execute lines of code
*/
