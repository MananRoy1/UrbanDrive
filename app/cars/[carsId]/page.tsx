import BookingWidget from "@/components/details/BookingWidget";
import Breadcrumbs from "@/components/details/Breadcrumbs";
import CarDescription from "@/components/details/CarDescription";
import CarStatsGrid from "@/components/details/CarStatsGrid";
import HostCard from "@/components/details/HostCard";
import ImageGallery from "@/components/details/ImageGallery";
import ReviewsSection from "@/components/details/ReviewsSection";
// import { cars } from "@/lib/carData";
import { supabase } from "@/lib/supabase";
import React from "react";

interface Props {
  params: Promise<{ carsId: string }>;
}

const page = async ({ params }: Props) => {
  const { carsId } = await params;
  const { data: car } = await supabase
    .from("vehicles")
    .select("*")
    .eq("slug", carsId)
    .single();

  if (!car) {
    return (
      <div className="text-[#fea90b] text-center flex justify-center items-center h-screen">
        Car not found!
      </div>
    );
  }

  return (
    <div>
      <main className="px-4 md:px-10 py-8 max-w-7xl mx-auto w-full">
        <Breadcrumbs carName={car.name} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ── Left Column ── */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
            <ImageGallery
              mainImage={car.image_url}
              mainAlt={car.image_alt}
              thumbnails={car.thumbnail_urls}
              fuelType={car.fuel_type}
            />

            {/* Mobile car header */}
            <div className="lg:hidden">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {car.name}
                  </h1>
                  <p className="text-slate-500 mt-1">{car.subtitle}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-2xl font-bold text-[#fe4708]">
                    ${car.daily_rate}
                  </span>
                  <span className="text-xs text-slate-500">/ day</span>
                </div>
              </div>
            </div>

            <CarStatsGrid stats={car.detail_stats} />
            <CarDescription
              description={car.description}
              features={car.features}
            />
            <ReviewsSection rating={car.rating} reviews={car.review_count} />
          </div>

          {/* ── Right Column (Sticky Booking) ── */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 h-fit relative">
            <div className="sticky top-24 space-y-6">
              <BookingWidget
                carId={car.slug}
                carName={car.name}
                subtitle={car.subtitle}
                pricePerDay={car.daily_rate}
                BookText="Confirm Booking"
              />
              <HostCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
