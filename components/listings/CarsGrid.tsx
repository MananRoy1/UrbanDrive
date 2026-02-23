import Link from "next/link";
import ListingCarCard from "./ListingCarCard";
import { supabase } from "@/lib/supabase";

// const cars = [
//   {
//     id: "tesla-model-3",
//     name: "Tesla Model 3",
//     type: "Electric Sedan",
//     price: 85,
//     rating: 4.9,
//     reviews: 128,
//     imageUrl:
//       "https://www.tesla.com/ownersmanual/images/GUID-B5641257-9E85-404B-9667-4DA5FDF6D2E7-online-en-US.png",
//     imageAlt: "Tesla Model 3 silver side view",
//     badge: {
//       label: "Top Rated",
//       color: "bg-[#fea90b]",
//       textColor: "text-slate-900",
//     },
//     specs: [
//       { icon: "airline_seat_recline_normal", label: "5 Seats" },
//       { icon: "settings", label: "Auto" },
//       { icon: "electric_bolt", label: "Electric" },
//     ],
//   },
//   {
//     id: "range-rover-evoque",
//     name: "Range Rover Evoque",
//     type: "Luxury SUV",
//     price: 110,
//     rating: 4.8,
//     reviews: 84,
//     imageUrl:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCqDIoxwYTa4mhn58esyqJmYMPOsneWh9IYQVV5SdOQwKhlWoKQJ3djyOP8EHrV-BsPFGTLELsXMCv8QyexvMwLWijZmG0oAgRJ8mom3DxV4mwJqVcDjJe8cvXV6aOBsJ_8NDLyVnplSeUaAYFUldd2GVdny8WtFnc4D9Pt6hmTAZpa8e8q590A4Wjj1X95k1d70pB0PQnLemRUz8PEHSe5QoO6E6dnkK86S_kLKRHNBH4siDXEHP7fJQJFAQk2PJzAAdo0CVyQ7219",
//     imageAlt: "White Range Rover Evoque front angle",
//     specs: [
//       { icon: "airline_seat_recline_normal", label: "5 Seats" },
//       { icon: "settings", label: "Auto" },
//       { icon: "local_gas_station", label: "Petrol" },
//     ],
//   },
//   {
//     id: "mini-cooper-se",
//     name: "MINI Cooper SE",
//     type: "Compact Hatchback",
//     price: 75,
//     rating: 4.7,
//     reviews: 56,
//     imageUrl:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBdmX4uls8S0sa2mJ7XY4PEqS-wAtYPr_78OMmI7fP-XYfYFJRoLejBbeaIvMEDRs3BcH3KNpZgn7CfKyWqfN_5YOE1v6VWveujRPG9tAuvkSTviue_kkzZn7v5taw1JIOrqlPJawhFjak0zD-6iMXhh--c7NNGyrY2pngu1EW6Xz0NAcfE1VqiZEOvS2HN7Yo_x7HmraLnS7S4XiV9jOSKRwe8eCk1OG9rMiGVDMpGAMZG3zPSpC0FT59fHHfLYPjz2Ij-ZyCNW0xE",
//     imageAlt: "Blue MINI Cooper SE side view",
//     badge: {
//       label: "Eco Friendly",
//       color: "bg-emerald-500",
//       textColor: "text-white",
//     },
//     specs: [
//       { icon: "airline_seat_recline_normal", label: "4 Seats" },
//       { icon: "settings", label: "Auto" },
//       { icon: "electric_bolt", label: "Electric" },
//     ],
//   },
//   {
//     id: "bmw-3-series",
//     name: "BMW 3 Series",
//     type: "Luxury Sedan",
//     price: 95,
//     rating: 4.8,
//     reviews: 92,
//     imageUrl:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuD8XvN55fERvKONW0K3PP4vrLFEzZzOy3o6v3GCwxrzbMgG2cKPB4QT2kOt6B65e0e45xz5MQeIiB_uWVLirpsXw_QeRHtfYHkDhKGEou5gMPf1NaeBGxL53kPn1yKcmPa848GKKL52IwbC3bhrZ2d7xhFJXEQaTm-kAMSpCHj1cgTWNRQnnAkEXPm__AU9aMnIiFxSlgj59nntd269_ivtTnIdKbYsEHL4Z8M8LqYqci2t-lizDVyMZ9eoLzQ6sJqoGq8zJpZnDs0T",
//     imageAlt: "White BMW 3 Series front view",
//     specs: [
//       { icon: "airline_seat_recline_normal", label: "5 Seats" },
//       { icon: "settings", label: "Auto" },
//       { icon: "local_gas_station", label: "Hybrid" },
//     ],
//   },
//   {
//     id: "audi-q8",
//     name: "Audi Q8",
//     type: "Premium SUV",
//     price: 145,
//     rating: 4.9,
//     reviews: 34,
//     imageUrl:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBxt9u-cz3WSTqHjP-dzt4dNEh0CX6xE-2VOZ-FOR_zouDP4FdV4a7xQ87P4nc8Z4kJoQx5PpocDu33iBzzBVrNRnku_spNW5SVOGNAIOgxsGPMPGBjBUbVq8jsFQrW9VGa-aqGsWAZIWeqGq2zLpmCjbmkPrA9HgpIx7m1tQtufATAW8k0rAKdP0lReAdX5ou4ZgiTP0uCMvCGQJHabiAG-PdmcHmuLXuiMQ5LWR6ePoz3tV1UZy8eesqqfFS03H4B5aQwVob-xDYQ",
//     imageAlt: "Red Audi Q8 SUV on road",
//     specs: [
//       { icon: "airline_seat_recline_normal", label: "5 Seats" },
//       { icon: "settings", label: "Auto" },
//       { icon: "local_gas_station", label: "Petrol" },
//     ],
//   },
//   {
//     id: "ford-mustang",
//     name: "Ford Mustang",
//     type: "Convertible",
//     price: 105,
//     rating: 4.6,
//     reviews: 210,
//     imageUrl:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCHB3OWcRtaGVLD4KqSjO9fCluiwo4BJCtuyPDWMt57brwMK6PgB_PuXbEVqVZWOH-Yevk2SIG4dfJvwtfW6Aqp0VBKi2amp_y62u8j9whFMeIGeBXklf7RE8SBaxU1Qh3uAY9NRkVclsSS0mF4_Zt30oyTGv06eYDD3Lgxa3784ojdmrsteBtJXEz-z2bxSWXLXkyGdVji9BhOV6776YA-ucVbtdEKBbFUIV0rewXHjbhnQEhmwAvPUz9fDYZFE_c41HUpfQtkp9oh",
//     imageAlt: "Black Ford Mustang convertible",
//     badge: {
//       label: "Great Deal",
//       color: "bg-orange-600",
//       textColor: "text-white",
//     },
//     specs: [
//       { icon: "airline_seat_recline_normal", label: "4 Seats" },
//       { icon: "settings", label: "Manual" },
//       { icon: "local_gas_station", label: "Petrol" },
//     ],
//   },
// ];

export default async function CarsGrid({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let query = supabase.from("vehicles").select("*");

  // Apply filters
  const type = searchParams.type;
  if (type) {
    const types = Array.isArray(type) ? type : type.split(",");
    query = query.in("type", types);
  }

  const fuel = searchParams.fuel;
  if (fuel && fuel !== "All") {
    query = query.eq("fuel_type", fuel);
  }

  const minPrice = searchParams.minPrice;
  const maxPrice = searchParams.maxPrice;
  if (minPrice) query = query.gte("daily_rate", minPrice);
  if (maxPrice) query = query.lte("daily_rate", maxPrice);

  const sort = searchParams.sort;
  if (sort === "price-low-high")
    query = query.order("daily_rate", { ascending: true });
  if (sort === "price-high-low")
    query = query.order("daily_rate", { ascending: false });
  if (sort === "rating") query = query.order("rating", { ascending: false });

  const { data: dbCars } = await query;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {dbCars?.map((car) => {
        // Find local car data by ID or Name for fallback specs
        const localCar = dbCars.find(
          (c) =>
            c.id === car.id || c.name.toLowerCase() === car.name?.toLowerCase(),
        );

        // Prioritize local specs if DB specs are missing or empty
        const specs =
          car.specs && car.specs.length > 0 ? car.specs : localCar?.specs || [];

        return (
          <Link key={car.id || car.slug} href={`/cars/${car.slug}`}>
            <ListingCarCard
              name={car.name}
              type={car.type}
              imageAlt={car.image_alt || car.name}
              price={car.daily_rate}
              rating={car.rating}
              reviews={car.review_count}
              imageUrl={car.image_url}
              badge={
                car.badge_label
                  ? {
                      label: car.badge_label,
                      color: car.badge_color || "bg-[#fea90b]",
                      textColor: car.badge_text_color || "text-slate-900",
                    }
                  : undefined
              }
              specs={specs}
            />
          </Link>
        );
      })}
    </div>
  );
}
