export default function CircleShape({ size = 100, color = "#FDC435", className = "" }) {
  return (
    <div
      className={`rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    ></div>
  );
}

