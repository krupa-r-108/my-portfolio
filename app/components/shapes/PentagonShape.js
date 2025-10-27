
export default function Pentagon({ size = 80, color = "#FDC435", className = "" }) {
  return (
    <div
      className={`${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
      }}
    ></div>
  );
}
