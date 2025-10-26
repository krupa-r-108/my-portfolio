"use client";
import { useState, useEffect } from "react";
import CircleShape from "./shapes/CircleShape";
import DotGroup from "./shapes/DotGroup";
import Hexagon from "./shapes/HexagonShape";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      text: "Working with Krupa was an amazing experience. She’s dedicated, quick to learn, and always delivers with precision.",
      img: "/women-1.jpg",
    },
    {
      name: "David Lee",
      role: "Full Stack Developer",
      text: "Her attention to detail and clean code made collaboration effortless. Highly recommend working with her!",
      img: "/man-1.jpg",
    },
    {
      name: "Priya Patel",
      role: "Project Manager",
      text: "Professional, communicative, and full of creative ideas. Krupa’s work speaks for itself.",
      img: "/women-2.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
return(
  <section
  id="tech"
  className="relative min-h-screen flex items-center justify-center  overflow-hidden"
>
          <Hexagon
              size={120}
              color="#FDC435"
              className="absolute top-52 -right-12 opacity-20"
            />
            <Hexagon
              size={250}
              color="#FDC435"
              className="absolute bottom-16 -left-20 opacity-20"
            />

      <DotGroup
        count={6}
        color="#FDC435"
        direction="column"
        className="absolute top-20 left-10 opacity-40"
      />
      <DotGroup
        count={6}
        color="#FDC435"
        direction="column"
        className="absolute top-18 left-14 opacity-40"
      />
      <DotGroup
        count={6}
        color="#FDC435"
        direction="column"
        className="absolute top-20 left-18 opacity-40"
      />
      <DotGroup
        count={6}
        color="#FDC435"
        direction="column"
        className="absolute top-22 left-22 opacity-40"
      />
      <DotGroup
        count={6}
        color="#FDC435"
        direction="column"
        className="absolute top-20 left-26 opacity-40"
      />


  {/* Yellow Blob Background */}
  {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#FDC435] rounded-full blur-3xl opacity-30"></div> */}

  {/* Content */}
  <div className="relative z-10 text-center max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-[#1C1E53]">
      Testimonials
       <div className="mt-2 w-20 h-1 bg-[#FDC435] mx-auto rounded-full"></div>
    </h2>

    {/* Testimonial Card */}
    <div className="bg-white rounded-2xl shadow-lg p-10 transition-all duration-500">
      <p className="text-gray-700 italic mb-8">
        “{testimonials[index].text}”
      </p>
      <div className="flex flex-col items-center">
        <img
          src={testimonials[index].img}
          alt={testimonials[index].name}
          className="w-16 h-16 rounded-full mb-3 object-cover"
        />
        <h4 className="font-semibold text-lg">
          {testimonials[index].name}
        </h4>
        <span className="text-gray-500 text-sm">
          {testimonials[index].role}
        </span>
      </div>
    </div>

    {/* Dots Navigation */}
    <div className="flex justify-center gap-2 mt-6">
      {testimonials.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`w-3 h-3 rounded-full transition-all ${
            i === index ? "bg-[#FDC435] w-5" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>
  </div>
</section>

)

}


