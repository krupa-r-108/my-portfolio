export default function DotGroup({
  count = 6,
  gap = 8,
  color = "#FDC435",
  direction = "row", // "row" or "column"
  className = "",
}) {
  return (
    <div
      className={`flex ${direction === "column" ? "flex-col" : "flex-row"} ${className}`}
      style={{ gap }}
    >
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          style={{
            width: 8,
            height: 8,
            backgroundColor: color,
            borderRadius: "50%",
          }}
        ></div>
      ))}
    </div>
  );
}


// example <DotGroup count={10} color="#FFD700" className="absolute bottom-10 right-20 opacity-60" />

//  example 
// import CircleShape from "./shapes/CircleShape";
// import HexagonShape from "./shapes/HexagonShape";
// import DotGroup from "./shapes/DotGroup";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-[#F9FAFF] overflow-hidden">
//       <CircleShape size={80} className="absolute top-10 left-16 opacity-60" />
//       <HexagonShape size={120} className="absolute bottom-20 right-10 opacity-70" />
//       <DotGroup count={6} className="absolute bottom-10 left-10" />

//       <h1 className="text-5xl font-bold">Hi, I’m Krupa 👋</h1>
//     </section>
//   );
// }
