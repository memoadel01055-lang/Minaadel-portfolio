import Image from "next/image";

const projects = [
  {
    title: "Kazblanka",
    role: "DIT / Cinematic Camera Technician",
    description:
      "Digital imaging workflow and camera department support.",
    image: "/images/projects/posters/kazblanka.jpg",
  },
  {
    title: "Nawara",
    role: "DIT / Camera Department",
    description:
      "Supporting professional production workflow and media management.",
    image: "/images/projects/posters/nawara.jpg",
  },
  {
    title: "Suits",
    role: "DIT",
    description:
      "Professional digital cinema workflow support.",
    image: "/images/projects/posters/suits.jpg",
  },
  {
    title: "Sign El Nesa",
    role: "DIT / Cinematic Camera Technician",
    description:
      "On-set camera and data workflow support.",
    image: "/images/projects/posters/sign-elnsa.jpg",
  },
  {
    title: "drakora3",
    role: "DIT",
    description:
      "Feature film production.",
    image: "/images/projects/posters/drakora3.jpg",
  },
  {
    title: "Tofan",
    role: "DIT / Camera Department",
    description:
      "Cinema production workflow.",
    image: "/images/projects/posters/tofan.jpg",
  },
];

export default function Projects() {
  return (
    <section
      className="bg-black text-white py-24 px-6"
      id="work"
    >

      <div className="max-w-6xl mx-auto">

        <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
          Selected Work
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

  {projects.map((project, index) => (

    <div
      key={index}
      className="
        group
        bg-zinc-950
        border border-white/10
        overflow-hidden
        hover:border-white/40
        transition
      "
    >         

              <div className="relative h-[320px] md:h-[420px] overflow-hidden">

                <Image
  src={project.image}
  alt={project.title}
  fill
  
  className="object-cover group-hover:scale-105 transition duration-700"
/>
              </div>


              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-300">
                  {project.role}
                </p>

                <p className="mt-4 text-gray-400 text-sm leading-6">
                  {project.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}