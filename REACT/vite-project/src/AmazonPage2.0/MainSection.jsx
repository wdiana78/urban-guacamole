import ItemCard from "./ItemCard";

const data = [
  {
    description:
      "Jump Rope, Tangle-Free Rapid Speed Jumping Rope Cable with Ball Bearings for Women, Men, and Kids, Adjustable Steel Jump Rope",
    amount: 1157,
    img: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "BOOMIBOO Jump Rope, Adjustable Jump Ropes, Skipping Rope Tangle-Free Rapid Speed with Ball Bearings for Women",
    amount: 697,
    img: "https://m.media-amazon.com/images/I/71WhY22zw7L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "SPORTBIT Adjustable Jump Rope for Fitness and Exercise | Fitness and Exercise, Cardio, Boxing, and Weight Loss, Speed Rope, Men",
    amount: 774,
    img: "https://m.media-amazon.com/images/I/71UzJ-BgpFL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "SPORTBIT Adjustable Jump Rope for Fitness and Exercise | Fitness and Exercise, Cardio, Boxing, and Weight Loss, Speed Rope, Men",
    amount: 774,
    img: "https://m.media-amazon.com/images/I/71UzJ-BgpFL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "JAMIEWIN Led Light Up Jump Rope for Kids Glow in the Dark Beaded Jump Rope | Adjustable, Colorful Soft Beaded Segmented",
    amount: 1679,
    img: "https://m.media-amazon.com/images/I/719M6JVne6L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "Redify Adjustable Speed Jump Rope with Ball Bearings for Cardio, CrossFit and Boxing",
    amount: 899,
    img: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "Loocio Tangle-Free Adjustable Jump Rope for Fitness Training and Weight Loss",
    amount: 549,
    img: "https://m.media-amazon.com/images/I/71WhY22zw7L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "EliteSRS Speed Rope with Aluminum Handles for Double Unders and HIIT Training",
    amount: 2399,
    img: "https://m.media-amazon.com/images/I/71UzJ-BgpFL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "Weighted Jump Rope with Foam Handles for Home Gym, Strength and Cardio Workouts",
    amount: 1499,
    img: "https://m.media-amazon.com/images/I/719M6JVne6L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "PVC Adjustable Skipping Rope for Men, Women and Children, Lightweight Exercise Rope",
    amount: 399,
    img: "https://m.media-amazon.com/images/I/71WhY22zw7L._AC_UL480_FMwebp_QL65_.jpg",
  },
];

function MainSection() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((doc) => {
        return (
          <ItemCard
            key={index}
            description={doc.description}
            amount={doc.amount}
            img={doc.img}
          />
        );
      })}
    </div>
  );
}

export default MainSection;
