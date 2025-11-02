import Link from "next/link";

export default function Success() {
    return (
        <div className="min-h-screen bg-black pt-20 md:pt-32 pb-8 md:pb-12">
            <div className="max-w-2xl mx-auto px-4 md:px-10">
                <div className="bg-[var(--foreground)] rounded-lg border border-[var(--border)] p-6 md:p-8 text-center">
                    <div className="mb-6">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">Quota Received!</h1>
                        <p className="text-[var(--description)]">
                            We've received your quota request and will get back to you shortly. Our team will review your request and contact you soon.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link 
                            href="/"
                            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                        >
                            Continue Learning
                        </Link>
                        <Link 
                            href="/long"
                            className="border border-[var(--border)] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                        >
                            Explore More Courses
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}