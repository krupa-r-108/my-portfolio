
import Image from "next/image";
import CircleShape from "./shapes/CircleShape";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#F9FAFF] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 gap-12 relative"
    >
      <CircleShape
        size={40}
        color="#FFE15D"
        className="absolute top-[10%] left-[75%] opacity-40 hidden md:block lg:block animate-float-slow"
      />
      <CircleShape
        size={60}
        color="#FFE15D"
        className="absolute top-[5%] left-[85%] opacity-40 hidden md:block lg:block animate-float-slower"
      />

      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1C1E53] leading-snug mb-4">
          Let’s make something <br />
          <span className="text-[#FDC435]">Amazing</span> together.
        </h2>
        <p className="text-gray-600 text-lg">
          Start by saying <span className="font-semibold text-[#1C1E53]">Hi 👋</span>
        </p>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="md:w-1/2 w-full bg-white shadow-md rounded-2xl p-8 z-1">
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDC435]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDC435]"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDC435]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#FDC435] text-[#1C1E53] font-semibold py-3 rounded-lg hover:bg-[#e5b92f] transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      <Image
        src={"footer-3.svg"}
        alt="footer image"
        fill
        className="absolute bottom-0 left-0 object-cover w-[65%] h-full"
      />

      {/* SOCIALS - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 text-[#1C1E53] text-2xl md:text-3xl">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}
