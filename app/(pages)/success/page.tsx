import Link from "next/link";

export default function Success() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-semibold text-gray-900 mb-2">Payment Successful!</h1>
                    <p className="text-gray-600">
                        Thank you for your purchase. Your courses have been added to your account and you'll receive a confirmation email shortly.
                    </p>
                </div>
                
                <div className="space-y-3">
                    <Link 
                        href="/"
                        className="w-full bg-[var(--foreground)] text-[var(--background)] py-3 rounded-lg font-semibold block hover:bg-gray-800 transition-colors"
                    >
                        Continue Learning
                    </Link>
                    <Link 
                        href="/long"
                        className="w-full border border-[var(--border)] text-[var(--foreground)] py-3 rounded-lg font-semibold block hover:bg-gray-50 transition-colors"
                    >
                        Explore More Courses
                    </Link>
                </div>
            </div>
        </div>
    )
}