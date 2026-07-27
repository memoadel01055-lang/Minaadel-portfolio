"use client";

import Image from "next/image";
import { useState } from "react";

const btsImages = [
  "/images/Bts/_DSC0027.jpg",
  "/images/Bts/_DSC0229.JPG",
  "/images/Bts/bts-2.JPG",
  "/images/Bts/bts-4.JPG",
  "/images/Bts/bts-6.jpg",
  "/images/Bts/DSC_0167.JPG",
  "/images/Bts/DSC_0507.JPG",
  "/images/Bts/DSC00321.JPG",
];

export default function BTS() {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      className="bg-zinc-950 text-white py-24 px-6"
      id="bts"
    >

      <div className="max-w-7xl mx-auto">

        <p className="text-sm tracking-[0.4em] text-gray-400 uppercase">
          Behind The Scenes
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-bold">
          BTS Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          {btsImages.map((image) => (

            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >

              <Image
                src={image}
                alt="Behind the scenes"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

            </button>

          ))}

        </div>

      </div>


      {selectedImage && (

        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
        >

          <Image
            src={selectedImage}
            alt="BTS Preview"
            width={1400}
            height={1000}
            className="max-h-[90vh] w-auto object-contain"
          />

        </div>

      )}

    </section>
  );
}