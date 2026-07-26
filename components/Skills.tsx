export default function Skills() {
  const skills = [
    "DIT Workflow",
    "ARRI Alexa",
    "Sony VENICE",
    "RED Digital Cinema",
    "Media Management",
    "Color Pipeline",
    "On-Set Workflow",
    "Camera Department",
  ];

  return (
    <section
      className="bg-zinc-950 text-white py-20"
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-sm tracking-[0.4em] uppercase text-gray-400">
          Skills
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Professional Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
              border
              border-white/10
              rounded-lg
              p-5
              text-center
              hover:border-white
              transition
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}