"use client";

import { useState } from "react";
import Image from "next/image";

interface Thumbnail {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  mainImage: string;
  mainAlt: string;
  thumbnails: Thumbnail[];
  fuelType: string;
}

export default function ImageGallery({
  mainImage,
  mainAlt,
  thumbnails,
  fuelType,
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter out any thumbnails that are empty or malformed
  const validThumbnails = (thumbnails || [])
    .filter(Boolean)
    .map((img) => {
      if (typeof img === "string") return { src: img, alt: mainAlt };
      return img;
    })
    .filter((img) => img.src);

  const allImages = [];
  if (mainImage) {
    allImages.push({ src: mainImage, alt: mainAlt });
  }
  allImages.push(...validThumbnails);

  // Fallback to a placeholder or empty object if no images are available
  const displayed = allImages[activeIndex] ||
    allImages[0] || { src: "", alt: "" };

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800 shadow-sm group">
        {displayed.src && (
          <Image
            src={displayed.src}
            alt={displayed.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        )}

        {/* Show all photos btn */}
        <button className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/50 backdrop-blur text-slate-900 dark:text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-sm">grid_view</span>
          Show all photos
        </button>

        {/* Fuel badge */}
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/50 backdrop-blur text-slate-900 dark:text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <span className="material-symbols-outlined text-sm text-[#fea90b]">
            {fuelType === "Electric" ? "bolt" : "local_gas_station"}
          </span>
          {fuelType}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 mt-4 overflow-x-auto pb-2 snap-x">
        {allImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`snap-start ml-1 mt-1 shrink-0 w-24 h-24 rounded-2xl overflow-hidden transition-all relative ${
              activeIndex === i
                ? "ring-2 ring-[#fea90b] ring-offset-2 ring-offset-[#f8f7f5] dark:ring-offset-[#231c0f]"
                : "opacity-70 hover:opacity-100 hover:ring-2 hover:ring-slate-300"
            }`}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
