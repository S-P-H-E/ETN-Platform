import Link from "next/link"
import { getCoursesByType } from "@/lib/data"
import CourseCard from "@/components/course-card"

export default async function LongCourses() {
    const longCourses = getCoursesByType("long")

    // Fallback data if no courses exist
    const fallbackCourses = [
        {
            id: "long-1",
            name: "Advanced Agriculture",
            description: "Comprehensive crop and soil management from planning to harvest",
            coverImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1000&auto=format&fit=crop", 
            price: 599,
            type: "long" as const
        },
        {
            id: "long-2",
            name: "Entrepreneurship Program", 
            description: "From idea validation to sustainable business operations",
            coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
            price: 799,
            type: "long" as const
        },
        {
            id: "long-3",
            name: "Healthcare Assistant",
            description: "Patient care, ethics, and clinical support fundamentals",
            coverImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1000&auto=format&fit=crop",
            price: 699,
            type: "long" as const
        },
        {
            id: "long-4",
            name: "Early Childhood Development",
            description: "Child-centered pedagogy and classroom practice",
            coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
            price: 649,
            type: "long" as const
        }
    ]

    const displayCourses = longCourses.length > 0 ? longCourses : fallbackCourses

    return (
        <div className="px-4 md:px-10 pt-20 md:pt-32 pb-10 md:pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8 md:mb-12">
                        <div className="mb-4 md:mb-0">
                            <h1 className="text-2xl md:text-4xl font-semibold">Long Courses</h1>
                            <p className="text-[var(--description)] mt-2 text-sm md:text-base">Explore our in-depth, career-building programs.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                            <Link 
                                href="/" 
                                className="px-3 md:px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105 text-sm md:text-base"
                            >
                                Back to Home
                            </Link>
                            <Link 
                                href="/short" 
                                className="px-3 md:px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105 text-sm md:text-base"
                            >
                                Short Courses
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {displayCourses.map((course) => (
                            <CourseCard key={course.id} data={course} />
                        ))}
                    </div>
                </div>
            </div>
    )
}