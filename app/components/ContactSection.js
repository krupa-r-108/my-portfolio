import Image from "next/image";
import CircleShape from "./shapes/CircleShape";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#F9FAFF] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 gap-12 relative"
    >
        <CircleShape
        size={340}
          color="#FFE15D"
          className="absolute -top-3/12 left-[75%] opacity-40 hidden md:block"
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

    </section>
  );
}
