/*
  Look at the differences
  between an array and an object.
  -> In an array, keys are sequential numbers.
*/

/*
Create an object that behaves like an array.

1. Create an array. Give it any name.
   Inside the array, have two digits.

   0: <any digit>
   1: <any digit>

2. Create an object. Give it any name.
   Inside the object, have keys.

   0: <any digit>
   1: <any digit>

   For the object, create the length key.
   Set it to the size of the object.

3. Console.table() both. You should see they
   are the same.
*/

// Array
const numbersArray = [25, 80];

// Object that behaves like an array
const numbersObject = {
  0: 25,
  1: 80,
  length: 2,
};

// Display both
console.table(numbersArray);
console.table(numbersObject);

/*
push method: <we can see>

arr.push(11)

1. First, a new key is created.
2. The element is added to that key.
3. The length of the array is incremented.
*/

const ar = [20, 5];

const arObj = {
  0: 20,
  1: 5,

  push: function (newItem) {
    // 'this' accesses the current object instead of using the object's name.

    const key = this.length; // Current key.
    this[key] = newItem; // Add the element to that key.
    this.length = this.length + 1; // Increment the length.
  },

  // Task: Recreate the pop() method.
  pop: function () {
    // Get the last key.
    const key = this.length - 1;

    // Store the value before removing it.
    const removedItem = this[key];

    // Delete the last key.
    delete this[key];

    // Decrement the length.
    this.length = this.length - 1;

    // Return the removed item.
    return removedItem;
  },

  length: 2,
};

console.table(ar);
console.table(arObj);

// Testing

ar.push(10);
arObj.push(10);

console.table(ar);
console.table(arObj);

console.log(ar.pop());
console.log(arObj.pop());

console.table(ar);
console.table(arObj);

/*
Data Structures
- Object
- Array
- Singly Linked List
- Doubly Linked List
- Tree
- Graph
*/
