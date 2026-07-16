import Link from "next/link";
import Image from "next/image";export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
<nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-zinc-800">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

    <h1 className="text-xl font-bold tracking-[0.3em]">
      MINA ADEL
    </h1>

    <div className="hidden md:flex gap-8 text-sm tracking-widest">

      <a href="#home" className="hover:text-zinc-300">
        HOME
      </a>

      <a href="#about" className="hover:text-zinc-300">
        ABOUT
      </a>
<section id="about" className="...">

</section>
      <a href="#credits" className="hover:text-zinc-300">
        CREDITS
      </a>
<section id="credits" className="...">

</section>
      <a href="#bts" className="hover:text-zinc-300">
        BTS
      </a>
<section id="bts" className="...">

</section>
      <a href="#equipment" className="hover:text-zinc-300">
        EQUIPMENT
      </a>
<section id="equipment" className="...">

</section>
      <a href="#contact" className="hover:text-zinc-300">
        CONTACT
      </a>
<section id="contact" className="...">

</section>
    </div>

  </div>

</nav>
      <section className="relative min-h-screen flex items-center px-8 md:px-20 overflow-hidden">
<div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1">

  {[
    "hero-1.jpg",
    "hero-2.jpg",
    "hero-3.jpg",
    "hero-4.jpg",
    "hero-5.jpg",
    "hero-6.jpg",
  ].map((img) => (
    <div key={img} className="relative">
      <Image
        src={`/images/hero/${img}`}
        alt="Mina on set"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
    </div>
  ))}

</div>

<div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-5xl">

          <p className="text-sm tracking-[0.5em] text-zinc-400">
            DIGITAL IMAGING TECHNICIAN
          </p>

          <h1 className="mt-6 text-7xl md:text-9xl font-bold tracking-wider">
            MINA
            <br />
            ADEL
          </h1>
          

<section className="px-8 md:px-20 py-24 bg-zinc-950">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    <div>
      <p className="text-sm tracking-[0.4em] text-zinc-500">
        ABOUT ME
      </p>

      <h2 className="mt-5 text-4xl md:text-6xl font-bold">
        MINA ADEL
      </h2>

      <p className="mt-6 text-zinc-400 leading-8">
        Digital Imaging Technician and Cinematic Camera Technician
        working with professional cinema cameras and digital workflows.
        Experienced in Egyptian cinema, television productions and
        international projects.
      </p>
    </div>

    <div className="flex justify-center">
      <Image
        src="/images/Mina-portfolio.jpg"
        alt="Mina Adel"
        width={450}
        height={600}
        className="rounded-xl object-cover"
      />
    </div>

  </div>
</section>
<section className="px-8 md:px-20 py-24 bg-black">

  <p className="text-sm tracking-[0.4em] text-zinc-500">
    SELECTED WORKS
  </p>

  <h2 className="mt-5 text-4xl md:text-6xl font-bold">
    FILM & TV CREDITS
  </h2>

  <div className="mt-12 grid md:grid-cols-3 gap-8">

    <Image
      src="/images/FILM & TV CREDITS/project-1.jpg"
      alt="Project 1"
      width={600}
      height={400}
className="rounded-xl object-cover w-full h-[520px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"    />
  <h3 className="mt-4 text-xl font-sed">

     نواره
     
    

  </h3>

  <p className="text-zinc-400">

    DIT / Camera Technician

  </p>
    <Image
      src="/images/FILM & TV CREDITS/project-2.jpg"
      alt="Project 2"
      width={600}
      height={400}
className="rounded-xl object-cover w-full h-[520px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"    />
  <h3 className="mt-4 text-xl font-semibold">

     الخليه

  </h3>

  <p className="text-zinc-400">

    DIT / Camera Technician

  </p>
    <Image
      src="/images/FILM & TV CREDITS/project-3.jpg"
      alt="Project 3"
      width={600}
      height={400}
className="rounded-xl object-cover w-full h-[520px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"    />
  <h3 className="mt-4 text-xl font-semibold">

     كازابلانكا

  </h3>

  <p className="text-zinc-400">

    DIT / Camera Technician

  </p>
  </div>
<section className="px-8 md:px-20 py-24 bg-black">

  <p className="text-sm tracking-[0.4em] text-zinc-500">
    DIT SETUP
  </p>

  <h2 className="mt-5 text-4xl md:text-6xl font-bold">
    CAMERA & WORKFLOW
  </h2>

  <p className="mt-6 max-w-3xl text-zinc-400 leading-8">
    Professional digital workflow, cinema camera systems,
    data management and on-set DIT solutions.
  </p>

  <div className="mt-12 grid md:grid-cols-4 gap-6">

    <Image
      src="/images/equipment/equipment-1.jpg"
      alt="DIT Setup"
      width={500}
      height={400}
      className="rounded-xl object-cover"
    />

    <Image
      src="/images/equipment/equipment-2.jpg"
      alt="Camera Equipment"
      width={500}
      height={400}
      className="rounded-xl object-cover"
    />

    <Image
      src="/images/equipment/equipment-3.jpg"
      alt="Cinema Workflow"
      width={500}
      height={400}
      className="rounded-xl object-cover"
    />

    <Image
      src="/images/equipment/equipment-4.jpg"
      alt="On Set Equipment"
      width={500}
      height={400}
      className="rounded-xl object-cover"
    />

  </div>
<section className="px-8 md:px-20 py-24 bg-zinc-950">

  <p className="text-sm tracking-[0.4em] text-zinc-500">
    CAMERA SYSTEMS
  </p>

  <h2 className="mt-5 text-4xl md:text-6xl font-bold">
    CINEMA CAMERAS
  </h2>

  <div className="mt-12 grid md:grid-cols-4 gap-8">

    <div>
      <Image
        src="/images/cameras/arri35.jpg"
        alt="ARRI Alexa 35"
        width={500}
        height={400}
        className="rounded-xl object-cover"
      />
      <p className="mt-4 text-zinc-400">ARRI Alexa 35</p>
    </div>

    <div>
      <Image
        src="/images/cameras/red.jpg"
        alt="RED Camera"
        width={500}
        height={400}
        className="rounded-xl object-cover"
      />
      <p className="mt-4 text-zinc-400">RED Cinema</p>
    </div>

    <div>
      <Image
        src="/images/cameras/venice.jpg"
        alt="Sony Venice"
        width={500}
        height={400}
        className="rounded-xl object-cover"
      />
      <p className="mt-4 text-zinc-400">Sony Venice</p>
    </div>

    <div>
      <Image
        src="/images/cameras/arri alexa.jpg"
        alt="ARRI 35"
        width={500}
        height={400}
        className="rounded-xl object-cover"
      />
      <p className="mt-4 text-zinc-400">ARRI 35</p>
    </div>
 <Image
        src="/images/cameras/alexamini.jpg"
        alt="Sony Venice"
        width={500}
        height={400}
        className="rounded-xl object-cover"
      />
      <p className="mt-4 text-zinc-400">Sony Venice</p>
   </div>

</section>
</section>
</section><section className="px-8 md:px-20 py-24 bg-black">

  <p className="text-sm tracking-[0.4em] text-zinc-500">
    DIT SOFTWARE
  </p>

  <h2 className="mt-5 text-4xl md:text-6xl font-bold">
    DIGITAL WORKFLOW
  </h2>

  <div className="mt-12 grid md:grid-cols-3 gap-8">

    <div>
      <Image
        src="/images/software/shotput pro.jpg"
        alt="Hedge"
        width={500}
        height={300}
        className="rounded-xl object-cover"
      />
      <p className="mt-4 text-zinc-400">Hedge - Data Management</p>
    </div>

    <div>
      <Image
        src="/images/software/obs.jpg"
        alt="OBS"
        width={500}
        height={300}
        className="rounded-xl object-cover"
      />
      <p className="mt-4 text-zinc-400">OBS Workflow</p>
    </div>

 <div>
      <Image
        src="/images/software/offshoot.jpg"
        alt="OBS"
        width={500}
        height={300}
        className="rounded-xl object-cover"
      />
      <p className="mt-4 text-zinc-400">OBS Workflow</p>
    </div>

    <div>
      <Image
        src="/images/software/DaVinci_Resolve_Studio.jpg"
        alt="DIT Workflow"
        width={500}
        height={300}
        className="rounded-xl object-cover"
      />
      <p className="mt-4 text-zinc-400">On Set Digital Workflow</p>
    </div>
      
  </div>

</section>
          <h2 className="mt-8 text-2xl md:text-4xl text-zinc-300">
            Cinematic Camera Technician
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-zinc-400 leading-9">
            Professional digital workflow for cinema and television.
            Working with high-end cinema cameras and international
            productions.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="px-10 py-4 bg-white text-black tracking-widest">
              PORTFOLIO
            </button>

            <button className="px-10 py-4 border border-zinc-600 tracking-widest">
              CONTACT
            </button>

          </div>

        </div>

      </section>
<section className="px-8 md:px-20 py-24 bg-zinc-950">

  <p className="text-sm tracking-[0.4em] text-zinc-500">
    SELECTED EXPERIENCE
  </p>

  <h2 className="mt-5 text-4xl md:text-6xl font-bold">
    CINEMA & PRODUCTIONS
  </h2>

  <div className="mt-12 grid md:grid-cols-3 gap-8">

    <div className="border border-zinc-800 p-8">
      <h3 className="text-2xl font-semibold">
        Egyptian Cinema
      </h3>
      <p className="mt-4 text-zinc-400">
        Feature films and television productions
        working with professional cinema crews.
      </p>
    </div>

    <div className="border border-zinc-800 p-8">
      <h3 className="text-2xl font-semibold">
        Netflix Production
      </h3>
      <p className="mt-4 text-zinc-400">
        Digital Imaging workflow for
        international streaming productions.
      </p>
    </div>

    <div className="border border-zinc-800 p-8">
      <h3 className="text-2xl font-semibold">
        International Projects
      </h3>
      <p className="mt-4 text-zinc-400">
        Yemen, Oman, Qatar, Morocco and
        international cinema projects.
      </p>
    </div>

  </div>

</section>
  <section className="px-8 md:px-20 py-24 bg-black">

  <p className="text-sm tracking-[0.4em] text-zinc-500">
    CINEMA GEAR
  </p>

  <h2 className="mt-5 text-4xl md:text-6xl font-bold">
    CAMERA SYSTEMS
  </h2>

  <div className="mt-12 grid md:grid-cols-4 gap-6">

    <div className="border border-zinc-800 p-8 hover:border-white transition">
      <h3 className="text-2xl font-semibold">
        ARRI Alexa 35
      </h3>
      <p className="mt-4 text-zinc-400">
        High-end digital cinema camera workflow.
      </p>
    </div>

    <div className="border border-zinc-800 p-8 hover:border-white transition">
      <h3 className="text-2xl font-semibold">
        ARRI 35
      </h3>
      <p className="mt-4 text-zinc-400">
        Professional cinematic production system.
      </p>
    </div>

    <div className="border border-zinc-800 p-8 hover:border-white transition">
      <h3 className="text-2xl font-semibold">
        RED Epic
      </h3>
      <p className="mt-4 text-zinc-400">
        Digital cinema camera workflow.
      </p>
    </div>

    <div className="border border-zinc-800 p-8 hover:border-white transition">
      <h3 className="text-2xl font-semibold">
        Sony Venice
      </h3>
      <p className="mt-4 text-zinc-400">
        Full-frame cinema camera system.
      </p>
    </div>

  </div>

</section>
  <section className="px-8 md:px-20 py-24 bg-zinc-950">

  <p className="text-sm tracking-[0.4em] text-zinc-500">
    DIGITAL WORKFLOW
  </p>

  <h2 className="mt-5 text-4xl md:text-6xl font-bold">
    DIT ON SET
  </h2>

  <div className="mt-12 grid md:grid-cols-3 gap-8">

    <div className="border border-zinc-800 p-8">
      <h3 className="text-2xl font-semibold">
        Data Management
      </h3>
      <p className="mt-4 text-zinc-400">
        Secure offload, verification and organized
        media management for professional productions.
      </p>
    </div>

    <div className="border border-zinc-800 p-8">
      <h3 className="text-2xl font-semibold">
        On Set Workflow
      </h3>
      <p className="mt-4 text-zinc-400">
        Camera media handling, backup workflow
        and communication with the camera team.
      </p>
    </div>

    <div className="border border-zinc-800 p-8">
      <h3 className="text-2xl font-semibold">
        Tools & Systems
      </h3>
      <p className="mt-4 text-zinc-400">
        Hedge, OBS and professional DIT workstation
        setup.
      </p>
    </div>

  </div>

</section>
  <section className="px-8 md:px-20 py-24 bg-black">

  <p className="text-sm tracking-[0.4em] text-zinc-500">
    SELECTED PROJECTS
  </p>

  <h2 className="mt-5 text-4xl md:text-6xl font-bold">
    PRODUCTIONS
  </h2>

  <div className="mt-12 space-y-6">

    <div className="border-l border-zinc-700 pl-8">
      <h3 className="text-2xl font-semibold">
        Egyptian Cinema & TV Series
      </h3>
      <p className="mt-3 text-zinc-400">
        Digital Imaging Technician and Camera Technician
        working on Egyptian film and television productions.
      </p>
    </div>

    <div className="border-l border-zinc-700 pl-8">
      <h3 className="text-2xl font-semibold">
        Netflix Production - Kuwait Series
      </h3>
      <p className="mt-3 text-zinc-400">
        DIT workflow and camera department support
        for a Netflix Kuwaiti production.
      </p>
    </div>

    <div className="border-l border-zinc-700 pl-8">
      <h3 className="text-2xl font-semibold">
        First Yemeni Feature Film
      </h3>
      <p className="mt-3 text-zinc-400">
        Contribution to the first Yemeni feature film
        production.
      </p>
    </div>

    <div className="border-l border-zinc-700 pl-8">
      <h3 className="text-2xl font-semibold">
        International Projects
      </h3>
      <p className="mt-3 text-zinc-400">
        Productions across Oman, Kuwait, Morocco
        and international cinema projects.
      </p>
    </div>

  </div>

</section>
<section
  id="contact"
  className="px-8 md:px-20 py-24 bg-black text-center border-t border-zinc-800"
>
  <h2 className="text-5xl font-bold">Let's Work Together</h2>

  <p className="mt-6 text-zinc-400">
    Digital Imaging Technician & Camera Technician
  </p>

  <div className="mt-10 space-y-3 text-lg">
    <p>Email: menaadel1988@gmail.com</p>
    <p>Instagram: @minaadel</p>
    <p>Location: Egypt</p>
  </div>
</section>
</main>
  );
}