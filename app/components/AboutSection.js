// export default function AboutSection() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-16 lg:min-h-[100vh]  min-h-screen  ">
// <div className="md:w-1/2 w-full relative flex justify-center items-center h-[400px]">
//   {/* Background Rectangle */}
//   <div className="hidden md:block absolute top-0 left-0 w-[90%] h-full bg-[#FDC435] rounded-3xl shadow-xl z-0"></div>

//   {/* Bottom Image */}
//   <img
//     src="/aboutMe-1.jpg"
//     alt="Bottom"
//     // className=" absolute  w-96 md:w-[28rem] h-auto rounded-2xl shadow-lg z-10 -top-1/5 -left-1/5"
//     className="hidden md:block absolute w-96 md:w-[28rem] h-auto rounded-2xl shadow-lg z-10 -top-1/5 -left-1/5"
//   />

//   {/* Top Image, overlapping corner */}
//   {/* <img
//     src="/aboutMe-2.jpg"
//     alt="Top"
//     className="absolute w-96 md:w-[28rem] h-auto rounded-2xl shadow-lg z-20 top-5/12 left-5/12"
//   /> */}
// <img
//   src="/aboutMe-2.jpg"
//   alt="Top"
//   className="
//     absolute 
//     w-72 sm:w-80 md:w-[28rem] h-auto 
//     rounded-2xl shadow-lg z-20 
//     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  /* mobile center */
//     md:top-5/12 md:left-5/12 md:translate-x-0 md:translate-y-0  /* desktop original */
//   "
// />

// </div>

//       <div className="md:w-1/2 w-full md:pl-10 lg:pr-0 lg:pl-56">
//         <h2 className="text-3xl font-bold text-darktext mb-4">About Me <div className="mt-2 w-20 h-1 bg-[#FDC435] mx-8 rounded-full"></div></h2>
//         <p className="text-gray-700 leading-relaxed">
//           I'm a passionate developer who loves bringing ideas to life through
//           code. I focus on building fast, modern, and user-friendly web
//           experiences using the latest technologies. Outside of coding, I enjoy
//           exploring creative projects that challenge my design and
//           problem-solving skills.
//         </p>
//       </div>
//     </section>
//   );
// }


// works but my design is vanished - responsive 

// export default function AboutSection() {
//   return (
//     <section className="max-w-7xl mx-auto py-12 px-4 md:py-16 md:px-8">
//       <div className="flex flex-col md:flex-row items-center gap-8">
//         {/* IMAGES BLOCK */}
//         <div className="md:w-1/2 w-full flex justify-center">
//           <div className="relative w-full max-w-[540px] h-[360px] md:h-[420px]">
//             {/* Background rectangle (card) */}
//             <div className="absolute inset-0 left-0 w-[92%] h-full bg-[#FDC435] rounded-3xl shadow-xl z-0" />

//             {/* Bottom image (larger, sits slightly top-left) */}
//             <img
//               src="/aboutMe-1.jpg"
//               alt="About bottom"
//               className="
//                 absolute
//                 z-10
//                 rounded-2xl
//                 shadow-lg
//                 object-cover
//                 w-[62%] h-[70%]
//                 top-[6%] left-[6%]

//                 sm:w-[58%] sm:h-[74%] sm:top-[4%] sm:left-[4%]

//                 md:w-[64%] md:h-[78%] md:top-[2%] md:left-[6%]
//               "
//             />

//             {/* Top image (smaller, overlaps corner) */}
//             <img
//               src="/aboutMe-2.jpg"
//               alt="About top"
//               className="
//                 absolute
//                 z-20
//                 rounded-2xl
//                 shadow-2xl
//                 object-cover
//                 w-[40%] h-[50%]
//                 top-[44%] left-[44%]                    /* small screens */

//                 sm:w-[42%] sm:h-[54%] sm:top-[42%] sm:left-[42%]

//                 md:w-[44%] md:h-[56%] md:top-[36%] md:left-[36%]
//               "
//             />
//           </div>
//         </div>

//         {/* TEXT */}
//         <div className="md:w-1/2 w-full text-center md:text-left">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1C1E53] mb-4">
//             About Me
//           </h2>
//           <p className="text-gray-700 leading-relaxed text-base md:text-lg">
//             I'm a passionate developer who loves bringing ideas to life through
//             code. I focus on building fast, modern, and user-friendly web
//             experiences using the latest technologies. Outside of coding, I enjoy
//             exploring creative projects that challenge my design and
//             problem-solving skills.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function AboutSection() {
  return (
    <section
    id="about"
      className="relative flex flex-col md:flex-row items-center justify-between 
                 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 
                 min-h-[90vh] overflow-hidden"
    >
      {/* Left: Image Section */}
      <div className="md:w-1/2 w-full relative flex justify-center items-center h-[400px] md:h-[500px]">
        {/* Yellow Background Rectangle */}
        <div className="hidden md:block absolute top-0 left-0 w-[90%] h-[80%] bg-[#FDC435] rounded-3xl shadow-xl z-0"></div>

        {/* Bottom Image */}
        <img
          src="/aboutMe-1.jpg"
          alt="Bottom"
          className="hidden md:block absolute w-80 md:w-[26rem] h-auto rounded-2xl shadow-lg z-10 -top-8 -left-8"
        />

        {/* Top Image */}
        <img
          src="/aboutMe-2.jpg"
          alt="Top"
          className="absolute w-64 sm:w-72 md:w-[24rem] h-auto 
                     rounded-2xl shadow-lg z-20 
                     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     md:top-1/3 md:left-1/3 md:translate-x-0 md:translate-y-0"
        />
      </div>

      {/* Right: Text Section */}
      <div className="md:w-1/2 w-full mt-12 md:mt-0 md:pl-12 lg:pl-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 relative inline-block">
          About Me
          <span className="block mt-2 w-20 h-1 bg-[#FDC435] rounded-full"></span>
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



