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

// example usage - <CircleShape size={60} color="#FFE15D" className="absolute top-10 left-20 opacity-70" />
