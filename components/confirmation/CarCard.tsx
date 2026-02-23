import React from "react";

const CarCard = ({
  name,
  subtitle,
  image_url,
  fuel_type,
  seats,
  transmission,
  daily_rate,
}: {
  name: string;
  subtitle: string;
  image_url: string;
  fuel_type: string;
  seats: number;
  transmission: string;
  daily_rate: number;
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 bg-slate-100 dark:bg-slate-700">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white dark:bg-slate-900 px-3 py-1 rounded-full shadow-sm">
          <span className="text-xs text-slate-500">{fuel_type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Header */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {name}
          </h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">
              airline_seat_recline_normal
            </span>
            <span>{seats} Seats</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">
              settings
            </span>
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-base">
              local_gas_station
            </span>
            <span>{fuel_type}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-700" />

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[#fe4708]">
              ${daily_rate}
            </span>
            <span className="text-sm text-slate-500">/ day</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
