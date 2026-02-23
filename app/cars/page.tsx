// import React from 'react'

// const page = () => {
//     return (
//         <div className='grid grid-cols-9 mt-32 mx-6 gap-4'>
//             <div className='bg-gray-100 col-span-2 h-full w-full border-r border-gray-200 mr-4'>
//                 <h1 className='text-2xl font-bold ml-6'>Filters</h1>
//             </div>
//             <div className='col-span-7 flex justify-between'>
//                 <div>
//                     <h1 className='text-2xl font-bold'>Find Your Drive</h1>
//                     <p className='text-gray-500'>X Cars Available</p>
//                 </div>

//                 <div className='flex items-center gap-2'>
//                     <h1 className='text-gray-500'>Sort by: </h1>
//                     <select name="" id="" className='rounded-full bg-gray-200 text-black p-2 px-2'>
//                         <option value="">Price: Low to High</option>
//                         <option value="">Price: High to Low</option>
//                     </select>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default page

import FilterSidebar from "@/components/listings/FilterSidebar";
import ListingsGridHeader from "@/components/listings/ListingsGridHeader";
import CarsGrid from "@/components/listings/CarsGrid";
import Pagination from "@/components/listings/Pagination";

export const metadata = {
  title: "All Cars — UrbanDrive",
  description: "Browse our full fleet of premium rental cars.",
};

export default function CarsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="bg-[#f8f7f5] dark:bg-[#231c0f] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
      <main className="flex-grow max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        {/* Sidebar */}
        <FilterSidebar />

        {/* Main Content */}
        <section className="flex-1 min-w-0">
          <ListingsGridHeader />
          <CarsGrid searchParams={searchParams} />
          <Pagination totalPages={3} />
        </section>
      </main>
    </div>
  );
}
