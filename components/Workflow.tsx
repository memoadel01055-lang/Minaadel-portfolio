const workflow = [
  {
    title: "Media Management",
    description:
      "Professional camera media handling, organization and secure workflow on set.",
  },
  {
    title: "Checksum Backup",
    description:
      "Reliable data backup process to protect valuable production footage.",
  },
  {
    title: "Camera Reports",
    description:
      "Preparing camera notes, clip information and production reports.",
  },
  {
    title: "DIT Station",
    description:
      "On-set technical setup with professional monitoring and storage solutions.",
  },
  {
    title: "Data Workflow",
    description:
      "Supporting productions with efficient digital imaging workflows.",
  },
  {
    title: "Camera Department Support",
    description:
      "Technical support for cinema camera systems and production teams.",
  },
];

export default function Workflow() {
  return (
    <section
      className="bg-black text-white py-24 px-6"
      id="workflow"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
          DIT Workflow
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold">
          On Set Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {workflow.map((item) => (
            <div
              key={item.title}
              className="
              border border-white/10
              p-6
              bg-zinc-950
              hover:border-white/40
              transition
              "
            >

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}