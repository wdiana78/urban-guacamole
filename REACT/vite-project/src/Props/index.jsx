/*
1. Components are functions.
   input -> output
   input (data) -> output is UI

2. Create reusable components.
   You need an understanding of props.

Properties.

3. Each component you create in React
   will always have props.

4. Props are passed from parent to child.
   All data types can be passed into props,
   including other components.
*/

function Parent() {
  // primitive datatypes
  const str = "Hello world"; // string
  const amount = 2000; // number
  const isOk = true; // boolean
  const notSet = null; // null

  // object
  const car = {
    model: "Mercedes-Benz C300",
    manufacturer: "Mercedes-Benz",
    engine: {
      cc: 2000,
    },
  };

  // array
  const colors = ["Black", "Silver", "White"];

  return (
    <div>
      <h1>I am the parent component</h1>

      <Child1 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
      <Child2
        str={str}
        amountInNumber={amount}
        isOk={isOk}
        notSet={notSet}
        car={car}
        colors={colors}
        obj={{ name: "", value: "" }} //if using directly, ensure you have double brackets
      />
      <Child3 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
    </div>
  );
}

// display props using prop keyword
function Child1(props) {
  return (
    <div>
      <h1>I am the child 1 component</h1>

      <ul>
        <li>
          Favourite string <b>{props.str}</b>
        </li>

        <li>
          Amount <b>{props.amountInNumber}</b>
        </li>

        <li>
          isOk <b>{String(props.isOk)}</b>
        </li>

        <li>
          Not set <b>{String(props.notSet)}</b>
        </li>
      </ul>
    </div>
  );
}

// using destructuring
function Child2(props) {
  const { str, amountInNumber, isOk, notSet, car, colors, obj } = props;

  //key;value
  return (
    <div>
      <h1>I am the child 2 component</h1>

      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>

        <li>
          Amount <b>{amountInNumber}</b>
        </li>

        <li>
          isOk <b>{String(isOk)}</b>
        </li>
        {/*for booleans convert them to string before displaying*/}

        <li>
          Not set <b>{String(notSet)}</b>
        </li>

        <li>
          Car Model <b>{car.model}</b>
        </li>

        <li>
          manufacturer <b>{car["manufacturer"]}</b>
        </li>

        <li>
          Engine CC <b>{car.engine.cc}</b>
        </li>

        <li>
          Colors <b>{colors.join(", ")}</b>
        </li>

        {/* alternatively
        <li>
          Colors <b>{colors[2]}</b>
        </li>*/}

        <li>
          Object value <b>{JSON.stringify(obj)}</b>
        </li>
      </ul>
    </div>
  );
}

// direct destructuring
function Child3({ str, amountInNumber, isOk, notSet }) {
  return (
    <div>
      <h1>I am the child 3 component</h1>

      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>

        <li>
          Amount <b>{amountInNumber}</b>
        </li>

        <li>
          isOk <b>{String(isOk)}</b>
        </li>

        <li>
          Not set <b>{String(notSet)}</b>
        </li>
      </ul>
    </div>
  );
}

export default Parent;

//notes
/* key:value
     const str = props.str;
     const amountInNumber = props.amountInNumber;
     const amount = props.amountInNumber;
     key: number
     key: <string variable naming> "hi boss": 34
     const { str, amountInNumber } = props;
     */
// const { str, amountInNumber, isOk, notSet } = props;
