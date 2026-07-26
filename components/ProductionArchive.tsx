const productions = [
  {
    title: "Kazblanka",
    video: "/videos/kazablanka.mp4",
  },
  {
    title: "Nawara",
    video: "/videos/nawara.mp4",
  },
  {
    title: "El Tofan",
    video: "/videos/el-tofan.mp4",
  },
  {
    title: "Suits",
    video: "/videos/suits-belaraby.mp4",
  },
  {
    title: "Netflix Series",
    video: "/videos/netflix-series.mp4",
  },
  {
    title: "Showreel",
    video: "/videos/showreel.mp4",
  },
];

export default function ProductionArchive() {
  return (
    <section
      className="bg-zinc-950 text-white py-24 px-6"
      id="archive"
    >

      <div className="max-w-6xl mx-auto">

        <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
          Production Archive
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold">
          Selected Productions
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {productions.map((item) => (

            <div
              key={item.title}
              className="
              bg-black
              border border-white/10
              overflow-hidden
              "
            >

              <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                <source src={item.video} type="video/mp4" />
              </video>

              <h3 className="p-5 text-xl font-semibold">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}