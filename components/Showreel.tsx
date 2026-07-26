const videos = [
  {
    title: "Netflix Series",
    video: "/videos/netflix-series.mp4",
  },
  {
    title: "Kazablanka",
    video: "/videos/كازابلانكا..mp4",
  },
  {
    title: "Nawara",
    video: "/videos/نوارة .mp4",
  },
  {
    title: "Suits",
    video: "/videos/سوتس_بالعربي.mp4",
  },
  {
    title: "Behind The Scenes",
    video: "/videos/bts.mp4",
  },
  {
    title: "Showreel 2026",
    video: "/videos/showreel.mp4",
  },
];


export default function Showreel() {
  return (
    <section
      id="showreel"
      className="bg-black text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
          Showreel
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold">
          Selected Videos
        </h2>


        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {videos.map((item) => (

            <div
              key={item.title}
              className="
              bg-zinc-950
              border border-white/10
              overflow-hidden
              "
            >

              <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                <source
                  src={item.video}
                  type="video/mp4"
                />
              </video>


              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}