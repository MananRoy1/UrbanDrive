"use client";

import React from "react";
import Image from "next/image";

const mockFleetData = [
  {
    id: "1",
    name: "Tesla Model 3",
    type: "Electric • Automatic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSqcgzcAZghMxlhaPfaLv4H-i9Zg_PEmC_ivIusW6S2WGx3m1lC7Fxq--ewCM3kdGeihgzk9YDpbd7lkeeKnISfqttlOMDUNYgpNnlg75Uv6b0cuo3m-wicAJ6RvWWdfZOm0MMrebVZr77IEEVTEjiwRywDrpnSPLnrPjORmHMKPvo7XM1dQZ3GIJaqb-i8d78HeuH8rxpx-sQVXwRn76VCjEHY9opogOZvehYjP1rpCRnu67eXkgLWZKr5_5TalVwC0tPIBtn-vBZ",
    licensePlate: "NYC-8842",
    dailyRate: 120,
    status: "Available",
    availability: true,
  },
  {
    id: "2",
    name: "BMW 5 Series",
    type: "Sedan • Automatic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxt9u-cz3WSTqHjP-dzt4dNEh0CX6xE-2VOZ-FOR_zouDP4FdV4a7xQ87P4nc8Z4kJoQx5PpocDu33iBzzBVrNRnku_spNW5SVOGNAIOgxsGPMPGBjBUbVq8jsFQrW9VGa-aqGsWAZIWeqGq2zLpmCjbmkPrA9HgpIx7m1tQtufATAW8k0rAKdP0lReAdX5ou4ZgiTP0uCMvCGQJHabiAG-PdmcHmuLXuiMQ5LWR6ePoz3tV1UZy8eesqqfFS03H4B5aQwVob-xDYQ",
    licensePlate: "LAX-2190",
    dailyRate: 150,
    status: "Rented",
    availability: false,
  },
  {
    id: "3",
    name: "Audi Q8",
    type: "SUV • Automatic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqDIoxwYTa4mhn58esyqJmYMPOsneWh9IYQVV5SdOQwKhlWoKQJ3djyOP8EHrV-BsPFGTLELsXMCv8QyexvMwLWijZmG0oAgRJ8mom3DxV4mwJqVcDjJe8cvXV6aOBsJ_8NDLyVnplSeUaAYFUldd2GVdny8WtFnc4D9Pt6hmTAZpa8e8q590A4Wjj1X95k1d70pB0PQnLemRUz8PEHSe5QoO6E6dnkK86S_kLKRHNBH4siDXEHP7fJQJFAQk2PJzAAdo0CVyQ7219",
    licensePlate: "MIA-7711",
    dailyRate: 180,
    status: "Maintenance",
    availability: false,
  },
];

export default function FleetTable() {
  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-xl font-bold text-slate-900">Fleet Management</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors text-sm">
            <span className="material-symbols-outlined text-lg">
              filter_alt
            </span>
            Filter
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fea90b] text-slate-900 font-bold hover:bg-[#fea90b]/90 transition-colors text-sm shadow-sm">
            <span className="material-symbols-outlined text-lg">add</span>
            Add Car
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-4 text-xs font-black text-slate-400 uppercase tracking-widest px-4">
                Car Details
              </th>
              <th className="py-4 text-xs font-black text-slate-400 uppercase tracking-widest px-4">
                License Plate
              </th>
              <th className="py-4 text-xs font-black text-slate-400 uppercase tracking-widest px-4">
                Daily Rate
              </th>
              <th className="py-4 text-xs font-black text-slate-400 uppercase tracking-widest px-4">
                Status
              </th>
              <th className="py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-center px-4">
                Availability
              </th>
              <th className="py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-right px-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {mockFleetData.map((car) => (
              <tr
                key={car.id}
                className="group border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors"
              >
                {/* Details */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">
                        {car.name}
                      </p>
                      <p className="text-xs text-slate-500">{car.type}</p>
                    </div>
                  </div>
                </td>

                {/* License Plate */}
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold font-mono tracking-wider">
                    {car.licensePlate}
                  </span>
                </td>

                {/* Daily Rate */}
                <td className="py-4 px-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-black text-slate-900">
                      ${car.dailyRate}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      /day
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-4">
                  {car.status === "Available" && (
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-wide">
                      Available
                    </span>
                  )}
                  {car.status === "Rented" && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wide">
                      Rented
                    </span>
                  )}
                  {car.status === "Maintenance" && (
                    <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-bold tracking-wide">
                      Maintenance
                    </span>
                  )}
                </td>

                {/* Availability Toggle */}
                <td className="py-4 px-4 text-center">
                  <div
                    className={`inline-flex items-center h-6 w-11 rounded-full px-0.5 cursor-pointer transition-colors ${
                      car.availability ? "bg-[#fea90b]" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`h-5 w-5 bg-white rounded-full transition-transform shadow-sm ${
                        car.availability ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </div>
                </td>

                {/* Actions */}
                <td className="py-4 px-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        edit
                      </span>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 rounded-xl transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
