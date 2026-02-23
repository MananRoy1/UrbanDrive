"use client";

import { useState } from "react";

interface PaginationProps {
  totalPages?: number;
}

export default function Pagination({ totalPages = 3 }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center justify-center mt-12 gap-2">
      {/* Prev */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-[#fea90b] hover:text-[#fea90b] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all ${
            currentPage === page
              ? "bg-[#fea90b] text-slate-900 shadow-lg shadow-[#fea90b]/20"
              : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-[#fea90b] hover:text-[#fea90b]"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:border-[#fea90b] hover:text-[#fea90b] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
