import Image from "next/image";

interface BookingCardProps {
  id: string;
  carName: string;
  type: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: "pending" | "completed" | "cancelled" | "active";
  paymentStatus: "unpaid" | "paid" | "refunded";
}

export default function BookingCard({
  carName,
  type,
  imageUrl,
  startDate,
  endDate,
  totalPrice,
  status,
  paymentStatus,
}: BookingCardProps) {
  const statusColors = {
    pending:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
    completed:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
    cancelled:
      "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400",
    active: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  };

  const paymentStatusColors = {
    unpaid:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
    paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
    refunded:
      "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400",
  };

  return (
    <div className="group bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Car Image */}
        <div className="relative w-full md:w-48 h-32 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
          <Image
            src={imageUrl}
            alt={carName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {carName}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                {type}
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${statusColors[status]}`}
            >
              {status}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Pick-up
              </p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {startDate}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Return
              </p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {endDate}
              </p>
            </div>
          </div>

          <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50 dark:border-slate-700/50">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                ${totalPrice}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                Total Paid
              </span>
            </div>
            {/* <Link
              href={`/cars/${slug}`}
              className="text-sm font-bold text-[#fea90b] hover:text-amber-600 transition-colors flex items-center gap-1 group/link"
            >
              View Details
              <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link> */}
            <div className="">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${paymentStatusColors[paymentStatus]}`}
              >
                {paymentStatus}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
