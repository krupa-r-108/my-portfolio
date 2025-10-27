export default function Navbar() {
  return (
    // <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md  p-4 flex justify-center gap-6 z-50">
    <nav className="fixed top-0 w-full bg-none   p-4 flex justify-center gap-6 z-50">
      <a href="#hero" className="text-gray-700 hover:text-gray-400 transition font-medium">Home</a>
      <a href="#about" className="text-gray-700 hover:text-gray-400 transition font-medium">About</a>
      <a href="#projects" className="text-gray-700 hover:text-gray-400 transition font-medium">Projects</a>
      <a href="#tech" className="text-gray-700 hover:text-gray-400 transition font-medium">Tech</a>
      <a href="#contact" className="text-gray-700 hover:text-gray-400 transition font-medium">Contact</a>
    </nav>
  )
}
