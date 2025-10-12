import Link from "next/link"
import { prisma } from "@/lib/prisma";
import CourseCard from "@/components/course-card";
import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer";

export default async function LongCourses() {
    const longCourses = await prisma.courses.findMany({
        where: {
            type: "long"
        }
    })

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
        <>
            <Navbar />
            <div className="px-10 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-start justify-between gap-4 mb-12">
                        <div>
                            <h1 className="text-4xl font-semibold">Long Courses</h1>
                            <p className="text-[var(--description)] mt-2">Explore our in-depth, career-building programs.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link 
                                href="/" 
                                className="px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105"
                            >
                                Back to Home
                            </Link>
                            <Link 
                                href="/short" 
                                className="px-4 py-2 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105"
                            >
                                Short Courses
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayCourses.map((course) => (
                            <CourseCard key={course.id} data={course} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}