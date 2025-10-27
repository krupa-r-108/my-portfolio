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



