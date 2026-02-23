"use client";

import React from "react";
import StatCard from "./StatCard";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Total Cars"
        value="110"
        icon="directions_car"
        trend="12%"
        trendUp={true}
        iconBgColor="bg-amber-50"
        iconTextColor="text-amber-500"
        trendBgColor="bg-emerald-50"
        trendTextColor="text-emerald-500"
      />
      <StatCard
        title="Active Rentals"
        value="86"
        icon="key"
        trend="5%"
        trendUp={true}
        iconBgColor="bg-blue-50"
        iconTextColor="text-blue-500"
        trendBgColor="bg-emerald-50"
        trendTextColor="text-emerald-500"
      />
      <StatCard
        title="Total Revenue"
        value="$38,500"
        icon="attach_money"
        trend="8%"
        trendUp={true}
        iconBgColor="bg-slate-100"
        iconTextColor="text-slate-900"
        trendBgColor="bg-slate-100 dark:bg-slate-800"
        trendTextColor="text-slate-500"
      />
      <StatCard
        title="Pending Returns"
        value="5"
        icon="schedule"
        trend="2%"
        trendUp={false}
        iconBgColor="bg-orange-50"
        iconTextColor="text-orange-500"
        trendBgColor="bg-rose-50"
        trendTextColor="text-rose-500"
      />
    </div>
  );
}
