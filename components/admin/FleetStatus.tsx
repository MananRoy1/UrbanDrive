"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Available", value: 65, color: "#f59e0b" }, // amber-500
  { name: "Rented", value: 20, color: "#3b82f6" }, // blue-500
  { name: "Maintenance", value: 15, color: "#e2e8f0" }, // slate-200
];

export default function FleetStatus() {
  const totalCars = 110;

  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col h-[400px]">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Fleet Status</h2>

      <div className="relative flex-grow flex items-center justify-center -mt-4">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={95}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
              cornerRadius={8}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderRadius: "0.75rem",
                border: "none",
                color: "#fff",
                fontWeight: "600",
                fontSize: "12px",
                padding: "8px 12px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              itemStyle={{ color: "#fff" }}
              formatter={(value: any) => [`${value}%`, ""]}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-3xl font-black text-slate-900 leading-none mb-1">
            {totalCars}
          </span>
          <span className="text-xs text-slate-500 font-bold tracking-wide uppercase">
            Total Cars
          </span>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="font-semibold text-slate-600 dark:text-slate-400">
                {item.name}
              </span>
            </div>
            <span className="font-black text-slate-900">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
