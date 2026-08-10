import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Routing from "./Routing";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
);

// /* TASK ONE - React Intro to Components

// 1. Create a function named MyComponent.
//    - Return null.
//    - You have created a React component that returns null.

// 2. Create a function named MyComponent2.
//    - Return a valid JSX element.

// 3. Using a React Fragment, create a function named MyComponent3.
//    - Return multiple JSX elements using a React Fragment.
// */

// // Part 1
// function MyComponent() {
//   return null;
// }

// /*
// Part 2 (Invalid)

// This is wrong because you are returning multiple
// sibling elements without a parent element or React Fragment.

// function MyComponent2() {
//   return (
//     <div>
//       <h1>This is my second component</h1>
//     </div>
//     <div>
//       <h2>Hello</h2>
//     </div>
//   );
// }
// */

// // Part 2 (Correct)
// function MyComponent2() {
//   return (
//     <div>
//       <h1>This is my second component</h1>
//     </div>
//   );
// }

// // Part 3
// function MyComponent3() {
//   return (
//     <>
//       {/* React Fragment */}
//       <div>
//         <h1>This is my third component</h1>
//       </div>

//       <div>
//         <h2>React Component 3</h2>
//       </div>
//     </>
//   );
// }

// /* MY PRACTICE EXAMPLE */

// // Part 1
// function WelcomeMessage() {
//   return null;
// }

// /*
// Part 2 (Invalid)

// This is wrong because you are returning multiple
// div elements without a parent element or React Fragment.

// function WelcomeMessage2() {
//   return (
//     <div>
//       <h1>Welcome to React</h1>
//     </div>
//     <div>
//       <h2>Let's Build Components</h2>
//     </div>
//   );
// }
// */

// // Part 2 (Correct)
// function WelcomeMessage2() {
//   return (
//     <div>
//       <h1>Welcome to React</h1>
//     </div>
//   );
// }

// // Part 3
// function WelcomeMessage3() {
//   return (
//     <>
//       <div>
//         <h1>Learning React</h1>
//       </div>

//       <div>
//         <h2>Using React Fragments</h2>
//       </div>
//     </>
//   );
// }

// function ParentComponent() {
//   return (
//     <>
//       <MyComponent />
//       <MyComponent2 />
//       <MyComponent3 />

//       <WelcomeMessage />
//       <WelcomeMessage2 />
//       <WelcomeMessage3 />
//     </>
//   );
// }

// /* TASK TWO -Rendering

// 1. Render components inside StrictMode.

// 2. Use both:
//    - Self-closing tags
//    - Opening and closing tags

// 3. Create a ParentComponent.

// 4. Render all components inside ParentComponent.

// 5. Use React Fragments as well as StrictMode.
// */

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <h1>Hello, This is My First React App</h1>

//     {/* Self-closing tag */}
//     <MyComponent />
//     {/* Opening and closing tag */}
//     <MyComponent></MyComponent>

//     <MyComponent2 />
//     <MyComponent3 />

//     <WelcomeMessage />
//     <WelcomeMessage2 />
//     <WelcomeMessage3 />

//     {/* <ParentComponent />  can be rendered here. Commented out as it already renders the child components above. */}
//   </StrictMode>,
// );

// /* NOTES

// React uses components.

// A component is simply a JavaScript function that returns JSX.

// Rules of creating a component:

// 1. A component is a function.
// 2. A component name must start with a capital letter.
// 3. A component must return valid JSX or null.
// 4. If returning multiple JSX elements, wrap them inside
//    a parent element or use a React Fragment (<>...</>).
// 5. Components are rendered using JSX syntax, which resembles HTML.

// Examples:

// <MyComponent />
// or
// <MyComponent></MyComponent>

// <MyComponent2 />
// or
// <MyComponent2></MyComponent2>

// Components can also render other components.
// */
