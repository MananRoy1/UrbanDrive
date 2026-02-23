import CarCard from "@/components/confirmation/CarCard";
import Location from "@/components/confirmation/Location";
import BookingWidget from "@/components/details/BookingWidget";
import { supabase } from "@/lib/supabase";
import React from "react";

const page = async ({ params }: { params: Promise<{ carsId: string }> }) => {
  const { carsId } = await params;
  const { data: car } = await supabase
    .from("vehicles")
    .select("*")
    .eq("slug", carsId)
    .single();

  if (!car) {
    return <div className="text-[">Car not found!</div>;
  }

  return (
    <div>
      <main className="px-4 md:px-10 py-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 xl:col-span-8 space-y-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Review your booking
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                Please review the details below before confirming your
                reservation.
              </p>
            </div>
            <CarCard
              name={car.name}
              subtitle={car.subtitle}
              image_url={car.image_url}
              fuel_type={car.fuel_type}
              seats={car.seats}
              transmission={car.transmission}
              daily_rate={car.daily_rate}
            />
            <Location />
          </div>
          <div className="lg:col-span-4 xl:col-span-4 space-y-6">
            <BookingWidget
              BookText="Book Now"
              carId={car.slug}
              carName={car.name}
              subtitle={car.subtitle}
              pricePerDay={car.daily_rate}
              isConfirmPage={true}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
