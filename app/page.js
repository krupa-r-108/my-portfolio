import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";


export default function HomePage() {
  return (
    <>
   <Navbar />
      <main>

        <HeroSection />
         <div className="h-20 bg-gradient-to-b from-[#F9FAFF] to-white"></div>
        <AboutSection />
        <div className="h-20 bg-gradient-to-b from-white  to-[#F9FAFF]"></div>
        <ProjectsSection />
            <div className="h-20 bg-gradient-to-b from-[#F9FAFF] to-white"></div>

        <TestimonialsSection />
         <div className="h-20 bg-gradient-to-b from-white  to-[#F9FAFF]"></div>
        <ContactSection />
      </main>
    </>
  )
}
