import Image from "next/image";

interface ReviewsSectionProps {
  rating: number;
  reviews: number;
}

const sampleReviews = [
  {
    name: "James M.",
    ago: "2 days ago",
    text: "Fantastic car! The pickup process was smooth and the car was clean and fully charged. Highly recommend for anyone visiting LA.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFsSPBc48SGf6mfUnx84XENO4Fi7HBMHPHJqDAYrtUS_vQEnNzFpFMAK6FhWx0so5keqPVpeRrBAa5aKoyP4VW4j6GrF3fAwFDKyOk9JcMiUqK_8vLpZtpnS-iqDDPnx_Cr_WsTupBefM1RWCinw7MT-2sH6S7qVExWmlkquAL4GoyX0tIWNowkdm1VWC8sJ9x59orADeqjJ0BgHCOGEVbFQ1eahPotPZeOcJVx2jrnV9EvpS9iVYDf8-4vt451cJXXRMutf_YGm82",
  },
  {
    name: "Sarah K.",
    ago: "1 week ago",
    text: "Super easy booking experience. The car was immaculate and the autopilot made highway driving a breeze. Will definitely rent again!",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyNJo6vkGC05EvlOE5NgV1L9iWWvUn6C0wQazXzGvBfYSUhrM3qnZkAvbwCNCt0W3eWEidf6ywdfw09RHWJ_aNkzdVICcHjutHSe8r4PLLrGHIz1vvPP9zZfa4QsOdUZPl5DBhHeKAspMAd0gtkMDf17rIXIZEqujq9WssOJ1fq_J-tGCYS9ibGpGfDlAESten_bEbYkkp3mWCgSQZJIL7COQwanQy859dGV0q5HYMLbBXtyHwrhRwAx9aVdTxJrUJNPXn_AUiZ-WC",
  },
];

export default function ReviewsSection({ rating, reviews }: ReviewsSectionProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-[2rem] p-6 sm:p-8 border border-slate-100 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-4xl font-bold text-slate-900 dark:text-white">
              {rating}
            </span>
            <div className="flex text-[#fea90b] text-sm">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
              <span
                className="material-symbols-outlined text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star_half
              </span>
            </div>
          </div>
          <div className="h-10 w-px bg-slate-200 dark:bg-slate-600 mx-2" />
          <div>
            <p className="text-slate-900 dark:text-white font-bold">{reviews} Reviews</p>
            <p className="text-slate-500 text-sm">From verified renters</p>
          </div>
        </div>
        <button className="text-[#fea90b] font-bold hover:underline text-sm">
          View all
        </button>
      </div>

      {/* Review Items */}
      <div className="space-y-4">
        {sampleReviews.map((review) => (
          <div
            key={review.name}
            className="flex gap-4 items-start pb-4 border-b border-slate-100 dark:border-slate-700 last:border-0 last:pb-0"
          >
            <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0 relative">
              <Image src={review.avatar} alt={review.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
                <span className="text-xs text-slate-400">{review.ago}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                {review.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
