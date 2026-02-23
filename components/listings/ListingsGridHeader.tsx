"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ListingsGridHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "recommended";

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Find your drive
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          24 cars available in San Francisco
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">
          Sort by:
        </span>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            onChange={(e) => updateParam("sort", e.target.value)}
            value={currentSort}
            className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 py-2 pl-4 pr-10 rounded-lg text-sm focus:outline-none focus:border-[#fea90b] focus:ring-1 focus:ring-[#fea90b] cursor-pointer"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <span className="material-symbols-outlined text-[20px]">
              expand_more
            </span>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <button className="lg:hidden p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-[#fea90b] hover:text-[#fea90b] transition-colors">
          <span className="material-symbols-outlined">tune</span>
        </button>
      </div>
    </div>
  );
}
