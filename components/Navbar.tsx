"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md text-white">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-xl md:text-2xl font-black tracking-[0.3em]">
          MINA ADEL
        </h1>


        <div className="hidden md:flex gap-8 text-sm text-gray-300">

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#work" className="hover:text-white transition">
            Work
          </a>

          <a href="#gallery" className="hover:text-white transition">
            Gallery
          </a>

          <a href="#showreel" className="hover:text-white transition">
            Showreel
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>


        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>


      {open && (

        <div className="md:hidden bg-black px-6 pb-6 flex flex-col gap-5 text-gray-300">

          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#gallery">Gallery</a>
          <a href="#showreel">Showreel</a>
          <a href="#contact">Contact</a>

        </div>

      )}

    </nav>
  );
}