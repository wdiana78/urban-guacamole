/*
DOM Access using
1. querySelector
2. document.get<...>

1. getElementById
   - Create a variable assigned to the DOM element with id="div1".
   - Print the element to the browser console.

2. getElementsByClassName
   - Create a variable assigned to all elements with class="list-item".
   - Print the collection to the browser console.

3. querySelector
   1. Use "#" to select the element with id="div1".
      - Print the element to the browser console.
   2. Use "." to select the first element with class="list-item".
      - Print the element to the browser console.
      - Note: Only the first matching element is returned.

4. querySelectorAll
   - Use "." to select all elements with class="list-item".
   - Print the NodeList to the browser console.
   - Loop through the NodeList and print each movie.
*/

// 1. getElementById

const moviesSection = document.getElementById("div1");
console.log(moviesSection);

// 2. getElementsByClassName

const movieList = document.getElementsByClassName("list-item");
console.log(movieList);

// 3. querySelector

// Select the element with id="div1"
const moviesSectionQuery = document.querySelector("#div1");
console.log(moviesSectionQuery);

// Select the first movie
const firstMovie = document.querySelector(".list-item");
console.log(firstMovie);

// 4. querySelectorAll

// Select all movie titles
const allMovies = document.querySelectorAll(".list-item");
console.log(allMovies);

// Print each movie
for (let i = 0; i < allMovies.length; i++) {
  console.log(allMovies[i]);
}

/*
Update DOM elements

1. innerHTML - Replaces everything inside an element.
2. innerText - Replaces only the text inside an element.
*/

// Save the original content inside #div1 before any function changes it.
// We'll use this later to restore the original Movies content.
const originalContent = document.querySelector("#div1").innerHTML;

// Restore the original Movies content.
function original() {
  console.log("original clicked");

  document.querySelector("#div1").innerHTML = originalContent;
}

// Replace the entire Movies section with a Shopping List.
function replace() {
  console.log("replace clicked");

  const newHtml = `
    <h3>Shopping List</h3>

    <ul>
      <li class="list-item">Milk</li>
      <li class="list-item">Bread</li>
      <li class="list-item">Eggs</li>
      <li class="list-item">Butter</li>
      <li class="list-item">Cheese</li>
    </ul>
  `;

  // Replace everything inside #div1 with the new HTML.
  document.querySelector("#div1").innerHTML = newHtml;
}

// Change only the text inside each existing <li>.
// The HTML structure stays the same.
function updateFruits() {
  console.log("update fruits clicked");

  const fruits = ["Apple", "Mango", "Banana", "Orange", "Watermelon"];

  // Find every <li> with class="list-item"
  const items = document.querySelectorAll(".list-item");

  // Replace each movie title with a fruit name
  for (let i = 0; i < items.length && i < fruits.length; i++) {
    items[i].innerText = fruits[i];
  }
}
