import FilterList from "./FilterList";

function SideBar() {
  return (
    <div
      style={{
        display: "flex",
        width: "400px",
        flexDirection: "column",
      }}
    >
      <FilterList title="Condition" options={["New", "Renewed", "Used"]} />
      <FilterList
        title="Material"
        options={["Plastic", "Rubber", "PVC", "Alloy Steel", "Aluminium"]}
      />

      <FilterList
        title="Uses"
        options={[
          "Exercise",
          "Speed and Endurance",
          "Boxing",
          "Body Building",
          "Martial Arts",
        ]}
      />

      <FilterList
        title="Brand"
        options={["Cross Rope", "Venum", "SportBit", "Adidas", "Nike"]}
      />
    </div>
  );
}

export default SideBar;
