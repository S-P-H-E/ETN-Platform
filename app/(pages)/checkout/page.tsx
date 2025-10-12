"use client"
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useCartItems } from "@/lib/cart";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Course {
  id: string;
  name: string;
  price: number;
  coverImage: string;
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cartItems = useCartItems();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    billingAddress: "",
    city: "",
    zipCode: "",
    country: ""
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Get course IDs from URL params or cart
        const urlItems = searchParams.get('items');
        let courseIds: string[] = [];

        if (urlItems) {
          // Handle both single item and multiple items from cart
          if (urlItems.includes(',')) {
            // Multiple items from cart checkout (comma-separated)
            courseIds = urlItems.split(',').filter(id => id.trim() !== '');
            console.log('Multiple items from cart:', courseIds);
          } else {
            // Single item from "Buy Now"
            courseIds = [urlItems];
            console.log('Single item from Buy Now:', courseIds);
          }
        } else {
          // Fallback to cart items if no URL params
          courseIds = cartItems.map(item => item.id);
          console.log('Fallback to cart items:', courseIds);
        }

        console.log('Final courseIds to fetch:', courseIds);

        // Fetch course details from database
        const response = await fetch('/api/courses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ids: courseIds })
        });

        if (response.ok) {
          const fetchedCourses = await response.json();
          setCourses(fetchedCourses);
        } else {
          // Fallback to cart items if API fails
          setCourses(cartItems.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price || 299,
            coverImage: ""
          })));
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        // Fallback to cart items
        setCourses(cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price || 299,
          coverImage: ""
        })));
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [searchParams, cartItems]);

  const calculateDiscount = (courseCount: number) => {
    if (courseCount === 1) return 0;
    if (courseCount === 2) return 0.05;
    if (courseCount === 3) return 0.10;
    return 0.15; // 4+ courses
  };

  const subtotal = courses.reduce((sum, course) => sum + course.price, 0);
  const courseCount = courses.length;
  const discountRate = calculateDiscount(courseCount);
  const discount = subtotal * discountRate;
  const totalBeforeVAT = subtotal - discount;
  const vat = totalBeforeVAT * 0.15; // 15% VAT
  const total = totalBeforeVAT + vat;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      router.push('/success');
    }, 1000);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--foreground)] mx-auto mb-4"></div>
          <p className="text-[var(--description)]">Loading checkout...</p>
        </div>
      </div>
    );
  }

  if (courses.length === 0 && !loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4 text-white">Your cart is empty</h1>
          <Link href="/" className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition-transform">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-20 md:pt-32 pb-8 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Order Summary */}
          <div className="bg-[var(--foreground)] rounded-lg border border-[var(--border)] p-4 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[var(--background)]">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              {courses.map((course) => (
                <div key={course.id} className="flex items-center gap-4 p-4 border border-[var(--border)] rounded-lg">
                  <div className="w-16 h-16 bg-[var(--secondary)] rounded-lg overflow-hidden">
                    <img 
                      src={course.coverImage} 
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[var(--background)]">{course.name}</h3>
                    <p className="text-sm text-[var(--description)]">Online Course</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[var(--background)]">R{course.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Breakdown */}
            <div className="border-t border-[var(--border)] pt-6 space-y-3">
              <div className="flex justify-between text-[var(--background)]">
                <span>Subtotal</span>
                <span>R{subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-400">
                  <span>Discount ({Math.round(discountRate * 100)}%)</span>
                  <span>-R{discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-[var(--background)]">
                <span>Subtotal after discount</span>
                <span>R{totalBeforeVAT.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[var(--background)]">
                <span>VAT (15%)</span>
                <span>R{vat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-[var(--border)] pt-3 text-[var(--background)]">
                <span>Total</span>
                <span>R{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-[var(--foreground)] rounded-lg border border-[var(--border)] p-4 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[var(--background)]">Payment Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--background)]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-[var(--description)]"
                  placeholder="your@email.com"
                />
              </div>

              {/* Card Information */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--background)]">Card Information</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3 text-white placeholder-[var(--description)]"
                  placeholder="1234 5678 9012 3456"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-[var(--description)]"
                    placeholder="MM/YY"
                  />
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-[var(--description)]"
                    placeholder="CVV"
                  />
                </div>
              </div>

              {/* Cardholder Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--background)]">Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-[var(--description)]"
                  placeholder="John Doe"
                />
              </div>

              {/* Billing Address */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--background)]">Billing Address</label>
                <input
                  type="text"
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3 text-white placeholder-[var(--description)]"
                  placeholder="123 Main Street"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-[var(--description)]"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-[var(--description)]"
                    placeholder="ZIP Code"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--background)]">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
              >
                Complete Purchase - R{total.toFixed(2)}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                🔒 Your payment information is secure and encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Loading checkout...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
