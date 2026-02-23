"use client";

import { useState } from "react";
import Image from "next/image";

interface CarSpec {
  icon: string;
  label: string;
}

interface ListingCarCardProps {
  name: string;
  type: string;
  price: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  imageAlt: string;
  badge?: {
    label: string;
    color: string; // tailwind bg class
    textColor?: string;
  };
  specs: CarSpec[];
}

export default function ListingCarCard({
  name,
  type,
  imageAlt,
  price,
  rating,
  reviews,
  imageUrl,
  badge,
  specs,
}: ListingCarCardProps) {
  const [favorited, setFavorited] = useState(false);

  return (
    <article className="bg-white cursor-pointer dark:bg-gray-800 rounded-[20px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group overflow-hidden border border-gray-100 dark:border-gray-700">
      {/* Image Area */}
      <div className="relative h-48 w-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        {/* Favorite Button */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => setFavorited(!favorited)}
            className="dark:bg-gray-800/80 backdrop-blur rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
          >
            <span
              className={`material-symbols-outlined text-[20px] transition-colors ${
                favorited ? "text-red-500" : "text-gray-400 hover:text-red-500"
              }`}
              style={{
                fontVariationSettings: favorited ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              favorite
            </span>
          </button>
        </div>

        {/* Badge */}
        {badge && (
          <span
            className={`absolute top-4 left-4 z-10 ${badge.color} ${
              badge.textColor ?? "text-white"
            } text-xs font-bold px-3 py-1 rounded-full`}
          >
            {badge.label}
          </span>
        )}

        {/* Car Image */}
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Name + Rating */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
              {name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{type}</p>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg shrink-0">
            <span
              className="material-symbols-outlined text-[#fea90b] text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-xs font-bold text-gray-900 dark:text-white">
              {rating}
            </span>
            <span className="text-[10px] text-gray-400">({reviews})</span>
          </div>
        </div>

        {/* Specs Row */}
        <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-gray-100 dark:border-gray-700 my-2">
          {specs.map((spec, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center gap-1 ${
                i === 1
                  ? "border-l border-r border-gray-100 dark:border-gray-700"
                  : ""
              }`}
            >
              <span className="material-symbols-outlined text-gray-400 text-[20px]">
                {spec.icon}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {spec.label}
              </span>
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ${price}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              /day
            </span>
          </p>
          <button className="bg-[#fea90b] text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#fea90b]/90 transition-colors shadow-lg shadow-[#fea90b]/20">
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
