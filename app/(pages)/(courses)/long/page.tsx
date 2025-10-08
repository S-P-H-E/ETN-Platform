"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Course = {
    id: string,
    name: string,
    description: string
}

const longCourses: Course[] = [
    { id: "101", name: "Advanced Agriculture", description: "Comprehensive crop and soil management." },
    { id: "102", name: "Entrepreneurship Program", description: "From idea to sustainable business." },
    { id: "103", name: "Healthcare Assistant", description: "Patient care and clinical support fundamentals." },
    { id: "104", name: "Early Childhood Development", description: "Foundations of child-centered education." },
]

export default function LongCourses() {
    const router = useRouter()
    return (
        <div className="px-10 py-20">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-semibold">Long Courses</h1>
                        <p className="text-[var(--description)] mt-2">Explore our in-depth, career-building programs.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => router.back()} 
                            className="px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105"
                        >
                            Back
                        </button>
                        <Link 
                            href="/short" 
                            className="px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105"
                        >
                            Short Courses
                        </Link>
                    </div>
                </div>

                <div className="mt-10 rounded-3xl border border-[var(--border)] p-8">
                    {longCourses.map((course, i) => (
                        <Link
                            key={course.id}
                            href={`/long/${course.id}`}
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