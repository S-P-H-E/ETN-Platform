import Link from "next/link"
import { notFound } from "next/navigation"

type Course = {
    id: string,
    name: string,
    description: string,
    duration: string,
}

const dataById: Record<string, Course> = {
    "201": { id: "201", name: "First Aid Basics", description: "Essential emergency response skills for everyday situations.", duration: "2 weeks" },
    "202": { id: "202", name: "Basic Bookkeeping", description: "Track income, expenses, and cash flow with confidence.", duration: "3 weeks" },
    "203": { id: "203", name: "Intro to Gardening", description: "Soil preparation, planting, and plant care fundamentals.", duration: "2 weeks" },
    "204": { id: "204", name: "Customer Service", description: "Communication and service excellence fundamentals.", duration: "2 weeks" },
}

export default function ShortCoursePage({ params }: { params: { course: string } }) {
    const course = dataById[params.course]
    if (!course) return notFound()

    return (
        <div className="px-10 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-semibold">{course.name}</h1>
                        <p className="text-[var(--description)] mt-2">#{course.id} • {course.duration}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href="/short" className="px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105">Back to Short Courses</Link>
                        <Link href="/long" className="px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105">View Long Courses</Link>
                    </div>
                </div>

                <div className="mt-10 rounded-3xl border border-[var(--border)] p-12">
                    <p className="text-lg leading-relaxed">{course.description}</p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-[var(--border)] p-6">
                            <h3 className="font-semibold mb-2">What you'll learn</h3>
                            <ul className="text-sm space-y-1 text-[var(--description)]">
                                <li>• Core concepts and terminology</li>
                                <li>• Practical, real-world use cases</li>
                                <li>• Safety and best practices</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-[var(--border)] p-6">
                            <h3 className="font-semibold mb-2">Format</h3>
                            <ul className="text-sm space-y-1 text-[var(--description)]">
                                <li>• {course.duration} total</li>
                                <li>• Weekly assessments</li>
                                <li>• Certificate on completion</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default async function LongId({ params }: {params: Promise<{ course: string }>}) {
    const { course } = await params

    return (
        <div>
            <h1>ID: {course}</h1>
        </div>
    )
}