export default function TechStackSection() {
  const techs = ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux"];

  return (
    <section id="tech" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {techs.map((t, i) => (
          <span key={i} className="px-6 py-3 bg-blue-100 text-blue-700 font-semibold rounded-full shadow-sm hover:shadow-md transition">
            {t}
          </span>
        ))}
      </div>
      
    </section>
  )
}
