/*
Function allow you to write reusable bits of code.
To use Dry(Do not repeat your self) by using code block

/{/code block/}/
syntax:
function <name:variable name convection> (<parameters>){
  /code block/
}

//Big rule import rule.
-> a function executes only when called.
-> calling a function is telling the
function to do its work.
*/

/*
Create a simple function that
when you call it it alerts
you on the curent time.
*/

function timeAlert() {
  const date = new Date();
  alert(`time stamp: ${date.toISOString()}`);
}
/*
call a function use the function name then
()-> brackets
*/
timeAlert(); //calling a function
