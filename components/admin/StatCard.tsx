"use client";

import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  trend: string;
  trendUp: boolean;
  iconBgColor: string;
  iconTextColor: string;
  trendBgColor: string;
  trendTextColor: string;
}

export default function StatCard({
  title,
  value,
  icon,
  trend,
  trendUp,
  iconBgColor,
  iconTextColor,
  trendBgColor,
  trendTextColor,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-6">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconBgColor}`}
        >
          <span
            className={`material-symbols-outlined text-xl ${iconTextColor}`}
          >
            {icon}
          </span>
        </div>
        <div
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${trendBgColor} ${trendTextColor}`}
        >
          <span className="material-symbols-outlined text-sm">
            {trendUp ? "trending_up" : "trending_down"}
          </span>
          {trend}
        </div>
      </div>
      <div>
        <p className="text-slate-500 text-sm font-semibold mb-1">{title}</p>
        <h3 className="text-3xl font-black text-slate-900">{value}</h3>
      </div>
    </div>
  );
}
