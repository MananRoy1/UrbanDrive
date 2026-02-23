interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group p-8 rounded-[2rem] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-[#fea90b]/50 hover:shadow-xl hover:shadow-[#fea90b]/5 transition-all duration-300">
      <div className="w-14 h-14 bg-[#fea90b]/10 rounded-full flex items-center justify-center text-[#fea90b] mb-6 group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
