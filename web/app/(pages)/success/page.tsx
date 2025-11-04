"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { generateInvoicePDF, InvoiceData } from "@/lib/invoice"

export default function Success() {
    const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null)
    const [hasGenerated, setHasGenerated] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem('invoiceData')
        if (stored) {
            const data = JSON.parse(stored) as InvoiceData
            setInvoiceData(data)
        }
    }, [])

    const handleGeneratePDF = () => {
        if (invoiceData) {
            generateInvoicePDF(invoiceData)
            setHasGenerated(true)
        }
    }

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
                        <p className="text-[var(--description)] mb-4">
                            We've received your quota request and will get back to you shortly. Our team will review your request and contact you soon.
                        </p>
                        {invoiceData && (
                            <div className="mt-4 p-4 bg-[#0a0a0a] rounded-lg border border-[var(--border)] text-left">
                                <p className="text-sm text-[var(--description)] mb-2">Invoice Number: <span className="text-white font-semibold">{invoiceData.invoiceNumber}</span></p>
                                <p className="text-sm text-[var(--description)] mb-2">Total: <span className="text-white font-semibold">R{invoiceData.total.toFixed(2)}</span></p>
                                <p className="text-sm text-[var(--description)]">Date: <span className="text-white">{invoiceData.date}</span></p>
                            </div>
                        )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        {invoiceData && (
                            <button
                                onClick={handleGeneratePDF}
                                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer"
                            >
                                {hasGenerated ? "Download Invoice Again" : "Download Invoice PDF"}
                            </button>
                        )}
                        <Link 
                            href="/"
                            className="border border-[var(--border)] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer"
                        >
                            Explore More Courses
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}