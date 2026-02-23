import Link from "next/link";
import CarCard from "./CarCard";

const cars = [
  {
    name: "Tesla Model 3",
    description: "Electric • Autopilot",
    price: "$85/day",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTxZJY7GoEuTmhDIUFNzymX49vlsdQHlrmyjJd0Q5XX6TfD0bRRqPagMh1nzzk1G_AmQPis7MAhjsJVCQIZEKweOC9ZE6XESM5iroenbxeU1iWxVYvqxvZnTPJtkGLm0VuJWuj6Pf8Y4S-J-rdyDDm4EZ8MFBrcPRUFkPmKNYsGRWpkwtqV4o9wdsYDMD5c4pLA5Fa6sAhKkIIZRTFwbfI93xHTKXLtTwoPe39MUf2HaXYrB57mUdmYGfv8sNv4MadtbqZ3hVKPJQl",
    imageAlt: "White Tesla Model 3 parked on a modern street",
  },
  {
    name: "Mercedes C-Class",
    description: "Luxury • Automatic",
    price: "$92/day",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6TC2CtMkCbdnG3ORvMhXAhQVxoNqghn8k_njvIYzZGbhwJjYKnnt59swB4yKuTzblAtepivjW7pcoc489LHWwPXXccpompnfTPDASPKOtbL6M_wIU5VXUbicxUzuhAE6bGxVds8RPexjjpLMoXAPIK2cNOJSGGw4eTaPo6cnftptBHqZ9Tb30T3RLulEs2tmVgHRL9ee2u4Ehg2TEwlZS1_uZQPckrbcXKlr5H6dSjkkM3oFGytuGJsLoYjymguke-z7M6KG2r3Xs",
    imageAlt: "Silver Mercedes-Benz C-Class driving",
  },
  {
    name: "Audi R8 Spyder",
    description: "Sport • Convertible",
    price: "$150/day",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCON2a5qU_XMTFnjtt5aZ_-lEOqIq5_SmDR7wDtV9Pf2kKZxaju7AnlfF-yhtelO5MOJfVLJgInsD5pLsqLuwoTRsHq6JbbGD59P6YLNvdMM_jVYobXgXCrgD9fglOWZxGpi5y_tU5Ns37V-EfJPA_HjP17uPCxsa_5eFVeeRvV4-cmiXUqIPNr-AoS_JbYBT2VCWZ3Va7kgj2-qJq4pNSCkBMs3fUMGVgbco5oxt4dVwMX0qH6O-MWFWWK-rJTidENYJpuxnFEvJvh",
    imageAlt: "Black Audi R8 sports car",
  },
];

export default function PopularFleetSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Popular Fleet
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Choose from our premium selection of vehicles.
            </p>
          </div>
          <Link
            href="/cars"
            className="hidden sm:flex items-center gap-2 text-[#fea90b] font-bold hover:gap-3 transition-all"
          >
            View All Cars
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.name} {...car} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="#"
            className="flex items-center gap-2 text-[#fea90b] font-bold"
          >
            View All Cars{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
