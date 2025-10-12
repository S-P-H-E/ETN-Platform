import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import CourseActions from "@/components/course-actions"

export default async function ShortCoursePage({ params }: { params: Promise<{ course: string }> }) {
    const resolvedParams = await params
    
    const course = await prisma.courses.findUnique({
        where: {
            id: resolvedParams.course
        }
    })
    
    if (!course) return notFound()

    return (
        <>
            {/* Hero Section */}
            <div className="bg-[var(--foreground)] w-full h-[80dvh] relative">
                <div className="absolute p-20 text-[var(--background)] flex flex-col justify-end gap-6 size-full z-10">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h1 className="text-5xl font-semibold">{course.name}</h1>
                            <p className="text-xl w-3xl mt-4">{course.description}</p>
                            <p className="text-lg mt-2 opacity-80">{course.type === 'long' ? '6 months' : '6 weeks'}</p>
                        </div>
                    </div>
                    <CourseActions courseId={course.id} courseName={course.name} coursePrice={course.price} />
                </div>
                <div className="absolute bg-gradient-to-t from-black to-transparent size-full"/>
                <div className="absolute bg-gradient-to-b from-black/90 to-transparent w-full h-40"/>
                <img className="size-full object-cover" src={course.coverImage} alt={course.name} />
            </div>

            {/* Content Sections */}
            <div className="px-10 py-20">
                <div className="max-w-4xl mx-auto">
                    <article className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-semibold mb-6">What you'll learn</h2>
                        <p className="text-[var(--description)] mb-8 leading-relaxed">
                            This focused {course.type === 'long' ? '6-month' : '6-week'} program will teach you essential core concepts and terminology that you can apply immediately. You'll learn practical, real-world use cases and master safety and best practices that are crucial for success. Our quick implementation strategies ensure you can start using your new skills right away.
                        </p>
                        
                        <h3 className="text-2xl font-semibold mb-4">Key Learning Outcomes</h3>
                        <ul className="text-[var(--description)] mb-8 space-y-2">
                            <li>• Master core concepts and essential terminology</li>
                            <li>• Apply practical, real-world use cases immediately</li>
                            <li>• Understand and implement safety and best practices</li>
                            <li>• Learn quick implementation strategies for rapid deployment</li>
                            <li>• Develop essential skills for immediate professional use</li>
                        </ul>

                        <h2 className="text-3xl font-semibold mb-6">Course Format</h2>
                        <p className="text-[var(--description)] mb-6 leading-relaxed">
                            Our {course.type === 'long' ? '6-month comprehensive' : '6-week intensive'} program is designed for rapid skill acquisition. The self-paced learning format allows you to progress at your own speed while maintaining consistent momentum toward your learning goals.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">Program Structure</h3>
                        <ul className="text-[var(--description)] mb-8 space-y-2">
                            <li>• {course.type === 'long' ? '6 months' : '6 weeks'} of focused training</li>
                            <li>• {course.type === 'long' ? 'Comprehensive assessments' : 'Weekly assessments'} to track progress</li>
                            <li>• Professional certificate upon successful completion</li>
                            <li>• {course.type === 'long' ? 'Flexible learning schedule' : 'Self-paced learning'} with instructor support</li>
                            <li>• Practical exercises for hands-on experience</li>
                            <li>• {course.type === 'long' ? 'Extended support period' : 'Quick skill application'} opportunities</li>
                        </ul>

                        <h2 className="text-3xl font-semibold mb-6">About This Course</h2>
                        <p className="text-[var(--description)] mb-8 leading-relaxed">
                            {course.description} This program is perfect for busy professionals who need to quickly acquire essential skills without compromising on quality. Whether you're looking to enhance your current role or prepare for new opportunities, this course delivers practical knowledge you can apply immediately.
                        </p>
                    </article>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <Link href="/short" className="px-6 py-3 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105">Back to Short Courses</Link>
                        <Link href="/long" className="px-6 py-3 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105">View Long Courses</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
