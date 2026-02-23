"use client";

import { useRef, useState } from "react";

export default function SearchWidget() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const DateRef = useRef<HTMLInputElement>(null);
  const TimeRef = useRef<HTMLInputElement>(null);

  const handleDateChange = () => {
    setDate(DateRef.current?.value || "");
  };

  const handleTimeChange = () => {
    setTime(TimeRef.current?.value || "");
  };

  const handleSearch = () => {
    console.log("Searching for cars:", { location, date, time });
  };

  return (
    <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-4 rounded-[2rem] shadow-2xl flex flex-col lg:flex-row gap-4 lg:gap-2 items-center lg:h-24 max-w-[900px]">
      {/* Location Input */}
      <div className="flex-1 w-full relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#fea90b] transition-colors">
          <span className="material-symbols-outlined">location_on</span>
        </div>
        <div className="flex flex-col pl-12 pr-4 py-2 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 h-full justify-center">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
            Pick-up
          </label>
          <input
            className="w-full bg-transparent border-none p-0 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-0 text-base font-medium outline-none"
            placeholder="City, Airport, or Address"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      {/* Date Picker */}
      <div className="w-full lg:w-48 relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#fea90b] transition-colors">
          <span className="material-symbols-outlined">calendar_today</span>
        </div>
        <div className="flex flex-col pl-12 pr-4 py-2 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700 h-full justify-center">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
            Date
          </label>
          <input
            className="w-full bg-transparent border-none p-0 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-0 text-base font-medium outline-none"
            placeholder="Add dates"
            type="date"
            ref={DateRef}
            value={new Date().toISOString().split("T")[0]}
            onChange={handleDateChange}
          />
        </div>
      </div>

      {/* Time Picker */}
      <div className="w-full lg:w-40 relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#fea90b] transition-colors">
          <span className="material-symbols-outlined">schedule</span>
        </div>
        <div className="flex flex-col pl-12 pr-4 py-2 h-full justify-center">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">
            Time
          </label>
          <input
            className="w-full bg-transparent border-none p-0 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-0 text-base font-medium outline-none"
            placeholder="10:00 AM"
            type="time"
            ref={TimeRef}
            value={new Date().toLocaleTimeString()}
            onChange={handleTimeChange}
          />
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleSearch}
        className="w-full lg:w-auto h-14 lg:h-16 px-8 bg-[#fea90b] hover:bg-amber-400 text-gray-900 font-bold rounded-[1.5rem] flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-[#fea90b]/30 text-lg whitespace-nowrap"
      >
        <span className="material-symbols-outlined">search</span>
        Search Cars
      </button>
    </div>
  );
}
