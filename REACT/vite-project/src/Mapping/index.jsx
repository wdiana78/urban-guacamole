function Mapping() {
  /*
    in React you might need to display data from an array

    for <array.map>: new Array

    React {expression}

    map(@param1)
    @param1 => callback function => single array item will be passed
    @param1(param2, param3)
    @param2 -> single array item, index
  */

  /* map function and loop method
  map function is a method in an array, e.g. <pop, push>
  the work of the map function is creating a new array by going through the existing array
  all expressions evaluate and give results
  */

  // mapping vs looping
  const numbers = [2, 6, 23, 525, 56];

  // get power of the numbers
  const powerOfNumbers = numbers.map((n) => n * n); // 4, 36..
  const justMap = numbers.map(() => "cats and dogs"); // you get five elements with "cats and dogs"

  console.log(powerOfNumbers);
  console.log(justMap);

  // forEach statement, NB: doesn't return anything or returns undefined as it is a statement/doesn't get evaluated
  let x = numbers.forEach((element) => {
    console.log("Element is ", element);
    return "this is n"; // returns undefined
  });

  console.log(x);

  const colors = ["green", "yellow", "blue", "black"];

  function singleColor(c, i) {
    // NB: returning null skips rendering this item.
    if (i === 1) {
      return null;
    }

    return (
      <div key={i}>
        for index <b>{i}</b> color is <b>{c}</b>
      </div>
    );
  }

  return (
    <div>
      <h1>Mapping colors</h1>

      <h4>using arrow function</h4>
      {colors.map((color, index) => {
        return (
          <div key={index}>
            for index <b>{index}</b> color is <b>{color}</b>
          </div>
        );
      })}

      {/* using arrow function */}

      <h4>using direct arrow function</h4>
      {colors.map((c, i) => (
        <div key={i}>
          for index <b>{i}</b> color is <b>{c}</b>
        </div>
      ))}

      <h4>using anonymous function</h4>
      {colors.map(function (c, i) {
        return (
          <div key={i}>
            for index <b>{i}</b> color is <b>{c}</b>
          </div>
        );
      })}

      <h4>using referencing function</h4>
      {colors.map(singleColor)}

      <h4>using a component</h4>
      {colors.map(function (c, i) {
        return <SingleColorComponent c={c} i={i} key={i} />;
      })}

      {/* using arrow function */}
    </div>
  );
}

function SingleColorComponent(props) {
  const { c, i } = props;

  return (
    <div>
      for index <b>{i}</b> color is <b>{c}</b>
    </div>
  );
}

export default Mapping;
