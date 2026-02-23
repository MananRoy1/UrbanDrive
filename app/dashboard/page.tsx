"use client";

import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardStats from "@/components/dashboard/DashboardStats";
import BookingCard from "@/components/dashboard/BookingCard";
import Link from "next/link";
import toast from "react-hot-toast";

// Mock bookings data for demonstration
// const mockBookings: any[] = [
//   {
//     id: "BK-101",
//     carName: "Tesla Model 3",
//     type: "Electric Sedan",
//     imageUrl:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCSqcgzcAZghMxlhaPfaLv4H-i9Zg_PEmC_ivIusW6S2WGx3m1lC7Fxq--ewCM3kdGeihgzk9YDpbd7lkeeKnISfqttlOMDUNYgpNnlg75Uv6b0cuo3m-wicAJ6RvWWdfZOm0MMrebVZr77IEEVTEjiwRywDrpnSPLnrPjORmHMKPvo7XM1dQZ3GIJaqb-i8d78HeuH8rxpx-sQVXwRn76VCjEHY9opogOZvehYjP1rpCRnu67eXkgLWZKr5_5TalVwC0tPIBtn-vBZ",
//     slug: "tesla-model-3",
//     startDate: "Feb 24, 2026",
//     endDate: "Feb 27, 2026",
//     totalPrice: 285,
//     status: "Upcoming",
//   },
//   {
//     id: "BK-098",
//     carName: "Range Rover Evoque",
//     type: "Luxury SUV",
//     imageUrl:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCqDIoxwYTa4mhn58esyqJmYMPOsneWh9IYQVV5SdOQwKhlWoKQJ3djyOP8EHrV-BsPFGTLELsXMCv8QyexvMwLWijZmG0oAgRJ8mom3DxV4mwJqVcDjJe8cvXV6aOBsJ_8NDLyVnplSeUaAYFUldd2GVdny8WtFnc4D9Pt6hmTAZpa8e8q590A4Wjj1X95k1d70pB0PQnLemRUz8PEHSe5QoO6E6dnkK86S_kLKRHNBH4siDXEHP7fJQJFAQk2PJzAAdo0CVyQ7219",
//     slug: "range-rover-evoque",
//     startDate: "Jan 12, 2026",
//     endDate: "Jan 15, 2026",
//     totalPrice: 350,
//     status: "Completed",
//   },
//   {
//     id: "BK-095",
//     carName: "Audi Q8",
//     type: "Premium SUV",
//     imageUrl:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBxt9u-cz3WSTqHjP-dzt4dNEh0CX6xE-2VOZ-FOR_zouDP4FdV4a7xQ87P4nc8Z4kJoQx5PpocDu33iBzzBVrNRnku_spNW5SVOGNAIOgxsGPMPGBjBUbVq8jsFQrW9VGa-aqGsWAZIWeqGq2zLpmCjbmkPrA9HgpIx7m1tQtufATAW8k0rAKdP0lReAdX5ou4ZgiTP0uCMvCGQJHabiAG-PdmcHmuLXuiMQ5LWR6ePoz3tV1UZy8eesqqfFS03H4B5aQwVob-xDYQ",
//     slug: "audi-q8",
//     startDate: "Dec 05, 2025",
//     endDate: "Dec 08, 2025",
//     totalPrice: 480,
//     status: "Completed",
//   },
// ];

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const fetchUserAndBookings = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        const { data, error } = await supabase
          .from("bookings")
          .select(
            `
            id,
            payment_status,
            pickup_at,
            dropoff_at,
            total_amount,
            status,
            vehicle_slug,
            vehicles (
              name,
              subtitle,
              image_url,
              slug
            )
          `,
          )
          .eq("user_id", currentUser.id)
          .order("pickup_at", { ascending: false });

        if (!error && data) {
          const formattedBookings = data.map((b: any) => ({
            id: b.id,
            carName: b.vehicles?.name || "Unknown Car",
            type: b.vehicles?.subtitle || "Unknown Type",
            imageUrl: b.vehicles?.image_url || "",
            slug: b.vehicles?.slug || b.vehicle_slug,
            startDate: new Date(b.pickup_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            endDate: new Date(b.dropoff_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            totalPrice: b.total_amount,
            status: b.status ? b.status.toLowerCase() : "pending",
            paymentStatus: b.payment_status
              ? b.payment_status.toLowerCase()
              : "unpaid",
          }));
          setBookings(formattedBookings);
        } else if (error) {
          toast.error("Error fetching bookings");
        }
      }
      setLoading(false);
    };
    fetchUserAndBookings();
  }, []);

  if (loading) return null;

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f8f7f5] dark:bg-[#231c0f] flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4 mt-32 mb-16">
          <div className="bg-white dark:bg-slate-800 p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-black/20 text-center max-w-md border border-slate-100 dark:border-slate-700">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4 italic">
              UrbanDrive
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">
              Please login to view your personal dashboard and manage your
              bookings.
            </p>
            <Link
              href="/login"
              className="bg-[#fea90b] hover:bg-amber-400 text-slate-900 font-bold py-4 px-10 rounded-full text-lg transition-all inline-block shadow-lg shadow-amber-400/30"
            >
              Go to Login
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const upcomingBookings = bookings.filter(
    (b) => b.status === "pending" || b.status === "active",
  );
  const pastBookings = bookings.filter(
    (b) => b.status === "completed" || b.status === "cancelled",
  );

  const fullName = user.user_metadata?.full_name || user.email?.split("@")[0];

  return (
    <div className="min-h-screen bg-[#f8f7f5] dark:bg-[#231c0f] flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Hello, <span className="text-[#fea90b]">{fullName}!</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
              Manage your rentals and view your journey stats.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-slate-700 flex items-center justify-center text-white text-2xl font-black border-4 border-white dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20">
              {fullName?.charAt(0).toUpperCase()}
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {fullName}
              </p>
              <p className="text-xs text-slate-500">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mb-16">
          <DashboardStats />
        </div>

        {/* Bookings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Upcoming Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-[#fea90b] rounded-full"></div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Upcoming Rentals
              </h2>
              <span className="bg-[#fea90b]/10 text-[#fea90b] px-3 py-1 rounded-full text-xs font-black">
                {upcomingBookings.length}
              </span>
            </div>

            <div className="space-y-6">
              {upcomingBookings.length > 0 ? (
                upcomingBookings.map((booking) => (
                  <BookingCard
                    key={booking.id}
                    {...booking}
                    paymentStatus={booking.paymentStatus}
                  />
                ))
              ) : (
                <div className="bg-white/50 dark:bg-slate-800/30 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-[2rem] p-12 text-center">
                  <p className="text-slate-400 font-bold">
                    No upcoming trips planned yet.
                  </p>
                  <Link
                    href="/cars"
                    className="text-[#fea90b] font-black text-sm mt-2 inline-block hover:underline"
                  >
                    Browse our fleet →
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Past Section */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Past Journeys
              </h2>
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 px-3 py-1 rounded-full text-xs font-black">
                {pastBookings.length}
              </span>
            </div>

            <div className="space-y-6">
              {pastBookings.map((booking) => (
                <BookingCard key={booking.id} {...booking} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
