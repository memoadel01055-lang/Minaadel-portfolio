import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
<nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">

  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

    <h1 className="text-xl font-bold tracking-widest">
      MINA ADEL
    </h1>

<div className="hidden md:flex gap-6 text-sm">
      <a href="#about">
        About
      </a>

      <a href="#projects">
        Projects
      </a>

      <a href="#gallery">
        Gallery
      </a>

      <a href="#contact">
        Contact
      </a>

    </div>

  </div>

</nav>
<section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <Image
  src="/hero.jpg"
  alt="Mina Adel"
  fill
  className="object-cover"
  priority
/>
<div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">

<h1 className="text-4xl md:text-8xl font-bold tracking-[0.2em]">  MINA ADEL
</h1>
<p className="mt-4 text-sm md:text-lg tracking-widest text-gray-300">
  DIGITAL IMAGING TECHNICIAN
</p>
          <h2 className="mt-4 text-xl md:text-2xl">
            DIT | Cinematic Camera Technician
          </h2>

          <p className="mt-6 text-gray-300">
            Digital Imaging Technician working in Egyptian Cinema,
            TV Series and International Productions.
          </p>

        </div>

      </section>

      <section className="bg-black text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold tracking-widest">
            ABOUT ME
          </h2>

          <p className="mt-8 text-gray-300 text-lg leading-8">
  Mina Adel is a Digital Imaging Technician and Cinematic Camera Technician
  with experience in Egyptian Cinema and TV productions.
  Worked on international productions across Yemen, Oman, Qatar and Morocco,
  including Netflix productions and the first Yemeni feature film.
  Specialized in camera systems, media management and professional on-set workflow.
</p>

        </div>

      </section>
<section className="bg-black text-white py-20 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-center">
      CAMERA SYSTEMS
      Working experience with professional cinema camera systems:
ARRI Alexa 35 • Sony Venice • RED Epic • ARRI 35
    </h2>
<div className="grid md:grid-cols-4 gap-6 mt-12">

  <div className="overflow-hidden border border-gray-800">
    <Image
      src="/images/cameras/arri alexa.jpg"
      alt="ARRI Alexa 35"
      width={500}
      height={500}
      className="w-full h-64 object-cover"
    />
    <h3 className="p-4 text-center">
      ARRI Alexa 
    </h3>
  </div>


  <div className="overflow-hidden border border-gray-800">
    <Image
      src="/images/cameras/venice.jpg"
      alt="Sony Venice"
      width={500}
      height={500}
      className="w-full h-64 object-cover"
    />
    <h3 className="p-4 text-center">
      Sony Venice
    </h3>
  </div>


  <div className="overflow-hidden border border-gray-800">
    <Image
      src="/images/cameras/red.jpg"
      alt="RED Epic"
      width={500}
      height={500}
      className="w-full h-64 object-cover"
    />
    <h3 className="p-4 text-center">
      RED Epic
    </h3>
  </div>


  <div className="overflow-hidden border border-gray-800">
    <Image
      src="/images/cameras/arri35.jpg"
      alt="ARRI 35"
      width={500}
      height={500}
      className="w-full h-64 object-cover"
    />
    <h3 className="p-4 text-center">
      ARRI 35
    </h3>
  </div>

  
   </div>

</div>

</section>


<section className="bg-black text-white py-20 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-center">
      SELECTED WORK
    </h2>

    <div className="grid md:grid-cols-4 gap-6 mt-12">

      <Image
        src="/images/projects/kazblanka.jpg"
        alt="Casablanca"
        width={500}
        height={700}
        className="w-full h-96 object-cover"
      />

      <Image
        src="/images/projects/suits.jpg"
        alt="Suits"
        width={500}
        height={700}
        className="w-full h-96 object-cover"
      />

      <Image
        src="/images/projects/nawara.jpg"
        alt="Nawara"
        width={500}
        height={700}
        className="w-full h-96 object-cover"
      />

      <Image
        src="/images/projects/sign elnsa.jpg"
        alt="Sejn El Nesa"
        width={500}
        height={700}
        className="w-full h-96 object-cover"
      />

      <Image
        src="/images/projects/khalya.jpg"
        alt="El Khalya"
        width={500}
        height={700}
        className="w-full h-96 object-cover"
      />

      <Image
        src="/images/projects/raz2.jpg"
        alt="Wlad Rizk"
        width={500}
        height={700}
        className="w-full h-96 object-cover"
      />

      <Image
        src="/images/projects/tofan.jpg"
        alt="El Tofan"
        width={500}
        height={700}
        className="w-full h-96 object-cover"
      />

      <Image
        src="/images/projects/ladyna.jpg"
        alt="Ladyna"
        width={500}
        height={700}
        className="w-full h-96 object-cover"
      />

    </div>

  </div>

</section>

<section className="bg-black text-white py-20 px-6">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center">
FEATURED REELS
</h2>


<div className="grid md:grid-cols-3 gap-8 mt-12">

<video controls className="w-full">
<source src="/videos/selected/reel 1.mp4" type="video/mp4"/>
</video>


<video controls className="w-full">
<source src="/videos/selected/reel 4.mp4" type="video/mp4"/>
</video>


<video controls className="w-full">
<source src="/videos/selected/reel 5.mp4" type="video/mp4"/>
</video>


</div>

</div>

</section>

<section className="bg-black text-white py-20 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-center">
      GALLERY
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-12">

  <Image
  src="/hero-8.JPG"
  alt="Behind The Scenes"
  width={800}
  height={600}
  className="w-full h-auto object-cover"
/>

<Image
  src="/hero-7.JPG"
  alt="IMG_4538 "
  width={800}
  height={600}
  className="w-full h-auto object-cover"
/>

<Image
  src="/hero-3.JPG"
  alt="DSC_0659"
  width={800}
  height={600}
  className="w-full h-auto object-cover"
/>

<Image
  src="/equipment-1.JPG"
  alt="DIT Work"
  width={800}
  height={600}
  className="w-full h-auto object-cover"
/>

    </div>

  </div>

</section>


<section className="bg-black text-white py-20 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-center">
      BEHIND THE SCENES
    </h2>

    <div className="grid md:grid-cols-2 gap-8 mt-12">

      <div className="border border-gray-800 overflow-hidden">

        <video
          controls
          className="w-full"
        >
<source src="/videos/reel 10.mp4" type="video/mp4" />        </video>

        <h3 className="p-4">
          DIT Workflow On Set
        </h3>

      </div>


      <div className="border border-gray-800 overflow-hidden">

        <video
          controls
          className="w-full"
        >
<source src="/videos/reel 11.mp4" type="video/mp4" />        </video>

        <h3 className="p-4">
          Behind The Scenes
        </h3>

      </div>

    </div>

  </div>

</section>

<section className="bg-black text-white py-20 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-center">
      DIT WORKFLOW
    </h2>

    <div className="grid md:grid-cols-4 gap-6 mt-12">

      <div className="border border-gray-700 p-6 text-center">
        <h3 className="text-xl font-semibold">
          Data Management
        </h3>
        <p className="mt-3 text-gray-400">
          Professional media handling and organization on set.
        </p>
      </div>

      <div className="border border-gray-700 p-6 text-center">
        <h3 className="text-xl font-semibold">
          Backup
        </h3>
        <p className="mt-3 text-gray-400">
          Secure backup workflow for production footage.
        </p>
      </div>

      <div className="border border-gray-700 p-6 text-center">
        <h3 className="text-xl font-semibold">
          Media Transfer
        </h3>
        <p className="mt-3 text-gray-400">
          Fast and reliable camera media transfer.
        </p>
      </div>

      <div className="border border-gray-700 p-6 text-center">
        <h3 className="text-xl font-semibold">
          On Set Support
        </h3>
        <p className="mt-3 text-gray-400">
          Supporting cinematographers and camera teams.
        </p>
      </div>

    </div>

  </div>

</section>
<section className="bg-black text-white py-20 px-6">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-5xl font-bold tracking-widest text-center">
      TOOLS & SOFTWARE
    </h2>

    <div className="grid md:grid-cols-4 gap-6 mt-12">

      <div className="border border-gray-700 overflow-hidden">
        <Image
          src="/images/tools/offshoot.jpg"
          alt="OffShoot"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <h3 className="p-4 text-center">
          Hedge / OffShoot
        </h3>
      </div>


      <div className="border border-gray-700 overflow-hidden">
        <Image
          src="/images/tools/shotput pro.jpg"
          alt="ShotPut Pro"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <h3 className="p-4 text-center">
          ShotPut Pro
        </h3>
      </div>


      <div className="border border-gray-700 overflow-hidden">
        <Image
          src="/images/tools/DaVinci_Resolve_Studio.jpg"
          alt="DaVinci Resolve"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <h3 className="p-4 text-center">
          DaVinci Resolve
        </h3>
      </div>


      <div className="border border-gray-700 overflow-hidden">
        <Image
          src="/images/tools/obs.jpg"
          alt="OBS"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <h3 className="p-4 text-center">
          OBS
        </h3>
      </div>

    </div>

  </div>

</section>


<section className="bg-black text-white py-20 px-6">

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-3xl md:text-5xl font-bold tracking-widest">
      CONTACT
    </h2>

    <p className="mt-8 text-gray-300 text-xl">
      Available for Cinema & TV Productions
    </p>

    <p className="mt-4 text-gray-400">
      Instagram: @minaadel
    </p>
<a
  href="https://instagram.com/minaadel"
  target="_blank"
  className="inline-block mt-6 border border-white px-8 py-3 tracking-widest hover:bg-white hover:text-black transition"
>
  INSTAGRAM @MINAADEL
</a>
  </div>

</section>
<footer className="bg-black text-gray-500 py-8 text-center border-t border-gray-800">

  <p>
    © 2026 MINA ADEL
  </p>

  <p className="mt-2">
    DIT | Cinematic Camera Technician
  </p>

</footer>
    </main>
  );
}