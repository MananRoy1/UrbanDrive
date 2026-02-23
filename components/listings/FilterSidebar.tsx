"use client";

import { useEffect, useState, useCallback } from "react";
import Slider from "@mui/material/Slider";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const vehicleTypes = [
  { label: "SUV", count: 12 },
  { label: "Sedan", count: 8 },
  { label: "Hatchback", count: 5 },
  { label: "Coupe", count: 3 },
];

const fuelTypes = ["All", "Electric", "Hybrid", "Petrol"];

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Initialize state from URL params
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>(
    searchParams.get("type")?.split(",") || [],
  );
  const [transmission, setTransmission] = useState<string>(
    searchParams.get("transmission") || "Automatic",
  );
  const [selectedFuel, setSelectedFuel] = useState(
    searchParams.get("fuel") || "All",
  );
  const [availableNow, setAvailableNow] = useState(
    searchParams.get("available") !== "false",
  );
  const [priceRange, setPriceRange] = useState<number[]>([
    Number(searchParams.get("minPrice")) || 30,
    Number(searchParams.get("maxPrice")) || 150,
  ]);

  // Sync with URL when params change (e.g. on back button)
  useEffect(() => {
    setSelectedVehicles(searchParams.get("type")?.split(",") || []);
    setTransmission(searchParams.get("transmission") || "Automatic");
    setSelectedFuel(searchParams.get("fuel") || "All");
    setAvailableNow(searchParams.get("available") !== "false");
    setPriceRange([
      Number(searchParams.get("minPrice")) || 30,
      Number(searchParams.get("maxPrice")) || 150,
    ]);
  }, [searchParams]);

  const updateFilters = useCallback(
    (updates: Record<string, string | string[] | undefined>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === "" || value === "All") {
          params.delete(key);
        } else if (Array.isArray(value)) {
          if (value.length > 0) {
            params.set(key, value.join(","));
          } else {
            params.delete(key);
          }
        } else {
          params.set(key, value);
        }
      });

      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router],
  );

  const toggleVehicle = (label: string) => {
    const nextVehicles = selectedVehicles.includes(label)
      ? selectedVehicles.filter((v) => v !== label)
      : [...selectedVehicles, label];

    setSelectedVehicles(nextVehicles);
    updateFilters({ type: nextVehicles });
  };

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handlePriceChangeCommitted = (
    event: React.SyntheticEvent | Event,
    newValue: number | number[],
  ) => {
    const range = newValue as number[];
    updateFilters({
      minPrice: range[0].toString(),
      maxPrice: range[1].toString(),
    });
  };

  const handleFuelChange = (fuel: string) => {
    setSelectedFuel(fuel);
    updateFilters({ fuel });
  };

  const handleTransmissionChange = (type: string) => {
    setTransmission(type);
    updateFilters({ transmission: type });
  };

  const toggleAvailable = () => {
    const nextAvailable = !availableNow;
    setAvailableNow(nextAvailable);
    updateFilters({ available: nextAvailable ? undefined : "false" });
  };

  const handleReset = () => {
    setSelectedVehicles([]);
    setTransmission("Automatic");
    setSelectedFuel("All");
    setAvailableNow(true);
    setPriceRange([30, 150]);
    router.push(pathname, { scroll: false });
  };

  return (
    <aside className="w-64 mr-2 hidden lg:block shrink-0 space-y-8 sticky top-28 h-[calc(100vh)] overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Filters
        </h2>
        <button
          onClick={handleReset}
          className="text-xs font-medium text-[#fea90b] hover:text-[#fea90b]/80 transition-colors"
        >
          Reset All
        </button>
      </div>

      {/* Price Range */}
      <div className="space-y-4 px-4">
        <h3 className="font-bold text-sm text-gray-900 dark:text-white">
          Price Range
        </h3>
        <div className="relative pt-4">
          <Slider
            getAriaLabel={() => "Price range"}
            value={priceRange}
            min={30}
            max={150}
            onChange={handlePriceChange}
            onChangeCommitted={handlePriceChangeCommitted}
            valueLabelDisplay="auto"
            disableSwap
            sx={{
              color: "#fea90b",
              "& .MuiSlider-thumb": {
                backgroundColor: "#fea90b",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#fea97b",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#fff",
              },
            }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 font-medium">
          <span>${priceRange[0]}/day</span>
          <span>${priceRange[1]}/day</span>
        </div>
      </div>

      {/* Vehicle Type */}
      <div className="space-y-3">
        <h3 className="font-bold text-sm text-gray-900 dark:text-white">
          Vehicle Type
        </h3>
        {vehicleTypes.map(({ label, count }) => {
          const checked = selectedVehicles.includes(label);
          return (
            <label
              key={label}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => toggleVehicle(label)}
            >
              <div
                className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                  checked
                    ? "bg-[#fea90b] border-[#fea90b]"
                    : "border-gray-300 dark:border-gray-600 group-hover:border-[#fea90b]"
                }`}
              >
                {checked && (
                  <span className="material-symbols-outlined text-white text-[14px]">
                    check
                  </span>
                )}
              </div>
              <span
                className={`text-sm transition-colors ${
                  checked
                    ? "text-[#fea90b] font-medium"
                    : "text-gray-600 dark:text-gray-300 group-hover:text-[#fea90b]"
                }`}
              >
                {label}
              </span>
            </label>
          );
        })}
      </div>

      {/* Transmission */}
      <div className="space-y-3">
        <h3 className="font-bold text-sm text-gray-900 dark:text-white">
          Transmission
        </h3>
        <div className="flex flex-wrap gap-2">
          {(["Automatic", "Manual"] as const).map((type) => (
            <button
              key={type}
              onClick={() => handleTransmissionChange(type)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                transmission === type
                  ? "bg-[#fea90b] text-slate-900 border-transparent"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-[#fea90b] hover:text-[#fea90b]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Fuel Type */}
      <div className="space-y-3">
        <h3 className="font-bold text-sm text-gray-900 dark:text-white">
          Fuel Type
        </h3>
        {fuelTypes.map((fuel) => (
          <label
            key={fuel}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleFuelChange(fuel)}
          >
            <div className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:border-[#fea90b] transition-colors relative">
              {selectedFuel === fuel && (
                <div className="w-2.5 h-2.5 bg-[#fea90b] rounded-full" />
              )}
            </div>
            <span
              className={`text-sm transition-colors ${
                selectedFuel === fuel
                  ? "text-[#fea90b] font-medium"
                  : "text-gray-600 dark:text-gray-300 group-hover:text-[#fea90b]"
              }`}
            >
              {fuel}
            </span>
          </label>
        ))}
      </div>

      <div className="flex items-center justify-between py-2">
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          Available Now
        </span>
        <button
          onClick={toggleAvailable}
          className={`w-11 h-6 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fea90b] ${
            availableNow ? "bg-[#fea90b]" : "bg-gray-300 dark:bg-gray-600"
          }`}
        >
          <span
            className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-transform ${
              availableNow ? "translate-x-5 left-1" : "translate-x-0 left-1"
            }`}
          />
        </button>
      </div>
    </aside>
  );
}
