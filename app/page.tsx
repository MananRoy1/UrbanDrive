import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import PopularFleetSection from "@/components/PopularFleetSection";
import PromoBannerSection from "@/components/PromoBannerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ValuePropsSection />
        <PopularFleetSection />
        <PromoBannerSection />
      </main>
      <Footer />
    </>
  );
}
