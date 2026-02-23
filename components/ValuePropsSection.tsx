import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "bolt",
    title: "Instant Booking",
    description:
      "Book your car in seconds with our seamless app. No paperwork, no lines.",
  },
  {
    icon: "verified_user",
    title: "Insurance Included",
    description:
      "Drive with peace of mind. Comprehensive coverage is included in every booking.",
  },
  {
    icon: "event_busy",
    title: "Free Cancellation",
    description:
      "Plans change. Cancel for free up to 24 hours before your trip starts.",
  },
  {
    icon: "support_agent",
    title: "24/7 Support",
    description:
      "We're always here to help. Reach our support team anytime, anywhere.",
  },
];

export default function ValuePropsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose UrbanDrive
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
          We&apos;re reimagining car rental for the modern city dweller. Simple,
          transparent, and built around you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
