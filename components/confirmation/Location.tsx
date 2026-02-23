import React from "react";

const Location = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-slate-700">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        Location
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="relative space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
            Pick-up Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400 text-lg">
                location_on
              </span>
            </div>
            <input
              className="w-full pl-10 py-3 bg-[#f8f7f5] dark:bg-[#231c0f] border-none rounded-xl text-slate-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-[#fea90b] outline-none cursor-pointer"
              type="text"
              defaultValue="Dubai International Airport"
            />
          </div>
        </div>
        <div className="absolute top-[110%] left-[36%] h-40 -translate-x-1/2 -translate-y-1/2 border-l z-20 border-slate-300 border-dashed" />

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
            Drop-off Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400 text-lg">
                location_on
              </span>
            </div>
            <input
              className="w-full pl-10 py-3 bg-[#f8f7f5] dark:bg-[#231c0f] border-none rounded-xl text-slate-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-[#fea90b] outline-none cursor-pointer"
              type="text"
              defaultValue="Dubai International Airport"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
