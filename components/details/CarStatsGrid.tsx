interface Stat {
  icon: string;
  label: string;
  value: string;
}

interface CarStatsGridProps {
  stats: Stat[];
}

export default function CarStatsGrid({ stats }: CarStatsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats?.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-100 dark:border-slate-700 gap-2"
        >
          <span className="material-symbols-outlined text-[#fea90b] text-3xl">
            {stat.icon}
          </span>
          <div className="text-center">
            <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">
              {stat.label}
            </p>
            <p className="text-slate-900 dark:text-white font-semibold">
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
