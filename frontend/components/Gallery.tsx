"use client";

import { useState } from "react";
import Image from "next/image";

const images = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `/gallery-${i + 1}.jpg`,
  alt: `Gallery image ${i + 1}`,
}));

export default function Gallery() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          Gallery
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* <div className="absolute top-0 left-0 w-full h-8 bg-zinc-900 flex justify-between px-2">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={`top-${i}`}
                className="w-4 h-4 bg-black rounded-full my-2"
              />
            ))}
          </div> */}
{/* 
          <div className="absolute bottom-0 left-0 w-full h-8 bg-zinc-900 flex justify-between px-2">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={`bottom-${i}`}
                className="w-4 h-4 bg-black rounded-full my-2"
              />
            ))}
          </div> */}

          <div className="relative mx-auto py-8">
            <div
              className={`flex gap-4 animate-film-scroll ${
                isHovered ? "animation-paused" : ""
              }`}
            >
              {[...images, ...images].map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="relative flex-none w-64 h-40 group"
                >
                  <div className="absolute inset-0 border-2 border-black rounded-sm overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={480}
                      height={720}
                      className="object-cover w-full h-full  transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}