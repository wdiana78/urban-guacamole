/*
If something happens, get notified or get your function to be notified.
This happens via callbacks.

Events ->

If something happens, I want to be notified.
-> callback <>

Sensor ->

-> click
-> hover
-> type
*/

function clickAlert(event) {
  console.log(event); // DOM event that occurred
  alert("Hi button was clicked");
}

function mouseOverAlert(event) {
  console.log(event);
  console.log("Mouse over", new Date());
}

/*
querySelector, getElementById are methods

addEventListener(@param1, @param2) First argument: Which event to watch.

@param1 -> event ("click", "mouseover", etc.) must be written as a string

@param2 -> callback(event) => event is a DOM event
*/

// Find the Event Checker button once.
const eventButton = document.querySelector("#btn-event-checker");

// Attach events to the button.
eventButton.addEventListener("click", clickAlert);
eventButton.addEventListener("mouseover", mouseOverAlert);

/*
Create a button.

1. Attach a click event that shows an alert.
2. Attach a mouseover event that console.logs the current date.
3. For each of the events, print the event.

(Already created in the HTML, so we only attach the events here.)
*/

/*
We can attach an event to the window (active tab)
for mouse movement and print out the coordinates of the mouse.

Have X and Y coordinates being displayed on the screen when someone moves.
*/

window.addEventListener("mousemove", (event) => {
  console.log("X direction", event.clientX);
  console.log("Y direction", event.clientY);

  document.getElementById("x-b").textContent = event.clientX;
  document.getElementById("y-b").textContent = event.clientY;
});
