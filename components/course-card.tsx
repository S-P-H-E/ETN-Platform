"use client"
import { addItemToCart } from "@/lib/cart";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

type CourseCardProps = {
  data: {
    id: string;
    name: string;
    description: string;
    coverImage: string;
    price: number;
    type: "short" | "long";
  };
};

export default function CourseCard({ data }: CourseCardProps) {
  const item = {
    id: parseInt(data.id),
    quantity: 1,
    name: data.name
  };

  const duration = data.type === "short" ? "6 weeks" : "6 months";
  const category = data.type === "short" ? "Quick Learn" : "Deep Dive";

  return (
    <Link href={`/long/${data.id}`} className="block">
      <div className="w-full h-96 relative rounded-2xl shadow-lg cursor-pointer">
        <div className="absolute p-6 text-[var(--background)] flex flex-col justify-end gap-4 size-full z-10">
          {/* Plus Icon - Top Right */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItemToCart(item);
            }}
            className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-colors z-20 cursor-pointer"
          >
            <FaPlus className="text-sm" />
          </button>

          {/* Title */}
          <h3 className="text-xl font-semibold">{data.name}</h3>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed">
            {data.description}
          </p>
        </div>
        <div className="absolute bg-gradient-to-t from-black to-transparent size-full"/>
        <img className="size-full object-cover rounded-2xl" src={data.coverImage} alt={data.name} />
      </div>
    </Link>
  );
}
