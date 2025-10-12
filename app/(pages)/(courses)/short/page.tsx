import Link from "next/link"
import { prisma } from "@/lib/prisma";
import CourseCard from "@/components/course-card";

export default async function ShortCourses() {
    const shortCourses = await prisma.courses.findMany({
        where: {
            type: "short"
        }
    })

    // Fallback data if no courses exist
    const fallbackCourses = [
        {
            id: "short-1",
            name: "First Aid Basics",
            description: "Learn essential first aid techniques for emergencies",
            coverImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1000&auto=format&fit=crop",
            price: 99,
            type: "short" as const
        },
        {
            id: "short-2", 
            name: "Digital Marketing",
            description: "Master social media and online advertising strategies",
            coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
            price: 149,
            type: "short" as const
        },
        {
            id: "short-3",
            name: "Basic Bookkeeping",
            description: "Track income, expenses, and cash flow effectively",
            coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
            price: 199,
            type: "short" as const
        }
    ]

    const displayCourses = shortCourses.length > 0 ? shortCourses : fallbackCourses

    return (
        <div className="px-4 md:px-10 pt-20 md:pt-32 pb-10 md:pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8 md:mb-12">
                        <div className="mb-4 md:mb-0">
                            <h1 className="text-2xl md:text-4xl font-semibold">Short Courses</h1>
                            <p className="text-[var(--description)] mt-2 text-sm md:text-base">Quick, practical courses to upskill fast.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                            <Link 
                                href="/" 
                                className="px-3 md:px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105 text-sm md:text-base"
                            >
                                Back to Home
                            </Link>
                            <Link 
                                href="/long" 
                                className="px-3 md:px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105 text-sm md:text-base"
                            >
                                Long Courses
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