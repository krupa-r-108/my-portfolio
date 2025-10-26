// export default function HexagonShape({ size = 100, color = "#FDC435", className = "" }) {
//   const hexClip = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

//   return (
//     <div
//       className={` ${className}`}
//       style={{
//         width: size,
//         height: size,
//         backgroundColor: color,
//         clipPath: hexClip,
//       }}
//     ></div>
//   );
// }


export default function Hexagon({ size = 80, color = "#FDC435", className = "" }) {
  return (
    <div
      className={`${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
      }}
    ></div>
  );
}
