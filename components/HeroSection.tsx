import Image from "next/image";
import SearchWidget from "./SearchWidget";

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[2.5rem] overflow-hidden min-h-[600px] flex flex-col justify-end">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqwgn4DcV8egT9rkTOOrmFnpDV1V_stcXO8LhyeRxZCHTRoC3nQaqfc0gxSpYs-EUGxtZREnSfDq1jDfDFVtFPin-wSVHIJnx4SxryxCDpdDurriuuNpv_akhi5a3VAITLetwOYXv_q-lQqLHBomTyrEvmhVdy0yIdEbiWp3zN_fvOyEolwHZQKlH-CUOHArpL_yTI65grUyXw2BekjhkdchGv9A6dXDJKacFK7whEQTq1TaPZG01YszT-87L8OlJ5MjORv8ONEGwq"
            alt="Sleek modern silver sports car driving on an urban highway at dusk"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 p-6 md:p-12 lg:p-16 w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 tracking-tight">
            Drive the City <br />
            <span className="text-[#fea90b]">Your Way</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl font-light">
            Premium cars. Instant booking. Zero hassle. Experience the freedom
            of modern mobility.
          </p>
          <SearchWidget />
        </div>
      </div>
    </section>
  );
}
