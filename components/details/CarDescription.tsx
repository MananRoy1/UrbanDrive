interface CarDescriptionProps {
  description: string;
  features: string[];
}

export default function CarDescription({ description, features }: CarDescriptionProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-6 sm:p-8 border border-slate-100 dark:border-slate-700">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
        <span className="material-symbols-outlined text-[#fea90b]">description</span>
        Description
      </h3>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {features.map((feature) => (
          <span
            key={feature}
            className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}
