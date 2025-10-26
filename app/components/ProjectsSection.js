// export default function ProjectsSection() {
//   const projects = [
//     {
//       title: "Weather App",
//       desc: "Simple weather app built with React.",
//       link: "#",
//       img: "/aboutMe.png",
//     },
//     {
//       title: "To-Do App",
//       desc: "Task manager with CRUD operations.",
//       link: "#",
//       img: "/aboutMe.png",
//     },
//     {
//       title: "Portfolio Site",
//       desc: "Personal portfolio using Next.js.",
//       link: "#",
//       img: "/aboutMe.png",
//     },
//   ];

//   return (
// <section id="projects" className="min-h-screen px-6 py-20 bg-[#F9FAFF]">
//   <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

//   <div className="flex flex-col gap-20 max-w-6xl mx-auto">
//     {projects.map((p, i) => (
//       <div
//         key={i}
//         className={`flex flex-col md:flex-row items-center justify-between md:gap-12 gap-8 p-6 rounded-2xl shadow-sm bg-white ${
//           i % 2 === 1 ? "md:flex-row-reverse animate-slide-left" : "animate-slide-right"
//         }`}
//       >
//         {/* Image */}
//         <div className="md:w-1/2 w-full flex justify-center">
//           <div className="w-80 h-56 md:w-96 md:h-64 bg-gray-200 rounded-2xl overflow-hidden">
//             <img
//               src={p.img}
//               alt={p.title}
//               className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//         </div>

//         {/* Content */}
//         <div className="md:w-1/2 w-full text-center md:text-left">
//           <h3 className="text-2xl font-semibold mb-3 text-[#1C1E53]">
//             {p.title}
//           </h3>
//           <p className="text-gray-600 mb-5">{p.desc}</p>
//           <a
//             href={p.link}
//             className="inline-block text-[#FDC435] font-medium hover:underline"
//           >
//             View Project →
//           </a>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>

//   );
// }

"use client";
import useInViewAnimation from "../hooks/useInViewAnimation"; // adjust path
import CircleShape from "./shapes/CircleShape";
import Pentagon from "./shapes/PentagonShape";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Weather App",
      desc: "Simple weather app built with React.",
      link: "#",
      img: "/weather.jpg",
    },
    {
      title: "To-Do App",
      desc: "Task manager with CRUD operations.",
      link: "#",
      img: "/todo.jpg",
    },
    {
      title: "Portfolio Site",
      desc: "Personal portfolio using Next.js.",
      link: "#",
      img: "/portfolio.jpg",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-[#F9FAFF] relative overflow-hidden">
      <Pentagon
        size={250}
        color="#FDC435"
        className="absolute -top-20 -right-10 opacity-20 -rotate-45"
      />
      <Pentagon
        size={150}
        color="#FDC435"
        className="absolute top-20 right-28 opacity-20 rotate-180 hidden md:block"
      />
      <Pentagon
        size={60}
        color="#FDC435"
        className="absolute bottom-10 left-16 opacity-30 -rotate-6"
      />
      <CircleShape 
      size={340}
        color="#FFE15D"
        className="absolute top-[72%] left-[75%] opacity-40"
      />
       <CircleShape
        size={100}
          color="#FFE15D"
          className="absolute top-32 left-[17%] opacity-30 "
        />
      <h2 className="text-4xl font-bold text-center mb-16">
        Projects{" "}
        <div className="mt-2 w-20 h-1 bg-[#FDC435] mx-auto rounded-full"></div>
      </h2>

      <div className="flex flex-col gap-20 max-w-6xl mx-auto">
        {projects.map((p, i) => {
          const [ref, isVisible] = useInViewAnimation();

          return (
            <div
              key={i}
              ref={ref}
              className={`flex flex-col md:flex-row items-center justify-between md:gap-12 gap-8 p-6 rounded-2xl shadow-sm bg-white
                transition-transform duration-700 ease-out
                ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : i % 2 === 1
                    ? "-translate-x-20 opacity-0"
                    : "translate-x-20 opacity-0"
                }
                ${i % 2 === 1 ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full flex justify-center">
                <div className="w-80 h-56 md:w-96 md:h-64 bg-gray-200 rounded-2xl overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-3 text-[#1C1E53]">
                  {p.title}
                </h3>
                <p className="text-gray-600 mb-5">{p.desc}</p>
                <a
                  href={p.link}
                  className="inline-block text-[#FDC435] font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
