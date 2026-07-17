/*
You have to prevent the default.
*/

/*
--------How to work with forms--------

"onsubmit" => Default behaviour.
              You have to prevent the default behaviour.
              Event attached to the form.

"onclick" =>
*/

// Attach the submit event to form1.
document.getElementById("form1").addEventListener("submit", submitForm);

function submitForm(event) {
  // Prevent the form from making an automatic submission.
  event.preventDefault();

  // Get all inputs inside form1.
  const inputList = document.querySelector("#form1").querySelectorAll("input");

  const input1 = inputList[0];
  const input2 = inputList[1];

  // Print the values using querySelectorAll().
  console.log("Input 1:", input1.value);
  console.log("Input 2:", input2.value);

  // Alternative: Access the inputs using their IDs.
  console.log("Form1 Input1:", document.getElementById("form1input1").value);

  console.log("Form1 Input2:", document.getElementById("form1input2").value);
}

/*
MINI EXERCISE

1. Create an HTML form with at least 2 inputs and a submit button.
2. Attach the submit event listener.
3. Prevent the form's default behaviour.
4. Print out the values of your form inputs.
*/
// exercise solution

document.getElementById("form2").addEventListener("submit", submitForm2);

function submitForm2(event) {
  // Prevent the form from making an automatic submission.
  event.preventDefault();

  // Print the values using their IDs.
  console.log("Form2 Input1:", document.getElementById("form2input1").value);

  console.log("Form2 Input2:", document.getElementById("form2input2").value);
}

/*Window Events

beforeunload
The browser fires this event just before the page is closed,
reloaded, or the user navigates away.
*/

window.addEventListener("beforeunload", (event) => {
  console.log("Page is closed");

  event.preventDefault();
  event.returnValue = "";
});
