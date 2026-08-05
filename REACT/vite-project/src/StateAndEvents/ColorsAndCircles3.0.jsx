import { useState } from "react";

/*conceptually
function useState(initialValue) {
    return ([], function updateFunction(){});
}
*/

/*
how to pass state to other components.
update the state if they.
props and state.

1. Move the color and set color state inside the ColorForm. <increase performance>
   to see the before and after.
   console.log("<component name>", new Date()); // for each component

2. Add a button on single color to remove the color. <remove color>
   hint: [perform a state update]
*/

function ColorsCircles() {
  const [colors, setColors] = useState([]); //destructing happens here after useState([]) runs, useState([]) is called by react
  const [radius, setRadius] = useState("");

  console.log("ColorsCircles render", new Date());

  return (
    <div>
      <ColorForm colors={colors} setColors={setColors} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
}

function ColorForm(props) {
  const { setColors, colors } = props;

  const [color, setColor] = useState("");

  console.log("ColorForm render", new Date());

  const onSubmit = () => {
    const clonedColors = structuredClone(colors); //[...colors]
    clonedColors.push(color);
    setColors(clonedColors);
  };

  return (
    <div>
      <label>Enter Color</label>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={onSubmit}>Save</button>
    </div>
  );
}

function ColorList(props) {
  const { colors, setColors } = props;

  console.log("ColorList render", new Date());

  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
          }}
        >
          {color}
        </div>
      ))}
    </div>
  );
}

export default ColorsCircles;


