import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <Image
  src="/hero.jpg"
  alt="Mina Adel"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black" />
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <p className="tracking-[0.4em] text-sm text-gray-300 uppercase">
          Digital Imaging Technician
        </p>

        <h1 className="mt-6 text-5xl md:text-8xl font-black tracking-[0.25em]">
          MINA ADEL
        </h1>

        <h2 className="mt-6 text-xl md:text-3xl font-light">
          DIT • Cinematic Camera Technician
        </h2>

<p className="mt-8 text-gray-300 text-lg leading-8 max-w-3xl mx-auto">
  Professional Digital Imaging Technician and Cinematic Camera Technician,
  contributing to feature films, TV series, commercials, and international
  productions with reliable on-set workflow, secure media management, and
  professional DIT solutions.
</p>

        <div className="mt-10 flex justify-center gap-4">

          <a
            href="#work"
            className="border border-white px-8 py-3 hover:bg-white hover:text-black transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="bg-white text-black px-8 py-3 hover:bg-gray-300 transition"
          >
            Contact
          </a>

        </div>

      </div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
  <a href="#about">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-7 h-7 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </a>
</div>
    </section>
  );
}