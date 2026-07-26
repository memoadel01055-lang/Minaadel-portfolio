import Image from "next/image";

const gallery = [
  "/images/projects/set/1.jpg",
  "/images/projects/set/2.jpg",
  "/images/projects/set/3.jpg",
  "/images/projects/set/4.jpg",
  "/images/projects/set/5.jpg",
  "/images/projects/set/6.jpg",
  "/images/projects/set/hero-10.jpg",
  "/images/projects/set/set3.JPG",
  "/images/projects/set/set4.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-black text-white py-24 px-6" id="gallery">
      <div className="max-w-7xl mx-auto">

        <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
          Behind The Scenes
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold">
          On Set
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">

          {gallery.map((image) => (
            <div
              key={image}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
  src={image}
  alt="Behind the scenes"
  fill
  sizes="(max-width: 768px) 50vw, 33vw"
  className="object-cover transition duration-700 group-hover:scale-110"
/>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}