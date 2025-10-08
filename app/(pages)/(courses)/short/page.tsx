"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Course = {
    id: string,
    name: string,
    description: string
}

const shortCourses: Course[] = [
    { id: "201", name: "First Aid Basics", description: "Essential emergency response skills." },
    { id: "202", name: "Basic Bookkeeping", description: "Track income, expenses, and cash flow." },
    { id: "203", name: "Intro to Gardening", description: "Soil, planting, and plant care 101." },
    { id: "204", name: "Customer Service", description: "Communication and service excellence fundamentals." },
]

export default function ShortCourses() {
    const router = useRouter()
    return (
        <div className="px-10 py-20">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-semibold">Short Courses</h1>
                        <p className="text-[var(--description)] mt-2">Quick, practical courses to upskill fast.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => router.back()} 
                            className="px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105"
                        >
                            Back
                        </button>
                        <Link 
                            href="/long" 
                            className="px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105"
                        >
                            Long Courses
                        </Link>
                    </div>
                </div>

                <div className="mt-10 rounded-3xl border border-[var(--border)] p-8">
                    {shortCourses.map((course, i) => (
                        <Link
                            key={course.id}
                            href={`/short/${course.id}`}
                            className="block py-5 border-b border-[var(--border)] last:border-b-0 transition-transform hover:scale-[1.01]"
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <h2 className="text-xl font-medium">{course.name}</h2>
                                    <p className="text-sm text-[var(--description)] mt-1">{course.description}</p>
                                </div>
                                <span className="text-sm text-[var(--description)]">#{course.id}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}