"use client"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useCartItems } from "@/lib/cart"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { FaPlus, FaMinus } from "react-icons/fa6"

interface Course {
  id: string
  name: string
  description: string
  price: number
  coverImage: string
  type: 'long' | 'short'
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const cartItems = useCartItems()
  const [courses, setCourses] = useState<Course[]>([])
  const [selectedCourses, setSelectedCourses] = useState<Set<string>>(new Set())
  const [quantities, setQuantities] = useState<Map<string, number>>(new Map())
  const [loading, setLoading] = useState(true)
  const [feesCalculated, setFeesCalculated] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })

  useEffect(() => {
    const fetchCourses = async () => {
      // Get course IDs that should be pre-selected
      const urlItems = searchParams.get('items')
      let selectedIds: string[] = []

      if (urlItems) {
        if (urlItems.includes(',')) {
          selectedIds = urlItems.split(',').filter(id => id.trim() !== '')
        } else {
          selectedIds = [urlItems]
        }
      } else {
        selectedIds = cartItems.map(item => item.id)
      }

      // Fetch ALL courses
      const response = await fetch('/api/courses/all')

      if (response.ok) {
        const allCourses = await response.json()
        setCourses(allCourses)
        // Pre-select courses from URL/cart
        if (selectedIds.length > 0) {
          setSelectedCourses(new Set(selectedIds))
          // Initialize quantities from cart items, or default to 1
          const initialQuantities = new Map<string, number>()
          selectedIds.forEach(id => {
            const cartItem = cartItems.find(item => item.id === id)
            initialQuantities.set(id, cartItem?.quantity || 1)
          })
          setQuantities(initialQuantities)
        }
      } else {
        setCourses([])
      }
      setLoading(false)
    }

    fetchCourses()
  }, [searchParams, cartItems])

  const handleCheckboxChange = (courseId: string) => {
    setSelectedCourses(prev => {
      const newSet = new Set(prev)
      if (newSet.has(courseId)) {
        newSet.delete(courseId)
        // Remove quantity when unselected
        setQuantities(prevQty => {
          const newQty = new Map(prevQty)
          newQty.delete(courseId)
          return newQty
        })
      } else {
        newSet.add(courseId)
        // Initialize quantity to 1 when selected
        setQuantities(prevQty => {
          const newQty = new Map(prevQty)
          newQty.set(courseId, 1)
          return newQty
        })
      }
      return newSet
    })
    setFeesCalculated(false)
  }

  const handleQuantityChange = (courseId: string, change: number) => {
    setQuantities(prev => {
      const newQty = new Map(prev)
      const currentQty = newQty.get(courseId) || 1
      const newQuantity = Math.min(10, Math.max(1, currentQty + change))
      newQty.set(courseId, newQuantity)
      return newQty
    })
    setFeesCalculated(false)
  }

  const calculateDiscount = (courseCount: number) => {
    if (courseCount === 1) return 0
    if (courseCount === 2) return 0.05
    if (courseCount === 3) return 0.10
    return 0.15
  }

  const selectedCoursesList = courses.filter(c => selectedCourses.has(c.id))
  const subtotal = selectedCoursesList.reduce((sum, course) => {
    const quantity = quantities.get(course.id) || 1
    return sum + (course.price * quantity)
  }, 0)
  const courseCount = selectedCoursesList.length
  const discountRate = calculateDiscount(courseCount)
  const discount = subtotal * discountRate
  const totalBeforeVAT = subtotal - discount
  const vat = totalBeforeVAT * 0.15
  const total = totalBeforeVAT + vat

  const handleCalculateFees = () => {
    if (selectedCoursesList.length === 0) {
      toast.error("Please select at least one course")
      return
    }
    setFeesCalculated(true)
    toast.success("Fees calculated successfully")
  }

  const handleSubmitQuota = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in your name, email and phone")
      return
    }

    if (!feesCalculated) {
      toast.error("Please calculate fees first")
      return
    }

    // Store invoice data for success page
    const invoiceData = {
      customerName: formData.name,
      email: formData.email,
      phone: formData.phone,
      courses: selectedCoursesList.map(c => ({
        name: c.name,
        price: c.price,
        quantity: quantities.get(c.id) || 1,
        type: c.type
      })),
      subtotal,
      discount,
      discountRate,
      totalBeforeVAT,
      vat,
      total,
      invoiceNumber: `INV-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      date: new Date().toLocaleDateString('en-ZA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    localStorage.setItem('invoiceData', JSON.stringify(invoiceData))

    toast.promise<{ success: boolean }>(
      () => new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true })
        }, 2000)
      }),
      {
        loading: "Submitting quota...",
        success: () => {
          setTimeout(() => {
            router.push('/success')
          }, 500)
          return "Quota submitted successfully"
        },
        error: "Failed to submit quota",
      }
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-checkout-loaded="true">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--foreground)] mx-auto mb-4"></div>
          <p className="text-[var(--description)]">Loading...</p>
        </div>
      </div>
    )
  }

  if (courses.length === 0 && !loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4 text-white">No courses selected</h1>
          <Link href="/" className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition-transform">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-20 md:pt-32 pb-8 md:pb-12" data-checkout-loaded="true">
      <div className="max-w-4xl mx-auto px-4 md:px-10">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-white">Request Quota</h1>
        
        {/* User Information */}
        <div className="bg-[var(--foreground)] rounded-lg border border-[var(--border)] p-4 md:p-6 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[var(--background)]">Your Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--background)]">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-[var(--description)]"
                placeholder="John Doe"
              />
            </div>
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
            <div>
              <label className="block text-sm font-medium mb-2 text-[var(--background)]">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-[var(--description)]"
                placeholder="+27 82 123 4567"
              />
            </div>
          </div>
        </div>

        {/* Courses List */}
        <div className="bg-[var(--foreground)] rounded-lg border border-[var(--border)] p-4 md:p-6 mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[var(--background)]">Courses</h2>
          
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className={`flex items-start gap-4 p-4 border border-[var(--border)] rounded-lg ${selectedCourses.has(course.id) ? 'bg-[#0a0a0a]' : 'opacity-60'}`}>
                <div className="flex items-center pt-2">
                  <input
                    type="checkbox"
                    checked={selectedCourses.has(course.id)}
                    onChange={() => handleCheckboxChange(course.id)}
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[var(--secondary)] rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={course.coverImage} 
                    alt={course.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-[var(--background)] mb-1">{course.name}</h3>
                  <p className="text-sm text-[var(--description)] mb-2 line-clamp-2">{course.description}</p>
                  <p className="text-lg font-semibold text-[var(--background)] mb-2">R{course.price}</p>
                  {selectedCourses.has(course.id) && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[var(--description)] mr-2">Quantity:</span>
                      <button
                        onClick={() => handleQuantityChange(course.id, -1)}
                        className="p-1 rounded transition-transform cursor-pointer hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
                        disabled={(quantities.get(course.id) || 1) <= 1}
                      >
                        <FaMinus className="text-xs text-[var(--background)]" />
                      </button>
                      <span className="px-2 py-1 border border-[var(--border)] rounded text-sm font-medium min-w-[2rem] text-center text-[var(--background)]">
                        {quantities.get(course.id) || 1}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(course.id, 1)}
                        className="p-1 rounded transition-transform cursor-pointer hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
                        disabled={(quantities.get(course.id) || 1) >= 10}
                      >
                        <FaPlus className="text-xs text-[var(--background)]" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Breakdown */}
        {feesCalculated && (
          <div className="bg-[var(--foreground)] rounded-lg border border-[var(--border)] p-4 md:p-6 mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[var(--background)]">Pricing Breakdown</h2>
            <div className="space-y-3">
              {/* Items summary */}
              <div className="text-[var(--background)]">
                <p className="font-medium mb-1">Items</p>
                <div className="space-y-1">
                  {selectedCoursesList.map(c => {
                    const qty = quantities.get(c.id) || 1
                    const lineTotal = c.price * qty
                    return (
                      <div key={c.id} className="flex items-center justify-between text-sm">
                        <span>{c.name} x {qty}</span>
                        <span>R{lineTotal.toFixed(2)}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
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
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleCalculateFees}
            className="w-full sm:w-auto bg-[var(--background)] text-[var(--foreground)] px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform cursor-pointer"
          >
            Calculate Fee
          </button>
          <button
            onClick={handleSubmitQuota}
            disabled={!feesCalculated || selectedCoursesList.length === 0}
            className={`w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-lg transition-transform ${
              feesCalculated && selectedCoursesList.length > 0
                ? 'bg-white text-black hover:scale-105 cursor-pointer'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            Submit Quota
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
}
