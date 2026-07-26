import Image from "next/image";

const ditImages = [
  "/images/dit setup/dit.jpg",
  "/images/dit setup/equipment.jpg",
  "/images/dit setup/hard.jpg",
  "/images/dit setup/red.jpg",
  "/images/dit setup/ultraStudio.jpg",
  "/images/dit setup/3b6d386.jpg",
  "/images/dit setup/IMG_2502 2.jpg",
  "/images/dit setup/IMG_2503 2.jpg",
  "/images/dit setup/DSC_0384.jpg",
];

export default function DITSetup() {
  return (
    <section className="bg-black text-white py-24 px-6" id="dit-setup">
      <div className="max-w-7xl mx-auto">

        <p className="text-sm tracking-[0.4em] uppercase text-gray-400">
          Digital Imaging Technician
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold">
          DIT Setup
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Professional Digital Imaging Technician setup for feature films,
          TV series and international productions. Reliable data management,
          secure backup workflow and camera support.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {ditImages.map((image) => (
            <div
              key={image}
              className="relative aspect-square overflow-hidden rounded-xl group"
            >
              <Image
                src={image}
                alt="DIT Setup"
                fill
                sizes="(max-width:768px)50vw,33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}