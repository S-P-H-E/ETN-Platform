"use client"
import { addItemToCart } from "@/lib/cart"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

type CourseActionsProps = {
  courseId: string;
  courseName: string;
  coursePrice?: number;
};

export default function CourseActions({ courseId, courseName, coursePrice }: CourseActionsProps) {
  const router = useRouter()
  const item = {
    id: courseId,
    quantity: 1,
    name: courseName,
    price: coursePrice || 299
  };

  const handleBuyNow = () => {
    toast.promise<{ loaded: boolean }>(
      () => new Promise((resolve) => {
        router.push(`/checkout?items=${courseId}`)
        
        // Listen for checkout page to finish loading
        const checkLoaded = () => {
          const interval = setInterval(() => {
            if (document.querySelector('[data-checkout-loaded="true"]')) {
              clearInterval(interval)
              resolve({ loaded: true })
            }
          }, 100)
          
          // Fallback: resolve after 2 seconds if page doesn't signal
          setTimeout(() => {
            clearInterval(interval)
            resolve({ loaded: true })
          }, 2000)
        }
        
        // Wait a bit for navigation to start
        setTimeout(checkLoaded, 100)
      }),
      {
        loading: "Processing...",
        success: () => "Checkout created.",
        error: "Failed to load checkout.",
      }
    )
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2 sm:space-y-0">
      <button 
        onClick={handleBuyNow}
        className="bg-[var(--background)] cursor-pointer text-[var(--foreground)] px-4 md:px-6 py-2 rounded-full font-semibold inline-block text-center text-sm md:text-base"
      >
        Order Now
      </button>
      <button 
        onClick={() => addItemToCart(item)} 
        className="bg-[var(--background)] cursor-pointer text-[var(--foreground)] px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base"
      >
        Add to Cart
      </button>
    </div>
  );
}
