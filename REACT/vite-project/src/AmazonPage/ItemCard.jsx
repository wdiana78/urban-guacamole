function ItemCard() {
  const description =
    "Adjustable Speed Jump Rope featuring a tangle-resistant cable, ergonomic non-slip handles, and customizable length. Designed for cardio workouts, boxing, CrossFit, and home fitness, making it suitable for men, women, and children.";

  const amount = "KES 2,000";

  //react application:primitive datatypes<string,boolean,numbers>
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        border: "2px solid rgba(0,0,0,0.2)",
        padding: "2px 4px 2px 4px",
        margin: "5px",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          width={"200px"}
          src="https://m.media-amazon.com/images/I/61J3h5nXJlL._AC_UL320_.jpg"
        />
      </div>

      <div style={{ textAlign: "left", fontSize: "18px" }}>{description}</div>

      <div style={{ fontSize: "20px" }}>{amount}</div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            border: "2px solid rgba(0,0,0,0.1)",
            padding: "2px 4px 2px 4px",
            color: "white",
            backgroundColor: "orange",
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
