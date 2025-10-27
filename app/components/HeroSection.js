import Image from "next/image";
import heroImg from "@/public/heroImage.png";
import Navbar from "./Navbar";
import YellowCircle from "./shapes/YelloCircle";
import DotGroup from "./shapes/DotGroup";
import CircleShape from "./shapes/CircleShape";
import Hexagon from "./shapes/HexagonShape";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-6 bg-[#F9FAFF] relative overflow-hidden "
    >
      {/* <YellowCircle className="absolute top-2/3 left-3/4" />
      <YellowCircle className="absolute top-[70%] left-[73%]" /> */}
      <CircleShape
        size={60}
        color="#FFE15D"
        className="absolute top-[75%] left-[80%] opacity-40 hidden lg:block"
      />
      <CircleShape
        size={40}
        color="#FFE15D"
        className="absolute top-[75%] left-[78%] opacity-40 hidden lg:block"
      />

      <DotGroup
        count={6}
        color="#FDC435"
        direction="column"
        className="absolute top-20 right-10 opacity-60"
      />
      <DotGroup
        count={6}
        color="#FDC435"
        direction="column"
        className="absolute top-18 right-14 opacity-60"
      />
      <DotGroup
        count={6}
        color="#FDC435"
        direction="column"
        className="absolute top-20 right-18 opacity-60"
      />
      <DotGroup
        count={6}
        color="#FDC435"
        direction="column"
        className="absolute top-22 right-22 opacity-60"
      />
      <DotGroup
        count={6}
        color="#FDC435"
        direction="column"
        className="absolute top-20 right-26 opacity-60"
      />
      <Hexagon
        size={120}
        color="#FDC435"
        className="absolute bottom-52 -right-12 opacity-20"
      />
      <Hexagon
        size={250}
        color="#FDC435"
        className="absolute bottom-10 -right-20 opacity-20"
      />
      <Image
        src="/blob-5.svg"
        alt="Blob Background"
        fill
        className="absolute top-0 left-0 object-cover w-[65%] h-full "
      />

      <div className="text-center md:text-left max-w-xl z-50 pl-6">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 animate-fadeIn">
          Hi, I’m <span className="text-[#FDC435]">Krupa</span>👋
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          MERN Stack Developer passionate about crafting interactive and modern
          web apps.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block px-6 py-3 bg-[#FDC435] text-white rounded-full hover:scale-105 transition shadow-md"
        >
          View My Work
        </a>
      </div>
      <div className="w-72 h-72 md:w-96 md:h-96 lg:w-md lg:h-112 relative">
        <Image
          src={heroImg}
          alt="Krupa Developer Portrait"
          fill
          className="object-contain drop-shadow-lg animate-bounce-slow"
        />
      </div>
    </section>
  );
}
