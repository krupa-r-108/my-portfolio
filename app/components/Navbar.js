export default function Navbar() {
  return (
    // <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md  p-4 flex justify-center gap-6 z-50">
    <nav className="fixed top-0 w-full bg-none   p-4 flex justify-center gap-6 z-50">
      <a href="#hero" className="text-gray-700 hover:text-white transition font-medium">Home</a>
      <a href="#about" className="text-gray-700 hover:text-white transition font-medium">About</a>
      <a href="#projects" className="text-gray-700 hover:text-white transition font-medium">Projects</a>
      <a href="#tech" className="text-gray-700 hover:text-white transition font-medium">Tech</a>
      <a href="#contact" className="text-gray-700 hover:text-white transition font-medium">Contact</a>
    </nav>
  )
}

// export default function Navbar() {
//   return (
//     <nav className="relative z-20 flex items-center justify-between px-8 lg:px-20 h-20">
//       {/* Left: Logo */}
//       <div className="text-2xl font-bold text-gray-900">MyLogo</div>

//       {/* Right: Links */}
//       <div className="flex space-x-6 text-gray-900 font-medium">
//         <a
//           href="#hero"
//           className="text-gray-700 hover:text-yellow-600 transition font-medium"
//         >
//           Home
//         </a>
//         <a
//           href="#about"
//           className="text-gray-700  hover:text-yellow-600  transition font-medium"
//         >
//           About
//         </a>
//         <a
//           href="#projects"
//           className="text-gray-700  hover:text-yellow-600  transition font-medium"
//         >
//           Projects
//         </a>
//         <a
//           href="#tech"
//           className="text-gray-700  hover:text-yellow-600  transition font-medium"
//         >
//           Tech
//         </a>
//         <a
//           href="#contact"
//           className="text-gray-700  hover:text-yellow-600  transition font-medium"
//         >
//           Contact
//         </a>
//       </div>
//     </nav>
//   );
// }
