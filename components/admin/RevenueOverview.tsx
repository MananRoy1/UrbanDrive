"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 20000 },
  { name: "Feb", revenue: 25000 },
  { name: "Mar", revenue: 24000 },
  { name: "Apr", revenue: 32000 },
  { name: "May", revenue: 30000 },
  { name: "Jun", revenue: 38000 },
  { name: "Jul", revenue: 42000 },
  { name: "Aug", revenue: 50000 },
];

export default function RevenueOverview() {
  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 h-[400px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Revenue Overview</h2>
          <p className="text-slate-500 text-sm">
            Jan - Dec {new Date().getFullYear()}
          </p>
        </div>
      </div>

      <div className="h-[280px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fea90b" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#fea90b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }}
              dy={10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderRadius: "1rem",
                border: "none",
                color: "#fff",
                fontWeight: "bold",
                padding: "8px 16px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              itemStyle={{ color: "#fff" }}
              cursor={{
                stroke: "#e2e8f0",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#fea90b"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              activeDot={{
                r: 6,
                fill: "#fea90b",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
