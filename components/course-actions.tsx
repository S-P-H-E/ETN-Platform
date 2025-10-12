"use client"
import { addItemToCart } from "@/lib/cart";
import Link from "next/link";

type CourseActionsProps = {
  courseId: string;
  courseName: string;
  coursePrice?: number;
};

export default function CourseActions({ courseId, courseName, coursePrice }: CourseActionsProps) {
  const item = {
    id: courseId,
    quantity: 1,
    name: courseName,
    price: coursePrice || 299
  };

  return (
    <div className="space-x-2">
      <Link 
        href={`/checkout?items=${courseId}`}
        className="bg-[var(--background)] cursor-pointer text-[var(--foreground)] px-6 py-2 rounded-full font-semibold inline-block"
      >
        Buy Now
      </Link>
      <button 
        onClick={() => addItemToCart(item)} 
        className="bg-[var(--background)] cursor-pointer text-[var(--foreground)] px-6 py-2 rounded-full font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}
