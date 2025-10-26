
export default function YellowCircle({ className = "" }) {
  return (
    <div
      className={`absolute w-16 h-16 md:w-24 md:h-24 border-2 border-yellow-400 rounded-full opacity-30 bg-yellow-400 ${className}`}
    ></div>
  );
}
