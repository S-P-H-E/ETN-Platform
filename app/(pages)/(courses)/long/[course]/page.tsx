import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import CourseActions from "@/components/course-actions"

export default async function LongCoursePage({ params }: { params: Promise<{ course: string }> }) {
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
                <div className="absolute p-4 md:p-20 text-[var(--background)] flex flex-col justify-end gap-4 md:gap-6 size-full z-10">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h1 className="text-2xl md:text-5xl font-semibold leading-tight">{course.name}</h1>
                            <p className="text-sm md:text-xl max-w-3xl mt-2 md:mt-4">{course.description}</p>
                            <p className="text-sm md:text-lg mt-2 opacity-80">{course.type === 'long' ? '6 months' : '6 weeks'}</p>
                        </div>
                    </div>
                    <CourseActions courseId={course.id} courseName={course.name} coursePrice={course.price} />
                </div>
                <div className="absolute bg-gradient-to-t from-black to-transparent size-full"/>
                <div className="absolute bg-gradient-to-b from-black/90 to-transparent w-full h-40"/>
                <img className="size-full object-cover" src={course.coverImage} alt={course.name} />
            </div>

            {/* Content Sections */}
            <div className="px-4 md:px-10 py-10 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <article className="prose prose-lg max-w-none">
                        <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-6">What you'll learn</h2>
                        <p className="text-[var(--description)] mb-8 leading-relaxed">
                            This comprehensive {course.type === 'long' ? '6-month' : '6-week'} program will equip you with advanced theory and practical skills. You'll master hands-on projects that build real-world expertise, developing career-ready competencies that employers value. Our curriculum covers industry best practices and real-world applications, ensuring you're prepared for immediate success in your chosen field.
                        </p>
                        
                        <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">Key Learning Outcomes</h3>
                        <ul className="text-[var(--description)] mb-8 space-y-2">
                            <li>• Master advanced theoretical concepts and their practical applications</li>
                            <li>• Complete hands-on projects that mirror real-world scenarios</li>
                            <li>• Develop career-ready skills that employers actively seek</li>
                            <li>• Understand and implement industry best practices</li>
                            <li>• Build a professional portfolio showcasing your capabilities</li>
                        </ul>

                        <h2 className="text-3xl font-semibold mb-6">Course Format</h2>
                        <p className="text-[var(--description)] mb-6 leading-relaxed">
                            Our {course.type === 'long' ? '6-month intensive' : '6-week focused'} program combines structured learning with practical application. The curriculum is designed to maximize your learning potential through a blend of theoretical knowledge and hands-on experience.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4">Program Structure</h3>
                        <ul className="text-[var(--description)] mb-8 space-y-2">
                            <li>• {course.type === 'long' ? '6 months' : '6 weeks'} of comprehensive training</li>
                            <li>• {course.type === 'long' ? 'Capstone project' : 'Final assessment'} demonstrating mastery</li>
                            <li>• Professional certificate upon successful completion</li>
                            <li>• {course.type === 'long' ? 'Expert mentorship and guidance' : 'Instructor support'}</li>
                            <li>• Portfolio development for career advancement</li>
                            <li>• {course.type === 'long' ? 'Peer collaboration and networking' : 'Interactive learning sessions'}</li>
                        </ul>

                        <h2 className="text-3xl font-semibold mb-6">About This Course</h2>
                        <p className="text-[var(--description)] mb-8 leading-relaxed">
                            {course.description} This program is designed for individuals who are serious about advancing their skills and career prospects. Whether you're looking to enter a new field or enhance your existing expertise, this course provides the foundation and advanced knowledge you need to succeed.
                        </p>
                    </article>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <Link href="/long" className="px-6 py-3 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105">Back to Long Courses</Link>
                        <Link href="/short" className="px-6 py-3 rounded-full border border-[var(--border)] cursor-pointer transition-transform hover:scale-105">View Short Courses</Link>
                    </div>
                </div>
            </div>
        </>
    )
}