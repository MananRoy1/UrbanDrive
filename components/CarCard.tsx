import Image from "next/image";

interface CarCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
}

export default function CarCard({
  name,
  description,
  price,
  imageUrl,
  imageAlt,
}: CarCardProps) {
  return (
    <div className="group relative rounded-[2rem] overflow-hidden bg-[#f8f7f5] dark:bg-gray-800 h-[400px] cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105 z-0"
      />
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-gray-300 text-sm font-medium">{description}</p>
          </div>
          <div className="bg-[#fea90b] text-gray-900 font-bold px-4 py-2 rounded-full text-sm whitespace-nowrap">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}
