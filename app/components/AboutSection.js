
"use client";
import CircleShape from "./shapes/CircleShape";
import useInViewAnimation from "../hooks/useInViewAnimation";

export default function AboutSection() {
  const [ref, isVisible] = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="about"
      className={`relative flex flex-col md:flex-row items-center justify-between 
                 max-w-full mx-auto px-6 md:px-12 lg:px-20 py-1 
                 min-h-[75vh] overflow-hidden lg:min-h-[78vh]
                 transition-all duration-1000 ease-out
                 ${
                   isVisible
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 translate-y-10"
                 }`}
    >
      {/* Floating Background Circles */}
      <CircleShape
        size={60}
        color="#FFE15D"
        className="absolute top-[75%] left-[80%] opacity-40 hidden md:block animate-float-slow"
      />
      <CircleShape
        size={60}
        color="#FFE15D"
        className="absolute top-[7%] left-[90%] opacity-40 hidden md:block animate-float-slower"
      />
      <CircleShape
        size={80}
        color="#FFE15D"
        className="absolute top-[15%] left-[94%] opacity-40 hidden md:block animate-float-slow"
      />

      {/* Left: Image Section */}
      <div className="md:w-1/2 w-full relative flex justify-center items-center h-[200px] md:h-[500px] group">
        {/* Yellow Background Rectangle */}
        <div className="hidden lg:block absolute top-0 left-0 w-[90%] h-[80%] bg-[#FDC435] rounded-3xl shadow-xl z-0 transition-transform duration-500 md:group-hover:-translate-y-1 md:group-hover:translate-x-1"></div>

        {/* Bottom Image */}

        <img
          src="/aboutMe-1.jpg"
          alt="Bottom"
          className="hidden lg:block absolute w-80 md:w-[26rem] h-auto rounded-2xl shadow-lg z-10 -top-8 -left-8 transition-transform duration-500 md:group-hover:-translate-y-2"
        />

        {/* Top Image */}

        <img
          src="/aboutMe-2.jpg"
          alt="Top"
          className="block absolute w-64 sm:w-72 md:w-[26rem] h-auto 
             rounded-2xl shadow-lg z-20 
             top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             lg:top-1/3 lg:left-1/3 lg:translate-x-0 lg:translate-y-0
             transition-transform duration-500 lg:group-hover:translate-x-2 lg:group-hover:-translate-y-2"
        />
      </div>

      {/* Right: Text Section */}
      <div className="md:w-1/2 w-full mt-12 md:mt-0 md:pl-12 lg:pl-24 group">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
          About Me
          <span className="block mt-2 w-20 h-1 bg-[#FDC435] rounded-full transition-all duration-500 md:group-hover:w-28"></span>
        </h2>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          I'm a passionate developer who loves bringing ideas to life through
          code. I focus on building fast, modern, and user-friendly web
          experiences using the latest technologies. Outside of coding, I enjoy
          exploring creative projects that challenge my design and
          problem-solving skills.
        </p>
      </div>
    </section>
  );
}
