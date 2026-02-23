"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface BookingWidgetProps {
  carId: string;
  carName: string;
  subtitle: string;
  pricePerDay: number;
  BookText: string;
  isConfirmPage?: boolean;
}

const SERVICE_FEE = 25;
const INSURANCE_FEE = 45;

export default function BookingWidget({
  carId,
  carName,
  subtitle,
  pricePerDay,
  BookText,
  isConfirmPage = false,
}: BookingWidgetProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"pickup" | "dropoff">("pickup");
  const [isLoading, setIsLoading] = useState(false);

  const [pickupDate, setPickupDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [returnDate, setReturnDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split("T")[0];
  });
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnTime, setReturnTime] = useState("10:00");

  const pickupDateRef = useRef<HTMLInputElement>(null);
  const pickupTimeRef = useRef<HTMLInputElement>(null);
  const returnDateRef = useRef<HTMLInputElement>(null);
  const returnTimeRef = useRef<HTMLInputElement>(null);

  const [days, setDays] = useState(3);

  useEffect(() => {
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDays(diffDays > 0 ? diffDays : 1);
  }, [pickupDate, returnDate]);

  const subtotal = pricePerDay * days;
  const total = subtotal + SERVICE_FEE + INSURANCE_FEE;

  const handleBooking = async () => {
    try {
      setIsLoading(true);

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        toast.error("Please login to book a car");
        router.push("/login");
        return;
      }

      const { error } = await supabase.from("bookings").insert({
        user_id: session.user.id,
        vehicle_slug: carId,
        pickup_at: `${pickupDate}T${pickupTime}:00`,
        dropoff_at: `${returnDate}T${returnTime}:00`,
        daily_rate: pricePerDay,
        days,
        subtotal,
        service_fee: SERVICE_FEE,
        insurance_fee: INSURANCE_FEE,
        total_amount: total,
        status: "pending",
        payment_status: "unpaid",
        pickup_location: "Surat International Airport (SUR)", // TODO: Make dynamic
        dropoff_location: "Surat International Airport (SUR)", // TODO: Make dynamic
      });

      if (error) throw error;

      //Mail Service
      await fetch("/api/send-booking-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session.user.email,
          name: session.user.user_metadata?.name || session.user.email?.split("@")[0], // fallback,
          carName: carName,
          bookingDate: pickupDate,
          totalPrice: total,
        }),
      });

      toast.success("Booking confirmed successfully!");
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Failed to book car. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const openPickupDatePicker = () => {
    pickupDateRef.current?.showPicker?.();
  };

  const openPickupTimePicker = () => {
    pickupTimeRef.current?.showPicker?.();
  };

  const openReturnDatePicker = () => {
    returnDateRef.current?.showPicker?.();
  };

  const openReturnTimePicker = () => {
    returnTimeRef.current?.showPicker?.();
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-slate-100 dark:border-slate-700">
      {/* Header — Desktop only */}
      <div className="hidden lg:block mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
          {carName}
        </h1>
        <p className="text-slate-500 mt-1">{subtitle}</p>
        <div className="mt-4 flex items-end gap-2">
          <span className="text-3xl font-bold text-[#fe4708]">
            ${pricePerDay}
          </span>
          <span className="text-slate-500 mb-1">/ day</span>
          <span className="ml-auto bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            Available
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Tab toggle */}
        <div className="bg-[#f8f7f5] dark:bg-[#231c0f] p-1 rounded-xl flex">
          <button
            onClick={() => setActiveTab("pickup")}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === "pickup"
                ? "bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Pick-up
          </button>
          <button
            onClick={() => setActiveTab("dropoff")}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === "dropoff"
                ? "bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Drop-off
          </button>
        </div>

        {/* Date & Time Row 1 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
              Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 text-lg">
                  calendar_today
                </span>
              </div>
              <input
                className="w-full pl-10 py-3 bg-[#f8f7f5] dark:bg-[#231c0f] border-none rounded-xl text-slate-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-[#fea90b] outline-none cursor-pointer"
                type="date"
                ref={pickupDateRef}
                onClick={openPickupDatePicker}
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
              Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 text-lg">
                  schedule
                </span>
              </div>
              <input
                type="time"
                ref={pickupTimeRef}
                onClick={openPickupTimePicker}
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full pl-10 py-3 bg-[#f8f7f5] dark:bg-[#231c0f] border-none rounded-xl text-slate-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-[#fea90b] outline-none cursor-pointer appearance-none"
              />
            </div>
          </div>
        </div>

        {/* Date & Time Row 2 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
              Return Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 text-lg">
                  event
                </span>
              </div>
              <input
                className="w-full pl-10 py-3 bg-[#f8f7f5] dark:bg-[#231c0f] border-none rounded-xl text-slate-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-[#fea90b] outline-none cursor-pointer"
                type="date"
                ref={returnDateRef}
                onClick={openReturnDatePicker}
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
              Return Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 text-lg">
                  schedule
                </span>
              </div>
              <input
                type="time"
                ref={returnTimeRef}
                onClick={openReturnTimePicker}
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
                className="w-full pl-10 py-3 bg-[#f8f7f5] dark:bg-[#231c0f] border-none rounded-xl text-slate-900 dark:text-white text-sm font-medium focus:ring-2 focus:ring-[#fea90b] outline-none cursor-pointer appearance-none"
              />
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="py-6 border-t border-dashed border-slate-200 dark:border-slate-700 mt-2 space-y-3">
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>
              ${pricePerDay} x {days} days
            </span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Service Fee</span>
            <span>${SERVICE_FEE}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Insurance</span>
            <span>${INSURANCE_FEE}</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-700">
            <span className="font-bold text-lg text-slate-900 dark:text-white">
              Total
            </span>
            <span className="font-bold text-2xl text-slate-900 dark:text-white">
              ${total}
            </span>
          </div>
        </div>

        {/* Book Now CTA */}
        {isConfirmPage ? (
          <button
            onClick={handleBooking}
            disabled={isLoading}
            className="w-full bg-[#fea90b] hover:bg-[#e5960a] text-slate-900 font-bold text-lg py-4 rounded-full shadow-lg shadow-[#fea90b]/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Confirming..." : BookText}
            {!isLoading && (
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            )}
          </button>
        ) : (
          <Link
            href={`/cars/${carId}/confirm`}
            className="w-full bg-[#fea90b] hover:bg-[#e5960a] text-slate-900 font-bold text-lg py-4 rounded-full shadow-lg shadow-[#fea90b]/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
          >
            {BookText}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        )}

        <p className="text-center text-xs text-slate-400 mt-2">
          Free cancellation up to 24 hours before pickup.
        </p>
      </div>
    </div>
  );
}
