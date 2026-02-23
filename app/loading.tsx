"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-background-light">
      <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-[#fea90b] animate-spin" />
      <p className="text-[#fea90b] text-sm tracking-widest uppercase">
        Loading...
      </p>
    </div>
  );
}
