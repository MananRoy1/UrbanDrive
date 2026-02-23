import { supabase } from "@/lib/supabase";

export default async function DashboardStats() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  const { data: bookings } = await supabase
    .from("bookings")
    .select("*")
    .eq("user_id", user?.id);

  const stats = [
    {
      label: "Total Rentals",
      value: bookings?.length || 0,
      icon: "calendar_month",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      label: "Total Distance",
      value: "2,450 km",
      icon: "distance",
      color:
        "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
      label: "Eco Savings",
      value: "450 kg CO2",
      icon: "eco",
      color:
        "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      label: "Reward Points",
      value: "1,250",
      icon: "stars",
      color:
        "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white dark:bg-slate-800/40 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex flex-col gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color}`}
            >
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
