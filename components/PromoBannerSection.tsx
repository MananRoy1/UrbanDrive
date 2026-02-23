import Image from "next/image";

export default function PromoBannerSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[3rem] overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjAGoGIWZZwTa9HbF5Yhe7Eh580-n_4yzh3DAh5YBvPseBI1hVxOt8JXSlHpCmIl2FZzcfE83QtDOUFco_XXeThEPrAsp0ExDXkPIyOGNhsAfz2GyaXQWrvT4K-4SY9BOXBassGhL3SnoxHykvFbLpxjez2mfPg3-qI64n7iqrCNEWPJ9vf_WPhYVbbECwH4qG-AX9Ivf3s_lW0uneXv7tf2mHu5i2QvzkYlsH_xcPOcdr_hmgQVfKRVDUwF6BAtyYbli1-hqqC7km"
            alt="Blurred city lights at night from a moving car"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Get 15% off your first weekend trip
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Sign up today and experience the ultimate driving comfort for
              less. Use code URBAN15.
            </p>
            <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
              Claim Offer
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
