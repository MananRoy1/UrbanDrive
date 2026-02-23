export default function HostCard() {
  return (
    <div className="mt-6 bg-white dark:bg-slate-800 rounded-[1.5rem] p-4 flex items-center gap-4 border border-slate-100 dark:border-slate-700">
      <div className="size-12 rounded-full bg-[#fe4708]/10 flex items-center justify-center text-[#fe4708] font-bold text-lg shrink-0">
        UD
      </div>
      <div>
        <p className="text-xs text-slate-400 font-bold uppercase">Managed by</p>
        <p className="font-bold text-slate-900 dark:text-white">UrbanDrive Fleet</p>
      </div>
      <div className="ml-auto">
        <span className="material-symbols-outlined text-slate-400">verified_user</span>
      </div>
    </div>
  );
}
