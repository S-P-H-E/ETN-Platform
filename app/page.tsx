import Card from "@/components/hero/card";
import Summary from "@/components/hero/summary";
import CourseCard from "@/components/course-card";
import Lenis from 'lenis'
import ReactLenis from "lenis/react";
import { IoIosArrowRoundForward, IoMdFlower } from "react-icons/io";
import clsx from 'clsx'
import { RiFlowerFill } from "react-icons/ri";
import { FaHandshakeSimple, FaSuitcase } from "react-icons/fa6";
import { prisma } from "@/lib/prisma";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/nav";
import Link from "next/link";

export default async function Home() {
  const featuredCourse = await prisma.courses.findFirst({
    where: {
      featured: true
    }
  })

  const shortCourses = await prisma.courses.findMany({
    where: {
      type: "short"
    },
    take: 3
  })

  const longCourses = await prisma.courses.findMany({
    where: {
      type: "long"
    },
    take: 3
  })

  // Debug logging
  console.log("Short courses:", shortCourses.length)
  console.log("Long courses:", longCourses.length)

  // Fallback data for testing if no courses exist
  const fallbackShortCourses = [
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
    }
  ]

  const fallbackLongCourses = [
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
    }
  ]

  const displayShortCourses = shortCourses.length > 0 ? shortCourses : fallbackShortCourses
  const displayLongCourses = longCourses.length > 0 ? longCourses : fallbackLongCourses

  // Fallback data if no featured course
  const data = featuredCourse || {
    id: "garden-course",
    name: "Garden Course",
    description: "Learn the essentials of gardening — from soil preparation and planting to watering, pruning, and harvesting. This course will give you the skills to grow healthy plants, create a thriving garden, and enjoy the beauty of nature at home.",
    coverImage: "https://images.unsplash.com/photo-1618935810018-dd4adbb64b78?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 299,
    type: "long" as const
  }

  const stats = [
    {
      icon: <RiFlowerFill className="mb-5" size={40}/>,
      number: "74%",
      description: "Landed New Jobs"
    },
    {
      icon: <FaSuitcase className="mb-5" size={40}/>,
      number: "1.2K+",
      description: "Started Freelancing"
    },
    {
      icon: <FaHandshakeSimple className="mb-5" size={40}/>,
      number: "84%",
      description: "Expanded Networks"
    },
  ]

  return (
    <>
      <Navbar />
      
      <ReactLenis root />

      {data && <Card data={data}/>}
      {/* Stats */}
      <div className="p-10 flex gap-20 w-fit mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-20">
            <div className="flex flex-col items-center justify-center">
              {s.icon}
              <h1 className="text-6xl font-semibold">{s.number}</h1>
              <p>{s.description}</p>
            </div>
            <div className={clsx(i === stats.length-1 ? "hidden" : "h-20 w-0.5 bg-[var(--border)]")}/>
          </div>
        ))}
      </div>
      <Summary />

      {/* Short Courses Section */}
      {displayShortCourses.length > 0 && (
        <div className="px-10 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Short Courses</h2>
              <p className="text-[var(--description)] text-lg">Quick learning opportunities to boost your skills</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayShortCourses.map((course) => (
                <CourseCard key={course.id} data={course} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/short" className="inline-flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                View All Short Courses
                <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Long Courses Section */}
      {displayLongCourses.length > 0 && (
        <div className="px-10 py-20 bg-[var(--secondary)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Long Courses</h2>
              <p className="text-[var(--description)] text-lg">Comprehensive programs for deep learning and career advancement</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayLongCourses.map((course) => (
                <CourseCard key={course.id} data={course} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/long" className="inline-flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                View All Long Courses
                <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Certificate */}
      <div className="px-10">
        <div className="bg-[var(--secondary)] rounded-4xl w-full flex flex-col justify-center items-center space-y-10 p-25">
          <h1 className="text-6xl text-center w-[800px] font-semibold">You'll get a certificate about successful graduation</h1>
          <Link href="/long" className="bg-blur border border-[var(--border)] flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer w-fit">
              <h1>Explore Courses</h1>
              <IoIosArrowRoundForward />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}