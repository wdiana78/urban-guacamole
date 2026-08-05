import { useState } from "react";

/*
how to pass state to other components.
update the state if they.
props and state.
*/

function ColorsCircles() {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("");

  const [radius, setRadius] = useState("");

  const onSubmit = () => {
    const clonedColors = structuredClone(colors); //[...colors]
    clonedColors.push(color);
    setColors(clonedColors); //means "Replace the old state with this new array."
  };

  return (
    <div>
      <ColorForm color={color} setColor={setColor} onSubmit={onSubmit} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
}

function ColorForm(props) {
  const { color, setColor, onSubmit } = props;

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
