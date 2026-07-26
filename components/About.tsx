import Image from "next/image";

export default function About() {
  return (
    <section
      className="bg-black text-white py-24 px-6"
      id="about"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <Image
            src="/images/profile.JPG"
            alt="Mina Adel"
            width={600}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
grep 'src=' components/About.tsx
        <div>
          <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
            About Me
          </p>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold">
            MINA ADEL
          </h2>

          <h3 className="mt-4 text-xl text-gray-300">
            DIT • Cinematic Camera Technician
          </h3>

          <p className="mt-8 text-gray-400 leading-8 text-lg">
            Digital Imaging Technician working in Egyptian cinema,
            TV series and international productions.
          </p>

          <p className="mt-6 text-gray-400 leading-8 text-lg">
            Experienced with professional cinema camera systems,
            on-set data workflow and camera department support.
          </p>

        </div>

      </div>
    </section>
  );
}